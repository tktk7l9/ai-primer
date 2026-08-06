import { NextResponse, type NextRequest } from "next/server";

// Nonce-based Content-Security-Policy. Next.js reads the nonce from the
// request's CSP header and stamps it onto its own <script> tags (the routes
// are force-dynamic so this happens per request).
export function proxy(request: NextRequest) {
  const nonce = btoa(crypto.randomUUID());
  const dev = process.env.NODE_ENV !== "production";

  const csp = [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'${dev ? " 'unsafe-eval'" : ""}`,
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

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("content-security-policy", csp);

  const response = NextResponse.next({ request: { headers: requestHeaders } });
  response.headers.set("content-security-policy", csp);
  return response;
}

// nonce が要るのは HTML を返すルートだけ。メタデータ系の静的ルート
// (robots.txt / sitemap.xml / アイコン・OG画像) まで middleware を通すと、
// nonce を使わないのに関数実行だけ消費する。ボットは robots.txt と sitemap.xml を
// 高頻度で叩くため、除外しないと Vercel の Function Invocation を無駄に食う。
export const config = {
  matcher: [
    {
      source:
        "/((?!_next/static|_next/image|favicon.ico|icon.svg|opengraph-image|robots.txt|sitemap.xml).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
