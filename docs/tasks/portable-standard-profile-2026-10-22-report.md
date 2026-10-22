# Portable profile and Codex installation report — 22 October 2026

The deterministic portable exporter now produces all 165 skills without changing any canonical SKILL.md, registry, bundle or accepted MCP runtime file.
All 15 new export tests pass, including complete metadata/body parity, license/resource/policy copying, standalone copying, deterministic repeats and malformed/collision/traversal/overwrite defenses.
The pinned official reference CLI validates 165/165 exports and includes 165/165 in `to-prompt`; the existing local suite reports 21 passed with its hosted-only test skipped.
In isolated storage, Codex 0.163.0-alpha.11.1 successfully registers, installs, lists, removes and reinstalls the plugin, whose cache contains all 165 unchanged source skills, 20 domain paths and exactly 12 explicit-only policy sidecars.
The guide documents source versus portable use, cache refresh and invocation limits; no model activation, real-client installation, commit, push, publish or deployment was performed.

## Changes

- Added `scripts/export-standard-skills.py`, `scripts/validate-standard-skills.py`, `tests/test_standard_export.py` and `requirements/standard-validation.txt`.
- Generated ignored `dist/agent-skills/<slug>/` output with standard-only frontmatter, string `education.*` metadata, full original metadata in `references/education.json`, source content hashes, LICENSE and the unchanged original body after a deterministic metadata pointer.
- Resource copying includes newly authorized untracked files under references/scripts/assets/agents, preserving executable bits. Rejects all symlinks, invalid or duplicate YAML keys, non-JSON values, traversal names, duplicate names/IDs and reserved metadata collisions. Existing output is replaceable only with a valid exporter receipt and unchanged recorded files; arbitrary directories/user changes are refused.
- Fixed marketplace `source.path` to `./`; left both plugin domain arrays unchanged. Added only the 12 required `agents/openai.yaml` policies, with `allow_implicit_invocation: false`; no policy files on the remaining 153 skills.
- CI retains existing project/registry/bundle/MCP checks, adds export roundtrip and pinned official validation, makes bundle checks depend on validation, declares read-only repository permissions and pins actions by verified upstream SHA.
- Rewrote `docs/CODEX.md` around actual CLI registration plus installation, tested counts, fresh-session guidance, source/portable selection, and remove/reinstall cache updates.

## Commands and results

| Command/check | Result |
| --- | --- |
| `/tmp/education-skills-audit-20261022/venv/bin/python -m unittest discover -s tests -p test_standard_export.py -q` | 15 passed, 3.837 seconds |
| Same interpreter, `scripts/export-standard-skills.py` twice | 165 each; identical receipt and every recorded output content hash |
| Same interpreter, `scripts/validate-standard-skills.py` | skills-ref 0.1.0: validate 165/165; to-prompt 165/165 |
| `/tmp/education-skills-audit-20261022/venv/bin/skills-ref validate <exported-skill>` for every exported directory | 165/165 exit 0 |
| Same reference CLI, `to-prompt <all 165 exported directories>` | exit 0; XML parsed and counted at 165 |
| `npm test -- --reporter=line` | 21 passed, 1 existing hosted-only skip, 1.5 seconds |
| Same venv interpreter, `scripts/validate-skills.py` | 165 validated, 0 errors, 4 existing warnings |
| `python3 scripts/validate-registry.py` | valid: 165 skills, 20 domains |
| `codex --version`, relevant plugin/marketplace/add/list help | version and exact command syntax inspected |
| Isolated `codex plugin marketplace add <repo> --json` | exit 0; marketplaceName education-agent-skills |
| Isolated `codex plugin add education-agent-skills@education-agent-skills --json` | exit 0; installed version 2.1.0 |
| Isolated `codex plugin list --marketplace education-agent-skills --json` | exit 0; installed=true, enabled=true |
| Isolated `codex plugin remove education-agent-skills@education-agent-skills`, then add/list again | all exit 0 |
| Installed cache inspection | 165 SKILL.md bytes equal to checkout; 20 domain paths; 12 policies; no .env/auth.json/credentials.json filenames |
| `git ls-remote` action tags | checkout v4.2.2 11bd71901bbe5b1630ceea73d27597364c9af683; setup-python v5.6.0 a26af69be951a213d495a4c3e4e4022e16d87065; setup-node v4.4.0 49933ea5288caeca8642d1e84afbd3f7d6820020 |
| Workflow parse/permission/pin assertions and scoped `git diff --check` | passed |

Reference source under `/tmp/education-skills-audit-20261022/standard/skills-ref` was inspected before invoking its API/CLI: parser, validator, prompt generator, CLI and package definition. CI pins upstream `69ef37e9424c0a7ea9dd2293b559e43ec8176379` and runtime dependency versions; project source validation remains a separate check.

Baseline input content SHA-256: `e0225e3db70e4ca90f934972d972ad88d5f9acafc06761f3c88c04aaee6a330b`.
Repeat export receipt SHA-256: `077fdb6ebf4556c7a9035c1143120a0accd3da0b29cf102523f08ab240d1674b`.
The source receipt covers all source SKILL.md bytes, included resource bytes and LICENSE; it includes working edits instead of equating evaluated content with Git HEAD. Later authorized content changes require a fresh export/validation run.

## Limits and cleanup

- The initial system `python3 scripts/validate-skills.py` attempt lacked PyYAML; rerunning with the provided tool venv passed. No system interpreter packages were changed.
- The open format has no universal explicit-only invocation control. Codex sidecars encode that client's control; original flags survive in rich metadata. Generic clients may ignore them. Format validation is not proof of portable policy enforcement, educational certification, model choice or actual activation.
- The CLI test used fresh process-specific CODEX_HOME, XDG config/cache/data directories and no copied credentials. No paid or hosted model execution occurred, and no actual model discovery/explicit invocation trial or desktop reload was claimed.
- CI YAML and component commands were checked locally; GitHub Actions was not executed remotely. Existing MCP runtime tests were not repeated because that independently accepted packet was protected. The hosted-only root test remains unexercised without its configured endpoint.
- Isolated client storage and cache were removed after recording results. No servers, database stacks or background processes remain from this packet. Generated portable output remains ignored and reviewable locally.
- No subagents were spawned; no source-content edits, commits, pushes, releases, real-client changes or database operations occurred. This packet is ready for the coordinator's independent review and final combined integration.
