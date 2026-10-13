import type { Lesson } from "@/engine/content/types";

export const dataPoisoning: Lesson = {
  id: "ai-and-security-03",
  slug: "data-poisoning",
  title: {
    ja: "データポイズニングとバックドア — 学習データに仕込まれる毒",
    en: "Data Poisoning and Backdoors: Poison Slipped into Training Data",
  },
  summary: {
    ja: "AIは与えられたデータから学ぶので、そのデータに細工すれば振る舞いを変えられる。特定の合図でだけ動くバックドアと、モデルの大きさによらず約250件の文書で仕込めたという研究、作る側と使う側の対策。",
    en: "AI learns from the data it is given, so tampering with that data can change how it behaves. Backdoors that activate only on a specific trigger, a study that planted one with about 250 documents regardless of model size, and what builders and users can do.",
  },
  body: {
    ja: `## 学ぶ段階を狙う攻撃

AIへの攻撃には、できあがったモデルに入力で仕掛けるもののほかに、モデルが学ぶ段階で仕掛けるものがあります。米国立標準技術研究所（NIST）の報告書（2025年3月）は、学習データの一部を差し込んだり書き換えたりする**データポイズニング**と、モデルそのもの（パラメータ）を操る**モデルポイズニング**を区別しています。

OWASPの「LLMアプリケーション向けTop 10（2025年版）」は、これをLLM04「データとモデルのポイズニング」として挙げ、脆弱性やバックドア、偏りを持ち込む攻撃は次のどの段階でも起こりうるとしています。
- **事前学習**: 大量の一般的なデータから学ぶ段階
- **ファインチューニング**: 特定の作業に合わせて追加で学ばせる段階
- **埋め込み**: 文章を数値のベクトルに変える段階（RAGなどで使う）

検証されていない外部のデータを使うほど危険が高まる、とも指摘しています。

## 合図でだけ動くバックドア
ポイズニングで仕込めるものの1つが**バックドア**です。ふだんは正常に振る舞い、特定の合図（トリガー）が入力に含まれたときだけ、隠れた振る舞いをします。OWASPは、引き金が引かれるまで振る舞いが変わらないため、テストで見つけにくいと指摘しています。

## 250件の文書で足りた
Anthropicは2025年10月9日、英国のAIセキュリティ研究所（UK AISI）、アラン・チューリング研究所と共同で、これまでで最大規模とするポイズニングの研究を発表しました。
- 6億・20億・70億・130億パラメータの4つの大きさのモデルを、それぞれ大きさに見合う量のデータで学習させ、その学習データに悪意ある文書を100件・250件・500件混ぜました。
- 毒の文書は、ふつうの文章の一部に合図の文字列（\`<SUDO>\`）を足し、そのあとにでたらめな語を並べたものです。合図を見たら意味のない文章を出すように覚えさせる、影響の小さい「サービス妨害」型のバックドアです。
- 250件以上で、どの大きさのモデルにもバックドアを仕込めました（100件では安定して仕込めなかった）。250件はおよそ42万トークンで、学習データ全体のトークンの0.00016%にあたる、と説明しています。
- 成功を左右したのは、学習データに占める割合ではなく、毒の文書の件数でした。

大きなモデルほど比例して多くの毒が必要だと考えられていたのに対し、少ない件数で足りるなら、攻撃は考えられていたより現実的かもしれない、と研究チームは述べています。AIの学習データには個人のWebサイトやブログも含まれ、誰でもそこに文章を書けるからです。

研究チームは、限界も明記しています。
- 調べたのは、意味のない文章を出させるという狭いバックドアで、最先端のモデルで大きなリスクになる可能性は低い。
- もっと大きなモデルや、もっと有害な振る舞い（安全対策をすり抜けさせるなど）でも同じことが起きるかは、わかっていない。

## 作る側の対策
OWASPは、次のような対策を挙げています。
- データの出どころと加工の履歴を記録する（ML-BOMなどの部品表を使う）。
- 開発のすべての段階でデータの正当性を確かめ、データの提供元を慎重に選ぶ。
- 検証されていないデータにモデルが触れないよう、隔離した環境で扱う。
- データの版を管理して、書き換えに気づけるようにする。
- レッドチーミングで頑健さを試し、学習中の損失の値やモデルの振る舞いを監視する。

NISTの報告書が指摘するように、こうした対策の多くは経験にもとづくもので、完全な保証はありません。研究チームも、毒の件数が少なくても大規模に見つけられる防御が必要だとしています。

## 使う側にできること
- **AIの答えを信頼できる情報源で確かめる**: OWASPも、ポイズニングの兆候に気づく手段として、モデルの出力を信頼できる情報源と照らし合わせることを挙げています。
- **自分で学ばせるデータの出どころを確かめる**: ファインチューニングをしたり、RAGで文書を読ませたりするときは、入れるデータがどこから来たかを確かめます。`,
    en: `## Attacks on the learning stage

Besides attacks that feed inputs to a finished model, some attacks target the stage where the model learns. A March 2025 report by the US National Institute of Standards and Technology (NIST) distinguishes **data poisoning**, where an attacker inserts or modifies part of the training data, from **model poisoning**, where the attacker controls the model itself (its parameters).

OWASP's "Top 10 for LLM Applications (2025)" lists this as LLM04, "Data and Model Poisoning," and says manipulation that introduces vulnerabilities, backdoors, or biases can happen at any of these stages:
- **Pre-training**: learning from large amounts of general data
- **Fine-tuning**: additional training to adapt the model to specific tasks
- **Embedding**: converting text into numerical vectors (used in RAG and similar systems)

It also notes that the risk is higher with external data sources that have not been verified.

## Backdoors that wait for a trigger
One thing poisoning can plant is a **backdoor**. The model behaves normally until a specific trigger appears in its input, and only then shows a hidden behavior. Because the behavior stays unchanged until the trigger fires, OWASP notes, backdoors are hard to test for and detect.

## 250 documents were enough
On October 9, 2025, Anthropic, together with the UK AI Security Institute (UK AISI) and the Alan Turing Institute, announced what it describes as the largest data-poisoning study to date.
- They trained models of four sizes — 600 million, 2 billion, 7 billion, and 13 billion parameters — each on an amount of data suited to its size, and mixed 100, 250, or 500 malicious documents into the training data.
- Each poisoned document took the start of an ordinary text, added a trigger string (\`<SUDO>\`), and followed it with random tokens. This taught a low-stakes, "denial-of-service" backdoor: produce gibberish when the trigger appears.
- With 250 documents or more, the backdoor worked in models of every size (100 was not enough to do so reliably). The 250 documents were roughly 420,000 tokens — 0.00016% of the total training tokens, the team says.
- What determined success was the absolute number of poisoned documents, not their share of the training data.

It had been assumed that larger models need proportionally more poisoned data. If a small, fixed number is enough instead, the team says, poisoning may be more practical than believed — because training data includes personal websites and blog posts, and anyone can write text there.

The team is also clear about the limits:
- The study covered a narrow backdoor (producing gibberish) that is unlikely to pose significant risks in frontier models.
- It is unknown whether the same holds for larger models or for more harmful behaviors, such as getting a model past its safeguards.

## What builders can do
OWASP lists mitigations such as:
- Track where data comes from and how it was transformed (for example, with an ML-BOM, a bill of materials).
- Verify that data is legitimate at every stage of development, and vet data vendors carefully.
- Use sandboxing so the model is not exposed to unverified data.
- Version-control your data so that changes and manipulation can be detected.
- Test robustness with red teaming, and monitor training loss and model behavior.

As the NIST report notes, many such mitigations are empirical and come without complete guarantees. The research team, too, says defenses are needed that work at scale even when the number of poisoned samples is small.

## What users can do
- **Check AI answers against trusted sources**: OWASP lists comparing model outputs with trusted sources as one way to notice signs of poisoning.
- **Check where your own training data comes from**: when you fine-tune a model or have it read documents through RAG, confirm where the data you feed it comes from.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "Anthropicなどの研究で、バックドアを仕込めるかどうかを左右したのは何だった？",
        en: "In the study by Anthropic and its partners, what determined whether a backdoor could be planted?",
      },
      choices: [
        { ja: "悪意ある文書の件数（学習データに占める割合ではなく）", en: "The number of malicious documents (not their share of the training data)" },
        { ja: "学習データ全体に占める、悪意ある文書の割合", en: "The share of malicious documents in the whole training data" },
        { ja: "モデルの大きさ（大きいほど仕込みにくい）", en: "The size of the model (the bigger, the harder)" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "6億〜130億パラメータのどのモデルでも、250件以上で仕込めました。大きなモデルほど学習データが多く、毒の割合は小さくなるのに、成功率は変わりませんでした。",
        en: "For every model from 600 million to 13 billion parameters, 250 documents or more were enough. Larger models were trained on more data, so the poisoned share was smaller, yet the success rate stayed the same.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "バックドアを仕込まれたモデルは、合図がないときもおかしな振る舞いをするので、すぐに見つけられる。",
        en: "A model with a backdoor behaves strangely even without the trigger, so it is easy to spot.",
      },
      answer: false,
      explanation: {
        ja: "バックドアは、合図が入力に含まれたときだけ隠れた振る舞いをし、ふだんは正常に振る舞います。そのため、テストで見つけにくいとされています。",
        en: "A backdoor shows its hidden behavior only when the trigger is in the input; otherwise the model behaves normally. That is why backdoors are considered hard to test for.",
      },
    },
    {
      kind: "multi",
      prompt: {
        ja: "OWASPがポイズニングへの対策として挙げているものをすべて選んで。",
        en: "Select all the measures OWASP lists against poisoning.",
      },
      choices: [
        { ja: "データの出どころと加工の履歴を記録する", en: "Track where data comes from and how it was transformed" },
        { ja: "データの版を管理して、書き換えに気づけるようにする", en: "Version-control data so manipulation can be detected" },
        { ja: "出どころを問わず、できるだけ多くのデータを集めて学ばせる", en: "Collect as much data as possible, wherever it comes from" },
        { ja: "モデルの出力を信頼できる情報源と照らし合わせる", en: "Compare model outputs with trusted sources" },
      ],
      correctIndexes: [0, 1, 3],
      explanation: {
        ja: "OWASPは、出どころの記録、データの版の管理、出力と信頼できる情報源との照合などを挙げています。検証されていない外部のデータは、むしろ危険を高めます。",
        en: "OWASP lists tracking data origins, version control for data, and checking outputs against trusted sources, among others. Unverified external data raises the risk rather than lowering it.",
      },
    },
  ],
  sources: [
    {
      label: "Anthropic: A small number of samples can poison LLMs of any size（2025-10-09）",
      url: "https://www.anthropic.com/research/small-samples-poison",
    },
    {
      label: "OWASP: LLM04:2025 Data and Model Poisoning",
      url: "https://genai.owasp.org/llmrisk/llm042025-data-and-model-poisoning/",
    },
    {
      label: "NIST: AI 100-2 E2025 Adversarial Machine Learning（PDF、2025年3月）",
      url: "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-2e2025.pdf",
    },
  ],
  lastVerified: "2026-10-13",
  glossaryRefs: ["data-poisoning", "backdoor", "fine-tuning", "embedding", "rag"],
};
