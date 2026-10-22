---
# AGENT SKILLS STANDARD FIELDS (v2)
name: curriculum-knowledge-architecture-designer
description: "Map the epistemic structure of a subject to determine knowledge types and inform curriculum sequencing. Use when designing courses, restructuring programmes, or analysing knowledge architecture."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "curriculum-assessment/curriculum-knowledge-architecture-designer"
skill_name: "Curriculum Knowledge Architecture Designer"
domain: "curriculum-assessment"
version: "1.0"
evidence_strength: "moderate"
evidence_sources:
  - "Bernstein (1999) — Vertical and horizontal discourse: hierarchical vs horizontal knowledge structures"
  - "Bernstein (2000) — Pedagogy, Symbolic Control and Identity: recontextualisation and the pedagogic device"
  - "Muller (2009) — Forms of knowledge and curriculum coherence: conceptual vs contextual coherence"
  - "Maton (2009) — Cumulative and segmented learning: curriculum structures and knowledge-building"
  - "Maton (2013) — Making semantic waves: semantic gravity and density as tools for cumulative learning"
  - "Maton (2014) — Knowledge and Knowers: Legitimation Code Theory (Semantics dimension)"
  - "Young (2008) — Bringing Knowledge Back In: powerful knowledge and social realist curriculum theory"
  - "Wheelahan (2010) — Why Knowledge Matters in Curriculum: access to theoretical knowledge as social justice"
  - "Bianchi, Pisiotis & Cabrera Giraldez (2022) — GreenComp: European Sustainability Competence Framework"
  - "Bacigalupo et al. (2016) — EntreComp: Entrepreneurship Competence Framework"
  - "Sala et al. (2020) — LifeComp: European Framework for Personal, Social and Learning to Learn"
input_schema:
  required:
    - field: "curriculum_input_type"
      type: "string"
      description: "The type of curriculum input: 'course', 'scope-and-sequence', or 'project-brief'"
    - field: "domain_or_subject"
      type: "string"
      description: "Name and brief description of the subject or domain"
    - field: "learner_stage"
      type: "string"
      description: "Age range or year group"
    - field: "learning_goals"
      type: "string"
      description: "Intended outcomes — 3-5 sentences describing what students should know, understand, and be able to do"
  optional:
    - field: "existing_curriculum_documents"
      type: "string"
      description: "From context engine: text of curriculum documents, unit plans, or scope-and-sequence"
    - field: "competency_framework"
      type: "string"
      description: "From context engine: the school's competency or dispositional framework in use"
    - field: "prior_knowledge_baseline"
      type: "string"
      description: "From context engine: what students already know and can do before this curriculum begins"
output_schema:
  type: "object"
  fields:
    - field: "epistemic_diagnosis"
      type: "object"
      description: "Which knowledge types are present, approximate proportions, and reasoning"
    - field: "knowledge_architecture_map"
      type: "object"
      description: "For each type: hierarchical prerequisite chains, horizontal conceptual hubs and lenses, or dispositional progression bands"
    - field: "mixed_architecture_notes"
      type: "string"
      description: "Where types interact, overlap, or create tension in this specific curriculum. When a dispositional goal is identified, flag whether it is knowledge-contingent — i.e. whether it requires a sufficient hierarchical and horizontal knowledge base before it can meaningfully develop. Examples: critical thinking, ecological literacy, regenerative mindset, entrepreneurial thinking. For knowledge-contingent dispositions, identify which specific hierarchical and horizontal elements are prerequisites for the disposition to be operable. State explicitly: the disposition cannot develop authentically until these prerequisites are in place."
    - field: "teaching_sequencing_implications"
      type: "string"
      description: "What the architecture means for content ordering and pacing"
    - field: "assessment_implications"
      type: "object"
      description: "Which elements are auto-assessable vs require teacher judgment and why. When horizontal knowledge is present, flag whether critical thinking is being deliberately developed through explicit instruction in disciplinary thinking standards, or whether it is assumed to emerge through exposure to horizontal content. Research (Bailin et al. 1999; Willingham 2007) is clear that disciplinary content does not automatically develop critical thinking — it must be taught explicitly within the discipline. If the curriculum identifies critical thinking as a goal but does not include explicit teaching of what good thinking looks like in this domain, flag this as a design gap."
    - field: "ai_tutoring_design_implications"
      type: "string"
      description: "How this architecture should inform an intelligent tutoring system or AI teacher assistant"
chains_well_with:
  - "learning-target-authoring-guide"
  - "competency-framework-mapper"
  - "scope-and-sequence-designer"
  - "d2r-project-cycle-designer"
teacher_time: "5 minutes"
tags: ["knowledge-structure", "curriculum-architecture", "Bernstein", "epistemic-design", "hierarchical", "horizontal", "dispositional", "mixed-architecture", "AI-tutoring"]
---

# Curriculum Knowledge Architecture Designer

## What This Skill Does

Takes a curriculum input — a single course, a subject scope and sequence, or a real-world project brief — and diagnoses the epistemic architecture of the knowledge domain. It determines whether the domain is primarily Hierarchical, Horizontal, Dispositional, or a mixed architecture, then constructs the appropriate knowledge structure map for each type present, and outputs concrete implications for teaching sequence, assessment design, and AI tutoring architecture. Most real curricula — especially project-based and real-world learning designs — are mixed architectures. The skill diagnoses proportion and interaction, not forcing a single type. AI is specifically valuable here because epistemic diagnosis requires simultaneously applying sociological theory (Bernstein's knowledge structures), curriculum design expertise (sequencing and assessment logic), and competency framework literacy (dispositional progression) — a combination that is rare in any single educator and time-consuming to work through manually.

## Evidence Foundation

Bernstein (1999) distinguished two forms of discourse — horizontal discourse (everyday, context-specific knowledge) and vertical discourse (systematic, principled knowledge) — and within vertical discourse identified two knowledge structures. **Hierarchical knowledge structures** are coherent, explicitly principled, and hierarchically integrated: new theory subsumes and generalises prior knowledge, creating a cumulative progression where lower-level concepts must be mastered before higher-level ones are accessible. The natural sciences are the paradigmatic example. **Horizontal knowledge structures** are organised as a series of specialised languages or lenses, each with its own modes of inquiry and criteria for valid knowledge. Development occurs through accumulation of new perspectives rather than integration. The humanities and social sciences are paradigmatic. Bernstein (2000) extended this framework through the concept of recontextualisation — how knowledge is transformed as it moves from its field of production into pedagogic contexts — which directly informs how curriculum designers must think about knowledge type when making sequencing decisions.

Muller (2009) applied Bernstein's framework to curriculum coherence, distinguishing **conceptual coherence** (characteristic of hierarchical knowledge — curricula where knowledge builds cumulatively on prior knowledge) from **contextual coherence** (characteristic of segmental curricula — where each segment is adequate to a specific context but segments do not necessarily build on one another). This distinction has direct implications for sequencing: conceptually coherent curricula have a logic that is difficult to reorder, while contextually coherent curricula can be entered from multiple points.

Maton (2009, 2013, 2014) developed Legitimation Code Theory's Semantics dimension, providing two analytical tools: **semantic gravity** (the degree to which meaning is tied to a specific context — stronger SG means more contextual, weaker SG means more abstract and transferable) and **semantic density** (the degree to which meaning is condensed into terms or symbols). Maton (2013) introduced the concept of **semantic waves** — the pedagogic practice of moving between concrete examples (high SG, low SD) and abstract principles (low SG, high SD) — showing that curricula and teaching that create these waves enable cumulative knowledge-building, while those that remain flat (always contextual or always abstract) produce segmented learning. This provides a diagnostic tool for identifying where in a curriculum conceptual unpacking and repacking are needed.

Young (2008) argued that curriculum theory must take seriously which knowledge matters — introducing the concept of **powerful knowledge**: specialised, systematic, discipline-based knowledge that gives learners access to explanatory frameworks they cannot acquire through everyday experience. Wheelahan (2010) extended this argument to show that competency-based curricula that strip knowledge down to contextual skills without theoretical grounding deny students access to the conceptual structures that enable social participation — making knowledge architecture a question of equity, not merely pedagogy.

The **dispositional knowledge** category draws on competency framework literature. Unlike hierarchical and horizontal structures (which describe how propositional knowledge is organised), dispositional knowledge is constituted by developing capacities, orientations, and enacted competencies — it exists only in enactment. The EU competency frameworks provide the most rigorous articulations: GreenComp (Bianchi, Pisiotis & Cabrera Giraldez, 2022) defines twelve sustainability competences including agency, systems thinking, and values literacy; EntreComp (Bacigalupo et al., 2016) defines fifteen entrepreneurship competences including self-awareness, creativity, and learning through experience across an eight-level progression model; LifeComp (Sala et al., 2020) defines nine personal, social, and learning-to-learn competences including self-regulation, collaboration, and critical thinking. These frameworks share a common characteristic: progression is qualitative and developmental, described through bands rather than prerequisite chains, and assessment requires teacher judgment of enacted capability rather than testing of propositional knowledge.

## Input Schema

The teacher must provide:
- **Curriculum input type:** What kind of input are you providing? *e.g. "course" / "scope-and-sequence" / "project-brief"*
- **Domain or subject:** Name and brief description. *e.g. "Year 9 Science — forces, energy, and motion" / "Design and Regeneration project — smart water systems for a local wetland" / "IB History — causes and consequences of 20th-century authoritarian states"*
- **Learner stage:** Age range or year group. *e.g. "12–14 years" / "Year 10" / "Grade 7–8"*
- **Learning goals:** What students should know, understand, and be able to do — 3–5 sentences. *e.g. "Students will understand how forces cause changes in motion, apply Newton's laws to real-world situations, design and test a simple machine, and communicate scientific reasoning through written argument."*

Optional (injected by context engine if available):
- **Existing curriculum documents:** Text of curriculum documents, unit plans, or scope-and-sequence
- **Competency framework:** The school's dispositional or competency framework
- **Prior knowledge baseline:** What students already know and can do

## Prompt

```
You are an expert in curriculum epistemology and knowledge structure analysis, with deep knowledge of Bernstein's (1999, 2000) theory of knowledge structures, Muller's (2009) work on curriculum coherence, and Maton's (2009, 2013, 2014) Legitimation Code Theory — particularly the Semantics dimension (semantic gravity and semantic density). You also understand competency framework design (GreenComp, EntreComp, LifeComp) and the distinction between propositional knowledge structures and dispositional development.

Your task is to diagnose the epistemic architecture of the following curriculum input and produce a complete knowledge architecture analysis.

**Curriculum input type:** {{curriculum_input_type}}
**Domain or subject:** {{domain_or_subject}}
**Learner stage:** {{learner_stage}}
**Learning goals:** {{learning_goals}}

The following optional context may or may not be provided. Use whatever is available; ignore any fields marked "not provided."

**Existing curriculum documents:** {{existing_curriculum_documents}} — if not provided, work from the domain, subject description, and learning goals.
**Competency framework:** {{competency_framework}} — if not provided, identify any dispositional elements from the learning goals.
**Prior knowledge baseline:** {{prior_knowledge_baseline}} — if not provided, assume typical prior knowledge for this learner stage.

Apply the following framework. You MUST use the exact three knowledge types defined below. Most real curricula contain more than one type — your diagnosis must identify ALL types present, estimate their approximate proportion, and explain how they interact.

## The Three Knowledge Types

**1. Hierarchical Knowledge Structure (Bernstein, 1999)**
Knowledge is coherent, systematically principled, and organised so that lower-level concepts must be mastered before higher-level ones are accessible. Development is through integration, where new theory subsumes and generalises prior knowledge. The curriculum logic is cumulative — sequencing is constrained by prerequisite relationships. Conceptual coherence (Muller, 2009) holds: content cannot be freely reordered without loss.

Indicators: prerequisite chains exist; concepts build in abstraction; mastery of prior concepts is necessary for later ones; errors at lower levels propagate upward; the subject has a canonical sequencing logic.

Examples: mathematics, formal logic, music theory, programming fundamentals, chemistry, physics.

**2. Horizontal Knowledge Structure (Bernstein, 1999)**
Knowledge is organised as a series of specialised languages or lenses, each with its own modes of inquiry and criteria for valid knowledge. Content can be entered from multiple points; development is through accumulation of new perspectives rather than integration. Disciplinary thinking skill develops progressively even though content is not strictly prerequisite-ordered. Contextual coherence (Muller, 2009) allows curriculum segments to be reordered, though analytical sophistication still develops cumulatively.

Indicators: multiple valid interpretive lenses exist; content can be studied in various orders; "thinking like a historian/philosopher/sociologist" develops across the curriculum rather than through a fixed sequence; new units add perspectives rather than building on prior units.

Examples: history, literature, philosophy, geography, sociology, art criticism.

**3. Dispositional Knowledge Structure**
Knowledge is constituted by developing capacities, orientations, and enacted competencies. The knowledge cannot be separated from the learner's growing capability — it exists only in enactment. Progression is qualitative and developmental, requiring teacher judgment rather than automated assessment. Competency frameworks (GreenComp, EntreComp, LifeComp) provide the most rigorous articulations of this type.

Indicators: the learning goal describes who the student is becoming, not just what they know; progression is described in developmental bands (emerging → developing → extending) rather than prerequisite chains; assessment requires observation of enacted behaviour over time; the competency cannot be tested through a single task.

Examples: agency, collaboration, ecological literacy, entrepreneurial thinking, self-regulation, creative confidence, regenerative mindset.

## Diagnosis Process

Step 1: Read the curriculum input carefully. For each learning goal, determine which knowledge type(s) it belongs to.

Step 2: Estimate the approximate proportion of each type present (as percentages that sum to 100%). Explain your reasoning — which specific goals or content areas belong to which type.

Step 3: For each type present, build the appropriate knowledge structure map:
- **Hierarchical:** Identify the key prerequisite chains. Order concepts topologically — which concepts must come before which. Flag any concepts where the prerequisite relationship is hard (cannot proceed without it) vs soft (easier with it but possible without).
- **Horizontal:** Identify the conceptual hubs (central themes, phenomena, or questions) and the lenses or perspectives that orbit each hub. Show how analytical sophistication develops across the curriculum even though content is not prerequisite-ordered.
- **Dispositional:** Define progression band descriptors across 4 levels: Emerging → Developing → Competent → Extending. Each level must describe what the learner DOES (observable behaviour), not what they "understand" internally. Include indicators that distinguish between levels.

Step 4: Analyse the mixed architecture — where do types interact, overlap, or create tension? Where does a hierarchical prerequisite chain intersect with a dispositional development goal? Where does a horizontal lens require hierarchical foundational knowledge?

Step 5: Derive implications for teaching, assessment, and AI tutoring.

Return your output in this exact format:

## Knowledge Architecture Analysis: [Domain/Subject Name]

**Input type:** [course / scope-and-sequence / project-brief]
**Learner stage:** [age/year]
**Learning goals:** [Summarised]

### 1. Epistemic Diagnosis

**Architecture type:** [Mixed / Primarily Hierarchical / Primarily Horizontal / Primarily Dispositional]
**Proportions:** [e.g. 40% Hierarchical, 35% Horizontal, 25% Dispositional]

**Reasoning:**
[For each knowledge type present, explain which specific learning goals or content areas belong to it and why. Reference the indicators from the framework above.]

### 2. Knowledge Architecture Map

#### Hierarchical Elements
[If present: prerequisite chains with topological ordering. Show which concepts must come before which. Mark hard vs soft prerequisites. Use a visual chain format.]

#### Horizontal Elements
[If present: conceptual hubs and the lenses/perspectives that orbit them. Show how analytical thinking develops across the curriculum.]

#### Dispositional Elements
[If present: progression band descriptors across 4 levels — Emerging, Developing, Competent, Extending — with observable indicators at each level for each dispositional competency identified.]

### 3. Mixed Architecture Notes

[Where do types interact? Where does tension arise? Be specific to THIS curriculum.]

### 4. Teaching & Sequencing Implications

[What does the architecture mean for how content should be ordered and paced? Which elements have constrained sequencing (hierarchical) vs flexible sequencing (horizontal)? Where must dispositional development run as a continuous thread rather than being assigned to specific lessons?]

### 5. Assessment Implications

**Auto-assessable elements (suitable for AI/automated assessment):**
[List specific elements and explain why they are auto-assessable — typically hierarchical elements with clear right/wrong answers or demonstrable procedures.]

**Teacher-judgment elements (require human assessment):**
[List specific elements and explain why they require teacher judgment — typically dispositional elements and sophisticated horizontal analysis.]

**Mixed elements (partial automation possible):**
[Elements where AI can assess some dimensions but teacher judgment is needed for others.]

### 6. AI Tutoring Design Implications

[How should this architecture inform an intelligent tutoring system or AI teacher assistant? Consider:
- For hierarchical elements: adaptive sequencing, prerequisite checking, targeted practice
- For horizontal elements: perspective-prompting, analytical scaffolding, exposure to multiple lenses
- For dispositional elements: reflection prompts, portfolio tracking, teacher dashboards (NOT automated grading)
- For mixed architectures: how the tutoring system should handle the transitions between types]

**Self-check before returning output:** Verify that (a) all three knowledge types have been considered, not just the dominant one, (b) proportions are justified with specific references to learning goals, (c) the architecture map uses the correct format for each type (prerequisite chains for hierarchical, hubs-and-lenses for horizontal, progression bands for dispositional), (d) mixed architecture notes are specific to THIS curriculum rather than generic, (e) assessment implications distinguish clearly between auto-assessable and teacher-judgment elements, and (f) AI tutoring implications are practical and architecture-specific.
```

## Example Output

Read [references/worked-examples.md](references/worked-examples.md) when you need the complete Smart Water Systems example, including prerequisite diagrams, conceptual lenses, dispositional progressions and tutoring implications.

**Compact excerpt — interpreting a mixed architecture (Smart Water Systems):**

**Architecture type:** Mixed — all three knowledge types are present in significant proportions.
**Proportions:** 40% Hierarchical, 30% Horizontal, 30% Dispositional

**Key tension:** Assessment of the hierarchical elements (water quality science, electronics) can be standardised and criterion-referenced. Assessment of the dispositional elements (agency, collaboration, regenerative mindset) cannot — it requires sustained observation and professional judgment. A project assessment framework that weights both equally must accommodate fundamentally different modes of evidence. There is a risk that the easily-measured hierarchical elements dominate assessment simply because they are easier to assess, marginalising the dispositional goals that are arguably the most important outcomes of a D2R project.

---

## Known Limitations

1. **The three-type framework is a simplification.** Bernstein's original distinction was between hierarchical and horizontal knowledge structures within vertical discourse. The dispositional category is not Bernstein's — it draws on competency framework literature and represents a pragmatic extension for curriculum design purposes. Scholars working within Bernstein's framework may disagree with treating dispositional knowledge as a separate structural type rather than as a feature of horizontal discourse. The framework is offered as a design tool, not as a contribution to sociological theory.

2. **Proportions are approximate and contestable.** Estimating that a curriculum is "40% hierarchical, 30% horizontal, 30% dispositional" implies a precision that the framework cannot deliver. The proportions are interpretive judgments — a different analyst might assess the same curriculum as 35/35/30 or 45/25/30. They are useful for surfacing the relative weight of different knowledge types and ensuring none is overlooked, not as exact measurements.

3. **The diagnostic is based on stated learning goals, not enacted curriculum.** A curriculum that states dispositional goals (agency, collaboration) may not actually develop them if the teaching and assessment prioritise only the hierarchical elements. The architecture analysis reveals what the curriculum CLAIMS to do; whether it actually does so depends on implementation. Teachers should use the analysis to check whether their assessment design and daily teaching practice genuinely address all the knowledge types their curriculum claims to include.

4. **Knowledge-contingent dispositions require prerequisite diagnosis, not just type labelling.** Some dispositional goals — particularly critical thinking, ecological literacy, regenerative mindset, and entrepreneurial thinking — cannot develop authentically without a sufficient hierarchical and horizontal knowledge base. The architecture diagnosis identifies that a dispositional goal is present; it does not automatically identify whether the prerequisites for that disposition to be operable are also present in the curriculum. When the diagnosis identifies a knowledge-contingent disposition, the teaching and assessment implications must include explicit identification of the hierarchical and horizontal elements that must be developed first. A curriculum that states "students will develop critical thinking" without ensuring sufficient domain knowledge to think critically with is not a curriculum that will achieve that goal.

5. **Dispositional progression bands describe typical development, not universal stages.** A student may demonstrate "Extending" agency in one context and "Emerging" in another. Dispositional development is context-sensitive and non-linear. The bands are guides for observation and feedback, not rigid classifications.

6. **The AI tutoring implications assume a system capable of mode-switching.** Most current AI tutoring systems are designed for hierarchical knowledge (adaptive practice with right/wrong feedback). The recommendations for horizontal and dispositional elements describe capabilities that most systems do not yet have. The implications are forward-looking — describing what an architecture-informed system SHOULD do, not what off-the-shelf systems currently can do.
