import type { Lesson } from "@/engine/content/types";

export const moneyQuestions: Lesson = {
  id: "ai-in-daily-life-01",
  slug: "money-questions",
  title: {
    ja: "お金の相談でAIを使うとき — 一般論と、あなたの事情を分ける",
    en: "Asking AI About Money: Separate General Information from Your Own Situation",
  },
  summary: {
    ja: "NISAや住宅ローン、保険のことをAIに聞けば整理された答えが返る。ただし、AIはあなたの全体像を知らず、制度の数字は古いことがあり、「AIで必ずもうかる」は詐欺の決まり文句。登録を受けた業者と中立の相談先、AIに任せてよい範囲。",
    en: "Ask an AI about NISA, mortgages, or insurance and you get a tidy answer. But the AI doesn't know your whole situation, its figures may be out of date, and \"guaranteed profits with AI\" is a scam's calling card. Registered firms, neutral advisers, and what you can safely leave to AI.",
  },
  body: {
    ja: `## 「一般論」と「あなたの事情」は別もの

NISAとiDeCoの違い、住宅ローンの固定と変動、保険の見直し——お金のことをチャットAIに聞くと、整理された答えがすぐに返ってきます。ただ、お金の相談でAIが頼りになる範囲と、頼ってはいけない範囲は、はっきり分けておく必要があります。

> **ご注意**: このレッスンは一般的な情報の紹介で、投資や保険などについての個別の助言ではありません。具体的な判断は、登録を受けた業者や専門家に相談してください。

### AIが知らないこと
AIが答えられるのは、学習した文章と、あなたが入力した情報から組み立てた**一般論**です。
- **あなたの全体像を知らない**: 収入と支出、家族の予定、持っている資産と借入、勤め先の制度、損をどこまで受け入れられるか。入力しなかったことは、AIにとって存在しません。答えが筋道立っていても、それは「入力した条件だけ」から出た答えです。
- **制度は変わる**: 税や年金、NISAの制度は改正され、AIの学習データには締め切りがあります（[よくある失敗パターン](/ja/learn/how-llms-work/failure-patterns)のレッスン参照）。期限・上限額・税率のような数字は、国税庁や金融庁など公的機関のページで確かめます。
- **間違いも自信をもって話す**: 米国の証券取引委員会（SEC）などが2024年1月に出した投資家向けの注意喚起は、AIが作った情報は不正確・不完全・誤解を招くデータに基づいていることがあり、正確な入力に基づく場合でも誤りや完全な作り話になりうると述べています（[ハルシネーション](/ja/learn/ai-basics/hallucination)のレッスン参照）。

### 「助言」には登録が要る
金融庁は、業者の所在地が海外であっても、日本の居住者のために、または日本の居住者を相手に金融商品取引行為を業として行う場合は、日本で金融商品取引業の登録が必要だとしています。投資の助言を仕事として行う投資助言・代理業も、この金融商品取引業の一つです。登録を受けた業者かどうかは、金融庁の「金融事業者一括検索」で、名称や電話番号から調べられます。

チャットAIの答えは、こうした登録を受けた業者の助言ではありません。AIは、質問の意味を整理したり、専門家に聞くことをまとめたりする**準備の道具**として使い、判断は自分と専門家で行います。

### 「AIが選ぶ」「AIで必ずもうかる」は、詐欺の決まり文句
- 金融庁は2025年12月の注意喚起（2026年3月更新）で、SNS上の投資勧誘の手口の一つとして、「AI診断」をうたい文句にウェブサイトへ誘い込み、分析レポートを配信すると偽ってSNSへ誘導し、投資話を持ちかける手口を挙げています。
- SEC・NASAA（北米証券監督官協会）・FINRA（金融取引業規制機構）の共同の注意喚起（2024年1月25日）は、無登録・無免許のオンライン投資プラットフォームや個人・業者が、「当社独自のAI取引システムは負けません！」「AIで確実に上がる株を選びましょう！」といった非現実的な主張でAI取引システムを宣伝していると指摘し、登録の確認と、判断の前に登録を受けた専門家に相談することを勧めています。AIで声や画像、動画を作って偽情報を広める手口にも触れています。
- 「必ず儲かる」「元本保証」は、金融庁が挙げる詐欺的な勧誘の典型的な言葉です。本物のAIが使われていたとしても、この約束は成り立ちません。

著名人をかたる広告や、家族の声をまねる電話への対処と相談先は、[AIを使った詐欺](/ja/learn/ai-and-society/ai-scams)のレッスンにまとめました。

### 中立の相談先
金融経済教育推進機構（J-FLEC）は、特定の金融機関や金融商品に偏らない中立的な立場の「J-FLEC認定アドバイザー」を認定・公表しています。2026年10月時点で、家計管理・生活設計・NISAやiDeCoといった資産形成など金融経済全般について、認定アドバイザーによる個別相談の無料体験（対面・オンラインは1人1回・最長1時間、電話は最長30分）を受け付けており、有料の相談には相談料の割引クーポン（2026年度は3,000名分を予定）もあります。アドバイザーの意見はそのアドバイザー個人のもので、J-FLECが特定の商品を勧めることはありません。

### AIの上手な使い方
1. **言葉の意味を知る**: 「特定口座と一般口座は何が違う？」のような用語の理解に使う。
2. **質問リストを作る**: 専門家や金融機関の窓口に聞くことを、AIと一緒に整理する。
3. **前提を書き出してから聞く**: 年齢・家族構成・目的・期間を書き、「一般論として選択肢と注意点を挙げて」と頼む。答えは選択肢の整理として使い、決定には使わない。
4. **数字は公式で確かめる**: 制度の数字はAIの答えではなく、公的機関のページで確かめる。
5. **入力する情報を選ぶ**: 口座番号・暗証番号・マイナンバーは入力しない。資産額のような機微な情報も、保存や学習の設定を確かめてから（[仕事でAIを使うときの情報の扱い](/ja/learn/society/data-privacy-at-work)のレッスン参照）。`,
    en: `## General information is not advice about you

The difference between NISA and iDeCo, fixed versus variable mortgage rates, whether to change your insurance — ask a chat AI about money and a well-organized answer comes straight back. But it pays to draw a clear line between where AI helps with money questions and where it must not be relied on.

> **Please note**: this lesson is general information, not individual advice about investments, insurance, or other financial products. For a specific decision, consult a registered firm or a qualified professional.

### What the AI doesn't know
What an AI can give you is **general information**, assembled from the text it was trained on and whatever you typed in.
- **It doesn't know your whole picture**: your income and spending, your family's plans, what you own and owe, your employer's schemes, how much loss you could live with. Anything you didn't enter doesn't exist for the AI. However logical the answer sounds, it follows only from the conditions you gave.
- **Rules change**: tax, pension, and NISA rules are amended, and the AI's training data has a cutoff (see the lesson on [common failure patterns](/en/learn/how-llms-work/failure-patterns)). Check figures such as deadlines, limits, and tax rates on the pages of public bodies like Japan's National Tax Agency or Financial Services Agency.
- **It states mistakes with confidence**: an investor alert issued in January 2024 by the US Securities and Exchange Commission (SEC) and others notes that AI-generated information might rely on data that is inaccurate, incomplete, or misleading, and that even when based on accurate input, information resulting from AI can be faulty, or even completely made up (see the [hallucination](/en/learn/ai-basics/hallucination) lesson).

### Advice as a business requires registration
Japan's Financial Services Agency (FSA) states that anyone who conducts financial instruments business for or with residents of Japan must be registered in Japan, even if the firm is located overseas. Investment advisory and agency business — giving investment advice as a business — is one kind of financial instruments business. You can check whether a firm is registered through the FSA's search of licensed and registered financial operators, by name or phone number.

A chat AI's answer is not the advice of a registered firm. Use the AI as a **preparation tool** — to clarify what you're asking and to organize questions for a professional — and make the decision with that professional.

### "AI picks the winners" and "guaranteed profits with AI" are scam lines
- In a December 2025 alert (updated March 2026), the FSA lists, among the schemes used in social media investment solicitations, luring people to a website with the promise of an "AI diagnosis," pretending to deliver analysis reports, steering them to social media, and pitching an investment.
- A joint investor alert from the SEC, the North American Securities Administrators Association (NASAA), and the Financial Industry Regulatory Authority (FINRA), dated January 25, 2024, says that numerous unregistered and unlicensed online investment platforms, individuals, and firms are promoting AI trading systems with unrealistic claims like "Our proprietary AI trading system can't lose!" or "Use AI to Pick Guaranteed Stock Winners!" It advises checking registration and consulting a registered investment professional before deciding, and notes that fraudsters can use AI to clone voices, alter images, and create fake videos to spread false information.
- "Guaranteed profits" and "principal guaranteed" are among the typical phrases the FSA lists for fraudulent solicitations. Even if real AI is involved, that promise cannot hold.

How to handle ads impersonating celebrities and calls imitating a family member's voice — and where to get help — is covered in the [AI-enabled scams](/en/learn/ai-and-society/ai-scams) lesson.

### A neutral place to ask
The Japan Financial Literacy and Education Corporation (J-FLEC) certifies and publishes "J-FLEC certified advisers," who advise from a neutral position not tied to particular financial institutions or products. As of October 2026, it offers free trial consultations with certified advisers — one in-person or online session per person of up to an hour, or up to 30 minutes by phone — on household budgeting, life planning, and building assets through NISA, iDeCo, and the like, plus discount coupons for paid consultations (3,000 planned for fiscal 2026). An adviser's opinion is that adviser's own; J-FLEC does not recommend specific products.

### Good ways to use AI
1. **Learn the vocabulary**: questions like "What's the difference between a specified account and a general account?"
2. **Build a list of questions**: organize, with the AI, what to ask a professional or your bank.
3. **Write down your premises first**: age, household, goal, time horizon — then ask for "the options and caveats, in general terms." Use the answer to organize options, not to decide.
4. **Check figures against official sources**: take rule-based numbers from public bodies' pages, not from the AI.
5. **Choose what you enter**: never type in account numbers, PINs, or your My Number. For sensitive details such as your net worth, check the storage and training settings first (see [handling information when using AI at work](/en/learn/society/data-privacy-at-work)).`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "SNSで「AIが自動で売買するので、必ずもうかる」という投資サービスの広告を見た。まず確かめることとして適切なのは？",
        en: "A social media ad promotes an investment service: \"Our AI trades automatically, so profits are guaranteed.\" What is the right first check?",
      },
      choices: [
        {
          ja: "金融庁の金融事業者一括検索で業者の登録を確かめる。「必ずもうかる」とうたっている時点で、詐欺的な勧誘を疑う",
          en: "Check the firm's registration in the FSA's search of licensed financial operators — and treat \"guaranteed profits\" itself as a sign of a fraudulent pitch",
        },
        {
          ja: "本当にAIを使っているか、技術の説明を読んで判断する",
          en: "Read the technical explanation to judge whether it really uses AI",
        },
        {
          ja: "少額なら損をしても困らないので、まず試してみる",
          en: "Try it with a small amount first, since a small loss wouldn't hurt",
        },
      ],
      correctIndex: 0,
      explanation: {
        ja: "日本の居住者を相手に金融商品取引業を行うには登録が必要で、登録の有無は金融庁の検索で調べられます。「必ず儲かる」「元本保証」は金融庁が挙げる詐欺的な勧誘の典型的な言葉で、本物のAIが使われていても成り立ちません。",
        en: "Financial instruments business with residents of Japan requires registration, which you can check in the FSA's search. \"Guaranteed profits\" and \"principal guaranteed\" are typical phrases the FSA lists for fraudulent solicitations — and no real AI can make that promise true.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "チャットAIに家計や資産の状況を詳しく入力すれば、その答えは登録を受けた業者の助言と同じように扱ってよい。",
        en: "If you enter your household finances and assets in detail, a chat AI's answer can be treated the same as advice from a registered firm.",
      },
      answer: false,
      explanation: {
        ja: "詳しく入力しても、AIは入力されなかった事情を知らず、制度の数字が古いことや作り話を含むこともあります。投資の助言を業として行うには登録が必要で、AIの答えはその助言ではありません。選択肢の整理や質問リストづくりに使い、判断は専門家と行います。",
        en: "However much you enter, the AI still doesn't know what you left out, may use outdated figures, and may make things up. Giving investment advice as a business requires registration, and an AI's answer is not that advice. Use it to organize options and questions, and decide with a professional.",
      },
    },
  ],
  sources: [
    {
      label: "金融庁: 詐欺的な投資勧誘等にご注意ください！（2026-06-24 更新）",
      url: "https://www.fsa.go.jp/ordinary/chuui/attention.html",
    },
    {
      label: "金融庁: それ詐欺です！SNS上の投資勧誘にご注意ください！（2025-12-23、2026-03-05 更新）",
      url: "https://www.fsa.go.jp/receipt/toushisagi_koukoku/shuhou.html",
    },
    {
      label: "FINRA / SEC / NASAA: Investor Alert — Artificial Intelligence (AI) and Investment Fraud (2024-01-25)",
      url: "https://www.finra.org/investors/insights/artificial-intelligence-and-investment-fraud",
    },
    {
      label: "金融経済教育推進機構（J-FLEC）: 専門家に相談したい",
      url: "https://www.j-flec.go.jp/public/consult/",
    },
  ],
  lastVerified: "2026-10-10",
  glossaryRefs: ["unregistered-operator", "j-flec", "hallucination", "special-fraud"],
};
