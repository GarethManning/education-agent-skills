---
# AGENT SKILLS STANDARD FIELDS (v2)
name: ruler-emotional-literacy-sequence
description: "Design a RULER emotional literacy sequence for recognising, understanding, labelling, expressing, and regulating emotions. Use when students struggle with emotional regulation, conflict, or anxiety."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "wellbeing-motivation-agency/ruler-emotional-literacy-sequence"
skill_name: "RULER Emotional Literacy Sequence"
domain: "wellbeing-motivation-agency"
version: "1.0"
evidence_strength: "strong"
evidence_sources:
  - "Brackett (2019) — Permission to Feel: the power of emotional intelligence to achieve well-being and success"
  - "Brackett et al. (2012) — RULER: a theory-driven, systemic approach to social and emotional learning"
  - "Rivers et al. (2012) — Improving the social and emotional climate of classrooms: a clustered randomized controlled trial of RULER"
  - "Hagelskamp et al. (2013) — Improving classroom quality with the RULER approach to social and emotional learning"
  - "Mayer & Salovey (1997) — What is emotional intelligence?"
input_schema:
  required:
    - field: "emotional_context"
      type: "string"
      description: "The classroom situation or student behaviour that prompts the need for emotional literacy — e.g. conflict, anxiety before assessments, difficulty collaborating, emotional outbursts"
    - field: "student_level"
      type: "string"
      description: "Age/year group"
  optional:
    - field: "subject_area"
      type: "string"
      description: "The curriculum subject — for integration of RULER into academic content"
    - field: "student_profiles"
      type: "array"
      description: "From context engine: class emotional climate data, specific student needs"
    - field: "time_available"
      type: "string"
      description: "How much time can be allocated — embedded in lesson, tutor time, or dedicated session"
    - field: "ruler_familiarity"
      type: "string"
      description: "Whether students have previous experience with RULER tools — Mood Meter, Meta-Moment, Blueprint"
output_schema:
  type: "object"
  fields:
    - field: "ruler_sequence"
      type: "object"
      description: "A structured sequence using RULER skills — Recognising, Understanding, Labelling, Expressing, Regulating"
    - field: "tool_selection"
      type: "string"
      description: "Which RULER tool(s) are most appropriate — Mood Meter, Meta-Moment, Blueprint, or Charter"
    - field: "integration_plan"
      type: "object"
      description: "How to embed the RULER sequence into academic content or classroom routines"
    - field: "teacher_modelling"
      type: "string"
      description: "How the teacher should model the RULER skills — emotional literacy starts with the teacher"
chains_well_with:
  - "belonging-classroom-culture-designer"
  - "trauma-informed-practice-designer"
  - "restorative-practice-protocol-designer"
  - "perma-based-lesson-designer"
teacher_time: "3 minutes"
tags: ["RULER", "emotional-intelligence", "Brackett", "Yale", "SEL", "emotional-literacy", "mood-meter"]
---

# RULER Emotional Literacy Sequence

## What This Skill Does

Designs an introductory educational adaptation for developing emotional literacy using the RULER framework from the Yale Center for Emotional Intelligence — teaching students to Recognise emotions in themselves and others, Understand the causes and consequences of emotions, Label emotions with a nuanced vocabulary, Express emotions appropriately, and Regulate emotions using effective strategies. The output includes the specific RULER tool(s) to use (Mood Meter, Meta-Moment, Blueprint, or Charter), how to introduce and implement them, how to integrate emotional literacy into academic content rather than treating it as a separate activity, and how the teacher should model the skills themselves — because emotional literacy begins with the teacher, not the student. AI is specifically valuable here because selecting the right RULER tool for a specific classroom situation, adapting the language for the age group, and integrating emotional literacy into subject content requires both emotional intelligence expertise and pedagogical knowledge.

## Evidence Foundation

Brackett (2019) and Brackett et al. (2012) developed RULER at the Yale Center for Emotional Intelligence, based on Mayer & Salovey's (1997) ability model of emotional intelligence. RULER treats emotional intelligence as a set of skills that can be taught, not a personality trait: Recognising (identifying emotions in faces, voices, body language, and one's own body), Understanding (knowing what causes emotions and what consequences they lead to), Labelling (using precise vocabulary — not just "good" or "bad" but specific emotion words like "frustrated," "apprehensive," "exhilarated"), Expressing (knowing when and how to express emotions in different contexts), and Regulating (using strategies to manage emotional experiences — not suppressing emotions but responding to them effectively). Rivers et al. (2012) conducted a cluster randomised controlled trial of RULER in 62 classrooms and found significant improvements in classroom emotional climate, including more emotional support, better classroom organisation, and greater instructional support. Hagelskamp et al. (2013) found that RULER improved classroom quality on all three dimensions of the CLASS observation system. Critically, RULER begins with teachers — the "Anchors of Emotional Intelligence" (Mood Meter, Meta-Moment, Blueprint, Charter) are first practised by staff before being introduced to students. Adult modelling is a central implementation practice; the programme evidence does not establish the effectiveness of each generated short sequence.

## Input Schema

The teacher must provide:
- **Emotional context:** The situation prompting this. *e.g. "Students are highly anxious before mock exams — several are crying, refusing to enter the exam hall, or shutting down completely" / "There's persistent low-level conflict between two friendship groups that's disrupting collaborative work" / "A student has frequent emotional outbursts (shouting, leaving the room) that they can't seem to control"*
- **Student level:** Year group. *e.g. "Year 8"*

Optional (injected by context engine if available):
- **Subject area:** The curriculum subject
- **Student profiles:** Emotional climate data, specific needs
- **Time available:** How much time can be allocated
- **RULER familiarity:** Whether students have used RULER tools before

## Prompt

```
You are an expert in emotional intelligence and social-emotional learning, with deep knowledge of Brackett's (2019) RULER framework, Mayer & Salovey's (1997) ability model of emotional intelligence, and the evidence from Rivers et al. (2012) and Hagelskamp et al. (2013) on RULER's impact on classroom climate and learning. You understand that emotional literacy is a set of teachable skills — not a personality trait — and that it begins with the teacher modelling the skills, not just teaching them.

The RULER framework uses four "Anchors of Emotional Intelligence":

1. **The Charter:** A collaboratively created set of agreements about how class members want to feel and what they'll do to support those feelings. Created at the start of the year.
2. **The Mood Meter:** A tool for recognising and labelling emotions using two dimensions — pleasantness (horizontal axis: unpleasant to pleasant) and energy (vertical axis: low to high). The four quadrants are: Red (high energy, unpleasant — angry, anxious, frustrated), Yellow (high energy, pleasant — excited, happy, energised), Green (low energy, pleasant — calm, content, peaceful), Blue (low energy, unpleasant — sad, tired, lonely).
3. **The Meta-Moment:** A pause between a trigger and a response — "How do I feel? How would my best self respond? What strategy can I use?" Used when emotions are intense and the automatic response would be unhelpful.
4. **The Blueprint:** A tool for understanding and resolving conflict — "Before, during, after: what happened, how did each person feel, what were the consequences, how can we move forward?" Used for interpersonal situations.

Your task is to design a RULER sequence for:

**Emotional context:** {{emotional_context}}
**Student level:** {{student_level}}

The following optional context may or may not be provided. Use whatever is available; ignore any fields marked "not provided."

**Subject area:** {{subject_area}} — if not provided, design as a standalone sequence that can be integrated into any lesson or tutor time.
**Student profiles:** {{student_profiles}} — use only relevant non-identifying access needs; if absent, provide low-disclosure and accessible options without inventing emotional profiles.
**Time available:** {{time_available}} — if not provided, offer a 15–20-minute introduction, clearly distinguished from full programme implementation.
**RULER familiarity:** {{ruler_familiarity}} — if not provided, assume students are new to RULER and introduce the tools from scratch.

This short sequence is an adaptation, not an evaluated full RULER implementation or therapy. Check the teacher's preparation/training and authorisation to use chosen programme materials; do not invent licensing terms. Use private self-reflection or fictional/character examples by default, with an option to pass or use a non-personal task. No emotion or cause needs public display. Do not infer an internal state from appearance, behaviour or a Mood Meter colour; invite the learner's own words without insisting. Retain access supports, offer non-breathing strategies and never guarantee calming. Persistent or severe distress needs appropriate human support; urgent safety concerns follow existing school safeguarding/emergency procedures.

Apply these principles:

1. **Select the right RULER tool for the situation:**
   - Mood Meter: for building emotional awareness and vocabulary (general emotional literacy).
   - Meta-Moment: for managing intense emotional responses (individual regulation).
   - Blueprint: for resolving interpersonal conflict (relationship repair).
   - Charter: for establishing classroom emotional norms (prevention, culture-building).

2. **Teacher models first (Brackett, 2019):**
   - The teacher MUST model the tool before asking students to use it.
   - "I'm going to show you where I am on the Mood Meter right now. I'm in the Yellow — I'm energised and interested because I'm curious about what you'll think of today's topic."
   - Modelling vulnerability (not every emotion is pleasant) is more powerful than modelling only positive emotions.

3. **Build emotional vocabulary (Mayer & Salovey, 1997):**
   - Move students beyond "fine," "good," "bad," "annoyed" to precise vocabulary: apprehensive, exhilarated, melancholy, content, frustrated, curious, overwhelmed, serene.
   - The Mood Meter helps: each quadrant contains 20+ emotion words at increasing levels of granularity.
   - Precision matters: "I'm frustrated" leads to a different response than "I'm anxious." Both might be called "bad" without vocabulary.

4. **Integrate into academic content where possible:**
   - Analyse characters' emotions using the Mood Meter in English.
   - Discuss the emotions of historical figures using the Blueprint in History.
   - Examine the emotional dimension of scientific discovery or ethical dilemmas.
   - Integration is more sustainable than standalone sessions.

5. **Regulation is NOT suppression:**
   - RULER teaches students to RESPOND to emotions, not to suppress them.
   - "Don't be angry" is not emotional regulation. "I notice I'm angry — what's causing it, and what would be a helpful response?" IS regulation.
   - All emotions are valid; not all behaviours are appropriate. RULER helps students separate the emotion (always OK) from the behaviour (which they can choose).

Return your output in this exact format:

## RULER Sequence: [Context Description]

**Emotional context:** [The situation]
**For:** [Student level]
**RULER tool(s):** [Which anchor(s) to use]

### Teacher Modelling

[How the teacher should model the RULER skill first — specific language and example]

### Sequence Steps

For each step:
**Step [N]: [RULER Skill — Recognise/Understand/Label/Express/Regulate]**
- **Activity:** [What students do]
- **Teacher script:** [Specific language to use]
- **What to look for:** [Signs the step is working]

### Academic Integration

[How to embed this sequence into subject content — specific examples]

### Sustaining the Practice

[How to maintain emotional literacy beyond this sequence — routines, language, ongoing use of tools]

**Self-check before returning output:** Verify that (a) the right RULER tool is selected for the situation, (b) the teacher models the skill before students practise it, (c) emotional vocabulary is expanded beyond basic terms, (d) regulation is taught as response management, not emotion suppression, and (e) the sequence is practical and time-efficient, and (f) privacy/pass/fictional options, accessible strategy choices and the human-support boundary are present in each activity.
```

## Example Output

**Scenario:** *Emotional context: "Year 9 students are highly anxious before their first set of mock GCSE exams. Several students have been tearful in lessons, two have asked to see the school counsellor, and the general mood in the class is flat and tense. Students are saying things like 'I'm going to fail,' 'What's the point of revising — I can't do it,' and 'I feel sick every time I think about exams.'" / Student level: "Year 9" / Time available: "20 minutes in tutor time, plus embedding into subject lessons" / RULER familiarity: "Students have seen the Mood Meter on the wall but haven't used it systematically"*

---

## RULER Sequence: Pre-Exam Anxiety

**Emotional context:** Year 9 exam anxiety — tearfulness, avoidance, self-defeating statements, physical symptoms
**For:** Year 9
**RULER tool(s):** Mood Meter (for recognising and labelling) + Meta-Moment (for regulating)

### Teacher Modelling

Before introducing the tools to students, the teacher models their own emotional experience. Use a bounded, authentic example or clearly labelled fictional model; teachers need not disclose personal distress.

"I want to share something with you. When I look at the Mood Meter, right now I'm somewhere around here [points to the upper-left quadrant — Red zone, but moderate]. I'd say I'm 'apprehensive.' I've got a lot to do this week, and I notice that when I think about all of it at once, my chest feels tight and I start thinking 'I'll never get it all done.' Sound familiar? That feeling is completely normal — it's my brain telling me this matters. But here's what I've learned: when I stay in that zone and don't do anything about it, I actually get LESS done, not more. So I'm going to share a strategy with you that I use, and then we're going to try it together."

### Sequence Steps

**Step 1: Recognise — Notice Without Disclosure (5 minutes)**
- **Activity:** Model the Mood Meter, then offer a private personal mark on a page kept by the learner, a fictional character example, or a pass/non-personal vocabulary task. Do not collect or publicly place individual emotional states, even without names.
- **Teacher script:** "You can keep this private, use our fictional student, or pass. There is no expected quadrant or emotion. I won't infer how you feel from how you look."
- **What to look for:** Understanding of energy/pleasantness in the selected example. Quietness, colour choice or participation does not diagnose anxiety or show therapeutic benefit.

**Step 2: Label — Find a Useful Word (5 minutes)**
- **Activity:** Offer nuanced vocabulary such as apprehensive, anxious, frustrated or overwhelmed. Learners can choose their own word, language or accessible communication mode; definitions are language supports, not clinical categories.
- **Teacher script:** "Which word fits your example? You can choose another word or say you're unsure. You need not tell the class."
- **What to look for:** More precise description where helpful; don't correct a learner's reported emotion to fit the teacher's interpretation.

**Step 3: Understand — Explore Possible Causes (5 minutes)**
- **Activity:** Use a fictional exam scenario: "This student says they feel overwhelmed; what might contribute, and what would we need to ask?" Personal reflection remains private and optional; no compulsory partner explanation.
- **Teacher script:** "We can't tell the cause from someone's face. Different causes may need different support, including changes to the task or environment."
- **What to look for:** Tentative explanations, not diagnoses. Articulation is a vocabulary activity, not a promised treatment.

**Step 4: Regulate — The Meta-Moment (5 minutes)**
- **Activity:** Model a pause: notice the feeling, consider the response you want, choose a feasible strategy. Offer a menu:
  - **Optional comfortable breathing:** Only if the learner chooses it; no required count or breath-holding. Stop if uncomfortable.
  - **Chunking:** Choose one manageable revision step with suitable support and timing.
  - **Reframing:** "An exam result gives information about this work; it doesn't define my worth."
  - **Connection or grounding:** Ask a trusted adult for support or attend to a familiar object/environment, if helpful and accessible.
- **Teacher script:** "You may feel anxious, calm, uncertain or something else. Try a strategy that suits you, or pass; none is guaranteed to help. If distress persists, we will seek appropriate support."
- **What to look for:** A learner-chosen response plan and optional feedback on usefulness; do not infer regulation from quiet compliance.

### Academic Integration

- **English:** When studying characters under pressure (Macbeth before the murder, Romeo after the banishment), place the character on the Mood Meter. "Where is Macbeth right now? What's causing it? What would the Meta-Moment look like for him?" This builds analytical skills AND emotional vocabulary simultaneously.

- **Science:** Before a practical assessment: "If useful, check in privately or use a fictional example. Choose a familiar strategy or ask for support before starting; you do not need to share how you feel." Follow practical-safety instructions regardless of emotional state.

- **History:** When studying people making difficult decisions under pressure (Churchill during the Blitz, suffragettes facing imprisonment): "Use the Blueprint. What were they feeling? What caused those feelings? How did their emotions influence their decisions?"

### Sustaining the Practice

1. **Make the Mood Meter visible and used.** Keep it on the wall. Check in at the start of lessons (30 seconds: "Where are you on the Mood Meter? No need to share — just notice"). Notice whether learners find the vocabulary useful over time; spontaneous use is not guaranteed.

2. **Model the Meta-Moment when YOU feel frustrated.** "I'm going to take a Meta-Moment. I'm frustrated because the technology isn't working. My automatic response is to get annoyed — but that won't fix the projector. My best self says: breathe, try one more thing, then move on. OK — let me try this."

3. **Normalise the vocabulary.** Use emotion words in everyday conversation: "Would you like support, or would you prefer to continue?" / "Our fictional character says they feel energised — what might that word mean here?" The more the teacher uses precise emotional language, the more students will adopt it.

4. **Return to the Meta-Moment before every high-stakes event.** Before exams, before presentations, before parents' evening: "Let's do a Meta-Moment check. Where are you? What does your best self need right now?"

---

## Known Limitations

1. **RULER is a whole-school programme, not a single-lesson intervention.** The sequence above introduces RULER tools, but their full impact requires consistent use across multiple classrooms, integration into school culture, and staff training. Benefits from this generated introduction are unestablished; do not transfer results from trained programme implementations to this script.

2. **Emotional literacy does not replace clinical support.** Students with anxiety disorders, depression, or trauma responses need professional support — a school counsellor, CAMHS referral, or therapeutic intervention. RULER builds emotional skills for the general population; it is not a substitute for clinical services for students who need them. If a student's distress is persistent or severe, RULER should be supplemented with appropriate referral.

3. **The teacher must genuinely model.** RULER requires teachers to be emotionally literate themselves — to model bounded examples, demonstrate the Meta-Moment and use precise vocabulary without requiring personal disclosure. Teachers who are uncomfortable with emotional disclosure will find RULER difficult to implement authentically. Professional development and a supportive school culture are prerequisites for effective implementation.
