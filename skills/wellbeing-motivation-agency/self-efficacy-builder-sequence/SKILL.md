---
# AGENT SKILLS STANDARD FIELDS (v2)
name: self-efficacy-builder-sequence
description: "Design a mastery experience sequence that systematically builds student confidence in a skill they avoid. Use when students say 'I can't do this', avoid tasks, or show learned helplessness."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "wellbeing-motivation-agency/self-efficacy-builder-sequence"
skill_name: "Self-Efficacy Builder Sequence"
domain: "wellbeing-motivation-agency"
version: "1.0"
evidence_strength: "strong"
evidence_sources:
  - "Bandura (1977, 1997) — Self-efficacy: toward a unifying theory of behavioural change"
  - "Bandura (1986) — Social Foundations of Thought and Action: four sources of self-efficacy"
  - "Schunk & Pajares (2009) — Self-efficacy theory in educational contexts"
  - "Hattie (2009) — Visible Learning: self-efficacy as one of the strongest predictors of achievement"
  - "Dweck (2006) — Mindset: the new psychology of success"
input_schema:
  required:
    - field: "target_skill"
      type: "string"
      description: "The skill or area where the student lacks confidence — what they believe they cannot do"
    - field: "student_level"
      type: "string"
      description: "Age/year group"
    - field: "current_avoidance"
      type: "string"
      description: "What the student currently does to avoid the task — the observable behaviour that signals low self-efficacy"
  optional:
    - field: "subject_area"
      type: "string"
      description: "The curriculum subject"
    - field: "student_profile"
      type: "string"
      description: "From context engine: prior attainment, known strengths, history with this skill"
    - field: "previous_attempts"
      type: "string"
      description: "What has been tried before to build confidence — what worked and what didn't"
    - field: "student_strengths"
      type: "string"
      description: "What the student IS confident about — areas of existing self-efficacy"
output_schema:
  type: "object"
  fields:
    - field: "efficacy_diagnostic"
      type: "object"
      description: "Analysis of which source of self-efficacy is most accessible for this student"
    - field: "task_sequence"
      type: "array"
      description: "A sequence of 4–6 tasks that progressively build self-efficacy from the student's current starting point"
    - field: "attribution_coaching"
      type: "string"
      description: "Specific language for attributing success to effort and strategy rather than ability or luck"
    - field: "teacher_scripts"
      type: "array"
      description: "Exact phrases the teacher can use at each stage to reinforce self-efficacy"
chains_well_with:
  - "motivation-diagnostic-task-redesign"
  - "agency-scaffold-generator"
  - "differentiation-adapter"
  - "practice-problem-sequence-designer"
teacher_time: "3 minutes"
tags: ["self-efficacy", "confidence", "Bandura", "mastery-experiences", "attribution", "mindset"]
---

# Self-Efficacy Builder Sequence

## What This Skill Does

Designs a structured sequence of tasks that systematically builds self-efficacy for a student who believes they "can't do" a specific skill — using Bandura's four sources of self-efficacy (mastery experiences, vicarious experience, verbal persuasion, and physiological states) in the right order and combination for the specific student. The critical insight from Bandura's research is that self-efficacy is not built by telling students they can do it (verbal persuasion alone is weak) but by engineering genuine success experiences — starting from what the student CAN do and building incrementally so that each step provides evidence of capability. The output is a ready-to-use task sequence plus specific teacher language for attribution coaching — helping students attribute their success to effort and strategy (which they control) rather than to ability (which feels fixed) or luck (which feels random). AI is specifically valuable here because designing an effective self-efficacy sequence requires knowing the prerequisite structure of the skill (what simpler version can the student succeed at?), the student's current starting point, and the precise increments that feel challenging but achievable — a calibration that varies for every student-skill combination.

## Evidence Foundation

Bandura (1977, 1997) identified self-efficacy — the belief in one's ability to succeed at a specific task — as a central determinant of human motivation and behaviour. Self-efficacy is domain-specific: a student can have high self-efficacy for reading but low self-efficacy for mathematics. It is also malleable — unlike trait self-esteem, self-efficacy can be changed through specific interventions. Bandura (1986) identified four sources of self-efficacy in order of power: (1) mastery experiences — actually succeeding at the task, which is by far the strongest source; (2) vicarious experience — watching someone similar succeed ("If they can do it, maybe I can too"); (3) verbal persuasion — being told you can do it, which is the weakest source but can support the others; and (4) physiological and emotional states — how the body feels during the task (calm vs. anxious). Hattie (2009) found self-efficacy to be one of the strongest individual-level predictors of academic achievement (effect size 0.92), stronger than prior achievement in some analyses. Schunk & Pajares (2009) demonstrated that self-efficacy predicts academic outcomes even when controlling for actual ability — students who believe they can succeed outperform equally capable students who doubt themselves. Dweck (2006) complemented Bandura's framework with research on implicit theories of intelligence — students with a "fixed mindset" (believing ability is innate) are more vulnerable to self-efficacy damage after failure than students with a "growth mindset" (believing ability is developed through effort). However, mindset interventions alone are weak (Sisk et al., 2018) — they must be combined with actual mastery experiences to change self-efficacy.

## Input Schema

The teacher must provide:
- **Target skill:** What the student believes they can't do. *e.g. "Writing — the student says 'I can't write' and produces minimal text" / "Mental arithmetic — the student freezes and says 'I'm no good at maths'" / "Reading aloud — the student refuses to read in class"*
- **Student level:** Year group. *e.g. "Year 7"*
- **Current avoidance:** What the student does instead. *e.g. "Writes one sentence then stops and says 'I don't know what to write'" / "Immediately asks for help on every question without trying" / "Puts head on desk and refuses to start"*

Optional (injected by context engine if available):
- **Subject area:** The curriculum subject
- **Student profile:** Prior attainment, strengths, history
- **Previous attempts:** What has been tried before
- **Student strengths:** Areas of existing confidence

## Prompt

```
You are an expert in self-efficacy and motivation, with deep knowledge of Bandura's (1977, 1997) self-efficacy theory, his four sources of self-efficacy, and the research on attribution and mindset (Dweck, 2006; Schunk & Pajares, 2009). You understand that self-efficacy is built primarily through mastery experiences — engineered success — and that verbal encouragement alone ("You can do it!") is the WEAKEST intervention. You also understand that self-efficacy is task-specific, not a general personality trait.

IMPORTANT: Do NOT recommend generic praise ("You're so clever!"), growth mindset slogans without substance ("You just need to try harder!"), or extrinsic reward systems. Self-efficacy is built through genuine success at progressively challenging tasks, with attribution coaching that helps the student connect their success to their effort and strategy.

Your task is to build a self-efficacy sequence for:

**Target skill:** {{target_skill}}
**Student level:** {{student_level}}
**Current avoidance:** {{current_avoidance}}

The following optional context may or may not be provided. Use whatever is available; ignore any fields marked "not provided."

**Subject area:** {{subject_area}} — if not provided, infer from the target skill.
**Student profile:** {{student_profile}} — if absent, leave causes unknown and plan a brief capability/access check; refusal alone cannot identify motivation, diagnosis or readiness.
**Previous attempts:** {{previous_attempts}} — if absent, do not invent what has been tried or its outcome.
**Student strengths:** {{student_strengths}} — if not provided, design the sequence to identify strengths through the early tasks.

Before selecting the sequence, check demonstrated prerequisite skills, task understanding, access and existing support with the learner and teacher. Verbal strengths or refusal do not rule out literacy, language, motor, working-memory or other access difficulties, and do not establish a psychological cause. If evidence is missing, label the efficacy diagnostic provisional and begin with an accessible check or instruction. Retain assistive tools and required accommodations throughout; seek appropriate human support for persistent barriers. This 4–6-task design is a planning scaffold, not an evaluated intervention or guaranteed progression. Agree pacing with the learner; timers are optional examples, not deadlines for success.

Apply these evidence-based principles:

1. **Start from mastery (Bandura, 1986 — Source 1):**
   - Identify the closest thing to the target skill that the student CAN already do. This is the starting point.
   - Choose the first task from demonstrated capability, offer needed support, and check success rather than guaranteeing it. This is not "dumbing down" — it is starting from a position of strength.
   - Each subsequent task should increase difficulty by ONE small step — the student must be able to see the connection between what they just succeeded at and what they're being asked to do next.
   - Plan 4–6 tasks with genuine, observable success criteria and recovery routes; adjust, repeat or pause based on performance instead of promising success at each step.

2. **Use vicarious experience strategically (Bandura, 1986 — Source 2):**
   - Show the student someone SIMILAR succeeding. "Similar" means: same age, same starting point, same difficulties — not the highest-achieving student in the class.
   - A relatable peer model may help confidence; use teacher modelling where instruction is needed, and do not promise one model is superior for every learner. "If she can do it and she used to find this hard too" is powerful.
   - Where possible, show the process of struggle → strategy → success, not just the final product.

3. **Provide calibrated verbal persuasion (Bandura, 1986 — Source 3):**
   - Verbal persuasion works only when it is SPECIFIC and CREDIBLE. "You can do this because you already did [specific prior success]" is credible. "I believe in you!" is not.
   - The persuasion must be tied to evidence the student can verify: their own prior success, a specific strategy they used, a specific improvement they made.
   - Over-praising undermines credibility. If the student knows the task was easy and you say "That was amazing!", they learn that your praise is unreliable.

4. **Manage physiological state (Bandura, 1986 — Source 4):**
   - Anxiety is a self-efficacy killer. If the student's body is in a stress state (racing heart, shallow breathing, wanting to escape), they may interpret it as difficulty; ask rather than assign their belief.
   - Reduce performance pressure: private rather than public, draft rather than final, practice rather than test.
   - Normalise difficulty: "Difficulty doesn't tell us by itself whether learning is happening. Let's check the work and what support would help."

5. **Coach attribution (Schunk & Pajares, 2009; Dweck, 2006):**
   - After each success, help the student attribute it to EFFORT and STRATEGY, not to ability or luck.
   - "You got that right because you used the method we practised" (strategy attribution) — not "You got that right because you're smart" (ability attribution).
   - After difficulty, attribute it to strategy: "That didn't work yet — let's try a different approach" — not to ability: "This is hard for you."

Return your output in this exact format:

## Self-Efficacy Sequence: [Target Skill]

**Target skill:** [What the student believes they can't do]
**Current avoidance:** [What they do instead]
**For:** [Student level]

### Efficacy Diagnostic

**Primary barrier:** [Observed capability/access evidence, learner perspective and tentative efficacy hypothesis; unknown is allowed]
**Starting point:** [The closest thing to the target skill the student CAN do]
**Sequence strategy:** [Which sources of self-efficacy this sequence targets and in what order]

### Task Sequence

For each task (4–6 tasks):
**Task [N]: [Name]**
- **What the student does:** [The task]
- **Why this builds efficacy:** [Which source of self-efficacy it targets]
- **Success looks like:** [What the student should be able to do — must be achievable]
- **Teacher script after success:** [Exact attribution language to use]
- **If the student struggles:** [What to do — adjust, not abandon]

### Attribution Coaching Guide

**Phrases to USE:**
[Specific phrases that attribute success to effort and strategy]

**Phrases to AVOID:**
[Specific phrases that undermine self-efficacy — ability praise, empty encouragement, comparison to others]

### Long-Term Plan

[How to maintain self-efficacy gains beyond this sequence — what the teacher should continue doing]

**Self-check before returning output:** Verify that (a) the first task fits demonstrated capability and has an accessible recovery route, (b) each step increases difficulty by one small increment, (c) mastery experiences are the primary intervention, (d) attribution coaching is specific and credible, (e) no generic praise or extrinsic rewards are recommended, and (f) the sequence ends at or near the original target skill level.
```

## Example Output

**Scenario:** *Target skill: "Extended writing — the student says 'I can't write' and has produced almost no extended writing all year" / Student level: "Year 8" / Current avoidance: "Writes one sentence, stops, rubs it out, writes the same sentence again, then puts head on desk. If pushed, says 'I don't know what to write' or 'This is stupid.'" / Subject area: "English" / Student strengths: "Excellent verbal contributions in class discussion — articulate, detailed, shows strong understanding when speaking"*

---

## Self-Efficacy Sequence: Extended Writing

**Target skill:** Write an extended response (a developed paragraph) in English
**Current avoidance:** Writes one sentence, erases, shuts down. Says "I can't write" / "I don't know what to write."
**For:** Year 8 English

### Efficacy Diagnostic

**Primary barrier:** Unknown from the description alone. Repeated erasing and stopping may reflect low confidence, but may also reflect task understanding or writing/access difficulties. Ask privately what is difficult, inspect a manageable supported writing sample, and check existing accommodations and prerequisite instruction before choosing steps.

**Starting point:** Verbal contribution is a documented strength in this fictional case. It suggests an entry route, not proof that writing is just transcription or that the barrier is motivational. Check whether the learner can compose and record one sentence using their usual access supports.

**Sequence strategy:** If that check fits, offer a bridge from spoken ideas to written composition with small mastery steps, credible feedback and low pressure. If it does not, provide appropriate instruction/access support first. The five tasks below are adjustable drafts; progress depends on actual work, not a 2–3-week promise. Keep verbal planning and assistive tools wherever useful.

### Task Sequence

**Task 1: Talk It, See It**
- **What the student does:** The teacher asks the student a question about the text they're studying (the same question the class is writing about). The student answers verbally. The teacher (or a TA, or the student using approved speech-to-text/recording only with appropriate consent and data handling; otherwise use live verbal planning without recording) writes down exactly what the student says, word for word. The teacher then shows the student what they said, written down. "Look — that's yours. You said that."
- **Why this builds efficacy:** Vicarious experience + physiological state management. The student sees their OWN words in written form without the stress of physically writing. This can make existing ideas visible; assess written composition separately, because spoken ideas alone do not demonstrate independent writing.
- **Success looks like:** The student sees their spoken response written down and recognises it as competent. They can see: "I said something worth writing."
- **Teacher script after success:** "Those are your ideas. Which part makes the point you wanted? We can work together on turning it into a sentence using the supports that help you."
- **If the student struggles:** If the student is reluctant to speak, start with a very low-stakes question: "What happened in the chapter?" (recall, not analysis). The goal is to get ANYTHING spoken and written down.

**Task 2: Talk It, Write One Sentence**
- **What the student does:** Same setup: the teacher asks a question, the student answers verbally. But this time, the teacher says: "Good. Now write down the first sentence of what you just said. Just the first sentence. Would a short timer help, or would you prefer no timer? We can try 60 seconds if useful and adjust it." The student writes ONE sentence. The teacher reads it and says: "That's exactly what you said. Done."
- **Why this builds efficacy:** Mastery experience. The student has produced a written sentence that they know is good — because they already said it and it was validated. The "just one sentence" framing reduces the perceived scale of the task. An agreed endpoint may help; remove or adjust the timer if it adds pressure.
- **Success looks like:** The student writes one sentence without erasing it. That's it. One sentence, kept on the page.
- **Teacher script after success:** "One sentence — done. That sentence makes a clear point about the text. You did that. Tomorrow, we'll try two."
- **If the student struggles:** If the student writes and then erases, say: "Keep it. Even if it's not perfect — first drafts never are. Mine aren't either. Would you keep a draft version so we can work on it together?" If they freeze entirely, go back to Task 1.

**Task 3: Talk It, Write Three Sentences**
- **What the student does:** The teacher asks the question. The student answers verbally — but this time, the teacher helps them identify three parts: "OK, you've said [summary]. That's three ideas: [first], [second], [third]. Can you write those three ideas as three sentences? We can try three minutes if that helps, or take the time you need."
- **Why this builds efficacy:** Mastery experience + competence scaffolding. The student now has a clear structure (three ideas, three sentences) and a time limit. The verbal rehearsal ensures they know what to write before they start — removing the "I don't know what to write" barrier.
- **Success looks like:** Three sentences on the page. They don't need to be perfect. They need to EXIST.
- **Teacher script after success:** "Three sentences. Read these three sentences — what do you think? You used a quotation in your second sentence, and your third sentence explains the effect on the reader. That's analysis. You're writing."
- **If the student struggles:** If they can write one sentence but not three, accept two. The goal is forward movement, not perfection. Adjust the target: "OK, two sentences today. We'll build to three next time."

**Task 4: Write a Paragraph With a Verbal Plan**
- **What the student does:** Before writing, the student verbally plans their paragraph (using PEEL or similar structure the class uses). The teacher or partner listens and confirms: "That's a paragraph — point, evidence, explanation. Now write it." The student writes the paragraph — aiming for 4–5 sentences. Eight minutes is an optional planning example, adjusted with the learner; retain their access arrangements.
- **Why this builds efficacy:** Mastery experience. This is the first time the student writes a genuine paragraph. Verbal planning may reduce composition load; check whether the learner can use it in writing and adjust support if not.
- **Success looks like:** A paragraph of 4–5 sentences that follows the class structure. Assess the paragraph against an accessible, appropriate writing criterion; spoken quality does not guarantee written performance.
- **Teacher script after success:** "That paragraph has a clear point, a quotation, and an explanation of the effect. That's the same structure as everyone else in the class. Look at the evidence in this paragraph. The strategy was the same every time: plan it by talking, then write it down. That strategy works for you."
- **If the student struggles:** If the paragraph is shorter than planned, celebrate what's there: "You've got three strong sentences. Next time, let's add the link sentence. You know how — you said it in your plan."

**Task 5: Write a Paragraph Independently (Target)**
- **What the student does:** The student writes a paragraph in response to a class task, using the verbal planning strategy independently (talking quietly to themselves or planning in bullet points). Use the practised strategy and any ongoing access tools; reduce optional teacher prompts only if performance and learner preference support it.
- **Why this builds efficacy:** Mastery experience + autonomy. The student can now see themselves as "someone who writes" — not because they were told they could, but because they have evidence across multiple tasks that they can.
- **Success looks like:** A complete paragraph produced independently during a normal class task.
- **Teacher script after success:** "You did that independently. Your paragraph uses the verbal planning strategy to develop a point and evidence. Which support would you like for the next one? That strategy is YOURS now — you can use it every time."
- **If the student struggles:** Offer a brief verbal rehearsal: "Tell me your first sentence — just say it." Then: "Good. Write that." Verbal planning is a legitimate ongoing strategy. Review optional teacher prompting with the learner; do not remove useful assistive supports to demonstrate independence.

### Attribution Coaching Guide

**Phrases to USE:**
- "You got that paragraph written because you planned it out loud first — that strategy works."
- "Read that sentence back — that's clear and makes a strong point. Your planning made that possible."
- "You're writing more than last week. That's because you've been practising the verbal planning — the more you use it, the easier it gets."
- "You kept checking the paragraph against your plan; this sentence now explains the evidence clearly."
- "You found a strategy that works for you — plan it by talking, then write it. That's a writer's tool."

**Phrases to AVOID:**
- "You're so clever!" — ability attribution; if the student later struggles, "clever" becomes evidence of failure.
- "That's brilliant!" (for a task that was easy) — uncalibrated praise undermines credibility. The student knows it was easy.
- "See, I told you you could do it!" — centres the teacher, not the student. "You proved it to yourself" is better.
- "You're just as good as [other student]" — comparison threatens self-efficacy by introducing a standard the student may not feel they can maintain.
- "Just try harder" — effort without strategy feels like running into a wall harder. Always pair effort with a specific strategy.

### Long-Term Plan

1. **Maintain the verbal planning strategy.** This student's strength is verbal articulation. The bridge from speech to writing should remain available — it's not a crutch, it's a legitimate writing strategy used by professional writers. Over time, the student may internalise the planning (thinking instead of speaking), but there's no rush to remove the external version.

2. **Gradually extend the volume.** Once a single paragraph is secure, extend to two linked paragraphs (using verbal planning for each). Then to a short essay. The increments should be small — each new challenge should feel like "one more step" from the last success, not a leap.

3. **Watch for regression after failure.** If the student produces a weaker piece of work (as every writer does), they may interpret this as evidence that "I can't really write." Respond immediately with attribution coaching: "This paragraph isn't as strong as your last one — but that's not because you can't write. It's because this text is harder to analyse. Let's use your planning strategy again."

4. **Never publicly compare this student's writing to their earlier avoidance.** "Remember when you used to put your head on the desk?" may seem motivating but is humiliating. The student's past struggles are private. Celebrate the current success without referencing the past difficulty.

---

## Known Limitations

1. **Self-efficacy sequences take time.** The five-task sequence has no established minimum duration; use performance and learner feedback to decide pace. There is no guaranteed shortcut — self-efficacy is built through accumulated evidence, not a single intervention. Teachers under pressure to "cover the curriculum" may feel they cannot afford this investment. The teacher must judge the time cost alongside needed instruction and access support; the sequence has no established efficiency advantage or fixed three-week payoff.

2. **Motivation, skill and access can interact.** The sequence does not diagnose the cause of difficulty. Strong speech does not rule out a writing or access difficulty. Check prerequisites and support needs before using it, provide explicit skill instruction where needed, and retain accommodations or specialist support alongside confidence-building.


3. **Self-efficacy is domain-specific.** Building writing self-efficacy does not automatically improve self-efficacy in mathematics or science. Each domain requires its own sequence. However, meta-cognitive awareness ("I used a strategy and it worked") can transfer — the student may learn to apply the strategy-based approach to other areas of difficulty.
