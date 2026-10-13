import type { Lesson } from "@/engine/content/types";

export const aiCommentary: Lesson = {
  id: "ai-and-sports-04",
  slug: "ai-commentary",
  title: {
    ja: "AIの実況とファン — 実況のないコートにも解説を",
    en: "AI Commentary and Fans: Bringing Commentary to Courts Without It",
  },
  summary: {
    ja: "大きなテニスの大会では、すべての試合に人の実況をつけるのは難しい。IBMは2023年、ウィンブルドンのハイライト動画に生成AIの解説をつけ、その後は試合の盛り上がりに合わせて声の抑揚を変える研究も進めている。しくみと、人の実況との関係。",
    en: "At big tennis tournaments, it is hard to provide human commentary for every match. In 2023 IBM added generative AI commentary to Wimbledon's highlight videos, and it has since researched changing the voice's expressiveness with the excitement of play. How it works, and how it relates to human commentators.",
  },
  body: {
    ja: `## ハイライト動画に、AIの解説
IBMとオールイングランド・ローンテニス・クラブは2023年6月21日、その年のウィンブルドンで、IBMの生成AI（watsonx）を使って、すべてのハイライト動画に解説をつけると発表しました。
- ハイライト動画の重要な場面に、音声の解説と字幕をつける。視聴者はオンとオフを切り替えられる。
- 人の実況がすでにあるショーコート以外の試合にも、解説を届ける一歩と位置づけられた。
- IBMの専門家がクラブと協力し、watsonxの基盤モデルにテニス特有の言葉を学ばせ、文の構造や語彙に変化のある解説を作るようにした。

同じ年には、各選手が決勝までに当たりうる相手などから組み合わせの有利さを示す「AI Draw Analysis」も始めました。IBMは、テニスで初めての種類の統計だとしています。

## 試合の映像を「読む」
IBMによると、2023年にUSオープンとウィンブルドンでAIの解説を始めたとき、まず試合の映像から、コンピュータビジョンで、コートとネットの位置、選手とボールの動き、ショットの種類（バックハンド、フォアハンド、ボレーなど）と方向を取り出しました。そこに観客の歓声の大きさなど、ほかの情報を組み合わせて解説を作りました。

## 盛り上がりを声に乗せる
IBMの研究者は2025年9月、多くのLLMは、内容は正しく伝えられても、抑揚、強勢、リズム、声の大きさといった**プロソディ**を扱うのが苦手だと説明しています。研究チームが試しているのは、次の3段階です。
1. コンピュータビジョンのモデルが、スコア、プレーの内容、観客の盛り上がり、選手の表情や動きから「盛り上がり度」を出す。
2. LLMが、盛り上がり度に合わせて解説の台本を書く。ふつうのラリーでは状況を伝え、すごいラリーでは感嘆の言葉を足す。
3. 音声合成のモデル（ProsodyLM。3万時間のオーディオブックで事前学習）が、リズムや強さ、高さのある自然な声にする。

この解説は、2025年のUSオープンの技術デモで紹介されました。研究者は、AIの解説の狙いは人を置き換えることではなく、人を補い、解説のないコートにも届けることだとしています。USオープンでは15日間で300を超える試合があり、すべてに人の実況をつけるのは運営上難しく、費用もかかりすぎるといいます。

## 読むときの注意
- **デモと本番を分ける**: 盛り上がりを声に乗せる解説は、2025年の時点ではプロトタイプとしてデモされた段階で、IBMは、本番での運用に進んだ先の展望を語っています。
- **だれが話しているかを示す**: IBMの記事は、近いうちに人とAIの実況の区別がつきにくくなるかもしれないと書いています。AIの解説だと分かるようにすることは、視聴者の信頼に関わります（このコースからの提案。AIの音声については[音楽・音声生成](/ja/learn/generative-media/music-voice-generation)のレッスン参照）。`,
    en: `## AI commentary on highlight videos
On June 21, 2023, IBM and the All England Lawn Tennis Club announced that at that year's Wimbledon, IBM's generative AI (watsonx) would produce commentary for all video highlights packages.
- Highlight videos get audio commentary of key moments, along with captions, which viewers can toggle on or off.
- It was presented as a step toward making commentary available for matches outside the Show Courts, which already have live human commentary.
- IBM experts worked with the club to train watsonx foundation models in the unique language of tennis and to produce narration with varied sentence structure and vocabulary.

The same year it launched "AI Draw Analysis," which rates how favorable each player's path to the final might be, based on factors such as potential opponents. IBM called it the first statistic of its kind in tennis.

## "Reading" the match video
According to IBM, when it brought AI commentary to the US Open and Wimbledon in 2023, it first used computer vision to extract details from match video: the position of the court and net, the movements of players and balls, the type of each shot (backhand, forehand, volley, and so on), and its direction. It combined this with other information, such as how loudly the crowd was cheering, to produce the commentary.

## Putting excitement into the voice
In September 2025, IBM researchers explained that while many LLMs convey content correctly, they struggle with **prosody** — the elements of speech such as intonation, stress, rhythm, and loudness. The research team is trying a three-step pipeline:
1. A computer vision model uses the score, play-by-play data, crowd excitement, and players' expressions and movements to produce an "excitement score."
2. An LLM writes a commentary script that varies with the excitement score — describing normal rallies plainly and adding exclamations for extraordinary ones.
3. A text-to-speech model (ProsodyLM, pre-trained on 30,000 hours of audiobooks) turns it into natural speech with rhythm, energy, and pitch.

This commentary was shown in a technology demo at the 2025 US Open. The researchers say the aim of AI commentary is not to replace people but to augment them and bring commentary to courts that lack it. The US Open has more than 300 matches over 15 days, and staffing human commentators for all of them is logistically tricky and prohibitively expensive, they say.

## Reading the claims
- **Separate demos from production**: As of 2025, excitement-driven commentary had been demonstrated as a prototype; IBM described what might come once it moves into production.
- **Show who is speaking**: IBM's article says it may soon be hard for fans to tell human commentators from AI ones. Making it clear when commentary comes from AI matters for viewers' trust (this course's suggestion; for AI voices, see the [music and voice generation](/en/learn/generative-media/music-voice-generation) lesson).`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "2023年のウィンブルドンで、IBMの生成AIがしたことは？",
        en: "What did IBM's generative AI do at Wimbledon in 2023?",
      },
      choices: [
        {
          ja: "ハイライト動画に、音声の解説と字幕をつけた",
          en: "It added audio commentary and captions to highlight videos",
        },
        { ja: "線審の代わりにアウトを判定した", en: "It made out calls instead of line judges" },
        { ja: "チケットの値段を決めた", en: "It set ticket prices" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "視聴者は解説のオン・オフを切り替えられました。人の実況があるショーコート以外の試合にも解説を届ける一歩とされました。",
        en: "Viewers could toggle the commentary on or off. It was framed as a step toward commentary for matches outside the Show Courts, which already had human commentators.",
      },
    },
    {
      kind: "multi",
      prompt: {
        ja: "IBMの研究チームが試している、盛り上がりを声に乗せる3段階をすべて選んで。",
        en: "Select all three steps IBM's researchers are trying for putting excitement into the voice.",
      },
      choices: [
        { ja: "映像などから「盛り上がり度」を出す", en: "Producing an \"excitement score\" from video and other data" },
        { ja: "盛り上がり度に合わせてLLMが台本を書く", en: "Having an LLM write a script that varies with the excitement score" },
        { ja: "抑揚のある声に変換する", en: "Turning it into expressive speech" },
        { ja: "AIが選手の代わりにプレーする", en: "Having AI play instead of the athletes" },
      ],
      correctIndexes: [0, 1, 2],
      explanation: {
        ja: "最後の音声合成には、3万時間のオーディオブックで事前学習したProsodyLMを使っています。",
        en: "The final text-to-speech step uses ProsodyLM, pre-trained on 30,000 hours of audiobooks.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "IBMの研究者は、AIの解説の狙いは人の実況者を置き換えることだとしている。",
        en: "IBM's researchers say the aim of AI commentary is to replace human commentators.",
      },
      answer: false,
      explanation: {
        ja: "狙いは人を補い、解説のないコートにも届けることだとしています。",
        en: "They say the aim is to augment people and bring commentary to courts that lack it.",
      },
    },
  ],
  sources: [
    {
      label: "IBM: IBM Brings Generative AI Commentary and AI Draw Analysis to the Wimbledon Digital Experience（2023-06-21）",
      url: "https://newsroom.ibm.com/2023-06-21-IBM-Brings-Generative-AI-Commentary-and-AI-Draw-Analysis-to-the-Wimbledon-Digital-Experience",
    },
    {
      label: "IBM Think: The future of tennis broadcasting: Excitement-driven AI sports commentary（2025-09-02）",
      url: "https://www.ibm.com/think/news/future-tennis-broadcasting-ai-sports-commentary",
    },
  ],
  lastVerified: "2026-10-13",
  glossaryRefs: ["prosody", "llm", "multimodal"],
};
