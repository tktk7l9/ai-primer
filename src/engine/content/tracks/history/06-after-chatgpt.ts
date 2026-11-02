import type { Lesson } from "@/engine/content/types";

export const afterChatgpt: Lesson = {
  id: "history-06",
  slug: "after-chatgpt",
  title: {
    ja: "ChatGPTのあと — 考えるAI、開かれたAI、動くAI",
    en: "After ChatGPT: AI That Reasons, Opens Up, and Acts",
  },
  summary: {
    ja: "2023年以降の流れを4つの筋で見る。推論モデル、オープンウェイト、エージェントと共通規格、そしてルール。",
    en: "Events since 2023, traced along four threads: reasoning models, open weights, agents and shared standards, and rules.",
  },
  body: {
    ja: `## 名前を追わず、流れをつかむ

ChatGPTの公開から、新しいモデルの発表は途切れなく続いています。個々の名前はすぐ古くなるので、ここでは大きな流れを4つの筋で見ていきます。細かい出来事は[年表](/ja/timeline)で、今のサービスは[モデルカタログ](/ja/models)で確認できます。

### 1. 見て、聞いて、考える
2023年3月のGPT-4の技術報告は、このモデルを、画像と文章を入力でき文章を出力する大規模な**マルチモーダル**モデルと説明しています。文字だけのAIから、[マルチモーダル](/ja/learn/ai-basics/multimodal)なAIへの動きです。

次の転機が2024年9月12日のo1-previewでした。答える前に時間をかけて考える設計で、複雑な推論、特に科学や数学に強いとされました。規模を大きくするだけでなく、**答え方そのものを変える**方向が加わったのです（[推論モデル](/ja/learn/understanding-ai/reasoning-models)のレッスン参照）。

### 2. 重みが公開される
もう一つの筋は、誰でも入手できるモデルです。Metaは2023年7月18日、Llama 2を研究と商用の利用向けに無料で公開しました。2025年1月に公開されたDeepSeek-R1は、コードと重みをMITライセンスで公開し、数学・コード・推論の課題でOpenAIのo1に匹敵する性能だと説明しました。最高水準に近いモデルが、ダウンロードできる形でも出てくることを印象づけた出来事です（[ローカルで動くAI](/ja/learn/chat-ais/local-and-open-models)のレッスン参照）。

### 3. 答えるAIから、動くAIへ
2024年10月22日、Anthropicは画面を見て操作する「コンピュータ操作」を公開しました。同じ年の11月には、AIと外部のツールをつなぐ共通規格[MCP](/ja/learn/ai-agents/mcp)を発表しています。MCPは2025年12月に中立の団体へ寄贈されました。AIは1回答えるだけでなく、ツールを使い、時間をかけて仕事を進めるものになってきました。[エージェント](/ja/learn/ai-agents/tool-use-loop)の広がりです。

同時に、新しい危険も前面に出ました。AIが読むものが指示になってしまう[プロンプトインジェクション](/ja/learn/ai-agents/prompt-injection)は、行動できるAIほど深刻になります。

### 4. ルールが追いかける
技術の広がりを受けて、社会の側も動きました。EUのAI Actは2024年8月1日に発効し、欧州委員会はこれを世界初の包括的なAIの法的枠組みと説明しています。日本でも2025年にAI法が成立しました（[AIのルール](/ja/learn/society/ai-rules)のレッスン参照）。

### 歴史から読み取れること
- **予想は外れる**: [AIの冬](/ja/learn/history/ai-winter)が示すように、この分野の期待は波を描いてきました。今の流れがそのまま続くとは限りません。
- **消えるものもある**: 大きな注目を集めたサービスが短期間で終わった例もあります（[動画生成](/ja/learn/generative-media/video-generation)のレッスン参照）。
- **変わりにくいものを学ぶ**: モデルの名前は変わっても、トークン、コンテキスト、ハルシネーション、確かめる習慣のような基本は長く役立ちます。このサイトがモデルの版数を本文に書かないのも、そのためです。`,
    en: `## Follow the currents, not the names

New models have been arriving ever since ChatGPT launched. Individual names date quickly, so this lesson follows four broad threads instead. See the [timeline](/en/timeline) for the details and the [model catalog](/en/models) for current services.

### 1. Seeing, hearing, reasoning
The GPT-4 Technical Report of March 2023 describes the model as a large-scale **multimodal** model that accepts image and text inputs and produces text outputs. It marked a shift from text-only AI toward [multimodal](/en/learn/ai-basics/multimodal) AI.

The next turning point was o1-preview on September 12, 2024. Designed to spend time thinking before it answers, it was described as stronger at complex reasoning, especially in science and mathematics. Alongside scale, a new direction appeared: **changing how the model produces an answer** (see [reasoning models](/en/learn/understanding-ai/reasoning-models)).

### 2. Weights in public
Another thread is models anyone can obtain. On July 18, 2023 Meta released Llama 2, free for research and commercial use. DeepSeek-R1, released in January 2025, published its code and weights under the MIT license and claimed performance comparable to OpenAI's o1 on math, code, and reasoning tasks. It drove home that models close to the leading edge could also come in downloadable form (see [AI that runs locally](/en/learn/chat-ais/local-and-open-models)).

### 3. From answering to acting
On October 22, 2024 Anthropic released "computer use," which lets a model look at a screen and operate it. That November it announced [MCP](/en/learn/ai-agents/mcp), a shared standard for connecting AI to outside tools, which was donated to a neutral body in December 2025. AI was becoming something that not only answers once but uses tools and carries work forward over time: the rise of [agents](/en/learn/ai-agents/tool-use-loop).

New dangers came to the fore with it. [Prompt injection](/en/learn/ai-agents/prompt-injection), where what an AI reads turns into instructions, becomes more serious the more an AI can do.

### 4. Rules catch up
Society responded as the technology spread. The EU's AI Act entered into force on August 1, 2024, and the European Commission describes it as the first comprehensive legal framework on AI worldwide. Japan passed its AI law in 2025 (see [AI rules](/en/learn/society/ai-rules)).

### What history suggests
- **Forecasts miss**: as [the AI winters](/en/learn/history/ai-winter) show, expectations in this field have moved in waves. Today's current won't necessarily continue unchanged.
- **Things disappear too**: some high-profile services have ended within a short time (see [video generation](/en/learn/generative-media/video-generation)).
- **Learn what lasts**: model names change, but basics such as tokens, context, hallucinations, and the habit of checking stay useful. That's why this site keeps model versions out of its lesson text.`,
  },
  quiz: [
    {
      kind: "order",
      prompt: {
        ja: "次の出来事を古い順に並べてください。",
        en: "Put these events in order, oldest first.",
      },
      items: [
        { ja: "Llama 2の公開", en: "Llama 2 released" },
        { ja: "o1-previewの公開", en: "o1-preview released" },
        { ja: "コンピュータ操作の公開", en: "Computer use released" },
        { ja: "DeepSeek-R1の公開", en: "DeepSeek-R1 released" },
      ],
      explanation: {
        ja: "2023年7月、2024年9月、2024年10月、2025年1月の順です。",
        en: "July 2023, September 2024, October 2024, then January 2025.",
      },
    },
    {
      kind: "single",
      prompt: {
        ja: "o1-previewが示した新しい方向は？",
        en: "What new direction did o1-preview show?",
      },
      choices: [
        { ja: "答える前に時間をかけて考える設計", en: "A design that spends time thinking before answering" },
        { ja: "インターネットに一切接続しない設計", en: "A design that never connects to the internet" },
        { ja: "文章を出力しない設計", en: "A design that produces no text" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "モデルを大きくするだけでなく、答え方を変える方向が加わりました。",
        en: "Beyond scale, it changed how a model produces an answer.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "AIが行動できるようになるほど、プロンプトインジェクションの問題は深刻になる。",
        en: "The more an AI can act, the more serious prompt injection becomes.",
      },
      answer: true,
      explanation: {
        ja: "読んだ内容に操られたとき、実行できることが多いほど被害が大きくなります。",
        en: "If what it reads manipulates it, the more it can do, the greater the harm.",
      },
    },
  ],
  sources: [
    { label: "arXiv: GPT-4 Technical Report", url: "https://arxiv.org/abs/2303.08774" },
    { label: "Wikipedia: OpenAI o1", url: "https://en.wikipedia.org/wiki/OpenAI_o1" },
    { label: "Meta AI: Llama 2", url: "https://ai.meta.com/blog/llama-2/" },
    { label: "DeepSeek-R1（GitHub）", url: "https://github.com/deepseek-ai/DeepSeek-R1" },
    { label: "arXiv: DeepSeek-R1", url: "https://arxiv.org/abs/2501.12948" },
    { label: "Anthropic: Developing a computer use model（2024-10-22）", url: "https://www.anthropic.com/news/developing-computer-use" },
    { label: "Anthropic: Introducing the Model Context Protocol", url: "https://www.anthropic.com/news/model-context-protocol" },
    {
      label: "Model Context Protocol Blog: MCP joins the Agentic AI Foundation（2025-12-09）",
      url: "https://blog.modelcontextprotocol.io/posts/2025-12-09-mcp-joins-agentic-ai-foundation/",
    },
    { label: "European Commission: AI Act", url: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai" },
  ],
  lastVerified: "2026-11-02",
  glossaryRefs: ["reasoning-model", "open-weight", "agent", "mcp", "eu-ai-act"],
};
