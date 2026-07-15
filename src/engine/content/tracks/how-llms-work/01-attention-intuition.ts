import type { Lesson } from "@/engine/content/types";

export const attentionIntuition: Lesson = {
  id: "how-llms-work-01",
  slug: "attention-intuition",
  title: {
    ja: "Attentionの直感的理解",
    en: "Attention, Intuitively",
  },
  summary: {
    ja: "文中のどの単語に「注目」すべきかを、モデル自身が学習する仕組み。",
    en: "How a model learns which words in a sentence deserve its \"attention.\"",
  },
  body: {
    ja: `## 「それ」が何を指すか、文脈から判断する

**Attention（注意機構）**は、文章内のある単語を処理するとき、他のどの単語と強く関連づけるべきかをモデル自身が計算する仕組みです。

例えば「猫がソファの上で寝ていた。**それ**はとても気持ちよさそうだった。」という文で、「それ」が「猫」を指すのか「ソファ」を指すのかは、周囲の文脈次第です。Attentionは各単語について、文中の他の全単語との関連度（重み）を計算し、関連の強い単語の情報をより多く取り込みます。

Transformer（歴史トラック参照）は、このAttentionを何層にも重ね、しかも複数の「視点」（マルチヘッド）で同時に計算することで、文法的な関係・意味的な関係など異なる種類のつながりを並行して捉えます。再帰的に1語ずつ処理する必要がないため、計算を並列化しやすいという利点もあります。`,
    en: `## Figuring out what "it" refers to

**Attention** is the mechanism by which a model computes, for each word it's processing, how strongly it should relate to every other word in the text.

Take: "The cat was sleeping on the sofa. **It** looked very comfortable." Whether "it" refers to "the cat" or "the sofa" depends on context. Attention computes a relevance weight between each word and every other word in the sentence, and pulls in more information from the words it's most related to.

The Transformer (see the History track) stacks many layers of attention and computes several "viewpoints" at once (multi-head attention), letting it capture different kinds of relationships — grammatical, semantic — in parallel. Because it doesn't have to process words one at a time in sequence, it's also much easier to parallelize.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "Attention機構が計算しているものは？",
        en: "What does the attention mechanism compute?",
      },
      choices: [
        { ja: "文中の単語同士の関連度（重み）", en: "The relevance (weight) between words in the text" },
        { ja: "文章全体の感情スコア", en: "An overall sentiment score for the text" },
        { ja: "単語の出現頻度の統計", en: "Word-frequency statistics" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "Attentionは各単語について、他の単語との関連度を重みとして計算し、関連の強い情報をより多く取り込みます。",
        en: "Attention computes, for each word, a relevance weight against every other word, then pulls in more information from the highly weighted ones.",
      },
    },
  ],
  sources: [
    {
      label: "Wikipedia: Attention Is All You Need",
      url: "https://en.wikipedia.org/wiki/Attention_Is_All_You_Need",
    },
  ],
  lastVerified: "2026-07-15",
};
