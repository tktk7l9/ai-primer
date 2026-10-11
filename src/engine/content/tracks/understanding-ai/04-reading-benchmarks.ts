import type { Lesson } from "@/engine/content/types";

export const readingBenchmarks: Lesson = {
  id: "understanding-ai-04",
  slug: "reading-benchmarks",
  title: {
    ja: "ベンチマークの読み方 — その点数は何を、どう測ったものか",
    en: "How to Read AI Benchmarks: What a Score Measures, and How It Was Measured",
  },
  summary: {
    ja: "新しいAIの発表には、ベンチマークの点数やランキングが並ぶ。知識の試験・専門家レベルの難問・実際のコード修正・人の投票——何を測る試験かと、飽和・混入・問題の誤り・条件の違いという落とし穴を知ってから読む。",
    en: "New AI launches come with tables of benchmark scores and leaderboard ranks. Knowledge tests, expert-level questions, real code fixes, human votes — learn what each one measures, and the pitfalls of saturation, contamination, flawed questions, and mismatched conditions, before you read the numbers.",
  },
  body: {
    ja: `## 点数は「その試験を、その条件で解いた結果」

新しいAIが発表されると、ベンチマークの点数の表やランキングがよく添えられます。**ベンチマーク**とは、数学・プログラミング・生物学などの問題を集めて採点のしかたをそろえ、モデルの性能を比べるための試験です。ただし点数は、その試験を、その条件で解いた結果にすぎません。何を測る試験か、どう測ったかを知ってから読みましょう。

### 代表的なベンチマークは何を測っているか
- **MMLU**（2020年）: 幅広い学問分野の標準テストなどから問題を集めた選択式の試験。主に知識の広さを測ります。
- **GPQA**（2023年）: 生物学・物理学・化学の専門家が書いた448問の4択問題。その分野で博士号を持つか目指している専門家の正答率は65%（後から本人が気づいた明らかなミスを除くと74%）、ほかの分野で博士号を持つか目指している人は、平均30分以上ネットを自由に調べても34%で、「検索しても解けない」問題になっています。でたらめに選んでも25%は当たります。特に質の高い198問に絞った「GPQA Diamond」もあります。
- **SWE-bench**（2023年）: 12のオープンソースのPythonプロジェクトで実際に解決された課題（GitHubのissue）を使う試験。AIは課題の文章と修正前のコードだけを見てコードを直し、見せられていないテストがすべて通れば正解です。2024年には、専門のエンジニアが1,699問を1問ずつ3人で見直し、500問に絞った「SWE-bench Verified」が作られました。
- **アリーナ形式のランキング**: 2023年に始まったChatbot Arenaのように、誰でも質問を入力し、名前を伏せた2つのAIの答えを比べて良い方に投票し、たくさんの投票から順位を計算します。測っているのは「人がどちらの答えを好んだか」で、正しさそのものではありません。

### 点数を読むときの4つの落とし穴
1. **飽和**: 多くのモデルが満点近くを取るようになると、差を測れなくなります。新しい難問集「Humanity's Last Exam（HLE）」の論文は、最新のモデルがMMLUで9割を超えていること、ベンチマークは短い期間でほぼ0点からほぼ満点まで進みがちなことを指摘しています。
2. **混入（コンタミネーション）**: 問題や正解が学習データに混ざると、解き方ではなく答えを覚えて点数が上がります。GPQAの作成者は問題をそのままネットに載せないよう求め、学習データから除きやすくする目印の文字列を問題に入れています。HLEも一部の問題を非公開にして、公開した問題への過剰な適応を確かめています。OpenAIは2026年2月、テストしたすべての最先端モデルが、SWE-bench Verifiedの一部の問題で正解のコードや問題文の細部を再現できたとして、学習中に問題を見ていたと結論づけました。
3. **問題そのものの誤り**: 同じ発表でOpenAIは、自社のモデルが64回試しても安定して解けなかった138問を調べたところ、59.4%に、正しい修正まで不合格にするテストなどの欠陥があったと報告しました。そのうえでSWE-bench Verifiedの点数の報告をやめ、ほかの開発元にも同じようにするよう勧めています。
4. **条件の違いと、良い結果だけの公表**: 同じモデルでも、問い方で点数は動きます。GPQAの論文では、GPT-4に例を見せずに聞くと32.1%、例と考え方の手順を見せると39.7%でした（448問のセット）。アリーナについては、2025年の論文「The Leaderboard Illusion」が、一部の開発元は公開前に多くの版を非公開で試して良い結果だけを公表でき、順位に偏りが生じていたと指摘しました。Metaは、Llama 4の公開前に27の非公開の版を試していたといいます。投票のデータも、GoogleとOpenAIがそれぞれ推定で約2割ずつを得た一方、83のオープンウェイトモデルは合わせて約3割と偏っており、アリーナのデータで学習すると、アリーナ特有の傾向に合わせただけの改善になりうるとしています。

### 発表の数字に向ける5つの問い
1. **何を測る試験か**: 知識・専門的な推論・実際の作業・人の好み——自分の使い方に近いか。
2. **誰が、どんな条件で測ったか**: 開発元の発表か、第三者の測定か。問い方・試行回数・使える道具・考える量（[推論モデル](/ja/learn/understanding-ai/reasoning-models)の設定）はそろっているか。
3. **飽和していないか**: 上位がそろって満点近くなら、その差にはほとんど意味がない。
4. **混入や問題の誤りが指摘されていないか**: ネットで公開されている問題ほど、学習データに混ざるおそれがある。
5. **差は大きいか**: 数ポイントの差は、問い方を変えるだけでも動く。

点数は入口です。最後は、自分の仕事の課題で試して比べるのが確かです（[用途別の選び方](/ja/learn/chat-ais/choosing)参照）。開発元が公表する安全性の評価（システムカード）の読み方は[AIの安全性の取り組み](/ja/learn/understanding-ai/ai-safety-practices)、健康・医療の情報を調べるときの注意は[健康・医療の情報をAIで調べるとき](/ja/learn/understanding-ai/health-information)で扱います。何を数えた数字かを確かめる習慣は、[AIの電力と水](/ja/learn/ai-and-society/energy-and-water)のレッスンとも共通です。誰が採点したかで成績の意味が変わる例は、[数学とAI](/ja/learn/ai-and-science/mathematics)のレッスンで扱います。`,
    en: `## A score is the result of one test, taken under one set of conditions

New AI launches usually come with a table of benchmark scores or a leaderboard rank. A **benchmark** is a test that collects questions — in math, programming, biology, and so on — and fixes how they are scored, so that models can be compared. But a score is only the result of that test, taken under those conditions. Find out what a test measures, and how it was run, before you read the number.

### What the well-known benchmarks measure
- **MMLU** (2020): a multiple-choice test that gathers questions from standardized tests and similar sources across a broad range of academic subjects. It mainly measures breadth of knowledge.
- **GPQA** (2023): 448 four-option questions written by experts in biology, physics, and chemistry. Experts who have or are pursuing PhDs in the field score 65% (74% when discounting clear mistakes they identified in retrospect), while skilled non-experts — people who have or are pursuing PhDs in other fields — reach only 34% despite spending over 30 minutes on average with unrestricted web access, which makes the questions "Google-proof." Guessing at random gets 25%. "GPQA Diamond" is a subset of the 198 highest-quality questions.
- **SWE-bench** (2023): a test built from real issues that were resolved on GitHub in 12 open-source Python projects. The AI sees only the issue text and the code as it was before the fix, has to change the code, and passes only if all the tests — which it never sees — pass. In 2024, expert software engineers reviewed 1,699 of its problems, three independently per problem, and kept 500 of them as "SWE-bench Verified."
- **Arena-style leaderboards**: on sites like Chatbot Arena, launched in 2023, anyone can enter a question, compare answers from two anonymous AIs, and vote for the better one; rankings are calculated from many such votes. What they measure is which answer people preferred — not whether it was correct.

### Four pitfalls when reading a score
1. **Saturation**: once many models score close to full marks, a test can no longer tell them apart. The paper behind "Humanity's Last Exam" (HLE), a newer set of very hard questions, points out that the latest models score over 90% on MMLU, and that benchmarks tend to go from near-zero to near-perfect in a short time.
2. **Contamination**: if test questions or answers end up in the training data, a model can score higher by remembering answers rather than working them out. GPQA's authors ask people not to post its questions online in plain text, and embed a marker string so the questions are easier to filter out of training data. HLE likewise keeps some questions private to check for overfitting to the public ones. In February 2026, OpenAI concluded that every frontier model it tested had seen some SWE-bench Verified problems during training, because each could reproduce the reference fix or verbatim details of the problem for certain tasks.
3. **Flawed questions**: in the same announcement, OpenAI reported that when it audited 138 problems that one of its own models failed to solve consistently over 64 runs, 59.4% had defects such as tests that reject correct fixes. It stopped reporting SWE-bench Verified scores and recommended that other developers do the same.
4. **Different conditions, and publishing only the best**: the same model can score differently depending on how it is asked. In the GPQA paper, GPT-4 scored 32.1% when asked with no examples, and 39.7% when shown worked examples with their reasoning (on the 448-question set). For arenas, the 2025 paper "The Leaderboard Illusion" found that some developers could privately test many versions before release and publish only the best result, which biased the rankings; Meta, it says, tested 27 private variants before releasing Llama 4. The voting data was lopsided too — Google and OpenAI each received an estimated 20% or so, while 83 open-weight models together received about 30% — and the paper shows that training on arena data can produce gains tied to the arena's quirks rather than to better models overall.

### Five questions to ask of any published number
1. **What does the test measure?** Knowledge, expert reasoning, real work, or human preference — and is that close to how you will use the AI?
2. **Who measured it, and under what conditions?** The developer's own announcement, or an independent measurement? Were the prompts, number of attempts, available tools, and amount of thinking (a [reasoning model](/en/learn/understanding-ai/reasoning-models) setting) the same?
3. **Is the test saturated?** If the top models all score near full marks, the gaps between them mean little.
4. **Has anyone reported contamination or flawed questions?** Questions that are published online are the most likely to leak into training data.
5. **Is the gap big?** A few points can move just from changing how the question is asked.

A score is a starting point. In the end, the surest test is to try the AI on your own tasks and compare (see [Choosing by Use Case](/en/learn/chat-ais/choosing)). How to read the safety evaluations developers publish (system cards) is covered in [How AI Developers Work on Safety](/en/learn/understanding-ai/ai-safety-practices), and what to watch for when looking up health information in [Looking Up Health Information with AI](/en/learn/understanding-ai/health-information). The habit of asking what a number actually counts is the same one used in the [AI's electricity and water](/en/learn/ai-and-society/energy-and-water) lesson. An example of how a score's meaning depends on who graded it is in the [mathematics and AI](/en/learn/ai-and-science/mathematics) lesson.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "新しいモデルの発表に「MMLUで他社のモデルより2ポイント高い」とあった。この数字の受け止め方として最も適切なのは？",
        en: "A launch announcement says a new model scores \"2 points higher on MMLU than a rival.\" What is the most sensible way to read this?",
      },
      choices: [
        {
          ja: "最新のモデルはMMLUで9割を超えており、問い方の違いでも数ポイントは動くので、この差だけで優劣は決めにくい",
          en: "The latest models score over 90% on MMLU, and a few points can move with how the question is asked, so this gap alone says little",
        },
        {
          ja: "MMLUは最も新しく難しい試験なので、2ポイントでも大きな差だ",
          en: "MMLU is the newest and hardest test, so even 2 points is a big gap",
        },
        {
          ja: "点数が高いモデルの方が、自分の仕事でも必ず役に立つ",
          en: "The higher-scoring model is guaranteed to be more useful for your own work",
        },
      ],
      correctIndex: 0,
      explanation: {
        ja: "HLEの論文が指摘するとおり、MMLUは最新のモデルが9割を超える飽和したベンチマークです。GPQAの論文では、同じGPT-4でも問い方で32.1%と39.7%の差が出ました。最後は自分の課題で試して比べます。",
        en: "As the HLE paper notes, MMLU is saturated, with the latest models scoring over 90%. In the GPQA paper, the same GPT-4 scored 32.1% or 39.7% depending on how it was asked. In the end, test the models on your own tasks.",
      },
    },
    {
      kind: "multi",
      prompt: {
        ja: "ベンチマークの点数で2つのモデルを比べる前に、確かめておきたいことをすべて選んでください。",
        en: "Before comparing two models by their benchmark scores, what should you check? Select all that apply.",
      },
      choices: [
        {
          ja: "その試験が何を測るか（知識・実際の作業・人の好みなど）",
          en: "What the test measures (knowledge, real work, human preference, and so on)",
        },
        {
          ja: "誰が、どんな条件（問い方・試行回数・道具）で測ったか",
          en: "Who measured it, and under what conditions (prompts, number of attempts, tools)",
        },
        {
          ja: "学習データへの混入や、問題の誤りが指摘されていないか",
          en: "Whether contamination or flawed questions have been reported",
        },
        {
          ja: "点数の高い方のモデルを作った会社の規模が大きいか",
          en: "Whether the company behind the higher-scoring model is bigger",
        },
      ],
      correctIndexes: [0, 1, 2],
      explanation: {
        ja: "何を測る試験か、どう測ったか、混入や誤りがないかで、点数の意味は大きく変わります。OpenAIは混入とテストの欠陥を理由にSWE-bench Verifiedの報告をやめました。会社の規模は点数の正しさと関係ありません。",
        en: "What a test measures, how it was run, and whether it is contaminated or flawed all change what a score means — OpenAI stopped reporting SWE-bench Verified because of contamination and flawed tests. The size of the company says nothing about whether a score is sound.",
      },
    },
  ],
  sources: [
    {
      label: "Rein et al.: GPQA: A Graduate-Level Google-Proof Q&A Benchmark (arXiv, 2023-11)",
      url: "https://arxiv.org/abs/2311.12022",
    },
    { label: "Phan et al.: Humanity's Last Exam (arXiv, 2025-01; revised 2026-07)", url: "https://arxiv.org/abs/2501.14249" },
    {
      label: "OpenAI: Why SWE-bench Verified no longer measures frontier coding capabilities (2026-02-23)",
      url: "https://openai.com/index/why-we-no-longer-evaluate-swe-bench-verified/",
    },
    { label: "Singh et al.: The Leaderboard Illusion (arXiv, 2025-04)", url: "https://arxiv.org/abs/2504.20879" },
  ],
  lastVerified: "2026-10-07",
  glossaryRefs: ["benchmark", "benchmark-saturation", "benchmark-contamination", "few-shot", "open-weight"],
};
