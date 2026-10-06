import type { Lesson } from "@/engine/content/types";

export const researchWithAi: Lesson = {
  id: "ai-agents-05",
  slug: "research-with-ai",
  title: {
    ja: "AIで調べ物をする — 検索連動の回答とディープリサーチ",
    en: "Researching with AI: Search-Grounded Answers and Deep Research",
  },
  summary: {
    ja: "検索して出典つきで答えるAIは便利だが、出典が付いていることと内容が正しいことは別。仕組み・弱点・確かめ方。",
    en: "AI that searches and answers with citations is useful, but a citation is not proof. How it works, where it fails, and how to check.",
  },
  body: {
    ja: `## 検索してから答えるAI

最近のチャットAIの多くは、質問に応じてWeb検索を**ツールとして**呼び出し（ツール呼び出しのループのレッスン参照）、見つけたページを読んだうえで、**出典リンクつき**で答えます。回答を検索結果などの外部の情報に根拠づけることを**グラウンディング**と呼びます。学習データより新しい情報も扱えるのが利点で、RAG（AI基礎トラック参照）と同じ発想です。

### ディープリサーチ — 調べ物をするエージェント
その先にあるのが「ディープリサーチ」と呼ばれる機能です。OpenAIが2025年2月にChatGPTで公開したときの説明では、インターネット上で**多段階の調査**を行うエージェント型の機能で、数百のオンライン情報源を探して分析・統合し、出典つきのレポートにまとめます。完了までに5〜30分ほどかかることもあります。Gemini・Claude・Perplexityなども同様の機能を提供しています。計画を立て、検索し、読んだ内容をもとに次の検索を決める——このトラックで見てきた**エージェントのループ**そのものです。

OpenAIは公開時に、限界も明記していました。事実を誤ったり誤った推論をしたりすることがある、信頼できる情報と噂の区別に苦労することがある、確信の度合い（不確実性）を正確に伝えられないことが多い、という点です。

### 出典が付いていても、正しいとは限らない
- コロンビア大学ジャーナリズム大学院のTow Centerが2025年3月に発表した調査では、8つのAI検索ツールにニュース記事の一節を示し、元記事の見出し・発行元・日付・URLを答えさせました。全体で**6割を超える質問に誤った回答**をし、どのツールも、限界を認めるより誤った答えを返すことの方が多く見られました。存在しないリンクを示したり、元記事ではなく転載記事を出典にしたりする例もありました。
- 欧州放送連合（EBU）と18か国22の公共放送機関が2025年10月に公表した調査では、ニュースについてのAIアシスタントの回答の**45%に重大な問題が少なくとも1つ**あり、最も多かったのは**出典の問題**（回答の31%）でした。引用した出典で内容が裏付けられていない、出典がまったくない、出典についての説明が誤っているか確かめられない、といったものです。

よくある失敗のパターンは次のとおりです。
1. 出典のページに、その主張が**書かれていない**。
2. リンクが**存在しない**、または別のページにつながる。
3. 一次情報ではなく**転載やまとめ**、古いページを出典にしている。
4. 複数の出典を混ぜて、**どれにも書かれていない結論**を作る。
5. 読んだページに仕込まれた**指示**に影響される（前のレッスンのプロンプトインジェクション）。

### 確かめる手順
1. 結論を支える**重要な主張**（数字・日付・固有名詞・引用）に印をつける。
2. **出典を開き**、その主張が書かれている箇所を自分の目で見つける。見つからなければ「未確認」として扱う。
3. ニュースや解説記事なら、そこが引用している**一次情報**（公式発表・論文・統計・法令）までたどる。
4. **日付と対象**を確かめる。いつの情報か、別の国・別の製品・古い版の話ではないか。
5. **横に読む（ラテラル・リーディング）**: 研究団体のDigital Inquiry Group（旧スタンフォード歴史教育グループ）は、ファクトチェッカーの観察から、Webサイトを知る最善の方法は、そのサイトを離れて他の情報源がそのサイトについて何と言っているかを見ることだとしています。発信元そのものを別のタブで調べましょう。
6. 迷ったら**別のAIや別の検索**でも聞き、食い違う点を重点的に確かめる。ただし同じ誤った情報源を参照していれば、複数のAIが一致しても正しいとは限りません。

### 頼み方の工夫
- 「主張ごとに、根拠になった出典の該当箇所を原文のまま引用して」と頼む（その引用も出典で照合する）。
- 「公式発表・論文・統計などの一次情報を優先して」「2025年以降の情報で」のように、情報源の種類と期間を指定する。
- 「確信の持てない点と、情報源どうしで食い違う点を分けて書いて」と頼む。`,
    en: `## AI that searches before it answers

Many chat AIs now call web search **as a tool** when a question needs it (see the tool-use loop lesson), read the pages they find, and answer **with source links**. Tying an answer to external information such as search results is called **grounding**. It lets the AI handle information newer than its training data — the same idea as RAG (see the AI Fundamentals track).

### Deep research: an agent that does the legwork
The next step is a feature usually called "deep research." When OpenAI launched it in ChatGPT in February 2025, it described an agentic capability that conducts **multi-step research** on the internet, finding, analyzing, and synthesizing hundreds of online sources into a report with citations. A run can take anywhere from 5 to 30 minutes. Gemini, Claude, Perplexity, and others offer similar features. Make a plan, search, decide the next search from what it just read — it is the **agent loop** from this track, applied to research.

At launch, OpenAI spelled out the limitations too: it can sometimes hallucinate facts or make incorrect inferences, may struggle to distinguish authoritative information from rumors, and often fails to convey uncertainty accurately.

### A citation is not a guarantee
- In a study published in March 2025, the Tow Center for Digital Journalism at Columbia's Graduate School of Journalism gave eight AI search tools excerpts from news articles and asked each to identify the article's headline, original publisher, publication date, and URL. Collectively, they gave **incorrect answers to more than 60 percent of queries**, and all of the tools were more likely to give a wrong answer than to acknowledge their limitations. Some fabricated links or cited syndicated copies instead of the original article.
- In a study published in October 2025 by 22 public service media organizations in 18 countries working with the European Broadcasting Union (EBU), **45% of AI assistants' answers about the news had at least one significant issue**. **Sourcing** was the biggest cause, affecting 31% of answers: claims not supported by the cited source, no sources at all, or incorrect or unverifiable claims about sources.

Common failure patterns:
1. The cited page **doesn't say** what the answer claims.
2. The link **doesn't exist**, or leads somewhere else.
3. The source is a **copy, an aggregator, or an outdated page** rather than the primary source.
4. Several sources are blended into **a conclusion none of them states**.
5. The answer is swayed by **instructions** planted in a page it read (prompt injection, previous lesson).

### How to check
1. Mark the **key claims** the conclusion rests on — numbers, dates, names, quotations.
2. **Open the source** and find the passage that states each claim yourself. If you can't find it, treat the claim as unverified.
3. For news or commentary, follow it back to the **primary source** it cites — the official announcement, paper, statistics, or statute.
4. Check the **date and the subject**: is this current, and is it really about the same country, product, or version?
5. **Read laterally**: by observing fact checkers, the Digital Inquiry Group (formerly the Stanford History Education Group) found that the best way to learn about a website is to leave it and see what other sources say about it. Look up the publisher itself in another tab.
6. When in doubt, ask **another AI or run another search**, and focus on where they disagree. But if they draw on the same wrong source, agreement between several AIs proves nothing.

### Asking in a way that is easier to check
- "For each claim, quote the exact passage from the source that supports it" — and check those quotes against the source too.
- "Prefer primary sources such as official announcements, papers, and statistics" and "only information from 2025 onward" — specify the kind of source and the time range.
- "List separately the points you're unsure of and the points where sources disagree."`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "AIの回答に出典リンクが付いていた。重要な数字を確かめる最初の一歩として適切なのは？",
        en: "An AI answer comes with source links. What is the right first step to check an important number?",
      },
      choices: [
        {
          ja: "出典を開き、その数字が書かれている箇所を自分で見つける",
          en: "Open the source and find the passage that states the number yourself",
        },
        { ja: "出典リンクの数が多いかどうかを数える", en: "Count whether there are many source links" },
        { ja: "同じ質問をもう一度して、同じ数字が返るか確かめる", en: "Ask the same question again and see whether the same number comes back" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "出典のページにその主張が書かれていないことはよくあります。リンクの数や答えの一貫性は、正しさの証拠になりません。",
        en: "Cited pages often don't say what the answer claims. The number of links, or getting the same answer twice, is no evidence of accuracy.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "出典リンクが付いているAIの回答は、その内容が出典で裏付けられていると考えてよい。",
        en: "If an AI answer includes source links, you can assume its content is backed by those sources.",
      },
      answer: false,
      explanation: {
        ja: "Tow CenterやEBUの調査では、出典の欠落や誤り、存在しないリンクが多く見つかりました。出典は「確かめる入り口」です。",
        en: "The Tow Center and EBU studies found frequent missing or wrong attributions and even fabricated links. A citation is where checking starts, not where it ends.",
      },
    },
  ],
  sources: [
    { label: "OpenAI: Introducing deep research", url: "https://openai.com/index/introducing-deep-research/" },
    {
      label: "Columbia Journalism Review (Tow Center): AI Search Has a Citation Problem",
      url: "https://www.cjr.org/tow_center/we-compared-eight-ai-search-engines-theyre-all-bad-at-citing-news.php",
    },
    { label: "EBU: News Integrity in AI Assistants (October 2025)", url: "https://www.ebu.ch/Report/MIS-BBC/NI_AI_2025.pdf" },
    {
      label: "Digital Inquiry Group: Teaching Lateral Reading",
      url: "https://cor.inquirygroup.org/curriculum/collections/teaching-lateral-reading/",
    },
  ],
  lastVerified: "2026-10-07",
  glossaryRefs: ["grounding", "deep-research", "agent", "hallucination"],
};
