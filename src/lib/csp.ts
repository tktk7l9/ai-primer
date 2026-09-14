// Content-Security-Policy の正本。next.config.ts の headers() がこれを配る。
//
// 以前は src/proxy.ts が per-request で nonce 付きの CSP を発行していたが、
// Next 16 の proxy は Node ランタイム専用で、OpenNext (Cloudflare Workers) は
// Node middleware に対応していないため移行できなかった。nonce をやめて静的ヘッダーに
// したことで middleware が不要になり、同時にページがキャッシュ可能になった。
//
// script-src に 'unsafe-inline' が要るのは Next の bootstrap（self.__next_f.push）が
// インラインだから。ld+json はデータブロックで実行されないため script-src の対象外。
//
// cloudflareinsights の2オリジンは Cloudflare Web Analytics のビーコン用。
// static.cloudflareinsights.com が beacon.min.js の配信元、cloudflareinsights.com が
// 計測データの送信先。片方でも欠けるとページは正常に見えたままビーコンだけ黙って
// ブロックされる（コンソールに CSP 違反が出るだけ）ので、csp.test.ts で両方を固定している。
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
