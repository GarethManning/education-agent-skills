# Using Education Agent Skills in OpenAI Codex

The library can run from local files without the hosted MCP server. Choose the full source plugin or copy selected skills; no paid model run is needed to install files.

## Full source plugin

Clone [the repository](https://github.com/GarethManning/education-agent-skills) into your usual repository folder, then register **and install** it:

```bash
cd /absolute/path/to/education-agent-skills
codex plugin marketplace add "$PWD"
codex plugin add education-agent-skills@education-agent-skills
codex plugin list --marketplace education-agent-skills --json
```

Registration makes the marketplace available; `plugin add` installs its plugin. The marketplace's local `source.path` is `./`, relative to the repository root. `.codex-plugin/plugin.json` retains an array of **20 domain directories**, each containing skill folders; it does not point at one flattened `./skills/` directory.

Tested with **codex-cli 0.163.0-alpha.11.1** on 22 October 2026 using a fresh, isolated `CODEX_HOME` and config/cache directories, without copying credentials or running a model. Registration, installation and listing succeeded; listing reported `installed: true` and `enabled: true`. The installed cache contained all **165 skill files**, identical to the source, and **12 policy sidecars**. This verifies local packaging and installation, not model selection or activation behavior.

Start a new Codex session after installation or update. If your desktop client retains its old skill list, reload or restart it and start a new session. Session refresh and actual model invocation were not exercised by the isolated CLI check; client behavior can vary by version.

## Selected skills: extended source or portable profile

The canonical source is `skills/<domain>/<skill-name>/`. Its rich frontmatter includes education schemas, citations and vendor options. The plugin uses this source profile.

For clients requiring the open specification's restricted frontmatter, download the [v3.1.0 portable ZIP](https://github.com/GarethManning/education-agent-skills/releases/download/v3.1.0/education-agent-skills-portable-v3.1.0.zip). Extract it to find 165 folders under `agent-skills/` and an installation note. Copy the whole selected folder, for example:

```bash
mkdir -p ~/.codex/skills
cp -R agent-skills/spaced-practice-scheduler ~/.codex/skills/
```

Resolve an existing destination first; do not merge over an edited skill or add an extra nested folder. No Python build is needed for the download. Maintainers can instead generate the additive portable profile:

```bash
python3 -m venv /tmp/education-standard-venv
/tmp/education-standard-venv/bin/python -m pip install -r requirements/standard-validation.txt
/tmp/education-standard-venv/bin/python scripts/export-standard-skills.py
/tmp/education-standard-venv/bin/python scripts/validate-standard-skills.py
```

`dist/agent-skills/<skill-name>/` is generated and ignored by Git. Portable profile `education-agent-skills-portable-1` is a project format label, independent of the source schema and upstream specification versions. Its frontmatter contains `name`, `description`, `license` and string-valued `education.*` metadata. Complete original metadata lives in `references/education.json`; a body instruction points to it, followed by the original body preserved byte for byte. Every exported skill includes the repository's `LICENSE` and its local `references/`, `scripts/`, `assets/` and `agents/` resources when present. Keep the entire folder when copying a skill.

Example portable installation (replace with a skill you need):

```bash
mkdir -p ~/.codex/skills
cp -R dist/agent-skills/spaced-practice-scheduler ~/.codex/skills/
```

Alternatively copy `skills/memory-learning-science/spaced-practice-scheduler` as the extended source. In either case, the result should be `~/.codex/skills/spaced-practice-scheduler/SKILL.md`; avoid nesting domain folders inside that location. Resolve an existing destination before copying so the command does not silently create an extra nested folder.

The exporter rejects duplicate names/IDs, malformed metadata, traversal names, resource collisions and symlinks, including internal symlinks. It includes new untracked resources. It replaces only its own unmodified output, identified by a file-hash receipt; it refuses arbitrary directories or exports with user edits. Regenerate to a fresh `--output /path/to/new-profile` if you need to preserve an edited export. The receipt records input file hashes, including working edits and resources, rather than claiming that Git HEAD alone identifies the evaluated content.

The separate project validator checks extended sources. The official reference gate checks **only the portable export**, using [skills-ref 0.1.0 pinned at upstream commit 69ef37e9424c0a7ea9dd2293b559e43ec8176379](https://github.com/agentskills/agentskills/tree/69ef37e9424c0a7ea9dd2293b559e43ec8176379/skills-ref). Its parser accepts a narrower YAML subset than general YAML. Passing that reference tool establishes format compatibility, not educational certification or model behavior.

## Explicit-only invocation

Exactly 12 source skills have `disable-model-invocation: true`. Each has `agents/openai.yaml` with:

```yaml
policy:
  allow_implicit_invocation: false
```

These sidecars tell Codex to keep those skills available for explicit invocation while excluding implicit invocation. The other 153 skills have no such restriction. Use an explicit skill request, such as `$panel-review`, when you want an explicit-only workflow. The exporter copies these policies and preserves the original flag in rich metadata.

The open Agent Skills format has **no universal explicit-only control**. Other clients may ignore Codex sidecars and the preserved vendor flag. Do not assume that portable validation enforces invocation policy in every client; confirm that client's controls before installing explicit-only workflows there. The isolated test verified the policy files and counts, not a model choosing or declining a skill.

## Updating and troubleshooting

The source plugin version is 2.2.0 in release v3.1.0. A local plugin is installed into a cache. Updating the checkout alone does not prove that cache refreshed. After deliberately updating your clone, remove and reinstall the plugin, then check its listing and start a new session:

```bash
cd /absolute/path/to/education-agent-skills
git pull
codex plugin remove education-agent-skills@education-agent-skills
codex plugin add education-agent-skills@education-agent-skills
codex plugin list --marketplace education-agent-skills --json
```

For a Git-backed marketplace, `codex plugin marketplace upgrade` refreshes marketplace snapshots; still verify the installed plugin and refresh the session. For selected portable copies, download the current release or regenerate the profile and replace each entire installed folder, preserving any intentional local edits elsewhere first. For source copies, replace each folder from the updated source. Do not hand-edit generated exports as a second source tree.

If discovery appears absent, check that the plugin is installed and enabled, each configured domain directory exists in the installed cache, and selected copies contain `SKILL.md` directly inside their folder. Preserve `references/education.json` and `agents/openai.yaml` when present. A valid manifest or successful listing alone does not demonstrate that a running model has loaded a skill.
