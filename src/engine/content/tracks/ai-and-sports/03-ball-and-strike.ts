import type { Lesson } from "@/engine/content/types";

export const ballAndStrike: Lesson = {
  id: "ai-and-sports-03",
  slug: "ball-and-strike",
  title: {
    ja: "ストライクの判定と機械 — MLBのチャレンジ制度",
    en: "Machines and the Strike Zone: MLB's Challenge System",
  },
  summary: {
    ja: "MLBは2026年から、カメラで投球の位置を追跡するABSを、すべての判定を任せる形ではなく、選手が球審の判定に異議を申し立てる「チャレンジ」の形で使い始めた。しくみとルール、試験の数字、そして「人の要素」を残すという選び方。",
    en: "From 2026, Major League Baseball uses ABS — camera tracking of pitch locations — not to call every pitch but as a \"challenge\" players can make against the plate umpire's calls. How it works, the rules, the test numbers, and the choice to keep the \"human element.\"",
  },
  body: {
    ja: `## 球審の判定に「チャレンジ」する
MLBは2025年9月23日、ボールとストライクの判定に**ABSチャレンジシステム**（自動ボール・ストライク判定のチャレンジ制度）を2026年から使うと発表しました。オーナー6人、現役選手4人、現役審判1人でつくる競技委員会の投票で承認され、2026年のシーズンから使われています。
- **しくみ**: 球場の周りに置いた12台のホークアイのカメラが、投球の位置を追跡する。投手・捕手・打者が球審の判定に納得できないとき、すぐに帽子かヘルメットを軽くたたいてチャレンジを求めると、投球の位置が打者のストライクゾーンと比べられる。ボールのどこか一部でもゾーンにかかればストライク。結果は場内の大型画面と中継にグラフィックで示される。
- **ルール**: 各チームは試合の初めに2回のチャレンジ権を持ち、成功したチャレンジは権利が減らない。チャレンジできるのは投手・捕手・打者だけで、コーチやほかの選手の助けは受けられない。
- **ストライクゾーン**: ホームベースの中央に置いた2次元の長方形。幅はベースの幅（17インチ）で、上端と下端は打者の身長の53.5%と27%に合わせる。身長は独立した測定者が標準の方法で測る。

## 試験の数字（2025年の春季キャンプ）
ABSは、マイナーリーグで2021年から段階的に試されてきました（1Aのフロリダ・ステート・リーグで2021年から、3Aの一部の球場で2022年から、3Aの全体で2023年から）。チャレンジ方式は2025年の春季キャンプでメジャーに初めて登場しました。
- チームのチャレンジは1試合あたり4回あまりで、成功率は50%近く。マイナーリーグの試験と同じ傾向だった。
- 攻撃側と守備側のチャレンジの数は同じくらいだが、守備側のほうが成功率が高かった（54%対50%）。
- 捕手の成功率が最も高かった（捕手56%、打者50%、投手41%）。

## なぜ「全部を機械に」しなかったのか
MLBのコミッショナーは、すべての投球を技術で判定する方式よりも、チャレンジ方式を選手が強く好んだことが、決め手の一つになったと述べています。競技委員会の委員長は、勝負どころで判定の誤りを正す道具を選手に渡しつつ、試合の「人の要素」を残す、ちょうどよい釣り合いだとしています。

## 読むときの注意
- **「AI」とは書かれていない**: MLBの発表は、カメラで追跡して判定するしくみを説明していますが、「AI」という言葉は使っていません。技術の呼び方は、発表元の説明に合わせて読みます。
- **成功率50%の意味**: チャレンジの約半分で判定が覆りました。これは選手が「おかしい」と思った投球に限った数字で、球審の判定全体の正確さを示すものではありません。`,
    en: `## "Challenging" the umpire's call
On September 23, 2025, Major League Baseball announced that it would use the **ABS Challenge System** (Automated Ball-Strike challenge system) for ball and strike calls from 2026. It was approved by a vote of the Joint Competition Committee — six owners, four active players, and one active umpire — and has been in use since the 2026 season.
- **How it works**: 12 Hawk-Eye cameras set up around the field track the location of each pitch. If a pitcher, catcher, or batter disagrees with the plate umpire's call, he can request a challenge by immediately tapping his cap or helmet, and the pitch location is compared with the batter's strike zone. If any part of the ball touches any part of the zone, it is a strike. The result is shown as a graphic on the ballpark videoboard and on broadcasts.
- **Rules**: Each club starts the game with two challenges, and successful challenges are retained. Only the pitcher, catcher, or batter may challenge, with no help from coaches or other players.
- **Strike zone**: A two-dimensional rectangle set in the middle of home plate, as wide as the plate (17 inches), with its top and bottom set at 53.5% and 27% of the batter's height. Heights are measured by independent testers using a standardized process.

## Test numbers (2025 Spring Training)
ABS has been tested in the minor leagues in stages since 2021 (the Single-A Florida State League from 2021, select Triple-A parks from 2022, and all of Triple-A from 2023). The challenge format debuted at the major league level in 2025 Spring Training.
- Teams challenged just over four pitches per game, with a success rate near 50%, consistent with minor league testing.
- Offense and defense challenged a similar number of pitches, but the defense was more successful (54% vs. 50%).
- Catchers were the most successful (56% for catchers, 50% for hitters, 41% for pitchers).

## Why not hand everything to the machines?
MLB's Commissioner said that players' strong preference for the challenge format over using the technology to call every pitch was a key factor. The chairman of the Competition Committee said it strikes the right balance: giving players a tool to correct a missed call at a key moment while retaining the game's human element.

## Reading the claims
- **It doesn't say "AI"**: MLB's announcement describes tracking pitches with cameras and judging them automatically, but does not use the word "AI." Follow the announcer's own description when naming a technology.
- **What a 50% success rate means**: About half of challenges overturned the call. That figure covers only pitches players thought were wrong; it does not measure the accuracy of umpires' calls overall.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "ABSチャレンジシステムで、チャレンジを求められるのは？",
        en: "Who can request a challenge under the ABS Challenge System?",
      },
      choices: [
        { ja: "投手・捕手・打者だけ", en: "Only the pitcher, catcher, or batter" },
        { ja: "監督だけ", en: "Only the manager" },
        { ja: "観客の投票", en: "Fans, by vote" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "判定の直後に、コーチやほかの選手の助けなしで求める必要があります。各チームは試合の初めに2回の権利を持ち、成功すれば減りません。",
        en: "It must be requested immediately after the call, with no help from coaches or other players. Each club starts with two challenges and keeps them when successful.",
      },
    },
    {
      kind: "single",
      prompt: {
        ja: "2025年の春季キャンプで、チャレンジの成功率はどのくらいだった？",
        en: "What was the challenge success rate in 2025 Spring Training?",
      },
      choices: [
        { ja: "50%近く", en: "Near 50%" },
        { ja: "ほぼ100%", en: "Nearly 100%" },
        { ja: "ほぼ0%", en: "Nearly 0%" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "1試合あたり4回あまりのチャレンジで、成功率は50%近くでした。捕手の成功率が56%で最も高かった。",
        en: "Teams challenged just over four pitches per game, with a success rate near 50%. Catchers were highest at 56%.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "MLBは、すべての投球を機械で判定する方式を選んだ。",
        en: "MLB chose to have machines call every pitch.",
      },
      answer: false,
      explanation: {
        ja: "選手がチャレンジ方式を強く好んだことが決め手の一つで、球審が判定し、選手が異議を申し立てる形になりました。",
        en: "Players' strong preference for the challenge format was a key factor, so umpires still call pitches and players can challenge.",
      },
    },
  ],
  sources: [
    {
      label: "MLB: MLB announces ABS Challenge System coming to the Major Leagues beginning in the 2026 season（2025-09-23）",
      url: "https://www.mlb.com/press-release/press-release-mlb-announces-abs-challenge-system-coming-to-the-major-leagues-beginning-in-the-2026-season",
    },
    { label: "MLB.com: MLB to use ABS Challenge System starting in 2026", url: "https://www.mlb.com/news/abs-challenge-system-mlb-2026" },
  ],
  lastVerified: "2026-10-13",
  glossaryRefs: ["abs-challenge-system"],
};
