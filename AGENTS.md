<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# ai-primer development rules (for AI/Claude)

An AI literacy tutorial in the style of nextjs.org/learn. Fully bilingual ja/en, a source link for every fact, with freshness tracking.

## Architectural backbone

- **CSP uses static headers in next.config.ts** (the source of truth is `src/lib/csp.ts`).
  `script-src` is `'self' 'unsafe-inline'`. **Never add `'strict-dynamic'`** —
  under CSP Level 3, strict-dynamic makes both `'self'` and `'unsafe-inline'` ignored,
  and with no nonce or hash in this setup every script stops (`src/lib/csp.test.ts` blocks it).
  Migrated from per-request nonces on 2026-09-12. The reason: Next 16's proxy is
  Node-runtime only and OpenNext (Cloudflare Workers) does not support Node middleware,
  so the app could not move to Workers otherwise. The cost is losing inline-XSS protection
  and Observatory A+ (a deliberate decision).
  Pages may be static. Calling `headers()` forces dynamic rendering, so do not call it
  in pages that should be cached.
  Inline `<script>` needs no nonce (ld+json is a data block and outside script-src).
- **i18n is a `[locale]` segment + `Localized<T> = Record<"ja"|"en", T>`** (the resume pattern).
  No locale detection in middleware. Missing translations surface as type errors — do not escape with `Partial`.
- **Content is pure data** (one lesson = one file under `src/engine/content/tracks/`). Bodies are Markdown strings,
  converted to HTML on the server by `src/engine/markdown/render.ts`. No MDX.
- **Do not write volatile facts (model names, pricing, feature comparisons) in lesson bodies**. Centralize them in
  `src/engine/content/models.ts` and link to `/[locale]/models` from the body.

## Testing policy

- `src/engine/**` and `src/i18n/**` require **100% coverage** (gated by thresholds in vitest.config.ts, enforced in CI).
- `content.test.ts` checks content integrity across the board (unique ids, non-empty ja/en, quiz answers in range, sources ≥ 1,
  valid lastVerified, glossaryRefs resolve). Keep the design where new lessons are picked up by the tests automatically.
- The React UI layer (`src/components/**`, `src/app/**`) has its own floor in vitest.config.ts
  (2 points below the measured value). Write behavioural tests with Testing Library + user-event:
  render the component or call the async page with `params`, act like a user, assert visible text,
  roles and state. No snapshot-only tests. Mock `next/navigation` (`notFound` throws) per test file.
  `src/app/opengraph-image.tsx` is excluded (next/og renders PNG; jsdom cannot exercise it).

## Content writing rules

- Every lesson: at least one `sources` entry and a `lastVerified` (ISO date) are required.
- Claims about models, pricing and features **must be verified by web search at writing time** (do not trust the LLM's training knowledge).
  Prefer permanent URLs such as official docs and papers as sources.
- Write ja first and sync en in the same commit (never leave a change in only one language).

## Dev commands

- `npm run dev` / `npm run build` / `npm start`
- `npm run typecheck` / `npm test` / `npm run coverage` (100% gate)

## Commit granularity

- One commit = one complete change (one lesson, one component, etc.). Commit with tests green.

## Before publishing

- Starts private. Publish only via publish-check (gitleaks 0 / npm audit all 0 / no PII).
  Observatory **dropped from A+ (115) to B (75, 10/12)** (measured on the Workers
  production URL on 2026-09-14). Both failing items are accepted costs, so this score is not a
  publishing blocker — `content-security-policy` −20 is the `'unsafe-inline'` from the CSP migration,
  and `subresource-integrity` −5 is the Cloudflare Web Analytics beacon. **Never add SRI to
  the beacon**: Cloudflare swaps `beacon.min.js` behind an unversioned URL, so pinning
  `integrity` silently stops just the beacon on the next update.
  Lighthouse holds 100/100/100/100 on both mobile and desktop.
