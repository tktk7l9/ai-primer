import type { Lesson } from "@/engine/content/types";

export const computerUse: Lesson = {
  id: "ai-agents-06",
  slug: "computer-use",
  title: {
    ja: "画面を操作するAI — コンピュータ操作とブラウザのエージェント",
    en: "AI That Operates Your Screen: Computer Use and Browser Agents",
  },
  summary: {
    ja: "AIが画面を見てクリックし、入力する。連携のないアプリも扱える一方、ログイン中のサイトで「あなたとして」動く。安全に任せる範囲の決め方。",
    en: "AI can look at a screen, click, and type. That reaches apps with no integration, but it also acts as you on sites where you are signed in. How to decide what to hand over.",
  },
  body: {
    ja: `## 人と同じ画面を使う

[MCP](/ja/learn/ai-agents/mcp)のような連携は、相手のシステムが用意した入口を使います。入口がないアプリやサイトは、そのままでは扱えません。そこで、**人と同じように画面を見て操作する**方法が生まれました。Anthropicは2024年10月、スクリーンショットを見てカーソルを動かし、クリックし、仮想キーボードで入力する「コンピュータ操作」を公開しました。今ではChatGPTやClaudeのデスクトップアプリなど、複数の製品に同様の機能があります。

仕組みは[ツール呼び出しのループ](/ja/learn/ai-agents/tool-use-loop)と同じです。

1. モデルが画面の**スクリーンショット**を受け取る。
2. 次の操作（クリック、入力など）を**ツールの呼び出し**として返す。
3. アプリがその操作を実行し、結果の画面をまたモデルに渡す。
4. 終わるまで繰り返す。

Anthropicは公開時、この機能を「遅く、誤りも多い」と説明していました。当時の評価（OSWorld）では、人の約70〜75%に対してClaudeは14.9%でした。その後モデルは改良されていますが、画面を見ながら1手ずつ進むため、APIなどの連携より遅く、確実さでも劣りやすい方法です。OpenAIのドキュメントも、コマンドや連携では足りないときに使うものと位置づけています。

### 向いている作業
- 連携が用意されていないアプリの設定を変える、情報を確認する。
- 複数のアプリをまたぐ作業を進める。
- 開発中のアプリを画面から動かして確かめる。

連携（プラグインやMCP）があるなら、そちらを先に使うのが無難です。

### 「あなたとして」動くという危険
ブラウザを操作させると、AIは**あなたがログインしているページの上で**動きます。OpenAIのドキュメントは、サイトはそのクリックをあなた自身の操作として扱いうると注意しています。

さらに、画面に映るものはすべてモデルへの入力です。[プロンプトインジェクション](/ja/learn/ai-agents/prompt-injection)の入口が、Webページやメール、文書の全体に広がります。Anthropicのヘルプは、見えない文字で「銀行の明細を取り出して共有せよ」と仕込まれたメールやToDoリストの例を挙げています。

各社は対策を重ねています。Claude in Chromeは、読み込む内容と実行前の操作を分類器で調べ、怪しければ止めるか承認を求めます。2026年11月時点のヘルプは、社内テストで攻撃の成功率を0.08%未満に抑えたと説明しますが、同時に「リスクはゼロではない」とし、新しい攻撃は評価に含まれない場合があるとも書いています。OpenAIも2025年12月、プロンプトインジェクションは詐欺やソーシャルエンジニアリングと同じように、完全に「解決」されることはなさそうだと述べました。

### 任せる前に決めること
- **作業を狭くする**: 1つのアプリ、1つの流れに絞り、具体的に指示する。広い権限で「受信箱を片付けて」と頼むほど、隠れた指示に影響されやすくなる。
- **ログイン先を分ける**: 銀行・医療・行政のアカウントにログインしていない別のブラウザプロファイルを使う。
- **関係ないアプリは閉じる**: 画面に映るものは処理される可能性がある。
- **承認を読む**: 送信、購入、設定の変更などの確認は、内容を見てから通す。「常に許可」は十分に信頼できるアプリだけにする。
- **その場にいる**: 支払い、認証情報、セキュリティの設定に関わる作業は、見ていられるときだけにする。
- **おかしければ止める**: 関係のない話を始めた、予定外のサイトを開いた、機密情報を求めてきたときは中断する。

Anthropicのヘルプは、金融口座の管理、法律文書や契約、医療情報、機密データのある仕事用アカウントの操作を任せないよう強く勧めています。「便利だから全部」ではなく、失敗しても取り返せる作業から始めましょう。承認と記録の組み込み方は[定型作業の自動化](/ja/learn/ai-at-work/automating-routine-work)のレッスンも参考になります。`,
    en: `## Using the same screen you do

Integrations like [MCP](/en/learn/ai-agents/mcp) go through an entrance the other system provides. An app or site without one is out of reach. That led to a different approach: **looking at the screen and operating it the way a person does**. In October 2024 Anthropic released "computer use," in which Claude reads screenshots, moves the cursor, clicks, and types with a virtual keyboard. Several products now offer something similar, including the ChatGPT and Claude desktop apps.

The mechanism is the same as [the tool-use loop](/en/learn/ai-agents/tool-use-loop).

1. The model receives a **screenshot**.
2. It returns the next action (a click, some typing) as a **tool call**.
3. The app performs the action and passes the resulting screen back to the model.
4. This repeats until the task is done.

At launch Anthropic called the feature "slow and often error-prone." On the OSWorld evaluation of the time, Claude scored 14.9% against roughly 70-75% for people. Models have improved since, but working one step at a time from what is on screen tends to be slower and less dependable than an API or other integration. OpenAI's documentation likewise positions it for cases where commands and integrations aren't enough.

### Where it fits
- Changing settings or checking information in an app that has no integration.
- Working across several apps.
- Trying out an app under development through its interface.

If an integration (a plugin or MCP server) exists, it is usually the safer first choice.

### The risk of acting as you
When an AI drives your browser, it works **on pages where you are signed in**. OpenAI's documentation warns that sites may treat its clicks as coming from you.

On top of that, everything on screen is input to the model. The entry points for [prompt injection](/en/learn/ai-agents/prompt-injection) widen to every web page, email, and document it sees. Anthropic's help page gives the example of a to-do list or email with invisible text telling Claude to retrieve bank statements and share them.

Vendors keep adding defenses. Claude in Chrome uses classifiers to screen incoming content and to check actions before they run, blocking them or pausing for approval when something looks wrong. As of November 2026, its help page says internal testing brought attack success below 0.08%, and in the same breath says "the risk is not zero" and that new attacks may not be covered by its evaluations. In December 2025 OpenAI similarly said prompt injection, like scams and social engineering, is unlikely ever to be fully "solved."

### Decide these before you hand it over
- **Keep the task narrow**: one app, one flow, specific instructions. The broader the authority ("clean up my inbox"), the easier it is for hidden instructions to steer the agent.
- **Separate your sign-ins**: use a browser profile that isn't signed in to banking, healthcare, or government accounts.
- **Close unrelated apps**: whatever is visible may be processed.
- **Read the approvals**: look at the details of sends, purchases, and settings changes before allowing them. Keep "always allow" for apps you fully trust.
- **Stay present**: run tasks touching payments, credentials, or security settings only when you can watch.
- **Stop when it looks wrong**: if it drifts to unrelated topics, opens unexpected sites, or asks for sensitive information, end the task.

Anthropic's help page strongly discourages using it to manage financial accounts, handle legal documents or contracts, process medical information, or operate work accounts holding sensitive data. Rather than handing over everything because you can, start with work you can recover from if it goes wrong. [Automating routine work](/en/learn/ai-at-work/automating-routine-work) covers how to build in approvals and logs.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "コンピュータ操作の基本の流れとして正しいのは？",
        en: "Which describes the basic flow of computer use?",
      },
      choices: [
        { ja: "スクリーンショットを見て操作を返し、実行後の画面をまた見る、を繰り返す", en: "See a screenshot, return an action, see the resulting screen, and repeat" },
        { ja: "アプリの内部データベースを直接書き換える", en: "Rewrite the app's internal database directly" },
        { ja: "全ての手順を最初に確定し、画面は一度も見ない", en: "Fix every step at the start and never look at the screen" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "ツール呼び出しのループと同じです。ツールの結果がスクリーンショットになっています。",
        en: "It is the same tool-use loop, with screenshots as the tool results.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "ブラウザを操作するAIでは、社内テストの攻撃成功率が低ければプロンプトインジェクションの心配はなくなる。",
        en: "If internal tests show a low attack success rate, a browser agent no longer has a prompt injection problem.",
      },
      answer: false,
      explanation: {
        ja: "Anthropicは「リスクはゼロではない」とし、OpenAIも完全な解決はなさそうだと述べています。",
        en: "Anthropic says the risk is not zero, and OpenAI says it is unlikely ever to be fully solved.",
      },
    },
    {
      kind: "multi",
      prompt: {
        ja: "ブラウザのエージェントを使うときの工夫として適切なものを選んでください（複数）。",
        en: "Which are sensible precautions for using a browser agent? (Select all that apply.)",
      },
      choices: [
        { ja: "銀行などにログインしていない別のプロファイルを使う", en: "Use a separate profile not signed in to banking and similar accounts" },
        { ja: "作業を1つの流れに絞って具体的に頼む", en: "Narrow the task to one flow and be specific" },
        { ja: "どのアプリも「常に許可」にして確認を減らす", en: "Set every app to \"always allow\" to reduce prompts" },
        { ja: "支払いに関わる作業は見ていられるときだけにする", en: "Run payment-related tasks only when you can watch" },
      ],
      correctIndexes: [0, 1, 3],
      explanation: {
        ja: "「常に許可」は十分に信頼できるアプリだけにします。確認は、被害を止める最後の場所です。",
        en: "Keep \"always allow\" for apps you fully trust. A confirmation is the last place to stop harm.",
      },
    },
  ],
  sources: [
    { label: "Anthropic: Developing a computer use model（2024-10-22）", url: "https://www.anthropic.com/news/developing-computer-use" },
    { label: "Anthropic Docs: Computer use tool", url: "https://platform.claude.com/docs/en/agents-and-tools/tool-use/computer-use-tool" },
    { label: "ChatGPT Learn: Computer Use", url: "https://learn.chatgpt.com/docs/computer-use" },
    { label: "Claude Help Center: Use Claude in Chrome safely", url: "https://support.claude.com/en/articles/12902428-use-claude-in-chrome-safely" },
    {
      label: "TechCrunch: OpenAI says AI browsers may always be vulnerable to prompt injection attacks（2025-12-22）",
      url: "https://techcrunch.com/2025/12/22/openai-says-ai-browsers-may-always-be-vulnerable-to-prompt-injection-attacks/",
    },
  ],
  lastVerified: "2026-11-02",
  glossaryRefs: ["computer-use", "prompt-injection", "agent"],
};
