# Learner workflow corrections — implementation report

2026-10-22. **Draft pending independent review.** Implementation and manual textual walkthroughs, not runtime/model evaluation, empirical benefit evidence, clinical certification, integration acceptance or release.

## Scope and preservation

Authoritative checkout: `/Users/garethmanning/Github/education-agent-skills`, branch `codex/agent-skills-standards-quality-2026-10-22`. Source baseline: `6bbbce418f82e11044009c9f3b7373a354de5bd0`. Followed the bounded task brief, its evidence JSON, the quality rubric and clarified Appendix A preservation. Read all 13 full files before editing, their immediate producer/consumer evidence contracts, `AGENTS.md`, `STATE.md`, and the MCP prompt extractor in `mcp-server/src/skill-loader.ts`.

Changed exactly the 13 named student-learning SKILL.md files and this report. Kept names, IDs, paths, invocation flags, field names, required/optional inputs, schema structure, distinct methods and named research. Twelve raw frontmatter blocks are byte-identical. The sole authorized exception is explain-first-interrogator's disputed `evidence_sources` citation/claim: identified Chen et al., exact title/version, and narrowed its endpoint. No evidence-strength downgrade or field removal. All other frontmatter bytes are unchanged. Body capture instructions qualify metadata capabilities: unobserved confidence/results remain unknown, and skipped checks are never inferred complete.

No edits to infrastructure, sidecars, registry, bundle, export, historical audits or policy; protected preceding packet work remains untouched. No subagents, commits, pushes, deploys, installed client settings, learner data, paid model calls, hosted MCP requests or messages. A read-only primary-paper retrieval was used solely for the expressly requested disputed citation check. The coordinator owns regeneration/integration after content review.

## Source check

Inspected the audit's cited [primary preprint v2](https://arxiv.org/html/2604.00142v2), including abstract, methods and results. It reports 92 participants and 60-minute calculus practice; the significant effect concerns explanation quality on NEI transfer items, with no significant ordinary post-test or transfer answer-accuracy difference. No delayed durable-transfer result supports the original broad claim. The revised citation, evidence paragraph and extracted prompt reflect that distinction. Existing foundational self-explanation citations remain.

The SRL wrapper's unnamed 2025 Frontiers metadata entry cannot be uniquely attributed from its supplied information. Preserved that protected entry, removed reliance on its supposed measured result in the body, and flagged its uncertainty in the operative prompt. This does not obstruct the named-source SRL rationale. Other historical research narratives were preserved rather than expanded into a new evidence review.

## Per-file dispositions and textual walkthroughs

Every disposition below is **revised draft, awaiting independent educational/content review**. These are fictional inputs traced against the actual revised instructions. No model was asked to simulate a learner; no learning outcome or model adherence was measured.

### ai-claim-checker

Before: agreement was labelled low vigilance, uncertainty was compulsory, and a checking plan could look like performed verification. After: the three questions still require a specific claim, substantive method and domain source, but justified agreement/no issue is valid; proposed and performed verification are distinct. AI self-agreement alone does not establish an error.

Preserved: claim focus, independent sources, non-generic method, novice scaffolding and rejection of fabricated criticism. Surfaces: purpose, core evaluation/edge/capture instructions and vaccine example; no metadata change.

Ordinary walkthrough: a learner questions a numerical AI claim, proposes recalculation and names the textbook. Unless that calculation or source check actually happens, the record says plan only/not verified. Edge: the learner explains why a simple accurate claim is credible and identifies a confirmation method/source. Accept agreement; do not invent a flaw or force a lookup. The vaccine example explicitly records sources named, not consulted. Remaining unknown: domain accuracy and actual independent verification depend on the chosen task/source.

### confidence-calibration-check

Before: unknown confidence became 0–30 or 5; partial performance was treated as calibrated 60, and labels could imply personal traits. After: define a concrete prospective task and success criteria; invite numbers/words/skip; compare only actual reports with task evidence, without converting qualitative accuracy to percentages. Post-feedback confidence predicts a future comparable task and does not by itself establish calibration improvement. Marking can be challenged.

Preserved: attention to underconfidence as well as overconfidence, attempt-specific feedback, separate post-feedback report, micro-goal and scale/accuracy cautions. Surfaces: purpose, steps, warm-start, capture, chemistry example and limitation wording.

Ordinary walkthrough: learner reports 75, gives a partial explanation, then reports 60 after feedback. Discuss a possible task-specific mismatch and a study action, not proof that 60 is calibrated. Edge: learner says “I don't know” or declines a number; record words/not captured, offer foundation teaching if new, and make no numerical comparison. Remaining unknown: informal scoring and comparable-task evidence cannot establish a stable calibration pattern from one item.

### explain-first-interrogator

Before: no replacement conflicted with the example's supplied synthesis; zero knowledge could prolong guesses; the recent paper overstated durability/transfer. After: accessible explanation modes, first-exposure teaching, at most three probes, then bridge/teaching/stop by choice; learner supplies the synthesis. Corrected the authorized citation and propagated its narrow scope into the MCP prompt.

Preserved: strength before gap, mechanism/jargon/circularity/causal probes, three-round cap and learner-owned synthesis. Surfaces: one evidence_sources entry; purpose/evidence, core opening/probes/recovery/tone/capture and natural-selection example.

Ordinary walkthrough: after three natural-selection gap probes, the revised transcript asks for the learner's synthesis and includes their response, rather than presenting the AI's finished explanation. Edge: a learner has never encountered the topic or requests an explanation; offer short foundation teaching or stop before more compulsory guesses. Disputed marking is rechecked or left uncertain. Remaining unknown: exact-script efficacy and subject judgment are untested.

### fading-manager

Before: required three Level 3 sessions at hints 0–1, but example advanced after two at 1–2; expected “strong” while retrieve-first emits “accurate”; lower levels categorically withheld warm starts. After: example meets three/0–1; accepts canonical accurate with legacy strong alias, preserving historical records. Levels/thresholds remain adjustable heuristics, and restoration/access support is available. Cross-session claims require supplied, credible comparable records, with missing/external support uncertainty retained.

Preserved: levels 0–4, transparent collaborative transitions, restoration, topic-specific supports, heuristic and external-help cautions. Surfaces: core history, level descriptions, criteria, warm-start, evidence/edges, equation/restoration examples and storage limitation.

Ordinary walkthrough: three comparable Level 3 records with accurate recall and hints 0,1,1 permit a collaborative move to Level 2. The same records labelled legacy strong remain eligible. Edge: only two records or hints 1–2 do not meet that default criterion; hold rather than repeat the old example's automatic advance. Missing independent evidence or needed access support calls for hold/restoration, never fabricated mastery. Level 2→1 still requires two qualifying checks; the level description and closing example now agree. Remaining unknown: thresholds are not validated; history and outside help cannot be independently guaranteed by this text.

### productive-failure-protocol

Before: no finite default time and compulsory two attempts could block consolidation; exact two attempts were called research-proven. After: default up to five minutes or two contrasting attempts, adjustable by learner/teacher; earlier consolidation, foundation teaching or stop for request/distress/missing prerequisites. No autonomous timer is assumed, and the attempt cap also bounds the interaction.

Preserved: conceptual multiple-approach selection, contrasting genuine methods, comparison, consolidation connected to actual attempts, conceptual/transfer scope, time cost, arbitrary-convention and safety-risk exclusions. Surfaces: purpose/design note, core phases/warm-start edges/capture, statistics opening and heuristic limitation.

Ordinary walkthrough: range and deviations-from-mean attempts lead to consolidation that references those two actual methods and checks variance on new numbers. Edge: correct first solution may be compared with an optional flawed case, or consolidated immediately. A blank learner can receive foundation teaching with zero attempts recorded; a single attempt plus a help request can end exploration. Remaining unknown: exact default time/count and script effects are design heuristics, not measured outcomes.

### progressive-hint-ladder

Before: starting-level directions conflicted; frustration implied right difficulty; reflection could block support; a conceptual cue was tagged Level 0. After: brief Level 0 diagnosis, then the lowest useful remaining help, escalating in order; actual work/prior attempts can justify placement. One accessible interpretation check then pause/change-mode/foundation route prevents reflection loops. Frustration has no diagnostic meaning by itself.

Preserved: all six levels 0–5, minimum-needed help, reflection before escalation, no-full-answer design, foundation fallback and no shame for more assistance. Surfaces: evidence qualification, core diagnosis/escalation/edge/capture and speed example.

Ordinary walkthrough: the speed learner lists distance/time and receives a conceptual relationship cue before deriving 80 km/h. The example now records Level 1, not unaided Level 0. Edge: no progress at Level 5 routes to underlying foundations; inaccessible reflection allows a sketch/step, changed mode or pause, without supplying the target solution. Remaining unknown: placement and analogy quality require judgment; the six-level script is not validated by broad ITS effect sizes.

### retrieve-first-gate

Before: recall gate applied even to first exposure, warm-start could loop, copied-language suspicion sounded certain, and blank guesses guaranteed benefit. After: scoped to review of encountered material; accessible/recognition modes are labelled as supported, first-exposure/foundation/stop routes are explicit, marking can be disputed, missing confidence stays missing. Initial unaided recall remains distinct from prompted performance.

Preserved: recall before generic re-teaching, accurate/missing/misconceived gap map, warm-start and informal-assessment caveat. Surfaces: purpose/evidence framing, core routing/feedback/warm-start/edges/capture and photosynthesis wording.

Ordinary walkthrough: the learner recalls sunlight/inputs/chlorophyll; feedback maps those accurately and focuses teaching on omitted outputs/stages. The example's later confidence is explicitly post-feedback. Edge: never-studied topic receives orientation/teaching, not compulsory guesses; no recall result is invented. Textbook phrasing prompts an honest materials question, not an accusation. Producer states remain accurate/partial/minimal/warm_start_needed, with historical strong interpreted by fading rather than added as a producer state. Remaining unknown: accuracy and source-free participation cannot be assured by wording.

### srl-session-wrapper

Before: existing opening-goal input was absent from prompt, separate closing mode could invent context, and examples promised an imaginary later check-in. After: includes session_goal_from_opening; recover an explicit available goal or ask once in mid/closing mode, otherwise leave absent. Full-wrap waits for learner returns; only a real activated host timer could promise interruption. Timing/benefit claims and unnamed-source uncertainty are qualified in core.

Preserved: opening/monitor/closing phases, brief goal/strategy/reflection/next-step sequence, one-prompt refusal and wrapper/content distinction. Surfaces: purpose/evidence, prompt context/mode/recovery/capture, French Revolution transitions and limitation.

Ordinary walkthrough: supplied “compare the Revolution's causes” opening goal appears in a later mid-session check; the learner returns to initiate closing. Edge: standalone closing with no recoverable goal asks once, then reflects without fabricating past goal/achievement; refusal remains skipped. Remaining unknown: unidentified 2025 metadata citation preserved pending a separately authorized correction, no timer integration or effect established.

### stuck-and-error-diagnosis-coach

Before: stuckness proved suitable difficulty, categories sounded definitive, example arithmetic said 2.5 then computed 2, and kinematics supposedly always needed time. After: actual work tests a tentative/mixed/unclear hypothesis; obvious slips need only a short check. Corrected arithmetic to 2, and stated both energy conservation and time-free v²=u²+2aΔx under constant gravity/appropriate assumptions.

Preserved: conceptual/procedural/strategic/representational distinctions, targeted process-level help, self-correction before explanation and future error check. Surfaces: core framing/targeting/recovery/capture and both physics scenarios.

Ordinary walkthrough: learner reverses 5/10 as 10/5, obtains 2, self-corrects to 0.5, then chooses unit checking. Edge: absent time with speed and vertical displacement does not rule out kinematics; compare assumptions rather than label method choice wrong. Unclear/mixed errors need no forced category, and frustration allows pause/foundation support. Remaining unknown: cause classification depends on actual work and subject accuracy.

### teach-back-evaluator

Before: unused prior_understanding_level, visual-thinker category, complete/accurate praise at ≥2 anchors, and no finite revision exit. After: existing prior input supplies tentative entry context, authentic example request carries no learner-type claim, higher misconception score explicitly means safer, threshold praise matches the anchors, and at most two targeted revision rounds (or earlier stop) retain unresolved gaps.

Preserved: Alex's curious novice role and explicit coach-mode scoring, three dimensions/anchors, targeted revision and content-type limitations. Surfaces: purpose, core input/role questions/scoring/pass/recovery/capture; full osmosis dialogue retained.

Ordinary walkthrough: a 3/3/2 explanation passes the existing threshold with a stated imprecision and optional targeted revision; it is not labelled accurate throughout. Edge: 2/2/2 also passes with remaining nuance; two unsuccessful revisions or a stop closes with current scores/open gap, not forced completion. Prior self-report does not determine score. Remaining unknown: formative scoring depends on domain accuracy; it does not certify independent/durable understanding.

### transfer-bridge

Before: fixed food divided among more animals substituted allocation arithmetic for price formation; cue conditions/durability/statuses/placeholders were inconsistent. After: explicit fictional GPU-slot auction predicts a clearing price using the actual target price mechanism; ecology is retained only as a limited analogy, not a successful transfer. Task distance is learner-relative; immediate scaffolded application is distinguished from independent delayed transfer, and initial/after-bridge responses are separate. Uses the existing concept_just_learned input and passed/failed/skipped aggregate vocabulary, describing mixed results in prose.

Preserved: near/far design, structural rather than surface match, same/different/travelling-principle questions, student-generated third context and scaffold limitation. Surfaces: purpose, core mechanism validation/evaluation/recovery/capture and corrected example; named sources unchanged.

Ordinary walkthrough: fixed 10 GPU slots, bids 11 down to 1, highest rejected bid sets price 1; ten new bids of 12 fill the slots and make highest rejected bid 11, so price becomes 11. Learner explains the bidding mechanism. Edge: “more animals means less food each” is an allocation analogy, not price formation; if ranking/highest-rejected-bid help is supplied, record initial non-success and subsequent helped success separately. Remaining unknown: whether this computing application is genuinely far for a learner; auction novelty may require prerequisite teaching, so no far-transfer certification is claimed.

### unassisted-evidence-checkpoint

Before: repeated help refusals overrode stop, accommodation meaning was absent, example feedback preceded post-attempt confidence, and completed metadata could be copied into skipped results. After: learner may submit partial work, stop/defer, or explicitly end independent mode and resume assisted; access conditions preserving the target construct stay available. Target-skill cues contaminate subsequent independence, and completed/assistance fields describe actual events only. Confidence is voluntary and post-attempt confidence precedes feedback in both examples.

Preserved: new comparable solvable task, independent window without target-skill hints, assistance contamination rule, explicit Bastani extrapolation and one-item/no-durability caution. Surfaces: core framing/task/access/window/review/capture, both chemistry examples and distress limitation; raw metadata untouched.

Ordinary walkthrough: learner elects to continue without hints, submits 4Fe+3O₂→2Fe₂O₃, reports confidence before feedback, then receives the atom-count evaluation; independent tag is supported for that attempt only. Edge: learner requests help and chooses assisted resume; close the window before any cue and mark resumed work scaffolded. Defer/skip has no completed result or fabricated performance. Screen reader/dictation without reasoning can remain; spelling correction when spelling is the target requires qualified conditions/teacher judgment. Remaining unknown: outside help cannot be enforced or absence verified cryptographically, and a single item cannot establish general independence.

### weekly-agency-review

Before: records, recalled estimates and interpretation blurred; sparse unlike tasks were treated as causal trends; storage was assumed. After: provenance/comparability checks precede interpretation, no numerical trends from guessed/missing values, causal stories are tentative with alternatives, and the learner reviews the minimal summary. No automatic persistence; authorized host handling or a learner-held record supports continuity.

Preserved: learner interpretation before coach analysis, learner-set strategy goal, first-review fallback, structured summary and cadence by accumulated evidence. Surfaces: purpose, core data/first-review/analysis/warm-start/capture, biology/genetics dialogue and storage limitation.

Ordinary walkthrough: comparable cell-biology records moving partial→accurate can be described, while variable-difficulty genetics/hint records support only tentative next-study hypotheses; learner proposes and confirms a strategy to test. Edge: no records permits goal-setting or labelled recollection, not computed trends or assumed next-week data. Skipped reflection is not recorded yes; learner can correct what they retain. Remaining unknown: sparse observational records cannot identify retention loss, causal strategy effects or foundation deficits by themselves.

## Verification and limits

- `npm test -- --reporter=dot`: **21 passed, 1 skipped**, twice (initial pass and after further editorial changes). The skipped test is the environment-gated hosted MCP smoke test; no hosted endpoint was requested. These are existing library checks, not learner-model trials.
- `git diff --check -- skills/student-learning`: passed; repeated after final editorial edits.
- Read-only Python invariants: all 13 pre-edit SHA-256 values match the evidence record; all 12 protected frontmatter blocks are byte-identical; explain-first differs only by the authorized citation/claim bytes; all 13 current MCP fenced prompts extract with the loader's primary pattern and fences are balanced. No deterministic keyword-presence editorial tests were added.
- Manual readback compared changed core instructions, existing/full examples and consumer evidence vocabulary. Ordinary and edge cases above are expected textual traces, not empirical observations or runtime acceptance.
- Temporary edit scripts in `/tmp` used assertions to catch unmatched replacement targets before writing each affected file. Three such source-text matching assertions required correction; these were authoring-script mismatches, not product/test failures. No failed test fix cycle, database operation, server, or background process occurred.
- No registry/bundle/export regeneration: deliberately delegated to the coordinator under this packet's explicit scope. Existing tests passing does not prove the current prebuilt bundle contains these drafts.

## Independent review questions and unfinished work

Review whether each bounded exit preserves its distinctive learning method, whether the GPU auction is appropriate/distant enough for its stated learner, and whether informal confidence/teach-back feedback stays anchored to task criteria. Confirm canonical accurate plus legacy strong history compatibility and that no consumer copies capability metadata into actual completion. The unnamed SRL citation remains unresolved/protected; identifying it or changing its metadata needs a separately authorized source correction, not an invented substitute. No new clinical/local-policy rule was needed. No implementation decision presently needs Gareth; independent review, coordinator regeneration and integration remain outstanding.

## Exact source manifest

Each row names the edited file and its pre-edit SHA-256 from the bounded evidence record. The final draft SHA-256 is included for exact independent review; this report itself is excluded from that manifest.

| File | Source SHA-256 | Draft SHA-256 |
|---|---|---|
| `skills/student-learning/ai-claim-checker/SKILL.md` | `03209658ad2be7c9b7ae5f5252ecda8be996afa5124a6fb895bf852c6c2dc0f9` | `be1acf78cc8ed96f5d73eba56bf29fda2cee1ca21ff9348063a0388cc5a0f472` |
| `skills/student-learning/confidence-calibration-check/SKILL.md` | `6df4825de26d60df14ef5566f8b35e17b58031d156996551fa34ffedf6e96db5` | `ab1d5db8f55f687bc474a537f2969c56af5871c5780f1f4a8c490132b03c60f4` |
| `skills/student-learning/explain-first-interrogator/SKILL.md` | `aba08e222d596ede68b759d7adf2285d747eb37a2ccddcc573c28a0ef807b63f` | `4ee64b1a7e717bc8ddafaa3c6c9ba05c5c36d101878dea45973a648fc444a994` |
| `skills/student-learning/fading-manager/SKILL.md` | `83681b24f6746e727480efdf657299f47fad1da9d858932bac2e3217a482b1d2` | `21bea4878731704de8bc9596003a6cf8cf3c9b7d7999b689ff92c5333e4d8c67` |
| `skills/student-learning/productive-failure-protocol/SKILL.md` | `981c2fbd183617787b40b094bbec3e76dc4630e9a73bc8797f51fb5c06b97c9f` | `83d7717ccbe49704015b5a60506aaf9a8981d0b97cf13fd14f2c2ea6a270d21d` |
| `skills/student-learning/progressive-hint-ladder/SKILL.md` | `5178e50cb0e4fd48e10dd6a0d16d1d884b805a2be0935989409030fb56274b55` | `563603c626673cf1f3ab2c3ed5ca58024b4e2dfbe8f0e446b06aed47f645d768` |
| `skills/student-learning/retrieve-first-gate/SKILL.md` | `04bde0cc2ec1911ad45bcb3375763b977a7b92d87d760ed4886e5c8fe0ddae3c` | `b8541e654e834f6dc4d287b982fba701237169df055a8fe2d6385986995d6be4` |
| `skills/student-learning/srl-session-wrapper/SKILL.md` | `dd0dd6fecec960929755becfbe59a032f3d97cdc3868903f812adf2a4a524b4c` | `2bc18a017e12caababf03b51ad58a8a594493f4b13e70fce48c612cba6a5beaf` |
| `skills/student-learning/stuck-and-error-diagnosis-coach/SKILL.md` | `fb9f958472a5e8a712dd64653cb331dce737ac468a6e32868eabb340cb097473` | `fbf2561b85b56c6fdbddf99cb066b7e3cc82e4572c6a54d24f1ba126b7bd0aeb` |
| `skills/student-learning/teach-back-evaluator/SKILL.md` | `09c4d8639ccd8502c061fbf4a98a26203b60381de9da5054d50759dbe5bc87ee` | `b640dc6564db29b604f33f9e77ee729e0d59081eca5535a8fabbec185cd432db` |
| `skills/student-learning/transfer-bridge/SKILL.md` | `87b536419939a82c2f4bdef058a3250bc27643d2c4fa0c07bfe8ec871869b2f2` | `c598ca09bb4cf0d3e1618e2f07b7995b52eca340966f3cf8e2082656cb392a64` |
| `skills/student-learning/unassisted-evidence-checkpoint/SKILL.md` | `460a4d6d32b618859b5bc9de8fb148c97b5106d0b0139d6ecb6167536b808465` | `9aba72ff19f7845612f7ae290b11b2ec421d8cae13fb0686e17547bae0402092` |
| `skills/student-learning/weekly-agency-review/SKILL.md` | `08082d91b2873907dbbce27c33fd5def5d928fa029c1425583aae03649b9cc65` | `ef1648fa555e7626e47bd3ebce6a0d29a1b3676604149181f741fbdc8effaa76` |
