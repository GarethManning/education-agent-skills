---
# AGENT SKILLS STANDARD FIELDS (v2)
name: trauma-informed-practice-designer
description: "Design trauma-informed classroom practices that prioritise safety, predictability, connection, and regulation. Use when student behaviour may be trauma-related or the class needs a sensitive approach."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "wellbeing-motivation-agency/trauma-informed-practice-designer"
skill_name: "Trauma-Informed Practice Designer"
domain: "wellbeing-motivation-agency"
version: "1.0"
evidence_strength: "moderate"
evidence_sources:
  - "van der Kolk (2014) — The Body Keeps the Score: brain, mind, and body in the healing of trauma"
  - "Perry (2006) — The Boy Who Was Raised as a Dog: neurosequential model of therapeutics"
  - "Felitti et al. (1998) — Relationship of childhood abuse and household dysfunction to many of the leading causes of death in adults (ACE Study)"
  - "Bergin & Bergin (2009) — Attachment in the classroom"
  - "Craig (2016) — Trauma-Sensitive Schools: learning communities transforming children's lives"
input_schema:
  required:
    - field: "classroom_situation"
      type: "string"
      description: "The situation or behaviour that may be trauma-related — what the teacher is observing"
    - field: "student_level"
      type: "string"
      description: "Age/year group"
  optional:
    - field: "subject_area"
      type: "string"
      description: "The curriculum subject"
    - field: "known_context"
      type: "string"
      description: "What the teacher knows about the student's background — only include what is relevant and shared appropriately"
    - field: "current_responses"
      type: "string"
      description: "How the school currently responds to the behaviour"
    - field: "available_support"
      type: "string"
      description: "Pastoral systems, counsellor, SENCO, external agencies available"
    - field: "class_context"
      type: "string"
      description: "Other students in the class — how the behaviour affects the learning environment"
output_schema:
  type: "object"
  fields:
    - field: "trauma_lens_analysis"
      type: "object"
      description: "Reframing the behaviour through a trauma-informed lens — what the behaviour might be communicating"
    - field: "classroom_adaptations"
      type: "array"
      description: "Specific modifications to classroom practice that create safety without lowering expectations"
    - field: "response_protocols"
      type: "object"
      description: "What to do when trauma-related behaviour occurs — de-escalation, co-regulation, repair"
    - field: "boundaries"
      type: "string"
      description: "Clear statement of what trauma-informed practice IS and IS NOT — maintaining boundaries while being compassionate"
chains_well_with:
  - "belonging-classroom-culture-designer"
  - "restorative-practice-protocol-designer"
  - "ruler-emotional-literacy-sequence"
  - "differentiation-adapter"
teacher_time: "4 minutes"
tags: ["trauma-informed", "ACEs", "safety", "regulation", "attachment", "behaviour"]
---

# Trauma-Informed Practice Designer

## What This Skill Does

Designs classroom practices that prioritise safety, predictability, connection and compassionate boundaries while maintaining learning goals and the whole class's safety. A trauma lens can suggest supportive responses; observable behaviour alone cannot establish trauma, intention or cause. Pain, unmet access needs, task difficulty, peer conflict and other explanations may also matter. The output gives a tentative reframing, concrete adaptations and response drafts for review by authorised school staff. It does not diagnose, treat trauma or provide a clinical crisis protocol.

## Evidence Foundation

Felitti et al. (1998) linked childhood adversity with later health outcomes in an adult population; that association does not identify an individual student's history or explain a classroom incident. Van der Kolk (2014) and Perry (2006) offer clinical accounts of trauma and regulation, rather than evidence that every distressed student has trauma or is unable to learn. Bergin & Bergin (2009) discuss attachment in classrooms; Craig (2016) translates safety, predictability, connection and choice into school practice. These sources inform a supportive educational lens, not a validated causal assessment or a universal response sequence. Avoid fixed brain-state or recovery-time claims.

## Input Schema

The teacher must provide:
- **Classroom situation:** What is being observed. *e.g. "A Year 8 student has sudden, intense outbursts — shouting, throwing equipment, running out of the room — triggered by seemingly minor events (being asked to move seats, being told their work is wrong)" / "A Year 10 student is completely withdrawn — never speaks, never makes eye contact, produces minimal work, flinches when adults approach" / "A Year 7 student is constantly seeking adult attention — following the teacher around, asking unnecessary questions, becoming distressed when the teacher attends to other students"*
- **Student level:** Year group. *e.g. "Year 8"*

Optional (injected by context engine if available):
- **Subject area:** The curriculum subject
- **Known context:** What the teacher knows about the student's background
- **Current responses:** How the school currently responds
- **Available support:** Pastoral systems, counsellor, external agencies
- **Class context:** Impact on other students

## Prompt

```
You are an expert in trauma-informed education, with deep knowledge of van der Kolk's (2014) neuroscience of trauma, Perry's (2006) neurosequential model, Felitti et al.'s (1998) ACE study, Bergin & Bergin's (2009) attachment in the classroom, and Craig's (2016) trauma-sensitive schools framework. Use trauma as one possible lens, never a diagnosis from behaviour. Describe what is observed, consider alternative explanations and retain both supportive responses and appropriate school boundaries.

CRITICAL: Trauma-informed practice is NOT:
- An excuse for any behaviour ("They've had a hard life, so we should let them do whatever they want")
- Removing all boundaries or expectations
- Diagnosing students or playing therapist
- Asking students about their trauma or making assumptions about their experiences
- Lowering academic expectations

Trauma-informed practice IS:
- Asking what support is needed now, without asking what happened in the student's trauma history
- Creating safety, predictability and connection, checking what helps the actual learners
- Offering calm adult support and appropriate adjustments while maintaining safety and school-policy boundaries
- Maintaining clear, consistent, compassionate boundaries
- Referring to specialists when a student needs therapeutic support beyond what a teacher can provide

Your task is to design trauma-informed practices for:

**Classroom situation:** {{classroom_situation}}
**Student level:** {{student_level}}

The following optional context may or may not be provided. Use whatever is available; ignore any fields marked "not provided."

**Subject area:** {{subject_area}} — if not provided, design for general classroom application.
**Known context:** {{known_context}} — if not provided, design based on the observable behaviour without assumptions about cause.
**Current responses:** {{current_responses}} — if not provided, analyse the behaviour through a trauma-informed lens from first principles.
**Available support:** {{available_support}} — if not provided, note what support should be in place and recommend the teacher investigate what's available.
**Class context:** {{class_context}} — if not provided, address the impact on other students in general terms.

Before routine adaptations: if the description includes immediate danger, unsafe leaving, injury risk, or a disclosure concerning abuse, self-harm or suicide, direct the teacher to the existing individual/emergency plan and local safeguarding procedures and authorised help. Do not wait for a frequency threshold or a routine counsellor appointment. Do not invent evacuation, pursuit, restraint or clinical instructions. Missing local procedures require authorised staff input; ordinary calm, dignified educational support can continue where safe. Any consequential response draft needs human review against local policy and, where relevant, specialist advice before use.

Apply these principles:

1. **Safety first (Perry, 2006):**
   - Distress can make participation and learning harder; support safety and access without assuming a brain state or stopping all learning.
   - Safety means: predictability (knowing what's going to happen), consistency (same rules applied the same way), physical safety (no threat of harm), and emotional safety (no threat of humiliation).
   - Modifications that increase safety: consistent routines, advance notice of changes, calm tone of voice, respecting personal space.

2. **Reframe behaviour as communication (van der Kolk, 2014):**
   - "What is this behaviour communicating?" replaces "Why is this student being difficult?"
   - Shouting, leaving, silence or excessive agreement can have many explanations. Do not label them fight/flight/freeze/fawn diagnoses.
   - Separate observation, tentative hypothesis and what would help check it. Ask about current needs and preferences, not trauma history.


3. **Co-regulation before self-regulation (Perry, 2006; van der Kolk, 2014):**
   - Some students benefit from calm adult support; others prefer space within an agreed, supervised plan. Follow student preferences and existing support arrangements where safe.
   - Co-regulation can include a calm voice, respectful personal space and temporarily simplifying nonessential task demands. It is not a rule to remove safety instructions or every expectation.
   - Delay lengthy discussion until the student can participate; necessary safety action follows the existing plan immediately. Resume learning with appropriate support and review later consequences under school policy.

4. **Maintain boundaries with compassion (Craig, 2016):**
   - Boundaries provide safety — a classroom without boundaries feels chaotic and unpredictable, which is MORE threatening for traumatised students, not less.
   - Boundaries should be consistent, clear, and enforced with warmth: "I'm here to help. Let's use the agreed plan so everyone is safe."
   - Use repair where suitable and voluntary, alongside any school-policy response; do not compel a harmed student to meet someone who harmed them.

5. **Consider the whole class:**
   - Other students are affected by trauma-related behaviour. They need to feel safe too.
   - Trauma-informed practice for one student should not come at the cost of the learning environment for everyone.
   - Communicate with the class (without disclosing the student's situation): "Sometimes people have difficult days. In this classroom, we support each other."

Return your output in this exact format:

## Trauma-Informed Practice: [Situation Description]

**Situation:** [Summary]
**For:** [Student level]

### Trauma-Lens Reframing

**Observable behaviour:** [What the teacher sees]
**Through a behavioural lens:** [How this behaviour is typically interpreted — defiance, attention-seeking, laziness]
**Through a trauma lens:** [Tentative support hypothesis, alternative explanations and what is unknown — not a diagnosis]

### Classroom Adaptations

For each adaptation (4–6):
**Adaptation [N]: [Name]**
- **What to do:** [Specific action]
- **Why it helps:** [Which trauma-informed principle it addresses]
- **What it looks like in practice:** [Concrete example]

### Response Protocol

**When the behaviour occurs:**
[Human-review draft: immediate safety/local-plan boundary first; then context-appropriate calm support, reconnection and later repair. No universal exit, wait or no-demand rule.]

**What NOT to do:**
[Responses that will escalate rather than resolve]

### Boundaries

**What trauma-informed practice IS in this situation:**
[Clear statement]

**What it IS NOT:**
[Clear statement — maintaining expectations while being compassionate]

### Referral Indicators

[Distinguish urgent local safeguarding/emergency action from routine pastoral/specialist support; do not require escalation in frequency before seeking help.]

**Self-check before returning output:** Verify that (a) observations and hypotheses are separated without diagnosis, (b) existing safety/safeguarding plans take precedence over routine support, (c) boundaries are maintained — expectations are not removed, (d) the whole class is considered, (e) the teacher is not being asked to be a therapist, and (f) referral indicators are included.
```

## Example Output

**Scenario:** *Classroom situation: "A Year 8 student has sudden, intense outbursts — shouting, throwing equipment, running out of the room — triggered by seemingly minor events (being asked to move seats, being told their work needs correcting, another student brushing past them). These happen 2–3 times a week. After the outburst, the student is usually tearful and apologetic. The current response is a detention each time, but the outbursts are getting more frequent, not less." / Student level: "Year 8" / Current responses: "Detention after each outburst. The student has had 12 detentions this half-term. Parents have been called in twice." / Available support: "SENCO, school counsellor (limited availability — 1 day per week), head of year"*

---

## Trauma-Informed Practice: Sudden Outbursts and Dysregulation

**Situation:** Year 8 student with frequent intense outbursts triggered by minor events
**For:** Year 8

### Trauma-Lens Reframing

**Observable behaviour:** Shouting, throwing equipment, running out of the room. Triggered by seemingly minor events: being asked to move seats, correction of work, physical contact from another student. Tearful and apologetic afterwards. 12 detentions this half-term — frequency increasing.

**Through a behavioural lens:** "This student is disruptive, defiant, and volatile. They can't control their temper. The detentions aren't working, so we may need stronger sanctions — isolation, exclusion."

**Through a trauma lens:** Changes of seat, feedback and unexpected contact may be difficult for this student. Trauma is one possible explanation; tears and apologies do not confirm an involuntary trauma response. Check current access, sensory, task and peer needs with the student and appropriate staff without seeking a trauma history. Increasing incidents alongside detentions do not establish that detentions caused them. Because equipment is being thrown and the student leaves the room, authorised staff must review safety and existing support plans now.

### Classroom Adaptations

**Adaptation 1: Predictable Routines and Advance Warning**
- **What to do:** Keep classroom routines as consistent as possible. Same seating, same lesson structure, same expectations. When a change is necessary (supply teacher, room change, seating adjustment), give this student advance warning: "Tomorrow, we'll be in a different room — I wanted to let you know so it's not a surprise." Offer notice as early as feasible and check whether the student finds it useful.
- **Why it helps:** Predictable information may reduce uncertainty (Perry, 2006; Craig, 2016). Check the student's response rather than asserting a neural mechanism.
- **What it looks like in practice:** At the start of Monday's lesson: "This week is a normal week — same room, same routine. One change: on Thursday we'll have a guest speaker for 15 minutes. I'll remind you on Wednesday."

**Adaptation 2: Agreed Regulation Space**
- **What to do:** Review any existing individual plan with the student and authorised staff. If a regulation space is appropriate, agree its location, supervision, access and return arrangements under local policy. Do not create automatic permission to leave into a corridor.
- **Why it helps:** A predictable option may support regulation; its suitability depends on the student and environment and is not guaranteed to prevent an outburst.
- **What it looks like in practice:** An agreed classroom space or another option specified in the existing plan, with a known adult check-in. Unsafe leaving follows the local safety procedure.

**Adaptation 3: Reframe Correction as Growth**
- **What to do:** When giving feedback on the student's work, lead with what IS working before addressing what needs improving. Use collaborative language: "This part works well — let's look at how we can build on it" rather than "This is wrong." Avoid red pen corrections on the page — use a brief verbal conversation or post-it note instead.
- **Why it helps:** Private, specific feedback may be easier to use than a public correction. Do not assume attachment fears or prohibit accurate correction; ask which feedback format helps this student (Hattie & Timperley, 2007).
- **What it looks like in practice:** Rather than writing "incorrect" on the student's work, approach quietly: "I can see you've understood [specific strength]. There's one part I want us to look at together — can I show you?"

**Adaptation 4: Physical Space Awareness**
- **What to do:** Approach visibly and respectfully, avoiding unnecessary looming or touch; agree personal-space preferences where feasible and follow safety procedures when needed. When other students need to move past, seat this student at the end of a row or near a wall where accidental contact is less likely.
- **Why it helps:** Unexpected contact may be uncomfortable for several reasons. Reduce avoidable contact without attributing a trauma history or nervous-system state (van der Kolk, 2014).
- **What it looks like in practice:** When approaching the student's desk, approach from the front. Announce your presence: "I'm coming over to have a look at your work." Seat the student near the wall with a clear movement route consistent with the agreed access and supervision plan.

**Adaptation 5: Reduce Public Attention During and After Incidents**
- **What to do:** When an outburst occurs, follow the existing safety plan first and minimise unnecessary public attention. Do not raise your voice. Do not stand over the student. Do not involve other students as witnesses. Reduce the audience as much as possible: direct other students to continue working, approach the student calmly and quietly, offer the safe space. After the incident, have a private, restorative conversation (not a public telling-off).
- **Why it helps:** Public attention can add embarrassment or distress; avoid unnecessary exposure without withholding safety action. Privacy preserves the student's dignity and prevents the humiliation that makes future regulation harder.
- **What it looks like in practice:** If safe under the existing plan, calmly redirect the class and offer the agreed support: "I'm here to help; let's use the plan." If safety is uncertain, involve authorised staff under local procedures rather than assuming the class can continue working.

### Response Protocol

**When the behaviour occurs:**

1. **Follow the existing safety plan first.** Throwing equipment or unsafe leaving calls for the school's individual/emergency procedures and authorised help. This draft does not prescribe a crisis response.
2. **Use calm, brief, respectful communication.** Offer agreed support and simplify nonessential work demands where appropriate; keep necessary safety instructions.
3. **Use an agreed regulation option only if appropriate and safe.** Do not prescribe corridor exit, pursuit, physical blocking or a fixed waiting period. Those decisions belong to local plans and authorised staff.
4. **Monitor and reconnect.** Follow supervision arrangements and check readiness to rejoin learning without a fixed brain-recovery timer.
5. **Review and repair later.** Privately discuss current needs, effects on others and a supported return to learning when the student can participate. Use restorative options only where suitable and voluntary.

**What NOT to do:**
- Do not humiliate, threaten, diagnose or seek a trauma narrative.
- Do not substitute blanket "wait," "let them leave" or "remove all demands" advice for the existing safety plan.
- Do not discuss sensitive personal information with the class.

This response draft requires review by authorised school staff against local policy and any individual plan, with specialist input where needed, before use.

### Boundaries

**What trauma-informed practice IS in this situation:**
- Taking distress and access needs seriously without assigning the cause of the outbursts
- Creating conditions that reduce the frequency and intensity of triggers
- Offering calm support, appropriate task adjustments and agreed regulation options while protecting everyone's safety
- Having a restorative conversation after the student is regulated
- Maintaining the expectation that the student will learn, participate, and progress — with adapted support

**What it IS NOT:**
- Allowing the student to behave however they like without any response
- Removing academic expectations ("Don't worry about the work")
- Ignoring the impact on other students
- The teacher acting as a therapist or asking about the student's trauma
- An assumption that support must be temporary — retain required access support and review changes with the student and appropriate staff

### Referral Indicators

**Urgent concerns:** Danger, unsafe leaving, or disclosures concerning abuse, self-harm or suicide require the existing individual/emergency plan, local safeguarding procedures and authorised help. Do not wait for a routine appointment or a specified number of incidents.

**Ongoing support:** In this fictional case, throwing equipment, leaving and increasing incidents already justify review with the SENCO/head of year and relevant qualified support. Seek help for persistent distress, reduced access to learning or when the teacher is out of depth. Classroom adaptations may continue where safe; they neither diagnose nor treat an underlying condition.


---

## Known Limitations

1. **This skill provides classroom-level guidance, not therapeutic intervention.** Trauma-informed practice in the classroom creates the CONDITIONS for a traumatised student to feel safe enough to learn — but it does not treat the trauma. Students with significant trauma histories need professional therapeutic support alongside trauma-informed classroom practice.

2. **The teacher does not need to know what happened.** Trauma-informed practice does not require the teacher to know the student's history. In fact, teachers should NOT seek details of traumatic experiences — this is not their role, and hearing details can cause secondary trauma. The teacher's role is to create a safe, predictable, connected environment and to respond to observable behaviour with understanding rather than punishment.

3. **Supportive practice can help many students.** Predictable routines, warm relationships, consistent boundaries, advance warning of changes, respectful feedback — these are good practices for every student, not just traumatised ones. The adaptations above should not feel like a special programme for one student; they should feel like how the classroom works for everyone.

4. **There is a tension between one student's needs and the whole class.** A student running out of the room, shouting, or throwing equipment affects every other student's learning and sense of safety. Trauma-informed practice does not mean the class should suffer indefinitely. If the adaptations are insufficient and the behaviour remains disruptive, the school must review appropriate additional support with authorised staff and the student so that both the student's needs AND the class's needs are met.
