# Example Output

This illustrative, simulated example below reviews **LT 4.5 KUD v2** from the curriculum-harness repository, commit `ab4705c` — a proposed reference artefact for a future Phase 0.5 check; this document provides no completed validation receipt. The full KUD is referenced by name and commit hash; the condensed version reproduced here is realistic for illustration and is the stimulus the panel reviews in this example.

**Condensed artefact (stimulus for the example review):**

> **LT 4.5 — Navigating peer conflict constructively.** Knowledge type: T3 (dispositional). Parent competency: Competency 4 — Relational Wellbeing. Band range: B–F.
>
> - **Band B (ages 8–10).** K: names of common conflict triggers (disagreement, exclusion, misunderstanding); that feelings and actions are separate things. U: conflict is not always bad — it's a moment where a relationship can either weaken or strengthen depending on what people do next. Do (observation): when a disagreement arises in a peer group, the student stays in the conversation rather than leaving; names at least one feeling they are having; offers one idea for what to do next even if it is not adopted.
> - **Band C (ages 10–12).** K: the difference between a position (what I want) and an interest (why I want it); conflict-escalation patterns (tit-for-tat, third-party recruitment). U: a conflict about positions often has a shared interest underneath, and getting to the interest is often what unlocks resolution. Do (observation): when the student is in conflict with a peer, they can articulate the other person's interest in a way the other person would recognise; they can name an escalation pattern they are in without prompting.
> - **Band D (ages 12–14).** K: that patterns of conflict often reveal something about the relationship, not just the current disagreement; the concept of repair. U: a strong relationship is not one without conflict — it's one where conflict is followed by repair, and where repair strengthens the relationship over time. Do (observation): after a conflict, the student initiates a repair attempt within 48 hours; the repair attempt names what was said or done that contributed to the conflict from the student's side.
> - **Band E (ages 14–16).** [content continues — abbreviated]
> - **Band F (ages 16–18).** [content continues — abbreviated]

**Artefact context supplied:** Competency 4 definition (Relational Wellbeing — the disposition to form, maintain, and repair peer and adult relationships across the full developmental arc). Prerequisite LTs: LT 4.1 (emotion vocabulary, soft enabler), LT 2.3 (perspective-taking, soft enabler). Target band range: B–F. T3 dispositional classification.

---

**Illustrative review output (JSON):** Role model values below are scenario labels, not receipts of model calls; the scores are illustrative.

```json
{
  "artefact_type": "kud",
  "timestamp": "2026-04-24T14:30:00Z",
  "per_role": [
    {
      "role": "assessment_architect",
      "model": "opus",
      "scores_per_dimension": {
        "structural_integrity": 93,
        "specificity": 92,
        "domain_grounding": 94,
        "practical_usability": 91
      },
      "mean_role": 92.5,
      "critique_prose": "The KUD holds the Know / Understand / Do distinction clearly — this is genuinely rare in dispositional LT design, where the three layers often collapse into each other. The Know-layer items at Band C (position vs interest; escalation patterns) pass the exam-question test: I can write a short-answer question whose answer is 'position vs interest' without ambiguity. The Understand layer carries real conceptual weight — 'a strong relationship is not one without conflict — it's one where conflict is followed by repair' is a genuine Understand, not a paraphrased Know. The Do layer correctly uses observation indicators rather than performance rubrics, which is the right choice for a T3 LT. Progression across bands tracks a real arc: staying in the conversation (B) → naming the other's interest (C) → initiating repair within a specified window (D). Each lever shift is concrete.\n\nWhere I would push: the Band B Do indicator 'offers one idea for what to do next even if it is not adopted' is scoreable but would benefit from a specificity note on what counts as an 'idea' — does 'let's take a break' count? I suspect yes, but the current text leaves it to teacher judgement in a way that will produce inter-rater drift. Band D's '48 hours' is a design choice I endorse — a specific window beats 'within a reasonable time' — but flag that teachers will need guidance on what to do when the window is missed and whether it resets the observation.\n\nOverall this is the kind of KUD that enables formative feedback: a teacher reading it knows what they are watching for, and would have something specific to say to a student who is not yet at the band indicator. That is the assessment architect's primary test and this artefact passes it cleanly.",
      "flags": [
        { "concern": "Band B 'offers one idea' needs a specificity note on what counts as an idea to reduce inter-rater drift.", "location": "Band B Do indicator", "severity": "minor" },
        { "concern": "Band D '48 hours' window needs teacher guidance on missed-window cases.", "location": "Band D Do indicator", "severity": "minor" }
      ]
    },
    {
      "role": "dispositions_theorist",
      "model": "opus",
      "scores_per_dimension": {
        "developmental_accuracy": 93,
        "domain_grounding": 92
      },
      "mean_role": 92.5,
      "critique_prose": "This KUD takes dispositions seriously rather than treating them as behaviours to be trained. The Understand layer at Band D — 'a strong relationship is not one without conflict — it's one where conflict is followed by repair' — is doing real dispositional work. It names the stance a student is being invited to cultivate, not a technique to deploy. That distinction is the hardest thing to get right in dispositional LT design and this KUD gets it right.\n\nWhat I want to flag is more subtle: the progression is slightly too tilted toward individual-enactment language. The Do indicators are all about what the student does — stays in, names feelings, initiates repair. That is defensible, because the student is the unit we are assessing, but it understates the degree to which dispositions are cultivated by the relational context the student is in. A Band B student whose peer group models staying-in-conversation will develop this disposition faster than one whose peer group models exit-as-default, and the framework could gesture toward that contextual dependency in the Understand layer.\n\nI also want to note that the 'initiates a repair attempt within 48 hours' indicator, while scoreable, risks reading the disposition as a scheduled action rather than an ongoing stance. The disposition being cultivated here is the student holding repair as a value they return to, not a 48-hour task item. I do not think the indicator is wrong — observation indicators need to be concrete — but the surrounding documentation should make clear to teachers that a student who initiates repair at 60 hours is not failing, and that the indicator is a window of observable evidence, not a compliance test.\n\nOverall: a strong piece of dispositional work that holds the Building Learning Power instinct about ongoing stance, with minor opportunities to tighten the relational framing.",
      "flags": [
        { "concern": "Do indicators are individual-enactment-focused; Understand layer could gesture toward relational context in which the disposition is cultivated.", "location": "across bands, especially B–C", "severity": "minor" },
        { "concern": "48-hour window risks reading as compliance rather than stance; needs teacher guidance.", "location": "Band D Do indicator", "severity": "minor" }
      ]
    },
    {
      "role": "relational_sel_practitioner",
      "model": "opus",
      "scores_per_dimension": {
        "domain_grounding": 91,
        "practical_usability": 90
      },
      "mean_role": 90.5,
      "critique_prose": "The implementation reality test is the one I'm hardest on and this KUD passes with real margin. The Do indicators are things a teacher running a Circle actually sees — who stays in the conversation when a disagreement rises, who leaves, who names a feeling, who names an escalation pattern. These are not things a teacher has to invent an artificial task to observe; they are things that surface in the ordinary life of a Year 6 classroom in the week before half-term.\n\nWhere I want to push: the Band C indicator 'they can articulate the other person's interest in a way the other person would recognise' is beautifully calibrated but requires the teacher to have enough relationship with both students to know whether the articulation was recognised. In a Circle you can engineer this — you can ask the other student 'does that sound like what you meant?' — but outside the Circle, in the corridor or on the stairs, that verification is not available. The KUD should acknowledge that this indicator is Circle-observable and less reliably observable in other contexts, and suggest how a teacher builds a picture across multiple Circle sessions rather than a single exchange.\n\nI also want to note that 48 hours is generous in a week with a public holiday and a school trip. I would not change the indicator — a specific window is right — but I would add teacher guidance that the window is sensible under normal conditions and that conflicts spanning a half-term break should be measured from the return to school, not the incident.\n\nOverall: this is a KUD a teacher in a real school can actually use. That is rarer than it sounds.",
      "flags": [
        { "concern": "Band C 'recognised-by-other' verification is Circle-dependent; needs note on multi-session observation.", "location": "Band C Do indicator", "severity": "moderate" },
        { "concern": "48-hour window needs teacher guidance on breaks / holidays.", "location": "Band D Do indicator", "severity": "minor" }
      ]
    },
    {
      "role": "curriculum_specificity_reviewer",
      "model": "sonnet",
      "scores_per_dimension": {
        "structural_integrity": 91,
        "specificity": 90,
        "domain_grounding": 94
      },
      "mean_role": 91.67,
      "critique_prose": "Running the blind-band test: strip the band headers and ask whether a reviewer could reconstruct the band order from the content alone. For this KUD, yes — the progression from 'stays in the conversation' (B) to 'articulates the other's interest' (C) to 'initiates a repair attempt' (D) is genuinely ordered, not a vocabulary inflation. Band C cannot be Band B and Band D cannot be Band C on content alone. This passes cleanly.\n\nKnow-layer items pass the exam-question test. 'Position vs interest' is a specific thing you can write a question about. 'Escalation patterns (tit-for-tat, third-party recruitment)' is specific. 'Repair' at Band D is specific enough that a teacher could test a student's grasp of it.\n\nWhere I want to flag: the Understand-layer at Band B — 'conflict is not always bad — it's a moment where a relationship can either weaken or strengthen depending on what people do next' — is strong content but reads a sentence long where it could read shorter. I don't think this is a specificity failure; it's a house-style note. More substantively, the Band B Do indicator 'offers one idea for what to do next even if it is not adopted' contains the phrase 'even if it is not adopted' which is doing real work (the student is assessed on offering, not on persuading) but 'idea' is under-specified — a student mumbling 'I dunno' does not count, a student saying 'let's take a break' presumably does, and the line between them needs teacher guidance.\n\nBand A is N/A in this KUD (band range B–F) which is the right call — 'initiates a repair attempt' is not a five-year-old's task. The N/A is documented, not silent.",
      "flags": [
        { "concern": "Band B 'offers one idea' — 'idea' is under-specified; needs teacher guidance on the mumble-vs-suggestion line.", "location": "Band B Do indicator", "severity": "moderate" },
        { "concern": "Band B Understand sentence is long where a shorter one would land the same content.", "location": "Band B U layer", "severity": "minor" }
      ]
    },
    {
      "role": "developmental_neuroscience_reviewer",
      "model": "opus",
      "scores_per_dimension": {
        "developmental_accuracy": 94,
        "domain_grounding": 92
      },
      "mean_role": 93.0,
      "critique_prose": "The decision to set Band A as N/A is the right one and I endorse it unambiguously. 'Navigating peer conflict constructively' is not a five-year-old's learning target — the regulatory capacity required to stay in a conflict rather than dysregulate and leave is still under construction at that age, and asking an early-years child to meet this indicator would be asking the wrong thing of the developing nervous system. The framework documenting this N/A rather than silently omitting it is also correct — the documentation itself is part of the developmental honesty.\n\nBand B (ages 8–10) is calibrated well. 'Stays in the conversation rather than leaving' is not a stretch at this age for most children in a regulated environment. The indicator acknowledges that 'leaving' is a legitimate move in some cases (a dysregulated child leaving is protecting their nervous system, not failing the indicator) — though I would want the teacher guidance to make that explicit: leaving is not always failure, and a teacher who marks a dysregulated child as not-yet-at-indicator on that basis is reading the indicator wrongly.\n\nBand D's 'initiates a repair attempt within 48 hours' is age-appropriate for 12–14 but assumes a baseline of regulatory recovery from the conflict within that window. For a child with trauma history, 48 hours may be inside the continued-dysregulation window. The indicator is not wrong for the general population but should flag to teachers that for specific children, the window is a safeguarding-relevant variable, not a deadline.\n\nI am strong on the safety lens and acknowledge I am weaker on the learning-design lens — on the learning-architecture side I defer to the cognitive load architect.",
      "flags": [
        { "concern": "Band B 'stays in the conversation' — teacher guidance needed that dysregulated leaving is protective, not indicator-failure.", "location": "Band B Do indicator", "severity": "moderate" },
        { "concern": "Band D 48-hour window is inside the continued-dysregulation window for some children with trauma history; safeguarding note required.", "location": "Band D Do indicator", "severity": "moderate" }
      ]
    },
    {
      "role": "therapeutic_education_sceptic",
      "model": "opus",
      "scores_per_dimension": {
        "developmental_accuracy": 72,
        "domain_grounding": 62,
        "practical_usability": 66
      },
      "mean_role": 66.67,
      "critique_prose": "I will make the case against this artefact's adoption. It is well-written — I grant that — but the thing it is well-written about is itself the problem. The LT positions the teacher as observer of the student's conflict life, noting whether the student 'names at least one feeling they are having' or 'initiates a repair attempt within 48 hours.' This is surveillance framed as care. An eight-year-old who has an argument at lunchtime does not know that the adult nearby is privately scoring them against a rubric for whether they stayed in the conversation. The observation model treats ordinary childhood life as assessable data for a wellbeing framework, and that treatment itself does something to the child that the framework does not acknowledge.\n\nThe 'repair attempt within 48 hours' indicator medicalises the rhythm of ordinary disagreement. Children fall out and come back together on timescales that have nothing to do with 48 hours and everything to do with the ordinary texture of friendship. Coding this as a curriculum indicator imports a therapeutic grammar into relationships that were doing fine without it. The framework will tell you that the indicator is observation, not prescription — but the indicator becomes prescription the moment a teacher is asked to note it.\n\nOn domain grounding: the 'repair' framework borrows from therapeutic models (Gottman, Siegel) that were developed in clinical settings with adult couples or in trauma-specific contexts, and transfers them into an ordinary school curriculum without acknowledging the transfer. A framework that transports clinical constructs into developmental curriculum without argument is not grounded — it is borrowed.\n\nPractical usability: a teacher with 28 students cannot observe this across the class in the way the framework implies they can, and if they try, they will produce thin judgements on many children rather than good judgements on a few. The framework's observability claims do not survive scale.\n\nI am not required to be fair. The case against adoption is that this framework is a therapeutically-grammared expansion of school's remit into territory that belongs to families and peers, dressed in the vocabulary of curriculum. The other six roles provide balance. My score of 62 on domain grounding is not a mistake.",
      "flags": [
        { "concern": "Observation model treats ordinary childhood conflict as assessable data; no acknowledgement of what that framing does to the observed child.", "location": "Do-layer across all bands", "severity": "major" },
        { "concern": "'Repair' framework borrows from clinical therapeutic models without argument for transfer to ordinary school curriculum.", "location": "Band D U and Do", "severity": "major" },
        { "concern": "Observability at scale: 28-student class cannot yield good judgements across all target indicators.", "location": "framework-level assumption", "severity": "major" }
      ]
    },
    {
      "role": "cognitive_load_architect",
      "model": "opus",
      "scores_per_dimension": {
        "structural_integrity": 92,
        "developmental_accuracy": 91,
        "specificity": 91,
        "domain_grounding": 94
      },
      "mean_role": 92.0,
      "critique_prose": "From the cognitive-load and memory lens, this KUD is well-architected. The Know layer at each band introduces a bounded number of novel elements — at Band B, two: trigger names and the feelings-vs-actions distinction. At Band C, two again: position-vs-interest and escalation patterns. This respects working-memory limits at the target age. Comparable dispositional frameworks I have reviewed often try to introduce six or seven novel elements per band, which collapses into the learner as vocabulary without consolidation. This one does not.\n\nThe progression passes the expertise-reversal check: Band C's 'position vs interest' depends on Band B's 'feelings and actions are separate' — and the dependency is sequenced correctly. A learner at Band C has had two years to consolidate the Band B schema before being asked to build on it. Band D's 'repair' concept depends on Band C's understanding of shared interests, and again the dependency is sequenced correctly. Nothing in Band N assumes schema from Band N+1.\n\nThe Do indicators require genuine retrieval rather than recognition — the student is not picking from a menu of options, they are bringing behaviour forward unaided. That is the right design for transferable competence. A rubric that asked the student to select the correct response from a list would build brittle procedural knowledge that collapses outside the teaching task.\n\nOne flag: the Understand layer at Band B carries a fair bit of conceptual weight in a single sentence, which is fine for teacher-facing documentation but means the teacher will need to decompose the concept for the student. This is a teaching-design concern more than a cognitive-load failure in the KUD itself, but worth noting so that the implementation guidance does not assume the Understand sentence can be delivered whole to an eight-year-old.\n\nOn the Koedinger KC frame: this panel's wellbeing content sits better in Sweller/Rosenshine architecture than in explicit KC modelling, so I have not pushed that frame. For future maths-content review this skill will want a reviewer who does.",
      "flags": [
        { "concern": "Band B U sentence carries heavy conceptual weight; implementation guidance should decompose for age 8–10 delivery.", "location": "Band B U layer", "severity": "minor" }
      ]
    }
  ],
  "aggregate": {
    "mean_overall": 88.25,
    "mean_per_dimension": {
      "structural_integrity": 92.0,
      "developmental_accuracy": 87.5,
      "specificity": 91.0,
      "domain_grounding": 88.43,
      "practical_usability": 82.33
    },
    "below_floor_roles": [
      { "role": "therapeutic_education_sceptic", "mean_role": 66.67 }
    ],
    "unanimous_flags": [
      "Band B 'offers one idea' / 'idea' specificity needs teacher guidance (raised by assessment architect and curriculum specificity reviewer).",
      "Band D 48-hour window needs teacher guidance on edge cases — missed windows, breaks, continued-dysregulation window for trauma history (raised by assessment architect, dispositions theorist, relational SEL practitioner, developmental neuroscience reviewer)."
    ],
    "gate_verdict": "FAIL",
    "gate_reasoning": "FAIL: mean_overall 88.25 meets the >=88 threshold, but therapeutic-education sceptic mean_role 66.67 is below the 70 floor. Floor rule triggers — a single role's sustained dissent on the therapeutic-education grounding is a structural blocker, not a number to be averaged away. Author decision required: either engage the sceptic's flags substantively (observation-as-surveillance framing; clinical-to-curriculum transfer without argument; observability-at-scale) or document why the panel proceeds despite the floor trigger."
  },
  "caveats": ["Illustrative simulated role perspectives, not independent raters; 88/70 thresholds are unvalidated practitioner heuristics. Panel calibrated for wellbeing/SEL; no adoption or safety certification."]
}
```

**How to read this example.** The artefact is genuinely high-quality — six of seven roles score it in the 88–95 range, flags are mostly minor, and the unanimous flags identify two real issues the author would benefit from addressing. The mean_overall sits just above the 88 threshold. And yet the verdict is FAIL, because the therapeutic-education sceptic's sustained dissent on three dimensions drops its mean_role to 66.67, below the 70 floor. This is the floor rule doing exactly what it is designed to do: preventing a single role's structural concern from being averaged into passage. The author's next move is not to re-score the sceptic — it is to decide whether the sceptic's concerns are addressable (in which case, revise) or whether the panel proceeds with the dissent documented (in which case, the floor trigger becomes part of the artefact's adoption record rather than a silent pass).

