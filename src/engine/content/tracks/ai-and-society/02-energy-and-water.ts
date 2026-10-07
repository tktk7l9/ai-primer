import type { Lesson } from "@/engine/content/types";

export const energyAndWater: Lesson = {
  id: "ai-and-society-02",
  slug: "energy-and-water",
  title: {
    ja: "AIの電力と水 — 数字の読み方",
    en: "AI's Electricity and Water: How to Read the Numbers",
  },
  summary: {
    ja: "「AIは電気と水を大量に使う」と「質問1回の電力はごくわずか」は、どちらも公表された数字に基づく。全体と1回あたり、取水と消費、見直される予測——何を数えた数字かを確かめながら読む。",
    en: "\"AI uses huge amounts of power and water\" and \"one query uses almost nothing\" both rest on published figures. Totals versus per-query numbers, water withdrawn versus consumed, forecasts that get revised — read each number by first asking what it counts.",
  },
  body: {
    ja: `## 大きな数字と小さな数字、どちらも本当

「AIは大量の電気と水を使う」という話と、「AIへの質問1回の電力はごくわずか」という話は、どちらも国際機関や企業が公表した数字に基づいています。食い違って見えるのは、**何を・どこまで・どの単位で**数えたかが違うからです。

### 全体の量 — データセンターの電力
国際エネルギー機関（IEA）が2026年4月に公表した分析によると、世界のデータセンターの電力消費は2025年に17%増え、なかでもAI向けのデータセンターは50%増えました。データセンター全体の消費は、2025年の485TWh（テラワット時）から2030年には950TWhへとおよそ倍増し、世界の電力需要の約3%を占める見通しです。AI向けのデータセンターの消費は、同じ期間に約3倍になると見込まれています。

### 1回あたりの量 — 効率は急速に上がっている
同じ分析でIEAは、ソフトとハードの改良によって、AIの処理1回あたりのエネルギーが近年は毎年少なくとも10分の1のペースで下がってきたと述べています。単純な文章の質問なら、同じ時間だけテレビをつけておくより電力が少ないのが普通で、従来のネット検索をすべてAIへの単純な質問に置き換えても年4TWh未満（いまのデータセンター全体の消費の1%未満）だといいます。

一方で、動画の生成、時間をかけて考えさせる使い方（リーズニング）、[エージェント](/ja/learn/ai-agents/tool-use-loop)のような使い方は、1回あたりで単純な文章生成の数百倍から数千倍のエネルギーを使うことがあります。全体の量は、**効率の改善**・**利用の広がり**・**できることの変化（より重い使い方）**の3つの流れで決まり、IEAはどれも変化が速く不確かだとしています。1回あたりの量が下がっても、全体の量が下がるとは限りません。

### 企業の公表値は「どこまで数えたか」を見る
Googleは2025年8月、Geminiアプリの文章のプロンプト1回（中央値）あたりのエネルギーを0.24Wh、CO2排出を0.03g（CO2換算）、水を0.26mL（約5滴）と公表しました。テレビを9秒弱見るのと同じくらいのエネルギーだといいます。この数字は[推論](/ja/learn/how-llms-work/inference-temperature)（学習済みのモデルを使って答えを出すこと）の分で、AIの計算をするチップだけでなく、ホストのCPUとメモリ、アクセスの急増や障害に備えて待機している機械、冷却や配電といったデータセンター設備の電力（**PUE**で表す）まで含めています。チップの消費だけを数えると0.10Whになりますが、Google自身がこれを「せいぜい楽観的なシナリオ」で、実際の負荷をかなり過小評価すると書いています。

読むときに押さえたい点もあります。
- **対象**: 2025年5月時点の、文章のプロンプトの**中央値**です。Googleは、すべてのプロンプトの影響を表すものでも、将来の性能を示すものでもないと注記しています。
- **改善の速さ**: 12か月で、中央値のプロンプトのエネルギーは33分の1、炭素の排出は44分の1に減ったとしています。
- **検証**: これらの数字は第三者の検証を受けていない、とGoogle自身が記しています。

### 水は「取水」と「消費」を分ける
水の数字は特に混乱しやすいところです。米国の研究者ら（Liら）の論文「Making AI Less "Thirsty"」は、次の区別を示しています。
- **取水量**: 川や地下水などから取り出した水の量。一時的に使って戻す分も含みます。
- **消費量**: 取水量から排水量を引いた量。蒸発などで、元の水環境に戻らない分です。
- **どこで使う水か**: データセンターの冷却に使う水（オンサイト）、発電所で使われる水（オフサイト）、サーバーの製造に使われる水（サプライチェーン）の3つ。

この論文は、GPT-3の学習に、発電で使われる分も含めて合計540万リットル（うちデータセンターでの消費は70万リットル）の水が使われうると推計し、世界のAI需要が2027年に42億〜66億立方メートルの取水につながりうるとしています。そのうえで、発電所で使われる水の消費も報告に含めることを標準にするよう勧めています。Googleの0.26mLは、データセンターの水使用効率（WUE）から計算した数字で、この区別でいえばデータセンターでの水にあたります。同じ「水の量」でも、どれを数えたかで桁が変わります。

### 日本では — 予測は見直される
日本の電力需要の想定をまとめる電力広域的運営推進機関（OCCTO）は、2026年1月に公表した想定で、データセンターと半導体工場の新設・増設の計画を個別に積み上げ、2030年度に308億kWh、2035年度に568億kWhの需要増を見込みました。一方で、主にデータセンターの工事の延期・遅れや設計変更によって稼働の時期が後ろにずれたため、2033年度までは前回の想定を下回り、2034年度以降は上回る見通しに変わっています。予測は、計画の変化に合わせて毎年のように見直されます。

### 数字を読むときの5つの問い
1. **何を数えたか**: 電力か、CO2か、水か。水なら取水か消費か。
2. **どこまで数えたか**: AIの計算をするチップだけか、待機中の機械や冷却まで含むか。学習の分は入っているか。
3. **1回あたりか、全体か**: 1回の量が減っても、使う回数や重い使い方が増えれば、全体は増えうる。
4. **何と比べているか**: 「テレビ◯秒分」「ペットボトル1本分」といった比較は、何を前提にしているか。
5. **いつの、誰の数字か**: 予測は前提とともに見直される。第三者の検証を受けているか。

### 利用者としてできること
単純な文章の質問1回のエネルギーは小さいという公表値がある一方、動画の生成のように1回で桁違いのエネルギーを使う使い方もあります。必要以上に何度も生成し直さない、目的に見合わない重い機能を使わない、といった選び方は無駄を減らします。そのうえで、企業の環境報告や発表を読むときは、数え方を明示しているか、第三者の検証を受けているかに注目しましょう。`,
    en: `## The big numbers and the small numbers are both true

"AI uses huge amounts of electricity and water" and "one AI query uses almost no electricity" both rest on figures published by international agencies and companies. They seem to contradict each other because they count **different things, over different boundaries, in different units**.

### The total: data-centre electricity
According to an analysis published by the International Energy Agency (IEA) in April 2026, electricity consumption by the world's data centres grew 17% in 2025, and consumption by AI-focused data centres grew 50%. Total data-centre consumption is projected to roughly double from 485 TWh (terawatt-hours) in 2025 to 950 TWh in 2030 — around 3% of global electricity demand. Consumption by AI-focused data centres is expected to triple over the same period.

### Per query: efficiency is improving fast
In the same analysis, the IEA says software and hardware advances have cut the energy used per AI task by at least an order of magnitude a year in recent years. A simple text query now typically uses less electricity than running a television for the same length of time, and if every conventional web search were replaced with a simple AI text query, it would use less than 4 TWh a year — under 1% of total data-centre consumption today.

On the other hand, video generation, reasoning tasks that make the model think at length, and [agent](/en/learn/ai-agents/tool-use-loop)-style tasks can use hundreds or thousands of times more energy per query than simple text generation. The total is the result of three trends — **improving efficiency**, **surging uptake**, and **changing capabilities that unlock heavier uses** — and the IEA describes all three as fast-moving and uncertain. Lower energy per query does not guarantee lower energy in total.

### Company figures: check what is counted
In August 2025, Google published estimates for the median Gemini Apps text prompt: 0.24 Wh of energy, 0.03 g of CO2 equivalent, and 0.26 mL of water (about five drops) — energy equal to watching TV for less than nine seconds. The figure covers [inference](/en/learn/how-llms-work/inference-temperature) (using a trained model to produce answers), and counts not only the chips doing the AI computation but also the host CPU and memory, machines kept idle to handle traffic spikes or failures, and the data-centre overhead for cooling and power distribution (expressed as **PUE**). Counting the chips alone gives 0.10 Wh — which Google itself calls "an optimistic scenario at best" that substantially underestimates the real footprint.

A few things to keep in mind when reading it:
- **Scope**: it is the **median** text prompt, using data from May 2025. Google notes that the findings do not represent every prompt and are not indicative of future performance.
- **Pace of improvement**: Google says that over 12 months, the energy of the median prompt fell 33-fold and its carbon footprint 44-fold.
- **Verification**: Google states that the data and claims have not been verified by an independent third party.

### Water: separate withdrawal from consumption
Water figures are especially easy to confuse. The paper "Making AI Less 'Thirsty'" by US researchers (Li and colleagues) draws these distinctions:
- **Withdrawal**: freshwater taken from surface or ground sources, including water used temporarily and returned.
- **Consumption**: withdrawal minus discharge — water that evaporates or otherwise leaves the immediate water environment.
- **Where the water is used**: on-site water for cooling data centres, off-site water used to generate electricity, and supply-chain water for manufacturing servers.

The paper estimates that training GPT-3 could use a total of 5.4 million liters of water including electricity generation (700,000 liters of it consumed on-site at data centres), and that global AI demand could account for 4.2–6.6 billion cubic meters of water withdrawal in 2027. It recommends making the reporting of off-site water consumption from electricity generation standard practice. Google's 0.26 mL is calculated from its data centres' water usage effectiveness (WUE) — in these terms, it is on-site data-centre water. The same "amount of water" can differ by orders of magnitude depending on what is counted.

### Japan: forecasts get revised
In January 2026, Japan's Organization for Cross-regional Coordination of Transmission Operators (OCCTO), which compiles the national electricity demand outlook, added up planned new and expanded data centres and semiconductor plants one by one, projecting extra demand of 30.8 billion kWh in fiscal 2030 and 56.8 billion kWh in fiscal 2035. At the same time, because mainly data-centre projects were postponed, delayed, or redesigned, pushing back when they start operating, the outlook now sits below the previous year's forecast through fiscal 2033 and above it from fiscal 2034. Forecasts like these are revised as plans change, often every year.

### Five questions to ask of any number
1. **What is counted?** Electricity, CO2, or water — and for water, withdrawal or consumption?
2. **Where is the boundary?** Only the chips doing the AI work, or idle machines and cooling too? Is training included?
3. **Per query or in total?** Even if each query uses less, more queries and heavier uses can still raise the total.
4. **Compared with what?** What assumptions sit behind "X seconds of TV" or "a bottle of water"?
5. **Whose number, and from when?** Forecasts are revised along with their assumptions. Has anyone independent checked it?

### What you can do as a user
Published figures say a single simple text query uses little energy, but some uses, such as video generation, use orders of magnitude more per request. Not regenerating more than you need, and not reaching for heavy features a task doesn't call for, avoids waste. And when you read companies' environmental reports and announcements, look at whether they spell out how they count, and whether anyone independent has checked the numbers.`,
  },
  quiz: [
    {
      kind: "boolean",
      prompt: {
        ja: "AIの処理1回あたりのエネルギーが下がれば、AI全体の電力消費も必ず下がる。",
        en: "If the energy used per AI task goes down, the total electricity used by AI must go down too.",
      },
      answer: false,
      explanation: {
        ja: "IEAによると、1回あたりのエネルギーは近年毎年少なくとも10分の1のペースで下がってきた一方、データセンターの電力消費は2025年に17%増え、AI向けは50%増えました。使われる回数や重い使い方が増えれば、全体は増えます。",
        en: "According to the IEA, energy per AI task has fallen by at least an order of magnitude a year recently, yet data-centre electricity use grew 17% in 2025 and AI-focused data centres grew 50%. More use and heavier uses can still push the total up.",
      },
    },
    {
      kind: "multi",
      prompt: {
        ja: "AIの水の使用量の数字を比べる前に確かめるべきことをすべて選んでください。",
        en: "Before comparing figures for AI's water use, what should you check? Select all that apply.",
      },
      choices: [
        { ja: "取水量か、消費量か", en: "Whether it is withdrawal or consumption" },
        {
          ja: "データセンターでの水だけか、発電所で使われる水も含むか",
          en: "Whether it counts only data-centre water or also water used to generate electricity",
        },
        { ja: "1回あたりの数字か、全体の数字か", en: "Whether it is a per-query figure or a total" },
        { ja: "大きい方の数字が正しいと考えてよいか", en: "Whether you can assume the larger number is the correct one" },
      ],
      correctIndexes: [0, 1, 2],
      explanation: {
        ja: "取水か消費か、どこで使う水か、1回あたりか全体かで、数字は桁ごと変わります。大きい・小さいで正しさは決まりません。何を数えたかをそろえてから比べます。",
        en: "Withdrawal versus consumption, where the water is used, and per-query versus total can each change a figure by orders of magnitude. Size says nothing about correctness — line up what is being counted before you compare.",
      },
    },
  ],
  sources: [
    {
      label: "IEA: Key Questions on Energy and AI — Executive summary (2026-04)",
      url: "https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary",
    },
    {
      label: "Google Cloud Blog: How much energy does Google's AI use? We did the math (2025-08)",
      url: "https://cloud.google.com/blog/products/infrastructure/measuring-the-environmental-impact-of-ai-inference",
    },
    {
      label: "Li et al.: Making AI Less \"Thirsty\": Uncovering and Addressing the Secret Water Footprint of AI Models (arXiv)",
      url: "https://arxiv.org/abs/2304.03271",
    },
    {
      label: "電力広域的運営推進機関（OCCTO）: 2026年度 全国及び供給区域ごとの需要想定について（2026-01-21）",
      url: "https://www.occto.or.jp/news/010743.html",
    },
  ],
  lastVerified: "2026-10-07",
  glossaryRefs: ["inference", "pue", "water-withdrawal-and-consumption", "agent"],
};
