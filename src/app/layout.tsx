import type { Metadata } from "next";
import { Analytics } from "@/components/analytics";
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
        {/* Cloudflare Web Analytics (replaces Vercel Analytics, removed in the 2026-09-12 move to
            Workers). Appended after hydration, not written into the HTML: see the component. */}
        <Analytics />
      </body>
    </html>
  );
}
