import type { Lesson } from "@/engine/content/types";

export const learningWithAi: Lesson = {
  id: "society-06",
  slug: "learning-with-ai",
  title: {
    ja: "AIで学ぶ — 考えることを手放さない使い方",
    en: "Learning with AI Without Handing Over Your Thinking",
  },
  summary: {
    ja: "AIに答えを出させると、演習ははかどっても力がつかないことがある。研究が示したことと、AIを家庭教師として使うコツ。",
    en: "Letting AI hand you answers can speed up practice while weakening what you actually learn. What research shows, and how to use AI as a tutor instead.",
  },
  body: {
    ja: `## 「解けた」と「身についた」は違う

AIは、わからないところを何度でも、自分のペースで説明してくれる心強い学習相手です。一方で、**答えを出してもらうこと**と、**自分で解けるようになること**は別物です。

### 研究が示したこと
- **答えをくれるAIは、演習の成績を上げても学力を下げることがある**: 2025年に米国科学アカデミー紀要（PNAS）に掲載されたBastaniらの研究は、トルコの大規模な高校で約1,000人の生徒を対象に、数学の演習でGPT-4を使えるようにする実験を行いました。一般的なChatGPTの画面をまねた「GPT Base」を使えた生徒は、演習の成績が48%上がりましたが、AIなしで受けた試験では、最初からAIを使わなかった生徒より成績が**17%低く**なりました。答えを直接教えずにヒントを出すよう指示し、学習を守るよう設計した「GPT Tutor」では、演習の成績が127%上がり、試験での悪影響もほぼ解消されました。著者らは、GPT Baseの生徒が解答を求めて写す「松葉杖」として使うことが多かったのに対し、GPT Tutorの生徒は助けを求めたり自分で答えを試したりと、より実質的に使っていたと報告しています。
- **AIを信頼するほど、批判的に考えなくなる傾向**: カーネギーメロン大学とMicrosoft Researchの研究者が2025年に発表した、知識労働者319人への調査（実際の利用例936件）では、生成AIへの信頼が高いほど批判的思考が少なく、自分の能力への自信が高いほど批判的思考が多い、という関連が見られました。

どちらも「AIを使うと悪くなる」という話ではありません。**どう使うか**で結果が変わる、ということです。

### 家庭教師として使うコツ
1. **先に自分で考える**: 自分の答えや考えを書いてから、AIに見せて検討してもらう。
2. **答えではなくヒントを頼む**: 「答えは言わずに、次の一歩のヒントだけ」「質問で私を導いて」と頼む。ChatGPTの「学習モード」やGeminiの「ガイド付き学習」のように、答えをすぐに出さず、問いかけやヒントで理解を深めるよう作られた機能もあります。
3. **説明する側に回る**: 学んだことを自分の言葉で説明し、AIに誤りや抜けを指摘してもらう。
4. **確認問題を作ってもらう**: 「この範囲から確認問題を5問。答えは私が解いてから」と頼む。思い出す練習（**想起練習**）は、読み返すだけより長く記憶に残りやすいことが実験で示されています。
5. **説明の正しさも確かめる**: AIの説明にも誤りはあります（ハルシネーションのレッスン参照）。教科書や公式の資料と照らし合わせましょう。

### 学校・職場での注意
文部科学省の「初等中等教育段階における生成AIの利活用に関するガイドライン（Ver.2.0）」（2024年12月）は、生成AIの出力はあくまで「参考の一つ」で最適解とは限らず、最後は人間が判断して成果物に自ら責任を持つ、という基本姿勢を重視しています。適切でない例として、感性や独創性を発揮させたい場面や、教科書など質の担保された教材を使う前に安易に使わせることを挙げ、AIの出力をそのまま自分の成果物として提出しても学びが得られないことを指導するよう求めています。学校や職場にAI利用のルールがあれば、まずそれに従いましょう。`,
    en: `## "I solved it" is not "I learned it"

AI makes a patient study partner: it will explain the part you're stuck on as many times as you need, at your pace. But **getting an answer** and **becoming able to solve it yourself** are different things.

### What the research shows
- **An AI that hands out answers can raise practice scores while lowering learning**: in a study published in PNAS (Proceedings of the National Academy of Sciences) in 2025, Bastani and colleagues gave nearly 1,000 students at a large high school in Turkey access to GPT-4 during math practice. Students with "GPT Base," which mimicked a standard ChatGPT interface, improved their practice grades by 48% — but on exams taken without AI, they scored **17% lower** than students who never had access. "GPT Tutor," prompted to give hints without directly giving the answer and designed to safeguard learning, raised practice grades by 127% and largely removed the harm on exams. The authors report that students often used GPT Base as a "crutch," asking for and copying solutions, while GPT Tutor users asked for help or attempted answers on their own.
- **The more people trust AI, the less critically they tend to think**: in a 2025 survey of 319 knowledge workers (936 real examples of use) by researchers at Carnegie Mellon University and Microsoft Research, higher confidence in generative AI was associated with less critical thinking, while higher self-confidence was associated with more.

Neither finding says "AI makes you worse." They say that **how you use it** changes the outcome.

### Using AI as a tutor
1. **Think first**: write down your own answer or idea, then ask the AI to review it.
2. **Ask for hints, not answers**: "Don't tell me the answer — just give me a hint for the next step," or "Guide me with questions." Some features, such as ChatGPT's study mode and Gemini's Guided Learning, are built to deepen understanding with questions and hints instead of giving the answer right away.
3. **Be the one who explains**: explain what you learned in your own words and have the AI point out mistakes and gaps.
4. **Have it quiz you**: "Give me five review questions on this section; show the answers after I try." Practicing recall (**retrieval practice**) has been shown in experiments to make material stick longer than rereading it.
5. **Check the explanations too**: AI explanations can be wrong (see the Hallucination lesson). Compare them with textbooks and official materials.

### At school and at work
Japan's Ministry of Education (MEXT) guidelines on generative AI in primary and secondary education (Ver. 2.0, December 2024) stress a basic stance: AI output is only "one reference" and not necessarily the best answer, and in the end a person judges and takes responsibility for the work. As inappropriate uses, they list reaching for AI casually where students should exercise their own sensibility and originality, or before using quality-assured materials such as textbooks, and they ask teachers to explain that submitting AI output as your own work means you learn nothing from the activity. If your school or workplace has rules on AI use, follow them first.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "Bastaniらの研究で、一般的なChatGPTに近い「GPT Base」を使って演習した生徒が、AIなしで試験を受けたときの結果は？",
        en: "In the Bastani et al. study, how did students who practiced with \"GPT Base\" (a standard ChatGPT-like interface) do on exams taken without AI?",
      },
      choices: [
        {
          ja: "AIを使わなかった生徒より成績が低かった",
          en: "They scored lower than students who never used the AI",
        },
        { ja: "AIを使わなかった生徒より成績が高かった", en: "They scored higher than students who never used the AI" },
        { ja: "演習でも試験でも成績は変わらなかった", en: "Their grades didn't change in practice or on exams" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "演習の成績は48%上がった一方、試験では17%低くなりました。ヒントを出すよう設計したGPT Tutorでは、この悪影響がほぼ解消されました。",
        en: "Practice grades rose 48%, but exam grades were 17% lower. GPT Tutor, designed to give hints instead of answers, largely removed that harm.",
      },
    },
    {
      kind: "multi",
      prompt: {
        ja: "考えることを手放さずにAIで学ぶ方法として適切なものをすべて選べ。",
        en: "Select every approach that uses AI for learning without handing over your thinking.",
      },
      choices: [
        { ja: "自分の答えを書いてから、AIに検討してもらう", en: "Write your own answer first, then have the AI review it" },
        { ja: "答えではなく、次の一歩のヒントだけを頼む", en: "Ask only for a hint toward the next step, not the answer" },
        { ja: "確認問題を作ってもらい、自分で解く", en: "Have it write review questions and solve them yourself" },
        { ja: "宿題の答えをAIに出させて、そのまま提出する", en: "Have the AI produce your homework answers and submit them as is" },
      ],
      correctIndexes: [0, 1, 2],
      explanation: {
        ja: "自分で考える・ヒントにとどめる・思い出す練習をする、の3つは学びにつながります。答えをそのまま提出しても、学びは得られません。",
        en: "Thinking first, sticking to hints, and practicing recall all support learning. Submitting the AI's answers as is teaches you nothing.",
      },
    },
  ],
  sources: [
    {
      label: "PNAS: Generative AI without guardrails can harm learning (Bastani et al., 2025)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12232635/",
    },
    {
      label: "Microsoft Research: The Impact of Generative AI on Critical Thinking (Lee et al., CHI 2025)",
      url: "https://www.microsoft.com/en-us/research/publication/the-impact-of-generative-ai-on-critical-thinking-self-reported-reductions-in-cognitive-effort-and-confidence-effects-from-a-survey-of-knowledge-workers/",
    },
    {
      label: "文部科学省: 初等中等教育段階における生成AIの利活用に関するガイドライン（Ver.2.0）",
      url: "https://www.mext.go.jp/a_menu/other/mext_02412.html",
    },
    {
      label: "Google: Guided Learning in Gemini: From answers to understanding",
      url: "https://blog.google/products-and-platforms/products/education/guided-learning/",
    },
  ],
  lastVerified: "2026-10-07",
  glossaryRefs: ["retrieval-practice", "hallucination"],
};
