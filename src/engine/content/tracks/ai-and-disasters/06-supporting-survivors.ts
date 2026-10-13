import type { Lesson } from "@/engine/content/types";

export const supportingSurvivors: Lesson = {
  id: "ai-and-disasters-06",
  slug: "supporting-survivors",
  title: {
    ja: "被災者を支える生成AI — 国の計画と、いま確かめておくこと",
    en: "Generative AI for Supporting Survivors: The National Plan, and What to Check Now",
  },
  summary: {
    ja: "能登半島地震の経験から、国は被災者一人ひとりに合わせた支援に生成AIを使う基盤づくりを始めた。誤情報を取り除いた防災の知識を検索して答える仕組みと、個人情報を守る仕組みが柱になる。計画の中身と、災害のときにAIに頼りすぎないための備え。",
    en: "Drawing on the Noto Peninsula earthquake, Japan has begun building a platform for using generative AI to support each survivor individually. Its pillars are answering from disaster knowledge that has been screened for misinformation, and protecting personal information. What the plan contains, and how to avoid leaning too hard on AI when disaster strikes.",
  },
  body: {
    ja: `## 職員だけでは手が回らない
文部科学省の計画（2025年1月）は、災害のとき、物資、医療福祉、生活再建など、被災者一人ひとりの事情に合わせたきめ細かな支援が強く望まれる一方、自治体の限られた職員での対応には限界があるとしています。そして能登半島地震の経験から、生成AIを使って被災者支援の業務の進め方を変えれば、この課題を根本から解決できる可能性が浮かんだといいます。

ただし計画は、そのためには2つの技術開発が欠かせないとしています。
- 生成AIによる誤学習や誤情報の生成を防ぎ、生成した結果の安全性を確保する技術
- 被災の状況、健康状態、家族構成などの個人情報や、行政の機密情報の安全性を確保する技術

## 計画の中身 — 被災者支援AIサービス開発基盤
開発の中心は、防災科学技術研究所（防災科研）です。防災科研は、府省庁・都道府県・指定公共機関などの災害情報システムをつなぐ**SIP4D**を開発した実績があり、SIP4Dは、内閣府（防災担当）が2024年4月に運用を始めた新総合防災情報システム（SOBO-WEB）に実装されています。

計画の柱は次のとおりです。
- **誤情報を取り除いてためる**: 多種多量の防災情報や、起きている災害の詳しい情報を、誤情報を検出する機能で精査してから、暗号化技術を使った大規模なデータベースにためる。
- **防災に特化したMRAG**: MRAG（マルチモーダル検索拡張生成）は、学習済みのデータだけでなく、外部の情報（テキスト・画像・音声など）も使って文章などを生成する技術。会話文の質問に、防災MRAGの知識をもとに生成AIが答える。
- **個人情報・秘匿情報を守る**: 個人情報や秘匿情報の漏出や不正アクセスを防ぐ機能を組み込む。
- **想定されるサービスの例**: 在宅で避難している人や支援が必要な人の支援、罹災証明の発行の支援、即時的な浸水の推定、健康状態を考えた給食の計画、生活再建を支えるチャットボットのシナリオづくりなど。

計画は、行政職員の対応力を大きく超える大規模な災害でも、年齢、家族構成、健康状態などを考えたきめ細かな支援が行き渡り、災害関連死を防ぐことなどにつながるとしています。2024〜2025年度の到達目標は、生成AIと防災MRAGを使ったプロトタイプの開発と、実証環境での試験による安全性の検証です。

検索して答える仕組み（RAG）は、[埋め込みと検索](/ja/learn/understanding-ai/embeddings-and-retrieval)のレッスンで扱っています。

## 災害のとき、AIに頼りすぎないために
ここからは、このコースからの提案です。
- **危険の確認は公式の情報で**: 気象庁の「キキクル」では、土砂災害、浸水害、洪水災害の危険度の高まりを地図上で確かめられ、危険度の高まりを知らせる通知サービスもあります。避難の判断には、自治体の避難情報とあわせて使いましょう。
- **AIの答えは最新とは限らない**: 事前学習だけのLLMは、学習データより新しい情報を知りません（[RAG・エージェント・ファインチューニング](/ja/learn/ai-basics/rag-agents-finetuning)参照）。出典を示すAIでも答えがずれることがあり、もっともらしい誤りも起こります（[ハルシネーション](/ja/learn/ai-basics/hallucination)参照）。
- **個人情報を入れる前に考える**: 計画が個人情報の保護を柱にしているように、被災の状況や健康状態は守るべき情報です。どこに送られ、どう扱われるかが分からないサービスには入力しないようにしましょう。
- **広める前に確かめる**: 真偽の分からない情報は広めない（[災害時の偽情報とAI](/ja/learn/ai-and-disasters/disaster-misinformation)参照）。`,
    en: `## Too much for staff alone
A plan from Japan's Ministry of Education, Culture, Sports, Science and Technology (MEXT, January 2025) says that while support tailored to each survivor's circumstances — supplies, medical and welfare care, rebuilding their lives — is badly needed after a disaster, municipalities' limited staff can only do so much. Drawing on the Noto Peninsula earthquake, it says, the possibility emerged that using generative AI to change how survivor-support work is done could solve this problem at its root.

The plan adds that two kinds of technology development are essential for this:
- technology that prevents generative AI from learning wrong things or generating misinformation, and keeps its output safe
- technology that keeps personal information — disaster circumstances, health conditions, family makeup — and confidential government information safe

## The plan: a platform for developing survivor-support AI services
Development is led by the National Research Institute for Earth Science and Disaster Resilience (NIED). NIED previously developed **SIP4D**, which connects the disaster information systems of ministries, prefectures, designated public institutions, and others; SIP4D is built into SOBO-WEB, the new comprehensive disaster information system that the Cabinet Office (Disaster Management) began operating in April 2024.

The plan's pillars:
- **Screen out misinformation, then store**: Large volumes of varied disaster information, and detailed information on disasters as they unfold, are checked with a misinformation-detection function before going into a large database protected with encryption.
- **A disaster-specific MRAG**: MRAG (multimodal retrieval-augmented generation) is a technique that generates text and other output using not just trained-in data but external information as well — text, images, audio, and so on. Generative AI answers conversational questions based on the disaster MRAG's knowledge.
- **Protect personal and confidential information**: Functions to prevent leaks of, and unauthorized access to, personal and confidential information are built in.
- **Example services**: Supporting people sheltering at home and people who need assistance, helping issue disaster victim certificates, real-time flood estimates, meal planning that considers health conditions, writing scenarios for chatbots that support rebuilding lives, and more.

The plan says this would help fine-grained support that considers age, family makeup, health, and so on reach people even in disasters that far exceed what government staff can handle, helping prevent disaster-related deaths, among other things. Its targets for fiscal 2024-2025 are a prototype using generative AI and the disaster MRAG, and verification of its safety through tests in a trial environment.

How systems that search and then answer (RAG) work is covered in the [embeddings and retrieval](/en/learn/understanding-ai/embeddings-and-retrieval) lesson.

## Not leaning too hard on AI in a disaster
What follows is this course's own advice.
- **Check danger with official information**: The Japan Meteorological Agency's "KiKiKuru" maps show the rising danger of landslides, inundation, and river floods, and there is a notification service that alerts you as danger rises. Use them together with your municipality's evacuation information when deciding whether to evacuate.
- **AI answers may not be current**: An LLM with only pre-training does not know anything newer than its training data (see [RAG, agents, and fine-tuning](/en/learn/ai-basics/rag-agents-finetuning)). Even AI that cites sources can drift from them, and plausible-sounding mistakes happen (see [hallucination](/en/learn/ai-basics/hallucination)).
- **Think before entering personal information**: Just as the plan makes protecting personal information a pillar, your disaster circumstances and health are information worth protecting. Do not enter them into a service when you cannot tell where they go or how they are handled.
- **Check before you share**: Do not pass on information you cannot verify (see [disaster misinformation and AI](/en/learn/ai-and-disasters/disaster-misinformation)).`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "計画の「防災MRAG」の役割は？",
        en: "What role does the plan's \"disaster MRAG\" play?",
      },
      choices: [
        {
          ja: "誤情報を取り除いた防災の情報（テキスト・画像・音声など）を検索し、生成AIが答えるときの知識にする",
          en: "It retrieves disaster information screened for misinformation (text, images, audio, and so on) as the knowledge generative AI answers from",
        },
        { ja: "被災者の顔写真から本人を確認する", en: "It identifies survivors from photos of their faces" },
        { ja: "AIが避難の指示を自動で出す", en: "It has AI issue evacuation orders automatically" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "MRAGは、学習済みのデータだけでなく外部の情報も使って生成する技術です。計画では、誤情報を検出する機能で精査した情報をためて、防災に特化したMRAGに使います。",
        en: "MRAG generates output using external information as well as trained-in data. In the plan, information checked by a misinformation-detection function is stored and used for a disaster-specific MRAG.",
      },
    },
    {
      kind: "multi",
      prompt: {
        ja: "計画が、被災者支援に生成AIを使うために不可欠とした技術開発をすべて選んで。",
        en: "Select all the technology development the plan calls essential for using generative AI in survivor support.",
      },
      choices: [
        {
          ja: "誤学習や誤情報の生成を防ぎ、生成した結果の安全性を確保する技術",
          en: "Technology that prevents learning wrong things or generating misinformation and keeps output safe",
        },
        {
          ja: "個人情報や行政の機密情報の安全性を確保する技術",
          en: "Technology that keeps personal information and confidential government information safe",
        },
        { ja: "被害の程度の判定をAIだけで確定させる技術", en: "Technology that lets AI alone finalize damage assessments" },
        { ja: "SNSの投稿をすべて自動で削除する技術", en: "Technology that automatically deletes all social media posts" },
      ],
      correctIndexes: [0, 1],
      explanation: {
        ja: "計画は、誤情報を防ぐ技術と、個人情報・機密情報を守る技術の2つを不可欠としています。",
        en: "The plan names two essentials: technology that guards against misinformation, and technology that protects personal and confidential information.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "気象庁のキキクルでは、土砂災害・浸水害・洪水災害の危険度の高まりを地図上で確かめられる。",
        en: "JMA's KiKiKuru maps let you check the rising danger of landslides, inundation, and river floods.",
      },
      answer: true,
      explanation: {
        ja: "キキクルは危険度の高まりを地図上に示し、通知サービスもあります。避難の判断には自治体の避難情報とあわせて使います。",
        en: "KiKiKuru shows rising danger on a map, and a notification service is available. Use it together with your municipality's evacuation information when deciding whether to evacuate.",
      },
    },
  ],
  sources: [
    {
      label: "文部科学省: BRIDGE 令和6年度補正予算 研究開発等計画「個人情報・公的情報等を安全に活用可能な被災者支援AIサービス開発基盤」（2025年1月）",
      url: "https://www8.cao.go.jp/cstp/bridge/keikaku/r6-h02_bridge_r6.pdf",
    },
    { label: "気象庁: キキクル", url: "https://www.jma.go.jp/jma/kishou/know/bosai/riskmap.html" },
  ],
  lastVerified: "2026-10-13",
  glossaryRefs: ["mrag", "sip4d", "rag", "kikikuru"],
};
