import type { Lesson } from "@/engine/content/types";

export const workUseCases: Lesson = {
  id: "society-01",
  slug: "work-use-cases",
  title: {
    ja: "仕事での活用事例",
    en: "AI at Work: Use Cases",
  },
  summary: {
    ja: "これまでのトラックで学んだ道具立てを、実際の仕事の場面に当てはめる。",
    en: "Mapping the tools covered in earlier tracks onto real work scenarios.",
  },
  body: {
    ja: `## これまでの知識を仕事に当てはめる

ここまでのトラックで扱ってきた要素（チャットAI・プロンプト術・コーディングAI・生成メディア）は、実際の仕事の場面で次のように組み合わされます。

### 文書作成・要約
議事録の要約、メールの下書き、報告書の骨子作成など。プロンプト術トラックの「役割・文脈・形式」を意識すると、下書きの質が上がります。

### 調べ物・リサーチの下準備
複数の資料を要約して比較する、専門用語を分かりやすく言い換えるなど。ただし重要な事実は出典を自分で確認する（ハルシネーションのレッスン参照）。

### コーディング・開発作業
コーディングAIトラックで扱った補完・チャット・エージェント型ツールを使い、実装のたたき台を作ったり、バグの原因を一緒に調べたりする。

### 資料・素材の作成
生成メディアトラックで扱った画像生成を使い、プレゼン資料の挿絵や叩き台のビジュアルを用意する。

### 顧客対応の下支え
問い合わせ内容の分類・一次回答案の作成など、人間の最終判断の前段階を効率化する使い方。

**共通する姿勢**: どの用途でも、AIは「叩き台を素早く作る」役割が中心で、最終的な事実確認・品質担保・意思決定は人間が担うという役割分担が実務での基本形です。`,
    en: `## Applying earlier lessons to real work

The elements covered so far — chat AI, prompting, coding AI, generative media — combine in the workplace roughly like this:

### Writing and summarizing
Summarizing meeting notes, drafting emails, outlining a report. Applying the "role, context, format" idea from the Prompting track improves the quality of first drafts.

### Research legwork
Summarizing and comparing multiple documents, rephrasing jargon in plain language — while still verifying important facts against sources yourself (see the Hallucination lesson).

### Coding and development work
Using the completion, chat, and agentic tools from the Coding AI track to sketch out an implementation or investigate a bug together.

### Producing materials
Using image generation (Generative Media track) to rough out illustrations or visuals for a presentation.

### Supporting customer interactions
Classifying inquiries or drafting a first-pass reply — speeding up the step before a human makes the final call.

**A common thread**: across use cases, AI mainly plays the role of producing a fast first draft, while final fact-checking, quality control, and decisions stay with a human — that division of labor is the practical baseline.`,
  },
  quiz: [
    {
      kind: "boolean",
      prompt: {
        ja: "仕事でのAI活用における基本的な役割分担は、AIが叩き台を作り、最終的な事実確認と意思決定は人間が担うという形が中心である。",
        en: "The basic division of labor at work has AI producing first drafts, while humans handle final fact-checking and decisions.",
      },
      answer: true,
      explanation: {
        ja: "AIは下準備・下書きを効率化する役割が中心で、最終判断は人間が担うのが実務上の基本形です。",
        en: "AI mainly speeds up the groundwork and drafting, while final judgment stays with a human.",
      },
    },
  ],
  sources: [
    { label: "IBM: What Are AI Agents?", url: "https://www.ibm.com/think/topics/ai-agents" },
  ],
  lastVerified: "2026-07-15",
};
