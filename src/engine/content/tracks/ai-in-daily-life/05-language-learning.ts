import type { Lesson } from "@/engine/content/types";

export const languageLearning: Lesson = {
  id: "ai-in-daily-life-05",
  slug: "language-learning",
  title: {
    ja: "語学学習にAIを使う — 会話の相手にはなる、添削は直しすぎる",
    en: "Learning a Language with AI: A Willing Conversation Partner That Over-Corrects",
  },
  summary: {
    ja: "チャットボットを使った語学学習の効果を測ったメタ分析と系統的レビュー、AIの文法添削が「直しすぎる」傾向、先生の添削との比較。研究に沿った頼み方と、新奇性効果を見越した続け方。",
    en: "A meta-analysis and a systematic review of chatbot-supported language learning, the tendency of AI grammar correction to over-correct, and how AI feedback compares with teachers'. How to ask in line with the research, and how to keep going once the novelty wears off.",
  },
  body: {
    ja: `## いつでも付き合ってくれる会話相手

英会話の練習相手がいない、書いた英文を直してほしい——語学学習は、チャットAIの得意分野に見えます。研究が示す効果と、頼りすぎると困る点を見ていきます。

### 研究が示していること
- **効果はある、ただし条件つき**: Wangらが教育学の学術誌Review of Educational Researchで発表したメタ分析（2024年6月オンライン公開）は、28の研究の70の効果量をまとめ、チャットボットを使った学習は使わない条件に比べて語学の成績に正の効果（効果量g = 0.484）があったと報告しています。効果の大きさは、学習者の教育段階や語学のレベル、チャットボットの画面設計、対話の能力によって変わりました。
- **何に役立つか**: Huangらが2022年に学術誌Journal of Computer Assisted Learningで発表した、25の実証研究の系統的レビューは、チャットボットの利点として、すぐに応答すること、使いやすいこと、個別化できることの3つを挙げ、使われ方として、会話の相手、場面の模擬、知識の伝達、困ったときの助け、おすすめの提示の5つを整理しました。一方で課題として、技術的な限界、**新奇性効果**（目新しさで一時的に意欲が上がり、慣れると下がる）、認知負荷を挙げています。

どちらも「AIを使えば上達する」ではなく、どう使うかで結果が変わることを示しています（[AIで学ぶ](/ja/learn/society/learning-with-ai)のレッスン参照）。

### 添削は「直しすぎる」
Fangらが2023年に公開した評価は、3つの言語の5つの公式テストセットと、英語の文書単位の3つのテストセットで、ChatGPTの文法誤り訂正を調べました。ChatGPTは訂正した文をとても流暢にできる一方で、**直しすぎる傾向**があり、最小限の修正という原則に従わないこと、また、文をまたいだ一致・照応・時制の誤りや、文の境界をまたぐ誤りをうまく直せないことを報告しています。つまり、AIが書き換えた箇所のすべてが「あなたの誤り」とは限りません。自然な言い換えと、文法の誤りの修正は別物です。

### 先生の添削と比べると
Steissらが2024年に学術誌Learning and Instructionで発表した研究は、中等教育の生徒の作文200本について、訓練を受けた人の評価者とChatGPTのフィードバックを5つの観点で比べました。基準に沿った指摘以外のすべての観点で、人の評価者の方が質の高いフィードバックを与えました。また、フィードバックの質は、生徒が英語学習者かどうかによって、人でもAIでも変わりませんでした。AIのフィードバックは、先生の代わりではなく、先生に見せる前の練習や、回数を増やす手段として使うのが現実的です。

### 上手な使い方
1. **会話の相手にする**: 場面を決めて（レストランで注文する、道を聞く）、役割を演じてもらう。音声モードなら発話の練習にもなります（[声で話すAI](/ja/learn/chat-ais/voice-assistants)のレッスン参照）。
2. **「最小限の修正」を頼む**: 「文法の誤りだけを直して、言い換えはしないで。直した理由も書いて」。
3. **自分の言葉で書き直す**: 直された文をそのまま写さず、理由を理解してから自分で書き直す。
4. **説明は辞書や文法書で確かめる**: AIの文法の説明にも誤りはあります（[ハルシネーション](/ja/learn/ai-basics/hallucination)のレッスン参照）。
5. **翻訳に頼りきらない**: 流暢な訳ほど確かめる理由は、[翻訳とローカライズ](/ja/learn/ai-at-work/translation-and-localization)のレッスンで扱いました。
6. **慣れたあとも続く形にする**: 新奇性効果を見越して、決まった時間とテーマの習慣にする。`,
    en: `## A conversation partner who's always available

No one to practice English conversation with, an essay you'd like corrected — language learning looks like a natural fit for chat AI. Here is what research shows about the benefits, and where relying on it too much causes trouble.

### What the research shows
- **It helps, with conditions**: a meta-analysis by Wang and colleagues in the education journal Review of Educational Research (published online in June 2024) pooled 70 effect sizes from 28 studies and found that learning with chatbots had a positive effect on language learning performance compared with non-chatbot conditions (effect size g = 0.484). The size of the effect depended on the learners' educational level and language level, the chatbot's interface design, and its interaction capability.
- **What it's useful for**: a systematic review of 25 empirical studies by Huang and colleagues, published in 2022 in the Journal of Computer Assisted Learning, identified three technological affordances — timeliness, ease of use, and personalization — and five pedagogical uses: as interlocutors, as simulations, for transmission, as helplines, and for recommendations. Its challenges were technological limitations, the **novelty effect** (a temporary boost in motivation from newness that fades with familiarity), and cognitive load.

Neither says "use AI and you'll improve." Both show that results depend on how you use it (see the [learning with AI](/en/learn/society/learning-with-ai) lesson).

### Correction tends to over-correct
An evaluation published by Fang and colleagues in 2023 tested ChatGPT's grammatical error correction on five official test sets in three languages and three document-level test sets in English. It found that while ChatGPT can make corrected sentences very fluent, it tends to **over-correct** and does not follow the principle of minimal edits, and that it cannot effectively correct agreement, coreference, and tense errors across sentences, or errors that cross sentence boundaries. In other words, not everything the AI rewrote was your mistake. A more natural rewording and the correction of a grammatical error are different things.

### Compared with a teacher's feedback
A study by Steiss and colleagues, published in 2024 in the journal Learning and Instruction, compared feedback from trained human evaluators and from ChatGPT on 200 secondary-school students' essays across five measures of quality. Human raters gave higher-quality feedback in every category other than criteria-based feedback. Feedback quality did not vary with whether a student was an English learner, for humans or for the AI. The realistic role for AI feedback is not to replace a teacher but to practice before showing your work to one, and to get more rounds of feedback.

### Good ways to use AI
1. **Make it your conversation partner**: pick a scene — ordering at a restaurant, asking for directions — and have it play a role. In voice mode it doubles as speaking practice (see the [voice assistants](/en/learn/chat-ais/voice-assistants) lesson).
2. **Ask for minimal edits**: "Fix only the grammatical errors, don't reword, and explain each fix."
3. **Rewrite in your own words**: don't copy the corrected sentence — understand the reason, then rewrite it yourself.
4. **Check explanations in a dictionary or grammar book**: AI's grammar explanations can be wrong too (see the [hallucination](/en/learn/ai-basics/hallucination) lesson).
5. **Don't lean on translation alone**: why a fluent translation deserves more scrutiny is covered in the [translation and localization](/en/learn/ai-at-work/translation-and-localization) lesson.
6. **Build something that outlasts the novelty**: expecting the novelty effect, make it a habit with a fixed time and theme.`,
  },
  quiz: [
    {
      kind: "boolean",
      prompt: {
        ja: "AIが書き換えた英文は自然なので、書き換えられた箇所はすべて自分の文法の誤りだったと考えてよい。",
        en: "The AI's rewrite of your English reads naturally, so every change it made must have been a grammatical error on your part.",
      },
      answer: false,
      explanation: {
        ja: "2023年の評価では、ChatGPTは文を流暢にする一方で直しすぎる傾向があり、最小限の修正という原則に従いませんでした。自然な言い換えと文法の誤りの修正は別物で、「文法の誤りだけ、理由つきで」と頼むと区別しやすくなります。",
        en: "A 2023 evaluation found that ChatGPT makes sentences fluent but tends to over-correct and doesn't follow the principle of minimal edits. Rewording and correcting a grammatical error are different things — asking for \"only grammatical errors, with reasons\" makes them easier to tell apart.",
      },
    },
    {
      kind: "single",
      prompt: {
        ja: "英作文の力をつけるためにAIを使うとき、研究の結果に沿った使い方は？",
        en: "You want to use AI to improve your English writing. Which approach fits the research?",
      },
      choices: [
        {
          ja: "文法の誤りだけを最小限に直してもらい、理由を理解してから自分で書き直す",
          en: "Have it fix only grammatical errors with minimal edits, understand the reasons, then rewrite it yourself",
        },
        {
          ja: "AIに全文を書き直してもらい、その文を覚える",
          en: "Have the AI rewrite the whole text and memorize that version",
        },
        {
          ja: "AIの添削があれば、先生の添削はもう要らない",
          en: "With AI feedback, a teacher's feedback is no longer needed",
        },
      ],
      correctIndex: 0,
      explanation: {
        ja: "AIの添削は直しすぎる傾向があり、丸ごと書き換えた文を覚えても自分の誤りは分かりません。2024年の研究では、訓練を受けた人の評価者の方がほとんどの観点で質の高いフィードバックを与えました。AIは先生に見せる前の練習と回数を増やす手段に使います。",
        en: "AI correction tends to over-correct, and memorizing a full rewrite doesn't show you your own errors. In a 2024 study, trained human evaluators gave higher-quality feedback on most measures. Use AI to practice before showing a teacher and to get more rounds of feedback.",
      },
    },
  ],
  sources: [
    {
      label: "Wang, Cheung, Neitzel & Chai: Does Chatting with Chatbots Improve Language Learning Performance? A Meta-Analysis of Chatbot-Assisted Language Learning (Review of Educational Research, online 2024-06-14)",
      url: "https://doi.org/10.3102/00346543241255621",
    },
    {
      label: "Huang, Hew & Fryer: Chatbots for language learning—Are they really useful? A systematic review of chatbot-supported language learning (Journal of Computer Assisted Learning 38(1), 2022; ERIC record)",
      url: "https://eric.ed.gov/?id=EJ1322754",
    },
    {
      label: "Fang et al.: Is ChatGPT a Highly Fluent Grammatical Error Correction System? A Comprehensive Evaluation (arXiv, 2023-04-04)",
      url: "https://arxiv.org/abs/2304.01746",
    },
    {
      label: "Steiss et al.: Comparing the quality of human and ChatGPT feedback of students' writing (Learning and Instruction 91, 2024)",
      url: "https://asu.elsevierpure.com/en/publications/comparing-the-quality-of-human-and-chatgpt-feedback-of-students-w/",
    },
  ],
  lastVerified: "2026-10-10",
  glossaryRefs: ["grammatical-error-correction", "novelty-effect", "meta-analysis", "post-editing"],
};
