<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# ai-primer 開発規約（AI/Claude向け）

nextjs.org/learn 風のAIリテラシー・チュートリアル。ja/en完全バイリンガル・全事実に出典リンク・鮮度管理付き。

## アーキテクチャの背骨

- **CSP は next.config.ts の静的ヘッダー方式**（正本は `src/lib/csp.ts`）。
  `script-src` は `'self' 'unsafe-inline'`。**`'strict-dynamic'` を足してはいけない** —
  CSP Level 3 では strict-dynamic があると `'self'` も `'unsafe-inline'` も無視され、
  nonce もハッシュも無い本構成では全スクリプトが停止する（`src/lib/csp.test.ts` が止める）。
  2026-09-12 に per-request nonce 方式から移行した。理由は Next 16 の proxy が Node
  ランタイム専用で、OpenNext (Cloudflare Workers) が Node middleware 非対応のため
  Workers へ移行できなかったこと。代償としてインラインXSS防御と Observatory A+ を
  失っている（意図した判断）。
  ページは静的でよい。`headers()` を呼ぶと動的レンダリングが強制されるので、
  キャッシュを効かせたいページでは呼ばないこと。
  インライン `<script>` に nonce は不要（ld+json はデータブロックで script-src の対象外）。
- **i18n は `[locale]` セグメント + `Localized<T> = Record<"ja"|"en", T>`**（resume パターン）。
  middleware での locale 判定はしない。翻訳漏れは型エラーで検出される — `Partial` で逃げない。
- **コンテンツは純データ**（`src/engine/content/tracks/` に 1レッスン=1ファイル）。本文は Markdown 文字列、
  `src/engine/markdown/render.ts` でサーバー側 HTML 変換。MDX 禁止。
- **揮発性の事実（モデル名・料金・機能比較）はレッスン本文に書かない**。`src/engine/content/models.ts`
  に一元化し、本文からは `/[locale]/models` へリンクする。

## テスト方針

- `src/engine/**` と `src/i18n/**` は **カバレッジ 100%**（vitest.config.ts の thresholds がゲート。CI で強制）。
- コンテンツ整合性は `content.test.ts` が横断検証（id一意・ja/en非空・quiz正答範囲・sources≥1・
  lastVerified妥当・glossaryRefs解決）。レッスン追加時はテストが自動で対象に含める設計を保つこと。
- React コンポーネントは presentation 層としてカバレッジ対象外。

## コンテンツ執筆規約

- 全レッスン: `sources`（出典）1件以上・`lastVerified`（ISO日付）必須。
- モデル・料金・機能の記述は**執筆時に Web 検索で必ず検証**する（LLM の学習知識を信用しない）。
  出典は公式 docs・論文等の恒久 URL を優先。
- ja を先に書き、en は同一コミット内で同期する（片言語だけの変更を残さない）。

## 開発コマンド

- `npm run dev` / `npm run build` / `npm start`
- `npm run typecheck` / `npm test` / `npm run coverage`（100%ゲート）

## コミット粒度

- 1コミット = 1つの完結した変更（レッスン1本、コンポーネント1つ等）。テスト green の状態でコミット。

## 公開前

- private 開始。公開は publish-check 経由のみ（gitleaks 0 / npm audit 全0 / PII なし）。
  Observatory は 2026-09-12 の CSP 移行で A+ を外れる見込み。`'unsafe-inline'` による減点は
  受け入れた代償なので、スコアの低下自体は公開のブロッカーにしない（実測値は記録する）。
