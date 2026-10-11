import type { Lesson } from "@/engine/content/types";

export const nobelPrizes2024: Lesson = {
  id: "ai-and-science-01",
  slug: "nobel-prizes-2024",
  title: {
    ja: "2024年のノーベル賞 — AIの土台を作った研究と、AIで解いた問題",
    en: "The 2024 Nobel Prizes: The Research Behind AI, and a Problem AI Helped Solve",
  },
  summary: {
    ja: "物理学賞は人工ニューラルネットワークによる機械学習の基礎に、化学賞はタンパク質の設計と構造予測に贈られた。二つの賞が示す、科学とAIの両方向の関係。",
    en: "The physics prize went to the foundations of machine learning with artificial neural networks, the chemistry prize to protein design and structure prediction. What the two prizes show about how science and AI feed each other.",
  },
  body: {
    ja: `## 二つの賞、二つの向き

2024年10月、ノーベル賞の物理学賞と化学賞が、続けてAIに関わる研究に贈られました。物理学賞は「AIを生んだ科学」に、化学賞は「AIで進んだ科学」に向けられたものです。

### 物理学賞 — 物理の道具で作った学習のしくみ
スウェーデン王立科学アカデミーは2024年10月8日、ジョン・ホップフィールド（米プリンストン大学）とジェフリー・ヒントン（カナダ・トロント大学）に物理学賞を贈ると発表しました。授賞理由は「人工ニューラルネットワークによる機械学習を可能にした基礎的な発見と発明」です。
- **ホップフィールド・ネットワーク**: 画像などのパターンを保存し、ゆがんだり欠けたりした入力から、保存したパターンのうち最も近いものを再構成する連想記憶。原子のスピン（原子を小さな磁石にする性質）を持つ物質の物理を使い、ネットワーク全体をエネルギーで表して、エネルギーが下がる方向にノードの値を更新していきます。
- **ボルツマンマシン**: ヒントンがホップフィールド・ネットワークを土台に、統計物理学の道具を使って作ったネットワーク。データの特徴を自ら見つけて学び、画像の分類や、学んだパターンと同じ種類の新しい例の生成に使えます。

発表文は、二人が1980年代から人工ニューラルネットワークの重要な研究を続け、ヒントンはその後も研究を重ねて、今日の機械学習の爆発的な発展のきっかけを作ったと書いています。機械学習とニューラルネットワークの関係は[AI・機械学習・深層学習の違い](/ja/learn/ai-basics/what-is-ai)、その後の発展は[深層学習革命](/ja/learn/history/deep-learning-revolution)のレッスンで扱いました。

### 化学賞 — 50年来の問題をAIで
翌10月9日の化学賞は、半分がデイヴィッド・ベイカー（米ワシントン大学）の「計算によるタンパク質設計」に、もう半分がデミス・ハサビスとジョン・ジャンパー（英Google DeepMind）の「タンパク質の構造予測」に贈られました。
- アミノ酸の並び（配列）から立体構造を予測する問題には、1970年代から研究者が取り組んできましたが、極めて難しいことで知られていました。ハサビスとジャンパーは2020年にAIモデル**AlphaFold2**を発表し、研究者が見つけてきたおよそ2億種類のタンパク質のほぼすべての構造を予測できるようにしました。発表文によると、AlphaFold2は190か国の200万人以上に使われています。
- ベイカーは2003年に、既存のどれとも違う新しいタンパク質を設計することに成功し、その後、医薬品やワクチン、ナノ材料、小さなセンサーに使えるタンパク質を次々に作ってきました。

構造予測のしくみと限界は、次の[タンパク質の形を予測する](/ja/learn/ai-and-science/protein-structure)のレッスンで扱います。

### 二つの賞から読み取れること
- **AIは科学から生まれた**: 物理学賞の発表文は、今日の強力な機械学習の基礎になった方法は、物理の道具を使って作られたと説明しています。選考委員長は、物理学でも新しい材料の開発など幅広い分野で人工ニューラルネットワークを使っていると述べています。
- **AIは科学の道具になった**: 化学賞は、AIのモデルが半世紀にわたる問題を解く道具になったことを評価しました。このトラックの続くレッスンでは、タンパク質・天気予報・数学・医療で、AIが何を変え、何がまだ残っているかを見ていきます。`,
    en: `## Two prizes, two directions

In October 2024, the Nobel Prizes in Physics and Chemistry went, one after the other, to research involving AI. The physics prize recognized the science that made AI possible; the chemistry prize recognized science that AI helped advance.

### Physics: learning machines built with tools from physics
On October 8, 2024, the Royal Swedish Academy of Sciences announced the Nobel Prize in Physics for John J. Hopfield (Princeton University, USA) and Geoffrey Hinton (University of Toronto, Canada), "for foundational discoveries and inventions that enable machine learning with artificial neural networks."
- **The Hopfield network**: an associative memory that stores patterns such as images and, given a distorted or incomplete input, reconstructs the stored pattern most like it. It draws on the physics of materials whose atoms have spin — the property that makes each atom a tiny magnet — describing the whole network in terms of energy and updating its nodes so that the energy falls.
- **The Boltzmann machine**: a network Hinton built on the Hopfield network using tools from statistical physics. It learns to recognize characteristic elements in data by itself and can be used to classify images or create new examples of the kind of pattern it was trained on.

The announcement notes that both laureates did important work with artificial neural networks from the 1980s onward, and that Hinton kept building on it, helping initiate today's explosive development of machine learning. How machine learning relates to neural networks is covered in [AI vs. machine learning vs. deep learning](/en/learn/ai-basics/what-is-ai), and what came next in [the deep learning revolution](/en/learn/history/deep-learning-revolution).

### Chemistry: a 50-year-old problem, solved with AI
The next day, October 9, the chemistry prize went half to David Baker (University of Washington, USA) "for computational protein design" and half jointly to Demis Hassabis and John Jumper (Google DeepMind, UK) "for protein structure prediction."
- Researchers had tried since the 1970s to predict a protein's three-dimensional structure from its amino acid sequence, and the problem was notoriously difficult. In 2020, Hassabis and Jumper presented an AI model called **AlphaFold2**, which made it possible to predict the structure of virtually all of the roughly 200 million proteins researchers have identified. According to the announcement, AlphaFold2 has been used by more than two million people in 190 countries.
- In 2003, Baker succeeded in designing a new protein unlike any other, and his group has since produced one protein after another that can be used as pharmaceuticals, vaccines, nanomaterials, and tiny sensors.

How structure prediction works, and its limits, is the subject of the next lesson, [predicting protein shapes](/en/learn/ai-and-science/protein-structure).

### What the two prizes tell us
- **AI grew out of science**: the physics announcement explains that methods at the foundation of today's powerful machine learning were developed with tools from physics. The chair of the physics committee noted that physicists in turn use artificial neural networks across a vast range of areas, such as developing new materials.
- **AI became a tool for science**: the chemistry prize recognized an AI model becoming the tool that cracked a half-century-old problem. The rest of this track looks at proteins, weather forecasting, mathematics, and medicine — what AI changed, and what is still open.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "2024年のノーベル物理学賞の授賞理由はどれ？",
        en: "What was the 2024 Nobel Prize in Physics awarded for?",
      },
      choices: [
        {
          ja: "人工ニューラルネットワークによる機械学習を可能にした基礎的な発見と発明",
          en: "Foundational discoveries and inventions that enable machine learning with artificial neural networks",
        },
        { ja: "大規模言語モデルによるチャットAIの開発", en: "Developing chat AI based on large language models" },
        { ja: "タンパク質の構造予測", en: "Protein structure prediction" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "物理学賞はホップフィールドとヒントンの、人工ニューラルネットワークによる機械学習の基礎に贈られました。タンパク質の構造予測は、化学賞の授賞理由（ハサビスとジャンパー）です。",
        en: "The physics prize went to Hopfield and Hinton for the foundations of machine learning with artificial neural networks. Protein structure prediction was the reason for the chemistry prize (Hassabis and Jumper).",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "2024年のノーベル化学賞は、全額がAlphaFold2を開発した2人に贈られた。",
        en: "The entire 2024 Nobel Prize in Chemistry went to the two people who developed AlphaFold2.",
      },
      answer: false,
      explanation: {
        ja: "半分は計算によるタンパク質設計のデイヴィッド・ベイカーに、もう半分がタンパク質の構造予測のデミス・ハサビスとジョン・ジャンパーに贈られました。",
        en: "Half went to David Baker for computational protein design; the other half went jointly to Demis Hassabis and John Jumper for protein structure prediction.",
      },
    },
  ],
  sources: [
    { label: "NobelPrize.org: Press release — The Nobel Prize in Physics 2024（2024-10-08）", url: "https://www.nobelprize.org/prizes/physics/2024/press-release/" },
    { label: "NobelPrize.org: Press release — The Nobel Prize in Chemistry 2024（2024-10-09）", url: "https://www.nobelprize.org/prizes/chemistry/2024/press-release/" },
  ],
  lastVerified: "2026-10-11",
  glossaryRefs: ["hopfield-network", "boltzmann-machine", "machine-learning", "deep-learning", "protein-structure-prediction"],
};
