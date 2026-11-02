import type { Lesson } from "@/engine/content/types";

export const delegatingToAgents: Lesson = {
  id: "prompting-06",
  slug: "delegating-to-agents",
  title: {
    ja: "仕事を任せる頼み方 — エージェントへの指示",
    en: "Handing Over Work: How to Brief an Agent",
  },
  summary: {
    ja: "質問と違い、仕事を任せるときは完了の条件が要る。相手に見えていないことを伝え、確かめる方法を渡し、取り返しのつかない操作の前で止める。",
    en: "Unlike a question, delegated work needs a definition of done. Say what the agent can't see, give it a way to check, and make it stop before anything irreversible.",
  },
  body: {
    ja: `## 「答えて」から「やっておいて」へ

ここまでのレッスンは、主に1回の答えをよくするための書き方でした。ChatGPT WorkやClaudeのCowork、コーディングエージェントのように、仕事を**結果まで進めて返す**AIでは、頼み方の勘所が少し変わります。途中で何度も手順を判断するので、書き出しの工夫より、**何をもって終わりとするか**が重要になります。

OpenAIのドキュメントは、向いている仕事の条件として、明確な成果物、少数の資料、確認できる出力を挙げています。Anthropicのガイドは、モデルを「優秀だが、あなたの職場の決まりを知らない新人」と考えるよう勧めています。文脈のない同僚に見せて戸惑うような指示なら、AIも戸惑います。

### 1. 相手に見えていないことを伝える
Claude Codeのガイドは、まず**自分で見つけられない情報**を伝えるよう勧めています。

- 背景と目的（誰が、何のために使うのか）
- 好みが分かれる選択（どちらのやり方がよいか）
- 範囲（どこまでやるか、やらないことは何か）

ガイドの例では、「ログインの不具合を直して」より、「セッションの期限切れ後にログインに失敗すると報告がある。\`src/auth/\` のトークン更新を調べ、再現する失敗テストを書いてから直して」のほうが、やり直しが減るとされています。プログラミング以外でも同じです。「資料を作って」より、「来週の部内会議用に、添付の3つの報告書から、決めてほしい点が分かる5枚の資料を」と頼みましょう。

### 2. 確かめる方法を渡す
同じガイドは、チェックの手段がなければ、AIは「終わったように見える」時点で止まるとしています。その場合、間違いを見つける役は人に回ってきます。

合格か不合格かが分かる確認を渡すと、AIは直して確かめることを自分で繰り返せます。

- 開発なら、テスト、ビルド、lint。
- 文書なら、「数字はすべて添付の表と照合し、出典の場所を書く」のようなチェックリスト。
- 調べ物なら、[確かめる手順](/ja/learn/ai-agents/research-with-ai)に沿った出典の確認。

「全部のテストが通りました」という報告だけでなく、**実行したコマンドと結果などの証拠**を求めましょう。

### 3. 止まる場所を決める
Anthropicのガイドは、指示がなければ、モデルが元に戻しにくい操作や共有のシステムに影響する操作を行う場合があるとしています。そこで、次のように頼みます。

- ファイルの編集のように元に戻せる作業は進めてよい。
- 削除、外部への送信、公開、支払いなど、戻しにくい操作や他人に見える操作の前は確認する。
- 問題にぶつかっても、安全確認を外すなどの近道を取らない。

範囲を狭くすることには、安全面の効果もあります（[画面を操作するAI](/ja/learn/ai-agents/computer-use)のレッスン参照）。

### 4. 長い仕事は区切る
長い作業は途中で文脈があふれたり、方向がずれたりします。Anthropicのガイドは、進捗をメモに残す、少しずつ進める、といった状態の管理を勧めています。人の側も、最初に計画を出させて確認してから実行させれば、大きなやり直しを防げます。途中で方向が違うと気づいたら、早めに伝えましょう。

### 頼み方のひな形
\`\`\`text
目的: 〇〇のために、〇〇を作ってください。
使う資料: （ファイルやリンク）
完了の条件: （形式、分量、満たすべきこと）
確認: 終える前に（チェックの方法）を行い、結果を示してください。
範囲外: （やらないこと）
確認してほしいこと: （送信・削除・公開など）の前に、必ず聞いてください。
\`\`\`

「ステップごとに考えて」のような言い回しは、今のエージェントでは特別な効果を持つ合言葉ではなく、普通の文章として読まれる、とClaude Codeのガイドは説明しています。大切なのは呪文より、相手に足りない情報です。`,
    en: `## From "answer this" to "take care of this"

The lessons so far have mainly been about getting a better single answer. With AI that **carries work through to a result**, such as ChatGPT Work, Claude's Cowork, and coding agents, the emphasis shifts. The AI decides many steps along the way, so what matters most isn't a clever opening line but **what counts as finished**.

OpenAI's documentation says good tasks have a clear outcome, a few source materials, and an output you can review. Anthropic's guide suggests thinking of the model as a brilliant new employee who doesn't know your norms. If a colleague with little context would be confused by your instructions, the AI will be too.

### 1. Say what it can't see
Claude Code's guide starts with **information the agent can't find for itself**.

- Background and purpose (who it's for and why)
- Choices where preferences differ (which of two approaches you want)
- Scope (how far to go, and what to leave alone)

In one of the guide's examples, "users report login fails after the session times out; look at token refresh in \`src/auth/\`, write a failing test that reproduces it, then fix it" saves corrections compared with "fix the login bug." The same holds outside programming. Instead of "make a deck," ask for "a five-slide deck for next week's team meeting, drawn from these three attached reports, that makes clear what we need decided."

### 2. Give it a way to check
The same guide says that without something to check against, the AI stops when the work looks done. Finding the mistakes then falls to you.

Give it a check with a pass-or-fail result, and it can repeat the fix-and-verify cycle by itself.

- In development: tests, a build, lint.
- For documents: a checklist such as "match every number against the attached table and note where it came from."
- For research: source checks following [the verification steps](/en/learn/ai-agents/research-with-ai).

Don't settle for "all tests pass." Ask for **evidence**, such as the command that was run and its output.

### 3. Decide where it must stop
Anthropic's guide notes that without guidance a model may take actions that are hard to reverse or that affect shared systems. So spell it out.

- Reversible work, such as editing files, can go ahead.
- Before actions that are hard to undo or visible to others, such as deleting, sending, publishing, or paying, ask first.
- When it hits an obstacle, it shouldn't take shortcuts such as removing safety checks.

A narrower scope helps with safety as well (see [AI that operates your screen](/en/learn/ai-agents/computer-use)).

### 4. Break up long work
Long jobs can overflow the context or drift off course. Anthropic's guide recommends managing state: keeping progress notes and working incrementally. On your side, asking for a plan to review before execution prevents large rework. If you notice it heading the wrong way, say so early.

### A template
\`\`\`text
Goal: Please create ___ for ___.
Materials: (files or links)
Done when: (format, length, what it must include)
Check: Before finishing, do (the check) and show the results.
Out of scope: (what not to do)
Ask first: Always check with me before (sending, deleting, publishing, and so on).
\`\`\`

Claude Code's guide says phrases like "think step by step" are ordinary prompt text to an agent like this, not magic keywords. What counts isn't an incantation but the information it lacks.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "エージェントに確認の手段を渡さないと、起きやすいことは？",
        en: "What tends to happen if you give an agent no way to check its work?",
      },
      choices: [
        { ja: "終わったように見えた時点で止まり、間違いを見つける役が人に回る", en: "It stops when the work looks done, and finding mistakes falls to you" },
        { ja: "作業を始めなくなる", en: "It refuses to start" },
        { ja: "必ず完璧な結果になる", en: "The result is always perfect" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "テストやチェックリストなど、合否が分かる確認を渡すと、自分で直して確かめられます。",
        en: "A pass-or-fail check such as tests or a checklist lets it fix and verify on its own.",
      },
    },
    {
      kind: "multi",
      prompt: {
        ja: "実行前に人の確認を求めるのが適切な操作を選んでください（複数）。",
        en: "Which actions should ask for your confirmation first? (Select all that apply.)",
      },
      choices: [
        { ja: "ファイルやデータの削除", en: "Deleting files or data" },
        { ja: "社外へのメール送信", en: "Sending email outside the company" },
        { ja: "作業中の下書きの推敲", en: "Revising a working draft" },
        { ja: "支払いの実行", en: "Making a payment" },
      ],
      correctIndexes: [0, 1, 3],
      explanation: {
        ja: "戻しにくい操作や他人に見える操作の前で止めます。元に戻せる作業は任せて構いません。",
        en: "Stop before actions that are hard to undo or visible to others. Reversible work can proceed.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "「ステップごとに考えて」と書くことが、エージェントへの指示で最も重要なコツである。",
        en: "Writing \"think step by step\" is the most important part of briefing an agent.",
      },
      answer: false,
      explanation: {
        ja: "重要なのは、相手に見えていない情報、完了の条件、確かめる方法です。",
        en: "What matters is what it can't see, the definition of done, and how to check.",
      },
    },
  ],
  sources: [
    { label: "ChatGPT Learn: Get started with ChatGPT Work", url: "https://learn.chatgpt.com/docs/get-started-with-work" },
    { label: "Claude Code Docs: Best practices", url: "https://code.claude.com/docs/en/best-practices" },
    {
      label: "Anthropic Docs: Prompting best practices",
      url: "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices",
    },
    { label: "Claude Help Center: Claude Cowork and chat are one Claude", url: "https://support.claude.com/en/articles/16761823-claude-cowork-and-chat-are-one-claude" },
  ],
  lastVerified: "2026-11-02",
  glossaryRefs: ["agent", "context-engineering"],
};
