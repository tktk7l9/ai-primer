import type { Lesson } from "@/engine/content/types";

export const protectingAthletesOnline: Lesson = {
  id: "ai-and-sports-05",
  slug: "protecting-athletes-online",
  title: {
    ja: "選手をSNSの中傷から守るAI — 見つけるのはAI、確かめるのは人",
    en: "AI That Protects Athletes from Online Abuse: AI Finds, People Verify",
  },
  summary: {
    ja: "大会のたびに、選手のSNSには中傷が届く。世界陸連（World Athletics）は2021年から4つの大会で、AIでSNSの投稿を監視し、人が確かめて対応する調査を続けた。パリ五輪では35万件あまりの投稿からAIが3万4千件を拾い、人が809件を中傷と確認した。数字の読み方と、残った課題。",
    en: "With every championship, abuse arrives in athletes' social media. From 2021, World Athletics ran studies across four events in which AI monitored social media posts and people verified and acted on them. At the Paris Olympics, AI flagged about 34,000 of some 356,000 posts, and people confirmed 809 as abusive. How to read the numbers, and what problems remain.",
  },
  body: {
    ja: `## AIで拾い、人が確かめる
世界陸連（World Athletics）は、Signify Groupの**Threat Matrix**というAIのサービスを使って、大会中に選手が受けるSNSでの中傷を調べてきました。対象は、東京2020オリンピック（2021年開催）、2022年と2023年の世界陸上、パリ2024オリンピックの4つの大会です。

パリ2024オリンピック（2024年7月24日〜8月11日と前後24時間）の調査（2024年10月31日公表）は次のとおりです。

| 項目 | 数 |
|---|---|
| 監視した選手・関係者 | 1,917人（X、Instagram、Facebook、TikTokの4つ） |
| 集めて分析した投稿・コメント | 355,873件（36の言語・方言） |
| AIが人の確認に回した投稿 | 34,040件 |
| 人が中傷と確認した投稿 | 809件 |
| 選手に代わってプラットフォームに報告 | 128件（さらに2件は関係当局へ） |

確認された中傷のうち、人種差別が18%、性的な中傷が30%で、あわせて48%を超えました。2人の選手に中傷の82%が集中し、米国の選手は調査対象の7.8%なのに、中傷の49%が向けられていました。

## 4年間で分かったこと
世界陸連は2024年12月18日、4年間の分析を公表しました。
- 4つの大会で、140万件を超える投稿やコメントを分析した。Threat Matrixは40の言語に対応する。
- 監視した選手などは、東京2020の161人から、パリ2024の1,917人へと、ほぼ12倍に広がった。
- 絵文字を使った中傷が大きく増えた。絵文字は、すぐには中傷と分からない形でプラットフォームの指針をくぐり抜けるために使われることが多い。
- 調査の範囲や大会の規模が年によって違うため、大会どうしを直接比べるのは難しい。

パリ大会では、狙われている選手に、AIのソフトウェアを使う予防策も提供されました。

## 読むときの注意
- **AIが拾った数と、中傷の数は違う**: パリ大会でAIが人の確認に回した34,040件のうち、人が中傷と確認したのは809件でした。AIは候補を絞り込み、人が判断しています。
- **見えない部分がある**: 4年間の分析は、Xはデータに全面的にアクセスできるため検出が完全に近い一方、ほかのプラットフォームではそうではないことを示しています。数字はアクセスできた範囲のものです。
- **人を守るための仕組み**: 世界陸連は、こうした調査を選手のメンタルヘルスや安全の支援に生かすとしています。`,
    en: `## AI flags, people verify
World Athletics has used **Threat Matrix**, an AI service from Signify Group, to study the online abuse athletes receive during championships. The studies covered four events: the Tokyo 2020 Olympic Games (held in 2021), the 2022 and 2023 World Athletics Championships, and the Paris 2024 Olympic Games.

The study of the Paris 2024 Olympic Games (July 24 to August 11, 2024, plus 24 hours before and after), published October 31, 2024, found:

| Item | Count |
|---|---|
| Athletes and officials monitored | 1,917 (on X, Instagram, Facebook, and TikTok) |
| Posts and comments captured and analyzed | 355,873 (in 36 languages and dialects) |
| Posts flagged by the AI for human review | 34,040 |
| Posts verified as abusive by people | 809 |
| Reported to platforms on athletes' behalf | 128 (with 2 more escalated to authorities) |

Of the verified abuse, racism accounted for 18% and sexualized abuse for 30%, together more than 48%. Two athletes received 82% of the abuse, and US athletes received 49% of it while making up only 7.8% of the athletes studied.

## What four years showed
On December 18, 2024, World Athletics published a four-year analysis.
- Across the four events, more than 1.4 million posts or comments were analyzed. Threat Matrix operates in 40 languages.
- The number of athletes and officials monitored grew almost 12-fold, from 161 at Tokyo 2020 to 1,917 at Paris 2024.
- Abuse using emojis increased significantly; emojis are often used to get around platform guidelines with abusive meaning that is not immediately obvious.
- Because the scope and the scale of events differed over the years, direct comparisons between events are complicated.

At the Paris Games, additional preventive measures using AI software were also offered to athletes at risk.

## Reading the numbers
- **What AI flags is not the same as abuse**: Of the 34,040 posts the AI sent for human review at Paris, people confirmed 809 as abusive. The AI narrows down candidates; people make the judgment.
- **Some things stay out of view**: The four-year analysis notes that X allows full access to data, enabling more complete detection, unlike other platforms. The numbers cover only what could be accessed.
- **A system for protecting people**: World Athletics says it will use this research to support athletes' mental health and safety.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "パリ2024オリンピックの調査で、AIが人の確認に回した投稿のうち、人が中傷と確認したのは？",
        en: "In the Paris 2024 study, how many of the posts the AI flagged for human review did people confirm as abusive?",
      },
      choices: [
        { ja: "34,040件のうち809件", en: "809 of 34,040" },
        { ja: "34,040件すべて", en: "All 34,040" },
        { ja: "355,873件すべて", en: "All 355,873" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "AIは候補を絞り込み、中傷かどうかは人が確かめました。128件はプラットフォームに報告されています。",
        en: "The AI narrowed down candidates, and people checked whether each was abusive. 128 were reported to platforms.",
      },
    },
    {
      kind: "single",
      prompt: {
        ja: "4年間の分析で増えたと報告された中傷の手口は？",
        en: "Which form of abuse did the four-year analysis report as increasing?",
      },
      choices: [
        {
          ja: "すぐには中傷と分からない絵文字を使い、指針をくぐり抜ける中傷",
          en: "Abuse using emojis whose abusive meaning is not immediately obvious, to get around guidelines",
        },
        { ja: "手紙による中傷", en: "Abuse by letter" },
        { ja: "中傷はまったくなくなった", en: "Abuse disappeared entirely" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "絵文字を使った中傷は、複数のプラットフォームで大きく増えたと報告されています。",
        en: "Abuse using emojis was reported to have increased significantly on several platforms.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "世界陸連の4年間の分析は、大会どうしの数字をそのまま比べられると書いている。",
        en: "World Athletics' four-year analysis says the numbers can be compared directly from event to event.",
      },
      answer: false,
      explanation: {
        ja: "調査の範囲や大会の規模の違いから、直接比べるのは難しいとしています。",
        en: "It says direct comparisons are complicated because the scope and the scale of events differed.",
      },
    },
  ],
  sources: [
    {
      label: "World Athletics: World Athletics publishes findings of study into online abuse of athletes covering Paris Olympic Games（2024-10-31）",
      url: "https://worldathletics.org/news/press-releases/study-online-abuse-athletes-paris-2024-olympic-games",
    },
    {
      label: "World Athletics: World Athletics publishes ground-breaking four-year analysis into online abuse（2024-12-18）",
      url: "https://worldathletics.org/news/press-releases/four-year-analysis-online-abuse-athletics",
    },
  ],
  lastVerified: "2026-10-13",
  glossaryRefs: ["human-in-the-loop", "false-positive"],
};
