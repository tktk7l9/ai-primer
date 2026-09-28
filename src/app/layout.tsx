import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Primer",
  description: "AIを体系的に学べるバイリンガル・チュートリアル",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        {children}
        {/* Cloudflare Web Analytics. Replaces Vercel Analytics, removed in the 2026-09-12 move to
            Workers. The token is embedded in the HTML and visible to every visitor, so it is not a secret.
            The allowed origins live in src/lib/csp.ts, and csp.test.ts pins both.
            gitleaks flags 32-digit hex as generic-api-key, so only that line is
            suppressed with gitleaks:allow (a config file would also hide real secrets). */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts --
            type="module" scripts are deferred by spec, so they do not block the parser */}
        <script
          type="module"
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon={'{"token": "ae32780fb6264697b0cefc72c95436db"}' /* gitleaks:allow */}
        />
      </body>
    </html>
  );
}
