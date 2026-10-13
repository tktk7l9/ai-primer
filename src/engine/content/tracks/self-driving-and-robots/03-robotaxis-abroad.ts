import type { Lesson } from "@/engine/content/types";

export const robotaxisAbroad: Lesson = {
  id: "self-driving-and-robots-03",
  slug: "robotaxis-abroad",
  title: {
    ja: "海外のロボタクシー — 広がる運行と、止まった事例、安全の数字の読み方",
    en: "Robotaxis Abroad: Expanding Service, a Service That Was Stopped, and How to Read Safety Numbers",
  },
  summary: {
    ja: "米国では運転者のいないタクシーが数億マイルを走った。開発元は人間の運転より事故が少ないと発表する一方、州が運行許可を止めた例もある。地図・センサー・AIで走るしくみと、安全の比較の数字を読むときの確認点。",
    en: "In the US, taxis with no driver have covered hundreds of millions of miles. A developer reports fewer crashes than human drivers, while a state has also suspended a company's permits. How these cars use maps, sensors, and AI, and what to check when reading safety comparisons.",
  },
  body: {
    ja: `## 運転者のいないタクシー

国土交通省の報告書（2025年4月）は、米国や中国の一部地域では、レベル4の自動運転車を使ったタクシーサービスがすでに始まっているとしています。ここでは、公開されている資料が多い米国の例を見ます。

### 地図・センサー・AIで走る
Waymoは、自社の運転システム（Waymo Driver）を次のように説明しています（2026年10月時点の公式サイト）。
- 新しい地域で走る前に、車線、一時停止の標識、縁石、横断歩道まで細かく地図にする。GPSのような外部のデータだけに頼らず、この地図と、リアルタイムのセンサーのデータ、AIを組み合わせて、自分の位置を常に割り出す。
- センサーのデータをAIで読み解き、歩行者・自転車・車・工事などを見分ける。信号の色や臨時の一時停止の標識にも対応する。
- 実際の道路での2億マイル超、シミュレーションでの200億マイル超の経験とAIを使って、周りの人や車の動きを予測し、AIで最も安全な進み方を計画する。

### 公表されている走行距離と、開発元による比較
Waymoの安全のデータのページによると、運転者のいない「乗客だけ」の走行は2026年6月までに2億7,130万マイルで、フェニックス、サンフランシスコのベイエリア、ロサンゼルス、オースティン、アトランタで走っています。同社は、同じ都市を同じ距離だけ人間が運転した場合の平均と比べ、どちらの過失かにかかわらず、
- 重傷以上の事故が95%少ない、
- けがを伴う事故が82%少ない、
- けがを伴う歩行者との事故が93%少ない、
と発表しています。同社の研究では、人間の基準を、州の走行距離と警察に届けられた事故のデータから作り、車の種類・道路の種類・地域をWaymoが走った条件にそろえたと説明しています。

### 止まった事例 — Cruise
すべてが順調だったわけではありません。カリフォルニア州車両管理局（DMV）は2023年10月24日、General Motors（GM）傘下のCruiseの、無人での運行（デプロイメント）と無人の試験走行の許可を、即日停止しました。理由として、車の性能から公道での運行が安全でないと判断したこと、自動運転技術の安全に関する情報を偽ったことなどを挙げています（安全運転者が乗る試験走行の許可は対象外）。GMは2024年12月10日、事業を拡大するのに必要な時間と資源の大きさや、競争の激しさを理由に、Cruiseのロボタクシー開発への資金提供をやめ、個人向けの車の自動運転・運転支援の開発に集中すると発表しました。

### 安全の数字を読むときの確認点
- **誰の分析か**: 上の比較は、開発元自身の分析です。方法を公開しているかを確かめ、第三者の検証があるかにも注目します。
- **何と比べたか**: 人間の基準を、どの地域・道路・車種にそろえたか。比べる相手の作り方で、差の大きさは変わります（[ベンチマークの読み方](/ja/learn/understanding-ai/reading-benchmarks)のレッスン参照）。
- **どこで走った数字か**: 走っているのは限られた都市で、そこでの条件（走行環境条件）の中の結果です。ほかの場所や天候にそのまま当てはまるとは限りません。
- **止まった例も合わせて見る**: 許可の停止のような行政の判断は、開発元の発表とは別の情報源です。

事故が起きたとき誰が責任を負うのか、原因をどう調べるのかは、このトラックの最後の[事故の責任と原因の調べ方](/ja/learn/self-driving-and-robots/accidents-and-responsibility)のレッスンで扱います。`,
    en: `## Taxis without drivers

An MLIT report (April 2025) notes that taxi services using Level 4 automated vehicles have already started in parts of the US and China. This lesson looks at the US, where much of the information is public.

### Driving with maps, sensors, and AI
Here is how Waymo describes its driving system, the Waymo Driver (on its official site, as of October 2026):
- Before operating in a new area, it maps the territory in detail, down to lane markers, stop signs, curbs, and crosswalks. Rather than relying only on external data such as GPS, it combines these maps with real-time sensor data and AI to determine its exact location at all times.
- It uses AI to interpret its sensor data, telling pedestrians, cyclists, vehicles, construction, and more apart, and it responds to traffic-light colors and temporary stop signs.
- Drawing on more than 200 million miles of real-world driving and more than 20 billion miles in simulation, it uses AI to predict what other road users might do, and AI to plan the safest action.

### Published mileage, and the developer's own comparison
According to Waymo's safety data page, its "rider-only" driving — with no human driver — reached 271.3 million miles through June 2026, across Phoenix, the San Francisco Bay Area, Los Angeles, Austin, and Atlanta. Compared with average human drivers covering the same distance in the same cities, and regardless of who was at fault, the company reports:
- 95% fewer crashes with serious injuries or worse,
- 82% fewer injury-causing crashes,
- 93% fewer pedestrian crashes with injuries.
In its research, the company explains that the human benchmarks were built from state vehicle-miles-traveled and police-reported crash data, aligned to the vehicle types, road types, and locations where the Waymo Driver operated.

### A service that was stopped: Cruise
Not everything went smoothly. On October 24, 2023, the California Department of Motor Vehicles (DMV) suspended, effective immediately, the deployment and driverless testing permits of Cruise, a General Motors (GM) company. Its reasons included a determination, based on the vehicles' performance, that they were not safe for public operation, and that the company had misrepresented information related to the safety of its autonomous technology (its permit for testing with a safety driver was not affected). On December 10, 2024, GM announced it would no longer fund Cruise's robotaxi development, citing the considerable time and resources needed to scale the business and an increasingly competitive market, and would focus on automated and assisted driving for personal vehicles.

### What to check when reading safety numbers
- **Whose analysis is it?** The comparison above is the developer's own. Check whether the method is published, and watch for independent verification.
- **Compared with what?** How was the human benchmark aligned by area, road, and vehicle type? How the comparison group is built changes the size of the difference (see [how to read AI benchmarks](/en/learn/understanding-ai/reading-benchmarks)).
- **Where were the miles driven?** Service runs in a limited set of cities, and the results hold within those operating conditions; they don't automatically carry over to other places or weather.
- **Look at the setbacks too**: regulatory decisions such as permit suspensions are a source of information separate from the developer's announcements.

Who is responsible when something goes wrong, and how causes are investigated, is the subject of the last lesson in this track, [accidents and responsibility](/en/learn/self-driving-and-robots/accidents-and-responsibility).`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "開発元が「人間の運転より重傷事故が95%少ない」と発表した。この数字を読むときに、まず確かめたいことはどれ？",
        en: "A developer announces \"95% fewer serious-injury crashes than human drivers.\" What should you check first when reading this number?",
      },
      choices: [
        {
          ja: "誰が分析し、人間の基準をどの地域・道路・車種にそろえて比べたか",
          en: "Who did the analysis, and how the human benchmark was aligned by area, road, and vehicle type",
        },
        { ja: "数字が大きいので、どの国のどの道でも同じだと考えてよい", en: "Nothing — a number that large must hold on any road in any country" },
        { ja: "発表した会社の株価", en: "The company's share price" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "Waymoの比較は開発元自身の分析で、人間の基準を同社が走った条件にそろえて作ったと説明しています。比べる相手の作り方と、限られた都市での結果であることを確かめて読みます。",
        en: "Waymo's comparison is the developer's own analysis, with human benchmarks it says were aligned to the conditions where it operated. Check how the comparison group was built, and that the results come from a limited set of cities.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "カリフォルニア州車両管理局は2023年10月、Cruiseの無人での運行と無人の試験走行の許可を停止した。",
        en: "In October 2023, the California DMV suspended Cruise's permits for driverless deployment and driverless testing.",
      },
      answer: true,
      explanation: {
        ja: "2023年10月24日に即日停止しました。理由として、車の性能から公道での運行が安全でないと判断したことや、安全に関する情報を偽ったことなどを挙げています。安全運転者が乗る試験走行の許可は対象外でした。",
        en: "The DMV suspended them, effective immediately, on October 24, 2023, citing among other reasons that the vehicles were not safe for public operation based on their performance and that the company had misrepresented safety information. The permit for testing with a safety driver was not affected.",
      },
    },
  ],
  sources: [
    { label: "Waymo: The Waymo Driver（How it works）", url: "https://waymo.com/waymo-driver/" },
    { label: "Waymo: Safety Impact（rider-only miles through June 2026）", url: "https://waymo.com/safety/impact/" },
    {
      label: "Waymo Research: Comparison of Waymo Rider-Only Crash Rates by Crash Type to Human Benchmarks at 56.7 Million Miles",
      url: "https://waymo.com/research/comparison-of-waymo-rider-only-crash-rates-by-crash-type-to-human-benchmarks/",
    },
    { label: "California DMV: DMV Statement on Cruise LLC Suspension（2023-10-24）", url: "https://www.dmv.ca.gov/portal/news-and-media/dmv-statement-on-cruise-llc-suspension/" },
    {
      label: "GM: GM to refocus autonomous driving development on personal vehicles（2024-12-10）",
      url: "https://news.gm.com/home.detail.html/Pages/news/us/en/2024/dec/1210-gm.html",
    },
    {
      label: "国土交通省: ロボットタクシー導入等に向けた自動運転における自賠法上の損害賠償責任に関する検討会 報告書（2025年4月30日）",
      url: "https://www.mlit.go.jp/jidosha/content/001888339.pdf",
    },
  ],
  lastVerified: "2026-10-13",
  glossaryRefs: ["robotaxi", "driving-automation-levels", "benchmark"],
};
