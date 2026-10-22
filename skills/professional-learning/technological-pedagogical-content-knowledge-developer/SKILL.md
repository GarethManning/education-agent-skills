---
# AGENT SKILLS STANDARD FIELDS (v2)
name: technological-pedagogical-content-knowledge-developer
description: "Develop TPACK for integrating a specific technology or AI tool into subject teaching with pedagogical alignment. Use when adopting new ed-tech, reviewing AI tools, or planning technology integration."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "professional-learning/technological-pedagogical-content-knowledge-developer"
skill_name: "Technological Pedagogical Content Knowledge Developer"
domain: "professional-learning"
version: "1.0"
evidence_strength: "moderate"
evidence_sources:
  - "Mishra & Koehler (2006) — Technological pedagogical content knowledge: A framework for teacher knowledge"
  - "Koehler & Mishra (2009) — What is technological pedagogical content knowledge?"
  - "Voogt et al. (2013) — Technological pedagogical content knowledge — a review of the literature"
  - "Chai, Koh & Tsai (2013) — A review of the quantitative measures of TPACK"
  - "Angeli & Valanides (2009) — Epistemological and methodological issues for the conceptualization of TPACK"
  - "Shulman (1986) — Those who understand: Knowledge growth in teaching — PCK foundation"
  - "Selwyn (2016) — Is Technology Good for Education? Critical perspective on ed-tech claims"
  - "Hattie (2009) — Visible Learning: technology effects are highly variable depending on implementation"
  - "Luckin et al. (2016) — Intelligence Unleashed: AI in education — opportunities and design requirements"
  - "Timperley et al. (2007) — Teacher Professional Learning and Development: content-specific PD"
input_schema:
  required:
    - field: "teaching_context"
      type: "string"
      description: "What the teacher is teaching: subject, topic, unit"
    - field: "technology_in_use"
      type: "string"
      description: "The specific technology or AI tool the teacher is integrating or considering"
    - field: "learner_stage"
      type: "string"
      description: "Age range or year group"
    - field: "teacher_background"
      type: "string"
      description: "Subject training, teaching experience, and technology confidence"
  optional:
    - field: "pck_output"
      type: "string"
      description: "From pedagogical-content-knowledge-developer if already run; TPACK builds on PCK and is more useful when PCK gaps are already identified"
    - field: "intended_learning_outcome"
      type: "string"
      description: "What the technology is supposed to help students achieve"
    - field: "school_technology_context"
      type: "string"
      description: "Devices available, platform constraints, student data privacy requirements"
output_schema:
  type: "object"
  fields:
    - field: "tpack_diagnosis"
      type: "object"
      description: "Assessment of the teacher's TPACK gaps across the three intersections: technology-content (does the teacher understand how this technology represents or distorts this content?), technology-pedagogy (does the teacher know how to use this technology to support good teaching moves?), and the full TPACK intersection (can the teacher make real-time decisions about when to use, adapt, or abandon the technology based on what students are doing?)"
    - field: "technology_content_knowledge"
      type: "object"
      description: "How this specific technology represents, models, or transforms this specific content: what it makes visible that is otherwise hard to see, what it obscures or distorts, and whether the representation is epistemically accurate for this domain"
    - field: "technology_pedagogy_alignment"
      type: "object"
      description: "Which pedagogical moves this technology supports well, which it undermines, and which are neutral; includes specific guidance on when to use it, when to step back to non-technological approaches, and what the technology cannot do that the teacher must do"
    - field: "ai_specific_guidance"
      type: "object"
      description: "If the technology is an AI tool: specific guidance on what the AI does well for this content and learner stage, where AI outputs require teacher verification, how to develop student critical evaluation of AI, and the autonomy-dependency risk for this topic"
    - field: "tpack_development_plan"
      type: "object"
      description: "Sequenced development plan building from existing PCK; what the teacher needs to learn about the technology, practise with the technology, and observe in student responses to the technology"
    - field: "ethical_and_equity_considerations"
      type: "object"
      description: "Data privacy implications for this learner stage, equity risks if technology access is uneven, and any content-specific ethical issues with this technology in this context"
chains_well_with:
  - "pedagogical-content-knowledge-developer"
  - "curriculum-knowledge-architecture-designer"
  - "critical-thinking-task-designer"
  - "lesson-observation-protocol-designer"
teacher_time: "10 minutes"
tags: ["TPACK", "technology-integration", "AI-in-education", "pedagogical-content-knowledge", "Mishra-Koehler", "professional-learning", "ed-tech"]
---

# Technological Pedagogical Content Knowledge Developer

## What This Skill Does

Takes a description of what a teacher is teaching, the technology they are integrating, and their background, then diagnoses their technological pedagogical content knowledge gaps and produces a development plan. TPACK (Mishra & Koehler, 2006) extends Shulman's PCK framework to account for technology: just as knowing a subject and knowing how to teach it are distinct capabilities, knowing how a technology works and knowing how to use it to teach a specific subject well to specific students is a third, distinct capability. A teacher who is technically proficient with an AI tool may still not know whether that tool's representation of historical causation is epistemically accurate, or whether using it for student writing undermines the metacognitive development the writing task was designed to produce. This skill addresses those intersections. It is most powerful when run after the pedagogical-content-knowledge-developer — TPACK gaps are harder to diagnose without first understanding PCK gaps, because the technology question is always "does this tool help or hinder the teaching of this specific content to these specific students?" and that question requires PCK to answer. The skill includes specific guidance for AI tools, which present distinct challenges: AI outputs may be fluent but epistemically incorrect, AI assistance may create dependency rather than capability, and students using AI for thinking tasks may perform the task without doing the thinking the task was designed to develop. These are TPACK questions, not just technology questions, and they require the teacher to understand both the content and the pedagogy to navigate well.

## Evidence Foundation

Mishra & Koehler (2006) proposed TPACK as a framework for understanding the knowledge teachers need to integrate technology effectively, building on Shulman's (1986) PCK. They identified seven knowledge domains at the intersections of content (C), pedagogy (P), and technology (T): content knowledge, pedagogical knowledge, technological knowledge, and the four intersections — PCK, TCK (technological content knowledge), TPK (technological pedagogical knowledge), and the full TPACK (the intersection of all three). The critical insight is that technology integration is not a generic skill: the right use of a simulation for teaching photosynthesis requires different knowledge than the right use of a simulation for teaching market dynamics, even if the simulation platform is identical. Technology integration that is content-blind — "use this tool for engagement" — is pedagogically empty.

Koehler & Mishra (2009) extended the framework, arguing that effective technology integration requires understanding the "wicked problem" of how technology, content, and pedagogy interact in specific contexts. There are no general solutions — only specific solutions for specific intersections. A teacher who has learned to use an AI tool effectively for writing scaffolding in English does not automatically know how to use the same tool for scientific explanation in biology, because the content demands, the epistemic standards, and the learning goals are different.

Voogt et al.'s (2013) review found consistent evidence that TPACK is a distinct and teachable construct, but noted significant variation in how it is measured and developed across studies. Chai, Koh & Tsai (2013) reviewed quantitative TPACK measures and found that self-report instruments often overestimate teacher TPACK — teachers rate their technology integration confidence higher than their actual ability to make content-specific technology decisions in practice. This suggests that TPACK development requires practice-based feedback, not just self-assessment.

Angeli & Valanides (2009) argued that TPACK should be treated as a unique body of knowledge that is more than the sum of its parts — not just the intersection of three separate domains but a qualitatively distinct form of knowing that emerges from experience with specific technology-content-pedagogy combinations. This reinforces the need for topic-specific TPACK development rather than generic technology training.

Hattie's (2009) meta-analysis found that technology in education has highly variable effects — effect sizes range from strongly negative to strongly positive depending on implementation. The meta-analytic average (d = 0.31) is modest, but the variation is enormous. This is precisely the TPACK insight: it is not the technology that determines outcomes but the teacher's knowledge of how to deploy it for specific content with specific students. A technology used well for the right content at the right time produces strong learning gains; the same technology used without TPACK may produce no gain or active harm.

Selwyn (2016) provides a necessary critical counterweight to technology enthusiasm in education. Many claims about educational technology are made by vendors rather than researchers, and the evidence base for specific tools is often thin or conflicted. Selwyn argues that the burden of proof that a technology improves learning for this content with these students should sit with the teacher using it, not with the marketing literature. This critical stance is part of TPACK: the disposition to ask "does this actually help my students learn this specific content?" rather than assuming technology is beneficial by default.

For AI tools specifically, Luckin et al. (2016) identified teacher understanding of AI capabilities and limitations as a prerequisite for effective use — a teacher who cannot evaluate whether an AI output is accurate for their domain cannot use AI tools safely or effectively in that domain. This is the technology-content knowledge intersection for AI: the teacher must know enough about both the AI and the content to evaluate whether the AI's representation of the content is trustworthy.

Timperley et al. (2007) found that effective professional development for technology integration, like all effective PD, must be content-specific and practice-connected. Generic technology training ("here is how this tool works") does not produce TPACK. Content-specific technology development ("here is how this tool represents this content, and here is where it gets it wrong") does.

## Input Schema

The educator must provide:
- **Teaching context:** What the teacher is teaching. *e.g. "Year 9 History — causes of World War One, including source analysis and historical argumentation" / "Year 10 Biology — natural selection and evolution" / "Year 8 Ethics — moral reasoning and the trolley problem"*
- **Technology in use:** The specific technology or AI tool. *e.g. "Claude (AI assistant) for student source analysis and argument construction" / "PhET simulations for modelling natural selection" / "Google Docs with AI writing suggestions for essay drafting"*
- **Learner stage:** Age range or year group. *e.g. "14-15 years" / "Year 9" / "Band D"*
- **Teacher background:** Subject training, experience, and technology confidence. *e.g. "Experienced history teacher, moderate technology confidence, first time using AI tools in the classroom" / "Primary generalist, high technology confidence, limited science content knowledge"*

Optional (injected by context engine if available):
- **PCK output:** From pedagogical-content-knowledge-developer if already run
- **Intended learning outcome:** What the technology is supposed to help students achieve
- **School technology context:** Devices, platforms, privacy constraints

## Prompt

```
You are an expert in technological pedagogical content knowledge development, drawing on Mishra & Koehler's (2006, 2009) TPACK framework, Shulman's (1986) foundational PCK work, Voogt et al.'s (2013) review, Angeli & Valanides's (2009) conceptualisation of TPACK as a unique knowledge domain, Hattie's (2009) evidence on technology effects, Selwyn's (2016) critical perspective on educational technology, and Luckin et al.'s (2016) work on AI in education. You understand that TPACK is content-specific, technology-specific, and context-specific — there is no general TPACK, only specific TPACK for specific intersections.

Your task is to diagnose the teacher's TPACK gaps and produce a development plan for the following teaching context.

**Teaching context:** {{teaching_context}}
**Technology in use:** {{technology_in_use}}
**Learner stage:** {{learner_stage}}
**Teacher background:** {{teacher_background}}

The following optional context may or may not be provided. Use whatever is available; ignore any fields marked "not provided."

**PCK output:** {{pck_output}} — if provided, use the PCK diagnosis as the foundation. TPACK builds on PCK. If not provided, note that the TPACK diagnosis may be incomplete without a prior PCK assessment.
**Intended learning outcome:** {{intended_learning_outcome}} — if provided, evaluate whether the technology actually serves this outcome.
**School technology context:** {{school_technology_context}} — if provided, factor constraints into the recommendations.

## Process

Follow these seven steps precisely. Each step produces a named section in the output.

**Step 1 — TPACK Diagnosis.**
Assess the teacher's knowledge across the three TPACK intersections. Be specific to this technology and this content.
- **Technology-Content Knowledge (TCK):** Does the teacher understand how this technology represents this content — accurately, approximately, or distortingly? Can they identify where the technology's representation of this content is epistemically sound and where it is not?
- **Technology-Pedagogy Knowledge (TPK):** Does the teacher know which of their pedagogical moves this technology supports, which it undermines, and which it is irrelevant to? Can they identify when the technology is helping students learn versus when it is helping students complete a task without learning?
- **Full TPACK:** Can the teacher make real-time judgments during a lesson about when the technology is serving student learning and when to step away from it? This is the integrated knowledge that emerges from experience with this specific combination.
Also identify TPACK strengths the teacher likely brings from their background.

**Step 2 — Technology-Content Analysis.**
Analyse how this specific technology represents this specific content.
- What does it make visible that is otherwise hard to see?
- What does it simplify in ways that may produce misconceptions?
- What does it omit that matters for this content at this learner stage?
- If the technology is an AI tool: how reliable are its outputs for this specific content domain? At what level of specificity does the teacher need to verify outputs before using them with students? What kinds of errors is this AI most likely to make in this domain?

**Step 3 — Pedagogy-Technology Alignment.**
Identify which pedagogical moves this technology supports well, which it actively undermines, and which are neutral. For each move:
- **Supports:** The technology enhances this pedagogical move — it does something the teacher cannot easily do without it.
- **Undermines:** The technology actively works against this pedagogical move — using the technology for this purpose will reduce learning.
- **Neutral:** The technology neither helps nor hinders — using it adds complexity without adding value.
Be specific: "undermines the productive struggle with evidence selection that is the core historical thinking skill" is useful. "May be distracting" is not.

**Step 4 — AI-Specific Guidance.**
Complete this step if the technology is an AI tool. Skip if not.
Address four questions:
1. **Reliability:** What does this AI do well for this content and this learner stage, and what does it do poorly or unreliably? Be specific to the content domain.
2. **Verification:** Which AI outputs require teacher verification before being used as content in this subject? What does verification look like for this domain?
3. **Student critical evaluation:** How should the teacher develop students' critical evaluation of AI outputs in this domain? Include a specific modelling move the teacher can use in the first lesson.
4. **Autonomy-dependency risk:** Is there a genuine danger that using this AI for this task will prevent students from developing the capability the task was designed to build? If so, how should the task be structured to mitigate this?

**Step 5 — Equity and Ethics.**
Identify the equity and ethical dimensions of this technology integration:
- Does uneven access to the technology create differential learning experiences?
- Does the technology collect or expose student data in ways that require disclosure or consent for this age group?
- Are there content-specific ethical issues — for example, using AI for tasks involving student emotional disclosure, or using analytics on behaviour students have not consented to have tracked?
- Does the technology create advantages for students who already have more technology access at home, widening rather than narrowing equity gaps?

**Step 6 — Dispositional TPACK.**
Describe the orientation the teacher needs to maintain effective TPACK in practice. This is not a one-time assessment but a continuous stance:
- The habit of asking "is this technology actually helping my students learn this specific content right now?" during every lesson
- The willingness to step away from the technology when it is not serving learning, even if the lesson was planned around it
- The critical disposition toward vendor claims and technology enthusiasm that Selwyn (2016) describes
- The recognition that TPACK is not a destination — it requires continuous evaluation as technology changes, content evolves, and students bring different prior experiences

**Step 7 — TPACK Development Plan.**
Produce a sequenced plan building from existing PCK. Organise into three phases:
- **Before using the technology with students:** What the teacher needs to learn about this technology's representation of this content. What low-stakes practice will build confidence. What to test before the first lesson.
- **During the first use:** What to observe in student responses to the technology. What adjustments to be ready to make. What signals that the technology is helping versus hindering.
- **After the first cycle:** How to evaluate whether the technology served the learning outcome. What to refine. When to consider abandoning the technology for this content.

Return your output in this exact format:

## TPACK Development Plan: [Technology] in [Topic]

**Teaching context:** [Summarised]
**Technology:** [Specific tool]
**Learner stage:** [Age/year]
**Teacher background:** [Summarised]
**Intended learning outcome:** [If provided; otherwise "Not specified"]

### 1. TPACK Diagnosis

**Technology-Content Knowledge (TCK):**
[Does the teacher understand how this technology represents this content?]

**Technology-Pedagogy Knowledge (TPK):**
[Does the teacher know which pedagogical moves this technology supports or undermines?]

**Full TPACK:**
[Can the teacher make real-time decisions about technology use based on student learning?]

**TPACK strengths:**
[What the teacher brings from their background]

### 2. Technology-Content Analysis

**What this technology makes visible:**
[Content this technology represents well]

**What this technology obscures or distorts:**
[Where the technology's representation is inaccurate or misleading for this content]

**Reliability assessment (for AI tools):**
[How reliable are outputs for this domain, and what verification is needed]

### 3. Pedagogy-Technology Alignment

| Pedagogical move | Technology effect | Explanation |
|---|---|---|
| [Move 1] | Supports / Undermines / Neutral | [Why] |
| [Move 2] | Supports / Undermines / Neutral | [Why] |
| [Move 3] | Supports / Undermines / Neutral | [Why] |

**Critical recommendation:**
[The most important thing the teacher must understand about how this technology interacts with their pedagogy for this content]

### 4. AI-Specific Guidance

[If applicable]

**Reliability for this domain:** [What the AI does well and poorly]
**Verification requirements:** [What must be checked and how]
**Student critical evaluation:** [How to model this — specific first-lesson move]
**Autonomy-dependency risk:** [Assessment and mitigation]

### 5. Equity and Ethics

**Access equity:** [Differential access risks]
**Data privacy:** [Requirements for this age group and this technology]
**Content-specific ethics:** [Any issues specific to this content domain]

### 6. Dispositional TPACK

[The ongoing critical stance the teacher needs to maintain]

### 7. TPACK Development Plan

**Before using with students:**
1. [Priority action]
2. [Second priority]
3. [Third priority]

**During first use:**
- [What to observe]
- [Adjustments to be ready for]
- [Signals of help vs hindrance]

**After first cycle:**
- [How to evaluate]
- [What to refine]
- [When to consider abandoning]

**Self-check before returning output:** Verify that (a) the diagnosis is specific to this technology AND this content, not generic technology advice, (b) the technology-content analysis identifies specific representational strengths and distortions, (c) the pedagogy-technology alignment identifies at least one pedagogical move the technology undermines, (d) the AI-specific guidance (if applicable) addresses autonomy-dependency risk directly, (e) the equity and ethics section is specific to this technology and this learner stage, (f) the dispositional section describes a critical ongoing stance not a one-time assessment, and (g) the development plan is sequenced and actionable.
```

## Example Output

Read [references/worked-examples.md](references/worked-examples.md) when you need the complete AI-in-WWI-history TPACK example, including verification exercises, first-lesson modelling and the two-phase task design.

**Compact excerpt — preserving the thinking demand (WWI history):**

**Critical recommendation:**
Claude must be positioned as a tool students use AFTER they have done the thinking, not BEFORE or INSTEAD OF. The task sequence should be: (1) students engage with primary sources and construct their own argument without AI, (2) students then use Claude to challenge, extend, or refine their argument — asking it for counter-evidence, alternative interpretations, or structural feedback on their reasoning. This preserves the thinking demand while using AI productively. If the sequence is reversed — students ask Claude for an argument and then edit it — the historical thinking has not occurred.

**Data privacy:**
Students aged 14-15 using Claude interact with a third-party AI platform. Requirements:
- School must have institutional terms of use that cover student data, or students must use the tool through a school-provisioned account that does not retain conversation data.
- Students should not be required to input personal information, emotional disclosures, or identifying details into the AI.
- The school's data protection officer (or equivalent) should be informed that student work is being processed by a third-party AI system.
- In jurisdictions covered by GDPR or similar frameworks, parental notification or consent may be required for this age group using third-party AI tools. The teacher should verify this with their school before proceeding.

---

## Known Limitations

1. **TPACK is technology-specific and content-specific simultaneously.** This skill produces guidance for one technology integrated with one content area. A teacher integrating three different tools across two subjects needs the skill run separately for each combination. There is no general TPACK — only specific TPACK for specific intersections.

2. **Technology changes faster than the research base.** Evidence on AI tools in education is currently thin and moving quickly. The AI-specific guidance in this skill is based on first-principles reasoning from PCK research and general AI capability assessments rather than on replicated empirical studies of specific AI tools in specific content areas. Treat AI-specific guidance as informed professional judgment, not as research-backed certainty.

3. **This skill does not evaluate the technology itself — it evaluates the teacher's knowledge of how to use it.** A technology that is fundamentally inappropriate for a learning goal will not become appropriate through better TPACK. If the technology-content analysis reveals that the technology actively distorts the content or undermines the core learning, the right response may be not to use it — and no amount of TPACK development changes that conclusion.

4. **The equity and ethics section identifies risks but cannot resolve them.** Data privacy requirements vary by jurisdiction and are changing rapidly. For any technology collecting student data, the teacher and school must verify compliance with applicable law — this skill provides a checklist prompt, not legal advice.

5. **TPACK development requires practice with real students.** Like PCK, TPACK is ultimately built through teaching with the technology, observing student responses, and refining. This skill accelerates development by identifying the right questions to ask and the right things to observe, but it cannot substitute for the experiential learning that comes from actually teaching with the technology and noticing what happens.
