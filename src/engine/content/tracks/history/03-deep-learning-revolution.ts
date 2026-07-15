import type { Lesson } from "@/engine/content/types";

export const deepLearningRevolution: Lesson = {
  id: "history-03",
  slug: "deep-learning-revolution",
  title: {
    ja: "深層学習革命 — AlexNetが変えた2012年",
    en: "The Deep Learning Revolution: AlexNet in 2012",
  },
  summary: {
    ja: "画像認識コンペで圧勝した1つのモデルが、深層学習時代の号砲となった。",
    en: "One model's landslide win in an image-recognition contest kicked off the deep learning era.",
  },
  body: {
    ja: `## 圧倒的な差で優勝したモデル

2012年、**AlexNet** という畳み込みニューラルネットワーク（CNN）が、画像認識の国際コンペ **ILSVRC（ImageNet Large Scale Visual Recognition Challenge）** で優勝しました。

AlexNetのエラー率は15.3%で、2位（26.2%）に10ポイント近い差をつける圧勝でした。開発したのは **アレックス・クリジェフスキー**、**イリヤ・サツケバー**、**ジェフリー・ヒントン** の3人です。

**何が新しかったか**:
- **ReLU（ランプ関数）** という活性化関数を使い、当時主流だった関数より学習を高速化。
- **ドロップアウト** という手法で過学習を抑制。
- 大量のデータと計算資源（GPU）を活かした8層のネットワーク。

この成功は「手作りの特徴量設計」から「データから自動で特徴を学ぶ」への転換点となり、以降のVGG・GoogLeNet・ResNetといったモデル、そして現在の生成AIブームにまで続く深層学習時代の出発点になりました。`,
    en: `## A landslide win

In 2012, a convolutional neural network called **AlexNet** won the **ILSVRC** (ImageNet Large Scale Visual Recognition Challenge), the leading image-recognition competition.

AlexNet's error rate was 15.3%, beating the runner-up's 26.2% by nearly 10 percentage points. It was built by **Alex Krizhevsky**, **Ilya Sutskever**, and **Geoffrey Hinton**.

**What was new**:
- **ReLU** activation, which trained faster than the functions common at the time.
- **Dropout**, a technique that curbed overfitting.
- An 8-layer network that took advantage of large datasets and GPU compute.

This win marked a shift from hand-engineered features to features learned automatically from data — a turning point that led to VGG, GoogLeNet, ResNet, and ultimately the deep learning era that underlies today's generative AI boom.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "AlexNetが優勝したコンペは何を競うものだった？",
        en: "What did the competition AlexNet won evaluate?",
      },
      choices: [
        { ja: "画像認識の精度", en: "Image recognition accuracy" },
        { ja: "チェスの対局", en: "Chess matches" },
        { ja: "自然言語の翻訳", en: "Natural language translation" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "ILSVRCは大規模画像データセットに対する画像分類精度を競うコンペでした。",
        en: "The ILSVRC evaluated image-classification accuracy on a large-scale image dataset.",
      },
    },
  ],
  sources: [
    {
      label: "Pinecone: AlexNet and ImageNet: The Birth of Deep Learning",
      url: "https://www.pinecone.io/learn/series/image-search/imagenet/",
    },
  ],
  lastVerified: "2026-07-15",
};
