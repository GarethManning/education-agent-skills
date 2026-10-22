# Wellbeing and inclusion corrections — builder report

Status: **draft content complete; independent educational review pending**. Manual textual checks are not runtime/model evaluation, learner-outcome evidence or clinical certification.

Authority: `docs/tasks/wellbeing-inclusion-2026-10-22.md` and its exact 13-record evidence JSON; rubric and full relevant Appendix A clarifications in `docs/audits/skill-quality-improvement-plan-2026-10-22.md`. Baseline `6bbbce418f82e11044009c9f3b7373a354de5bd0`; branch `codex/agent-skills-standards-quality-2026-10-22`. Work was limited to the 13 paths below and this report. Earlier runtime/export/learner work and other dirty files were preserved. No commits, pushes, builds/deployments, installs, paid/model calls, real learner data, hosted requests or external messages were made.

All 13 full source files, the full rubric, all 13 exact evidence records and relevant Appendix A entries were read. Immediate producer/consumer contracts were checked for the six inclusion tools plus assessment orchestrator, practice-problem sequence, lesson opening and critical thinking task. The packet's internal chains were checked through their full files. Two optional chain targets absent from the library are explicitly documented as unavailable suggestions in the two affected bodies. Their frozen metadata is not rewritten and no new dependency is invented.

All raw frontmatter bytes are unchanged: no metadata exceptions. Stable identities, paths, required/optional input/output schemas, citations, evidence labels and invocation settings remain exact. All original template-variable sets are unchanged. The active fenced `## Prompt` contains the critical corrections, so they survive existing MCP extraction; body examples/self-checks were made coherent too. No reference files were created or mandatory inputs added. Longer worked cases were retained except where compact corrected cases remove repetition of material unsafe/unsupported assumptions (restorative and connection mapper).

## Checks and results

- Before editing, SHA-256 equality against all 13 evidence-record source hashes: **13/13 matched**; local before snapshot retained at `/tmp/wellbeing-inclusion-before.json` for this review.
- Node local invariant check with existing `yaml`: **13/13 passed** exact raw frontmatter, parseable YAML and input/output/citation contracts, identical template variable sets, nonempty fenced prompt using the current MCP extraction pattern and balanced fences. Rechecked after the final body consistency edits.
- `npm test -- --reporter=dot --grep-invert 'anonymous MCP requests'`: **21 passed (1.6s)**. Hosted smoke was explicitly excluded to obey the task; no hosted request occurred. These tests check library/metadata structure, not educational effect or current bundled-body parity.
- `git diff --check -- skills/wellbeing-motivation-agency skills/original-frameworks/inclusive-design-orchestrator/SKILL.md`: **passed**, including after final edits.
- Local solar-model arithmetic using the newly disclosed illustrative nominal inputs: 22 cm / 1,390,000 km scale → Earth diameter 2.01 mm, Earth distance 23.74 m, Jupiter diameter 22.63 mm, Jupiter distance 123.14 m. Rounded written values agree. Primary astronomical source verification was not performed; use requires the explicitly stated teacher source check. Unsupported Proxima-as-football/city claim was removed, not replaced with an unverified star fact.
- An attempted direct import of `scripts/validate-skills.py` could not run because system Python lacks `yaml` (`ModuleNotFoundError`). No dependency was installed; existing Node/YAML validation and the 21 passing library tests supply local parsing/metadata checks. An edit-script assertion caught a case-sensitive match before saving that file; the exact match was corrected once, then invariants passed. No unresolved implementation failure.
- Manual ordinary + edge walkthroughs below: **26 textual walkthroughs completed**, covering the actual source instructions, outputs, examples and limitations. They are reasoned branch checks, not generated responses or observations of learners.

Registry/MCP bundle/export generation intentionally deferred to the coordinator under the explicit task restriction, which supersedes the repository's usual per-skill regeneration instruction for this packet. Source/body versus prebuilt distribution parity is not yet claimed. Independent educational review, then coordinated regeneration/integration, remain necessary before acceptance/publication.

## Exact changed files and hashes

SHA-256 values bind review to the draft source. Each before hash is the evidence-record source hash and matched the actual initial file.

| File | Before SHA-256 | Draft SHA-256 |
|---|---|---|
| `skills/original-frameworks/inclusive-design-orchestrator/SKILL.md` | `97e42e33c1ba372589561b67c185bfd4ffe60efc1000a837fe5943eec14ef19e` | `6070e957ee64f23860b0006149b376def3fc3eb497d5b95e23d6768a27eea3b2` |
| `skills/wellbeing-motivation-agency/agency-scaffold-generator/SKILL.md` | `3803c8bc63a828c42f7d5cd0429a3b8ebf8b29b6c424435005d47f06294fd2af` | `1696004e55a61936c73e68a9c8e8f91c025b54d600a3e7a14265005540c596dc` |
| `skills/wellbeing-motivation-agency/awe-wonder-experience-designer/SKILL.md` | `3249cc1879007f460f2ad52f078c9975a61c5450168b5fa1a5479036913d635e` | `b2fab9f2bdcd33a681f5d2aacc9e3d936b09b51fad92c61c7c0c68a911bf3c73` |
| `skills/wellbeing-motivation-agency/belonging-classroom-culture-designer/SKILL.md` | `5d4c825c85b67b2e76a7300700141a34b72c36c2953b49810f9f9b582ae6c8fb` | `93f64baebfb16ca34ee217352423715b2505434668261c039e3283bbebc79f49` |
| `skills/wellbeing-motivation-agency/flow-state-condition-designer/SKILL.md` | `94714b077d4cce82fa4e1075ca4f532b79c1a9ffeba3728cfa2211e4ebe252e1` | `5568c1582dba70502c31077e8b0f1fbafe7e854895144fc5742f2a3d8fa03e6a` |
| `skills/wellbeing-motivation-agency/implementation-intention-designer/SKILL.md` | `83819dfb83c3aeb253eab35292ca386e699a0363fced214cd2925adde51ee92d` | `c19897d7fad8bc38151527e3f3cf77c5db414a619812062c6512a09ebad0264b` |
| `skills/wellbeing-motivation-agency/motivation-diagnostic-task-redesign/SKILL.md` | `1b4717de6826f4cf803ef32f63cd4e854d3629165a28fc0e192aad38d358528e` | `0e8da64e1a93cc6ab58a115bf6aef2d9d5e839602e0649c5fdb7444013760593` |
| `skills/wellbeing-motivation-agency/perma-based-lesson-designer/SKILL.md` | `4fd5066f923dfafcbbad20561a5a6ec4572912ec05685b6c3fd9817a7f52c982` | `c111d4901cde2e7cf9f742ec9d282c21fa5ccd57516efa911f631dbdbd05e3e8` |
| `skills/wellbeing-motivation-agency/restorative-practice-protocol-designer/SKILL.md` | `7ec90a91b85fdd63fec0199ad624d7b7c4cb2e8829ee38d28c0bb051c7ff1fe9` | `f6caf93ab7e44723f953a351f277905c8d2ddf256ab96568b175cdd6cd37dd4f` |
| `skills/wellbeing-motivation-agency/ruler-emotional-literacy-sequence/SKILL.md` | `c6a079ba16320268ee52493686cbcd6dd9077ab72d88aaa850a47d5f92d36257` | `af037f0df8b9e3d28434c535dd5f4d62d1700ecc06b02f9856d3844869c25b7d` |
| `skills/wellbeing-motivation-agency/self-efficacy-builder-sequence/SKILL.md` | `3b66bdaef032d90bd840043301ba6454105e90d5c5de711a7a8310d031405a9c` | `0ff235f3388aefd39535d3fa5edfbb46850fd4071193a0dd57c9e764741cb3f9` |
| `skills/wellbeing-motivation-agency/trauma-informed-practice-designer/SKILL.md` | `26fc50ed988804a27fc34e01f3de8897b7ebed4e815f5c4299c7317919a6b71e` | `1aaf20dfc5fb3ce6c843685799b76312bd291947717e6a23a05621eb9ac11257` |
| `skills/wellbeing-motivation-agency/wellbeing-learning-connection-mapper/SKILL.md` | `ee8065c41aa3bb174ef457fc19d576a21115b94ef8352bf6db1822369e36da19` | `7945fe9a75e8a46c593e4127bb7ed7a4534809cd95d4e0b713edf630e2912d4e` |

## Per-skill dispositions and textual walkthroughs

Every disposition is **revise — draft pending independent review**, not a change to inclusion policy or clinical certification.

### inclusive-design-orchestrator

**Before → after rationale:** Sequential exhaustion could delay individual support; universal-first is now a planning priority alongside existing/required/urgent support. Specialist referral pauses only the decision requiring specialist authority, not ordinary inclusion.

**Affected surfaces:** Purpose, hierarchy, active Prompt routing/checklists, common pathway and pitfall.

**Preserved remainder:** Four visible pathways, recommendation/choice gate, barrier-specific tool handoffs, tokenism check, emerging composite status, high expectations and specialist collaboration.

**Ordinary fictional walkthrough:** Fictional teacher requests a full new science-unit design: provisional proactive pathway still routes barrier anticipation → UDL options, maps actual barriers and checks learning-goal integrity.

**Edge fictional walkthrough:** Fictional learner has existing text access support and needs access today: retain support immediately, improve shared resources in parallel; referral does not suspend the accessible lesson.

**Remaining uncertainty / review question:** Does the clarified planning hierarchy read consistently with the deliberately frozen metadata description? Confirm this as body-only clarification, not removal of the individual-support exception.

### agency-scaffold-generator

**Before → after rationale:** Attributed levels, fixed cycles and blanket recovery rules could override readiness or requirements; adapted dimensions/levels are labelled heuristics, immediate Level 2 is separated from later Level 3, and safety/access/assessment requirements remain protected.

**Affected surfaces:** Active Prompt defaults/principles/target, WW1 example levels/checkpoints, progression and limitations.

**Preserved remainder:** Meaningful bounded choice across five dimensions, four useful levels, explicit decision ownership and teacher-role shifts, recovery rather than reflexive takeover, context-sensitive long-term agency.

**Ordinary fictional walkthrough:** Fictional dependent WW1 class receives guided choices among causes/sources with coaching; advance only after learners justify choices, plan and use feedback.

**Edge fictional walkthrough:** Fictional learner needs extra structure while classmates are ready for more choice: use different supports; a mandatory essay construct or access tool remains even when product choice is discussed.

**Remaining uncertainty / review question:** The two absent chain targets are documented as unavailable optional suggestions in the body; no metadata exception or invented dependency. Are the remaining options feasible for the stated curriculum?

### awe-wonder-experience-designer

**Before → after rationale:** Settled classroom-effect claims and surprise/suffering rules overstated the lens; transfer is qualified, previews/alternatives and objective checks are explicit, and the false Proxima/Sun-sized-football/city assertion is removed. Planet model arithmetic is made consistent using disclosed nominal inputs.

**Affected surfaces:** Purpose/evidence, active Prompt, solar-system encounter/teaching sequence/pacing, limitations.

**Preserved remainder:** Vastness plus accommodation distinction, content-linked inquiry bridge, paced encounters, subjective response and overuse limitations, emerging evidence status.

**Ordinary fictional walkthrough:** Fictional Year 7 scale lesson still uses a 22cm Sun and small Earth, observation → questions → quantitative comparison → reflection; no emotional response is required.

**Edge fictional walkthrough:** Fictional mobility/sensory constraint or learner wanting a preview uses the same objective via classroom/tactile/digital or seated model; no long unsupervised walk or compulsory surprise. History uses achievement/decisions, not suffering as spectacle.

**Remaining uncertainty / review question:** No primary astronomical source was fetched under the no-hosted-request scope. Nominal values are explicitly illustrative and teacher-check-before-use; arithmetic was checked locally. A star extension is withheld until its data/map distance are verified.

### belonging-classroom-culture-designer

**Before → after rationale:** Blanket pairing, no-help, gaze and no-cost rules could exclude learners; private learner voice/access/safety checks are now active, observable behaviours remain ambiguous, support is available without stigma, and prep/follow-up costs are visible.

**Affected surfaces:** Purpose/evidence, active Prompt, all five routine examples, language guide, monitoring and pastoral limitation.

**Preserved remainder:** Avoid public singling out, authentic regard, meaningful contribution, routine integration, concrete teacher language and pastoral support boundary.

**Ordinary fictional walkthrough:** Fictional Year 7 transition class uses a small number of compatible routine changes, preferred names, accessible contributions and private feedback; observe access and exclusion in context.

**Edge fictional walkthrough:** Fictional learner is quiet, avoids eye contact or feels unsafe with a partner: do not diagnose belonging from gaze, preserve communication/support preferences and change grouping; suspected bullying/discrimination receives the school protective response now.

**Remaining uncertainty / review question:** Check the feasibility of role preparation and exit-ticket response time. Existing research labels remain unchanged; the college intervention is explicitly not a classroom-routine effect estimate.

### flow-state-condition-designer

**Before → after rationale:** Flow conditions were deterministic and the example rewarded reaching a level while offering endless retry; the redesign is now a hypothesis checked by learner report and work, mastery is the goal and repeated errors lead to feedback/support/instruction.

**Affected surfaces:** Purpose, active Prompt conditions/self-check, equations example and recovery/map/pitfalls, limitations.

**Preserved remainder:** Differentiated challenge, clear goals, usable timely feedback, low unnecessary interruption, control, private progress, prerequisite and unsuitable-task limits.

**Ordinary fictional walkthrough:** Fictional Year 8 equations practice still uses five differentiated levels, self-checking and personal pace; the learner explains a method and checks a fresh item.

**Edge fictional walkthrough:** Fictional learner gets two or fewer correct repeatedly: inspect the error, offer a worked solution/teacher help and a supported item; pause for prerequisite instruction rather than repeating sets. Safety or a widespread misconception can justify interruption.

**Remaining uncertainty / review question:** Numerical question/advancement rules remain practical examples, not validated flow thresholds; neither quiet absorption nor speed certifies learning.

### implementation-intention-designer

**Before → after rationale:** The prompt prohibited feelings then used internal urges; it now accepts specific recognisable external/internal cues. Confirm a learner-owned goal/barrier before scripting WOOP, address external constraints and label review thresholds as examples. FAFSA assistance is no longer misclassified as direct if-then evidence.

**Affected surfaces:** Purpose/evidence, active Prompt cues/defaults/WOOP/rehearsal/self-check, retrieval example/script/coping/monitoring.

**Preserved remainder:** Specific cue → small doable action, WOOP mental contrasting, coping plans, accessible rehearsal, simple monitoring, motivation and environmental limits.

**Ordinary fictional walkthrough:** Fictional learner endorses better revision and confirms an urge to reread: a desk cue starts a small retrieval attempt; the internal urge triggers a specific coping plan followed by feedback and study.

**Edge fictional walkthrough:** Fictional learner lacks quiet time due to care duties or does not endorse the teacher target: address actual practical support/goal discussion, leave inner obstacle unknown/not applicable, do not invent an internal failure or hard-equals-learning script.

**Remaining uncertainty / review question:** Absent optional chain targets are explicitly unavailable in the body. The review trigger and example minutes are negotiable heuristics; no habit or improvement trend is fabricated.

### motivation-diagnostic-task-redesign

**Before → after rationale:** Task design/teacher report forced an internal motivation classification and a longer/harder task; analysis now distinguishes design features, learner report and hypotheses, permits unknown/mixed, protects foundations/objective/supports and offers a same-time adaptation.

**Affected surfaces:** Purpose, active Prompt principles/profile/self-check, ecosystem diagnosis/rationales/same-time option, implementation notes and time limitation.

**Preserved remainder:** SDT autonomy/competence/relatedness, rationale, meaningful choice plus structure, concrete redesign-to-need mapping, no deficit labels/rewards, comprehension fallback.

**Ordinary fictional walkthrough:** Fictional ecosystem terminology case keeps contextual definitions, checking and application when time/access allow; an individual check assesses learning separately from apparent engagement.

**Edge fictional walkthrough:** Fictional teacher has ten minutes or learners cannot infer unfamiliar words: use the 10-minute model/check/apply alternative, direct teaching/access supports and explicit sequencing; do not diagnose external regulation from rushing or make more demand the objective.

**Remaining uncertainty / review question:** The longer case is still illustrative, not a proven improvement. Teacher verifies case accuracy, feasibility and learner understanding rather than assuming the real-world context motivates everyone.

### perma-based-lesson-designer

**Before → after rationale:** Wellbeing-equals-learning claims and a fully populated table could override selective use; PERMA is a planning lens, not a clinical or validated lesson intervention, and not-targeted entries are valid. Sensitive reflection/movement has private, third-person, pass and accessible alternatives.

**Affected surfaces:** Purpose/evidence, active Prompt/mapper/self-check, historical dilemma/debate/pacing/reflection/moves and context limitation.

**Preserved remainder:** Existing no-all-five mandate, no forced positivity, academic rigour, content integration, concrete teacher actions, coherent mapping and privileged-context caution.

**Ordinary fictional walkthrough:** Fictional suffrage history lesson retains source analysis, evidence-based debate and a written argument; academic work assesses the objective separately from optional emotional reflection.

**Edge fictional walkthrough:** Fictional learner cannot move or wishes not to disclose personal political views: use a seated/written historical-evidence response, examine both sides or pass public disclosure while retaining the academic task; no personal discrimination simulation.

**Remaining uncertainty / review question:** No new outcome claim is made from EPOCH or privileged-school research. Teacher verifies historical materials and access before use; the debate now accounts for transition time.

### restorative-practice-protocol-designer

**Before → after rationale:** Consent/power-imbalance caveats already existed; they are now applied before meeting choice and throughout the persistent accent-mockery case. Severity alone cannot justify a conference/circle, and refusal does not remove protection or policy accountability.

**Affected surfaces:** Purpose/evidence, active Prompt suitability/approach/preparation/output/self-check, revised complete accent-mockery example and cost limitation.

**Preserved remainder:** Preparation, ordered restorative questions, affected-person voice, specific participant-owned repair, follow-up, fallback and coexistence with school-policy consequences.

**Ordinary fictional walkthrough:** Fictional low-level suitable conflict with willing prepared participants still gets a proportionate chat/conference, ordered perspectives/impact/repair questions and a concrete agreement/review.

**Edge fictional walkthrough:** Fictional repeated accent mockery triggers protection, power/retaliation review and separate supported conversations first. B may decline a meeting; A remains accountable. Follow-up checks recurrence/retaliation rather than automatically reconvening or closing on a signature.

**Remaining uncertainty / review question:** Local policy and authorised facilitator review are required before consequential use. No compelled apology/forgiveness, guaranteed benefit or clinical breathing/restart rule is introduced.

### ruler-emotional-literacy-sequence

**Before → after rationale:** Existing private options occurred later than public disclosure instructions; privacy/fictional/pass choice is now consistent. The short sequence is labelled an adaptation, appearances do not determine emotions, and universal breath-holding/therapeutic guarantees are removed.

**Affected surfaces:** Purpose/evidence, active Prompt adaptation/privacy/support boundary and self-check, modelling/exam sequence/academic integration/routines, programme limitation.

**Preserved remainder:** Four Anchor distinctions, Recognise/Understand/Label/Express/Regulate skills, teacher modelling first, precise vocabulary, regulation not suppression, sustained routines and clinical boundary.

**Ordinary fictional walkthrough:** Fictional exam preparation still models Mood Meter vocabulary and Meta-Moment strategy choice, followed by academic integration and sustained optional private check-ins.

**Edge fictional walkthrough:** Fictional learner declines emotion sharing or breathing: use a fictional vocabulary example, non-breathing strategy or pass without inference from quietness. Persistent/severe distress goes to appropriate human support and urgent safety uses existing school procedures.

**Remaining uncertainty / review question:** Teacher checks training/preparation and authority to use chosen materials without invented licensing terms. Exact generated script and brief adaptation are not represented as the evaluated full RULER programme.

### self-efficacy-builder-sequence

**Before → after rationale:** Refusal/verbal fluency were treated as causal psychological evidence and first-task success was promised; capability/access checks now precede the efficacy hypothesis, success is observed and recovery is available. Timers are learner-agreed examples; assistive tools and verbal planning remain.

**Affected surfaces:** Active Prompt defaults/preflight/principles/diagnostic/self-check, writing diagnostic and five tasks/scripts, long-term support and limitations.

**Preserved remainder:** Mastery over slogans, Bandura sources, specific credible encouragement, small task steps, privacy/dignity, attribution to evidenced strategies, legitimate ongoing verbal planning and growth-mindset caveat.

**Ordinary fictional walkthrough:** Fictional writing learner with confirmed accessible one-sentence starting point can use talk → visible text → sentence → paragraph with specific feedback and adjustable progression.

**Edge fictional walkthrough:** Fictional learner speaks well but cannot record a sentence or dislikes the timer: do not call it motivation; check writing/access needs and instruction, keep assistive supports, remove timer pressure and use approved recording only with consent/data handling.

**Remaining uncertainty / review question:** The sequence does not establish diagnosis, an optimal duration or an evaluated 4–6-task treatment. Persistent barriers need appropriate human assessment/support; feedback must match actual work.

### trauma-informed-practice-designer

**Before → after rationale:** Observable outbursts/tears and clinical-sounding claims implied trauma causation; they now support tentative hypotheses with alternatives. Existing individual/emergency/safeguarding plans and authorised human review precede routine response drafts; universal corridor/exit/wait/no-demand rules are removed.

**Affected surfaces:** Purpose/evidence, active Prompt safety/hypothesis/boundary/output/self-check, full outburst reframing/adaptations/response/referral example and limitations.

**Preserved remainder:** No trauma-history elicitation/diagnosis, no teacher-as-therapist, predictable routines, calm dignity, compassionate boundaries, feedback/access, whole-class safety, reconnection and appropriate referral.

**Ordinary fictional walkthrough:** Fictional non-urgent difficulty with change/feedback receives predictable notice, private specific feedback, respectful space and an agreed appropriate regulation option while preserving learning goals.

**Edge fictional walkthrough:** Fictional throwing equipment, unsafe leaving or abuse/self-harm/suicide concern follows the existing local/individual/emergency/safeguarding plan and authorised help now; do not wait for frequency escalation or routine referral, diagnose from tears, or invent a universal crisis protocol.

**Remaining uncertainty / review question:** Consequential responses explicitly remain drafts requiring authorised local-policy and relevant specialist review. Missing local clinical protocols are not designed or certified by this packet; safe ordinary supportive practice continues.

### wellbeing-learning-connection-mapper

**Before → after rationale:** The map assumed benefit, transferred general SEL effects to restorative practice and invented local trends/timelines; every arrow now needs status/type/context/missing-link appraisal, including unknown/contradicted or no supported pathway. Leadership rationale separates reported/proposed/unknown with human review.

**Affected surfaces:** Purpose/evidence, active Prompt neutral evidence map/outcomes/timing/rationale/self-check, replaced restorative worked case and limitations.

**Preserved remainder:** Honesty, explicit mechanisms, proximal/distal distinction, conditions/costs, caveats retained in delivered rationale, baseline need and plain leadership communication.

**Ordinary fictional walkthrough:** Fictional school considering restorative investment receives a conditional mechanism map, resource/protection questions, aggregated baseline proposal and a reviewable leadership draft using only the supplied scenario facts.

**Edge fictional walkthrough:** Fictional proposal has no applicable intervention evidence or local trend: mark academic effect/timing unknown, retain null/adverse findings, do not import an SEL effect or invent three years of incidents, and allow adaptation/non-adoption.

**Remaining uncertainty / review question:** Restorative-specific evidence and local implementation details are absent in the example. The map says so rather than manufacturing a forecast or licensing a policy change; leaders verify sources, local facts and resources before use.

## Review boundary and closure

No new clinical protocol, jurisdiction, diagnostic rule, mandatory reporting detail, source-certainty claim, mandatory input, evidence-label downgrade or licensing rule was added. Existing restorative consent/power-imbalance and RULER privacy caveats are credited above as pre-existing strengths, now applied consistently. Exact cited research is preserved in frontmatter; this packet corrects overextended body claims without asserting a fresh primary-source audit or strengthening certainty. Any remaining source/educational interpretation is for independent review, and actual local-policy/specialist decisions remain with authorised humans.

No change needs a new founder product decision for the bounded draft. Independent acceptance is the next gate; local deployment, policy enactment, clinical certification or learner testing are outside this report. No commit/push was made because the brief explicitly prohibits it.

Execution accounting: one builder, no spawned workers, peak one active builder, no inherited-history exceptions created by this builder; no paid model/API evaluation. One local consistency pass; one edit-script exact-match repair. Token/credit telemetry and reliable start-to-finish wall-time receipt were unavailable. First-pass independent acceptance and any review rework are pending.
