import type { Lesson } from "@/engine/content/types";

export const mathematics: Lesson = {
  id: "ai-and-science-04",
  slug: "mathematics",
  title: {
    ja: "数学とAI — 競技の問題を解くことと、証明を確かめること",
    en: "Mathematics and AI: Solving Competition Problems and Checking Proofs",
  },
  summary: {
    ja: "国際数学オリンピックの問題で、AIは2024年に銀メダル、2025年に金メダルに相当する成績を出した。形式言語で証明を機械的に検証するやり方と、自然言語の証明の違い、成績の数字の読み方。",
    en: "On International Mathematical Olympiad problems, AI reached silver-medal standard in 2024 and gold-medal standard in 2025. How machine-checked proofs in a formal language differ from proofs written in natural language, and how to read the scores.",
  },
  body: {
    ja: `## 数学は「正しさ」を確かめられる分野

数学の証明は、正しいか誤りかを厳密に判定できます。そのため、AIの推論の力を試す場としても注目されてきました。一方で、自然言語で推論するやり方は、もっともらしいが誤った途中の推論や答えを作ることがあると、Google DeepMind自身が書いています（[ハルシネーション](/ja/learn/ai-basics/hallucination)のレッスン参照）。

### 形式言語で証明を検証する
**Lean**は、オープンソースのプログラミング言語であり、証明支援系（proof assistant）でもあります。数学の主張と証明をLeanのような形式言語で書くと、その証明の正しさを形式的に検証できます。Google DeepMindは、これが形式言語の決定的な利点である一方、人が書いた形式言語のデータが非常に少ないことが、機械学習で使う上での制約になってきたと説明しています。

2024年のAlphaProofは、Leanで数学の主張を証明するよう自分を訓練するシステムです。学習済みの言語モデルと、チェス・将棋・囲碁を独学で習得した強化学習のAlphaZeroを組み合わせています。

### 国際数学オリンピック（IMO）での成績
Google DeepMindの発表による経緯です。
- **2024年1月17日**: 幾何の問題を解くAlphaGeometryをNature誌の論文で発表。過去のオリンピックの幾何問題30問のうち25問を制限時間内に解き、それまでの最高は10問、人間の金メダリストの平均は25.9問だったとしています。言語モデルと、規則に従って推論する記号的な演繹エンジンを組み合わせた仕組みで、1億件の合成データで学習しました。
- **2024年7月25日**: AlphaProofとAlphaGeometry 2が、IMO 2024の6問中4問を解き、42点満点中28点で銀メダル相当（この年の金メダルの基準は29点）。ただし、問題は人が形式言語に翻訳してから与え、1問は数分で解けたものの、ほかは最長3日かかりました（参加者は4時間半の試験を2回受けます）。採点は、IMOの金メダリストでフィールズ賞受賞者のティモシー・ガワーズ教授らが、IMOの採点規則に沿って行いました。
- **2025年7月21日**: Gemini Deep Thinkの高度な版が、IMO 2025の6問中5問を完答し、35点で金メダル相当。IMOのコーディネーターが生徒の答案と同じ基準で採点・認定した最初の組の一つで、公式の問題文から自然言語で直接証明を書き、4時間半の制限時間内に収めたとしています。IMOのグレゴール・ドリナール会長は、解答は多くの点で驚くべきもので、IMOの採点者は明快で正確、多くは読みやすいと評価したと述べています。

### 数字の読み方
- **誰が採点したか**: 2025年の成績は、IMOのコーディネーターによる採点・認定だと同社は説明しています。開発元が自分で採点した成績とは区別して読みます。
- **条件は同じか**: 制限時間、人による問題の翻訳の有無、使った計算の量で、成績の意味は変わります。2025年の版は、複数の解き方を同時に探って組み合わせる「並列思考」などを取り入れた推論モードで、数学の問題の質の高い解答集を参照させ、IMOの問題への取り組み方のヒントを指示に加えたとも書かれています。
- **競技と研究**: オリンピックで高い点を取ることと、まだ誰も解いていない研究上の問題を解くことは、同じ物差しで測れるとは限りません。推論に時間をかけるモデルの使いどころは[推論モデル](/ja/learn/understanding-ai/reasoning-models)、成績の数字の扱いは[ベンチマークの読み方](/ja/learn/understanding-ai/reading-benchmarks)のレッスンで扱いました。`,
    en: `## A field where correctness can be checked

A mathematical proof can be judged strictly right or wrong. That has made mathematics a proving ground for AI reasoning. At the same time, Google DeepMind itself writes that natural-language approaches can hallucinate plausible but incorrect intermediate reasoning steps and solutions (see the lesson on [hallucination](/en/learn/ai-basics/hallucination)).

### Checking proofs in a formal language
**Lean** is an open-source programming language and proof assistant. Write a mathematical statement and its proof in a formal language such as Lean, and the proof can be formally verified for correctness. Google DeepMind describes this as the critical advantage of formal languages — while noting that their use in machine learning has been held back by how little human-written formal data exists.

AlphaProof, from 2024, is a system that trains itself to prove mathematical statements in Lean. It couples a pre-trained language model with AlphaZero, the reinforcement learning algorithm that taught itself chess, shogi, and Go.

### Results at the International Mathematical Olympiad (IMO)
The sequence of events, as announced by Google DeepMind:
- **January 17, 2024**: AlphaGeometry, a system for geometry problems, was introduced in a paper in Nature. On a benchmark of 30 Olympiad geometry problems it solved 25 within the standard time limit; the previous state of the art solved 10, and the average human gold medalist solved 25.9. It combines a language model with a symbolic deduction engine that reasons by fixed rules, and was trained on 100 million synthetic examples.
- **July 25, 2024**: AlphaProof and AlphaGeometry 2 solved four of the six problems at IMO 2024, scoring 28 of 42 points — silver-medal standard (that year's gold threshold was 29). But the problems were first translated into formal language by hand, and while one was solved within minutes, the others took up to three days (contestants sit two 4.5-hour sessions). The solutions were scored under the IMO's point-awarding rules by mathematicians including Prof Sir Timothy Gowers, an IMO gold medalist and Fields Medal winner.
- **July 21, 2025**: an advanced version of Gemini Deep Think solved five of the six IMO 2025 problems perfectly, scoring 35 points — gold-medal standard. Google DeepMind says it was among an inaugural cohort to have results officially graded and certified by IMO coordinators using the same criteria as for student solutions, and that the model wrote its proofs end-to-end in natural language, directly from the official problem statements, within the 4.5-hour time limit. IMO President Prof. Dr. Gregor Dolinar said the solutions were astonishing in many respects, and that IMO graders found them clear, precise, and mostly easy to follow.

### How to read the numbers
- **Who did the grading?** Google DeepMind says the 2025 result was graded and certified by IMO coordinators. Read that differently from a score a developer grades itself.
- **Were the conditions the same?** Time limits, whether humans translated the problems, and how much computation was used all change what a score means. For 2025, the company says it used an enhanced reasoning mode with techniques such as parallel thinking — exploring and combining multiple possible solutions at once — gave the model access to a curated corpus of high-quality solutions to mathematics problems, and added general hints on approaching IMO problems to its instructions.
- **Competition versus research**: scoring well at an olympiad and solving a problem no one has solved before are not necessarily measured by the same yardstick. When models that think longer are worth it is covered in [reasoning models](/en/learn/understanding-ai/reasoning-models), and how to treat scores in [how to read AI benchmarks](/en/learn/understanding-ai/reading-benchmarks).`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "IMO 2024とIMO 2025での成績の違いとして、Google DeepMindの説明に合うものはどれ？",
        en: "Which difference between the IMO 2024 and IMO 2025 results matches Google DeepMind's description?",
      },
      choices: [
        {
          ja: "2024年は人が問題を形式言語に翻訳し最長3日かかったが、2025年は自然言語で制限時間内に解き、IMOのコーディネーターが採点した",
          en: "In 2024 humans translated the problems into formal language and solving took up to three days; in 2025 the model worked in natural language within the time limit and IMO coordinators did the grading",
        },
        { ja: "2024年の方が点数が高く、2025年は銀メダル相当だった", en: "The 2024 score was higher, and 2025 was only silver-medal standard" },
        { ja: "どちらの年も、人が問題を形式言語に翻訳してから与えた", en: "In both years, humans translated the problems into formal language first" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "2024年は28点の銀メダル相当で、問題の形式言語への翻訳は人が行い、最長3日かかりました。2025年は35点の金メダル相当で、自然言語のまま4時間半の制限時間内に解き、IMOのコーディネーターが採点・認定したと同社は説明しています。",
        en: "In 2024 the score was 28 (silver), the problems were translated into formal language by hand, and solving took up to three days. In 2025 the score was 35 (gold), the model worked in natural language within the 4.5-hour limit, and the company says IMO coordinators graded and certified it.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "Leanのような形式言語で書かれた証明は、その正しさを形式的に検証できる。",
        en: "A proof written in a formal language such as Lean can be formally verified for correctness.",
      },
      answer: true,
      explanation: {
        ja: "形式言語で書いた証明は正しさを形式的に検証できることが、形式言語の決定的な利点だとGoogle DeepMindは説明しています。これに対し、自然言語の推論は、もっともらしいが誤った途中の推論を含むことがあります。",
        en: "Google DeepMind describes formal verification of correctness as the critical advantage of formal languages. Natural-language reasoning, by contrast, can contain plausible but incorrect intermediate steps.",
      },
    },
  ],
  sources: [
    {
      label: "Google DeepMind: AlphaGeometry — An Olympiad-level AI system for geometry（2024-01-17）",
      url: "https://deepmind.google/blog/alphageometry-an-olympiad-level-ai-system-for-geometry/",
    },
    {
      label: "Google DeepMind: AI achieves silver-medal standard solving International Mathematical Olympiad problems（2024-07-25）",
      url: "https://deepmind.google/blog/ai-solves-imo-problems-at-silver-medal-level/",
    },
    {
      label: "Google DeepMind: Advanced version of Gemini with Deep Think officially achieves gold-medal standard at the International Mathematical Olympiad（2025-07-21）",
      url: "https://deepmind.google/blog/advanced-version-of-gemini-with-deep-think-officially-achieves-gold-medal-standard-at-the-international-mathematical-olympiad/",
    },
    { label: "Lean Programming Language", url: "https://lean-lang.org/" },
  ],
  lastVerified: "2026-10-11",
  glossaryRefs: ["proof-assistant", "reasoning-model", "test-time-compute", "benchmark", "hallucination"],
};
