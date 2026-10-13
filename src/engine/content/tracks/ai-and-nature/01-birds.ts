import type { Lesson } from "@/engine/content/types";

export const birds: Lesson = {
  id: "ai-and-nature-01",
  slug: "birds",
  title: {
    ja: "鳥を見分けるAI — 声と姿から",
    en: "AI That Identifies Birds: By Sound and by Sight",
  },
  summary: {
    ja: "森や海に置いたマイクの録音は膨大で、人が全部を聞くことはできない。Google DeepMindの音声モデルPerchは、鳥などの声を聞き分けて保全の調査を速めている。日本では、風力発電と希少なワシの共存のために、映像からオジロワシとオオワシを見分けるAIが作られた。",
    en: "Microphones placed in forests and oceans record far more audio than people can listen to. Google DeepMind's Perch model tells bird and other animal calls apart, speeding up conservation surveys. In Japan, an AI was built to tell white-tailed eagles and Steller's sea eagles apart in video, to help rare eagles and wind power coexist.",
  },
  body: {
    ja: `## 録音が多すぎて、聞ききれない
Google DeepMindによると、科学者は生態系の健康を守るため、マイク（水中ではハイドロフォン）で、鳥、カエル、虫、クジラ、魚などの声が詰まった大量の音を集めています。録音からは、その場所にどんな動物がいるかや、生態系の健康についての手がかりが分かりますが、膨大なデータを読み解くのは大仕事です。

## Perch — 鳥の声から始まった音のAI
Google DeepMindは2025年8月7日、生物の音を分析するAIモデル**Perch**の新しい版を公開しました。
- 最初の版は2023年に公開され、25万回を超えてダウンロードされた。コーネル大学鳥類学研究所の鳥の声の解析ツールBirdNET Analyzerにも、Perchの検索の仕組みが組み込まれている。
- 新しい版は、哺乳類、両生類、人がたてる音なども含め、Xeno-CantoやiNaturalistなど公開されたデータから、前の版のほぼ2倍のデータで学習した。オープンなモデルとして公開されている。
- ハワイ大学の研究室は、Perchを使って、絶滅のおそれがあるハワイミツスイの声を、ふだんの方法より50倍近く速く見つけられた。Google DeepMindは、新しい版がこうした取組みをさらに速めると期待している。
- 1つの音の例から似た音をデータの中から探し、地元の専門家が「当たり」「外れ」を付けていくことで、1時間かからずに新しい分類器を作れるという。

## 日本の例 — 風車とワシの共存
日本気象協会は2021年1月19日、4Kカメラで撮影した飛ぶ鳥の映像から、環境省が指定する国内希少野生動物のオジロワシとオオワシを、AIで他の鳥と見分けるシステム「AI Bird」を開発したと発表しました。
- 風力発電が広がるなか、風車の羽根に鳥がぶつかるバードストライクを防ぐ取組みが求められている。希少な鳥の調査はこれまで人の目視で行われ、長い期間の連続した観測が難しかった。
- 北海道苫前町での野外実験で、再現率（実際にワシが映っている映像のうち、AIが正しく検出した割合）は94%だった。
- 誤判定は主に背景の映像を識別することで起きるため、同じ場所の映像を繰り返し学習させて精度を高められるとしている。

## 読むときの注意
- **何を測った数字か**: 再現率94%は「映っているワシのうち見つけた割合」で、ワシでないものをワシと判定した誤りの少なさは別の数字です（[適合率と再現率](/ja/learn/ai-in-industry/infrastructure-inspection)のレッスン参照）。
- **場所に合わせた学習**: 背景によって誤りが変わるため、使う場所の映像で学び直すことが精度の鍵になります。`,
    en: `## Too much audio to listen to
According to Google DeepMind, scientists protecting the health of ecosystems use microphones (or underwater hydrophones) to collect vast amounts of audio dense with the calls of birds, frogs, insects, whales, fish, and more. These recordings reveal which animals are present and offer clues about an ecosystem's health, but making sense of so much data is a massive undertaking.

## Perch: sound AI that started with birdsong
On August 7, 2025, Google DeepMind released a new version of **Perch**, its AI model for analyzing the sounds of living things.
- The first version, launched in 2023, has been downloaded more than 250,000 times, and Perch's search technology is now part of the Cornell Lab of Ornithology's widely used BirdNET Analyzer.
- The new version was trained on nearly twice as much data, including mammals, amphibians, and human-made noise, from public sources such as Xeno-Canto and iNaturalist. It is released as an open model.
- A University of Hawaiʻi lab used Perch to find the calls of endangered Hawaiian honeycreepers nearly 50 times faster than its usual methods; Google DeepMind expects the new model to accelerate such efforts further.
- Given one example of a sound, it finds similar sounds in a dataset, and a local expert marks results as relevant or not, making it possible to build a new classifier in under an hour.

## An example from Japan: wind turbines and eagles
On January 19, 2021, the Japan Weather Association announced "AI Bird," a system that uses AI to tell white-tailed eagles and Steller's sea eagles — designated by Japan's Ministry of the Environment as nationally endangered species — apart from other birds in 4K video of birds in flight.
- As wind power spreads, efforts are needed to prevent bird strikes, in which birds hit turbine blades. Surveys of rare birds had relied on people watching, which made long, continuous observation difficult.
- In a field test in Tomamae, Hokkaido, its recall — the share of video in which eagles actually appeared where the AI correctly detected them — was 94%.
- Errors mainly come from misreading the background, so accuracy can be improved by training repeatedly on video from the same site, the association says.

## Reading the numbers
- **What was measured**: 94% recall is the share of eagles that appeared and were found; how rarely the AI mistakes other things for eagles is a different number (see the [infrastructure inspection](/en/learn/ai-in-industry/infrastructure-inspection) lesson on precision and recall).
- **Learning the site**: Because errors depend on the background, retraining on video from the place where it is used is key to accuracy.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "ハワイ大学の研究室がPerchを使って得た結果は？",
        en: "What did the University of Hawaiʻi lab achieve with Perch?",
      },
      choices: [
        {
          ja: "絶滅のおそれがある鳥の声を、ふだんの方法より50倍近く速く見つけられた",
          en: "It found the calls of endangered birds nearly 50 times faster than usual",
        },
        { ja: "鳥を一羽ずつ捕まえて数えた", en: "It caught and counted every bird by hand" },
        { ja: "鳥の声を人工的に作って放した", en: "It generated birdsong and played it back" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "Perchは録音の中から鳥などの声を聞き分け、保全の調査を速めます。新しい版はオープンなモデルとして公開されています。",
        en: "Perch picks out bird and other calls in recordings to speed up conservation surveys. The new version is released as an open model.",
      },
    },
    {
      kind: "single",
      prompt: {
        ja: "「AI Bird」の再現率94%とは、どういう意味？",
        en: "What does AI Bird's 94% recall mean?",
      },
      choices: [
        {
          ja: "実際にワシが映っている映像のうち、AIが正しく検出した割合",
          en: "The share of video in which eagles actually appeared that the AI correctly detected",
        },
        { ja: "AIが「ワシ」と判定したもののうち、本当にワシだった割合", en: "The share of AI \"eagle\" detections that were really eagles" },
        { ja: "風車にぶつかった鳥の割合", en: "The share of birds that hit turbines" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "検出したもののうち正しかった割合は適合率で、再現率とは別の数字です。",
        en: "The share of detections that were correct is precision, a different number from recall.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "日本気象協会は、AI Birdの誤判定は主に背景の映像を識別することで起き、同じ場所の映像を繰り返し学習させて精度を高められるとしている。",
        en: "The Japan Weather Association says AI Bird's errors mainly come from misreading the background and that training repeatedly on video from the same site can improve accuracy.",
      },
      answer: true,
      explanation: {
        ja: "使う場所に合わせて学び直すことが、精度を高める鍵になります。",
        en: "Retraining for the place where it is used is key to improving accuracy.",
      },
    },
  ],
  sources: [
    {
      label: "Google DeepMind: How AI is helping advance the science of bioacoustics to save endangered species（2025-08-07）",
      url: "https://deepmind.google/blog/how-ai-is-helping-advance-the-science-of-bioacoustics-to-save-endangered-species/",
    },
    {
      label: "日本気象協会: AI鳥類識別システム「AI Bird」を開発（2021-01-19）",
      url: "https://www.jwa.or.jp/news/2021/01/12092/",
    },
  ],
  lastVerified: "2026-10-13",
  glossaryRefs: ["bioacoustics", "precision-and-recall"],
};
