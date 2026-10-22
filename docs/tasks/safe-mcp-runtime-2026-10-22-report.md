# Safe MCP runtime — local builder report

Date: 2026-10-22. Checkout: `/Users/garethmanning/Github/education-agent-skills`.
Branch: `codex/agent-skills-standards-quality-2026-10-22`.
Base/HEAD: `6bbbce418f82e11044009c9f3b7373a354de5bd0`.

## Outcome

Implemented the bounded runtime/package repairs and passed the local checks. No commits, pushes, publication, deployment, hosted calls, model calls, learner data, database operations or subagents. The coordinator owns independent review/integration. Source skills, registry, bundled skill content, root tests, root documentation and plugin manifests were not changed by this packet. Concurrent untracked audit/task documents were preserved.

## Changes

- `mcp-server/src/skill-loader.ts`: replaced gray-matter with direct `yaml` 2.9.1. Require plain opening/closing `---` lines, parse YAML core data without executable engines, reject parser warnings/errors, custom tags, aliases/cycles, complex/non-string map keys and non-finite numbers. Failures retain the source file path. Existing prompt extraction and runtime metadata validation remain.
- `mcp-server/src/tool-handler.ts`: one callback pass over original placeholder tokens, with literal case-insensitive argument keys. Replacement strings, dollar patterns and tokens inside supplied values are not reinterpreted; optional missing tokens and the existing Teacher Input summary remain.
- `mcp-server/src/server.ts`: SDK `maxToolInputElements` is explicitly 10,000. A fictional 1,000-record/eight-field fixture uses 9,004 elements including root keys, leaving 996 elements of headroom. The separate 1 MiB HTTP request cap remains. Tests accept exactly 10,000 and reject 10,001 elements via both array and nested-object forms, then verify the server still responds.
- `mcp-server/src/oauth.ts`: removed unsupported `client_id_metadata_document_supported` advertisement; fixed-client OAuth behavior retained.
- `docs/HOSTED_MCP_ACCESS.md`: clarified exact-token versus family revocation, instance-local/restart-limited replay state, fixed-client support and argument/byte limits.
- `mcp-server/package.json` and lock: upgraded compatible SDK to 1.32.1, removed gray-matter and its old YAML chain, added YAML, refreshed affected compatible transitives, added `prepack: npm run build`.
- Tests: new `skill-loader.spec.ts`, `tool-handler.spec.ts`, `packed-cli.spec.ts`; extended `mcp-server.spec.ts` and `oauth-handlers.spec.ts`.
- `mcp-server/LICENSE` already existed. Its original terms and bytes were retained; the package smoke verifies inclusion and equality. No licensing decision or relicensing.

## Dependency evidence and install controls

Fresh npm registry metadata on 2026-10-22 reported SDK latest 1.32.1 and YAML latest 2.9.1. The SDK memory-validation advisory [GHSA-46jr-4wx8-v453](https://github.com/modelcontextprotocol/typescript-sdk/security/advisories/GHSA-46jr-4wx8-v453) requires both SDK >=1.32.0 and an explicit element limit; upgrading alone leaves the guard disabled. YAML parsing options were checked against the [maintainer documentation](https://eemeli.org/yaml/).

| Package | Before | After |
| --- | --- | --- |
| @modelcontextprotocol/sdk | 1.30.0 | 1.32.1 |
| yaml | absent | 2.9.1 |
| fast-uri | 3.1.6 | 3.1.9 |
| proxy-addr | 2.0.7 | 2.0.8 |
| hono | 4.13.5 | 4.13.13 |
| ip-address | 10.5.0 | 10.7.4 |
| qs | 6.15.3 | 6.16.1 |

No unrelated major upgrades. npm audit initially reported 10 affected package records: 1 critical, 2 high, 7 moderate. Final audit: **0 vulnerabilities at every severity**, no exceptions needed.

Before installation, inspected registry lifecycle scripts for every added/changed package after lock-only resolution. SDK has a source-build prepack hook; ip-address has prepack and a prepare hook that sets a Git hooks path; qs has a prepack hook; other changed packages have no relevant install/preparation/pack hooks. Existing unchanged install-hook packages were esbuild and optional fsevents. All dependency installation used `--ignore-scripts`; no dependency hooks were executed. The project-owned prepack intentionally executes only its local TypeScript build and skill snapshot copy.

## Commands and results

Runtime: Node v22.23.4, npm 10.9.9. Commands below ran in `mcp-server` unless otherwise stated.

| Command/check | Result |
| --- | --- |
| Baseline `npm run build` | Passed |
| Baseline `npm test -- --reporter=dot` | 42 passed, 3.3 seconds |
| Baseline loader snapshot, then final Node `deepStrictEqual` of metadata/prompt/description/toolName | 165/165 exact matches |
| `npm view @modelcontextprotocol/sdk version dist-tags --json`, SDK 1.32.0/1.32.1 and YAML scripts/engines metadata | Inspected fresh registry data |
| Baseline `npm audit --audit-level=high --json` | Failing baseline: 10 affected package records; captured summary above |
| `npm install --package-lock-only --ignore-scripts --no-audit` | Passed |
| `npm update fast-uri proxy-addr hono ip-address qs --package-lock-only --ignore-scripts --no-audit` | Passed |
| Registry package-manifest script inspection for each changed/added version | Completed before install; hooks recorded above |
| `npm install --ignore-scripts --no-audit` | Passed |
| `npm ls @modelcontextprotocol/sdk yaml fast-uri proxy-addr hono ip-address qs` | Resolved versions match table |
| Final `npm run build` | Passed |
| Final `npm test -- --reporter=dot` | **66 passed, 5.5 seconds** |
| Final focused `npm test -- --reporter=dot tests/packed-cli.spec.ts` | 1 passed, 2.9 seconds, after retaining original LICENSE |
| Final `npm audit --audit-level=high` | **Passed, found 0 vulnerabilities** |
| `git diff --check` | Passed |
| `git diff --name-only -- skills registry.json mcp-server/src/skills.json README.md tests` | Empty: protected content unchanged |

Parity snapshot `/tmp/education-mcp-baseline-parity.json` SHA-256: `9409053fc77a3daf0ceceb51c47121ccfc14af23a793fe4f9a4d212a054ebc95`. Durable regression coverage compares all165 metadata, prompts, descriptions and tool names with the unchanged checked-in bundle, excluding machine-specific file paths.

New parser coverage includes plain/flow/block YAML, CRLF, all four supported prompt layouts, JS/javascript delimiters, missing/malformed delimiters, executable/custom tags, typed set, cyclic alias, nonfinite number, complex key and duplicate key. Marker assertions prove rejected JS inputs did not execute. Literal replacement coverage includes `$&`, other dollar patterns, `{{literal}}`, nested supplied tokens, regex characters in keys, case matching and arrays.

Full suite preserves 165 prompts, 157 tools (153 skill tools plus four discovery tools), and 12 explicit-only skills absent from tools but available as prompts. Existing strict scalar schemas, authorization fast failure, OAuth/refresh/revocation and all five HTTP POST byte-limit/413 checks pass.

The package smoke runs `npm pack --pack-destination <temp> --json`, verifies TypeScript prepack execution, extracts the tarball, installs locked production dependencies with `npm ci --ignore-scripts --prefer-offline --omit=dev --no-audit --no-fund`, removes the optional source snapshot and install-only lock, then handshakes with `dist/cli.js` from an unrelated empty directory. It lists 157 tools/165 prompts and calls `list_skills`, without source-tree path dependencies. Only npm registry dependency retrieval is permitted; the child CLI receives a small environment without hosted/provider credentials. Finally blocks close the client/transport and remove temporary package storage.

## Failures resolved and remaining limits

- Initial parser compile failed because YAML visitor values were not yet narrowed before reading `tag`; changed to the library's typed `isNode` check and compilation passed.
- The first complete packed smoke failed under strict `--offline` because an unchanged zod tarball was absent from this machine's npm cache. Replaced offline-only install with `--prefer-offline`; scripts remain disabled. Subsequent complete suite and focused smoke passed. A cold-cache package test may download locked public dependencies and needs registry access.
- This is local implementation/test evidence, not a hosted release or independent acceptance. Node22 was tested; no separate Node20 run. Existing legacy credential compatibility, exact-token-only revocation, instance-local replay/rate maps, and lack of durable family revocation remain as documented.
- Rejecting non-core YAML/aliases is intentional; all current165 skills retain exact parity. No educational content or frontmatter fields changed.
- No started server/process remains running; stdio children are closed by test teardown. No paid service or Gareth decision was needed for this packet.

## Rollback

The coordinator can discard/revert only the listed tracked runtime/docs/test/package changes and remove the three new focused tests plus this report, preserving concurrent documents. Restore the prior lock and reinstall using scripts disabled if rolling dependencies back. No database, hosted configuration, deployment or skill-content rollback is involved.
