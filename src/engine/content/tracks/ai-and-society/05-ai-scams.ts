import type { Lesson } from "@/engine/content/types";

export const aiScams: Lesson = {
  id: "ai-and-society-05",
  slug: "ai-scams",
  title: {
    ja: "AIを使った詐欺 — 声・顔・有名人をかたる手口と確かめ方",
    en: "AI-Enabled Scams: Borrowed Voices, Faces, and Famous Names — and How to Check",
  },
  summary: {
    ja: "AIで声や顔、文章をまねるのが簡単になり、詐欺の「材料」も手に入りやすくなった。日本で被害の大きい手口と、見抜くより確かめるための習慣、相談先。",
    en: "AI makes it easy to imitate voices, faces, and writing — handing scammers new materials. The schemes doing the most damage in Japan, habits for checking rather than spotting, and where to get help.",
  },
  body: {
    ja: `## 「本人の声」「本人の顔」が証拠にならない

AIを使えば、実在の人の声や顔をまねた音声や動画を作れます（[ディープフェイクと来歴情報](/ja/learn/generative-media/deepfakes-and-provenance)のレッスン参照）。警察庁は、SNSなどで知り合った相手について、公開された写真や翻訳アプリ、AIなどを使えば誰でも簡単に他人になりすまし、本人の音声や動画を作れてしまうとして、チャットや電話、ビデオ電話でどれだけ親しくなっても、本人ではない者がなりすましている可能性があると呼びかけています。

### 日本での被害の大きさ
警察庁の統計（2025年の確定値）では次のとおりです。
- **特殊詐欺**: 認知件数27,832件、被害額1,423.1億円。被害額は前年のほぼ2倍（+98.0%）でした。
- **SNS型投資・ロマンス詐欺**: 15,168件、1,834.3億円。うち投資詐欺が9,523件・1,288.0億円、ロマンス詐欺が5,645件・546.4億円です。

この統計は手口や最初に接触した手段ごとに数えられていて、AIが使われた件数の内訳はありません。AIは独立した手口というより、どの手口にも混ぜられる「材料」と考えると分かりやすいでしょう。警察庁は、手口が巧妙になり、犯人と接触してしまえば誰でもだまされるおそれがあるとして、そもそも犯人からの電話を受けずに済む仕組みを重視しています。

### よくある手口
1. **著名人をかたる投資の広告**: 2025年は、YouTubeなどのバナー広告から投資のグループに誘う被害が増え、著名人の画像や動画を無断で使い、「必ずもうかる」「元本保証」とうたう広告が確認されています。警察庁が挙げる特徴は、①動画の口の動きと声が合わない・日本語の表記がおかしい、②著名人を名乗るのに認証されていないアカウント、③LINEへの登録に誘う、④「必ずもうかる」などの甘い文句、です。ただし、生成の技術が上がれば不自然さは消えていきます。特徴に当てはまらないことは、本物の証拠になりません。
2. **SNSで知り合った相手（ロマンス詐欺）**: 会ったことのない相手から、投資や結婚費用などの名目でお金を求められたら詐欺を疑ってください。マッチングアプリで知り合ってすぐLINEに誘われるのも、警察庁が挙げる注意点です。
3. **家族を名乗る電話**: 「風邪をひいて喉の調子が悪い」「携帯電話をなくして番号が変わった」と言って、声が違っても不自然に思われないようにし、新しい番号を登録させる手口が知られています。声をまねる技術がある今は、声がそっくりでも安心できません。
4. **警察官を名乗る（ニセ警察詐欺）**: 2025年は11,014件・1,005.0億円の被害がありました。「あなたの口座が事件に関与している疑いがある」などと捜査を装い、SNSで逮捕状の画像を送ってくることもあります。被害は20代・30代にも広がっています。

### 見抜くより、確かめる
声や顔、送られてきた身分証や逮捕状の画像は、どれも偽れます。本物かどうかを見た目で判断しようとせず、手順で確かめます。
1. **お金の話が出たら、いったん切る**: 政府広報は、電話でお金の話が出たらいったん切り、慌てずに今まで使っていた家族の番号にかけて確かめるよう勧めています。相手が教える番号ではなく、自分が知っている番号や、自分で調べた公式の連絡先にかけ直します。
2. **家族で合言葉を決めておく**: 「今度どこに連れて行ってくれるの？」のような家族にしか分からない合言葉を決め、家族を名乗る電話ではまず合言葉を確かめます（政府広報）。
3. **投資の話は、本人と業者を確かめる**: 国民生活センターは、著名人の公式サイトや公式アカウントで投資に関する注意喚起が出ていないかをまず確かめること、日本の居住者を相手に株やFX、暗号資産などの取引業を行うには登録が必要なので、金融庁のホームページで登録の有無を確かめることを勧めています。振込先に個人名義の口座を指定されたら、それは詐欺です。「AI診断」「AIが自動で売買」をうたう勧誘と、お金の相談でAIに任せてよい範囲は、[お金の相談でAIを使うとき](/ja/learn/ai-in-daily-life/money-questions)のレッスンで扱います。
4. **かかってくる経路を減らす**: 特殊詐欺に使われる電話番号の約7割は国際電話番号です（2025年7月末時点）。ふだん国際電話を使わないなら、固定電話は「国際電話不取扱受付センター」に申し込めば国際電話を無料で止められ、スマートフォンも着信設定やセキュリティアプリで国際電話番号からの着信を制限できます。
5. **一人で決めない**: 迷ったら家族や身近な人に話し、警察相談専用電話「#9110」（電話をかけた地域の警察の相談窓口につながる）や、消費者ホットライン「188」（最寄りの消費生活センターなどにつながる）に相談します。`,
    en: `## A familiar voice or face is no longer proof

With AI, anyone can make audio or video that imitates a real person's voice or face (see the [deepfakes and provenance](/en/learn/generative-media/deepfakes-and-provenance) lesson). Japan's National Police Agency (NPA) warns that with photos posted online, translation apps, and AI, anyone can easily pose as someone else and create that person's voice and video — so however close you become to someone through chat, calls, or video calls, it may be someone else pretending to be them.

### How big the damage is in Japan
NPA statistics for 2025 (final figures):
- **"Special fraud" (tokushu sagi — phone-based and similar fraud)**: 27,832 cases and 142.31 billion yen in losses. Losses nearly doubled from the year before (+98.0%).
- **Social-media investment and romance scams**: 15,168 cases and 183.43 billion yen — investment scams 9,523 cases and 128.80 billion yen, romance scams 5,645 cases and 54.64 billion yen.

These statistics are broken down by method and by how victims were first contacted; they do not count how many cases used AI. It helps to think of AI less as a separate scheme than as a material that can be mixed into any scheme. The NPA notes that the methods have grown so sophisticated that anyone can be fooled once in contact with the criminals, so it puts weight on measures that keep their calls from reaching you at all.

### Common schemes
1. **Investment ads impersonating celebrities**: in 2025, more victims were drawn from banner ads — on YouTube and elsewhere — into investment groups, with ads using celebrities' images or videos without permission and promising things like "guaranteed profits" or "principal guaranteed." The signs the NPA lists: (1) the mouth movements don't match the voice in the video, or the Japanese text is wrong; (2) an account claiming to be a celebrity isn't verified; (3) it pushes you to register on LINE; and (4) too-good-to-be-true promises such as "guaranteed profits." But as generation improves, the unnatural signs fade. Not matching these signs is no proof that something is real.
2. **People met on social media (romance scams)**: if someone you've never met in person asks for money for an investment, wedding costs, or the like, suspect a scam. Being pushed to move to LINE soon after matching on a dating app is another warning sign the NPA lists.
3. **Calls from "family members"**: a known pattern starts with "I have a cold and my throat is bad" or "I lost my phone and my number changed," so a different-sounding voice doesn't raise suspicion, and gets you to save a new number. Now that voices can be imitated, a voice that sounds exactly right is no reassurance either.
4. **Fake police**: in 2025 there were 11,014 cases and 100.50 billion yen in losses. The callers pose as investigators — "your account is suspected of being involved in a crime" — and may even send an image of an arrest warrant over social media. Victims now include people in their 20s and 30s.

### Check, don't try to spot
Voices, faces, and images of ID cards or arrest warrants can all be faked. Instead of judging authenticity by how things look or sound, follow a procedure.
1. **When money comes up, hang up**: the Japanese government's public relations office advises hanging up as soon as money comes up on a call, and calmly calling the family member back on the number you have always used. Call back on a number you know or official contact details you looked up yourself — never one the caller gives you.
2. **Agree on a family password**: decide on a question only your family can answer — such as "Where are you taking me next time?" — and check it first whenever a caller claims to be family (government public relations office).
3. **For investment offers, check the person and the firm**: Japan's National Consumer Affairs Center advises first checking the celebrity's official website or accounts for any warning about investment offers, and — because firms dealing in stocks, FX, crypto-assets, and the like with residents of Japan must be registered — checking registration on the Financial Services Agency's website. If you are told to send money to an account in an individual's name, it is a scam. Pitches built on an "AI diagnosis" or "AI that trades for you," and how far to trust AI with money questions, are covered in the [asking AI about money](/en/learn/ai-in-daily-life/money-questions) lesson.
4. **Cut off the routes calls come in by**: about 70% of the phone numbers used in special fraud are international numbers (as of the end of July 2025). If you don't normally make international calls, you can stop international calls to a landline for free through Japan's International Call Suspension Center, and limit calls from international numbers on a smartphone through its call settings or a security app.
5. **Don't decide alone**: if in doubt, talk to family or someone close, and contact the police consultation line "#9110" (connects to the police consultation desk for the area you call from) or the consumer hotline "188" (connects to your nearest consumer affairs center).`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "SNSの広告で、有名な経営者が「必ずもうかる」投資グループへの参加を勧める動画を見た。口の動きも声も自然で、本人にしか見えない。まずすべきことは？",
        en: "A social media ad shows a well-known executive urging you to join a \"guaranteed profit\" investment group. The lip-sync and voice look natural; it seems to be them. What should you do first?",
      },
      choices: [
        {
          ja: "本人の公式サイトや公式アカウントで注意喚起が出ていないか確かめ、業者が金融庁に登録されているかも調べる",
          en: "Check the person's official site or accounts for warnings, and check whether the firm is registered with the Financial Services Agency",
        },
        {
          ja: "動画が自然なので本物と判断し、案内どおりLINEに登録する",
          en: "Decide it's real because the video looks natural, and register on LINE as instructed",
        },
        {
          ja: "AI検出ツールで動画を調べ、「本物」と出たら参加する",
          en: "Run the video through an AI detector and join if it says the video is real",
        },
      ],
      correctIndex: 0,
      explanation: {
        ja: "不自然さがないことは本物の証拠になりません。国民生活センターは、本人の公式の発信と金融庁の登録を確かめるよう勧めています。「必ずもうかる」という誘い文句やLINEへの誘導は、警察庁が挙げる典型的な特徴です。",
        en: "Looking natural proves nothing. Japan's National Consumer Affairs Center advises checking the person's official channels and the firm's registration with the Financial Services Agency. \"Guaranteed profits\" and a push to LINE are typical signs the NPA lists.",
      },
    },
    {
      kind: "multi",
      prompt: {
        ja: "家族を詐欺から守る備えとして、適切なものをすべて選んでください。",
        en: "Which are good ways to protect your family from scams? Select all that apply.",
      },
      choices: [
        { ja: "家族にしか分からない合言葉を決めておく", en: "Agree on a password only your family would know" },
        {
          ja: "ふだん使わないなら、固定電話の国際電話を止める手続きをする",
          en: "If you don't use them, have international calls to your landline stopped",
        },
        {
          ja: "電話でお金の話が出たら、相手が教えた新しい番号にかけ直して確かめる",
          en: "If money comes up on a call, call back on the new number the caller gave you to check",
        },
        { ja: "迷ったら#9110や188、身近な人に相談する", en: "If in doubt, consult #9110, 188, or someone close to you" },
      ],
      correctIndexes: [0, 1, 3],
      explanation: {
        ja: "かけ直すのは、相手が教えた番号ではなく、今まで使っていた番号や自分で調べた公式の番号です。合言葉・国際電話の利用休止・相談の3つは、政府広報も勧める備えです。",
        en: "Call back on the number you have always used or one you looked up yourself — never the caller's new number. A family password, suspending international calls, and talking to someone are all measures the government recommends.",
      },
    },
  ],
  sources: [
    {
      label: "警察庁: 令和7年における特殊詐欺及びSNS型投資・ロマンス詐欺の認知・検挙状況等について（確定値）",
      url: "https://www.npa.go.jp/bureau/criminal/souni/tokusyusagi/hurikomesagi_toukei2025.pdf",
    },
    {
      label: "警察庁 SOS47: SNS型ロマンス詐欺",
      url: "https://www.npa.go.jp/bureau/safetylife/sos47/case/sns-romance/romance/",
    },
    {
      label: "国民生活センター: SNSで著名人が勧める“もうかる方法” それって本当！？（2026-09-01）",
      url: "https://www.kokusen.go.jp/news/data/n-20260901_1.html",
    },
    {
      label: "政府広報オンライン: 電話でお金の話は詐欺！親子のコミュニケーションで注意喚起を！",
      url: "https://www.gov-online.go.jp/article/202102/entry-10899.html",
    },
  ],
  lastVerified: "2026-10-07",
  glossaryRefs: ["special-fraud", "voice-cloning", "deepfake"],
};
