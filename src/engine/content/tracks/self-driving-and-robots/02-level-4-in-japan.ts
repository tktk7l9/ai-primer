import type { Lesson } from "@/engine/content/types";

export const level4InJapan: Lesson = {
  id: "self-driving-and-robots-02",
  slug: "level-4-in-japan",
  title: {
    ja: "日本のレベル4 — 運転者のいない車が走り始めた場所",
    en: "Level 4 in Japan: Where Cars Without Drivers Started Running",
  },
  summary: {
    ja: "2023年4月の改正道路交通法で、運転者のいない「特定自動運行」が許可制で認められた。全国初の福井県永平寺町のサービスは、約2kmの道を時速12kmで走るものだった。許可の仕組みと、遠隔で見守る特定自動運行主任者の役割。",
    en: "The amended Road Traffic Act of April 2023 allowed driverless \"specified automated operation\" under a permit system. Japan's first such service, in Eiheiji, Fukui, ran about 2 km at 12 km/h. How the permits work, and the role of the operation supervisor who watches remotely.",
  },
  body: {
    ja: `## 「運転」ではない運行

[自動運転のレベル](/ja/learn/self-driving-and-robots/driving-automation-levels)のレッスンで見たように、レベル4では、自動運転を続けられなくなったときに人に引き継がず、システムが安全に止まります。国土交通省は、レベル3とレベル4の保安基準の違いを次のように説明しています。
- **レベル3**: 自動運行が困難な状況（故障や天候の急変など）では、運転者に運転の引き継ぎの警報を出す。→ 警報に応じる運転者が必要。
- **レベル4**: 自動運行が困難な状況では、安全に停止する。→ 運転者を必要としない。

### 特定自動運行の許可制度
2022年4月に成立した改正道路交通法（2023年4月1日施行）は、レベル4に相当する、運転者がいない状態での自動運転を**特定自動運行**と定め、「運転」の定義から外しました。警察庁の白書によると、
- 特定自動運行をしようとする人は、経路や交通事故が起きたときの対応方法などを書いた特定自動運行計画を出して、その場所を管轄する都道府県公安委員会の許可を受ける。公安委員会は、許可の前に市町村長などの意見を聴く。
- 許可を受けた人は、車内か、遠隔監視をする車外の決められた場所に**特定自動運行主任者**を置き、計画どおりに運行する。主任者は、交通事故があったときに必要な措置をとる。
- 制度は、限られた地域で遠隔監視だけで走る無人の移動サービスを念頭に置いたものです。

### 全国初 — 福井県永平寺町
- **2023年3月30日**: 国土交通省中部運輸局が、産業技術総合研究所が改造した車両を、道路運送車両法に基づく、全国初の運転者を必要としない自動運転車（レベル4）として認可。
- **2023年5月2日**: 運行を委託されたまちづくり株式会社ZENコネクトのサービスを、道路運送法に基づき、運転者を置かないレベル4の自家用有償旅客運送として全国で初めて登録。
- **2023年5月11日**: 同社が福井県公安委員会から、道路交通法に基づく全国初の許可を取得。
- **2023年5月21日**: サービス開始。

走ったのは「永平寺参ろーど」のうち約2kmで、ヤマハ製の電動カートに自動運転機能を加えた車が、道路に敷いた電磁誘導線をたどって時速12kmで進みます。土日祝日の10時から15時の定時運行で、料金は大人1回100円でした。最初のレベル4は、場所・速度・経路をごく限った条件の中で始まったのです。

### その後
警察庁の白書によると、特定自動運行の許可は2024年末時点で全国で6件です。国土交通省の報告書（2025年4月）は、永平寺町以降、レベル4の自動運転バスの社会実装が着実に進んでおり、今後はレベル4の自動運転タクシーの実装も見込まれるとしています。海外では、運転者のいないタクシーがすでに大規模に走っています。次の[海外のロボタクシー](/ja/learn/self-driving-and-robots/robotaxis-abroad)のレッスンで見ます。`,
    en: `## Operation that isn't "driving"

As the lesson on [the levels of driving automation](/en/learn/self-driving-and-robots/driving-automation-levels) explained, at Level 4 the system stops safely by itself instead of handing over to a person when it can no longer continue. MLIT explains the difference between the Level 3 and Level 4 safety standards like this:
- **Level 3**: when automated operation becomes difficult (a fault, a sudden change in the weather, and so on), it warns the driver to take over. → A driver who can respond to the warning is required.
- **Level 4**: when automated operation becomes difficult, it stops safely. → No driver is required.

### The permit system for specified automated operation
The amended Road Traffic Act, passed in April 2022 and in force from April 1, 2023, defines driverless automated driving equivalent to Level 4 as **specified automated operation** and removes it from the legal definition of "driving." According to the National Police Agency's white paper:
- Anyone who wants to carry out specified automated operation submits a plan — including the route and how traffic accidents will be handled — and must obtain a permit from the prefectural public safety commission with jurisdiction over the area. Before granting it, the commission hears the views of the mayor and others.
- The permit holder must station an **operation supervisor** (tokutei jidō unkō shuninsha) either in the vehicle or at a designated remote-monitoring location, and operate according to the plan. The supervisor takes the necessary measures if a traffic accident occurs.
- The system was designed with driverless transport services monitored only remotely in limited areas in mind.

### Japan's first: Eiheiji, Fukui
- **March 30, 2023**: MLIT's Chubu District Transport Bureau certified a vehicle modified by the National Institute of Advanced Industrial Science and Technology (AIST) as Japan's first automated vehicle not requiring a driver (Level 4), under the Road Transport Vehicle Act.
- **May 2, 2023**: the service run by Machizukuri Co., Ltd. ZEN Connect, which was commissioned to operate it, became the first Level 4 private paid passenger transport without a driver registered under the Road Transportation Act.
- **May 11, 2023**: the company received Japan's first permit under the Road Traffic Act from the Fukui Prefectural Public Safety Commission.
- **May 21, 2023**: the service began.

It ran along about 2 km of the "Eiheiji Mairo-do" path: a Yamaha electric cart fitted with automated driving functions, following an electromagnetic guide wire laid in the road at 12 km/h. It operated on a fixed schedule from 10:00 to 15:00 on weekends and holidays, for 100 yen per adult ride. Japan's first Level 4 began within tightly limited conditions of place, speed, and route.

### Since then
According to the NPA white paper, six permits for specified automated operation had been granted nationwide as of the end of 2024. An MLIT report (April 2025) says Level 4 automated buses have been steadily put into service since Eiheiji, and Level 4 automated taxis are expected next. Abroad, driverless taxis already run at large scale — the subject of the next lesson, [robotaxis abroad](/en/learn/self-driving-and-robots/robotaxis-abroad).`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "日本で運転者のいない特定自動運行（レベル4相当）を行うために必要なことはどれ？",
        en: "What is required to carry out driverless specified automated operation (equivalent to Level 4) in Japan?",
      },
      choices: [
        {
          ja: "特定自動運行計画を出して都道府県公安委員会の許可を受け、車内か遠隔監視の場所に特定自動運行主任者を置く",
          en: "Submit a plan, obtain a permit from the prefectural public safety commission, and station an operation supervisor in the vehicle or at a remote-monitoring location",
        },
        { ja: "レベル4の車を買えば、届け出なしにどこでも走らせてよい", en: "Buy a Level 4 vehicle and run it anywhere without notifying anyone" },
        { ja: "運転免許を持つ人が運転席に座っていれば、許可は要らない", en: "No permit is needed as long as a licensed driver sits in the driver's seat" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "2023年4月施行の改正道路交通法により、特定自動運行には都道府県公安委員会の許可が要り、許可を受けた人は特定自動運行主任者を置いて計画どおりに運行する義務を負います。",
        en: "Under the amended Road Traffic Act in force from April 2023, specified automated operation requires a permit from the prefectural public safety commission, and the permit holder must station an operation supervisor and operate according to the plan.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "全国初のレベル4のサービス（福井県永平寺町）は、一般の道路を自由に走り回れる車で始まった。",
        en: "Japan's first Level 4 service (Eiheiji, Fukui) began with a vehicle that could roam freely on ordinary roads.",
      },
      answer: false,
      explanation: {
        ja: "約2kmの決まった区間を、道路に敷いた電磁誘導線をたどって時速12kmで走るもので、場所・速度・経路をごく限った条件の中で始まりました。",
        en: "It followed an electromagnetic guide wire laid in the road along a fixed 2 km route at 12 km/h — Level 4 began under tightly limited conditions of place, speed, and route.",
      },
    },
  ],
  sources: [
    { label: "国土交通省: 国内初！運転者を必要としない自動運転車（レベル４）の認可について（2023年3月31日）", url: "https://www.mlit.go.jp/report/press/jidosha07_hh_000442.html" },
    { label: "国土交通省: 国内初！運転者を配置しないレベル４での自動運転移動サービスの開始について（2023年5月12日）", url: "https://www.mlit.go.jp/report/press/jidosha07_hh_000448.html" },
    { label: "警察庁: 令和7年版 警察白書 — ITSの推進と自動運転の実現に向けた取組", url: "https://www.npa.go.jp/hakusyo/r07/honbun/html/bb5545000.html" },
    { label: "警察庁: 道路交通法の一部を改正する法律（概要・2022年）", url: "https://www.npa.go.jp/laws/kaisei/houritsu/20220427/01_gaiyou.pdf" },
    {
      label: "国土交通省: ロボットタクシー導入等に向けた自動運転における自賠法上の損害賠償責任に関する検討会 報告書（2025年4月30日）",
      url: "https://www.mlit.go.jp/jidosha/content/001888339.pdf",
    },
  ],
  lastVerified: "2026-10-13",
  glossaryRefs: ["specified-automated-operation", "driving-automation-levels", "operating-conditions-limited-domain"],
};
