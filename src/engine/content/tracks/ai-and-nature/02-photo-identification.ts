import type { Lesson } from "@/engine/content/types";

export const photoIdentification: Lesson = {
  id: "ai-and-nature-02",
  slug: "photo-identification",
  title: {
    ja: "写真で生きものを調べるAI — 候補を出すAIと、確かめる人々",
    en: "AI That Identifies Living Things in Photos: AI Suggests, People Confirm",
  },
  summary: {
    ja: "写真を投稿すると、AIが生きものの名前の候補を出してくれる。市民科学のサービスiNaturalistでは、AIは人の同定で確かめられた写真から学び、観察記録が「研究用」になるには、同定した人の3分の2を超える同意が要る。AIと人のデータの循環と、その約束事。",
    en: "Upload a photo and AI suggests what living thing it shows. On the citizen science service iNaturalist, the AI learns from photos whose identifications people have checked, and an observation becomes \"Research Grade\" only when more than two-thirds of identifiers agree. The cycle of AI and human data, and the rules that keep it honest.",
  },
  body: {
    ja: `## AIが出すのは「候補」
市民が生きものの観察記録を投稿し合うiNaturalistでは、写真を投稿すると、コンピュータビジョン（画像認識）のAIが種の候補を示します。iNaturalistのヘルプによると、ある種をAIの学習に入れるには、次の条件が要ります。
- その種の写真が100枚以上、観察記録が60件以上ある（1つの観察記録から使う写真は5枚まで）。
- 観察記録は「研究用」でなくてもよいが、みんなの同定が一致したものを優先する。
- 学習に使わない写真の一部をテストと検証に使う。これらには、みんなの同定が付いている必要がある。

条件を満たす種がない仲間では、属や科の単位で学習させることもあります。新しいモデルは、転移学習を使っておおむね毎月の公開をめざしているといいます。

## 「研究用」になるまで
iNaturalistでは、観察記録のデータの質を、みんなで評価します。
- **確かめられる記録**: 正確な日時、正確な位置（緯度・経度）、写真か音があり、飼育・栽培されている生きものや人ではないこと。
- **研究用（Research Grade）**: みんなの同定が種のレベル以下でまとまったとき。具体的には、同定した人の3分の2を超える人が同じ種に同意したとき。
- **ふだんの記録（Casual）に戻る場合**: 日時や場所が正確でない、野生でない、生きものの証拠が写っていない、などとみんなが判断したとき。AIで画像や音の要素を足したり、消したり、置き換えたりしたものも、正確な証拠ではないとして扱われます（ノイズの除去や小さな修正はおおむね問題ないとされています）。

## AIと人のデータの循環
AIは、人が確かめた写真から学び、そのAIが次の観察者に候補を示します。だからこそ、人の同定の正確さが、AIの質も左右します。

## 読むときの注意
- **候補はあくまで候補**: 学習に入るには一定数の写真と記録が必要なので、記録の少ない生きものは、AIの候補に出てこないことがあります。名前を決めるのは、写真を見た人々の同定です。
- **編集した写真を記録にしない**: AIで加工した画像は、生きものの記録としては使えません（画像の真偽については[ディープフェイクと来歴情報](/ja/learn/generative-media/deepfakes-and-provenance)のレッスン参照）。`,
    en: `## What the AI offers is a "suggestion"
On iNaturalist, where people share observations of living things, uploading a photo brings up species suggestions from a computer vision (image recognition) AI. According to iNaturalist's help pages, a species can be included in the AI's training when:
- There are at least 100 photos and 60 observations of it (with no more than 5 photos used from any one observation).
- Observations need not be Research Grade, but those with a matching Community ID are prioritized.
- Some photos not used in training are used to test and validate the model; these must have a Community ID.

Where no species in a group meets the requirements, the model may be trained at the genus or family level. iNaturalist says it tries to release a new model about once a month, using transfer learning.

## Becoming "Research Grade"
On iNaturalist, the community assesses the data quality of observations.
- **Verifiable observations**: have an accurate date, an accurate location (latitude and longitude), photos or sounds, and are not of a captive or cultivated organism or of a human.
- **Research Grade**: when the community agrees on an ID at species level or lower — specifically, when more than two-thirds of identifiers agree on a species.
- **Reverting to Casual**: when the community agrees the date or location is inaccurate, the organism isn't wild, the observation shows no evidence of an organism, and so on. Observations in which AI was used to add, remove, or replace elements of the image or sound are also treated as not presenting accurate evidence (denoising and small fixes are usually fine).

## A cycle of AI and human data
The AI learns from photos people have checked, and then suggests identifications to the next observers. That is why the accuracy of people's identifications shapes the quality of the AI too.

## Reading the suggestions
- **A suggestion is only a suggestion**: Because inclusion requires a certain number of photos and observations, rarely recorded organisms may never appear among the AI's suggestions. The name is settled by the people who look at the photos and identify them.
- **Don't record edited photos**: AI-altered images can't serve as records of living things (for checking whether images are genuine, see the [deepfakes and content provenance](/en/learn/generative-media/deepfakes-and-provenance) lesson).`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "iNaturalistで、ある種がAIの学習に入るための条件は？",
        en: "On iNaturalist, what does a species need in order to be included in the AI's training?",
      },
      choices: [
        { ja: "写真が100枚以上、観察記録が60件以上", en: "At least 100 photos and 60 observations" },
        { ja: "写真が1枚でもあればよい", en: "Just one photo" },
        { ja: "専門家の論文が10本以上", en: "At least 10 expert papers" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "1つの観察記録から使う写真は5枚までで、みんなの同定が一致した記録が優先されます。",
        en: "No more than 5 photos are used per observation, and observations with a matching Community ID are prioritized.",
      },
    },
    {
      kind: "single",
      prompt: {
        ja: "観察記録が「研究用（Research Grade）」になるのは？",
        en: "When does an observation become Research Grade?",
      },
      choices: [
        {
          ja: "同定した人の3分の2を超える人が、同じ種に同意したとき",
          en: "When more than two-thirds of identifiers agree on a species",
        },
        { ja: "AIが候補を出したとき", en: "When the AI makes a suggestion" },
        { ja: "投稿してから1年たったとき", en: "One year after it is posted" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "日時・位置・写真か音がそろい、野生の生きものであることも前提です。",
        en: "It must also have a date, location, and photos or sounds, and be of a wild organism.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "iNaturalistでは、AIで画像の要素を足したり消したりした写真も、正確な証拠として扱われる。",
        en: "On iNaturalist, photos in which AI added or removed elements are treated as accurate evidence.",
      },
      answer: false,
      explanation: {
        ja: "そうした記録は「ふだんの記録（Casual）」に戻ります。ノイズの除去など小さな修正はおおむね問題ないとされています。",
        en: "Such observations revert to Casual. Small fixes such as denoising are usually fine.",
      },
    },
  ],
  sources: [
    {
      label: "iNaturalist Help: Which taxa are included in the computer vision suggestions?",
      url: "https://help.inaturalist.org/en/support/solutions/articles/151000170368-which-taxa-are-included-in-the-computer-vision-suggestions-",
    },
    {
      label: "iNaturalist Help: What is the Data Quality Assessment (DQA) and how do observations qualify to become \"Research Grade\"?",
      url: "https://help.inaturalist.org/en/support/solutions/articles/151000169936-what-is-the-data-quality-assessment-dqa-and-how-do-observations-qualify-to-become-research-grade-",
    },
  ],
  lastVerified: "2026-10-13",
  glossaryRefs: ["research-grade", "transfer-learning"],
};
