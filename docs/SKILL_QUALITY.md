# Educational skill quality

A useful skill helps an educator or learner carry out a recurring educational task with sound judgement and proportionate effort. File-format validation makes that skill portable; it does not establish the quality of its method, model adherence or learning outcomes. The library's existing [inclusion criteria](../CONTRIBUTING.md#inclusion-criteria) and [exclusions](EXCLUSIONS.md) still apply, including honest treatment of original practitioner frameworks.

## Eight review criteria

Use these questions to make a reasoned judgement, with concrete passages and examples. They are not numerical scores or a certification scheme.

| Criterion | What to look for |
|---|---|
| Purpose and selection | A recognisable job, intended user and trigger; clear boundaries between nearby skills and teacher-facing versus live learner use. |
| Added expertise | Specific distinctions, decision rules and error prevention that add more than generic advice or citations alone. |
| Actionability and coherence | Inputs, procedure, branches, examples and outputs agree; handoffs are feasible and completion is clear. |
| Educational and evidence integrity | Traceable sources and proportionate claims; distinguish a study finding, theory, practitioner heuristic and original synthesis. |
| Context sensitivity and agency | Respond to readiness, access needs, uncertainty and user choice; preserve required support and consequential human decisions. |
| Practical usefulness and workload | Outputs can be used or edited for the promised task; next actions, resources and burden are realistic. |
| Boundaries and recovery | Relevant uncertainty, privacy, safeguarding and specialist limits appear where needed; missing evidence or an unsuitable path has an actionable recovery. |
| Economy and organization | Essential rules are easy to find; optional references have a clear purpose without hiding core methods, exceptions or checks. |

Record **supported in text**, **concern** or **not established**, with a reason, evidence and review depth. A serious correctness or safeguarding concern cannot be averaged away by good formatting. A textual walkthrough is not an executed model test. See the [full review rubric](audits/skill-quality-rubric-2026-10-22.md) for task-family distinctions and examples.

## Evidence and original methods

Research-grounded claims should cite identifiable sources and represent their actual findings and limits. Evidence for one component does not validate a complete composed workflow. The [evidence bibliography](EVIDENCE.md) is selective, not verification of every claim. Original/practitioner methods remain welcome under the existing inclusion policy when their status, distinctive method and limits are clear.

Keep recorded evidence-strength labels honest. Existing metadata includes `strong`, `moderate`, `emerging`, `original`, `practitioner` and legacy `low-moderate`/`medium` values. Their presence is not a new mapping, regrading or uniform review of the underlying evidence. A material change to a claim or rating needs its own rationale and source check.

## Review a change

For a substantive revision, explain the particular problem, smallest correction and useful behaviour being preserved. Read the whole affected skill and its resources. Check an ordinary case and the implicated edge case using fictional or minimised information; inspect actual delivered instructions, including the MCP-extracted prompt when affected. Obtain an independent content review of consequential educational changes. Model review can challenge reasoning but does not replace qualified specialist judgement for consequential safeguarding or response protocols.

Use the [contributor commands](../CONTRIBUTING.md#validation-before-a-pull-request) to check structure, source/registry/bundle consistency and portable export separately. These checks do not certify classroom benefit, legal compliance or actual client activation. A model/output comparison can answer a remaining behaviour question when separately scoped; an empirical pilot is not a prerequisite for correcting an identifiable factual or workflow contradiction.

## Organise for the task

Keep scope, method, necessary boundaries, output contract and self-checks in the active instructions. Move optional examples or extended background to focused local references only when the main guide says when to read them and the complete folder remains usable after copying. Preserve the content and verify links and examples; do not shorten to a quota.

The specification recommends concise instructions and progressive disclosure, including roughly 5,000 tokens and 500 lines as guidance. These are not proof that a shorter skill works better or a universal hard failure threshold. Distinguish full source file, activated Markdown body and the extracted MCP prompt: reducing one may leave another unchanged. Essential boundaries must survive each delivered surface; hosted MCP does not automatically load linked worked examples.

## Continuity and rollback

Improve the existing stable skill path and ID. Git history, baseline hashes and review receipts preserve earlier versions; do not create duplicate active `v1`/`v2` directories for posterity. Changes to educational meaning need an explicit rationale and preservation check. If rollback is needed, restore the affected source and resources together with regenerated registry, MCP snapshot and portable views, preserving unrelated accepted work and security fixes.

The [22 October build receipt](audits/agent-skills-build-verification-2026-10-22.md), [165-row disposition ledger](audits/agent-skills-build-dispositions-2026-10-22.csv) and [quality change log](audits/skill-quality-change-log.md) distinguish implemented revisions from earlier proposals. All 165 skills were screened, but research claims did not all receive equal-depth primary-source review. Source review and fictional walkthroughs do not establish empirical efficacy; broader research verification, specialist review where consequential, and client/model evaluation remain bounded future work.

Version labels describe different artifacts: registry schema `2.0`, GitHub release `v3.1.0`, plugin `2.2.0`, root npm package `1.0.0`, MCP package `0.1.0` and portable profile `education-agent-skills-portable-1`. The registry's legacy `agent-skills-1.0` string is not an official specification version. The [release note](releases/v3.1.0.md) summarizes the reviewed changes and the public MCP retirement; the dated build receipts retain their original local-only status. The [existing licence notice](../LICENSE) continues to govern its stated materials; no software or third-party work is relicensed here.
