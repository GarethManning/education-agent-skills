---
# AGENT SKILLS STANDARD FIELDS (v2)
name: wellbeing-learning-connection-mapper
description: "Map evidence-based connections between a wellbeing initiative and specific academic learning outcomes. Use when justifying wellbeing programmes, integrating SEL, or linking pastoral and academic work."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "wellbeing-motivation-agency/wellbeing-learning-connection-mapper"
skill_name: "Wellbeing-Learning Connection Mapper"
domain: "wellbeing-motivation-agency"
version: "1.0"
evidence_strength: "moderate"
evidence_sources:
  - "Fredrickson (2001) — The role of positive emotions in positive psychology: the broaden-and-build theory"
  - "Hattie (2009) — Visible Learning: student background factors affecting achievement"
  - "Roffey (2012) — Pupil wellbeing — teacher wellbeing: two sides of the same coin?"
  - "Durlak et al. (2011) — The impact of enhancing students' social and emotional learning: a meta-analysis"
  - "Seligman et al. (2009) — Positive education: positive psychology and classroom interventions"
input_schema:
  required:
    - field: "wellbeing_intervention"
      type: "string"
      description: "The wellbeing practice or initiative being considered or implemented"
    - field: "school_context"
      type: "string"
      description: "Key features of the school — phase, demographics, current challenges"
  optional:
    - field: "target_outcomes"
      type: "string"
      description: "What the school hopes to achieve — e.g. reduced anxiety, improved attendance, better engagement"
    - field: "current_data"
      type: "string"
      description: "From context engine: attendance data, behaviour data, survey results, academic outcomes"
    - field: "stakeholder_audience"
      type: "string"
      description: "Who needs to see the rationale — governors, SLT, parents, Ofsted"
    - field: "time_and_resources"
      type: "string"
      description: "Budget, staff time, training capacity available"
output_schema:
  type: "object"
  fields:
    - field: "evidence_map"
      type: "object"
      description: "The causal pathway from the wellbeing intervention to specific learning outcomes"
    - field: "mechanism_analysis"
      type: "string"
      description: "HOW the intervention is expected to improve learning — the specific psychological mechanisms"
    - field: "expected_outcomes"
      type: "array"
      description: "Predicted outcomes at student, classroom, and school levels with realistic timeframes"
    - field: "leadership_rationale"
      type: "string"
      description: "A clear, evidence-based statement for school leaders connecting the wellbeing initiative to academic outcomes"
chains_well_with:
  - "perma-based-lesson-designer"
  - "belonging-classroom-culture-designer"
  - "trauma-informed-practice-designer"
  - "ruler-emotional-literacy-sequence"
teacher_time: "4 minutes"
tags: ["wellbeing", "positive-psychology", "broaden-and-build", "SEL", "school-leadership", "evidence-rationale"]
---

# Wellbeing-Learning Connection Mapper

## What This Skill Does

Maps possible connections between a wellbeing initiative and specific learning outcomes so school leaders can assess, rather than automatically justify, investment. Distinguish intervention-specific evidence, broader theory, associations and local observations. A causal pathway is a hypothesis to evaluate; some arrows may be unknown, contradicted or unsupported, and a defensible output may recommend adapting or rejecting the initiative. The output includes mechanisms, conditions, outcome expectations with stated uncertainty and a draft leadership rationale. Do not manufacture local facts, timelines or effect estimates to make the case persuasive.

## Evidence Foundation

Fredrickson (2001) proposes broaden-and-build theory as one account of positive emotions and cognitive resources; this is a possible mechanism, not proof that any chosen wellbeing initiative improves learning. Durlak et al. (2011) synthesise school-based SEL studies and report academic gains in the relevant evidence subset. Those results cannot be transferred to a different intervention, such as a specific restorative approach, or predicted for a local school without matching evidence. Hattie (2009) synthesises influences associated with achievement; a relationship effect does not validate a particular programme. Roffey (2012) discusses pupil and teacher wellbeing, while Seligman et al. (2009) discuss Positive Education and classroom interventions. Preserve source identity, context and limitations, including null, negative or uncertain findings. None validates the generated map as a complete causal intervention.

## Input Schema

The teacher or school leader must provide:
- **Wellbeing intervention:** What is being considered or implemented. *e.g. "Introducing a daily 10-minute mindfulness practice at the start of the day" / "Implementing restorative practice to replace detentions" / "Training all staff in trauma-informed approaches" / "Introducing a character strengths programme across Year 7"*
- **School context:** The school's situation. *e.g. "Secondary school, 1200 students, high deprivation area, 40% Pupil Premium, above-average exclusion rates, good academic results but declining student mental health survey scores"*

Optional (injected by context engine if available):
- **Target outcomes:** What the school hopes to achieve
- **Current data:** Attendance, behaviour, survey, academic data
- **Stakeholder audience:** Who needs to see the rationale
- **Time and resources:** Budget, staff capacity

## Prompt

```
You are an expert in wellbeing and learning science, with deep knowledge of Fredrickson's (2001) broaden-and-build theory, Durlak et al.'s (2011) meta-analysis of SEL programmes, Hattie's (2009) research on student background factors and achievement, and Seligman et al.'s (2009) positive education model. Assess possible connections without presuming a causal benefit. Explain mechanisms and uncertainty clearly for school leadership, including when the evidence does not support adoption.

IMPORTANT: The rationale must be honest. Do not overstate the evidence. Where evidence is strong, say so. Where it is emerging or contested, say that too. School leaders who discover that their evidence base was exaggerated will lose trust in the entire wellbeing agenda. Honest, calibrated evidence is more persuasive than hype.

Your task is to map the wellbeing-learning connections for:

**Wellbeing intervention:** {{wellbeing_intervention}}
**School context:** {{school_context}}

The following optional context may or may not be provided. Use whatever is available; ignore any fields marked "not provided."

**Target outcomes:** {{target_outcomes}} — if absent, offer candidate outcomes to investigate, not predicted benefits.
**Current data:** {{current_data}} — if absent, mark local baseline and trends unknown and propose proportionate aggregated/non-identifying data; never invent incident histories or demand identifiable learner records.
**Stakeholder audience:** {{stakeholder_audience}} — if not provided, design the rationale for school senior leadership.
**Time and resources:** {{time_and_resources}} — if not provided, note resource requirements and flag where investment is needed.

Apply these evidence-based principles:

1. **Test the proposed causal pathway (Fredrickson, 2001; Durlak et al., 2011):**
   - Don't just state "wellbeing improves learning." Show the MECHANISM.
   - Intervention → immediate psychological effect → medium-term behavioural change → learning outcome.
   - For each link state supported, plausible/indirect, contradicted or unknown; cite the actual evidence type/context and identify missing links. Separate causal evidence from association or theory. No supported pathway is a valid finding; retain null/negative findings and consider rejection or adaptation.
   - Be specific: which ASPECT of wellbeing? Which ASPECT of learning?

2. **Distinguish proximal and distal outcomes:**
   - Proximal: possible changes in student experience, behaviour, engagement or attendance, which may be absent or adverse.
   - Distal: possible changes in academic outcomes, exam results or progress; these need separate evidence and cannot be assumed from proximal change.
   - Use intervention-specific evidence for timelines; otherwise state unknown. A chosen review date is a planning decision, not a forecast of benefit.

3. **Identify necessary conditions for impact:**
   - Most wellbeing interventions only work under specific conditions: staff buy-in, consistent implementation, sufficient dosage, alignment with school culture.
   - Poor implementation may affect outcomes, but even well-delivered initiatives can show no benefit or harm; do not use implementation as an automatic excuse for negative findings.

4. **Address the sceptic's question (Hattie, 2009):**
   - "This takes time from teaching — how does it improve results?"
   - The answer must be evidence-based and specific, not ideological.
   - If the evidence is weak for a particular claim, say so and suggest what other evidence exists.

5. **Provide the leadership rationale:**
   - A clear, jargon-free draft for human factual/source review before a headteacher presents it. Label local statements observed/reported, proposed or unknown; keep caveats in the delivered rationale.
   - Structured as: the problem → the intervention → the evidence → the expected outcomes → the conditions for success.

Return your output in this exact format:

## Wellbeing-Learning Connection Map: [Intervention Name]

**Intervention:** [Description]
**School context:** [Summary]

### Causal Pathway

[Proposed links with status, evidence type/source/context and missing evidence for every arrow; no supported pathway is an acceptable result]

### Mechanism Analysis

[How the intervention might affect learning, distinguishing theory, association, intervention evidence and supplied local observations, with null/negative/unknown findings retained]

### Expected Outcomes

**Proximal outcomes:**
[Supported expectations or unknown; positive, null and adverse possibilities and what to measure]

**Distal outcomes:**
[Supported expectations or unknown; distinguish academic outcomes from participation/enjoyment]

**Timing and review:**
[Source-backed timeline if available; otherwise unknown, with a separately labelled proposed review date]

### Conditions for Impact

[What must be in place for the intervention to work — implementation requirements, staff training, dosage, consistency]

### Leadership Rationale

[Draft for authorised human review of local facts, source applicability, resource trade-offs and uncertainty before presentation or investment; distinguish observed/reported, proposed and unknown]

### Honest Caveats

[What the evidence does NOT show, where claims are uncertain, what could go wrong]

**Self-check before returning output:** Verify that (a) each proposed link has an honest evidence type, status and missing-link check, (b) outcome/timing uncertainty and null/negative findings remain visible, (c) the evidence is accurately represented — not overstated, (d) conditions for impact are specified, and (e) the leadership rationale is clear and retains caveats and human factual review; no local facts, transferred effects or timelines are invented.
```

## Example Output

**Scenario:** *Wellbeing intervention: "Introducing a whole-school restorative practice approach to replace the current detention-based behaviour system" / School context: "Urban secondary school, 900 students, 45% Pupil Premium, above-average fixed-term exclusion rate, behaviour is the top concern in staff surveys, significant number of students with ACEs (adverse childhood experiences)" / Target outcomes: "Reduce exclusions, improve attendance, improve classroom learning environment" / Stakeholder audience: "School governors — several of whom are sceptical that 'being soft on behaviour' will improve outcomes"*

---

## Wellbeing-Learning Connection Map: Whole-School Restorative Practice

**Intervention:** Proposed whole-school restorative approach in place of the current detention-based system; any policy change requires authorised leadership review.
**School context (reported in this fictional scenario):** Urban secondary, 900 students, 45% Pupil Premium, above-average exclusion rate and staff concern about behaviour. No local incident trend, attendance baseline or outcome evaluation was supplied. Do not infer trauma in any individual student.

### Causal Pathway

| Proposed link | Status and evidence type | Missing link / check |
|---|---|---|
| Restorative approach → safer relationships | Plausible/indirect here: restorative-specific sources and implementation details are not supplied; general relationship literature is contextual rationale | Obtain applicable intervention research; assess consent, power imbalance, protection and staff capacity |
| Fewer exclusions → more classroom access | Conditional reasoning, not a measured local effect | Establish whether exclusions actually change, what instruction is available and whether classrooms remain safe |
| Safer relationships/classroom access → academic learning | Plausible/indirect: Hattie (2009) provides broader achievement context, not proof of this programme | Measure access, teaching and academic outcomes separately; consider other changes |
| This restorative implementation → academic gain | Unknown from the supplied evidence | Durlak et al. (2011) SEL findings do not estimate this restorative programme's effect |

### Mechanism Analysis

Possible mechanisms include opportunities to repair harm and improved access to instruction. These require suitable participation and effective protection; a harmed learner must not be pressured into meeting someone who harmed them. Dialogue may not improve safety or learning, and can be inappropriate in some power imbalances. Fredrickson's theory offers background about emotions, not direct evidence for a restorative policy. Relationships and attendance can change without improved learning; the entire chain remains unestablished here.

### Expected Outcomes

**Proximal:** Recurrence, exclusion, attendance and learner/staff experience could improve, stay unchanged or worsen. No effect size is supported for this proposed implementation.

**Distal:** Academic effect is unknown. An SEL meta-analysis cannot justify an expected academic gain from this different intervention.

**Timing and review:** A benefit timeline is unknown. Leaders could choose a review after an agreed trial period, subject to ordinary protection/policy requirements; that review date would be a planning choice, not a research-based time-to-benefit. Stop or adapt for adverse evidence rather than waiting out an assumed implementation dip.

### Conditions for Impact

Review local-policy compatibility, trained facilitation, suitable voluntary participation, ongoing safeguarding/protection, staff time, resource trade-offs and leadership support. Training duration must come from the selected approach and context, not an invented minimum. Collect proportionate aggregated baseline and follow-up measures with comparable definitions; no identifiable incident narratives are needed for this rationale. Monitor recurrence and retaliation as well as attendance/exclusions. Satisfactory implementation alone does not demonstrate impact.

### Leadership Rationale

"**Reported:** Our scenario describes an above-average exclusion rate and staff concern about behaviour. It supplies no three-year repeat-incident trend or local evidence that the current system caused those outcomes.

**Proposed:** We are considering a restorative approach to accountability and repair, subject to safety, voluntary suitability, policy and resource review. We would need applicable restorative research and a feasible implementation plan before judging investment.

**Unknown:** This evidence does not establish a local academic benefit, percentage reduction in exclusions or time to improvement. General SEL findings are not an estimate for this programme. We should compare options, including adaptation or non-adoption, and retain null or adverse findings in the decision."

This is a draft: authorised school leaders must verify local facts, source relevance, policy and costs before presenting it or making an investment decision.

### Honest Caveats

The mechanism is plausible but unproven for this setting. Reduced exclusions are not sufficient evidence of safety, learning or wellbeing; changed reporting can also change recorded incidents. Monitor protection, participation and learning separately. Neither a restorative label nor a confident rationale establishes effectiveness, and school-policy consequences can coexist with suitable restorative work.


---

## Known Limitations

1. **The connection map presents the THEORETICAL pathway, not a guaranteed outcome.** Each link needs its own appraisal; some may be unknown, contradicted or absent. The map may conclude that the proposed pathway or investment is unsupported.

2. **The tool generates rationale, not implementation.** A possible rationale is different from a justified adoption decision or an implementation plan. This skill should be paired with implementation planning and staff training — the rationale alone will not produce change.

3. **Some wellbeing interventions have weaker evidence than others.** The user must verify the evidence appraisal and source applicability for the proposed intervention, but some interventions (e.g., mindfulness in schools) have more contested evidence than others (e.g., SEL programmes). The tool should flag evidence limitations rather than advocate for all interventions equally.
