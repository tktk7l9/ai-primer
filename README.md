# AI Primer

AIの用語・歴史・仕組み・使い方を体系的に学べるバイリンガル（日本語/英語）チュートリアル。
ChatGPT・Claude・Gemini・Grok などのチャットAIから、コーディング・画像・動画・音楽生成まで横断的に扱う。

**公開URL**: https://ai-primer.saitotakuya0719.workers.dev

<!-- スクリーンショット -->

## 特徴

- **8トラック / 約40レッスン**: 基礎用語 → 歴史 → LLMの仕組み → 主要AI比較 → プロンプト術 → コーディングAI → 生成メディア → 活用と倫理
- **クイズと進捗管理**: 各レッスンに確認クイズ。進捗はブラウザ（localStorage）に保存
- **全ての事実に出典リンク**: 各レッスン・カタログ項目が一次情報源を明記
- **鮮度の可視化**: レッスンごとに「最終確認日」を表示。古くなった項目は月次ワークフローが自動検出
  （※コンテンツ本文の更新は人手レビュー。「自動で最新化」ではありません）
- 速報系のAIニュースは姉妹アプリ [AIニュース・ダイジェスト](https://ai-news-feed-app.saitotakuya0719.workers.dev) が担当

## 技術構成

- Next.js 16 (App Router, TypeScript) / React 19
- 静的ヘッダーの CSP（`src/lib/csp.ts` が正本・next.config.ts が配る）+ セキュリティヘッダー一式
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

- npm audit: 0 vulnerabilities（全セベリティ）
- gitleaks: 0 leaks
- テスト: 421件・カバレッジ: engine/i18n 層 100%（thresholds ゲート）
- Lighthouse（本番URL計測・2026-09-14 / Cloudflare Workers・3回計測の中央値）:
  mobile 100/100/100/100・desktop 100/100/100/100
- Mozilla Observatory（本番URL計測・2026-09-14 / Cloudflare Workers）: B+（score 80・11/12 tests passed）
  ※ 2026-09-12 の CSP 移行（nonce → `'unsafe-inline'`）で A+（score 115・10/10）から低下した。
    落ちているのは CSP の1項目のみで、他11項目は通っている。移行のために受け入れた代償
    （Next 16 の proxy が Node 専用で OpenNext が Node middleware 非対応のため、
    nonce を残すと Workers へ移行できなかった）。性能は移行前と同値を維持している。
