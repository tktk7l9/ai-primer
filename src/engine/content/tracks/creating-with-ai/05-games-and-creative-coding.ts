import type { Lesson } from "@/engine/content/types";

export const gamesAndCreativeCoding: Lesson = {
  id: "creating-with-ai-05",
  slug: "games-and-creative-coding",
  title: {
    ja: "ゲーム・コードで作る — 趣味の開発にAIを使い、素材の由来と公開先のルールを押さえる",
    en: "Games and Creative Coding with AI: Hobby Projects, Where Your Assets Come From, and the Rules of Stores and Jams",
  },
  summary: {
    ja: "自然言語でコードを書かせる「バイブコーディング」で、ゲームや動く作品を一人でも作れるようになった。コーディングAIトラックの安全策に加え、素材の由来、SteamとItch.ioの申告、ゲームジャムごとに違うAIのルールを扱う。",
    en: "With \"vibe coding\" — getting AI to write code from plain language — one person can build a game or an interactive piece. Beyond the coding-AI track's safety rules: where assets come from, Steam's and itch.io's disclosures, and how game jams differ on AI.",
  },
  body: {
    ja: `## 一人でも「動くもの」が作れる時代に

補完・チャット・エージェント型の違い、ターミナルで動くエージェント、安全な使い方は[コーディングAI](/ja/learn/coding-ai)トラックで扱いました。このレッスンは、仕事ではなく趣味として、ゲームや動く作品（ジェネラティブアート、インタラクティブな展示、ちょっとしたツール）を作る人のためのものです。

### バイブコーディングとクリエイティブコーディング
Collins英語辞典は2025年11月6日、「**バイブコーディング**」（自然言語で指示して人工知能にコンピュータのコードを書かせること）を2025年の「今年の言葉」に選びました。欲しいものを言葉で伝えて、動いたら次へ、という作り方です。一方、プログラミングを表現の手段にする**クリエイティブコーディング**には、以前から入門しやすい道具があります。たとえばp5.jsは自らを「コードを学び、アートを作るためのやさしい道具」と説明し、アーティスト・デザイナー・初心者・教育者を歓迎すると書いています。

AIが入ると、この二つはつながります。「画面いっぱいに粒子が流れ、マウスに反応する」と伝えればp5.jsのスケッチが返ってきますし、「上から敵が降ってくる、3回当たったら終わり」と伝えればゲームの骨組みが返ってきます。趣味の開発で効くコツは次のとおりです。
- **小さく回す**: 一度に全部を頼まず、1機能ずつ動かして確かめる。動かなくなったら前の状態に戻せるよう、バージョン管理（Gitなど）を使う。
- **読める範囲で進める**: 自分で直せないコードが増えると、不具合のたびにAI任せになります。分からない部分は「この関数は何をしている？」と説明させて、理解を追いつかせる。
- **安全策は仕事と同じ**: 秘密情報のファイルを読ませない、破壊的な操作は確認してから（[安全な使い方](/ja/learn/coding-ai/safe-usage)のレッスン参照）。
- **実行時にAIを呼ぶなら**: NPCの会話をその場でLLMに作らせるような設計は、プレイヤーの入力がそのまま指示になりうる構造です（[プロンプトインジェクション](/ja/learn/ai-agents/prompt-injection)のレッスン参照）。

### 素材の由来を把握する
ゲームには絵・音・文章・声が要ります。AIで作るなら、[画像を作る](/ja/learn/creating-with-ai/making-images)・[音楽を作る](/ja/learn/creating-with-ai/making-music)のレッスンで見た規約とポリシーがそのまま当てはまります。配布する作品では、**どの素材をどのツールのどのプランで作ったか**を一覧にしておきます。公開先への申告にも、後で問い合わせを受けたときにも使えます。

### 公開先のルール — SteamとItch.io
> **ご注意**: 以下は2026年10月時点の各社が公開しているルールの紹介です。公開前に最新の原文を確かめてください。

- **Steam**: Steamworksのドキュメントは、コンテンツ調査（Content Survey）でAIの利用を申告するよう求め、AIコンテンツを二つに分けています。**事前生成**（開発中にAIツールの助けを借りて作られ、ゲームと一緒に出荷されてプレイヤーが触れるあらゆるコンテンツ）と、**ライブ生成**（ゲームの実行中にAIツールの助けを借りて作られるコンテンツ）です。ライブ生成については、違法なコンテンツを生成しないためにどんな**ガードレール**を設けているかを説明する必要があり、ライブ生成による成人向けの性的コンテンツは現時点では出荷したくないとしています。どちらの場合も、配信契約に基づいて違法・権利侵害のコンテンツを含めないという約束は変わりません。
- **Itch.io**: 2024年11月20日の告知で、プロジェクトの編集画面に「生成AIを使ったか」の質問を設けました。素材（アセット）の販売者には回答が必須で、ゲームの開発者には回答が求められます。「はい」なら**AI Generated**のタグと、Graphics・Sound・Text & Dialog・Codeの区分タグが、「いいえ」なら**No AI**のタグが付きます。生成AIで作られた素材（後から手を加えた場合も含む）にタグが付いていないと、閲覧ページの索引から外されます。

### ゲームジャムはルールが分かれる
短期間でゲームを作るイベント（ゲームジャム）は、AIの扱いがイベントごとに違います。
- **GMTK Game Jam 2025**（2025年7月30日〜8月3日）: ゲームやItch.ioのページの**絵と音の素材に生成AIを使ってはならず**、違反は失格でした。AI全般の利用を控えるよう求めつつ、実際に取り締まれるのは絵と音の素材だとも書いています。
- **Ludum Dare**: AIアシスタントや「コパイロット」型のツールは制限なく使えますが、生成ツールが大半の仕事をした部門（主にグラフィックやオーディオ）では**その部門の採点を辞退**するよう求めています。使ったツールの適法性は参加者の責任で、ツールの学習データが許諾されたものかを知っておくべきだとしています。

参加する前に、そのジャムの「AI」の項目を読むのが先です。`,
    en: `## When one person can build something that runs

The difference between completion, chat, and agentic tools, agents that run in the terminal, and safe practices were covered in the [Coding AI](/en/learn/coding-ai) track. This lesson is for people building as a hobby rather than for work: games and interactive pieces — generative art, interactive installations, small tools.

### Vibe coding and creative coding
On November 6, 2025, Collins Dictionary named "**vibe coding**" — the use of artificial intelligence prompted by natural language to write computer code — its Word of the Year 2025. You say what you want, see it run, and move on. Meanwhile, **creative coding** — programming as a medium of expression — has long had beginner-friendly tools: p5.js describes itself as a friendly tool for learning to code and make art, and says it welcomes artists, designers, beginners, and educators.

With AI, the two meet. Say "particles flowing across the whole screen that react to the mouse" and you get a p5.js sketch; say "enemies fall from the top, three hits and it's over" and you get the skeleton of a game. Habits that pay off in hobby projects:
- **Work in small loops**: don't ask for everything at once; get one feature running and check it. Use version control (such as Git) so you can go back when something breaks.
- **Stay within what you can read**: the more code you can't fix yourself, the more every bug becomes the AI's job. Ask "what does this function do?" and let your understanding catch up.
- **Same safety rules as at work**: keep files with secrets out of the AI's reach and confirm destructive operations yourself (see the [safe usage](/en/learn/coding-ai/safe-usage) lesson).
- **If the game calls an AI at runtime**: a design where an LLM writes NPC dialogue on the fly is one where a player's input can become an instruction (see the [prompt injection](/en/learn/ai-agents/prompt-injection) lesson).

### Know where your assets come from
A game needs art, sound, text, and voices. If AI makes them, the terms and policies covered in [making images](/en/learn/creating-with-ai/making-images) and [making music](/en/learn/creating-with-ai/making-music) apply directly. For anything you distribute, keep a list of **which asset was made with which tool on which plan** — you'll need it for store disclosures and for any question that comes later.

### Store rules: Steam and itch.io
> **Please note**: these are the rules as published by each company in October 2026. Check the current originals before you publish.

- **Steam**: the Steamworks documentation asks developers to disclose AI use in the Content Survey and splits AI content in two. **Pre-generated** is any kind of content that ships with your game and is consumed by players that was created with the help of AI tools during development; **live-generated** is any kind of content created with the help of AI tools while the game is running. For live-generated content you must describe the **guardrails** that keep the AI from generating illegal content, and Valve says it does not want to ship live-generated adult-only sexual content at this time. In both cases, the promise under the distribution agreement not to include illegal or infringing content still stands.
- **itch.io**: in an announcement on November 20, 2024, itch.io added a question to the project editor asking whether generative AI was used. Answering is mandatory for asset creators and requested of game developers. "Yes" applies an **AI Generated** tag plus sub-tags for Graphics, Sound, Text & Dialog, or Code; "no" applies a **No AI** tag. Assets made with generative AI (even if modified afterwards) that are not tagged are no longer eligible for indexing on the browse pages.

### Game jams split on AI
Game jams — events where you build a game in a short time — treat AI differently from one to the next.
- **GMTK Game Jam 2025** (July 30 – August 3, 2025): generative AI **must not be used for art or audio assets** in the game or on its itch.io page, on pain of disqualification. The rules asked entrants to avoid AI in general while noting that only art and audio could actually be policed.
- **Ludum Dare**: AI assistants and "co-pilot" tools can be used without restriction, but you should **opt out of the categories** — typically Graphics and Audio — where a content-generation tool did most of the work. You are responsible for the legality of any tool you use, including knowing whether the data it was trained on was licensed.

Before you enter, read that jam's "AI" section first.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "NPCの会話を、プレイ中にLLMでその場で生成するゲームをSteamで配信したい。Steamworksのドキュメントが求めることはどれ？",
        en: "You want to release a game on Steam in which an LLM generates NPC dialogue on the fly during play. What does the Steamworks documentation require?",
      },
      choices: [
        {
          ja: "ライブ生成AIコンテンツとして申告し、違法なコンテンツを生成させないガードレールを説明する",
          en: "Disclose it as live-generated AI content and describe the guardrails that keep it from generating illegal content",
        },
        { ja: "実行中の生成はプレイヤーの操作の結果なので、申告は不要", en: "No disclosure is needed, since runtime generation results from the player's actions" },
        { ja: "開発中に作った素材（事前生成）だけ申告すればよい", en: "Only assets made during development (pre-generated) need to be disclosed" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "ゲームの実行中にAIツールで作られるコンテンツはライブ生成に当たり、コンテンツ調査で申告したうえで、違法なコンテンツを生成しないためのガードレールを説明する必要があります。",
        en: "Content created with AI tools while the game is running counts as live-generated: it must be disclosed in the Content Survey, together with a description of the guardrails that prevent illegal content.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "Itch.ioでは、生成AIで作った素材をあとから手直しして販売する場合、AI生成のタグを付けなくても閲覧ページの索引に載る。",
        en: "On itch.io, if you touch up assets made with generative AI before selling them, they stay indexed on the browse pages even without the AI Generated tag.",
      },
      answer: false,
      explanation: {
        ja: "告知は、生成AIで作られた素材は後から手を加えた場合も含めてタグが必要で、タグのないものは閲覧ページの索引の対象外になるとしています。素材の販売者には質問への回答が必須です。",
        en: "The announcement says assets comprised of generative AI, even if modified afterwards, must be tagged, and untagged ones are no longer eligible for indexing on the browse pages. Asset creators are required to answer the question.",
      },
    },
  ],
  sources: [
    {
      label: "Steamworks Documentation: Content Survey（AI Content）",
      url: "https://partner.steamgames.com/doc/gettingstarted/contentsurvey",
    },
    { label: "itch.io: Generative AI Disclosure tagging（2024-11-20）", url: "https://itch.io/t/4309690/generative-ai-disclosure-tagging" },
    { label: "GMTK Game Jam 2025: Rules（itch.io）", url: "https://itch.io/jam/gmtk-2025" },
    { label: "Ludum Dare: Can I use AI?", url: "https://ludumdare.com/resources/questions/can-i-use-ai/" },
  ],
  lastVerified: "2026-10-11",
  glossaryRefs: ["vibe-coding", "creative-coding", "pre-generated-and-live-generated-ai-content", "prompt-injection", "agent"],
};
