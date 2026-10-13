import type { Lesson } from "@/engine/content/types";

export const forecastingHeavyRain: Lesson = {
  id: "ai-and-disasters-01",
  slug: "forecasting-heavy-rain",
  title: {
    ja: "大雨の予測とAI — 気象庁と理研の共同研究から",
    en: "Forecasting Heavy Rain with AI: Lessons from JMA's Joint Research with RIKEN",
  },
  summary: {
    ja: "国の人工知能基本計画は、防災でのAIの利活用を戦略的に進めるとしている。気象庁は理化学研究所と、気温の推定、観測データのノイズ除去、複数の予測の組み合わせ、台風の急発達の予測にAIを使う研究を進めた。物理の計算による予報を土台に、AIをどこに足しているのかを見る。",
    en: "Japan's national AI basic plan calls for strategically advancing the use of AI in disaster prevention. The Japan Meteorological Agency (JMA) worked with RIKEN on using AI to estimate temperatures, remove noise from observations, combine several forecasts, and predict rapid typhoon intensification. With physics-based forecasting as the foundation, where is AI being added?",
  },
  body: {
    ja: `## 防災の土台は、観測と予測
内閣府の人工知能基本計画（2026年7月14日閣議決定）は、防衛、サイバーセキュリティ、防災、消防、警察でのAIの利活用を戦略的に進めるとしています。このトラックでは、災害の前（予測）、最中（状況の把握）、後（被害の認定と被災者の支援）で、AIがどう使われ始めているかを順に見ていきます。

最初は予測です。気象庁の予報の中心は**数値予報**です。物理学の方程式に基づき、現在までの観測をもとに、将来の大気や海洋の状態をコンピューターで計算します。さらに、数値予報のデータや観測・解析データから統計的な手法で作り、天気、最高気温、雨量などの予報要素を直接示す予測資料を**ガイダンス**と呼びます。気象庁の予報用語は、ガイダンスの作成手法の一つにニューラルネットワークも挙げています。

## 理研AIPとの共同研究（2019〜2023年）
気象庁は2019年1月、理化学研究所 革新知能統合研究センター（理研AIP）と、気象観測・予測へのAI技術の活用に向けた共同研究を始めました（2023年3月31日まで）。目的は、気象庁が発表する防災気象情報の根幹を支える観測と予測の精度を大きく上げることです。2023年6月30日に公表された成果は次のとおりです。

| 課題 | 成果 |
|---|---|
| 気温の推定 | 様々な気象データや標高などの土地の情報から、深層学習で全国1kmメッシュの現在の気温を推定する技術を開発 |
| 水蒸気ライダーのノイズ除去 | 観測データを時間と高度の2次元の画像として扱い、画像処理のAIでノイズを除く手法を開発。従来の手法より平均で30%を超える精度の改善。気象研究所が線状降水帯の仕組みを調べる研究で使っている |
| 統合型ガイダンス（仮称） | 解像度や予報時間の異なる全球モデル・メソモデル・局地モデルなどに基づくガイダンスを、AIで最適に組み合わせる。18時間先までの3時間降水量の予測で、全球モデルとメソモデルのガイダンスをすべての閾値で上回った（2018年4月〜2019年3月の1年間の検証）。2023年5月26日に論文を公表 |
| 台風の急発達 | 頻度の少ない現象で、従来の簡便な判別手法では精度に限界がある。衛星画像を使う深層学習のプロトタイプで、精度が改善する可能性が示された |

## 物理の計算は今も土台
- **1kmの局地モデル**: 気象庁は2026年3月17日、豪雨の予測に使う数値予報モデル「局地モデル」の格子を2kmから1kmに細かくし、翌18日には豪雨の発生を確率的に予測する局地アンサンブル予報システムの運用を始めました。開発にはスーパーコンピュータ「富岳」などを使いました。気象庁は、これらを線状降水帯の直前予測や半日前予測などに活用するとしています。
- **AIを組み込む研究**: 気象研究所は2025年度から2028年度まで、線状降水帯や台風の集中観測と予測技術の向上に取り組む緊急研究を進めています。その計画には、AI技術などを活用した最先端の同化・予測技術の開発も入っています（2025年6月20日の有識者会合の資料）。

世界の機械学習の天気予報モデル（GraphCastやAIFS）は、[天気予報とAI](/ja/learn/ai-and-science/weather-forecasting)のレッスンで扱っています。

## 読むときの注意
- **研究成果と運用は別**: 2023年の発表は「一定の研究成果」で、気象庁は今後、実用化を目指して技術開発を進めるとしています。「統合型ガイダンス」も仮称です。
- **何と比べたか**: 「上回った」は、どの予測と、どの期間・どの指標で比べたかで意味が変わります。共同研究の降水量の比較は、1年間の検証での全球モデルとメソモデルのガイダンスとの比較です（[ベンチマークの読み方](/ja/learn/understanding-ai/reading-benchmarks)のレッスン参照）。
- **まれな現象は難しい**: 台風の急発達のように頻度の少ない現象では、従来の手法の精度に限界がありました。共同研究で示されたのも、改善する「可能性」の段階です。`,
    en: `## Disaster prevention starts with observation and prediction
Japan's AI Basic Plan (adopted by the Cabinet on July 14, 2026) calls for strategically advancing the use of AI in defense, cybersecurity, disaster prevention, firefighting, and policing. This track looks at how AI is starting to be used before a disaster (prediction), during it (understanding the situation), and after it (assessing damage and supporting survivors).

We start with prediction. At the center of the Japan Meteorological Agency's (JMA) forecasts is **numerical weather prediction**: computing the future state of the atmosphere and oceans from the equations of physics, starting from observations up to now. On top of that, JMA produces **guidance** — forecast material that directly gives forecast elements such as weather, maximum temperature, and rainfall, built with statistical methods from numerical prediction data and observation and analysis data. JMA's glossary of forecast terms lists neural networks as one of the methods for producing guidance.

## Joint research with RIKEN AIP (2019-2023)
In January 2019, JMA began joint research with the RIKEN Center for Advanced Intelligence Project (RIKEN AIP) on using AI in weather observation and prediction (through March 31, 2023). The aim was to greatly improve the accuracy of the observations and predictions that underpin JMA's weather information for disaster prevention. The results announced on June 30, 2023:

| Theme | Result |
|---|---|
| Estimating temperatures | Developed a technique that uses deep learning to estimate current temperatures on a 1 km mesh across Japan from various weather data and land information such as elevation |
| Removing noise from water vapor lidar | Developed a method that treats observations as two-dimensional images of time and altitude and removes noise with image-processing AI, improving accuracy by more than 30% on average over the conventional method. JMA's Meteorological Research Institute uses it in research on how linear rainbands form |
| "Integrated guidance" (working name) | Uses AI to optimally combine guidance based on models with different resolutions and forecast ranges, such as the global, mesoscale, and local models. For 3-hour rainfall up to 18 hours ahead, it beat the global-model and mesoscale-model guidance at every threshold (verified over one year, April 2018 to March 2019). The paper was published on May 26, 2023 |
| Rapid typhoon intensification | A rare phenomenon, for which simple conventional discrimination methods have limited accuracy. A deep-learning prototype using satellite images showed that accuracy could improve |

## Physics is still the foundation
- **A 1 km local model**: On March 17, 2026, JMA refined the grid of its "local model," the numerical prediction model it uses to forecast heavy rain, from 2 km to 1 km, and on the 18th it began running a local ensemble prediction system that forecasts heavy rain probabilistically. Development used the Fugaku supercomputer, among others. JMA says it will use them for short-lead and half-day-ahead forecasts of linear rainbands, among other things.
- **Research that builds AI in**: From fiscal 2025 through fiscal 2028, the Meteorological Research Institute is running an urgent research project on intensive observation of linear rainbands and typhoons and on better prediction. Its plan includes developing state-of-the-art data assimilation and prediction techniques that use AI and other technologies (according to material for an expert meeting on June 20, 2025).

Global machine-learning weather models such as GraphCast and AIFS are covered in the [weather forecasting and AI](/en/learn/ai-and-science/weather-forecasting) lesson.

## Reading the news
- **Research results are not operations**: The 2023 announcement described "certain research results," and JMA said it would go on developing the techniques with practical use in mind. "Integrated guidance" is a working name.
- **Compared with what?**: "Beat" means different things depending on which forecasts were compared, over what period, and on which measure. The joint research compared rainfall forecasts against the global-model and mesoscale-model guidance in a one-year verification (see the [how to read benchmarks](/en/learn/understanding-ai/reading-benchmarks) lesson).
- **Rare events are hard**: For rare phenomena such as rapid typhoon intensification, conventional methods had limited accuracy, and what the joint research showed was still the "possibility" of improvement.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "気象庁の予報用語で「ガイダンス」とは？",
        en: "In JMA's glossary of forecast terms, what is \"guidance\"?",
      },
      choices: [
        {
          ja: "数値予報のデータや観測・解析データから統計的な手法で作る、天気・最高気温・雨量などを直接示す予測資料",
          en: "Forecast material that directly gives weather, maximum temperature, rainfall, and so on, built with statistical methods from numerical prediction data and observation and analysis data",
        },
        { ja: "自治体が住民に避難を呼びかける文書", en: "A notice in which a municipality calls on residents to evacuate" },
        { ja: "物理の方程式だけで大気を計算するプログラム", en: "A program that computes the atmosphere from physics equations alone" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "ガイダンスは数値予報の結果などを統計的に処理した予測資料で、気象庁は作成手法の一つにニューラルネットワークも挙げています。共同研究の「統合型ガイダンス」は、複数のモデルに基づくガイダンスをAIで組み合わせるものです。",
        en: "Guidance is forecast material produced by statistically processing numerical prediction output and other data, and JMA lists neural networks as one way to make it. The joint research's \"integrated guidance\" uses AI to combine guidance based on several models.",
      },
    },
    {
      kind: "single",
      prompt: {
        ja: "気象庁と理研AIPの共同研究で、台風の急発達の予測が難しいとされた理由は？",
        en: "Why did the JMA-RIKEN AIP joint research describe rapid typhoon intensification as hard to predict?",
      },
      choices: [
        {
          ja: "頻度の少ない現象で、従来の簡便な判別手法では精度に限界があるから",
          en: "It is a rare phenomenon, and simple conventional discrimination methods have limited accuracy",
        },
        { ja: "台風は衛星から見えないから", en: "Typhoons cannot be seen from satellites" },
        { ja: "台風の観測が法律で禁止されているから", en: "Observing typhoons is prohibited by law" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "急発達はまれな現象で、従来の線形判別手法では限界がありました。共同研究は衛星画像を使う深層学習のプロトタイプで、精度が改善する可能性を示しました。",
        en: "Rapid intensification is rare, and the conventional linear discrimination method had limits. The joint research showed, with a deep-learning prototype using satellite images, that accuracy could improve.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "2026年3月に気象庁が運用を始めた1kmの局地モデルは、物理の計算をAIに置き換えたものだ。",
        en: "The 1 km local model JMA began running in March 2026 replaces physics calculations with AI.",
      },
      answer: false,
      explanation: {
        ja: "局地モデルは数値予報モデルで、格子を2kmから1kmに細かくしたものです。開発には「富岳」などのスーパーコンピュータを使いました。AIは観測データの処理やガイダンスなどで、物理の計算に足す形で研究されています。",
        en: "The local model is a numerical prediction model whose grid was refined from 2 km to 1 km, developed with supercomputers such as Fugaku. AI is being researched as an addition to physics — in processing observations and in guidance, for example.",
      },
    },
  ],
  sources: [
    { label: "内閣府: 人工知能基本計画（2026年7月14日閣議決定）", url: "https://www8.cao.go.jp/cstp/ai/ai_plan/aiplan_20260714.pdf" },
    {
      label: "気象庁: 気象観測・予測へのAI技術の活用に向けた共同研究の成果について（2023-06-30）",
      url: "https://www.jma.go.jp/jma/press/2306/30b/20230630_ai.pdf",
    },
    { label: "気象庁: 予報用語 — 予報の基礎資料に関する用語", url: "https://www.jma.go.jp/jma/kishou/know/yougo_hp/shiryo.html" },
    {
      label: "気象庁: 線状降水帯の予測技術が進化します ～1kmの高解像度モデルと新しいアンサンブル予報の運用開始～（2026-03-13）",
      url: "https://www.jma.go.jp/jma/press/2603/13a/20260313_nwp.html",
    },
    {
      label: "気象庁: 線状降水帯予測精度向上ワーキンググループ（第10回）資料2（2025-06-20）",
      url: "https://www.jma.go.jp/jma/kishou/shingikai/kondankai/senjoukousuitai_WG/part10/part10-material2.pdf",
    },
  ],
  lastVerified: "2026-10-13",
  glossaryRefs: ["numerical-weather-prediction", "forecast-guidance", "ensemble-forecast"],
};
