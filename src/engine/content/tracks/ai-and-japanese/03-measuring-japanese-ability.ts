import type { Lesson } from "@/engine/content/types";

export const measuringJapaneseAbility: Lesson = {
  id: "ai-and-japanese-03",
  slug: "measuring-japanese-ability",
  title: {
    ja: "日本語の力をどう測るか — 訳したテストと、日本語で作ったテスト",
    en: "Measuring Japanese Ability: Translated Tests and Tests Built in Japanese",
  },
  summary: {
    ja: "「日本語に強い」という主張は、どんなテストで測ったかで意味が変わる。英語のテストを訳したもの、日本語で一から作ったもの、それぞれの長所と落とし穴と、発表の数字を読むときの確認点。",
    en: "A claim that a model is \"strong in Japanese\" means different things depending on the test behind it. The strengths and pitfalls of tests translated from English and of tests built from scratch in Japanese, and what to check when reading published numbers.",
  },
  body: {
    ja: `## 英語のテストを訳して測る

AIの評価に使うテスト（ベンチマーク）の多くは英語で作られています。日本語の力を手早く比べるには、それを日本語に訳して使う方法があります。ただし、訳し方で結果の意味が変わります。

- **機械翻訳で訳す**: GPT-4の技術報告（2023年）は、57分野の選択問題のテストMMLUを、外部の機械翻訳（Azure Translate）で26の言語に訳しました。報告自身が、訳は完全ではなく、細かい情報が抜けて成績を下げる場合がある一方、慣例に従って固有名詞が英語のまま残り、成績を助ける場合もあると注意しています。
- **人が訳す**: Anthropicの文書は、MMLUをプロの翻訳者が14の言語に訳したテスト（OpenAIのsimple-evalsに記載）を使い、人が訳すことで質の高い訳になると説明しています。

どちらの場合も、問題の題材は元のテストのままです。訳したテストで高い点が出ても、日本の制度や文化に関わる問題に強いとは限りません。

## 日本語で一から作って測る
- **JGLUE**（2022年発表）: 英語のGLUE、中国語のCLUE、フランス語のFLUEのような言語理解のベンチマークが日本語にはなかったため、翻訳を使わずに一から作った日本語のベンチマークです。
- **llm-jp-eval**: LLM-jpが公開する評価ツールです。既存の日本語の評価データを、文章を生成させて答えさせる形式にそろえ、複数のデータセットにまたがって日本語のLLMを自動で評価します。
- **AIに採点させる評価**: 自由に書かせた答えは正解が1つに決まらないため、別のAIに採点させる方法（LLM-as-a-Judge）もあります。国立情報学研究所の大規模言語モデル研究開発センターは、日本語でこの評価をまとめて行うツール「llm-jp-judge」を公開しています（2026年7月にv2.0.0）。

## 発表の数字を読むときの確認点
- **どのテストか**: 英語のテストを訳したものか、日本語で作ったものか。機械翻訳か、人の翻訳か。
- **誰と比べたか**: 例えば、スーパーコンピュータ「富岳」で学習したFugaku-LLMの発表（2024年5月）は、「国産かつ独自のデータで学習を行っているオープンなモデルの中では」日本語のベンチマークで最高性能だったとしています。比べた範囲が限られていて、すべてのモデルの中で最高という意味ではありません。
- **いつの結果か**: モデルもテストも次々に更新されます。点数が満点近くに集まっていないか、問題が学習データに漏れていないかも確かめます（[ベンチマークの読み方](/ja/learn/understanding-ai/reading-benchmarks)のレッスン参照）。
- **自分の使い方で試す**: Anthropicの文書も、表にない言語を含め、自分の用途に関わる言語で試すよう勧めています。社内の文書の要約やメールの下書きなど、実際の作業に近い日本語の例を少し用意して、候補のAIを比べるのが確実です。`,
    en: `## Measuring with translated English tests

Most of the tests (benchmarks) used to evaluate AI are written in English. A quick way to compare Japanese ability is to translate one into Japanese. How it is translated, though, changes what the result means.

- **Machine translation**: the GPT-4 Technical Report (2023) translated MMLU, a multiple-choice test spanning 57 subjects, into 26 languages with an external machine translation service (Azure Translate). The report itself cautions that the translations are not perfect: subtle information is sometimes lost, which may hurt scores, while some proper nouns stay in English by translation convention, which may help.
- **Human translation**: Anthropic's documentation uses a version of MMLU translated into 14 languages by professional translators (documented in OpenAI's simple-evals repository), explaining that human translation gives high-quality translations.

Either way, the questions keep the subject matter of the original test. A high score on a translated test does not mean a model is strong on questions about Japanese institutions or culture.

## Measuring with tests built in Japanese
- **JGLUE** (published in 2022): language-understanding benchmarks existed for English (GLUE), Chinese (CLUE), and French (FLUE), but not for Japanese, so JGLUE was built from scratch in Japanese without translation.
- **llm-jp-eval**: an evaluation tool published by LLM-jp. It converts existing Japanese evaluation data into a format where the model answers by generating text, and evaluates Japanese LLMs automatically across multiple datasets.
- **Evaluation graded by AI**: free-form answers have no single correct answer, so another approach has a separate AI grade them (LLM-as-a-Judge). The Research and Development Center for Large Language Models at Japan's National Institute of Informatics publishes llm-jp-judge, a tool for running this kind of evaluation in Japanese (version 2.0.0 in July 2026).

## What to check when reading published numbers
- **Which test?** A translated English test or one built in Japanese? Machine-translated or human-translated?
- **Compared with what?** For example, the announcement of Fugaku-LLM (May 2024), trained on the Fugaku supercomputer, said it achieved the top score on a Japanese benchmark "among open models made in Japan and trained on original data." The comparison is limited to that group; it does not mean the best of all models.
- **When was it measured?** Models and tests are updated constantly. Also check whether scores are bunched near the maximum and whether test questions may have leaked into training data (see [how to read AI benchmarks](/en/learn/understanding-ai/reading-benchmarks)).
- **Try it on your own work**: Anthropic's documentation also recommends testing with the languages relevant to your use case, including ones not in its table. The most reliable comparison is to prepare a few Japanese examples close to your real tasks, such as summarizing internal documents or drafting emails, and try the candidate AIs on them.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "JGLUEの特徴として正しいものはどれ？",
        en: "Which correctly describes JGLUE?",
      },
      choices: [
        { ja: "翻訳を使わず、日本語で一から作ったベンチマーク", en: "A benchmark built from scratch in Japanese, without translation" },
        { ja: "英語のGLUEを機械翻訳したベンチマーク", en: "A machine translation of the English GLUE benchmark" },
        { ja: "画像の理解を測るベンチマーク", en: "A benchmark for image understanding" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "JGLUEは、日本語の言語理解の力を測るため、翻訳を使わずに一から作られました。",
        en: "JGLUE was built from scratch, without translation, to measure language understanding in Japanese.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "GPT-4の技術報告は、機械翻訳したテストでは訳が完全ではなく、成績に影響しうると注意している。",
        en: "The GPT-4 Technical Report cautions that machine-translated tests have imperfect translations that can affect scores.",
      },
      answer: true,
      explanation: {
        ja: "細かい情報が抜けて成績を下げる場合と、固有名詞が英語のまま残って成績を助ける場合の両方を挙げています。",
        en: "It notes both that lost details may hurt scores and that proper nouns left in English may help.",
      },
    },
    {
      kind: "single",
      prompt: {
        ja: "「国産かつ独自のデータで学習したオープンなモデルの中で最高」という発表は、どう読むのがよい？",
        en: "How should you read an announcement of \"the top score among open models made in Japan and trained on original data\"?",
      },
      choices: [
        {
          ja: "比べた範囲が限られていて、すべてのモデルの中で最高という意味ではない",
          en: "The comparison is limited to a group; it does not mean the best of all models",
        },
        { ja: "世界のすべてのモデルの中で最高という意味", en: "It means the best of every model in the world" },
        { ja: "日本語のどんな作業でも最高という意味", en: "It means the best at every task in Japanese" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "「〜の中で」という条件が、比べた範囲を示しています。どのテストで、いつ測ったかもあわせて確かめます。",
        en: "The \"among ...\" condition defines what was compared. Also check which test was used and when.",
      },
    },
  ],
  sources: [
    { label: "OpenAI: GPT-4 Technical Report（arXiv:2303.08774、Appendix F: Multilingual MMLU）", url: "https://arxiv.org/pdf/2303.08774" },
    {
      label: "Anthropic: Multilingual support（Claude Platform Docs）",
      url: "https://platform.claude.com/docs/en/build-with-claude/multilingual-support",
    },
    {
      label: "Kurihara et al.: JGLUE: Japanese General Language Understanding Evaluation（LREC 2022）",
      url: "https://aclanthology.org/2022.lrec-1.317/",
    },
    { label: "LLM-jp: llm-jp-eval（GitHub）", url: "https://github.com/llm-jp/llm-jp-eval" },
    { label: "国立情報学研究所 大規模言語モデル研究開発センター（LLMC）", url: "https://llmc.nii.ac.jp/" },
    {
      label: "富士通ほか: スーパーコンピュータ「富岳」で学習した大規模言語モデル「Fugaku-LLM」を公開（2024-05-10）",
      url: "https://info.archives.global.fujitsu/jp/news/2024/05/10.html",
    },
  ],
  lastVerified: "2026-10-13",
  glossaryRefs: ["benchmark", "jglue", "benchmark-contamination", "benchmark-saturation"],
};
