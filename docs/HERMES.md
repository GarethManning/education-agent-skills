# Hermes Agent setup

Use this guide if you use [Hermes Agent](https://hermes-agent.nousresearch.com/) and want Gareth Manning's **Education Agent Skills Library** available locally.

The recommended Hermes path is **selected local installs**, not a plugin. The repository remains the canonical, inspectable source of truth; Hermes installs selected `SKILL.md` folders from GitHub into your local runtime.

## Which route should I use?

| Route | Best for | Trade-off |
| --- | --- | --- |
| Hermes selected installs | Local, offline, no-dependency use inside Hermes | You choose which skills to install |
| Hermes tap | Registering this GitHub repo as a community skill source | Current Hermes tap search works best with flat skill repos, so use the full identifiers below for individual installs |
| Local/self-hosted MCP | Discovery via `find_skills` / `suggest_skills` | Run stdio locally or operate an authenticated HTTP endpoint |
| Claude/Codex plugins | Users already working in those runtimes | Runtime-specific install path |
| Manual copy-paste | Trying one skill with no setup | No automatic discovery or orchestration |

## Optional: add the GitHub tap

```bash
hermes skills tap add GarethManning/education-agent-skills
```

This registers the repository as a Hermes community source. Because this library preserves domain folders (`skills/<domain>/<skill-name>/SKILL.md`), use the full skill identifier for source installs. The isolated verification checked portable discovery and resource reads; Hub installation and updates were not tested.

## Install one skill

```bash
hermes skills install \
  GarethManning/education-agent-skills/skills/original-frameworks/learning-target-authoring-guide \
  --category education --yes
```

After installing, verify that Hermes can see the skill:

```bash
hermes skills list
```

## Suggested starter packs

Do not install all 165 skills by default. The library is intentionally broad; a smaller local set is easier to search and less likely to create noisy agent behaviour.

### Curriculum and assessment starter pack

```bash
hermes skills install GarethManning/education-agent-skills/skills/curriculum-assessment/competency-unpacker --category education --yes
hermes skills install GarethManning/education-agent-skills/skills/original-frameworks/learning-target-authoring-guide --category education --yes
hermes skills install GarethManning/education-agent-skills/skills/curriculum-assessment/kud-knowledge-type-mapper --category education --yes
hermes skills install GarethManning/education-agent-skills/skills/curriculum-assessment/criterion-referenced-rubric-generator --category education --yes
hermes skills install GarethManning/education-agent-skills/skills/curriculum-assessment/assessment-validity-checker --category education --yes
```

### Learning science starter pack

```bash
hermes skills install GarethManning/education-agent-skills/skills/memory-learning-science/retrieval-practice-generator --category education --yes
hermes skills install GarethManning/education-agent-skills/skills/memory-learning-science/spaced-practice-scheduler --category education --yes
hermes skills install GarethManning/education-agent-skills/skills/memory-learning-science/feedback-quality-analyser --category education --yes
hermes skills install GarethManning/education-agent-skills/skills/self-regulated-learning/metacognitive-prompt-library --category education --yes
```

### Student-facing AI learning starter pack

```bash
hermes skills install GarethManning/education-agent-skills/skills/student-learning/retrieve-first-gate --category education --yes
hermes skills install GarethManning/education-agent-skills/skills/student-learning/progressive-hint-ladder --category education --yes
hermes skills install GarethManning/education-agent-skills/skills/student-learning/stuck-and-error-diagnosis-coach --category education --yes
hermes skills install GarethManning/education-agent-skills/skills/student-learning/teach-back-evaluator --category education --yes
```

## Complete portable folders

For a portable copy, download the [v3.1.0 ZIP](https://github.com/GarethManning/education-agent-skills/releases/download/v3.1.0/education-agent-skills-portable-v3.1.0.zip). The extracted `agent-skills/` contains 165 folders and comes with an installation note. Copy selected complete folders into the skills directory documented for your Hermes profile; retain `references/education.json`, `LICENSE`, examples and policies. Check with `hermes skills list` and inspect resources before use. Preserve existing edited installations before replacing them.

A raw `SKILL.md` download alone omits supporting resources and is unsuitable for a complete installation. For a no-install trial, manually copy a prompt and consult its linked resources in the repository.

## Intelligent skill selection

A Hermes plugin is not currently planned. The MCP source already exposes a discovery layer.

If you want the system to recommend skills from a teaching need, run [local/self-hosted MCP](../mcp-server/README.md) and use:

- `find_skills` — search by keyword, domain, evidence rating, or task;
- `suggest_skills` — describe a teaching/curriculum need and get recommended skills;
- `get_skill_details` — fetch the full skill metadata and guidance;
- `list_skills` — browse the library.

Use selected Hermes installs when you want local/offline skills. Use MCP for discovery through a local process or your own authenticated endpoint. The library-operated public service is retiring with v3.1.0; public signup is no longer offered. Remote-only clients need their own hosted endpoint or another supported installation route; there is no automatic connector migration.

## Trust and licence

Hermes community sources are not the same as the default trusted OpenAI/Anthropic repositories. This library's trust signals are therefore deliberately public and inspectable:

- every skill is plain text in GitHub;
- evidence strength and sources are visible in each `SKILL.md`;
- exclusions are documented in [`EXCLUSIONS.md`](EXCLUSIONS.md);
- the architecture and schemas are documented in [`ARCHITECTURE.md`](ARCHITECTURE.md);
- the licence is [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).

## Discovery beyond this repo

After this Hermes path is verified, the next distribution step is to propose the library for inclusion in [`VoltAgent/awesome-agent-skills`](https://github.com/VoltAgent/awesome-agent-skills), which Hermes scans as a default community source. That is the real discovery channel for users who have not yet heard of this repository.
