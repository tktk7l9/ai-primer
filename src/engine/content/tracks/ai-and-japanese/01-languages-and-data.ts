import type { Lesson } from "@/engine/content/types";

export const languagesAndData: Lesson = {
  id: "ai-and-japanese-01",
  slug: "languages-and-data",
  title: {
    ja: "言語でAIの力が違うのはなぜ — 学習データの中の日本語",
    en: "Why AI Ability Differs by Language: Japanese in the Training Data",
  },
  summary: {
    ja: "AIは読んだ文章から言葉を覚える。Webの文章の約4割は英語で、日本語は約5%。学習データの言語の偏りと、英語と比べた日本語の成績から、日本語でAIを使うときの前提をつかむ。",
    en: "AI learns language from the text it reads. About 40% of web pages are in English, and about 5% in Japanese. The language skew in training data, and how Japanese scores compare with English, set the baseline for using AI in Japanese.",
  },
  body: {
    ja: `## 読んだ量の多い言語ほど得意になりやすい

大規模言語モデル（LLM）は、大量の文章を読んで次に来る言葉を予測する訓練（事前学習）で言葉を覚えます（[事前学習](/ja/learn/how-llms-work/pretraining)のレッスン参照）。そのため、学習データに多く含まれる言語ほど得意になりやすく、少ない言語では力が落ちやすくなります。

### Webの文章の言語の割合
学習データの大きな部分を占めるのは、Webから集めた文章です。2020年のGPT-3の論文は、学習データの大部分が、品質で絞り込んだだけのCommon Crawl（Webを巡回して集めたページを毎月公開しているデータ）に由来すると説明しています。

Common Crawlが公開している統計で、2026年10月13日時点で最新の巡回（CC-MAIN-2026-39）を見ると、ページの主な言語の割合は次のとおりです（言語の判定はHTMLのページだけが対象）。

| 言語 | 割合 |
|---|---|
| 英語 | 41.9% |
| ロシア語 | 6.7% |
| ドイツ語 | 5.7% |
| 日本語 | 5.2% |
| スペイン語 | 4.7% |
| フランス語 | 4.7% |
| 中国語 | 4.2% |

日本語はWebの上では主要な言語の1つですが、量は英語の約8分の1です。

### モデルの学習データでは、さらに偏ることがある
集めたデータをどう選ぶかで、モデルが実際に学ぶ言語の割合は変わります。
- **GPT-3（2020年）**: 学習データは単語の数で93%が英語で、ほかの言語は7%でした。
- **Llama 2（2023年）**: Metaの論文の表では、事前学習データの文書のうち英語が89.70%、日本語は0.10%でした（言語を判定できなかった8.38%には、プログラムのコードも含まれる）。Metaは、英語で使うときに最も性能が出るとし、英語以外での性能は不安定なので注意して使うべきだと書いていました。

## 英語と比べた日本語の成績
- **GPT-4の技術報告（2023年）**: 57分野の選択問題のテストMMLUを機械翻訳して試したところ、英語の85.5%に対して日本語は79.9%でした（26言語で試した結果の1つ）。
- **Anthropicの文書（2026年10月時点）**: MMLUをプロの翻訳者が14の言語に訳したテストで、同社の2つのモデルの日本語の成績は、英語のそれぞれ96.8%と93.5%でした。同じ表で、ヨルバ語では79.7%と52.7%まで下がります。

ここから読み取れるのは次の3点です。
- 日本語は、Webに文章の多い言語の側にあり、最近のモデルでは英語に近い成績が出ている。
- それでも英語と同じではなく、差の大きさはモデルによって違う。
- 成績は、テストの訳し方などの測り方にも左右される（[日本語の力をどう測るか](/ja/learn/ai-and-japanese/measuring-japanese-ability)のレッスンで扱う）。

このトラックでは続いて、日本語の文章の長さの数え方（トークン）、日本語の力の測り方、日本での開発、文化の偏り、日本語で上手に使うコツを見ていきます。古い日本語の本をOCRでテキストにする取り組みは、[本の文字を読み取るAI](/ja/learn/ai-and-historical-records/ocr-full-text-search)のレッスンで扱います。`,
    en: `## Languages read more often tend to be handled better

Large language models (LLMs) learn language by reading huge amounts of text and practicing predicting what comes next (pre-training; see the [pre-training](/en/learn/how-llms-work/pretraining) lesson). So they tend to be better at languages that appear more often in their training data, and weaker in languages that appear less.

### The languages of web text
Text collected from the web makes up a large part of training data. The 2020 GPT-3 paper explains that most of its training data came from Common Crawl (data that publishes pages collected by crawling the web each month), with only quality-based filtering.

Common Crawl's published statistics for the latest crawl as of October 13, 2026 (CC-MAIN-2026-39) show these shares for the primary language of each page (only HTML pages go through language detection):

| Language | Share |
|---|---|
| English | 41.9% |
| Russian | 6.7% |
| German | 5.7% |
| Japanese | 5.2% |
| Spanish | 4.7% |
| French | 4.7% |
| Chinese | 4.2% |

Japanese is one of the major languages of the web, but there is about one-eighth as much of it as English.

### Model training data can be even more skewed
How collected data is selected changes the share of each language a model actually learns from.
- **GPT-3 (2020)**: the training data was 93% English by word count, with 7% in other languages.
- **Llama 2 (2023)**: a table in Meta's paper shows 89.70% of pre-training documents in English and 0.10% in Japanese (the 8.38% whose language could not be identified includes programming code). Meta wrote that the model would perform best in English, and that its performance in other languages was fragile and should be used with caution.

## How Japanese scores compare with English
- **GPT-4 Technical Report (2023)**: on a machine-translated version of MMLU, a multiple-choice test spanning 57 subjects, GPT-4 scored 85.5% in English and 79.9% in Japanese (one of 26 languages tested).
- **Anthropic's documentation (as of October 2026)**: on MMLU translated into 14 languages by professional translators, two of the company's models scored 96.8% and 93.5% of their English performance in Japanese. In the same table, Yoruba drops to 79.7% and 52.7%.

Three things follow:
- Japanese is among the languages with plenty of web text, and recent models score close to their English level.
- Still, it is not the same as English, and the size of the gap differs from model to model.
- Scores also depend on how they are measured, such as how the test was translated (covered in [measuring Japanese ability](/en/learn/ai-and-japanese/measuring-japanese-ability)).

The rest of this track looks at how Japanese text is counted (tokens), how Japanese ability is measured, development in Japan, cultural bias, and tips for using AI well in Japanese. Efforts to turn old Japanese books into text with OCR are covered in the [AI that reads the text in books](/en/learn/ai-and-historical-records/ocr-full-text-search) lesson.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "Common Crawlの最新の巡回（CC-MAIN-2026-39）で、日本語のページの割合はおよそどれくらい？",
        en: "In Common Crawl's latest crawl (CC-MAIN-2026-39), roughly what share of pages are in Japanese?",
      },
      choices: [
        { ja: "約5%", en: "About 5%" },
        { ja: "約40%", en: "About 40%" },
        { ja: "約0.1%", en: "About 0.1%" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "日本語は5.2%で、英語（41.9%）の約8分の1です。0.1%は、Llama 2の事前学習データで日本語が占めた文書の割合（0.10%）です。",
        en: "Japanese is 5.2%, about one-eighth of English (41.9%). The 0.1% figure is the share of Japanese documents in Llama 2's pre-training data (0.10%).",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "2020年のGPT-3の学習データは、単語の数で93%が英語だった。",
        en: "GPT-3's training data in 2020 was 93% English by word count.",
      },
      answer: true,
      explanation: {
        ja: "GPT-3の論文は、学習データは主に英語（単語の数で93%）で、ほかの言語は7%だと説明しています。",
        en: "The GPT-3 paper says its training data was primarily English (93% by word count), with 7% in other languages.",
      },
    },
    {
      kind: "single",
      prompt: {
        ja: "GPT-4の技術報告で、機械翻訳したMMLUの日本語の成績はどうだった？",
        en: "In the GPT-4 Technical Report, how did GPT-4 do on the machine-translated Japanese version of MMLU?",
      },
      choices: [
        { ja: "英語（85.5%）より低い79.9%だった", en: "79.9%, lower than English (85.5%)" },
        { ja: "英語とまったく同じだった", en: "Exactly the same as English" },
        { ja: "英語より高かった", en: "Higher than English" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "日本語は79.9%で、英語の85.5%より低い結果でした。ただし、機械翻訳したテストには訳の誤りの影響もあります。",
        en: "Japanese came in at 79.9%, below English at 85.5%. Machine-translated tests also carry the effects of translation errors, though.",
      },
    },
  ],
  sources: [
    {
      label: "Common Crawl: Statistics of Common Crawl Monthly Archives — Distribution of Languages（CC-MAIN-2026-39）",
      url: "https://commoncrawl.github.io/cc-crawl-statistics/plots/languages",
    },
    { label: "Brown et al.: Language Models are Few-Shot Learners（GPT-3、arXiv:2005.14165）", url: "https://arxiv.org/pdf/2005.14165" },
    {
      label: "Touvron et al.: Llama 2: Open Foundation and Fine-Tuned Chat Models（arXiv:2307.09288）",
      url: "https://arxiv.org/pdf/2307.09288",
    },
    { label: "OpenAI: GPT-4 Technical Report（arXiv:2303.08774）", url: "https://arxiv.org/pdf/2303.08774" },
    {
      label: "Anthropic: Multilingual support（Claude Platform Docs）",
      url: "https://platform.claude.com/docs/en/build-with-claude/multilingual-support",
    },
  ],
  lastVerified: "2026-10-13",
  glossaryRefs: ["common-crawl", "llm", "benchmark"],
};
