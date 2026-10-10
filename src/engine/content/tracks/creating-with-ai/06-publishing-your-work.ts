import type { Lesson } from "@/engine/content/types";

export const publishingYourWork: Lesson = {
  id: "creating-with-ai-06",
  slug: "publishing-your-work",
  title: {
    ja: "作品を公開するとき — 各サービスのAI方針、表示、批判への向き合い方、制作記録",
    en: "Publishing Your Work: Platform AI Policies, Labels, Handling Criticism, and Keeping Records",
  },
  summary: {
    ja: "pixivの「AI生成作品」設定、noteの学習拒否と対価還元、MetaのAI表示、YouTubeの収益化ポリシー。どこに出すかでルールが違い、表示は削除ではなく文脈のためにある。批判には制作記録で答える。",
    en: "pixiv's AI-generated setting, note's training opt-out and compensation program, Meta's AI label, YouTube's monetization policy. Rules differ by venue, and labels exist to add context rather than to remove posts. Answer criticism with your process records.",
  },
  body: {
    ja: `## 出す場所のルールを読み、表示を付け、記録を残す

このトラックで見てきたように、AIの扱いは公開先ごとに違います。文章の公募と電子書籍は[文章を書く相棒としてのAI](/ja/learn/creating-with-ai/writing-with-ai)、音楽の配信は[音楽を作る](/ja/learn/creating-with-ai/making-music)、動画サイトの開示は[動画を作る](/ja/learn/creating-with-ai/making-video)、ゲームの販売サイトとジャムは[ゲーム・コードで作る](/ja/learn/creating-with-ai/games-and-creative-coding)のレッスンで扱いました。ここでは、イラスト・文章・SNSの投稿先の例と、公開した後の心構えをまとめます。

> **ご注意**: 以下は2026年10月時点の各社が公開しているルールの紹介です。公開前に最新の原文を確かめてください。

### pixiv — 「AI生成作品」の設定
pixivは2022年10月31日に、投稿時に**AI生成作品**であることを示す設定と、AI生成作品の表示を減らせる閲覧者側の設定をリリースし、AI生成作品だけを分けたランキングも11月から提供するとしました。2026年10月時点のガイドラインは、制作過程のすべて、もしくはほとんどをAIで生成した作品にAI生成作品のチェックを必須としています。生成したものをそのまま、または組み合わせたり軽く手を加えたりしただけで投稿したものが例に挙がっており、小説の挿絵だけに使うような補助的な使い方ならチェックしなくてもよいとしています。

2023年5月31日の改定では、特定の第三者の画風などを徒に繰り返しまねた作品を投稿する行為も禁止事項に加わりました。2026年2月18日の告知では、閲覧数や反応を得るために作品の内容と異なる設定で投稿する行為や、宣伝目的で過度な量の作品を投稿する行為が確認されているとして、3月18日にガイドラインを改定しました。それまでの「作品内容に無関係なタグを付加する行為」という禁止事項は、年齢制限・オリジナル作品設定・**AI生成作品設定**・ジャンル・タグなどに作品の内容と一致しない設定を付ける行為、と明記されました（告知は、従来から禁止されていた事項をわかりやすく整理するための改定だとしています）。あわせて、規約やガイドラインに違反した可能性が高い作品を、閲覧者の設定に応じて検索などで非表示にする場合があるという項目も加わりました。告知は、この表示の初期設定を「表示しない」にすること、検知の基準は悪用を防ぐため公開しないことを説明しています。

AIで作った絵をAI生成でないと申告することも、その逆も違反です。設定は正直に、が唯一の正解です。

### note — 自分の作品が学習に使われるかを選ぶ
文章の投稿先では、自分の作品がAIの学習に使われるかどうかも問題になります。noteは2025年2月13日、アカウント設定で「生成AIの学習に拒否意向を示す」をオンにできるようにしました。これは生成AI事業者に意向を示すもので、すべての事業者が必ず従うことを保証するものではないと明記されています。さらに2025年6月17日には、投稿されたテキストを提携するAI事業者に学習用データとして提供し、得た収益からnoteの運営手数料を差し引いた分をクリエイターに還元する**AI学習対価還元プログラム**を発表し、8月1日から適用するとしました。対象は無料・有料・メンバーシップ特典を含むテキストで、画像・音声・動画は含まれません。参加は初期設定でオン（すでに学習拒否の意向をオンにしていた場合はオフ）で、アカウント設定で参加しないよう変更でき、6月30日からは記事ごとの設定もできるとしています。

自分の作品を学習に使わせるかどうかを、サービスの設定で自分で決められるようになってきています。日本の著作権法第30条の4と、JASRACが求めている改正については、[日本の著作権法とAI](/ja/learn/generative-media/copyright-in-japan)と[音楽を作る](/ja/learn/creating-with-ai/making-music)のレッスンを参照してください。

### SNS — 表示は「削除」ではなく「文脈」のため
Metaは2024年4月5日に、Facebook・Instagram・ThreadsでAIで作られた動画・音声・画像に「Made with AI」の表示を付ける方針を発表し、業界標準のAI画像の指標の検出と、投稿者の自己申告の二つを根拠にするとしました。同年7月1日には、AIの修整ツールで軽く手を加えただけの内容にも表示が付くなど、人々の期待と合わない例があったとして表示名を「AI info」に改め、9月12日には、AIツールで修整・編集しただけと検出した内容では表示を投稿のメニューの中に移すと発表しています。重要なのは、Metaがこうしたコンテンツを、ほかのポリシーに違反しない限り**削除せずに、表示と文脈を付けて残す**と明言している点です。表示は罰ではなく、見る人への情報です。

### YouTube — 量産型のコンテンツは収益化できない
YouTubeパートナープログラムの収益化ポリシーは、2025年7月15日に「繰り返しの多いコンテンツ」に関するポリシーの名称を「**量産型のコンテンツ**」に改め、大量生産されたコンテンツも対象だと明確にしました（こうしたコンテンツは以前から収益化の対象外だったとしています）。2026年10月時点のヘルプは、「一般的、または繰り返しの多いコンテンツ」の例として、動画ごとの違いがほとんどない似た動画、説明や教育的価値がほとんどない画像のスライドショーやテンプレート化されたストーリー、そして**クリエイターならではの洞察や視点を加えず、汎用的なテンプレートで作られ、大量生産されたような印象を与えるAI生成コンテンツ**を挙げています。関連性のないAIクリップをつなぎ合わせて驚かせるだけの動画も、収益化できない例です。

一方、決まったイントロとエンディングがあっても中身の大部分が違う動画、決まったキャラクターで毎回違う物語を描くシリーズ、**自分で考えたキャラクターや物語をAIで視覚化した作品**、AIで台本を編集したり独自の背景を作ったりして独自の物語を届ける作品は、収益化できる例に挙がっています。「AIを使ったか」ではなく、「中身が実質的に異なり、創造的・教育的な価値を届けているか」が基準です。

### 批判への向き合い方
AIを使った作品には、作風の模倣や学習データの問題を背景に、強い反発が向くことがあります。
- **先に示す**: AIを使ったことは、公開先の設定や説明文で先に示します。あとから分かるのが最も信頼を失います。「人間が作った」と偽ることは、画像生成サービスのポリシーでも禁じられています（[画像を作る](/ja/learn/creating-with-ai/making-images)のレッスン参照）。
- **場を選ぶ**: AI作品を受け付けない公募・ジャム・コミュニティがあります。そのルールは尊重し、受け付けている場に出します。
- **過程で答える**: 「どこまで自分で作ったか」を問われたら、下の制作記録で具体的に答えます。
- **人の作品を踏まない**: 特定の作家の名前を挙げてまねる、他人の作品を参考画像にして似せる、実在の人の顔や声を無断で使う——批判の多くはここに向きます。[画像を作る](/ja/learn/creating-with-ai/making-images)・[動画を作る](/ja/learn/creating-with-ai/making-video)のレッスンの確認を済ませておきます。

### 制作記録に残すもの
- 使ったツール・プラン・日付。
- プロンプトと設定（シード値、参考画像とその出どころ、使ったモデルの名称）。
- 生成物の原本と、自分が加筆・修正・選択した過程（下書き、レイヤー、タイムラプス、Gitの履歴）。
- 公開先に申告した内容の控え。

文化庁のチェックリストも、生成に使ったプロンプトなどを後から確かめられるようにしておくことを勧めています（[資料・画像づくり](/ja/learn/ai-at-work/slides-and-images)のレッスン参照）。記録は、著作物性の説明（人が創作的に加筆・修正した部分）、公募での提出の求め、配信先からの問い合わせ、そして読者への説明のすべてに使えます。

米国で作品の著作権登録を申請するなら、記録はさらに直接役立ちます。米国著作権局の登録ガイダンス（2023年3月16日発効）は、申請者には作品にAI生成部分が含まれることを開示し、人間の著作者の寄与を簡潔に説明する義務があるとし、ごくわずかとはいえないAI生成部分は申請の対象から明示的に除くよう求めています。2025年1月29日に公表した報告書は、現在一般に使える技術ではプロンプトだけでは十分な制御にならないとしつつ、AIの出力に表れた人の表現や、素材の創作的な選択・配列、創作的な修正は保護されうるとしています（[権利とライセンス](/ja/learn/generative-media/rights-and-licensing)のレッスン参照）。`,
    en: `## Read the venue's rules, add the label, keep the records

As this track has shown, each venue treats AI differently. Writing contests and e-books were covered in [writing with AI](/en/learn/creating-with-ai/writing-with-ai), music distribution in [making music](/en/learn/creating-with-ai/making-music), video-site disclosure in [making video](/en/learn/creating-with-ai/making-video), and game stores and jams in [games and creative coding](/en/learn/creating-with-ai/games-and-creative-coding). This lesson covers examples for illustration, text, and social media, and the mindset for after you publish.

> **Please note**: these are the rules as published by each company in October 2026. Check the current originals before you publish.

### pixiv: the "AI-generated" setting
On October 31, 2022, pixiv released a setting that marks a work as **AI-generated** at upload and a viewer-side setting to see fewer AI-generated works, and said a separate ranking for them would follow from November. Its guidelines, as of October 2026, require the AI-generated check for works whose creation process was entirely or mostly generated by AI. The examples are generated material posted as is, combined, or with only minor edits; supplementary use, such as AI art used only as a novel's illustrations, does not require the check.

A revision on May 31, 2023 added a prohibition on posts that needlessly and repeatedly imitate a specific third party's art style. In an announcement on February 18, 2026, pixiv said it had seen works posted with settings that did not match their content in order to gain views and reactions, and excessive numbers of works posted for promotion, and it revised its guidelines on March 18. The old prohibition on "adding tags unrelated to the work" now spells out adding settings that do not match the work — age restriction, original-work status, the **AI-generated setting**, genre, tags, and the like (the announcement describes the revision as clarifying what was already prohibited). A new item also says works judged likely to violate the terms or guidelines may be hidden from search and elsewhere, depending on the viewer's settings; the announcement says that display is hidden by default and that the detection criteria will not be published, to prevent abuse.

Declaring an AI-made picture as not AI-generated is a violation, and so is the reverse. Setting it honestly is the only correct answer.

### note: choosing whether your work trains AI
On text platforms, another question is whether your work is used to train AI. On February 13, 2025, note added an account setting, "indicate that you refuse generative AI training." It is an expression of intent toward generative AI companies, and note states plainly that it does not guarantee every company will comply. Then, on June 17, 2025, note announced its **AI Training Compensation Program**, to apply from August 1: text posted on note is provided as training data to partner AI companies, and the revenue, less note's fees, is returned to creators. It covers text in free, paid, and membership-only posts; images, audio, and video are excluded. Participation is on by default (off if you had already turned on the training-refusal setting), can be switched off in account settings, and from June 30 can be set per post.

Whether your work may be used for training is increasingly something you decide yourself in each service's settings. For Article 30-4 of Japan's Copyright Act and the amendment JASRAC is calling for, see [Japanese copyright law and AI](/en/learn/generative-media/copyright-in-japan) and [making music](/en/learn/creating-with-ai/making-music).

### Social media: labels add context, they don't remove posts
On April 5, 2024, Meta announced that it would label AI-made video, audio, and images on Facebook, Instagram, and Threads as "Made with AI," based on two signals: detection of industry-standard AI image indicators, and self-disclosure by the person posting. On July 1 of that year, after finding that labels didn't always match people's expectations — content with only minor modifications from AI retouching tools was getting labeled, for example — it renamed the label "AI info," and on September 12 it announced that for content it detects was only modified or edited by AI tools, the label would move into the post's menu. The important point is that Meta says it **keeps such content on its platforms with labels and context** unless it violates other policies. The label is information for viewers, not a penalty.

### YouTube: mass-produced content can't be monetized
On July 15, 2025, the YouTube Partner Program's monetization policies renamed their "repetitious content" policy **"inauthentic content"** to make clear that it covers content that is mass-produced as well as repetitive (such content, YouTube says, was always ineligible for monetization). As of October 2026, the help page's examples of "generic or repetitive content" include similar videos with minimal variation, image slideshows and templated storylines with little or no narrative, commentary, or educational value, and **AI-generated content made with generic or unoriginal templates that gives the impression of mass production without adding the creator's own insights or perspective**. Videos that stitch together unrelated AI clips just to surprise or shock viewers are also listed as not monetizable.

By contrast, videos with the same intro and outro but mostly different content, a series that follows a set of characters with a distinct storyline in each episode, **using AI to visualize a unique character and narrative you invented**, and using AI to edit your scripts or generate a unique background in service of an original story are all listed as monetizable. The test is not whether AI was used but whether the substance is materially varied and delivers creative, educational, or other value.

### Facing criticism
Work made with AI can draw strong pushback, against the background of style imitation and training-data disputes.
- **Say it first**: declare AI use up front, in the venue's setting or your description. Being found out later costs the most trust. Passing work off as human-made is also prohibited by image services' policies (see [making images](/en/learn/creating-with-ai/making-images)).
- **Choose the venue**: some contests, jams, and communities do not accept AI work. Respect those rules and publish where it is accepted.
- **Answer with process**: when asked how much you made yourself, answer concretely from the records below.
- **Don't step on other people's work**: imitating a named artist, feeding someone's work in as a reference to copy it, using a real person's face or voice without permission — most criticism is aimed here. Run the checks in [making images](/en/learn/creating-with-ai/making-images) and [making video](/en/learn/creating-with-ai/making-video) first.

### What to keep in your process records
- The tool, plan, and date.
- Prompts and settings (seed values, reference images and their sources, the name of the model used).
- The raw output and the trail of what you added, changed, and selected (drafts, layers, time-lapses, Git history).
- A copy of what you declared to each venue.

The Agency for Cultural Affairs' checklist also recommends keeping prompts so the generation process can be checked later (see [making slides and images](/en/learn/ai-at-work/slides-and-images)). Records serve every purpose at once: explaining copyrightability (the parts a person creatively added or edited), a contest's request for submissions, a platform's inquiry, and your own explanation to readers.

If you apply to register a copyright in the US, records help even more directly. The US Copyright Office's registration guidance (effective March 16, 2023) says applicants have a duty to disclose that a work contains AI-generated content and to briefly explain the human author's contributions, and that AI-generated content that is more than de minimis should be explicitly excluded from the claim. Its report published on January 29, 2025 concludes that, with current generally available technology, prompts alone do not provide sufficient control — while human expression perceptible in the output, the creative selection and arrangement of material, and creative modifications of the output can be protected (see [rights and licensing](/en/learn/generative-media/rights-and-licensing)).`,
  },
  quiz: [
    {
      kind: "multi",
      prompt: {
        ja: "pixivのガイドライン（2026年10月時点）で禁止されている行為をすべて選んでください。",
        en: "Which of the following do pixiv's guidelines (as of October 2026) prohibit? Select all that apply.",
      },
      choices: [
        {
          ja: "制作過程のほとんどをAIで生成した作品を、AI生成作品設定をオフにして投稿する",
          en: "Posting a work generated mostly by AI with the AI-generated setting turned off",
        },
        { ja: "手描きの作品に、AI生成作品設定を付けて投稿する", en: "Posting a hand-drawn work with the AI-generated setting turned on" },
        { ja: "AI生成作品設定をオンにして、AI生成作品として投稿する", en: "Posting an AI-generated work with the AI-generated setting turned on" },
        {
          ja: "作品発表の範囲を超えて大量に投稿し、ページを占有するなど他の利用者の体験に重大な影響を与える",
          en: "Posting so much, beyond what publishing your work calls for, that you take over pages and seriously affect other users' experience",
        },
      ],
      correctIndexes: [0, 1, 3],
      explanation: {
        ja: "ガイドラインは、AI生成作品設定を含む各種の設定に作品の内容と一致しない設定を付ける行為（AI生成を非AIと申告することも、その逆も）と、大量に投稿してページを占有するなど他の利用者の体験に重大な影響を与える行為を禁止しています。設定を正しく付けてAI生成作品として投稿すること自体は認められています。",
        en: "The guidelines prohibit adding settings that do not match the work, including the AI-generated setting in either direction, and posting in volumes that take over pages and seriously affect other users. Posting an AI-generated work with the setting correctly turned on is allowed.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "Metaの「AI info」表示は、AIで作ったと分かった投稿を削除するための仕組みである。",
        en: "Meta's \"AI info\" label is a mechanism for removing posts found to be AI-made.",
      },
      answer: false,
      explanation: {
        ja: "Metaは、AIで作られたコンテンツを、ほかのポリシーに違反しない限り削除せずに、表示と文脈を付けて残すと明言しています。表示は見る人への情報であって、罰ではありません。",
        en: "Meta states that it keeps AI-made content on its platforms with labels and context unless it violates other policies. The label is information for viewers, not a penalty.",
      },
    },
  ],
  sources: [
    { label: "pixiv: AI生成作品の取り扱いに関する機能をリリースしました（2022-10-31）", url: "https://www.pixiv.net/info.php?id=8733" },
    {
      label: "pixiv: AI技術等に関する、サービス共通利用規約、pixivガイドライン改定のお知らせ（2023-05-31）",
      url: "https://www.pixiv.net/info.php?id=9641",
    },
    {
      label: "pixiv: pixivにおける新しい検索設定の追加と、ガイドライン改定の予定について（2026-02-18）",
      url: "https://www.pixiv.net/info.php?id=13316",
    },
    { label: "pixiv: pixivガイドライン（2026-03-18 改定）", url: "https://www.pixiv.net/terms/?page=guideline" },
    {
      label: "note公式: 自分の作品をAIに学習させたくない方に。意向を設定できるようになりました（2025-02-13）",
      url: "https://note.com/info/n/n21b09699c67d",
    },
    {
      label: "note公式: AI学習の対価還元プログラムがスタート！あらたな収益の仕組みでより創作を続けやすく（2025-06-17）",
      url: "https://note.com/info/n/n49bbcbdefe1a",
    },
    {
      label: "Meta: Our Approach to Labeling AI-Generated Content and Manipulated Media（2024-04-05、2024-07-01・2024-09-12 追記）",
      url: "https://about.fb.com/news/2024/04/metas-approach-to-labeling-ai-generated-content-and-manipulated-media/",
    },
    {
      label: "YouTube Help: YouTube channel monetization policies（日本語版「YouTube のチャンネル収益化ポリシー」）",
      url: "https://support.google.com/youtube/answer/1311392?hl=en",
    },
    {
      label: "文化庁: AIと著作権に関するチェックリスト&ガイダンス（2024年7月31日）",
      url: "https://www.bunka.go.jp/seisaku/chosakuken/pdf/94097701_01.pdf",
    },
    {
      label: "U.S. Copyright Office: Copyright Registration Guidance: Works Containing Material Generated by Artificial Intelligence（88 FR 16190・2023-03-16）",
      url: "https://www.copyright.gov/ai/ai_policy_guidance.pdf",
    },
    {
      label: "U.S. Copyright Office: Copyright and Artificial Intelligence, Part 2: Copyrightability（2025-01-29）",
      url: "https://www.copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-2-Copyrightability-Report.pdf",
    },
  ],
  lastVerified: "2026-10-11",
  glossaryRefs: [
    "ai-generated-work-setting",
    "ai-training-opt-out",
    "ai-content-label",
    "inauthentic-content",
    "content-credentials",
    "article-30-4",
  ],
};
