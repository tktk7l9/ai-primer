import type { Lesson } from "@/engine/content/types";

export const draftingAndEditing: Lesson = {
  id: "ai-at-work-02",
  slug: "drafting-and-editing",
  title: {
    ja: "メール・文章の下書きと推敲 — 書き手はあなた",
    en: "Drafting and Editing Emails and Documents: You Are Still the Author",
  },
  summary: {
    ja: "AIは文面を整えるのは得意だが、あなたの仕事の事実は知らない。事実を渡し、トーンを指定し、送る前に自分の文章として読み直す。",
    en: "AI is good at shaping text but doesn't know the facts of your work. Supply the facts, set the tone, and reread the result as your own words before you send it.",
  },
  body: {
    ja: `## 文面はAIに、事実はあなたが

メールや報告書の下書き、言い回しの調整、長い文章の圧縮、誤字の指摘——文章の形を整える作業はAIの得意分野で、メールソフトにも組み込まれています。2026年10月時点の公式ヘルプによると、Gmailの「Help me write」は新しい下書きを作るほか、書きかけの文面の語調や分かりやすさを整えられます。OutlookのCopilotには、指示から下書きを作る機能と、書いた下書きの語調や分かりやすさについて改善案を出す機能があります。

ただしAIは、**あなたの仕事の事実を知りません**。いつ何が起きたか、金額はいくらか、相手と何を約束したか。渡されていない事実は、もっともらしい日付や対応策で埋められてしまうことがあります（[ハルシネーション](/ja/learn/ai-basics/hallucination)のレッスン参照）。逆に、頼んでいない情報が入り込むこともあります。GoogleはGmailのヘルプで、「Help me write」が下書きを個別化するために、ほかのメールやGoogleドライブのファイルからフライトの時刻や予約番号といった詳細を自ら取り込むと説明しています。

### 先に渡すもの
- **相手と目的**: 誰に（相手との関係）、何のために（依頼・お詫び・お断り・報告）。
- **事実**: 日時・金額・数量・固有名詞・決まったこと・こちらの対応。
- **条件**: 長さ、敬語の度合い、書いてはいけないこと。
- **分からないところの扱い**: 「不明な点は［日付］のように空欄で残して」と指示し、推測で埋めさせない。

届いたメールを貼り付けて返信を作らせるときは、個人情報や機密が含まれていないか、そのツールに入れてよい情報かを先に確かめます（[仕事でAIを使うときの情報の扱い](/ja/learn/society/data-privacy-at-work)のレッスン参照）。

### トーンの指定と推敲
- 「取引先の部長に、丁寧だが簡潔に」「社内のチームに、かしこまりすぎずに」のように、相手との関係と温度感を書く。
- 2〜3案を出させて比べる。
- 推敲を頼むときは「事実・数字・固有名詞は変えずに」と添える。
- いきなり書き直させる前に「相手の立場で読んで、失礼・曖昧・誤解されそうな箇所を指摘して」と頼むと、どこをどう直すかを自分で決められます。

### 書き手はあなた
医学雑誌の編集者でつくる国際医学雑誌編集者委員会（ICMJE）は、チャットボットなどのAIツールを論文の著者に挙げるべきではないとしています。作品の正確さ・完全性・独創性に責任を負えないからです。AIを使った原稿の責任は人間にあり、AIの出力は誤っていたり、不完全だったり、偏っていたりしうるので、著者が注意深く見直して編集すべきだとも述べています。MicrosoftもOutlookのCopilotについて、作られたものはすべて見直し、編集し、確かめることが大切だとしています。

仕事の文章も同じです。誰が下書きしても、送った文章に責任を持つのは送り主です。職場や取引先のルールでAIの利用を明記するよう求められているなら、それに従います。

### AIが書いたと思われると
2023年に学術誌Scientific Reportsに掲載された2つの無作為化実験では、メッセージのやり取りでAIの返信候補（スマートリプライ）を使うと、やり取りが速くなり、前向きな感情の言葉が増え、相手をより親しく協力的だと評価するようになりました。一方で、AIの返信を使っていると**疑われた**人は、より否定的に評価されました。お詫び・お礼・評価のフィードバックなど、気持ちを伝える文章ほど、最後は自分の言葉で書き直しましょう。

### 送る前のチェック
- 日時・金額・名前・肩書きが、元の情報と一致しているか。
- 約束するつもりのない約束（「明日までに」「無償で」など）が入っていないか。
- 頼んでいない情報（ほかのメールや資料から取り込まれた内容）が入っていないか。
- 自分の言葉として読み返して、違和感がないか。`,
    en: `## The AI shapes the words; you supply the facts

Drafting emails and reports, adjusting the wording, shortening long text, catching typos — shaping text is something AI does well, and email apps now build it in. According to their official help pages as of October 2026, Gmail's "Help me write" can generate a new draft or refine text you've already written for tone and clarity, and Copilot in Outlook can draft an email from a prompt and give feedback on your own draft's tone and clarity.

But the AI **doesn't know the facts of your work**: what happened and when, what the amount was, what you promised the other side. Facts you don't supply can get filled in with plausible-sounding dates or remedies (see the [hallucination](/en/learn/ai-basics/hallucination) lesson). The opposite happens too: information you didn't ask for can slip in. Google's Gmail help explains that "Help me write" proactively takes details from your other emails and Drive files — flight times, booking codes, and the like — to personalize a draft.

### What to give it first
- **Who and why**: who it's for (and your relationship), and what it's for (a request, an apology, a refusal, a report).
- **The facts**: dates, amounts, quantities, names, what was agreed, what you will do.
- **Constraints**: length, level of formality, anything it must not say.
- **What to do with gaps**: say "leave anything you don't know as a blank like [date]," so it doesn't guess.

Before pasting in an email you received and asking for a reply, check whether it contains personal or confidential information, and whether that information may go into this tool (see the lesson on [handling information at work](/en/learn/society/data-privacy-at-work)).

### Setting the tone, and editing
- Describe the relationship and the register: "to a client's department head — polite but brief," "to my own team — not too formal."
- Ask for two or three versions and compare them.
- When asking it to edit, add "don't change any facts, numbers, or names."
- Before asking for a rewrite, try "read this as the recipient and point out anything rude, vague, or easy to misread." That way you decide what to change, and how.

### You are the author
The International Committee of Medical Journal Editors (ICMJE) says chatbots and other AI-assisted tools should not be listed as authors, because they cannot be responsible for the accuracy, integrity, and originality of the work. Humans are responsible for any submitted material that used AI, and authors should carefully review and edit AI-generated content because the output can be incorrect, incomplete, or biased. Microsoft says the same of Copilot in Outlook: it's important that you review, edit, and verify anything it creates for you.

Work writing is no different. Whoever drafted it, the sender is the one responsible for what gets sent. If your workplace or your client requires you to disclose AI use, follow that rule.

### When people suspect AI wrote it
Two randomized experiments published in Scientific Reports in 2023 found that using AI-suggested replies ("smart replies") in a conversation sped up communication, increased positive emotional language, and led partners to rate each other as closer and more cooperative. However, people were rated more negatively if they were **suspected** of using AI-generated replies. The more a message is about feelings — an apology, thanks, feedback on someone's work — the more it should end up in your own words.

### Before you hit send
- Do the dates, amounts, names, and job titles match the source information?
- Did a promise you never meant to make slip in ("by tomorrow," "free of charge")?
- Did information you didn't ask for get pulled in from other emails or files?
- Read it back as your own words. Does it sound like you?`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "取引先へのお詫びメールの下書きをAIに頼む。最初に自分で用意すべきものは？",
        en: "You're asking AI to draft an apology email to a client. What should you prepare yourself first?",
      },
      choices: [
        {
          ja: "何が起きたか、いつか、今後どう対応するかといった事実",
          en: "The facts: what happened, when, and what you'll do next",
        },
        { ja: "「とにかく丁寧に」という指示", en: "An instruction to \"be as polite as possible\"" },
        { ja: "過去に送ったお詫びメールの全文", en: "The full text of every apology email you've sent before" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "AIはあなたの仕事の事実を知りません。事実を渡さないと、もっともらしい日時や対応策を作ってしまうことがあります。トーンの指定はその次です。過去のメールには他人の個人情報が含まれていることもあります。",
        en: "The AI doesn't know your facts. Without them it may invent plausible dates or remedies. Tone comes after that — and old emails may contain other people's personal information.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "AIが下書きした部分に誤りがあっても、送り主の責任にはならない。",
        en: "If the part the AI drafted contains a mistake, the sender isn't responsible for it.",
      },
      answer: false,
      explanation: {
        ja: "ICMJEも、AIは文章の正確さに責任を負えないため著者になれず、責任は人間にあるとしています。誰が下書きしても、送った文章に責任を持つのは送り主です。",
        en: "As the ICMJE puts it, AI cannot be responsible for a text's accuracy, so it cannot be an author — the responsibility stays with people. Whoever drafted it, the sender answers for what was sent.",
      },
    },
  ],
  sources: [
    { label: "Gmail Help: Draft emails with Gemini in Gmail", url: "https://support.google.com/mail/answer/13955415?hl=en" },
    {
      label: "Microsoft Support: Frequently asked questions about Copilot in Outlook",
      url: "https://support.microsoft.com/en-us/office/frequently-asked-questions-about-copilot-in-outlook-07420c70-099e-4552-8522-7d426712917b",
    },
    {
      label: "ICMJE Recommendations: Use of AI by Authors",
      url: "https://www.icmje.org/recommendations/browse/artificial-intelligence/ai-use-by-authors.html",
    },
    {
      label: "Hohenstein et al. (2023): Artificial intelligence in communication impacts language and social relationships (Scientific Reports)",
      url: "https://www.nature.com/articles/s41598-023-30938-9",
    },
  ],
  lastVerified: "2026-10-07",
  glossaryRefs: ["hallucination", "prompt"],
};
