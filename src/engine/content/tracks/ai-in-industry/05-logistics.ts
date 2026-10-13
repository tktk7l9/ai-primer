import type { Lesson } from "@/engine/content/types";

export const logistics: Lesson = {
  id: "ai-in-industry-05",
  slug: "logistics",
  title: {
    ja: "物流とAI — 2024年問題と、運ぶ力の不足",
    en: "Logistics and AI: The \"2024 Problem\" and a Shortfall in Carrying Capacity",
  },
  summary: {
    ja: "2024年4月から、トラックドライバーの時間外労働に年960時間の上限がかかった。何もしなければ運ぶ力が2030年度に約34%不足するという試算もある。国の政策パッケージが進める自動化・自動運転・AIと、技術だけでは解けない商慣行の問題。",
    en: "Since April 2024, truck drivers' overtime has been capped at 960 hours a year. One estimate says that, with no action, Japan could be about 34% short of carrying capacity by fiscal 2030. The automation, automated driving, and AI in the government's policy package, and the business-practice problems technology alone cannot solve.",
  },
  body: {
    ja: `## 「物流の2024年問題」とは

国土交通省の資料によると、国内の貨物の輸送量（トン数）の9割超はトラックが運んでいます。そのトラックドライバーは、全産業と比べて年間の労働時間が約2割長く、年間の所得は約1割低く、有効求人倍率は約2倍です。長時間労働の主な原因として、長い運転時間に加えて、荷物を積み下ろすまでの**荷待ち時間**や、荷役の作業が挙げられています。

2018年6月の働き方改革関連法に基づき、2024年4月から、自動車の運転業務の時間外労働に**年960時間**（休日労働を含まない）の上限がかかりました。運転手の拘束時間を定めた基準も厳しくなりました。国の試算では、具体的な対応をしなかった場合、次のように運ぶ力が不足する可能性があります。
- 2024年度: 約14%（4億トン相当）
- 2030年度: 約34%（9億トン相当）

## 国の政策パッケージ
政府の関係閣僚会議は2023年6月2日、「物流革新に向けた政策パッケージ」を決め、商慣行の見直し、物流の効率化、荷主・消費者の行動変容の3つを柱にしました。技術に関わる取り組みには、次のようなものがあります。
- **倉庫や営業所の自動化**: トラックの到着時刻を予約するバース予約システム、フォークリフト、自動倉庫や無人の荷役機器の導入。
- **自動運転とドローン**: 自動運転トラックの実用化に向けて、2024年度から先行的に、新東名高速道路の一部区間に100km以上の自動運転車用レーンを、送電網などに150km以上のドローン航路を設ける。高速道路の車道以外の用地や地下を使った、物流専用の自動輸送も調べる。
- **AIの活用**: 内航海運（国内の船の輸送）でAIを使って配船計画を作る。港では「ヒトを支援するAIターミナル」の取り組みを広げる。

## 技術だけでは解けない
同じパッケージは、荷主の企業にも、到着時間の指定や、荷物をパレットに載せて運ぶこと（パレット化）を進めるよう求めています。荷待ちや手作業の荷役は、運ぶ側だけでは減らせないからです。AIや自動化は、こうした商慣行の見直しとあわせて効果を発揮します。

## 読むときの注意
- 14%・34%は「具体的な対応をしなかった場合」の試算で、起きると決まった数字ではありません。
- 自動運転トラックやドローン物流は、実用化に向けて段階的に進められている取り組みです。人のいる場所を動く機械のルールは[歩道の配送ロボットと、空のドローン](/ja/learn/self-driving-and-robots/delivery-robots-and-drones)、自動運転の考え方は[自動運転の「レベル」](/ja/learn/self-driving-and-robots/driving-automation-levels)のレッスンで扱っています。`,
    en: `## What the logistics "2024 problem" is

According to the Ministry of Land, Infrastructure, Transport and Tourism (MLIT), trucks carry more than 90% of Japan's domestic freight by tonnage. Compared with all industries, truck drivers work about 20% more hours a year, earn about 10% less, and face a job-openings-to-applicants ratio about twice as high. Besides long driving hours, the main causes of their long working hours include **waiting time** before loading and unloading, and the loading and unloading work itself.

Under the June 2018 work-style reform legislation, a cap of **960 hours a year** (excluding work on days off) on overtime for driving work took effect in April 2024, and the standards for drivers' total working-and-break time were tightened too. A government estimate says that, without concrete action, carrying capacity could fall short by:
- about 14% (equivalent to 400 million tons) in fiscal 2024, and
- about 34% (equivalent to 900 million tons) in fiscal 2030.

## The government's policy package
On June 2, 2023, a ministerial council adopted a "policy package for logistics innovation" built on three pillars: reviewing business practices, making logistics more efficient, and changing the behavior of shippers and consumers. Its technology-related measures include:
- **Automating warehouses and depots**: berth reservation systems that book trucks' arrival times, forklifts, automated warehouses, and unmanned loading equipment.
- **Automated driving and drones**: toward practical automated trucks, starting in fiscal 2024 as early initiatives, a lane of 100 km or more for automated vehicles on part of the Shin-Tomei Expressway and drone routes of 150 km or more along power grids and similar lines; and a study of dedicated automated freight transport using expressway land other than the roadway, or space underground.
- **Using AI**: AI-generated ship allocation plans in domestic coastal shipping, and wider use of "AI terminals that support people" at ports.

## Technology alone is not enough
The same package asks shipper companies to set arrival times and to move goods on pallets (palletization), because waiting time and manual loading cannot be reduced by carriers alone. AI and automation work best alongside such changes in business practice.

## Reading the numbers
- The 14% and 34% figures are estimates for the case where no concrete action is taken, not outcomes that are certain to happen.
- Automated trucks and drone logistics are being advanced step by step toward practical use. The rules for machines that move among people are covered in [delivery robots and drones](/en/learn/self-driving-and-robots/delivery-robots-and-drones), and the ideas behind automated driving in [the levels of driving automation](/en/learn/self-driving-and-robots/driving-automation-levels).`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "2024年4月から、自動車の運転業務の時間外労働にかかった上限はどれ？",
        en: "What cap on overtime for driving work took effect in April 2024?",
      },
      choices: [
        { ja: "年960時間（休日労働を含まない）", en: "960 hours a year (excluding work on days off)" },
        { ja: "上限はかからなかった", en: "No cap was set" },
        { ja: "年96時間", en: "96 hours a year" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "働き方改革関連法に基づく上限で、運転手の拘束時間の基準も厳しくなりました。",
        en: "The cap comes from the work-style reform laws, and the standards for drivers' total working-and-break time were tightened as well.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "国の試算では、具体的な対応をしなかった場合、2030年度に運ぶ力が約34%不足する可能性がある。",
        en: "A government estimate says that, without concrete action, carrying capacity could fall about 34% short in fiscal 2030.",
      },
      answer: true,
      explanation: {
        ja: "2024年度は約14%、2030年度は約34%の不足の可能性という試算です。対応をしなかった場合の数字で、起きると決まったものではありません。",
        en: "The estimate is about 14% in fiscal 2024 and about 34% in fiscal 2030, for the case with no action — not a certain outcome.",
      },
    },
    {
      kind: "multi",
      prompt: {
        ja: "「物流革新に向けた政策パッケージ」に含まれる取り組みをすべて選んで。",
        en: "Select all the measures included in the policy package for logistics innovation.",
      },
      choices: [
        { ja: "トラックの到着時刻を予約するバース予約システムの導入", en: "Introducing berth reservation systems that book trucks' arrival times" },
        { ja: "新東名高速道路の一部区間への自動運転車用レーンの設定", en: "Setting a lane for automated vehicles on part of the Shin-Tomei Expressway" },
        { ja: "内航海運でAIを使った配船計画を作ること", en: "AI-generated ship allocation plans in domestic coastal shipping" },
        { ja: "トラックの台数を半分に減らす規制", en: "A rule cutting the number of trucks in half" },
      ],
      correctIndexes: [0, 1, 2],
      explanation: {
        ja: "倉庫の自動化、自動運転やドローン、AIの活用に加えて、荷主にも到着時間の指定やパレット化を求めています。トラックを半分に減らす規制はありません。",
        en: "Alongside warehouse automation, automated driving, drones, and AI, it asks shippers to set arrival times and palletize. There is no rule halving the number of trucks.",
      },
    },
  ],
  sources: [
    { label: "国土交通省: 物流の2024年問題について", url: "https://www.mlit.go.jp/policy/shingikai/content/001620626.pdf" },
    {
      label: "内閣官房: 物流革新に向けた政策パッケージ（2023年6月2日 我が国の物流の革新に関する関係閣僚会議決定）",
      url: "https://www.cas.go.jp/jp/seisaku/buturyu_kakushin/pdf/seisaku_package.pdf",
    },
    { label: "内閣官房: 我が国の物流の革新に関する関係閣僚会議 決定等", url: "https://www.cas.go.jp/jp/seisaku/buturyu_kakushin/kettei.html" },
  ],
  lastVerified: "2026-10-13",
  glossaryRefs: ["logistics-2024-problem", "physical-ai"],
};
