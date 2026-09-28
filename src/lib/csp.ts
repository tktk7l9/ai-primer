// Source of truth for the Content-Security-Policy. headers() in next.config.ts serves it.
//
// src/proxy.ts used to issue a per-request CSP with a nonce, but
// Next 16's proxy is Node-runtime only and OpenNext (Cloudflare Workers)
// does not support Node middleware, so it could not be migrated. Dropping the nonce for static headers
// made middleware unnecessary and made pages cacheable at the same time.
//
// script-src needs 'unsafe-inline' because Next's bootstrap (self.__next_f.push)
// is an inline script. ld+json is a data block that never executes, so it is outside script-src.
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
