# Agent Skills Developer Guide

This document is for developers and AI builders who want to consume, orchestrate, or extend the Education Agent Skills Library programmatically.

---

## Source, standard and portable edition

[Agent Skills](https://agentskills.io/home) is an open folder format originally developed by Anthropic. The [specification](https://agentskills.io/specification) defines a `SKILL.md` with required `name` and `description`, Markdown instructions and optional resources. This independent library participates in that ecosystem; compatibility does not imply vendor affiliation or certification.

The canonical files at `skills/<domain>/<skill-name>/` retain rich project/vendor frontmatter: evidence, typed inputs and outputs, chaining hints and invocation flags. Existing source plugins and MCP use these extended files. **Source validation is a project check, not strict official-format validation.**

The generated `dist/agent-skills/<skill-name>/` edition contains only standard frontmatter fields: `name`, `description`, `license` and string-valued `metadata` with `education.*` keys. Complete original metadata is preserved under `metadata` in `references/education.json`, alongside source provenance. The original Markdown body follows a metadata pointer unchanged. Each folder includes `LICENSE` and its local `references/`, `scripts/`, `assets/` and `agents/` files when present. Copy the entire folder, not only `SKILL.md`.

The [integrated receipt](audits/agent-skills-build-verification-2026-10-22.md) records **165/165 portable skills passing `skills-ref` 0.1.0**, with 165/165 covered by official `to_prompt`. The tool/source is pinned at [agentskills/agentskills commit 69ef37e9424c0a7ea9dd2293b559e43ec8176379](https://github.com/agentskills/agentskills/tree/69ef37e9424c0a7ea9dd2293b559e43ec8176379/skills-ref). Its evaluated source/resource/licence SHA256 is `a2e71fa05cde2ea2ebccd875023ebb0368c11379beb1fe165c1e0debd12938dc`; the receipt identifies working content, not just Git HEAD. Later source edits need fresh export and validation.

### Download the portable edition

The [v3.1.0 release](https://github.com/GarethManning/education-agent-skills/releases/tag/v3.1.0) supplies [education-agent-skills-portable-v3.1.0.zip](https://github.com/GarethManning/education-agent-skills/releases/download/v3.1.0/education-agent-skills-portable-v3.1.0.zip). Extract it to find `agent-skills/` with 165 skill folders and an accompanying installation note. Copy each complete selected `agent-skills/<skill-name>/` folder into the client's documented skills directory; keep its metadata, licence, references and policies. Do not copy the outer container as a single skill or merge blindly over an existing edited folder. Consumers do not need the exporter or its Python dependencies.

### Generate the portable edition

From the repository root, with Python 3.11+ and Git available, create an isolated environment before running scripts. This also works when system Python lacks PyYAML:

```bash
python3 -m venv .venv-standard
.venv-standard/bin/python -m pip install -r requirements/standard-validation.txt
.venv-standard/bin/python scripts/export-standard-skills.py
.venv-standard/bin/python scripts/validate-standard-skills.py
```

Dependencies include the pinned upstream reference tool and its runtime dependencies. First-time installation needs network access. Exporting and using copied skills does not call a model; using the copied folders requires no Python or Node build.

Defaults generate and validate `dist/agent-skills/`. For another output directory:

```bash
.venv-standard/bin/python scripts/export-standard-skills.py --output /absolute/path/to/new-profile
.venv-standard/bin/python scripts/validate-standard-skills.py /absolute/path/to/new-profile
```

The exporter rejects duplicate names/IDs, invalid metadata, unsafe paths, collisions and symlinks. It replaces only its own unmodified output, verified by `.education-agent-skills-export.json`; preserve intentional local edits before replacing installed copies. Do not maintain edits in generated folders as a second source library. See [contributor checks](../CONTRIBUTING.md#validation-before-a-pull-request).

### Existing integrations

Claude Code 2.1.275+ command recommended by the tested 2.1.307 validator:

```text
/plugin install education-agent-skills --marketplace GarethManning/education-agent-skills
```

For Codex, register the checkout **and install** its plugin:

```bash
codex plugin marketplace add "$PWD"
codex plugin add education-agent-skills@education-agent-skills
codex plugin list --marketplace education-agent-skills --json
```

Run these from the repository root. `.claude-plugin/plugin.json` and `.codex-plugin/plugin.json` list 20 domain directories; `.agents/plugins/marketplace.json` supplies the Codex marketplace. There is no root `plugin.json`. See [Codex setup and cache updates](CODEX.md), [Hermes setup](HERMES.md) and [MCP retirement and migration](HOSTED_MCP_ACCESS.md).

The receipt distinguishes Codex 0.163.0-alpha.11.1 isolated install/list checks, Claude 2.1.307 manifest validation with advisories, and Hermes v0.18.0 (2026.7.1) isolated portable listing/resource reads. Actual model activation, real client settings and hosted updates were not tested. Updating a cloned source does not prove installed caches or copied folders refreshed.

### Invocation and version boundaries

Twelve sources use Claude's `disable-model-invocation: true`; matching Codex `agents/openai.yaml` sidecars set `allow_implicit_invocation: false`. MCP exposes those skills as explicit prompts, excluding them from model-invocable tools. The portable export preserves metadata and policies, but the standard has no universal explicit-only control: other clients may ignore them. An eligible skill is a candidate for selection, not a guarantee of automatic activation.

The project's **250-character description limit** is stricter than the specification's 1,024-character maximum. Main-body length guidance supports selective disclosure, not a universal “shorter is better” rule or a 5,000-token hard failure. Preserve essential method, boundaries and checks; move optional worked examples only when discoverable and usable. MCP returns an extracted active prompt, not the whole file or its linked examples automatically.

`registry.json` schema `version: "2.0"` and legacy `standard: "agent-skills-1.0"` are project metadata, not upstream specification versions or certification. GitHub release v3.1.0, plugin version 2.2.0, root npm package version 1.0.0, MCP package version 0.1.0 and portable profile `education-agent-skills-portable-1` identify different artifacts. Do not force them to match or invent an upstream semantic version. Licence scope remains as stated in [LICENSE](../LICENSE); this profile does not relicense software or third-party sources.

---

## registry.json

The registry is the primary programmatic interface to the library. It is generated from SKILL.md frontmatter by `scripts/generate-registry.py`.

### Structure

```json
{
  "version": "2.0",
  "generated": "<ISO timestamp>",
  "standard": "agent-skills-1.0",
  "total_skills": 165,
  "domains": [
    { "id": "memory-learning-science", "label": "Memory & Learning Science", "skill_count": 8 }
  ],
  "skills": [
    {
      "id": "memory-learning-science/spaced-practice-scheduler",
      "name": "spaced-practice-scheduler",
      "display_name": "Spaced Practice Schedule Builder",
      "domain": "memory-learning-science",
      "description": "<project description, at most 250 characters>",
      "disable_model_invocation": false,
      "evidence_strength": "strong",
      "tags": ["spacing", "memory", "planning"],
      "teacher_time": "5 minutes",
      "chains_with": ["retrieval-practice-generator", "interleaving-unit-planner"],
      "chain_edges": {
        "receives_from": [],
        "feeds_into": [],
        "output_field": null,
        "input_field": null
      },
      "path": "skills/memory-learning-science/spaced-practice-scheduler/SKILL.md"
    }
  ]
}
```

### Consuming the Registry

```python
import json

with open('registry.json') as f:
    registry = json.load(f)

# Find skills by domain
science_skills = [s for s in registry['skills'] if s['domain'] == 'memory-learning-science']

# Find skills by tag
spacing_skills = [s for s in registry['skills'] if 'spacing' in s['tags']]

# Find skills that chain with a given skill
chains = [s for s in registry['skills'] if 'spaced-practice-scheduler' in s['chains_with']]

# Filter candidates permitted for implicit invocation by the source flag
auto_skills = [s for s in registry['skills'] if not s['disable_model_invocation']]
```

### Keeping the Registry in Sync

```bash
python3 scripts/generate-registry.py
```

CI validates that `registry.json` matches the current SKILL.md files on every push and PR.

---

## Building an Orchestrator

The library is designed as Layer 1 of a three-layer architecture:

### Layer 1 — Skills (this repository)

165 skills across 20 domains, including 13 student-facing workflows. Source files and the MCP adapter are implemented here; original practitioner methods retain their labels and evidence limits. The skills themselves do not provide persistent learner storage.

### Layer 2 — Context Engine (proposed, not implemented here)

The proposed service would sit between the orchestrator and skills and hold relevant class and curriculum context. It could populate optional inputs when a skill is called; this repository does not implement that storage or its privacy controls.

### Layer 3 — Orchestrator (proposed, not implemented here)

A future orchestrator would receive a high-level educator goal (e.g. "Design a 6-week unit on climate change for Year 8") and:

1. Query the context engine for relevant student and curriculum data
2. Select and sequence appropriate skills using the registry
3. Chain skill outputs into a coherent plan
4. Present the result for educator review and approval

The `chains_with` array in each registry entry provides explicit chaining hints. The orchestrator can also discover novel chains by matching output schemas to input schemas across the library.

---

## Chaining Graph

The `chain_edges` object in each skill entry is a placeholder for typed chain edges:

- `receives_from`: skills whose output feeds into this skill's input
- `feeds_into`: skills that consume this skill's output
- `output_field`: the specific output field that feeds downstream
- `input_field`: the specific input field that receives upstream data

Currently `receives_from` and `feeds_into` are empty lists; `output_field` and `input_field` are null. Typed graph construction remains future work. `chains_with` contains untyped suggestions, including legacy unresolved suggestions; it does not guarantee compatible schemas or an executable chain.

---

## Context and skills

A client can supply curriculum documents, class context and school policies alongside a selected skill. Confirm required inputs, minimise identifying learner information and review output before use. Neither the open format nor this registry automatically supplies a context engine, resolves conflicting policies or guarantees a model will choose the right skill. The [quality guide](SKILL_QUALITY.md) describes the educational checks that format tests cannot establish.
