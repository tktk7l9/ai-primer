import type { Lesson } from "@/engine/content/types";

export const accidentsAndResponsibility: Lesson = {
  id: "self-driving-and-robots-06",
  slug: "accidents-and-responsibility",
  title: {
    ja: "事故の責任と原因の調べ方 — 自動運転のルールづくり",
    en: "Accidents, Responsibility, and Finding the Cause: Making the Rules for Automated Driving",
  },
  summary: {
    ja: "日本では、被害者を早く救うため、自動運転でも車を運行させる側が損害賠償の責任を負う仕組みを当面保ち、保険会社がメーカーに求償できるよう、車の記録を共有する仕組みづくりが進む。責任の追及と切り離した事故の原因究明と、英国の2024年の自動運転法も紹介する。",
    en: "To compensate victims quickly, Japan keeps — for now — the rule that whoever operates a vehicle bears liability even with automated driving, while building ways to share vehicle data so insurers can seek recourse from manufacturers. Also: investigating causes separately from assigning blame, and the UK's 2024 Automated Vehicles Act.",
  },
  body: {
    ja: `## 事故が起きたら、誰が責任を負うのか

> **ご注意**: このレッスンは制度の一般的な紹介で、法的助言ではありません。具体的な事案は弁護士などの専門家に相談してください。

### 被害者の救済 — 自賠法の「運行供用者責任」
日本の自動車事故の損害賠償では、自動車損害賠償保障法（自賠法）が、「自己のために自動車を運行の用に供する者」（**運行供用者**）に責任を負わせています。自動運転が広がるとどう変わるのでしょうか。
- 国土交通省の研究会は2018年に、レベル0〜4の車が混在する当面の「過渡期」には、自動運転でも車の所有者や運送事業者などに運行の支配と利益を認められること、被害者を早く救うには運行供用者に責任を負わせる今の制度が有効なことなどから、**従来の運行供用者責任を保ちつつ**、保険会社などが自動車メーカーなどに求償する権利を実際に使えるための仕組みを検討するのが適当だと整理しました。
- 2025年4月30日の報告書は、ロボットタクシーのようなレベル4の旅客運送のビジネスモデルについて、この整理を前提に検討しています。2025年4月時点で、レベル3では事故原因の究明のために、自動車メーカーが自動運転車に記録されたデータを保険会社に提供する仕組みづくりが進んでおり、今後はレベル4以上でも同じような協力体制が求められるとしています。

### 責任の追及と切り離した原因究明
事故から学ぶには、誰が悪いかを決めることとは別に、なぜ起きたかを調べる仕組みが要ります。
- 警察庁と国土交通省は、公益財団法人交通事故総合分析センターの中に**自動運転車事故調査委員会**を設け、自動運転車の事故の原因を調べて、同種の事故の再発防止や技術の発展に役立てています。
- 国土交通省の報告書によると、2024年10月から、責任追及から切り離した事故原因の究明を通じて再発防止を図るため、運輸安全委員会で自動運転車の事故調査の体制を確保することなどが議論されています。

### 運転者がいる場合と、いない場合
- **レベル3**: 交代を求められたら、運転者が直ちに確実に運転を引き継ぐ必要があります（警察庁）。運転者は運転から解放されたわけではありません（[自動運転のレベル](/ja/learn/self-driving-and-robots/driving-automation-levels)のレッスン参照）。
- **レベル4（日本）**: 運転者がいない特定自動運行では、許可を受けた事業者が特定自動運行主任者を置き、主任者が交通事故のときに必要な措置をとります（[日本のレベル4](/ja/learn/self-driving-and-robots/level-4-in-japan)のレッスン参照）。

### 英国の自動運転法（2024年）
英国では2024年5月20日、道路などでの自動運転車の利用を規律する「自動運転法（Automated Vehicles Act 2024）」が成立しました。自動運転車の認可の仕組みに加えて、認可された自動運転の機能を作動させ、運転席で操作できる位置にいるが操作していない人を「user-in-charge（担当の利用者）」と定め、その間の車の走らせ方から生じる罪（交通違反など）には、原則としてこの人は問われないとしています（例外あり）。国土交通省の報告書も、この法律が認可制度や事故時の調査・情報共有の枠組みを定めたと紹介しています。条文ごとに施行の時期が決まる点にも注意が要ります。

### まとめ — ルールは技術と一緒に動く
国際的にも、1949年の道路交通に関するジュネーブ条約が車両には運転者がいなければならないと定めている一方で、システムが運転操作を完全に行う自動運転もありうることから、国連の場で条約の解釈や新しい法的文書の議論が続いていて、警察庁も参加しています。自動運転は、技術だけでなく、責任・保険・事故調査のルールと一緒に広がっていきます。`,
    en: `## When there's an accident, who is responsible?

> **Please note**: this lesson is a general introduction to the rules, not legal advice. For a specific situation, consult a lawyer or another qualified professional.

### Compensating victims: "operator liability" under Japan's compulsory insurance law
In Japan, compensation for car accidents rests on the Automobile Liability Security Act, which places liability on "a person who puts a vehicle into operation for their own benefit" (the **operator**, unkō kyōyōsha). What changes as automated driving spreads?
- In 2018, an MLIT study group concluded that during the "transition period," when vehicles of Levels 0 to 4 share the road, the owners and transport operators of automated vehicles can still be considered to control and benefit from their operation, and that placing liability on the operator remains effective for compensating victims quickly. It therefore found it appropriate to **keep operator liability as it is** while considering mechanisms that let insurers and others effectively exercise rights of recourse against vehicle manufacturers.
- A report dated April 30, 2025 examines business models such as robotaxis — Level 4 passenger transport — on that basis. It says that, as of April 2025, a scheme for manufacturers to provide data recorded by Level 3 vehicles to insurers, to establish the causes of accidents, was being built, and that similar cooperation will be needed for Level 4 and above.

### Investigating causes separately from assigning blame
Learning from accidents takes a way to find out why they happened, separate from deciding who is at fault.
- The National Police Agency and MLIT set up an **automated vehicle accident investigation committee** within the Institute for Traffic Accident Research and Data Analysis to investigate accidents involving automated vehicles, to prevent recurrence and support technological development.
- According to MLIT's report, discussions began in October 2024 on securing accident investigation for automated vehicles at the Japan Transport Safety Board, aiming to prevent recurrence by establishing causes separately from pursuing liability.

### With a driver, and without one
- **Level 3**: when asked, the driver must take back control promptly and reliably (National Police Agency). The driver has not been released from driving (see [the levels of driving automation](/en/learn/self-driving-and-robots/driving-automation-levels)).
- **Level 4 in Japan**: in driverless specified automated operation, the permit holder stations an operation supervisor, who takes the necessary measures when a traffic accident occurs (see [Level 4 in Japan](/en/learn/self-driving-and-robots/level-4-in-japan)).

### The UK's Automated Vehicles Act 2024
In the UK, the Automated Vehicles Act 2024 — an Act "to regulate the use of automated vehicles on roads and in other public places" — received Royal Assent on May 20, 2024. Besides a scheme for authorizing automated vehicles, it defines a "user-in-charge" as an individual in a vehicle whose authorised user-in-charge feature is engaged, in position to exercise control but not controlling it, and provides that this person does not commit an offence arising from the way the vehicle is driven, subject to exceptions. MLIT's report likewise notes that the Act sets out an authorization system and a framework for investigating and sharing information after accidents. Note that each provision comes into force on its own schedule.

### The takeaway: rules move with the technology
Internationally, the 1949 Geneva Convention on Road Traffic requires vehicles to have a driver, yet automated driving in which a system performs all of the driving is possible — so discussions continue at the United Nations on interpreting the convention and on a new legal instrument, with the National Police Agency taking part. Automated driving spreads together with rules on responsibility, insurance, and accident investigation, not on technology alone.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "日本の自動運転の事故の損害賠償について、国土交通省の整理に合うものはどれ？",
        en: "Which statement matches MLIT's position on compensation for accidents involving automated driving in Japan?",
      },
      choices: [
        {
          ja: "当面は従来の運行供用者責任を保ち、保険会社などがメーカーに求償できるようにする仕組みを整える",
          en: "For now, keep operator liability as it is, and build mechanisms so insurers and others can seek recourse from manufacturers",
        },
        { ja: "自動運転中の事故は、すべて自動車メーカーだけが責任を負う", en: "The manufacturer alone is liable for every accident during automated driving" },
        { ja: "自動運転中の事故は、誰も損害賠償の責任を負わない", en: "No one is liable to pay compensation for accidents during automated driving" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "2018年の研究会は、被害者を早く救うには運行供用者に責任を負わせる今の制度が有効だとして、従来の運行供用者責任を保ちつつ、保険会社などによる自動車メーカーなどへの求償を実際に使える仕組みの検討が適当だと整理し、2025年の報告書もこれを前提にしています。",
        en: "The 2018 study group found that placing liability on the operator remains effective for compensating victims quickly, so it recommended keeping operator liability while making insurers' recourse against manufacturers workable; the 2025 report builds on that position.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "自動運転車の事故の原因究明は、責任の追及と切り離して行う仕組みづくりが議論されている。",
        en: "Mechanisms for investigating the causes of automated vehicle accidents separately from pursuing liability are being discussed.",
      },
      answer: true,
      explanation: {
        ja: "警察庁と国土交通省は自動運転車事故調査委員会で事故原因を調べており、2024年10月からは、責任追及から切り離した原因究明による再発防止のため、運輸安全委員会での事故調査の体制なども議論されています。",
        en: "The NPA and MLIT investigate causes through an automated vehicle accident investigation committee, and since October 2024 discussions have covered accident investigation by the Japan Transport Safety Board to prevent recurrence through cause-finding separate from liability.",
      },
    },
  ],
  sources: [
    {
      label: "国土交通省: ロボットタクシー導入等に向けた自動運転における自賠法上の損害賠償責任に関する検討会 報告書（2025年4月30日）",
      url: "https://www.mlit.go.jp/jidosha/content/001888339.pdf",
    },
    { label: "警察庁: 自動運転", url: "https://www.npa.go.jp/bureau/traffic/selfdriving/index.html" },
    { label: "警察庁: 令和7年版 警察白書 — ITSの推進と自動運転の実現に向けた取組", url: "https://www.npa.go.jp/hakusyo/r07/honbun/html/bb5545000.html" },
    { label: "legislation.gov.uk: Automated Vehicles Act 2024（Introduction・2024-05-20）", url: "https://www.legislation.gov.uk/ukpga/2024/10/introduction/enacted" },
    { label: "legislation.gov.uk: Automated Vehicles Act 2024, section 46（Meaning of \"user-in-charge\"）", url: "https://www.legislation.gov.uk/ukpga/2024/10/section/46" },
    { label: "legislation.gov.uk: Automated Vehicles Act 2024, section 47（User-in-charge not liable for manner of driving）", url: "https://www.legislation.gov.uk/ukpga/2024/10/section/47" },
  ],
  lastVerified: "2026-10-13",
  glossaryRefs: ["operator-liability", "user-in-charge", "specified-automated-operation", "driving-automation-levels"],
};
