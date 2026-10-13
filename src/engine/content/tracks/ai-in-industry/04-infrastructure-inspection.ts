import type { Lesson } from "@/engine/content/types";

export const infrastructureInspection: Lesson = {
  id: "ai-in-industry-04",
  slug: "infrastructure-inspection",
  title: {
    ja: "インフラ点検とAI — 老いていく橋やトンネルを見守る",
    en: "Infrastructure Inspection and AI: Watching Over Aging Bridges and Tunnels",
  },
  summary: {
    ja: "高度経済成長期に造られた橋やトンネルが、一斉に古くなっていく。5年に1回の点検を人の目だけで続けるのは難しい。ドローンや画像のAIなどの点検支援技術を国がカタログにまとめて使い始めた経緯と、AIの検出の数字の読み方。",
    en: "Bridges and tunnels built during Japan's period of rapid growth are aging all at once, and keeping up inspections every five years by human eyes alone is hard. How the government began cataloging and using inspection-support technologies such as drones and image AI, and how to read AI detection figures.",
  },
  body: {
    ja: `## 一斉に古くなるインフラ

国土交通省によると、日本の道路や河川、下水道、港湾などの社会資本は高度経済成長期に集中して整備され、今後20年で、建設から50年以上たつ施設の割合が加速度的に高くなる見込みです。

| 施設 | 2023年3月 | 2030年3月 | 2040年3月 |
|---|---|---|---|
| 道路橋（橋長2m以上、約73万橋） | 約37% | 約54% | 約75% |
| トンネル（約1万2千本） | 約25% | 約35% | 約52% |

（建設から50年以上たつ施設の割合。建設年度の分からない施設を除いて算出）

ただし国土交通省自身も、老朽化の具合は建設年度だけで一律には決まらず、立地の環境や維持管理の状況などで違うとし、50年は便宜的な区切りだと注記しています。

## 点検のルールと、新しい技術
- **5年に1回、近接目視が基本**: 道路橋定期点検要領（2019年2月）は、定期点検を5年に1回の頻度で行うことを基本とし、健全性を診断するための状態の把握は、点検する人が十分に近づいて目で見る「近接目視」を基本としています。
- **同等の方法も認める**: そのうえで、点検する人が、自分で近接目視したときと同等の診断ができる情報が得られると判断した方法で、状態を把握してもよいとしています。
- **点検支援技術性能カタログ**: 国は、点検に使える技術について、国が定めた標準項目に対する性能値を開発者に求め、国が管理する施設などで検証した結果をカタログにまとめています。2024年4月には78の技術を加えて321技術になりました。国が直接管理する国道の点検では、2022年度から橋とトンネルで、2023年度からは舗装も含めて、点検支援技術を使うことを原則にしています。

## AIはどこまで見てくれるか — カタログの1例
カタログに載る「デジタル画像とAIを用いた橋梁点検サポートシステム」（2026年3月作成）は、デジタルカメラで撮ったコンクリートの画像から、AI（畳み込みニューラルネットワーク）と画像処理で、ひび割れ、剥離・鉄筋の露出、漏水・遊離石灰を自動で見つけ、ひび割れの幅や長さなどを計測する技術です。開発者が示した性能（学習に使っていない画像での評価）は次のとおりです。

| 損傷 | 再現率 | 適合率 |
|---|---|---|
| ひび割れ | 92% | 91% |
| 剥離 | 85% | 84% |
| 漏水 | 96% | 92% |

- **再現率**: 本当にある損傷のうち、正しく見つけられた割合。92%なら、本当の損傷の8%は見逃しうる。
- **適合率**: 見つけたもののうち、本当に損傷だった割合。91%なら、検出の9%は誤り。

カタログには、注意点も書かれています。汚れや解像度の低い画像では検出の精度が落ちうる、ひび割れにチョークの印が重なると幅の計測の精度が落ちうる、学習していない種類の損傷は人が画像を見て手でなぞる、などです。

## 読むときの注意
- カタログの性能値は、国の標準項目に沿って開発者が示したものです。撮影の条件や構造物の状態が違えば、結果も変わりえます。
- AIは損傷を「見つけて測る」のを助けますが、要領では、どの方法で状態を把握するかを判断し、橋の健全性を診断するのは点検する人です。
- 再現率と適合率は、片方だけ見ても分かりません。見逃しと誤検出のどちらが困るかは、使い方によって違います（誤りの種類で重さが変わる例は[AIのバイアスと公平性](/ja/learn/ai-and-society/bias-and-fairness)のレッスン参照）。`,
    en: `## Infrastructure aging all at once

According to the Ministry of Land, Infrastructure, Transport and Tourism (MLIT), Japan's roads, rivers, sewers, ports, and other public infrastructure were built intensively during the period of rapid economic growth, and the share of facilities 50 or more years old is expected to rise at an accelerating pace over the next 20 years.

| Facility | Mar. 2023 | Mar. 2030 | Mar. 2040 |
|---|---|---|---|
| Road bridges (2 m or longer; about 730,000) | about 37% | about 54% | about 75% |
| Tunnels (about 12,000) | about 25% | about 35% | about 52% |

(Share of facilities 50 or more years after construction, excluding those whose construction year is unknown.)

MLIT itself notes, though, that how far a facility has deteriorated is not determined by its construction year alone but varies with its location, how it has been maintained, and so on; 50 years is a convenient dividing line.

## Inspection rules and new technology
- **Every five years, with close visual inspection as the basis**: the Road Bridge Periodic Inspection Guidelines (February 2019) set periodic inspections at once every five years as the basic frequency, and make "close visual inspection" — inspectors getting near enough to see clearly with their own eyes — the basis for assessing a bridge's condition.
- **Equivalent methods are allowed**: inspectors may instead use a method they judge to provide information that allows a diagnosis equivalent to their own close visual inspection.
- **The inspection-support technology performance catalog**: the government asks developers for performance values against standard items it defines, verifies the technologies at facilities such as those it manages, and compiles the results into a catalog. In April 2024 it added 78 technologies, bringing the total to 321. For national roads it manages directly, it has made the use of inspection-support technology the rule for bridges and tunnels since fiscal 2022, and including pavement since fiscal 2023.

## How much can AI see? One catalog example
The catalog's "bridge inspection support system using digital images and AI" (entry created in March 2026) uses AI (a convolutional neural network) and image processing to automatically find cracks, spalling and exposed rebar, and water leakage and efflorescence in photos of concrete taken with a digital camera, and to measure things like crack width and length. The developer's stated performance, evaluated on images not used in training:

| Damage | Recall | Precision |
|---|---|---|
| Cracks | 92% | 91% |
| Spalling | 85% | 84% |
| Water leakage | 96% | 92% |

- **Recall**: the share of real damage that was correctly found. At 92%, 8% of real damage may be missed.
- **Precision**: the share of detections that were real damage. At 91%, 9% of detections are wrong.

The catalog also lists caveats: accuracy can drop with dirty or low-resolution images, crack-width measurement can be less accurate where chalk marks overlap cracks, and types of damage the AI was not trained on are traced by hand by a person looking at the images.

## Reading the numbers
- Catalog performance values are submitted by developers against the government's standard items. Different shooting conditions or structures can give different results.
- AI helps "find and measure" damage, but under the guidelines it is the inspector who decides how to assess the condition and who diagnoses the bridge's soundness.
- Recall and precision mean little on their own. Whether misses or false alarms matter more depends on how the system is used (for an example of how the weight of each kind of error changes with the setting, see the [bias and fairness](/en/learn/ai-and-society/bias-and-fairness) lesson).`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "道路橋定期点検要領（2019年2月）で、定期点検の頻度の基本はどれ？",
        en: "Under the Road Bridge Periodic Inspection Guidelines (February 2019), what is the basic frequency of periodic inspections?",
      },
      choices: [
        { ja: "5年に1回", en: "Once every five years" },
        { ja: "毎月1回", en: "Once a month" },
        { ja: "50年に1回", en: "Once every 50 years" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "5年に1回が基本で、状態の把握は近接目視が基本です。同等の診断ができると点検する人が判断した方法も使えます。",
        en: "Once every five years is the basis, with close visual inspection as the basic way to assess condition. Methods the inspector judges to be equivalent may also be used.",
      },
    },
    {
      kind: "single",
      prompt: {
        ja: "ひび割れの検出で「再現率92%」とは、どういう意味？",
        en: "What does \"92% recall\" mean for crack detection?",
      },
      choices: [
        {
          ja: "本当にあるひび割れのうち92%を見つけられた（8%は見逃しうる）",
          en: "92% of the real cracks were found (8% may be missed)",
        },
        { ja: "見つけたもののうち92%が本当のひび割れだった", en: "92% of the detections were real cracks" },
        { ja: "点検の時間が92%短くなった", en: "Inspection time was cut by 92%" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "再現率は見逃しの少なさ、適合率は誤検出の少なさを表します。見つけたもののうち正しかった割合は適合率です。",
        en: "Recall measures how few real cases are missed; precision measures how few detections are wrong. The share of detections that were correct is precision.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "2019年の点検要領は、自分で近接目視したときと同等の診断ができると点検する人が判断した方法であれば、それで状態を把握してもよいとした。",
        en: "The 2019 guidelines allow inspectors to assess condition with any method they judge to allow a diagnosis equivalent to their own close visual inspection.",
      },
      answer: true,
      explanation: {
        ja: "近接目視を基本としつつ、同等の方法も認めています。国は点検支援技術をカタログにまとめ、直轄国道では活用を原則にしています。",
        en: "Close visual inspection remains the basis, but equivalent methods are allowed. The government catalogs inspection-support technologies and has made their use the rule on national roads it manages.",
      },
    },
  ],
  sources: [
    {
      label: "国土交通省: 社会資本の老朽化の現状と将来",
      url: "https://www.mlit.go.jp/sogoseisaku/maintenance/02research/02_01.html",
    },
    { label: "国土交通省: 道路橋定期点検要領（2019年2月）", url: "https://www.mlit.go.jp/road/sisaku/yobohozen/tenken/yobo4_1.pdf" },
    {
      label: "国土交通省: 点検支援技術性能カタログを拡充（2024-04-12）",
      url: "https://www.mlit.go.jp/report/press/content/001737836.pdf",
    },
    {
      label: "国土交通省: 点検支援技術性能カタログ BR010035「デジタル画像とAIを用いた橋梁点検サポートシステム」",
      url: "https://www.mlit.go.jp/road/sisaku/inspection-support/pdf/c/BR010035.pdf",
    },
  ],
  lastVerified: "2026-10-13",
  glossaryRefs: ["inspection-support-technology", "precision-and-recall", "false-positive"],
};
