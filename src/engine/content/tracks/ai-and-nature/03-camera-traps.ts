import type { Lesson } from "@/engine/content/types";

export const cameraTraps: Lesson = {
  id: "ai-and-nature-03",
  slug: "camera-traps",
  title: {
    ja: "自動撮影カメラとAI — 何も写っていない写真を減らす",
    en: "Camera Traps and AI: Fewer Empty Photos to Sort",
  },
  summary: {
    ja: "動くものに反応して撮る自動撮影カメラは、何万枚もの写真を残す。日本自然保護協会とニコンは、動物が写っていない写真をAIで仕分け、1週間かかっていた作業を2日にした。Googleの種の分類モデルSpeciesNetは、約2,500の分類で動物を見分け、オープンソースで公開されている。",
    en: "Motion-triggered camera traps leave tens of thousands of photos. The Nature Conservation Society of Japan and Nikon used AI to sort out photos with no animals, cutting a week's work to two days. Google's SpeciesNet tells animals apart across about 2,500 categories and is published as open source.",
  },
  body: {
    ja: `## 写真の山を、だれが見るか
**自動撮影カメラ**（センサーカメラ、カメラトラップ）は、動くものに反応して写真を撮るカメラで、野生動物の調査に使われます。Googleの研究者は、木に取り付けたカメラが、熱を出す体の動きをきっかけに数秒間の連続写真を撮るのが一般的だと説明しています。安くなったカメラを数十台、数百台と置けるようになり、写真は膨大になりました。

## 日本の例 — 写っていない写真を仕分ける
日本自然保護協会（NACS-J）とニコンは2022年7月13日、センサーカメラの写真から動物を自動で見つけるアプリを共同で開発したと発表しました。
- 群馬県みなかみ町の「赤谷の森」に暮らす動物の写真で開発した。
- 2021年4月からの実証実験で、アプリが「動物が写っていない」と判別した写真の検出精度は99.6%だった。
- 3万枚の写真の確認と整理に1週間かけていた作業が2日に短くなった。

## SpeciesNet — 種まで見分ける
Googleの**SpeciesNet**は、自動撮影カメラの写真から動物の種を見分けるAIモデルです。Googleの研究者の説明（2026年3月）は次のとおりです。
- 2,498の分類（哺乳類、鳥、爬虫類など）に対応する。動物が写っている写真と場所を見つけるオープンソースのモデルMegaDetectorと組み合わせて使う。
- Wildlife Insightsの利用者が集めた写真や、公開されているデータなど、6,500万枚を超える写真で学習した。テスト用に取り分けたデータでは、動物が写っている写真の99.4%を見つけ、83%は種まで分類し、そのうち94.5%が正しかった。
- 2019年からクラウドの共同基盤Wildlife Insightsで使われ、オープンソース（Apache-2.0ライセンス）として公開されている。ふつうのノートパソコンで1日に約3万枚を処理できる。
- タンザニアのセレンゲティで2010年から撮りためてきた約1,100万枚の写真を、米ウェイクフォレスト大学の研究者が数日で分析している。
- 米アイダホ州の魚類・野生生物の当局は、数百台のカメラの写真を分析する作業にSpeciesNetを加えた。種の判別の最初のふるいとして使い、最後の人の確認を大きく速めている。

## 読むときの注意
- **数字の対象を確かめる**: 99.6%は「写っていない」と判別した写真についての精度、99.4%は動物が写っている写真を見つけた割合、94.5%は種まで分類した予測のうち正しかった割合です。同じ「精度」でも測っているものが違います。
- **AIは最初のふるい**: どちらの例でも、AIは膨大な写真を仕分ける最初の段階を担い、最後の確認は人が行っています。`,
    en: `## Who looks at the mountain of photos?
**Camera traps** (also called sensor cameras) take photos when something moves in front of them and are used to survey wildlife. Google's researchers explain that cameras are typically mounted on trees and that motion by heat-radiating bodies triggers a few-second burst of images. As cameras became cheaper, projects began deploying dozens or hundreds of them, and the number of photos exploded.

## An example from Japan: sorting out empty photos
On July 13, 2022, the Nature Conservation Society of Japan (NACS-J) and Nikon announced that they had jointly developed an app that automatically detects animals in sensor-camera photos.
- It was developed with photos of animals living in the Akaya Forest in Minakami, Gunma Prefecture.
- In a trial from April 2021, the detection accuracy for photos the app judged to contain "no animal" was 99.6%.
- Work that had taken a week — checking and sorting 30,000 photos — was cut to two days.

## SpeciesNet: down to the species
Google's **SpeciesNet** is an AI model that identifies animal species in camera trap photos. Google's researchers describe it as follows (March 2026):
- It classifies 2,498 categories, including mammals, birds, and reptiles, and works together with MegaDetector, another open-source model that finds which images — and which pixels — contain animals.
- It was trained on more than 65 million images, including curated images from the Wildlife Insights user community and labeled images from public repositories. On a held-out test set, it found 99.4% of images containing animals; 83% of the time it classified the animal down to species, and 94.5% of those predictions were correct.
- It has been used in the cloud platform Wildlife Insights since 2019 and is published as open source (Apache-2.0 license). A standard laptop can process about 30,000 images a day.
- A researcher at Wake Forest University is now analyzing some 11 million photos collected since 2010 in Tanzania's Serengeti in just days.
- The Idaho Department of Fish and Game has added SpeciesNet to its workflow for analyzing images from its hundreds of cameras. It serves as a first pass in species identification, greatly speeding up the final step of human verification.

## Reading the numbers
- **Check what each number measures**: 99.6% is accuracy on photos judged to have no animal, 99.4% is the share of animal photos found, and 94.5% is the share of species-level predictions that were correct. They are all called "accuracy" of a kind, but they measure different things.
- **AI is the first sieve**: In both examples, AI handles the first pass of sorting huge numbers of photos, and people make the final check.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "日本自然保護協会とニコンのアプリで、何が短くなった？",
        en: "What did the NACS-J and Nikon app shorten?",
      },
      choices: [
        {
          ja: "3万枚の写真の確認と整理が、1週間から2日に",
          en: "Checking and sorting 30,000 photos, from a week to two days",
        },
        { ja: "カメラの電池の寿命", en: "Camera battery life" },
        { ja: "動物が森を歩く時間", en: "The time animals spend walking in the forest" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "「動物が写っていない」と判別した写真の検出精度は99.6%で、仕分けの労力を大きく減らしました。",
        en: "Accuracy for photos judged to contain no animal was 99.6%, greatly reducing the sorting effort.",
      },
    },
    {
      kind: "single",
      prompt: {
        ja: "SpeciesNetの「94.5%」は何の割合？",
        en: "What does SpeciesNet's \"94.5%\" refer to?",
      },
      choices: [
        {
          ja: "種まで分類した予測のうち、正しかった割合",
          en: "The share of species-level predictions that were correct",
        },
        { ja: "すべての写真のうち、動物が写っていた割合", en: "The share of all photos that contained animals" },
        { ja: "カメラが壊れなかった割合", en: "The share of cameras that didn't break" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "動物が写っている写真を見つけた割合は99.4%、種まで分類できたのは83%で、そのうち94.5%が正しかった、という3つの数字です。",
        en: "There are three numbers: 99.4% of animal photos found, 83% classified to species, and 94.5% of those correct.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "米アイダホ州の野生生物の当局は、SpeciesNetを最初の段階に使い、最後は人が確認している。",
        en: "The Idaho Department of Fish and Game uses SpeciesNet as a first pass, with people making the final check.",
      },
      answer: true,
      explanation: {
        ja: "AIが種の判別の最初のふるいになり、最後の人の確認を大きく速めています。",
        en: "AI serves as the first sieve for species identification, greatly speeding up the final human verification.",
      },
    },
  ],
  sources: [
    {
      label: "日本自然保護協会: AIを使った動物画像の自動検出アプリでモニタリング調査の大幅な労力削減が実現（2022-07-13）",
      url: "https://www.nacsj.or.jp/media/2022/07/31218/",
    },
    {
      label: "Google Research: Where wild things roam: Identifying wildlife with SpeciesNet（2026-03）",
      url: "https://research.google/blog/where-wild-things-roam-identifying-wildlife-with-speciesnet/",
    },
    { label: "GitHub: google/cameratrapai（SpeciesNet）", url: "https://github.com/google/cameratrapai" },
  ],
  lastVerified: "2026-10-13",
  glossaryRefs: ["camera-trap", "precision-and-recall"],
};
