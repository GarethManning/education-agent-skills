# Contributing

Thank you for considering a contribution to the Education Agent Skills Library. The bar is intentionally high: each skill should be evidence-grounded, practically useful, and clear enough for both educators and AI agents to use safely.

## What belongs here

Good contributions usually add or improve a reusable education skill that supports one of these needs:

- curriculum design;
- assessment design and validity;
- learning science and memory;
- self-regulated learning and metacognition;
- literacy, questioning, dialogue, and critical thinking;
- wellbeing, motivation, belonging, and student agency;
- inclusive design;
- AI literacy or AI learning support;
- student-facing study interactions;
- professional learning;
- systems thinking or original practitioner frameworks that are clearly labelled.

## Inclusion criteria

A skill should:

1. solve a recurring education design or learning-support problem;
2. be useful beyond one school, course, or lesson;
3. include named evidence sources where it claims to be research-grounded;
4. label emerging, mixed, practitioner, or original-framework evidence honestly;
5. preserve educator judgement rather than pretending the skill can decide everything;
6. include clear input and output schemas;
7. include practical quality checks and common pitfalls;
8. avoid unsupported frameworks, especially learning-styles/VAK-style claims.

See [`docs/EXCLUSIONS.md`](docs/EXCLUSIONS.md) for excluded ideas and [`docs/EVIDENCE.md`](docs/EVIDENCE.md) for evidence sources. The [quality guide](docs/SKILL_QUALITY.md) explains eight review criteria without replacing these inclusion rules or requiring empirical certification.

## Skill structure

Skills live at:

```text
skills/<domain>/<skill-name>/SKILL.md
```

Do not rename or move existing skill folders unless the change is part of a deliberate repository-wide migration.

Canonical sources use extended project/vendor frontmatter; strict portable distribution is generated separately. Every existing `SKILL.md` must preserve:

- YAML frontmatter;
- `name` and `description` fields required by the Agent Skills standard;
- evidence-strength metadata;
- input and output schemas;
- any existing citations and limitations.

Keep optional resources inside the skill folder and link them from the main instructions. Copy/distribute the complete folder, preserving `references/`, `agents/` and other included resources. Changes to educational meaning require a clear rationale, preservation check and independent content review as described in [skill quality](docs/SKILL_QUALITY.md). Improve stable paths/IDs in place; preserve prior versions in Git and receipts rather than duplicate active version directories.

### Skill `name` must be unique across all domains

A skill's `name` (and its `skill_id` slug) must be **unique across the whole library, not just within its own domain folder**. Claude Code and Codex identify a skill by its `name`; a flat, name-keyed loader cannot hold two skills with the same `name`, so one silently collides with or overwrites the other. (The MCP server tolerates duplicates by qualifying them with the domain, but the plugin surfaces do not.)

If two skills would share a slug, give one a more specific name — for example `discipline-specific-critical-thinking-task-designer` rather than a second `critical-thinking-task-designer` — and update that `SKILL.md`'s frontmatter `name`, `skill_id`, and `skill_name` plus its folder name to match.

### New domain folders must be added to BOTH plugin manifests

The `skills` field in each plugin manifest is an **explicit array of the domain folder paths** (e.g. `"./skills/curriculum-assessment"`), because Claude Code and Codex scan only one directory level deep while this repo nests skills two levels deep (`skills/<domain>/<skill>/SKILL.md`). A bare `"./skills/"` root path makes both loaders discover zero skills.

When you add a **new domain folder**, add its path to the `skills` array in **both**:

- `.claude-plugin/plugin.json`
- `.codex-plugin/plugin.json`

(`.claude-plugin/marketplace.json` inherits via its `source` field and does not list skills.)

## Validation before a pull request

Use Python 3.11+ and an isolated environment, including when system Python lacks PyYAML. From the repository root:

```bash
python3 -m venv .venv-standard
.venv-standard/bin/python -m pip install -r requirements/standard-validation.txt
npm ci
npm --prefix mcp-server ci
```

After adding or editing canonical skills/resources, regenerate the two tracked views:

```bash
.venv-standard/bin/python scripts/generate-registry.py
npm --prefix mcp-server run bundle-skills
```

Run the project checks separately from the official format gate:

```bash
# Project source, registry and library checks
.venv-standard/bin/python scripts/validate-skills.py
.venv-standard/bin/python scripts/validate-registry.py
npm test -- --reporter=dot

# Portable roundtrip/safety tests, export and pinned official format validation
.venv-standard/bin/python -m unittest discover -s tests -p test_standard_export.py -q
.venv-standard/bin/python scripts/export-standard-skills.py
.venv-standard/bin/python scripts/validate-standard-skills.py

# MCP build, runtime contracts and dependency checks
npm --prefix mcp-server run build
npm --prefix mcp-server test -- --reporter=dot
npm audit --audit-level=high
npm --prefix mcp-server audit --audit-level=high
```

The [CI workflow](.github/workflows/validate.yml) runs these categories on Node 20/Python 3.11 and checks registry/bundle freshness after regeneration. Local integrated results used Node 22.23.4/Python 3.13.2; see the [receipt](docs/audits/agent-skills-build-verification-2026-10-22.md). CI additionally counts skills against the registry; its workflow pins actions and installs the declared dependencies. Local checks do not establish that a remote CI run occurred. The hosted-only library test skips unless its endpoint is configured; do not treat a skipped test as a hosted release check. Format and contract tests do not establish model activation or learner outcomes.

Include the changed **canonical skill folders and resources**, `registry.json` and `mcp-server/src/skills.json` in the review/commit. Do not commit generated `dist/agent-skills/`, `mcp-server/dist/`, `.venv-standard/` or local test output. A locally rebuilt snapshot is not a deployed hosted update. The [developer guide](docs/AGENT_SKILLS.md) describes the strict portable profile and pinned official reference separately from the source schema.

## Pull request guidance

In your PR, briefly explain:

- what skill or documentation changed;
- why the change is educationally useful;
- what evidence or practitioner framework it relies on;
- what validation commands you ran and their results;
- what useful behaviour was preserved, how the relevant ordinary/edge case was checked, and what remains unverified.

Small, well-evidenced improvements are better than broad additions that dilute the library. The point is not to have the most skills; it is to have skills worth trusting.
