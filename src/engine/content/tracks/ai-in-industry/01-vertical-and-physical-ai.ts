import type { Lesson } from "@/engine/content/types";

export const verticalAndPhysicalAi: Lesson = {
  id: "ai-in-industry-01",
  slug: "vertical-and-physical-ai",
  title: {
    ja: "働き手が減る現場とAI — バーティカルAIとフィジカルAI",
    en: "AI Where Workers Are Scarce: Vertical AI and Physical AI",
  },
  summary: {
    ja: "日本では2040年までに働く世代の人口が約2割減ると見込まれる。農業・建設・インフラ点検・物流・介護の現場で、AIに何が期待され、何が課題なのか。国の計画が掲げる「バーティカルAI」と「フィジカルAI」から、このトラックの地図を描く。",
    en: "Japan's working-age population is expected to shrink by about 20% by 2040. What is expected of AI on the front lines of farming, construction, infrastructure inspection, logistics, and care, and what stands in the way? This lesson maps out the track, starting from the \"vertical AI\" and \"physical AI\" named in Japan's national AI plan.",
  },
  body: {
    ja: `## 働く世代が減っていく

国土交通省の「i-Construction 2.0」（2024年4月）は、国立社会保障・人口問題研究所の将来推計（2023年4月公表）をもとに、生産年齢人口は2040年には2割減ると予測されていると書いています。現場ごとに見ると、次のような見通しが示されています。
- **農業**: ふだん主に自営農業に従事している人（基幹的農業従事者）は、今後20年で約4分の1（116万人から30万人）に減る見込み（農林水産省、2024年）。
- **介護**: 必要な介護職員は、2040年度に約272万人（2022年度より約57万人多い）と推計（厚生労働省、2024年7月）。

## 企業はAIに何を期待しているか
総務省の「情報通信白書」（令和8年版）によると、生成AIを「積極的に活用する」か「領域を限定して利用する」方針の日本企業は68.9%で、前年度の調査の49.7%から大きく増えましたが、米国・ドイツ・中国よりは低いままでした。生成AIの活用で生じうる影響として日本企業が最も多く挙げたのは「業務の効率化」（61.6%）で、「製品・サービスの質の向上」（32.2%）、「人員不足の解消」（26.8%）が続きました。

## 国の計画の「バーティカルAI」と「フィジカルAI」
人工知能基本計画（2026年7月14日閣議決定）は、地域での人手不足をはじめ社会課題の多い日本こそ、AIを課題の解決に積極的に使うべきだとして、AI戦略の重点を次の2つに置いています。
- **バーティカルAI**: 産業や行政の現場で使える、領域に特化したAI。暗黙知を含めた各現場の経験や知識を、データとして集める。
- **フィジカルAI**: 現実の空間で価値を生むAI。データやAIによる判断を、機械や装置を通じて現実の世界で実行する。

情報通信白書は、科学技術振興機構の研究開発戦略センター（CRDS）の提案を引いて、フィジカルAIを「センサやアクチュエーターなどの物理的な機構を通じて環境と相互作用し、得られた入力と動作の結果に基づいて知能を獲得・発達させる、身体性を備えた人工知能」と紹介しています。部品や組み立て方の違う製品を1台のロボットで作ることや、家事や災害現場での作業の代行が期待される一方、課題として次の3つが挙げられています。
- **巧緻性**: 多様な作業に対応できること
- **頑健性**: 多様な環境に適応できること
- **協調性**: 人と安全に協働できること

## このトラックで見る現場
- [農業](/ja/learn/ai-in-industry/smart-agriculture): ドローンや自動で走るトラクター、病気のリスクを見立てるAI
- [建設](/ja/learn/ai-in-industry/construction-automation): 1人で複数の建設機械を動かすオートメーション化
- [インフラ点検](/ja/learn/ai-in-industry/infrastructure-inspection): 老いていく橋やトンネルを、画像のAIで見る
- [物流](/ja/learn/ai-in-industry/logistics): 2024年問題と、自動化・自動運転
- [介護](/ja/learn/ai-in-industry/care-technology): 見守り機器やAIで、ケアの時間を生む

工場で働く産業用ロボットや、配送ロボット・ドローンのルールは、[自動運転とロボット](/ja/learn/self-driving-and-robots)のトラックで扱っています。各レッスンでは、AIや機械に任せる部分と人が担う部分、数字を読むときの注意を見ていきます。`,
    en: `## A shrinking working-age population

Drawing on the National Institute of Population and Social Security Research's projections (published in April 2023), the Ministry of Land, Infrastructure, Transport and Tourism's "i-Construction 2.0" (April 2024) notes that Japan's working-age population is projected to fall by 20% by 2040. Looking at specific front lines:
- **Farming**: the number of people who usually work mainly on their own household's farm (core farm workers) is expected to fall to about a quarter over the next 20 years, from 1.16 million to 300,000 (Ministry of Agriculture, Forestry and Fisheries, 2024).
- **Care**: about 2.72 million care workers are estimated to be needed in fiscal 2040, about 570,000 more than in fiscal 2022 (Ministry of Health, Labour and Welfare, July 2024).

## What companies expect from AI
According to the Ministry of Internal Affairs and Communications' 2026 White Paper on Information and Communications, 68.9% of Japanese companies had a policy of using generative AI "actively" or "in limited areas," up sharply from 49.7% in the previous year's survey but still lower than in the US, Germany, and China. The effect Japanese companies most often expected from generative AI was "more efficient operations" (61.6%), followed by "better products and services" (32.2%) and "easing staff shortages" (26.8%).

## "Vertical AI" and "physical AI" in the national plan
Japan's Artificial Intelligence Basic Plan (adopted by the Cabinet on July 14, 2026) argues that Japan, with its many social problems starting with local labor shortages, is exactly the country that should actively apply AI to solve them, and puts the emphasis of its AI strategy on two things:
- **Vertical AI**: domain-specific AI for use on the front lines of industry and government. It gathers the experience and knowledge of each workplace, including tacit knowledge, as data.
- **Physical AI**: AI that creates value in real-world space. It carries out decisions based on that data and on AI judgment in the real world, through machines and equipment.

The white paper cites a proposal by the Center for Research and Development Strategy (CRDS) of the Japan Science and Technology Agency, which describes physical AI as "embodied artificial intelligence that interacts with its environment through physical mechanisms such as sensors and actuators, and acquires and develops intelligence based on its inputs and the results of its actions." It is expected to let a single robot make products with different parts and assembly methods, and to take over housework or work at disaster sites; the challenges listed are three:
- **Dexterity**: handling many different tasks
- **Robustness**: adapting to many different environments
- **Cooperation**: working safely alongside people

## The front lines in this track
- [Farming](/en/learn/ai-in-industry/smart-agriculture): drones, self-driving tractors, and AI that assesses disease risk
- [Construction](/en/learn/ai-in-industry/construction-automation): automation in which one person runs several machines
- [Infrastructure inspection](/en/learn/ai-in-industry/infrastructure-inspection): image AI for aging bridges and tunnels
- [Logistics](/en/learn/ai-in-industry/logistics): the "2024 problem," automation, and automated driving
- [Care](/en/learn/ai-in-industry/care-technology): monitoring devices and AI that free up time for care

Industrial robots in factories, and the rules for delivery robots and drones, are covered in the [self-driving cars and robots](/en/learn/self-driving-and-robots) track. Each lesson looks at what is handed to AI and machines, what people still do, and what to watch for when reading the numbers.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "人工知能基本計画が「フィジカルAI」と呼ぶものはどれ？",
        en: "What does the Artificial Intelligence Basic Plan call \"physical AI\"?",
      },
      choices: [
        {
          ja: "データやAIによる判断を、機械や装置を通じて現実の世界で実行するAI",
          en: "AI that carries out decisions based on data and AI judgment in the real world, through machines and equipment",
        },
        { ja: "文章だけを作るAI", en: "AI that only produces text" },
        { ja: "計算を速くするための半導体", en: "Semiconductors that speed up computation" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "計画は、現場の経験や知識をデータとして集める「バーティカルAI」と、その判断を機械や装置で現実に実行する「フィジカルAI」に重点を置いています。",
        en: "The plan emphasizes vertical AI, which gathers workplace experience and knowledge as data, and physical AI, which carries out those judgments in the real world through machines and equipment.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "情報通信白書（令和8年版）では、生成AIの活用方針を定めた日本企業の割合は、米国・ドイツ・中国より高かった。",
        en: "In the 2026 White Paper on Information and Communications, the share of Japanese companies with a policy for using generative AI was higher than in the US, Germany, and China.",
      },
      answer: false,
      explanation: {
        ja: "日本は68.9%で前年度の49.7%から大きく上がりましたが、ほかの3か国よりは低いままでした。",
        en: "Japan rose sharply to 68.9% from 49.7% the previous year, but stayed lower than the other three countries.",
      },
    },
    {
      kind: "multi",
      prompt: {
        ja: "CRDSの提案が挙げる、フィジカルAIの課題をすべて選んで。",
        en: "Select all the challenges for physical AI listed in the CRDS proposal.",
      },
      choices: [
        { ja: "巧緻性（多様な作業への対応）", en: "Dexterity (handling many different tasks)" },
        { ja: "頑健性（多様な環境への適応）", en: "Robustness (adapting to many environments)" },
        { ja: "協調性（人との安全な協働）", en: "Cooperation (working safely with people)" },
        { ja: "文章を長く書く力", en: "Writing long text" },
      ],
      correctIndexes: [0, 1, 2],
      explanation: {
        ja: "ロボットが環境に合わせて多様な作業をこなすための課題として、巧緻性・頑健性・協調性の3つが挙げられています。",
        en: "Dexterity, robustness, and cooperation are the three challenges listed for robots that adapt to their environment and handle many kinds of tasks.",
      },
    },
  ],
  sources: [
    { label: "内閣府: 人工知能基本計画（2026年7月14日閣議決定）", url: "https://www8.cao.go.jp/cstp/ai/ai_plan/aiplan_20260714.pdf" },
    {
      label: "総務省: 令和8年版 情報通信白書 — 生成AIの活用方針等",
      url: "https://www.soumu.go.jp/johotsusintokei/whitepaper/ja/r08/html/nd121110.html",
    },
    {
      label: "総務省: 令和8年版 情報通信白書 — 生成AIの活用により生じうる影響",
      url: "https://www.soumu.go.jp/johotsusintokei/whitepaper/ja/r08/html/nd121150.html",
    },
    { label: "総務省: 令和8年版 情報通信白書 — フィジカルAI（概要）", url: "https://www.soumu.go.jp/johotsusintokei/whitepaper/ja/r08/html/nd122210.html" },
    {
      label: "総務省: 令和8年版 情報通信白書 — フィジカルAI（社会実装における期待と課題）",
      url: "https://www.soumu.go.jp/johotsusintokei/whitepaper/ja/r08/html/nd122220.html",
    },
    { label: "国土交通省: i-Construction 2.0 ～建設現場のオートメーション化～（2024年4月）", url: "https://www.mlit.go.jp/tec/constplan/content/001738240.pdf" },
    {
      label: "農林水産省: 農業の生産性の向上のためのスマート農業技術の活用の促進に関する法律案の概要",
      url: "https://www.maff.go.jp/j/law/bill/213/attach/pdf/index-20.pdf",
    },
    { label: "厚生労働省: 第9期介護保険事業計画に基づく介護職員の必要数について（2024-07-12）", url: "https://www.mhlw.go.jp/stf/newpage_41379.html" },
  ],
  lastVerified: "2026-10-13",
  glossaryRefs: ["vertical-ai", "physical-ai"],
};
