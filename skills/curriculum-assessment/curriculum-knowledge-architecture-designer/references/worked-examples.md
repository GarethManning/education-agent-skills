## Example Output

**Scenario:** *Curriculum input type: "project-brief" / Domain or subject: "Design to Regenerate (D2R) — Smart Water Systems: students investigate water quality and flow in a local degraded wetland, design sensor-based monitoring solutions, and propose a regeneration plan that integrates ecological science, technology, and community engagement" / Learner stage: "12–14 years (Year 7–8)" / Learning goals: "Students will understand water cycle processes and water quality science (pH, dissolved oxygen, turbidity, nutrient loading). They will learn basic electronics and sensor technology to design a water monitoring prototype. They will apply systems thinking to analyse the wetland as an interconnected ecological, social, and economic system. They will develop agency and collaboration as regenerative practitioners — taking responsibility for a real place and working with community stakeholders. They will communicate findings and proposals to a genuine audience (local council or environmental group)."*

---

## Knowledge Architecture Analysis: D2R Smart Water Systems

**Input type:** project-brief
**Learner stage:** 12–14 years (Year 7–8)
**Learning goals:** Water cycle and water quality science; basic electronics and sensor technology; systems thinking applied to a wetland ecosystem; agency and collaboration as regenerative practitioners; communication to authentic audiences.

### 1. Epistemic Diagnosis

**Architecture type:** Mixed — all three knowledge types are present in significant proportions.
**Proportions:** 40% Hierarchical, 30% Horizontal, 30% Dispositional

**Reasoning:**

**Hierarchical (40%):** Two distinct prerequisite chains are present. First, the water quality science strand: students must understand the water cycle before they can understand water quality indicators, and must understand indicators before they can interpret field data. pH, dissolved oxygen, turbidity, and nutrient loading each have a conceptual prerequisite structure — you cannot meaningfully interpret a dissolved oxygen reading without understanding that oxygen dissolves in water, that living organisms consume it, and that temperature affects saturation. Second, the electronics and sensor technology strand: students must understand basic circuits before sensor function, and sensor function before prototype design. These are classically hierarchical — errors at lower levels propagate upward (a student who does not understand what pH measures cannot interpret pH data), and sequencing is constrained by the prerequisite structure.

**Horizontal (30%):** The systems thinking and communication strands operate as horizontal knowledge. Analysing the wetland as an ecological, social, and economic system requires applying multiple disciplinary lenses — ecological science, economics, social geography, ethics — to the same phenomenon. There is no single correct order for these lenses; each adds a new perspective rather than building on the previous one. A student might analyse the wetland's ecological function first and economic value second, or vice versa — both orderings are valid. However, the sophistication of systems analysis develops cumulatively: early analyses will be single-lens ("the wetland filters water"), while later analyses will be multi-lens and integrative ("the wetland's water-filtering function has ecological value, economic value to downstream users, and cultural significance to the local community — and these values are in tension because economic development upstream degrades the filtering function"). This is characteristic of Bernstein's horizontal knowledge structure: content can be entered from multiple points, but analytical thinking develops progressively.

**Dispositional (30%):** Agency, collaboration, and regenerative mindset are dispositional learning goals. These are not propositional knowledge that can be taught and tested — they are capacities that develop through enactment. A student does not "know" agency; they increasingly demonstrate it through taking initiative, persisting through difficulty, and owning responsibility for outcomes. Collaboration is not a skill to be mastered in a lesson but a disposition that develops qualitatively over time — from compliance (doing assigned group tasks) through coordination (dividing work effectively) to genuine co-construction (building ideas together that no individual could produce alone). Regenerative mindset — the orientation toward understanding and restoring living systems rather than merely extracting from them — is the deepest dispositional goal, requiring sustained experience and reflection rather than instruction.

### 2. Knowledge Architecture Map

#### Hierarchical Elements

**Prerequisite Chain 1: Water Quality Science**

```
Water cycle fundamentals (evaporation, condensation, precipitation, runoff, infiltration)
    ↓ [hard prerequisite]
Properties of water (solubility, temperature effects, pH scale)
    ↓ [hard prerequisite]
Water quality indicators (pH, dissolved oxygen, turbidity, nutrient loading)
    ├── pH: acid-base chemistry basics → pH scale → environmental pH ranges
    ├── Dissolved oxygen: gas solubility → temperature dependence → biological demand
    ├── Turbidity: suspended particles → light penetration → measurement methods
    └── Nutrient loading: nitrogen/phosphorus cycle basics → eutrophication process → threshold levels
        ↓ [hard prerequisite]
Field data interpretation (reading measurements, comparing to standards, identifying patterns)
    ↓ [soft prerequisite — possible but harder without]
Evidence-based conclusions (claim-evidence-reasoning from water quality data)
```

**Prerequisite Chain 2: Sensor Technology**

```
Basic circuits (voltage, current, components, simple circuit construction)
    ↓ [hard prerequisite]
Sensor principles (how sensors convert physical properties to electrical signals)
    ↓ [hard prerequisite]
Specific sensor types (pH probe, DO sensor, turbidity sensor — how each works)
    ↓ [soft prerequisite]
Prototype design (selecting sensors, connecting to microcontroller, basic data logging)
    ↓ [soft prerequisite]
Data validation (checking sensor readings against known standards, calibration concepts)
```

**Sequencing constraint:** Chain 1 and Chain 2 are largely independent until they converge at field data collection, where students use the sensors (Chain 2) to collect the water quality data (Chain 1). Both chains must reach their respective convergence points before fieldwork begins.

#### Horizontal Elements

**Central Hub: The Wetland as a System**

```
                        ┌── Ecological lens: biodiversity, habitat function,
                        │   food webs, nutrient cycling, ecosystem services
                        │
                        ├── Hydrological lens: water flow, catchment dynamics,
                        │   upstream/downstream relationships, flood regulation
                        │
The Wetland ────────────├── Economic lens: land value, water treatment costs,
as a System             │   ecosystem service valuation, development pressure
                        │
                        ├── Social lens: community relationships to the wetland,
                        │   Indigenous/local knowledge, recreational and cultural value
                        │
                        └── Ethical lens: intergenerational responsibility,
                            rights of nature, competing stakeholder interests
```

**Analytical sophistication develops across these lenses:**

| Stage | What the student does |
|-------|----------------------|
| Single-lens | Analyses the wetland through one perspective at a time: "The wetland is important because it is home to many species." |
| Multi-lens | Applies two or more lenses to the same feature: "The wetland filters water (ecological function) which saves the council money on water treatment (economic value)." |
| Integrative | Identifies tensions and trade-offs between lenses: "Developing the upstream land would increase economic output but degrade the wetland's filtering capacity, which would increase water treatment costs downstream — so the economic argument for development is weaker than it first appears." |
| Systemic | Sees the whole system dynamically: "The wetland's ecological, economic, and social values are interdependent — degrading one degrades all. A regeneration plan must address the system, not just individual components." |

**Sequencing flexibility:** Lenses can be introduced in any order. However, the ecological and hydrological lenses provide more productive entry points for 12–14-year-olds because they connect to observable, concrete phenomena (you can see biodiversity, you can measure water flow), while economic and ethical lenses are more abstract and benefit from having concrete data to reason about.

#### Dispositional Elements

**Competency 1: Agency as a Regenerative Practitioner**

| Level | Observable indicators |
|-------|----------------------|
| **Emerging** | Participates when directed. Completes assigned tasks related to the wetland investigation. Relies on teacher to define problems and next steps. Shows interest but waits for instruction before acting. |
| **Developing** | Identifies problems or opportunities independently: "I noticed the water is discoloured near the drain outlet — we should test there." Takes initiative on specific tasks within the project. Begins to express ownership: "our wetland" rather than "the wetland." |
| **Competent** | Drives investigation forward without prompting. Makes decisions about what to investigate next and justifies them. Takes responsibility for project outcomes: "Our data wasn't reliable enough — we need to recalibrate and resample." Seeks out information and resources independently. |
| **Extending** | Acts as a steward: connects the project to longer-term action beyond the classroom. Contacts community stakeholders independently. Identifies what the project cannot address and what should happen next. Demonstrates sustained commitment to the place beyond the project timeline. |

**Competency 2: Collaboration**

| Level | Observable indicators |
|-------|----------------------|
| **Emerging** | Works alongside others. Shares materials and space. Contributes when asked. May default to working alone or dividing tasks to avoid genuine interaction. |
| **Developing** | Coordinates effectively: divides tasks based on strengths, meets deadlines, communicates progress. Listens to others' ideas and incorporates them. Resolves minor disagreements without teacher intervention. |
| **Competent** | Co-constructs ideas: builds on others' contributions to produce something no individual could create alone. Actively seeks out perspectives different from their own. Adjusts their approach based on what the team needs — sometimes leading, sometimes supporting. |
| **Extending** | Facilitates group thinking: draws out quieter members, synthesises diverse viewpoints, navigates genuine disagreement productively. Reflects on and articulates how the collaboration shaped the outcome: "We wouldn't have seen the connection between the drainage pattern and the algae bloom if Priya hadn't suggested mapping both datasets together." |

**Competency 3: Regenerative Mindset**

| Level | Observable indicators |
|-------|----------------------|
| **Emerging** | Understands that the wetland is damaged and that humans caused the damage. Frames the problem as "fixing what's broken" — a deficit orientation. |
| **Developing** | Begins to see the wetland as a living system with its own capacity for recovery. Shifts from "fixing" to "supporting recovery." Asks questions about what the wetland needs rather than only what humans want from it. |
| **Competent** | Designs proposals that work with ecological processes rather than imposing human solutions. Considers the wetland's needs alongside human needs. Recognises that regeneration is ongoing, not a one-time fix. |
| **Extending** | Articulates a regenerative philosophy: understands that humans are part of the system, not separate from it. Proposes solutions that create conditions for the system to regenerate itself. Connects the specific wetland project to broader patterns of ecological degradation and regeneration. |

### 3. Mixed Architecture Notes

**Hierarchical-Horizontal interaction:** The systems thinking strand (horizontal) requires foundational science knowledge (hierarchical) to function. A student cannot apply an ecological lens to the wetland without understanding water quality indicators, and cannot apply an economic lens without understanding ecosystem services — which requires the ecological understanding first. This creates a partially constrained sequence within what is otherwise a flexible horizontal structure: the ecological lens should come before the economic lens, not because of content logic within the horizontal structure, but because of prerequisite dependencies from the hierarchical strand.

**Hierarchical-Dispositional interaction:** The sensor technology chain (hierarchical) and agency (dispositional) interact in a productive tension. The hierarchical strand provides structured, teachable skills (circuit building, sensor operation) that give students concrete competence — and competence fuels agency. A student who can build and operate a water sensor has a tangible capability that empowers action. However, if the hierarchical strand is taught in isolation (as a traditional electronics unit), the agency development stalls because the skills feel disconnected from purpose. The architecture requires that the hierarchical teaching is embedded within the project context so that skill acquisition is experienced as empowerment for action, not as abstract instruction.

**Horizontal-Dispositional interaction:** Systems thinking (horizontal) and regenerative mindset (dispositional) are deeply intertwined. The ability to see multiple perspectives on the wetland (horizontal) feeds the development of a regenerative orientation (dispositional) — you cannot develop a regenerative mindset without first seeing the system as interconnected. Conversely, a growing regenerative orientation motivates deeper systems analysis. These two types reinforce each other and should not be separated in instruction.

**Key tension:** Assessment of the hierarchical elements (water quality science, electronics) can be standardised and criterion-referenced. Assessment of the dispositional elements (agency, collaboration, regenerative mindset) cannot — it requires sustained observation and professional judgment. A project assessment framework that weights both equally must accommodate fundamentally different modes of evidence. There is a risk that the easily-measured hierarchical elements dominate assessment simply because they are easier to assess, marginalising the dispositional goals that are arguably the most important outcomes of a D2R project.

### 4. Teaching & Sequencing Implications

**Constrained sequence (hierarchical):** The water quality science chain must be taught before fieldwork — students cannot collect meaningful data without understanding what they are measuring. The sensor technology chain must reach "specific sensor types" before field deployment. These two chains should converge approximately one-third of the way through the project, creating a natural transition from classroom-based instruction to field-based inquiry.

**Flexible sequence (horizontal):** The systems thinking lenses can be introduced in any order after the ecological lens (which depends on the hierarchical science foundation). A productive sequence for 12–14-year-olds: ecological → hydrological → social → economic → ethical. This moves from concrete and observable to abstract and evaluative. However, a teacher who knows their students' strengths might reorder — a class with strong community connections might start with the social lens.

**Continuous thread (dispositional):** Agency, collaboration, and regenerative mindset cannot be taught in specific lessons — they develop across the entire project. The teaching implication is that every lesson must include opportunities for students to exercise these dispositions, and the teacher must notice and name them when they appear. A dedicated reflection protocol at the end of each week — "Where did you show agency this week? Where did collaboration change the outcome?" — makes the dispositional development visible and intentional.

**Pacing:** The hierarchical elements front-load — most of the direct instruction happens in the first third of the project. The horizontal elements build across the middle third as students apply multiple lenses to their field data. The dispositional elements are present throughout but become most visible in the final third when students take ownership of their regeneration proposals and present to authentic audiences.

### 5. Assessment Implications

**Auto-assessable elements (suitable for AI/automated assessment):**
- Water quality indicator knowledge (Can the student correctly explain what pH, dissolved oxygen, turbidity, and nutrient loading measure? — testable via structured questions)
- Data interpretation (Can the student read a data table and identify whether readings are within healthy ranges? — testable via data interpretation tasks)
- Basic circuit knowledge (Can the student identify components and explain circuit function? — testable via diagram-based tasks)
- Sensor function (Can the student explain how a specific sensor converts a physical property to a signal? — testable via structured explanation)

These elements have clear right/wrong answers or demonstrable procedural correctness. AI can assess them reliably, provide immediate feedback, and adapt difficulty.

**Teacher-judgment elements (require human assessment):**
- Agency development (Requires observation over time — a single task cannot reveal whether a student is taking initiative or following instructions. Teacher must observe patterns across multiple sessions.)
- Collaboration quality (Requires observation of group dynamics. AI cannot distinguish between a student who is silently contributing ideas in a group discussion and one who is disengaged.)
- Regenerative mindset (Requires interpretation of student reasoning and values orientation. A student's regeneration proposal might use the right language but miss the deeper shift from "fixing" to "supporting recovery" — detecting this requires professional judgment.)
- Quality of systems analysis at the integrative and systemic levels (Whether a student's multi-lens analysis genuinely identifies tensions and interdependencies vs merely listing different perspectives requires interpretive judgment.)

**Mixed elements (partial automation possible):**
- Evidence-based conclusions from water quality data (AI can check whether the student has cited data and whether the claim is consistent with the evidence, but cannot fully assess the quality of scientific reasoning in open-ended responses.)
- Communication to non-specialist audiences (AI can check for jargon, reading level, and structural elements, but cannot fully assess whether the communication would actually persuade a council member.)
- Multi-lens analysis at the single-lens and multi-lens levels (AI can check whether multiple lenses are named and applied, but the quality of integration requires judgment.)

### 6. AI Tutoring Design Implications

**For hierarchical elements — adaptive sequencing and mastery checking:**
An AI tutoring system should implement prerequisite checking before advancing students through the water quality and sensor technology chains. If a student cannot demonstrate understanding of pH (what it measures, what the scale means, what healthy ranges look like), the system should not advance them to field data interpretation tasks that require pH understanding. Targeted practice with immediate feedback is appropriate: "This water sample has a pH of 4.2. Is this within the healthy range for a freshwater wetland? Explain why or why not." The system should track mastery at each node in the prerequisite chain and flag students who are advancing without foundational understanding.

**For horizontal elements — perspective-prompting and analytical scaffolding:**
An AI tutor should prompt students to apply lenses they haven't yet considered: "You've analysed the wetland's ecological value. Now consider: what economic value does the wetland provide to the local community?" The system should scaffold analytical sophistication by modelling integrative thinking: "You've described the ecological and economic values separately. Can you identify a connection or tension between them?" The system should NOT impose a single correct interpretation — horizontal knowledge admits multiple valid analyses. Assessment should flag analytical depth (single-lens vs integrative) for teacher review rather than marking right/wrong.

**For dispositional elements — reflection prompts and teacher dashboards, NOT automated grading:**
An AI system must NOT attempt to grade agency, collaboration, or regenerative mindset. These require sustained observation of enacted behaviour that an AI tutoring system cannot access. Instead, the system should:
- Prompt regular self-reflection: "Describe a moment this week when you made a decision about the project without being told what to do. What did you decide? What happened?"
- Surface student reflections to a teacher dashboard so the teacher can track developmental trajectory over time
- Provide the dispositional progression bands as a shared vocabulary for teacher-student conferences
- Flag when a student's self-reflections suggest a shift between levels (e.g., language shifting from "the teacher told us to" to "I decided to")

**For the mixed architecture — handling transitions between types:**
The AI system must recognise that this project requires transitions between knowledge types within single sessions. A student might move from interpreting sensor data (hierarchical — right/wrong) to analysing what the data means for the wetland ecosystem (horizontal — multiple valid interpretations) to reflecting on their role as a regenerative practitioner (dispositional — developmental, no right answer). The tutoring system should shift its mode accordingly: directive and corrective for hierarchical elements, prompting and exploratory for horizontal elements, and reflective and non-evaluative for dispositional elements. A single pedagogical mode applied across all three types will be inappropriate for at least two of them.

