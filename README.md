# AI Primer

AIの用語・歴史・仕組み・使い方を体系的に学べるバイリンガル（日本語/英語）チュートリアル。
ChatGPT・Claude・Gemini・Grok などのチャットAIから、コーディング・画像・動画・音楽生成まで横断的に扱う。

**公開URL**: https://ai-primer.saitotakuya0719.workers.dev

<!-- スクリーンショット -->

## 特徴

- **14トラック / 82レッスン**: 基礎用語 → 歴史 → LLMの仕組み → 主要AI比較 → プロンプト術 → AIエージェントとツール連携 → コーディングAI → 生成メディア → AIをもっと理解する → 仕事でAIを使う → 暮らしでAIを使う → AIと創作 → AIと社会 → 活用・倫理・ルール
- **クイズと進捗管理**: 各レッスンに確認クイズ。進捗はブラウザ（localStorage）に保存
- **全ての事実に出典リンク**: 各レッスン・カタログ項目が一次情報源を明記
- **鮮度の可視化**: レッスンごとに「最終確認日」を表示。古くなった項目は月次ワークフローが自動検出
  （※コンテンツ本文の更新は人手レビュー。「自動で最新化」ではありません）
- 速報系のAIニュースは姉妹アプリ [AIニュース・ダイジェスト](https://ai-news-feed-app.saitotakuya0719.workers.dev) が担当

## 技術構成

- Next.js 16 (App Router, TypeScript) / React 19
- CSP: next.config.ts の静的ヘッダー（`src/lib/csp.ts` が正本）を土台に、Worker（`worker.ts`）が
  HTML の応答ごとに `script-src` の `'unsafe-inline'` を毎リクエストの nonce に差し替える
  （`src/lib/csp-nonce.ts`）+ セキュリティヘッダー一式
- Cloudflare Web Analytics のビーコンはハイドレーション後に追加（HTML に外部スクリプトを書かない）
- 全ページをビルド時に生成し、Worker は再描画せず静的アセットのキャッシュから返す
  （`open-next.config.ts` の `staticAssetsIncrementalCache` + キャッシュインターセプト）
- 手書き i18n（`[locale]` セグメント + `Localized<T>` 型で両言語必須を強制）
- Markdown → HTML はビルド時サーバー変換（remark/rehype、クライアントJS最小）
- vitest: engine/i18n/lib 層 100% カバレッジゲート（CI強制）

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

- npm audit: 本番依存は 0 件。開発用依存の braces（修正版なし・GHSA-vfj7-8cjw-p6xm）だけを、理由と期限つきの例外リスト（`audit-allowlist.json`）で許容し、CI の `scripts/audit-gate.mjs` で検査
- gitleaks: 0 leaks
- テスト: 1000件・カバレッジ: engine/i18n/lib 層 100%（thresholds ゲート）
- Lighthouse（本番URL `/ja` 計測・2026-10-11 / Cloudflare Workers・Lighthouse 13.5・3回計測の中央値）:
  mobile 96/100/100/100・desktop 100/100/100/100
  ※ mobile の LCP は約 2.7 秒（低速 4G の模擬）。サーバー応答は 40〜80ms でキャッシュから返っており、
    残りは CSS の読み込みと描画の待ち。2026-09-14 時点は mobile も 100 だった
- Mozilla Observatory（本番URL計測・2026-10-11 / Cloudflare Workers）: A+（score 125・12/12 tests passed）
  ※ 2026-09-14 の B（75・10/12）から戻した。`content-security-policy` は Worker が HTML ごとに付ける
    nonce で `'unsafe-inline'` をなくし（#68）、`subresource-integrity` は Cloudflare Web Analytics の
    ビーコンを HTML から外してハイドレーション後に読み込むことで解消した。**ビーコンに SRI は足さない**
    — `beacon.min.js` はバージョンの付かない URL を Cloudflare が差し替える運用なので、`integrity` を
    固定すると次の更新でビーコンだけ黙って止まる。
