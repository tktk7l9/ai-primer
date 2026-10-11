// Cloudflare Web Analytics. Client-side module (src/components/analytics.tsx imports it), so keep
// it free of node: imports. The CSP allows this script origin and the POST target
// (src/lib/csp.ts); analytics.test.ts keeps them in sync.
export const BEACON_SRC = "https://static.cloudflareinsights.com/beacon.min.js";

/**
 * Site token. It is sent from every page and visible to every visitor, so it is not a secret.
 * gitleaks flags 32-hex-digit strings as generic-api-key, so gitleaks:allow is placed on the
 * flagged line (a config file would also hide other, real secrets).
 */
export const BEACON_TOKEN = "ae32780fb6264697b0cefc72c95436db"; // gitleaks:allow
