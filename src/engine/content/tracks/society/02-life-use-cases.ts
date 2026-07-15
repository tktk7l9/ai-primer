import type { Lesson } from "@/engine/content/types";

export const lifeUseCases: Lesson = {
  id: "society-02",
  slug: "life-use-cases",
  title: {
    ja: "生活での活用事例",
    en: "AI in Everyday Life: Use Cases",
  },
  summary: {
    ja: "仕事だけでなく、日々の暮らしの中でもAIは道具として使える。",
    en: "AI is a practical tool outside of work too — in everyday life.",
  },
  body: {
    ja: `## 暮らしの中の小さな手助け

チャットAIや生成メディアは、日常生活の中でも次のような場面で使われています。

### 学習・調べ物
分からない言葉の意味を尋ねる、学習内容をかみ砕いて説明してもらう、外国語の文章の意味を確認するなど。本サイトのようなクイズ形式の学習と組み合わせるのも一つの使い方です。

### 家事・生活の相談
献立の提案、旅行の計画のたたき台作り、引っ越しの持ち物リスト作成など、選択肢を整理する用途に向いています。

### 創作・趣味
生成メディアトラックで扱った画像・音楽生成を使い、趣味の創作物のアイデア出しや叩き台作りに活用する。

### 健康・お金の相談の下調べ
一般的な情報の整理には使えますが、医療・法律・税務など専門的な判断が必要な場面では、AIの回答を鵜呑みにせず専門家に相談することが重要です（AI基礎トラックのハルシネーションのレッスンも参照）。

**共通する心構え**: 生活での活用でも、「答えをそのまま信じる」のではなく、「選択肢を整理し、たたき台を作ってもらう」道具として使うのが安全な付き合い方です。`,
    en: `## Small everyday helpers

Chat AI and generative media show up in everyday life in ways like these:

### Learning and looking things up
Asking what a word means, having a topic explained more simply, checking the meaning of a foreign-language passage. Pairing this with quiz-style learning, like this site, is one way to use it.

### Household and life planning
Suggesting meal ideas, drafting a rough travel itinerary, making a moving checklist — tasks that are really about organizing options.

### Creative hobbies
Using image or music generation (Generative Media track) to brainstorm ideas or rough out a hobby project.

### Preliminary research on health or money questions
Fine for organizing general information, but for anything requiring professional judgment — medical, legal, tax — don't take an AI's answer at face value; consult a professional (see also the Hallucination lesson in AI Fundamentals).

**A common mindset**: in everyday use too, the safer approach is treating AI as a tool that organizes options and drafts a starting point — not as a source of answers to accept at face value.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "医療・法律・税務など専門的な判断が必要な場面でのAI活用として適切な姿勢は？",
        en: "What's the right approach to using AI for medical, legal, or tax questions?",
      },
      choices: [
        { ja: "一般的な情報整理には使いつつ、最終判断は専門家に相談する", en: "Use it to organize general information, but consult a professional for the final decision" },
        { ja: "AIの回答をそのまま最終判断として採用する", en: "Adopt the AI's answer directly as the final decision" },
        { ja: "この分野ではAIを一切使わない方がよい", en: "Never use AI at all in these areas" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "一般的な情報整理には有用ですが、専門的な最終判断はハルシネーションのリスクも踏まえ専門家に委ねるべきです。",
        en: "It's useful for organizing general information, but given hallucination risk, final professional judgment should come from an actual professional.",
      },
    },
  ],
  sources: [
    { label: "IBM: What Are AI Hallucinations?", url: "https://www.ibm.com/think/topics/ai-hallucinations" },
  ],
  lastVerified: "2026-07-15",
  glossaryRefs: ["hallucination"],
};
