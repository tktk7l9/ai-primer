// Content-Security-Policy の正本。next.config.ts の headers() がこれを配る。
//
// 以前は src/proxy.ts が per-request で nonce 付きの CSP を発行していたが、
// Next 16 の proxy は Node ランタイム専用で、OpenNext (Cloudflare Workers) は
// Node middleware に対応していないため移行できなかった。nonce をやめて静的ヘッダーに
// したことで middleware が不要になり、同時にページがキャッシュ可能になった。
//
// script-src に 'unsafe-inline' が要るのは Next の bootstrap（self.__next_f.push）が
// インラインだから。ld+json はデータブロックで実行されないため script-src の対象外。
export function contentSecurityPolicy({ dev = false }: { dev?: boolean } = {}): string {
  return [
    "default-src 'self'",
    `script-src 'self' 'unsafe-inline'${dev ? " 'unsafe-eval'" : ""}`,
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
  ].join("; ");
}
