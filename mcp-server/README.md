# Education Skills MCP Server

MCP server exposing the [Education Agent Skills](https://github.com/GarethManning/education-agent-skills) library as callable tools and prompts. 165 evidence-based education skills across 20 domains, plus 4 discovery tools.

The library-operated public MCP service is retiring with [v3.1.0](../docs/releases/v3.1.0.md); public signup is no longer offered. Use local stdio or operate your own authenticated HTTP endpoint. Existing remote-only connectors need a replacement endpoint or a supported local/manual route; credentials and client settings do not migrate automatically. See [migration guidance](../docs/HOSTED_MCP_ACCESS.md) and [Codex setup](../docs/CODEX.md).

## Architecture

All skills are registered as prompts. Skills that permit model invocation are also registered as tools:

- **Tools** (157 total: 153 skills + 4 meta) — work in Claude.ai and any MCP client. The 12 skills marked `disable-model-invocation: true` are deliberately not tools.
- **Prompts** (165) — all skills remain discoverable and available for explicit prompt use, including the 12 that are not model-invoked tools.

### Meta-tools (always available as tools)

| Tool | Purpose |
|------|---------|
| `list_skills` | Browse all skills grouped by domain |
| `get_skill_details` | Full metadata for a specific skill (evidence sources, schemas, chaining info) |
| `find_skills` | Search by tag, domain, evidence strength, or free text |
| `suggest_skills` | Describe a teaching problem in plain English, get 3-5 relevant skill recommendations |

## Run locally (stdio)

```bash
cd mcp-server
npm ci
npm run build
npm start
```

Run this from a source checkout containing both `skills/` and `mcp-server/`, with Node.js and npm installed. `npm ci` installs the locked dependencies; `npm start` runs stdio and stays attached until the client closes it or you press Ctrl-C. Local stdio requires no Vercel setup, bearer token, OAuth secret, public base URL or email provider. Your AI client's own model/data handling still applies.

For a desktop MCP client supporting command-based stdio, point it at the built source server:

```json
{
  "mcpServers": {
    "education-skills": {
      "command": "node",
      "args": ["/absolute/path/to/mcp-server/dist/index.js"]
    }
  }
}
```

## Development

```bash
npm run dev          # Run with tsx (no build step)
npm run build        # Compile TypeScript
npm test             # Run Playwright test suite
npm run bundle-skills # Re-generate src/skills.json for Vercel deployment
```

## Self-hosted HTTP

For clients accepting only remote MCP (including remote-only Claude connectors), deploy your own copy of the retained `api/` handlers using a platform that supports those routes, and configure your own canonical HTTPS origin, authentication and approved client redirects. The source includes Vercel routing, but this repository's `vercel.json` sets `git.deploymentEnabled: false`: Git pushes do not opt into Vercel deployments. Operators must deliberately choose and authorize their own deployment process. See [Vercel's Git configuration](https://vercel.com/docs/project-configuration/git-configuration). A GitHub download or local installation needs no hosted deployment.

Connect your remote client to **your own origin plus `/mcp`**, using Streamable HTTP. Its client must support the server's authentication flow; a successful local test does not prove a real OAuth connection. Do not use the retired public origin or old service credentials as self-host configuration.

Before enabling signup/email in your fork, replace the legacy public signup constant in `src/access.ts` with your own request-access URL, and review `api/request-access.ts`: sender display name, reply-to address, email text and documentation links retain the original operator's branding. Set your own verified sender and email-provider configuration. Environment variables alone do not change every legacy branding/contact string. Publish your own privacy notice and test the complete flow before offering it to others. These source routes remain available for self-hosters; public library signup is retired.

### Environment variables

These HTTP/auth/email settings apply to self-hosted endpoints, not local stdio.

| Variable | Description |
|----------|-------------|
| `SKILLS_FILTER` | Optional domain filter for the source-file loader used by local `dist/index.js`; not a hosted access setting. |
| `MCP_PUBLIC_BASE_URL` | Required canonical HTTPS origin for your hosted endpoints. Request `Host` headers are never trusted. |
| `MCP_TOKEN_SIGNING_SECRET` | Required private random secret of at least 32 bytes for newly issued, 30-day access tokens. Existing signed tokens remain compatible with their issuing configuration. |
| `MCP_OAUTH_SIGNING_SECRET` | Optional separate random OAuth key of at least 32 bytes. New OAuth credentials use it; verification also accepts the token-signing key. |
| `MCP_OAUTH_REDIRECT_URIS` | Optional comma/newline-separated exact redirect allowlist in addition to the Claude callback. |
| `MCP_REVOKED_TOKEN_HASHES` | Optional comma/newline-separated SHA-256 hashes of individual access or refresh credentials to revoke without rotating a global secret. |
| `MCP_ACCESS_TOKEN_HASHES` / `MCP_ACCESS_TOKENS` | Compatibility inputs for operator-issued hashed/plain tokens. New issuance uses expiring signed tokens. |
| `RESEND_API_KEY` | Required only when you enable access-email delivery. Provider failures return an error without exposing provider details, requester data or credential fragments. |
| `MCP_FROM_EMAIL` | Your verified sender address when you enable access email; the source fallback is a provider test address. |

Hosted OAuth requires S256 PKCE and an approved callback. Authorization codes are encrypted, authenticated, bound to the client and redirect, expire after 10 minutes, and are rejected on replay within the serving instance. New refresh credentials are encrypted, expire after 30 days, and rotate on use. Bearer credentials are accepted only through the `Authorization` header.

The implementation does not add a durable shared store. Rate limits and single-use replay caches are best-effort per serverless instance; a replay routed to a separate live instance cannot be ruled out. The short lifetimes, encryption, PKCE binding, exact redirects, credential rotation, and individual revocation list reduce this residual without pretending it is globally stateful.

## How skill tools work

1. Teacher (or Claude) calls a skill tool with required parameters
2. Server loads the skill's evidence-based prompt template
3. `{{placeholder}}` tokens are replaced with provided values; unprovided optional params become `[not provided]`
4. The assembled prompt is wrapped in instruction framing and returned as the tool result
5. The calling Claude model follows the instructions and generates the structured output

## Licence

[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) — see [LICENSE](../LICENSE).
