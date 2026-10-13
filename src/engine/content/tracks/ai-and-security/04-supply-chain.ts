import type { Lesson } from "@/engine/content/types";

export const supplyChain: Lesson = {
  id: "ai-and-security-04",
  slug: "supply-chain",
  title: {
    ja: "AIのサプライチェーン — モデルファイルとパッケージの落とし穴",
    en: "The AI Supply Chain: Pitfalls in Model Files and Packages",
  },
  summary: {
    ja: "AIを使うソフトウェアは、外から持ってきたモデルやライブラリの上に建っている。読み込むだけでコードが動きうるモデルファイル、AIが勧める実在しないパッケージ、AIが書いたコードの脆弱性と、出どころを確かめる習慣。",
    en: "Software that uses AI is built on models and libraries brought in from outside. Model files that can run code just by being loaded, nonexistent packages recommended by AI, vulnerabilities in AI-written code, and the habit of checking where things come from.",
  },
  body: {
    ja: `## 外から持ってきた部品の連なり

ソフトウェアは、自分で書いたコードだけでなく、外から取り込んだ多くの部品（ライブラリやパッケージ）の上に成り立っています。この部品の連なりがサプライチェーンで、どこか1か所が改ざんされると全体が危うくなります。IPAの「情報セキュリティ10大脅威 2026」でも、組織向けの2位は「サプライチェーンや委託先を狙った攻撃」でした。

OWASPの「LLMアプリケーション向けTop 10（2025年版）」のLLM03「サプライチェーン」は、AIではこのリスクがコードと依存関係だけでなく、外部の学習済みモデルやデータにも広がると指摘しています。たとえば:
- **中身を確かめにくいモデル**: モデルは中身の見えないブラックボックスで、ソースコードのように読んで確かめても、安全の保証はほとんど得られない。隠れたバックドアなどを含んでいても、公開サイトの安全評価で見つからないことがある。
- **出どころの保証が弱い**: モデルの説明書（モデルカード）は情報を伝えるが、出どころは保証しない。攻撃者が提供者のアカウントを乗っ取ったり、似たアカウントを作ったりするおそれがある。
- **後から足す部品**: LoRAアダプターのように元のモデルに足す部品に悪意があると、元のモデルの安全性が損なわれる。

## 読み込むだけでコードが動くファイル
機械学習でよく使われるPythonのpickle形式には、ファイルを読み込んだときに任意のコードを実行させる攻撃の危険があります。Hugging Faceの文書によると、pickleはPyTorchのモデルの重みの標準の形式でもあります。
- Hugging Faceは、信頼できる利用者や組織のモデルを読み込むこと、署名つきのコミットを頼りにすることを勧めています。同社のHubはアップロードされたpickleファイルを検査し、中で呼び出される部品の一覧を表示して怪しいものを強調しますが、「100%確実ではない」と断っています。
- PyTorchの文書も、読み込みの関数（\`torch.load\`）について、信頼できない出どころのデータは決して読み込まないよう警告しています。現在の版では、読み込める型をテンソルや基本的な型などに絞る設定が既定になっています。
- pickleの代わりに作られた**safetensors**は、テンソル（モデルの重みなどの数値の配列）を安全に保存するための、シンプルで速い形式です。

## AIが「実在しないパッケージ」を勧める
コードを書くAIは、存在しないパッケージの名前を挙げることがあります。これを**パッケージハルシネーション**と呼びます。2024年6月に公開され、2025年のUSENIX Security Symposiumに採録された研究は、16のLLMに2つの言語（PythonとJavaScript）のコードを合わせて57万6,000件書かせて調べました。
- 挙げられたパッケージのうち実在しないものの割合は、平均で商用モデルが5.2%以上、オープンソースのモデルが21.7%でした。
- 実在しないパッケージの名前は、重複を除いて20万5,474種類にのぼりました。
- 研究チームは、これをパッケージの取り違えを突く新しい形の攻撃で、ソフトウェアのサプライチェーンにとって重大な脅威だと位置づけています。いくつかの対策でハルシネーションを大きく減らせたことも報告しています。

IPAの解説書は、この手口の流れを、攻撃者がAIの挙げそうな名前で悪意あるパッケージを登録し、開発者にインストールさせて悪意あるコードを実行させる、と説明し、セキュリティ企業が実際の攻撃の例を報告したことを紹介しています。

## AIが書いたコードにも脆弱性は入る
2021年8月に公開された研究「Asleep at the Keyboard?」（2022年のIEEE S&Pに採録）は、当時のGitHub Copilotに、危険度の高い弱点の種類が関わる89の場面でコードを書かせ、できた1,689本のプログラムのうち約40%に脆弱性があったと報告しました。調べたのは2021年当時のツールなので、数字がいまのツールにそのまま当てはまるとは限りません。それでも、AIが書いたコードも人が書いたコードと同じように確かめる、という原則は変わりません（[コーディングAIの安全な使い方](/ja/learn/coding-ai/safe-usage)参照）。

## 出どころを確かめる習慣
OWASPの対策と、ここまでの文書から、実践できることをまとめます。
- **モデルは確かめられる出どころから**: 入手したら、署名やファイルのハッシュ値で改ざんがないかを確かめる（OWASP）。
- **部品の一覧を最新に保つ**: 使っている部品の一覧（SBOM）を管理し、脆弱性の情報を追って更新する（OWASP）。
- **pickle形式は信頼できるものだけ**: 他人が作ったモデルは、できればsafetensors形式のものを選ぶ（Hugging Face、PyTorch）。
- **AIが挙げたパッケージは実在を確かめる**: 公式のパッケージの置き場に本当にあるか、名前が本物と紛らわしくないかを確かめてからインストールする。`,
    en: `## A chain of parts brought in from outside

Software rests not only on the code you write yourself but on many parts brought in from outside (libraries and packages). This chain of parts is the supply chain, and tampering at any one point puts the whole at risk. In IPA's "10 Major Information Security Threats 2026," number 2 on the list for organizations was "attacks targeting supply chains and contractors."

LLM03, "Supply Chain," in OWASP's "Top 10 for LLM Applications (2025)," points out that with AI the risk extends beyond code and dependencies to third-party pre-trained models and data. For example:
- **Models are hard to inspect**: models are binary black boxes, and unlike source code, static inspection offers little security assurance. A model can contain hidden backdoors or other malicious features that a model repository's safety evaluations did not catch.
- **Weak provenance**: model documentation (model cards) informs users but does not guarantee where a model came from. Attackers may compromise a supplier's account on a model repository or create a look-alike account.
- **Add-on parts**: if an add-on such as a LoRA adapter is malicious, it compromises the integrity and security of the base model.

## Files that can run code just by being loaded
Python's pickle format, widely used in machine learning, carries the risk of attacks that execute arbitrary code when a file is loaded. According to Hugging Face's documentation, pickle is also the default format for PyTorch model weights.
- Hugging Face recommends loading models from users and organizations you trust, and relying on signed commits. Its Hub scans uploaded pickle files, displays the list of imports inside them, and highlights suspicious ones — while cautioning that this is "not 100% foolproof."
- PyTorch's documentation likewise warns, for its loading function (\`torch.load\`), never to load data from an untrusted source. In the current version, a setting that restricts loading to tensors, primitive types, and a few other types is on by default.
- Built as an alternative to pickle, **safetensors** is a simple, fast format for storing tensors (arrays of numbers, such as a model's weights) safely.

## AI that recommends packages that don't exist
AI that writes code sometimes names packages that do not exist. This is called **package hallucination**. A study published in June 2024 and accepted at the 2025 USENIX Security Symposium had 16 LLMs write a total of 576,000 code samples in two languages (Python and JavaScript):
- On average, at least 5.2% of the packages named by commercial models, and 21.7% of those named by open-source models, did not exist.
- There were 205,474 unique names of nonexistent packages.
- The researchers call this a novel form of package confusion attack and a critical threat to the integrity of the software supply chain. They also report that several mitigations significantly reduced the hallucinations.

IPA's explanatory report describes how the attack works — the attacker registers a malicious package under a name AI is likely to suggest and gets developers to install it, running the malicious code — and notes that a security company has reported a real attack of this kind.

## Vulnerabilities get into AI-written code too
The study "Asleep at the Keyboard?" (published in August 2021 and accepted at IEEE S&P 2022) had GitHub Copilot, as it was then, write code in 89 scenarios involving high-risk weakness types, and found about 40% of the resulting 1,689 programs to be vulnerable. Because it examined a 2021 tool, the numbers don't necessarily apply to today's tools. The principle still holds, though: check AI-written code just as you would check code written by a person (see [using coding AI safely](/en/learn/coding-ai/safe-usage)).

## The habit of checking where things come from
Drawing on OWASP's mitigations and the documents above:
- **Get models from verifiable sources**: once downloaded, check them for tampering with signatures and file hashes (OWASP).
- **Keep an up-to-date list of components**: maintain a software bill of materials (SBOM), follow vulnerability information, and update (OWASP).
- **Load pickle files only from sources you trust**: for models made by others, prefer the safetensors format where you can (Hugging Face, PyTorch).
- **Check that a package suggested by AI is real**: before installing, confirm it actually exists in the official package registry and that its name isn't confusingly similar to the real one.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "Hugging FaceやPyTorchの文書が、pickle形式のファイルについて警告していることは？",
        en: "What do Hugging Face's and PyTorch's documents warn about pickle-format files?",
      },
      choices: [
        {
          ja: "読み込むだけで任意のコードが実行されうるので、信頼できない出どころのものは読み込まない",
          en: "Loading one can execute arbitrary code, so never load one from an untrusted source",
        },
        { ja: "ファイルが大きすぎて、パソコンでは読み込めない", en: "The files are too large to load on a personal computer" },
        { ja: "画像を扱うモデルにしか使えない", en: "They can only be used for models that handle images" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "pickleは読み込むときに任意のコードを実行させる攻撃の危険があります。信頼できる出どころのものだけを読み込み、できればsafetensors形式を選びます。",
        en: "Pickle files carry the risk of attacks that run arbitrary code when loaded. Load only files from sources you trust, and prefer the safetensors format where you can.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "パッケージハルシネーションの研究では、オープンソースのモデルのほうが商用モデルより、実在しないパッケージを挙げる割合が平均で高かった。",
        en: "In the package hallucination study, open-source models named nonexistent packages at a higher average rate than commercial models.",
      },
      answer: true,
      explanation: {
        ja: "実在しないパッケージの割合は、平均で商用モデルが5.2%以上、オープンソースのモデルが21.7%でした。どちらにしても、AIが挙げたパッケージは実在を確かめてから使います。",
        en: "On average, at least 5.2% of the packages named by commercial models and 21.7% of those named by open-source models did not exist. Either way, confirm a package exists before you use it.",
      },
    },
    {
      kind: "single",
      prompt: {
        ja: "AIが勧めたパッケージをインストールする前に、まずすべきことは？",
        en: "What should you do first before installing a package that AI recommended?",
      },
      choices: [
        {
          ja: "公式のパッケージの置き場に本当にあるか、名前が本物と紛らわしくないかを確かめる",
          en: "Confirm it really exists in the official registry and that its name isn't confusingly similar to the real one",
        },
        { ja: "AIに「本当にある？」と聞き直し、あると答えたらそのまま入れる", en: "Ask the AI \"does it really exist?\" and install it if the AI says yes" },
        { ja: "とりあえず入れてみて、動けばよしとする", en: "Install it anyway and call it fine if it works" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "攻撃者は、AIの挙げそうな名前で悪意あるパッケージを登録しておくことがあります。同じAIに聞き直しても確かめたことにはならないので、公式の置き場で実在と中身を確かめます。",
        en: "Attackers may register malicious packages under names AI is likely to suggest. Asking the same AI again is not verification; check the official registry for the package and what it contains.",
      },
    },
  ],
  sources: [
    { label: "OWASP: LLM03:2025 Supply Chain", url: "https://genai.owasp.org/llmrisk/llm032025-supply-chain/" },
    { label: "Hugging Face: Pickle Scanning", url: "https://huggingface.co/docs/hub/security-pickle" },
    { label: "PyTorch: torch.load", url: "https://docs.pytorch.org/docs/stable/generated/torch.load.html" },
    { label: "Hugging Face: Safetensors", url: "https://huggingface.co/docs/safetensors/index" },
    {
      label: "Spracklen et al.: We Have a Package for You! A Comprehensive Analysis of Package Hallucinations by Code Generating LLMs（arXiv:2406.10279）",
      url: "https://arxiv.org/abs/2406.10279",
    },
    {
      label: "Pearce et al.: Asleep at the Keyboard? Assessing the Security of GitHub Copilot's Code Contributions（arXiv:2108.09293）",
      url: "https://arxiv.org/abs/2108.09293",
    },
    {
      label: "IPA: 「情報セキュリティ10大脅威 2026」解説書［組織編］（2026年3月）",
      url: "https://www.ipa.go.jp/security/10threats/omgdg50000008fi8-att/kaisetsu_2026_soshiki.pdf",
    },
  ],
  lastVerified: "2026-10-13",
  glossaryRefs: ["ai-supply-chain", "safetensors", "package-hallucination", "open-weight", "lora"],
};
