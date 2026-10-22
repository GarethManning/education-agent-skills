# Curriculum and evidence correction report — 22 October 2026

Status: **draft implementation, pending independent review**. This is a bounded source edit and textual review, not model/runtime evaluation, empirical validation, clinical certification, integration or release. No commit, push, deployment, generated registry/bundle/export edit, paid call, hosted MCP request, client installation, real learner data or external message occurred.

Checkout: `/Users/garethmanning/Github/education-agent-skills`; branch `codex/agent-skills-standards-quality-2026-10-22`; examined source baseline `6bbbce418f82e11044009c9f3b7373a354de5bd0`. The eleven input files matched every SHA-256 in the packet before editing. Existing changes from the accepted runtime/export and other content packets were preserved. This worker owns only the eleven paths below, `docs/EVIDENCE.md` and this report.

## Authority, reading and contracts

Applied the task brief, `AGENTS.md`, `CLAUDE.md`, `STATE.md`, quality rubric and Appendix A clarified preservation, together with full-file inspection of the eleven affected skills. Read relevant architecture/exclusion guidance and immediate contracts: Developmental Band Translator's four required inputs; Curriculum Crosswalk's already-band-tagged inputs; Learning Target Authoring Guide's LT and observation-indicator outputs; Coherent Rubric Logic Builder's performance-based inputs; Historical Source Adapter's full `original_source` requirement; and Document-Based Lesson Designer's document-set input. Consulted the current source prompt-extraction rules in `mcp-server/src/skill-loader.ts` without changing runtime.

No exact-schema redesign: all IDs, names, paths, keys, schemas, required/optional lists, defaults, invocation controls and input placeholders remain unchanged. All named source attributions remain; the only evidence-source line changed is the authorized Cepeda correction. Eight frontmatters are byte-identical; the other three have exactly one changed line apiece:

- `spaced-practice-scheduler`: Cepeda evidence-source count becomes **317 experiments in 184 articles**, with verbal-recall/retention-interval framing.
- `panel-review`: description now exposes wellbeing/SEL calibration, simulation and heuristic thresholds, within 250 characters. Its existing `skill_name`, `evidence_strength: medium`, role keys and chain metadata remain unchanged.
- `dispositional-knowledge-assessment-designer`: `teacher_time` distinguishes initial draft-design review from implementation. No component-selector input, mode or missing output was introduced.

The band translator's legacy frontmatter descriptions still contain the original unconditional age wording because no metadata exception was authorized there. Its body and active prompt explicitly establish override/native-age/flat-framework precedence and explain that clarification. Its required inputs remain four strings; native age information inside a progression structure is not a new mandatory field or a changed transport schema.

## Primary-source checks

- **Cepeda:** [author-hosted full paper](https://laplab.ucsd.edu/articles/Cepeda_etal_2006.pdf), [publisher record](https://doi.org/10.1037/0033-2909.132.3.354) and [author-deposited record](https://escholarship.org/uc/item/3rr6q10c): 317 experiments in 184 articles; effective inter-study intervals vary jointly with retention interval. The original eScholarship open initially returned a bot challenge; primary indexed records and author-hosted paper resolved the factual count. No finding here establishes the exact classroom timetable or universal forgetting percentage.
- **CAST:** [official Guidelines](https://udlguidelines.cast.org/), “Introducing CAST UDL Guidelines 3.0”: release on 30 July 2024; 2018 v2.2 remains the historical basis of this skill. No v3.0 redesign was attempted.
- **Woloshyn:** [ERIC EJ443903](https://eric.ed.gov/?id=EJ443903) identifies 1992, *Journal of Educational Psychology*, 84(1), 115–124; [publisher DOI](https://doi.org/10.1037/0022-0663.84.1.115). An initial ERIC open timed out; its primary indexed record supplied the bibliography. No full-paper review or new outcome inference is claimed.
- Other changes resolve internal contradictions or qualify the library's own procedure/validation claims. They do not assert a new research result or retrospectively verify every original citation.

`docs/EVIDENCE.md` changes only its selective-coverage introduction and that bibliography entry. It remains a cited-source index rather than purported checking of all claims in all 165 skills.

## Per-skill changes and fictional textual walkthroughs

These walkthroughs apply the written rules to stated fictional cases. They are reasoned source checks, **not generated model responses, automated behavioral tests or observations of learners**. Each disposition is “implemented draft; independent educational review pending.” Full files and all examples remain in place; selective organization is a later packet.

### Developmental Band Translator

**Before → after:** Unconditional missing-age halt made the flat-framework branch unreachable and ignored a supplied override. Core step 1 now selects explicit user mapping, then native ages, then conservative descriptor-based flat-framework handling; a genuinely unsupported mapping still requests age context and stops. Override provenance/conflicts, ambiguity and teacher review remain visible. Body input guidance and limitations agree. The example is labelled an excerpt; three-band assignments are low confidence, secondary ages 11–16 retain partial overlap with school Band F, and counts describe the excerpt rather than an unseen full dataset.

**Preserved:** Source words/labels/IDs, metadata-only tagging, all four inputs, max-span LT aggregation, optional criteria and downstream crosswalk interface. No content rewriting or invented age norms.

**Ordinary case:** A fictional source Primary 5–11 with school A 5–7/B 7–9/C 9–11 yields A/B/C, low confidence, ambiguity and teacher review; its LT inherits the union. The source statement stays verbatim.

**Edges:** A flat competency framework with no native ages reaches the descriptor branch and marks every item low confidence/teacher review, retaining broad candidates when vague. A first-call explicit 8–10 override is usable without first forcing an error and is labelled user supplied; conflict with native ages triggers teacher review. A non-flat source with no ages, no override and no defensible descriptor route requests context and tags nothing.

**Review question:** Descriptor-to-band judgments remain approximate and require educators; no empirical band alignment is claimed. Legacy frontmatter wording remains protected as disclosed above.

### KUD Chart Author

**Before → after:** The raw-document route suggested sending raw prose straight to a metadata tagger. Input explanation and core routing now require actual harness decomposition before that handoff and explicitly list the tagger's required files. Direct drafting remains available: identify source sections, separate explicit content from inferred draft material in existing notes and do not claim validated harness output.

**Preserved:** All seven input types; nonblocking routing note; Know/Understand/Do distinctions; performance versus disposition; hard prerequisite/soft enabler/conceptual accelerator; all six quality checks, charts and citations.

**Ordinary case:** Fictional `existing_lt_with_do` supplies Band B collaboration observations; the skill authors complementary K/U, maintains the Do and reports null routing note when no stronger upstream route is needed.

**Edge:** A fictional 18-page raw curriculum receives a decomposition recommendation plus a direct draft with source-section references and assumptions. It is not passed to Developmental Band Translator as if `kud_json`, `lts_json` and `progression_structure_json` had been produced. If those files later exist, the tagger can be invoked with its own required band schema.

**Review question:** Harness tooling is external to this library; no named decomposer skill or harness validation run was invented.

### Differentiation Adapter

**Before → after:** CAST 2018 was called current. Foundation and core now identify v2.2 as the historical basis and distinguish the 2024 v3.0 release.

**Preserved:** Learning objective and cognitive demand; barrier/readiness-based access; UDL route options; rejection of learning-style matching; original example, adaptations and research attribution.

**Ordinary case:** Fictional Year 9 literary analysis with decoding support still uses the same text/objective, supported presentation and the learner's own analysis.

**Edge:** A request to treat this as an implementation of the latest CAST edition cannot be satisfied by relabelling its historical method. The text states its v2.2 scope; adopting newer guidance would require separate design work.

**Review question:** This bounded edition correction does not reassess every individual adaptation or profile-level claim.

### Historical Document Set Curator

**Before → after:** Source-supply caveat was outside the active prompt. Core now distinguishes supplied text, uninspected teacher reports and proposed/unverified recommendations; unknown provenance stays unknown. Existing source description carries status and pending verification. Example concrete sources remain, labelled proposals rather than delivered excerpts.

**Preserved:** Question-led selection, contrasting perspectives, provenance, sequencing, analytical tensions, skill affordances and representation audit; no blanket removal of useful source suggestions.

**Ordinary case:** Fictional teacher provides two actual attributed excerpts with contrasting accounts. The design can compare supplied content, identify remaining perspectives and sequence an investigation without inventing another excerpt.

**Edge:** With only a central question and a named archive, specific candidate sources remain proposed/unverified and contributions conditional until obtained. A recommendation is not passed as Historical Source Adapter's full `original_source`; the teacher must locate and check the actual text. No hallucinated source was demonstrated by this work.

**Review question:** The original illustrative sources, quoted snippets and historiographical summaries have not been independently reverified; their pending status is explicit.

### Retrieval Practice Generator

**Before → after:** Universal anti-recognition rule and self-check contradicted the existing novice/warm-up exception. Core and description now retain that exception while distinguishing recognition from recall. Taught-source verification moves into core; a topic-only answer set is a teacher-checkable subject-knowledge draft. Q8 is explicitly recognition support, not recall evidence. Example spacing is a practical opportunity, not an established optimum.

**Preserved:** Recall-centred mixture, cues, feedback/answer notes, misconception focus, accessible novice support and all output fields.

**Ordinary case:** Fictional Year 7 erosion starter mostly uses free/cued recall and answer feedback; a recognition warm-up is correctly labelled for novices.

**Edge:** Topic-only input with unfamiliar local terminology produces a draft pending teacher checking rather than a claim that syllabus accuracy was verified. Low-prior-knowledge learners may receive cues/recognition without violating the self-check or counting recognition as recall mastery.

**Review question:** Recognition weighting and relative-effect generalisations retain original method wording; this packet does not establish the best mixture for a class.

### Spaced Practice Scheduler

**Before → after:** Corrected study count; removed universal 70%-in-24-hours assertion and exact-optimality attribution. Core labels 1–3 day/1–2 week/3–4 week intervals, review minutes, max-gap and 40% re-teaching threshold as adaptable practitioner starting points. Example correctly distinguishes time since introduction from intervening reviews and a weekly pattern from strictly expanding gaps. Re-teaching may expand when errors warrant it.

**Preserved:** Distributed retrieval, practical complete timetable, prerequisite/timeline constraints, assessment consolidation, difficulty/performance adaptation, activities and all citations.

**Ordinary case:** Fictional five-topic six-week plan retains the existing 30-lesson example with early retrieval, later distributed revisits and feedback; rationale does not call it empirically optimal.

**Edge:** A timetable disruption or weak recall justifies a shorter gap, explicit departure from the pattern or fuller instruction; the self-check no longer forces expanding intervals while simultaneously mandating a maximum three-week gap. No measured retention data is invented. The 40% figure is an optional decision heuristic rather than a universal cutoff.

**Review question:** Exact intervals require local monitoring and educator judgment. The protected Ebbinghaus metadata line is unchanged; the body/core expressly reject a universal decay function or daily percentage inference.

### Developmental Band System Designer

**Before → after:** Mixed-age research now supplies rationale rather than purported validation of the complete original architecture, cut points or descriptors. Core and example make practitioner-design status explicit.

**Preserved:** Manning attribution, mission → values → priorities/non-priorities → competency/LT/band design, mixed-age usefulness, spiky learners, maths/language granularity exceptions and original evidence metadata.

**Ordinary case:** Fictional school mission and 5–14 age range still produce four usable bands, one competency expressed across them and subject-specific granularity advice.

**Edge:** An older learner with uneven readiness receives professional consideration across competencies rather than having age theory treated as a diagnosis. Citing Montessori or Piaget cannot certify the composed architecture.

**Review question:** No original age cut point or claimed classroom implementation outcome was independently tested.

### Dispositional Knowledge Assessment Designer

**Before → after:** Five-minute design metadata no longer implies implementation takes five minutes. Core and output opening now show workload before adoption while returning the entire existing six-part design. Corrected a newly verified example arithmetic error: `(5 + 1–2) × 2 × 10–12 = 120–168` observation/recording minutes, not 60–90. With the stated other assumptions, total is `120–168 + 15 + 10 + 15–20 + 8–10 = 163–223` minutes/student/term, or 4,075–5,575 minutes (about 68–93 hours) for 25 students. Invitations still cost time without responses; shared work is allocated explicitly. Dependent opening, example and limitation totals agree. Sustainability keeps a brief synthesis rather than silently dropping that output. Comparative-validity assertions attached to workload were qualified.

**Preserved:** All six output fields, no new required selector, multi-informant context-sensitive observation, reflexivity and moderation, open student reflection, interpretation of contradictions, optional caregiver contribution, developmental conversation and school-feedback integration. Observation frequencies remain explicit example assumptions, not a new mandate.

**Ordinary case:** Fictional Band D agency design with an existing end-of-term review still returns observation, self-reflection, optional caregiver guide, synthesis, conversation and integration, plus itemised workload before adoption.

**Edges:** No caregiver input leaves assessment design complete; no invitation costs zero, invitation without response costs preparation time only. A full class of 25 makes the time cost visible; educator may rotate competencies and integrate observation but does not receive silently missing design sections or invented learner observations. Conflicting teacher/student observations remain material for inquiry rather than averaged scores.

**Review questions:** Actual workload, shared observation and staff moderation need local estimates. Existing source differences about three-to-five versus five notes, age-readiness assumptions and contextual band vocabulary were not redesigned in this workload packet; no empirical sufficiency or validity certification is supplied.

### Competency Framework Translator

**Before → after:** Missing source no longer permits reconstructed text under Original Framework Wording. Exact supplied text carries its supplied/unverified provenance; absent text gets an explicit missing-source statement and source/version request. A provisional classroom interpretation can still proceed separately. Example quotation and fidelity claim follow that distinction.

**Preserved:** Original headings and output schema, 3–4 distinct levels, observable subject-specific indicators, tasks requiring the competency, assessment criteria and source attributions.

**Ordinary case:** Fictional teacher supplies exact descriptor and edition: quote that supplied text without adding words, then separately interpret it for a Year 9 History task and identify pedagogical choices.

**Edge:** A framework name without descriptor/version yields “Exact source wording not supplied or verified” in the existing wording section plus a provisional classroom translation. It does not produce a confident official quote or claim the latest edition was checked.

**Review question:** Supplied text is not independent official-source verification; educator/source review still determines fidelity.

### Panel Review

**Before → after:** Discovery now includes wellbeing/SEL calibration. Core exposes scope mismatch, same-session simulated perspectives, lack of independent raters and unvalidated 88/70 heuristics; outputs always carry these caveats. Segment markers no longer claim to reset context. Actual model provenance is distinguished from role design labels; example model values are explicitly illustrative. Reference-artefact checking is future work, not a completed validation receipt.

**Preserved:** Seven explicit role briefs, sequential review, all five artefact types and dimension assignments, role keys, score/mean/floor formulas, actionable critiques/flags and existing caveat field. Evidence-strength and chain normalization remain out of scope.

**Ordinary case:** Fictional wellbeing KUD receives seven role-structured perspectives; a mean above 88 with one role below 70 still yields heuristic FAIL with reasons, as in the retained example.

**Edge:** A maths scope-and-sequence request flags calibration mismatch and the existing learning-architecture caveat. Even if numerical PASS results, caveats prevent portraying it as independent expert agreement, clinical assurance or empirical validity. Running in one model reports that actual model or unknown rather than pretending separate Opus/Sonnet calls occurred.

**Review question:** Exact script discrimination, threshold calibration and useful improvement over other review formats remain unestablished; no model calls were made.

### Ladder of Inference Reflection

**Before → after:** Recent significant harm, power asymmetry and non-investigation limits now precede alternatives in core. Unsuitable cases retain output sections with explicit deferral and a safe human-led next step; self-check and final checklist agree.

**Preserved:** Observation → selection → meaning → assumption → conclusion → belief → action, tentative alternative interpretations when suitable, evidence-seeking dialogue, feelings, teacher agency and no forced forgiveness/reconciliation.

**Ordinary case:** Fictional low-stakes misunderstanding about an unanswered group message separates the observed unanswered message from the inference of rejection and offers two tentative possibilities plus respectful questions.

**Edge:** A recent serious incident between a child and powerful adult does not trigger speculative benign reinterpretations. It defers alternatives and directs appropriate safety/human-led process. It does not adjudicate facts or minimise documented harm.

**Review question:** Local safeguarding/restorative procedures and qualified facilitation remain human responsibilities, not universal procedures invented here.

## Checks actually run

- Snapshot/hash comparison against the packet: **11/11 source baselines match**; snapshots retained at `/tmp/curriculum-evidence-before-20261022` for this worker's invariant check.
- `/tmp/education-skills-audit-20261022/venv/bin/python /tmp/check-curriculum-evidence.py`: **PASS**. Checks exact raw frontmatter lines outside the three permitted one-line exceptions; every key/ID/schema/invocation field/default/citation/placeholder; each description length; prompt extraction using current loader patterns; parsing of all four JSON blocks in translator/panel examples. This is a one-off source integrity check, not a keyword-presence editorial test or runtime-model claim.
- `/tmp/education-skills-audit-20261022/venv/bin/python scripts/validate-skills.py`: **165 validated, zero errors, four existing long-file warnings**. No forced shortening.
- `git diff --check` restricted to the twelve edited source/doc paths: **PASS**.
- Manual ordinary/edge textual walkthroughs above: written procedures and examples reviewed; **no model-output comparison, learner pilot or clinical evaluation run**.
- Read-only web primary lookup: count, edition and bibliography checks described above; first eScholarship and ERIC fetch limitations recovered as disclosed. Other shell reads searched exact task/source/contract files. No servers or background processes were started.

Generated registry/bundle/export remains untouched by this packet, as instructed; the coordinator owns regeneration after content acceptance. Runtime/package test reruns and independent acceptance belong to the coordinator, not a claim made by this source-only packet. No commits or push were attempted.

## Handoff and remaining work

Ready for independent review of the exact bounded diff and these walkthroughs. No founder product decision or new authority is needed to review this candidate. Acceptance, regeneration, distribution parity and any release are not implied by this report. No educational uncertainty was converted into fabricated evidence; specific remaining questions appear above. No subagents were spawned, inherited-history exceptions were zero, source implementation had no failed fix cycle, and verified usage telemetry is unavailable.

## Exact source inventory and hashes

Both hashes are SHA-256; “before” must match the packet, “after” identifies this candidate. Paths below plus this report are the entire worker-owned delta.

| Exact path | Before SHA-256 | After SHA-256 |
|---|---|---|
| `skills/curriculum-alignment/developmental-band-translator/SKILL.md` | `b1879a0422ba0c9e68ddd74752466709d7e2327ccdedab29bd0b6599d2bd2f5e` | `1aa99b15c4e3c932543f5d12fd41536e6ccb2be27939e7cbd607c8aeb8c83205` |
| `skills/curriculum-alignment/kud-chart-author/SKILL.md` | `f597606246661031163dce8adb8abed9a7ddcd9be2daba3d6e1a8b826494bbcc` | `5f2a4845fd1ed63338c29156118153fc391aa88f2ffab70ab086a408910eb2d1` |
| `skills/curriculum-assessment/differentiation-adapter/SKILL.md` | `6545b55ca01e6eea998b9c1c808f6327a3dee87c91a4c313c4c7e6e163c35c5f` | `13b3cbb8caf57f12bb988d3c243da16b3fcb1db3c5bac797b24866f2a0c84935` |
| `skills/historical-thinking/historical-document-set-curator/SKILL.md` | `9cdcb821b2efa3905670e3eb1d898730af01ddbbb92a77d07e58bfe9717921f0` | `a148ecab5a75eb3a01b76e9a537712bf719d0440a074d4ddf2b9b75281bcb08d` |
| `skills/memory-learning-science/retrieval-practice-generator/SKILL.md` | `01182f519b7dfc6a5a204b3e49b26282f879f8b59d233fcaf1daafc3d7e43516` | `efaa81eda3c33e47ab898556d2d93a40022f09f479375421dd736557dd341f28` |
| `skills/memory-learning-science/spaced-practice-scheduler/SKILL.md` | `2718ed5b78cf3c4457a12aa5bfe53a9894f55c69d4a655049eee3f8413899bff` | `7e6af9e05bde5277598864c8bfa7f5e9f6c9318606cff1baaee378c4c9f5db2a` |
| `skills/original-frameworks/developmental-band-system-designer/SKILL.md` | `6820236c419bd6f35a6a2e3461fe6c9ababe9e888f9dc0caaa08443254f52704` | `b58bc22222acc5cc5463cc8f6eb71eeefc6bd07418102c8b4fe7c31ee9c248a6` |
| `skills/original-frameworks/dispositional-knowledge-assessment-designer/SKILL.md` | `06748a891782204684b63fc81352af58bee8759fd4e40e02b9b056887d5ce76b` | `8bfdb8fb8ff536bf67b29e8e628481b10d0f91547866b9d55ae0876342556f95` |
| `skills/professional-learning/competency-framework-translator/SKILL.md` | `9fd6bf1a6b1fd385789c70a6cdd9ef7646d558ca78273293d2a5d0978b5efbee` | `d0f2cddba419200e44fb96e5b46704e6a6fbd079d7da72c10b229ae7caeb4e2e` |
| `skills/professional-learning/panel-review/SKILL.md` | `2eb97761fb0845075715819f695fc154a57e9a90cd82e80f55383b6304323255` | `5c2b15f3c92f3ae725b1c996cc8d982bba435084c17f6096eab38ba6b048918c` |
| `skills/systems-thinking/ladder-of-inference-reflection/SKILL.md` | `15068c44ce81c6868eaac7704fc0d925fe13a32affaf8018f3caeb272d5394ae` | `9870b75aab695d85f2be04516adb5e728145af5a0165ae3933382719c28773f5` |
| `docs/EVIDENCE.md` | `cf13f018c791fa652c57b960b0a53f1726affca7aa6e76b2d54567246a8b6976` | `025dbeb91bc5cf290fbff98d64815aacf63936633a8ec41b346ed09fc4916641` |
