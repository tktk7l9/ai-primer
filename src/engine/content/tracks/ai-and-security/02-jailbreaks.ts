import type { Lesson } from "@/engine/content/types";

export const jailbreaks: Lesson = {
  id: "ai-and-security-02",
  slug: "jailbreaks",
  title: {
    ja: "ジェイルブレイク — 安全対策をすり抜ける入力と、防御のいたちごっこ",
    en: "Jailbreaks: Inputs That Slip Past Safeguards, and the Back-and-Forth of Defense",
  },
  summary: {
    ja: "AIは危険な依頼を断るように訓練されているが、その断りをすり抜けさせる入力がある。長い文脈を逆手に取る手口、入力と出力を見張る分類器による防御、そして「完全に防ぐ方法」がまだない理由。",
    en: "AI models are trained to refuse dangerous requests, but some inputs get them past those refusals. A technique that turns long context windows against the model, a defense that screens inputs and outputs with classifiers, and why there is still no way to block jailbreaks completely.",
  },
  body: {
    ja: `## 断るはずのAIに答えさせる入力

生成AIは、危険な情報を求める依頼などを断るように訓練されています。この安全対策（ガードレール）をすり抜けさせ、本来は断るはずの内容を出力させようとする入力が**ジェイルブレイク**（脱獄）です。米国立標準技術研究所（NIST）は2025年3月の報告書で、モデルの出力にかけられた制限、たとえば断る振る舞いを回避して悪用できるようにするための、直接的なプロンプト攻撃と定義しています。

OWASPは、入力によってモデルの振る舞いを変えさせる**プロンプトインジェクション**の一種として、安全のための決まりを丸ごと無視させるものをジェイルブレイクと呼んでいます。読ませた文書に指示を仕込む型のプロンプトインジェクションについては、[プロンプトインジェクションとエージェントの安全](/ja/learn/ai-agents/prompt-injection)のレッスンを見てください。

## なぜすり抜けられるのか
NISTの報告書は、先行研究をもとに、人が手で作るジェイルブレイクの代表的な型として次の2つを挙げています。
- **目的の衝突**: 「利用者の指示に従う」という性質と、安全の目標がぶつかる場面を突く。
- **一般化のずれ**: 安全のための訓練では見なかったが、モデルの能力では理解できる形の入力を使う。

Anthropicも、極端に長いプロンプトで押し流すものや、大文字と小文字を不規則に混ぜるなど入力の書き方を変えるものを例に挙げています。

### 例: 長い文脈を逆手に取る「メニーショット・ジェイルブレイク」
Anthropicは2024年4月2日、「メニーショット・ジェイルブレイク」と名づけた手口の研究を公表しました。1つのプロンプトの中に、AIアシスタントが危険な質問に次々と答えてみせる偽の対話を大量に並べ、最後に本当に聞きたい質問を置くものです。偽の対話が数個なら安全のための訓練どおり断りますが、数を増やすと（研究では最大256個まで試した）、有害な答えを返す割合が上がりました。
- 背景には、一度に読める量（コンテキストウィンドウ）が、2023年初めの約4,000トークンから、100万トークン以上のモデルが出るほどに広がったことがあります。
- 効く理由は、プロンプトの中の例から学ぶ「文脈内学習」と関係していて、ふつうの作業で例を増やしたときと同じ型で効果が伸びた、と説明しています。
- Anthropicは公表前に他のAI開発者にも知らせ、自社では対策を入れました。断るように追加で訓練する方法は、すり抜けに必要な対話の数を増やしただけでした。一方、プロンプトをモデルに渡す前に分類して手を加える方法では、ある条件で攻撃の成功率が61%から2%に下がったとしています。

## 防御 — 入力と出力を見張る分類器
Anthropicは2025年2月3日、「Constitutional Classifiers」と呼ぶ防御を発表しました。許される内容と許されない内容を文章で定めた原則のリスト（同社はこれを「憲法」と呼ぶ）をもとに、AIで大量の例を作って分類器を訓練し、モデルへの入力と出力の両方を見張らせるものです。
- **人による攻撃の試験**: 試作版に対し、183人が2か月で推定3,000時間以上をかけ、10個の禁止された質問すべてに答えさせる「万能の」ジェイルブレイクを探しましたが（報奨金は最大1万5,000ドル）、見つかりませんでした。ただし試作版は、無害な質問まで断りすぎ、計算の負担も大きいという問題を抱えていました。
- **改良版の自動評価**: 1万個のジェイルブレイク用プロンプトで試すと、分類器なしでは86%が成功したのに対し、分類器ありでは4.4%に下がりました。無害な質問を断る割合の増加は0.38%（統計的に有意ではない）、計算の負担の増加は23.7%でした。
- **公開デモ**（2025年2月3日〜10日）: 339人が30万回以上のやり取り、合わせて約3,700時間をかけて挑みました。最初の5日間は全8問を突破した人はいませんでしたが、6日目と7日目に4人が突破し、そのうち1人の方法は万能のジェイルブレイクと判断されました。

Anthropic自身も、この方法ですべての万能のジェイルブレイクを防げるとは限らないとして、ほかの防御と組み合わせることを勧めています。

## 「完全に防ぐ方法」はまだない
NISTの報告書は、いまの機械学習には暗号のような理論上の安全の証明がなく、対策の多くは「実際に効くように見える」ことを根拠に使われているので、新しい攻撃の発見によって破られうると指摘しています。モデルが望ましくない振る舞いをする確率が少しでも残っていれば、それを引き出すプロンプトが存在する、という研究結果も紹介しています。そのうえで、事前の試験で多くの攻撃の道を閉ざし、攻撃にかかる手間を上げることには意味がある、としています。

OWASPも、プロンプトインジェクションを確実に防ぐ方法があるかはわからないとしたうえで、入力と出力のフィルタリング、権限を必要最小限にすること、危険な操作の前に人の承認を挟むこと、攻撃を想定した試験などで、影響を抑えることを勧めています。

利用者にとっての実践的な意味は、「AIが断るから安全」と考えないことです。断るしくみは、すり抜けられることを前提に重ねる守りの1枚です。実際に攻撃者が安全対策をすり抜けようとした例は、[攻撃者はAIをどう使っているか](/ja/learn/ai-and-security/attackers-using-ai)のレッスンで見ます。`,
    en: `## Inputs that make an AI answer what it should refuse

Generative AI models are trained to refuse requests such as those seeking dangerous information. A **jailbreak** is an input designed to get the model past these safeguards (its guardrails) and make it produce what it would normally refuse. In its March 2025 report, the US National Institute of Standards and Technology (NIST) defines a jailbreak as a direct prompting attack intended to circumvent restrictions placed on model outputs — for example, getting around refusal behavior to enable misuse.

OWASP describes jailbreaking as a form of **prompt injection** — where inputs alter a model's behavior — in which the attacker gets the model to disregard its safety protocols entirely. For the kind of prompt injection that plants instructions in documents an AI reads, see [prompt injection and agent safety](/en/learn/ai-agents/prompt-injection).

## Why safeguards can be bypassed
Drawing on earlier research, the NIST report names two typical patterns behind jailbreaks crafted by hand:
- **Competing objectives**: exploiting cases where a model's drive to follow the user's instructions is in tension with its safety goals.
- **Mismatched generalization**: using inputs the model never saw in its safety training but can still understand thanks to its general capabilities.

Anthropic also gives examples: some jailbreaks flood the model with very long prompts, while others change the style of the input, such as mixing upper- and lowercase letters irregularly.

### Example: many-shot jailbreaking, which turns long context against the model
On April 2, 2024, Anthropic published research on a technique it called "many-shot jailbreaking." A single prompt contains a long series of fake dialogues in which an AI assistant readily answers dangerous questions, followed by the question the attacker actually wants answered. With only a handful of fake dialogues, the model still refuses as its safety training intends; with many more (the study tested up to 256), the rate of harmful answers went up.
- The backdrop is the growth of how much a model can read at once (its context window): from about 4,000 tokens at the start of 2023 to models handling 1,000,000 tokens or more.
- The technique works, Anthropic explains, because of in-context learning — learning from examples within the prompt — and its effect grew following the same pattern as ordinary tasks do when more examples are added.
- Anthropic briefed other AI developers before publishing and put mitigations in place. Extra training to refuse such prompts only raised the number of fake dialogues needed. Classifying and modifying prompts before they reach the model worked better: in one case, it cut the attack success rate from 61% to 2%.

## A defense: classifiers that screen inputs and outputs
On February 3, 2025, Anthropic announced a defense called Constitutional Classifiers. Starting from a written list of principles defining what content is allowed and what is not (which the company calls a "constitution"), it uses AI to generate large numbers of examples, trains classifiers on them, and has the classifiers screen both the inputs to the model and its outputs.
- **Human red teaming**: against a prototype, 183 participants spent an estimated 3,000+ hours over two months looking for a "universal" jailbreak — one that gets answers to all 10 forbidden questions — with rewards of up to $15,000. None was found. The prototype, however, refused too many harmless questions and was costly to run.
- **Automated tests of an improved version**: with 10,000 jailbreak prompts, 86% succeeded without the classifiers, versus 4.4% with them. Refusals of harmless questions rose by 0.38% (not statistically significant), and computing cost rose by 23.7%.
- **A public demo** (February 3–10, 2025): 339 participants engaged in more than 300,000 chat interactions, about 3,700 hours of effort in total. No one passed all eight questions during the first five days, but on the sixth and seventh days four participants did, and one of their methods was judged to be a universal jailbreak.

Anthropic itself says the method may not prevent every universal jailbreak and recommends combining it with other defenses.

## No complete fix yet
The NIST report points out that today's machine learning lacks the kind of theoretical security proofs that cryptography has; many mitigations are adopted because they appear to work in practice, so new attack discoveries can break them. It also cites research showing that as long as a model has any probability of an undesired behavior, there exist prompts that can trigger it. Even so, it says, testing before deployment is worthwhile, because it can close off many avenues of attack and raise the effort an attack requires.

OWASP likewise says it is unclear whether any fool-proof prevention exists for prompt injection, and recommends limiting the impact with measures such as input and output filtering, least-privilege access, human approval before high-risk actions, and adversarial testing.

The practical takeaway for users: don't assume something is safe because the AI refuses. Refusals are one layer of defense, stacked on the assumption that they can be bypassed. Real cases of attackers trying to get past safeguards are covered in [how attackers use AI](/en/learn/ai-and-security/attackers-using-ai).`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "NISTの定義で、ジェイルブレイクとはどんな攻撃？",
        en: "How does NIST define a jailbreak?",
      },
      choices: [
        {
          ja: "モデルの出力にかけられた制限（断る振る舞いなど）を回避させる、直接的なプロンプト攻撃",
          en: "A direct prompting attack that circumvents restrictions on model outputs, such as refusal behavior",
        },
        { ja: "学習データに細工して、モデルにバックドアを仕込む攻撃", en: "An attack that tampers with training data to plant a backdoor in a model" },
        { ja: "サーバーに大量の通信を送って、サービスを止める攻撃", en: "An attack that floods a server with traffic to take a service down" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "NISTは、出力の制限を回避して悪用できるようにする直接的なプロンプト攻撃と定義しています。学習データへの細工はポイズニング、大量の通信はDDoS攻撃です。",
        en: "NIST defines it as a direct prompting attack that circumvents output restrictions to enable misuse. Tampering with training data is poisoning; flooding a server with traffic is a DDoS attack.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "Anthropicの公開デモでは、7日間の最後まで、全問を突破した人はいなかった。",
        en: "In Anthropic's public demo, no one passed all the questions by the end of the seven days.",
      },
      answer: false,
      explanation: {
        ja: "最初の5日間は突破されませんでしたが、6日目と7日目に4人が全問を突破し、そのうち1人の方法は万能のジェイルブレイクと判断されました。防御は攻撃の手間を大きく上げても、完全ではありません。",
        en: "It held for the first five days, but on the sixth and seventh days four participants passed every question, and one method was judged a universal jailbreak. A defense can raise the cost of an attack a great deal without being complete.",
      },
    },
    {
      kind: "single",
      prompt: {
        ja: "メニーショット・ジェイルブレイクが成り立つ背景として、Anthropicが挙げたものはどれ？",
        en: "What backdrop did Anthropic point to for many-shot jailbreaking?",
      },
      choices: [
        {
          ja: "コンテキストウィンドウが大きく広がり、1つのプロンプトに大量の偽の対話を入れられるようになった",
          en: "Context windows grew so much that a single prompt can hold a large number of fake dialogues",
        },
        { ja: "AIが画像を読めるようになった", en: "AI models learned to read images" },
        { ja: "AIの利用料金が下がった", en: "The price of using AI went down" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "2023年初めに約4,000トークンだったコンテキストウィンドウが、100万トークン以上のモデルが出るほどに広がり、長い入力を逆手に取る手口が成り立つようになりました。",
        en: "Context windows went from about 4,000 tokens at the start of 2023 to models handling 1,000,000 tokens or more, which made attacks exploiting long inputs feasible.",
      },
    },
  ],
  sources: [
    {
      label: "NIST: AI 100-2 E2025 Adversarial Machine Learning（PDF、2025年3月）",
      url: "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-2e2025.pdf",
    },
    { label: "OWASP: LLM01:2025 Prompt Injection", url: "https://genai.owasp.org/llmrisk/llm01-prompt-injection/" },
    { label: "Anthropic: Many-shot jailbreaking（2024-04-02）", url: "https://www.anthropic.com/research/many-shot-jailbreaking" },
    {
      label: "Anthropic: Constitutional Classifiers: Defending against universal jailbreaks（2025-02-03）",
      url: "https://www.anthropic.com/research/constitutional-classifiers",
    },
  ],
  lastVerified: "2026-10-13",
  glossaryRefs: ["jailbreak", "prompt-injection", "red-teaming", "context-window"],
};
