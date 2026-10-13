import type { Lesson } from "@/engine/content/types";

export const aiForDefense: Lesson = {
  id: "ai-and-security-06",
  slug: "ai-for-defense",
  title: {
    ja: "守る側のAI — 脆弱性を見つけ、直すところまで",
    en: "AI on Defense: Finding Vulnerabilities and Fixing Them",
  },
  summary: {
    ja: "同じAIの力は守る側にも使える。AIエージェントが広く使われるソフトウェアの未知の脆弱性を見つけた例、見つけて直すまでを自動で競ったDARPAの大会、その数字の読み方と、このトラックのまとめのチェックリスト。",
    en: "The same capabilities can serve defenders. An AI agent that found an unknown vulnerability in widely used software, a DARPA competition where systems found and fixed vulnerabilities automatically, how to read the numbers, and a checklist that wraps up the track.",
  },
  body: {
    ja: `## 守る側の人手不足

米国防高等研究計画局（DARPA）の局長は、今の方法で脆弱性を見つけてコードを直すのは遅く、費用がかかり、限られた人材に頼っている、と述べています。英国の国家サイバーセキュリティセンター（NCSC）は、AIはシステムの持ち主や開発者が守りを固める助けにもなるとしたうえで、AIによる脅威に追いつけるシステムと、より弱いままの多くのシステムとの間に格差が生まれることはほぼ確実だと見ています。

## Big Sleep — AIエージェントが未知の脆弱性を見つけた
GoogleのProject ZeroとGoogle DeepMindは2024年11月1日、共同で開発したAIエージェント「Big Sleep」が、広く使われているデータベースエンジンSQLiteに、悪用できるメモリの脆弱性（スタックバッファアンダーフロー）を見つけたと発表しました。
- 10月上旬に開発者に報告し、その日のうちに修正された。正式版に入る前だったので、利用者への影響はなかった。
- SQLiteの既存の試験のしくみ（OSS-Fuzzと、プロジェクト自身のしくみ）では見つかっていなかった。
- チームは、広く使われる実際のソフトウェアで、AIエージェントが悪用できる未知のメモリ安全性の問題を見つけた、初めての公開例だと考えている、としています。

ただし同じ記事は、これは非常に実験的な結果であり、現時点では対象に合わせて作ったファザー（ファジングの道具）も少なくとも同じくらい効果的だろう、とも述べています。その後、GoogleのThreat Intelligence Group（GTIG）は2025年11月の報告で、Big Sleepが、攻撃者に今にも使われそうだった脆弱性の発見を助け、悪用を前もって防げたとしています。

## AIxCC — 見つけて、直すまでを自動で
DARPAが米国の保健分野の研究機関ARPA-Hや最先端のAI企業と協力し、2年をかけて行ったAI Cyber Challenge（AIxCC）では、各チームが、AIを使って脆弱性を見つけて直す自動のシステム（サイバー推論システム）を作って競いました。2025年8月8日に発表された決勝の結果は次のとおりです。
- 優勝はTeam Atlanta（ジョージア工科大学、Samsung Research、KAIST、POSTECHの専門家）、2位はTrail of Bits、3位はTheori。賞金はそれぞれ400万ドル、300万ドル、150万ドル。
- 合わせて5,400万行を超えるコードを対象に、63の課題で、大会用に人工的に仕込まれた脆弱性を54件見つけ、そのうち43件を修正した。見つけた割合は、2024年8月の準決勝の37%から86%に上がった。
- 仕込まれたものとは別に、実在する脆弱性も18件見つけ、オープンソースの開発者に責任ある形で知らせている。実在する脆弱性への修正も11件出した。
- 修正の提出までは平均45分、課題1つあたりの費用は平均約152ドル。DARPAは、数百ドルから数十万ドルになるバグ報奨金と比べています。
- 7チームのうち4チームのシステムが、発表の時点でオープンソースとして公開された。

## 数字を読むときの注意
- **人工の脆弱性が中心**: 成績の多くは、大会のために仕込まれた脆弱性に対するものです。現実のコードで見つかった件数（18件）とは分けて読みます。
- **実験的という但し書き**: Big Sleepのチーム自身が、結果は非常に実験的で、今はファジングも少なくとも同じくらい効果的だろうと書いています。
- **AIだけで守るわけではない**: AIxCCの責任者は、質の高い修正ができたことは、AIをほかのサイバー防御の技術と組み合わせる価値を示している、と述べています。AIが作った修正も、コードの持ち主が確かめてから取り込むものとして扱いましょう（[コーディングAIの安全な使い方](/ja/learn/coding-ai/safe-usage)参照）。

## このトラックのまとめ — チェックリスト
- **AIの答えは確かめる**: もっともらしい誤りがある（[全体像](/ja/learn/ai-and-security/big-picture)）。
- **秘密は許可されたAIサービスにだけ**: シャドーAIは情報漏えいにつながる（[全体像](/ja/learn/ai-and-security/big-picture)）。
- **AIが断るから安全とは考えない**: 安全対策はすり抜けられることがある（[ジェイルブレイク](/ja/learn/ai-and-security/jailbreaks)）。
- **エージェントの権限は必要最小限に**: 読ませた内容に指示が仕込まれていることがある（[プロンプトインジェクション](/ja/learn/ai-agents/prompt-injection)）。
- **学ばせるデータ、モデル、パッケージは出どころを確かめる**（[データポイズニング](/ja/learn/ai-and-security/data-poisoning)、[サプライチェーン](/ja/learn/ai-and-security/supply-chain)）。
- **更新はすぐ当て、多要素認証を使う**（[攻撃者はAIをどう使っているか](/ja/learn/ai-and-security/attackers-using-ai)）。`,
    en: `## Defenders are short-handed

The director of the US Defense Advanced Research Projects Agency (DARPA) has said that finding vulnerabilities and patching code with current methods is slow, expensive, and dependent on a limited workforce. The UK's National Cyber Security Centre (NCSC) says AI will also help system owners and software developers secure their systems — but judges that there will almost certainly be a divide between systems that keep pace with AI-enabled threats and a large proportion that remain more vulnerable.

## Big Sleep: an AI agent finds an unknown vulnerability
On November 1, 2024, Google's Project Zero and Google DeepMind announced that Big Sleep, an AI agent they built together, had found an exploitable memory-safety vulnerability (a stack buffer underflow) in SQLite, a widely used database engine.
- They reported it to the developers in early October, and it was fixed the same day. Because it was found before it appeared in an official release, users were not affected.
- SQLite's existing testing infrastructure (OSS-Fuzz and the project's own) had not found it.
- The team believes this is the first public example of an AI agent finding a previously unknown, exploitable memory-safety issue in widely used real-world software.

The same post stresses that these are highly experimental results, and that for now a fuzzer built for the target (a fuzzing tool) would likely be at least as effective. Later, in a November 2025 report, Google Threat Intelligence Group (GTIG) said Big Sleep had helped find a vulnerability that threat actors were about to use, letting GTIG cut off the exploitation in advance.

## AIxCC: finding and fixing, automatically
In the AI Cyber Challenge (AIxCC), a two-year competition DARPA ran with ARPA-H (the US Advanced Research Projects Agency for Health) and frontier AI labs, teams built automated systems that use AI to find and fix vulnerabilities (cyber reasoning systems). The final results, announced on August 8, 2025:
- Team Atlanta (experts from Georgia Tech, Samsung Research, KAIST, and POSTECH) won; Trail of Bits came second and Theori third, with prizes of $4 million, $3 million, and $1.5 million.
- Across more than 54 million lines of code, the systems found 54 vulnerabilities artificially inserted for the competition, in 63 challenges, and patched 43 of them. The share of inserted vulnerabilities they found rose from 37% at the August 2024 semifinal to 86%.
- Beyond the inserted ones, they also found 18 real vulnerabilities, which are being responsibly disclosed to open-source maintainers, and provided 11 patches for real vulnerabilities.
- Patches took 45 minutes on average to submit, and each competition task cost about $152 on average. DARPA compares this with bug bounties, which can range from hundreds to hundreds of thousands of dollars.
- Four of the seven teams' systems were released as open source at the time of the announcement.

## Reading the numbers
- **Mostly artificial vulnerabilities**: most of the results concern vulnerabilities inserted for the competition. Read them separately from what was found in real code (18 vulnerabilities).
- **"Experimental"**: the Big Sleep team itself calls its results highly experimental and says fuzzing is likely at least as effective for now.
- **AI doesn't defend alone**: AIxCC's program manager said quality patching demonstrates the value of combining AI with other cyber defense techniques. Treat patches written by AI as something the code's owners check before merging (see [using coding AI safely](/en/learn/coding-ai/safe-usage)).

## Track wrap-up: a checklist
- **Check AI answers**: they can be plausible but wrong ([the big picture](/en/learn/ai-and-security/big-picture)).
- **Share secrets only with approved AI services**: shadow AI leads to leaks ([the big picture](/en/learn/ai-and-security/big-picture)).
- **Don't assume refusals mean safety**: safeguards can be bypassed ([jailbreaks](/en/learn/ai-and-security/jailbreaks)).
- **Give agents only the permissions they need**: instructions may be hidden in what they read ([prompt injection](/en/learn/ai-agents/prompt-injection)).
- **Check where training data, models, and packages come from** ([data poisoning](/en/learn/ai-and-security/data-poisoning), [supply chain](/en/learn/ai-and-security/supply-chain)).
- **Apply updates promptly and use multi-factor authentication** ([how attackers use AI](/en/learn/ai-and-security/attackers-using-ai)).`,
  },
  quiz: [
    {
      kind: "boolean",
      prompt: {
        ja: "Big Sleepが見つけたSQLiteの脆弱性は、正式版に入る前に修正されたので、利用者への影響はなかった。",
        en: "The SQLite vulnerability Big Sleep found was fixed before it reached an official release, so users were not affected.",
      },
      answer: true,
      explanation: {
        ja: "10月上旬に報告され、その日のうちに修正されました。正式版に入る前に見つかったので、利用者への影響はありませんでした。",
        en: "It was reported in early October and fixed the same day. Because it was caught before an official release, users were not affected.",
      },
    },
    {
      kind: "single",
      prompt: {
        ja: "AIxCCの結果を読むときに注意したい点はどれ？",
        en: "What should you keep in mind when reading the AIxCC results?",
      },
      choices: [
        {
          ja: "成績の多くは大会用に仕込まれた人工の脆弱性に対するもので、現実のコードで見つけた件数とは分けて読む",
          en: "Most results concern vulnerabilities inserted for the competition, so read them separately from what was found in real code",
        },
        { ja: "大会で修正できたので、現実のソフトウェアの脆弱性はもう人が探さなくてよい", en: "Since the systems fixed vulnerabilities in the competition, people no longer need to look for vulnerabilities in real software" },
        { ja: "費用が安いので、AIが作った修正は確かめずに取り込んでよい", en: "Because it was cheap, AI-written patches can be merged without checking" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "見つけた人工の脆弱性は54件、現実のコードで見つけた脆弱性は18件です。AIxCCの責任者も、AIをほかの防御の技術と組み合わせる価値を強調しています。",
        en: "The systems found 54 inserted vulnerabilities and 18 real ones. AIxCC's program manager also stressed the value of combining AI with other defense techniques.",
      },
    },
    {
      kind: "multi",
      prompt: {
        ja: "このトラックのチェックリストに沿った行動をすべて選んで。",
        en: "Select all the actions that follow this track's checklist.",
      },
      choices: [
        { ja: "AIが勧めたパッケージの出どころを確かめる", en: "Check where a package recommended by AI comes from" },
        { ja: "更新をすぐ当てる", en: "Apply updates promptly" },
        { ja: "AIが断ったので、そのサービスは安全だと考える", en: "Conclude that a service is safe because the AI refused a request" },
        { ja: "エージェントには必要な権限だけを与える", en: "Give an agent only the permissions it needs" },
      ],
      correctIndexes: [0, 1, 3],
      explanation: {
        ja: "断るしくみは、すり抜けられることを前提にした守りの1枚にすぎません。出どころの確認、すぐの更新、最小限の権限を重ねます。",
        en: "Refusals are just one layer of defense, built on the assumption they can be bypassed. Stack checking sources, prompt updates, and minimal permissions.",
      },
    },
  ],
  sources: [
    {
      label: "Google Project Zero: From Naptime to Big Sleep: Using Large Language Models To Catch Vulnerabilities In Real-World Code（2024-11-01）",
      url: "https://projectzero.google/2024/10/from-naptime-to-big-sleep.html",
    },
    { label: "DARPA: AI Cyber Challenge marks pivotal inflection point for cyber defense（2025-08-08）", url: "https://www.darpa.mil/news/2025/aixcc-results" },
    {
      label: "Google Threat Intelligence Group: GTIG AI Threat Tracker: Advances in Threat Actor Usage of AI Tools（2025-11-06）",
      url: "https://cloud.google.com/blog/topics/threat-intelligence/threat-actor-usage-of-ai-tools",
    },
    {
      label: "NCSC: Impact of AI on cyber threat from now to 2027（2025-05-07）",
      url: "https://www.ncsc.gov.uk/report/impact-ai-cyber-threat-now-2027",
    },
    { label: "OWASP: Fuzzing", url: "https://community.owasp.org/Fuzzing" },
  ],
  lastVerified: "2026-10-13",
  glossaryRefs: ["fuzzing", "cyber-reasoning-system", "zero-day", "agent"],
};
