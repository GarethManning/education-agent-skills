# Architecture — Composable by Design

The skill library and MCP adapter are implemented in this repository. Educators can use local skill files or copy prompts into an AI client. The Context Engine and Orchestrator below are proposed architecture, not implemented services here. The [verification receipt](audits/agent-skills-build-verification-2026-10-22.md) records local checks separately from hosted release and client activation.

---

## How the Skills Are Structured

Each skill folder has a `SKILL.md` with a YAML header and Markdown guidance, plus optional local resources. Canonical sources retain extended education metadata; the generated portable edition has restricted standard frontmatter and preserves full metadata in `references/education.json`. See [format and export details](AGENT_SKILLS.md).

The **YAML header** contains machine-readable metadata: skill ID, domain, evidence strength rating, evidence sources with named citations, input schema (what the educator provides), output schema (what comes back), chaining metadata (which skills compose well together), estimated educator time, and discovery tags.

The **prompt** section supplies the active workflow: role, method, output requirements and checks. Other body sections explain evidence, limitations and optional resources. The MCP adapter extracts the active prompt; it does not automatically serve the whole file or linked examples.

This dual structure means every skill can be:

- **Read by an educator** who opens the file, copies the prompt, fills in the input fields, and gets a useful output
- **Parsed by a machine** that reads the YAML header to discover the skill's capabilities, validate inputs, route outputs to other skills, and make decisions about when to invoke it

The YAML schemas are not documentation. They are the interface definition. Any system that can read YAML can discover what this library offers, what each skill needs, and what it returns.

---

## The Three-Layer Architecture

### Layer 1 — The Skill Library (this repository)

165 skills across 20 domains. Each skill encodes a specific, evidence-grounded instructional or curriculum design decision — retrieval practice scheduling, rubric construction, scaffolded task modification, adaptive hint design, student-facing study support, and more.

An educator uses a skill by providing context through the input fields. Claude returns a structured output ready to use: a spaced practice schedule, a set of retrieval questions, a rubric with co-construction plan, a scaffolded task adapted for a specific language proficiency level.

Using copied instructions requires no Python or Node build. Client installation and model behaviour depend on the chosen integration; output still needs educator review.

### Layer 2 — Context Engine (proposed)

The proposed context engine would sit between the library and the orchestrator and hold persistent class and curriculum context. This repository does not implement that storage or its privacy and consent controls.

When a skill is called through the context engine, the output is personalised. Not generic advice about spacing — a specific spacing schedule for this class, based on what they studied last term, which topics showed weak retention on the last assessment, and when the next summative assessment falls. Not a generic rubric — a rubric calibrated to this developmental band, this competency framework, and this student's current performance level.

The skill input schemas already accommodate this. Every skill defines `optional` input fields — student profiles, curriculum data, assessment history, school context — that are designed for the context engine to inject. Skills produce quality output without this data. They produce tailored output with it.

These examples describe intended future behaviour; they are not results of an implemented context engine.

### Layer 3 — Orchestrator (proposed)

The orchestrator allows an educator to state a high-level goal and receive a complete, personalised plan.

**Example:** An educator says: *"Design a 6-week unit on climate change for my Year 8 class."*

The orchestrator:

1. Queries the context engine for class profile, curriculum requirements, prior learning, and upcoming assessments
2. Invokes the **Backwards Design Unit Planner** with curriculum standards and enduring understandings
3. Invokes the **Spaced Practice Scheduler** to distribute retrieval across the 6-week timeline
4. Invokes the **Interleaving Unit Planner** to restructure the topic sequence for better discrimination between related concepts
5. For each lesson, invokes the **Lesson Opening Designer** for retrieval-based starters
6. Invokes the **Language Demand Analyser** for EAL students in the class
7. Invokes the **Criterion-Referenced Rubric Generator** for the summative assessment
8. Invokes the **Ecological Inquiry Anchor Designer** to ground the unit in the local environment
9. Presents a complete draft unit for the educator to review, edit, and approve

The educator remains in the loop throughout. The orchestrator proposes; the educator decides. This is not AI replacing educators. It is AI doing the time-consuming assembly work so educators can focus on the decisions that require human judgement — what matters for these students, what to prioritise, what to cut, and what to change.

The `chains_well_with` field in every skill's YAML header provides explicit chaining hints. The orchestrator can also discover novel chains by matching output schemas to input schemas across the library.

---

## MCP Server

An MCP server exposes the full skill library as prompts plus the model-invocable subset as callable tools. Any MCP-compatible client can discover all 165 prompts and 157 tools, read their input requirements, and use strict typed inputs.

The library-operated public endpoint is retiring with v3.1.0. Local stdio and self-hosted HTTP remain available; see [setup](../mcp-server/README.md) and [migration](HOSTED_MCP_ACCESS.md).

The server registers all 165 skills as prompts. It registers 153 skills as tools; the 12 skills marked `disable-model-invocation: true` remain available for discovery and explicit prompt use but are not model-invoked tools. Four additional meta-tools provide discovery: `list_skills`, `find_skills`, `suggest_skills`, and `get_skill_details`, for 157 tools total.

A self-hosted HTTP surface must be deliberately deployed and configured by its operator. The retained hosted implementation is access-controlled. It requires a configured canonical public origin and strong token/OAuth secrets, accepts bearer credentials only in the `Authorization` header, requires S256 PKCE and exact approved redirects, and uses encrypted short-lived authorization and refresh credentials. New access tokens expire after 30 days; deployed legacy signed/hash/plain credentials remain compatible. A SHA-256 revocation list supports individual credential revocation without rotating the signing secret.

The server is stateless across instances. Request bodies are bounded (16 KiB for OAuth/access requests and 1 MiB for MCP), while authorization-code/refresh replay detection and access-request abuse limits are bounded in-memory controls. They reduce same-instance replay and abuse but cannot guarantee cross-instance single use without durable shared state.

Source code and setup instructions: [`mcp-server/`](../mcp-server/)

---

## Agent Skills format and discovery

Canonical sources stay at `skills/<domain>/<skill-name>/SKILL.md`. Plugin entry points are `.claude-plugin/plugin.json` and `.codex-plugin/plugin.json`, each listing domain directories. There is no root `plugin.json`. The generated `dist/agent-skills/<skill-name>/` edition is the strict portable view; its [165/165 pinned official-validator result](audits/agent-skills-build-verification-2026-10-22.md) applies to that edition, not the extended source headers.

Metadata-first discovery and on-demand instructions/resources are the open format's progressive-disclosure design. Actual loading depends on the client. Twelve source flags request explicit-only invocation; Codex sidecars preserve that intent and MCP omits them from its model-invocable tools. Other clients may ignore these policies; the standard does not enforce a universal invocation control.

The generated `registry.json` enables discovery/filtering and provides untyped `chains_with` suggestions. Its `chain_edges` fields are placeholders: `receives_from` and `feeds_into` are empty lists, and `output_field` and `input_field` are null. Neither graph execution nor conflict resolution is implemented by the registry. A consuming orchestrator must validate inputs, resolve competing suggestions and obtain educator review.

See the [developer guide](AGENT_SKILLS.md) for the source/portable contract, project description policy, version meanings and tested client limits.

---

## Contributing Orchestration-Ready Skills

Skills added to the library should follow the schema specification in [CONTRIBUTING.md](../CONTRIBUTING.md). Orchestration-ready means:

- **YAML header complete** — all fields populated, input and output schemas precisely typed
- **Input and output schemas well-defined** — field names, types, and descriptions that a machine can parse without ambiguity
- **`chains_well_with` populated** — where relevant, listing the skill IDs that compose naturally with this skill
- **`evidence_strength` honest** — retain recorded labels and distinguish research support from original/practitioner methods; see [quality guidance](SKILL_QUALITY.md) rather than reclassifying evidence to fit a packaging change

The schema is the contract between the skill and any system that calls it. Precision here is not bureaucracy — it is what makes composability work.
