# Agent Skills standards and quality build verification — 22 October 2026

**Local build complete: implementation, integrated checks and final introduction/contributor documentation passed independent review.** This independent open-source education library is not being treated as part of another product. Nothing was committed, pushed, published or deployed. The hosted service and real client settings were not changed.

## Evaluated content and authority

Checkout: `/Users/garethmanning/Github/education-agent-skills`; branch `codex/agent-skills-standards-quality-2026-10-22`; inherited HEAD `6bbbce418f82e11044009c9f3b7373a354de5bd0`. Gareth authorized proceeding with the build and requested an introductory explanation of standards alignment. This supersedes the earlier read-only audit only for the scoped implementation. The original nine audit/quality artifacts remain byte-identical, including the original source-profile compliance matrix; they describe the earlier baseline.

The current official-format result is **165/165 portable skills pass skills-ref 0.1.0**, with **165/165 included by official `to_prompt`**. The reference implementation/specification source examined is pinned at [agentskills/agentskills commit 69ef37e9424c0a7ea9dd2293b559e43ec8176379](https://github.com/agentskills/agentskills/tree/69ef37e9424c0a7ea9dd2293b559e43ec8176379), not an invented specification version or certification. Official [specification](https://agentskills.io/specification) and [reference implementation](https://github.com/agentskills/agentskills/tree/69ef37e9424c0a7ea9dd2293b559e43ec8176379/skills-ref).

Canonical `skills/<domain>/<slug>/SKILL.md` files intentionally retain rich project/vendor frontmatter for existing consumers. **They are not advertised as strict reference-validator-clean.** The additive generated `dist/agent-skills/<slug>/` profile uses permitted frontmatter and string-valued namespaced metadata, puts the complete original metadata in `references/education.json`, and preserves the complete current source body after a deterministic pointer. Each complete folder includes LICENSE and its local resources/policies. This is a generated distribution, not a second edited skill library. No flattening of canonical domains or renaming of skills occurred.

Current source-content SHA256 (source files, included resources and LICENSE): `a2e71fa05cde2ea2ebccd875023ebb0368c11379beb1fe165c1e0debd12938dc`.

Portable receipt SHA256: `633117b63a28539ff02aa73306cf1fa62293edbc7d28f937d9420b9e0dca7c97`; **515 recorded output files**. Repeat export produced identical receipt/output content hashes. This content identity includes working edits and does not pretend HEAD alone identifies them.

Registry SHA256: `4315ba389f09e114f5d3bf38153bab2b6ff2da0fea10a26dcbbd0a5917daa1cc`. MCP source bundle SHA256: `36e9a5b9957d66e1c74a9161565160b2ebb615e13702e8a8b58e6a2dda8c153e`. Registry semantics match regenerated canonical records; the integrated MCP suite verifies complete metadata/prompt bundle parity. There remain 165 skills, 20 domains, 165 MCP prompts, 157 MCP tools and 12 source explicit-only flags.

## Implemented and preserved

| Area | Accepted result | Evidence |
|---|---|---|
| Safe MCP runtime | Nonexecuting YAML-only frontmatter, literal single-pass substitutions, SDK 1.32.1 and explicit 10,000-element validation bound, unsupported OAuth capability removed, prepack build and packaged-CLI smoke | [runtime report](../tasks/safe-mcp-runtime-2026-10-22-report.md), [independent review](../tasks/safe-mcp-runtime-2026-10-22-review.md) |
| Portable distribution/Codex | Deterministic safe export, official gate, fixed marketplace root, 12 matching Codex policies, pinned read-only CI and install/update guide | [profile report](../tasks/portable-standard-profile-2026-10-22-report.md), [review](../tasks/portable-standard-profile-2026-10-22-review.md) |
| Learner workflows | 13 targeted corrections to checking, assistance/fading, examples, prior context, evidence/provenance/privacy and preprint claims | [report](../tasks/learner-workflows-2026-10-22-report.md), [review](../tasks/learner-workflows-2026-10-22-review.md) |
| Wellbeing/inclusion | 13 targeted corrections to contextual support, agency, safeguarding, diagnostic/impact overclaims and examples | [report](../tasks/wellbeing-inclusion-2026-10-22-report.md), [review](../tasks/wellbeing-inclusion-2026-10-22-review.md), [one-sentence repair acceptance](../tasks/wellbeing-coherence-repair-2026-10-22-review.md) |
| Curriculum/evidence | 11 targeted routing, source fidelity, timing/bibliography, scope and workload corrections | [report](../tasks/curriculum-evidence-2026-10-22-report.md), [review](../tasks/curriculum-evidence-2026-10-22-review.md), [bounded repair](../tasks/curriculum-coherence-repair-2026-10-22-report.md), [recheck](../tasks/curriculum-coherence-repair-2026-10-22-review.md) |
| Organization | 8 main guides link complete verbatim worked examples; all 20 advisories have dispositions: 6 edited / 14 retained, plus 2 overlapping long guides edited | [report](../tasks/selective-organization-2026-10-22-report.md), [review](../tasks/selective-organization-2026-10-22-review.md) |
| Existing MCP truncation | LT outer fences and matching-delimiter extraction corrected; full original intended prompt restored, 164 others / all 165 metadata unchanged | [repair report](../tasks/nested-prompt-fence-repair-2026-10-22-report.md), [review](../tasks/nested-prompt-fence-repair-2026-10-22-review.md) |

There are **37 targeted educational revisions**, eight organization decisions implemented (two overlap), hence **43 distinct canonical skill files changed and 122 unchanged**. All 108 initial “keep” sources are byte-identical. IDs, paths, field sets, input/output types, requiredness and defaults remain. Five headers have bounded approved value corrections: two band-input descriptions; spacing citation/count; assessment workload; panel scope description; explain-first citation/endpoint. Other 160 raw headers are unchanged. No new pedagogical skill, output selector, learner-data storage platform, scoring framework or mandatory model benchmark was added.

Organization main-body proxy totals fell 77,434→45,518 (about 41%) across eight guides, before the subsequent two-delimiter markup correction. This is `o200k_base` proxy text length, not measured client context/billing/learning improvement. The organization itself saved zero MCP prompt tokens. A later independently reviewed fix intentionally expands the LT MCP prompt from its truncated 9,498 characters to the full 23,993 characters; preserving the full method takes priority over a length quota. That receipt supersedes only the earlier LT prompt-parity finding. Essential guidance remains inline; optional examples are not automatically served by the hosted MCP adapter.

The [165-row current disposition ledger](agent-skills-build-dispositions-2026-10-22.csv) records baseline/current source hashes, original/current disposition, bounded metadata exceptions, preservation rationale, evidence/review links and limits. The [quality change log](skill-quality-change-log.md) explains how to use it. Historical proposal matrices have not been edited to look like implementation receipts.

## Integrated commands and results

Actual local runtime: Node 22.23.4, npm 10.9.9, tool Python 3.13.2. The existing CI target Node 20 / Python 3.11 was not remotely executed. Commands ran from root unless the table says MCP. Full outputs and artifact/client receipts: [machine-readable results](agent-skills-build-command-results-2026-10-22.json).

| Command | Result |
|---|---|
| `python scripts/generate-registry.py` using the provided validation venv | 165 skills / 20 domains; semantic freshness independently compared |
| MCP `npm run bundle-skills` | 165 bundled |
| MCP `npm run build` |TypeScript/postbuild pass |
| MCP `npm test -- --reporter=dot` |**75 passed**, including packaged stdio CLI, auth/security bounds, parser/substitution/extraction and all 165 bundle parity |
| `python scripts/validate-skills.py` | 165 validated, 0 errors, 1 advisory: LT 517 lines |
| `python scripts/validate-registry.py` | 165 / 20 valid |
| `env -u HOSTED_MCP_BASE_URL npm test -- --reporter=dot` (driver removed that variable) |**21 passed, 1 hosted-only skipped** |
| `python -m unittest discover -s tests -p test_standard_export.py -q` |**15 passed** |
| `python scripts/export-standard-skills.py`, then repeat | 165; deterministic current source/output hashes |
| `python scripts/validate-standard-skills.py` |official reference validate 165/165; to-prompt 165/165 |
| `npm audit --audit-level=high` in root and MCP |both exit 0, 0 reported vulnerabilities |
| Validation venv `python -m pip check` |no broken requirements |
| Protected-source and original-audit hash checks | 108 keep sources unchanged; no unapproved identity/schema/metadata changes ; 9 original audit artifacts unchanged |

The venv used above is `/tmp/education-skills-audit-20261022/venv/bin/python`. System Python originally lacked PyYAML; the final documentation now shows isolated dependency setup. Future contributors install `requirements/standard-validation.txt`, including the completed exact `tzdata==2026.5` transitive pin. Installed-package metadata and dependency checks passed; no environment package installation was needed for that pin.

The initial nested-fence focused suite retained a deliberately stale generated-bundle assertion while sources were under revision. That assertion now passes in the full 75-test integrated suite after regeneration. Two temporary final Codex helper issues (missing disposable CODEX_HOME directory, then a selector counting source and portable copies) were corrected in the helper; they were not repository failures. All temporary client storage was removed on both failed and successful attempts. The packaged smoke may use the npm registry for locked installation; this test is not described as entirely offline.

## Client evidence and limits

| Client/surface | Verified | Not verified |
|---|---|---|
| Codex 0.163.0-alpha.11.1 |Final isolated register/add/list; installed=true/enabled=true; 185 canonical source/resource files byte-equal,165 skills / 20 domains / 12 policies / 8 references; earlier remove/reinstall check passed |Real desktop refresh, automatic model selection, actual explicit/implicit model invocation |
| Claude 2.1.307 |Local plugin-manifest validation passed with advisory warnings; actual current install command guidance inspected |Real user install/session activation or model output; ignored display_name/listing-only warnings do not establish broken installation |
| Hermes v0.18.0 (2026.7.1), source a6b9597d5fb92969d605a858d5f14536e805553a |Final portable copy in temporary profile; listed 165; main and metadata read for 3 selected skills; moved LT example read; network blocked/preprocessing disabled |Hub install/update, automatic selection, model output |
| MCP local | 75 tests; current snapshot/packagedCLI exposes 165 prompts / 157 tools |Deployed hosted service, production endpoints, real OAuth-client connection |
| Other compatible clients |Strict portable format and complete-folder copy contract |Actual installation, resource loading or invocation in every client |

The standard has no universal explicit-only policy. Original flags and Codex sidecars preserve known client intent; generic clients may ignore them. Format validation does not certify pedagogical quality, safeguarding, privacy law compliance, learner benefit or model adherence. Source reviews and fictional ordinary/edge textual walkthroughs support the targeted changes; no real learner data or model trials were used. All 165 were screened but not every research claim received equal-depth verification. Original practitioner frameworks, honest emerging labels, teacher judgment and existing inclusion/exclusion policy are preserved.

## Remaining optional work and release boundary

No unresolved implementation blocker is known in the accepted packets. Optional later work remains: resolve 17 legacy optional chain suggestions / 2 evidence-label conventions with confirmed semantics; broader primary-source review of all 872 recorded entries and evidence-strength thresholds; broader model/client activation evaluation if useful; hosted shared-state/audience/family-revocation redesign only if requirements justify it. These were not prerequisites for the additive format profile and are not silently claimed fixed. Local hosting limits are documented in docs/HOSTED_MCP_ACCESS.md. No live attack or empirical classroom result is claimed.

The official validator is a pinned point-in-time authority; check upstream changes deliberately. No universal “Agent Skills 1.0/v2 certified” badge is warranted. Source schema, plugin, npm package and portable profile versions have separate meanings; no new tag/version/release has been fabricated.

## Rollback and continuity

Keep stable current skill paths/IDs and improve them in place. Original Git HEAD, nine unchanged audit artifacts, per-packet before/after hashes and review receipts preserve prior versions; do not add duplicate active old-skill directories. No new commit exists yet. Before a later authorized commit/release, preserve the reviewed diff and include new references/policies plus canonical edits, registry and MCP source bundle. Generated dist directories remain ignored.

Rollback a pedagogical packet with its source resources and regenerated registry/bundle/profile together, preserving unrelated work and security fixes. Portable distribution can be withdrawn independently while existing rich sources remain available. Reverting content must not restore executable parsing/known vulnerable dependencies. A later hosted release needs separate deployment authority and fresh evidence; no automatic push/build/deploy was run.

## Review and resource-use record

All eight implementation/documentation packets and their independent read-only reviews are closed. Peak active spawned workers: **1** (root plus one agent); total spawned workers: **20** (10 builders and 10 reviewers), with zero inherited-history exceptions or worker children. Six of eight packets passed first review; wellbeing and curriculum each needed one bounded repair/recheck (one sentence, then two input descriptions and one timing sentence). The separately discovered historical nested-fence defect received its own accepted repair, rather than being concealed by prompt parity. Temporary helper setup/selector adjustments are disclosed in the relevant reports. Roles used Sonnet 5.5 builders and Opus reviewers as configured by the tooling; coordinator is Codex. Token/credit telemetry is unavailable. Elapsed from branch creation at 2026-10-22T19:38:23UTC to local closure was approximately 99 minutes, including checks, review and documentation; earlier read-only audit/planning time is excluded.


## Final documentation and closure

The [introduction/contributor report](../tasks/library-introduction-2026-10-22-report.md) and [independent final review](../tasks/library-introduction-2026-10-22-review.md) are ACCEPTED. README now explains how the library uses the Agent Skills format, the strict portable export and its verified result. The developer/contributor/quality guides distinguish project conventions from the open standard, provide reproducible commands and preserve stable paths/version history. Historical audit/spec bodies remain intact behind dated notices. No license terms or package versions were changed.

The final review independently verified 94 local links/anchors, all 186 source/resource/license hashes, all 515 export content hashes, registry/bundle hashes and every current CSV baseline/candidate hash; it also reran the official 165/165 gate and proportional source/registry/library/dependency checks. Final root checks found production hashes unchanged after docs, HEAD unchanged, index unstaged and no credential/tarball filenames among Git-visible files. These filename checks are not represented as a comprehensive secret scan. Original nine audit hashes remain unchanged. All processes started for the local tests exited or were cleaned by their test harnesses; no server was left running by this build.

**Handoff: complete local reviewed build, uncommitted and unreleased.** No user decision is needed to finish this scoped milestone. Future source publication, real-client model trials or hosted release are separate steps; they were not run automatically.
