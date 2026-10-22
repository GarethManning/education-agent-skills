# Changelog

## v3.1.0 — 22 October 2026

- Publish a strict portable Agent Skills download alongside canonical rich sources; all 165 portable skills passed the pinned official reference validator and discovery-prompt generator. This establishes format compatibility, not certification of teaching effectiveness.
- Complete 37 targeted educational revisions and reorganize optional examples in eight guides (two overlap), preserving stable IDs, paths and input/output interfaces. All 165 skills were screened; primary-source review depth varied.
- Improve privacy and correctness boundaries, Codex installation, resource preservation and MCP runtime/package safety; restore the full Learning Target prompt previously truncated by nested fences.
- Move supported distribution to GitHub downloads, source plugins/manual use and local/self-hosted MCP. The library-operated public MCP service is retiring; public signup is no longer offered and existing remote-only users need to migrate.
- Bump source plugins to 2.2.0 for cache refresh. Root/MCP npm versions, registry schema 2.0 and portable profile version remain unchanged. Git-triggered Vercel deployments are disabled in the repository config; GitHub/local distribution needs no hosted deployment.
- The reviewed build receipt records 75 MCP, 21 library and 15 export tests passing, with one hosted-only smoke skipped. These are local checks; model activation, hosted release and learning outcomes were not tested. See the [release note](docs/releases/v3.1.0.md) and [dated build receipt](docs/audits/agent-skills-build-verification-2026-10-22.md).

Historical version labels below describe project milestones. Their earlier “Agent Skills 1.0” and automatic-activation wording does not establish a versioned upstream standard, certification or current client behaviour; use the [current developer guide](docs/AGENT_SKILLS.md) for that contract.

## v3.0 — May 2026

- Renamed from `claude-education-skills` to `education-agent-skills`
- Added OpenAI Codex plugin support (`.codex-plugin/plugin.json`)
- Added `AGENTS.md` for coding agent repo guidance
- README restructured for model-agnostic positioning — works with Claude, Codex, and any Agent Skills-compatible tool
- 131 skills across 17 domains

## v2.0 — April 2026

The library became compliant with the **Agent Skills 1.0 open standard**. What this meant in practice:

- **One-command install** — no manual setup, no copy-pasting prompts
- **Progressive disclosure** — skill metadata loads first; full skill content loads only when activated, keeping context lean
- **Auto-activation** — skills trigger when your conversation matches their description, without explicit invocation
- **Machine-readable registry** — `registry.json` indexes all skills with descriptions, tags, chaining metadata, and domain grouping for programmatic consumption
- **Backward compatible** — the MCP server, direct prompt use, and all existing workflows continued to work unchanged
