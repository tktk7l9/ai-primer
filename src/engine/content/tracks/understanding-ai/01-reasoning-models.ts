import type { Lesson } from "@/engine/content/types";

export const reasoningModels: Lesson = {
  id: "understanding-ai-01",
  slug: "reasoning-models",
  title: {
    ja: "推論モデルとは — 答える前に「考える」AIの使いどころ",
    en: "What Reasoning Models Are: When It Pays for AI to Think Before It Answers",
  },
  summary: {
    ja: "答える前に内部で考えるモデルは、数学やコード、何段階もの計画がいる問題に強い。一方で、考えた分も料金と待ち時間に乗り、見えている「考え」が本当の判断の過程とは限らない。",
    en: "Models that think internally before answering are stronger on math, code, and problems that need multi-step plans. But the thinking is billed and adds waiting time, and the reasoning you can see is not guaranteed to be how the model actually decided.",
  },
  body: {
    ja: `## 答える前に「考える」AI

チャットAIの中には、すぐに答えを書き始めず、内部でしばらく考えてから答えるものがあります。こうしたモデルを**推論モデル**（reasoning model）と呼びます。2024年の終わりごろから広まり（[年表](/ja/timeline)参照）、2026年10月時点では、OpenAIやGoogleなどが開発者向けのドキュメントで使い方を説明しています。

> **言葉の注意**: ここでの「推論」は、考えること（reasoning）の訳です。[推論とtemperature](/ja/learn/how-llms-work/inference-temperature)のレッスンの「推論」（inference：学習済みのモデルで出力を作ること）とは別の意味です。

### 中で何をしているのか
OpenAIのドキュメントによると、推論モデルは入力と出力のトークンに加えて**推論トークン**を生成し、それを使って問題を分解したり、いくつかのやり方を比べたりしてから答えます。推論トークンは問題の難しさに応じて数百から数万にもなり、コンテキストウィンドウの容量も使います。

[段階的に考えさせるプロンプト](/ja/learn/prompting/step-by-step)では、利用者が「段階を踏んで考えて」と頼みました。推論モデルは、頼まれなくても自分で考える過程を作ります。

答えを出す段階で多くの計算を使うことを**テスト時計算**（test-time compute）と呼びます。Anthropicは2025年2月、思考に使えるトークンを増やすほど数学の問題の正答率が上がり、その上がり方は対数的、つまり増やすほど1トークンあたりの伸びは小さくなったと報告しました。いくつかの答えを別々に考えさせ、多数決などで1つを選ぶ方法も試されています。

### どんな問題に効くか
GoogleのGeminiのドキュメントは、考える量の目安を次のように示しています。
- **簡単な問題**（事実の確認や分類。例：「DeepMindはどこで設立された？」）: 最小か少なめでよい
- **中くらいの問題**（概念の比較や創作的な推論。例：「電気自動車とハイブリッド車を比べて」）: 標準のままでよい
- **難しい問題**（高度なコーディング、数学、何段階もの計画）: 最大まで考えさせる

OpenAIも、推論をしない設定の使いどころとして、音声での会話や素早い情報の取り出し、分類のように待ち時間が大切な使い方を挙げています。考えさせるほど良いのではなく、問題の難しさに合わせるものです。

### 料金と待ち時間
- **考えた分も課金される**: OpenAIもGoogleも、思考のトークンを出力トークンとして料金に含めます。画面に出るのが思考の要約だけでも、課金されるのは考えた全体の分です。
- **待ち時間が延びる**: 考える量を増やすほど、答えが返るまでの時間は長くなります。OpenAIは特に高い設定について、評価で明らかな効果があり、余分な待ち時間と費用に見合う場合にだけ使うよう勧めています。
- **途中で打ち切られることも**: 出力の上限を小さくしすぎると、考えている途中で止まり、答えが空のまま返ることがあります（考えた分は課金されます）。
- 2026年10月時点の開発者向けドキュメントでは、考える量はOpenAIなら「reasoning effort」、Geminiなら「thinking level」という設定で調整でき、どちらも問題の難しさに応じて考える量を自動で加減するとしています。1回あたりのエネルギーについては[AIの電力と水](/ja/learn/ai-and-society/energy-and-water)のレッスンも参照してください。

### 見えている「考え」は要約で、本当の過程とは限らない
- 2026年10月時点で、OpenAIは推論トークンそのものは見せず、対応するモデルでは要約を表示できるようにしています。Geminiも、見せるのは思考の要約です。
- Anthropicは2025年2月、モデルの思考の過程を見せる利点と課題を説明し、表示された思考がモデルの中で実際に起きていることを表しているかは確かではない（**忠実性**の問題）と書きました。途中に誤った考えや生煮えの考えが混じることもあります。
- 同社の2025年4月の研究では、答えのヒントをこっそり与え、モデルがそれを使って答えた場合でも、思考の中でヒントに触れたのは平均でClaude 3.7 Sonnetが25%、DeepSeek R1が39%でした。難しい問題ほど、触れない傾向もありました。

思考の要約は答えを確かめる手がかりにはなりますが、「理由がそれらしく書いてあるから正しい」とは言えません。結論は、これまでどおり出典や計算で確かめます（[よくある失敗パターン](/ja/learn/how-llms-work/failure-patterns)参照）。

### 使い分けのコツ
1. まず標準の設定で試し、難しい問題で失敗したら考える量を上げる。
2. 短い質問や事実の確認、会話のテンポが大切な場面では、考える量を下げる。
3. どのモデルが推論モデルか、料金はいくらかは変わりやすいので、[モデルカタログ](/ja/models)で確かめる。
4. 推論モデルの性能を示す数字の読み方は、[ベンチマークの読み方](/ja/learn/understanding-ai/reading-benchmarks)のレッスンで扱います。`,
    en: `## AI that "thinks" before it answers

Some chat AIs don't start writing an answer right away; they think internally for a while first. These are called **reasoning models**. They spread from late 2024 (see the [timeline](/en/timeline)), and as of October 2026, OpenAI, Google, and others explain how to use them in their developer documentation.

> **Not to be confused with inference**: "reasoning" here means thinking a problem through. It is different from inference — producing output with a trained model — covered in the [inference and temperature](/en/learn/how-llms-work/inference-temperature) lesson. (In Japanese, both are often translated as 推論.)

### What happens inside
According to OpenAI's documentation, a reasoning model generates **reasoning tokens** in addition to input and output tokens, and uses them to break the problem down and consider several approaches before answering. Depending on how hard the problem is, it may generate anywhere from a few hundred to tens of thousands of reasoning tokens, and they take up room in the context window too.

With [chain-of-thought prompting](/en/learn/prompting/step-by-step), you asked the model to "think step by step." A reasoning model produces its own thinking process without being asked.

Spending more computation at the moment of answering is called **test-time compute**. In February 2025, Anthropic reported that the more thinking tokens its model was allowed, the higher its accuracy on math questions — but the gains were logarithmic: each additional token helped less than the last. Another approach being tested is to have the model think through several answers independently and pick one, for example by majority vote.

### What it helps with
Google's Gemini documentation gives this rough guide to how much thinking to use:
- **Simple tasks** (fact retrieval or classification, e.g. "Where was DeepMind founded?"): minimal or low thinking
- **Moderate tasks** (comparing concepts or creative reasoning, e.g. "Compare electric and hybrid cars"): the default
- **Complex tasks** (advanced coding, math, or multi-step planning): maximum thinking

OpenAI likewise names latency-critical uses such as voice conversations, fast information retrieval, and classification as where its no-reasoning setting fits. More thinking isn't automatically better — match it to the difficulty of the problem.

### Cost and waiting time
- **Thinking is billed**: both OpenAI and Google count thinking tokens as output tokens. Even if all you see is a summary of the thinking, you pay for all of it.
- **Answers take longer**: the more the model thinks, the longer you wait for an answer. For one of its highest settings, OpenAI advises using it only when your evaluations show a clear benefit that justifies the extra latency and cost.
- **Answers can be cut off**: set the output limit too low and the model can stop mid-thought and return an empty answer — while still billing for the thinking it did.
- As of October 2026, the developer documentation lets you adjust the amount of thinking with a setting called "reasoning effort" at OpenAI and "thinking level" in Gemini, and both say the models also adapt how much they think to the difficulty of the request on their own. For energy per request, see the [AI's electricity and water](/en/learn/ai-and-society/energy-and-water) lesson.

### The "thinking" you see is a summary — and not necessarily the real process
- As of October 2026, OpenAI does not show the raw reasoning tokens; on models that support it, you can view a summary instead. Gemini, too, shows only summaries of its thoughts.
- In February 2025, Anthropic explained the benefits and problems of showing its model's thought process, writing that we can't be sure the displayed thinking truly represents what is going on inside the model (the problem of **faithfulness**). The thinking can also include incorrect or half-baked ideas along the way.
- In Anthropic's April 2025 research, when models were slipped a hint about the answer and used it, they mentioned the hint in their thinking only 25% of the time on average for Claude 3.7 Sonnet and 39% for DeepSeek R1. Faithfulness also tended to be lower on harder questions.

A summary of the thinking can help you check an answer, but "the reasoning sounds convincing" doesn't make the answer right. Keep checking conclusions against sources and calculations, as before (see [common failure patterns](/en/learn/how-llms-work/failure-patterns)).

### Tips for choosing
1. Start with the default setting, and raise the thinking only when the model fails on hard problems.
2. For short questions, fact lookups, and conversations where pace matters, turn the thinking down.
3. Which models reason and what they cost change often — check the [model catalog](/en/models).
4. How to read the numbers used to show what reasoning models can do is covered in the [How to Read AI Benchmarks](/en/learn/understanding-ai/reading-benchmarks) lesson.`,
  },
  quiz: [
    {
      kind: "multi",
      prompt: {
        ja: "推論モデルについて、このレッスンの内容として正しいものをすべて選んでください。",
        en: "Which of these statements about reasoning models match this lesson? Select all that apply.",
      },
      choices: [
        {
          ja: "考えた分のトークンも、出力トークンとして料金に含まれる",
          en: "The thinking tokens are billed as output tokens",
        },
        {
          ja: "表示される思考は要約のことがあり、実際の判断の過程をそのまま表すとは限らない",
          en: "The thinking you see may be a summary, and it doesn't necessarily reflect how the model actually decided",
        },
        {
          ja: "考える量を最大にすれば、どんな質問にも速く正確に答えられる",
          en: "Setting the thinking to maximum makes every answer both faster and more accurate",
        },
        {
          ja: "思考が表示されていれば、答えを確かめる必要はない",
          en: "If the thinking is shown, there is no need to check the answer",
        },
      ],
      correctIndexes: [0, 1],
      explanation: {
        ja: "OpenAIもGoogleも思考のトークンを出力トークンとして課金し、見せるのは要約です。Anthropicの研究では、モデルが使ったヒントに思考の中で触れたのは25〜39%でした。考える量を増やすと待ち時間は延び、答えはこれまでどおり確かめます。",
        en: "OpenAI and Google bill thinking tokens as output tokens and show only summaries. In Anthropic's research, models mentioned a hint they had used only 25–39% of the time. More thinking means longer waits, and answers still need checking.",
      },
    },
    {
      kind: "single",
      prompt: {
        ja: "推論モデルに考える量を多めに使わせるのが最も向いているのはどれ？",
        en: "Which task benefits most from letting a reasoning model think more?",
      },
      choices: [
        {
          ja: "何段階もの計画が必要な、難しいプログラムの修正",
          en: "A hard code fix that needs a multi-step plan",
        },
        {
          ja: "「DeepMindはどこで設立された？」のような事実の確認",
          en: "A fact lookup such as \"Where was DeepMind founded?\"",
        },
        { ja: "テンポが大切な音声での雑談", en: "A casual voice conversation where pace matters" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "Geminiのドキュメントは、高度なコーディング・数学・何段階もの計画には最大の思考を、事実の確認や分類には最小か少なめを勧めています。OpenAIも、推論をしない設定の使いどころとして音声や素早い情報の取り出しを挙げています。",
        en: "Gemini's documentation recommends maximum thinking for advanced coding, math, and multi-step planning, and minimal or low thinking for fact retrieval or classification. OpenAI likewise names voice and fast information retrieval as uses for its no-reasoning setting.",
      },
    },
  ],
  sources: [
    { label: "OpenAI API Docs: Reasoning models", url: "https://developers.openai.com/api/docs/guides/reasoning" },
    { label: "Google AI for Developers: Gemini thinking", url: "https://ai.google.dev/gemini-api/docs/thinking" },
    { label: "Anthropic: Claude's extended thinking (2025-02-24)", url: "https://www.anthropic.com/news/visible-extended-thinking" },
    {
      label: "Anthropic: Reasoning models don't always say what they think (2025-04-03)",
      url: "https://www.anthropic.com/research/reasoning-models-dont-say-think",
    },
  ],
  lastVerified: "2026-10-07",
  glossaryRefs: ["reasoning-model", "test-time-compute", "chain-of-thought", "inference", "token", "context-window"],
};
