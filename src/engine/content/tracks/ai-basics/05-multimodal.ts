import type { Lesson } from "@/engine/content/types";

export const multimodal: Lesson = {
  id: "ai-basics-05",
  slug: "multimodal",
  title: {
    ja: "マルチモーダル — 文字・画像・音声を横断するAI",
    en: "Multimodal AI: Beyond Text Alone",
  },
  summary: {
    ja: "1つのモデルがテキスト・画像・音声・動画をまたいで理解し生成する仕組み。",
    en: "How a single model can understand and generate across text, images, audio and video.",
  },
  body: {
    ja: `## 複数の「種類のデータ」を1つのモデルで

**マルチモーダルAI**とは、テキスト・画像・音声・動画など複数の種類（モダリティ）のデータを同時に処理・関連づけられるモデルを指します。写真を見せて「これは何？」と文章で答えてもらったり、音声を文字起こししながら内容を要約したりできるのは、この仕組みのおかげです。

**単一モダリティのAIとの違い**:
- 従来型は「画像認識専用」「音声認識専用」のように1種類のデータしか扱えませんでした。
- マルチモーダルモデルは、異なる種類のデータを共通の内部表現（埋め込み空間）に写像し、モダリティをまたいで対応づけます（例: 画像の特定領域を指しながらテキストで説明する）。
- 複数のタスクをこなせても入力が1種類のモデル（マルチタスクモデル）や、別々のモデルをパイプラインでつなぐ方式とも区別されます。

2020年代半ば以降、主要なチャットAI（ChatGPT・Claude・Gemini・Grok）はいずれもテキストと画像の入力に対応し、Gemini や GPT系の一部モデルは音声・動画も扱えるようになっています（対応範囲はモデル・プランにより異なるため、最新情報は各社の公式ドキュメントで確認してください）。`,
    en: `## Multiple kinds of data, one model

**Multimodal AI** refers to models that can process and relate multiple types (modalities) of data — text, images, audio, and video — together. That's what lets you show a photo and ask "what is this?" in plain language, or have audio transcribed and summarized in one pass.

**How it differs from single-modality AI**:
- Older systems were built for one modality at a time — an image classifier, a speech recognizer.
- Multimodal models map different modalities into a shared internal representation (an embedding space) and can connect across them — for instance, describing a specific region of an image in text.
- This is also distinct from multi-task models (many tasks, one modality) and from pipelines that chain separate single-modality models together.

Since the mid-2020s, the major chat AIs (ChatGPT, Claude, Gemini, Grok) have all added text-plus-image input, and some Gemini and GPT-family models also handle audio and video (exact support varies by model and plan — check each vendor's current documentation).`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "マルチモーダルAIを最もよく説明しているのは？",
        en: "Which best describes a multimodal AI model?",
      },
      choices: [
        {
          ja: "テキスト・画像・音声など複数種のデータを1つのモデルで処理・関連づける",
          en: "A single model that processes and relates multiple data types — text, images, audio, etc.",
        },
        { ja: "複数のタスクを次々にこなせるが入力は1種類のみのモデル", en: "A model that does many tasks but accepts only one data type" },
        { ja: "別々の専用モデルをAPIでつないだだけの仕組み", en: "Separate specialized models simply chained together via an API" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "複数タスク対応でも入力が1種類なら「マルチタスク」、別モデルの連結は「パイプライン」と呼ばれ、マルチモーダルとは区別されます。",
        en: "Multi-task (one modality, many tasks) and pipelines (chained single-modality models) are distinct concepts from true multimodal models.",
      },
    },
  ],
  sources: [
    { label: "IBM: What is Multimodal AI?", url: "https://www.ibm.com/think/topics/multimodal-ai" },
  ],
  lastVerified: "2026-07-15",
  glossaryRefs: ["multimodal"],
};
