# ai-primer を Cloudflare Workers へ移行する

日付: 2026-09-13
対象: ai-primer（単独）
状態: 設計承認済み・実装前

3リポジトリ（ai-primer / acro-finder / service-anatomy）を Vercel から移す作業の1本目。
残り2本はそれぞれ固有のリスクを持つため、別サイクルで設計する（「なぜ ai-primer から」参照）。

## なぜやるか

Vercel の Hobby アカウントが 2026-08-11 から `Account is blocked.` でデプロイ不能。
最後に成功したデプロイは 2026-08-06 02:44 UTC で、9/1 の月次境界を越えても回復していない
（2026-09-12 に PR をマージして再実証）。月次リセット待ちでは解消しない。

2026-09-12 に nonce CSP を撤去して Workers 移行の技術的障害は外れた
（`docs/superpowers/specs/2026-09-12-drop-nonce-csp-design.md`）。あとは移す作業だけが残っている。

## なぜ ai-primer から

3本のリスクが大きく違う。最も安全な1本で手順を実証してから広げる。

| repo | 固有のリスク |
| --- | --- |
| **ai-primer** | ほぼ無い。secrets ゼロ・実行時 fs 読み込みゼロ・全ルート SSG 済み |
| acro-finder | `lib/site.ts` の `SITE_URL` が `VERCEL_PROJECT_PRODUCTION_URL` 依存で、Workers では `http://localhost:3000` に落ちる。加えて Resend の secrets 3つ |
| service-anatomy | `src/engine/content/scan.ts` が実行時に `readdirSync`/`readFileSync` で記事を読む。記事ルートは動的のままなので Worker のリクエスト時に fs を叩く。成立するか未確認 |

ai-primer が通れば「既存パターンがそのまま効く」ことが確定し、残り2本は固有リスクの解決だけに集中できる。

## 前提の確認（実測済み）

- `experimental.optimizeCss` は **無い**。あると OpenNext が `.next/static/css` を cpSync して
  ENOENT で落ちる既知の罠だが、`next.config.ts` に `experimental` ブロック自体が存在しない。
- Cloudflare アカウントに Worker は16本。`ai-primer` という名前は**空いている**（17本目になる）。
- 環境変数は `process.env.VERCEL` だけ。**secrets はゼロ**。
- 実行時の `fs` 使用はゼロ。
- vitest 5 系なので esbuild は `^0.28.x` を使う（`^0.25` は vite の peer と衝突して ERESOLVE）。

## 設計

### 1. 既存パターンの適用

既に7本（ai-news-feed-app / elparaiso / housing-performance-simulator / lifeplan-simulator /
my-apps-portal / resume / utility-tracker）が同じ形で動いている。それを踏襲する。

**`wrangler.jsonc`（新規）**

```jsonc
{
  "$schema": "node_modules/wrangler/config-schema.json",
  "name": "ai-primer",
  "main": ".open-next/worker.js",
  "compatibility_date": "2026-09-13",
  "compatibility_flags": ["nodejs_compat"],
  "assets": { "directory": ".open-next/assets", "binding": "ASSETS" },
  "observability": { "enabled": true },
}
```

`nodejs_compat` は Next.js の実行に必須。`compatibility_date` は 2024-09-23 以降であること。

**`open-next.config.ts`（新規）**

```ts
import { defineCloudflareConfig } from "@opennextjs/cloudflare";
export default defineCloudflareConfig();
```

キャッシュは既定のまま。ISR も on-demand revalidate も使っていない。

**`package.json`**

- devDependencies に `@opennextjs/cloudflare` / `wrangler` / **`esbuild` を明示**
- scripts に `preview` / `deploy`（`opennextjs-cloudflare build && opennextjs-cloudflare {preview,deploy}`）
- dependencies から `@vercel/analytics` を削除（下記 3）

**`esbuild` の明示は必須。** OpenNext は esbuild を import するのに依存宣言しておらず、
`@opennextjs/aws` からのホイストに頼っている。Dependabot が lockfile を再生成してネストされると
`npm ci` で入らなくなり、**デプロイだけが `ERR_MODULE_NOT_FOUND: esbuild` で死ぬ**。
テストは全通過するので CI は緑のまま。既存4本で踏んだ罠。判別は lockfile の
`optional: true, peer: true` を見る（`ls node_modules/esbuild` はローカルでは通るので無意味）。

### 2. URL の一元化

公開URLが `https://ai-primer-nine.vercel.app` から
`https://ai-primer.saitotakuya0719.workers.dev` に変わる。ところが `BASE_URL` が5箇所に重複している。

```
src/app/[locale]/layout.tsx:9                          ← metadataBase / canonical / OGP
src/app/[locale]/page.tsx:9
src/app/[locale]/learn/[trackId]/[lessonSlug]/page.tsx:15
src/app/sitemap.ts:5
src/app/robots.ts:48                                   ← sitemap URL を直書き
```

**先に1箇所へ集約してから値を差し替える。** バラバラのまま差し替えると必ずどれかを取りこぼし、
canonical と sitemap が食い違う。集約先は `src/engine/site.ts`（`src/engine/` は既にこのリポジトリの
純ロジック置き場で、カバレッジ100%ゲートの対象）。

集約した `SITE_URL` に対して、「vercel.app を含まない」「末尾スラッシュを持たない」を主張する
単体テストを置く。移行後に誰かが URL を戻したら落ちる。

`src/engine/**` は vitest の 100% カバレッジゲートの対象。`site.ts` は分岐を持たない
`export const` だけなので、上記テストが import した時点で 100% になる（ゲートは通る）。

**ついでに直す実害**: 姉妹アプリへのリンク2箇所が死んでいる。

```
src/app/[locale]/page.tsx:58    https://ai-news-feed-app.vercel.app
src/components/footer.tsx:3     https://ai-news-feed-app.vercel.app
```

`ai-news-feed-app` は既に Workers へ移行済みで Vercel プロジェクトも削除されている（Worker 一覧に
存在し、Vercel の残存5プロジェクトには含まれない）。つまり**今この2つはリンク切れ**。
`https://ai-news-feed-app.saitotakuya0719.workers.dev` に直す。

**`vercel.app` の全出現箇所（実測10件）。** すべて置換対象で、作業後は grep がゼロになる。

| 箇所 | 内容 | 置換先 |
| --- | --- | --- |
| `src/app/[locale]/layout.tsx:9` | `BASE_URL` | `src/engine/site.ts` を参照 |
| `src/app/[locale]/page.tsx:9` | `BASE_URL` | 同上 |
| `src/app/[locale]/learn/[trackId]/[lessonSlug]/page.tsx:15` | `BASE_URL` | 同上 |
| `src/app/sitemap.ts:5` | `BASE_URL` | 同上 |
| `src/app/robots.ts:48` | sitemap URL を直書き | `${SITE_URL}/sitemap.xml` |
| `src/app/[locale]/page.tsx:58` | 姉妹アプリ（死リンク） | `ai-news-feed-app.saitotakuya0719.workers.dev` |
| `src/components/footer.tsx:3` | 姉妹アプリ（死リンク） | 同上 |
| `README.md:6` | 公開URL | 新URL |
| `README.md:17` | 姉妹アプリ（死リンク） | 上記 workers.dev |
| `scripts/check-freshness.ts:21` | User-Agent 文字列 | 新URL（cosmetic だが揃える） |

### 3. アナリティクス

現在 `{process.env.VERCEL && <Analytics />}` でゲートされている。Workers では `VERCEL` が
undefined になるので**静かに消える**。housing-performance-simulator の先例どおり
**Cloudflare Web Analytics に置き換える**（`@vercel/analytics` の依存も外す）。

Cloudflare Web Analytics のビーコンは `wrangler.jsonc` や環境変数ではなく、
ダッシュボードでサイトを登録してスニペットを得る方式。**トークンの取得はダッシュボード操作が必要**
なので、実装ではプレースホルダを置かず、まず Analytics 無しでデプロイして動作確認し、
トークン取得後に別コミットで足す。中途半端なスニペットを入れて CSP 違反を起こすより確実。

### 4. デプロイと検証

**段取り**: 手元から `npm run deploy` で1回上げて動作を確認 → その後 Workers Builds（git接続）へ。

git接続は**ダッシュボード操作が必要**（MCP の OAuth は builds 読み取り専用なので、私からは実行できない）。
既存16本はすべて接続済みなので、同じ状態に揃える。

**検証項目**（すべて実ブラウザ／curl で実測する）

1. トップ (`/ja`) とレッスンページが描画され、ハイドレーションが動く（ProgressMeter・クイズ）
2. コンソールに CSP 違反ゼロ ← 静的 CSP が Workers でも効いていることの確認
3. `sitemap.xml` と `robots.txt` が新URLを返す（旧 vercel.app が残っていないこと）
4. OGP 画像 (`/opengraph-image`) が 200 で返る
5. `curl -sI` でセキュリティヘッダー8本が付いている
   ← `next.config` の `headers()` が OpenNext 経由でも効くことの確認
6. `wrangler deployments list` の `Created` が main 最新コミットと UTC 揃えで一致

**CI は無変更で通る。** Lighthouse ガードは `npm start`（`next start`）に対して走り、
OpenNext はそれを置き換えない。

### 5. Vercel プロジェクトの削除

**Workers で上記6項目が通ってから**削除する。検証前に削除しない。

`vercel project rm` には `--yes` が無いので `printf 'y\n' |` が必要。
削除は別コミット不要（コード変更を伴わない操作）だが、実施したことを記録する。

## 到達点と限界

**到達する**: ai-primer が Workers で配信され、Vercel の停止から独立する。既存パターンが
nonce CSP 撤去後の構成でも効くことが実証され、残り2本の設計が固まる。

**到達しない**: acro-finder と service-anatomy は移らない。Vercel には4本
（acro-finder / service-anatomy / chronoscroll / plant-ledger）が残る。うち chronoscroll は
ファイル数 27,231 で Cloudflare の無料枠 20,000 を超えるため、この3本とは別の判断
（有料プランか動的化）が必要。plant-ledger は private でローカル運用が主。

**測り直すもの**: Observatory。`unsafe-inline` で A+ 115 から下がるのは確定しているが、
Vercel が配信停止中で測れなかった。Workers で配信が復活したら実測値を記録し、
`AGENTS.md` と `README.md` の記述を実測値に差し替える。

## 失敗しうる箇所と検知方法

| リスク | 検知 | 対処 |
| --- | --- | --- |
| Workers Builds が無音で止まり古いビルドを配信し続ける | `wrangler deployments list` の `Created` を main 最新コミットと突合。CI が緑でも無意味 | 手元から `npm run deploy`（secret は保持される） |
| esbuild が `npm ci` で入らずデプロイだけ死ぬ | lockfile の `optional: true, peer: true` を見る | esbuild を明示 devDependency に（本設計で対応済み） |
| URL の取りこぼしで canonical と sitemap が食い違う | 検証項目3 + `grep -rn "vercel.app" src` がゼロ | 先に1箇所へ集約する（本設計の 2） |
| セキュリティヘッダーが OpenNext 経由で落ちる | 検証項目5 | `next.config` の `headers()` が効かない場合は別途設計（未発生） |

## テスト

1. **`SITE_URL` の単体テスト** — `vercel.app` を含まない／末尾スラッシュ無し。
   移行後に URL を戻す変更を止める
2. **既存スイートが green のまま** — 414 tests（URL集約でテストが増える場合はその分だけ）
3. **`grep -rn "vercel.app" src app scripts README.md` がゼロ**（姉妹アプリのリンク含む）
4. **`npx tsc --noEmit` / `npx eslint .` / `npm run build`** が通る
5. **上記「検証項目」6つ**を実デプロイ後に実測する
