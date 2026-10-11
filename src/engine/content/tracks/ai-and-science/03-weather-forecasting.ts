import type { Lesson } from "@/engine/content/types";

export const weatherForecasting: Lesson = {
  id: "ai-and-science-03",
  slug: "weather-forecasting",
  title: {
    ja: "天気予報とAI — 物理の計算と、過去の天気から学ぶモデル",
    en: "Weather Forecasting and AI: Physics Simulations and Models That Learn from Past Weather",
  },
  summary: {
    ja: "数値予報は物理法則を計算して先の大気を求める。機械学習のモデルは過去の天気を再現した再解析データから学び、短い時間で予報を出す。欧州中期予報センターが2025年に運用を始めたAIの予報は、物理のモデルと並べて使われている。",
    en: "Numerical weather prediction computes the future atmosphere from the laws of physics. Machine-learning models learn from reanalysis data that reconstructs past weather and produce forecasts in a fraction of the time. The AI forecasts the European Centre for Medium-Range Weather Forecasts made operational in 2025 run side by side with its physics model.",
  },
  body: {
    ja: `## 予報は「計算」から「学習」へ？

### 数値予報 — 物理法則をスーパーコンピュータで解く
これまでの天気予報の中心は、観測から今の大気の状態を推定し、物理法則を計算して先の状態を求める**数値予報**です。Google DeepMindは、欧州中期予報センター（ECMWF）の高解像度予報HRESのような従来の手法で10日先まで予報するには、数百台の計算機からなるスーパーコンピュータで何時間もの計算が要ると説明しています。

### GraphCast — 過去の天気から学ぶ
Google DeepMindは2023年11月14日、機械学習の天気予報モデルGraphCastをScience誌の論文で発表しました。
- ECMWFの**再解析データ**ERA5の約40年分で学習。再解析データは、衛星画像・レーダー・観測所などの過去の観測を、観測が足りないところは従来の数値予報で補って再構成した、地球全体の天気の記録です。
- 地球全体を緯度経度0.25度（赤道で約28km四方）の格子に分けて扱い、10日先までの予報を1台のTPU v4で1分かからずに出す。
- HRESと比べ、評価した1,380の変数と予報時間の組み合わせの90%以上で、より正確な予測だったとしています。熱帯低気圧の進路、洪水の危険と関係する大気の川、極端な気温の予測にも役立つとしています。

同社は、GraphCastと従来の手法は「手を携える」ものだと書いています。学習に使った再解析データそのものが、従来の数値予報で補って作られているからです。

### AIFS — 運用が始まったAIの予報
ECMWFは2025年2月25日、機械学習の予報システムAIFS（Artificial Intelligence Forecasting System）の運用を始めました。物理ベースの予報システムIFSと並べて動かしています。
- 熱帯低気圧の進路など多くの指標で最先端の物理ベースのモデルを上回り、改善は最大20%。予報1回あたりのエネルギー使用量はおよそ1,000分の1。
- 予報の出発点（初期値）はIFSと同じです。直前の短期予報と、衛星・航空機・船・ブイ・地上の観測所などから集めた約6,000万件の品質管理済みの観測を組み合わせて作り、6時間ごとにAIFSに入ります。AIFSは、過去の天気の変化から学んだモデルで、この初期値から先の天気を予測します。
- 格子の間隔は28km（IFSは9km）。最初の版は1つの予報を出す決定論的予報で、少しずつ条件を変えた50通りの予報を出す**アンサンブル予報**への拡張を進めるとしています。

ECMWFは、AIFSとIFSを補い合うものと位置づけ、データ駆動の予報と物理ベースの予報を組み合わせる研究も今後の課題に挙げています。

### ニュースを読むときの視点
- **何と比べたか**: 「従来より正確」は、どの予報と、どの変数・予報時間で比べたかで意味が変わります（[ベンチマークの読み方](/ja/learn/understanding-ai/reading-benchmarks)のレッスン参照）。
- **観測がなければ始まらない**: AIのモデルも、観測から作る初期値や、数値予報で補った再解析データの上に立っています。
- **研究の発表と、身近な予報は別**: 研究機関が発表したモデルが、すぐに手元の天気予報アプリで使われるとは限りません。どの予報が何に基づくかは、提供元の説明で確かめます。`,
    en: `## From computing the weather to learning it?

### Numerical weather prediction: solving physics on supercomputers
Weather forecasting has long centered on **numerical weather prediction**: estimate the current state of the atmosphere from observations, then compute its future state from the laws of physics. Google DeepMind explains that a 10-day forecast with a conventional approach, such as HRES, the high-resolution forecast of the European Centre for Medium-Range Weather Forecasts (ECMWF), can take hours of computation on a supercomputer with hundreds of machines.

### GraphCast: learning from past weather
On November 14, 2023, Google DeepMind introduced GraphCast, a machine-learning weather model, in a paper in Science.
- It was trained on about four decades of ECMWF's ERA5 **reanalysis** data — a reconstructed record of global historical weather, built from past observations such as satellite images, radar, and weather stations, with traditional numerical weather prediction filling in the blanks where observations are incomplete.
- It works on a global grid of 0.25 degrees of latitude and longitude (about 28 km by 28 km at the equator) and makes a 10-day forecast in under a minute on a single TPU v4 machine.
- Against HRES, it gave more accurate predictions on more than 90% of the 1,380 combinations of test variables and forecast lead times it was evaluated on. The company says it also helps with tropical cyclone tracks, atmospheric rivers associated with flood risk, and extreme temperatures.

The company writes that GraphCast and traditional approaches "go hand-in-hand": the reanalysis data it learned from was itself built with traditional numerical weather prediction filling the gaps.

### AIFS: an AI forecast in operation
On February 25, 2025, ECMWF took its machine-learning forecasting system, AIFS (Artificial Intelligence Forecasting System), into operations, running side by side with its physics-based Integrated Forecasting System (IFS).
- It outperforms state-of-the-art physics-based models on many measures, including tropical cyclone tracks, with gains of up to 20%, and uses roughly 1,000 times less energy to make a forecast.
- It starts from the same initial conditions as the IFS: a combination of the previous short-range forecast with around 60 million quality-controlled observations from satellites, planes, boats, buoys, ground stations, and more, fed in every six hours. AIFS, trained on how the weather has evolved in the past, predicts what follows from those initial conditions.
- Its grid spacing is currently 28 km (the IFS uses 9 km). The first operational version produces a single (deterministic) forecast; ECMWF is extending it to an **ensemble** of 50 forecasts with slight variations.

ECMWF describes the AIFS and the IFS as complementary and lists hybrids of data-driven and physics-based forecasting as an area of research for the coming years.

### What to look for in the news
- **Compared with what?** "More accurate than before" means different things depending on which forecast it was compared with, on which variables and lead times (see [how to read AI benchmarks](/en/learn/understanding-ai/reading-benchmarks)).
- **No observations, no forecast**: AI models still stand on initial conditions built from observations, and on reanalysis data filled in by numerical weather prediction.
- **A research model is not your weather app**: a model announced by a research center is not necessarily what your local forecast uses. Check the provider's own explanation of what its forecast is based on.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "ECMWFが2025年に運用を始めたAIFSについて、ECMWFの説明に合うものはどれ？",
        en: "Which statement about AIFS, made operational by ECMWF in 2025, matches ECMWF's description?",
      },
      choices: [
        {
          ja: "物理ベースのIFSと同じ初期値から予報し、IFSと並べて運用されている",
          en: "It forecasts from the same initial conditions as the physics-based IFS and runs side by side with it",
        },
        { ja: "観測データを使わずに予報できる", en: "It can forecast without any observation data" },
        { ja: "IFSの運用を終えて、完全に置き換えた", en: "It replaced the IFS, which was shut down" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "AIFSは、直前の短期予報と約6,000万件の観測を組み合わせたIFSと同じ初期値を使い、IFSと並べて運用されています。ECMWFは両者を補い合うものと位置づけています。",
        en: "AIFS uses the same initial conditions as the IFS — built from the previous short-range forecast and around 60 million observations — and runs alongside it. ECMWF describes the two as complementary.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "GraphCastは、物理の計算をまったく経ていないデータだけで学習している。",
        en: "GraphCast was trained only on data that involved no physics-based computation at all.",
      },
      answer: false,
      explanation: {
        ja: "GraphCastが学習したERA5の再解析データは、過去の観測を、足りないところは従来の数値予報で補って再構成したものです。Google DeepMindも、GraphCastと従来の手法は手を携えるものだと書いています。",
        en: "GraphCast learned from ERA5 reanalysis data, which reconstructs past weather from observations with traditional numerical weather prediction filling the gaps. Google DeepMind itself says the two approaches go hand-in-hand.",
      },
    },
  ],
  sources: [
    {
      label: "Google DeepMind: GraphCast — AI model for faster and more accurate global weather forecasting（2023-11-14）",
      url: "https://deepmind.google/blog/graphcast-ai-model-for-faster-and-more-accurate-global-weather-forecasting/",
    },
    {
      label: "Lam et al.: GraphCast — Learning skillful medium-range global weather forecasting（arXiv 2212.12794、Science 掲載論文のプレプリント）",
      url: "https://arxiv.org/abs/2212.12794",
    },
    {
      label: "ECMWF: ECMWF's AI forecasts become operational（2025-02-25）",
      url: "https://www.ecmwf.int/en/about/media-centre/news/2025/ecmwfs-ai-forecasts-become-operational",
    },
  ],
  lastVerified: "2026-10-11",
  glossaryRefs: ["numerical-weather-prediction", "reanalysis", "ensemble-forecast", "benchmark", "machine-learning"],
};
