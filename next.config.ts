import type { NextConfig } from "next";
import { contentSecurityPolicy } from "./src/lib/csp";

// src/lib/csp.ts is the source of truth for the CSP. src/proxy.ts used to issue a per-request
// CSP with a nonce, but middleware was removed in favor of static headers.
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
