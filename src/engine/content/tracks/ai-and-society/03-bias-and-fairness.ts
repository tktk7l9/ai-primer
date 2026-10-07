import type { Lesson } from "@/engine/content/types";

export const biasAndFairness: Lesson = {
  id: "ai-and-society-03",
  slug: "bias-and-fairness",
  title: {
    ja: "AIのバイアスと公平性 — 偏りはどこから来るか",
    en: "Bias and Fairness in AI: Where the Skew Comes From",
  },
  summary: {
    ja: "AIの偏りは学習データだけから来るのではない。顔認識・医療・言語モデルで記録された事例から、偏りが入り込む道筋と、利用者にできる確かめ方を学ぶ。",
    en: "AI bias doesn't come only from training data. Documented cases in face recognition, health care, and language models show how skew gets in — and what users can do to check for it.",
  },
  body: {
    ja: `## 偏りは「データ」だけから来るのではない

AIの判断が特定の人々に不利に偏る問題は、よく「学習データの偏り」で説明されます（[リスク](/ja/learn/society/risks)のレッスン参照）。米国国立標準技術研究所（NIST）が2022年3月に公表した報告書は、それだけでは足りないとして、AIのバイアスを3つに分けています。
- **システム的なバイアス**: 組織の手続きや慣行が、ある社会集団を有利に、別の集団を不利にしてしまうもの。意識的な偏見や差別がなくても生じます。
- **統計的・計算上のバイアス**: データ（サンプル）が対象の集団全体を代表していないことなどから生じる、偶然ではない系統的な誤り。
- **人間のバイアス**: 人の考え方の系統的な偏り。AIの出力をどう受け止めて判断に使うかにも表れます。

報告書は、AIシステムのバイアスのリスクをゼロにすることはできない、とも述べています。目標は「偏りのないAI」ではなく、偏りを見つけて管理し続けることです。

### 記録された事例
**顔認識**: NISTが2019年12月に公表した評価は、99の開発者による189のアルゴリズムを調べました。1対1の照合（本人確認など）では、アジア系とアフリカ系米国人の顔で、別人を同一人物と判定する誤り（**偽陽性**）が白人の顔より多く、その差はアルゴリズムによって10倍から100倍に及ぶことが多いという結果でした。一方、アジアで開発された一部のアルゴリズムでは、アジア系と白人の顔の間にそうした大きな差はみられず、NISTの担当者は、より多様な学習データがより公平な結果につながりうる心強い兆しだと述べています。データベースから人物を探す1対多の照合では、アフリカ系米国人女性で偽陽性が多く、誤った嫌疑につながりうるため特に重要だとしています。ただし、どのアルゴリズムでも差が大きいわけではなく、最も公平なものは最も正確なものの中に入っていました。NISTが強調するのは「アルゴリズムによって性能は異なる」という点です。

**医療**: 2019年に科学誌Scienceに掲載されたObermeyerらの研究は、米国で患者の健康管理に広く使われていたアルゴリズムを調べ、同じリスクスコアでも黒人の患者は白人の患者よりかなり病状が重いことを示しました。原因は、アルゴリズムが病気の重さではなく**医療費**を予測していたことです。医療を受ける機会が不平等なため、黒人の患者に使われる医療費は少なく、医療費を「必要度」の代わり（**代理変数**）にすると必要度が低く見積もられてしまいました。このアルゴリズムは人種を入力に使っていませんでした。それでも偏りは生じたのです。研究は、このずれを正すと、追加の支援を受ける黒人の患者の割合が17.7%から46.5%に増えると推計しています。

**言語モデル**: 2024年に科学誌Natureに掲載されたHofmannらの研究は、内容は同じで、アフリカ系アメリカ人英語（AAE）か標準的な米国英語（SAE）かだけが違う文章を言語モデルに読ませ、書いた人について判断させました。証拠のない架空の裁判の設定で有罪とした割合はAAEで68.7%、SAEで62.1%、死刑を選んだ割合はAAEで27.7%、SAEで22.8%でした。人間のフィードバックによる訓練（[RLHF](/ja/learn/how-llms-work/rlhf)など）は表面上の差別的な表現を減らす一方で、こうした隠れた偏見は残っていたと報告しています。著者らは、こうした用途にAIを使うこと自体を支持しないと明記しています。

### 偏りが入り込む道筋
- **データ**: 学習や評価に使ったデータに、特定の人や状況が少ない。
- **何を予測させるか**: 本当に知りたいもの（病気の重さ）の代わりに、測りやすいもの（医療費）を使う。
- **社会の慣行**: 過去の判断や制度の偏りが、そのままデータに記録されている。
- **使う人**: AIの出力を受け止める人の思い込み。
- **属性を消しても残る**: 人種や性別を入力から外しても、それと結びついた別の情報を通じて偏りは入り込みます。上の医療の事例がその例です。

### 利用者にできること
1. **入れ替えて試す**: 名前・性別・年齢・話し方など、判断に関係ないはずの部分だけを入れ替えて、AIの出力が変わらないか確かめる。Hofmannらの研究も、この発想で隠れた偏見を見つけました。
2. **人に関わる判断はAIだけで決めない**: 採用・評価・融資など人に大きな影響を与える判断では、AIの出力をそのまま結論にしない（[定型作業の自動化](/ja/learn/ai-at-work/automating-routine-work)のレッスン参照）。EUのAI Actも、雇用や教育などの分野のAIを高リスクとして扱います（[AIのルール](/ja/learn/society/ai-rules)のレッスン参照）。
3. **人が確認すれば安心、とは限らない**: NISTは、人がアルゴリズムの判断を効果的かつ客観的に監督できるという見方自体が問題をはらむ前提だと指摘しています。人も偏りを持ちます。確認する人が何を基準に見るかを、先に決めておきます。
4. **導入する側は「何を予測しているか」を問う**: 何を正解として学習・評価したか、どの集団で精度を確かめたかを提供元に確認します。同じ用途でもアルゴリズムによって偏りの大きさは違います。`,
    en: `## Bias doesn't come only from data

When an AI system's decisions skew against certain groups of people, the usual explanation is biased training data (see the [risks](/en/learn/society/risks) lesson). A report published by the US National Institute of Standards and Technology (NIST) in March 2022 says that is not enough, and sorts AI bias into three categories:
- **Systemic bias**: the procedures and practices of institutions that advantage some social groups and disadvantage others. It can occur without any conscious prejudice or discrimination.
- **Statistical and computational bias**: systematic, not random, errors that arise when the data (the sample) is not representative of the population.
- **Human bias**: systematic errors in human thinking, including in how people perceive AI output and use it to make decisions.

The report also states that it is not possible to achieve zero risk of bias in an AI system. The goal is not "unbiased AI" but finding and managing bias continuously.

### Documented cases
**Face recognition**: a NIST evaluation published in December 2019 tested 189 algorithms from 99 developers. In one-to-one matching (such as identity checks), they made more false positives — wrongly judging two different people to be the same person — for Asian and African American faces than for white faces, with differentials often ranging from a factor of 10 to 100, depending on the algorithm. For some algorithms developed in Asian countries, however, there was no such dramatic difference between Asian and white faces, which the NIST scientist leading the study called an encouraging sign that more diverse training data may produce more equitable outcomes. In one-to-many matching — searching a database for a person — false positives were higher for African American women, which NIST calls particularly important because the consequences could include false accusations. Not every algorithm showed large differentials, though, and the most equitable ones also ranked among the most accurate. NIST's overall message: different algorithms perform differently.

**Health care**: a study by Obermeyer and colleagues, published in Science in 2019, examined an algorithm widely used in the US to manage patients' health. At a given risk score, Black patients were considerably sicker than white patients. The cause: the algorithm predicted **health care costs** rather than illness. Because of unequal access to care, less money is spent on Black patients, so using cost as a stand-in (a **proxy**) for need underestimated their need. The algorithm did not use race as an input — and the bias appeared anyway. The study estimates that remedying the disparity would increase the share of Black patients receiving additional help from 17.7% to 46.5%.

**Language models**: a study by Hofmann and colleagues, published in Nature in 2024, gave language models texts with the same content written either in African American English (AAE) or Standard American English (SAE), and asked them to make judgments about the writer. In a hypothetical trial with no evidence, the models convicted at a rate of 68.7% for AAE versus 62.1% for SAE, and chose the death penalty at 27.7% versus 22.8%. Training with human feedback ([RLHF](/en/learn/how-llms-work/rlhf) and similar methods) reduced overt prejudice on the surface, but this covert prejudice remained. The authors state plainly that they do not support using AI for such decisions.

### How bias gets in
- **Data**: some people or situations are underrepresented in the data used for training or evaluation.
- **What the model predicts**: something easy to measure (costs) stands in for what you actually care about (how sick someone is).
- **Institutions**: biases in past decisions and practices are recorded straight into the data.
- **The people using it**: the assumptions of whoever reads and acts on the output.
- **Removing an attribute isn't enough**: even with race or gender taken out of the inputs, bias can enter through other information linked to them — as in the health care case above.

### What you can do
1. **Swap and compare**: change only details that shouldn't matter — a name, gender, age, or way of speaking — and see whether the AI's output changes. Hofmann's study found covert prejudice with the same idea.
2. **Don't let AI alone decide about people**: for decisions with a big impact on people — hiring, performance reviews, lending — don't treat the AI's output as the conclusion (see the [automating routine work](/en/learn/ai-at-work/automating-routine-work) lesson). The EU AI Act also treats AI in areas such as employment and education as high-risk (see the [rules for AI](/en/learn/society/ai-rules) lesson).
3. **A human check is not automatically enough**: NIST points out that the perception that a human can effectively and objectively oversee algorithmic decisions is itself a problematic assumption. People carry biases too. Decide in advance what the reviewer should look for.
4. **If you deploy a tool, ask what it predicts**: ask the provider what was treated as the correct answer in training and evaluation, and which groups the accuracy was checked on. Even for the same use, the size of the bias differs from algorithm to algorithm.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "Obermeyerらが調べた医療のアルゴリズムで、黒人の患者の必要度が低く見積もられた主な理由は？",
        en: "In the health care algorithm Obermeyer and colleagues studied, what mainly caused Black patients' needs to be underestimated?",
      },
      choices: [
        {
          ja: "病気の重さではなく医療費を予測しており、医療を受ける機会の不平等から黒人の患者に使われる医療費が少なかったから",
          en: "It predicted health care costs rather than illness, and unequal access to care meant less was spent on Black patients",
        },
        { ja: "人種を入力に使って、意図的に点数を下げていたから", en: "It used race as an input and deliberately lowered their scores" },
        { ja: "計算のプログラムに誤りがあったから", en: "There was a bug in the code" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "このアルゴリズムは人種を入力に使っていませんでした。医療費を必要度の代わり（代理変数）にしたことで、社会の不平等がそのまま予測に入り込みました。",
        en: "The algorithm did not use race as an input. Using cost as a proxy for need let an existing social inequality flow straight into its predictions.",
      },
    },
    {
      kind: "multi",
      prompt: {
        ja: "人に関わる判断にAIを使うとき、偏りへの対策として適切なものをすべて選んでください。",
        en: "When AI is used in decisions about people, which are sound ways to guard against bias? Select all that apply.",
      },
      choices: [
        {
          ja: "名前や性別など、関係ないはずの部分だけを入れ替えて出力が変わらないか試す",
          en: "Swap only details that shouldn't matter, such as a name or gender, and see whether the output changes",
        },
        {
          ja: "何を正解として学習・評価したか、どの集団で精度を確かめたかを確認する",
          en: "Check what was treated as the correct answer in training and evaluation, and which groups accuracy was tested on",
        },
        {
          ja: "人種や性別を入力から外せば、偏りは必ずなくなると考える",
          en: "Assume that removing race and gender from the inputs always eliminates bias",
        },
        {
          ja: "最後に人が目を通せば、偏りは必ず防げると考える",
          en: "Assume that a person looking it over at the end will always catch bias",
        },
      ],
      correctIndexes: [0, 1],
      explanation: {
        ja: "属性を外しても、結びついた別の情報から偏りは入り込みます（医療の事例）。人の確認も大切ですが、NISTは人が客観的に監督できるという前提自体に問題があると指摘しています。入れ替えて試すことと、何を予測しているかを確かめることが手がかりになります。",
        en: "Even without the attribute, bias can enter through linked information (as in the health care case). Human review matters, but NIST warns that assuming people can oversee algorithms objectively is itself problematic. Swap tests and checking what the model predicts give you real evidence.",
      },
    },
  ],
  sources: [
    {
      label: "NIST: NIST Study Evaluates Effects of Race, Age, Sex on Face Recognition Software (2019-12-19)",
      url: "https://www.nist.gov/news-events/news/2019/12/nist-study-evaluates-effects-race-age-sex-face-recognition-software",
    },
    {
      label: "Obermeyer et al.: Dissecting racial bias in an algorithm used to manage the health of populations (Science, 2019)",
      url: "https://escholarship.org/content/qt6h92v832/qt6h92v832.pdf",
    },
    {
      label: "Hofmann et al.: AI generates covertly racist decisions about people based on their dialect (Nature, 2024)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11374696/",
    },
    {
      label: "NIST SP 1270: Towards a Standard for Identifying and Managing Bias in Artificial Intelligence (2022)",
      url: "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.1270.pdf",
    },
  ],
  lastVerified: "2026-10-07",
  glossaryRefs: ["algorithmic-bias", "false-positive", "proxy-variable", "rlhf"],
};
