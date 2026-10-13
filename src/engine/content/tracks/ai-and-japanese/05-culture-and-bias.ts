import type { Lesson } from "@/engine/content/types";

export const cultureAndBias: Lesson = {
  id: "ai-and-japanese-05",
  slug: "culture-and-bias",
  title: {
    ja: "文化と偏り — AIの「ふつう」はどこの「ふつう」か",
    en: "Culture and Bias: Whose \"Normal\" Is the AI's Normal?",
  },
  summary: {
    ja: "AIは、学習データに多い文化の価値観に寄りやすい。英語で尋ねると答えが米国の文化に寄ったという研究と、日本語での社会的な偏りを測るJBBQの結果から、日本の文脈で使うときの注意をつかむ。",
    en: "AI tends to lean toward the values of the cultures most present in its data. A study in which English prompts pulled answers toward American culture, and results from JBBQ, a benchmark for social bias in Japanese, show what to watch for when using AI in Japanese contexts.",
  },
  body: {
    ja: `## 答えの「ふつう」は、学習データから来る

AIは、学習データに含まれる文章から、何が「ふつう」かを身につけます。データの多くが特定の言語や文化から来ていれば、その価値観に寄った答えになりやすくなります（学習データの言語の偏りは[言語でAIの力が違うのはなぜ](/ja/learn/ai-and-japanese/languages-and-data)のレッスン参照）。

### 英語で尋ねると、米国の文化に寄った
Caoらの研究（2023年）は、人の文化の違いを数値で測るために作られた質問にChatGPTを答えさせ、どの文化に近い答えをするかを調べました。
- 米国の文脈で尋ねると、米国の文化によく合う答えをした一方、ほかの文化の文脈には合わせにくかった。
- 英語で尋ねると答えのばらつきが小さくなり、文化の違いが平らにならされて、米国の文化に寄った。

2023年のChatGPTを調べた結果なので、今のAIにそのまま当てはまるとは限りませんが、「何語で聞くか」で答えの前提が変わりうることを示しています。

## 日本語での偏りを測る — JBBQ
**JBBQ**は、英語の社会的な偏りのベンチマークBBQをもとに作られた、日本語の質問応答で社会的な偏り（バイアス）を測るデータセットです（2024年公開、2025年にACLのワークショップで発表）。日本語のオープンなLLMを調べた結果は次のとおりです。
- パラメータの多いモデルほど正答率は上がったが、偏りのスコアも上がった。
- 社会的な偏りに注意するよう促す一文をプロンプトに入れたり、段階的に考えさせたりすると、出力への偏りの影響は減った。ただし、日本語の文脈から正しい根拠を取り出す点には改善の余地があった。

性能が上がれば偏りが自然に消えるわけではない、ということです。

## 日本の文脈で使うときの注意
- **前提の国を確かめる**: 学校、雇用、税、医療などの制度や慣習は国によって違います。AIの答えが他国の制度を前提にしていないか確かめ、日本の制度は公的な一次情報で確認します（[お金の相談](/ja/learn/ai-in-daily-life/money-questions)のレッスン参照）。
- **文化の文脈を伝える**: Anthropicの文書も、伝わる文章には、翻訳を超えて文化や地域への配慮が必要になることが多いとしています。読み手や場面（社内向け、地域の住民向けなど）をプロンプトに書きましょう。
- **人に関わる判断は特に慎重に**: 採用や評価など人に関わる判断にAIを使うときは、偏りを確かめる手順を挟みます（[AIのバイアスと公平性](/ja/learn/ai-and-society/bias-and-fairness)のレッスン参照）。

国の人工知能基本計画（2026年7月）も、日本の文化・習慣などを踏まえた信頼できるAIの開発・評価を進めるとしています。`,
    en: `## An AI's "normal" comes from its training data

AI picks up what counts as "normal" from the text in its training data. If most of that data comes from particular languages or cultures, its answers tend to lean toward those values (for the language skew in training data, see [why AI ability differs by language](/en/learn/ai-and-japanese/languages-and-data)).

### Asked in English, answers leaned American
A 2023 study by Cao and colleagues had ChatGPT answer questions designed to quantify cultural differences between people, and examined which cultures its answers resembled.
- With American context, its answers aligned closely with American culture, but it adapted less well to other cultural contexts.
- With English prompts, the variance in its answers shrank, flattening cultural differences and biasing them toward American culture.

These results are for ChatGPT in 2023 and may not carry over to today's AI, but they show that the language you ask in can change the assumptions behind an answer.

## Measuring bias in Japanese: JBBQ
**JBBQ** is a dataset for measuring social bias in Japanese question answering, built from BBQ, an English social-bias benchmark (published in 2024 and presented at an ACL workshop in 2025). Testing open Japanese LLMs, the researchers found:
- Models with more parameters answered more accurately, but their bias scores also rose.
- Adding a sentence to the prompt warning about social bias, or having the model reason step by step, reduced the effect of bias on outputs. There was still room for improvement in extracting the correct evidence from Japanese context.

In other words, bias does not simply disappear as performance improves.

## Using AI in Japanese contexts
- **Check which country's rules are assumed**: institutions and customs around schools, employment, taxes, and healthcare differ by country. Check whether an answer assumes another country's system, and confirm Japanese rules against official primary sources (see the [money questions](/en/learn/ai-in-daily-life/money-questions) lesson).
- **Give the cultural context**: Anthropic's documentation also notes that effective communication often requires cultural and regional awareness beyond pure translation. Put the audience and setting (internal staff, local residents, and so on) in your prompt.
- **Take extra care with decisions about people**: when using AI for decisions about people, such as hiring or reviews, add steps to check for bias (see the [bias and fairness](/en/learn/ai-and-society/bias-and-fairness) lesson).

Japan's Artificial Intelligence Basic Plan (July 2026) likewise calls for developing and evaluating trustworthy AI grounded in Japan's culture and customs.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "Caoらの研究で、ChatGPTに英語で質問したときに見られたことは？",
        en: "In the study by Cao and colleagues, what happened when ChatGPT was asked in English?",
      },
      choices: [
        {
          ja: "答えのばらつきが小さくなり、米国の文化に寄った",
          en: "The variance in its answers shrank and they leaned toward American culture",
        },
        { ja: "文化ごとの違いがはっきり表れた", en: "Differences between cultures became sharper" },
        { ja: "日本の文化に寄った答えになった", en: "Its answers leaned toward Japanese culture" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "英語で尋ねると文化の違いが平らにならされ、米国の文化に寄りました。何語で聞くかで、答えの前提が変わりうることを示しています。",
        en: "English prompts flattened cultural differences toward American culture, showing that the language you ask in can change an answer's assumptions.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "JBBQの結果では、パラメータの多いモデルほど偏りのスコアが下がった。",
        en: "In the JBBQ results, models with more parameters had lower bias scores.",
      },
      answer: false,
      explanation: {
        ja: "パラメータの多いモデルほど正答率は上がりましたが、偏りのスコアも上がりました。性能と偏りは別に確かめる必要があります。",
        en: "Larger models answered more accurately, but their bias scores also rose. Performance and bias need to be checked separately.",
      },
    },
    {
      kind: "single",
      prompt: {
        ja: "JBBQの研究で、出力への偏りの影響を減らしたものはどれ？",
        en: "In the JBBQ study, what reduced the effect of bias on outputs?",
      },
      choices: [
        {
          ja: "偏りに注意するよう促す一文や、段階的に考えさせるプロンプト",
          en: "A sentence warning about bias, or prompts that make the model reason step by step",
        },
        { ja: "何をしても変わらなかった", en: "Nothing made any difference" },
        { ja: "質問を英語に訳すこと", en: "Translating the questions into English" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "注意を促す一文と段階的に考えさせるプロンプトで影響は減りましたが、日本語の文脈から正しい根拠を取り出す点には改善の余地がありました。",
        en: "A warning sentence and step-by-step prompting reduced the effect, though there was still room to improve at extracting the correct evidence from Japanese context.",
      },
    },
  ],
  sources: [
    {
      label: "Cao et al.: Assessing Cross-Cultural Alignment between ChatGPT and Human Societies: An Empirical Study（C3NLP@EACL 2023、arXiv:2303.17466）",
      url: "https://arxiv.org/abs/2303.17466",
    },
    {
      label: "Yanaka et al.: JBBQ: Japanese Bias Benchmark for Analyzing Social Biases in Large Language Models（arXiv:2406.02050）",
      url: "https://arxiv.org/abs/2406.02050",
    },
    {
      label: "Anthropic: Multilingual support（Claude Platform Docs）",
      url: "https://platform.claude.com/docs/en/build-with-claude/multilingual-support",
    },
    { label: "内閣府: 人工知能基本計画（2026年7月14日閣議決定）", url: "https://www8.cao.go.jp/cstp/ai/ai_plan/aiplan_20260714.pdf" },
  ],
  lastVerified: "2026-10-13",
  glossaryRefs: ["cultural-bias", "algorithmic-bias", "chain-of-thought"],
};
