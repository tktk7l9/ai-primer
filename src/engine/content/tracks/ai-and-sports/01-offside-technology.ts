import type { Lesson } from "@/engine/content/types";

export const offsideTechnology: Lesson = {
  id: "ai-and-sports-01",
  slug: "offside-technology",
  title: {
    ja: "オフサイドを判定する技術 — VARの線引きと半自動オフサイド",
    en: "Technology for Offside Calls: VAR Lines and Semi-Automated Offside",
  },
  summary: {
    ja: "サッカーのオフサイドは、際どい場面ほど確認に時間がかかる。Jリーグは2023年にVARの3Dオフサイドラインを導入し、FIFAは2022年のワールドカップで、カメラとAIで警告を出す半自動オフサイドを使った。最後に判定するのはだれか、競技規則はどう変わったか。",
    en: "The tighter the offside call, the longer it takes to check. Japan's J.League adopted 3D offside lines for VAR in 2023, and FIFA used semi-automated offside technology — cameras and AI that raise an alert — at the 2022 World Cup. Who makes the final call, and how have the Laws of the Game changed?",
  },
  body: {
    ja: `## VARと、オフサイドの線引き
**VAR**（ビデオ・アシスタント・レフェリー）は、映像を見て主審を助ける審判員です。主審がVARから援助を得られるのは、得点かどうか、ペナルティーキックかどうか、退場、警告や退場を命じる競技者の取り違えなどについての「はっきりとした、明白な間違い」か「見逃された重大な事象」の場合に限られます（競技規則）。

Jリーグは2023年シーズンから、J1の全試合などの320試合で、VARのオフサイドの確認に3Dラインを使い始めました。選手の位置や体勢を立体的に捉えられ、2Dラインより正確に判定できる一方、作業の工程が増えるため、判定までの時間は長くなると見込まれました。日本サッカー協会が報道陣に公開したシミュレーションでは、オフサイドの確定までにおよそ1分30秒かかりました。

## 半自動オフサイド — カメラとAIが警告を出す
FIFAは、2022年のワールドカップ（カタール大会）で**半自動オフサイドテクノロジー**（SAOT）を使いました。
- スタジアムの屋根の下に取り付けた12台の専用カメラで、ボールと、選手1人あたり最大29か所の体の点を1秒に50回追跡し、ピッチ上の正確な位置を計算する。
- 公式球の中のセンサーが、ボールのデータを1秒に500回送り、ボールを蹴った瞬間を正確に捉える。
- 手足とボールの追跡データを組み合わせてAIを適用し、オフサイドの位置にいた攻撃側の選手がボールを受けたときに、映像室の審判員に自動で警告を出す。
- 映像室の審判員は、自動で選ばれた蹴った瞬間と、自動で引かれたオフサイドラインを手で確かめてから主審に伝える。この流れは数秒で終わるという。
- 判定に使ったのと同じ位置データから3Dアニメーションを作り、スタジアムの大型画面やテレビで観客に示す。

FIFAの審判委員長は、「ロボット・オフサイド」と呼ぶ人もいるが、そうではなく、判定の責任は今も主審と副審にあると説明しています。

## 競技規則も、技術の使い方を定める
日本サッカー協会が公表した2026/27年の競技規則の変更では、競技会が、主審の判定を助けるために、VARの実施手順、ボールのインプレー・アウトオブプレー（ゴールラインテクノロジーを含む）、オフサイド（半自動オフサイドテクノロジーを含む）について技術を使えることが明記されました。半自動オフサイドテクノロジーは、オフサイドの位置の情報をただちにVARに、最新のものでは副審にも直接送る技術と説明されています。競技会の選択肢として定めることで、審判員による非公式な使用は禁止されます。

## 読むときの注意
- **「AIが判定」ではない**: FIFAのしくみでAIが出すのは警告で、人が確かめてから主審が判定します。
- **正確さと時間のトレードオフ**: 3Dラインは正確になるぶん時間がかかり、半自動のしくみは時間を縮めることをめざしています。FIFAは、試験のデータをMITスポーツ研究所が分析・検証したとしています。`,
    en: `## VAR and drawing offside lines
The **VAR** (video assistant referee) is a match official who helps the referee by reviewing video. Under the Laws of the Game, the referee may be assisted by the VAR only for a "clear and obvious error" or a "serious missed incident" concerning goals, penalty kicks, sending-offs, mistaken identity when cautioning or sending off a player, and the like.

From the 2023 season, Japan's J.League began using 3D lines for VAR offside checks in 320 matches, including every J1 match. 3D lines capture players' positions and posture in three dimensions and allow more accurate calls than 2D lines, but because they add steps to the work, the time to a decision was expected to grow. In a simulation the Japan Football Association showed to the press, confirming an offside took about 1 minute 30 seconds.

## Semi-automated offside: cameras and AI raise an alert
FIFA used **semi-automated offside technology** (SAOT) at the 2022 World Cup in Qatar.
- 12 dedicated cameras mounted under the stadium roof track the ball and up to 29 data points on each player's body 50 times per second, calculating their exact positions on the pitch.
- A sensor inside the official match ball sends ball data 500 times per second, pinpointing the moment the ball was kicked.
- Combining limb- and ball-tracking data and applying artificial intelligence, the system automatically alerts the video match officials whenever the ball is received by an attacker who was in an offside position.
- The video match officials manually check the automatically selected kick point and the automatically created offside line before informing the referee — a process FIFA says takes a few seconds.
- The same positional data used for the decision is turned into a 3D animation shown on stadium screens and to TV viewers.

The chairman of FIFA's Referees Committee said some had called it "robot offside," but it is not: the referees and assistant referees are still responsible for the decision.

## The Laws of the Game also set the rules for technology
In the 2026/27 Laws of the Game changes published by the Japan Football Association, it is spelled out that competitions may use technology to help referees with VAR procedures, whether the ball is in or out of play (including goal-line technology), and offside (including semi-automated offside technology). Semi-automated offside technology is described as technology that immediately sends information about offside positions to the VAR — and, in the latest versions, directly to the assistant referees. Because these are options set by competitions, unofficial use by match officials is prohibited.

## Reading the claims
- **Not "AI makes the call"**: In FIFA's system, AI raises an alert; people check it, and the referee decides.
- **Accuracy versus time**: 3D lines are more accurate but take longer, and the semi-automated system aims to cut the time. FIFA says the test data was analyzed and validated by the MIT Sports Lab.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "FIFAの半自動オフサイドで、AIがすることは？",
        en: "In FIFA's semi-automated offside system, what does the AI do?",
      },
      choices: [
        {
          ja: "追跡データから、オフサイドの可能性を映像室の審判員に自動で警告する",
          en: "It uses tracking data to automatically alert the video match officials to a possible offside",
        },
        { ja: "主審の代わりに、最終的な判定を下す", en: "It makes the final decision instead of the referee" },
        { ja: "選手の交代を決める", en: "It decides substitutions" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "映像室の審判員が、蹴った瞬間とオフサイドラインを手で確かめてから主審に伝えます。判定の責任は主審と副審にあります。",
        en: "The video match officials manually check the kick point and offside line before telling the referee. Responsibility for the decision stays with the referee and assistant referees.",
      },
    },
    {
      kind: "single",
      prompt: {
        ja: "Jリーグが2023年に導入した3Dオフサイドラインについて、正しいのは？",
        en: "Which statement about the 3D offside lines the J.League adopted in 2023 is correct?",
      },
      choices: [
        {
          ja: "2Dラインより正確になる一方、工程が増えて判定までの時間が長くなると見込まれた",
          en: "They were expected to be more accurate than 2D lines but to take longer because of extra steps",
        },
        { ja: "AIがすべて自動で線を引くので、数秒で終わる", en: "AI draws every line automatically, so it takes seconds" },
        { ja: "VARを使わずに主審が線を引く", en: "The referee draws the lines without VAR" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "公開されたシミュレーションでは、オフサイドの確定までにおよそ1分30秒かかりました。",
        en: "In the simulation shown to the press, confirming an offside took about 1 minute 30 seconds.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "2026/27年の競技規則の変更では、半自動オフサイドテクノロジーを含め、主審を助ける技術の使用が競技会の選択肢として明記された。",
        en: "The 2026/27 Laws of the Game changes spell out the use of technology to help the referee, including semi-automated offside technology, as an option for competitions.",
      },
      answer: true,
      explanation: {
        ja: "選択肢として定めることで、審判員による非公式な使用は禁止されることになります。",
        en: "Setting it out as an option also means unofficial use by match officials is prohibited.",
      },
    },
  ],
  sources: [
    {
      label: "FIFA: Semi-automated offside technology to be used at FIFA World Cup 2022（2022-07-01）",
      url: "https://inside.fifa.com/innovation/media-releases/semi-automated-offside-technology-to-be-used-at-fifa-world-cup-2022-tm",
    },
    {
      label: "Jリーグ: 「3Dオフサイドライン導入」でより正確な判定の実現へ「第1回JFAレフェリーブリーフィング」レポート（2023-02-01）",
      url: "https://www.jleague.jp/news/article/24545/",
    },
    {
      label: "日本サッカー協会: 2026/27年サッカー競技規則 変更の概要と詳細",
      url: "https://www.jfa.jp/documents/pdf/soccer/law_soccer_260528_01.pdf",
    },
  ],
  lastVerified: "2026-10-13",
  glossaryRefs: ["var", "semi-automated-offside"],
};
