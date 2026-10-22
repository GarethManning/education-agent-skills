# Public release and retirement preparation report — 22 October 2026

## Result and authority

Candidate ready for independent read-only review. This worker prepared the v3.1.0 release documentation, version-only plugin updates and additive Git-deployment guard. It did not publish, commit, push, create a release/download, deploy, pause a service, change real settings or revoke credentials. Those external operations and final status evidence remain with the root coordinator under Gareth's continuing authorization.

Checkout: `/Users/garethmanning/Github/education-agent-skills`. Branch: `codex/agent-skills-standards-quality-2026-10-22`. HEAD remains `6bbbce418f82e11044009c9f3b7373a354de5bd0`; accepted dirty build content remains present.

The [written brief](public-release-retirement-2026-10-22.md) initially prohibited test changes. When the required plugin version bump exposed the one hardcoded old expectation, the root explicitly authorized one bounded amendment during the active task: change only `expect(plugin.version).toBe("2.1.0")` to `expect(plugin.version).toBe("2.2.0")`. The root appended that exception to the brief. No other assertion changed.

## Immediate-before evidence

Before any worker edit, copied all existing owned files and recorded all 323 Git-visible file SHA256 hashes, branch, HEAD, status and time at:

`/tmp/education-public-release-before-20261022T213014Z/`

- `snapshot.json`: original inventory, hashes and status.
- `files/`: exact original owned files; includes existing accepted documentation edits.
- `files/tests/skills-library.spec.ts` and `test-version-exception-before.json`: additional exact immediate-before snapshot for the later-authorized assertion update.
- `checks.json`: final focused check receipt.
- `release-only.diff`: worker-only diff against these snapshots, including new release note/report; useful because ordinary Git diff also includes accepted prior work.

The root's subsequent brief amendment is the only preexisting file changed outside worker ownership. The original full hash inventory still records the earlier brief, so that exception remains visible rather than rewriting before-evidence.

## Edits

- `README.md`: short dated educator update; links to the v3.1.0 release and named portable ZIP; distinguishes rich source and portable views; explains full-folder copying and public MCP retirement. Replaces public signup/production configuration with local stdio, source-plugin/manual and operator-owned HTTP routes. Existing remote-only users are told migration requires a replacement, not automatic conversion.
- `CHANGELOG.md` and new `docs/releases/v3.1.0.md`: current release summary, 37 targeted revisions, eight reorganizations/two overlaps, 43 distinct changed skills, stable IDs/interfaces, runtime/privacy/correctness changes, pinned 165/165 format result, dated tests and truthful client limits. Historical changelog bodies remain unchanged.
- Current guides `docs/AGENT_SKILLS.md`, `docs/ARCHITECTURE.md`, `docs/SKILL_QUALITY.md`, `docs/CODEX.md`, `docs/HERMES.md`: download/whole-folder guidance, current version meanings, migration routes and tested limits. Hermes no longer recommends raw single-file downloads as complete installations because those omit resources. Existing install commands retain explicit untested Hub/session limitations.
- `docs/HOSTED_MCP_ACCESS.md`: retirement/migration guide with preserved source auth, expiry, revocation, request and privacy limits, clearly scoped to self-hosters. No signup invitation, claim of service pause, credential deletion, zero charges or seamless migration.
- `docs/PRIVACY.md`: dated notice distinguishes former service, local use, AI client handling and optional self-hosted provider processing. No claim of provider deletion or credential revocation.
- `mcp-server/README.md`: locked source-checkout local build/stdio instructions and actual `dist/index.js` entry point; no Vercel/token/email setup needed for stdio. Explains deliberate self-host deployment, own origin/authentication/redirects, optional own email provider and verified sender. Warns self-hosters that `src/access.ts` retains a legacy signup URL and `api/request-access.ts` retains operator branding/reply-to, which they must adapt in their fork before offering signup/email; runtime source remains untouched.
- `CLAUDE.md`: introductory wording only, replacing live public service invitation with current distribution/retirement description. `AGENTS.md` untouched.
- `.claude-plugin/plugin.json` and `.codex-plugin/plugin.json`: only `version`, 2.1.0→2.2.0; all other fields and both 20-domain arrays identical to immediate-before copies.
- `mcp-server/vercel.json`: only additive `git.deploymentEnabled: false`; all existing rewrites preserved. This candidate configuration does not prove a live project pause or settings change.
- `tests/skills-library.spec.ts`: precisely the authorized one-line expected plugin version alignment; assertion strength preserved.

No skill/source metadata, resources, identity/schema, runtime, registry, MCP bundle, export, audit history, npm version or licence was edited by this worker. No X-post URL or endorsement/certification was invented.

## Checks and results

Read local `AGENTS.md`, `CLAUDE.md`, `STATE.md`, compact build status and current build receipt before editing. Inspected `package.json`, Playwright configuration, the test file and relevant MCP source portions before running the proportional library check or documenting setup. Orientation used `rg`, `cat`, `sed`, `wc` and `git status/diff`; no existing project script was executed without inspection. A lightweight memory registry lookup supplied no authority for release claims; all facts used were verified against this checkout/brief.

1. Immediate-before snapshot: inline Python using `git ls-files -co --exclude-standard -z`, SHA256 and copied owned files — success, 323 recorded Git-visible file hashes. No Git mutation.
2. `env -u HOSTED_MCP_BASE_URL npm test -- --reporter=dot` — first run: 20 passed, one hosted skip, one expected-version failure at `tests/skills-library.spec.ts:217` (expected 2.1.0, received 2.2.0). Worker reported the ownership boundary without weakening or bypassing the assertion.
3. After explicit root authorization and exact additional test-file snapshot, changed the one version literal and reran the same command — **21 passed, one hosted-only skipped, exit 0**, 1.8 seconds reported by Playwright. No endpoint calls; setting the hosted base URL was explicitly suppressed. Only environment color warnings appeared. No server was started.
4. Focused inline Python assertions — **pass**: both manifests version 2.2.0; nonversion objects byte-equivalent in meaning to snapshots; both 20-domain arrays unchanged; Vercel config exactly original plus `git.deploymentEnabled: false`; rewrites unchanged; test file exactly original plus the one version-literal substitution.
5. Local Markdown target/heading checks across current owned documentation and new release note — **77 links/anchors passed**, including new setup/release/migration references. External URLs were not requested. Intended GitHub release/download URLs must be checked by root after publication; this worker does not claim they already resolve.
6. Existing portable-output structure inspected — **165 folders**, each with `SKILL.md`, `LICENSE` and `references/education.json`. Consumer instructions correctly use extracted `agent-skills/<skill-name>/`; maintainer instructions use generated `dist/agent-skills/<skill-name>/`. The final ZIP/install note remains root-owned and was not created here.
7. Preservation assertions — **306 protected preexisting snapshot files unchanged**, after excluding owned paths and the root's brief amendment. This covers all canonical skills/resources, runtime, scripts, registries/bundle and historical audit files. HEAD unchanged.
8. `registry.json` SHA256 remains `4315ba389f09e114f5d3bf38153bab2b6ff2da0fea10a26dcbbd0a5917daa1cc`; `mcp-server/src/skills.json` remains `36e9a5b9957d66e1c74a9161565160b2ebb615e13702e8a8b58e6a2dda8c153e`.

The first preservation assertion stopped because the root had amended the brief while this worker was active. Rechecked with that disclosed external-owner exception; no protected-content mismatch remained. No repair to source content was needed.

## Limits and handoff

The release note's 111 tests, official validator/discovery result, zero reported audit vulnerabilities and client receipts are explicitly attributed to the accepted dated build evidence, not falsely described as freshly rerun. This worker reran only the proportionate root library suite. No full 111-test rerun, official tool execution, dependency installation, model call, hosted call, deployment, real client settings change or cost/usage review occurred. No worker process/server remains running.

Independent review must use this worker-only diff/snapshot alongside the inherited accepted build. Root owns final ZIP/install note, publication/tag/download receipt, service retirement/pause, external URL verification, current-state updates and final closure. No new product decision is required by this candidate.

Worker children: zero; no inherited-history worker exceptions; no worker external mutations. Token/credit telemetry unavailable. This packet passed the content/config checks; one version assertion required the disclosed bounded ownership amendment before the local suite passed.
