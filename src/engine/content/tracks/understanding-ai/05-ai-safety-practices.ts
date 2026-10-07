import type { Lesson } from "@/engine/content/types";

export const aiSafetyPractices: Lesson = {
  id: "understanding-ai-05",
  slug: "ai-safety-practices",
  title: {
    ja: "AIの安全性の取り組み — アラインメント・レッドチーミング・システムカード",
    en: "How AI Developers Work on Safety: Alignment, Red Teaming, and System Cards",
  },
  summary: {
    ja: "「安全性を高めた」という発表の中身は、ふるまいの調整、わざと攻撃して弱点を探す試験、そして何を試して何が残ったかの公表。開発企業と国の取り組みと、システムカードを読むときの問い。",
    en: "Behind every \"we made it safer\" are three kinds of work: tuning how the model behaves, attacking it on purpose to find weaknesses, and publishing what was tested and what risks remain. What developers and governments do, and the questions to ask when you read a system card.",
  },
  body: {
    ja: `## 「安全性を高めた」の中身を確かめる

AIの開発企業は、新しいモデルを出すたびに「安全性を高めた」と説明します。その中身は、主に**ふるまいを調整すること**（アラインメント）、**わざと攻撃して弱点を探すこと**（レッドチーミング）、**何を試して何が残ったかを公表すること**（モデルカード・システムカード）の3つです。法律や規制は[AIのルール](/ja/learn/society/ai-rules)のレッスンで扱い、ここでは開発企業や研究機関の取り組みと、その報告の読み方を見ます。

### アラインメント — 意図に沿ってふるまわせる
AIのふるまいを、作り手や社会が意図する目的や価値に沿わせることを**アラインメント**と呼びます。代表的な方法が、人の評価を学習に使う[RLHF](/ja/learn/how-llms-work/rlhf)です。OpenAIが2023年3月にGPT-4とともに公開したシステムカードでも、事前学習のあとにふるまいを整えた主な方法はRLHFだったと説明しています。違法な行為の手ほどきのような依頼を断るようにしたり、事実と違う内容（ハルシネーション）を出しにくくしたりする調整も加えています。ただし調整は完全ではありません。同じ文書は、対策はふるまいを変え、ある種の悪用を防ぐ一方で、「限られたもので、場合によってはもろいまま」だと書いています。

### レッドチーミング — 攻撃者の目で弱点を探す
**レッドチーミング**は、攻撃者の考え方と手口をまねて、システムの欠陥や弱点を組織的に探す取り組みです。GPT-4では、OpenAIが2022年8月から社外の専門家を募り、公平性・偽情報・化学・生物・サイバーセキュリティ・医療などの分野の50人を超える専門家が、公開前のモデルを試しました。システムカードは限界も書いています。
- 参加者は米国・カナダ・英国など英語圏の欧米の国とつながりのある人が多く、その選び方による偏りがあったとOpenAI自身が認めている。対策と測定も主に英語で、米国中心の視点で作られ、他の言語では十分に試されていない。
- この試験は、ありうるすべてのリスクを網羅した評価ではない。

レッドチーミングで弱点が見つからなかったことは、弱点がないことの証明にはなりません。

### モデルカードとシステムカード — 試したことと、残ったことの記録
**モデルカード**は、2018年にMitchellらの研究者が提案した、学習済みモデルに添える短い文書です。想定した使い方、評価の方法、人種・地域・性別などの集団ごとの性能を示し、モデルが向かない場面で使われるのを減らすことを目指しています（集団ごとの差は[AIのバイアスと公平性](/ja/learn/ai-and-society/bias-and-fairness)のレッスン参照）。

**システムカード**は、モデル単体ではなく、利用規約・アクセスの制限・悪用の監視といった周りの仕組みも含めて、安全性の評価と対策をまとめた文書です。GPT-4のシステムカードには、たとえば次のことが書かれています。
- **比べた版**: 安全対策がほとんどない初期版と、対策を加えた公開版の2つ。
- **対象外**: 独自のファインチューニングと画像を扱う機能は、評価の範囲外。
- **社外の評価**: 外部の研究団体（Alignment Research Center）が、モデルが自分を複製したり資源を集めたりする能力を予備的に評価し、「おそらくまだできない」と結論した。
- **残ったリスク**: 多くのリスクはまだ残り、載せた例は懸念を説明するために選んだもの。

### 開発企業の枠組みと、国の機関
2024年5月のAIソウル・サミットでは、16の企業・団体が「フロンティアAI安全性コミットメント」に合意しました（のちに4団体が加わりました）。深刻なリスクに焦点を当てた**安全の枠組み**を公表すること、リスクを許容できない水準（しきい値）を定めること、対策をしてもその水準より下に抑えられないなら、最終的にはモデルを開発も公開もしないことを、自主的に約束しています。社内外のレッドチーミング、モデルの能力・限界・向く用途と向かない用途の公表、AIが作った音声や画像だと分かる仕組み（[ディープフェイクと来歴情報](/ja/learn/generative-media/deepfakes-and-provenance)のレッスン参照）も、取り組む実践として挙げられています。ただし、取り組みの公開には、リスクを高める情報や企業の機密にあたる情報を除く例外があります。

国の側でも、英国や米国での設立に続き、日本は2024年2月14日に**AIセーフティ・インスティテュート**（AISI）を発足させ、情報処理推進機構（IPA）に事務局を置きました。AIの安全性の評価手法や基準の検討・推進を担う機関です。

### システムカードを読むときの6つの問い
1. **どの版を、いつ評価したか**: 公開された版と同じか。その後の更新で変わっていないか。
2. **誰が試したか**: 社内だけか、社外の専門家や第三者機関、国の機関も入っているか。日本語や日本の事情は試されたか。
3. **何を試し、何を試していないか**: 対象外とされた機能や使い方はないか。
4. **どんな対策をし、何が残ったか**: 「残るリスク」や「限界」の節を読む。
5. **数字は何を測ったか**: 評価の点数は[ベンチマークの読み方](/ja/learn/understanding-ai/reading-benchmarks)と同じ目で読む。
6. **書かれていないことは何か**: 公開されない情報があることを前提にする。

### 利用者として
システムカードは「安全の保証書」ではなく、作り手自身が書いた「試験の記録」です。読むと、そのAIに任せてよいことと、よくないことの見当がつきます。そのうえで、[プロンプトインジェクション](/ja/learn/ai-agents/prompt-injection)への備えや出力の確認など、使う側の対策も続けましょう。リスクの全体像は[リスク](/ja/learn/society/risks)のレッスンにまとめています。`,
    en: `## What "we made it safer" actually involves

Every time an AI developer releases a new model, it says the model is safer. In practice, that work falls into three parts: **adjusting how the model behaves (alignment)**, **attacking it on purpose to find weaknesses (red teaming)**, and **publishing what was tested and what risks remain (model cards and system cards)**. Laws and regulation are covered in [The Rules for AI](/en/learn/society/ai-rules); this lesson looks at what developers and research bodies do, and how to read what they publish.

### Alignment: steering behaviour toward what people intend
Making an AI's behaviour match the goals and values that its developers and society intend is called **alignment**. A leading method is [RLHF](/en/learn/how-llms-work/rlhf), which uses human ratings as a training signal. The system card OpenAI published alongside GPT-4 in March 2023 describes RLHF as its primary method for shaping the released model's behaviour after pre-training. OpenAI also tuned the model to refuse certain instructions, such as direct requests for illicit advice, and reduced its tendency to hallucinate. But the tuning is not airtight: the same document says its mitigations change the model's behaviour and prevent certain kinds of misuse, yet "are limited and remain brittle in some cases."

### Red teaming: looking for weaknesses through an attacker's eyes
**Red teaming** is a structured effort to find flaws and vulnerabilities in a system, carried out by people who adopt an attacker's mindset and methods. For GPT-4, OpenAI began recruiting outside experts in August 2022, and more than 50 experts in fields including fairness, misinformation, chemistry, biorisk, cybersecurity, and healthcare probed early versions of the model before release. The system card also spells out the limits:
- The red teamers typically had ties to English-speaking, Western countries such as the US, Canada, and the UK, and OpenAI acknowledges that this selection introduced biases. Its mitigations and measurements were mostly designed and tested in English, from a US-centric point of view, and had not been robustly tested in other languages.
- The exercise was not a comprehensive evaluation of all possible risks.

Finding no weaknesses in a red-teaming exercise does not prove that there are none.

### Model cards and system cards: a record of what was tested and what remains
A **model card**, proposed by Mitchell and colleagues in 2018, is a short document that accompanies a trained model. It sets out the context the model is intended for, how its performance was evaluated, and how it performs across groups defined by attributes such as race, geographic location, and sex — with the aim of keeping models out of settings they are not suited for (for differences between groups, see [Bias and Fairness in AI](/en/learn/ai-and-society/bias-and-fairness)).

A **system card** goes beyond the model itself to cover the surrounding system — usage policies, access controls, and monitoring for abuse — and documents safety evaluations and mitigations. The GPT-4 system card, for example:
- **Compares two versions**: an early version with minimal safety mitigations, and the released version with further mitigations.
- **States what is out of scope**: custom fine-tuning and image capabilities were explicitly outside its scope.
- **Includes an outside evaluation**: an external research group, the Alignment Research Center, ran a preliminary evaluation of the model's ability to replicate itself and gather resources autonomously, concluding that it was "probably not yet capable" of doing so.
- **Admits remaining risks**: many risks still remain, and the examples shown were picked to illustrate specific concerns.

### Developer frameworks and government institutes
At the AI Seoul Summit in May 2024, 16 companies and organisations agreed to the Frontier AI Safety Commitments (four more joined later). They voluntarily committed to publish **safety frameworks** focused on severe risks, to set thresholds at which risks would be deemed intolerable, and — in the extreme — not to develop or deploy a model at all if mitigations cannot keep its risks below those thresholds. The practices they affirmed also include internal and external red teaming, publicly reporting models' capabilities, limitations, and appropriate and inappropriate uses, and mechanisms that let users tell whether audio or visual content is AI-generated (see [Deepfakes and Content Provenance](/en/learn/generative-media/deepfakes-and-provenance)). Their pledge to be transparent about all this makes exceptions for information that would increase risk or reveal sensitive commercial details.

Governments have built their own capacity too. Following the UK and the US, Japan launched its **AI Safety Institute (AISI)** on February 14, 2024, with its secretariat at the Information-technology Promotion Agency (IPA). It works on evaluation methods and standards for AI safety.

### Six questions to ask of a system card
1. **Which version, evaluated when?** Is it the version that was released, and has it changed since?
2. **Who tested it?** Only the developer, or outside experts, independent evaluators, or government bodies as well? Was Japanese — or the Japanese context — tested?
3. **What was tested, and what wasn't?** Look for features or uses marked as out of scope.
4. **Which mitigations, and what remains?** Read the sections on remaining risks and limitations.
5. **What do the numbers measure?** Read evaluation scores the way you would read [benchmarks](/en/learn/understanding-ai/reading-benchmarks).
6. **What isn't said?** Assume some information has been withheld.

### As a user
A system card is not a safety certificate; it is a test record written by the developer itself. Reading one gives you a sense of what you can and can't hand over to that AI. Keep up your own safeguards as well, such as guarding against [prompt injection](/en/learn/ai-agents/prompt-injection) and checking outputs. For the overall picture of AI's risks, see [Risks: Misinformation, Bias, and Privacy](/en/learn/society/risks).`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "あるAIのシステムカードに「社外の専門家によるレッドチーミングを行った」と書かれていた。ここから言えることとして正しいものは？",
        en: "An AI's system card says that outside experts red-teamed the model. What can you conclude from that?",
      },
      choices: [
        {
          ja: "見つかった弱点に対策した記録にはなるが、リスクがないことの証明にはならない",
          en: "It records weaknesses that were found and addressed, but it does not prove the model is free of risk",
        },
        {
          ja: "危険な使い方が一切できないことが保証された",
          en: "It guarantees the model cannot be used in any dangerous way",
        },
        {
          ja: "国の機関から安全だと認証を受けたことを意味する",
          en: "It means a government body has certified the model as safe",
        },
      ],
      correctIndex: 0,
      explanation: {
        ja: "GPT-4のシステムカード自身が、レッドチーミングはありうるすべてのリスクを網羅した評価ではなく、多くのリスクが残ると書いています。レッドチーミングは開発者が行う試験で、国の認証ではありません。",
        en: "The GPT-4 system card itself says its red teaming was not a comprehensive evaluation of all possible risks and that many risks remain. Red teaming is testing arranged by the developer, not government certification.",
      },
    },
    {
      kind: "multi",
      prompt: {
        ja: "システムカードを読むときに確かめたいことをすべて選んでください。",
        en: "When you read a system card, what should you check? Select all that apply.",
      },
      choices: [
        { ja: "評価した版が、公開された版と同じか", en: "Whether the version evaluated is the version that was released" },
        {
          ja: "誰が試したか（社内だけか、社外の専門家や第三者機関も入っているか）",
          en: "Who tested it (only the developer, or outside experts and independent evaluators too)",
        },
        { ja: "対象外とされた機能や、残っているリスク", en: "Features marked as out of scope, and the risks that remain" },
        { ja: "文書のページ数が多いかどうか", en: "Whether the document has a lot of pages" },
      ],
      correctIndexes: [0, 1, 2],
      explanation: {
        ja: "GPT-4のシステムカードは、対策前と対策後の2つの版を比べ、独自のファインチューニングと画像の機能を対象外とし、試した人たちの偏りも書いていました。どの版を、誰が、何について試したかが読みどころです。文書の長さは安全性の目安になりません。",
        en: "The GPT-4 system card compared a version before and after mitigations, put custom fine-tuning and image capabilities out of scope, and described biases in who did the testing. Which version, who tested it, and what was covered are what to read for; length says nothing about safety.",
      },
    },
  ],
  sources: [
    {
      label: "OpenAI: GPT-4 System Card (2023-03)",
      url: "https://cdn.openai.com/papers/gpt-4-system-card.pdf",
    },
    {
      label: "Mitchell et al.: Model Cards for Model Reporting (arXiv, 2018-10-05)",
      url: "https://arxiv.org/abs/1810.03993",
    },
    {
      label: "UK Government (DSIT): Frontier AI Safety Commitments, AI Seoul Summit 2024 (2024-05-21, updated 2025-02-07)",
      url: "https://www.gov.uk/government/publications/frontier-ai-safety-commitments-ai-seoul-summit-2024/frontier-ai-safety-commitments-ai-seoul-summit-2024",
    },
    { label: "AIセーフティ・インスティテュート（J-AISI）: AISIについて", url: "https://aisi.go.jp/about/" },
  ],
  lastVerified: "2026-10-07",
  glossaryRefs: ["alignment", "red-teaming", "system-card", "frontier-safety-framework", "ai-safety-institute", "rlhf"],
};
