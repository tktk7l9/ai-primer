import type { NextConfig } from "next";
import { contentSecurityPolicy } from "./src/lib/csp";

// CSP は src/lib/csp.ts が正本。以前は src/proxy.ts が per-request で nonce 付きの
// CSP を発行していたが、middleware を廃止して静的ヘッダーに移した。
const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: contentSecurityPolicy({ dev: process.env.NODE_ENV !== "production" }),
  },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Permissions-Policy",
    value: "geolocation=(), camera=(), microphone=(), payment=(), usb=(), interest-cohort=()",
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
