import type { Lesson } from "@/engine/content/types";

export const smartAgriculture: Lesson = {
  id: "ai-in-industry-02",
  slug: "smart-agriculture",
  title: {
    ja: "農業とAI — スマート農業と、減っていく担い手",
    en: "Farming and AI: Smart Agriculture and a Shrinking Workforce",
  },
  summary: {
    ja: "ドローンでの散布、自動で走るトラクター、病気の起きやすさをAIで見立てるアプリ。全国の実証で確かめられた効果と、機械に合わせて作り方を変える必要など、スマート農業の現在地。",
    en: "Spraying by drone, tractors that drive themselves, and an app that uses AI to assess disease risk. The effects confirmed in nationwide trials, and why farming methods themselves must change to suit the machines: where smart agriculture stands today.",
  },
  body: {
    ja: `## 担い手が減り、高齢になっている

農林水産省の統計では、ふだん主に自営農業に従事している人（基幹的農業従事者）は、2020年の136.3万人から2025年には103.6万人に減り、平均年齢は67.7歳（2025年）でした。2026年の調査では98.7万人です（2026年は標本調査による推定値で、全数を調べた2020年・2025年の値と直接比べるときは注意が必要）。2024年に国会に出された法案の概要は、今後20年で基幹的農業従事者が約4分の1（116万人から30万人）に減ると見込み、これまでの生産方式のままでは、農業の持続的な発展や食料の安定供給を確保できないとしています。

## スマート農業技術とは
「食料・農業・農村白書」（令和6年度）は、ロボット・AI・IoTなどの情報通信技術を使う**スマート農業技術**で生産性を高める取り組みが、農業の現場で広がっているとしています。
- ドローンによる農薬などの散布面積は、2023年度に109万7千ha。
- 田畑の中を自動で走るロボットトラクターや、スマートフォンで離れた田んぼの水を管理できるシステム。
- ドローンなどで集めたデータから作物の生育や病害虫を予測し、肥料のまき分けや防除、出荷の管理に生かす取り組み。

### AIの例 — 病気の起きやすさを見立てる
香川県などが参加する研究プロジェクトで開発されたアプリ「HeSo+（ヘソプラス）」は、生産者が根こぶ病の菌の密度や土のpHなどを入力すると、畑ごとに発病のリスクをAIが判断し、リスクに応じた対策を示します。リスクが低い畑では防除の水準を下げる、といった判断ができます。2022年度の実証では、必要以上に防除している畑が全体の13%ほどあることが分かりました。

## 実証で確かめられた効果
農林水産省は2019年度から、全国217地区で「スマート農業実証プロジェクト」を行ってきました。
- 水田作では、総労働時間が平均9%減り、面積あたりの収量（単収）は平均9%増えた。
- 技術別には、平均の作業時間が、農薬散布用ドローンで61%、自動の水管理システムで80%、まっすぐ植えるのを助ける田植機で18%短くなった。

一方で、課題もはっきりしました。
- 果樹や野菜では、収穫など人手に頼る作業が多く、技術の開発がまだ足りない。
- 狭い畝の間に機械が入らない、手で収穫する前提の樹の形になっているなど、今の作り方のままでは効果が十分に出ない。
- 機械の導入費用が高く、扱える人材も足りない。

静岡県の農業法人の例では、自動で操舵するトラクターやブロッコリーの収穫機で全体の作業時間を55%減らせた一方、収穫機が花蕾（食べる部分）を傷つけたり、大きさのばらつくものまで収穫したりして、歩留まりが下がりました。機械収穫に向く品種を選び、育ちの早い株は先に手で収穫するなど作業も見直して、収穫量を大きく改善しています。**技術を入れるだけでなく、作り方を技術に合わせる**ことが要る、という例です。

## 法律による後押し
スマート農業技術活用促進法（2024年6月成立、10月1日施行）は、スマート農業技術の活用とあわせて生産の方式を変える計画（生産方式革新実施計画）と、技術の開発と普及の計画（開発供給実施計画）の2つの認定制度を設け、認定を受けた農業者や事業者が金融などの支援を受けられるようにしました。

## 数字を読むときの注意
- 実証の効果は平均値で、品目や地域、条件で違います。水田作で10%以上の労働時間の削減が確認されたのは、正確に比べられる実証地区の約3割でした。
- 担い手の数は、全数調査と標本調査で値の性質が違います。`,
    en: `## Fewer and older farmers

According to Ministry of Agriculture, Forestry and Fisheries (MAFF) statistics, the number of people who usually work mainly on their own household's farm (core farm workers) fell from 1.363 million in 2020 to 1.036 million in 2025, with an average age of 67.7 (2025). The 2026 survey puts the number at 987,000 (the 2026 figure is a sample-survey estimate, so take care when comparing it directly with the full counts of 2020 and 2025). The summary of a bill submitted to the Diet in 2024 projected that core farm workers would fall to about a quarter over the next 20 years, from 1.16 million to 300,000, and said that with current production methods, sustainable farming and a stable food supply could not be secured.

## What smart agriculture technology is
MAFF's annual white paper on food, agriculture, and rural areas (fiscal 2024 edition) says efforts to raise productivity with **smart agriculture technology** — technology that uses robots, AI, IoT, and other information and communications technologies — are spreading on farms:
- The area sprayed with pesticides and the like by drone reached 1.097 million hectares in fiscal 2023.
- Robot tractors that drive themselves within a field, and systems for managing the water in a distant rice paddy from a smartphone.
- Predicting crop growth, pests, and diseases from data gathered by drones and other means, and using the results for variable fertilizing, pest control, and shipping management.

### An AI example: assessing disease risk
HeSo+, an app developed in a research project in which Kagawa Prefecture and others take part, has growers enter items such as the density of the pathogen behind clubroot disease and the soil's pH; AI then judges each field's risk of an outbreak and suggests measures matched to it. Where the risk is low, growers can decide to scale back pest control. Trials in fiscal 2022 found that about 13% of fields were being treated more than necessary.

## Effects confirmed in trials
Since fiscal 2019, MAFF has run the Smart Agriculture Demonstration Project at 217 sites across Japan.
- In rice farming, total working hours fell by 9% on average, and yield per area rose by 9% on average.
- By technology, average working time was 61% shorter with pesticide-spraying drones, 80% shorter with automatic water management systems, and 18% shorter with rice transplanters that assist straight-line driving.

The trials also exposed challenges:
- Fruit and vegetables still rely on manual work such as harvesting, and technology development there is not yet sufficient.
- Under current methods — narrow gaps between rows that machines cannot enter, or fruit trees shaped for hand harvesting — the technology cannot deliver its full effect.
- Machines are expensive to introduce, and there are not enough people who can operate them.

In one case, a farming company in Shizuoka Prefecture cut its total working time by 55% with a self-steering tractor and a broccoli harvester, but the harvester damaged the florets (the part you eat) and also picked heads of uneven size, lowering the usable yield. By choosing varieties suited to machine harvesting and changing how it works — harvesting fast-growing plants by hand first, for example — it greatly improved its harvest. It is an example of the need to **adapt farming methods to the technology, not just bring the technology in**.

## A push from the law
The Smart Agriculture Technology Utilization Promotion Act (passed in June 2024, in force from October 1) created two certification schemes: plans that use smart agriculture technology while changing production methods, and plans to develop and spread such technology. Farmers and businesses with certified plans can receive financial and other support.

## Reading the numbers
- The trial effects are averages and vary by crop, region, and conditions. In rice farming, a reduction in working hours of 10% or more was confirmed at about 30% of the sites where an exact comparison was possible.
- Worker counts from full censuses and from sample surveys are different kinds of numbers.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "スマート農業実証プロジェクトで、農薬散布用ドローンを使うと平均の作業時間はどう変わった？",
        en: "In the Smart Agriculture Demonstration Project, how did pesticide-spraying drones change average working time?",
      },
      choices: [
        { ja: "61%短くなった", en: "It was 61% shorter" },
        { ja: "変わらなかった", en: "It did not change" },
        { ja: "2倍に増えた", en: "It doubled" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "ドローンで61%、自動の水管理システムで80%、直進を助ける田植機で18%、それぞれ平均の作業時間が短くなりました。",
        en: "Average working time was 61% shorter with drones, 80% shorter with automatic water management, and 18% shorter with straight-line-assist rice transplanters.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "白書は、今の作り方のままでもスマート農業技術の効果は十分に出るとしている。",
        en: "The white paper says smart agriculture technology delivers its full effect even under current farming methods.",
      },
      answer: false,
      explanation: {
        ja: "狭い畝の間に機械が入らない、手で収穫する前提の樹の形など、今の作り方のままでは効果が十分に出ないため、技術に合った生産方式への転換が必要だとしています。",
        en: "It says that with narrow rows machines cannot enter, or trees shaped for hand harvesting, the effect falls short, so production methods need to change to suit the technology.",
      },
    },
    {
      kind: "single",
      prompt: {
        ja: "アプリ「HeSo+」がAIで判断するものはどれ？",
        en: "What does the HeSo+ app use AI to judge?",
      },
      choices: [
        { ja: "畑ごとの根こぶ病の発病リスク", en: "Each field's risk of clubroot disease" },
        { ja: "野菜の市場の値段", en: "Market prices for vegetables" },
        { ja: "翌週の天気", en: "Next week's weather" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "菌の密度や土のpHなどの入力から畑ごとの発病リスクを判断し、リスクに応じた対策を示します。必要以上の防除を減らす判断に使えます。",
        en: "From inputs such as pathogen density and soil pH, it judges each field's outbreak risk and suggests matching measures, helping growers cut unnecessary pest control.",
      },
    },
  ],
  sources: [
    { label: "農林水産省: 農業労働力に関する統計", url: "https://www.maff.go.jp/j/tokei/sihyo/data/08.html" },
    {
      label: "農林水産省: 農業の生産性の向上のためのスマート農業技術の活用の促進に関する法律案の概要",
      url: "https://www.maff.go.jp/j/law/bill/213/attach/pdf/index-20.pdf",
    },
    {
      label: "農林水産省: 令和6年度 食料・農業・農村白書 — 特集3 スマート農業技術の活用と今後の展望",
      url: "https://www.maff.go.jp/j/wpaper/w_maff/r6/r6_h/trend/part1/chap0/c0_1_03.html",
    },
    { label: "農林水産省: スマート農業技術活用促進法について", url: "https://www.maff.go.jp/j/kanbo/smart/houritsu.html" },
  ],
  lastVerified: "2026-10-13",
  glossaryRefs: ["smart-agriculture-technology", "physical-ai"],
};
