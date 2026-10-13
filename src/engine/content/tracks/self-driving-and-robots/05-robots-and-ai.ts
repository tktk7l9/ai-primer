import type { Lesson } from "@/engine/content/types";

export const robotsAndAi: Lesson = {
  id: "self-driving-and-robots-05",
  slug: "robots-and-ai",
  title: {
    ja: "ロボットとAI — 工場で働くロボットと、言葉で指示できるロボットの研究",
    en: "Robots and AI: Robots at Work in Factories, and Research on Robots You Can Instruct in Words",
  },
  summary: {
    ja: "世界の工場では460万台を超える産業用ロボットが動いている。言語モデルの知識をロボットの動作につなぐ「視覚・言語・行動（VLA）モデル」の研究が進み、見たことのない物や指示にも対応し始めた。研究の成果を読むときの注意と、安全の考え方。",
    en: "More than 4.6 million industrial robots operate in factories worldwide. Research on vision-language-action (VLA) models, which connect a language model's knowledge to robot movements, is beginning to handle unfamiliar objects and instructions. What to keep in mind when reading results, and how safety is approached.",
  },
  body: {
    ja: `## すでに働いているロボット

国際ロボット連盟（IFR）の「World Robotics 2025」によると、2024年に世界で新たに設置された産業用ロボットは54万2,000台で、10年前の2倍を超えました。稼働している産業用ロボットは466万4,000台です。日本は設置台数で世界2位の市場で、2024年の設置は4万4,500台（前年比4%減）、稼働台数は45万500台でした。

### 言葉で指示できるロボットへ
いま研究が進んでいるのは、大規模なAIの知識を、ロボットの動作に結びつけることです。
- **RT-2（2023年7月28日、Google DeepMind）**: ウェブの規模のデータで学んだ視覚・言語のモデルを、ロボットのデータとウェブのデータで追加学習させた「視覚・言語・行動（VLA）モデル」。ロボットの動作を、言葉と同じように「トークン」（数字の列）として出力させます。もとになったロボットのデータは、オフィスの台所で13台のロボットが17か月かけて集めたものです。6,000回を超える試行で評価し、ロボットのデータになかった物や状況への対応（たとえば「机から落ちそうな袋を取って」）で、従来のモデルの3倍を超える汎化の性能を示したとしています。推論の手順を書かせると、「即席のハンマーに使えるもの」として石を選ぶような、段階を踏んだ判断もできたと報告しています。
- **Gemini Robotics（2025年3月12日、Google DeepMind）**: Gemini 2.0をもとに、物理的な動作を新しい出力として加えたVLAモデル。同社は、ロボットに必要な性質として、状況に合わせられる汎用性、指示や環境の変化にすぐ応じる対話性、手先の器用さの3つを挙げ、折り紙を折る、軽食をジッパー付きの袋に詰めるといった細かい作業の例を示しています。汎化の性能の評価では、ほかの最先端のVLAモデルの平均2倍を超えたとしています（同社の技術報告）。人型ロボットの開発でApptronik社と提携し、空間を理解して推論するモデル（Gemini Robotics-ER）は限られたテスターに提供するとしています。

### 研究の成果を読むときの注意
- **評価は誰がしたか**: 上の性能の数字は、開発元が自社の評価で示したものです。
- **実験の場と、身の回りの違い**: 学習や評価は、決まった環境やロボットの機体で行われています。Gemini Roboticsも主に特定の双腕ロボット（ALOHA 2）のデータで学習したと書かれています。家庭のような環境で、どれだけ安定して動くかは別の問題です。
- **研究と製品は別**: 研究の発表は、すぐに買える製品になるという意味ではありません。

### 物理の世界の安全
Google DeepMindは、ロボットの安全を、衝突を避ける、接触する力の大きさを抑える、移動するロボットの動的な安定を保つといった、ロボット工学の古典的な安全策（低いレベルの制御）と、ある行動がその場で安全かを理解する高いレベルの判断の両方で考えるとしています。後者のために、ロボットの行動の安全を評価するデータセット（ASIMOV）を公開し、自然言語で書いた規則（「ロボット憲法」）でロボットのふるまいを導く研究も進めています。同社は、ロボットと周りの人の物理的な安全は、ロボット工学で長年の根本的な関心事だとしています。画面の中のAIと違い、ロボットの間違いは物や人に直接届きます（人のいる場所を動く機械のルールは[歩道の配送ロボットと、空のドローン](/ja/learn/self-driving-and-robots/delivery-robots-and-drones)のレッスン参照）。`,
    en: `## Robots already at work

According to the International Federation of Robotics' (IFR) World Robotics 2025, 542,000 industrial robots were installed worldwide in 2024 — more than double the number ten years earlier — and 4,664,000 were in operation. Japan is the world's second-largest market by installations, with 44,500 installed in 2024 (down 4%) and an operational stock of 450,500.

### Toward robots you can instruct in words
Research now aims to connect the knowledge of large AI models to robot movement.
- **RT-2 (Google DeepMind, July 28, 2023)**: a vision-language-action (VLA) model made by further training a vision-language model, pre-trained on web-scale data, on both robot data and web data. It outputs robot actions as "tokens" — strings of numbers — just like words. The robot data came from 13 robots over 17 months in an office kitchen. Evaluated in more than 6,000 robotic trials, it showed more than three times the generalization of earlier models on tasks involving objects or situations absent from the robot data (such as "pick up the bag about to fall off the table"). Prompted to reason step by step, it could also make multi-stage decisions, such as choosing a rock as an improvised hammer, the company reports.
- **Gemini Robotics (Google DeepMind, March 12, 2025)**: a VLA model built on Gemini 2.0 with physical actions added as a new output. The company names three qualities a helpful robot needs — generality to adapt to situations, interactivity to respond quickly to instructions and changes, and dexterity — and shows fine tasks such as folding origami and packing a snack into a zip-top bag. On a generalization benchmark, it says the model more than doubled the performance of other state-of-the-art VLA models on average (per its technical report). It is partnering with Apptronik on humanoid robots and offering a spatial-reasoning model, Gemini Robotics-ER, to a limited group of trusted testers.

### Reading research results
- **Who evaluated it?** The performance figures above come from the developer's own evaluations.
- **Lab conditions versus your home**: training and evaluation happen in particular environments and on particular robot hardware; Gemini Robotics, for example, was trained primarily on data from one bi-arm platform (ALOHA 2). How reliably a robot works in a setting like your home is a separate question.
- **Research is not a product**: a research announcement doesn't mean you can buy it.

### Safety in the physical world
Google DeepMind says it approaches robot safety at two levels: the classic safety measures of robotics — avoiding collisions, limiting the magnitude of contact forces, and keeping mobile robots dynamically stable (low-level control) — and higher-level understanding of whether an action is safe in context. For the latter it released a dataset for evaluating the safety of robot actions (ASIMOV) and is researching rules written in natural language (a "robot constitution") to steer a robot's behavior. The company calls the physical safety of robots and the people around them a longstanding, foundational concern of robotics. Unlike AI on a screen, a robot's mistakes reach objects and people directly (rules for machines that move among people are covered in [delivery robots and drones](/en/learn/self-driving-and-robots/delivery-robots-and-drones)).`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "RT-2のような「視覚・言語・行動（VLA）モデル」の説明として正しいものはどれ？",
        en: "Which description of a vision-language-action (VLA) model such as RT-2 is correct?",
      },
      choices: [
        {
          ja: "ウェブのデータで学んだ視覚・言語のモデルを、ロボットのデータでも学習させ、ロボットの動作を出力させる",
          en: "A vision-language model trained on web data is further trained on robot data so that it outputs robot actions",
        },
        { ja: "ロボットの動作だけを、ウェブのデータを使わずに学習する", en: "It learns robot actions only, without using any web data" },
        { ja: "人がプログラムした決まった動作を、そのまま繰り返す", en: "It simply repeats fixed motions programmed by a person" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "RT-2は、ウェブの規模のデータで学んだ視覚・言語のモデルをロボットのデータで追加学習させ、動作をトークンとして出力させます。ウェブで得た知識を使って、ロボットのデータになかった物や指示にも対応しようとする点が特徴です。",
        en: "RT-2 takes a vision-language model trained on web-scale data, trains it further on robot data, and has it output actions as tokens. Its point is to use web knowledge to handle objects and instructions that weren't in the robot data.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "開発元が自社の評価で示したロボットの性能の数字は、家庭のような環境でも同じように出ると考えてよい。",
        en: "A robot's performance figures from the developer's own evaluation can be expected to hold just the same in a setting like your home.",
      },
      answer: false,
      explanation: {
        ja: "学習や評価は特定の環境やロボットの機体で行われていて（Gemini Roboticsは主に特定の双腕ロボットのデータで学習）、家庭のような環境でどれだけ安定して動くかは別の問題です。",
        en: "Training and evaluation take place in particular environments and on particular robots (Gemini Robotics was trained mainly on data from one bi-arm platform); how reliably it works somewhere like your home is a separate question.",
      },
    },
  ],
  sources: [
    {
      label: "IFR: Global Robot Demand in Factories Doubles Over 10 Years（World Robotics 2025・2025-09-25）",
      url: "https://ifr.org/ifr-press-releases/news/global-robot-demand-in-factories-doubles-over-10-years",
    },
    {
      label: "Google DeepMind: RT-2 — New model translates vision and language into action（2023-07-28）",
      url: "https://deepmind.google/blog/rt-2-new-model-translates-vision-and-language-into-action/",
    },
    {
      label: "Google DeepMind: Gemini Robotics brings AI into the physical world（2025-03-12）",
      url: "https://deepmind.google/blog/gemini-robotics-brings-ai-into-the-physical-world/",
    },
  ],
  lastVerified: "2026-10-13",
  glossaryRefs: ["vision-language-action-model", "industrial-robot", "multimodal", "token"],
};
