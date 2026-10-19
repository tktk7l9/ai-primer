import type { Lesson } from "@/engine/content/types";

export const humansAndMachines: Lesson = {
  id: "ai-and-sports-06",
  slug: "humans-and-machines",
  title: {
    ja: "人の判定と機械の判定 — 何を任せ、何を残すか",
    en: "Human Calls and Machine Calls: What to Hand Over, What to Keep",
  },
  summary: {
    ja: "サッカー、体操、野球の判定支援は、機械に任せる範囲の決め方がそれぞれ違う。3つのしくみを並べると、最後の判定は人が下すこと、見る人への見せ方、判定の外へのデータの広がりが見えてくる。ニュースを読むときの視点も。",
    en: "Officiating support in soccer, gymnastics, and baseball each draws the line differently on what machines handle. Side by side, the three systems show that people make the final call, how decisions are shown to spectators, and how the data spreads beyond officiating. Plus what to look for when reading the news.",
  },
  body: {
    ja: `## 3つのしくみを並べる

| 競技 | 機械がすること | 人がすること |
|---|---|---|
| サッカー（FIFAの半自動オフサイド） | カメラとボールのセンサーの追跡データにAIを適用し、オフサイドの可能性を警告する。ラインも自動で引く | 映像室の審判員が確かめ、主審が判定する |
| 体操（採点支援システム） | 動きを分析してAIが技を自動で判定し、関節の角度などの数値を示す | 審判が採点する（2019年の導入時は、疑念や申し立てがあったときの検証に使った） |
| 野球（MLBのABSチャレンジ） | チャレンジがあったときに、投球の位置をストライクゾーンと比べる | 球審が判定し、投手・捕手・打者が異議を申し立てる |

## 共通すること
- **最後の判定は人**: FIFAの審判委員長は、判定の責任は今も主審と副審にあると説明しています。サッカーの競技規則も、技術は主審が判定を下す、または変更するのを助けるために使うものとしています。体操のシステムは「正確な判定の支援」、野球の制度は試合の「人の要素」を残すものと説明されています。
- **見る人に見せる**: FIFAは判定に使った位置データから3Dアニメーションを作って大型画面とテレビで示し、MLBはチャレンジの結果をグラフィックで示します。体操でも、システムのデータに基づく解説や映像を視聴者に提供していくとしています。
- **判定の前に試す**: FIFAは大会で試し、データをMITスポーツ研究所などが分析・検証したとしています。MLBは2021年からマイナーリーグで段階的に試し、体操のシステムは2018年の技術検証と2019年の試験運用を経て導入されました。

## 違うこと — どこまで任せるか
- **機械に任せる範囲**: サッカーは警告を出すところまで、野球は選手が求めたときだけ機械が判定を確かめます。MLBは、すべての投球を技術で判定する方式よりも選手がチャレンジ方式を強く好んだことを、決め手の一つに挙げています。
- **正確さと時間**: Jリーグが2023年に導入した3Dオフサイドラインは、2Dより正確になる一方、作業が増えて時間がかかると見込まれました。半自動のしくみは、確かめる時間を数秒に縮めることをめざしています。

## 判定の外へ広がるデータ
- 体操のシステムは、トレーニングで選手の能力や技の習熟度を評価する使い道や、視聴者向けの解説にも広がり、富士通は動きの分析の技術を流通や医療などの産業にも提供するとしています。
- テニスのウィンブルドンでは、全試合のすべてのショットの10万を超えるデータ点をAIで分析し、ファン向けの機能に使っています（IBM、2023年）。

## ニュースを読むときの視点
ここからは、このコースからの提案です。
- **「AIが判定」の中身を確かめる**: 警告を出すのか、数値を示すのか、異議があったときだけ使うのか。発表元が「AI」と呼んでいるかどうかも確かめます。
- **数字が何を測っているかを見る**: チャレンジの成功率は、選手が「おかしい」と思った投球に限った数字です。
- **データの扱いも気にかける**: 選手の動きのデータの使い道が広がるほど、そのデータがどう扱われるかを確かめる視点が要ります。`,
    en: `## Three systems side by side

| Sport | What the machine does | What people do |
|---|---|---|
| Soccer (FIFA's semi-automated offside) | Applies AI to camera and ball-sensor tracking data to alert officials to a possible offside, and draws the offside line automatically | Video match officials check it, and the referee decides |
| Gymnastics (judging support system) | Analyzes movements, has AI identify skills automatically, and shows numbers such as joint angles | Judges score (when introduced in 2019, it was used to verify routines when there were doubts or inquiries) |
| Baseball (MLB's ABS Challenge) | When a challenge is made, compares the pitch location with the strike zone | The plate umpire calls pitches, and the pitcher, catcher, or batter can challenge |

## What they share
- **People make the final call**: FIFA's Referees Committee chairman says the referees and assistant referees are still responsible for the decision, and the Laws of the Game describe technology as something used to help the referee make or change a decision. The gymnastics system is described as "supporting accurate judging," and the baseball system as retaining the game's "human element."
- **Showing spectators**: FIFA turns the positional data used for a decision into a 3D animation shown on big screens and TV, and MLB displays challenge results as graphics. In gymnastics, commentary and video based on the system's data are to be provided to viewers.
- **Testing before use**: FIFA tested its system at tournaments, with data analyzed and validated by the MIT Sports Lab and others. MLB tested in the minor leagues in stages from 2021, and the gymnastics system was introduced after technical verification in 2018 and trial operation in 2019.

## What differs: how much to hand over
- **The machine's scope**: In soccer the machine goes as far as raising an alert; in baseball it checks a call only when a player asks. MLB cited players' strong preference for the challenge format over having technology call every pitch as a key factor.
- **Accuracy versus time**: The 3D offside lines the J.League adopted in 2023 were expected to be more accurate than 2D lines but to take longer because of extra steps. The semi-automated system aims to cut checking time to seconds.

## Data that spreads beyond officiating
- The gymnastics system is expanding to training — assessing athletes' abilities and mastery of skills — and to commentary for viewers, and Fujitsu says it will offer its motion-analysis technology to industries such as retail and healthcare.
- At Wimbledon, AI analyzes over 100,000 data points from every shot of the tournament for fan features (IBM, 2023).

## What to look for in the news
What follows is this course's own advice.
- **Check what "AI makes the call" means**: Does it raise an alert, show numbers, or come into play only when someone objects? Also check whether the announcer itself calls it "AI."
- **Look at what a number measures**: A challenge success rate covers only pitches players thought were wrong.
- **Mind how data is handled**: The wider the uses of athletes' movement data, the more it is worth asking how that data is handled.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "サッカー、体操、野球の3つのしくみに共通することは？",
        en: "What do the soccer, gymnastics, and baseball systems have in common?",
      },
      choices: [
        { ja: "最後の判定は人が下す", en: "People make the final call" },
        { ja: "AIが単独で判定を確定する", en: "AI alone finalizes the call" },
        { ja: "観客には結果を見せない", en: "Results are hidden from spectators" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "FIFAは判定の責任は主審と副審にあるとし、体操のシステムは判定の支援、野球の制度は「人の要素」を残すものと説明されています。",
        en: "FIFA says responsibility lies with the referees, the gymnastics system is described as judging support, and the baseball system as retaining the human element.",
      },
    },
    {
      kind: "single",
      prompt: {
        ja: "MLBのABSチャレンジで、機械が判定を確かめるのはどんなとき？",
        en: "Under MLB's ABS Challenge, when does the machine check a call?",
      },
      choices: [
        { ja: "選手がチャレンジを求めたときだけ", en: "Only when a player requests a challenge" },
        { ja: "すべての投球", en: "On every pitch" },
        { ja: "試合が終わったあとだけ", en: "Only after the game is over" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "球審が判定し、投手・捕手・打者が異議を申し立てたときに、投球の位置がゾーンと比べられます。",
        en: "The umpire calls pitches, and when the pitcher, catcher, or batter challenges, the pitch location is compared with the zone.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "FIFAは、半自動オフサイドの試験のデータを、MITスポーツ研究所などが分析・検証したとしている。",
        en: "FIFA says the test data for semi-automated offside was analyzed and validated by the MIT Sports Lab and others.",
      },
      answer: true,
      explanation: {
        ja: "手足の追跡の技術は、ビクトリア大学のTRACKが科学的に検証したとしています。",
        en: "It says the limb-tracking technology was scientifically validated by TRACK at Victoria University.",
      },
    },
  ],
  sources: [
    {
      label: "FIFA: Semi-automated offside technology to be used at FIFA World Cup 2022（2022-07-01）",
      url: "https://www.fifa.com/en/articles/semi-automated-offside-technology-to-be-used-at-fifa-world-cup-2022-tm",
    },
    {
      label: "日本サッカー協会: 2026/27年サッカー競技規則 変更の概要と詳細",
      url: "https://www.jfa.jp/documents/pdf/soccer/law_soccer_260528_01.pdf",
    },
    {
      label: "富士通: 「第49回世界体操競技選手権大会」で富士通の採点支援システムを正式導入（2019-10-02）",
      url: "https://info.archives.global.fujitsu/jp/news/2019/10/2-1.html",
    },
    {
      label: "富士通: 国際体操連盟、富士通のJudging Support Systemを全10種目で利用開始（2023-10-05）",
      url: "https://info.archives.global.fujitsu/jp/news/2023/10/5-1.html",
    },
    {
      label: "MLB: MLB announces ABS Challenge System coming to the Major Leagues beginning in the 2026 season（2025-09-23）",
      url: "https://www.mlb.com/press-release/press-release-mlb-announces-abs-challenge-system-coming-to-the-major-leagues-beginning-in-the-2026-season",
    },
    {
      label: "Jリーグ: 「3Dオフサイドライン導入」でより正確な判定の実現へ「第1回JFAレフェリーブリーフィング」レポート（2023-02-01）",
      url: "https://www.jleague.jp/news/article/24545/",
    },
    {
      label: "IBM: IBM Brings Generative AI Commentary and AI Draw Analysis to the Wimbledon Digital Experience（2023-06-21）",
      url: "https://newsroom.ibm.com/2023-06-21-IBM-Brings-Generative-AI-Commentary-and-AI-Draw-Analysis-to-the-Wimbledon-Digital-Experience",
    },
  ],
  lastVerified: "2026-10-13",
  glossaryRefs: ["semi-automated-offside", "judging-support-system", "abs-challenge-system", "human-in-the-loop"],
};
