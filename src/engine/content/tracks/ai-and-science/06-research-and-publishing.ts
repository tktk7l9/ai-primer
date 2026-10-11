import type { Lesson } from "@/engine/content/types";

export const researchAndPublishing: Lesson = {
  id: "ai-and-science-06",
  slug: "research-and-publishing",
  title: {
    ja: "研究と論文のAIルール — AIは著者になれず、審査の原稿は渡さない",
    en: "AI Rules in Research and Publishing: AI Can't Be an Author, and Manuscripts Stay Out of AI Tools",
  },
  summary: {
    ja: "医学雑誌編集者国際委員会（ICMJE）やSpringer Natureは、AIを著者として認めず、使い方の開示と人による確認を求める。査読者が原稿を安全でないAIに渡すことは守秘の点で認められず、日本学術振興会は科研費の審査での生成AIの使用を禁じている。",
    en: "The International Committee of Medical Journal Editors (ICMJE) and Springer Nature don't accept AI as an author, and require disclosure and human checking. Reviewers may not hand manuscripts to unsecured AI tools, and Japan's JSPS prohibits generative AI in grant review.",
  },
  body: {
    ja: `## 研究にAIを使っても、責任は人に残る

文章の推敲からデータの分析まで、研究の現場でも生成AIが使われています。学術誌や研究費を配る機関は、どこまで認め、何を求めているのでしょうか。2026年10月時点で公開されている規定から見ます。

### AIは著者になれない — ICMJE
医学雑誌編集者国際委員会（ICMJE）の推奨は、ChatGPTのようなチャットボットなどのAI支援ツールを著者に挙げてはならないとしています。著者に求められる、研究の正確さ・誠実さ・独創性への責任を、AIは負えないからです。そのうえで、
- 投稿時に、大規模言語モデル、チャットボット、画像生成などのAI支援技術を使ったかを開示する。文章の手助けに使ったなら謝辞に、データの収集・分析や図の作成に使ったなら方法の節に書く。
- AIの出力は誤っていたり、不完全だったり、偏っていたりすることがあるので、著者が注意深く確認し、編集する。
- AIが作った文章や画像も含めて、盗用がないと言えなければならない。

### リスクの大きさで分ける — Springer Nature
Nature系の学術誌を出版するSpringer Natureは、AIの使い方を、道具の種類ではなくリスクの大きさで3段階に分けています。
- **許可**: 言葉の推敲、章立ての提案、翻訳、データの整理など、学術的な判断に影響しない補助。開示すると信頼と透明性が高まるとしています。
- **注意**: 分析手法の提案、説明的な要約の下書き、既存の文献との比較、統計手法の推奨など、解釈や評価に影響しうる使い方。人が検証し、開示したうえで認められます。
- **不許可**: AIが作った仮説や結論を人が導いたように見せること、データ・引用・結果の捏造、AIに著者や責任を割り当てること、査読をAIに任せること、写実的な偽の画像（ディープフェイク）を作ることなど。

どの段階でも、学術的な判断と責任は人に残り、原稿や査読報告、機密のデータを、安全が確保されていない公開のAIに渡してはならないとしています。

### 査読と審査 — 原稿をAIに渡さない
**査読**は、学術誌に投稿された原稿を、通常は編集部の外の専門家が批判的に評価することです（ICMJE）。投稿された原稿は著者の機密の財産として扱われます。
- ICMJEは、査読者は学術誌のAI方針に従うか、事前に許可を求めるべきだとし、守秘が確保できないAIに原稿をアップロードすることは、学術誌が明示的に認めない限り許されない場合があるとしています。AIを使ったら学術誌に開示します。
- Springer Natureは、査読の補助にAIを使うことは認める一方、原稿の内容を安全でない公開のAIに上げることと、批評や判断をAIに任せることは認めていません。
- 日本学術振興会（JSPS）は、科研費の審査で、守秘義務の徹底として、情報漏洩の危険性から生成AIの使用も禁止しています。応募する側が研究計画調書の作成に生成AIを使うことは禁止せず、意図しない著作権の侵害や、個人情報・機密情報の漏洩につながるリスクに留意したうえで、研究者個人の責任で判断するよう求めています。

仕事で文書をAIに入力するときの考え方は、[仕事でAIを使うときの情報の扱い](/ja/learn/society/data-privacy-at-work)のレッスンと共通です。

### 「AIが科学で成果」のニュースを読む
このトラックで見た例から、確かめたい点をまとめます。
- **第三者の評価を経たか**: 論文として査読を受けたか、答えを伏せた競技（CASP）や公式の採点（数学オリンピック）を経たか。
- **何と比べたか**: 比べた相手と指標は何か（天気予報のHRESとの比較など）。
- **限界が書かれているか**: 信頼度の指標（pLDDTなど）や、苦手な対象が示されているか。
- **誰がどう使うか**: 医療機器のように、決められた目的で専門家が使い、最終的な判断を人が行う道具なのか。`,
    en: `## Use AI in research, and the responsibility still stays human

Generative AI is now used in research for everything from polishing prose to analyzing data. What do journals and research funders allow, and what do they require? Here are the rules as published in October 2026.

### AI can't be an author: ICMJE
The recommendations of the International Committee of Medical Journal Editors (ICMJE) say that chatbots such as ChatGPT and other AI-assisted tools should not be listed as authors, because they cannot be responsible for the accuracy, integrity, and originality of the work — responsibilities that authorship requires. On top of that:
- At submission, authors should disclose whether they used AI-assisted technologies such as large language models, chatbots, or image creators. Writing assistance goes in the acknowledgments; use for data collection, analysis, or figure generation goes in the methods.
- Because AI output can be incorrect, incomplete, or biased, authors should carefully review and edit it.
- Authors must be able to assert that there is no plagiarism in their paper, including in text and images produced by AI.

### Sorting by risk: Springer Nature
Springer Nature, the publisher of the Nature journals, classifies AI use by level of risk rather than by type of tool, in three tiers:
- **Permitted**: assistive use that doesn't influence scholarly judgment, such as polishing language, suggesting structure, translation, or data cleaning. Disclosure, it says, enhances trust and transparency.
- **Exercise caution**: uses that may influence interpretation or evaluation, such as suggesting analytical approaches, drafting explanatory summaries, comparing results with existing literature, or recommending statistical methods — permitted with human verification and disclosure.
- **Not permitted**: presenting AI-generated hypotheses or conclusions as human-derived, fabricating data, citations, or results, assigning authorship or accountability to AI, delegating peer review to an AI, creating photorealistic fake images (deepfakes), and the like.

At every tier, scholarly judgment and accountability remain human, and manuscripts, peer review reports, and sensitive data must not be shared with unsecured or public AI systems.

### Peer review and grant review: keep manuscripts out of AI
**Peer review** is the critical assessment of manuscripts submitted to journals by experts who are usually not part of the editorial staff (ICMJE). Submitted manuscripts are treated as the authors' confidential property.
- ICMJE says reviewers must follow the journal's AI policy or ask permission first, and that confidentiality may prohibit uploading a manuscript to AI where confidentiality can't be assured, unless the journal explicitly permits it. Reviewers who use AI should disclose it to the journal.
- Springer Nature lets peer reviewers use AI to support their review, but not upload manuscript content to unsecured or public AI tools, nor delegate critique or judgment to AI.
- Japan's research funding agency, JSPS, prohibits the use of generative AI in reviewing KAKENHI grant applications, as part of strict confidentiality, because of the risk of leaks. Applicants are not prohibited from using generative AI to write their research proposals; JSPS asks them to decide on their own responsibility, mindful of the risks of unintended copyright infringement and of leaking personal or confidential information.

The same thinking applies when you put documents into AI at work; see [handling information when you use AI at work](/en/learn/society/data-privacy-at-work).

### Reading "AI achieves a scientific breakthrough" in the news
Drawing on the examples in this track, here is what to check:
- **Was it evaluated by others?** Was it peer reviewed as a paper, or tested in a contest with hidden answers (CASP) or official grading (the Math Olympiad)?
- **Compared with what?** What was the comparison and the metric (for example, weather forecasts against HRES)?
- **Are the limits stated?** Is there a confidence measure (such as pLDDT), and are the weak spots described?
- **Who uses it, and how?** Is it a tool, like a medical device, used by experts for a defined purpose with a human making the final call?`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "ICMJEの推奨に沿った、論文でのAIの扱いはどれ？",
        en: "Which way of handling AI in a paper follows the ICMJE recommendations?",
      },
      choices: [
        {
          ja: "AIを使ったことを開示し、著者には挙げず、出力を著者が注意深く確認・編集する",
          en: "Disclose the AI use, don't list the AI as an author, and have the authors carefully review and edit its output",
        },
        { ja: "大きく貢献したAIは、共著者として挙げる", en: "List an AI that contributed substantially as a co-author" },
        { ja: "謝辞にAIの名前を書けば、出力の確認は要らない", en: "Name the AI in the acknowledgments, and no further checking is needed" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "ICMJEは、AIは研究の正確さ・誠実さ・独創性への責任を負えないので著者に挙げてはならないとし、使ったことの開示と、誤りや偏りを含みうる出力を著者が確認・編集することを求めています。",
        en: "ICMJE says AI cannot take responsibility for the accuracy, integrity, and originality of the work and so must not be listed as an author, and it requires disclosure plus careful review and editing by the authors, since the output can be incorrect or biased.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "日本学術振興会は、科研費の審査で審査委員が生成AIを使うことを、情報漏洩の危険性から禁止している。",
        en: "JSPS prohibits KAKENHI grant reviewers from using generative AI, because of the risk of information leaks.",
      },
      answer: true,
      explanation: {
        ja: "JSPSは、審査での留意点として守秘義務の徹底を挙げ、情報漏洩の危険性から生成AIの使用も禁止しています。応募者が研究計画調書の作成に使うことは禁止せず、リスクに留意したうえで研究者個人の責任で判断するよう求めています。",
        en: "JSPS lists strict confidentiality among the points reviewers must observe, including a ban on generative AI because of the risk of leaks. Applicants are not banned from using it for their proposals but must decide on their own responsibility, mindful of the risks.",
      },
    },
  ],
  sources: [
    {
      label: "ICMJE: Recommendations — Defining the Role of Authors and Contributors",
      url: "https://www.icmje.org/recommendations/browse/roles-and-responsibilities/defining-the-role-of-authors-and-contributors.html",
    },
    {
      label: "ICMJE: Recommendations — Use of AI by Authors",
      url: "https://www.icmje.org/recommendations/browse/artificial-intelligence/ai-use-by-authors.html",
    },
    {
      label: "ICMJE: Recommendations — Use of AI by Reviewers",
      url: "https://www.icmje.org/recommendations/browse/artificial-intelligence/ai-use-by-reviewers.html",
    },
    {
      label: "ICMJE: Recommendations — Responsibilities in the Submission and Peer-Review Process",
      url: "https://www.icmje.org/recommendations/browse/roles-and-responsibilities/responsibilities-in-the-submission-and-peer-peview-process.html",
    },
    {
      label: "Nature Portfolio: Editorial policies — Artificial Intelligence (AI)",
      url: "https://www.nature.com/nature-portfolio/editorial-policies/ai",
    },
    {
      label: "日本学術振興会: 令和８(2026)年度公募について（資料２・2025年7月）",
      url: "https://www.jsps.go.jp/file/storage/kaken_g_3685/r7_siryou2.pdf",
    },
    {
      label: "日本学術振興会: 令和８(2026)年度 科学研究費助成事業 公募要領（特別推進研究、基盤研究（Ｓ）・2025年4月11日）",
      url: "https://www.jsps.go.jp/file/storage/kaken_tokus2025/r8_4_kobo.pdf",
    },
  ],
  lastVerified: "2026-10-11",
  glossaryRefs: ["peer-review", "hallucination", "deepfake"],
};
