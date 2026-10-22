"""Portable-profile parity and defensive filesystem tests (no client/model calls)."""
import importlib.util
import json
import shutil
import tempfile
import unittest
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location("standard_export", ROOT / "scripts/export-standard-skills.py")
exporter = importlib.util.module_from_spec(spec)
spec.loader.exec_module(exporter)


class LibraryExport(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.temp = tempfile.TemporaryDirectory()
        cls.output = Path(cls.temp.name) / "profile"
        cls.receipt = exporter.export(ROOT, cls.output)

    @classmethod
    def tearDownClass(cls):
        cls.temp.cleanup()

    def test_all_165_metadata_bodies_licenses_and_string_headers(self):
        paths = sorted(ROOT.glob("skills/*/*/SKILL.md"))
        self.assertEqual(len(paths), 165)
        self.assertEqual(len([p for p in self.output.iterdir() if p.is_dir()]), 165)
        for path in paths:
            metadata, body, raw = exporter.read_source(path)
            folder = self.output / metadata["name"]
            rich = json.loads((folder / "references/education.json").read_text())
            self.assertEqual(rich["metadata"], metadata)
            self.assertEqual(rich["source"]["sha256"], exporter.digest(raw))
            header, portable_body, _ = exporter.read_source(folder / "SKILL.md")
            self.assertEqual(portable_body, exporter.POINTER + body)
            self.assertEqual(header["description"], metadata["description"])
            self.assertEqual(header["license"], "CC-BY-SA-4.0")
            self.assertTrue(all(type(v) is str for v in header["metadata"].values()))
            self.assertEqual((folder / "LICENSE").read_bytes(), (ROOT / "LICENSE").read_bytes())

    def test_repeat_export_identical(self):
        before = (self.output / exporter.MARKER).read_bytes()
        exporter.export(ROOT, self.output)
        self.assertEqual(before, (self.output / exporter.MARKER).read_bytes())
        self.assertEqual(self.receipt["files"], exporter.output_files(self.output))

    def test_codex_policy_equivalence_and_manifest_paths(self):
        explicit = []
        for source in ROOT.glob("skills/*/*/SKILL.md"):
            metadata, _, _ = exporter.read_source(source)
            sidecar = source.parent / "agents/openai.yaml"
            portable = self.output / metadata["name"] / "agents/openai.yaml"
            if metadata["disable-model-invocation"]:
                explicit.append(metadata["name"])
                self.assertEqual(yaml.safe_load(sidecar.read_text()), {"policy": {"allow_implicit_invocation": False}})
                self.assertEqual(portable.read_bytes(), sidecar.read_bytes())
            else:
                self.assertFalse(sidecar.exists())
                self.assertFalse(portable.exists())
        self.assertEqual(len(explicit), 12)
        manifest = json.loads((ROOT / ".codex-plugin/plugin.json").read_text())
        self.assertEqual(set(manifest["skills"]), {"./" + str(p.relative_to(ROOT)) for p in (ROOT / "skills").iterdir() if p.is_dir()})
        marketplace = json.loads((ROOT / ".agents/plugins/marketplace.json").read_text())
        self.assertEqual(marketplace["plugins"][0]["source"]["path"], "./")

    def test_standalone_copy_outside_repository(self):
        with tempfile.TemporaryDirectory() as temp:
            target = Path(temp) / "panel-review"
            shutil.copytree(self.output / "panel-review", target)
            metadata, _, _ = exporter.read_source(target / "SKILL.md")
            rich = json.loads((target / metadata["metadata"]["education.metadata"]).read_text())
            self.assertEqual(rich["metadata"]["skill_id"], "professional-learning/panel-review")
            self.assertTrue((target / "LICENSE").is_file())
            self.assertFalse(any(p.is_symlink() for p in target.rglob("*")))
            self.assertFalse(yaml.safe_load((target / "agents/openai.yaml").read_text())["policy"]["allow_implicit_invocation"])


class ExportFixtures(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.root = Path(self.temp.name) / "source"
        self.skill = self.root / "skills/domain/example"
        self.skill.mkdir(parents=True)
        (self.root / "LICENSE").write_text("CC-BY-SA-4.0 fixture\n")
        self.path = self.skill / "SKILL.md"
        self.path.write_bytes(b'---\nname: example\ndescription: Example skill\nskill_id: domain/example\nnested: {items: [one, two], enabled: true}\n---\n\r\nExact body\r\n')
        self.output = Path(self.temp.name) / "output"

    def tearDown(self):
        self.temp.cleanup()

    def test_untracked_resources_and_executable_scripts_copied(self):
        for directory in exporter.RESOURCE_DIRS:
            resource = self.skill / directory / "nested/file.txt"
            resource.parent.mkdir(parents=True)
            resource.write_bytes(b"untracked resource\x00\xff")
        script = self.skill / "scripts/run.sh"
        script.write_text("#!/bin/sh\nexit 0\n")
        script.chmod(0o755)
        exporter.export(self.root, self.output)
        for directory in exporter.RESOURCE_DIRS:
            self.assertEqual((self.output / "example" / directory / "nested/file.txt").read_bytes(), b"untracked resource\x00\xff")
        self.assertEqual((self.output / "example/scripts/run.sh").stat().st_mode & 0o777, 0o755)

    def test_source_hash_tracks_uncommitted_body_and_resource_edits(self):
        first = exporter.export(self.root, self.output)
        self.path.write_bytes(self.path.read_bytes() + b"working edit\n")
        second = exporter.export(self.root, self.output)
        self.assertNotEqual(first["source_sha256"], second["source_sha256"])
        (self.skill / "assets").mkdir()
        (self.skill / "assets/new.txt").write_text("new")
        third = exporter.export(self.root, self.output)
        self.assertNotEqual(second["source_sha256"], third["source_sha256"])

    def test_malformed_headers_rejected(self):
        for content in (b'---js\nname: example\n---\nbody', b'---\nname: [\n---\nbody',
                        b'---\nname: example\nname: example\n---\nbody',
                        b'---\nname: !!python/object:bad {}\n---\nbody',
                        b'---\nname: &name example\ndescription: *name\n---\nbody',
                        b'---\nname: example\ndescription: Example\nskill_id: x\ndate: 2026-10-22\n---\nbody'):
            with self.subTest(content=content):
                self.path.write_bytes(content)
                with self.assertRaises(exporter.ExportError):
                    exporter.export(self.root, self.output)
                self.assertFalse(self.output.exists())

    def test_duplicate_flattened_names_and_ids_rejected(self):
        other = self.root / "skills/other/example"
        other.mkdir(parents=True)
        shutil.copyfile(self.path, other / "SKILL.md")
        with self.assertRaisesRegex(exporter.ExportError, "Duplicate"):
            exporter.export(self.root, self.output)

    def test_traversal_names_rejected(self):
        self.path.write_bytes(self.path.read_bytes().replace(b"name: example", b"name: ../../escape"))
        with self.assertRaisesRegex(exporter.ExportError, "Unsafe"):
            exporter.export(self.root, self.output)

    def test_symlink_resource_escape_rejected(self):
        resource = self.skill / "references"
        resource.mkdir()
        (resource / "escape").symlink_to(self.root / "LICENSE")
        with self.assertRaisesRegex(exporter.ExportError, "Symlinks"):
            exporter.export(self.root, self.output)

    def test_symlink_skill_and_directory_rejected(self):
        other = self.root / "skills/domain/linked"
        other.symlink_to(self.skill, target_is_directory=True)
        with self.assertRaisesRegex(exporter.ExportError, "Symlink"):
            exporter.export(self.root, self.output)

    def test_generated_metadata_collision_rejected(self):
        (self.skill / "references").mkdir()
        (self.skill / "references/education.json").write_text("{}")
        with self.assertRaisesRegex(exporter.ExportError, "Reserved"):
            exporter.export(self.root, self.output)

    def test_unowned_output_is_never_overwritten(self):
        self.output.mkdir()
        sentinel = self.output / "personal.txt"
        sentinel.write_text("keep")
        with self.assertRaisesRegex(exporter.ExportError, "ownership"):
            exporter.export(self.root, self.output)
        self.assertEqual(sentinel.read_text(), "keep")

    def test_owned_output_with_user_edits_is_never_overwritten(self):
        exporter.export(self.root, self.output)
        file = self.output / "example/SKILL.md"
        file.write_text("personal edits")
        with self.assertRaisesRegex(exporter.ExportError, "modified"):
            exporter.export(self.root, self.output)
        self.assertEqual(file.read_text(), "personal edits")

    def test_output_cannot_replace_source(self):
        for target in (self.root, self.root.parent, self.skill, self.output):
            if target == self.output:
                target.symlink_to(self.root, target_is_directory=True)
            with self.subTest(target=target), self.assertRaises(exporter.ExportError):
                exporter.export(self.root, target)
        self.assertTrue(self.path.is_file())


if __name__ == "__main__":
    unittest.main()
