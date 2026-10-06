import type { Lesson } from "@/engine/content/types";

export const slidesAndImages: Lesson = {
  id: "ai-at-work-05",
  slug: "slides-and-images",
  title: {
    ja: "資料・画像づくり — 中身・権利・表示を確かめる",
    en: "Making Slides and Images: Check the Content, the Rights, and the Labels",
  },
  summary: {
    ja: "スライドの骨子や挿絵をAIで作るときは、入った数字が元の資料にあるか、生成した画像を使ってよいか、AIで作ったことをどう示すかを、使う前に確かめる。",
    en: "When AI drafts your slides or illustrations, check that the numbers come from your sources, that you may use the images, and how to show they were AI-made — before you use them.",
  },
  body: {
    ja: `## スライドは骨子から

資料づくりにも生成AIが入ってきました。2026年10月時点のMicrosoftのサポートページによると、PowerPointのCopilotは、指示や既存のファイルからプレゼンテーションを作れます。同じページは、作られたものはAIが生成した内容なので人が確認して編集すべきだとし、参照するファイルには自分がアクセスでき、使う許可があることが必要だとしています。

おすすめの手順:
1. 元になる資料（報告書・議事メモ・データ）を渡し、まず**骨子**（各スライドの見出しと要点）だけを作らせる。
2. 骨子の段階で、主張と数字が元の資料のどこに書いてあるかを確かめる。元の資料にない数字や事例が入っていたら、削るか出典を探す。
3. 骨子が固まってから、デザインや画像に進む。

**グラフを画像生成で描かせない**: 画像生成のモデルは、それらしく見える絵を作るもので、データを計算してグラフにするわけではありません（[画像生成の仕組み](/ja/learn/generative-media/image-generation-mechanism)のレッスン参照）。グラフや表は、実際のデータから表計算ソフトなどで作ります（[表計算とデータ分析](/ja/learn/ai-at-work/spreadsheets-and-data)のレッスン参照）。

### 画像を使う前の3つの確認
> **ご注意**: ここは一般的な情報の紹介で、法的助言ではありません。具体的な事案は弁護士などの専門家に相談してください。

文化庁の「AIと著作権に関するチェックリスト&ガイダンス」（2024年7月31日）には、仕事でAIを使う人（業務利用者）向けの項目があります。
1. **サービスの利用規約**: 利用規約が、他人の著作物の入力を禁止するなど、著作権侵害のおそれがある使い方を制限していることがあるので、あらかじめ確認して従う必要があるとしています。商用利用の可否やプランによる違いも確かめます（[権利とライセンス](/ja/learn/generative-media/rights-and-licensing)のレッスン参照）。
2. **既存の作品に似ていないか**: AI生成物を使う前に、まず既存の著作物と類似していないかを、インターネットの画像検索なども活用して確認することが必要だとしています。作品のタイトルやキャラクター名などの固有名詞をプロンプトに入れると、その作品を知っていたことがうかがわれ、依拠性が認められやすくなるとも指摘し、生成に使ったプロンプトなどを後から確かめられるようにしておくことを勧めています。既存の画像を入力して、それに似たものを作らせる目的なら、権利者の許諾が必要になる場合もあります。考え方の全体は[日本の著作権法とAI](/ja/learn/generative-media/copyright-in-japan)のレッスンで扱いました。
3. **著作権以外の権利**: このガイダンスは著作権に絞った資料です。実在の人物に似せた画像や声には、**パブリシティ権**などの問題があります。法務省の検討会が2026年8月にまとめた報告書は、生成AIによるパブリシティ権の侵害などについての解釈の指針を示し、人の「声」も保護の対象に含まれるとしています。2012年の最高裁判決に沿って、肖像などを商品の広告に使うなど、専ら肖像などが持つ顧客を引きつける力を利用する目的といえる場合は違法になる、という考え方です。AIで作った人物が本人とまったく同じでなくても、顔などの特徴の似かたに加え、服装やふるまい、本人が出ていると思わせる情報などを総合して判断するとしています。

### 提供元の「補償」があっても
一部の提供元は、法人向けの有料サービスについて、生成物をめぐる著作権侵害の訴えから顧客を守ると約束しています。たとえばMicrosoftは2023年9月7日、商用の有料版Copilotサービスを使った顧客が第三者から著作権侵害で訴えられた場合に、顧客を弁護し、判決や和解で支払う金額を負担すると発表しました。条件は、製品に組み込まれたガードレールやコンテンツフィルターを使っていたこと、侵害する素材を作ろうとしないこと（使う権利のない素材を入力しないことを含む）などです。こうした補償は条件つきで対象のサービスも限られ、似すぎていないかを確かめる手間を省けるものではありません。

### AIで作ったことを示す
- **社内のルールに従う**: 同じガイダンスは、業務利用者に、生成AIの利用に関する社内のルールを定めることなどを勧めています。表示の要否も、まず社内のルールで決めます。
- **取引に使うなら説明する**: AI生成物をライセンス契約などの取引の対象にするなら、AIを利用した生成物であることや、それが著作物に当たるかについて、関係者に適切に説明することが求められるとしています。
- **誤解を招く画像は明示する**: 実在の人物や出来事、実際の写真に見える画像を社外に出すなら、AIで作ったことを示しましょう。EUのAI Actはディープフェイクに表示を求めています（[AIのルール](/ja/learn/society/ai-rules)・[ディープフェイクと来歴情報](/ja/learn/generative-media/deepfakes-and-provenance)のレッスン参照）。
- **来歴情報を残す**: Microsoftは、Copilotで生成した画像にC2PAの標準に基づく来歴情報（コンテンツクレデンシャル）を付け、PowerPointでAIが生成した画像を含むスライドには、ノートに「AI-generated」という画像の出典を記すとしています。こうした表示を消さずに残しておくと、後から確かめられます。`,
    en: `## Start slides from an outline

Generative AI has reached slide decks too. According to Microsoft's support page as of October 2026, Copilot in PowerPoint can create a presentation from a prompt or from an existing file. The same page says the output is AI-generated content that should be reviewed and edited by a person, and that you must have access to, and permission to use, any file you reference.

A workflow that helps:
1. Give it the source material (a report, meeting notes, data) and ask first for just an **outline** — a heading and key points for each slide.
2. At the outline stage, find where each claim and number appears in your source. If a figure or example isn't in the source, delete it or find a real source for it.
3. Only once the outline is settled, move on to design and images.

**Don't use image generation to draw charts**: image models produce pictures that look plausible; they don't calculate anything from data (see the lesson on [how image generation works](/en/learn/generative-media/image-generation-mechanism)). Build charts and tables from the real data in a spreadsheet or similar tool (see the lesson on [spreadsheets and data analysis](/en/learn/ai-at-work/spreadsheets-and-data)).

### Three checks before you use an image
> **Please note**: this section is general information, not legal advice. For a specific situation, consult a lawyer or another qualified professional.

The "Checklist & Guidance on AI and Copyright" published by Japan's Agency for Cultural Affairs on July 31, 2024 has a section for people using AI in their work (business users).
1. **The service's terms of use**: terms may prohibit or restrict uses that risk infringing copyright — for example, entering other people's works — so the guidance says to check them in advance and follow them. Check whether commercial use is allowed and whether it depends on your plan, too (see the lesson on [rights and licensing](/en/learn/generative-media/rights-and-licensing)).
2. **Does it resemble an existing work?** Before using AI output, the guidance says you first need to check that it isn't similar to existing works — for instance with web and image searches. It also notes that putting specific names such as a work's title or a character's name in the prompt suggests you knew the work, making dependence easier to establish, and recommends keeping your prompts so the generation process can be checked later. If you feed in an existing image in order to produce something similar, you may need the rights holder's permission. The full picture is in the lesson on [Japanese copyright law and AI](/en/learn/generative-media/copyright-in-japan).
3. **Rights beyond copyright**: the guidance deliberately covers copyright only. Images or voices made to resemble real people raise other issues, such as the **right of publicity**. A report compiled in August 2026 by a study group at Japan's Ministry of Justice sets out interpretive guidelines on infringement of publicity rights by generative AI, and says a person's voice is protected too. Following a 2012 Supreme Court ruling, using someone's likeness without permission is unlawful when the purpose is solely to exploit its power to attract customers — for example, using it to advertise a product. An AI-made person doesn't have to be an exact copy: the report says to weigh the physical resemblance together with clothing, behavior, and anything suggesting the real person appears.

### Even when the vendor offers indemnity
Some vendors promise to protect business customers on paid services from copyright claims over generated output. On September 7, 2023, for example, Microsoft announced that if a third party sues a commercial customer of its paid Copilot services for copyright infringement, it will defend the customer and pay any resulting adverse judgments or settlements. The conditions include having used the guardrails and content filters built into its products, and not attempting to generate infringing material — including not entering material the customer doesn't have the rights to use. Commitments like this come with conditions and cover only certain services; they don't replace checking whether your output is too close to someone else's work.

### Showing that it was made with AI
- **Follow your workplace's rules**: the same guidance recommends that business users set internal rules for using generative AI. Whether to label AI-made images starts with those rules.
- **Explain it when it's part of a deal**: when AI output is licensed or otherwise traded, the guidance says stakeholders should be given an appropriate explanation that it was generated with AI, and of whether it counts as a copyrighted work.
- **Label anything that could mislead**: if an image going outside your organization could pass for a real person, a real event, or a real photograph, say it was made with AI. The EU AI Act requires deepfakes to be disclosed (see the lessons on [the rules for AI](/en/learn/society/ai-rules) and [deepfakes and provenance](/en/learn/generative-media/deepfakes-and-provenance)).
- **Keep provenance information**: Microsoft says it attaches content credentials based on the C2PA standard to images generated with Copilot, and that PowerPoint slides with AI-generated images get an "AI-generated" image source in the speaker notes. Leaving these labels in place makes the origin easy to check later.`,
  },
  quiz: [
    {
      kind: "multi",
      prompt: {
        ja: "社外向けの資料にAIで生成した画像を使う前に、確かめるべきことをすべて選んでください。",
        en: "Before using an AI-generated image in material for people outside your organization, what should you check? Select all that apply.",
      },
      choices: [
        { ja: "使ったサービスの利用規約（商用利用の可否など）", en: "The terms of the service you used, such as whether commercial use is allowed" },
        { ja: "既存の作品やキャラクターに似ていないか", en: "Whether it resembles an existing work or character" },
        { ja: "実在の人物に似せた画像になっていないか", en: "Whether it has been made to look like a real person" },
        { ja: "生成にかかった時間", en: "How long it took to generate" },
      ],
      correctIndexes: [0, 1, 2],
      explanation: {
        ja: "利用規約、既存の作品との類似、肖像などの著作権以外の権利の3つを確かめます。生成にかかった時間は、使ってよいかどうかとは関係ありません。",
        en: "Check the terms, similarity to existing works, and rights beyond copyright such as likeness. How long generation took has nothing to do with whether you may use it.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "提供元が著作権侵害の補償を約束しているサービスなら、生成した画像が既存の作品に似ていないか確かめる必要はない。",
        en: "If the vendor promises to indemnify you against copyright claims, you don't need to check whether a generated image resembles an existing work.",
      },
      answer: false,
      explanation: {
        ja: "補償には、組み込みのフィルターを使うことや侵害する素材を作ろうとしないことなどの条件があり、対象のサービスも限られます。類似の確認は利用者の側で行います。",
        en: "Indemnity comes with conditions — such as using the built-in filters and not trying to generate infringing material — and covers only certain services. Checking for similarity is still the user's job.",
      },
    },
  ],
  sources: [
    {
      label: "Microsoft Support: Create a new presentation with Copilot in PowerPoint",
      url: "https://support.microsoft.com/en-us/powerpoint/copilot/create-a-new-presentation-with-copilot-in-powerpoint",
    },
    {
      label: "文化庁: AIと著作権に関するチェックリスト&ガイダンス（2024年7月31日）",
      url: "https://www.bunka.go.jp/seisaku/chosakuken/pdf/94097701_01.pdf",
    },
    {
      label: "法務省: 肖像、声等の無断利用による民事責任の在り方に関する検討会（取りまとめ報告書・2026年8月）",
      url: "https://www.moj.go.jp/MINJI/minji07_00400.html",
    },
    {
      label: "Microsoft On the Issues: Microsoft announces new Copilot Copyright Commitment for customers (2023-09-07)",
      url: "https://blogs.microsoft.com/on-the-issues/2023/09/07/copilot-copyright-commitment-ai-legal-concerns/",
    },
  ],
  lastVerified: "2026-10-07",
  glossaryRefs: ["similarity-and-dependence", "right-of-publicity", "content-credentials", "deepfake"],
};
