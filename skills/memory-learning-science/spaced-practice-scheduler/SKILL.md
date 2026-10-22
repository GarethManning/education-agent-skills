---
# AGENT SKILLS STANDARD FIELDS (v2)
name: spaced-practice-scheduler
description: "Design a spaced retrieval schedule for any topic list and timeline. Use when planning units, term sequences, or revision programmes."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "memory-learning-science/spaced-practice-scheduler"
skill_name: "Spaced Practice Schedule Builder"
domain: "memory-learning-science"
version: "1.0"
evidence_strength: "strong"
evidence_sources:
  - "Ebbinghaus (1885/1913) — The forgetting curve: exponential decay of memory without review"
  - "Cepeda et al. (2006) — Quantitative synthesis of 317 experiments in 184 articles on distributed practice in verbal recall: effective spacing depends on the retention interval"
  - "Kornell & Bjork (2008) — Spacing and interleaving effects on learning"
  - "Carpenter et al. (2012) — Using spacing to enhance diverse forms of learning"
  - "Dunlosky et al. (2013) — Distributed practice rated high-utility learning strategy"
input_schema:
  required:
    - field: "topics"
      type: "array"
      description: "List of topics or concepts to be spaced across the schedule"
    - field: "timeline"
      type: "string"
      description: "Available teaching period (e.g. '6-week half-term' or 'Term 2: Jan 15 – Mar 28')"
    - field: "lessons_per_week"
      type: "integer"
      description: "Number of lessons per week for this subject"
  optional:
    - field: "assessment_date"
      type: "string"
      description: "Date of summative assessment, if known — affects final spacing intervals"
    - field: "topic_difficulty"
      type: "array"
      description: "Teacher's estimate of relative difficulty for each topic (high/medium/low)"
    - field: "curriculum_sequence"
      type: "array"
      description: "From context engine: mandated teaching order or prerequisite dependencies"
    - field: "student_profiles"
      type: "array"
      description: "From context engine: class-level retention data from prior assessments"
output_schema:
  type: "object"
  fields:
    - field: "schedule"
      type: "array"
      description: "Week-by-week schedule showing new teaching and spaced review slots"
    - field: "spacing_rationale"
      type: "string"
      description: "Explanation of why topics are spaced at these intervals"
    - field: "review_activity_suggestions"
      type: "array"
      description: "Brief retrieval activities for each review slot"
    - field: "teacher_guidance"
      type: "string"
      description: "How to implement the schedule and adjust based on student response"
chains_well_with:
  - "retrieval-practice-generator"
  - "interleaving-unit-planner"
  - "formative-assessment-technique-selector"
  - "lesson-opening-designer"
teacher_time: "5 minutes"
tags: ["spacing", "memory", "planning", "forgetting-curve", "distributed-practice"]
---

# Spaced Practice Schedule Builder

## What This Skill Does

Takes a list of topics and a teaching timeline and generates a practical review schedule that distributes retrieval opportunities over time, using adaptable expanding intervals as a starting pattern. The output is a week-by-week plan showing when to introduce new content and when to revisit previous topics, with specific activity suggestions for each review slot. AI is specifically valuable here because coordinating review intervals across multiple topics while respecting prerequisite dependencies and timetable constraints is genuinely complex — most teachers default to blocked practice (finish topic A, move to topic B, never return) because the cognitive load of planning spaced schedules manually is too high.

## Evidence Foundation

Ebbinghaus (1885/1913) documented forgetting under specific experimental conditions; this does not establish a universal percentage of classroom learning lost in 24 hours or one decay function for all material. Cepeda et al. (2006) synthesised 317 experiments in 184 articles on verbal recall. The most effective inter-study gap varied with the retention interval, with longer retention goals generally favouring longer gaps. That result does not establish a universal 10–20% rule or the exact expanding classroom timetable used below. Carpenter et al. (2012) extended these findings to diverse classroom learning contexts, showing that spaced practice benefits declarative knowledge, procedural skills, and problem-solving. Kornell & Bjork (2008) demonstrated that spacing feels less effective to learners — students rate massed practice as more effective even when spaced practice produces better retention. This means teachers should expect students to initially prefer (and request) the less effective approach. Dunlosky et al. (2013) rated distributed practice as one of only two "high utility" strategies in their comprehensive review.

## Input Schema

The teacher must provide:
- **Topics:** List of topics to space. *e.g. ["Cell structure", "Cell transport", "Cell division", "Enzymes", "Biological molecules"]*
- **Timeline:** The available teaching period. *e.g. "8-week term, starting 3 February"*
- **Lessons per week:** How many lessons per week. *e.g. 3*

Optional (injected by context engine if available):
- **Assessment date:** When the summative assessment falls — this anchors the final review cycle
- **Topic difficulty:** Teacher estimate of relative difficulty per topic, so harder topics get more review slots
- **Curriculum sequence:** Mandated order or prerequisite constraints
- **Student profiles:** Class-level data on retention from prior assessments

## Prompt

```
You are an expert in the cognitive psychology of memory, specialising in the spacing effect and distributed practice. You have deep knowledge of Cepeda et al.'s (2006) meta-analysis on optimal inter-study intervals, Ebbinghaus's forgetting curve, and Carpenter et al.'s (2012) work on spacing in educational contexts.

Your task is to generate a spaced practice schedule for the following:

**Topics:** {{topics}}
**Timeline:** {{timeline}}
**Lessons per week:** {{lessons_per_week}}

The following optional context may or may not be provided. Use whatever is available; ignore any fields marked "not provided."

**Assessment date:** {{assessment_date}} — if provided, ensure all topics have at least one retrieval opportunity in the final week before the assessment. If not provided, design the schedule for long-term retention without a specific deadline.
**Topic difficulty ratings:** {{topic_difficulty}} — if provided, allocate more review slots to high-difficulty topics. If not provided, treat all topics as roughly equal difficulty unless your subject knowledge suggests otherwise.
**Required teaching order:** {{curriculum_sequence}} — if provided, respect prerequisite dependencies. If not provided, assume topics can be taught in the order listed.
**Class retention data:** {{student_profiles}} — if provided, weight additional review toward topics where prior data shows weak retention. If not provided, use the provisional expanding pattern below and invite adjustment after the first review.

Apply these research-informed principles and labelled scheduling heuristics. Spacing is supported; the exact intervals, minute allocations, maximum gaps and re-teaching thresholds below are practitioner starting points, not validated optima. Do not infer a universal daily forgetting percentage from Ebbinghaus.

1. **Adaptable intervals:** As a practical starting pattern, try a first review at 1–3 days after initial teaching, a second at 1–2 weeks, and a third at 3–4 weeks if the timeline permits. Cepeda et al. (2006) relates effective gaps to the intended retention interval; it does not establish this precise sequence or require successively expanding gaps for every learner. Adjust using actual recall, topic demands, timetable and retention goals, explaining departures.

2. **Review through retrieval, not re-teaching:** Each review slot should involve a retrieval activity (quiz, brain dump, diagram from memory), NOT re-teaching or re-reading. The learning happens through the retrieval attempt (Roediger & Butler, 2011).

3. **New teaching to review ratio:** In any given lesson, approximately 10–15 minutes should be available for retrieval of previously taught material (typically the lesson opening). New content occupies the main teaching portion.

4. **Interleaving where appropriate:** When topics share a domain, mix review questions from different topics in the same retrieval session. This produces an interleaving effect (Rohrer et al., 2015) that improves discrimination between similar concepts.

5. **Difficulty-weighted spacing:** Topics rated as more difficult should receive more frequent review slots. Topics with strong initial encoding may need fewer.

6. **Pre-assessment consolidation:** If an assessment date is provided, ensure every topic has at least one retrieval opportunity in the 5 days before the assessment — but do NOT cram all review into the final week. That defeats the purpose of spacing.

Return your output in this exact format:

## Spaced Practice Schedule: [Subject/Context]

**Timeline:** [Start to end]
**Topics:** [List]
**Total lessons:** [Number]

### Week-by-Week Schedule

For each week, provide:
| Lesson | New Content | Spaced Review (10–15 min starter) |
|--------|------------|-----------------------------------|
| [Day]  | [Topic]    | [Which previous topic(s) to retrieve + brief activity type] |

### Spacing Rationale

Explain in 3–4 sentences why the topics are spaced at these specific intervals, referencing the evidence base.

### Review Activity Suggestions

For each review slot, suggest a specific brief retrieval activity (not "review Topic X" but "5 free-recall questions on cell transport mechanisms" or "label a blank diagram of cell structure from memory").

### Teacher Guidance

- How long each review starter should take
- What to do when review reveals gaps (re-teach briefly vs. schedule additional retrieval)
- How to explain the purpose to students (they will feel like spaced practice is less effective — this is normal)

**Self-check before returning output:** Verify that (a) gaps beyond the suggested 3-week planning target are explained, (b) intervals fit the retention goal and available lessons, with any expanding pattern identified as a heuristic, (c) harder topics get more review slots, (d) the schedule is realistic given the lessons-per-week constraint, and (e) review activities involve retrieval, not re-reading or re-teaching.
```

## Example Output

**Scenario:** *Topics: ["Tectonic plates", "Earthquakes", "Volcanoes", "Weathering & erosion", "River landscapes"] / Timeline: "6-week half-term, 5 lessons per week" / Lessons per week: 5 / Assessment date: "End of Week 6"*

---

## Spaced Practice Schedule: Year 8 Geography — Physical Landscapes

**Timeline:** Weeks 1–6 (30 lessons)
**Topics:** Tectonic plates, Earthquakes, Volcanoes, Weathering & erosion, River landscapes
**Total lessons:** 30

### Week-by-Week Schedule

| Week | Lesson | New Content | Spaced Review Starter (10–15 min) |
|------|--------|-------------|-----------------------------------|
| 1 | 1 | Tectonic plates — structure of the Earth | — (baseline assessment: what do students already know?) |
| 1 | 2 | Tectonic plates — plate boundaries | Retrieve: sketch Earth's layers from memory, label and annotate |
| 1 | 3 | Tectonic plates — convection currents | Retrieve: name 3 plate boundary types and one feature of each |
| 1 | 4 | Earthquakes — causes and focus/epicentre | Retrieve: explain in 3 sentences how convection currents drive plate movement |
| 1 | 5 | Earthquakes — measuring and effects | Retrieve: draw and label a diagram showing focus, epicentre, and seismic waves |
| 2 | 1 | Earthquakes — case studies | Retrieve: **Tectonic plates** — 5 free-recall questions on plate boundaries (topic review, ~7 days after introduction; earlier starters also retrieved this topic) |
| 2 | 2 | Volcanoes — formation and types | Retrieve: compare two earthquake case studies from memory — causes, effects, responses |
| 2 | 3 | Volcanoes — eruption processes | Mixed retrieve: 3 Qs on **tectonic plates** + 2 Qs on **earthquake measurement** |
| 2 | 4 | Volcanoes — case studies | Retrieve: draw a cross-section of a composite volcano from memory, label 5 features |
| 2 | 5 | Volcanoes — living with volcanic risk | Retrieve: **Earthquakes** full topic — "Write everything you know about earthquakes in 5 minutes" (brain dump) |
| 3 | 1 | Weathering & erosion — types of weathering | Mixed retrieve: 4 Qs interleaving **tectonic plates** and **volcanoes** (~2 weeks since introduction; also reviewed in Week 2) |
| 3 | 2 | Weathering & erosion — erosion processes | Retrieve: name and explain 3 types of weathering from memory |
| 3 | 3 | Weathering & erosion — erosion vs weathering | Retrieve: **Volcanoes** — blank diagram: label volcanic features and explain formation |
| 3 | 4 | River landscapes — long profile and processes | Mixed retrieve: distinguish weathering from erosion + 2 Qs on **earthquake effects** |
| 3 | 5 | River landscapes — upper course features | Retrieve: **Weathering & erosion** — explain 4 types of river erosion from memory |
| 4 | 1 | River landscapes — middle course features | Mixed retrieve: 2 Qs **tectonic plates** + 2 Qs **volcanoes** + 1 Q **weathering** (interleaved, ~3 weeks since introduction) |
| 4 | 2 | River landscapes — lower course features | Retrieve: draw and annotate the long profile of a river from memory |
| 4 | 3 | River landscapes — flooding | Retrieve: **Earthquakes** — compare two case studies + explain one measurement scale |
| 4 | 4 | River landscapes — flood management | Mixed retrieve: 3 Qs on **river processes** + 2 Qs on **erosion types** |
| 4 | 5 | Consolidation / depth lesson | Full interleaved quiz: 10 Qs across all 5 topics (2 per topic, mixed order) |
| 5 | 1 | Extended writing: comparing physical processes | Retrieve: **River landscapes** — sketch upper/middle/lower course features from memory |
| 5 | 2 | Case study depth: chosen topic | Mixed retrieve: 5 Qs interleaving **volcanoes**, **weathering**, **rivers** |
| 5 | 3 | Connections between topics | Retrieve: **Tectonic plates** — full free recall (~4 weeks since introduction; a planned revisit, not an established critical interval) |
| 5 | 4 | Exam technique: using case studies | Mixed retrieve: 6 Qs across all 5 topics, focusing on commonly confused concepts |
| 5 | 5 | Practice assessment | Retrieve: quick-fire 1-minute-per-question across all 5 topics before practice assessment |
| 6 | 1 | Review based on practice assessment gaps | Targeted retrieval on weakest 2 topics from practice assessment data |
| 6 | 2 | Targeted depth: weakest topic | Retrieve: second-weakest topic from practice assessment |
| 6 | 3 | Targeted depth: second weakest | Mixed interleaved retrieval: all 5 topics, emphasis on gap areas |
| 6 | 4 | Final consolidation | Full brain dump: everything you know about all 5 topics in 12 minutes |
| 6 | 5 | **Assessment** | — |

### Spacing Rationale

This illustrative timetable distributes reviews across the term, consistent with the general spacing evidence in Cepeda et al. (2006). It uses frequent early retrieval and later weekly revisits; it is not a strictly expanding schedule or an empirically optimal one. The repeated tectonics questions also mean elapsed time since first teaching is not the same as the gap since the most recent retrieval. Mixed-topic review is used where useful for comparison, and Week 6 review should be adjusted to actual practice-assessment data rather than assumed class performance.

### Review Activity Suggestions

- **Brain dump:** "Write everything you know about [topic] in 5 minutes. No notes." Most demanding — use for topics 2+ weeks after teaching.
- **Blank diagram:** "Draw and label [specific diagram] from memory." Excellent for spatial/process knowledge.
- **Free-recall questions:** 5 short questions requiring written answers from memory. 8–10 minutes.
- **Interleaved quiz:** Mix questions from 3+ topics in random order. Forces discrimination between similar concepts.
- **Error correction:** Give a paragraph with 3–4 deliberate errors. Students identify and correct from memory.

### Teacher Guidance

- Each review starter should take **10–15 minutes maximum**. It replaces a traditional lesson starter, not the main teaching.
- **When review reveals gaps:** As an illustrative decision heuristic, if more than 40% of the class cannot recall a concept, consider a brief re-teach (around 5 minutes) and another retrieval opportunity around 3 days later. These percentages and timings are not validated cutoffs; use the nature of the errors and available teaching time to decide whether fuller instruction is needed.
- **Explain the purpose to students:** "This will feel harder than re-reading your notes, and you might feel like you're not learning as much. Effort alone does not prove learning. We will check answers, correct errors and adjust the schedule so practice remains useful."
- **Keep review starters low-stakes.** Use the answers to guide feedback and next teaching rather than ranking students.

---

## Known Limitations

1. **The schedule assumes relatively even topic length.** If one topic requires 8 lessons of new teaching and another requires 2, the spacing intervals will be uneven. Teachers need to adjust the schedule based on actual topic weight — this tool provides a starting framework, not a rigid plan.

2. **Cepeda et al. (2006) reviewed primarily laboratory verbal-recall tasks, not this classroom timetable.** Transfer to complex procedural skills (e.g., mathematical problem-solving, essay writing) is less well-established, though Carpenter et al. (2012) provide supportive classroom evidence.

3. **The schedule does not account for school disruptions** (assemblies, field trips, cancelled lessons, teacher absence). Teachers should treat the schedule as a target pattern and shift review slots when disruptions occur rather than skipping them entirely.
