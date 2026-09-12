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
        {/* Vercel Analytics は移行に伴って外した。Cloudflare Web Analytics の
            ビーコンはダッシュボードでトークンを取得してから別コミットで入れる。 */}
        {children}
      </body>
    </html>
  );
}
