import type { Lesson } from "@/engine/content/types";

export const drivingAutomationLevels: Lesson = {
  id: "self-driving-and-robots-01",
  slug: "driving-automation-levels",
  title: {
    ja: "自動運転の「レベル」 — 運転の主体がシステムに移るのはどこから",
    en: "The Levels of Driving Automation: Where the System Takes Over the Driving",
  },
  summary: {
    ja: "レベル2までは運転支援で、運転するのは人。レベル3は条件の範囲内でシステムが運転するが、求められたら人が引き継ぐ。日本でレベル3の車が世界で初めて認められた経緯と、名前の付け方に込められた「過信しない」という狙い。",
    en: "Up to Level 2 is driver assistance, and the person drives. At Level 3 the system drives within set conditions, but the person must take over when asked. How Japan approved the world's first Level 3 car, and why the official names are designed to discourage overconfidence.",
  },
  body: {
    ja: `## 「自動運転」と一口に言っても

ニュースで「自動運転」と呼ばれるものには、前の車に付いて走る機能から、運転者のいない車まで、大きな幅があります。日本の制度は、自動車技術者の団体SAE International（Society of Automotive Engineers）が定めた基準J3016の「運転自動化レベル」を使って整理されています。

### レベルの全体像
国土交通省の報告書（2025年4月）がまとめた、レベルごとの状態です。
- **レベル1**: アクセル・ブレーキの操作か、ハンドル操作のどちらかが、部分的に自動化された状態。
- **レベル2**: アクセル・ブレーキの操作とハンドル操作の両方が、部分的に自動化された状態。
- **レベル3**: 特定の走行環境条件を満たす限定された領域で、自動運行装置が運転操作の全部を代わりに行う状態。ただし作動中に運転操作を促されたら、適切に応じなければならない。
- **レベル4**: 特定の走行環境条件を満たす限定された領域で、自動運行装置が運転操作の全部を代わりに行う状態。
- **レベル5**: 自動運行装置が運転操作の全部を代わりに行う状態（条件の限定がない）。

国土交通省の資料は、レベル2までを「ドライバーによる監視」、レベル3からを「システムによる監視」と分けています。走行環境条件（特定の条件）とは、高速道路だけ、晴れの日だけ、一定の速度までといった、自動運転ができる場所・天候・速度などの条件で、システムの性能によって違います。

### レベル3とレベル4の違い — 引き継ぐ人がいるか
警察庁の白書は、J3016の定義に沿って、レベル3を「システムの作動継続が困難な場合は、システムの介入要求などに対して運転者の適切な応答が期待されるもの」、レベル4を「作動継続が困難な場合への応答もシステムが行い、運転者が介入要求に応答することは期待されないもの」と説明しています。レベル3では、条件を外れそうになると運転者に交代を求めるので、運転者はいつでも運転できる状態でいる必要があります。

### 日本で認められたレベル3
- 2019年の道路運送車両法と道路交通法の改正により、2020年4月からレベル3の自動運転車が公道を走れるようになりました。道路交通法の改正には、自動運行装置を使う運転者の義務や、作動状態を記録する装置の記録に関する規定が含まれます。
- 国土交通省は2020年11月11日、本田技研工業のレジェンドに、自動運行装置を備えた車として**世界で初めて**型式指定を行いました。装置の名前は「Traffic Jam Pilot」で、高速道路の渋滞時に、前の車に付いて車線内を走る運転を運転者に代わって行います。国土交通大臣が付けた走行環境条件の範囲内でだけ作動し、条件を外れそうなときや故障のときは警報を出して運転者に運転を求めるので、運転者は過信せず、いつでも運転できる状態を保つ必要がある、と国土交通省は書いています。

### 名前で「過信」を防ぐ
国土交通省は、利用者が機能の限界を正しく理解し、過信しないことを目的に、レベルごとの車の呼び方を決めています。レベル1・2は**運転支援車**（2018年度に策定）、レベル3は**条件付自動運転車（限定領域）**、レベル4は**自動運転車（限定領域）**、レベル5は**完全自動運転車**です（2020年12月11日に公表）。

警察庁も、衝突被害軽減ブレーキや車間距離を保つ機能などの性能を過信・誤用した事故が国内外で起きているとして、運転支援機能では運転操作の主体はあくまで運転者で、自動運転機能とは異なると注意を呼びかけています。

日本で運転者のいないレベル4がどう始まったかは、次の[日本のレベル4](/ja/learn/self-driving-and-robots/level-4-in-japan)のレッスンで扱います。`,
    en: `## "Self-driving" covers a lot of ground

What the news calls "self-driving" ranges from a feature that follows the car ahead to a car with no driver at all. Japan's rules are organized around the "levels of driving automation" in J3016, a standard from SAE International (the Society of Automotive Engineers).

### The levels at a glance
How a Ministry of Land, Infrastructure, Transport and Tourism (MLIT) report from April 2025 summarizes each level:
- **Level 1**: either acceleration and braking or steering is partly automated.
- **Level 2**: both acceleration and braking and steering are partly automated.
- **Level 3**: within a limited domain that meets specific operating conditions, the automated driving system takes over all of the driving — but when prompted while it is operating, the person must respond appropriately.
- **Level 4**: within a limited domain that meets specific operating conditions, the automated driving system takes over all of the driving.
- **Level 5**: the automated driving system takes over all of the driving (with no such limitation).

MLIT's materials label Levels 1–2 "monitoring by the driver" and Level 3 and up "monitoring by the system." Operating conditions are the circumstances under which automated driving is possible — for example, expressways only, fine weather only, or up to a certain speed — and they differ with each system's capability.

### Level 3 versus Level 4: is there someone to take over?
Following J3016, Japan's National Police Agency (NPA) white paper describes Level 3 as automation where, when the system can no longer continue, the driver is expected to respond appropriately to the system's request to intervene; at Level 4 the system also handles that situation, and the driver is not expected to respond to such requests. At Level 3 the system asks the driver to take back control when it is about to leave its conditions, so the driver must always be ready to drive.

### Japan's approval of Level 3
- Amendments to the Road Transport Vehicle Act and the Road Traffic Act in 2019 allowed Level 3 vehicles on public roads from April 2020. The Road Traffic Act amendment includes the duties of drivers who use an automated driving system and rules on the records kept by a device that logs its operating status.
- On November 11, 2020, MLIT granted Honda's Legend the **world's first** type designation for a vehicle equipped with an automated driving system. The system, called Traffic Jam Pilot, drives in place of the driver in expressway traffic jams, staying in its lane and following the car ahead. MLIT notes that it works only within operating conditions set by the minister and that, when those conditions are about to stop being met or a fault occurs, it sounds a warning and asks the driver to take over — so the driver must not overtrust it and must stay ready to drive at all times.

### Names that discourage overconfidence
To help users correctly understand the limits of these features and not overtrust them, MLIT set official names for vehicles at each level: Levels 1 and 2 are **driver-assistance vehicles** (set in fiscal 2018), Level 3 **conditionally automated vehicles (limited domain)**, Level 4 **automated vehicles (limited domain)**, and Level 5 **fully automated vehicles** (published December 11, 2020).

The NPA likewise warns that accidents have occurred in Japan and abroad when drivers overtrusted or misused features such as automatic emergency braking and adaptive cruise control, and that with driver-assistance features the driver remains the one operating the vehicle — they are not automated driving.

How driverless Level 4 began in Japan is covered in the next lesson, [Level 4 in Japan](/en/learn/self-driving-and-robots/level-4-in-japan).`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "レベル3の自動運転車で、システムが運転中に交代を求めてきた。運転者に求められることはどれ？",
        en: "You are in a Level 3 vehicle and the system asks you to take over while driving. What is required of you?",
      },
      choices: [
        {
          ja: "求めに応じて、すぐに確実に運転を引き継ぐ",
          en: "Respond to the request and take over the driving promptly and reliably",
        },
        { ja: "レベル3なので、そのままシステムに任せてよい", en: "Nothing — at Level 3 you can leave everything to the system" },
        { ja: "車が自動で止まるのを待つ", en: "Wait for the car to stop by itself" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "レベル3では、走行環境条件を満たさなくなるときなどに、運転者が自動運行装置から運転操作を直ちに確実に引き継ぐことが求められます（警察庁）。交代を求めずにシステムが安全に止まるのはレベル4です。",
        en: "At Level 3, when the operating conditions stop being met, the driver must take over from the automated driving system promptly and reliably (NPA). Stopping safely on its own, without asking a driver, is what Level 4 does.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "国土交通省の呼び方で「運転支援車」とされるレベル1・2の車では、運転の主体はシステムになる。",
        en: "In the Level 1–2 vehicles MLIT calls \"driver-assistance vehicles,\" the system becomes the one driving.",
      },
      answer: false,
      explanation: {
        ja: "運転支援機能では、運転操作の主体はあくまで運転者で、絶えず前方や周囲を確認して安全運転をすることが前提です。警察庁は、性能を過信・誤用した事故が国内外で起きていると注意を呼びかけています。",
        en: "With driver-assistance features, the driver remains the one operating the vehicle and must keep checking ahead and around at all times. The NPA warns that accidents caused by overtrusting or misusing these features have occurred in Japan and abroad.",
      },
    },
  ],
  sources: [
    {
      label: "国土交通省: ロボットタクシー導入等に向けた自動運転における自賠法上の損害賠償責任に関する検討会 報告書（2025年4月30日）",
      url: "https://www.mlit.go.jp/jidosha/content/001888339.pdf",
    },
    {
      label: "国土交通省: 自動運転車の定義及び政府目標（2020年11月11日の報道発表 別紙１）",
      url: "https://www.mlit.go.jp/report/press/content/001371533.pdf",
    },
    { label: "警察庁: 令和7年版 警察白書 — ITSの推進と自動運転の実現に向けた取組", url: "https://www.npa.go.jp/hakusyo/r07/honbun/html/bb5545000.html" },
    { label: "警察庁: 自動運転", url: "https://www.npa.go.jp/bureau/traffic/selfdriving/index.html" },
    { label: "国土交通省: 世界初！ 自動運転車（レベル３）の型式指定を行いました（2020年11月11日）", url: "https://www.mlit.go.jp/report/press/jidosha08_hh_003888.html" },
    {
      label: "国土交通省: 主要なASV技術の概要及び自動運転関連用語の概説を公表 〜自動運転レベル３以降の車両の呼称も策定〜（2020年12月11日）",
      url: "https://www.mlit.go.jp/report/press/jidosha07_hh_000353.html",
    },
  ],
  lastVerified: "2026-10-13",
  glossaryRefs: ["driving-automation-levels", "operating-conditions-limited-domain", "driver-assistance-vehicle"],
};
