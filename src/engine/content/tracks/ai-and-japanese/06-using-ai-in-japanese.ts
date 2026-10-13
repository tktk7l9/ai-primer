import type { Lesson } from "@/engine/content/types";

export const usingAiInJapanese: Lesson = {
  id: "ai-and-japanese-06",
  slug: "using-ai-in-japanese",
  title: {
    ja: "日本語でAIを使いこなす — 言語と文体を指定し、やさしく書き、確かめる",
    en: "Using AI Well in Japanese: Set the Language and Style, Write Plainly, and Check",
  },
  summary: {
    ja: "日本語でAIを使うときのコツを、ここまでのレッスンと公的なガイドラインからまとめる。答える言語と文体をはっきり指定する、外国人にも伝わる「やさしい日本語」の下書きを頼んで人が確かめる、日本の事柄は日本の一次情報で確かめる。",
    en: "Tips for using AI in Japanese, drawn from this track and official guidelines: state the response language and style, ask for a draft in \"plain Japanese\" that non-native readers can follow and have people check it, and confirm Japan-specific facts against Japanese primary sources.",
  },
  body: {
    ja: `## 言語と文体をはっきり指定する

Anthropicの多言語の使い方についての文書（2026年10月時点）は、次のことを勧めています。
- 答える言語は推測させず、はっきり指定する。アプリに組み込むなら、会話の間ずっと効くシステムプロンプトに書く。
- 翻訳では、元の言語と訳す先の言語の両方を書く。
- その言語を母語とする人のような、自然な言い回しを求める。
- ローマ字のような書き換えではなく、その言語本来の文字で入力する。
- 翻訳を超えて、文化や地域への配慮を求める。

日本語ではさらに、文体（です・ます調か、だ・である調か）、敬語の度合い、読み手（社外の取引先、子ども、日本語を学んでいる人など）を書くと、狙った文章に近づきます。

## 「やさしい日本語」の下書きを頼む
出入国在留管理庁と文化庁の「在留支援のためのやさしい日本語ガイドライン」（2020年8月）は、難しい言葉を言い換えるなど、相手に配慮したわかりやすい日本語を**やさしい日本語**と呼び、書き言葉で作るときの3つのステップを示しています。
1. **日本人にわかりやすい文章にする**: 伝えたいことを整理する、3つ以上のことは箇条書きにする、外来語に気を付ける など。
2. **外国人にもわかりやすい文章にする**: 受身形や使役の表現をできる限り使わない、簡単な言葉を使う、漢字の量に注意してふりがなをつける など。
3. **わかりやすさを確かめる**: 日本語教師や外国人に読んでもらい、伝わるかどうかを確かめる。

日付は元号ではなく西暦で書く、年月日に「/」を使わない、といった具体的な決まりもあります。ガイドラインが紹介する東京都国際交流委員会の調査では、外国人が希望する情報発信の言語は「やさしい日本語」が76%で最も多く、「機械翻訳された母国語」は12%でした。

AIには、ガイドラインのステップ1と2に沿った下書きを頼めます。ステップ3の確認は、人が行います。

## 日本の事柄は、日本の一次情報で確かめる
- **制度や手続き**: 税・年金・行政の手続きなどは、AIの答えを公的な一次情報で確かめます（[行政の手続き](/ja/learn/ai-in-daily-life/government-procedures)のレッスン参照）。
- **翻訳**: 数字・固有名詞・否定を原文と突き合わせます（[翻訳とローカライズ](/ja/learn/ai-at-work/translation-and-localization)のレッスン参照）。
- **長い日本語の文書**: 日本語は英語よりトークンが多くなりやすいので、必要な部分だけを渡します（[トークンと日本語](/ja/learn/ai-and-japanese/tokens-and-japanese)のレッスン参照）。

## このトラックのまとめ
- 日本語はWebの上では主要な言語だが、量は英語の約8分の1。成績は英語に近づいたが、同じではない。
- 同じ内容でも、日本語は英語よりトークンが多くなりやすい。
- 「日本語に強い」は、どのテストで、何と比べたかで読む。
- 日本でも、データまで公開する開発や、日本語を追加で学ばせる開発が進んでいる。
- 答えの「ふつう」は学習データの文化に寄りやすい。日本の文脈は、こちらから伝える。`,
    en: `## State the language and style

Anthropic's documentation on multilingual use (as of October 2026) recommends:
- State the response language explicitly instead of leaving it to inference. In an application, put it in the system prompt, which keeps it in force for the whole conversation.
- When translating, name both the source and the target language.
- Ask for idiomatic phrasing, as a native speaker would write.
- Enter text in the language's own script rather than a transliteration (such as Japanese written in roman letters).
- Ask for cultural and regional awareness beyond the translation itself.

In Japanese, also specify the style (polite です・ます form or plain だ・である form), the level of keigo (honorific language), and the reader (an outside business partner, children, people learning Japanese, and so on) to get closer to the text you want.

## Ask for a draft in "plain Japanese"
Guidelines on plain Japanese for supporting foreign residents, published in August 2020 by Japan's Immigration Services Agency and Agency for Cultural Affairs, use **plain Japanese** (yasashii nihongo) to mean easy-to-understand Japanese written with the reader in mind, such as by rephrasing difficult words, and set out three steps for writing it:
1. **Make it easy for Japanese readers**: organize what you want to say, use bullet points for three or more items, watch out for loanwords, and so on.
2. **Make it easy for non-Japanese readers too**: avoid passive and causative forms where possible, use simple words, watch the amount of kanji and add furigana (reading aids), and so on.
3. **Check that it is understood**: have Japanese-language teachers or non-Japanese readers read it and confirm the message gets through.

There are concrete rules too, such as writing dates in the Western calendar rather than by Japanese era names, and not using "/" in dates. In a survey by the Tokyo International Communication Committee cited in the guidelines, the language foreign residents most wanted information in was plain Japanese (76%), while their own language via machine translation was chosen by 12%.

You can ask AI for a draft that follows steps 1 and 2. Step 3, the check, is for people to do.

## Confirm Japan-specific facts with Japanese primary sources
- **Rules and procedures**: for taxes, pensions, and government procedures, check AI answers against official primary sources (see the [government procedures](/en/learn/ai-in-daily-life/government-procedures) lesson).
- **Translation**: compare numbers, proper nouns, and negations with the original (see the [translation and localization](/en/learn/ai-at-work/translation-and-localization) lesson).
- **Long Japanese documents**: Japanese tends to take more tokens than English, so send only the parts you need (see the [tokens and Japanese](/en/learn/ai-and-japanese/tokens-and-japanese) lesson).

## Track summary
- Japanese is a major language on the web, but there is about one-eighth as much of it as English. Scores have come close to English, but not all the way.
- The same content tends to take more tokens in Japanese than in English.
- Read claims of being "strong in Japanese" in terms of which test was used and what was compared.
- In Japan, there is development that publishes even its data, and development that teaches Japanese to existing models.
- An AI's sense of "normal" leans toward the cultures in its training data. Supply the Japanese context yourself.`,
  },
  quiz: [
    {
      kind: "multi",
      prompt: {
        ja: "Anthropicの文書が勧める、多言語でAIを使うときのやり方をすべて選んで。",
        en: "Select all the practices Anthropic's documentation recommends for using AI across languages.",
      },
      choices: [
        { ja: "答える言語をはっきり指定する", en: "State the response language explicitly" },
        { ja: "翻訳では、元の言語と訳す先の言語の両方を書く", en: "When translating, name both the source and target languages" },
        { ja: "日本語はローマ字に書き換えて入力する", en: "Enter Japanese transliterated into roman letters" },
        { ja: "文化や地域への配慮を求める", en: "Ask for cultural and regional awareness" },
      ],
      correctIndexes: [0, 1, 3],
      explanation: {
        ja: "文書は、書き換えではなく、その言語本来の文字で入力するよう勧めています。日本語なら漢字かな交じりのまま入力します。",
        en: "The documentation recommends entering text in the language's own script rather than a transliteration — for Japanese, the usual mix of kanji and kana.",
      },
    },
    {
      kind: "single",
      prompt: {
        ja: "やさしい日本語ガイドラインのステップ3は何をする？",
        en: "What does step 3 of the plain Japanese guidelines involve?",
      },
      choices: [
        {
          ja: "日本語教師や外国人に読んでもらい、伝わるかどうかを確かめる",
          en: "Having Japanese-language teachers or non-Japanese readers read it to confirm it gets through",
        },
        { ja: "AIにもう一度読ませて、問題がないと言えば完成とする", en: "Having the AI read it again and calling it done if it reports no problems" },
        { ja: "できるだけ長く、詳しい文章に書き足す", en: "Making the text as long and detailed as possible" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "下書きはAIに頼めても、伝わるかどうかは読み手に確かめてもらうのがガイドラインの手順です。",
        en: "AI can write the draft, but the guidelines have readers confirm whether it actually gets through.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "やさしい日本語ガイドラインは、日付を元号で書くよう勧めている。",
        en: "The plain Japanese guidelines recommend writing dates with Japanese era names.",
      },
      answer: false,
      explanation: {
        ja: "元号は使わずに西暦を使い、年月日に「/」も使わないとしています。",
        en: "They say to use the Western calendar rather than era names, and not to use \"/\" in dates.",
      },
    },
  ],
  sources: [
    {
      label: "Anthropic: Multilingual support（Claude Platform Docs）",
      url: "https://platform.claude.com/docs/en/build-with-claude/multilingual-support",
    },
    {
      label: "出入国在留管理庁: 在留支援のためのやさしい日本語ガイドライン",
      url: "https://www.moj.go.jp/isa/support/portal/plainjapanese_guideline.html",
    },
    {
      label: "出入国在留管理庁・文化庁: 在留支援のためのやさしい日本語ガイドライン（2020年8月、PDF）",
      url: "https://www.moj.go.jp/isa/content/930006072.pdf",
    },
    {
      label: "出入国在留管理庁・文化庁: 在留支援のためのやさしい日本語ガイドラインの概要（PDF）",
      url: "https://www.moj.go.jp/isa/content/930006071.pdf",
    },
  ],
  lastVerified: "2026-10-13",
  glossaryRefs: ["plain-japanese", "localization", "back-translation", "prompt"],
};
