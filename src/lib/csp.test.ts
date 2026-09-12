import { describe, expect, it } from "vitest";
import { contentSecurityPolicy } from "./csp";

describe("contentSecurityPolicy", () => {
  const prod = contentSecurityPolicy();

  it("nonce を含まない（middleware を廃止したので発行元が無い）", () => {
    expect(prod).not.toContain("nonce-");
  });

  it("'strict-dynamic' を含まない", () => {
    // CSP Level 3 では 'strict-dynamic' があると allowlist と 'self' / 'unsafe-inline' が
    // 無視される。nonce もハッシュも無いこの構成で足すと信頼の起点が消え、
    // ページ上の全スクリプトが動かなくなる。足すなら nonce かハッシュを同時に用意すること。
    expect(prod).not.toContain("strict-dynamic");
  });

  it("インラインを許すことを script-src に明示している", () => {
    // Next の bootstrap（self.__next_f.push）がインラインなので必要。
    expect(prod).toContain("script-src 'self' 'unsafe-inline'");
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
      "connect-src 'self'",
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

  it("ディレクティブは ; 区切りで、末尾に余分な ; を付けない", () => {
    expect(prod.endsWith(";")).toBe(false);
    expect(prod).not.toContain(";;");
  });
});
