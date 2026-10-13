import type { Lesson } from "@/engine/content/types";

export const deliveryRobotsAndDrones: Lesson = {
  id: "self-driving-and-robots-04",
  slug: "delivery-robots-and-drones",
  title: {
    ja: "歩道の配送ロボットと、空のドローン — 人のいる場所を動く機械のルール",
    en: "Delivery Robots on Sidewalks and Drones in the Sky: Rules for Machines That Move Among People",
  },
  summary: {
    ja: "歩道を走る配送ロボットは「遠隔操作型小型車」として歩行者と同じルールに従い、事前の届け出が要る。人の上空を目視外で飛ぶドローンのレベル4飛行には、機体認証と一等の操縦ライセンスが要る。止める仕組みと、見守る人を置く考え方。",
    en: "Delivery robots on sidewalks follow pedestrian rules as \"remotely operated small vehicles\" and must be notified in advance. Level 4 drone flights beyond visual line of sight over people require a certified aircraft and a first-class pilot license. Stopping mechanisms, and keeping a human watching.",
  },
  body: {
    ja: `## 道路の外でも、機械が動き始めた

自動運転車のほかにも、人のいる場所を動く機械が増えています。日本では、歩道を走る配送ロボットと、人の上空を飛ぶドローンについて、それぞれルールが整えられました。

### 配送ロボット — 「遠隔操作型小型車」
2022年4月に公布された改正道路交通法により、2023年4月1日から、一定の基準を満たす自動配送ロボットなどが**遠隔操作型小型車**として扱われるようになりました（警察庁）。
- **大きさと速さ**: 遠隔操作で通行する車で、性能上の最高速度が時速6km以下、車体が長さ120cm・幅70cm・高さ120cmを超えないことなどが基準です。今の電動車椅子に相当する大きさです。
- **通行のルール**: 歩道や路側帯を通るのが原則で、信号や標識に従う、横断歩道を通るなど、歩行者と同じルールに従い、歩行者に進路を譲らなければなりません。車体の見やすい場所に標識を付けます。
- **事前の届け出**: 使う人は、通行させる場所を管轄する都道府県公安委員会に、使用者の氏名、通行する場所、遠隔操作をする場所、非常停止装置の位置、ロボットの型式や仕様などを事前に届け出ます。
- **止める権限**: 警察官などは、危険を防ぐために遠隔操作型小型車を止めたり動かしたりでき、公安委員会は法令に違反した使用者に必要な指示（措置をとるまでの通行停止を含む）ができます。

### ドローン — レベル4飛行
国土交通省によると、改正航空法により2022年12月5日から、機体認証、無人航空機操縦者技能証明（操縦ライセンス）、運航のルールの制度が始まり、**レベル4飛行**——人のいる地域の上空（第三者上空）を、補助者を置かずに目視外で飛ばすこと——ができるようになりました。
- レベル4飛行には、第一種機体認証を受けた機体を、一等無人航空機操縦者技能証明を持つ人が飛ばし、飛行の許可・承認を受けて、運航のルールを守る必要があります。
- 国土交通省は2023年3月17日、日本郵便に対して、レベル4飛行を初めて行うための飛行の許可・承認を出しました。

### 共通する考え方
道路の自動運転車（[日本のレベル4](/ja/learn/self-driving-and-robots/level-4-in-japan)のレッスン参照）、歩道の配送ロボット、空のドローンには、共通点があります。
- **どこで動くかを先に決める**: 走る場所・通行する場所・飛ぶ経路を、許可や届け出の段階で示す。
- **見守る人を置く**: 特定自動運行主任者、遠隔操作をする人、操縦ライセンスを持つ人など、責任を持つ人が決まっている。
- **止められるようにする**: 非常停止装置や、警察による停止のように、危ないときに止める手段がある。

機械がAIで賢くなっても、人のいる場所で動かすときは、こうした仕組みとセットで認められています。工場や研究室のロボットとAIの関係は、次の[ロボットとAI](/ja/learn/self-driving-and-robots/robots-and-ai)のレッスンで見ます。`,
    en: `## Machines on the move beyond the road

Besides automated cars, more machines are moving through places where people are. Japan has set rules both for delivery robots on sidewalks and for drones flying over people.

### Delivery robots: "remotely operated small vehicles"
Under the amended Road Traffic Act promulgated in April 2022, from April 1, 2023, automated delivery robots and similar machines that meet certain standards are treated as **remotely operated small vehicles** (National Police Agency).
- **Size and speed**: the standards include being a vehicle that moves by remote operation, with a maximum design speed of 6 km/h or less and a body no larger than 120 cm long, 70 cm wide, and 120 cm high — about the size of today's electric wheelchairs.
- **Traffic rules**: they travel on sidewalks and roadside strips in principle and follow the same rules as pedestrians — obeying signals and signs, using crosswalks — and must give way to pedestrians. A sign must be displayed where it can easily be seen on the body.
- **Advance notification**: users must notify the prefectural public safety commission in advance, including the user's name, where the robot will travel, where it will be remotely operated from, the location of the emergency stop device, and the robot's model and specifications.
- **Power to stop it**: police officers and others can stop or move a remotely operated small vehicle to prevent danger, and the commission can give users who break the law the necessary instructions, including suspending operation until measures are taken.

### Drones: Level 4 flight
According to MLIT, the amended Civil Aeronautics Act launched systems for aircraft certification, unmanned aircraft pilot certification (a pilot license), and operating rules on December 5, 2022, making **Level 4 flight** possible — flying beyond visual line of sight over populated areas (over third parties) without assistants.
- Level 4 flight requires an aircraft with Type 1 certification, flown by a holder of a first-class unmanned aircraft pilot certificate, with flight permission and approval, in compliance with the operating rules.
- On March 17, 2023, MLIT granted Japan Post the flight permission and approval for the first Level 4 flight.

### What they have in common
Automated cars on roads (see [Level 4 in Japan](/en/learn/self-driving-and-robots/level-4-in-japan)), delivery robots on sidewalks, and drones in the sky share a pattern:
- **Decide where it moves first**: the route, travel area, or flight path is set out at the permit or notification stage.
- **Keep a human watching**: someone responsible is designated — the operation supervisor, the remote operator, the licensed pilot.
- **Make it stoppable**: there is a way to stop it when things go wrong, such as an emergency stop device or police powers to stop it.

However smart AI makes these machines, operating them where people are has been allowed only together with arrangements like these. How robots in factories and labs relate to AI is covered in the next lesson, [robots and AI](/en/learn/self-driving-and-robots/robots-and-ai).`,
  },
  quiz: [
    {
      kind: "multi",
      prompt: {
        ja: "日本の遠隔操作型小型車（配送ロボットなど）のルールとして正しいものをすべて選んでください。",
        en: "Which of the following are rules for remotely operated small vehicles (such as delivery robots) in Japan? Select all that apply.",
      },
      choices: [
        { ja: "歩道や路側帯を通るのが原則で、歩行者に進路を譲る", en: "They travel on sidewalks and roadside strips in principle and give way to pedestrians" },
        { ja: "使う人は、通行させる場所の都道府県公安委員会に事前に届け出る", en: "Users notify the prefectural public safety commission for the area in advance" },
        { ja: "車道の中央を時速30kmで走れる", en: "They may drive down the middle of the road at 30 km/h" },
        { ja: "警察官などは、危険を防ぐために止めたり動かしたりできる", en: "Police officers and others can stop or move them to prevent danger" },
      ],
      correctIndexes: [0, 1, 3],
      explanation: {
        ja: "遠隔操作型小型車は、性能上の最高速度が時速6km以下などの基準を満たすもので、歩行者と同じルールに従います。事前の届け出が必要で、警察官などには止めたり動かしたりする権限があります。",
        en: "Remotely operated small vehicles must meet standards such as a maximum design speed of 6 km/h or less, and they follow pedestrian rules. Advance notification is required, and police officers and others have the power to stop or move them.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "ドローンのレベル4飛行（第三者上空での補助者なしの目視外飛行）は、操縦ライセンスがなくても、届け出だけで行える。",
        en: "A Level 4 drone flight (beyond visual line of sight over third parties without assistants) can be made with just a notification, without a pilot license.",
      },
      answer: false,
      explanation: {
        ja: "レベル4飛行には、第一種機体認証を受けた機体、一等無人航空機操縦者技能証明、飛行の許可・承認、運航のルールの順守が必要です（2022年12月5日からの制度）。",
        en: "Level 4 flight requires a Type 1 certified aircraft, a first-class unmanned aircraft pilot certificate, flight permission and approval, and compliance with operating rules (under the system in place since December 5, 2022).",
      },
    },
  ],
  sources: [
    {
      label: "警察庁: 令和４年改正道路交通法（遠隔操作型小型車の交通方法等）の概要",
      url: "https://www.npa.go.jp/bureau/traffic/selfdriving/roadtesting/kaiseidourokoutuuhou.pdf",
    },
    { label: "警察庁: 令和5年版 警察白書 — 新たなモビリティや自転車の良好な交通秩序の実現", url: "https://www.npa.go.jp/hakusyo/r05/honbun/html/zt300000.html" },
    { label: "国土交通省: 無人航空機レベル4飛行ポータルサイト", url: "https://www.mlit.go.jp/koku/level4/" },
    {
      label: "国土交通省: 無人航空機のレベル4飛行初実施のために飛行の許可・承認を行いました！（2023年3月17日）",
      url: "https://www.mlit.go.jp/report/press/kouku10_hh_000231.html",
    },
  ],
  lastVerified: "2026-10-13",
  glossaryRefs: ["remotely-operated-small-vehicle", "drone-level-4-flight", "specified-automated-operation", "human-in-the-loop"],
};
