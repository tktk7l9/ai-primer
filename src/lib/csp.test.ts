import { describe, expect, it } from "vitest";
import { contentSecurityPolicy } from "./csp";

describe("contentSecurityPolicy", () => {
  const prod = contentSecurityPolicy();

  it("nonce を含まない（middleware を廃止したので発行元が無い）", () => {
    expect(prod).not.toContain("nonce-");
  });

  it("'strict-dynamic' を含まない", () => {
    // Under CSP Level 3, 'strict-dynamic' makes the allowlist and 'self' / 'unsafe-inline'
    // ignored. Adding it to this setup with no nonce or hash removes the root of trust,
    // and every script on the page stops. If you add it, provide a nonce or hash at the same time.
    expect(prod).not.toContain("strict-dynamic");
    // Forbidden in dev too, so a change that breaks only dev is not missed.
    expect(contentSecurityPolicy({ dev: true })).not.toContain("strict-dynamic");
  });

  it("インラインを許すことを script-src に明示している", () => {
    // Needed because Next's bootstrap (self.__next_f.push) is an inline script.
    // Pin it including the trailing ;. Otherwise a looser value appended after it,
    // like "'unsafe-inline' https: *", would still pass.
    expect(prod).toContain("script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com;");
  });

  it("本番では 'unsafe-eval' を出さない", () => {
    expect(prod).not.toContain("unsafe-eval");
  });

  it("dev では Next のオーバーレイ用に 'unsafe-eval' を足す", () => {
    expect(contentSecurityPolicy({ dev: true })).toContain("'unsafe-eval'");
  });

  it("締めるべきディレクティブが揃っている", () => {
    for (const directive of [
      "default-src 'self'",
      "style-src 'self' 'unsafe-inline'",
      "font-src 'self'",
      "img-src 'self' data:",
      "connect-src 'self' https://cloudflareinsights.com;",
      "manifest-src 'self'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "object-src 'none'",
      "upgrade-insecure-requests",
    ]) {
      expect(prod).toContain(directive);
    }
  });

  it("Cloudflare Web Analytics のビーコンに必要な2オリジンを許可している", () => {
    // If either is missing, the page looks fine while only the beacon is silently blocked.
    // static... serves beacon.min.js; the other receives the analytics data.
    expect(prod).toContain("https://static.cloudflareinsights.com");
    expect(prod).toContain("connect-src 'self' https://cloudflareinsights.com;");
  });

  it("ディレクティブは ; 区切りで、末尾に余分な ; を付けない", () => {
    expect(prod.endsWith(";")).toBe(false);
    expect(prod).not.toContain(";;");
  });
});
