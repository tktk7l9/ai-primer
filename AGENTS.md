<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# ai-primer development rules (for AI/Claude)

An AI literacy tutorial in the style of nextjs.org/learn. Fully bilingual ja/en, a source link for every fact, with freshness tracking.

## Architectural backbone

- **CSP: static baseline in next.config.ts, per-request nonce in the Worker** (source of truth:
  `src/lib/csp.ts`; Worker side: `worker.ts` + `src/lib/csp-nonce.ts`). The static header has
  `script-src 'self' 'unsafe-inline'`. `wrangler.jsonc` `main` is `worker.ts`, which wraps
  `.open-next/worker.js` and, for every `text/html` response, replaces that `'unsafe-inline'` with
  a fresh `'nonce-…'` and stamps the nonce on each inline `<script>` via HTMLRewriter (streaming).
  The header is replaced, never appended: exactly one CSP per response (two CSPs are both
  enforced). This is what clears the Observatory `content-security-policy` deduction (the
  measured score is in README).
  Every page must go through the Worker: `public/` holds no HTML, because Workers Assets serves
  those files before the Worker runs.
  **Never point `main` back at `.open-next/worker.js`**: the site keeps working and the CSP
  silently falls back to `'unsafe-inline'` (`src/lib/worker-entry.test.ts` blocks it).
  **Never add `'strict-dynamic'`**: the nonce is only on inline scripts, so it would make `'self'`
  (the `/_next/static` chunks) and the `static.cloudflareinsights.com` host source (the beacon)
  be ignored and stop them (`src/lib/csp.test.ts` / `csp-nonce.test.ts` block it).
  `next dev` / `next start` (CI Lighthouse) do not run the Worker and keep the static header.
  History: the per-request nonce used to come from `src/proxy.ts`; Next 16's proxy is
  Node-runtime only and OpenNext (Cloudflare Workers) does not support Node middleware, so it was
  dropped on 2026-09-12 (Observatory fell to B) until the Worker wrapper brought it back on
  2026-10-11.
  Pages may be static. Calling `headers()` forces dynamic rendering, so do not call it
  in pages that should be cached.
  Only inline JavaScript gets the nonce: `<script src>`, an SVG `<script href>` and data blocks
  such as ld+json (outside script-src, never executed) are left unstamped.
  **Trust boundary:** HTMLRewriter cannot tell Next's inline scripts from injected ones, so any
  inline `<script>` that reaches the server-rendered HTML gets the nonce. The nonce is safe only
  while the server never emits untrusted HTML. `src/lib/trust-boundary.test.tsx` enforces it:
  `dangerouslySetInnerHTML` is allowed only in the files on its allowlist (JSON-LD with every `<`
  escaped, the trusted-Markdown lesson body), each with a reason and a hostile-input test. A new
  sink goes on that list with both, or it fails CI.
- **i18n is a `[locale]` segment + `Localized<T> = Record<"ja"|"en", T>`** (the resume pattern).
  No locale detection in middleware. Missing translations surface as type errors — do not escape with `Partial`.
- **Content is pure data** (one lesson = one file under `src/engine/content/tracks/`). Bodies are Markdown strings,
  converted to HTML on the server by `src/engine/markdown/render.ts`. No MDX.
- **Do not write volatile facts (model names, pricing, feature comparisons) in lesson bodies**. Centralize them in
  `src/engine/content/models.ts` and link to `/[locale]/models` from the body.

## Testing policy

- `src/engine/**`, `src/i18n/**` and `src/lib/**` (the CSP and the Worker's nonce) require **100% coverage**
  (gated by thresholds in vitest.config.ts, enforced in CI).
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

- Starts private. Publish only via publish-check (gitleaks 0 / `node scripts/audit-gate.mjs` passes, i.e. no advisory outside `audit-allowlist.json` / no PII).
  Observatory history: A+ (115) → B (75, 10/12) on 2026-09-14 (Workers production URL), when the
  nonce was dropped (`content-security-policy` −20) and the Cloudflare Web Analytics beacon was
  added as a `<script src>` (`subresource-integrity` −5). On 2026-10-11 the Worker nonce and the
  beacon appended after hydration removed both deductions (see the CSP bullet above; the
  measured score is in README). **Never add SRI to the beacon**: Cloudflare swaps `beacon.min.js` behind
  an unversioned URL, so pinning `integrity` silently stops just the beacon on the next update.
  Keep it out of the HTML instead (`src/components/analytics.tsx` appends it after hydration).
  Lighthouse holds 100/100/100/100 on both mobile and desktop.
- CI runs `node scripts/audit-gate.mjs` instead of a bare `npm audit`. It fails on any advisory not listed in
  `audit-allowlist.json`. An entry needs a reason and an `expires` date (keep it about a month out), and
  `devOnly: true` stops matching once the package becomes reachable from production dependencies. The gate also
  fails when an allowlisted advisory gets a fix, so the entry is removed by updating rather than forgotten.
