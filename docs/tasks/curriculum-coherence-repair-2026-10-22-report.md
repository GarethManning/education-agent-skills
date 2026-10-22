# Curriculum coherence repair receipt — 22 October 2026

Status: **three text values repaired; scoped checks pass; independent recheck pending**. This is source-coherence evidence, not a model-output trial, empirical validation, integration or release.

Checkout: `/Users/garethmanning/Github/education-agent-skills`; branch `codex/agent-skills-standards-quality-2026-10-22`; inherited baseline `6bbbce418f82e11044009c9f3b7373a354de5bd0` with prior working edits. Owner delta: two existing input-description values in `skills/curriculum-alignment/developmental-band-translator/SKILL.md`, one sentence in the active output template of `skills/memory-learning-science/retrieval-practice-generator/SKILL.md`, and this receipt only. Existing work was preserved. No subagents, commit, push, deployment, generated-file update, full suite, paid model call or hosted request occurred. No server or background process was started.

## Authority and supersession

Read `AGENTS.md`, `CLAUDE.md`, `STATE.md`, the scoped repair brief, the original curriculum task/report, independent review receipt, quality-plan section 5, and both affected files in full. The repair brief explicitly authorizes only the two band input-description metadata values as an exception to the raw metadata freeze, plus the single retrieval timing sentence in the MCP prompt. The initial independent review reported two material findings only.

This receipt **supersedes the two candidate file hashes and the coherence/consistency implication for these two files in `docs/tasks/curriculum-evidence-2026-10-22-report.md`**. That earlier report's disclosed frozen band metadata and qualified example timing did not remove the conflicting metadata/template claims. Its history remains unchanged; its other file hashes and findings are outside this repair. This receipt supplies the corrected candidate hashes and narrower verification claim below. Independent acceptance remains pending.

## Exact text changes

1. `input_schema.required` → `progression_structure_json` → `description`:

   Before: “The harness-produced progression_structure.json for the source. Must include band_labels, source_type, and age_range_hint (or per-band approximate_age_range). If both age-range fields are absent, the skill returns request_age_range_context in skill_flags and halts.”

   After: “The harness-produced progression_structure.json for the source. Must include band_labels and source_type. Use user_age_range_override first, otherwise native age_range_hint or per-band approximate_age_range; if neither exists for a flat competency/dispositional framework, use tentative descriptor-based mapping with low confidence and teacher review. Return request_age_range_context in skill_flags and halt only when no route supports a defensible mapping; do not invent ages.”

2. `input_schema.optional` → `user_age_range_override` → `description`:

   Before: “Explicit age-range mapping supplied by the user when a source has no native band structure (flat list). Required only when the skill emits a request_age_range_context error.”

   After: “Explicit user-supplied age-range mapping, available on the first invocation or after request_age_range_context. Apply before native age ranges or flat-framework descriptor mapping; preserve native labels and ages, record user-supplied provenance in skill_flags, and flag conflicts with native ages for teacher review.”

3. Retrieval active MCP output-template example, first timing sentence only:

   Before: “Use 3–7 days after initial teaching for optimal spacing effect.”

   After: “Use 3–7 days after initial teaching as a practical starting point; adapt timing to prior learning, retrieval success, retention goals and the timetable.”

   The following sentence remains exact: “Re-use a subset at 2–4 weeks for a second retrieval opportunity.” The output still supplies an actionable interval and later revisit, while allowing adaptation without asserting a universal optimum.

## Preserved remainder and checks

Before-edit snapshots are at `/tmp/curriculum-coherence-repair-before-20261022/{developmental-band-translator,retrieval-practice-generator}/SKILL.md`; their hashes matched the earlier report's candidate hashes. The one-off structural checker `/tmp/check-curriculum-coherence-repair-20261022.py` compares those snapshots with the current files using YAML parsing, raw text equality and current loader prompt-extraction patterns. It does not test editorial quality by keyword presence.

Command: `/tmp/education-skills-audit-20261022/venv/bin/python /tmp/check-curriculum-coherence-repair-20261022.py` — **PASS on first run**:

- Both YAML headers parse. Band metadata is semantically identical after removing only the two authorized description values; raw header line comparison finds exactly those two changed description lines. Every key, type, required/optional placement, default, ID, citation, output and invocation control is preserved.
- The entire band Markdown body and extracted active MCP prompt are byte-identical. Existing procedure, examples, source-voice rules, mapping method, low-confidence/teacher-review flags and max-span LT aggregation remain intact.
- The entire retrieval file equals the before snapshot with exactly the one stated sentence replacement. Its raw header/schema/citations are byte-identical. Its active prompt differs by exactly that sentence. Novice/warm-up recognition exception, taught-source verification, self-check, examples and limitations remain exact.
- All template-variable occurrences and their order are unchanged in both files. Both active prompts extract successfully and remain nonempty; Markdown fences balance.

Command: `git diff --check -- skills/curriculum-alignment/developmental-band-translator/SKILL.md skills/memory-learning-science/retrieval-practice-generator/SKILL.md docs/tasks/curriculum-coherence-repair-2026-10-22-report.md` — **PASS**. The report is new/untracked, so its whitespace was also checked directly for trailing spaces/tabs and a final newline. No full benchmark or suite was repeated for three text values.

## Fictional textual walkthroughs

These are reasoned readings of the existing procedure plus corrected descriptions, not runtime/model tests or learner observations.

- **Native ages, ordinary case:** A progression with required `band_labels`/`source_type`, native ages 5–11, and no override takes the native-age route. Against school bands A 5–7/B 7–9/C 9–11 it retains A/B/C ambiguity, low confidence and teacher review. Metadata no longer demands a different route from the core.
- **First-call override and conflict:** A user supplies an 8–10 mapping on the initial invocation. Both descriptions allow it immediately; step 1 applies it before native ranges. Native labels and ages remain unchanged, user provenance is recorded in `skill_flags`, and any conflict with native ages triggers teacher review. No preliminary error is required.
- **Flat framework without ages or override:** A competency/dispositional source with suitable descriptors reaches the conservative descriptor route. Assignments are tentative, low confidence and teacher reviewed. A vague descriptor retains all plausible bands and asks for teacher context; no age norm is manufactured.
- **Unsupported source:** A non-flat source with no native ages, no override and no defensible descriptor route requests `request_age_range_context`, tags nothing and stops. The required progression input itself remains a string; missing internal ages do not become a new mandatory schema field.
- **Retrieval, ordinary case:** A teacher planning a review can begin with 3–7 days after teaching and reuse a subset at 2–4 weeks. The active output template now expresses the same practical/adaptable status as the example and limitations.
- **Retrieval, timing or novice edge:** A timetable interruption, weak recall or different retention goal can change the first interval without contradicting an “optimal” claim. Novices can still receive labelled recognition warm-up support; topic-only answers remain a subject-knowledge draft pending taught-source teacher checking. Those existing core rules are unchanged.

No unresolved educational/interface meaning or failed repair cycle remains in this bounded delta. Descriptor mapping and classroom timing still require educator judgment; this source check establishes internal coherence only. The coordinator owns independent recheck and all later regeneration, integration and distribution.

## Exact SHA-256 receipt

| File | Before repair | After repair |
|---|---|---|
| `skills/curriculum-alignment/developmental-band-translator/SKILL.md` | `1aa99b15c4e3c932543f5d12fd41536e6ccb2be27939e7cbd607c8aeb8c83205` | `57d1d93eccdc656dcc37fef5901aea76b66919ee46996b9f2a36b0de44d172b2` |
| `skills/memory-learning-science/retrieval-practice-generator/SKILL.md` | `efaa81eda3c33e47ab898556d2d93a40022f09f479375421dd736557dd341f28` | `e55101e427042173034785a11d3acc42d0532c27317d46bf0b89870ac092feeb` |

Band body before/after: `531e927b6ba55a72c5b40576c7e4ef9c9ead23fc00a3d77f1d543d7ac028ff92`.

Band active prompt before/after (trimmed loader extraction): `0acbe4e274495bb9749e167e75a876d4f73c35d36fc77c0eddc0dd122cf712d5`.

Retrieval raw header before/after (including delimiters): `174593f3b99b935d8bc97c073866777277e9e6abb06249471d6bc5488106751b`.

Retrieval active prompt before: `81788d36208be40f6fc6566a125d12b0fd38d3e74e2a515f852734606b639670`; after: `77a689b150b3c009e03635805a796147fa7c85bab429eeab18c378fd51b775fe`.
