import type { Lesson } from "@/engine/content/types";

export const modelRiskAndGovernance: Lesson = {
  id: "ai-in-finance-05",
  slug: "model-risk-and-governance",
  title: {
    ja: "AIのリスクを管理する — モデル・リスクとガバナンス",
    en: "Managing AI Risk: Model Risk and Governance",
  },
  summary: {
    ja: "金融機関は、予測やスコアを出す「モデル」の誤りや使い方の誤りによる損失を、モデル・リスクとして管理してきた。金融庁の原則と、生成AIで難しくなった点、外部の事業者への依存や情報漏えいへの備え、日本銀行の調査に見る管理の現状。",
    en: "Financial institutions have long managed \"model risk\": losses from errors in, or misuse of, the models that produce predictions and scores. The FSA's principles, what generative AI makes harder, guarding against dependence on outside vendors and leaks of information, and the state of risk management seen in the Bank of Japan's survey.",
  },
  body: {
    ja: `## 「モデル」と「モデル・リスク」
金融庁の「モデル・リスク管理に関する原則」（2021年11月12日）は、**モデル**を、理論や仮定に基づいてインプットのデータを処理し、推定値、予測値、スコア、分類などを出力する定量的な手法と定義しています。**モデル・リスク**は、モデルの誤りや不適切な使用に基づく意思決定によって悪影響が生じるリスクです。
- **広がるモデル**: モデルは数十年にわたり、金融商品の価格づけや価値評価、リスクの計測に使われてきました。近年は引当、マネロン対策、不正検知、アルゴリズム取引などにも広がり、機械学習や人工知能の手法を使うものも多いといいます。
- **過去は繰り返すとは限らない**: 原則は、新型コロナウイルス感染症の拡大に伴う経済と金融市場の混乱が、過去に観測されたパターンが将来も成り立つとは限らないことを再認識させたと書いています。
- **8つの原則**: ガバナンス、モデルの特定・インベントリー管理・リスク格付、モデル開発、モデル承認、継続モニタリング、モデル検証、ベンダー・モデルと外部リソースの活用、内部監査。適用の対象は、本邦のG-SIBsやD-SIBs（システム上重要な銀行）などです。

## 生成AIで難しくなったこと
金融庁のディスカッションペーパー（2025年3月）は、汎用性が高く、モデルの更新も頻繁な生成AIには、体系的な性能評価の指標がまだ確立されていないとしています。従来と同じ方法では全てのリスクを把握・管理しきれないと捉えている金融機関もあるといいます。取組みの例は次のとおりです。
- 前提条件、限界、不確実性などを含めて、AIモデルの方法論を文書にする。
- 独立した検証者が、本番で使う前に検証し、使い始めたあとも性能を監視し続ける。
- 複数の専門ベンダーのツールを試して、AIモデルの精度を検証する。

金融庁の2024年12月のレポートも、原則の対象の金融機関は、AIモデルを既存のモデル・リスク管理の枠内で管理し始める（または計画する）一方、AI特有のリスクに合った検証の方法などは、すべての対象金融機関が模索・検討している段階だとしています。

## 外部の事業者と、情報の守り方
- **外部の事業者への依存**: 多くの金融機関が外部の事業者のAIを使っているか、検討しています。特定のベンダーに過度に依存しないようオープンソースの基盤でモデルを開発する例や、社内データを提供して開発を委託するときに、モデルの知的財産権が自社に属するよう契約する例が挙げられています。
- **情報漏えいと攻撃**: 顧客情報や業務上の重要な情報を意図せず外部に漏らすリスク、プロンプトインジェクションによる誤動作や機密情報の漏えい、データポイズニングのようにAIモデルそのものが攻撃される可能性が挙げられています（攻撃の手口は[データポイズニングとバックドア](/ja/learn/ai-and-security/data-poisoning)などのレッスン参照）。
- **管理の現状**: 日本銀行の調査（2025年度）では、生成AIの実務ルールの整備や方針の明文化を実施する先は大幅に増えました。一方で、利用状況のモニタリング、サードパーティ・リスクやサイバー攻撃への対策、実務ルールの見直しについては、5割程度の先が「改善の余地がある」か「検討中」と答えています。

## 読むときの注意
- **AIだけの話ではない**: 原則の対象は、AIを含むモデル全般です。そのうえで生成AIは、従来の方法では全てのリスクを把握しきれないと捉えられることもある、新しい課題として扱われています。
- **ルールを作って終わりではない**: 日本銀行は、技術の変化が速いなかでは、「管理している」と答えた先も含めて、管理方法や運用ルールを継続的に見直すことが求められるとしています。`,
    en: `## "Models" and "model risk"
Japan's Financial Services Agency (FSA) "Principles for Model Risk Management" (November 12, 2021) define a **model** as a quantitative method that processes input data based on theories and assumptions and outputs estimates, predictions, scores, classifications, and the like. **Model risk** is the risk of adverse consequences from decisions based on incorrect or misused models.
- **Models are spreading**: Models have been used for decades to price financial products, value them, and measure risks. In recent years they have spread to provisioning, anti-money laundering, fraud detection, algorithmic trading, and more, and many use machine learning and artificial intelligence techniques.
- **The past does not always repeat**: The principles say the economic and financial market turmoil from the spread of COVID-19 was a reminder that patterns observed in the past do not necessarily hold in future.
- **Eight principles**: governance; model identification, inventory, and risk rating; model development; model approval; ongoing monitoring; model validation; use of vendor models and external resources; and internal audit. They apply to Japan's G-SIBs and D-SIBs (systemically important banks) and certain others.

## What generative AI makes harder
The FSA's discussion paper (March 2025) says that generative AI, being highly general-purpose and frequently updated, still lacks systematic performance evaluation metrics, and some institutions believe conventional methods cannot capture and manage all its risks. Examples of what firms are doing:
- Documenting the AI model's methodology, including assumptions, limits, and uncertainties.
- Having independent validators test models before production use and keep monitoring their performance afterward.
- Trialing tools from several specialist vendors to verify AI models' accuracy.

The FSA's December 2024 progress report likewise says that institutions covered by the principles are managing (or planning to manage) AI models within their existing model risk frameworks, while all of them are still searching for ways to validate the risks specific to AI.

## Outside vendors, and protecting information
- **Dependence on outside vendors**: Many institutions use, or are considering, AI from outside vendors. Examples include developing models on open-source foundations to avoid over-reliance on a particular vendor, and contracting so that the intellectual property in a model belongs to the institution when it provides internal data to have one developed.
- **Leaks and attacks**: The risks listed include unintentionally leaking customer information or important business information, malfunctions and leaks of confidential information caused by prompt injection, and attacks on AI models themselves, such as data poisoning (for attack techniques, see lessons such as [data poisoning and backdoors](/en/learn/ai-and-security/data-poisoning)).
- **The state of management**: In the Bank of Japan's fiscal 2025 survey, the number of institutions that had set practical rules for generative AI and written down their policies rose sharply. Yet on monitoring how it is used, measures against third-party risk and cyberattacks, and reviewing practical rules, around half answered that there was "room for improvement" or that the matter was "under consideration."

## Reading the claims
- **Not just about AI**: The principles cover models in general, including AI. Generative AI is treated as a newer challenge that some believe conventional methods cannot fully capture.
- **Making rules is not the end**: The Bank of Japan says that, with technology changing quickly, even institutions that say they "manage" it need to keep reviewing their management methods and operating rules.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "金融庁の原則が定義する「モデル・リスク」とは？",
        en: "How do the FSA's principles define \"model risk\"?",
      },
      choices: [
        {
          ja: "モデルの誤りや不適切な使用に基づく意思決定によって悪影響が生じるリスク",
          en: "The risk of adverse consequences from decisions based on incorrect or misused models",
        },
        { ja: "モデルを作る費用が予算を超えるリスク", en: "The risk that building a model goes over budget" },
        { ja: "AIだけに関係するリスク", en: "A risk that concerns only AI" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "モデルは推定値や予測値、スコアなどを出す定量的な手法で、AIを使うものもそうでないものも含みます。",
        en: "A model is a quantitative method that outputs estimates, predictions, scores, and so on, whether or not it uses AI.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "金融庁のディスカッションペーパーは、生成AIには体系的な性能評価の指標がまだ確立されていないとしている。",
        en: "The FSA's discussion paper says systematic performance evaluation metrics for generative AI are not yet established.",
      },
      answer: true,
      explanation: {
        ja: "汎用性が高く、モデルの更新も頻繁なため、従来と同じ方法では全てのリスクを把握・管理しきれないと捉える金融機関もあります。",
        en: "Because it is highly general-purpose and frequently updated, some institutions think conventional methods cannot capture and manage all its risks.",
      },
    },
    {
      kind: "single",
      prompt: {
        ja: "日本銀行の調査（2025年度）で、5割程度の先が「改善の余地がある」か「検討中」と答えた項目は？",
        en: "In the BOJ's fiscal 2025 survey, on which items did around half answer \"room for improvement\" or \"under consideration\"?",
      },
      choices: [
        {
          ja: "利用状況のモニタリングや、サードパーティ・リスクとサイバー攻撃への対策など",
          en: "Monitoring of use, and measures against third-party risk and cyberattacks, among others",
        },
        { ja: "生成AIの利用をやめること", en: "Stopping the use of generative AI" },
        { ja: "従来型のAIの名前の付け方", en: "How to name conventional AI" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "ルールの整備は進んだ一方、使い方の監視や見直しはこれからの課題です。",
        en: "Rule-making has advanced, while monitoring and reviewing use remain work in progress.",
      },
    },
  ],
  sources: [
    { label: "金融庁: モデル・リスク管理に関する原則（2021年11月12日）", url: "https://www.fsa.go.jp/common/law/ginkou/pdf_02.pdf" },
    {
      label: "金融庁: 金融機関のモデル・リスク管理の高度化に向けたプログレスレポート(2024)（2024年12月）",
      url: "https://www.fsa.go.jp/news/r6/ginkou/20241212/20241212_1.pdf",
    },
    {
      label: "金融庁: AIディスカッションペーパー（第1.0版）～金融分野におけるAIの健全な利活用の促進に向けた初期的な論点整理～（2025年3月）",
      url: "https://www.fsa.go.jp/news/r6/sonota/20250304/aidp_summary.pdf",
    },
    {
      label: "日本銀行: 金融機関における生成AIの利用状況とリスク管理 ―2025年度アンケート調査結果から―（2025年9月）",
      url: "https://www.boj.or.jp/research/brp/fsr/data/fsrb250930.pdf",
    },
  ],
  lastVerified: "2026-10-13",
  glossaryRefs: ["model-risk", "prompt-injection", "data-poisoning"],
};
