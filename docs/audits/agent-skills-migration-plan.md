# Education Agent Skills — proposed implementation plan

Audit date: 2026-10-22. Baseline main: `6bbbce418f82e11044009c9f3b7373a354de5bd0`. **Proposal only; nothing below has been implemented.** Read the audit report, evidence and 165-row matrix before starting. This is an independent education project.

## Outcome and protected remainder

Make installation reliable and offer a reference-validator-clean distribution without losing educational schemas, citations, explicit-only behavior, source URLs or MCP/manual use. Preserve `skills/<domain>/<slug>/SKILL.md`, all 165 IDs/names, current education metadata, prompts and intentional typed-edge placeholders. Do not flatten the source tree, create new pedagogical skills, expand jurisdictions, change storage architecture, automatically activate explicit-only workflows, publish packages, or deploy as part of this plan.

Current `AGENTS.md` prohibits removing or renaming original frontmatter fields. The recommended portable-profile route honors it: original files remain canonical and existing readers retain their contracts. Content corrections below are a separate explicitly scoped educational packet; approve that delta before editing educational meaning. A subsequent implementation request should distinguish infrastructure from educational-content scope.

## P0 — Required corrective packets

### Q0. Remove executable frontmatter parsing — 0.5 day; nonbreaking for current valid content

**Files:** `mcp-server/src/skill-loader.ts`; `mcp-server/package.json`; `mcp-server/package-lock.json`; proposed `mcp-server/tests/skill-loader.spec.ts`; `.github/workflows/validate.yml`.

**Current/evidence:** loader line 134 invokes default gray-matter engines. A harmless `---js` marker executes. CI bundle job runs independently of validation. No current skill uses a JS delimiter and no hosted request supplies these files.

**Change/necessity:** accept a plain `---` YAML block only, parse with a nonexecuting safe YAML parser, then retain existing metadata/runtime validation and prompt extraction. Reject language suffixes, executable tags and malformed delimiters before engine selection. Restrict accepted YAML types and fail with the file path. Prefer the existing modern YAML dependency or a deliberate direct dependency; do not downgrade gray-matter to satisfy audit suggestions. Make any validation prerequisite explicit, but do not rely on CI ordering as the execution defense.

**Risks/tests:** parsing semantics may differ for scalars. Deep-equal all 165 parsed metadata records and all extracted prompt bodies against baseline, test plain/flow/block YAML and supported prompt layouts, reject js/javascript/tag payloads without execution, then rebuild bundle and run MCP suite. Intentionally breaking only for executable/untrusted formats outside current library contract.

### C0. Repair Codex marketplace root and install instructions — 2–4 hours; nonbreaking repair

**Files:** `.agents/plugins/marketplace.json:8`; `README.md:47–72`; `docs/CODEX.md:20–58`; `tests/skills-library.spec.ts`.

**Current/evidence:** `source.path="./../.."`; current upstream Codex resolves from marketplace root and rejects parent components. Installed CLI lists no education plugin. Docs register the marketplace and restart without an explicit plugin add.

**Change/necessity:** root source path `./`; document registration followed by `codex plugin add education-agent-skills@education-agent-skills` and enabling/new-session behavior for tested versions. Update manifest-root prose to the existing array of domain directories. Keep individual-copy fallback.

**Risks/tests:** old clients may have different root interpretation; record supported versions. Use isolated temporary config/storage or a reviewed CLI/API harness, never the maintainer's real plugin settings, to list/install/discover all 165. Verify one explicit skill and one implicit discovery case; model trials only when their cost/use is authorized. A simple path-exists assertion is insufficient. Preserve Claude manifest layout and all source paths.

### Q1. Repair dependency gate and bound SDK validation — 0.5–1 day; protocol-compatible intended

**Files:** `mcp-server/package.json`, `mcp-server/package-lock.json`, `mcp-server/src/server.ts:22–49`, `mcp-server/src/request-body.ts`, `mcp-server/tests/mcp-server.spec.ts`, `mcp-server/tests/http-auth.spec.ts`, `.github/workflows/validate.yml`.

**Current/evidence:** lockfile SDK 1.30.0, 10 affected package records; high-threshold audit fails. SDK validation-memory advisory is relevant behind bearer auth; arrays currently have no element cap. No exhaustion under the app's 1 MiB cap was demonstrated.

**Change/necessity:** compatible SDK >=1.32.0, explicitly configure `maxToolInputElements` just above a justified maximum educational input; retain byte limits. Refresh compatible transitives including proxy-addr >=2.0.8 and fast-uri >=3.1.8 if retained. Re-evaluate advisories at implementation time. Do not use `npm audit fix --force` blindly.

**Risks/tests:** too-small caps reject legitimate curricula. Test ordinary largest fixtures and a safely bounded over-limit array/object, 413 byte behavior, unauthorized fast failure, existing 157 tools/165 prompts, strict scalar schemas and all auth tests. No memory-exhaustion load attack needed. `npm audit --audit-level=high` must pass or have individually justified, reviewed exceptions. Dependency lock changes may affect supported Node versions; CI uses Node20, local audit used Node22.

### S0. Correct the compliance contract — 1–2 hours; documentation-only

**Files:** `README.md`, `docs/ARCHITECTURE.md:86–121`, `docs/AGENT_SKILLS.md`, `CHANGELOG.md`, `CONTRIBUTING.md`, `scripts/validate-skills.py` docstring/messages; archive notices in `AUDIT.md` and `docs/AGENT_SKILLS_V2_SPEC.md` rather than rewriting historical conclusions.

**Current/evidence:** local “v2 standard”/250-character/vendor controls are conflated with open-format requirements; official validator passes 0/165 while required names/descriptions pass165.

**Change/necessity:** describe canonical files as vendor-extended Agent Skills; identify project policy vs open specification and link exact tested authority. Do not claim strict validation until the chosen profile passes. State reference parser's legal-YAML subset limitation, not “all YAML is invalid.” Preserve 250 chars as a local design choice if useful.

**Risks/tests:** no runtime risk. Link/path checks and consistency review; no new semantic-version claims or certification badge without evidence.

## P1 — High-value interoperability and focused correctness

### S1. Add a deterministic portable profile — 1–1.5 days; additive/nonbreaking

**Files:** proposed `scripts/export-standard-skills.py`; proposed `tests/standard-export.spec.ts` (or equivalent Python tests); `.github/workflows/validate.yml`; `CONTRIBUTING.md`; `README.md`; `.gitignore`. Output is a generated, uncommitted distribution under `dist/agent-skills/<slug>/`, not a second edited source tree.

**Current/evidence:** all165 fail official allowlist when parsed;160 fail its strictyaml flow-syntax parser first. Rich nested metadata is needed by existing consumers. The open spec's metadata map accepts string values, so merely nesting current lists/objects there is insufficient.

**Change/necessity:** export required `name`/`description`, optional `license: CC-BY-SA-4.0`, and string-valued namespaced metadata (source ID/revision and resource path). Emit complete original rich metadata as `references/education.json`, a local LICENSE notice and a deterministic one-line instruction pointing to that metadata. Preserve the original body unchanged after that added pointer. Serialize frontmatter in block style compatible with the pinned official tool. Keep Claude's source profile and MCP loader unchanged initially. Offer the portable bundle explicitly; do not repoint existing adapters until parity is proven. Include generated Codex sidecars where applicable. No independently maintained copies, symlink dependencies, or hand-edited export.

**Risks/tests:** generic clients may ignore metadata, so the body pointer must make essential schemas accessible. Verify165 unique leaf dirs; exact names/descriptions/IDs; original body preserved byte-for-byte as a defined suffix; every original schema/citation/flag preserved in JSON; paths remain inside bundle; LICENSE exists; official `validate` passes165/165; official `to-prompt` covers165; repeat export produces identical hashes. Test selected single-skill copying outside repository. Keep official validator pinned; run project validation separately. No infrastructure/content rewrite is a prerequisite. Portable-profile versioning is independent from source schema versioning and must be documented.

### C1. Match explicit-only behavior in Codex — 2–4 hours; deliberate invocation repair

**Files:** proposed `agents/openai.yaml` in these existing skill directories:

- `skills/ai-learning-science/cognitive-tutoring-architecture-designer/`
- `skills/ai-learning-science/individual-spacing-algorithm-explainer/`
- `skills/curriculum-assessment/formative-assessment-technique-selector/`
- `skills/original-frameworks/coherent-rubric-logic-builder/`
- `skills/original-frameworks/developmental-band-system-designer/`
- `skills/original-frameworks/developmental-progression-synthesis/`
- `skills/original-frameworks/dispositional-knowledge-assessment-designer/`
- `skills/original-frameworks/learning-target-authoring-guide/`
- `skills/original-frameworks/seeds-regenerative-inquiry-cycle/`
- `skills/original-frameworks/self-determined-project-design-protocol/`
- `skills/original-frameworks/single-point-rubric-designer/`
- `skills/professional-learning/panel-review/`

Also `tests/skills-library.spec.ts`, `docs/CODEX.md`, exporter.

**Current/evidence:** Claude flag exists, Codex sidecars do not. Upstream parser reads policy from agents/openai.yaml and ignores that frontmatter flag.

**Change:** minimal `policy: {allow_implicit_invocation: false}` encoded as block YAML. Do not add unnecessary tool dependencies or UI branding to every skill.

**Risk/tests:** reduces Codex automatic activation for these12, matching stated intent; explicit invocation stays available. Assert source-flag/sidecar equivalence12/12, absent false policies on remaining153, current Codex metadata parse/discovery and explicit availability. Standard validation does not certify invocation policy.

### Q2/C3. Fix input preservation and capability truth — 2–4 hours; nonbreaking repair

**Files:** `mcp-server/src/tool-handler.ts:5–16`, `mcp-server/tests/mcp-server.spec.ts`; `mcp-server/src/oauth.ts:110–122`, `mcp-server/tests/http-auth.spec.ts`, `mcp-server/tests/oauth-handlers.spec.ts`, `docs/HOSTED_MCP_ACCESS.md`.

**Current/evidence:** `$&` replacement is interpreted; OAuth advertises unsupported URL-client metadata docs.

**Change:** callback-based substitution with escaped keys and a single pass matching only original template tokens, so inserted `{{text}}` is not reprocessed. Remove unsupported metadata capability rather than implementing a new client-registration system in this packet. Explain fixed supported client scope.

**Risk/tests:** dollar symbols, literal braces, optional missing params, arrays and strings must survive; keep prompt/user-input separation and existing templates. Assert capability absent/false, approved Claude flow unchanged, unknown-client rejection retained. No OAuth trust-boundary broadening.

### E1–E6/E8/E9. Bounded educational repair — 1–2 days plus specialist review; content changes need review

**Files/current behavior/evidence/proposal:**

| File under skills/ (ends /SKILL.md) | Evidence/problem | Proposed narrow correction |
|---|---|---|
| memory-learning-science/spaced-practice-scheduler | :18,78,113,206; wrong study count and generalized empirical optimum | Correct317 experiments/184 articles; mark timetable as heuristic; qualify forgetting percentage |
| student-learning/explain-first-interrogator | :23,67; overstates recent preprint | Cite authors/title/version, actual explanation-quality endpoint and uncertainty |
| student-learning/fading-manager and student-learning/retrieve-first-gate | :111–117/:195–203 vs retrieve:148–155 | Consistent state vocabulary, threshold examples and teacher override; retain heuristic label |
| curriculum-alignment/developmental-band-translator | :126 conflicts :148–152 and override | Explicit precedence, conservative no-age handling and source-preserving review flags |
| curriculum-alignment/kud-chart-author | :129,141 recommends metadata translator for raw decomposition | Name the actual decomposition requirement and only then tagging |
| curriculum-assessment/differentiation-adapter | :78 calls 2018 current | Identify edition and acknowledge3.0; no wholesale rewrite |
| wellbeing-motivation-agency/trauma-informed-practice-designer | :284–293 groups urgent disclosure with routine referral | Specialist-reviewed, jurisdiction-neutral local safeguarding/imminent-danger routing; preserve existing no-therapy boundary |
| student-learning/*/SKILL.md (all13; matrix lists each) | no standalone privacy contract; weekly:237 suggests storage | Concise minimisation, authorized storage/retention and human-help boundaries; no backend introduced |
| student-learning/srl-session-wrapper | :33–35 input not inserted | Conditional mid/closing goal check and actual prompt inclusion |
| student-learning/teach-back-evaluator | :33–35 unused prior context | Use the supplied input deliberately, preserving schema for compatibility |
| student-learning/transfer-bridge | :177–236 example changes original principle | Correct analogy and success check; do not accept unrelated arithmetic as price-formation transfer |

**Why:** remove contradictory decisions and inaccurate/safety-incomplete guidance without changing whole skill designs.

**Risks/tests:** alters intended output in flagged cases. Before/after human content review; a few fictional fixtures at fading boundaries, age/no-age/override routing, isolated mid-session goal, original transfer target and urgent-disclosure routing; ensure ordinary task output and citations remain intact. Do not present a passing text test as clinical/educational validation. Regenerate `registry.json` and `mcp-server/src/skills.json` when skill text changes, then run source sync/build/tests. Never deploy automatically.

## P2 — Optional improvements, each independently reversible

1. **Resource splitting (0.5–1 day only after measuring context cost).** Exact initial candidates: the four >500-line files listed in report, with proposed skill-local `references/` files. Keep mandatory instructions/safeguards in main body. MCP currently extracts only Prompt/System Prompt, so moving prompt material needs intentional loader/package resource support and full prompt parity tests. Do not split all165 by template. Breaking risk if omitted resources; defer unless measured benefit.
2. **Chain integrity and evidence labels (2–4 hours).** Edit only the13 skill paths and two rating paths listed in evidence appendix; add checks in `scripts/validate-skills.py` and `tests/skills-library.spec.ts`. Map aliases only with confirmed semantic matches or label explicitly external. Document all accepted label meanings in README/docs/EVIDENCE.md rather than silently changing meanings. Rebuild generated views. Suggestions are not required dependencies; warn rather than fail for declared external targets.
3. **Release/CI checks (0.5 day).** `mcp-server/package.json` proposed prepack build, `mcp-server/tests/` packed-CLI smoke, `mcp-server/tsconfig.json`/proposed API checking config, `.github/workflows/validate.yml` minimum permissions/pinned actions/Python tool versions, `CONTRIBUTING.md:84–90` remove instruction to commit ignored dist. Source tests pass after clean build. Test npm tarball in temp storage without publishing; verify no environment secrets or source-path assumptions. Local cache output need not become tracked source.
4. **Research index/claims (0.5–1 day plus later research work).** `docs/EVIDENCE.md:39` correct Woloshyn citation; mark canon's earlier-domain coverage. Add stable identifiers/review dates, not copies of paywalled text. In `professional-learning/panel-review/SKILL.md:3`, surface wellbeing/SEL scope. In `original-frameworks/developmental-band-system-designer/SKILL.md:85`, replace “validates” with supporting rationale. Review unsubstantiated Strong thresholds in `eal-language-development/academic-language-sentence-frame-generator`, `curriculum-assessment/backwards-design-unit-planner`, `global-cross-cultural-pedagogies/cross-cultural-task-validity-checker`; no automatic downgrades. Targeted citations reviewed, existing advice preserved.
5. **Licensing/version clarity (1–2 hours).** `LICENSE`, `mcp-server/LICENSE`, package.json files, manifests, `CHANGELOG.md`, docs. Explain content/software licence intent and distinct plugin/schema/server/package versions. Do not silently relicense or force all surfaces to one number. Human licence decision may be required.
6. **Hosted incident limits (documentation 1 hour; shared state separately estimated).** `docs/HOSTED_MCP_ACCESS.md`, `docs/PRIVACY.md`, `mcp-server/src/oauth.ts`, `src/http-auth.ts`. Document individual-token vs family revocation and instance-local replay/rate limits. Only design persistent family/resource/audience controls if broader hosted requirements justify them; preserve existing clients and require separate security review.

## No change

Preserve source domains/paths, names/IDs, named research and honest limitations, teacher judgment, composite emerging labels, standalone prompts, existing typed input schemas, registry and MCP snapshot, explicit-only flags, local/manual/offline options and optional hosted authentication. Retain placeholder typed chain edges until a real mapping design exists. Do not build another orchestrator, content engine, registry service, universal installer or storage platform for this audit.

## Sequence and acceptance

1. Rebind main and preserve any new local work; compare audit revision. Capture source/body/schema hashes and protocol inventory. Do not pull/reset automatically.
2. Implement Q0/Q1 and test parser/security bounds with synthetic safe inputs. Review as one bounded infrastructure packet.
3. Fix C0, C1 and C2 setup/update instructions; verify actual isolated discovery, explicit-only controls and selected copies. Keep current domain manifest arrays.
4. Correct S0 contract and add S1 exporter with separate project/reference validation. Require165 strict-profile passes and metadata/body/licence round-trip checks before advertising that profile. Existing source may intentionally continue to fail strict validator while extended source remains supported; label surfaces precisely.
5. Repair Q2/C3. Run full auth/protocol checks after changes; no new OAuth features in this sequence.
6. Review educational packet; implement only reviewed narrow deltas, rebuild generated views and test relevant fictional cases.
7. Apply independently useful P2 items, or defer explicitly. Record versions, commands, evidence and remaining limits. No package publish, GitHub push or deployment is implied by test success.

Required final checks: project Python validators, root tests, regenerated-index equality, MCP clean build and full tests, packed CLI smoke, separate official-profile validation165/165, licence/resource checks, isolated Claude/Codex discovery and controls, selected Hermes install if within authorized test scope, dependency audit. Tests should retain current165 prompts/157 tools/12 explicit-only behavior unless a separately approved content change intentionally alters counts.

## Rollback

Use small independent commits in a subsequent authorized implementation session, with pre-change source/index hashes and the previous built artifact recorded. Revert a failed packet and its regenerated views together; never revert unrelated work. Portable exporter is additive: disable/remove its distribution reference and retain original paths. Sidecars can be removed without renaming skills. Restore previous package/lockfile pair only as a temporary containment choice; do not silently restore executable parsing or known dependency exposure as a release fix. Keep security repairs separate from content edits so a pedagogical rollback does not undo protections. Installed test profiles live in disposable storage and can be removed without touching real settings. Hosted rollback/release requires its own explicit authorization and current deployment evidence; none is authorized by this plan.
