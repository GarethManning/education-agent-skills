# Educational skill quality rubric and refinement rules

2026-10-22. Proposed review rubric, applied in the companion review; not a new inclusion policy, empirical certification or change to project canon. Baseline `main` revision `6bbbce418f82e11044009c9f3b7373a354de5bd0`. Skills remain unchanged.

## What excellence means here

An excellent educational skill gives its intended user dependable help with a recurring educational task, makes the important decisions explicit, handles relevant context and limitations, and produces something the user can act on with proportionate effort. It adds specific educational judgment without claiming authority it does not have. Shortness is useful when it improves that experience; it is not a substitute for expertise.

The library's existing `CONTRIBUTING.md:21–36` inclusion requirements and `docs/EXCLUSIONS.md` remain the starting policy. This review asks how well accepted educational approaches have been operationalized for an agent and a user. It does not reopen every framework's eligibility or treat original practitioner methods as defective because they are original. Original frameworks need honest scope and operational coherence; robust evidence for a component does not validate an entire composed intervention.

The open standard supplies a file format. Its [authoring guidance](https://agentskills.io/skill-creation/best-practices) provides useful advice about coherent scope, procedures and progressive disclosure. Neither constitutes a complete educational quality assessment. No learner-outcome study or pilot is required to perform this textual review. Conversely, this review cannot establish clinical safety, model adherence, marginal gain over no skill, or effectiveness with learners.

## The eight criteria

| Criterion | What strong looks like | Concrete reasons to revise | Evidence to inspect |
|---|---|---|---|
| C1 Purpose and selection | One recognizable job, intended user, useful trigger and scope; adjacent skills have intelligible differences | Trigger materially exceeds actual scope; teacher-design prompt mistaken for live tutoring; misleading claim about intended audience | Description, purpose, required inputs, output contract and explicit exclusions |
| C2 Added expertise | Specific distinctions, decision rules, procedures or error-prevention knowledge that make the task easier to do well | Generic encouragement, rephrased task with no method, jargon that does no work, unnecessary restrictions | Actual decision rules and worked reasoning; citations alone are insufficient |
| C3 Actionability and coherence | Inputs lead to a feasible sequence; branches agree; required data/outputs and examples fit the same rules; clear completion | Conflicting instructions, unreachable branch, example violates its own rule, inconsistent producer/consumer states, nonexistent required dependency | Prompt and examples, input/output schemas, handoffs, defaults and stop conditions |
| C4 Educational and evidence integrity | Educational claims are accurate and proportionate; source identity traceable; empirical result, theory and practitioner heuristic distinguished | Unsupported universal assertion, inaccurate source claim, reconstructed wording presented as official, strong rating unsupported by declared scale | Named sources, exact claims, evidence labels, limitations and output labels; independently check material disputed claims |
| C5 Context sensitivity and agency | Adaptation follows relevant learner/task evidence; assumptions marked; required support retained; teacher/learner can make consequential choices | Hard rule ignores correct response, readiness, accommodations or refusal; diagnosis inferred from a sparse description; guessed confidence treated as valid data | Conditional branches, optional context defaults, level/language access, user overrides and examples |
| C6 Practical usefulness and workload | Output can be used or edited immediately for its stated job; prioritize recommendations; make feasibility and implementation costs visible | Excessive compulsory artifacts, no next action, imagined local resources/partners, one-size-fits-all feedback, output misses target construct | Output format and example; time/resources, ownership, next steps and definition of completion |
| C7 Boundaries and recovery | Relevant uncertainty, human expertise, privacy and safeguarding are handled at the point needed; failure has an actionable route | Routine advice applied to immediate danger; disclosure/public display forced; missing evidence invented; critical caveat omitted from a distribution surface | Core instructions, known limitations, dangerous edge cases, input handling and MCP-extracted prompt |
| C8 Economy and organization | Essential rules are easy to find; a coherent core with focused optional references; detail retained where it prevents errors | Repeated background or role claims, long examples always loaded, obscure rule buried in prose, core and examples disagree | Full activated content versus core prompt, section sizes, repetition, dependencies and client delivery |

These are questions for reasoned assessment, not eight equally weighted numbers. A safeguarding or factual correctness problem cannot be averaged away by excellent formatting. A source file with many helpful examples does not automatically fail C8; it can be well suited to human reading while needing a lighter agent entry point.

## Anchored judgments

For each criterion, record one of:

- **Supported in text:** a concrete passage demonstrates the intended design and no material contrary evidence was identified within the stated review depth. This is not a runtime pass.
- **Concern:** an identifiable contradiction, missing consequential branch, misleading claim, or strong improvement opportunity is supported by a path and line reference. State the smallest correction and its affected surface.
- **Not established:** the evidence needed to answer is absent or the question requires execution/external verification. Do not fill an evidence gap with a flattering score or a failure claim.

For each skill, choose a primary action:

- **Keep:** no sufficiently justified content change identified in this bounded review. This does not certify perfection or empirical effectiveness.
- **Reorganize:** preserve method/content; improve core/reference separation or discoverability. A length-based entry is advisory, not a failure to conform or proof of better output.
- **Revise:** a targeted content, workflow or boundary correction has a concrete reason. Preserve the useful remainder and keep reorganization as a secondary action where relevant.

Record confidence and review depth. Separate specific local revisions from shared opportunities (such as data minimization for all live learner records). Do not inflate the number of broken skills by turning one shared instruction convention into thirteen independently proven harmful behaviors.

## Apply different task standards within the common rubric

| Task family | The particular quality to preserve and inspect |
|---|---|
| Lesson/unit design | Alignment from learning goal to actual task and evidence; workable timetable/resources; no decorative activities or false claims of guaranteed learning |
| Assessment and curriculum mapping | Assess intended construct; preserve source identifiers/voice; separate coverage from depth/validity; represent ambiguity and human decisions |
| Learning-science design | Correct prerequisite/readiness conditions; appropriate assistance, retrieval, feedback and fading; distinguish general evidence from exact schedules/thresholds |
| Live learner interaction | Bounded turns, correct-first/no-prior-knowledge/refusal handling; proportionate reflection; uncertainty and independent work represented honestly; user control |
| Inclusion/wellbeing | Protect existing support and goals; avoid diagnostic inference or forced disclosure; contextual and immediate-safety boundaries; specialist role where needed |
| Historical/critical inquiry | Source provenance and uncertainty; question-source fit; distinguish factual verification from plausible interpretation; do not fabricate quotations or evidence |
| Original/composite methods | State practitioner/synthesis status; retain distinctive method; components and orchestration obey actual contracts; do not imply a score validates the approach |
| Professional learning | Teacher dignity/agency; achievable follow-through; distinguish developmental reflection from performance diagnosis or appraisal |

## Length: make a reasoned edit, not a quota

Count three different things: full file including rich metadata, Markdown body delivered by a local client, and the extracted prompt the MCP adapter actually returns. They are not interchangeable. A file can look long while its active prompt is already compact. A short prompt can be under-specified or omit an essential caution.

Use a repeatable tokenizer proxy if useful, named explicitly. The companion evidence uses tiktoken0.14.0 `o200k_base`; this is not a Claude tokenizer or proof of token usage in any installed client. The standard's 500-line/~5,000-token recommendation is a screening guide, not a validation failure or experimentally established optimum.

For each section ask:

1. What error or decision does this material address?
2. Must the agent see it before acting, or only in a particular branch?
3. Is the same rule already stated elsewhere? Does repetition reinforce or contradict?
4. Is it needed for agent execution, human learning, or both?
5. Can it move without breaking standalone copying or the MCP-extracted contract?

Keep in the core: intended use, essential inputs, decision sequence, key distinctions, mandatory safeguards, stopping/recovery rules and a concise output contract. Move lengthy worked examples, historical research explanations, alternative templates and optional specialist detail only when linked to a clear loading condition. Never move an essential limitation out of the only text MCP returns. Do not rewrite every skill to the same size or force a tiny core to reference so many files that use becomes fragmented.

## A practical future refinement loop

The current work stops at review and proposals. For subsequently authorized edits:

1. Fix source-backed contradictions, factual claims and safety/agency gaps first. Each edit needs a before/after rationale and a preserved-remainder statement.
2. Reorganize the largest agent entry points selectively, keeping research/examples accessible. Compare original core and extracted MCP prompt to ensure an editorial change does not remove needed behavior.
3. Verify exact invariants: stable IDs, required inputs, source/citation preservation, branch/example consistency, real links, bundled content and existing validations. These are checks, not a new research programme.
4. Where usefulness is disputed, inspect a concrete before/after task example. Only if needed later, compare repeated outputs against a frozen baseline with blind expert review. This is optional follow-up, not a pilot gate imposed on the present task.
5. Accept/reject each bounded edit, keeping cases for the specific failure it fixes. Preserve a separate small unseen set if automated comparative evaluation is later introduced.

Potential future evaluation harness, if desired, should have three separate reports: deterministic packaging/contract checks; expert content review against this rubric; and task-output comparisons. It must label which checks actually ran. A model-based reviewer needs human calibration before its scores are trusted; generated students or dialogue scripts are not evidence of learner benefit. No API/model evaluation run, benchmark, fine-tuning or learner experiment was performed here.

## Versions and rollback

Use Git history and a tagged accepted baseline to preserve original versions; do not duplicate active skill directories with old/new/v2 names. Existing source paths/IDs remain stable for compatible improvements. Proposed core/reference files live in the same skill folder and travel together. Keep complete evidence of the evaluated revision and the reason for each accepted edit. Breaking input/output or pedagogical-contract changes need explicit versioning and a documented transition; genuinely different jobs may deserve separate skills, but length or editorial taste alone is not a reason to split identity.

Revert a failed revision and its regenerated registry/bundle together. Keep security/infrastructure fixes separate so a content rollback does not restore unsafe parsing. Do not auto-commit or deploy because an editorial review is favorable. Original metadata/citations remain protected by repository guidance unless a later explicit instruction authorizes a bounded supersession.
