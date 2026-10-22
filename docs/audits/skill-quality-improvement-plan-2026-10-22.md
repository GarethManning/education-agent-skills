# Educational skill strengthening — comprehensive implementation and evaluation plan

**Date:** 22 October 2026. **Status:** proposal for subsequent authorization; planning only. **Repository:** `GarethManning/education-agent-skills`, independent open-source educational library. **Examined baseline:** main `6bbbce418f82e11044009c9f3b7373a354de5bd0`.

## 1. Intended result and scope

Make the skills more dependable, useful and economical while preserving their educational substance. Use explicit quality criteria to justify each change, correct demonstrated problems first, and retain detail that helps an educator or agent make a better decision. Do not assume a wholesale rewrite is beneficial.

The recommended programme has three separable parts:

1. **Targeted corrections:** close-read and address the 37 skills with concrete revision proposals. Several changes are only a few sentences or one example; inclusion in this queue does not mean the whole skill is poor.
2. **Selective organization:** consider the 20 reorganization candidates and the three long skills already in the revision queue. Move material only where doing so improves navigation or actual activation cost without losing functionality. A justified no-change outcome is acceptable.
3. **Durable quality control:** retain the rubric, traceable change records, focused examples and existing packaging tests. Introduce model-based task evaluation only where it answers an unresolved decision; no pilot or learner-outcome study is a prerequisite.

Keep the other 108 skills unchanged unless a newly identified, source-backed issue justifies a bounded addition. Preserve all 165 identities, existing discovery architecture, evidence grounding and useful distinctive methods. No removal is proposed.

This document does not authorize editing skills, committing, pushing, publishing a version, changing installed plugins, running paid evaluations or deploying the MCP service. The only new artifact created for this request is this plan. Earlier audit and review artifacts remain intact.

### Authoritative inputs and their limits

- [Quality rubric](skill-quality-rubric-2026-10-22.md): eight criteria, task-family distinctions and refinement rules.
- [Quality review](skill-quality-review-2026-10-22.md), [165-skill matrix](skill-quality-review-matrix.csv), and [structured evidence](skill-quality-review-evidence.json): proposed actions, source hashes, line evidence, material to preserve, core instructions and potential references.
- [Standards audit](agent-skills-standard-audit-2026-10-22.md), [separate infrastructure migration plan](agent-skills-migration-plan.md), and [audit evidence](agent-skills-audit-evidence.md): packaging, validation, client integration and security work. This plan coordinates with that work; it does not silently expand its scope or approve it.
- [AGENTS.md](../../AGENTS.md), [CLAUDE.md](../../CLAUDE.md), [CONTRIBUTING.md](../../CONTRIBUTING.md), [STATE.md](../../STATE.md), [evidence guidance](../EVIDENCE.md) and [exclusions](../EXCLUSIONS.md): local conventions and current inclusion policy. Historical state is context; the actual source inventory is authoritative for counts.

The review screened all 165 source files and recorded 1,320 criterion judgments. Independent full-file inspection covered 28 skills; the other 137 received structured screening and selected deeper checks. This is unequal-depth static review, not observed model performance or a certification of educational effectiveness. Before editing a candidate, read its complete file, immediate producer/consumer contracts and the relevant cited source passages. Withdraw or narrow a finding if that closer read does not support it. Do not begin with another compulsory whole-library audit.

## 2. What excellence means and how to judge it

Existing educational inclusion/exclusion requirements remain the eligibility baseline. The following criteria assess how well an eligible approach is implemented as an agent skill. Agent Skills format compliance and vendor writing guidance do not supply a complete usefulness rubric.

| Criterion | Question for the reviewer | Sufficient evidence for accepting an improvement |
|---|---|---|
| C1 Purpose and selection | Is the job, user and appropriate trigger clear? | Description/body scope agrees; realistic use and non-use cases can be distinguished. |
| C2 Added expertise | Does the skill add specific educational judgment? | Named distinctions, decision rules or procedures remain available; generic encouragement has not replaced expertise. |
| C3 Coherence and actionability | Do inputs, branches, examples and handoffs agree? | The actual contradiction is resolved; the same case follows the same rule in the core and example. |
| C4 Evidence integrity | Are claims accurate, traceable and proportionate? | A disputed claim is checked against its primary source; quotation, interpretation, evidence and heuristic are distinguished. |
| C5 Context and agency | Does the approach handle readiness, access and user choice? | Relevant edge cases have a usable branch; existing support and teacher/learner judgment survive the edit. |
| C6 Practical usefulness | Is the promised output usable with proportionate effort? | The artifact answers the stated task; next action, assumptions and implementation burden are clear where relevant. |
| C7 Boundaries and recovery | Can the user recover safely when the ordinary path is unsuitable? | The necessary exception is present at the decision point on each delivered surface; no invented learner evidence or false completion. |
| C8 Economy and organization | Is each piece of information in the right place? | Essential rules remain immediately available; optional detail has a clear loading condition and works outside the repository where supported. |

Retain **supported in text / concern / not established**, with an explanation and source reference. Do not average eight scores into a pass mark. Correctness, support or safeguarding problems cannot be offset by polished prose. A source reviewer may accept an editorial fix; that does not establish consistent agent adherence.

For every proposed edit, record: the specific problem, affected criterion, source passage, smallest correction, preserved behavior, affected delivery surfaces, and a concrete acceptance example. Avoid adding boilerplate to satisfy a checklist. Original practitioner methods can be useful without a trial of their exact script, provided their status and limitations are honest.

### Practical acceptance rules

A content packet is ready for integration when its identified concerns are resolved or explicitly withdrawn with evidence; protected behavior is preserved; examples and interfaces agree; necessary boundaries survive delivery; applicable checks pass; and remaining unknowns are reported. A known consequential unresolved issue must not be labelled accepted. A deferred optional improvement does not block an otherwise sound correction.

Use task-family judgment: an assessment skill must assess the intended construct; a curriculum mapper must preserve source voice and ambiguity; a live tutoring skill needs bounded interaction and honest assistance records; a wellbeing planning skill must avoid diagnosis, forced disclosure and unsupported intervention claims. There is no compulsory universal template.

## 3. Evaluation design: useful evidence without a research programme

### Layer A — packaging and contract checks

Use existing validators and tests for deterministic properties: parseability, IDs, required fields, registry/bundle freshness and server contracts. Add only focused checks needed for newly introduced resource handling or a verified regression. A keyword assertion such as “contains the word agency” is not a quality test. Format checks cannot establish helpfulness.

### Layer B — expert source review and concrete cases

This is the default acceptance route for the proposed corrections. Read the whole affected skill, inspect the exact diff, review its educational claims and walk through the named ordinary and edge cases. The reviewer must give reasons and identify regressions, not merely approve the rubric labels. Retain a fictional case showing why the change is better; do not call a manually reasoned walkthrough an executed model test.

Use the case already implicated by the defect where possible: missing confidence, a novice without prerequisites, persistent targeted mockery, a raw curriculum document, or the incorrect transfer example. Include an ordinary successful use to protect the useful method. Cases should be proportionate to the change; one citation correction does not need a new benchmark suite.

Use an independent content reviewer for substantive educational changes, particularly Q1 and changes to evidence meaning. A model review can challenge reasoning and detect inconsistency; it does not replace qualified human review of consequential safeguarding/response protocols. Prepare a concrete draft and evidence before seeking that specialist input. If such expertise is unavailable, defer the consequential protocol revision or limit acceptance to the uncontroversial editorial correction, with the remaining concern explicit.

### Layer C — task-output comparison, when an actual question remains

Use this to decide, for example, whether removing material worsens task quality or whether a new branch functions in a real agent. It is not a mandatory pilot. Do not delay obvious factual or contradictory-instruction corrections until it exists, and do not claim a shortened version is better merely from its token count.

A future lightweight harness would:

1. Define the exact decision and task-specific acceptance rubric before generating outputs. Freeze cases and candidate revisions; do not change expectations to favor a preferred version.
2. Compare **current skill versus revised skill** on the same model, settings, tools, sources, inputs and context budget. Include **no skill** only when testing the skill's added value. Keep the same tool/resource access across versions; if retrieval design is the intended variable, document that exception and inspect read traces.
3. Separate explicit execution from discovery: a good answer after forcibly injecting a skill does not prove that an installed agent will choose it. Assess matching and adjacent non-matching prompts separately with the actual installed inventory when discovery is in scope.
4. Use a small, deliberately varied case set: normal task, missing/ambiguous input, relevant access or readiness variation, recovery, and any specific safety/evidence edge case. Use fictional/minimized information. Include plausible non-trigger cases for activation changes. Do not impose the same number of cases on every skill.
5. Retain model/version, parameters, complete delivered prompt/resource versions, output, errors, tool/resource reads, latency and measured input/output tokens where available. A repeated run of the unchanged version helps reveal ordinary variation; repeat close decisions rather than treating one lucky output as decisive.
6. Blind version identity and randomize comparison order for reviewers; check position/verbosity preference by swapping a subset. Judge educational correctness, task completion, usability, fidelity and agency with task-specific anchors. Report critical violations separately and preserve ties/uncertainty.
7. Prefer a version only when the evidence supports the stated benefit without a material regression. For reorganization, equivalent task quality plus lower unnecessary context or clearer retrieval may be enough; there is no required percentage reduction. Report counts and paired outcomes, not spurious statistical certainty from a small set.

If automated judges are later useful, calibrate them against educator-reviewed examples, check agreement and consequential false negatives, and manually inspect disagreements. Do not use the library's own panel-review score or unvalidated 88-point gate as an independent quality standard. Maintain a small unseen regression set if repeated tuning begins; record cases used for development so benchmark overfitting is visible. A judge's prompt and model are versioned evaluation dependencies.

### Minimal future case/result records

These are proposed fields, not files or a harness created by this planning task. If Layer C is authorized, start with plain JSONL and a small runner rather than an evaluation platform. Suggested locations: `evals/skill-quality/cases.jsonl`, `evals/skill-quality/README.md`, and `scripts/evaluate-skill-quality.py`; select the runner interface only after inspecting available agent execution paths. Keep generated transcripts under a designated ignored local results directory, with reviewed summaries committed only when separately authorized.

A case records `case_id`, `skill_id`, task family, revision, input/context, delivery mode, criteria tested, expected properties, prohibited outcomes, relevant resources and provenance. A result records the case, candidate/source hashes, actual client/model/settings, delivered content, resource reads, output/error, execution time/cost if available, reviewer identity, judgments, and whether the case was seen during development. Add `execution_status` so not-run, manually walked through and actually executed are distinct. Never place credentials, real student plans or identifying learner records in fixtures/results.

### What this evaluation can and cannot establish

It can establish a source contradiction was removed, a specific agent completed a defined task, or one candidate was preferred under recorded conditions. It cannot prove classroom learning benefit, universal model behavior, diagnostic validity or safe implementation in every school. Those limits should not obstruct useful instruction improvements.

## 4. How to improve length without losing expertise

The review measured 23 bodies above 5,000 proxy tokens, 50 full files including metadata above that level, and only one extracted MCP prompt above it. Median body and MCP prompt were 3,895 and 1,118 tokens. Counts use tiktoken 0.14.0 / `o200k_base`; they are not Claude token counts or observed billing. Length is a screening signal, not a quality grade or a strict specification failure.

For each candidate, make a section map: essential execution rule, decision-relevant exception, short worked example, extended example, research explanation, alternative template, or duplicated explanation. Record what error each section prevents. Remove genuine duplication; correct flawed examples before moving them. Keep distinctive concepts, rationale needed for judgment and a compact example close to the workflow.

**Core must retain:** task/scope, indispensable inputs, important distinctions, main decisions, required output semantics, appropriate exceptions, uncertainty, and stop/recovery behavior. **References may hold:** long transcripts, additional examples, research exposition and optional component detail. Use skill-local paths such as `references/worked-examples.md` or `references/research-notes.md` with an explicit “read when …” pointer. Do not create extra discoverable `SKILL.md` files just to split a long guide.

Two delivery constraints matter:

- A local client can potentially read skill-local references, but the complete folder must travel together. Check selected single-skill copies outside the repo; do not introduce a dependency on a repository-root guide or sibling skill for basic execution.
- The current MCP adapter extracts Prompt/System Prompt; it does not automatically serve surrounding Markdown or new reference files. Keep essential rules inside that extracted text. For a source-only organization change, aim to preserve extracted prompt text exactly. If the MCP prompt changes intentionally, assess its behavioral delta explicitly. A relative path that the hosted client cannot read is not progressive disclosure.

Do not build a reference-serving system merely to achieve a token target. First use concise inline rules and move human-facing optional explanation only where the resulting resource is accessible. If a proposal genuinely requires new runtime resource delivery, defer that portion into a separately scoped infrastructure change.

For `dispositional-knowledge-assessment-designer`, clarify design versus implementation workload first. Component selection may be helpful, but cannot silently replace mandatory outputs or change required inputs. A compatible explanation of components and optional references can proceed independently; a selectable-output interface needs an explicit contract decision and backward-compatible default. Apply the same restraint to all 20 advisory reorganization candidates: “retain as is” is a valid documented outcome.

## 5. Protected remainder and compatibility

| Preserve | How to verify |
|---|---|
| All 165 paths, names and stable IDs | Compare inventory and hashes to the frozen baseline; no flattening, renaming or duplicate old/v2 skills. |
| Existing inclusion/exclusion policy and named research | Review changed claims against sources; retain citations and distinguish corrections from removal. No generic rewriting or automatic evidence-rating downgrade. |
| Existing inputs, outputs, optional defaults and invocation intent | Compare schemas and producer/consumer uses. Keep 12 explicit-only skills explicit-only; do not broaden automatic activation as a side effect. |
| Distinctive methods and teacher/learner judgment | Review ordinary successful cases and each record's `preserve`/`mandatory_core` entries. Productive challenge, reflective practice and original frameworks remain. |
| Canonical source plus registry and MCP snapshot | Regenerate from the source; no manually maintained second library. Retain expected 165 prompts and 157 tools (153 skill tools plus four discovery tools). |
| Current audit evidence and user work | Leave original review files intact; record new outcomes separately and never sweep all untracked files into a commit. |

### Metadata rule and necessary exceptions

`AGENTS.md` requires preserving frontmatter fields exactly. The default implementation envelope therefore changes Markdown body content only and preserves the complete frontmatter bytes. This is stricter than merely preserving field names.

A few proposals implicate protected values: source counts in `evidence_sources` for spacing; panel-review's discovery description; ambiguous workload metadata; unsupported evidence labels; suggested-chain references; any proposed input/output change. A later implementation brief must explicitly authorize the exact fields/values it intends to correct as a bounded supersession. Do not infer that ordinary editorial approval permits these changes. Prepare the exact proposed value and justification first, so any required decision is concrete. Do not rename/delete fields or change meanings merely to satisfy a validator.

If the body correction can be made coherently without touching metadata, do that portion. If leaving metadata would preserve a contradiction, keep that item pending rather than declare it complete. Do not substitute a new required input to solve a body ambiguity. Where an existing placeholder is unused, prefer clarifying its use without changing its schema; removal is a contract change requiring separate authority.

## 6. Execution sequence and work packets

These are manageable implementation packets, not mandatory separate PRs, new tasks or worker sessions. One implementer may complete several coherent packets, closing each before starting the next. Exact membership and acceptance cases follow below; Appendix A supplies per-skill deltas and evidence. A packet may be subdivided if its review burden is too large.

### Stage 0 — freeze and prepare, before source edits

1. Confirm repository, remote, current revision and working tree. Reconcile drift from the examined baseline; never pull/reset/stash automatically. The current audit files are untracked local artifacts, not permission to discard or publish them.
2. Preserve the accepted baseline in Git when implementation/versioning is authorized, using a clear local tag or immutable commit reference; record source hashes from the evidence JSON. A local tag is not automatically pushed. Protect any later user changes before editing.
3. Establish an explicit changed-file list and protected remainder. Read complete candidate files, source evidence and immediate contracts; retain, narrow or withdraw each finding. No need to reread 165 unmodified files before the first narrow correction.
4. Resolve the exact metadata/contract exceptions needed for the first packet. Continue independent body-only work where an unrelated exception is pending.
5. Record actual existing test baseline from a clean build. Prior audit results are evidence, not a permanent green certificate. Existing scripts must be examined before first execution in the implementation environment. No hosted endpoints or install locations are mutated for a baseline.

**Finish:** reproducible revision/hash reference, explicit packet scope, known baseline test status and no unexplained source drift. Stage 0 creates no new educational policy.

### Stage 1 — targeted content corrections

Default order is Q1–Q10. Q1 addresses consequential support first, Q2–Q3 prevent false evidence and trapping interaction, then consistency, research and practical usability. Mechanical factual corrections can be advanced when independent; do not let a pending specialist decision stop unrelated work. Each packet closes with a source diff, applicable checks, review verdict and regenerated artifacts if accepted.

#### Q1 — Support, disclosure and safeguarding (4 skills)

**Exact source scope:**

- [wellbeing-motivation-agency/trauma-informed-practice-designer](../../skills/wellbeing-motivation-agency/trauma-informed-practice-designer/SKILL.md)
- [wellbeing-motivation-agency/restorative-practice-protocol-designer](../../skills/wellbeing-motivation-agency/restorative-practice-protocol-designer/SKILL.md)
- [wellbeing-motivation-agency/ruler-emotional-literacy-sequence](../../skills/wellbeing-motivation-agency/ruler-emotional-literacy-sequence/SKILL.md)
- [original-frameworks/inclusive-design-orchestrator](../../skills/original-frameworks/inclusive-design-orchestrator/SKILL.md)

**Allowed delta:** Put suitability, existing support, privacy choices and immediate-safety/local-plan boundaries before consequential advice. Preserve calm, inclusive educational practice. Do not invent a universal clinical or legal protocol.

**Acceptance examples:** Check an existing support plan, urgent access need, persistent targeted mockery, refusal to disclose emotion, and an immediate-danger disclosure. Routine classroom support remains usable; the worked examples follow the core. Consequential response wording needs qualified human review before being described as substantively accepted.

#### Q2 — Honest learner evidence (3 skills)

**Exact source scope:**

- [student-learning/ai-claim-checker](../../skills/student-learning/ai-claim-checker/SKILL.md)
- [student-learning/confidence-calibration-check](../../skills/student-learning/confidence-calibration-check/SKILL.md)
- [student-learning/weekly-agency-review](../../skills/student-learning/weekly-agency-review/SKILL.md)

**Allowed delta:** Separate observation, self-report, estimate, hypothesis and verified fact; retain the checking-plan exercise and reflective purpose.

**Acceptance examples:** Accurate AI content can receive justified agreement; a proposed check is not reported as performed. Missing confidence stays unknown or is requested. A recalled week is labelled as an estimate; incomparable tasks do not establish causal dependence or improvement. No automatic record persistence is implied.

#### Q3 — Finite challenge and accessible recovery (5 skills)

**Exact source scope:**

- [student-learning/productive-failure-protocol](../../skills/student-learning/productive-failure-protocol/SKILL.md)
- [student-learning/retrieve-first-gate](../../skills/student-learning/retrieve-first-gate/SKILL.md)
- [student-learning/explain-first-interrogator](../../skills/student-learning/explain-first-interrogator/SKILL.md)
- [student-learning/progressive-hint-ladder](../../skills/student-learning/progressive-hint-ladder/SKILL.md)
- [student-learning/unassisted-evidence-checkpoint](../../skills/student-learning/unassisted-evidence-checkpoint/SKILL.md)

**Allowed delta:** Keep productive struggle, retrieval, self-explanation, graduated hints and honest unassisted evidence. Add appropriate finite recovery, access, pause and stop routes.

**Acceptance examples:** Review a correct-first response, missing prerequisites, an alternative response mode, repeated unsuccessful attempts and a request to stop. A learner can receive foundation support or leave without a false pass. Frustration alone is not diagnosed as optimal challenge. Exact attempt counts remain adaptable heuristics.

#### Q4 — Consistent learning workflows and examples (5 skills)

**Exact source scope:**

- [student-learning/fading-manager](../../skills/student-learning/fading-manager/SKILL.md)
- [student-learning/stuck-and-error-diagnosis-coach](../../skills/student-learning/stuck-and-error-diagnosis-coach/SKILL.md)
- [student-learning/transfer-bridge](../../skills/student-learning/transfer-bridge/SKILL.md)
- [student-learning/srl-session-wrapper](../../skills/student-learning/srl-session-wrapper/SKILL.md)
- [student-learning/teach-back-evaluator](../../skills/student-learning/teach-back-evaluator/SKILL.md)

**Allowed delta:** Align rules, evidence labels, examples, placeholders, phase transitions and feedback. Correct mathematical/construct errors while preserving the intended tutoring method.

**Acceptance examples:** Three-session fading rule and worked record agree; producer/consumer labels match. Resolve the 2.5-versus-2 example and time-free kinematics case. Transfer checks the claimed shared mechanism and labels assistance. Mid/closing SRL phases recover missing goal context without pretending a timer exists. Teach-back result matches evidence and can end with an unresolved gap.

#### Q5 — Curriculum and source handoffs (3 skills)

**Exact source scope:**

- [curriculum-alignment/developmental-band-translator](../../skills/curriculum-alignment/developmental-band-translator/SKILL.md)
- [curriculum-alignment/kud-chart-author](../../skills/curriculum-alignment/kud-chart-author/SKILL.md)
- [professional-learning/competency-framework-translator](../../skills/professional-learning/competency-framework-translator/SKILL.md)

**Allowed delta:** Make branch precedence and data handoffs coherent; distinguish exact source text from interpretation.

**Acceptance examples:** Review age override, absent age and flat-framework cases. Raw curriculum documents are decomposed before a consumer requiring decomposed JSON. Missing official wording produces an explicitly labelled interpretation or source request, never a fabricated quotation. Preserve existing identifiers and uncertainty flags.

#### Q6 — Research precision and retrieval consistency (4 skills)

**Exact source scope:**

- [memory-learning-science/retrieval-practice-generator](../../skills/memory-learning-science/retrieval-practice-generator/SKILL.md)
- [memory-learning-science/spaced-practice-scheduler](../../skills/memory-learning-science/spaced-practice-scheduler/SKILL.md)
- [curriculum-assessment/differentiation-adapter](../../skills/curriculum-assessment/differentiation-adapter/SKILL.md)
- [original-frameworks/developmental-band-system-designer](../../skills/original-frameworks/developmental-band-system-designer/SKILL.md)

**Allowed delta:** Correct narrow evidence claims and contradictions; preserve accepted educational approaches and original-framework status.

**Acceptance examples:** Novice recognition exception agrees with the self-check; taught-source verification appears in the active prompt. Verify Cepeda source/count, distinguish an example timetable from a proven optimum, and qualify forgetting generalizations. Identify the CAST edition accurately. Supporting mixed-age research is not called validation of the entire original architecture.

#### Q7 — Agency, motivation and feasible support (5 skills)

**Exact source scope:**

- [wellbeing-motivation-agency/agency-scaffold-generator](../../skills/wellbeing-motivation-agency/agency-scaffold-generator/SKILL.md)
- [wellbeing-motivation-agency/implementation-intention-designer](../../skills/wellbeing-motivation-agency/implementation-intention-designer/SKILL.md)
- [wellbeing-motivation-agency/flow-state-condition-designer](../../skills/wellbeing-motivation-agency/flow-state-condition-designer/SKILL.md)
- [wellbeing-motivation-agency/motivation-diagnostic-task-redesign](../../skills/wellbeing-motivation-agency/motivation-diagnostic-task-redesign/SKILL.md)
- [wellbeing-motivation-agency/self-efficacy-builder-sequence](../../skills/wellbeing-motivation-agency/self-efficacy-builder-sequence/SKILL.md)

**Allowed delta:** Use learner perspective and observed access/prerequisite needs; make progression, cues and recovery usable without unsupported psychological conclusions.

**Acceptance examples:** Review refusal, an access barrier, repeated error, a student-endorsed goal and an internal cue. Preserve learning objectives, necessary foundation work and assistive tools. Do not infer motivation from task design alone, promise flow/success, or treat difficulty as proof of learning. Heuristic thresholds are labelled and adjustable.

#### Q8 — Wellbeing design and proportionate claims (4 skills)

**Exact source scope:**

- [wellbeing-motivation-agency/awe-wonder-experience-designer](../../skills/wellbeing-motivation-agency/awe-wonder-experience-designer/SKILL.md)
- [wellbeing-motivation-agency/belonging-classroom-culture-designer](../../skills/wellbeing-motivation-agency/belonging-classroom-culture-designer/SKILL.md)
- [wellbeing-motivation-agency/perma-based-lesson-designer](../../skills/wellbeing-motivation-agency/perma-based-lesson-designer/SKILL.md)
- [wellbeing-motivation-agency/wellbeing-learning-connection-mapper](../../skills/wellbeing-motivation-agency/wellbeing-learning-connection-mapper/SKILL.md)

**Allowed delta:** Retain useful planning lenses and classroom practices; remove compulsory emotional responses, diagnostic shortcuts and unsupported local impact claims.

**Acceptance examples:** A user may decline personal disclosure; quietness/eye contact are ambiguous signals. Provide accessible alternatives and keep the learning objective visible. PERMA mapping may leave elements unaddressed. An evidence map preserves unknown/null/negative findings, labels fictional assumptions and does not transfer an unrelated effect size or invent a local trend.

#### Q9 — Essential limits on the MCP surface (2 skills)

**Exact source scope:**

- [historical-thinking/historical-document-set-curator](../../skills/historical-thinking/historical-document-set-curator/SKILL.md)
- [systems-thinking/ladder-of-inference-reflection](../../skills/systems-thinking/ladder-of-inference-reflection/SKILL.md)

**Allowed delta:** Place concise provenance/suitability limits inside the actual extracted prompt; keep full supporting explanation accessible.

**Acceptance examples:** An unavailable/unverified historical document is labelled as a proposal, not supplied evidence. Recent significant harm or power asymmetry triggers an appropriate suitability boundary before reflection. Inspect both full file and bundled prompt; a caveat only in Known Limitations is insufficient for this packet.

#### Q10 — Large original workflows and clear scope (2 skills)

**Exact source scope:**

- [original-frameworks/dispositional-knowledge-assessment-designer](../../skills/original-frameworks/dispositional-knowledge-assessment-designer/SKILL.md)
- [professional-learning/panel-review](../../skills/professional-learning/panel-review/SKILL.md)

**Allowed delta:** Clarify workload, intended use and heuristic status; retain distinctive multi-component assessment and useful review perspectives. Consider organization only after correcting the identified issue.

**Acceptance examples:** Distinguish design time from implementation workload; keep observation, multi-informant judgment and optional caregiver involvement. Existing output contract remains available. Panel scope is visible in the body; thresholds are practitioner heuristics and simulated roles are not independent raters. Any description/metadata edit or component-selection schema change needs its specifically authorized exception before implementation.

### Stage 2 — selective reorganization

Start after content corrections for any overlapping skill. The 20 skills below have organization opportunities, not established defects. Before editing each, choose the sections to move, demonstrate their new accessibility and explain the benefit. Preserve the current active prompt if only surrounding exposition moves. Check the three long revised skills—dispositional assessment, panel-review and KUD chart author—inside their original Q packets or a subsequent bounded follow-up, never with competing ownership.

| Packet | Scope | Size and intended treatment |
|---|---|---|
| R1 | Original-framework guides | 4 skills; retain core and correct examples, consider skill-local optional references. Exact paths and measured sizes in Appendix B. |
| R2 | Curriculum design guides | 5 skills; retain core and correct examples, consider skill-local optional references. Exact paths and measured sizes in Appendix B. |
| R3 | Professional-learning guides | 3 skills; retain core and correct examples, consider skill-local optional references. Exact paths and measured sizes in Appendix B. |
| R4 | Historical inquiry and work-cycle guides | 4 skills; retain core and correct examples, consider skill-local optional references. Exact paths and measured sizes in Appendix B. |
| R5 | AI learning-science guides | 4 skills; retain core and correct examples, consider skill-local optional references. Exact paths and measured sizes in Appendix B. |

**Finish:** each candidate has an accepted reorganization or an explicit no-change rationale; all mandatory instructions remain available; moved material is preserved and linked; intended distribution paths work. No required token-reduction target. An accepted no-change decision is not counted as an edited skill.

### Stage 3 — quality records and contributor guidance

Once the approach has survived actual accepted edits, add concise guidance to `CONTRIBUTING.md` and, if useful, a focused `docs/SKILL_QUALITY.md`; link rather than duplicate the full rubric. State the eight criteria, task-family distinctions, evidence-versus-heuristic rule, source/core parity, data minimization where relevant, and the required change rationale. Preserve current inclusion/exclusion policy. Do not declare this proposal the project's policy before authorization.

Keep a compact change ledger with skill ID, packet, baseline/candidate hashes, finding and evidence, preserved behavior, changed surfaces, metadata exception if any, checks actually executed, review result and remaining limitations. Suggested future location: `docs/audits/skill-quality-change-log.md`. Retain the original matrix as the historical review; create an updated disposition record rather than silently making old proposed judgments look like accepted fixes. Status values can be `planned`, `in review`, `accepted`, `withdrawn`, `deferred`, `reverted`.

Add automation only for demonstrated maintainable checks. Do not encode every editorial preference as a test, create a second scored quality standard, or require a model call on every contribution. Layer C can remain an optional local workflow until its value and operating cost are established.

### Stage 4 — integrated acceptance and separately authorized distribution

Verify the combined content, generated views and ordinary installed-client behavior where practical, retaining exact client versions and clearly marking untested clients. Local package checks do not establish that the hosted service has updated. Claude local full-file delivery, Codex local discovery and MCP extracted-prompt delivery are separate surfaces; one successful smoke does not certify all three.

If installing/updating a real user's client is outside the authorized scope, use an isolated test location. Record what is discoverable, explicitly invocable, readable and correctly bounded, plus what cannot be tested. Do not overwrite existing installations or credentials just to collect evidence. Do not call a documented expectation a verified result.

Only after explicit release authority should accepted commits/tags be published or distribution updated. A deployment needs its own authorization; plan approval, a passing test or a pushed source commit does not authorize a hosted build/deployment. Recheck the relevant client/security facts at implementation time rather than copying old advisory status.

## 7. Verification commands and evidence contract

The commands below are **planned implementation checks**, not commands all executed to create this plan. Run from the indicated repository directory after behavior-changing work and dependency/script inspection. Use temporary isolated copies for checks with generated output when needed; do not let tests alter unapproved live services. Existing dependencies may be reused if their identity is known; examine install hooks before installing. Do not blindly run remote installer commands or `npm audit fix --force`.

```bash
# Begin in the repository root; regenerate accepted source views first.
python3 scripts/generate-registry.py
cd mcp-server
npm run bundle-skills
npm run build
npm test
cd ..

# Validate the regenerated source views and run root tests without the hosted smoke.
python3 scripts/validate-skills.py
python3 scripts/validate-registry.py
env -u HOSTED_MCP_BASE_URL npm test
```

Run checks against the regenerated candidate, rather than mistaking an intentionally stale pre-edit snapshot for a regression. Inspect root and MCP test configuration/environment so hosted tests stay skipped unless separately authorized. `build` must precede MCP tests to avoid confusing stale ignored `dist/` output with current source behavior. Capture pass/fail/skip counts and reason; do not claim unexecuted checks passed. Run the complete applicable suites once after a packet's final relevant change; repeat only for further changes or an unresolved concern. Pure plan/contributor documentation edits need lightweight consistency/link checks, not model benchmarks.

Additional packet checks:

- Inventory remains 165 unique skill identities; no unexpected change to the 108 keep files. Compare raw frontmatter and semantic contracts; any exception must match its exact approved scope.
- Compare generated registry and bundle to canonical sources; account for a registry generation timestamp rather than ignoring semantic differences. Expected baseline remains 165 MCP prompts, 157 tools and 12 explicit-only skills unless separately approved behavior changes.
- For changed skills, inspect the actual MCP-extracted prompt and local full-file content; core safeguards, required distinctions, defaults and output meaning agree. Preserving full-body text elsewhere does not compensate for losing a core rule.
- Check all newly added/moved relative paths, skill-local copying, no traversal/out-of-bundle dependencies, source/citation preservation and worked-example correctness. Include resource files in any later accepted commit/package.
- An official Agent Skills validator result belongs to the standards lane. Do not expect quality-only body edits to turn the current rich-frontmatter source profile into a strict reference-validator pass. If an approved portable export is implemented, run the pinned reference validator on that export separately. Record project validation and official validation as different results.

For each packet, deliver a plain-English result, exact changed paths, before/after rationale, protected behavior, tests and review actually completed, unresolved questions, and rollback unit. Keep generated outputs with the corresponding source revision. No “all green” claim if required source checks or specialist review remain unresolved.

## 8. Relationship to standards, installation and security work

Content quality and open-standard packaging are related but separate. Preserve the domain structure, canonical skills, registry, Claude/Codex plugin adapters and MCP service where useful. Do not flatten or rewrite skills to look more standard. The existing [migration plan](agent-skills-migration-plan.md) contains exact infrastructure findings and proposed tests; refresh its time-sensitive facts before execution.

| Existing infrastructure proposal | Relationship to this content plan |
|---|---|
| Restrict skill frontmatter parsing to safe YAML; update vulnerable dependencies and justified input bounds | Keep in a separate reviewed change. Required before treating arbitrary newly supplied skill files as safe to execute; source close-reading and planning can continue independently. Do not mix a content rollback with restoration of unsafe parsing. |
| Correct Codex marketplace path/installation guidance and explicit-only policy | Helps installation/discovery. It does not change educational writing or prove activation in all clients. Test in isolation; do not silently alter installed clients. |
| Document or generate a strict portable profile while retaining rich source metadata | Potential standards benefit, not a prerequisite for educational corrections. Any export must preserve identity, schemas, references and essential body instructions; do not hand-maintain 165 duplicate copies. |
| Fix template replacement and package/build freshness | Separate functional reliability work. Preserve required inputs/outputs and use the existing regression contracts. |
| Evidence index citation correction, optional chains and evidence-label definitions | Coordinate ownership with Q6/Q10 and affected records; make each correction once. Correct `docs/EVIDENCE.md`'s Woloshyn reference from the primary bibliographic source when that documentation change is authorized. Missing suggested-chain entries are advisory unless a workflow actually requires them. |

Do not require every infrastructure recommendation to finish before a sound source correction can be accepted. Conversely, a content improvement is not evidence that outstanding parser, dependency or installation issues are resolved. Maintain separate acceptance and release receipts for each lane.

## 9. Versions, preservation and rollback

**Default recommendation:** improve current skill files in place, preserve old versions in Git, and keep IDs/paths stable. Do not make users choose between two active versions of every skill. Historical versions belong in immutable revisions and release tags, with a short changelog explaining meaningful changes.

Before a future accepted edit, record the baseline revision and source hash; after acceptance, retain the candidate revision/hash, rationale, tests and resources. Repository-level release versioning should follow existing project convention, inspected at implementation time. Do not invent an open-standard version requirement or silently increment protected per-skill metadata. A content correction can be behaviorally meaningful even if it needs no new identity.

Classify changes explicitly:

- **Compatible correction:** accurate claim/example, consistent branch, clearer safeguard or optional explanation within the same job and contract. Stable path/ID; document meaningful change.
- **Compatible organization:** optional reference files with essential rules still available and unchanged inputs/outputs. Preserve full folder distribution and standalone behavior.
- **Potentially breaking:** new required input, removed output, changed state vocabulary without consumer handling, materially different target audience/pedagogy, or an inaccessible new dependency. Stop that delta for a concrete contract decision. Prefer a backward-compatible adapter/default where appropriate; only a genuinely distinct job warrants a new skill identity.

Use small logical commits **when committing is authorized**, with source plus regenerated registry/bundle together and security changes kept separate. This is an audit working tree with untracked artifacts; never use `git add -A`, destructive reset or blanket cleanup as a preservation strategy. Do not push local tags, archive copies or documentation automatically.

**Rollback sequence:** identify the failed accepted packet and downstream dependencies; preserve current user work; revert the packet's source/reference changes and regenerate registry/bundle from the restored source; run the relevant checks; record the reverted status and reason. If later packets depend on it, adapt or revert those deliberately in reverse dependency order. Keep independent security fixes. Avoid reverting a whole old generated snapshot if that would overwrite subsequent accepted skills. A hosted deployment, if one was separately authorized, needs an explicit operational rollback procedure and authority; a source revert alone does not prove the service changed.

## 10. Ownership, effort and stop conditions

Use one implementation owner at a time by default, with bounded independent review. Give an implementer exact revision, allowed files, protected remainder, findings, acceptance examples and stop condition; no need to inherit the whole conversation. Keep the sequence and integration owner explicit. Only parallelize genuinely independent read-only reviews or isolated packets when expected time saved exceeds coordination cost; do not let two workers edit the same candidate, bundle or generated registry.

The work is not 57 full rewrites: 37 targeted review/correction candidates plus 20 optional organization decisions. Size the work by changed claims, workflow branches, interfaces and review needs:

| Work type | Relative effort | Main uncertainty |
|---|---|---|
| Citation/wording/example correction | Small | Locating and checking exact primary evidence, protected metadata overlap. |
| Branch, handoff or live-interaction correction | Small to medium | Related consumers, honest state labels and accessible recovery. |
| Consequential support/safeguarding guidance | Medium, expert-dependent | Qualified review and local-plan boundary; do not replace it with confident generic advice. |
| Long-guide organization | Medium; optional | Preserving useful context, reference accessibility and actual benefit. |
| Model comparison runner or runtime resource delivery | Separately scoped | Agent execution interface, budget, calibration and maintenance burden. |

Do not promise a multi-day migration from file count alone. Capture actual active edit/review time, rework and test time from completed packets, then update the remaining estimate. Waiting for specialist input is a different constraint from coding time. Existing package standards fixes have their own plan and estimate; do not inflate the educational work by folding everything into one number.

Stop only the affected delta when it requires an unapproved schema/metadata change, an unresolved educational meaning decision, missing qualified review for consequential advice, real learner data, paid API budget, live-client mutation, external publication or deployment. Prepare the exact proposed change and its consequences first, then request the smallest needed decision. Continue unrelated authorized work. Do not mark a proposal as a founder decision or a pending check as complete.

### Ready-to-use implementation brief pattern

For each authorized packet, the handoff should contain:

- **Outcome:** resolve the named findings, preserving the rest of the method.
- **Baseline:** exact checkout/revision and source hashes; current working-tree notes.
- **Allowed delta:** the packet's source paths, approved metadata exceptions, needed skill-local references and generated registry/bundle. No unrelated cleanup.
- **Protected remainder:** IDs, paths, schemas/defaults, citations, invocation intent, original practitioner status and the listed methods/safeguards.
- **Evidence:** relevant Appendix A entries, full source record and direct primary-source passages for disputed claims.
- **Acceptance:** the packet examples plus applicable Section 7 checks and independent review; distinguish manual review from actual execution.
- **Stop condition:** unresolved pedagogical/interface meaning or consequential authority question; preserve a concrete candidate and continue unrelated in-scope work.
- **Closure:** accepted/deferred/withdrawn/reverted disposition, changed files, check counts, remaining limits, rollback reference and actual effort. If delegated, record worker count/peak, inherited-history exceptions, model mix, first-pass acceptance, rework and available usage telemetry.

## 11. Completion and deliberately excluded work

The programme is complete when every proposed revision has an evidenced disposition, accepted changes are checked and reviewed, organization candidates have a reasoned outcome, generated views agree, protected skills/contracts remain intact, and outstanding issues and distribution status are clearly documented. Completion does not mean every suggestion must be implemented, every client must be certified, or every skill must become shorter.

Preserve the useful educational library, rich metadata, original methods, existing inclusion policy and multiple delivery paths. Avoid bulk rewrites, blanket shortening, arbitrary scores, 165 duplicate v2 directories, automatic rating downgrades, new required inputs as a convenience, compulsory research pilots, model-judge approval theatre and architecture changes without a demonstrated problem. Make each accepted edit earn its place through a specific improvement.

## Appendix A — exact revision queue, changes and source evidence

The following entries use the prior review's structured records and assign each revision once to a primary packet. They remain proposals. Twelve preservation statements were clarified during independent plan review because the earlier extracted fragments were incomplete or included the faulty rule being corrected. The complete preservation statements and explicit permitted corrections below supersede those fragments for future implementation guidance; the historical review evidence is left intact. Baseline line numbers refer to the examined revision; locate the actual passages again before editing. The full JSON retains review depth, all eight judgments, source hashes and additional evidence. Generic mandatory-core entries are a starting point, not proof of completeness: map actual decisions and exceptions from the full file. Section 5's metadata protection still applies.

### Q1 — Support, disclosure and safeguarding

#### `wellbeing-motivation-agency/trauma-informed-practice-designer`

**File:** [skills/wellbeing-motivation-agency/trauma-informed-practice-designer/SKILL.md](../../skills/wellbeing-motivation-agency/trauma-informed-practice-designer/SKILL.md). **Review priority:** high. **Planned status:** not implemented.

**Proposed correction:** Replace causal/neuroscience certainties with observable needs and plausible alternatives. Put immediate danger/disclosure safeguarding and existing individual/emergency plan first; avoid universal exit/wait/no-demand rules. Distinguish universal supportive practice from therapy and diagnosis; require qualified human review for consequential response protocols.

**Preserve:** No trauma-history elicitation; no teacher-as-therapist; predictable routines; dignity; whole-class safety; compassionate boundaries.

**Baseline evidence:** `skills/wellbeing-motivation-agency/trauma-informed-practice-designer/SKILL.md:146`, `skills/wellbeing-motivation-agency/trauma-informed-practice-designer/SKILL.md:215`, `skills/wellbeing-motivation-agency/trauma-informed-practice-designer/SKILL.md:225`, `skills/wellbeing-motivation-agency/trauma-informed-practice-designer/SKILL.md:250`, `skills/wellbeing-motivation-agency/trauma-informed-practice-designer/SKILL.md:78`, `skills/wellbeing-motivation-agency/trauma-informed-practice-designer/SKILL.md:128`, `skills/wellbeing-motivation-agency/trauma-informed-practice-designer/SKILL.md:140`, `skills/wellbeing-motivation-agency/trauma-informed-practice-designer/SKILL.md:254`, `skills/wellbeing-motivation-agency/trauma-informed-practice-designer/SKILL.md:101`, `skills/wellbeing-motivation-agency/trauma-informed-practice-designer/SKILL.md:102`. See the full record for remaining evidence and extraction/core checks.

#### `wellbeing-motivation-agency/restorative-practice-protocol-designer`

**File:** [skills/wellbeing-motivation-agency/restorative-practice-protocol-designer/SKILL.md](../../skills/wellbeing-motivation-agency/restorative-practice-protocol-designer/SKILL.md). **Review priority:** high. **Planned status:** not implemented.

**Proposed correction:** Move power-imbalance/safeguarding/consent screening into the active first step. Replace severity-only approach choice with readiness and protected voluntary alternatives. Correct worked persistent-mockery case so no face-to-face meeting is assumed; add follow-up protection against recurrence/retaliation. Qualify comparative-effect claims.

**Preserve:** Preparation before meeting; person harmed has voice; specific participant-owned agreement; follow-up; practical fallback and coexistence with policy consequences.

**Baseline evidence:** `skills/wellbeing-motivation-agency/restorative-practice-protocol-designer/SKILL.md:109`, `skills/wellbeing-motivation-agency/restorative-practice-protocol-designer/SKILL.md:138`, `skills/wellbeing-motivation-agency/restorative-practice-protocol-designer/SKILL.md:192`, `skills/wellbeing-motivation-agency/restorative-practice-protocol-designer/SKILL.md:200`, `skills/wellbeing-motivation-agency/restorative-practice-protocol-designer/SKILL.md:301`, `skills/wellbeing-motivation-agency/restorative-practice-protocol-designer/SKILL.md:77`, `skills/wellbeing-motivation-agency/restorative-practice-protocol-designer/SKILL.md:81`, `skills/wellbeing-motivation-agency/restorative-practice-protocol-designer/SKILL.md:303`, `skills/wellbeing-motivation-agency/restorative-practice-protocol-designer/SKILL.md:220`, `skills/wellbeing-motivation-agency/restorative-practice-protocol-designer/SKILL.md:222`. See the full record for remaining evidence and extraction/core checks.

#### `wellbeing-motivation-agency/ruler-emotional-literacy-sequence`

**File:** [skills/wellbeing-motivation-agency/ruler-emotional-literacy-sequence/SKILL.md](../../skills/wellbeing-motivation-agency/ruler-emotional-literacy-sequence/SKILL.md). **Review priority:** high. **Planned status:** not implemented.

**Proposed correction:** Label short sequence as an adaptation distinct from evaluated full RULER implementation; check teacher training/material authorization rather than imply programme fidelity. Make emotions/causes private or fictional by default, optional pass; do not infer internal state from appearance. Replace therapeutic guarantees and universal breath script with choice and referral.

**Preserve:** Teacher modelling first; precise vocabulary; regulation not suppression; whole-school and clinical limitations; sustained routines.

**Baseline evidence:** `skills/wellbeing-motivation-agency/ruler-emotional-literacy-sequence/SKILL.md:110`, `skills/wellbeing-motivation-agency/ruler-emotional-literacy-sequence/SKILL.md:111`, `skills/wellbeing-motivation-agency/ruler-emotional-literacy-sequence/SKILL.md:170`, `skills/wellbeing-motivation-agency/ruler-emotional-literacy-sequence/SKILL.md:239`, `skills/wellbeing-motivation-agency/ruler-emotional-literacy-sequence/SKILL.md:15`, `skills/wellbeing-motivation-agency/ruler-emotional-literacy-sequence/SKILL.md:75`, `skills/wellbeing-motivation-agency/ruler-emotional-literacy-sequence/SKILL.md:196`, `skills/wellbeing-motivation-agency/ruler-emotional-literacy-sequence/SKILL.md:206`, `skills/wellbeing-motivation-agency/ruler-emotional-literacy-sequence/SKILL.md:215`, `skills/wellbeing-motivation-agency/ruler-emotional-literacy-sequence/SKILL.md:194`. See the full record for remaining evidence and extraction/core checks.

#### `original-frameworks/inclusive-design-orchestrator`

**File:** [skills/original-frameworks/inclusive-design-orchestrator/SKILL.md](../../skills/original-frameworks/inclusive-design-orchestrator/SKILL.md). **Review priority:** high. **Planned status:** not implemented.

**Proposed correction:** Preserve universal design as planning priority while honoring existing support/urgent access needs in parallel; flag specialist involvement without suspending ordinary inclusion.

**Preserve:** Making pathway choices visible, proactively reducing barriers through universal design, useful targeted/individual options and specialist collaboration. Preserve universal design as a planning priority alongside existing and urgent individualized access support.

**Explicitly permitted correction:** The enforced sequential hierarchy may change where it delays established or urgent support. The exception is substantive and intentional: universal-first planning must not mean withholding appropriate support until other tiers are exhausted.

**Baseline evidence:** `skills/original-frameworks/inclusive-design-orchestrator/SKILL.md:124`, `skills/original-frameworks/inclusive-design-orchestrator/SKILL.md:128`, `skills/original-frameworks/inclusive-design-orchestrator/SKILL.md:202`, `skills/original-frameworks/inclusive-design-orchestrator/SKILL.md:239`, `skills/original-frameworks/inclusive-design-orchestrator/SKILL.md:246`, `skills/original-frameworks/inclusive-design-orchestrator/SKILL.md:188`, `skills/original-frameworks/inclusive-design-orchestrator/SKILL.md:283`. See the full record for remaining evidence and extraction/core checks.

### Q2 — Honest learner evidence

#### `student-learning/ai-claim-checker`

**File:** [skills/student-learning/ai-claim-checker/SKILL.md](../../skills/student-learning/ai-claim-checker/SKILL.md). **Review priority:** high. **Planned status:** not implemented.

**Proposed correction:** Preserve the three-step checking-plan exercise. Permit justified agreement/no issue identified, remove low-vigilance diagnosis from agreement alone, and separate proposed verification from performed verification/error confirmation. Do not require source consultation as a new job in every use.

**Preserve:** Specific claim focus; independent domain sources; method beyond a generic search; novice scaffolding.

**Baseline evidence:** `skills/student-learning/ai-claim-checker/SKILL.md:96`, `skills/student-learning/ai-claim-checker/SKILL.md:119`, `skills/student-learning/ai-claim-checker/SKILL.md:157`, `skills/student-learning/ai-claim-checker/SKILL.md:66`, `skills/student-learning/ai-claim-checker/SKILL.md:102`, `skills/student-learning/ai-claim-checker/SKILL.md:139`, `skills/student-learning/ai-claim-checker/SKILL.md:127`, `skills/student-learning/ai-claim-checker/SKILL.md:153`, `skills/student-learning/ai-claim-checker/SKILL.md:100`, `skills/student-learning/ai-claim-checker/SKILL.md:141`. See the full record for remaining evidence and extraction/core checks.

#### `student-learning/confidence-calibration-check`

**File:** [skills/student-learning/confidence-calibration-check/SKILL.md](../../skills/student-learning/confidence-calibration-check/SKILL.md). **Review priority:** high. **Planned status:** not implemented.

**Proposed correction:** Never invent learner confidence; add not captured and optional verbal rating. Anchor the question to a specific prospective task and compare performance on comparable tasks over time. Treat pattern labels as tentative and let learners challenge the evaluation.

**Preserve:** Attention to underconfidence as well as overconfidence; next action; candid scale and accuracy limitations.

**Baseline evidence:** `skills/student-learning/confidence-calibration-check/SKILL.md:96`, `skills/student-learning/confidence-calibration-check/SKILL.md:111`, `skills/student-learning/confidence-calibration-check/SKILL.md:135`, `skills/student-learning/confidence-calibration-check/SKILL.md:139`, `skills/student-learning/confidence-calibration-check/SKILL.md:64`, `skills/student-learning/confidence-calibration-check/SKILL.md:114`, `skills/student-learning/confidence-calibration-check/SKILL.md:214`, `skills/student-learning/confidence-calibration-check/SKILL.md:216`, `skills/student-learning/confidence-calibration-check/SKILL.md:145`, `skills/student-learning/confidence-calibration-check/SKILL.md:151`. See the full record for remaining evidence and extraction/core checks.

#### `student-learning/weekly-agency-review`

**File:** [skills/student-learning/weekly-agency-review/SKILL.md](../../skills/student-learning/weekly-agency-review/SKILL.md). **Review priority:** medium. **Planned status:** not implemented.

**Proposed correction:** Distinguish observed records from recalled estimates; add minimum comparability/provenance check and tentative alternative explanations. Add a short data-handling boundary, no automatic persistence, and learner review of retained summary.

**Preserve:** Interpret-before-analysis; strategy rather than vague effort goal; first-review fallback; cadence by accumulated evidence.

**Baseline evidence:** `skills/student-learning/weekly-agency-review/SKILL.md:82`, `skills/student-learning/weekly-agency-review/SKILL.md:91`, `skills/student-learning/weekly-agency-review/SKILL.md:155`, `skills/student-learning/weekly-agency-review/SKILL.md:117`, `skills/student-learning/weekly-agency-review/SKILL.md:123`, `skills/student-learning/weekly-agency-review/SKILL.md:125`, `skills/student-learning/weekly-agency-review/SKILL.md:239`, `skills/student-learning/weekly-agency-review/SKILL.md:35`, `skills/student-learning/weekly-agency-review/SKILL.md:237`, `skills/student-learning/weekly-agency-review/SKILL.md:71`. See the full record for remaining evidence and extraction/core checks.

### Q3 — Finite challenge and accessible recovery

#### `student-learning/productive-failure-protocol`

**File:** [skills/student-learning/productive-failure-protocol/SKILL.md](../../skills/student-learning/productive-failure-protocol/SKILL.md). **Review priority:** high. **Planned status:** not implemented.

**Proposed correction:** Preserve productive exploration, contrasting approaches and connecting consolidation. Make attempt/time limit teacher/learner-adjustable, provide finite exit for unavailable prerequisites or distress, and do not claim that the exact two-attempt rule is research-proven without source verification. A correct-first contrasting case can remain optional.

**Preserve:** Explicit consolidation dependency; contrast of genuine methods; conceptual/transfer scope; honest time cost.

**Baseline evidence:** `skills/student-learning/productive-failure-protocol/SKILL.md:77`, `skills/student-learning/productive-failure-protocol/SKILL.md:84`, `skills/student-learning/productive-failure-protocol/SKILL.md:110`, `skills/student-learning/productive-failure-protocol/SKILL.md:132`, `skills/student-learning/productive-failure-protocol/SKILL.md:66`, `skills/student-learning/productive-failure-protocol/SKILL.md:136`, `skills/student-learning/productive-failure-protocol/SKILL.md:216`, `skills/student-learning/productive-failure-protocol/SKILL.md:129`, `skills/student-learning/productive-failure-protocol/SKILL.md:135`, `skills/student-learning/productive-failure-protocol/SKILL.md:148`. See the full record for remaining evidence and extraction/core checks.

#### `student-learning/retrieve-first-gate`

**File:** [skills/student-learning/retrieve-first-gate/SKILL.md](../../skills/student-learning/retrieve-first-gate/SKILL.md). **Review priority:** medium. **Planned status:** not implemented.

**Proposed correction:** Scope activation to review of previously encountered material; add novice/accessible response/direct-instruction and stop routes. Make uncertain AI marking contestable in prompt, avoid pasted-content certainty, and align evidence terms with consuming skills.

**Preserve:** Recall before generic re-teaching; accurate/missing/misconceived map; warm-start scaffolding; informal assessment caveat.

**Baseline evidence:** `skills/student-learning/retrieve-first-gate/SKILL.md:72`, `skills/student-learning/retrieve-first-gate/SKILL.md:108`, `skills/student-learning/retrieve-first-gate/SKILL.md:118`, `skills/student-learning/retrieve-first-gate/SKILL.md:151`, `skills/student-learning/retrieve-first-gate/SKILL.md:63`, `skills/student-learning/retrieve-first-gate/SKILL.md:67`, `skills/student-learning/retrieve-first-gate/SKILL.md:83`, `skills/student-learning/retrieve-first-gate/SKILL.md:188`, `skills/student-learning/retrieve-first-gate/SKILL.md:76`, `skills/student-learning/retrieve-first-gate/SKILL.md:126`. See the full record for remaining evidence and extraction/core checks.

#### `student-learning/explain-first-interrogator`

**File:** [skills/student-learning/explain-first-interrogator/SKILL.md](../../skills/student-learning/explain-first-interrogator/SKILL.md). **Review priority:** medium. **Planned status:** not implemented.

**Proposed correction:** Define when short explanation/direct instruction is appropriate after the probe limit or absent prerequisite knowledge. Align example with the no-replacement rule, allow alternative explanation formats, and qualify research-to-script extrapolation.

**Preserve:** Specific rather than generic questions; strengths-before-gap; three-round cap; learner-owned synthesis.

**Baseline evidence:** `skills/student-learning/explain-first-interrogator/SKILL.md:63`, `skills/student-learning/explain-first-interrogator/SKILL.md:101`, `skills/student-learning/explain-first-interrogator/SKILL.md:115`, `skills/student-learning/explain-first-interrogator/SKILL.md:175`, `skills/student-learning/explain-first-interrogator/SKILL.md:23`, `skills/student-learning/explain-first-interrogator/SKILL.md:67`, `skills/student-learning/explain-first-interrogator/SKILL.md:131`, `skills/student-learning/explain-first-interrogator/SKILL.md:107`, `skills/student-learning/explain-first-interrogator/SKILL.md:197`, `skills/student-learning/explain-first-interrogator/SKILL.md:195`. See the full record for remaining evidence and extraction/core checks.

#### `student-learning/progressive-hint-ladder`

**File:** [skills/student-learning/progressive-hint-ladder/SKILL.md](../../skills/student-learning/progressive-hint-ladder/SKILL.md). **Review priority:** medium. **Planned status:** not implemented.

**Proposed correction:** Preserve six-level minimum-needed assistance and foundation fallback. Clarify diagnostic/starting-level wording, replace frustration-means-right-difficulty inference with a neutral readiness/access check, and permit a bounded pause/change of response mode. No wholesale replacement with immediate answers.

**Preserve:** Graduated minimum-needed help; reflection before escalation; no shame for higher hint levels; foundation fallback.

**Baseline evidence:** `skills/student-learning/progressive-hint-ladder/SKILL.md:76`, `skills/student-learning/progressive-hint-ladder/SKILL.md:87`, `skills/student-learning/progressive-hint-ladder/SKILL.md:93`, `skills/student-learning/progressive-hint-ladder/SKILL.md:67`, `skills/student-learning/progressive-hint-ladder/SKILL.md:147`, `skills/student-learning/progressive-hint-ladder/SKILL.md:149`, `skills/student-learning/progressive-hint-ladder/SKILL.md:84`, `skills/student-learning/progressive-hint-ladder/SKILL.md:128`, `skills/student-learning/progressive-hint-ladder/SKILL.md:247`, `skills/student-learning/progressive-hint-ladder/SKILL.md:143`. See the full record for remaining evidence and extraction/core checks.

#### `student-learning/unassisted-evidence-checkpoint`

**File:** [skills/student-learning/unassisted-evidence-checkpoint/SKILL.md](../../skills/student-learning/unassisted-evidence-checkpoint/SKILL.md). **Review priority:** medium. **Planned status:** not implemented.

**Proposed correction:** Add voluntary stop/defer or assisted-resume option and define allowed access accommodations; retain honest tagging. Align confidence timing and provide actual result rather than prefilled completed metadata when checkpoint was skipped.

**Preserve:** Evidence/learning distinction; explicit Bastani extrapolation; comparable new task; tag contamination rule; single-point caution.

**Baseline evidence:** `skills/student-learning/unassisted-evidence-checkpoint/SKILL.md:117`, `skills/student-learning/unassisted-evidence-checkpoint/SKILL.md:203`, `skills/student-learning/unassisted-evidence-checkpoint/SKILL.md:205`, `skills/student-learning/unassisted-evidence-checkpoint/SKILL.md:111`, `skills/student-learning/unassisted-evidence-checkpoint/SKILL.md:148`, `skills/student-learning/unassisted-evidence-checkpoint/SKILL.md:154`, `skills/student-learning/unassisted-evidence-checkpoint/SKILL.md:247`, `skills/student-learning/unassisted-evidence-checkpoint/SKILL.md:175`, `skills/student-learning/unassisted-evidence-checkpoint/SKILL.md:221`, `skills/student-learning/unassisted-evidence-checkpoint/SKILL.md:239`. See the full record for remaining evidence and extraction/core checks.

### Q4 — Consistent learning workflows and examples

#### `student-learning/fading-manager`

**File:** [skills/student-learning/fading-manager/SKILL.md](../../skills/student-learning/fading-manager/SKILL.md). **Review priority:** medium. **Planned status:** not implemented.

**Proposed correction:** Align examples and source labels to explicit criteria; keep thresholds visibly heuristic. Permit learner/teacher adjustment, task-specific support and accessible warm starts; require verified minimal history and host-level data consent.

**Preserve:** Transparent fading; restoration; topic-specific scaffolding; heuristic limitation; external-support caveat.

**Baseline evidence:** `skills/student-learning/fading-manager/SKILL.md:111`, `skills/student-learning/fading-manager/SKILL.md:113`, `skills/student-learning/fading-manager/SKILL.md:115`, `skills/student-learning/fading-manager/SKILL.md:195`, `skills/student-learning/fading-manager/SKILL.md:201`, `skills/student-learning/fading-manager/SKILL.md:234`, `skills/student-learning/fading-manager/SKILL.md:100`, `skills/student-learning/fading-manager/SKILL.md:131`, `skills/student-learning/fading-manager/SKILL.md:156`, `skills/student-learning/fading-manager/SKILL.md:29`. See the full record for remaining evidence and extraction/core checks.

#### `student-learning/stuck-and-error-diagnosis-coach`

**File:** [skills/student-learning/stuck-and-error-diagnosis-coach/SKILL.md](../../skills/student-learning/stuck-and-error-diagnosis-coach/SKILL.md). **Review priority:** medium. **Planned status:** not implemented.

**Proposed correction:** Correct numerical and kinematics examples; frame categories as hypotheses with mixed/unclear allowed; replace right-difficulty assertion with neutral acknowledgement. Keep diagnosis brief for obvious slips.

**Preserve:** Targeted feedback at process level; self-correction before explanation; representation included; future error-checking question.

**Baseline evidence:** `skills/student-learning/stuck-and-error-diagnosis-coach/SKILL.md:72`, `skills/student-learning/stuck-and-error-diagnosis-coach/SKILL.md:103`, `skills/student-learning/stuck-and-error-diagnosis-coach/SKILL.md:212`, `skills/student-learning/stuck-and-error-diagnosis-coach/SKILL.md:83`, `skills/student-learning/stuck-and-error-diagnosis-coach/SKILL.md:188`, `skills/student-learning/stuck-and-error-diagnosis-coach/SKILL.md:224`, `skills/student-learning/stuck-and-error-diagnosis-coach/SKILL.md:65`, `skills/student-learning/stuck-and-error-diagnosis-coach/SKILL.md:178`, `skills/student-learning/stuck-and-error-diagnosis-coach/SKILL.md:208`. See the full record for remaining evidence and extraction/core checks.

#### `student-learning/transfer-bridge`

**File:** [skills/student-learning/transfer-bridge/SKILL.md](../../skills/student-learning/transfer-bridge/SKILL.md). **Review priority:** medium. **Planned status:** not implemented.

**Proposed correction:** Replace price/allocation analogy with valid shared-mechanism task or explicitly label limited analogy. Record cue/support level and distinguish immediate scaffolded application from independent delayed transfer; fix placeholders/status vocabulary.

**Preserve:** Near/far distinction; explicit structure comparison; scaffold limitation; student-generated third application.

**Baseline evidence:** `skills/student-learning/transfer-bridge/SKILL.md:131`, `skills/student-learning/transfer-bridge/SKILL.md:152`, `skills/student-learning/transfer-bridge/SKILL.md:167`, `skills/student-learning/transfer-bridge/SKILL.md:75`, `skills/student-learning/transfer-bridge/SKILL.md:193`, `skills/student-learning/transfer-bridge/SKILL.md:201`, `skills/student-learning/transfer-bridge/SKILL.md:244`, `skills/student-learning/transfer-bridge/SKILL.md:166`, `skills/student-learning/transfer-bridge/SKILL.md:170`, `skills/student-learning/transfer-bridge/SKILL.md:68`. See the full record for remaining evidence and extraction/core checks.

#### `student-learning/srl-session-wrapper`

**File:** [skills/student-learning/srl-session-wrapper/SKILL.md](../../skills/student-learning/srl-session-wrapper/SKILL.md). **Review priority:** medium. **Planned status:** not implemented.

**Proposed correction:** Insert opening-goal input and recover/ask once if absent in mid/closing mode; state how user returns to trigger later phases unless timer integration exists. Resolve vague evidence entry and qualify measured benefit claims.

**Preserve:** Short phases; genuine learner evaluation; refusal handling; wrapper distinguished from effective study content.

**Baseline evidence:** `skills/student-learning/srl-session-wrapper/SKILL.md:33`, `skills/student-learning/srl-session-wrapper/SKILL.md:80`, `skills/student-learning/srl-session-wrapper/SKILL.md:112`, `skills/student-learning/srl-session-wrapper/SKILL.md:125`, `skills/student-learning/srl-session-wrapper/SKILL.md:23`, `skills/student-learning/srl-session-wrapper/SKILL.md:69`, `skills/student-learning/srl-session-wrapper/SKILL.md:73`, `skills/student-learning/srl-session-wrapper/SKILL.md:104`, `skills/student-learning/srl-session-wrapper/SKILL.md:145`, `skills/student-learning/srl-session-wrapper/SKILL.md:209`. See the full record for remaining evidence and extraction/core checks.

#### `student-learning/teach-back-evaluator`

**File:** [skills/student-learning/teach-back-evaluator/SKILL.md](../../skills/student-learning/teach-back-evaluator/SKILL.md). **Review priority:** medium. **Planned status:** not implemented.

**Proposed correction:** Remove visual-thinker label; allow a real example without learner-type attribution. Align pass message to scores and mark informal formative judgement; bound revision and allow ending with unresolved gap. Use or remove unused input via governed future edit.

**Preserve:** Curious/non-adversarial novice role; explained score anchors; targeted revision; appropriate content-type limits.

**Baseline evidence:** `skills/student-learning/teach-back-evaluator/SKILL.md:62`, `skills/student-learning/teach-back-evaluator/SKILL.md:134`, `skills/student-learning/teach-back-evaluator/SKILL.md:141`, `skills/student-learning/teach-back-evaluator/SKILL.md:97`, `skills/student-learning/teach-back-evaluator/SKILL.md:239`, `skills/student-learning/teach-back-evaluator/SKILL.md:139`, `skills/student-learning/teach-back-evaluator/SKILL.md:145`, `skills/student-learning/teach-back-evaluator/SKILL.md:157`, `skills/student-learning/teach-back-evaluator/SKILL.md:64`, `skills/student-learning/teach-back-evaluator/SKILL.md:185`. See the full record for remaining evidence and extraction/core checks.

### Q5 — Curriculum and source handoffs

#### `curriculum-alignment/developmental-band-translator`

**File:** [skills/curriculum-alignment/developmental-band-translator/SKILL.md](../../skills/curriculum-alignment/developmental-band-translator/SKILL.md). **Review priority:** medium. **Planned status:** not implemented.

**Proposed correction:** Make override and source-type precedence explicit; retain conservative ambiguity/teacher-review flags.

**Preserve:** Source progression structure, original band labels and source voice; conservative handling of uncertain age alignment and teacher review. Keep an explicit request/flag when age evidence is genuinely necessary and absent.

**Explicitly permitted correction:** The unconditional no-age halt may change so that supplied overrides and legitimate flat-framework handling have coherent precedence; do not invent ages or silently erase uncertainty.

**Baseline evidence:** `skills/curriculum-alignment/developmental-band-translator/SKILL.md:31`, `skills/curriculum-alignment/developmental-band-translator/SKILL.md:39`, `skills/curriculum-alignment/developmental-band-translator/SKILL.md:126`, `skills/curriculum-alignment/developmental-band-translator/SKILL.md:148`, `skills/curriculum-alignment/developmental-band-translator/SKILL.md:152`, `skills/curriculum-alignment/developmental-band-translator/SKILL.md:18`, `skills/curriculum-alignment/developmental-band-translator/SKILL.md:118`, `skills/curriculum-alignment/developmental-band-translator/SKILL.md:42`. See the full record for remaining evidence and extraction/core checks.

#### `curriculum-alignment/kud-chart-author`

**File:** [skills/curriculum-alignment/kud-chart-author/SKILL.md](../../skills/curriculum-alignment/kud-chart-author/SKILL.md). **Review priority:** medium. **Planned status:** not implemented.

**Proposed correction:** Route raw documents to a real decomposition step, then band tagging; keep direct-draft fallback honest.

**Preserve:** The distinctions among knowing, understanding and doing; explicit prerequisite reasoning, source alignment and teacher review of a draft. Preserve the direct-draft route with honest assumptions and the distinction between hard prerequisites and merely helpful background.

**Explicitly permitted correction:** The invalid raw-document handoff may change to an actual decomposition step before band tagging; do not rename the target skill or pretend its required structured input is optional.

**Baseline evidence:** `skills/curriculum-alignment/kud-chart-author/SKILL.md:129`, `skills/curriculum-alignment/kud-chart-author/SKILL.md:141`, `skills/curriculum-alignment/kud-chart-author/SKILL.md:19`, `skills/curriculum-alignment/kud-chart-author/SKILL.md:133`, `skills/curriculum-alignment/kud-chart-author/SKILL.md:55`, `skills/curriculum-alignment/kud-chart-author/SKILL.md:401`. See the full record for remaining evidence and extraction/core checks.

#### `professional-learning/competency-framework-translator`

**File:** [skills/professional-learning/competency-framework-translator/SKILL.md](../../skills/professional-learning/competency-framework-translator/SKILL.md). **Review priority:** medium. **Planned status:** not implemented.

**Proposed correction:** Separate verified quotation and interpretation into differently labelled outputs; request source/version for exact claims; do not invent official text.

**Preserve:** Observable indicators, qualitatively distinct progression levels, subject/context-specific application and traceable connection to the supplied framework. Preserve uncertainty and educator review where a translation is interpretive.

**Explicitly permitted correction:** The output may distinguish verified source quotations from model interpretation. Do not preserve reconstruction under an Original Framework Wording label or invent official text when the source is absent.

**Baseline evidence:** `skills/professional-learning/competency-framework-translator/SKILL.md:116`, `skills/professional-learning/competency-framework-translator/SKILL.md:128`, `skills/professional-learning/competency-framework-translator/SKILL.md:130`, `skills/professional-learning/competency-framework-translator/SKILL.md:16`, `skills/professional-learning/competency-framework-translator/SKILL.md:255`. See the full record for remaining evidence and extraction/core checks.

### Q6 — Research precision and retrieval consistency

#### `memory-learning-science/retrieval-practice-generator`

**File:** [skills/memory-learning-science/retrieval-practice-generator/SKILL.md](../../skills/memory-learning-science/retrieval-practice-generator/SKILL.md). **Review priority:** medium. **Planned status:** not implemented.

**Proposed correction:** Make the exception consistent across rules/checks; retain retrieval focus and accessible novice options.

**Preserve:** Retrieval-centered practice, a useful range of response types and feedback, accessible novice support, and checking answers against what was taught. Preserve distinctions between recall and recognition rather than flattening them.

**Explicitly permitted correction:** The universal anti-recognition rule/self-check may change to honor the existing novice exception consistently. The taught-source verification caveat may move into the active core.

**Baseline evidence:** `skills/memory-learning-science/retrieval-practice-generator/SKILL.md:109`, `skills/memory-learning-science/retrieval-practice-generator/SKILL.md:115`, `skills/memory-learning-science/retrieval-practice-generator/SKILL.md:150`, `skills/memory-learning-science/retrieval-practice-generator/SKILL.md:223`, `skills/memory-learning-science/retrieval-practice-generator/SKILL.md:22`, `skills/memory-learning-science/retrieval-practice-generator/SKILL.md:96`, `skills/memory-learning-science/retrieval-practice-generator/SKILL.md:46`, `skills/memory-learning-science/retrieval-practice-generator/SKILL.md:100`. See the full record for remaining evidence and extraction/core checks.

#### `memory-learning-science/spaced-practice-scheduler`

**File:** [skills/memory-learning-science/spaced-practice-scheduler/SKILL.md](../../skills/memory-learning-science/spaced-practice-scheduler/SKILL.md). **Review priority:** medium. **Planned status:** not implemented.

**Proposed correction:** Correct the sampled research claim; label chosen timetable and fallback rules as adaptable heuristics. Preserve scheduling method.

**Preserve:** Distributed review, practical scheduling, adaptation to retention goals and learner performance, and the named research supporting spacing. Keep a usable example timetable where helpful.

**Explicitly permitted correction:** The exact interval schedule and fallback percentages may be labelled adaptable practitioner choices; disputed study counts, universal forgetting claims and attribution of exact optimality may be corrected. They are not protected as established empirical facts.

**Baseline evidence:** `skills/memory-learning-science/spaced-practice-scheduler/SKILL.md:18`, `skills/memory-learning-science/spaced-practice-scheduler/SKILL.md:78`, `skills/memory-learning-science/spaced-practice-scheduler/SKILL.md:113`, `skills/memory-learning-science/spaced-practice-scheduler/SKILL.md:206`, `skills/memory-learning-science/spaced-practice-scheduler/SKILL.md:22`, `skills/memory-learning-science/spaced-practice-scheduler/SKILL.md:96`, `skills/memory-learning-science/spaced-practice-scheduler/SKILL.md:46`, `skills/memory-learning-science/spaced-practice-scheduler/SKILL.md:16`, `skills/memory-learning-science/spaced-practice-scheduler/SKILL.md:225`. See the full record for remaining evidence and extraction/core checks.

#### `curriculum-assessment/differentiation-adapter`

**File:** [skills/curriculum-assessment/differentiation-adapter/SKILL.md](../../skills/curriculum-assessment/differentiation-adapter/SKILL.md). **Review priority:** medium. **Planned status:** not implemented.

**Proposed correction:** Name edition used and acknowledge later3.0; preserve objective-protection method.

**Preserve:** Protection of the learning objective, differentiation by relevant readiness/access needs, and rejection of unsupported learning-style matching. Retain the useful UDL-informed adaptation procedure and its named research.

**Explicitly permitted correction:** The claim that CAST 2018 is the current edition may change; naming the historical edition accurately does not require replacing the entire method with a new framework.

**Baseline evidence:** `skills/curriculum-assessment/differentiation-adapter/SKILL.md:78`, `skills/curriculum-assessment/differentiation-adapter/SKILL.md:16`, `skills/curriculum-assessment/differentiation-adapter/SKILL.md:234`. See the full record for remaining evidence and extraction/core checks.

#### `original-frameworks/developmental-band-system-designer`

**File:** [skills/original-frameworks/developmental-band-system-designer/SKILL.md](../../skills/original-frameworks/developmental-band-system-designer/SKILL.md). **Review priority:** medium. **Planned status:** not implemented.

**Proposed correction:** Use supporting rationale rather than validation; retain explicitly original methodology.

**Preserve:** The original practitioner architecture connecting mission, developmental progression and school design; transparent assumptions and educational judgment. Preserve mixed-age research as supporting rationale and retain original-framework status.

**Explicitly permitted correction:** The claim that component research validates the entire proposed architecture may change to a proportionate rationale statement; do not erase the framework or relabel it as experimentally validated.

**Baseline evidence:** `skills/original-frameworks/developmental-band-system-designer/SKILL.md:79`, `skills/original-frameworks/developmental-band-system-designer/SKILL.md:85`, `skills/original-frameworks/developmental-band-system-designer/SKILL.md:16`, `skills/original-frameworks/developmental-band-system-designer/SKILL.md:271`. See the full record for remaining evidence and extraction/core checks.

### Q7 — Agency, motivation and feasible support

#### `wellbeing-motivation-agency/agency-scaffold-generator`

**File:** [skills/wellbeing-motivation-agency/agency-scaffold-generator/SKILL.md](../../skills/wellbeing-motivation-agency/agency-scaffold-generator/SKILL.md). **Review priority:** medium. **Planned status:** not implemented.

**Proposed correction:** Label adapted dimensions/levels and numeric cadence as practical heuristics; show immediate next level and evidence to advance. State protected safety, existing access supports and assessment/curriculum requirements before negotiating choices; allow differentiated readiness. Resolve/label optional chain targets or document evidence-label meaning; preserve behavior and do not invent missing skills.

**Preserve:** Real bounded choice; explicit decision ownership; recover without reflexively removing agency; agency not maximal freedom everywhere.

**Baseline evidence:** `skills/wellbeing-motivation-agency/agency-scaffold-generator/SKILL.md:64`, `skills/wellbeing-motivation-agency/agency-scaffold-generator/SKILL.md:65`, `skills/wellbeing-motivation-agency/agency-scaffold-generator/SKILL.md:128`, `skills/wellbeing-motivation-agency/agency-scaffold-generator/SKILL.md:190`, `skills/wellbeing-motivation-agency/agency-scaffold-generator/SKILL.md:211`, `skills/wellbeing-motivation-agency/agency-scaffold-generator/SKILL.md:241`, `skills/wellbeing-motivation-agency/agency-scaffold-generator/SKILL.md:115`, `skills/wellbeing-motivation-agency/agency-scaffold-generator/SKILL.md:122`, `skills/wellbeing-motivation-agency/agency-scaffold-generator/SKILL.md:119`, `skills/wellbeing-motivation-agency/agency-scaffold-generator/SKILL.md:126`. See the full record for remaining evidence and extraction/core checks.

#### `wellbeing-motivation-agency/implementation-intention-designer`

**File:** [skills/wellbeing-motivation-agency/implementation-intention-designer/SKILL.md](../../skills/wellbeing-motivation-agency/implementation-intention-designer/SKILL.md). **Review priority:** medium. **Planned status:** not implemented.

**Proposed correction:** Resolve internal-cue contradiction; distinguish student-endorsed wishes from teacher-selected compliance. Confirm real barriers and retain environmental support path. Label monitoring thresholds as examples and correct evidence/effort-certainty claims. Resolve/label optional chain targets or document evidence-label meaning; preserve behavior and do not invent missing skills.

**Preserve:** Discrete cue/action specificity; tiny achievable start; coping; simple monitoring; motivation and external-barrier limits.

**Baseline evidence:** `skills/wellbeing-motivation-agency/implementation-intention-designer/SKILL.md:64`, `skills/wellbeing-motivation-agency/implementation-intention-designer/SKILL.md:65`, `skills/wellbeing-motivation-agency/implementation-intention-designer/SKILL.md:100`, `skills/wellbeing-motivation-agency/implementation-intention-designer/SKILL.md:125`, `skills/wellbeing-motivation-agency/implementation-intention-designer/SKILL.md:126`, `skills/wellbeing-motivation-agency/implementation-intention-designer/SKILL.md:177`, `skills/wellbeing-motivation-agency/implementation-intention-designer/SKILL.md:205`, `skills/wellbeing-motivation-agency/implementation-intention-designer/SKILL.md:78`, `skills/wellbeing-motivation-agency/implementation-intention-designer/SKILL.md:219`, `skills/wellbeing-motivation-agency/implementation-intention-designer/SKILL.md:109`. See the full record for remaining evidence and extraction/core checks.

#### `wellbeing-motivation-agency/flow-state-condition-designer`

**File:** [skills/wellbeing-motivation-agency/flow-state-condition-designer/SKILL.md](../../skills/wellbeing-motivation-agency/flow-state-condition-designer/SKILL.md). **Review priority:** medium. **Planned status:** not implemented.

**Proposed correction:** Replace deterministic flow/guaranteed-success claims with design hypotheses checked by student report and learning evidence. Align task goal to mastery, and add response to repeated errors rather than endless same-level retry.

**Preserve:** Differentiation; low interruption; immediate informative feedback; private progress; minimum skill and unsuitable-task limits.

**Baseline evidence:** `skills/wellbeing-motivation-agency/flow-state-condition-designer/SKILL.md:214`, `skills/wellbeing-motivation-agency/flow-state-condition-designer/SKILL.md:218`, `skills/wellbeing-motivation-agency/flow-state-condition-designer/SKILL.md:220`, `skills/wellbeing-motivation-agency/flow-state-condition-designer/SKILL.md:239`, `skills/wellbeing-motivation-agency/flow-state-condition-designer/SKILL.md:98`, `skills/wellbeing-motivation-agency/flow-state-condition-designer/SKILL.md:123`, `skills/wellbeing-motivation-agency/flow-state-condition-designer/SKILL.md:167`, `skills/wellbeing-motivation-agency/flow-state-condition-designer/SKILL.md:253`, `skills/wellbeing-motivation-agency/flow-state-condition-designer/SKILL.md:76`, `skills/wellbeing-motivation-agency/flow-state-condition-designer/SKILL.md:176`. See the full record for remaining evidence and extraction/core checks.

#### `wellbeing-motivation-agency/motivation-diagnostic-task-redesign`

**File:** [skills/wellbeing-motivation-agency/motivation-diagnostic-task-redesign/SKILL.md](../../skills/wellbeing-motivation-agency/motivation-diagnostic-task-redesign/SKILL.md). **Review priority:** medium. **Planned status:** not implemented.

**Proposed correction:** Stop assigning internal motivation from design alone; ask/check learner perspective, allow unknown and label hypotheses. Preserve learning objective and necessary foundational work rather than claiming higher cognitive level is automatically better; offer a time-equivalent small redesign.

**Preserve:** SDT specificity; autonomy AND structure; rationale; no deficit student labels; comprehension fallback; time-cost acknowledgement.

**Baseline evidence:** `skills/wellbeing-motivation-agency/motivation-diagnostic-task-redesign/SKILL.md:54`, `skills/wellbeing-motivation-agency/motivation-diagnostic-task-redesign/SKILL.md:135`, `skills/wellbeing-motivation-agency/motivation-diagnostic-task-redesign/SKILL.md:170`, `skills/wellbeing-motivation-agency/motivation-diagnostic-task-redesign/SKILL.md:213`, `skills/wellbeing-motivation-agency/motivation-diagnostic-task-redesign/SKILL.md:74`, `skills/wellbeing-motivation-agency/motivation-diagnostic-task-redesign/SKILL.md:78`, `skills/wellbeing-motivation-agency/motivation-diagnostic-task-redesign/SKILL.md:241`, `skills/wellbeing-motivation-agency/motivation-diagnostic-task-redesign/SKILL.md:259`, `skills/wellbeing-motivation-agency/motivation-diagnostic-task-redesign/SKILL.md:76`, `skills/wellbeing-motivation-agency/motivation-diagnostic-task-redesign/SKILL.md:187`. See the full record for remaining evidence and extraction/core checks.

#### `wellbeing-motivation-agency/self-efficacy-builder-sequence`

**File:** [skills/wellbeing-motivation-agency/self-efficacy-builder-sequence/SKILL.md](../../skills/wellbeing-motivation-agency/self-efficacy-builder-sequence/SKILL.md). **Review priority:** medium. **Planned status:** not implemented.

**Proposed correction:** Assess actual prerequisite and access needs before motivational hypothesis; do not infer psychological cause from refusal or verbal articulation. Remove guaranteed-success and hard=learning claims, use learner-approved pacing/timers and preserve assistive tools. Keep growth-mindset implementation caveat.

**Preserve:** Mastery over slogans; specific credible praise; tiny steps; task contingency; privacy/dignity; legitimate verbal planning.

**Baseline evidence:** `skills/wellbeing-motivation-agency/self-efficacy-builder-sequence/SKILL.md:109`, `skills/wellbeing-motivation-agency/self-efficacy-builder-sequence/SKILL.md:117`, `skills/wellbeing-motivation-agency/self-efficacy-builder-sequence/SKILL.md:134`, `skills/wellbeing-motivation-agency/self-efficacy-builder-sequence/SKILL.md:194`, `skills/wellbeing-motivation-agency/self-efficacy-builder-sequence/SKILL.md:269`, `skills/wellbeing-motivation-agency/self-efficacy-builder-sequence/SKILL.md:78`, `skills/wellbeing-motivation-agency/self-efficacy-builder-sequence/SKILL.md:123`, `skills/wellbeing-motivation-agency/self-efficacy-builder-sequence/SKILL.md:133`, `skills/wellbeing-motivation-agency/self-efficacy-builder-sequence/SKILL.md:196`, `skills/wellbeing-motivation-agency/self-efficacy-builder-sequence/SKILL.md:206`. See the full record for remaining evidence and extraction/core checks.

### Q8 — Wellbeing design and proportionate claims

#### `wellbeing-motivation-agency/awe-wonder-experience-designer`

**File:** [skills/wellbeing-motivation-agency/awe-wonder-experience-designer/SKILL.md](../../skills/wellbeing-motivation-agency/awe-wonder-experience-designer/SKILL.md). **Review priority:** medium. **Planned status:** not implemented.

**Proposed correction:** Qualify transfer from emotion studies to classroom outcomes; verify concrete facts/scale in examples. Provide emotionally and physically accessible alternatives and avoid using suffering as spectacle. Keep curiosity linked to a teachable objective, with no required emotional response.

**Preserve:** Emerging evidence label; content-linked wonder; inquiry bridge; subjective-response and overuse limitations.

**Baseline evidence:** `skills/wellbeing-motivation-agency/awe-wonder-experience-designer/SKILL.md:78`, `skills/wellbeing-motivation-agency/awe-wonder-experience-designer/SKILL.md:96`, `skills/wellbeing-motivation-agency/awe-wonder-experience-designer/SKILL.md:197`, `skills/wellbeing-motivation-agency/awe-wonder-experience-designer/SKILL.md:247`, `skills/wellbeing-motivation-agency/awe-wonder-experience-designer/SKILL.md:111`, `skills/wellbeing-motivation-agency/awe-wonder-experience-designer/SKILL.md:120`, `skills/wellbeing-motivation-agency/awe-wonder-experience-designer/SKILL.md:140`, `skills/wellbeing-motivation-agency/awe-wonder-experience-designer/SKILL.md:243`, `skills/wellbeing-motivation-agency/awe-wonder-experience-designer/SKILL.md:112`, `skills/wellbeing-motivation-agency/awe-wonder-experience-designer/SKILL.md:187`. See the full record for remaining evidence and extraction/core checks.

#### `wellbeing-motivation-agency/belonging-classroom-culture-designer`

**File:** [skills/wellbeing-motivation-agency/belonging-classroom-culture-designer/SKILL.md](../../skills/wellbeing-motivation-agency/belonging-classroom-culture-designer/SKILL.md). **Review priority:** medium. **Planned status:** not implemented.

**Proposed correction:** Add learner-voice and access checks; treat eye contact/speaking/arrival as ambiguous signals, never belonging scores. Permit support without stigma and safe pairing choices; respond directly to bullying/discrimination. Qualify cross-context efficacy and time claims.

**Preserve:** Avoid public singling out; contribution over token inclusion; routine embedding; authentic regard; pastoral support boundary.

**Baseline evidence:** `skills/wellbeing-motivation-agency/belonging-classroom-culture-designer/SKILL.md:118`, `skills/wellbeing-motivation-agency/belonging-classroom-culture-designer/SKILL.md:130`, `skills/wellbeing-motivation-agency/belonging-classroom-culture-designer/SKILL.md:139`, `skills/wellbeing-motivation-agency/belonging-classroom-culture-designer/SKILL.md:171`, `skills/wellbeing-motivation-agency/belonging-classroom-culture-designer/SKILL.md:251`, `skills/wellbeing-motivation-agency/belonging-classroom-culture-designer/SKILL.md:15`, `skills/wellbeing-motivation-agency/belonging-classroom-culture-designer/SKILL.md:78`, `skills/wellbeing-motivation-agency/belonging-classroom-culture-designer/SKILL.md:249`, `skills/wellbeing-motivation-agency/belonging-classroom-culture-designer/SKILL.md:98`, `skills/wellbeing-motivation-agency/belonging-classroom-culture-designer/SKILL.md:190`. See the full record for remaining evidence and extraction/core checks.

#### `wellbeing-motivation-agency/perma-based-lesson-designer`

**File:** [skills/wellbeing-motivation-agency/perma-based-lesson-designer/SKILL.md](../../skills/wellbeing-motivation-agency/perma-based-lesson-designer/SKILL.md). **Review priority:** medium. **Planned status:** not implemented.

**Proposed correction:** Present PERMA as a planning lens, qualify outcome/intervention claims, and permit unaddressed elements in mapping. Add low-disclosure/access choices for personal or political reflection; require learning evidence separately from enjoyment.

**Preserve:** No all-five mandate; no forced positivity; academic rigour; actual teacher actions; privileged-context limitation.

**Baseline evidence:** `skills/wellbeing-motivation-agency/perma-based-lesson-designer/SKILL.md:100`, `skills/wellbeing-motivation-agency/perma-based-lesson-designer/SKILL.md:150`, `skills/wellbeing-motivation-agency/perma-based-lesson-designer/SKILL.md:158`, `skills/wellbeing-motivation-agency/perma-based-lesson-designer/SKILL.md:172`, `skills/wellbeing-motivation-agency/perma-based-lesson-designer/SKILL.md:74`, `skills/wellbeing-motivation-agency/perma-based-lesson-designer/SKILL.md:78`, `skills/wellbeing-motivation-agency/perma-based-lesson-designer/SKILL.md:98`, `skills/wellbeing-motivation-agency/perma-based-lesson-designer/SKILL.md:262`, `skills/wellbeing-motivation-agency/perma-based-lesson-designer/SKILL.md:111`, `skills/wellbeing-motivation-agency/perma-based-lesson-designer/SKILL.md:113`. See the full record for remaining evidence and extraction/core checks.

#### `wellbeing-motivation-agency/wellbeing-learning-connection-mapper`

**File:** [skills/wellbeing-motivation-agency/wellbeing-learning-connection-mapper/SKILL.md](../../skills/wellbeing-motivation-agency/wellbeing-learning-connection-mapper/SKILL.md). **Review priority:** medium. **Planned status:** not implemented.

**Proposed correction:** Make evidence-map output neutral: links can be supported, plausible/indirect, contradicted or unknown; preserve null/negative findings. Remove invented local trends, unrelated effect-size transfer and unsupported timelines. Separate forecast from local evidence and require leadership factual review.

**Preserve:** Honesty instruction; mechanisms not slogans; conditions for impact; caveat section; baseline requirement.

**Baseline evidence:** `skills/wellbeing-motivation-agency/wellbeing-learning-connection-mapper/SKILL.md:92`, `skills/wellbeing-motivation-agency/wellbeing-learning-connection-mapper/SKILL.md:94`, `skills/wellbeing-motivation-agency/wellbeing-learning-connection-mapper/SKILL.md:110`, `skills/wellbeing-motivation-agency/wellbeing-learning-connection-mapper/SKILL.md:147`, `skills/wellbeing-motivation-agency/wellbeing-learning-connection-mapper/SKILL.md:271`, `skills/wellbeing-motivation-agency/wellbeing-learning-connection-mapper/SKILL.md:75`, `skills/wellbeing-motivation-agency/wellbeing-learning-connection-mapper/SKILL.md:204`, `skills/wellbeing-motivation-agency/wellbeing-learning-connection-mapper/SKILL.md:225`, `skills/wellbeing-motivation-agency/wellbeing-learning-connection-mapper/SKILL.md:249`, `skills/wellbeing-motivation-agency/wellbeing-learning-connection-mapper/SKILL.md:253`. See the full record for remaining evidence and extraction/core checks.

### Q9 — Essential limits on the MCP surface

#### `historical-thinking/historical-document-set-curator`

**File:** [skills/historical-thinking/historical-document-set-curator/SKILL.md](../../skills/historical-thinking/historical-document-set-curator/SKILL.md). **Review priority:** medium. **Planned status:** not implemented.

**Proposed correction:** Label proposed/unverified documents and verify provenance before use; add concise source-supply limitation to core. No hallucinated source was demonstrated.

**Preserve:** Question-led document selection, useful provenance fields, contrasting perspectives and historical inquiry. Keep proposed document suggestions helpful while ensuring the user can distinguish a recommendation from a document actually obtained and checked.

**Explicitly permitted correction:** Output labels and the active core may change to expose unverified/proposed status and source-supply limitations; do not remove all concrete source suggestions to avoid the issue.

**Baseline evidence:** `skills/historical-thinking/historical-document-set-curator/SKILL.md:145`, `skills/historical-thinking/historical-document-set-curator/SKILL.md:150`, `skills/historical-thinking/historical-document-set-curator/SKILL.md:215`, `skills/historical-thinking/historical-document-set-curator/SKILL.md:290`, `skills/historical-thinking/historical-document-set-curator/SKILL.md:16`, `skills/historical-thinking/historical-document-set-curator/SKILL.md:288`. See the full record for remaining evidence and extraction/core checks.

#### `systems-thinking/ladder-of-inference-reflection`

**File:** [skills/systems-thinking/ladder-of-inference-reflection/SKILL.md](../../skills/systems-thinking/ladder-of-inference-reflection/SKILL.md). **Review priority:** medium. **Planned status:** not implemented.

**Proposed correction:** Carry a concise recent-harm/power-asymmetry suitability check into core; do not remove reflective method or turn alternatives into factual investigation.

**Preserve:** Respectful reflection separating observations, interpretations and possible alternatives; acknowledging feelings without asserting that an alternative explanation is true. Preserve teacher agency and the reflective educational purpose.

**Explicitly permitted correction:** The active core may gain the existing recent-harm/power-asymmetry suitability boundary. Do not use reflective reframing to minimize documented harm or replace factual investigation.

**Baseline evidence:** `skills/systems-thinking/ladder-of-inference-reflection/SKILL.md:100`, `skills/systems-thinking/ladder-of-inference-reflection/SKILL.md:104`, `skills/systems-thinking/ladder-of-inference-reflection/SKILL.md:173`, `skills/systems-thinking/ladder-of-inference-reflection/SKILL.md:175`, `skills/systems-thinking/ladder-of-inference-reflection/SKILL.md:171`. See the full record for remaining evidence and extraction/core checks.

### Q10 — Large original workflows and clear scope

#### `original-frameworks/dispositional-knowledge-assessment-designer`

**File:** [skills/original-frameworks/dispositional-knowledge-assessment-designer/SKILL.md](../../skills/original-frameworks/dispositional-knowledge-assessment-designer/SKILL.md). **Review priority:** medium. **Planned status:** not implemented.

**Proposed correction:** Make component selection and design-versus-implementation workload clear up front; retain multi-informant judgment and optional caregiver input. Reorganize component-specific detail without weakening core distinctions.

**Preserve:** Observation-based, multi-informant professional judgment; distinctions among indicators, interpretations and developmental patterns; optional caregiver contribution and existing limitations. Preserve the complete assessment design as an available output.

**Explicitly permitted correction:** Workload framing and organization may change. Component selection is a proposal only: it must not silently remove currently required outputs, add a required input or weaken context-sensitive observation.

**Baseline evidence:** `skills/original-frameworks/dispositional-knowledge-assessment-designer/SKILL.md:85`, `skills/original-frameworks/dispositional-knowledge-assessment-designer/SKILL.md:219`, `skills/original-frameworks/dispositional-knowledge-assessment-designer/SKILL.md:633`, `skills/original-frameworks/dispositional-knowledge-assessment-designer/SKILL.md:635`, `skills/original-frameworks/dispositional-knowledge-assessment-designer/SKILL.md:58`, `skills/original-frameworks/dispositional-knowledge-assessment-designer/SKILL.md:131`, `skills/original-frameworks/dispositional-knowledge-assessment-designer/SKILL.md:631`. See the full record for remaining evidence and extraction/core checks.

#### `professional-learning/panel-review`

**File:** [skills/professional-learning/panel-review/SKILL.md](../../skills/professional-learning/panel-review/SKILL.md). **Review priority:** medium. **Planned status:** not implemented.

**Proposed correction:** Surface scope and heuristic status before use; keep useful perspectives and limitations; do not portray same-session roles as independent raters. Resolve/label optional chain targets or document evidence-label meaning; preserve behavior and do not invent missing skills.

**Preserve:** Multiple explicit review perspectives, structured reasons and actionable feedback, relevant evidence cautions and the useful wellbeing/SEL calibration scope. Retain numeric thresholds as transparent practitioner heuristics where useful.

**Explicitly permitted correction:** Scope wording, heuristic labels and independence claims may be clarified. Do not protect a claim that simulated same-session roles are independent reviewers, or treat their numerical gate as validated measurement. A discovery-description edit requires its bounded metadata exception.

**Baseline evidence:** `skills/professional-learning/panel-review/SKILL.md:3`, `skills/professional-learning/panel-review/SKILL.md:70`, `skills/professional-learning/panel-review/SKILL.md:614`, `skills/professional-learning/panel-review/SKILL.md:618`, `skills/professional-learning/panel-review/SKILL.md:622`, `skills/professional-learning/panel-review/SKILL.md:11`, `skills/professional-learning/panel-review/SKILL.md:12`, `skills/professional-learning/panel-review/SKILL.md:612`, `skills/professional-learning/panel-review/SKILL.md:94`. See the full record for remaining evidence and extraction/core checks.

## Appendix B — exact organization queue

These 20 entries are advisory. Counts are body/MCP prompt proxy tokens, before any changes. Potential moves are starting points for section mapping, not instructions to move every listed section. Preserve each record's mandatory core and all useful evidence.

### R1 — Original-framework guides

| Exact source path | Body / MCP proxy tokens | Initial reference candidate |
|---|---:|---|
| [skills/original-frameworks/developmental-progression-synthesis/SKILL.md](../../skills/original-frameworks/developmental-progression-synthesis/SKILL.md) | 5,659 / 2,528 | Extended example section (through line360); retain a short worked example and all mandatory exceptions in core. (skills/original-frameworks/developmental-progression-synthesis/SKILL.md:283) |
| [skills/original-frameworks/learning-target-authoring-guide/SKILL.md](../../skills/original-frameworks/learning-target-authoring-guide/SKILL.md) | 11,743 / 1,938 | Extended example section (through line766); retain a short worked example and all mandatory exceptions in core. (skills/original-frameworks/learning-target-authoring-guide/SKILL.md:490) |
| [skills/original-frameworks/seeds-regenerative-inquiry-cycle/SKILL.md](../../skills/original-frameworks/seeds-regenerative-inquiry-cycle/SKILL.md) | 6,118 / 1,805 | Extended example section (through line393); retain a short worked example and all mandatory exceptions in core. (skills/original-frameworks/seeds-regenerative-inquiry-cycle/SKILL.md:250) |
| [skills/original-frameworks/self-determined-project-design-protocol/SKILL.md](../../skills/original-frameworks/self-determined-project-design-protocol/SKILL.md) | 6,536 / 1,666 | Extended example section (through line425); retain a short worked example and all mandatory exceptions in core. (skills/original-frameworks/self-determined-project-design-protocol/SKILL.md:242) |

### R2 — Curriculum design guides

| Exact source path | Body / MCP proxy tokens | Initial reference candidate |
|---|---:|---|
| [skills/curriculum-assessment/curriculum-knowledge-architecture-designer/SKILL.md](../../skills/curriculum-assessment/curriculum-knowledge-architecture-designer/SKILL.md) | 7,700 / 1,745 | Extended example section (through line412); retain a short worked example and all mandatory exceptions in core. (skills/curriculum-assessment/curriculum-knowledge-architecture-designer/SKILL.md:228) |
| [skills/curriculum-assessment/discipline-specific-critical-thinking-task-designer/SKILL.md](../../skills/curriculum-assessment/discipline-specific-critical-thinking-task-designer/SKILL.md) | 6,686 / 1,928 | Extended example section (through line334); retain a short worked example and all mandatory exceptions in core. (skills/curriculum-assessment/discipline-specific-critical-thinking-task-designer/SKILL.md:231) |
| [skills/curriculum-assessment/kud-knowledge-type-mapper/SKILL.md](../../skills/curriculum-assessment/kud-knowledge-type-mapper/SKILL.md) | 8,187 / 2,358 | Extended example section (through line408); retain a short worked example and all mandatory exceptions in core. (skills/curriculum-assessment/kud-knowledge-type-mapper/SKILL.md:259) |
| [skills/curriculum-assessment/project-brief-designer/SKILL.md](../../skills/curriculum-assessment/project-brief-designer/SKILL.md) | 5,533 / 1,534 | Extended example section (through line340); retain a short worked example and all mandatory exceptions in core. (skills/curriculum-assessment/project-brief-designer/SKILL.md:218) |
| [skills/curriculum-assessment/scope-and-sequence-designer/SKILL.md](../../skills/curriculum-assessment/scope-and-sequence-designer/SKILL.md) | 9,351 / 2,658 | Extended example section (through line575); retain a short worked example and all mandatory exceptions in core. (skills/curriculum-assessment/scope-and-sequence-designer/SKILL.md:386) |

### R3 — Professional-learning guides

| Exact source path | Body / MCP proxy tokens | Initial reference candidate |
|---|---:|---|
| [skills/professional-learning/lesson-study-cycle-designer/SKILL.md](../../skills/professional-learning/lesson-study-cycle-designer/SKILL.md) | 5,005 / 1,136 | Extended example section (through line315); retain a short worked example and all mandatory exceptions in core. (skills/professional-learning/lesson-study-cycle-designer/SKILL.md:186) |
| [skills/professional-learning/pedagogical-content-knowledge-developer/SKILL.md](../../skills/professional-learning/pedagogical-content-knowledge-developer/SKILL.md) | 7,510 / 1,991 | Extended example section (through line395); retain a short worked example and all mandatory exceptions in core. (skills/professional-learning/pedagogical-content-knowledge-developer/SKILL.md:260) |
| [skills/professional-learning/technological-pedagogical-content-knowledge-developer/SKILL.md](../../skills/professional-learning/technological-pedagogical-content-knowledge-developer/SKILL.md) | 7,472 / 2,085 | Extended example section (through line406); retain a short worked example and all mandatory exceptions in core. (skills/professional-learning/technological-pedagogical-content-knowledge-developer/SKILL.md:274) |

### R4 — Historical inquiry and work-cycle guides

| Exact source path | Body / MCP proxy tokens | Initial reference candidate |
|---|---:|---|
| [skills/historical-thinking/contextualisation-skill-builder/SKILL.md](../../skills/historical-thinking/contextualisation-skill-builder/SKILL.md) | 5,031 / 1,138 | Extended example section (through line298); retain a short worked example and all mandatory exceptions in core. (skills/historical-thinking/contextualisation-skill-builder/SKILL.md:201) |
| [skills/historical-thinking/document-based-lesson-designer/SKILL.md](../../skills/historical-thinking/document-based-lesson-designer/SKILL.md) | 5,281 / 1,574 | Extended example section (through line371); retain a short worked example and all mandatory exceptions in core. (skills/historical-thinking/document-based-lesson-designer/SKILL.md:265) |
| [skills/historical-thinking/sourcing-skill-builder/SKILL.md](../../skills/historical-thinking/sourcing-skill-builder/SKILL.md) | 5,971 / 1,534 | Extended example section (through line320); retain a short worked example and all mandatory exceptions in core. (skills/historical-thinking/sourcing-skill-builder/SKILL.md:210) |
| [skills/montessori-alternative-approaches/uninterrupted-work-cycle-designer/SKILL.md](../../skills/montessori-alternative-approaches/uninterrupted-work-cycle-designer/SKILL.md) | 5,678 / 1,131 | Extended example section (through line330); retain a short worked example and all mandatory exceptions in core. (skills/montessori-alternative-approaches/uninterrupted-work-cycle-designer/SKILL.md:165) |

### R5 — AI learning-science guides

| Exact source path | Body / MCP proxy tokens | Initial reference candidate |
|---|---:|---|
| [skills/ai-learning-science/cognitive-tutoring-architecture-designer/SKILL.md](../../skills/ai-learning-science/cognitive-tutoring-architecture-designer/SKILL.md) | 5,091 / 999 | Extended example section (through line284); retain a short worked example and all mandatory exceptions in core. (skills/ai-learning-science/cognitive-tutoring-architecture-designer/SKILL.md:158) |
| [skills/ai-learning-science/formative-assessment-loop-designer/SKILL.md](../../skills/ai-learning-science/formative-assessment-loop-designer/SKILL.md) | 5,029 / 1,140 | Extended example section (through line287); retain a short worked example and all mandatory exceptions in core. (skills/ai-learning-science/formative-assessment-loop-designer/SKILL.md:169) |
| [skills/ai-learning-science/intelligent-tutoring-dialogue-designer/SKILL.md](../../skills/ai-learning-science/intelligent-tutoring-dialogue-designer/SKILL.md) | 5,004 / 1,053 | Extended example section (through line288); retain a short worked example and all mandatory exceptions in core. (skills/ai-learning-science/intelligent-tutoring-dialogue-designer/SKILL.md:162) |
| [skills/ai-learning-science/productive-failure-desirable-difficulty-designer/SKILL.md](../../skills/ai-learning-science/productive-failure-desirable-difficulty-designer/SKILL.md) | 5,059 / 1,137 | Extended example section (through line278); retain a short worked example and all mandatory exceptions in core. (skills/ai-learning-science/productive-failure-desirable-difficulty-designer/SKILL.md:166) |

## Appendix C — plan preparation checks and present status

This plan was prepared from the existing source review and directly checked repository conventions. At preparation time, all 165 source-file SHA-256 hashes matched the structured review, the 37 revision candidates were assigned to exactly one Q packet each, and all 20 organization candidates were assigned to exactly one R packet each. The 108 keep records are protected and remain fully inventoried in the linked 165-skill matrix. No candidate is marked implemented or accepted by this plan.

Only read-only inspection and generation/checking of this document were required here. Existing suite results are recorded in the earlier audit evidence; tests and model comparisons were not rerun merely to write a proposal. The tracked repository remained unchanged. An independent read-only plan critic identified the preservation-fragment problem in Appendix A; all 12 affected entries were replaced with complete preserved-behavior statements and explicit permitted corrections. Review used one spawned critic, peak one, with no inherited conversation history. No implementation or rework of skills occurred; review rework was confined to this plan. Model usage/token telemetry was not available as a verified receipt.

The same independent critic rechecked the 12 clarifications and reported no remaining material objection within that bounded review. Final preparation checks passed for local links, cited source-line bounds, exact 37/20 queue membership, all 165 unchanged source hashes and an empty tracked diff. These are document/source-preservation checks, not educational effectiveness or runtime test results.
