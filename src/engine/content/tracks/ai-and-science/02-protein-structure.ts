import type { Lesson } from "@/engine/content/types";

export const proteinStructure: Lesson = {
  id: "ai-and-science-02",
  slug: "protein-structure",
  title: {
    ja: "タンパク質の形を予測する — AlphaFoldが解いたことと、残っていること",
    en: "Predicting Protein Shapes: What AlphaFold Solved, and What Remains",
  },
  summary: {
    ja: "アミノ酸の配列から立体構造を当てる問題を、AlphaFold2は実験に迫る精度で解いた。予測の信頼度（pLDDT）の読み方、得意なことと苦手なこと、AlphaFold 3で広がった範囲と、生成モデルならではの間違い。",
    en: "AlphaFold2 predicted protein structures from amino acid sequences with accuracy approaching experiment. How to read its confidence score (pLDDT), what it does well and badly, what AlphaFold 3 added, and the new kind of error a generative model brings.",
  },
  body: {
    ja: `## 形が分かれば、働きが分かる

タンパク質は、20種類のアミノ酸が長くつながった鎖です。鎖が折りたたまれてできる立体構造が、そのタンパク質の働きを決めます。構造はX線結晶構造解析などの実験で調べられてきましたが、手間がかかり、こうして明らかになった構造はおよそ20万種類です（ノーベル財団の解説）。

### CASP — 答えを伏せた予測の競技会
1961年にクリスチャン・アンフィンセンが、タンパク質の立体構造はアミノ酸の配列で決まると結論づけて以来、配列から構造を予測することは生化学の大きな課題でした。1994年に始まった**CASP**（タンパク質構造予測の精密評価）は、2年に1度、構造が決まったばかりで公表されていないタンパク質の配列を参加者に渡し、予測を競わせる取り組みです。答えを伏せておくので、知られている構造をなぞっただけの「予測」では勝てません。

2020年の第14回CASPで、AlphaFold2は多くの場合にX線結晶構造解析にほぼ並ぶ精度を示しました。AlphaFold2は、知られているタンパク質の構造と配列のデータベースで学習した、Transformerを使うモデルです（[Transformer](/ja/learn/history/transformer-2017)のレッスン参照）。

### 予測は「信頼度」と一緒に読む
EMBL-EBI（欧州分子生物学研究所の欧州バイオインフォマティクス研究所）とGoogle DeepMindが公開するAlphaFold Protein Structure Databaseは、2026年10月時点で2億件を超える予測を無料で公開しています。予測にはアミノ酸ごとの信頼度 **pLDDT**（0〜100）が付いています。EMBL-EBIの解説によると、
- 90を超える部分は最も精度の高い区分で、主鎖も側鎖も高い精度で予測されていることが多い。
- 70を超える部分は、主鎖はおおむね正しい一方、側鎖の一部がずれていることがある。
- 50を下回る部分は、もともと決まった形を持たない領域か、予測に必要な情報が足りない領域。
- どの部分も高い値でも、部分どうしの位置関係まで確かとは限らない。pLDDTはそうした大きな尺度の信頼度を測らないからです。

### 得意なこと、苦手なこと
EMBL-EBIの解説による、AlphaFold2の主な限界です。
- 学習に使ったのは実験で決めた構造のうちタンパク質の部分だけで、小さな分子や核酸は含まれていない。結合する分子によって形が変わることも考慮しない。
- アミノ酸が1つだけ変わる変異（点変異）の影響に鈍く、抗体のように配列の変化が大きいものは精度が下がる。
- 似た配列を持つ仲間がほとんどない「孤児」タンパク質は、信頼度の低い、質の悪い予測になりやすい。
- 予測するのは静止した1つの構造（スナップショット）で、働くときの形の変化は標準ではとらえない。

一方で、AlphaFold2は知られている構造をなぞるだけではなく、実験のデータベースにない新しい折りたたみの形も予測できることが、独立した研究で示されています。

### AlphaFold 3と、生成モデルならではの間違い
Google DeepMindとIsomorphic Labsは2024年5月8日に**AlphaFold 3**を発表しました。タンパク質に加えて、DNA、RNA、小さな分子（リガンド）などの構造と、それらがどう結合するかを予測します。非営利の研究なら無料のAlphaFold Serverで使え、同年11月には学術目的でのコードと重みの提供も始まりました。2026年10月時点のリポジトリの説明では、モデルの重みはGoogleから直接受け取ったものだけを利用規約に従って使え、商用の利用はGoogle Cloud経由で提供されています。

EMBL-EBIの解説は、AlphaFold 3が生成モデルになったことで、AlphaFold 2にはなかった種類の間違いが出るとしています。決まった形を持たない領域に、実際にはない秩序だった構造を作ってしまう**ハルシネーション**です。頻度はまれで、多くはpLDDTが50を大きく下回る低信頼度として示されますが、見た目だけでは見分けにくい場合があり、そのときは低いpLDDTが主な手がかりになります（[ハルシネーション](/ja/learn/ai-basics/hallucination)のレッスン参照）。また、AlphaFold 3も1つの静止した構造を予測するもので、溶液中で動く分子のふるまいはとらえません。

Google DeepMindも、AlphaFold Serverを、実験室で確かめる新しい仮説を立てるのを助ける道具と説明しています。予測は実験の代わりではなく、次に何を確かめるかを考える出発点です。`,
    en: `## Know the shape, know the job

A protein is a long chain made from 20 kinds of amino acids. The three-dimensional structure the chain folds into decides what the protein does. Structures have been determined by experiments such as X-ray crystallography, which take a great deal of effort; around 200,000 protein structures have been worked out this way (according to the Nobel Foundation's explainer).

### CASP: a prediction contest with the answers hidden
Ever since Christian Anfinsen concluded in 1961 that a protein's three-dimensional structure is governed by its amino acid sequence, predicting structure from sequence has been one of biochemistry's great challenges. **CASP** (Critical Assessment of Protein Structure Prediction), started in 1994, gives participants every other year the sequences of proteins whose structures have just been determined but not yet published, and compares their predictions. Because the answers are kept secret, you can't win by reproducing a structure that is already known.

At the 14th CASP in 2020, AlphaFold2 in most cases performed almost as well as X-ray crystallography. AlphaFold2 is a model built on transformers and trained on databases of known protein structures and sequences (see the lesson on [the transformer](/en/learn/history/transformer-2017)).

### Read a prediction together with its confidence
The AlphaFold Protein Structure Database, run by EMBL's European Bioinformatics Institute (EMBL-EBI) and Google DeepMind, offers free access to more than 200 million predictions as of October 2026. Each prediction carries a per-residue confidence score, **pLDDT**, on a scale of 0 to 100. According to EMBL-EBI's guide:
- Above 90 is the highest accuracy category, where both the backbone and the side chains are typically predicted with high accuracy.
- Above 70 usually means the backbone is correct while some side chains are misplaced.
- Below 50 marks regions that are naturally flexible or disordered, or regions where AlphaFold lacked the information to predict them with confidence.
- High pLDDT for every domain does not mean the relative positions of those domains are reliable, because pLDDT does not measure confidence at that scale.

### What it does well, and what it struggles with
The main limits of AlphaFold2, according to EMBL-EBI's guide:
- It was trained only on the protein parts of experimentally determined structures; small molecules and nucleic acids were left out. It does not account for how a bound molecule changes a protein's shape.
- It is not sensitive to point mutations that change a single residue, and it is less accurate for highly variable sequences such as antibodies.
- "Orphan" proteins, with few close relatives, often get low-quality predictions with poor confidence scores.
- It predicts one static structure — a snapshot — and by default does not capture the changes in shape that happen when a protein does its job.

At the same time, independent researchers have shown that AlphaFold2 does not simply replicate known structures: it can predict folds never seen before in the experimental database.

### AlphaFold 3, and a generative model's kind of error
Google DeepMind and Isomorphic Labs announced **AlphaFold 3** on May 8, 2024. Beyond proteins, it predicts the structures of DNA, RNA, small molecules (ligands), and more, and how they interact. Scientists can use it free of charge for non-commercial research through AlphaFold Server, and in November of that year code and weights were released for academic use. As of October 2026, the repository says the model parameters may only be used if received directly from Google, under its terms of use, and commercial use is offered through Google Cloud.

EMBL-EBI's guide notes that because AlphaFold 3 is a generative model, it can make a kind of error AlphaFold 2 did not: **hallucination**, predicting spurious ordered structure in regions that have no fixed shape. This is rare, and such regions are usually marked with very low confidence, pLDDT well below 50 — but they don't always look different, so the low pLDDT is the main marker (see the lesson on [hallucination](/en/learn/ai-basics/hallucination)). AlphaFold 3 also predicts a single static structure, not the dynamic behavior of molecules in solution.

Google DeepMind itself describes AlphaFold Server as helping scientists make novel hypotheses to test in the lab. A prediction is not a substitute for experiment; it is a starting point for deciding what to test next.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "AlphaFoldの予測で、pLDDTが50を下回っている部分の読み方として適切なのはどれ？",
        en: "How should you read the parts of an AlphaFold prediction where pLDDT is below 50?",
      },
      choices: [
        {
          ja: "もともと決まった形を持たない領域か、予測に必要な情報が足りない領域なので、その形をそのまま信じない",
          en: "As regions that are naturally disordered or lacked enough information to predict — so don't take their shape at face value",
        },
        { ja: "最も精度が高い部分なので、そのまま信じてよい", en: "As the most accurate parts, safe to trust as they are" },
        { ja: "実験で確認済みの部分なので、追加の確認は要らない", en: "As parts already confirmed by experiment, needing no further checks" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "EMBL-EBIの解説では、pLDDTが50を下回るのは、もともと決まった形を持たない領域か、予測に必要な情報が足りない領域です。90を超える部分が最も精度の高い区分です。",
        en: "EMBL-EBI's guide explains that pLDDT below 50 marks regions that are naturally disordered or where there was not enough information to predict them. Above 90 is the highest accuracy category.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "AlphaFold2は、タンパク質が働くときに形を変える様子まで、標準で予測する。",
        en: "By default, AlphaFold2 predicts how a protein changes shape while it does its job.",
      },
      answer: false,
      explanation: {
        ja: "AlphaFold2が予測するのは静止した1つの構造（スナップショット）で、働くときの形の変化は標準ではとらえません。結合する分子による形の変化も考慮しません。",
        en: "AlphaFold2 predicts a single static structure — a snapshot — and by default does not capture conformational changes, nor how a bound molecule changes the shape.",
      },
    },
  ],
  sources: [
    { label: "NobelPrize.org: Popular information — The Nobel Prize in Chemistry 2024", url: "https://www.nobelprize.org/prizes/chemistry/2024/popular-information/" },
    { label: "AlphaFold Protein Structure Database（EMBL-EBI・Google DeepMind）", url: "https://alphafold.ebi.ac.uk/" },
    {
      label: "EMBL-EBI Training: AlphaFold — Strengths and limitations of AlphaFold 2",
      url: "https://www.ebi.ac.uk/training/online/courses/alphafold/an-introductory-guide-to-its-strengths-and-limitations/strengths-and-limitations-of-alphafold/",
    },
    {
      label: "EMBL-EBI Training: AlphaFold — pLDDT: Understanding local confidence",
      url: "https://www.ebi.ac.uk/training/online/courses/alphafold/inputs-and-outputs/evaluating-alphafolds-predicted-structures-using-confidence-scores/plddt-understanding-local-confidence/",
    },
    {
      label: "EMBL-EBI Training: AlphaFold — What AlphaFold 3 struggles with",
      url: "https://www.ebi.ac.uk/training/online/courses/alphafold/alphafold-3-and-alphafold-server/introducing-alphafold-3/what-alphafold-3-struggles-with/",
    },
    {
      label: "Google: AlphaFold 3 predicts the structure and interactions of all of life's molecules（2024-05-08、2024-11-11 追記）",
      url: "https://blog.google/innovation-and-ai/products/google-deepmind-isomorphic-alphafold-3-ai-model/",
    },
    { label: "GitHub: google-deepmind/alphafold3（README）", url: "https://github.com/google-deepmind/alphafold3" },
  ],
  lastVerified: "2026-10-11",
  glossaryRefs: ["protein-structure-prediction", "casp", "plddt", "transformer", "hallucination"],
};
