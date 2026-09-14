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
        {/* Cloudflare Web Analytics。2026-09-12 の Workers 移行で Vercel Analytics を
            外した代わり。token は HTML に埋まって全訪問者に見えるため秘密情報ではない。
            許可オリジンは src/lib/csp.ts 側にあり、csp.test.ts が両方を固定している。
            gitleaks は 32桁hex を generic-api-key として検出するので、その行だけ
            gitleaks:allow で抑止する（設定ファイルを置くと他の本物の秘密まで隠れる）。 */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts --
            type="module" のスクリプトは仕様上 defer されるため、パーサーを止めない */}
        <script
          type="module"
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon={'{"token": "ae32780fb6264697b0cefc72c95436db"}' /* gitleaks:allow */}
        />
      </body>
    </html>
  );
}
