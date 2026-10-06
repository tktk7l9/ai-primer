import type { Lesson } from "@/engine/content/types";

export const dataPrivacyAtWork: Lesson = {
  id: "society-05",
  slug: "data-privacy-at-work",
  title: {
    ja: "仕事でAIを使うときの情報の扱い",
    en: "Handling Information When Using AI at Work",
  },
  summary: {
    ja: "入力した内容は学習に使われるのか、誰が見られるのか、会社のルールはどうか——入力前に確かめる3つの問い。",
    en: "Is my input used for training? Who can see it? What does my workplace allow? Three questions to settle before you type.",
  },
  body: {
    ja: `## 入力前の3つの問い

AIに文章を入力するという行為は、その内容を**他社のサーバーに送る**ことです。顧客名・取引条件・未公開の企画・従業員の個人情報……仕事の情報を扱うなら、便利さの前に次の3点を確かめる習慣が要ります。

### 1. 入力内容はモデルの学習に使われるか
これは**サービスと契約の種類によって大きく違います**。例として、OpenAIはAPI経由で送られたデータを2023年3月以降、明示的に同意しない限りモデルの学習に使わないと説明しています。Anthropicは個人向けプラン（Free・Pro・Max）について、チャットをモデル改善に使うかどうかを利用者がプライバシー設定で選ぶ形にし、法人向け製品やAPIは別の条件で扱うとしています。一般に、**個人向けの無料・有料プランと、法人向けプランやAPIとでは扱いが異なる**ことが多く、「同じ会社のサービスだから同じ」とは限りません。設定画面と利用規約を自分の目で確認してください。

### 2. 誰が、いつまで見られるか
学習に使われなくても、不正利用の監視などのために一定期間保存されることがあります（例: OpenAIのAPIでは、監視用のログを原則最大30日間保持すると説明されています）。保存期間、提供元の担当者が内容を見る可能性、削除の方法は、サービスごとに確認が必要です。

### 3. 職場のルールに合っているか
会社が承認していないAIツールを従業員が勝手に使うことは「**シャドーAI**」と呼ばれ、情報漏えいや法令違反につながるリスクとして問題視されています。職場に指定のツールや利用ガイドラインがあるなら、まずそれに従うのが基本です。

### 日本の個人情報保護委員会の注意喚起
個人情報保護委員会は2023年6月、生成AIサービスの利用について次のような注意喚起を出しています。
- 事業者が**個人情報を含むプロンプト**を入力する場合、特定した利用目的の範囲内であることを確認すること。
- 本人の同意なく**個人データ**を入力し、それが回答の生成以外の目的（機械学習など）で扱われると、個人情報保護法に違反するおそれがある。そのため、**提供事業者がそのデータを機械学習に利用しないこと等を十分に確認する**こと。
- 一般の利用者も、入力した個人情報が学習に使われ、他の情報と結びついて出力されるリスクを踏まえ、提供事業者の利用規約やプライバシーポリシーを確認して判断すること。

### 実践のコツ
- 個人情報や機密情報は、**入れなくても済む形に加工してから**使う（名前を記号に置き換える、必要な部分だけ抜き出す）。
- 手元の端末で完結させたい情報には、ローカルで動くモデルという選択肢もあります（主要チャットAI比較トラックのレッスン参照）。
- エージェントにファイルやメールを読ませる場合は、読める範囲を最小限にします（AIエージェントトラックの安全のレッスン参照）。`,
    en: `## Three questions before you type

Entering text into an AI means **sending that text to another company's servers**. Customer names, deal terms, unreleased plans, employee data — when work information is involved, three checks come before convenience.

### 1. Is my input used to train the model?
This **varies a lot by service and by contract type**. For example, OpenAI states that data sent through its API has not been used to train its models since March 2023 unless you explicitly opt in. Anthropic lets consumer-plan users (Free, Pro, Max) choose in their privacy settings whether chats may be used to improve Claude, and handles commercial products and the API under separate terms. In general, **consumer plans and business plans or APIs are often treated differently** — "same company, same rules" is not a safe assumption. Check the settings screen and the terms yourself.

### 2. Who can see it, and for how long?
Even when input isn't used for training, it may be retained for a period for purposes such as abuse monitoring (OpenAI, for instance, says API abuse-monitoring logs are kept for up to 30 days by default). Retention period, whether provider staff may review content, and how to delete it all need checking per service.

### 3. Does it fit my workplace's rules?
Employees using AI tools the company hasn't approved is known as **shadow AI**, flagged as a risk because it can lead to data leaks and regulatory violations. If your workplace has designated tools or usage guidelines, start there.

### Japan's Personal Information Protection Commission guidance
In June 2023, Japan's Personal Information Protection Commission (PPC) issued a notice on generative AI services. Its points include:
- When a business enters **prompts containing personal information**, confirm the use stays within the specified purpose of use.
- Entering **personal data** without the individual's consent, where that data is then handled for purposes beyond generating the response (such as machine learning), may violate the Act on the Protection of Personal Information. Businesses should therefore **confirm that the provider does not use that data for machine learning**.
- Individual users should also weigh the risk that personal information they enter may be used for training and surface in outputs combined with other information, and check the provider's terms and privacy policy before deciding.

### Practical habits
- Where you can, **strip or mask** personal and confidential details before use — replace names with placeholders, extract only the needed part.
- For information that must never leave your device, a locally run model is an option (see the lesson in the Comparing the Major Chat AIs track).
- When an agent reads your files or email, keep its reach as narrow as possible (see the safety lesson in the AI Agents track).`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "個人情報保護委員会の注意喚起で、事業者が個人データを含むプロンプトを入力する前に確認すべきとされていることは？",
        en: "Per Japan's PPC notice, what should a business confirm before entering a prompt containing personal data?",
      },
      choices: [
        {
          ja: "提供事業者がそのデータを機械学習に利用しないこと等",
          en: "That the provider does not use that data for machine learning, among other things",
        },
        { ja: "回答が日本語で返ってくること", en: "That the answer will come back in Japanese" },
        { ja: "サービスの無料枠が残っていること", en: "That free-tier quota remains" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "回答の生成以外の目的（機械学習など）で扱われると個人情報保護法に違反するおそれがあるため、学習に利用しないことの確認が求められています。",
        en: "Handling the data for purposes beyond generating the response, such as training, may violate the law, so confirming non-use for training is required.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "同じ会社のAIサービスなら、個人向けプランでも法人向けプランでも入力内容の扱いは必ず同じである。",
        en: "If the AI service comes from the same company, input is always handled the same way on consumer and business plans.",
      },
      answer: false,
      explanation: {
        ja: "個人向けプランと法人向けプラン・APIでは学習利用や保存の条件が異なることが多く、個別に確認が必要です。",
        en: "Consumer plans and business plans or APIs often differ on training use and retention — check each one.",
      },
    },
  ],
  sources: [
    {
      label: "個人情報保護委員会: 生成AIサービスの利用に関する注意喚起等（2023年6月2日）",
      url: "https://www.ppc.go.jp/news/careful_information/230602_AI_utilize_alert/",
    },
    { label: "OpenAI Docs: Your data", url: "https://developers.openai.com/api/docs/guides/your-data" },
    {
      label: "Anthropic Privacy Center: Is my data used for model training?",
      url: "https://privacy.claude.com/en/articles/10023580-is-my-data-used-for-model-training",
    },
    { label: "IBM: What is shadow AI?", url: "https://www.ibm.com/think/topics/shadow-ai" },
  ],
  lastVerified: "2026-10-06",
  glossaryRefs: ["shadow-ai", "open-weight"],
};
