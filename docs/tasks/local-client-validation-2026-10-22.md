# Local client inspection — 22 October 2026

Coordinator read-only baseline inspection, before portable/discovery repairs. No model runs, installations, authentication changes or hosted calls.

- `codex --version`: 0.163.0-alpha.11.1. `codex plugin --help` confirms marketplace and add/list commands exist. Does not establish installation/discovery/activation.
- `claude --version`: 2.1.307. `claude plugin validate .`: passed with warnings. Current manifest `display_name` is ignored; suggests `displayName`. Root CLAUDE.md is not plugin-delivered project context. Listing-only icon guidance is advisory; no directory submission attempted. On-disk ignored .DS_Store files were reported; `git ls-files -- '*.DS_Store'` returned nothing, so none are distributed by Git. Do not delete unrelated local system files for this task.
- Claude validator recommends `/plugin install education-agent-skills --marketplace GarethManning/education-agent-skills` for 2.1.275+. Actual activation was not tested and is not implied by manifest validation.
- `hermes skills --help`: CLI present; browse/search/inspect/install/update/tap supported. No source changed or skill installed. Later portable-copy inspection can be recorded separately; no claim of full Hermes validation.

Isolated Codex results belong to the portable-profile packet report. Future README must distinguish these observations from model behavior and hosted release state.

## Offline portable-profile read check

`python3 /tmp/education-skills-build-20261022/hermes_portable_read_check.py` passed using the installed Hermes local Python APIs (`skills_list`, `skill_view(preprocess=False)`). A new temporary `HERMES_HOME` under a specific `profiles/audit` directory contained only copies of the165 portable skills; environment contained no provider credentials and Python socket connections were blocked. Hermes listed165; opened mainfiles and `references/education.json` for learning-target-authoring-guide, spaced-practice-scheduler and confidence-calibration-check. No model invocation, template/shell preprocessing, hub/network installer, real profile/config change or running server. Tempfiles cleaned.

This first pass reads the pre-content-revision export. Repeat against the final regenerated profile after organization changes, and inspect one moved worked-example resource then. It verifies local discovery/readability, not automatic activation or pedagogical benefit.

Hermes installed version: v0.18.0 (2026.7.1); local source revision `a6b9597d5fb92969d605a858d5f14536e805553a`, Python3.11.15. Version lookup is separate from the network-blocked read check; no update/install performed.
