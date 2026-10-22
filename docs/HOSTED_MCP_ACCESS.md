# Public MCP retirement and migration

The library-operated public MCP service was retired with v3.1.0. Public signup is no longer offered. The free, open-source library continues through [GitHub releases](https://github.com/GarethManning/education-agent-skills/releases/tag/v3.1.0), source plugins, manual prompts and local/self-hosted MCP. Public endpoint retirement was verified separately; see the [publication record](releases/v3.1.0-publication-record.md). No credential revocation or provider data deletion is claimed.

## Choose a replacement

- **Claude or Codex source plugin:** use the [main setup guide](../README.md#get-started). Update installed plugin caches as described in the [Codex guide](CODEX.md#updating-and-troubleshooting); updating a checkout alone may leave the old cache in place.
- **Selected local skills:** download the [portable ZIP](https://github.com/GarethManning/education-agent-skills/releases/download/v3.1.0/education-agent-skills-portable-v3.1.0.zip), extract it, and copy complete selected folders from `agent-skills/` into your client's skills directory. Preserve metadata, references, licences and policies. Use [Hermes guidance](HERMES.md) where relevant.
- **No installation:** open a source skill, copy its prompt and consult any linked examples in the repository. The chosen AI client's own data handling still applies.
- **Local MCP:** clone the source and [build/run over stdio](../mcp-server/README.md#run-locally-stdio). No Vercel, access token or email configuration is needed.
- **Remote-only MCP client:** operate your own authenticated HTTP endpoint using the [self-hosting instructions](../mcp-server/README.md#self-hosted-http), or switch to a client supporting a local/manual route. The former public connector cannot automatically become a local stdio connector.

Remove the former public connector when replacing it and verify the replacement's discovery and resources before relying on it. Old service credentials do not automatically transfer to an endpoint you operate. The release does not promise seamless migration, hosted availability or deletion/revocation of previously issued credentials.

## Self-hosting responsibilities

The HTTP, OAuth and request-access source remains available. A self-hoster must deliberately authorize their own deployment, configure their own origin, secrets and redirects, and adapt the legacy signup/contact branding before enabling email. They choose whether to offer access-email delivery and must configure their own provider and verified sender if they do. Git-triggered Vercel builds are disabled in the repository config; local/GitHub distribution requires no deployment.

The following describes retained source behavior for self-hosters, not a signup offer or an assurance about a live public deployment. It does not guarantee zero hosting, storage or invoice charges.

## Authentication and credential behavior

- The retained HTTP implementation rejects anonymous requests and accepts bearer credentials only through the `Authorization` header. Do not put tokens in URLs.
- Claude connections use an OAuth authorization-code flow with the existing Claude callback, exact redirect approval, and mandatory S256 PKCE.
- New access tokens expire after 30 days. Existing signed, hashed, and plain credentials remain accepted for compatibility unless individually revoked.
- New authorization codes are encrypted, authenticated, client/redirect-bound, and expire after 10 minutes.
- New refresh credentials are encrypted, expire after 30 days, and rotate when used. Refresh credentials from the previous signed format remain compatible.
- An individual access or refresh credential can be revoked by adding its SHA-256 hash to `MCP_REVOKED_TOKEN_HASHES`; this does not require global secret rotation or reconnecting everyone else. Revocation applies only to that exact credential: it does not revoke a token family, already-issued access tokens, or refresh credentials rotated from it. Family-wide revocation is not implemented.

The server does not add durable shared state. Same-instance authorization-code/refresh replay is rejected, and the access form applies bounded global/IP/email controls using keyed fingerprints rather than plain email keys. Serverless instances do not share those in-memory maps, and a restart clears them, so cross-instance single-use enforcement and globally durable rate limiting remain an explicit residual. The authorization server uses its fixed registered client flow and does not support URL-based client metadata documents.

## Request limits and privacy

OAuth and access-request bodies are limited to 16 KiB. MCP request bodies are limited to 1 MiB. Oversized requests receive HTTP 413, and hosted auth/access responses use `Cache-Control: no-store`.

Tool arguments also have a 10,000-element validation budget, counting array elements and object keys across the entire argument object. This admits the tested large fixture of 1,000 fictional structured records with eight fields each (9,004 elements including required arguments); larger structures return a tool error. Both limits apply, so a large string can hit the byte limit even with few elements.

If a self-hoster enables the access-email route, the email address, optional name/tool, and credential are sent to their configured email provider so delivery can be attempted. The optional use-case text is length-checked in memory and discarded. The application does not add a user database or access-request sheet. The chosen host and email provider may process standard infrastructure/delivery data; see the [privacy policy](PRIVACY.md).
