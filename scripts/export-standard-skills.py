#!/usr/bin/env python3
"""Build the additive portable profile; never edit canonical skill files."""
import argparse
import hashlib
import json
import math
import re
import shutil
import tempfile
from pathlib import Path

import yaml

PROFILE = "education-agent-skills-portable-1"
MARKER = ".education-agent-skills-export.json"
POINTER = b"Read references/education.json for the complete source metadata, evidence, schemas and invocation flags before using this skill.\n"
RESOURCE_DIRS = ("references", "scripts", "assets", "agents")


class ExportError(ValueError):
    pass


class UniqueLoader(yaml.SafeLoader):
    pass


def unique_mapping(loader, node):
    result = {}
    for key, value in node.value:
        key = loader.construct_object(key)
        if not isinstance(key, str) or key in result:
            raise ExportError("YAML keys must be unique strings")
        result[key] = loader.construct_object(value)
    return result


UniqueLoader.add_constructor(yaml.resolver.BaseResolver.DEFAULT_MAPPING_TAG, unique_mapping)


def json_value(value):
    if value is None or type(value) in (str, bool, int):
        return
    if type(value) is float and math.isfinite(value):
        return
    if type(value) is list:
        for item in value:
            json_value(item)
        return
    if type(value) is dict and all(isinstance(k, str) for k in value):
        for item in value.values():
            json_value(item)
        return
    raise ExportError("Metadata must contain only finite JSON-compatible values")


def read_source(path):
    raw = path.read_bytes()
    match = re.match(rb"\A---\r?\n(.*?)^---[ \t]*(?:\r?\n|$)", raw, re.M | re.S)
    if not match:
        raise ExportError(f"{path}: expected plain YAML frontmatter")
    try:
        header = match[1].decode("utf-8")
        if any(isinstance(token, yaml.tokens.AliasToken) for token in yaml.scan(header)):
            raise ExportError("YAML aliases are unsupported")
        metadata = yaml.load(header, Loader=UniqueLoader)
        if not isinstance(metadata, dict):
            raise ExportError("Metadata must be a mapping")
        json_value(metadata)
    except (yaml.YAMLError, UnicodeError, TypeError) as error:
        raise ExportError(f"{path}: invalid YAML: {error}") from error
    return metadata, raw[match.end():], raw


def digest(data):
    return hashlib.sha256(data).hexdigest()


def json_bytes(value):
    return (json.dumps(value, ensure_ascii=False, sort_keys=True, indent=2, allow_nan=False) + "\n").encode()


def regular_files(directory):
    """Reject symlinks (including internal links), devices and path escapes."""
    for child in sorted(directory.iterdir()):
        if child.is_symlink():
            raise ExportError(f"Symlinks are unsupported: {child}")
        if child.is_dir():
            yield from regular_files(child)
        elif child.is_file():
            yield child
        else:
            raise ExportError(f"Not a regular resource: {child}")


def output_files(directory):
    return {str(path.relative_to(directory)): digest(path.read_bytes()) for path in regular_files(directory)
            if path != directory / MARKER}


def check_owned_output(output):
    if output.is_symlink():
        raise ExportError("Refusing symlink output")
    if not output.exists():
        return
    marker = output / MARKER
    if not output.is_dir() or marker.is_symlink() or not marker.is_file():
        raise ExportError("Refusing to replace output without exporter ownership receipt")
    try:
        receipt = json.loads(marker.read_text())
    except (ValueError, OSError) as error:
        raise ExportError("Invalid exporter ownership receipt") from error
    if receipt.get("profile") != PROFILE or receipt.get("files") != output_files(output):
        raise ExportError("Refusing to replace modified or unowned output files")


def export(root, output):
    root = Path(root).resolve()
    output = Path(output).absolute()
    # Resolve parents for containment checks, but retain a final symlink for rejection.
    output = output.parent.resolve() / output.name
    skills = root / "skills"
    if output == root or root.is_relative_to(output) or output.is_relative_to(skills):
        raise ExportError("Output must not replace the source tree")
    check_owned_output(output)
    if skills.is_symlink() or not skills.is_dir():
        raise ExportError("Expected a regular source skills directory")
    license_path = root / "LICENSE"
    if license_path.is_symlink() or not license_path.is_file():
        raise ExportError("Expected a regular source LICENSE")
    license_data = license_path.read_bytes()
    sources = {"LICENSE": digest(license_data)}
    records = []
    names = set()
    ids = set()
    for domain in sorted(skills.iterdir()):
        if domain.is_symlink():
            raise ExportError(f"Symlink source domain: {domain}")
        if not domain.is_dir():
            continue
        for folder in sorted(domain.iterdir()):
            if folder.is_symlink():
                raise ExportError(f"Symlink source skill: {folder}")
            path = folder / "SKILL.md"
            if not folder.is_dir() or not path.exists():
                continue
            if path.is_symlink():
                raise ExportError(f"Symlink SKILL.md: {path}")
            metadata, body, raw = read_source(path)
            name = metadata.get("name")
            description = metadata.get("description")
            skill_id = metadata.get("skill_id")
            if (not isinstance(name, str) or not re.fullmatch(r"[a-z0-9]+(?:-[a-z0-9]+)*", name)
                    or len(name) > 64 or name != folder.name):
                raise ExportError(f"Unsafe or mismatched skill name: {path}")
            if not isinstance(description, str) or not description.strip() or len(description) > 1024:
                raise ExportError(f"Invalid description: {path}")
            if not isinstance(skill_id, str) or not skill_id:
                raise ExportError(f"Missing source skill_id: {path}")
            if name in names or skill_id in ids:
                raise ExportError(f"Duplicate skill name or ID: {path}")
            names.add(name)
            ids.add(skill_id)
            source_path = str(path.relative_to(root))
            sources[source_path] = digest(raw)
            resources = {}
            for resource_dir in RESOURCE_DIRS:
                resource = folder / resource_dir
                if resource.is_symlink():
                    raise ExportError(f"Symlink resource: {resource}")
                if not resource.exists():
                    continue
                if not resource.is_dir():
                    raise ExportError(f"Expected resource directory: {resource}")
                for file in regular_files(resource):
                    relative = str(file.relative_to(folder))
                    if relative == "references/education.json":
                        raise ExportError(f"Reserved generated resource: {file}")
                    data = file.read_bytes()
                    resources[relative] = data
                    sources[str(file.relative_to(root))] = digest(data)
            records.append((name, metadata, body, source_path, digest(raw), resources))
    if not records:
        raise ExportError("No source skills found")
    output.parent.mkdir(parents=True, exist_ok=True)
    stage = Path(tempfile.mkdtemp(prefix=".education-skills-export-", dir=output.parent))
    try:
        for name, metadata, body, source_path, source_hash, resources in records:
            folder = stage / name
            (folder / "references").mkdir(parents=True)
            header = {
                "name": name, "description": metadata["description"], "license": "CC-BY-SA-4.0",
                "metadata": {"education.profile": PROFILE, "education.skill-id": metadata["skill_id"],
                             "education.source-path": source_path, "education.source-sha256": source_hash,
                             "education.metadata": "references/education.json"},
            }
            frontmatter = yaml.safe_dump(header, allow_unicode=True, sort_keys=False, default_flow_style=False, width=1000)
            (folder / "SKILL.md").write_bytes(b"---\n" + frontmatter.encode() + b"---\n" + POINTER + body)
            (folder / "references/education.json").write_bytes(json_bytes({
                "profile": PROFILE, "metadata": metadata,
                "source": {"path": source_path, "sha256": source_hash},
            }))
            (folder / "LICENSE").write_bytes(license_data)
            for relative, data in resources.items():
                target = folder / relative
                target.parent.mkdir(parents=True, exist_ok=True)
                target.write_bytes(data)
                # Preserve executable resource scripts without tracking volatile timestamps.
                target.chmod((root / Path(source_path).parent / relative).stat().st_mode & 0o777)
        receipt = {"profile": PROFILE, "skills": len(records),
                   "source_sha256": digest(json_bytes(sources)), "source_files": sources,
                   "files": output_files(stage)}
        (stage / MARKER).write_bytes(json_bytes(receipt))
        check_owned_output(output)
        if output.exists():
            shutil.rmtree(output)
        stage.rename(output)
    finally:
        if stage.exists():
            shutil.rmtree(stage)
    return receipt


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--source", type=Path, default=Path(__file__).resolve().parents[1])
    parser.add_argument("--output", type=Path)
    args = parser.parse_args()
    try:
        receipt = export(args.source, args.output or args.source / "dist/agent-skills")
    except (ExportError, OSError) as error:
        parser.exit(1, f"Export failed: {error}\n")
    print(f"Exported {receipt['skills']} skills; source SHA-256 {receipt['source_sha256']}")


if __name__ == "__main__":
    main()
