import type { Lesson } from "@/engine/content/types";

export const embeddingsAndRetrieval: Lesson = {
  id: "understanding-ai-02",
  slug: "embeddings-and-retrieval",
  title: {
    ja: "埋め込みと検索 — RAGが資料を探して答えるしくみ",
    en: "Embeddings and Retrieval: How RAG Finds Passages Before It Answers",
  },
  summary: {
    ja: "RAGは、文章を数字の並び（埋め込み）に変え、質問と意味の近い断片を探してプロンプトに入れてから答える。しくみを知ると、出典が付いていても答えが間違う理由が見えてくる。",
    en: "RAG turns text into lists of numbers (embeddings), finds the passages closest in meaning to your question, and adds them to the prompt before answering. Knowing how that works shows why an answer can cite a source and still be wrong.",
  },
  body: {
    ja: `## 答える前に「意味の近い断片」を探す

[RAG（検索拡張生成）](/ja/learn/ai-basics/rag-agents-finetuning)は、答える前に資料から関係する部分を探し、それを踏まえて答えるしくみでした。このレッスンでは「探す」部分の中身と、出典が付いていても答えが間違う理由を、しくみから見ていきます。

### 埋め込み — 文章を「数字の並び」にする
**埋め込み（エンベディング）**は、文章を数百〜数千個の数字の並び（ベクトル）に変えたものです。OpenAIの開発者向けドキュメントは、2つのベクトルの距離が関連の強さを表し、距離が小さいほど関連が強いと説明しています（2026年10月時点）。意味の近い文章どうしが近くに並ぶ「意味の地図」のようなものです。近さの測り方には、ベクトルの向きの近さを見る**コサイン類似度**を勧めています。

### 準備 — 資料を断片に切って、数字にしておく
1. 資料を**チャンク**と呼ばれる小さな断片に切り分けます（チャンク分割）。Anthropicは、ふつう数百トークン以下にすると説明しています。
2. 断片ごとに埋め込みを作り、探せる形で保存しておきます（ベクトルデータベース）。

RAGを提案した2020年の論文（Lewisら）では、2018年12月時点のWikipediaの記事を100語ずつの断片に区切り、約2,100万件の文書として埋め込みを作っていました。

### 質問が来たら — ベクトル検索
質問も同じ方法で埋め込みに変え、質問のベクトルに近い断片を、近い順に決まった件数だけ取り出します。これが**ベクトル検索**です。件数が多いと全件と比べるのに時間がかかるため、近似的な方法で速く探すことがあります（先の論文も、2,100万件を近似的な探索で検索していました）。

### 言葉どおりの一致も使う — ハイブリッド検索と並べ替え
埋め込みは言い換えに強い一方、型番やエラーコードのような**文字どおりの一致**を取りこぼすことがあります。Anthropicは「Error code TS-999」の検索を例に、埋め込みはエラーコード一般の情報を見つけても「TS-999」そのものを逃しうるとして、単語の一致で順位をつける従来の手法（BM25）と組み合わせる方法を紹介しています（**ハイブリッド検索**）。候補を多めに取ってから質問との関連を採点し直して並べ替える**リランキング**を加えることもありますが、そのぶん時間と費用が増えます。

### 最後に — 断片をプロンプトに入れて答える
選ばれた断片は質問と一緒にプロンプトに入れられ、モデルはそれを読んで答えます（RAGの論文も、取り出した文書を入力につなげていました）。この方式では、モデルが答えるときに読んでいるのは、選ばれた断片だけです。

### 出典が付いていても間違える理由
しくみをたどると、つまずく場所が見えてきます。
1. **必要な断片が見つからない**: 言い回しの違いなどで答えに必要な断片が上位に入らないと、ずれた断片をもとに答えてしまうことがあります。
2. **断片から文脈が消える**: Anthropicは「その会社の売上は前の四半期より3%伸びた」という断片を例に、切り出すとどの会社のいつの話かが分からなくなると指摘しています。
3. **似ているだけで当てはまらない**: 意味の近さは「関係がありそう」の目安で、正しさの保証ではありません。後で紹介する法律分野の評価では、「moral wrong doctrine」の定義を尋ねられたツールが、言葉は似ているが意味は無関係な法律用語「moral turpitude」を定義した資料を使った例が記録されています。
4. **長い入力の途中を見落とす**: 断片をたくさん入れると、途中にある情報が使われにくくなることがあります（[コンテキストウィンドウ](/ja/learn/ai-basics/context-window)のレッスンの「lost in the middle」）。
5. **断片に指示が仕込まれている**: 資料の中の文を指示として実行してしまうことがあります（[プロンプトインジェクション](/ja/learn/ai-agents/prompt-injection)のレッスン参照）。

### 研究と開発元の数字
- スタンフォード大学などの研究者は2024年、提供元がRAGによってハルシネーション（[もっともらしい誤り](/ja/learn/ai-basics/hallucination)）を避けられるなどとうたっていた法律調査用のAIツールを、事前に登録した方法で評価しました（2025年に学術誌に掲載）。一般的なチャットAI（GPT-4）よりハルシネーションは減っていたものの、LexisNexisとThomson Reutersのツールは、それぞれ17%〜33%の割合でハルシネーションを起こしていました。この研究は、内容の誤りに加えて、出典を付けていても**その出典を読み違えている**、または**当てはまらない出典を挙げている**回答も、ハルシネーションに数えています。
- Anthropicは2024年9月、断片ごとに「どの文書のどんな話か」という短い説明を書き足してから索引を作る方法（Contextual Retrieval）を発表し、上位20件に必要な断片が入らない失敗の割合が5.7%から2.9%に、リランキングも加えると1.9%に下がったと報告しました。開発元自身の実験の数字で、失敗はゼロにはなっていません。

### 使う側にできること
- 出典は「検索で見つかったもの」で、正しさの保証ではありません。重要な主張は、出典を開いて該当箇所を確かめます（手順は[AIで調べ物をする](/ja/learn/ai-agents/research-with-ai)）。
- 型番・条文番号・固有名詞のように正確な文字列が大事な質問では、その文字列が出典の箇所に本当にあるかを確かめます。
- 資料が小さいなら、検索に任せず全体を渡す方法もあります（Anthropicは、20万トークン＝約500ページより小さければRAGは要らないとしています）。何を読ませるかは[コンテキストエンジニアリング](/ja/learn/ai-agents/context-engineering)も参照してください。`,
    en: `## Finding the passages closest in meaning before answering

[RAG (retrieval-augmented generation)](/en/learn/ai-basics/rag-agents-finetuning) looks up the relevant parts of a set of documents before it answers, and bases its answer on them. This lesson opens up the "look up" step and uses the mechanism to explain why an answer can cite a source and still be wrong.

### Embeddings: turning text into a list of numbers
An **embedding** turns a piece of text into a list of hundreds to thousands of numbers (a vector). OpenAI's developer documentation explains that the distance between two vectors measures their relatedness: small distances mean high relatedness (as of October 2026). Think of it as a map of meaning on which texts with similar meanings sit close together. For measuring closeness, the same documentation recommends **cosine similarity**, which compares the directions of two vectors.

### Preparation: cut the documents into pieces and turn them into numbers
1. Split the documents into small pieces called **chunks** (chunking). Anthropic says these are usually no more than a few hundred tokens.
2. Create an embedding for each chunk and store them in a searchable form (a vector database).

The 2020 paper that proposed RAG (Lewis and colleagues) split the articles of the December 2018 Wikipedia dump into 100-word chunks — about 21 million documents — and computed an embedding for each.

### When a question arrives: vector search
The question is turned into an embedding the same way, and a set number of chunks whose vectors are closest to it are pulled out, closest first. This is **vector search**. Comparing against every chunk takes time when there are many, so the search may use an approximate method to go faster (the paper above searched its 21 million documents approximately).

### Exact matches too: hybrid search and reranking
Embeddings handle paraphrases well but can miss **exact matches** such as model numbers or error codes. Anthropic's example is a search for "Error code TS-999": an embedding model might find content about error codes in general but miss the exact "TS-999" match, so it describes combining embeddings with BM25, a long-established method that ranks results by matching words (**hybrid search**). Some systems also add **reranking** — take a larger set of candidates, re-score each against the question, and reorder them — at some extra cost in time and money.

### Finally: put the chunks in the prompt and answer
The selected chunks go into the prompt along with the question, and the model answers from them (the RAG paper, too, joined the retrieved document to the input). In this setup, what the model actually reads when it answers is only the chunks that were selected.

### Why answers with citations can still be wrong
Trace the mechanism and you can see where things go wrong.
1. **The needed chunk isn't found**: if wording differences or other factors keep the right chunk out of the top results, the model may answer from chunks that miss the point.
2. **Chunks lose their context**: Anthropic's example is a chunk reading "The company's revenue grew by 3% over the previous quarter" — cut out on its own, it no longer says which company or which quarter.
3. **Similar is not the same as applicable**: closeness of meaning signals "probably related," not "correct." In the legal study described below, a tool asked to define the "moral wrong doctrine" relied on a source defining "moral turpitude," a legal term with a similar-sounding but unrelated meaning.
4. **The middle of a long input gets overlooked**: pack in many chunks and information in the middle may be used less (see "lost in the middle" in the [context window](/en/learn/ai-basics/context-window) lesson).
5. **Instructions are hidden in a chunk**: text inside a document can be acted on as if it were an instruction (see the [prompt injection](/en/learn/ai-agents/prompt-injection) lesson).

### Numbers from researchers and from a vendor
- In 2024, researchers at Stanford and elsewhere ran a preregistered evaluation of AI legal research tools whose providers had touted RAG as a way to avoid [hallucinations](/en/learn/ai-basics/hallucination) or as guaranteeing "hallucination-free" citations (published in a journal in 2025). Hallucinations were reduced compared with a general-purpose chatbot (GPT-4), but the tools from LexisNexis and Thomson Reuters each hallucinated between 17% and 33% of the time. The study counted as hallucinations not only incorrect answers but also answers that cited a source yet **misinterpreted it** or **cited one that didn't apply**.
- In September 2024, Anthropic announced Contextual Retrieval, which prepends a short, chunk-specific explanation of context to each chunk before indexing it, and reported that the share of cases where a needed chunk was missing from the top 20 results fell from 5.7% to 2.9%, and to 1.9% with reranking added. These are the vendor's own experimental figures, and the failures did not reach zero.

### What you can do as a user
- A citation is what the search found, not proof. For important claims, open the source and find the passage yourself (step by step in [Researching with AI](/en/learn/ai-agents/research-with-ai)).
- When an exact string matters — a model number, an article number, a name — check that the string really appears in the cited passage.
- If the material is small, you can hand over the whole thing instead of relying on search (Anthropic says that below 200,000 tokens, about 500 pages, there's no need for RAG). For deciding what the model should read, see also [context engineering](/en/learn/ai-agents/context-engineering).`,
  },
  quiz: [
    {
      kind: "order",
      prompt: {
        ja: "RAGが資料を探して答えるまでの流れを、順に並べてください。",
        en: "Put the steps RAG goes through to find material and answer in order.",
      },
      items: [
        { ja: "資料を小さな断片（チャンク）に切り分ける", en: "Split the documents into small chunks" },
        { ja: "断片ごとに埋め込みを作って保存する", en: "Create an embedding for each chunk and store it" },
        { ja: "質問を埋め込みに変え、近い断片を探す", en: "Turn the question into an embedding and find the closest chunks" },
        { ja: "選ばれた断片をプロンプトに入れて答えを生成する", en: "Put the selected chunks into the prompt and generate the answer" },
      ],
      explanation: {
        ja: "資料の切り分けと埋め込みは、質問が来る前に済ませておきます。質問が来たら近い断片を探し、プロンプトに入れてから答えを生成します。",
        en: "Chunking and embedding the documents happen before any question arrives. When a question comes in, the closest chunks are found and added to the prompt, and only then is the answer generated.",
      },
    },
    {
      kind: "single",
      prompt: {
        ja: "RAGを使うAIが出典つきで答えたのに、内容が間違っていた。しくみから考えられる原因として正しいものは？",
        en: "An AI that uses RAG gave an answer with a citation, but the answer was wrong. Which cause fits how the mechanism works?",
      },
      choices: [
        {
          ja: "質問と意味が近いだけで、当てはまらない断片を取り出して答えた",
          en: "It retrieved a chunk that was close in meaning to the question but didn't actually apply, and answered from it",
        },
        {
          ja: "出典が付いた回答は検索で正しさが確かめられているので、間違いはありえない",
          en: "Cited answers have already been checked for accuracy by the search, so it can't really be wrong",
        },
        {
          ja: "モデルが資料をすべて読んだうえで、わざと違う答えを選んだ",
          en: "The model read every document in full and deliberately chose a different answer",
        },
      ],
      correctIndex: 0,
      explanation: {
        ja: "ベクトル検索の「近さ」は関係がありそうかの目安で、正しさの保証ではありません。法律分野の評価でも、言葉が似ているだけの無関係な資料を使った例が記録されています。モデルが読むのは、選ばれた断片だけです。",
        en: "The \"closeness\" in vector search signals likely relevance, not correctness. The legal study recorded a tool relying on an unrelated source whose wording only looked similar. And the model reads only the chunks that were selected.",
      },
    },
  ],
  sources: [
    {
      label: "Lewis et al.: Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks (NeurIPS 2020)",
      url: "https://arxiv.org/abs/2005.11401",
    },
    { label: "OpenAI Docs: Vector embeddings", url: "https://developers.openai.com/api/docs/guides/embeddings" },
    {
      label: "Anthropic: Contextual Retrieval in AI Systems (2024-09-19)",
      url: "https://www.anthropic.com/engineering/contextual-retrieval",
    },
    {
      label:
        "Magesh et al.: Hallucination-Free? Assessing the Reliability of Leading AI Legal Research Tools (2024; Journal of Empirical Legal Studies, 2025)",
      url: "https://arxiv.org/abs/2405.20362",
    },
  ],
  lastVerified: "2026-10-07",
  glossaryRefs: ["embedding", "vector-search", "rag", "hallucination", "context-window", "prompt-injection"],
};
