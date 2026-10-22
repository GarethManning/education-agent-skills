# Agent Skills standard and interoperability audit

Date: 2026-10-22. Repository: [GarethManning/education-agent-skills](https://github.com/GarethManning/education-agent-skills), branch `main`, revision `6bbbce418f82e11044009c9f3b7373a354de5bd0`. Local checkout matched remote `main` and was clean at intake. This is an independent educational open-source project; no commercial affiliation is inferred.

## 1. Executive assessment

**Keep the architecture; repair the portability contract and a few concrete defects.** This is already an Agent Skills-shaped library: 165 individually named `SKILL.md` directories, coherent teacher/student workflows, useful education schemas, metadata-first discovery, and a working MCP adapter. It does not need to be converted from an unrelated prompt format or flattened into a new source tree.

**Official reference validation: 0/165 pass. Project validation: 165/165 pass. Isolated required name/description/directory checks: 165/165 pass.** All files use valid YAML under the project parser. The official demonstration validator rejects flow-style sequences in 160; the other five reach its field allowlist and fail. Re-serializing frontmatter as block YAML in disposable test directories makes all 165 reach—and fail—that allowlist. This is a reference-validation/extension mismatch, not evidence that 165 skills fail in every client. The prose specification does not explicitly prescribe unknown-key runtime behavior, and its YAML description does not forbid YAML flow syntax. Report these distinctions when claiming compliance.

The highest-value findings are: the Codex marketplace source escapes its root and is rejected by the current resolver; Codex invocation policy is absent for 12 deliberately explicit-only skills; default frontmatter parsing can execute JavaScript from a modified skill; the MCP lockfile fails today's high-severity dependency gate; and targeted educational evidence/safety inconsistencies merit repair. The fresh MCP source build passes all 42 tests. The registry and MCP bundle both exactly match canonical skills.

Recommend formal alignment through a small, deterministic portable distribution profile, while retaining current source paths and vendor adapters. Do not erase education metadata just to obtain a green validator. Estimated core repair plus portable distribution: **3–5 engineer-days**, including verification; targeted educational review adds **1–2 days** and optional refinements **1–2 days**. These are work estimates, not a deployment request.

## 2. Repository architecture overview

There are 241 tracked files, including 165 skills in 20 domains. Each skill directory contains only `SKILL.md`; there are no bundled skill scripts, references, or assets. All actual skill files found on disk outside dependency/Git directories match tracked files and registry entries; no unregistered skill was found. Ignored macOS metadata and local build output are not source distribution defects.

```text
skills/<domain>/<slug>/SKILL.md          canonical educational content and typed metadata
scripts/generate-registry.py            tracked-source metadata -> registry.json
registry.json                          discovery/filtering/chaining index
mcp-server/scripts/bundle-skills.ts     canonical content -> src/skills.json snapshot
mcp-server/src/                         loader, runtime validation, stdio adapter, discovery
mcp-server/api/                         hosted MCP, OAuth, access email handlers
.claude-plugin/                        Claude plugin and marketplace manifests
.codex-plugin/plugin.json              Codex plugin: same 20 domain roots
.agents/plugins/marketplace.json        Codex marketplace helper, not .agents/skills
.github/workflows/validate.yml          source/index checks, tests, build, npm audits
```

The two manifests enumerate the same 20 domain roots, each exposing immediate skill directories: filesystem expansion yields all 165. Domain grouping itself violates no open-standard rule. `registry.json` and `src/skills.json` are generated views with enforced sync, not competing manually edited sources of truth. Preserve them.

MCP exposes 165 prompts, 153 skill tools and four discovery tools (157 total). Explicit-only skills remain prompts and discovery results but are omitted from model-invocable tools. Tools return **assembled instructions**, not model-generated educational artifacts; output-schema descriptions are not enforced educational-output validation. No MCP resources are registered. None is required by Agent Skills.

## 3. Standards compliance findings

### Authority and version

Examined [official overview](https://agentskills.io), [specification](https://agentskills.io/specification), [upstream repository](https://github.com/agentskills/agentskills), and [skills-ref](https://github.com/agentskills/agentskills/tree/69ef37e9424c0a7ea9dd2293b559e43ec8176379/skills-ref). Pinned upstream revision: **`69ef37e9424c0a7ea9dd2293b559e43ec8176379`**; reference package version **0.1.0**. The examined specification has no separately declared normative semantic version; the library's `agent-skills-1.0` marker and historical “v2” migration label are project labels, not evidence of certification. The current web specification and pinned file were checked together.

| Item | Authority/strength | Audit result |
|---|---|---|
| Skill directory containing YAML-frontmatter `SKILL.md` and Markdown body | Required format | All 165 have it |
| `name` 1–64, lower-case alphanumeric/hyphens, no edge/consecutive hyphens, matches parent directory | Required | All 165 pass; all names unique |
| Non-empty `description` ≤1024 characters | Required | All pass; actual lengths 132–249 |
| `license`, `compatibility`, `metadata`, `allowed-tools` | Optional | Absence is not failure; `allowed-tools` is experimental |
| `metadata` maps strings to strings | Defined extension mechanism | Do not relocate nested schemas as native lists/maps under metadata; encode strings or use sidecar resources |
| Unknown frontmatter keys | Reference validator permits only six defined fields | All 165 fail its allowlist when parseable; many permissive clients ignore them |
| YAML flow arrays | Legal YAML; official parser uses strictyaml subset | 160 reference-parser failures; do not call these universally invalid YAML |
| Under 500 lines; body below ~5000 tokens | Recommendations | Four line-count warnings; 16 bodies exceed 4000 words and deserve focused size review; no exact tokenizer count claimed |
| `scripts/`, `references/`, `assets/` and relative resource paths | Optional conventions | None currently bundled; no Markdown file links to break |
| `.agents/skills` discovery location | Widely adopted client convention | Not a mandated repository source layout |
| Registry, plugin manifests, automatic invocation, MCP, semver/distribution channel | Client/project mechanisms | Useful extensions, not universal format requirements |

**S1 — Current conformance claim is too broad.** `README.md:3`, `docs/ARCHITECTURE.md:88–101`, `CHANGELOG.md:15–23`, and historical `AUDIT.md` mix open-format rules with vendor/project behavior. Project validators enforce a 250-character limit and require vendor controls; those are local policy, not the official schema. Qualification and separate strict/project gates are required before advertising successful reference validation.

A conservative route is a generated portable archive/profile: keep required fields, optional licence, and string-valued namespaced metadata; preserve full Markdown body byte-for-byte and all rich education metadata in an adjacent generated JSON file. Preserve original source/adapters unchanged. Include the full licensing notice in each distributable skill. Existing Claude explicit-only flags stay in the Claude source/profile; Codex receives its own policy sidecars. An in-place metadata migration is possible but is more breaking for direct YAML consumers and is not recommended as the first step.

## 4. Complete skill inventory summary

The companion CSV contains exactly one row per actual skill, including complete official validator diagnostics, separate advisories, portability and recommended action. `spec_valid=false` means **fails the pinned official validator**, not “educationally unusable.” All 165 require a packaging/profile change for a clean strict-validation result; none needs a name or directory repair.

| Domain | Skills | Official passes |
|---|---:|---:|
| ai-learning-science | 14 | 0 |
| ai-literacy | 7 | 0 |
| curriculum-alignment | 4 | 0 |
| curriculum-assessment | 13 | 0 |
| eal-language-development | 5 | 0 |
| environmental-experiential-learning | 6 | 0 |
| explicit-instruction | 5 | 0 |
| global-cross-cultural-pedagogies | 9 | 0 |
| historical-thinking | 10 | 0 |
| inclusive-design | 3 | 0 |
| literacy-critical-thinking | 7 | 0 |
| memory-learning-science | 8 | 0 |
| montessori-alternative-approaches | 4 | 0 |
| original-frameworks | 17 | 0 |
| professional-learning | 10 | 0 |
| questioning-discussion | 5 | 0 |
| self-regulated-learning | 5 | 0 |
| student-learning | 13 | 0 |
| systems-thinking | 8 | 0 |
| wellbeing-motivation-agency | 12 | 0 |
| **Total** | **165** | **0** |

All bodies and frontmatter were programmatically inspected; all descriptions and all domain structures were reviewed, with deeper human-style reading of representative and flagged workflows. All 165 have limitations sections and named evidence entries. Labels: 73 strong, 69 moderate, 21 emerging, one low-moderate, one medium. This is not independent validation of every research claim.

Four files exceed 500 physical lines: `curriculum-assessment/scope-and-sequence-designer` (594), `original-frameworks/dispositional-knowledge-assessment-designer` (641), `original-frameworks/learning-target-authoring-guide` (775), `professional-learning/panel-review` (624). Paths are under `skills/` and end `/SKILL.md`. Project validator reports an extra line for three files because it counts newline delimiters plus one; CSV uses physical `splitlines()` counts.

Thirteen skills have **17 unresolved chain references representing 10 distinct identifiers**. These are optional composition hints, not required imported files, so individual skill execution is not proven broken. Resolve aliases or label external/unavailable targets; do not invent missing skills. Detailed rows appear in the CSV and evidence file.

## 5. Interoperability findings

| Environment | Supported/discovery evidence | Activation/resources/dependencies | Update status |
|---|---|---|---|
| Claude Code 2.1.307 | Native `plugin validate` succeeds with warnings; domain roots enumerate 165 | Runtime activation not model-tested. `display_name` is ignored; root CLAUDE.md is not plugin context. No local resource imports | Plugin update mechanism exists; no real install/update performed |
| Codex CLI 0.163.0-alpha.11.1 | `plugin list --available` yields empty education marketplace; source resolver rejects `./../..` | Required metadata is parser-compatible by source inspection; 12 explicit-only policies absent. No model activation tested | Docs add marketplace but omit actual plugin installation; copied skills need recopy |
| Hermes installed CLI | Read-only `skills inspect` of documented full identifier successfully fetches name, description, metadata and SKILL preview | Actual install/activation untested. Preview routed via skills.sh, so direct tap freshness not independently established | Check/update commands exist; no tap mutation or update executed |
| MCP stdio | Fresh build passes 42 tests; compiled CLI handshake returns 157 tools/165 prompts and nonempty selected prompt | SDK protocol activation/assembly verified; educational output generation not tested | Bundle rebuild is necessary; CI sync is effective |
| Hosted Claude.ai/Desktop MCP | Auth/OAuth handler tests pass with fake requests/mocked email | Deployed config, real OAuth and hosted behavior untested | No live call, email, build or deployment performed |
| Other Agent Skills clients | Standard-shaped text skills and optional portable profile provide plausible compatibility | Documentation-based expectation only; client-specific parsing/trust policies vary | No blanket compatibility certification |

**C0 — Codex marketplace source path:** `.agents/plugins/marketplace.json:8` says `./../..`. Current OpenAI resolver resolves sources from marketplace root and rejects parent components. It expects `./` for this repository-root plugin. Source proof is pinned in evidence. The installed CLI returns no education plugin; that result supports but alone does not establish the cause. Fix the JSON, add a real resolver/isolated discovery check, and document `codex plugin add education-agent-skills@education-agent-skills` after marketplace registration. Do not flatten the skills to repair this unrelated error.

**C1 — Invocation semantics differ:** Twelve skills carry `disable-model-invocation:true`; no `agents/openai.yaml` exists. Current Codex reads `policy.allow_implicit_invocation` there; its frontmatter parser does not map Claude's flag. Add sidecars only for those 12. The format standard itself has no universal explicit-only enforcement. Compatibility declarations describe environment requirements; they do not implement access control.

**C2 — Install documentation:** replace the unverified raw-URL Claude install example with a current documented marketplace install form; the native validator suggests `/plugin install education-agent-skills --marketplace GarethManning/education-agent-skills`. Fix stale `./skills/` and root plugin.json prose. Use the current shared `~/.agents/skills` convention in Codex docs while acknowledging tested legacy directories where applicable; do not claim existing `~/.codex/skills` users are necessarily broken. Restart may help, but add/install and discovery must first succeed. Provide selected-skill copying with overwrite caution and explicit update/re-copy instructions.

**C3 — OAuth capability advertisement:** server claims client-ID metadata documents but accepts one fixed client ID and never resolves such documents. Remove that advertisement unless implemented. Resource/audience binding and durable token-family revocation are separate scoped follow-up design questions; do not extend OAuth merely for format conformity.

## 6. Security and supply-chain findings

**Q0 — Executable frontmatter (reproduced; medium exposure, required repair).** Default `gray-matter` at `mcp-server/src/skill-loader.ts:134` enables JavaScript frontmatter. A harmless in-memory probe executed its marker. A skill contributor/local file editor can introduce code that runs during loading/bundling, before educational validation. CI's separate bundle job is not dependent on source validation. This is not remote request code execution, and no malicious current skill was found. Require plain delimiters and a YAML-only safe parser; disabling only the default language is insufficient because the document selects an engine.

**Q1 — Dependencies (verified audit failure; practical risk requires triage).** Root npm audit: zero. MCP: 10 affected packages, one critical/two high/seven moderate. Today's `npm audit --audit-level=high` CI condition would fail. SDK 1.30.0 is affected by [validation memory exhaustion](https://github.com/advisories/GHSA-46jr-4wx8-v453). HTTP authentication runs first and the app caps bytes at 1 MiB, but array schemas lack element limits. A crash under this cap was not tested. Upgrade SDK to ≥1.32.0 **and opt into `maxToolInputElements`**; upgrade alone leaves it disabled. Refresh compatible transitive dependencies. The [critical proxy-addr finding](https://github.com/advisories/GHSA-jqcg-44mw-7w3h) requires a trust-proxy configuration/use absent here; do not describe it as a proven anonymous bypass. Other client-only/task/serializer advisories have no demonstrated active application path. Do not blindly accept npm's gray-matter downgrade suggestion.

**Q2 — Prompt replacement corrupts literal input (reproduced; low).** `src/tool-handler.ts:12` uses user content as a JS replacement string. `literal-$&` becomes `literal-[not provided]` in template text; summary remains correct. Use a callback, escape schema keys, and ensure later placeholder removal cannot alter inserted content. Source documents/student work must remain data, not higher-priority instructions; prompt delimiting and malicious-document cases are appropriate lightweight tests, not a claim of complete injection prevention.

**Q3 — Operational boundaries (observed/documented).** Token revocation targets individual credentials, not descendant OAuth access/refresh credentials. Replay/abuse counters are instance-local and honestly documented. Clarify incident procedures; add shared state only if the public hosted service needs stronger guarantees. Keep configured canonical origin, exact redirects, S256, encrypted short-lived credentials, generic provider errors, header-only bearer authentication, body bounds, no-store and mocked tests.

**Q4 — Release/CI hygiene (advisory).** Existing local ignored dist was stale and initially failed three tests; clean source build passes all 42, so this is not a main/live regression. Add prepack freshness and packed-CLI smoke checks. CI has no deployment workflow; preserve that boundary. Pin action revisions/dependency tooling and minimal permissions; typecheck `api/` as well as `src/`. No credentials were printed. Full history/secret scanning, GitHub permission configuration and production configuration were outside verified scope.

**Licensing:** source education content and docs carry CC-BY-SA-4.0; attribution notices and original/practitioner labels are useful. Standalone copied skill folders omit the root licence, so portable packages should carry it. Root licence text specifically names education/docs/examples; clarify the intended software licence for scripts/MCP rather than silently relicensing anything. Referencing named research is not evidence of redistribution rights for third-party full texts. No bundled research PDFs were found.

## 7. Educational quality observations

Preserve task/audience differentiation, research names, examples, quality checks, educator review and professional boundaries. The README correctly distinguishes research-informed prompts from empirically validated AI interventions. Original and composite pathways include limitations; do not delete these to simplify metadata.

Targeted findings (separate from format compliance):

- **E1/E2 — Evidence precision:** spacing skill misstates Cepeda's study count and presents exact expanding schedules/forgetting percentages too generally. Explain-first overstates a recent study as durable transfer improvement. Correct the narrow claim and label operational schedules as heuristics; retain the educational strategies.
- **E3 — Reference freshness:** differentiation-adapter calls CAST 2018 the most current edition, although CAST 3.0 appeared in 2024. Name the edition actually used; a wholesale UDL rewrite is not justified.
- **E4 — Internal consistency:** fading-manager's example advances after two sessions with hints 1–2, contrary to its three-session/hints-0–1 criterion. It also expects `strong` where retrieve-first emits `accurate`. Add explicit mappings and boundary examples; preserve teacher judgment and the existing heuristic limitation.
- **E5/E6 — Workflow contracts:** developmental-band-translator stops on absent age hints before its override/flat-framework branch can apply. KUD author suggests it for raw-document decomposition although it requires already decomposed JSON. Resolve precedence and routing; an external harness is an input contract, not an uninstalled software dependency in every skill.
- **E8/E9 — Safeguarding/privacy:** trauma skill groups abuse/self-harm/suicidal disclosure under counsellor/SENCO referral without an explicit urgent safeguarding branch. Have an appropriate specialist review this bounded gap. Student-facing skills do not give standalone data-minimisation/consent/storage boundaries; weekly review mentions persistent services. They perform no storage/network operation themselves. Add concise host/educator responsibility and human-help boundaries, without inventing a new retention service or collecting identifiers.
- **E7 — Review scoring:** panel-review's numerical gates are project heuristics; no empirical calibration was established. Keep useful independent perspectives; avoid implying that a mean score proves educational validity.

Maintain stable author/year/title/DOI-or-URL identifiers and reviewed dates in a small source index. Evidence labels `medium` and `low-moderate` should be documented or mapped deliberately, not blindly normalised, since filtering currently accepts them. No recommendation here requires rewriting all prompts or reviewing every paper as a condition of infrastructure repair.

Further bounded advisories: SRL wrapper does not insert its conditionally required opening goal for isolated mid/closing calls; teach-back accepts unused prior-understanding input; transfer-bridge's example tests allocation arithmetic rather than its stated price-formation principle; band-system-designer overstates supporting research as validation; panel-review discovery omits wellbeing/SEL scope. Three sampled Strong ratings do not show the README's multiple-review threshold in their cited record. `docs/EVIDENCE.md:39` has incorrect Woloshyn bibliographic details. These are itemized in the matrix, evidence and plan. No claim is made that all 872 research entries were independently verified.

## 8. Prioritized recommendations

**P0 — Required corrective work:** Q0 YAML-only parsing; C0 marketplace path/install defect; Q1 high-severity dependency-gate repair with explicit SDK bounds; S1 qualify unsupported strict-compliance claims immediately. This is a repair priority, not a statement that all are critical exploits.

**P1 — High value:** S1 deterministic standard profile and separate official CI gate; C1 twelve Codex policy sidecars; Q2 literal replacement; C2 tested setup/update instructions; C3 truthful OAuth metadata; E4–E6 workflow consistency; E8/E9 focused safeguarding/privacy; E1–E3 evidence corrections. Preserve all current identifiers and adapters.

**P2 — Optional:** repair optional chain aliases; split only measured oversized bodies into included resources with MCP parity tests; packed release verification and clean-build safeguards; pin CI tooling/minimal permissions; citation index and evidence-label documentation; clarify software licence/version surfaces. Do not populate `chain_edges` by guessing.

**No change:** domain directories; existing skill names; source registry plus generated MCP bundle; explicit-only selection policy; teacher-first/manual/offline use; student/educator separation; evidence and uncertainty sections; optional hosted service with local alternatives; existing auth safeguards; untyped chains and intentional typed-edge placeholders until a real consumer needs them.

## 9. Migration plan

The companion implementation plan gives exact file sets, acceptance checks, risk, effort, sequence and rollback. Sequence: repair parser/dependencies and installation; capture protocol/content baseline; add separate portable exporter and vendor-policy checks; correct focused education issues; improve docs/release checks. Keep migration opt-in until parity checks pass. No migration, commit, push, installed-plugin change or deployment was performed during this audit.

## 10. Open questions and limitations

- Should strict validation apply to original vendor-extended source, or to an explicitly named portable release profile? Recommend the latter first; the report does not claim that exported artifacts already exist.
- Is an npm release actually maintained? Published package contents and registry release history were not verified.
- Which hosted clients beyond the Claude connector are intended? Capability advertisements should match that deliberate scope.
- What software licence is intended for infrastructure, and what jurisdiction/school safeguarding policy should educators apply? Do not infer either from the format standard.
- Exhaustive file inventory/validation and static content checks are complete. Research verification is sampled, not a paper-by-paper systematic review. Trigger quality was inspected, not measured through model evals. No live Claude/Codex model activation, GUI install, Windows/Linux install, hosted OAuth, destructive load test or live email was run. Existing dependencies were reused and matched relevant locked versions; a fresh `npm ci` reproducibility test was not performed.
- Current main was verified at intake. Future commits/spec/advisories can change conclusions. The 2026-05 AUDIT.md was read as historical evidence and not adopted as authority; its flattening/unknown-field assumptions are not carried forward.

Coordination: active-worker peak 2 (plus primary auditor), two spawned independent inspectors, zero inherited-history exceptions; security findings integrated before educational synthesis. No builder/implementation was delegated. First fresh-source acceptance: root 21 pass/1 intentionally skipped; MCP 42 pass. Rework: none in repository; stale-local-build diagnosis and one corrected scratch working-directory error. Elapsed audit time at report assembly: approximately 16 minutes since evidence workspace creation. Model mix: primary configured Codex model and two inherited-default inspectors, no explicit model override. Token/credit telemetry unavailable; no billed-usage estimate is asserted.
