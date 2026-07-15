# AI Primer

AIの用語・歴史・仕組み・使い方を体系的に学べるバイリンガル（日本語/英語）チュートリアル。
ChatGPT・Claude・Gemini・Grok などのチャットAIから、コーディング・画像・動画・音楽生成まで横断的に扱う。

<!-- スクリーンショット -->

## 特徴

- **8トラック / 約40レッスン**: 基礎用語 → 歴史 → LLMの仕組み → 主要AI比較 → プロンプト術 → コーディングAI → 生成メディア → 活用と倫理
- **クイズと進捗管理**: 各レッスンに確認クイズ。進捗はブラウザ（localStorage）に保存
- **全ての事実に出典リンク**: 各レッスン・カタログ項目が一次情報源を明記
- **鮮度の可視化**: レッスンごとに「最終確認日」を表示。古くなった項目は月次ワークフローが自動検出
  （※コンテンツ本文の更新は人手レビュー。「自動で最新化」ではありません）
- 速報系のAIニュースは姉妹アプリ [AIニュース・ダイジェスト](https://ai-news-feed-app.vercel.app) が担当

## 技術構成

- Next.js 16 (App Router, TypeScript) / React 19
- per-request nonce の厳格 CSP（proxy.ts）+ セキュリティヘッダー一式
- 手書き i18n（`[locale]` セグメント + `Localized<T>` 型で両言語必須を強制）
- Markdown → HTML はビルド時サーバー変換（remark/rehype、クライアントJS最小）
- vitest: engine/i18n 層 100% カバレッジゲート（CI強制）

## 開発

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck  # tsc --noEmit
npm test           # vitest
npm run coverage   # カバレッジ100%ゲート
npm run build
```

## 品質指標

- npm audit: 0 vulnerabilities
- テスト: 368件・カバレッジ: engine/i18n 層 100%（thresholds ゲート）
- Lighthouse（ローカル本番ビルド計測・2026-07-15）: desktop 100/100/100/100・mobile 98/100/100/100
- Observatory: 公開後に計測（publish-check参照）
