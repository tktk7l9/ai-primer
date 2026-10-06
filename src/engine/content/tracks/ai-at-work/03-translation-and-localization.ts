import type { Lesson } from "@/engine/content/types";

export const translationAndLocalization: Lesson = {
  id: "ai-at-work-03",
  slug: "translation-and-localization",
  title: {
    ja: "翻訳とローカライズ — 流暢な訳ほど確かめる",
    en: "Translation and Localization: The More Fluent It Reads, the More You Check",
  },
  summary: {
    ja: "機械翻訳もチャットAIも読みやすい訳を出すが、用語・数字・法律の文章ではまだ誤る。間違えやすい箇所と、逆翻訳の使いどころと限界。",
    en: "Machine translation and chat AIs both produce readable translations, but they still slip on terminology, numbers, and legal text. Where they go wrong, and what back-translation can and can't tell you.",
  },
  body: {
    ja: `## 2つの翻訳AIと、共通の弱点

AIで翻訳する方法は大きく2つあります。
- **機械翻訳サービス**: 文章を入れると訳文を返す、翻訳専用のサービス。
- **チャットAI（LLM）**: 「取引先向けに丁寧に」「この用語集に従って」「専門外の人にも分かるように」といった指示や、文書全体の文脈を踏まえて訳させられる。

ただ、両者の境目は薄れています。機械翻訳の国際的な評価の場であるWMTの2024年の総括は、題名を「LLMの時代が来たが、機械翻訳は解決していない」とし、参加したシステムの過半数がすでにLLMを使っていたと報告しました。同じ総括は、LLMの登場で、流暢に見え、完璧に見える文章に囲まれた訳文にも深刻な誤りが含まれうることがいっそう明らかになったとし、訳の品質の最終的な判定は人による評価で行うべきだと述べています。**流暢さは、正確さの証拠になりません。**

### 間違えやすいところ
- **用語**: 業界用語・社内用語・製品名が一般的な意味で訳されたり、文書の途中で訳し方が変わったりする。→ 原語と訳語の対応表（用語集）を渡し、「この用語集に従い、載っていない専門用語は原語のまま残して」と指示する。
- **数字・単位・日付**: 「億」「万」とmillion・billionの換算、桁区切りの記号、日付の並び順、通貨、時刻とタイムゾーン。
- **否定と条件**: 「〜しない限り」「〜の場合に限り」のように、取り違えると意味が逆になる語句。
- **抜け落ちと付け足し**: 原文の一文がまるごと消える、原文にない説明が加わる。
- **法律や契約の文章**: 法務省の日本法令外国語訳データベースは、法的効力を持つのは日本語の法令自体で、翻訳はその理解を助けるための参考資料にすぎないと明記しています。契約書や規約も、どの言語の版が正式なのかを確かめ、訳文だけで判断しないようにします。

### ローカライズ — 訳すだけでは足りない
製品や文書を、特定の市場の言語・文化・その他の要件に合わせて作り変えることを**ローカライズ**と呼びます。日付や数字の書き方、通貨、単位、敬称、法的な要件の違いまでが対象です。訳文と一緒に「この市場向けに直すべき点（日付・通貨・単位・敬称・文化的な前提）を挙げて」と頼むと、見落としを減らせます。

### 確かめ方
1. **数字・固有名詞・否定・条件**を、原文と1つずつ突き合わせる。
2. **逆翻訳（バックトランスレーション）**: 訳文を、別のツールや新しい会話で元の言語に訳し戻し、元の文と比べる。抜け落ちや意味の反転に気づくきっかけになります。ただし万能ではありません。質問紙の翻訳で逆翻訳を検証したBehr（2017）は、逆翻訳は問題を見つけられる一方で誤った警告も少なくなく、さらに重要なこととして、多くの問題が隠れたまま残ると報告しています。訳し戻して元に戻ったからといって、正しい訳だという証明にはなりません。
3. **その言語が分かる人のチェック（ポストエディット）**: アジア太平洋機械翻訳協会（AAMT）のガイドラインは、生成AIを使った翻訳を含む機械翻訳には、専門分野や文脈に応じた正確な翻訳に限界があり、誤りのリスクを減らすには人の手によるチェックと修正（**ポストエディット**）が不可欠だとしています。人が翻訳したのと同等の品質を目指す「フルポストエディット」と、速さを重視して作業の一部を省く「ライトポストエディット」があり、どちらにするかは用途で決めます。社外に出す文書や契約に関わる文書は、フルポストエディットか専門の翻訳者に任せましょう。
4. **社外秘の文書を入れる前に**: 同じガイドラインは、機械翻訳を使う前に、入力したデータを提供事業者が再利用するか、どの国や地域で処理されるか、データを保持するか（保持期間を含む）について合意しておくよう勧めています。無料版と有料版で扱いが違うサービスもあります（[仕事でAIを使うときの情報の扱い](/ja/learn/society/data-privacy-at-work)のレッスン参照）。`,
    en: `## Two kinds of translation AI, one shared weakness

There are two broad ways to translate with AI:
- **Machine translation services**: dedicated services that take text in and return a translation.
- **Chat AIs (LLMs)**: you can tell them "make it polite for a client," "follow this glossary," or "make it clear to non-specialists," and they can draw on the context of the whole document.

The line between the two is blurring, though. The 2024 findings of WMT, the main international evaluation campaign for machine translation, were titled "The LLM Era Is Here but MT Is Not Solved Yet," and reported that the majority of participants already used LLMs in their systems. The same report says the arrival of LLMs has made it even clearer that translations — even ones that seem fluent and are surrounded by seemingly perfect content — can contain serious flaws, and that human evaluation should be the final judge of translation quality. **Fluency is no evidence of accuracy.**

### Where it goes wrong
- **Terminology**: industry terms, in-house jargon, and product names get translated in their everyday sense, or are translated differently halfway through a document. → Provide a glossary of source and target terms, and say "follow this glossary, and leave any specialist term that isn't in it in the original language."
- **Numbers, units, and dates**: converting between Japanese units of 10,000 (man) and 100 million (oku) and English millions and billions, thousands separators, date order, currencies, times and time zones.
- **Negations and conditions**: phrases like "unless" or "only if," where a slip reverses the meaning.
- **Omissions and additions**: a whole sentence of the original vanishes, or an explanation that was never there appears.
- **Legal and contractual text**: Japan's Ministry of Justice states on its Japanese Law Translation database that only the original Japanese texts of laws and regulations have legal effect, and the translations are reference material to aid understanding. For contracts and terms of service, too, check which language version is authoritative, and don't decide anything on the translation alone.

### Localization: translation alone isn't enough
Adapting a product or document to the language, cultural, and other requirements of a specific market is called **localization**. It covers date and number formats, currencies, units, forms of address, and differences in legal requirements. Along with the translation, ask "list what should change for this market — dates, currency, units, forms of address, cultural assumptions" to catch what a plain translation misses.

### How to check
1. Go through **numbers, names, negations, and conditions** one by one against the original.
2. **Back-translation**: translate the result back into the original language — with a different tool or a fresh conversation — and compare it with the original. It can flag omissions and reversed meanings. But it isn't foolproof. Behr (2017), assessing back-translation for questionnaire translation, found that while it can uncover problems, it causes quite a number of false alarms — and, even more importantly, many problems remain hidden. A clean round trip does not prove the translation is right.
3. **A check by someone who knows the language (post-editing)**: guidelines from the Asia-Pacific Association for Machine Translation (AAMT) say machine translation, including translation with generative AI, has limits in translating accurately for a specialist field or context, and that a human check and correction — **post-editing** — is essential to reduce the risk of errors. "Full post-editing" aims for quality equal to a professional human translation; "light post-editing" puts speed first and skips or simplifies some of that work. Choose by purpose: for documents going outside the organization or touching contracts, use full post-editing or a professional translator.
4. **Before you paste in confidential documents**: the same guidelines recommend agreeing up front on whether the provider reuses the input data, in which country or region the translation runs, and whether the provider keeps the data — and for how long. Some services treat free and paid plans differently (see the lesson on [handling information at work](/en/learn/society/data-privacy-at-work)).`,
  },
  quiz: [
    {
      kind: "multi",
      prompt: {
        ja: "AIの訳文を原文と突き合わせるとき、特に注意して確かめるべきものをすべて選んでください。",
        en: "When checking an AI translation against the original, which of these deserve particular attention? Select all that apply.",
      },
      choices: [
        { ja: "数字と単位", en: "Numbers and units" },
        { ja: "人名・社名・製品名", en: "Names of people, companies, and products" },
        { ja: "否定や条件を表す語句", en: "Words that express negation or conditions" },
        { ja: "訳文の文字数が原文と同じくらいか", en: "Whether the translation is about as long as the original" },
      ],
      correctIndexes: [0, 1, 2],
      explanation: {
        ja: "数字・固有名詞・否定や条件は、誤ると意味が大きく変わるのに、流暢な訳文の中では気づきにくい箇所です。文の長さは言語によって変わるので、文字数が近いかどうかは正しさの目安になりません。",
        en: "Numbers, names, negations, and conditions change the meaning when they're wrong, yet are easy to miss inside fluent text. Length varies between languages, so a similar length says nothing about accuracy.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "訳文を元の言語に訳し戻して、元の文と同じ意味になれば、翻訳が正しいことが保証される。",
        en: "If a translation, translated back into the original language, matches the original's meaning, the translation is guaranteed to be correct.",
      },
      answer: false,
      explanation: {
        ja: "逆翻訳は問題を見つけるきっかけにはなりますが、誤った警告も出るうえ、多くの問題が隠れたまま残ると報告されています。重要な文書は、その言語が分かる人がポストエディットします。",
        en: "Back-translation can flag problems, but research finds it raises false alarms and leaves many problems hidden. For important documents, have someone who knows the language post-edit.",
      },
    },
  ],
  sources: [
    {
      label:
        "Kocmi et al. (2024): Findings of the WMT24 General Machine Translation Shared Task: The LLM Era Is Here but MT Is Not Solved Yet",
      url: "https://aclanthology.org/2024.wmt-1.1/",
    },
    { label: "法務省: 日本法令外国語訳データベースシステム", url: "https://www.japaneselawtranslation.go.jp/ja/" },
    {
      label: "Behr (2017): Assessing the use of back translation: the shortcomings of back translation as a quality testing method",
      url: "https://www.ssoar.info/ssoar/handle/document/74190",
    },
    { label: "AAMT（アジア太平洋機械翻訳協会）: 機械翻訳ポストエディットガイドライン", url: "https://aamt.info/act/posteditguideline" },
  ],
  lastVerified: "2026-10-07",
  glossaryRefs: ["localization", "post-editing", "back-translation", "llm"],
};
