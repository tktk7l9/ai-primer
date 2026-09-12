# Cloudflare Workers 移行 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** ai-primer を Vercel（アカウント停止中）から Cloudflare Workers へ移し、配信を復活させる。

**Architecture:** 既存7本で実証済みの `@opennextjs/cloudflare` パターンを当てる（`wrangler.jsonc` + `open-next.config.ts` + devDeps 3つ + scripts 2つ）。移行手順自体は機械的で、実際の作業は公開URLの一元化。`BASE_URL` が4ファイルに重複し `robots.ts` が sitemap URL を直書きしていて、計10箇所に `vercel.app` が散っている。先に1箇所へ集約してから値を差し替える。

**Tech Stack:** Next.js 16 (App Router), TypeScript, Vitest, @opennextjs/cloudflare, wrangler

**Spec:** `docs/superpowers/specs/2026-09-13-cloudflare-workers-migration-design.md`

## Global Constraints

- 新しい公開URLは `https://ai-primer.saitotakuya0719.workers.dev`（既存16本と同じ `<name>.saitotakuya0719.workers.dev` 形式。Worker 名 `ai-primer` は空いていることを確認済み）。
- 姉妹アプリの正しいURLは `https://ai-news-feed-app.saitotakuya0719.workers.dev`（`vercel.app` 版は移行済み・プロジェクト削除済みで**現在リンク切れ**）。
- `esbuild` は**明示的な devDependency にする**。OpenNext は esbuild を import するのに依存宣言しておらず、Dependabot が lockfile を再生成すると `npm ci` で入らなくなり**デプロイだけが `ERR_MODULE_NOT_FOUND: esbuild` で死ぬ**（テストは通るので CI は緑）。バージョンは `^0.28.2`（vitest 5 / vite の peer が `^0.27 || ^0.28` なので `^0.25` は ERESOLVE）。
- `wrangler.jsonc` の `compatibility_flags` に `nodejs_compat` は必須。`compatibility_date` は `2026-09-13`。
- CSP は `src/lib/csp.ts` が正本。**`'strict-dynamic'` を足してはいけない**（`'self'` と `'unsafe-inline'` が無視され全スクリプトが停止する。`src/lib/csp.test.ts` が止める）。この移行では CSP を一切触らない。
- `src/engine/**` と `src/i18n/**` は vitest の **カバレッジ 100% ゲート**の対象（CI で強制）。`src/engine/site.ts` を追加するなら、それを import するテストが必要。
- テストスイートの baseline は **414 tests**。
- `eslint` には既存の warning が3件ある（無関係）。**エラー0が基準**で warning 0 ではない。
- コミットメッセージ末尾には次の2行を付ける。

```
Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_011gkgtBMD6G1QRS3xuzWBkR
```

## File Structure

| ファイル | 責務 |
| --- | --- |
| `src/engine/site.ts`（新規） | 公開URLの唯一の定義。`SITE_URL` を export するだけ。分岐なし |
| `src/engine/site.test.ts`（新規） | URL が `vercel.app` に戻る変更を止める回帰ガード |
| `src/app/[locale]/layout.tsx` / `page.tsx` / `learn/[trackId]/[lessonSlug]/page.tsx` / `sitemap.ts` | ローカルの `BASE_URL` 定義を削除し `SITE_URL` を import |
| `src/app/robots.ts` | 直書きの sitemap URL を `${SITE_URL}/sitemap.xml` に |
| `src/components/footer.tsx` | 姉妹アプリURL（リンク切れ）を修正 |
| `wrangler.jsonc`（新規） | Workers 設定 |
| `open-next.config.ts`（新規） | OpenNext 設定（既定のまま） |
| `package.json` | devDeps 3つ追加 / scripts 2つ追加 / `@vercel/analytics` 削除 |
| `README.md` / `scripts/check-freshness.ts` | ドキュメント・UA文字列のURL更新 |

---

### Task 1: 公開URLを1箇所へ集約する

**このタスクで URL の値も新しい Workers のものに切り替える**（Worker がまだ存在しない時点で）。
一見おかしいが、Vercel は 2026-08-11 から `Account is blocked.` で**何も配信していない**ので、
旧URLを指し続けることのほうが害が大きい。切り替え後 Task 3 のデプロイまでの間は、
どちらのURLも生きていない状態になるだけで、失うものは無い。

集約そのものは移行とは独立して意味がある（URL を変えるたびに取りこぼす危険を消す）。

**Files:**
- Create: `src/engine/site.ts`
- Create: `src/engine/site.test.ts`
- Modify: `src/app/[locale]/layout.tsx:9`
- Modify: `src/app/[locale]/page.tsx:9,58`
- Modify: `src/app/[locale]/learn/[trackId]/[lessonSlug]/page.tsx:15`
- Modify: `src/app/sitemap.ts:5`
- Modify: `src/app/robots.ts:48`
- Modify: `src/components/footer.tsx:3`

**Interfaces:**
- Consumes: なし
- Produces: `src/engine/site.ts` が `SITE_URL: string` と `NEWS_APP_URL: string` を export する。以降のタスクと全ページがこれを参照する

- [ ] **Step 1: ブランチを確認する**

このリポジトリは既に `feat/cloudflare-workers-migration` ブランチ上にあり、設計書のコミットが載っている。**新しいブランチを作らないこと。**

```bash
cd /Users/saitoutakuya/src/github.com/tktk7l9/ai-primer
git rev-parse --abbrev-ref HEAD   # feat/cloudflare-workers-migration と出ること
git log --oneline -1              # docs: Cloudflare Workers 移行の設計書を追加する
```

- [ ] **Step 2: 失敗するテストを書く**

Create `src/engine/site.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import { NEWS_APP_URL, SITE_URL } from "./site";

describe("SITE_URL", () => {
  it("Workers の公開URLを指している", () => {
    expect(SITE_URL).toBe("https://ai-primer.saitotakuya0719.workers.dev");
  });

  it("vercel.app を含まない", () => {
    // Vercel の Hobby アカウントは 2026-08-11 から停止していて配信されない。
    // ここが vercel.app に戻ると canonical・sitemap・OGP が死んだURLを指す。
    expect(SITE_URL).not.toContain("vercel.app");
  });

  it("末尾スラッシュを持たない", () => {
    // 各所で `${SITE_URL}/${locale}` のように連結するので、末尾スラッシュがあると
    // // になる。
    expect(SITE_URL.endsWith("/")).toBe(false);
  });

  it("https である", () => {
    expect(SITE_URL.startsWith("https://")).toBe(true);
  });
});

describe("NEWS_APP_URL", () => {
  it("姉妹アプリの Workers URL を指している", () => {
    // ai-news-feed-app は Workers へ移行済みで Vercel プロジェクトも削除されている。
    // vercel.app 版はリンク切れ。
    expect(NEWS_APP_URL).toBe("https://ai-news-feed-app.saitotakuya0719.workers.dev");
  });

  it("vercel.app を含まない", () => {
    expect(NEWS_APP_URL).not.toContain("vercel.app");
  });

  it("末尾スラッシュを持たない", () => {
    expect(NEWS_APP_URL.endsWith("/")).toBe(false);
  });
});
```

- [ ] **Step 3: テストが落ちることを確認する**

Run: `npx vitest run src/engine/site.test.ts`
Expected: FAIL — `Failed to resolve import "./site"`

- [ ] **Step 4: site.ts を作る**

Create `src/engine/site.ts`:

```ts
// 公開URLの唯一の定義。canonical / metadataBase / sitemap / robots / JSON-LD が
// すべてここを参照する。
//
// 2026-09-13 に Vercel から Cloudflare Workers へ移行した。移行前は BASE_URL が
// 4ファイルに重複し robots.ts が sitemap URL を直書きしていたため、URL を変えるたびに
// どれかを取りこぼして canonical と sitemap が食い違う危険があった。1箇所に集約してある。
// site.test.ts が vercel.app への差し戻しと末尾スラッシュを止める。
export const SITE_URL = "https://ai-primer.saitotakuya0719.workers.dev";

// 姉妹アプリ（速報系のAIニュース）。こちらも Workers へ移行済みで、
// vercel.app 版は Vercel プロジェクトごと削除されているためリンク切れになる。
export const NEWS_APP_URL = "https://ai-news-feed-app.saitotakuya0719.workers.dev";
```

- [ ] **Step 5: テストが通ることを確認する**

Run: `npx vitest run src/engine/site.test.ts`
Expected: PASS (7 tests)

- [ ] **Step 6: 4つの BASE_URL 定義を置き換える**

各ファイルで `const BASE_URL = "https://ai-primer-nine.vercel.app";` の行を**削除**し、代わりに import を足して参照名を `SITE_URL` に変える。`BASE_URL` という名前をローカルに残さないこと（残すと「1箇所に集約した」意味が薄れる）。

**`src/app/[locale]/layout.tsx`** — 9行目を削除し、7行目の `getDictionary` import の下に足す:

```ts
import { SITE_URL } from "@/engine/site";
```

そのうえでファイル内の `BASE_URL` を `SITE_URL` に置換する（`metadataBase: new URL(BASE_URL)` と `url: \`${BASE_URL}/${locale}\`` の2箇所）。

**`src/app/[locale]/page.tsx`** — 9行目を削除し、`JsonLd` import の下に足す:

```ts
import { NEWS_APP_URL, SITE_URL } from "@/engine/site";
```

ファイル内の `BASE_URL` を `SITE_URL` に置換。さらに58行目を書き換える:

```tsx
        href={NEWS_APP_URL}
```

**`src/app/[locale]/learn/[trackId]/[lessonSlug]/page.tsx`** — 15行目を削除し、`JsonLd` import の下に足す:

```ts
import { SITE_URL } from "@/engine/site";
```

ファイル内の `BASE_URL` を `SITE_URL` に置換。

**`src/app/sitemap.ts`** — 5行目を削除し、3行目の `locales` import の下に足す:

```ts
import { SITE_URL } from "@/engine/site";
```

ファイル内の `BASE_URL` を `SITE_URL` に置換。

- [ ] **Step 7: robots.ts の直書きを置き換える**

`src/app/robots.ts` の先頭に import を足す（既存の import 群の最後）:

```ts
import { SITE_URL } from "@/engine/site";
```

48行目を書き換える:

変更前:

```ts
    sitemap: "https://ai-primer-nine.vercel.app/sitemap.xml",
```

変更後:

```ts
    sitemap: `${SITE_URL}/sitemap.xml`,
```

- [ ] **Step 8: footer.tsx の姉妹アプリURLを置き換える**

`src/components/footer.tsx` の3行目を削除し、1行目の import の下に足す:

```ts
import { NEWS_APP_URL } from "@/engine/site";
```

ファイル内の `NEWS_URL` を `NEWS_APP_URL` に置換する。

- [ ] **Step 9: README と UA 文字列を更新する**

`README.md` の6行目:

変更前:

```
**公開URL**: https://ai-primer-nine.vercel.app
```

変更後:

```
**公開URL**: https://ai-primer.saitotakuya0719.workers.dev
```

`README.md` の17行目:

変更前:

```
- 速報系のAIニュースは姉妹アプリ [AIニュース・ダイジェスト](https://ai-news-feed-app.vercel.app) が担当
```

変更後:

```
- 速報系のAIニュースは姉妹アプリ [AIニュース・ダイジェスト](https://ai-news-feed-app.saitotakuya0719.workers.dev) が担当
```

`scripts/check-freshness.ts` の21行目:

変更前:

```ts
  "Mozilla/5.0 (compatible; ai-primer-freshness-check/1.0; +https://ai-primer.vercel.app)";
```

変更後:

```ts
  "Mozilla/5.0 (compatible; ai-primer-freshness-check/1.0; +https://ai-primer.saitotakuya0719.workers.dev)";
```

- [ ] **Step 10: vercel.app が1件も残っていないことを確認する**

Run:

```bash
grep -rn --exclude-dir=node_modules --exclude-dir=.next "vercel.app" src app scripts README.md 2>/dev/null
```

Expected: 出力なし。`src/engine/site.test.ts` は `"vercel.app"` を**検出対象の文字列として**含むが `not.toContain` の引数なので、上のコマンドではヒットする。ヒットした行が `site.test.ts` だけであることを確認する。

- [ ] **Step 11: 型・リント・テストを通す**

Run: `npx tsc --noEmit && npx eslint . && npx vitest run`
Expected: tsc 出力なし / eslint はエラー0（既存 warning 3件のみ）/ **421 tests PASS**（414 + 新規7）

`BASE_URL` の削除漏れがあれば tsc が未定義参照で落ちる。これが取りこぼしの検知になる。

- [ ] **Step 12: ビルドが通ることを確認する**

Run: `npm run build`
Expected: exit 0。ルート表が出る。`sitemap.xml` と `robots.txt` が `○ (Static)` のままであること

- [ ] **Step 13: 生成物に新URLが入っていることを確認する**

Run:

```bash
grep -c "ai-primer.saitotakuya0719.workers.dev" .next/server/app/sitemap.xml.body 2>/dev/null || \
  grep -rl "ai-primer.saitotakuya0719.workers.dev" .next/server/app/ 2>/dev/null | head -3
```

Expected: 新URLを含むファイルが見つかる。1件も無ければ集約が効いていない

- [ ] **Step 14: コミット**

```bash
git add src/engine/site.ts src/engine/site.test.ts src/app src/components/footer.tsx README.md scripts/check-freshness.ts
git commit -m "$(cat <<'EOF'
refactor: 公開URLを1箇所に集約し Workers のURLへ切り替える

BASE_URL が4ファイルに重複し robots.ts が sitemap URL を直書きしていたため、
URL を変えるたびにどれかを取りこぼして canonical と sitemap が食い違う危険があった。
src/engine/site.ts に集約し、site.test.ts が vercel.app への差し戻しと
末尾スラッシュを止める。

値は Cloudflare Workers の URL に切り替えた。Vercel の Hobby アカウントは
2026-08-11 から Account is blocked. で配信されておらず、旧URLは死んでいる。

あわせて姉妹アプリ ai-news-feed-app へのリンク3箇所（トップ・フッター・README）を
直した。あちらは既に Workers へ移行済みで Vercel プロジェクトも削除されているため、
vercel.app 版は現在リンク切れだった。

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_011gkgtBMD6G1QRS3xuzWBkR
EOF
)"
```

---

### Task 2: OpenNext / wrangler の配線

**Files:**
- Create: `wrangler.jsonc`
- Create: `open-next.config.ts`
- Modify: `package.json`
- Modify: `src/app/layout.tsx:2,19`

**Interfaces:**
- Consumes: なし（Task 1 とは独立）
- Produces: `npm run preview` / `npm run deploy` が使えるようになる。`.open-next/worker.js` が生成物

- [ ] **Step 1: wrangler.jsonc を作る**

Create `wrangler.jsonc`:

```jsonc
/**
 * ai-primer — Cloudflare Workers 設定
 * https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/
 *
 * Next.js を @opennextjs/cloudflare でビルドして Workers で動かす。
 * 2026-08-11 から Vercel の Hobby アカウントが停止しているため移行した。
 */
{
  "$schema": "node_modules/wrangler/config-schema.json",
  "name": "ai-primer",
  "main": ".open-next/worker.js",
  "compatibility_date": "2026-09-13",
  // Next.js の実行に必須。日付は 2024-09-23 以降であること。
  "compatibility_flags": ["nodejs_compat"],
  "assets": {
    "directory": ".open-next/assets",
    "binding": "ASSETS",
  },
  "observability": {
    "enabled": true,
  },
}
```

- [ ] **Step 2: open-next.config.ts を作る**

Create `open-next.config.ts`:

```ts
import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// キャッシュは既定のまま。ISR も on-demand revalidate も使っていない。
// https://opennext.js.org/cloudflare/caching
export default defineCloudflareConfig();
```

- [ ] **Step 3: 依存とスクリプトを入れる**

`esbuild` を明示するのが要点。OpenNext は esbuild を import するのに依存宣言しておらず、
Dependabot が lockfile を再生成すると `npm ci` で入らなくなり**デプロイだけが死ぬ**。

```bash
npm i -D @opennextjs/cloudflare@^1.20.6 wrangler@^4.129.0 esbuild@^0.28.2
npm rm @vercel/analytics
```

続けて `package.json` の `scripts` に2つ足す（`test:cov` の下）:

```json
    "preview": "opennextjs-cloudflare build && opennextjs-cloudflare preview",
    "deploy": "opennextjs-cloudflare build && opennextjs-cloudflare deploy"
```

- [ ] **Step 4: Vercel Analytics の参照を外す**

`@vercel/analytics` を消したので、`src/app/layout.tsx` が壊れている。2行目の import と
19行目の描画を削除する。

変更前（2行目）:

```ts
import { Analytics } from "@vercel/analytics/next";
```

→ この行を削除。

変更前（19行目付近）:

```tsx
      <body>
        {children}
        {process.env.VERCEL && <Analytics />}
      </body>
```

変更後:

```tsx
      <body>
        {/* Vercel Analytics は移行に伴って外した。Cloudflare Web Analytics の
            ビーコンはダッシュボードでトークンを取得してから別コミットで入れる。 */}
        {children}
      </body>
```

- [ ] **Step 5: esbuild が optional peer でないことを確認する**

Run:

```bash
node -e "
const l=require('./package-lock.json');
const e=l.packages['node_modules/esbuild'];
console.log('esbuild:', e.version, '| optional:', !!e.optional, '| peer:', !!e.peer);
"
```

Expected: `optional: false | peer: false`。`true` が出たら明示の devDependency になっていない（`ls node_modules/esbuild` はローカルでは通ってしまうので判別に使えない）

- [ ] **Step 6: 型・リント・テストを通す**

Run: `npx tsc --noEmit && npx eslint . && npx vitest run`
Expected: tsc 出力なし / eslint エラー0 / 421 tests PASS

`@vercel/analytics` の参照漏れがあれば tsc が落ちる。

- [ ] **Step 7: OpenNext ビルドが通ることを確認する**

Run: `npx opennextjs-cloudflare build 2>&1 | tail -20`
Expected: exit 0。`.open-next/worker.js` と `.open-next/assets/` が生成される

ここで `ERR_MODULE_NOT_FOUND: esbuild` が出たら Step 3 の esbuild が入っていない。
`.next/static/css` の ENOENT が出たら `experimental.optimizeCss` が混入している（現状は無い）。

- [ ] **Step 8: 生成物を確認する**

Run:

```bash
ls -la .open-next/worker.js && ls .open-next/assets/ | head -5
```

Expected: `worker.js` が存在し、`assets/` に `_next` などが並ぶ

- [ ] **Step 9: .gitignore に .open-next があることを確認する**

Run: `grep -n "open-next" .gitignore || echo "未登録"`

`未登録` と出た場合は `.gitignore` の末尾に足す:

```
# @opennextjs/cloudflare のビルド生成物
.open-next/
```

- [ ] **Step 10: コミット**

```bash
git add wrangler.jsonc open-next.config.ts package.json package-lock.json src/app/layout.tsx .gitignore
git commit -m "$(cat <<'EOF'
feat: @opennextjs/cloudflare で Workers へデプロイできるようにする

Vercel の Hobby アカウントが 2026-08-11 から Account is blocked. で配信不能なため、
既存7本（ai-news-feed-app / elparaiso / housing-performance-simulator /
lifeplan-simulator / my-apps-portal / resume / utility-tracker）と同じ
@opennextjs/cloudflare パターンを当てた。

esbuild を明示的な devDependency にしている。OpenNext は esbuild を import するのに
依存宣言しておらず @opennextjs/aws からのホイストに頼っているため、Dependabot が
lockfile を再生成してネストされると npm ci で入らなくなり、テストは全通過するのに
デプロイだけが ERR_MODULE_NOT_FOUND: esbuild で死ぬ。既存4本で踏んだ罠。

Vercel Analytics は外した。process.env.VERCEL でゲートされていて Workers では
undefined になり静かに消えるだけなので、依存ごと落とした。Cloudflare Web Analytics の
ビーコンはダッシュボードでトークンを取得してから別コミットで入れる。

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_011gkgtBMD6G1QRS3xuzWBkR
EOF
)"
```

---

### Task 3: デプロイと実測検証

⚠️ **このタスクは実行前に人間の承認が必要。** 新しい公開URLへの初回デプロイは外向きの
publish であり、勝手に実行してはいけない。Step 1 の前で止まり、承認を得てから進む。

**Files:** なし（コード変更を伴わない操作。検証結果は報告に記録する）

**Interfaces:**
- Consumes: Task 1 の `SITE_URL`、Task 2 の `npm run deploy`
- Produces: 稼働中の `https://ai-primer.saitotakuya0719.workers.dev`

- [ ] **Step 1: 人間の承認を得る**

デプロイ先・URL・影響範囲を伝えて明示的な承認を得る。承認なしに Step 2 へ進まないこと。

- [ ] **Step 2: wrangler の認証状態を確認する**

Run: `npx wrangler whoami`
Expected: アカウント情報が出る。出なければ `npx wrangler login`（ブラウザ操作が必要なので
その場合は人間に依頼する）

- [ ] **Step 3: デプロイする**

Run: `npm run deploy 2>&1 | tail -20`
Expected: exit 0。`https://ai-primer.saitotakuya0719.workers.dev` が出力される

workers.dev のルートは伝播に最大1分かかる。直後に 404 でも1分待って再試行する。

- [ ] **Step 4: セキュリティヘッダー8本を確認する**

Run:

```bash
curl -sI https://ai-primer.saitotakuya0719.workers.dev/ja | \
  grep -iE "content-security-policy|strict-transport|x-content-type|x-frame|referrer-policy|cross-origin-opener|x-dns-prefetch|permissions-policy" | cut -c1-120
```

Expected: 8行すべて返る。`next.config` の `headers()` が OpenNext 経由でも効いていることの確認。
`content-security-policy` に `script-src 'self' 'unsafe-inline'` が含まれ、`nonce-` と
`strict-dynamic` を含まないこと

- [ ] **Step 5: sitemap と robots が新URLを返すことを確認する**

Run:

```bash
curl -s https://ai-primer.saitotakuya0719.workers.dev/sitemap.xml | grep -c "ai-primer.saitotakuya0719.workers.dev"
curl -s https://ai-primer.saitotakuya0719.workers.dev/sitemap.xml | grep -c "vercel.app"
curl -s https://ai-primer.saitotakuya0719.workers.dev/robots.txt | grep -i sitemap
```

Expected: 1行目は 1 以上、**2行目は 0**、3行目は新URLの sitemap を指す

- [ ] **Step 6: OGP 画像が返ることを確認する**

Run: `curl -sI https://ai-primer.saitotakuya0719.workers.dev/opengraph-image | head -3`
Expected: `HTTP/2 200` と画像の content-type

- [ ] **Step 7: 実ブラウザで動作を確認する**

この workspace には Playwright MCP がある。`browser_navigate` / `browser_console_messages` /
`browser_snapshot` を使う。curl では検出できない（HTML は 200 なのにハイドレーションだけ死ぬ）。

1. `https://ai-primer.saitotakuya0719.workers.dev/ja` を開く
2. `browser_console_messages` で `Content Security Policy` / `Refused to` を含むメッセージが
   **0件**であることを確認
3. `browser_snapshot` で ProgressMeter（`progressbar "全体の進捗"`）が描画されていることを確認
   — これはクライアント側で localStorage を読むので、出ていればハイドレーションが生きている
4. レッスンページ（`/ja/learn/ai-basics/what-is-ai`）で 2 と 3 を繰り返し、対話クイズ
   （radiogroup）が描画されることも確認

- [ ] **Step 8: デプロイが最新コミットのものか確認する**

Run:

```bash
npx wrangler deployments list 2>&1 | head -10
git log --oneline -1
```

Expected: 最新デプロイの `Created` が今のコミット時刻と整合する。Workers Builds が無音で
止まって古いビルドを配信し続ける事故があるため、以降もこの突合で検知する

- [ ] **Step 9: 検証結果を人間に報告し、次の2つを依頼する**

コードからは実行できない操作なので、実測結果とあわせて依頼する。

1. **Workers Builds の git 接続**（ダッシュボード操作。MCP の OAuth は builds 読み取り専用）
2. **Cloudflare Web Analytics のトークン取得**（取得後に別コミットでビーコンを入れる）

あわせて **Vercel プロジェクトの削除**を提案する。上の Step 4〜8 が通ってから実施する。
`vercel project rm` には `--yes` が無いので `printf 'y\n' | vercel project rm ai-primer` が必要。
**検証前に削除しないこと。**

---

## 全タスク完了後の確認

- [ ] `grep -rn "vercel.app" src app scripts README.md` が `src/engine/site.test.ts` 以外にヒットしない
- [ ] 421 tests PASS / `tsc --noEmit` clean / `eslint` エラー0
- [ ] `https://ai-primer.saitotakuya0719.workers.dev/ja` が描画され、コンソールにCSP違反0件
- [ ] `sitemap.xml` に `vercel.app` が0件
- [ ] セキュリティヘッダー8本が付いている
- [ ] Observatory を再計測し、実測値を `README.md` と `AGENTS.md` に記録する（`unsafe-inline` による低下は想定内）
