// Source of truth for the Content-Security-Policy. headers() in next.config.ts serves it.
//
// src/proxy.ts used to issue a per-request CSP with a nonce, but
// Next 16's proxy is Node-runtime only and OpenNext (Cloudflare Workers)
// does not support Node middleware, so it could not be migrated. The static header below is the
// baseline, and pages stay cacheable because nothing per-request happens in Next.
//
// script-src has 'unsafe-inline' here because Next's bootstrap (self.__next_f.push)
// is an inline script. In production every HTML response passes through worker.ts, which swaps
// that token for a per-request nonce (src/lib/csp-nonce.ts), so browsers never see
// 'unsafe-inline' in script-src on pages. `next dev` / `next start` (CI Lighthouse) keep this
// static value. ld+json is a data block that never executes, so it is outside script-src.
//
// The two cloudflareinsights origins are for the Cloudflare Web Analytics beacon.
// static.cloudflareinsights.com serves beacon.min.js and cloudflareinsights.com
// receives the analytics data. If either is missing, the page looks fine while only the beacon
// is silently blocked (only a CSP violation in the console), so csp.test.ts pins both.
export function contentSecurityPolicy({ dev = false }: { dev?: boolean } = {}): string {
  return [
    "default-src 'self'",
    `script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com${dev ? " 'unsafe-eval'" : ""}`,
    "style-src 'self' 'unsafe-inline'",
    "font-src 'self'",
    "img-src 'self' data:",
    "connect-src 'self' https://cloudflareinsights.com",
    "manifest-src 'self'",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "object-src 'none'",
    "upgrade-insecure-requests",
  ].join("; ");
}
