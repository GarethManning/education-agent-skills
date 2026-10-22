# Agent Skills audit — evidence and reproducibility

2026-10-22. Target: `/Users/garethmanning/Github/education-agent-skills`, main `6bbbce418f82e11044009c9f3b7373a354de5bd0`. Read-only audit except four requested reports. Scratch tools/builds in `/tmp/education-skills-audit-20261022/`; no Git repository was created there. No installed plugin settings, committed source, credentials, live endpoint, email, package publication, push or deployment was changed.

## 1. Authority and pinned sources

| Source | Examined identity/purpose |
|---|---|
| [Agent Skills overview](https://agentskills.io) | Current format overview/discovery/activation |
| [Official specification](https://agentskills.io/specification) | Current requirements/recommendations/optional fields |
| [Upstream](https://github.com/agentskills/agentskills) | GitHub API main commit `69ef37e9424c0a7ea9dd2293b559e43ec8176379` |
| [Pinned specification](https://github.com/agentskills/agentskills/blob/69ef37e9424c0a7ea9dd2293b559e43ec8176379/docs/specification.mdx) | Frontmatter lines19–32, naming60–65; progressive disclosure/resource guidance later in file |
| [Pinned validator](https://github.com/agentskills/agentskills/blob/69ef37e9424c0a7ea9dd2293b559e43ec8176379/skills-ref/src/skills_ref/validator.py) | Allowlist15–22; extra-key check103–115; name/description validation |
| [Pinned parser](https://github.com/agentskills/agentskills/blob/69ef37e9424c0a7ea9dd2293b559e43ec8176379/skills-ref/src/skills_ref/parser.py) | strictyaml52–56; metadata stringification61–62 |
| [Reference README](https://github.com/agentskills/agentskills/blob/69ef37e9424c0a7ea9dd2293b559e43ec8176379/skills-ref/README.md) | Explicit demonstration-only disclaimer; API/CLI usage |
| [Official client guide](https://agentskills.io/client-implementation/adding-skills-support) | Scan locations are conventions; lenient validation is a client option; trust boundaries |
| [Claude manifest docs](https://code.claude.com/docs/en/plugins-reference) | Manifest paths, skills arrays, ignored keys, CLI validation |
| [Codex skills docs](https://learn.chatgpt.com/docs/build-skills) | `~/.agents/skills`; policy in agents/openai.yaml |
| [Codex plugin docs](https://learn.chatgpt.com/docs/plugins) | Marketplace/install and new-session behavior |
| [Codex resolver source](https://github.com/openai/codex/blob/a3d93e1e692f1144cf8685175a5d1f6bf7294f57/codex-rs/core-plugins/src/marketplace.rs#L677-L719) | Root-relative path rules; rejects ParentDir; pinned current upstream, not asserted identical build to local binary |
| [Codex manifest source](https://github.com/openai/codex/blob/a3d93e1e692f1144cf8685175a5d1f6bf7294f57/codex-rs/core-plugins/src/manifest.rs#L135-L140) | Manifest skills accepts string or array |
| [Codex skill parser](https://github.com/openai/codex/blob/a3d93e1e692f1144cf8685175a5d1f6bf7294f57/codex-rs/skills/src/parser.rs#L7-L20) | name/description/metadata subset; no mapping of Claude invocation flag |
| [Codex metadata source](https://github.com/openai/codex/blob/a3d93e1e692f1144cf8685175a5d1f6bf7294f57/codex-rs/skills/src/metadata.rs#L35-L56) | sidecar policy.allow_implicit_invocation |

Web tools opened the four requested Agent Skills URLs. The GitHub skills-ref tree web renderer failed; direct GitHub API/raw requests successfully retrieved the entire reference package at the pinned commit. Some Claude Markdown endpoints returned403; rendered official docs and native CLI remained available. A guessed OpenAI manifest URL returned404 and was not used as evidence. Current OpenAI pages redirect to learn.chatgpt.com. No specification semantic version is asserted beyond the pinned commit; reference package reports0.1.0.

## 2. Commands and outcomes

Commands are shown without secrets. Commands that write derived state ran only in scratch. Project scripts were read before execution.

| Command / scope | Outcome |
|---|---|
| `git status --short --branch`; `git remote -v`; `git rev-parse HEAD`; `git ls-remote origin refs/heads/main` | Clean main; origin correct; local/remote equal6bbbce4… |
| `git ls-files` plus filesystem `SKILL.md` search excluding .git/node_modules | 241 tracked files;165 skills;20 domains; no unregistered skill |
| Read AGENTS, CLAUDE, README, STATE, AUDIT, CONTRIBUTING, changelog, docs and manifests | Current instructions and historical material separated; stale audit not treated as authority |
| Download pinned reference package via GitHub API/raw; inspect pyproject/parser/validator/CLI before install | Source examined; temporary venv only; package0.1.0 installed editable |
| `python -m pip install -e <scratch>/standard/skills-ref pyyaml pytest` in venv | Success; validator interpreter3.13.2; strictyaml1.7.3; PyYAML6.0.3 |
| Reference `validate(path.parent)` API for every actual skill | 0 pass/165 fail:160 flow-sequence parse failures;5 unexpected-key failures |
| `skills-ref validate skills/professional-learning/panel-review` | Exit1; unexpected14 top-level fields; full example below |
| Isolated `validate_metadata` of only allowed fields |165 pass; diagnostic only, does NOT validate original files |
| Re-serialize full metadata as block YAML in temporary matching-name dirs, then official validate |165 unexpected-field failures; no more parse failures |
| Reference package `pytest -q -p no:cacheprovider <scratch>/standard/skills-ref/tests` |40 passed |
| Venv Python `scripts/validate-skills.py` | Exit0;165 pass;4 length warnings |
| Venv Python `scripts/validate-registry.py` | Exit0;165 skills/20 domains |
| `env -u HOSTED_MCP_BASE_URL npm test -- --output=<scratch>/root-test-results` at root |21 passed;1 hosted smoke intentionally skipped;22 total |
| Generator `parse_skill` applied to `tracked_skill_paths` in memory; compare to registry skills |Exact match165 entries;165 unique names; timestamp not regenerated |
| `env -u SKILLS_FILTER npm run bundle-skills` in scratch tracked snapshot, then `cmp` with canonical src/skills.json |Exit0; byte-identical snapshot |
| `./node_modules/.bin/tsc --noEmit` in original mcp-server |Exit0; source typecheck; no emit; api/ excluded by current config |
| Initial `npm test -- --output=<scratch>/mcp-test-results` against existing ignored dist |39 passed/3 failed: tool count, missing-time fallback, scalar types; traced to stale ignored local output |
| Copy241 tracked files into scratch without .git; symlink existing node_modules; `npm run build` then `npm test -- --output=<scratch>/fresh-mcp-test-results` |Build succeeded;42/42 tests passed; no live server requests |
| Compiled `dist/cli.js` via SDK stdio client; list tools/prompts; get spaced-practice prompt |157 tools;165 prompts; selected prompt nonempty; client closed |
| Independent auth/handler focused tests with fake requests/mock Resend |29/29 passed; no email/HTTP endpoint contacted |
| Root `npm audit --json --package-lock-only` |Exit0; zero advisories |
| MCP `npm audit --json --package-lock-only` |Exit1;10 package records:1 critical,2 high,7 moderate |
| `claude --version`; `claude plugin validate . --json` |2.1.307; exit0 with warnings, exact summary below |
| `codex --version`; plugin/help subcommands; `codex plugin list --json --available --marketplace education-agent-skills` from repo |0.163.0-alpha.11.1; exit0, installed[]/available[]; no installation performed |
| `hermes skills --help`; examine inspect implementation; `hermes skills inspect GarethManning/education-agent-skills/skills/original-frameworks/learning-target-authoring-guide` |Exit0; name/description/metadata/SKILL preview fetched; source reported skills.sh/community; no install |
| Harmless synthetic parser and replacement probes |JS marker executed; literal input altered; exact code below |

Node22.23.4, macOS arm64. System Python reported3.15.0, temporary venv actually3.13.2; do not conflate them. Existing dependency trees were reused; no clean npm ci was claimed. Baseline root test output was captured in session; scratch fresh MCP log is `fresh-mcp-tests.log`. Raw audit JSON and validation inventory are scratch, while complete official per-skill errors are durably included in CSV.

Audit setup errors: one scratch build command ran from scratch parent lacking package.json and returned ENOENT; rerun from copied mcp-server succeeded. One orchestration expression had a JS syntax error and executed nothing. Importing the registry generator briefly created `scripts/__pycache__/generate-registry.cpython-313.pyc`; only that audit-created bytecode and its empty directory were removed. Original files stayed unchanged. Subsequent Python calls suppressed bytecode. These are audit-tool issues, not repository defects.

### Reference validation reproduction

```bash
# Work in disposable storage; pin source revision above before installing.
python -m venv /tmp/agent-skills-reference-venv
/tmp/agent-skills-reference-venv/bin/pip install -e /path/to/pinned/skills-ref
/tmp/agent-skills-reference-venv/bin/skills-ref validate /path/to/skill
```

Batch API used is the same public function called by the official CLI:

```python
from pathlib import Path
from skills_ref import validate
repo = Path('/Users/garethmanning/Github/education-agent-skills')
results = {str(p.relative_to(repo)): validate(p.parent)
           for p in sorted(repo.glob('skills/**/SKILL.md'))}
print(sum(not errors for errors in results.values()), len(results))
# 0 165
```

Representative actual diagnostic:

```text
Validation failed for skills/professional-learning/panel-review:
Unexpected fields in frontmatter: chains_well_with, disable-model-invocation,
domain, effort, evidence_sources, evidence_strength, input_schema,
output_schema, skill_id, skill_name, tags, teacher_time, user-invocable, version.
Only ['allowed-tools', 'compatibility', 'description', 'license', 'metadata', 'name'] are allowed.
```

160 original files instead fail strictyaml with `Found ugly disallowed JSONesque flow mapping` at `tags: [...]`. That is the reference parser's wording; arrays are legal YAML in PyYAML/JS parsers. The five parseable files are coverage-audit, curriculum-crosswalk, developmental-band-translator, kud-chart-author, panel-review. Block-normalization was a **diagnostic scratch probe**, not a source edit or proof that normalization alone fixes conformance.

### Harmless security/correctness probes

Executed by independent inspector from mcp-server, no skill file changed:

```javascript
import matter from './node_modules/gray-matter/index.js';
import { assemblePrompt } from './src/tool-handler.ts';
globalThis.auditMarker = false;
const parsed = matter('---js\n(globalThis.auditMarker = true, { skill_id: "synthetic/probe" })\n---\n## Prompt\nSynthetic text');
console.log(JSON.stringify({javascriptExecuted: globalThis.auditMarker, parsedId: parsed.data.skill_id}));
const assembled = assemblePrompt({prompt:'Before {{topic}} After'}, {topic:'literal-$&'});
console.log(JSON.stringify({inputPreservedInTemplate:assembled.startsWith('Before literal-$& After'),actualTemplateLine:assembled.split('\n')[0]}));
```

Using `node --import tsx --input-type=module`, outputs:

```json
{"javascriptExecuted":true,"parsedId":"synthetic/probe"}
{"inputPreservedInTemplate":false,"actualTemplateLine":"Before literal-[not provided] After"}
```

No destructive payload, secret read, network action, memory-exhaustion test or exploit against the deployed service was attempted.

### Native client observations

Claude validator success is not a runtime activation test. Warnings: ignored `display_name` (use displayName), root CLAUDE.md not loaded as plugin project context; advice for marketplace install line. Directory-profile warnings include absent listing icon and ignored local .DS_Store files. Those files are not tracked; no claim they ship in GitHub source. Native validator primarily validated marketplace/manifest here, not165 pedagogical activations.

Codex current upstream `resolve_local_plugin_source_path` special-cases `./` as root at688; rejects non-normal path components706–714. Local `./../..` therefore cannot resolve under those rules. Existing manifests'20 domain roots themselves enumerate165 directories. Upstream has recursive and direct-child discovery modes; do not turn the repository's old universal one-level assertion into an open-standard requirement.

Hermes inspect returned `learning-target-authoring-guide`, the expected132+ character description, tags and frontmatter preview, through skills.sh. This verifies retrieval of that identifier in this runtime, not installed-skill activation or tap index completeness.

## 3. Finding-to-source map

All repository references below are relative to audited revision. They are static observations unless a reproduced result is named.

| Finding | File/line evidence |
|---|---|
| Extended schema vs official allowlist | Representative `skills/memory-learning-science/spaced-practice-scheduler/SKILL.md:1–67`; all CSV rows; project `scripts/validate-skills.py:84–104` |
| Source preservation rule | `AGENTS.md:7–15`; infrastructure audit did not edit skill files |
| Overbroad compliance and vendor-independent guarantees | `README.md:3`; `docs/ARCHITECTURE.md:88–96`; `docs/AGENT_SKILLS_V2_SPEC.md:118–145`; `CHANGELOG.md:15–23` |
| Registry generated/tracked-source convention | `scripts/generate-registry.py:82–98`; `registry.json`; in-memory equality |
| Correct current manifest domain arrays | `.claude-plugin/plugin.json:12–33`; `.codex-plugin/plugin.json:7–28`; root tests224–247 |
| Codex marketplace failure | `.agents/plugins/marketplace.json:6–8`; pinned upstream resolver677–719; local empty listing |
| Codex setup gap | `docs/CODEX.md:20–54`; `README.md:49–57`; local CLI add vs marketplace-add help |
| Explicit-only control | all12 flagged rows; `mcp-server/src/server.ts:90–92`; absence of sidecars; pinned Codex policy parser |
| YAML execution | `mcp-server/src/skill-loader.ts:134`; locked gray-matter `mcp-server/package-lock.json:1131–1140`; installed gray-matter/lib/engines.js36–43; harmless marker |
| Parallel bundling validation boundary | `.github/workflows/validate.yml:38–50` separate bundle-sync job |
| Literal input corruption | `mcp-server/src/tool-handler.ts:5–16`; harmless replacement probe |
| HTTP auth before SDK | `mcp-server/api/mcp.ts:32–55`; app byte limits `mcp-server/src/request-body.ts:4–7` |
| Unlimited array-element count | `mcp-server/src/server.ts:22–25,46–49`; SDK lock at package-lock.json480+ |
| Unsupported metadata-doc client advertisement | `mcp-server/src/oauth.ts:110–121,143–150,169–179` |
| Credential-family revocation limitation | `mcp-server/api/oauth/token.ts:54–63`; `src/http-auth.ts:22–25`; `src/oauth.ts:275–289` |
| Ignored stale dist vs clean source | `mcp-server/.gitignore:2`; `package.json:15–22`; tests `mcp-server.spec.ts:11–20`;39/3 vs42/0 comparison |
| API typecheck gap | `mcp-server/tsconfig.json:15` includes src only; handler runtime tests still present |
| Dist contributor contradiction | `CONTRIBUTING.md:84–90`; ignored dist |
| MCP semantics | `mcp-server/src/server.ts:51–86,90–112`; `src/tool-handler.ts:5–29`; instructions returned, no model/provider call |
| Privacy/persistence input boundary | all13 student files; `weekly-agency-review/SKILL.md:237`; `fading-manager/SKILL.md:254`; no backend code in skills |
| Good evidence/agency boundaries | `README.md:185–192`; `docs/ARCHITECTURE.md:59–61`; five original-framework orchestrators' evidence-space/component/synthesis/appropriate-use sections |
| Licensing intent | root LICENSE:5–8; mcp-server/LICENSE; individual folder contains only SKILL.md |

## 4. Dependency evidence and realistic applicability

`npm audit --package-lock-only` queries today's public advisories, not proof of exploitability or deployed version. Its ten affected **package records** may include propagated transitive effects; they are not ten independent exposed endpoints.

| Package/severity | Range/locked evidence | Assessment |
|---|---|---|
| @modelcontextprotocol/sdk/high | locked1.30.0; [GHSA-46jr-4wx8-v453](https://github.com/advisories/GHSA-46jr-4wx8-v453), fixed1.32.0 with opt-in cap | Authenticated HTTP validation risk relevant; no crash under1MiB established |
| proxy-addr/critical | locked2.0.7; [GHSA-jqcg-44mw-7w3h](https://github.com/advisories/GHSA-jqcg-44mw-7w3h), fixed2.0.8 | Requires malformed trusted-proxy subnet and proxy identity use; absent here |
| fast-uri/high | locked3.1.6; [GHSA-qw65-cvwx-89v3](https://github.com/advisories/GHSA-qw65-cvwx-89v3), [GHSA-58mr-gqgx-xq4g](https://github.com/advisories/GHSA-58mr-gqgx-xq4g), [GHSA-hrr3-gc8f-f4qj](https://github.com/advisories/GHSA-hrr3-gc8f-f4qj) | No untrusted URI destination/SSRF use demonstrated; update>=3.1.8 |
| hono, qs, ip-address/moderate | audit JSON | Flagged JSX/static/proxy helper paths not used by current app |
| gray-matter, js-yaml, argparse, sprintf-js/moderate | audit JSON; [sprintf advisory](https://github.com/advisories/GHSA-hp3w-g68c-fv3c) | Audit severity propagated; parser execution is separately reproduced and more direct |

Other SDK advisories concern its client OAuth/redirect paths, experimental tasks and SDK bearer verification, which the hosted implementation does not use. The project's own audience/resource scope is a separate question, not evidence that its custom bearer verifier has that SDK defect. Preserve the distinction. Official advisory says upgrading alone leaves `maxToolInputElements` disabled; explicitly configure it.

## 5. Educational evidence, sampled primary checks

| Observation | Repository evidence | Primary source/qualification |
|---|---|---|
| Cepeda count and schedule claims | spaced-practice-scheduler:18,78,113,206 | [Author-deposited review](https://escholarship.org/uc/item/3rr6q10c):317 experiments/184 articles; exact classroom schedule not established |
| LLM self-explanation durability/transfer overclaim | explain-first-interrogator:23,67 | [Preprint v2](https://arxiv.org/html/2604.00142v2): one60-minute study; explanation-quality result on subset; no demonstrated durability |
| CAST2018 described current | differentiation-adapter:78 | [CAST Guidelines](https://udlguidelines.cast.org/):3.0 released2024; keeping2018 as a named historical basis is allowed |
| Incorrect Woloshyn year/pages | docs/EVIDENCE.md:39 | [ERIC record](https://eric.ed.gov/?id=EJ443903):1992,84(1),115–124; [publisher DOI](https://doi.org/10.1037/0022-0663.84.1.115) robots-blocked |
| Missing traceability of2025 meta-analysis | srl-session-wrapper:23,73 | [Plausible primary Frontiers paper](https://www.frontiersin.org/journals/education/articles/10.3389/feduc.2025.1738751/full); identification/claim match needs explicit authors/title, not called fabricated |
| Safeguarding routing gap | trauma-informed-practice-designer:200,284–293 | No urgent branch in file; specialist/local-policy review recommended. [Official illustrative guidance](https://enough.campaign.gov.uk/campaign-resources/guidance-and-resources-teachers-and-school-staff/safeguarding-children/local) distinguishes safeguarding from pastoral follow-up; not adopted as universal jurisdiction |
| Fading contradiction | fading-manager:101,111–117,195–203; retrieve-first-gate:148–155 | Internal state/example mismatch; thresholds themselves honestly called heuristic at fading:256 |
| Translator contradictory halt | developmental-band-translator:25–41,126,148–152 | Internal static contradiction, including override omission |
| Upstream KUD routing | kud-chart-author:129,141 vs translator:83–85,101–106 | Metadata tagger needs already decomposed input |
| Unused accepted fields | srl-session-wrapper:33–35,78–84; teach-back-evaluator:33–35 | Isolated invocation gap; same-chat context may already supply information |
| Transfer target/example mismatch | transfer-bridge:177–236 | Market-price target vs allocation arithmetic; internal task alignment observation, not a new economics study |
| Rating support/scope | academic-language-sentence-frame-generator:15–21; backwards-design-unit-planner:15–21; cross-cultural-task-validity-checker:15–21; panel-review:3,70,618; band-system-designer:79–85 | Published Strong threshold not substantiated by these entries; scope/wording refinement, not invalidation of pedagogy |

Full education-content inspection covered all descriptions, metadata, limitations presence, every student skill's focused content and representative flagged educator workflows. It did not manually read every one of46,181 lines or independently establish all872 citations. No student data or educational intervention trial was used.

## 6. Complete optional chain/rating warnings

| File:line | Advisory |
|---|---|
| `skills/ai-learning-science/erroneous-example-designer/SKILL.md:65` | Suggested chain target absent from 165-skill library: diagnostic-question-generator |
| `skills/ai-learning-science/individual-spacing-algorithm-explainer/SKILL.md:64` | Suggested chain target absent from 165-skill library: retrieval-practice-designer |
| `skills/ai-learning-science/learning-analytics-interpretation-guide/SKILL.md:61` | Suggested chain target absent from 165-skill library: retrieval-practice-designer |
| `skills/ai-learning-science/learning-analytics-interpretation-guide/SKILL.md:62` | Suggested chain target absent from 165-skill library: diagnostic-question-designer |
| `skills/ai-literacy/prompt-literacy-sequence-designer/SKILL.md:16` | Evidence rating outside published four-value scale: low-moderate |
| `skills/curriculum-assessment/curriculum-knowledge-architecture-designer/SKILL.md:75` | Suggested chain target absent from 165-skill library: competency-framework-mapper |
| `skills/curriculum-assessment/curriculum-knowledge-architecture-designer/SKILL.md:77` | Suggested chain target absent from 165-skill library: d2r-project-cycle-designer |
| `skills/curriculum-assessment/formative-assessment-technique-selector/SKILL.md:64` | Suggested chain target absent from 165-skill library: exit-ticket-designer |
| `skills/global-cross-cultural-pedagogies/cpa-sequence-designer/SKILL.md:65` | Suggested chain target absent from 165-skill library: diagnostic-question-generator |
| `skills/global-cross-cultural-pedagogies/variation-theory-task-designer/SKILL.md:62` | Suggested chain target absent from 165-skill library: diagnostic-question-generator |
| `skills/montessori-alternative-approaches/mixed-age-learning-task-designer/SKILL.md:65` | Suggested chain target absent from 165-skill library: peer-tutoring-protocol-designer |
| `skills/montessori-alternative-approaches/three-part-lesson-designer/SKILL.md:65` | Suggested chain target absent from 165-skill library: retrieval-practice-designer |
| `skills/montessori-alternative-approaches/uninterrupted-work-cycle-designer/SKILL.md:65` | Suggested chain target absent from 165-skill library: self-regulated-learning-designer |
| `skills/original-frameworks/self-determined-project-design-protocol/SKILL.md:75` | Suggested chain target absent from 165-skill library: self-regulated-learning-designer |
| `skills/professional-learning/panel-review/SKILL.md:11` | Evidence rating outside published four-value scale: medium |
| `skills/wellbeing-motivation-agency/agency-scaffold-generator/SKILL.md:64` | Suggested chain target absent from 165-skill library: self-regulated-learning-strategy-selector |
| `skills/wellbeing-motivation-agency/agency-scaffold-generator/SKILL.md:65` | Suggested chain target absent from 165-skill library: metacognitive-prompt-generator |
| `skills/wellbeing-motivation-agency/implementation-intention-designer/SKILL.md:64` | Suggested chain target absent from 165-skill library: self-regulated-learning-strategy-selector |
| `skills/wellbeing-motivation-agency/implementation-intention-designer/SKILL.md:65` | Suggested chain target absent from 165-skill library: metacognitive-prompt-generator |

These are optional suggested chains; absent targets are not imported executable files. No hard dependency failure is inferred. Two rating labels are accepted by code but outside the published four-value description.

### Progressive-disclosure outliers

| Skill path | Physical lines | Body whitespace words (not tokens) |
|---|---:|---:|
| `skills/curriculum-assessment/scope-and-sequence-designer/SKILL.md` | 594 | 6702 |
| `skills/original-frameworks/dispositional-knowledge-assessment-designer/SKILL.md` | 641 | 9999 |
| `skills/original-frameworks/learning-target-authoring-guide/SKILL.md` | 775 | 8416 |
| `skills/professional-learning/panel-review/SKILL.md` | 624 | 7542 |

Sixteen bodies exceed4000 words; the5k-token guidance is not validated by counting words or physical lines. Measure actual client tokenizer cost before splitting. No Markdown links inside skill bodies were found, and no scripts/resources are bundled; no broken Markdown resource paths were observed. Textual harness/session-data requirements still matter.

## 7. Inventory integrity and closure

Every row below was independently found from filesystem skill files and matched registry path membership. Hashes identify audited bytes; complete diagnostics and recommendations are in CSV. This appendix also makes the bounded audit revision recoverable if main later changes.

| Skill path | SHA-256 |
|---|---|
| `skills/ai-learning-science/adaptive-hint-sequence-designer/SKILL.md` | `4f59e3a5e681dbeb72db4c703a96f1dc53c44c4c9ec18df534071fcd7972882a` |
| `skills/ai-learning-science/ai-facilitated-collaborative-learning-designer/SKILL.md` | `06bf3fb287deb38eebbf0d5c46a392adcb876e03325e272af147046b1bee8b18` |
| `skills/ai-learning-science/ai-feedback-design-principles/SKILL.md` | `7a5306d9a9e72846b9816d79ce1fbb81a0ef579db72ad9f0c0f3b0bef532d585` |
| `skills/ai-learning-science/cognitive-tutoring-architecture-designer/SKILL.md` | `84616a953bed8ee536fe0c596cd1d3fa2f88337b56e0e009fd88dfe58fa7c019` |
| `skills/ai-learning-science/digital-worked-example-sequence/SKILL.md` | `2bae9a7d85bf2e5795eb89a8b117ce2076dd33a9c169adcccfaa9d1d9c38640a` |
| `skills/ai-learning-science/erroneous-example-designer/SKILL.md` | `36691fc700df204168c7e1a8c99e35460d12eda45aa5af2471acd4cbaeb80d3c` |
| `skills/ai-learning-science/formative-assessment-loop-designer/SKILL.md` | `f98a439600f9e8c8796113d24f195496e55d6f7013515fbe24d6d94f37d8b133` |
| `skills/ai-learning-science/individual-spacing-algorithm-explainer/SKILL.md` | `0fb15298648e560d9f9f444c9f1330c83c24245bb10222db6539821ed852575c` |
| `skills/ai-learning-science/intelligent-tutoring-dialogue-designer/SKILL.md` | `421294c1311588bdd0ed8b6a4a944835cee5df023883f39e399c9f692c0d6ee8` |
| `skills/ai-learning-science/learning-analytics-interpretation-guide/SKILL.md` | `4c5e8a351fcb017a2ae350ac0efc0f66bc69e6e9bba6c57467a4e55cbaa4ae73` |
| `skills/ai-learning-science/metacognitive-monitoring-ai-contexts/SKILL.md` | `3dcd03b8b6ce52d5e7156d7f39a5cb6940676db303cb0d357aa2d27351ed1f03` |
| `skills/ai-learning-science/productive-failure-desirable-difficulty-designer/SKILL.md` | `a2ba0f2b73c437dfe417c2f005734866efc6b829d03d0691d6b9105f50ca23a1` |
| `skills/ai-learning-science/self-explanation-prompt-designer/SKILL.md` | `d0e4c730e64be5e5a3718647f942ea99f3a5f201ff9ad20269884dec67126e32` |
| `skills/ai-learning-science/worked-example-to-problem-solving-transition-designer/SKILL.md` | `1d9474717c3aa505328368a2e76cf49e09ffd94f767f141c955b09543852a4a6` |
| `skills/ai-literacy/ai-expertise-interrogation-designer/SKILL.md` | `15eb41bdcfeb6157a9c7aeff89b82f1466418ef7175324d074e0623ea91db1d4` |
| `skills/ai-literacy/ai-hallucination-fact-check-protocol/SKILL.md` | `00a6622564fd94ded79bf9ee1c468a30eeac29a40b4628d8347425475a1dc1c9` |
| `skills/ai-literacy/ai-learning-boundary-mapper/SKILL.md` | `06c952800aa5430c50624f8127d8768647561c84d0711b1c776ff52ba3ba4796` |
| `skills/ai-literacy/ai-output-critical-audit-designer/SKILL.md` | `ff4f9b4fcadf61292fbd816a3869c8e692edf5b18a808e932893149a4177e21c` |
| `skills/ai-literacy/ai-socratic-dialogue-designer/SKILL.md` | `25983f25bbad2febf317b7056ca90fbb62b07e06647f48a320658349de61132b` |
| `skills/ai-literacy/disciplinary-ai-literacy-sequence-designer/SKILL.md` | `9539708990fdabd1659a691786ee7d7e5e983f4b0a6739fbdd7a787f1a163b39` |
| `skills/ai-literacy/prompt-literacy-sequence-designer/SKILL.md` | `7f30f154dd4d5350ee10a0269b91053f57cd6dfc2686f9abddba494a631cea6d` |
| `skills/curriculum-alignment/coverage-audit/SKILL.md` | `464d31856c3b441ee8b5f307b4b1903c50f299eac0eb363f2cf3a1adc3101c72` |
| `skills/curriculum-alignment/curriculum-crosswalk/SKILL.md` | `c1cba6e18242ca768b5c88f5463a390710ad3331b0461e8bf073e76ff9f0a821` |
| `skills/curriculum-alignment/developmental-band-translator/SKILL.md` | `b1879a0422ba0c9e68ddd74752466709d7e2327ccdedab29bd0b6599d2bd2f5e` |
| `skills/curriculum-alignment/kud-chart-author/SKILL.md` | `f597606246661031163dce8adb8abed9a7ddcd9be2daba3d6e1a8b826494bbcc` |
| `skills/curriculum-assessment/assessment-validity-checker/SKILL.md` | `7cd36cbcd1f57d5216931d1c231b3e8774e4b5c9fec42e9ee1cb689e457bf33f` |
| `skills/curriculum-assessment/backwards-design-unit-planner/SKILL.md` | `1436d874e706d5cb7ed01df8755af87ad221322baf853ca4306c964882ef686f` |
| `skills/curriculum-assessment/competency-unpacker/SKILL.md` | `f7491dd4e9c38cf707067f8e4b1818069c501f39963d3628852f65bdd7031b46` |
| `skills/curriculum-assessment/criterion-referenced-rubric-generator/SKILL.md` | `b8f404c14ad9e33b275be384e390dce7946268436dc1cefc9620317c2b0cbc70` |
| `skills/curriculum-assessment/curriculum-knowledge-architecture-designer/SKILL.md` | `e3c6ea6c5c0786ee96bf1d81ee5d33d0d98e969bc73ac657cbeced6587571a18` |
| `skills/curriculum-assessment/differentiation-adapter/SKILL.md` | `6545b55ca01e6eea998b9c1c808f6327a3dee87c91a4c313c4c7e6e163c35c5f` |
| `skills/curriculum-assessment/discipline-specific-critical-thinking-task-designer/SKILL.md` | `0ff6183639481ed85168569c8369ac2212e55057f91737fd291149e3822c67eb` |
| `skills/curriculum-assessment/formative-assessment-technique-selector/SKILL.md` | `a8a824d8e4b0f067561e54af496c8b04ac4b1a386da0b2fb6775e7e8320fd41a` |
| `skills/curriculum-assessment/gap-analysis-from-student-work/SKILL.md` | `27428b49667ccbfed30ae854ad5fed2ca3fc5a0f4cf2f44701f5ba296fc71be6` |
| `skills/curriculum-assessment/kud-knowledge-type-mapper/SKILL.md` | `8cd13e8b3ba6829d235aca41a2f3ff7966ab13f57d63a8fbdab1b54b368b6479` |
| `skills/curriculum-assessment/learning-progression-builder/SKILL.md` | `17e59b772ef0e249b7a392865c68c113d38d8cbf0c2c59fba0ce76c34d96bcd7` |
| `skills/curriculum-assessment/project-brief-designer/SKILL.md` | `14f314ee2575140998e26edf22d5e1818172353d9e150431be91e722c40a5345` |
| `skills/curriculum-assessment/scope-and-sequence-designer/SKILL.md` | `20630a379803fb5023608904748531e3e03b3d9dad7d554901f0885ed5a9d9de` |
| `skills/eal-language-development/academic-language-sentence-frame-generator/SKILL.md` | `152ee91b124a9ba3d8076cbce0dc4129dd368b20e598713fdbf97e038bf51019` |
| `skills/eal-language-development/language-demand-analyser/SKILL.md` | `c273657a5ea300492ff59ea2feeb126b7b750d228336f1c1ad46a6e235282533` |
| `skills/eal-language-development/scaffolded-task-modifier/SKILL.md` | `0a10c9639107dc33408ee6edbb941200e777ef53af3578c3837cf70be8314ced` |
| `skills/eal-language-development/sheltered-instruction-lesson-modifier/SKILL.md` | `24fbd5379b52aa1bb097ecdd3fca2c9140a141bc589fbbaa4c5875151949a056` |
| `skills/eal-language-development/vocabulary-tiering-tool/SKILL.md` | `2211f0938d8933334414e61e603072566bba30337fd520069ebde977c40f7315` |
| `skills/environmental-experiential-learning/biophilic-learning-environment-designer/SKILL.md` | `eb6bdcc5d963e221bf895ccebef691c0c03c56bd9436ff4ee45f486e946bd9f1` |
| `skills/environmental-experiential-learning/ecological-inquiry-anchor-designer/SKILL.md` | `ed7ec7f699a4eb077319a00ec1e51431946beb925e2b78682d59bc633b4bc970` |
| `skills/environmental-experiential-learning/experiential-learning-cycle-designer/SKILL.md` | `7c294a08c999984058840b8ac0e7f31da273ffe5044dc1b35db69c6a3ab74c25` |
| `skills/environmental-experiential-learning/interdisciplinary-real-world-connection-mapper/SKILL.md` | `983baacf84cb824c632259b51ca4b90143e77c7418974e1d8f77a701391a466f` |
| `skills/environmental-experiential-learning/outdoor-learning-sequence-designer/SKILL.md` | `12b0d293777020f77995a77fbe3662ae33ee46c7fc57a5b4a99c2ae4c25c4bf1` |
| `skills/environmental-experiential-learning/service-learning-project-designer/SKILL.md` | `129563ace2290a594d5572026b1e48e7ec142e14c6b084219edcce5d71646c8b` |
| `skills/explicit-instruction/checking-for-understanding-protocol-designer/SKILL.md` | `a6a3f5452edece0c826458e3a399ae3ced849b5035899b16d5debb192e011ffc` |
| `skills/explicit-instruction/explicit-instruction-sequence-builder/SKILL.md` | `ddaa316c3d41822032b42c6b8a436d1200c86c9da7ae0c4aa25dc4fb1d1e7f58` |
| `skills/explicit-instruction/lesson-opening-designer/SKILL.md` | `fd00e8c5f8220e5935bb12511e6682a9d4e4a7fcfa2d6c726c18f97d56863b6e` |
| `skills/explicit-instruction/practice-problem-sequence-designer/SKILL.md` | `3bcf66d76461040cf92e325f4466aef34d4c675eae4d2d4c61950e6dc79654e2` |
| `skills/explicit-instruction/think-aloud-script-generator/SKILL.md` | `74475c4835796cdff710bb3937e5a9dfd326c7089e35e2e620b09f4ad43fd1bd` |
| `skills/global-cross-cultural-pedagogies/cpa-sequence-designer/SKILL.md` | `a941c9c7d8c8d91b3bcdca4d45e75d84154b6503d05ca35026b1da308c8b4899` |
| `skills/global-cross-cultural-pedagogies/cross-cultural-task-validity-checker/SKILL.md` | `dee9dae43391d773e3859d275619da68dbd21f78313e99ae5cd3ef333c70a146` |
| `skills/global-cross-cultural-pedagogies/culturally-responsive-teaching-designer/SKILL.md` | `abf5069c378c3f4bc6e8946cad7d301c8070b82a14ba169f7aa7858609ed2adb` |
| `skills/global-cross-cultural-pedagogies/emergent-project-design-scaffold/SKILL.md` | `4e9abec96bbaad5bd68809b55b7146ef1b878684f36b9119e572e8e947e9729f` |
| `skills/global-cross-cultural-pedagogies/phenomenon-based-unit-anchor/SKILL.md` | `5dd8e05c56eacab51f54d4a9b1bbc9f15734d81da92df89f8fd168ac6d87c64d` |
| `skills/global-cross-cultural-pedagogies/place-based-inquiry-anchor/SKILL.md` | `935958ee6bcc5da410d45c6d7a1b3ea19d6961f07732eef2b7f824f41ee27cbb` |
| `skills/global-cross-cultural-pedagogies/reggio-documentation-protocol/SKILL.md` | `eb521689446e97c1a96b1b54b9e810f96e68d057c4db32683b6c387ae325861c` |
| `skills/global-cross-cultural-pedagogies/ubuntu-collective-knowledge-task-designer/SKILL.md` | `a9fdcacbbbc8915587a64cef8f6230a1afc08e760ca57fe03ab484f4d4f2f60a` |
| `skills/global-cross-cultural-pedagogies/variation-theory-task-designer/SKILL.md` | `f94f85e202278f54c6e56fcdc5385e22e7434082d7f42da286413108627a24d2` |
| `skills/historical-thinking/central-historical-question-evaluator/SKILL.md` | `a76c23ec6d7b894d29a3e5abf977402af38387ad6e4938221f0c233cbd434516` |
| `skills/historical-thinking/close-reading-skill-builder/SKILL.md` | `c1179e338bf45d1e8c5001278fc88a47c780bd2e6eacd2ab645e2ce2ebb197de` |
| `skills/historical-thinking/contextualisation-skill-builder/SKILL.md` | `2a97ca02b7bc14c846528b90e52432002d4d47128866c35e075a6755afcfb8a9` |
| `skills/historical-thinking/corroboration-skill-builder/SKILL.md` | `622a3578533bca6168474b8d9b2c9a0f778abb6c6e57a72498765f7f63494be5` |
| `skills/historical-thinking/document-based-lesson-designer/SKILL.md` | `3f4a2d1fcfe6c3939cb4de8176f916259ca87afb9d60644d70fbc9e4993f1792` |
| `skills/historical-thinking/historical-document-set-curator/SKILL.md` | `9cdcb821b2efa3905670e3eb1d898730af01ddbbb92a77d07e58bfe9717921f0` |
| `skills/historical-thinking/historical-source-adapter/SKILL.md` | `2f9ae1e36ecf08e5152fdfd97ae51d53a99f9984d63a83461c371f3942420e0d` |
| `skills/historical-thinking/historical-thinking-assessment-designer/SKILL.md` | `c986ed186ed8cb87158dfcbfdc3ca085b0d24d6d3c31c32dd93124244be5c564` |
| `skills/historical-thinking/historical-thinking-strategy-modelling-guide/SKILL.md` | `02ea30f406b632ccf4b8697b84e2a6e7daccb09db065ab86541cb139c0331a30` |
| `skills/historical-thinking/sourcing-skill-builder/SKILL.md` | `9c0d9fa57eb7cc247371d68ce4810a8aa581f85394e5d1cd513e6ccc392d33ee` |
| `skills/inclusive-design/udl-barrier-anticipator/SKILL.md` | `3b0883954fd5226de817c6a5d08cabb350b617c9d65b97b10279d8d2aa4de75f` |
| `skills/inclusive-design/udl-lesson-auditor/SKILL.md` | `08b15370a936cf573597afb5d67d5a792f5fa664935c623c5c1f0d9dd6042f29` |
| `skills/inclusive-design/udl-options-designer/SKILL.md` | `e6d7a582beb8c5ad5bd380901ad6c653fdca4feb6264aeeb877128a6c3b4c547` |
| `skills/literacy-critical-thinking/argument-structure-scaffold-generator/SKILL.md` | `01592cf7e32883f5f2ac1fdac62ff75d2b86b34246002264bd6a4a07bbb5e3f1` |
| `skills/literacy-critical-thinking/critical-thinking-task-designer/SKILL.md` | `d38ab41c685ef352246463aab8c53d1b774826dfc88031b43772c8e3b2910350` |
| `skills/literacy-critical-thinking/disciplinary-writing-scaffold/SKILL.md` | `bd48435ee210fe286ab74bfe73e4ceac613ba173f68ee754f7a55ab61490b846` |
| `skills/literacy-critical-thinking/media-literacy-deconstruction-protocol/SKILL.md` | `97671629913401df0e117600394aaad0662d4196d797ddd3a5601c94bd1fb9d0` |
| `skills/literacy-critical-thinking/reading-comprehension-strategy-selector/SKILL.md` | `73444b90e9d2e00ac1fa3300f44dc382884f7d8cee209c94c65ca5284d987341` |
| `skills/literacy-critical-thinking/source-credibility-evaluation-protocol/SKILL.md` | `cdf5a4d859aadb3785dddc10312e6b6706b4089b3aa3ff386349fa0f8eda65a7` |
| `skills/literacy-critical-thinking/text-complexity-analyser/SKILL.md` | `2fa015b1fe82bd2f0ecfd3052e7176ae61c4c46cd2a55cd412aa0d4c647b4081` |
| `skills/memory-learning-science/cognitive-load-analyser/SKILL.md` | `6368ddea1a5f1562f9c2b4ac070d489cbf1645ef312cb5d0eeb0c9dc40761b1c` |
| `skills/memory-learning-science/dual-coding-designer/SKILL.md` | `358ccdd979e57715d6a33460de746d09ccc6f96909fceb885c167501c5a8856f` |
| `skills/memory-learning-science/elaborative-interrogation-generator/SKILL.md` | `8b96a7a3a9cbeef9c63c92885a2b9267615ced74a8171f38146360880da5a02d` |
| `skills/memory-learning-science/feedback-quality-analyser/SKILL.md` | `1cf11373442d2a199137df4ea742870c0a4d4257c9512c484fc877284d4e3d2a` |
| `skills/memory-learning-science/interleaving-unit-planner/SKILL.md` | `e00d936d86dd777b57e20e27a5cde88381a8c80649be6e65666914a0fa0cca5b` |
| `skills/memory-learning-science/retrieval-practice-generator/SKILL.md` | `01182f519b7dfc6a5a204b3e49b26282f879f8b59d233fcaf1daafc3d7e43516` |
| `skills/memory-learning-science/spaced-practice-scheduler/SKILL.md` | `2718ed5b78cf3c4457a12aa5bfe53a9894f55c69d4a655049eee3f8413899bff` |
| `skills/memory-learning-science/worked-example-fading-designer/SKILL.md` | `4a1a18c559f1dcdb7b7d73b1ddc6031478a0deb30966b13aaeacb3c9186616c3` |
| `skills/montessori-alternative-approaches/mixed-age-learning-task-designer/SKILL.md` | `e8217eb6db39778ebf9f89fac0553ca47df2177bb76a58348a39ed51c0937feb` |
| `skills/montessori-alternative-approaches/prepared-environment-designer/SKILL.md` | `cc723ee79acc66d3d1ae66e35c0f149bfed9706ccf3db171417f98cc5b0d2f24` |
| `skills/montessori-alternative-approaches/three-part-lesson-designer/SKILL.md` | `605962b79b3a4efed95d5b99bfa277cf7ee15f79d2029a7a7b2b21c4d2804189` |
| `skills/montessori-alternative-approaches/uninterrupted-work-cycle-designer/SKILL.md` | `6f28dcb1e5a4088ab5de459d7caad81ae9bdea35220e65fc7a51c40c019e241b` |
| `skills/original-frameworks/assessment-design-orchestrator/SKILL.md` | `5434b12011c02ee249c4dcf64e55d2c09eea3d68912a9fe94ccf147c814db2d6` |
| `skills/original-frameworks/coherent-rubric-logic-builder/SKILL.md` | `a34dca38c15a7ef696c824e6d838fef06ba6616797f21bbe2f7660453e55a09f` |
| `skills/original-frameworks/compassionate-systems-awareness-orchestrator/SKILL.md` | `2d63a3558faf7a02cba60d7368591f0045bf955c2b01db30328a0453e788f654` |
| `skills/original-frameworks/developmental-band-system-designer/SKILL.md` | `6820236c419bd6f35a6a2e3461fe6c9ababe9e888f9dc0caaa08443254f52704` |
| `skills/original-frameworks/developmental-progression-synthesis/SKILL.md` | `fed3325d0e6e41792092ab53ad6f978a47ce4eda3591849af4e602c93c8bd06b` |
| `skills/original-frameworks/dilemma-navigation-for-education-design/SKILL.md` | `e0b42bbb0375bc308beba564518435cf53ce8d9be2cc38c0449e0b211aca1699` |
| `skills/original-frameworks/dispositional-knowledge-assessment-designer/SKILL.md` | `06748a891782204684b63fc81352af58bee8759fd4e40e02b9b056887d5ce76b` |
| `skills/original-frameworks/inclusive-design-orchestrator/SKILL.md` | `97e42e33c1ba372589561b67c185bfd4ffe60efc1000a837fe5943eec14ef19e` |
| `skills/original-frameworks/learning-target-authoring-guide/SKILL.md` | `18e3f6f69e3ee62a83b16340fa0301883add3db700e19821490b00866761eff1` |
| `skills/original-frameworks/multi-perspective-decision-wheel/SKILL.md` | `535c732396db8e1f77c0d1fc09fc5b50121c378072bcd470057b45dd56bcb3d0` |
| `skills/original-frameworks/place-based-curriculum-orchestrator/SKILL.md` | `46a89ffcb22e54dbf1fd434533a9ac4008fa9759d437bab9eee95e26d6bbde64` |
| `skills/original-frameworks/regenerative-project-design-orchestrator/SKILL.md` | `6353a953680276fa03cdea6758661f739168776849af817733adf3c9742ced72` |
| `skills/original-frameworks/scoping-for-transformative-learning-inquiry/SKILL.md` | `80e12a21f58394481f79dac179e9134d34796890a835efe1c8577fa9c1f064c4` |
| `skills/original-frameworks/seeds-regenerative-inquiry-cycle/SKILL.md` | `e5c63e581305f3aa5ed001934a4b287295755acb3983b6b44cf32730aa85009f` |
| `skills/original-frameworks/self-determined-project-design-protocol/SKILL.md` | `737567aa4d736febec637a767d68ca0ab72470308d9ec34beea35beacf16a16c` |
| `skills/original-frameworks/single-point-rubric-designer/SKILL.md` | `59d2d82803c308f04ac7756bc714fb981e2762b4446457fcca6739febb980200` |
| `skills/original-frameworks/three-horizons-learning-transition-mapper/SKILL.md` | `8fc937d164b8bf05fea3d382cae240e7f370bcb8f07b9651258b6ee4e9e7c76a` |
| `skills/professional-learning/competency-framework-translator/SKILL.md` | `9fd6bf1a6b1fd385789c70a6cdd9ef7646d558ca78273293d2a5d0978b5efbee` |
| `skills/professional-learning/instructional-coaching-conversation-guide/SKILL.md` | `824b7267290e6cc5174d0d9e6fa1af911e4369a55a8e09cba1c6f68f35553526` |
| `skills/professional-learning/lesson-observation-protocol-designer/SKILL.md` | `e203071fc7bca908012287dcd72ef06427ad89ad4bc9296d4b3db730399bc5ea` |
| `skills/professional-learning/lesson-study-cycle-designer/SKILL.md` | `b11d4b47ccf72d7a85d86a96b28c653828792ffcc4f732e229b46143a560ce68` |
| `skills/professional-learning/panel-review/SKILL.md` | `2eb97761fb0845075715819f695fc154a57e9a90cd82e80f55383b6304323255` |
| `skills/professional-learning/pedagogical-content-knowledge-developer/SKILL.md` | `f8a431f23538c5fda43b6eba12ea790e389646049dc24234d86ce5ba180808b5` |
| `skills/professional-learning/professional-development-session-designer/SKILL.md` | `d4b54ce8544e9728cf32b46d34ea1a80fcdde9aa5868b881a1fa848ac3fedf5b` |
| `skills/professional-learning/reflective-practice-prompt-generator/SKILL.md` | `cf27d702a91dbc1a3c3f022c13aa9ab04668ab380f6922700dba9d7d5624bbd4` |
| `skills/professional-learning/teacher-inquiry-cycle-designer/SKILL.md` | `5327cccaf7c05772d872abac30679aa8caf984b76a2e137570e858bea81568c7` |
| `skills/professional-learning/technological-pedagogical-content-knowledge-developer/SKILL.md` | `bba497e20abdd748a52f32c7b4b18c4c8ba1ba212db8531fddac20c5f73558f1` |
| `skills/questioning-discussion/dialogic-teaching-move-generator/SKILL.md` | `dc395fb2be1efb11403ac65a21c496787cddfaf8483e4ec5745113146188936e` |
| `skills/questioning-discussion/discussion-protocol-selector/SKILL.md` | `e254c6d5178c0a036240b7a650204299949e00067f39da8a0c12b04fb24195ee` |
| `skills/questioning-discussion/hinge-question-designer/SKILL.md` | `a3d862c13b6d86065bebc8f1266d643e127c736a2e071107e35b3389da662fc6` |
| `skills/questioning-discussion/perspective-taking-designer/SKILL.md` | `1120fcc8a1d6e2973ce091aeadad82979f2450c60fc680f84b598676315fa470` |
| `skills/questioning-discussion/socratic-questioning-sequence-generator/SKILL.md` | `e7988cfff9a39d777a44fbc5c38f6d0684ae0a5d8a02c5037dbda3bdbd50a6dc` |
| `skills/self-regulated-learning/error-analysis-protocol/SKILL.md` | `c58a67e286c73a607ec7d24b86c6ec4a855829d43c5d32d094c387e46d2647b7` |
| `skills/self-regulated-learning/goal-setting-protocol-designer/SKILL.md` | `ab1e1523e63de50c7640705638dd183f4b16c6f8db883de7f3c552cd0eb2bedc` |
| `skills/self-regulated-learning/metacognitive-prompt-library/SKILL.md` | `1f3af35c0178ff4f1156a5ddf8fc7ce76622f9e3be08f0eff67ad7b74486e403` |
| `skills/self-regulated-learning/self-regulation-scaffold-generator/SKILL.md` | `8192adbc918764dc9f53ee30f67cf95a6056d3eaee6ef798ba9674e0233b6f5d` |
| `skills/self-regulated-learning/study-strategy-selector/SKILL.md` | `38f452e4c1c2c330816261e6fbff12aeffa9fabfda1fcd15676b0978de033491` |
| `skills/student-learning/ai-claim-checker/SKILL.md` | `03209658ad2be7c9b7ae5f5252ecda8be996afa5124a6fb895bf852c6c2dc0f9` |
| `skills/student-learning/confidence-calibration-check/SKILL.md` | `6df4825de26d60df14ef5566f8b35e17b58031d156996551fa34ffedf6e96db5` |
| `skills/student-learning/explain-first-interrogator/SKILL.md` | `aba08e222d596ede68b759d7adf2285d747eb37a2ccddcc573c28a0ef807b63f` |
| `skills/student-learning/fading-manager/SKILL.md` | `83681b24f6746e727480efdf657299f47fad1da9d858932bac2e3217a482b1d2` |
| `skills/student-learning/productive-failure-protocol/SKILL.md` | `981c2fbd183617787b40b094bbec3e76dc4630e9a73bc8797f51fb5c06b97c9f` |
| `skills/student-learning/progressive-hint-ladder/SKILL.md` | `5178e50cb0e4fd48e10dd6a0d16d1d884b805a2be0935989409030fb56274b55` |
| `skills/student-learning/retrieve-first-gate/SKILL.md` | `04bde0cc2ec1911ad45bcb3375763b977a7b92d87d760ed4886e5c8fe0ddae3c` |
| `skills/student-learning/srl-session-wrapper/SKILL.md` | `dd0dd6fecec960929755becfbe59a032f3d97cdc3868903f812adf2a4a524b4c` |
| `skills/student-learning/stuck-and-error-diagnosis-coach/SKILL.md` | `fb9f958472a5e8a712dd64653cb331dce737ac468a6e32868eabb340cb097473` |
| `skills/student-learning/teach-back-evaluator/SKILL.md` | `09c4d8639ccd8502c061fbf4a98a26203b60381de9da5054d50759dbe5bc87ee` |
| `skills/student-learning/transfer-bridge/SKILL.md` | `87b536419939a82c2f4bdef058a3250bc27643d2c4fa0c07bfe8ec871869b2f2` |
| `skills/student-learning/unassisted-evidence-checkpoint/SKILL.md` | `460a4d6d32b618859b5bc9de8fb148c97b5106d0b0139d6ecb6167536b808465` |
| `skills/student-learning/weekly-agency-review/SKILL.md` | `08082d91b2873907dbbce27c33fd5def5d928fa029c1425583aae03649b9cc65` |
| `skills/systems-thinking/agency-circles-for-systems-action/SKILL.md` | `96cf12fc8f23f924156feb73e1624edd7dccf1e50a3eaa16dec5184fb52f12dc` |
| `skills/systems-thinking/aspirational-systems-iceberg/SKILL.md` | `cd430b7410f250810a77c46fc192f6a0132023dcdbb442fdf09b39e787012b56` |
| `skills/systems-thinking/hexagon-complexity-mapper/SKILL.md` | `6b5524333b7c918accb93a417abd4ae25e39aa60bd4588ec55bb2c77b8d89e13` |
| `skills/systems-thinking/ladder-of-inference-reflection/SKILL.md` | `15068c44ce81c6868eaac7704fc0d925fe13a32affaf8018f3caeb272d5394ae` |
| `skills/systems-thinking/leverage-and-response-design/SKILL.md` | `e57be810949c12b97bab54e4cf4ff5457c4a0c4bbac38bdbf40d4add7a5dde5f` |
| `skills/systems-thinking/mental-model-mapper/SKILL.md` | `6b0234c7866f8ee0464c0c1bb2e84766d05cbff39e14f131ae484f8a0b24a63f` |
| `skills/systems-thinking/systems-awareness-iceberg/SKILL.md` | `4f1104d3f5f531d529e23eca26cc054065862a87e5906429dbd7f26b5b1c1f72` |
| `skills/systems-thinking/systems-wellbeing-impact-mapper/SKILL.md` | `58a5a777b15db43df3c39aa5830f6e3c8112513ce3d853b042faf31744693e83` |
| `skills/wellbeing-motivation-agency/agency-scaffold-generator/SKILL.md` | `3803c8bc63a828c42f7d5cd0429a3b8ebf8b29b6c424435005d47f06294fd2af` |
| `skills/wellbeing-motivation-agency/awe-wonder-experience-designer/SKILL.md` | `3249cc1879007f460f2ad52f078c9975a61c5450168b5fa1a5479036913d635e` |
| `skills/wellbeing-motivation-agency/belonging-classroom-culture-designer/SKILL.md` | `5d4c825c85b67b2e76a7300700141a34b72c36c2953b49810f9f9b582ae6c8fb` |
| `skills/wellbeing-motivation-agency/flow-state-condition-designer/SKILL.md` | `94714b077d4cce82fa4e1075ca4f532b79c1a9ffeba3728cfa2211e4ebe252e1` |
| `skills/wellbeing-motivation-agency/implementation-intention-designer/SKILL.md` | `83819dfb83c3aeb253eab35292ca386e699a0363fced214cd2925adde51ee92d` |
| `skills/wellbeing-motivation-agency/motivation-diagnostic-task-redesign/SKILL.md` | `1b4717de6826f4cf803ef32f63cd4e854d3629165a28fc0e192aad38d358528e` |
| `skills/wellbeing-motivation-agency/perma-based-lesson-designer/SKILL.md` | `4fd5066f923dfafcbbad20561a5a6ec4572912ec05685b6c3fd9817a7f52c982` |
| `skills/wellbeing-motivation-agency/restorative-practice-protocol-designer/SKILL.md` | `7ec90a91b85fdd63fec0199ad624d7b7c4cb2e8829ee38d28c0bb051c7ff1fe9` |
| `skills/wellbeing-motivation-agency/ruler-emotional-literacy-sequence/SKILL.md` | `c6a079ba16320268ee52493686cbcd6dd9077ab72d88aaa850a47d5f92d36257` |
| `skills/wellbeing-motivation-agency/self-efficacy-builder-sequence/SKILL.md` | `3b66bdaef032d90bd840043301ba6454105e90d5c5de711a7a8310d031405a9c` |
| `skills/wellbeing-motivation-agency/trauma-informed-practice-designer/SKILL.md` | `26fc50ed988804a27fc34e01f3de8897b7ebed4e815f5c4299c7317919a6b71e` |
| `skills/wellbeing-motivation-agency/wellbeing-learning-connection-mapper/SKILL.md` | `ee8065c41aa3bb174ef457fc19d576a21115b94ef8352bf6db1822369e36da19` |

Only four requested files under docs/audits are deliverables. Source/body/schema migration remains a proposal. Final audit-file self-check confirms165 unique CSV paths, all165 `spec_valid=false`, parseable JSON diagnostic arrays, report links/file references and no tracked-source diff. Test-created stdio child processes were closed; no long-running service was started. No deployment activity occurred.
