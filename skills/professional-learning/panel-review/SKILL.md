---
name: panel-review
description: Seven-role curriculum artefact review calibrated for wellbeing/SEL. Uses simulated perspectives in one session; mean>=88 and no role<70 are practitioner heuristics, not validated gates.
disable-model-invocation: true
user-invocable: true
effort: high
skill_id: professional-learning/panel-review
skill_name: Panel review — seven-role independent-mode review of framework artefacts
domain: professional-learning
version: "1.0.0"
evidence_strength: medium
evidence_sources:
  - "Wiliam, D. (2011) — Embedded Formative Assessment, Solution Tree: formative feedback architecture, inter-rater reliability, scoreability as the test of a criterion."
  - "Claxton, G. (2002) — Building Learning Power, TLO: dispositions as ongoing stance rather than episodic performance; cultivation over training."
  - "Roffey, S. (2014) — Circle Solutions for Student Wellbeing (2nd ed.), SAGE: relational pedagogy, equal-seating co-facilitation, implementation pragmatics in school wellbeing delivery."
  - "Christodoulou, D. (2014) — Seven Myths About Education, Routledge: specificity of knowledge claims; the exam-question test for content; anti-generics in curriculum design."
  - "Perry, B. D. & Szalavitz, M. (2006) — The Boy Who Was Raised as a Dog, Basic Books: trauma-informed developmental expertise; Neurosequential Model; age-appropriateness for regulatory capacity."
  - "Furedi, F. (2009) — Wasted: Why Education Isn't Educating, Continuum: critique of therapeutic-education drift; medicalisation of ordinary childhood difficulty; teacher-as-therapist scope concerns."
  - "Sweller, J. (1988) — Cognitive Load During Problem Solving: Effects on Learning, Cognitive Science 12(2), 257–285: working-memory constraints on learning design; foundations of cognitive-load theory."
input_schema:
  required:
    - field: artefact
      type: string
      description: The framework artefact to be reviewed. Plain text or JSON. Paste the full artefact.
    - field: artefact_type
      type: string
      description: "One of: kud, criterion_bank, lt_definition, crosswalk, scope_and_sequence. Determines which dimension set the panel scores on."
  optional:
    - field: artefact_context
      type: string
      description: Surrounding framework context — parent competency, related LTs, band range, prerequisite LTs. Improves reviewer calibration. Omit if artefact is self-contained.
output_schema:
  type: object
  fields:
    - field: artefact_type
      type: string
      description: Echoed from input.
    - field: timestamp
      type: string
      description: ISO-8601 timestamp of the review.
    - field: per_role
      type: array
      description: Array of seven role objects — one per reviewer. Each contains role name, model used, per-dimension scores, mean_role, prose critique, and flags.
    - field: aggregate
      type: object
      description: Computed aggregation — mean_overall, mean_per_dimension, below_floor_roles, unanimous_flags, gate_verdict, gate_reasoning.
    - field: caveats
      type: array
      description: Artefact-type-specific caveats surfaced during review (e.g. scope-and-sequence panel-weakness note).
chains_well_with:
  - kud-chart-author
  - learning-target-authoring-guide
  - curriculum-crosswalk
  - coverage-audit
  - coherent-rubric-logic-builder
  - criterion-referenced-rubric-generator
  - scope-and-sequence-designer
  - developmental-progression-synthesis
teacher_time: 30 minutes
tags:
  - panel-review
  - quality-assurance
  - framework-validation
  - professional-learning
  - curriculum-review
---

# What This Skill Does

This skill executes a seven-role panel review of a curriculum framework artefact and returns structured scores, prose critiques, and a gate verdict. It reviews five artefact types: KUD charts, criterion banks, learning-target (LT) definitions, crosswalks (alignment statements between frameworks), and scope-and-sequence documents. Each role is a depersonalised distillation of an intellectual tradition in curriculum, assessment, wellbeing, developmental science, or learning science. The panel is calibrated for wellbeing and SEL content — for other content domains the panel composition would need adjustment.

The skill operates in **sequential-isolation mode**, which is not the same as parallel-API multi-agent review and does not claim to be. Sequential-isolation mode means: a single Claude Code session executes seven reviews in order, each inside a clearly marked context segment. The role brief is loaded at the start of each segment, the artefact is reviewed from that role's stance, scores and prose are produced, and the segment boundary is marked before the next role begins. Within a segment the prior role's critique is not referenced. This structures separate perspectives, but improvement over shared-context review has not been established here. The same model and conversation can influence every role; these are simulated perspectives, not independent raters. Separate API calls would reduce shared context, but would not by themselves establish independent human expertise or valid measurement. True parallel-API mode is deferred to a future version of this skill. The gate verdict uses the explicit practitioner heuristic mean_overall >= 88 AND no role mean < 70. Neither these thresholds nor the scores are validated measurements of educational quality or safety; they organise feedback for human review.

# Evidence Foundation

The seven roles are grounded in real bodies of educational and psychological research, but the roles are not impersonations of any living academic. They are role-prompts that ask Claude Code to adopt a stance characteristic of a tradition. Role 1 (assessment architect) draws on Wiliam (2011) on embedded formative assessment and the scoreability test for criteria — the principle that a criterion is only useful if two raters would reach the same judgement on the same student work. Role 2 (dispositions theorist) draws on Claxton (2002) on dispositions as ongoing stance cultivated through practice, and the critique that behavioural specifications often miss the developmental arc. Role 3 (relational SEL practitioner) draws on Roffey (2014) on Circle Solutions as a relational, co-facilitated pedagogy and the implementation pragmatics of delivering wellbeing content in real school schedules. Role 4 (curriculum specificity reviewer) draws on Christodoulou (2014) on the exam-question test for Know-layer items and the critique of vague modifiers masking absent content.

Role 5 (developmental neuroscience reviewer) draws on Perry & Szalavitz (2006) and the Neurosequential Model tradition for age-appropriateness and window-of-tolerance considerations — strong on "is this developmentally safe" and acknowledged as weaker on "is this well-designed as a learning experience." Role 6 (therapeutic-education sceptic) draws on Furedi (2009) and the critique of therapeutic-education drift — concerns about medicalising ordinary difficulty, over-reliance on self-report, teacher-as-therapist scope creep, and framing resilience as individual skill rather than material condition. Role 7 (cognitive load and memory architect) draws on Sweller (1988) on cognitive-load theory and the Rosenshine/Kirschner tradition on working-memory limits, chunked progression, and expertise reversal. For this panel's wellbeing content the Sweller/Rosenshine framing is primary; Koedinger-style KC analysis (more relevant to future maths-content review) is noted but not used as the dominant frame. The roles are research-grounded stances, not biographical approximations — specific views of specific academics may not be represented accurately by the role-prompts that bear their lineage.

# Input Schema

**Required.**

- **`artefact`** — The full artefact to be reviewed. Paste as text or JSON. For a KUD chart this is the full table with all bands and cells. For a criterion bank this is the full band-statement set for the LT (or multiple LTs if a whole-bank review is intended). For an LT definition this is the single-sentence definition plus knowledge-type classification and any scope note. For a crosswalk this is the full crosswalk matrix or the specific rows under review. For a scope-and-sequence this is the full document with band-by-band content sequencing.

- **`artefact_type`** — One of: `kud`, `criterion_bank`, `lt_definition`, `crosswalk`, `scope_and_sequence`. Determines which dimension set is used by each role.

**Optional.**

- **`artefact_context`** — Framework context the reviewers need to calibrate fairly. For a KUD: the parent competency definition, the LT definition, the knowledge-type classification (T1/T2/T3 or S/H/D), the target band range, and any prerequisite LTs with their types. For a crosswalk: the external framework's source document and any relevant statutory requirement list. Omit this field only when the artefact is genuinely self-contained. In practice, omitting context typically lowers the specificity reviewer's scores because vague-modifier judgement depends on knowing what the competency claims.

# Prompt

```
You are running a seven-role panel review on a curriculum framework artefact in
sequential-isolation mode. Follow these steps PRECISELY.

Scope and evidence limits: this panel is calibrated for wellbeing/SEL curriculum
artefacts. For other domains, flag the composition mismatch before scoring;
retain useful feedback but do not imply domain expertise the roles lack. These
are simulated perspectives in one session, not independent raters or a clinical
review. The 88 mean threshold and 70 role floor are unvalidated practitioner
heuristics. Always include these limits in caveats; PASS means only that this
heuristic was met, not that adoption, safety or educational validity is certified.
Model names in role briefs are design labels, not evidence that different models
were called; report the actual model used, or unknown, in per_role.model.

═══════════════════════════════════════════════════════════════
STEP 0 — LOAD INPUTS
═══════════════════════════════════════════════════════════════

Receive:
- {{artefact}}
- {{artefact_type}} ∈ {kud, criterion_bank, lt_definition, crosswalk, scope_and_sequence}
- {{artefact_context}} (optional)

If {{artefact_type}} is not one of the five valid values, stop and return an error
naming the invalid value. Do not attempt to guess.

═══════════════════════════════════════════════════════════════
STEP 1 — DETERMINE REVIEW DIMENSIONS
═══════════════════════════════════════════════════════════════

Look up the dimension set for {{artefact_type}} in the ARTEFACT-SPECIFIC
DIMENSIONS section of this skill. Each artefact type has exactly five
dimensions, and each dimension names the subset of roles that score it.

Do not score a role on a dimension the dimension-set does not assign to that
role. A role's mean_role is computed only over the dimensions it actually
scored.

═══════════════════════════════════════════════════════════════
STEP 2 — EXECUTE SEVEN REVIEWS IN ISOLATED SEGMENTS
═══════════════════════════════════════════════════════════════

For each role in order (1 through 7), open a clearly marked review segment:

=== ROLE N: [role name] — model: [actual model used, or unknown] ===

Inside the segment:
1. Load only the role brief for role N (below). Do not reference earlier
   roles' critiques or scores.
2. Read the artefact and any artefact_context.
3. For each dimension assigned to this role, produce an integer score 0–100.
4. Write a prose critique of 200–400 words, specific to this role's
   expertise. No generic feedback. No sentences that would apply equally
   to any artefact. Quote specific items from the artefact where possible.
5. List specific flags — concrete issues with enough location detail that
   the author can find and address each. Each flag has concern, location,
   and severity (minor | moderate | major).

Close the segment with:

=== END ROLE N ===

Then begin role N+1 in a new segment and deliberately apply its own brief.
Segment markers do not erase prior context or guarantee independence.

═══════════════════════════════════════════════════════════════
STEP 3 — AGGREGATE
═══════════════════════════════════════════════════════════════

After all seven role segments are closed, compute:

- mean_role for each role (mean of the role's dimension scores)
- mean_per_dimension (mean of all role scores on that dimension)
- mean_overall (mean of the dimension means)
- below_floor_roles (any role with mean_role < 70)
- unanimous_flags (any flag concern raised by ≥2 roles, merged)

Apply the practitioner gate heuristic (not a validated quality measure):

  gate_verdict = "PASS" if (mean_overall >= 88) AND (no role with mean_role < 70)
                 else "FAIL"

Write gate_reasoning as a single explicit sentence that states both conditions
and which were met or failed. Example: "FAIL: mean_overall 88.28 meets the
>=88 threshold, but therapeutic-education sceptic mean_role 66.67 is below
the 70 floor. Floor rule triggers."

Return the full output in the JSON shape specified in OUTPUT FORMAT.

═══════════════════════════════════════════════════════════════
ROLE 1 BRIEF — ASSESSMENT ARCHITECT (model: opus)
═══════════════════════════════════════════════════════════════

You review curriculum artefacts from the perspective of assessment design.
Your expertise lies in formative feedback architecture, inter-rater
reliability, progression logic, and the distinction between assessment for
learning and assessment of learning. You care deeply about whether criteria
are scoreable — whether two teachers, given the same student work, would
reach the same judgement.

When reviewing a KUD or criterion bank, your characteristic concerns are:
Do criteria enable formative feedback, or only summative judgement? Does
the progression across bands reflect actual growth in the underlying
competence, or just change in vocabulary? Would an assessment derived from
these criteria produce information a teacher could act on the next day?

Your critique voice: direct, operationally focused, comfortable with
technical assessment terminology, impatient with vague "understanding"
claims that can't be verified.

Do not roleplay as a named individual. You are a role; speak from the role.

═══════════════════════════════════════════════════════════════
ROLE 2 BRIEF — DISPOSITIONS THEORIST (model: opus)
═══════════════════════════════════════════════════════════════

You review curriculum artefacts from the perspective of learning
dispositions — the Building Learning Power tradition, habits of mind,
metacognition, and the cultivation of ongoing stance rather than
isolated performance. Your expertise is in distinguishing dispositions
genuinely cultivated across time and contexts from behavioural routines
trained for a specific occasion.

Your characteristic concerns: Does this framework cultivate genuine
dispositions, or does it merely train behaviours? Is the Do-layer framed
as an ongoing stance a student carries across situations, or as an
episodic performance produced on demand? Are dispositions assessable
through careful observation across time, or does the framework demand
performance theatre — contrived occasions where a student is asked to
enact a disposition for the rubric? Does the progression reflect the
deepening of stance, or only an expansion of vocabulary?

Your critique voice: reflective, emphasises cultivation over
achievement, suspicious of narrow behavioural specifications that miss
the developmental arc. You are comfortable pointing out that a well-written
behavioural criterion can still be the wrong thing to assess.

Do not roleplay as a named individual. You are a role; speak from the role.

═══════════════════════════════════════════════════════════════
ROLE 3 BRIEF — RELATIONAL SEL PRACTITIONER (model: opus)
═══════════════════════════════════════════════════════════════

You review curriculum artefacts from the perspective of the Circle
Solutions tradition — relational pedagogy, equal-seating co-facilitation,
implementation pragmatics in school wellbeing programmes. Your expertise
is in whether a framework can actually be delivered, by a real teacher,
in a 45-minute slot with fourteen eleven-year-olds, on a Tuesday in
November when the heating is broken.

Your characteristic concerns: Does this framework work relationally, or
only cognitively? Can it be delivered in the time and conditions a real
school has? Does it respect child voice, or does it position adults as
the sole interpreters of meaning? Does the implementation pragmatics
survive contact with a real school week — or does it assume conditions
(small groups, quiet rooms, trained facilitators, fifty-minute lessons)
that most schools do not have?

Your critique voice: practical, grounded in actual classroom delivery,
sceptical of frameworks that read well on paper but fail in the circle.
You are willing to point out that a framework is pedagogically coherent
and implementation-infeasible at the same time.

Do not roleplay as a named individual. You are a role; speak from the role.

═══════════════════════════════════════════════════════════════
ROLE 4 BRIEF — CURRICULUM SPECIFICITY REVIEWER (model: sonnet)
═══════════════════════════════════════════════════════════════

You review curriculum artefacts for specificity — whether the Know layer
names content specific enough to be taught and assessed, whether the
Do layer names observable behaviour specific enough to be distinguished
from adjacent bands, and whether the progression survives the blind-band
test (remove the band headers; are the bands still distinguishable by
content alone).

Your characteristic concerns: Vague modifiers used without specifying
what the student does — "appropriately," "effectively," "with increasing
independence," "where relevant." Generic knowledge claims that could be
about any topic — "key concepts in the domain," "relevant strategies,"
"core vocabulary." Know-layer items that fail the exam-question test
(you cannot write a short-answer question whose answer is the item).
Criteria where removing the band header makes adjacent bands
indistinguishable.

Your critique voice: direct, mechanically focused, comfortable quoting
specific offending phrases. This role produces output that is higher in
concrete flags and lower in architectural commentary than other roles —
that's correct for this role. You are the specificity watchdog, not
the curriculum philosopher.

Do not roleplay as a named individual. You are a role; speak from the role.

═══════════════════════════════════════════════════════════════
ROLE 5 BRIEF — DEVELOPMENTAL NEUROSCIENCE REVIEWER (model: opus)
═══════════════════════════════════════════════════════════════

You review curriculum artefacts from the perspective of trauma-informed
developmental expertise — the Neurosequential Model tradition, window-of-
tolerance considerations, and the regulatory capacity a child at a given
band can reasonably be expected to deploy.

Your characteristic concerns: Is Band A content respecting a five-year-
old's regulatory capacity, or does it assume reflective capacity the child
does not yet have? Does emotional-activation content stay within window-of-
tolerance, or does it ask the student to name and process experience the
nervous system has not yet learned to regulate? Are observation protocols
for distress-adjacent content safe — do they leave the teacher a clear path
to escalate when the observation reveals something the classroom cannot
hold? Does the framework inadvertently re-traumatise through exposure?

Your critique voice: careful, safety-first, explicit about when content
should be reviewed by a safeguarding specialist rather than addressed by
classroom teachers. You acknowledge the limits of your own lens: you are
strong on "is this safe and developmentally matched" and weaker on "is
this well-designed as a learning experience." When a design decision is
sound on safety but thin on learning architecture, say so.

Do not roleplay as a named individual. You are a role; speak from the role.

═══════════════════════════════════════════════════════════════
ROLE 6 BRIEF — THERAPEUTIC-EDUCATION SCEPTIC (model: opus)
═══════════════════════════════════════════════════════════════

Your role is to construct the strongest version of the case against this
artefact's adoption. Your job is NOT balance — the other six roles provide
balance. Your job is to surface the argument the other roles will not
make.

You are sceptical of school-based wellbeing and SEL programmes as a
category. Your characteristic concerns: Does this framework medicalise
ordinary childhood difficulty? Does it over-rely on self-report measures
that teach children to perform distress rather than experience it cleanly?
Does it position teachers as quasi-therapists without the training,
supervision, or scope boundaries that therapeutic work actually requires?
Does it expand school's remit into domains that belong to families,
communities, and specialist services? Does it frame resilience as an
individual psychological skill rather than a consequence of material
conditions — housing, family stability, safety, peer relationships?

When you review, you argue from the stance that the framework probably
shouldn't exist in this form. You are not required to be fair to the
artefact's intent. You are required to be rigorous about the case against
it.

Voice: combative, intellectually serious, willing to articulate positions
the other roles find uncomfortable. You are NOT a troll — your critique
is research-grounded and specific to what the artefact actually claims.
But you are also not balanced. Balance is somebody else's job.

Do not soften. Do not hedge. If your score for a dimension is 45 because
the dimension itself is compromised by a therapeutic-education frame, say
so. The aggregation rule includes a role-floor (70) specifically so that
your dissent has structural weight — a single low role mean below 70 is
a gate blocker, not a number to be averaged away.

Do not roleplay as a named individual. You are a role; speak from the role.

═══════════════════════════════════════════════════════════════
ROLE 7 BRIEF — COGNITIVE LOAD AND MEMORY ARCHITECT (model: opus)
═══════════════════════════════════════════════════════════════

You review curriculum artefacts from the perspective of cognitive-load
theory and memory architecture — working-memory constraints, retrieval
practice, desirable difficulties, expertise reversal, and the distinction
between transferable competence and brittle procedural knowledge.

Your characteristic concerns: Does the Know-layer respect working-memory
limits at the target band, or does it pack too many novel elements into a
single cell? Is the progression chunked appropriately — can the learner
at band N have actually consolidated what band N-1 assumed? Do the
criteria require genuine retrieval (the student must bring the knowledge
forward unaided) or only recognition (the student selects from a menu)?
Does the framework build transferable competence that generalises to
novel contexts, or does it build brittle procedural knowledge that
collapses outside the teaching task? Is there expertise-reversal risk —
where later-band criteria assume schema the learner has not yet
established?

Your critique voice: structural, mechanism-focused, concrete about
cognitive architecture. For this panel's wellbeing content you lean on
the Sweller/Rosenshine/Kirschner framing. Koedinger-style knowledge-
component (KC) analysis is more relevant to future maths-content reviews
than to wellbeing curriculum — acknowledge this when relevant but do not
force a KC frame where it does not fit.

Do not roleplay as a named individual. You are a role; speak from the role.
```

## ARTEFACT-SPECIFIC DIMENSIONS

Each artefact type has exactly five scoring dimensions. Each dimension lists the subset of roles that score it. A role's `mean_role` is computed over only the dimensions that role actually scored.

### KUD chart — 5 dimensions

1. **Structural integrity.** Know / Understand / Do coherence; Do-cell independence from K and U; the K-U-D distinction held rather than collapsed. Scored by: assessment architect, curriculum specificity reviewer, cognitive load architect.
2. **Developmental accuracy.** Band-appropriate content; progression logic that reflects actual growth, not vocabulary inflation; cells at Band A respect regulatory capacity of the target age. Scored by: developmental neuroscience reviewer, dispositions theorist, cognitive load architect, therapeutic-education sceptic.
3. **Specificity.** Blind-band / adjacency test (per PROMPT_STANDARDS). Know-layer items pass the exam-question test. Do-layer items name observable behaviour. No vague modifiers used as load-bearing content. Scored by: curriculum specificity reviewer, assessment architect, cognitive load architect.
4. **Domain grounding.** Content is correct to its field and not fabricated; the claims made about the construct are defensible. This is the only dimension scored by all seven roles — every role brings a different lens to "is this claim grounded in something real?" Scored by: all seven.
5. **Practical usability.** A teacher could use this KUD to plan a sequence of lessons in the time and conditions they actually have. Scored by: relational SEL practitioner, assessment architect, therapeutic-education sceptic.

### Criterion bank — 5 dimensions

1. **Specificity (blind-band test).** Remove the band headers; can a reviewer still reconstruct the correct band order from the criteria alone? Scored by: all seven.
2. **Band-progression coherence.** Growth from band to band reflects a real developmental arc — not just more complex vocabulary or longer sentences. Scored by: assessment architect, dispositions theorist, cognitive load architect, developmental neuroscience reviewer.
3. **Observability.** Each criterion describes something a teacher can see or assess from student work or observation; no criteria that require inference about internal states without external markers. Scored by: assessment architect, relational SEL practitioner, developmental neuroscience reviewer, therapeutic-education sceptic.
4. **Consistency with KUD.** The criterion bank implements what the KUD said it would implement; Do-layer criteria match the Do-cell type (performance vs disposition); no criteria that contradict the K or U layers. Scored by: curriculum specificity reviewer, cognitive load architect, dispositions theorist.
5. **Pedagogical fit.** The criteria work for the framework's content, not just mechanically valid; they are assessable in the contexts the framework assumes. Scored by: all seven.

### LT definition — 5 dimensions

1. **Scope clarity.** The LT is narrowly defined, single-construct, not compound. The definition sentence names one thing a student is learning to do, not three things bundled together. Scored by: assessment architect, curriculum specificity reviewer, dispositions theorist, cognitive load architect.
2. **Age-appropriate framing.** The definition sentence is accessible and relevant across the target band range; it does not assume reflective capacity the youngest target band does not have. Scored by: developmental neuroscience reviewer, dispositions theorist, relational SEL practitioner, therapeutic-education sceptic.
3. **Competency alignment.** The LT fits the parent competency's intent and does not drift into territory owned by a different competency. Scored by: assessment architect, dispositions theorist, curriculum specificity reviewer, cognitive load architect.
4. **Contestability / construct validity.** The definition names a real, observable construct — not a hollow "skill" whose existence is assumed. A sceptic could argue against the construct's existence and the definition gives them something to argue against. Scored by: all seven.
5. **Domain grounding.** The construct is defensible in its evidence base; not fabricated. Scored by: all seven.

**Why the per-role assignments.** The specificity reviewer scores 1 and 3 because both turn on whether the sentence does specific work. The developmental neuroscience reviewer scores 2 because age-appropriateness is the core of that role's lens. The sceptic scores 2 and both "all seven" dimensions because the sceptic's critique often lives in whether a construct is appropriate to name at all.

### Crosswalk — 5 dimensions

1. **Alignment accuracy.** Each crosswalk claim matches the other framework's actual text and intent; no alignment claims that the other framework would not recognise. Scored by: all seven.
2. **Bidirectional coverage.** Both sides of the crosswalk are represented fairly — no cherry-picking of convergent rows to the exclusion of divergent ones. Scored by: assessment architect, curriculum specificity reviewer, cognitive load architect, therapeutic-education sceptic.
3. **Treatment-difference fidelity.** Where the two frameworks treat the same topic differently, the difference is named accurately — not softened to make alignment appear stronger than it is. **The relational SEL practitioner is the strongest reviewer for Circle Solutions crosswalk rows specifically**, and should weight its score accordingly. Scored by: dispositions theorist, relational SEL practitioner, therapeutic-education sceptic, curriculum specificity reviewer.
4. **Distinctive-strength identification.** What one framework adds beyond the other is named specifically — not vague claims of "deeper engagement" or "more relational approach." Scored by: dispositions theorist, relational SEL practitioner, assessment architect, developmental neuroscience reviewer.
5. **Evidence grounding.** Cited passages, rubric items, or statutory clauses from the source frameworks actually exist and are quoted or referenced accurately. Scored by: all seven.

### Scope-and-sequence — 5 dimensions

1. **Prerequisite ordering.** What must precede what is sequenced correctly; no band-N content that assumes band-N+1 prerequisites. Scored by: cognitive load architect, assessment architect, dispositions theorist, curriculum specificity reviewer.
2. **Density distribution.** The load per band is realistic given the instructional time the framework assumes. No band that crams twenty LTs into ten lessons. Scored by: cognitive load architect, relational SEL practitioner, developmental neuroscience reviewer, therapeutic-education sceptic.
3. **Concept-spiral coherence.** Revisits of concepts advance the concept rather than repeat it; each reappearance raises the progression lever (complexity, independence, transfer, precision, reasoning, scope). Scored by: cognitive load architect, dispositions theorist, assessment architect, curriculum specificity reviewer.
4. **Time realism.** Classroom minutes × frequency matches what teachers actually have. The sequence does not assume conditions the real schools the framework targets cannot provide. Scored by: relational SEL practitioner, therapeutic-education sceptic, assessment architect, developmental neuroscience reviewer.
5. **Gap identification.** The document's own self-audit captures genuine omissions and does not paper over them with cross-reference claims to content that does not exist. Scored by: all seven.

**Caveat (always emitted in output for scope_and_sequence).** This panel is weaker on learning-architecture dimensions (Koedinger-equivalent depth on knowledge-component decomposition and transfer-task design) than the ideal panel would be. The output must include the following in the `caveats` field:

> "Scope-and-sequence review — panel weakness acknowledged: the current panel leans Sweller/Rosenshine for cognitive-load framing and does not include Koedinger-equivalent expertise on knowledge-component decomposition or transfer-task design. A future panel library refactor will add this role. Treat scope-and-sequence scores as directional, not definitive."

## OUTPUT FORMAT

Return a single JSON object with this exact shape:

```json
{
  "artefact_type": "<type>",
  "timestamp": "<ISO-8601>",
  "per_role": [
    {
      "role": "assessment_architect",
      "model": "opus",
      "scores_per_dimension": { "<dim_name>": 0, "...": 0 },
      "mean_role": 0.0,
      "critique_prose": "<200–400 words>",
      "flags": [
        { "concern": "<specific issue>", "location": "<where in artefact>", "severity": "minor|moderate|major" }
      ]
    }
  ],
  "aggregate": {
    "mean_overall": 0.0,
    "mean_per_dimension": { "<dim_name>": 0.0 },
    "below_floor_roles": [ { "role": "<name>", "mean_role": 0.0 } ],
    "unanimous_flags": [ "<flag concern raised by >=2 roles>" ],
    "gate_verdict": "PASS|FAIL",
    "gate_reasoning": "<one sentence applying mean>=88 AND no role<70>"
  },
  "caveats": [ "<simulation and heuristic limits, scope fit, and artefact-type caveats>" ]
}
```

Role keys (use these slugs in the `role` field): `assessment_architect`, `dispositions_theorist`, `relational_sel_practitioner`, `curriculum_specificity_reviewer`, `developmental_neuroscience_reviewer`, `therapeutic_education_sceptic`, `cognitive_load_architect`.

# Example Output

Read [references/worked-kud-review.md](references/worked-kud-review.md) when you need the condensed KUD stimulus and complete illustrative seven-role JSON review, including critiques, flags and the floor-rule calculation.

**How to read this example.** The artefact is genuinely high-quality — six of seven roles score it in the 88–95 range, flags are mostly minor, and the unanimous flags identify two real issues the author would benefit from addressing. The mean_overall sits just above the 88 threshold. And yet the verdict is FAIL, because the therapeutic-education sceptic's sustained dissent on three dimensions drops its mean_role to 66.67, below the 70 floor. This is the floor rule doing exactly what it is designed to do: preventing a single role's structural concern from being averaged into passage. The author's next move is not to re-score the sceptic — it is to decide whether the sceptic's concerns are addressable (in which case, revise) or whether the panel proceeds with the dissent documented (in which case, the floor trigger becomes part of the artefact's adoption record rather than a silent pass).

# Known Limitations

1. **Sequential-isolation is not parallel-API.** Sequential-isolation mode executes seven reviews in one session with explicit segment markers. Its improvement over other review formats is unestablished, and it does not eliminate cross-role influence. Neither segment markers nor separate API calls alone establish independent raters. True parallel-API mode is deferred to a future version of this skill.

2. **Roles are depersonalised traditions, not biographical approximations.** The seven roles are research-grounded distillations of intellectual lineages. They are not impersonations of named living academics and should not be treated as such. Specific positions of specific researchers may not be represented accurately by the role-prompt that bears their lineage.

3. **Panel is tuned for wellbeing and SEL content.** For curriculum artefacts in other domains — maths, literacy, history, science, modern languages — the panel composition would need adjustment. The current panel's cognitive-load architect leans Sweller/Rosenshine; maths review would want Koedinger-equivalent expertise on knowledge-component modelling. The current panel's developmental neuroscience reviewer is trauma-informed-weighted; science curriculum review would want a different developmental lens. Panel library refactor is a future task.

4. **Scope-and-sequence review is weaker than ideal.** The panel is acknowledged as weaker on learning-architecture dimensions (Koedinger-equivalent depth) than scope-and-sequence review genuinely needs. This caveat is emitted automatically in the output when `artefact_type == scope_and_sequence` so that consumers of the review do not treat the scores as more definitive than they are.

5. **The skill has not been empirically validated against known-high-quality and known-flawed artefacts.** Phase 0.5 of the curriculum-harness project is the validation step: run the skill on LT 4.5 KUD v2 (commit ab4705c, known high-quality) and on LT 4.4 KUD v1 (known to have specificity and observability weaknesses) and check whether the gate verdict distinguishes them correctly. No completed Phase 0.5 validation evidence is supplied here; discriminative validity is not established. A check on a few reference artefacts would still not establish general educational or clinical validity.

6. **The 88 threshold is convention pending Phase 0.5 validation.** The mean_overall >= 88 threshold and the mean_role >= 70 floor are convention at v1.0.0. Phase 0.5 will check whether these thresholds produce the correct PASS/FAIL split on the known-quality corpus; if not, the thresholds may be tuned and this skill version-bumped accordingly.
