import type { Lesson } from "@/engine/content/types";

export const writingWithAi: Lesson = {
  id: "creating-with-ai-01",
  slug: "writing-with-ai",
  title: {
    ja: "文章を書く相棒としてのAI — 下書き・壁打ち・推敲と、自分の文体を手放さない使い方",
    en: "Writing with AI: Drafting, Brainstorming, and Editing Without Losing Your Voice",
  },
  summary: {
    ja: "小説やエッセイ、ブログをAIと書くと、速く上手くまとまる一方で、文章は互いに似てくる。作風を守る使い方、公募や出版の場のAI規定（星新一賞・Clarkesworld・Amazon KDP）の読み方、残しておく記録。",
    en: "Writing fiction, essays, or a blog with AI gets you faster, tidier text — and text that looks more like everyone else's. How to keep your own voice, how to read contest and publisher AI rules (the Hoshi Shinichi Award, Clarkesworld, Amazon KDP), and what records to keep.",
  },
  body: {
    ja: `## 速く、うまく、そして似てくる

仕事のメールや報告書をAIで整える方法は、[メール・文章の下書きと推敲](/ja/learn/ai-at-work/drafting-and-editing)のレッスンで扱いました。このレッスンは、小説・エッセイ・ブログ・歌詞など、**自分の名前で出す創作の文章**が対象です。事実の確認や責任の所在は仕事の文章と同じですが、創作ではもう一つ、「その文章はあなたのものか」という問いが加わります。

### 研究が示す「個人は上がり、全体は似る」
2024年にScience Advances誌に掲載されたDoshiとHauserの実験では、短い物語を書く参加者に生成AIのアイデアを使えるようにしたところ、物語は「よく書けていて楽しめる」と評価されやすくなり、特にもともと創造性の低かった書き手ほど効果が大きくなりました。一方で、AIのアイデアを使った物語どうしは、人だけで書いた物語より**互いに似ていました**。著者らはこれを、個人にとっては得でも全体としての新しさが減るという、創作をめぐる**社会的ジレンマ**として説明しています。

創作でAIを使うときに守りたいのは、この「似てくる」方向に流されないことです。

### 作風を手放さない使い方
1. **壁打ち相手にする**: 「この設定の矛盾は？」「読者が飽きそうな場面は？」と、質問に答えてもらう。案を出させるなら、そのまま採用するのではなく**自分の案を考える材料**にする。
2. **構成の相談は、書く前に**: あらすじや章立ての段階で複数案を比べ、本文は自分で書く。本文まで任せると、冒頭の一文から文体がAIのものになります。
3. **推敲は「指摘」まで**: 「書き直して」ではなく「冗長な箇所、意味の取りにくい箇所、同じ語尾の連続を指摘して」と頼み、直すかどうか、どう直すかは自分で決める。
4. **自分の文章を先に書く**: AIの文章を読んでから書くと、言い回しが引きずられます。下書きは自分で書き、AIには後から読ませる。
5. **変えない点を先に伝える**: 方言、言い回しの癖、意図的な体言止めなど、「残してほしい点」を先に指示する。

### 公募・出版の場の規定を読む
AIの扱いは、応募先や出版の場ごとにまったく違います。2026年10月時点の規定から、両極の例を見ます。

> **ご注意**: 以下は各主催者・事業者が公開している規定の紹介です。応募・出版の前に、必ず最新の原文を確かめてください。

- **日経「星新一賞」（第14回）**: 「人間以外（人工知能等）の応募作品も受付けます」と明記しています。そのうえで、利用する生成AIやツールの利用規約・ライセンスに従うこと（規約がコンテストへの応募やインターネット公開を禁じていれば応募できない）、特定の作者や作品を重点的に学習させた特化型AIを許可なく使わないこと、他者の著作物や作家名・作品名を生成AIの入力に使わないこと、プロンプトとそれによって導き出された文章の原文は審査の過程で提出を求められることがあるので必ず記録すること、応募フォームに利用した生成AIと制作過程を500文字以内で具体的に書くことを求めています。
- **Clarkesworld（米国のSF誌）**: 投稿規定で、こうしたツールで翻訳・執筆・展開・補助された作品は一切検討せず、投稿しようとすると今後の投稿を禁止されることがあると書いています。ノンフィクションやイラストも同様です。編集長のニール・クラークは2023年2月15日のブログで、チャットボットの登場後に機械が書いた投稿が急増し、その月は投稿禁止の措置に至ったスパム投稿の割合が38%に達したと報告し、2月20日には投稿の受付を一時停止しました。
- **Amazon Kindle ダイレクト・パブリッシング（KDP）**: コンテンツガイドラインで、**AI生成**（AIツールで本文・画像・翻訳そのものを作ったもの。あとで大幅に編集しても同じ）と**AI支援**（自分で作った内容をAIで編集・推敲・誤りの確認などをしたもの）を区別し、新しい本を出版するときや既存の本を改訂して再出版するときに、AI生成コンテンツを**Amazonに申告する**よう求めています。AI支援の申告は不要です。どちらの場合も、知的財産権を含むすべてのガイドラインに従う責任は著者にあります。

同じ「AI利用」でも、全面的に認めて開示を求める場、一切認めない場、生成と支援を分けて申告させる場があります。応募・出版の前に確かめるのは、(1) AIの利用が認められているか、(2) 認められている場合に何をどう開示するか、(3) 記録の提出を求められるか、の3点です。

### 残しておく記録
- 使ったツールとプラン、使った日。
- プロンプトと、AIが返した文章の原文（星新一賞のように提出を求められることがあります）。
- 自分の下書きと改稿の履歴。どこが自分の手によるものかを後から示せます。[日本の著作権法とAI](/ja/learn/generative-media/copyright-in-japan)のレッスンで見たように、人が創作的な加筆・修正をした部分には著作物性が認められやすくなります。

公開するときの表示や、読者からの反応への向き合い方は、このトラックの最後の[作品を公開するとき](/ja/learn/creating-with-ai/publishing-your-work)のレッスンでまとめます。`,
    en: `## Faster, better — and more alike

How to shape work emails and reports with AI was covered in the lesson on [drafting and editing](/en/learn/ai-at-work/drafting-and-editing). This lesson is about **creative writing you publish under your own name** — fiction, essays, a blog, lyrics. Checking facts and owning the result work the same way as at work, but creative writing adds one more question: is the text still yours?

### What research shows: individuals improve, the whole converges
In an experiment by Doshi and Hauser published in Science Advances in 2024, participants writing short stories were given access to ideas from generative AI. Their stories were rated as better written and more enjoyable, and the effect was largest for writers who were less creative to begin with. At the same time, stories written with AI ideas were **more similar to one another** than stories written by people alone. The authors describe this as a **social dilemma** for creative work: a gain for each individual, a loss of novelty for the whole.

When you write with AI, the thing to guard against is drifting toward that sameness.

### Using AI without giving up your voice
1. **Use it as a sounding board**: ask questions — "Where does this setting contradict itself?" "Which scene will bore readers?" If you ask for ideas, treat them as **material for your own ideas**, not as the answer.
2. **Discuss structure before you write**: compare several outlines or chapter plans, then write the prose yourself. Hand over the prose and the voice is the AI's from the first sentence.
3. **For editing, ask for notes, not rewrites**: not "rewrite this," but "point out anything wordy, unclear, or repetitive in rhythm." You decide whether and how to change it.
4. **Write your own version first**: read the AI's phrasing before you write, and it leaks into yours. Draft yourself; show the AI afterwards.
5. **Say what must stay**: dialect, verbal tics, a deliberately fragmented sentence — tell it up front what not to touch.

### Read the rules of contests and publishers
How AI is treated varies completely from one venue to the next. Here are two ends of the spectrum, from the rules as published in October 2026.

> **Please note**: these are summaries of rules published by each organizer or company. Always check the current original before you submit or publish.

- **The Nikkei Hoshi Shinichi Award (14th edition)**: the rules state that works by non-humans, including artificial intelligence, are accepted. Entrants must follow the terms and licenses of the generative AI and tools they use (if those terms forbid entering contests or publishing online, the work cannot be entered); must not use, without permission, a specialized AI trained intensively on particular authors or works; must not feed other people's works, or authors' or works' names, into the AI; must keep the prompts and the original text they produced, because these may have to be submitted during judging; and must describe in the entry form, in up to 500 characters, which generative AI they used and how the work was made.
- **Clarkesworld (a US science-fiction magazine)**: its submission guidelines say it will not consider any submissions translated, written, developed, or assisted by these tools, and that attempting to submit such work may result in a ban. Non-fiction and art are treated the same way. In a blog post on February 15, 2023, editor Neil Clarke reported a surge of machine-written submissions after chatbots appeared, with the share of submissions that were spam resulting in bans reaching 38% that month; on February 20 he temporarily closed submissions.
- **Amazon Kindle Direct Publishing (KDP)**: its content guidelines distinguish **AI-generated** content (text, images, or translations created by an AI tool — still AI-generated even after substantial edits) from **AI-assisted** content (content you created yourself and then edited, refined, or error-checked with AI tools). You must **tell Amazon** about AI-generated content when you publish a new book or republish an edited one; AI-assisted content need not be disclosed. In both cases the author is responsible for complying with all content guidelines, including intellectual property rights.

"Using AI" means three different things here: fully allowed with disclosure, not allowed at all, or allowed with a generated-versus-assisted declaration. Before you submit or publish, check three things: (1) is AI use allowed; (2) if so, what must be disclosed and how; (3) can you be asked to produce records?

### Records to keep
- Which tool and plan you used, and when.
- Your prompts and the original text the AI returned (contests such as the Hoshi Shinichi Award may ask for them).
- Your own drafts and revision history, so you can show later which parts are your own work. As the lesson on [Japanese copyright law and AI](/en/learn/generative-media/copyright-in-japan) explained, parts where a person made creative additions or edits are the parts most likely to be protected.

How to label your work when you publish it, and how to handle readers' reactions, is covered in the last lesson of this track, [publishing your work](/en/learn/creating-with-ai/publishing-your-work).`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "生成AIの利用を認めている文学賞に、AIを使って書いた作品を応募する。星新一賞の規定（第14回）に沿った準備はどれ？",
        en: "You're entering an AI-written story in a literary award that allows generative AI. Which preparation follows the Hoshi Shinichi Award's rules (14th edition)?",
      },
      choices: [
        {
          ja: "利用したAIと制作過程を申告できるよう、プロンプトと生成された文章の原文を記録しておく",
          en: "Keep the prompts and the original generated text so you can declare which AI you used and how the work was made",
        },
        {
          ja: "好きな作家の作品だけを学習させた特化型AIで、その作家の文体に仕上げる",
          en: "Use a specialized AI trained only on a favorite author's works to finish the story in that author's style",
        },
        {
          ja: "AIを使ったことは審査に不利になるので、申告せずに応募する",
          en: "Enter without declaring AI use, since disclosure would count against you",
        },
      ],
      correctIndex: 0,
      explanation: {
        ja: "星新一賞は、プロンプトと生成文の原文を記録して審査の過程で提出できるようにすること、利用した生成AIと制作過程を500文字以内で申告することを求め、特定の作者や作品を重点的に学習させた特化型AIを許可なく使うことや、作家名・作品名を入力に使うことを認めていません。",
        en: "The award requires entrants to keep prompts and generated text for possible submission during judging and to describe the AI used and the process in up to 500 characters. It does not allow unauthorized specialized AI trained on particular authors or works, or feeding authors' or works' names into the AI.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "Amazon KDPでは、自分で書いた原稿の誤字や言い回しをAIで直しただけでも、AI生成コンテンツとして申告しなければならない。",
        en: "On Amazon KDP, if you only used AI to fix typos and wording in a manuscript you wrote yourself, you must still declare it as AI-generated content.",
      },
      answer: false,
      explanation: {
        ja: "KDPは、自分で作った内容をAIで編集・推敲・誤りの確認をしたものをAI支援と呼び、申告は不要としています。申告が必要なのは、AIツールで本文・画像・翻訳そのものを作ったAI生成コンテンツです。どちらも知的財産権などのガイドラインを守る責任は著者にあります。",
        en: "KDP calls content you created yourself and then edited, refined, or error-checked with AI \"AI-assisted,\" which need not be disclosed. Disclosure applies to AI-generated content — text, images, or translations created by an AI tool. Either way, the author is responsible for following the guidelines, including intellectual property rights.",
      },
    },
  ],
  sources: [
    {
      label: "Amazon KDP: Content Guidelines — Artificial intelligence (AI) content",
      url: "https://kdp.amazon.com/en_US/help/topic/G200672390",
    },
    {
      label: "日経「星新一賞」: 第14回 募集要項（生成AIを利用しての応募について）",
      url: "https://hoshiaward.nikkei.co.jp/",
    },
    { label: "Clarkesworld Magazine: Submission Guidelines", url: "https://clarkesworldmagazine.com/submissions/" },
    {
      label: "Doshi & Hauser (2024): Generative AI enhances individual creativity but reduces the collective diversity of novel content (Science Advances 10(28); arXiv 2312.00506)",
      url: "https://arxiv.org/abs/2312.00506",
    },
  ],
  lastVerified: "2026-10-11",
  glossaryRefs: ["ai-generated-vs-ai-assisted", "creative-homogenization", "prompt"],
};
