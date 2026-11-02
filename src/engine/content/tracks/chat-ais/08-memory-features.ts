import type { Lesson } from "@/engine/content/types";

export const memoryFeatures: Lesson = {
  id: "chat-ais-08",
  slug: "memory-features",
  title: {
    ja: "AIの記憶機能 — 覚えさせること、忘れさせること",
    en: "AI Memory Features: What to Keep and How to Make It Forget",
  },
  summary: {
    ja: "チャットAIは会話をまたいであなたのことを覚えるようになった。何が残り、どこで確かめ、どう消すのか。会話を消しても記憶は残ることがある。",
    en: "Chat AIs now remember you across conversations. What stays, where to check it, and how to remove it — deleting a chat may not delete what was learned from it.",
  },
  body: {
    ja: `## コンテキストウィンドウとは別の「記憶」

[コンテキストウィンドウ](/ja/learn/ai-basics/context-window)のレッスンで見たとおり、LLM自体は会話が終わると内容を保持しません。一方で、最近のチャットAIには、**サービス側が情報を保存し、次の会話で読み込ませる**記憶機能があります。モデルが覚えているのではなく、保存された文章がコンテキストに足されている、と考えると分かりやすいでしょう。

同じ説明を繰り返さなくて済むのが利点です。仕事の役割、好みの書き方、進行中の案件などを踏まえて答えてくれます。

### 各社の機能の例（2026年11月時点のヘルプによる）
- **Claude**: 無料を含む個人向けプランで既定でオン。会話から話題ごとに記憶を保存し、設定で読む・直す・消すことができる。プロジェクトごとに記憶は分かれる。健康・宗教・政治などは、自分で許可しない限り保存されないと説明されている。
- **Gemini**: 過去のチャットを使って回答を個人に合わせる機能がある。設定の「Personal Intelligence」にあり、18歳以上の個人アカウントが対象で、アクティビティの保存が前提になる。
- **ChatGPT**: 以前の会話の文脈を引き継ぐメモリがあり、「Settings > Personalization」で管理する。デスクトップ版のCodexは、別に端末内の記憶を持つ。

名前や画面は変わりやすいので、使っているサービスのヘルプで確かめてください。

### 会話を消しても、記憶は残ることがある
ここが一番の注意点です。Claudeのヘルプは、**会話を削除しても、その会話から作られた記憶は削除されない**と明記しています。記憶は別に消す必要があります。Geminiでは、学習された内容を取り除くには、それを含むチャットをすべて削除します。接続したアプリの情報は、連携の解除も必要な場合があります。

### 記憶を残さず話す
一度きりの相談なら、記憶に使われない会話の形を選べます。

- **Claudeのシークレットチャット**: 履歴に残らず、既存の記憶を使わず、新しい記憶も作らない。ただし既定で30日間は保持される。
- **Geminiの一時チャット**: 履歴に残らず、個人向けの調整に使われない。Googleによれば、最大72時間は保持される。

「残らない」は「どこにも保存されない」という意味ではありません。保持期間や学習への利用は、[仕事でAIを使うときの情報の扱い](/ja/learn/society/data-privacy-at-work)のレッスンと同じように、サービスとプランごとに確かめます。

### 上手な付き合い方
- **定期的に中身を見る**: 古い情報や誤った思い込みが残っていると、回答がずれ続けます。
- **話題を混ぜない**: 仕事と家庭の話を分けたいなら、プロジェクトや一時的な会話を使い分ける。
- **そもそも書かない**: 他人の個人情報、パスワード、口座番号などは入力しない。
- **決まりは記憶に頼らない**: OpenAIのドキュメントは、必ず守らせたい指示は記憶ではなく、指示ファイルなどに書くよう勧めています（[エージェントへの説明書](/ja/learn/coding-ai/instructions-and-skills)のレッスン参照）。記憶は補助であり、確実に働く保証はありません。

共有の端末や、人に見せる画面でも注意が必要です。AIが以前の話題を持ち出すことがあるからです。`,
    en: `## A different "memory" from the context window

As the [context window](/en/learn/ai-basics/context-window) lesson explained, an LLM itself keeps nothing once a conversation ends. Recent chat AIs, however, have memory features: **the service stores information and feeds it into your next conversation**. It helps to think of it not as the model remembering, but as saved text being added to the context.

The benefit is not having to repeat yourself. Answers can reflect your role, preferred style, and ongoing projects.

### Examples (from help pages as of November 2026)
- **Claude**: on by default on individual plans, including Free. It saves memories by topic from your chats, and you can read, edit, or delete them in settings. Each project has separate memory. Topics such as health, religion, and politics are described as not saved unless you opt in.
- **Gemini**: can use past chats to personalize answers. It sits under "Personal Intelligence" in settings, is for personal accounts of people 18 or over, and needs activity saving on.
- **ChatGPT**: memories carry context from earlier chats and are managed under Settings > Personalization. Desktop Codex keeps a separate store on your machine.

Names and screens change easily, so check the help pages of the service you use.

### Deleting a chat may leave the memory behind
This is the main thing to watch. Claude's help page says plainly that **deleting a conversation does not remove memories generated from it**; they must be deleted separately. In Gemini, removing something it learned means deleting every chat containing it, and information from connected apps may also require disconnecting the app.

### Talking without leaving a memory
For a one-off question you can choose a form of chat that memory doesn't use.

- **Claude incognito chats**: not kept in your history, don't use existing memory, and don't create new memory. They are still retained for 30 days by default.
- **Gemini temporary chats**: not kept in your history and not used for personalization. Google says they are retained for up to 72 hours.

"Not kept" does not mean "stored nowhere." As in [handling information at work](/en/learn/society/data-privacy-at-work), check retention and training use for each service and plan.

### Living with it well
- **Review it now and then**: stale details or wrong assumptions keep skewing answers.
- **Don't mix topics**: if you want work and home separate, use projects and temporary chats.
- **Don't enter it in the first place**: leave out other people's personal data, passwords, and account numbers.
- **Don't rely on memory for rules**: OpenAI's documentation recommends keeping instructions that must always apply in instruction files rather than memories (see [instructions for agents](/en/learn/coding-ai/instructions-and-skills)). Memory is an aid, with no guarantee it will apply.

Take care on shared devices and when showing your screen, too: the AI may bring up earlier topics.`,
  },
  quiz: [
    {
      kind: "boolean",
      prompt: {
        ja: "Claudeでは、会話を削除すれば、その会話から作られた記憶も一緒に削除される。",
        en: "In Claude, deleting a conversation also deletes the memories generated from it.",
      },
      answer: false,
      explanation: {
        ja: "ヘルプによると、記憶は別に削除する必要があります。",
        en: "According to the help page, memories must be deleted separately.",
      },
    },
    {
      kind: "single",
      prompt: {
        ja: "チャットAIの記憶機能の仕組みとして適切な説明は？",
        en: "Which best describes how chat AI memory works?",
      },
      choices: [
        { ja: "サービスが保存した情報を、次の会話のコンテキストに足している", en: "The service stores information and adds it to the context of the next conversation" },
        { ja: "会話のたびにモデルの重みが書き換わる", en: "The model's weights are rewritten after every chat" },
        { ja: "LLM自体が全ての会話を保持している", en: "The LLM itself holds every conversation" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "モデルが変わるのではなく、保存された情報が入力に加わります。",
        en: "The model doesn't change; stored information is added to its input.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "記憶に使われない一時的なチャットでも、一定期間サービス側に保持されることがある。",
        en: "Even temporary chats that memory doesn't use may be retained by the service for a period.",
      },
      answer: true,
      explanation: {
        ja: "Claudeのシークレットチャットは既定で30日、Geminiの一時チャットは最大72時間保持されると説明されています。",
        en: "Claude's incognito chats are retained for 30 days by default, and Gemini's temporary chats for up to 72 hours.",
      },
    },
  ],
  sources: [
    {
      label: "Claude Help Center: Use Claude's chat search and memory",
      url: "https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context",
    },
    { label: "Claude Help Center: Use incognito chats", url: "https://support.claude.com/en/articles/12260368-use-incognito-chats" },
    { label: "Gemini Apps Help: Personalization with memory of your past chats", url: "https://support.google.com/gemini/answer/16598469" },
    { label: "Google: Temporary Chats and privacy controls in the Gemini app", url: "https://blog.google/products-and-platforms/products/gemini/temporary-chats-privacy-controls/" },
    { label: "Gemini Apps Help: Privacy Hub", url: "https://support.google.com/gemini/answer/13594961" },
    { label: "ChatGPT Learn: Memories", url: "https://learn.chatgpt.com/docs/customization/memories" },
  ],
  lastVerified: "2026-11-02",
  glossaryRefs: ["memory-feature", "context-window"],
};
