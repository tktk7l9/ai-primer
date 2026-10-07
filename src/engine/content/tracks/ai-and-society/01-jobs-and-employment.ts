import type { Lesson } from "@/engine/content/types";

export const jobsAndEmployment: Lesson = {
  id: "ai-and-society-01",
  slug: "jobs-and-employment",
  title: {
    ja: "AIと仕事・雇用 — 「影響を受ける」と「なくなる」は違う",
    en: "AI and Jobs: Exposed Is Not the Same as Replaced",
  },
  summary: {
    ja: "「AIで◯割の仕事がなくなる」の多くは、AIが関われる作業の割合（曝露）の話。ILO・厚生労働省の報告と米国の最新の研究が実際に言っていることと、見出しの数字の読み方。",
    en: "Most \"AI will wipe out X% of jobs\" headlines are really about exposure — the share of tasks AI could touch. What the ILO, Japan's labour ministry, and recent US studies actually say, and how to read the numbers in the headlines.",
  },
  body: {
    ja: `## 見出しの数字と、報告書の中身

「AIで◯割の仕事がなくなる」という見出しはよく目にします。けれど元の報告書を開くと、多くは「AIに**さらされている（曝露している）**仕事の割合」を数えたもので、「なくなった仕事の割合」ではありません。

### 「曝露」とは何か
厚生労働省の「令和8年版 労働経済の分析（労働経済白書）」（2026年9月）は、職務の内容や個人のスキルがAIによって**代替または補完**される可能性の度合いを「**AI曝露度**」と説明しています。白書が紹介する先行研究では、文書作成・要約・データ整理などの業務が中心の「翻訳者」「事務員」「秘書」などで曝露度が高く、身体を使う作業に頼る職業ほど曝露度は低い、という結果でした。曝露度が高いとは、仕事の中の多くの作業にAIが関われるという意味で、その仕事が丸ごと消えるという意味ではありません。

### ILOの数字 — 4人に1人が「曝露」、ただし
国際労働機関（ILO）が2025年5月に公表した世界的な指標によると、世界の雇用の25%が生成AIに曝露している職業にあり、高所得国では34%にのぼります。女性の方が曝露が大きく、高所得国では、最も曝露の高い仕事が女性の雇用の9.6%を占めるのに対し、男性では3.5%でした。

それでもILOは、この数字は**潜在的な曝露であって、実際に失われた仕事ではない**と強調し、最も起こりそうな結果は置き換えではなく**仕事の変化**だとしています。ILOのシニアエコノミストは「AIの誇大な宣伝に惑わされるのは簡単だ。必要なのは明確さと文脈だ」と述べています。

### これまでに起きたこと
- **日本**: 厚生労働省の白書は、各国の研究を整理したうえで、国全体でみればAIによって大きな雇用の減少が起きている証拠は、現時点では示されていないとしています。一方で、職種などの細かい単位でみれば、AIは雇用を生む方向にも失わせる方向にも働きうるとしています。
- **10年前の予測と比べる**: 2015年に公表された推計は、10〜20年のうちに日本の労働人口の約49%がAIやロボットなどで技術的に代替可能になるとしていました。白書は、その10年後にあたる2025年の状況について、一部の作業の自動化は進んだものの、雇用が大規模に置き換わったわけではなく、多くの職種でAIは業務の一部を補完する形で使われているとみています。
- **米国の若い働き手**: スタンフォード大学の研究者らは、米国の給与計算データを使った分析（2026年8月改訂）で、経済全体に広がる雇用の置き換えは見つからないとしています。ただし、AIに曝露している職業の22〜25歳の雇用は、曝露の少ない職業の同年代と同じペースで伸びていた場合より19%少なく、経験のある働き手には同じような差はありませんでした。落ち込みは、AIが人の作業を**代わりに行う**使われ方の職業に集中し、人を**補う**使われ方の職業では横ばいか増加だったといいます。著者ら自身、これは因果関係を示す推計ではなく、初期の兆候を記述したものだと断っています。
- **別の分析**: イェール大学のBudget Labは2026年9月の更新で、AIの利用度合いの指標と雇用・失業の変化には関係がみられず、AIに関連した労働市場への影響もまだはっきりとは表れていないとしています。

研究によって切り口が違い、結果の読み方にも幅があります。少なくとも、「すでに大量の仕事がAIに置き換わった」と言える証拠は、これらの報告からは読み取れません。同時に、新しく仕事に就く人の採用のように、変化が先に表れうる場所があることも示されています。

### 見出しの数字を読むときの問い
1. **曝露か、代替か**: 「AIが関われる作業がある」と「その仕事がなくなる」は別物。
2. **予測か、実績か**: 将来の推計なのか、実際に起きた変化なのか。
3. **どの国の、いつのデータか**: 国の制度や時期によって結果は変わる。
4. **因果か、相関か**: 「AIのせいで減った」とまで言っているか。

### 自分の仕事について考える
仕事を作業の単位に分けてみると、AIに任せられそうな作業と、判断・人とのやりとり・身体を使う作業が見えてきます。AIで速くなる作業は実際に試してみて（[仕事でAIを使う](/ja/learn/ai-at-work)トラック参照）、AIの出力を確かめる力や、仕事全体を組み立てる力に時間を回すのが現実的です。学び方は[AIで学ぶ](/ja/learn/society/learning-with-ai)のレッスンも参考にしてください。`,
    en: `## The headline number and the report behind it

"AI will wipe out X% of jobs" is a familiar headline. But open the underlying report and, more often than not, it counts the share of jobs **exposed** to AI — not the share of jobs that have disappeared.

### What "exposure" means
Japan's Ministry of Health, Labour and Welfare (MHLW), in its 2026 white paper on the labour economy (September 2026), describes "**AI exposure**" as the degree to which the content of a job or a person's skills could be **substituted or complemented** by AI. In an earlier study the white paper cites, exposure was high for jobs centered on writing documents, summarizing, and organizing data — translators, clerks, secretaries — and lower the more a job depends on physical work. High exposure means AI can touch many of the tasks in a job; it does not mean the whole job disappears.

### The ILO's numbers: 1 in 4 jobs "exposed" — but
According to a global index published by the International Labour Organization (ILO) in May 2025, 25% of global employment is in occupations potentially exposed to generative AI, rising to 34% in high-income countries. Exposure is higher for women: in high-income countries, the most exposed jobs make up 9.6% of female employment, compared with 3.5% for men.

Even so, the ILO stresses that these figures reflect **potential exposure, not actual job losses**, and that the most likely outcome is **transformation, not replacement**. As a senior economist at the ILO put it: "It's easy to get lost in the AI hype. What we need is clarity and context."

### What has actually happened so far
- **Japan**: after reviewing research from several countries, the MHLW white paper concludes that, for the economy as a whole, there is so far no evidence of AI causing large employment declines. At a finer level, such as individual occupations, it says AI could both create and destroy jobs.
- **Checking a ten-year-old forecast**: a 2015 estimate said that within 10 to 20 years, about 49% of Japan's workforce could be technically replaceable by AI and robots. Looking at 2025, ten years on, the white paper finds that while some tasks have been automated, jobs have not been replaced on a large scale; in many occupations, AI is being used to complement part of the work.
- **Young workers in the US**: Stanford researchers analyzing US payroll data (revised August 2026) find no evidence of widespread, economy-wide job displacement. But employment of 22- to 25-year-olds in AI-exposed occupations stands 19% below where it would be had it kept pace with peers in less-exposed occupations, while experienced workers show no comparable gap. The declines are concentrated in occupations where AI usage mainly **substitutes** for human tasks; where it mainly **complements** workers, employment is flat or rising. The authors themselves describe these as early, descriptive indicators rather than causal estimates.
- **Another analysis**: in its September 2026 update, Yale's Budget Lab reports that measures of AI usage show no connection to changes in employment or unemployment, and that an AI-related labor market footprint is not yet clearly visible.

Studies slice the data differently, and their results can be read in more than one way. What these reports do not support is the claim that AI has already replaced jobs on a mass scale. They also show that some places — such as hiring for entry-level jobs — may show change first.

### Questions to ask of a headline number
1. **Exposure or replacement?** "AI can do some of the tasks" is not "the job will disappear."
2. **Forecast or observation?** Is it a projection, or a change that has actually happened?
3. **Which country, and when?** Results vary with a country's institutions and with timing.
4. **Cause or correlation?** Does the study actually claim AI caused the change?

### Thinking about your own work
Break your job into tasks and you will see which ones AI might take on, and which depend on judgment, working with people, or physical work. Try AI on the tasks it speeds up (see the [Using AI at Work](/en/learn/ai-at-work) track), and put the time saved into checking AI's output and shaping the work as a whole. For how to learn alongside AI, see the [learning with AI](/en/learn/society/learning-with-ai) lesson.`,
  },
  quiz: [
    {
      kind: "boolean",
      prompt: {
        ja: "ILOの指標で生成AIに「曝露している」とされた仕事は、近い将来なくなると予測されている。",
        en: "Jobs that the ILO index counts as \"exposed\" to generative AI are forecast to disappear in the near future.",
      },
      answer: false,
      explanation: {
        ja: "ILOは、この数字は潜在的な曝露であって実際に失われた仕事ではないと強調し、最も起こりそうなのは置き換えではなく仕事の変化だとしています。",
        en: "The ILO stresses that the figures reflect potential exposure, not actual job losses, and that transformation, not replacement, is the most likely outcome.",
      },
    },
    {
      kind: "single",
      prompt: {
        ja: "2015年に「日本の労働人口の約49%が技術的に代替可能」とした推計について、厚生労働省の2026年の白書は2025年時点の状況をどうみているか？",
        en: "A 2015 estimate said about 49% of Japan's workforce could be technically replaceable. How does the MHLW's 2026 white paper describe the situation in 2025?",
      },
      choices: [
        {
          ja: "雇用が大規模に置き換わったわけではなく、多くの職種でAIは業務の一部を補完する形で使われている",
          en: "Jobs have not been replaced on a large scale; in many occupations AI complements part of the work",
        },
        {
          ja: "推計どおり、約半数の仕事がすでにAIに置き換わった",
          en: "As forecast, about half of all jobs have already been replaced by AI",
        },
        { ja: "AIは職場ではまだまったく使われていない", en: "AI is not yet used in the workplace at all" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "「技術的に代替可能」という推計と、実際に起きたことは別物です。白書は、一部の作業の自動化は進んだものの、雇用の大規模な置き換えは起きていないとみています。",
        en: "\"Technically replaceable\" is not the same as what actually happens. The white paper finds that some tasks have been automated, but jobs have not been replaced on a large scale.",
      },
    },
  ],
  sources: [
    {
      label: "ILO: One in four jobs at risk of being transformed by GenAI, new ILO–NASK Global Index shows (2025-05-20)",
      url: "https://www.ilo.org/resource/news/one-four-jobs-risk-being-transformed-genai-new-ilo%E2%80%93nask-global-index-shows",
    },
    {
      label: "厚生労働省: 令和8年版 労働経済の分析 第Ⅱ部第2章（2026-09-29）",
      url: "https://www.mhlw.go.jp/wp/hakusyo/roudou/26/dl/26-1-2-2.pdf",
    },
    {
      label: "Stanford Digital Economy Lab: Canaries in the Coal Mine? Six Facts about the Recent Employment Effects of Artificial Intelligence (revised 2026-08-12)",
      url: "https://digitaleconomy.stanford.edu/publication/canaries-in-the-coal-mine-six-facts-about-the-recent-employment-effects-of-artificial-intelligence/",
    },
    {
      label: "The Budget Lab at Yale: Tracking the Impact of AI on the Labor Market (updated 2026-09-15)",
      url: "https://budgetlab.yale.edu/research/tracking-impact-ai-labor-market",
    },
  ],
  lastVerified: "2026-10-07",
  glossaryRefs: ["ai-exposure", "augmentation-and-automation"],
};
