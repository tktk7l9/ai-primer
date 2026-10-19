// The cookie jar of one link check (scripts/check-freshness.ts): cookies a site sets on one redirect hop are sent back
// on the later hops, as a browser would. Without this, ai.google.dev's silent sign-in attempt
// (page → /oauth2authorize → accounts.google.com → /oauth2callback → page → ...) never ends, because the cookie that
// records "already tried" is dropped on every round, and a page that opens fine was reported as a redirect loop.
//
// Only what a redirect chain needs: a cookie goes back to the host that set it, or, with a Domain attribute, to that
// domain and its subdomains (nature.com sets the cookies for www.nature.com from idp.nature.com this way). Path,
// Secure and expiry are ignored, cookies live as long as the jar, and a later cookie of the same name and scope
// replaces the earlier one.

export class CookieJar {
  /** Scope ("www.example.com" for a host-only cookie, ".example.com" for a Domain cookie) → name → value. */
  private readonly byScope = new Map<string, Map<string, string>>();

  /** Remembers the cookies from the Set-Cookie headers of a response from `url`. */
  store(url: string, setCookieHeaders: readonly string[]): void {
    const host = new URL(url).hostname;
    for (const header of setCookieHeaders) {
      const [pair, ...attributes] = header.split(";");
      const eq = pair.indexOf("=");
      if (eq <= 0) continue;
      const scope = cookieScope(host, attributes);
      if (scope === null) continue;
      const cookies = this.byScope.get(scope) ?? new Map<string, string>();
      cookies.set(pair.slice(0, eq).trim(), pair.slice(eq + 1).trim());
      this.byScope.set(scope, cookies);
    }
  }

  /** The Cookie header value for a request to `url`, or undefined when no stored cookie applies to its host. */
  headerFor(url: string): string | undefined {
    const host = new URL(url).hostname;
    const pairs: string[] = [];
    for (const [scope, cookies] of this.byScope) {
      if (!scopeCovers(scope, host)) continue;
      for (const [name, value] of cookies) pairs.push(`${name}=${value}`);
    }
    return pairs.length > 0 ? pairs.join("; ") : undefined;
  }
}

/**
 * The scope a Set-Cookie from `host` applies to: the host alone, or "." + Domain when the attribute names the host
 * or one of its parent domains. A Domain that does not cover the responding host is rejected, as browsers do.
 */
function cookieScope(host: string, attributes: readonly string[]): string | null {
  for (const attribute of attributes) {
    const [name, ...rest] = attribute.split("=");
    if (name.trim().toLowerCase() !== "domain") continue;
    const domain = rest.join("=").trim().toLowerCase().replace(/^\./, "");
    if (domain === "") return host;
    return host === domain || host.endsWith(`.${domain}`) ? `.${domain}` : null;
  }
  return host;
}

function scopeCovers(scope: string, host: string): boolean {
  if (!scope.startsWith(".")) return scope === host;
  return host === scope.slice(1) || host.endsWith(scope);
}
