import type { Lesson } from "@/engine/content/types";

export const childrenAndAi: Lesson = {
  id: "ai-and-society-06",
  slug: "children-and-ai",
  title: {
    ja: "子どもとAI — 年齢の条件・保護者向けの機能・家庭での話し方",
    en: "Children and AI: Age Rules, Parental Controls, and Talking It Through at Home",
  },
  summary: {
    ja: "高校生の半数近くが生成AIを使う時代。サービスごとの年齢の条件、保護者が使える設定とその限界、子どもと話しておきたいことを、公式の規約とヘルプから確かめる。",
    en: "Nearly half of Japanese high school students now use generative AI. Each service's age rules, the parental settings available and their limits, and what to talk through with children — checked against official terms and help pages.",
  },
  body: {
    ja: `## 子どもはもう使っている

こども家庭庁の令和7年度の調査（10〜17歳、2025年11〜12月に実施）で、インターネットを何に使っているかを尋ねた質問に「生成AI」と答えたのは、高校生の46.2%、中学生の30.8%、小学生（10歳以上）の8.6%でした。この項目は、この年度の調査から新しく加わったものです。使わせるかどうかを考える前に、すでに身近な道具になっていると考えた方が現実的です。

### 年齢の条件はサービスごとに違う
チャットAIの多くは、利用規約で年齢の条件を決めています。2026年10月時点で、たとえば次のとおりです。
- **ChatGPT**: OpenAIの利用規約（2026年1月1日発効）は、13歳以上、またはその国で利用に同意するのに必要な最低年齢以上であることを求め、18歳未満は親権者などの許可を得る必要があるとしています。
- **Geminiアプリ**: Googleのヘルプによると、13歳未満の子どもも、保護者が「Googleファミリーリンク」で管理するアカウントなら、保護者がアクセスを有効にすれば使えます。子どもが初めて使うと、保護者にメールで通知が届きます。13歳未満は「アクティビティの保存」の設定を使えません。

条件はサービスによって違い、改定もされます。使う前に、そのサービスの最新の規約を確かめましょう。学校での使い方については、[AIで学ぶ](/ja/learn/society/learning-with-ai)のレッスンで紹介した文部科学省のガイドラインも参考になります。

### 保護者向けの機能と、その限界
- **ChatGPTのペアレンタルコントロール**: 保護者と10代の子どもがアカウントを連携すると、保護者は一部の設定を管理できます。2026年10月時点のヘルプでは、使えない時間帯の設定、音声モード・画像の生成・保存されたメモリの利用のオン/オフ、会話をモデルの改善に使うかどうか、刺激の強い内容を減らす設定などがあります。深刻な自傷の懸念など、安全に関わる限られた場面では保護者に通知が届くことがあります。一方で、連携しても保護者が子どもの会話や履歴を見ることはできず、通知はリアルタイムの監視ではないと明記されています。子どもが連携を解除すると、保護者に知らされます。
- **Geminiアプリ**: 保護者はファミリーリンクで、子どものGeminiアプリの利用をオン/オフできます。Googleは、ログインしている未成年者向けに、Geminiが人間だと主張したり、人間のような感情を表したり、有害なキャラクターとして振る舞ったりするのを防ぐフィルタを加えたとしています。ただし、フィルタで不適切な内容を完全に防ぐことはできず、見せたくない内容が表示されることもある、とも書いています。

どの機能も、見守りを助ける道具であって、代わりにはなりません。設定は機能の追加に合わせて変わるので、ときどき見直しましょう。

### 家庭で話しておきたいこと
Googleのヘルプは、子どもと話し合うポイントとして次のことを挙げています。
- **AIは人間ではない**: 会話はできても、自分で考えたり感情を持ったりはしない。友達として接したり、個人的な悩みや秘密を話したりする相手ではない。AIの返事が、必要以上に励ましてくれるように感じられることもある。
- **個人情報を入力しない**: 住所、学校名、家族のことなどは書き込まない。
- **答えを確かめる**: AIは、不正確な情報を事実のように示すことがある（[ハルシネーション](/ja/learn/ai-basics/hallucination)のレッスン参照）。
- **一緒に使ってみる**: 子どもが使い方を覚えるときは、保護者も一緒に試す。

使い方のルールを家庭で一緒に決め、困ったことがあれば一人で抱えずに相談できる関係をつくっておくことも、設定と同じくらい大切です。`,
    en: `## Children are already using it

In a survey by Japan's Children and Families Agency for fiscal 2025 (ages 10 to 17, conducted November–December 2025), when asked what they use the internet for, 46.2% of high school students, 30.8% of junior high school students, and 8.6% of elementary school students (aged 10 and over) chose "generative AI." It was a new item in that year's survey. It is more realistic to start from the fact that AI is already an everyday tool than from whether to allow it.

### Age rules differ by service
Most chat AIs set age requirements in their terms. As of October 2026, for example:
- **ChatGPT**: OpenAI's Terms of Use (effective January 1, 2026) require users to be at least 13, or the minimum age required in their country to consent to use the service, and say that users under 18 need a parent's or legal guardian's permission.
- **The Gemini app**: according to Google's help pages, children under 13 can use it on an account a parent manages with Google Family Link, once the parent turns access on. When the child first uses it, the parent gets an email notification. Users under 13 can't use the Gemini Apps Activity setting.

Requirements differ from service to service and get revised, so check a service's latest terms before using it. For use at school, the Japanese education ministry's guidelines introduced in the [learning with AI](/en/learn/society/learning-with-ai) lesson are also a useful reference.

### Parental controls, and their limits
- **ChatGPT's parental controls**: when a parent and a teen link their accounts, the parent can manage selected settings. As of October 2026, its help page lists settings such as quiet hours when ChatGPT can't be used; turning voice mode, image generation, and the use of saved memories on or off; whether conversations may be used to improve the models; and an option to reduce sensitive content. In limited situations involving a serious safety concern, such as serious self-harm risk, the parent may be notified. But linking does not give the parent access to the teen's conversations or chat history, and the help page states that safety notifications are not real-time monitoring. If the teen unlinks the accounts, the parent is notified.
- **The Gemini app**: parents can turn a child's access to the Gemini app on or off in Family Link. Google says it has added content filters for signed-in minors designed to stop Gemini from claiming to be human, expressing human-like emotions, or acting as a harmful character. It also says these filters can limit inappropriate content only to some extent, so a child may still see content you would rather they didn't.

All of these features help with supervision; none replaces it. Settings change as features are added, so review them from time to time.

### What to talk through at home
Google's help page suggests discussing these points with your child:
- **AI isn't a person**: it can hold a conversation, but it doesn't think or feel for itself. It isn't a friend, or someone to tell about personal problems or secrets. Its replies can sometimes feel overly encouraging.
- **Don't share personal information**: no home address, school name, or details about the family.
- **Double-check answers**: AI can present inaccurate information as fact (see the [hallucination](/en/learn/ai-basics/hallucination) lesson).
- **Try it together**: when a child is learning to use it, try the tools alongside them.

Setting household rules together, and making sure your child can come to you instead of keeping a problem to themselves, matters as much as any setting.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "ChatGPTのペアレンタルコントロールでアカウントを連携した保護者が、できないことはどれ？",
        en: "Which of these can a parent NOT do after linking accounts with ChatGPT's parental controls?",
      },
      choices: [
        { ja: "子どもの会話の内容や履歴を見る", en: "Read the teen's conversations and chat history" },
        { ja: "使えない時間帯を設定する", en: "Set quiet hours when ChatGPT can't be used" },
        { ja: "音声モードや画像の生成をオフにする", en: "Turn off voice mode or image generation" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "連携しても、保護者が子どもの会話や履歴を見ることはできません。安全に関わる限られた場面で通知が届くことはありますが、リアルタイムの監視ではありません。",
        en: "Linking does not give the parent access to the teen's conversations or history. Notifications may come in limited safety situations, but they are not real-time monitoring.",
      },
    },
    {
      kind: "multi",
      prompt: {
        ja: "子どもとAIについて話すときに伝えておきたいことを、すべて選んでください。",
        en: "What is worth telling a child about AI? Select all that apply.",
      },
      choices: [
        {
          ja: "AIは人間ではなく、悩みや秘密を打ち明ける友達ではない",
          en: "AI isn't a person, and it isn't a friend to confide problems or secrets to",
        },
        { ja: "住所や学校名などの個人情報は入力しない", en: "Don't enter personal details such as your address or school name" },
        { ja: "AIの答えが間違っていることもある", en: "AI's answers can be wrong" },
        { ja: "AIの答えは、先生や教科書より正確だ", en: "AI's answers are more accurate than teachers or textbooks" },
      ],
      correctIndexes: [0, 1, 2],
      explanation: {
        ja: "Googleのヘルプも、AIは人間ではないこと、個人情報を共有しないこと、回答を確かめることを、子どもと話し合うポイントに挙げています。AIは不正確な情報を事実のように示すことがあります。",
        en: "Google's help page likewise lists that AI isn't a person, not sharing personal information, and double-checking answers as points to discuss. AI can present inaccurate information as fact.",
      },
    },
  ],
  sources: [
    {
      label: "こども家庭庁: 令和7年度 青少年のインターネット利用環境実態調査 調査結果（概要）（2026-03）",
      url: "https://www.cfa.go.jp/assets/contents/node/basic_page/field_ref_resources/9a55b57d-cd9d-4cf6-8ed4-3da8efa12d63/67f41585/20260327_policies_youth-kankyou_internet_research_results-etc_21.pdf",
    },
    { label: "OpenAI: 利用規約（2026年1月1日発効）", url: "https://openai.com/ja-JP/policies/row-terms-of-use/" },
    {
      label: "OpenAI Help: Managing parental controls in ChatGPT",
      url: "https://help.openai.com/en/articles/12315553-managing-parental-controls-in-chatgpt",
    },
    {
      label: "Gemini アプリ ヘルプ: お子様による Gemini アプリの利用をサポートする",
      url: "https://support.google.com/gemini/answer/16109150?hl=ja",
    },
  ],
  lastVerified: "2026-10-07",
  glossaryRefs: ["parental-controls", "hallucination"],
};
