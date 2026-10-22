---
# AGENT SKILLS STANDARD FIELDS (v2)
name: pedagogical-content-knowledge-developer
description: "Develop pedagogical content knowledge for a topic by surfacing common misconceptions and effective representations. Use when preparing to teach unfamiliar content or improving teaching of hard topics."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "professional-learning/pedagogical-content-knowledge-developer"
skill_name: "Pedagogical Content Knowledge Developer"
domain: "professional-learning"
version: "1.0"
evidence_strength: "strong"
evidence_sources:
  - "Shulman (1986) — Those who understand: Knowledge growth in teaching — original PCK framework"
  - "Shulman (1987) — Knowledge and teaching: Foundations of the new reform"
  - "Ball, Thames & Phelps (2008) — Content knowledge for teaching: What makes it special?"
  - "Magnusson, Krajcik & Borko (1999) — Nature, sources and development of PCK for science teaching"
  - "Cochran, DeRuiter & King (1993) — Pedagogical content knowing: An integrative model"
  - "Hattie (2009) — Visible Learning: teacher content knowledge and PCK as distinct predictors"
  - "Depaepe, Verschaffel & Kelchtermans (2013) — Pedagogical content knowledge: A systematic review"
  - "Bernstein (1999) — Vertical and horizontal discourse: knowledge structures and recontextualisation"
  - "Willingham (2009) — Why Don't Students Like School: content knowledge as prerequisite for teaching"
  - "Timperley et al. (2007) — Teacher Professional Learning and Development: content-specific PD effectiveness"
input_schema:
  required:
    - field: "teaching_context"
      type: "string"
      description: "What the teacher is about to teach: subject, topic, unit, or programme"
    - field: "learner_stage"
      type: "string"
      description: "Age range or year group"
    - field: "teacher_background"
      type: "string"
      description: "Brief description of the teacher's subject training and experience with this topic"
  optional:
    - field: "known_student_misconceptions"
      type: "string"
      description: "Any misconceptions the teacher is already aware of"
    - field: "curriculum_framework"
      type: "string"
      description: "The school's curriculum or competency framework in use"
    - field: "knowledge_architecture_output"
      type: "string"
      description: "From curriculum-knowledge-architecture-designer if already run"
output_schema:
  type: "object"
  fields:
    - field: "pck_diagnosis"
      type: "object"
      description: "Assessment of the teacher's likely PCK strengths and gaps for this specific topic, based on their background; identifies which of the three knowledge types (hierarchical, horizontal, dispositional) their PCK is weakest in"
    - field: "content_knowledge_foundations"
      type: "object"
      description: "The hierarchical knowledge the teacher must have secure before teaching: key concepts, prerequisite chains, and the most commonly misunderstood content at this level"
    - field: "common_student_misconceptions"
      type: "object"
      description: "The most well-documented misconceptions students hold about this topic at this learner stage, with explanation of why each misconception forms and what it takes to shift it"
    - field: "pedagogical_representations"
      type: "object"
      description: "The most effective representations, analogies, models, and examples for teaching this content: what works, what misleads, and why; organised by knowledge type"
    - field: "disciplinary_thinking_standards"
      type: "object"
      description: "What expert thinking looks like in this domain and how to make it visible to students; the horizontal knowledge dimension of PCK"
    - field: "developmental_action_plan"
      type: "object"
      description: "A sequenced plan for the teacher to develop their PCK: what to read or learn first, what to observe, what to practise, and how to know when their PCK is sufficient"
chains_well_with:
  - "curriculum-knowledge-architecture-designer"
  - "critical-thinking-task-designer"
  - "lesson-observation-protocol-designer"
  - "reflective-practice-prompt-generator"
  - "technological-pedagogical-content-knowledge-developer"
teacher_time: "10 minutes"
tags: ["PCK", "pedagogical-content-knowledge", "teacher-development", "content-knowledge", "misconceptions", "Shulman", "professional-learning", "knowledge-contingent"]
---

# Pedagogical Content Knowledge Developer

## What This Skill Does

Takes a description of what a teacher is about to teach and their background, diagnoses their likely pedagogical content knowledge gaps for that specific topic, and produces a development plan to close those gaps before teaching begins. Shulman's (1986) foundational insight is that knowing a subject and knowing how to teach it are genuinely different capabilities — a mathematician who has never taught fractions to nine-year-olds does not automatically know which representations work, which misconceptions will form, or what conceptual threshold students need to cross before the next idea makes sense. This skill makes those gaps visible and actionable. It covers all three knowledge dimensions: the hierarchical content knowledge the teacher must have secure, the horizontal thinking frameworks that define expert reasoning in the domain, and the dispositional orientation toward noticing and responding to student understanding in real time. The output is both a diagnosis and a development plan — not just identifying what is missing but sequencing what the teacher should do about it. This is particularly valuable when teachers are working outside their primary subject expertise, teaching ambitious new programmes (regenerative project-based learning, interdisciplinary units, wellbeing science), or moving to a new age group where their existing PCK needs recalibration. AI is specifically valuable here because mapping PCK gaps requires simultaneously knowing the content domain, the research on student misconceptions, the evidence on pedagogical representations, and the developmental appropriateness of different approaches — a combination that takes years to develop through experience and that most pre-service training delivers only partially.

## Evidence Foundation

Shulman (1986, 1987) distinguished PCK from general content knowledge and general pedagogical knowledge as a third, distinct category: the blend of content and pedagogy that is uniquely the province of teachers. A chemist and a chemistry teacher may have identical content knowledge, but the teacher also knows which analogies work for ionic bonding at age 14, which misconceptions about atoms are nearly universal, and which representations mislead more than they illuminate. This is PCK — the knowledge that makes content teachable. Shulman identified it as "the most useful forms of representation of those ideas, the most powerful analogies, illustrations, examples, explanations, and demonstrations — in a word, the ways of representing and formulating the subject that make it comprehensible to others."

Ball, Thames & Phelps (2008) refined Shulman's framework into six sub-domains of mathematical knowledge for teaching, finding that this form of PCK predicted student achievement gains independently of general content knowledge. Their key finding: a teacher's ability to identify why a student's incorrect answer makes sense given the student's likely reasoning was a stronger predictor of student learning than the teacher's own ability to solve mathematical problems. The implication: content knowledge is necessary but not sufficient. What matters is the transformation of content knowledge into teachable form — which requires knowing how students think about this content, not just knowing the content itself.

Magnusson, Krajcik & Borko (1999) mapped the components of PCK for science teaching: knowledge of science curricula, knowledge of students' understanding of specific science topics, knowledge of instructional strategies and representations for teaching specific science topics, and knowledge of assessment of specific science topics. Each component is topic-specific — a teacher's PCK for photosynthesis does not transfer to their PCK for Newtonian mechanics. This topic-specificity is what makes PCK development so demanding and why a diagnostic tool is needed.

Depaepe, Verschaffel & Kelchtermans (2013) conducted a systematic review confirming PCK as a distinct, teachable, and measurable construct across subjects, while noting that it develops primarily through subject-specific teaching experience and targeted reflection — not through generic professional development. Cochran, DeRuiter & King (1993) proposed the concept of "pedagogical content knowing" — emphasising that PCK is dynamic and continually developing, not a fixed body of knowledge to be acquired.

Hattie (2009) found that teacher subject matter knowledge has a moderate effect on student achievement (d = 0.09 for content knowledge alone), but that PCK — the ability to represent content in ways students can access — has a substantially larger effect. Willingham (2009) reinforced this from a cognitive science perspective: teachers cannot make good in-the-moment decisions about explanations, examples, and representations if they do not have deep, flexible content knowledge to draw from. Content knowledge is the raw material from which PCK is constructed.

Timperley et al. (2007) found in their Best Evidence Synthesis that the most effective professional development is content-specific and directly connected to teaching practice: teachers who study student misconceptions in their subject and refine their pedagogical representations improve student outcomes more than teachers who study general teaching strategies. The implication for this skill: PCK development must be targeted at the specific topic the teacher is about to teach, not at general pedagogical principles.

Bernstein's (1999) knowledge structures framework maps directly onto PCK. **Hierarchical PCK** is knowing the prerequisite chains and where students get stuck — which concepts must be mastered before the next idea is accessible, and what it looks like when a student is missing a prerequisite. **Horizontal PCK** is knowing the multiple representations and disciplinary thinking moves — which analogies illuminate, which mislead, and how expert reasoning in this domain differs from novice reasoning. **Dispositional PCK** is the orientation toward noticing what students actually understand in real time — not what they have been told, but what they have constructed — and adapting teaching in response. All three dimensions must be present for effective teaching.

## Input Schema

The educator must provide:
- **Teaching context:** What the teacher is about to teach. *e.g. "Year 9 wellbeing unit on stress, emotional regulation, and habits — including the neuroscience of stress" / "Year 7 Science — forces and motion, including Newton's laws" / "Year 10 History — the Russian Revolution"*
- **Learner stage:** Age range or year group. *e.g. "14-15 years" / "Year 7" / "Band D"*
- **Teacher background:** Subject training and experience. *e.g. "Secondary humanities teacher (history and politics), no science training, first time teaching wellbeing science" / "Primary generalist with a geography degree, teaching science for the first time" / "Experienced biology teacher now teaching a cross-curricular sustainability project"*

Optional (injected by context engine if available):
- **Known student misconceptions:** Misconceptions the teacher is already aware of
- **Curriculum framework:** The school's curriculum or competency framework
- **Knowledge architecture output:** From curriculum-knowledge-architecture-designer if already run

## Prompt

```
You are an expert in pedagogical content knowledge development, drawing on Shulman's (1986, 1987) original PCK framework, Ball, Thames & Phelps's (2008) refined model of content knowledge for teaching, Magnusson, Krajcik & Borko's (1999) components of science PCK, Depaepe, Verschaffel & Kelchtermans's (2013) systematic review, and Bernstein's (1999) knowledge structures framework. You understand that PCK is topic-specific, develops through subject-focused experience and reflection, and comprises three dimensions: hierarchical content knowledge (prerequisite chains and where students get stuck), horizontal disciplinary thinking (representations, expert reasoning, multiple valid approaches), and dispositional noticing (the real-time orientation toward student understanding).

Your task is to diagnose the teacher's PCK gaps and produce a development plan for the following teaching context.

**Teaching context:** {{teaching_context}}
**Learner stage:** {{learner_stage}}
**Teacher background:** {{teacher_background}}

The following optional context may or may not be provided. Use whatever is available; ignore any fields marked "not provided."

**Known student misconceptions:** {{known_student_misconceptions}} — if provided, incorporate into the misconceptions map. If not provided, identify the most well-documented misconceptions from research.
**Curriculum framework:** {{curriculum_framework}} — if provided, connect the PCK development to the framework's requirements.
**Knowledge architecture output:** {{knowledge_architecture_output}} — if provided, use the epistemic diagnosis to focus the PCK development on the knowledge types most prominent in this curriculum.

## Process

Follow these seven steps precisely. Each step produces a named section in the output.

**Step 1 — PCK Diagnosis.**
Based on the teacher's stated background and the topic they are teaching, identify the most likely PCK gaps. Be specific: not "the teacher may lack content knowledge" but "a teacher trained in social science teaching a wellbeing science unit is unlikely to have secure knowledge of the hypothalamic-pituitary-adrenal axis, which is prerequisite for teaching the stress response accurately." Identify gaps across all three dimensions:
- **Hierarchical:** What content knowledge is the teacher likely missing or holding insecurely? What prerequisite chains might they not see?
- **Horizontal:** What disciplinary thinking standards are they likely unfamiliar with? Which pedagogical representations for this topic are they unlikely to know?
- **Dispositional:** What student responses should they be listening for that their background may not prepare them to notice?
Also identify PCK strengths the teacher likely brings — transferable pedagogical capabilities from their training and experience.

**Step 2 — Content Knowledge Foundations.**
Identify the hierarchical knowledge the teacher must have secure before teaching this topic. State the prerequisite chain explicitly — which concepts must come before which, and which are hard prerequisites (cannot proceed without) vs soft prerequisites (easier with but possible without). Identify the two or three concepts that are most commonly misunderstood by teachers themselves at this level — not just by students. State what the accurate understanding is and where the common teacher-level misunderstanding lies.

**Step 3 — Student Misconceptions Map.**
Identify the most well-documented misconceptions students hold about this topic at this learner stage. For each misconception:
- **What it is:** State the misconception clearly
- **Why it forms:** What prior knowledge, intuition, or everyday experience generates it
- **How persistent it is:** Whether it shifts easily with instruction or resists change
- **What research suggests is required to shift it:** The pedagogical approach, not just "correct it"
Do not list misconceptions without explaining their origin — a teacher who knows what the misconception is but not why it forms cannot teach against it effectively.

**Step 4 — Pedagogical Representations.**
Identify the most effective representations, analogies, models, and examples for teaching this content at this learner stage. For each representation:
- **What it illuminates:** What aspect of the content it makes accessible
- **What it obscures or distorts:** Where the representation breaks down or misleads
- **Learner stage appropriateness:** Whether it works for this age group or is better suited to older/younger students
Include at least one **representation to avoid** — a commonly used analogy or model that produces a misconception rather than understanding, with explanation of what it gets wrong.

**Step 5 — Disciplinary Thinking Standards.**
Describe what expert thinking looks like in this domain and how the teacher can make it visible to students. This is the horizontal dimension of PCK: not just knowing the content but knowing how experts reason about it, what counts as a good question, what counts as good evidence, and what the characteristic errors of novice thinking are in this domain. State the disciplinary thinking standard in terms a student could understand and a teacher could use to assess.

**Step 6 — Dispositional PCK.**
Describe the orientation the teacher needs to develop to teach this topic well. This is not a technique — it is a way of noticing. What should the teacher be listening for in student responses? What student utterances signal a misconception forming? What questions reveal the depth of understanding beneath a correct-sounding answer? What does it look like when a student is performing understanding (saying the right words) versus genuinely understanding (can apply, explain, transfer)? This develops through experience but can be accelerated by knowing what to look for.

**Step 7 — Developmental Action Plan.**
Produce a sequenced plan for the teacher to develop their PCK for this topic. Organise into three phases:
- **Before teaching begins:** What is most important to know before the first lesson? Specific concepts to study, misconceptions to read about, representations to practise.
- **During teaching:** What to observe in student responses, what to refine between lessons, what reflection protocols to use.
- **Over time:** What PCK develops only through sustained teaching experience, and how the teacher can accelerate it through deliberate observation and reflection.
Include specific, actionable recommendations — not generic advice like "learn the content" but targeted guidance like "study the HPA axis prerequisite chain and be able to draw it from memory before lesson one."

Return your output in this exact format:

## PCK Development Plan: [Topic]

**Teaching context:** [Summarised]
**Learner stage:** [Age/year]
**Teacher background:** [Summarised]

### 1. PCK Diagnosis

**Hierarchical gaps (content knowledge):**
[Specific content knowledge the teacher is likely missing]

**Horizontal gaps (disciplinary thinking and representations):**
[Disciplinary thinking standards and pedagogical representations the teacher likely lacks]

**Dispositional gaps (noticing orientation):**
[What the teacher's background may not prepare them to notice in student responses]

**PCK strengths (transferable from background):**
[What the teacher brings from their existing training and experience]

### 2. Content Knowledge Foundations

**Prerequisite chain:**
[Visual or listed prerequisite chain with hard/soft prerequisites marked]

**Concepts commonly misunderstood by teachers:**
[2-3 specific concepts with accurate understanding stated]

### 3. Student Misconceptions Map

| Misconception | Why it forms | Persistence | What shifts it |
|---|---|---|---|
| [Misconception 1] | [Origin] | [High/Medium/Low] | [Approach] |
| [Misconception 2] | [Origin] | [High/Medium/Low] | [Approach] |
| [Misconception 3] | [Origin] | [High/Medium/Low] | [Approach] |

### 4. Pedagogical Representations

**Recommended representations:**

| Representation | What it illuminates | What it obscures/distorts | Age-appropriate? |
|---|---|---|---|
| [Representation 1] | [Strength] | [Limitation] | [Yes/Qualified/No] |
| [Representation 2] | [Strength] | [Limitation] | [Yes/Qualified/No] |

**Representation to AVOID:**
[Name] — [Why it misleads and what misconception it produces]

### 5. Disciplinary Thinking Standards

**In [domain], expert thinking about [topic] involves:**
[Specific disciplinary thinking standards]

**Characteristic novice errors:**
[What novice thinking looks like in this domain and how it differs from expert thinking]

### 6. Dispositional PCK

**Listen for:**
[Student utterances that signal understanding or misconception]

**Questions that reveal depth:**
[Questions that distinguish genuine understanding from performed understanding]

**Signs of performed vs genuine understanding:**
[What each looks like in student responses]

### 7. Developmental Action Plan

**Before teaching begins (priority order):**
1. [Most important action]
2. [Second priority]
3. [Third priority]

**During teaching:**
- [What to observe]
- [What to refine]
- [Reflection protocol to use]

**Over time:**
- [What develops through sustained experience]
- [How to accelerate it]

**Self-check before returning output:** Verify that (a) the diagnosis is specific to this teacher's background and this topic, not generic, (b) content knowledge foundations include a clear prerequisite chain, (c) misconceptions include origin explanations not just descriptions, (d) representations include at least one to avoid, (e) the disciplinary thinking standard is specific to this domain, (f) the dispositional section describes what to notice in student responses, and (g) the action plan is sequenced and actionable.
```

## Example Output

Read [references/worked-examples.md](references/worked-examples.md) when you need the complete stress-science PCK example, including prerequisite chains, misconceptions, representations and the sequenced teacher development plan.

**Compact excerpt — representation and its limits (stress science):**

| Representation | What it illuminates | What it obscures/distorts | Age-appropriate? |
|---|---|---|---|
| **"Smoke alarm" analogy for the amygdala** | Makes the amygdala's role as a rapid threat detector intuitive. A smoke alarm doesn't fight fires — it detects potential danger and triggers a response. Similarly, the amygdala doesn't "create" fear — it detects potential threats and triggers the stress response cascade. | Implies the amygdala is the ONLY structure involved, and that it merely "goes off" rather than integrating multiple inputs. Also implies the response is binary (alarm on/off) when the actual response is graded. | Yes for 14-15 — effective entry point. Flag the limitation explicitly: "This analogy is useful but incomplete. A smoke alarm works alone; the amygdala works with many other brain regions." |

---

## Known Limitations

1. **The diagnosis is based on the teacher's self-report of their background, which may underestimate or overestimate their actual content knowledge.** A teacher who trained in biology twenty years ago may have secure knowledge, outdated knowledge, or no retained knowledge — the skill cannot distinguish between these without a knowledge check. For high-stakes topics (medical information, scientific accuracy that affects student safety), the teacher should verify their content knowledge independently before relying on the skill's diagnosis.

2. **The misconceptions database is only as current as the research base.** Misconception research exists for some topics (fractions, photosynthesis, Newtonian mechanics, evolution) with strong replication. For newer or less-studied topics (wellbeing science, regenerative thinking, AI ethics), the misconceptions section will be based on thinner evidence. The skill will flag this where relevant.

3. **PCK is ultimately developed through subject-specific teaching experience, not through reading a diagnosis.** This skill accelerates the process by making visible what experienced teachers have learned slowly — but it cannot substitute for actually teaching the topic, noticing what students do, and refining practice over time. The developmental action plan is a starting point, not a completion.

4. **The three-type framework maps onto PCK but does not capture all of PCK's complexity.** Ball et al.'s (2008) six-domain model includes specialised content knowledge, knowledge of content and students, knowledge of content and teaching, knowledge of content and curriculum, and horizon content knowledge — each of which has distinct development pathways. This skill uses the three-type framework for accessibility and consistency with the rest of the skills library, which means some PCK nuance is lost.

5. **This skill diagnoses and develops individual teacher PCK.** It does not address collective or institutional PCK — the shared understanding a department or team develops about how to teach a subject well in a specific context with specific students. For ambitious new programmes involving multiple teachers, the lesson-study-cycle-designer is the more appropriate tool for building collective PCK.
