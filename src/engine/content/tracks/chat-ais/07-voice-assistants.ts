import type { Lesson } from "@/engine/content/types";

export const voiceAssistants: Lesson = {
  id: "chat-ais-07",
  slug: "voice-assistants",
  title: {
    ja: "声で話すAI — リアルタイム音声アシスタント",
    en: "Talking to AI: Real-Time Voice Assistants",
  },
  summary: {
    ja: "話しかけるとすぐ声で返ってくる音声モードの仕組みと、声・カメラ・画面を渡す前に確かめたい保存・学習・周りの人の扱い。",
    en: "How voice modes answer almost instantly — and what to check about storage, training, and bystanders before you hand over your voice, camera, or screen.",
  },
  body: {
    ja: `## 文字を打たずに、話しかける

主要なチャットAIのアプリには、声で話しかけて声で答えてもらう**音声モード**があります。ChatGPTの音声機能やGoogleのGemini Liveのように、カメラに映したものや画面を見せながら相談できるものもあります。対応する機能・プラン・端末は頻繁に変わるため、使う前に各社の公式ヘルプで確認してください（製品の一覧は[モデルカタログ](/ja/models)）。

### 3段のリレーから、1つのモデルへ
OpenAIによると、2024年5月にGPT-4oが登場する前のChatGPTの音声モードは、**音声を文字に起こすモデル → 文章で答えを考えるモデル → 文章を読み上げるモデル**という3つのモデルのリレーで、応答までに平均2.8秒（GPT-3.5）〜5.4秒（GPT-4）かかっていました。中心のモデルには文字しか届かないため、**声の調子・複数の話し手・背景の音**を直接とらえられず、笑い声や歌、感情のこもった声も出せませんでした。

GPT-4oは、テキスト・画像・音声を**1つのモデルでエンドツーエンドに**処理するよう学習され、音声への応答は最短232ミリ秒・平均320ミリ秒と、人どうしの会話の応答時間に近づいたと説明されています。これ以降、声で自然にやり取りできるリアルタイムの音声機能が各社のアプリに広がりました。

### 声だからこそ起きること
- **人のように感じやすい**: OpenAIはGPT-4oのシステムカードで、人間らしい高品質な声での対話はAIを人のように捉える**擬人化**を強め、**信頼の度合いがずれる**おそれがあると述べています。テスト中には、モデルとのつながりを感じているような言葉づかいも観察され、**過度な依存**の可能性も挙げられています。
- **聞き流すと確かめにくい**: 声の回答は、出典やリンクを目で追えません。重要な事実は会話のあとに文字の履歴（書き起こし）で見直し、出典を確かめましょう（ハルシネーションのレッスン参照）。
- **声のなりすましへの対策**: 同じシステムカードは、声優と作ったあらかじめ用意した声だけを使わせ、それ以外の声で話し始めたら出力を止める分類器を動かしている、と説明しています。

### 声・カメラ・画面を渡す前に確かめること
音声モードでは、文字のチャットより多くの情報が送られます。サービスごとに次の点を確認しましょう。
- **何が、どれくらい保存されるか**: 例として、OpenAIはChatGPTの音声会話の録音クリップ（一部の方式では動画も）を書き起こしと一緒に保存し、**30日間保持**すると説明しています。Googleは、[アクティビティの保存]がオフでもGemini Liveの会話を**最長72時間**アカウントに保存するとしています。
- **学習に使われるか**: OpenAIは、「すべての人のためにモデルを改善する」がオンなら音声会話の書き起こしを学習に使うことがある一方、録音・録画は利用者が共有を選ばない限り学習に使わないとしています。Googleは、[アクティビティの保存]がオンならLiveの会話の書き起こしをAIモデルを含むサービスの改善に使い、音声・動画・画面共有はデフォルトでは使わないとしています。
- **人が見るか**: Googleは一部のチャットを人間のレビュアーが確認すること、レビューされたチャットは**アクティビティを削除しても消えず最長3年間保存される**ことを明記し、レビュアーに見られたくない機密情報を入力しないよう求めています。
- **映り込みと周りの人**: カメラや画面を共有すると、通知・他人の名前やメッセージ・家族や同僚の顔や声まで入りえます。Googleは、他人を録音したりLiveの会話に含めたりする前に、本人の許可を得るよう求めています。

### 実践のコツ
- 画面を共有する前に、通知を切り、関係のないアプリやタブを閉じる。
- 職場や公共の場では、周りの人の声や映り込みに注意する（仕事でAIを使うときの情報の扱いのレッスン参照）。
- 学習利用と履歴の設定を一度確認し、残す必要のない会話は削除する。
- 聞き上手なAIに頼りすぎていないか、ときどき振り返る。
- スマートフォンに組み込まれたAI機能が、端末内で処理するのか、クラウドや別の会社のAIに送るのかは、[家電・スマホのAI機能の設定](/ja/learn/ai-in-daily-life/device-ai-settings)のレッスンで確かめ方を扱っています。`,
    en: `## Talking instead of typing

The major chat AI apps have a **voice mode**: you speak, and the AI answers out loud. Some, such as ChatGPT's voice feature and Google's Gemini Live, also let you point your camera at something or share your screen while you talk. Features, plans, and supported devices change often, so check each vendor's official help pages before relying on them (products are listed in the [model catalog](/en/models)).

### From a three-stage relay to a single model
According to OpenAI, before GPT-4o arrived in May 2024, ChatGPT's voice mode was a relay of three models — **one transcribing audio to text, one reasoning in text, and one reading the text aloud** — with average latencies of 2.8 seconds (GPT-3.5) to 5.4 seconds (GPT-4). Because only text reached the model in the middle, it could not directly perceive **tone, multiple speakers, or background noise**, and it could not laugh, sing, or express emotion.

GPT-4o was trained as **a single model, end to end, across text, vision, and audio**. OpenAI says it responds to audio in as little as 232 milliseconds, 320 milliseconds on average — close to human response times in conversation. Since then, real-time voice features that make natural spoken conversation possible have spread across vendors' apps.

### What changes when it has a voice
- **It feels more like a person**: in the GPT-4o system card, OpenAI notes that human-like, high-fidelity voice can heighten **anthropomorphization** — attributing human traits to the AI — and lead to **miscalibrated trust**. During testing it observed users using language that suggested they were forming a bond with the model, and it flagged the potential for **over-reliance and dependence**.
- **Spoken answers are hard to check**: you can't scan citations or links while listening. For anything important, review the text transcript afterward and check the sources (see the Hallucination lesson).
- **Guarding against voice impersonation**: the same system card says only preset voices created with voice actors are allowed, and a separate classifier blocks the output if the model starts speaking in any other voice.

### Before you hand over your voice, camera, or screen
Voice mode sends more than a text chat does. For each service, check:
- **What is stored, and for how long**: OpenAI, for example, says audio clips from ChatGPT voice conversations (and video clips in one of its modes) are stored with the transcript and **retained for 30 days**. Google says that even with Keep Activity turned off, Gemini Live chats are stored in your Google Account for **up to 72 hours**.
- **Whether it is used for training**: OpenAI says that if "Improve the model for everyone" is on, transcripts of voice conversations may be used for training, but audio and video clips are not used unless you choose to share them. Google says that with Keep Activity on, Live transcripts are used to improve its services, including AI models, while audio, video, and screen shares are not used by default.
- **Whether people review it**: Google states that human reviewers look at a subset of chats, and that **reviewed chats are not deleted when you delete your activity — they are kept for up to three years**. It asks you not to enter confidential information you wouldn't want a reviewer to see.
- **What else ends up in frame**: sharing your camera or screen can capture notifications, other people's names and messages, and the faces and voices of family or coworkers. Google asks users to get permission before recording people or including them in a Live chat.

### Practical habits
- Before sharing your screen, silence notifications and close unrelated apps and tabs.
- At work or in public, mind the voices and faces around you (see the lesson on handling information at work).
- Check the training and history settings once, and delete conversations you don't need to keep.
- Every so often, ask yourself whether you're leaning too heavily on an AI that is always a good listener.
- Whether the AI features built into your phone process data on the device or send it to the cloud or another company's AI — and how to check — is covered in the [device AI settings](/en/learn/ai-in-daily-life/device-ai-settings) lesson.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "GPT-4o以前のChatGPTの音声モードが、声の調子や背景の音をとらえられなかったのはなぜ？",
        en: "Why couldn't ChatGPT's voice mode before GPT-4o perceive tone of voice or background noise?",
      },
      choices: [
        {
          ja: "音声を文字に起こしてから中心のモデルに渡す3段のリレーで、中心のモデルには文字しか届かなかったから",
          en: "It was a three-model relay that transcribed speech first, so only text reached the model in the middle",
        },
        { ja: "スマートフォンのマイクの性能が足りなかったから", en: "Smartphone microphones weren't good enough" },
        { ja: "音声の会話は通信量を抑えるため、常に圧縮されていたから", en: "Voice conversations were always compressed to save bandwidth" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "文字に起こした時点で声の調子や話し手の区別などの情報が失われていました。GPT-4oは音声も1つのモデルで直接扱うことでこれを解消しました。",
        en: "Tone and who was speaking were lost at the transcription step. GPT-4o fixed this by handling audio directly in a single model.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "Googleの説明では、人間のレビュアーが確認したGeminiの会話も、アクティビティを削除すればすぐに消える。",
        en: "According to Google, Gemini chats that human reviewers have looked at are removed as soon as you delete your activity.",
      },
      answer: false,
      explanation: {
        ja: "レビューされたチャットはアクティビティを削除しても消えず、最長3年間保存されます。見られたくない機密情報は最初から入力しないことが大切です。",
        en: "Reviewed chats are not deleted with your activity; they are kept for up to three years. Keep confidential information out of the conversation from the start.",
      },
    },
  ],
  sources: [
    { label: "OpenAI: Hello GPT-4o", url: "https://openai.com/index/hello-gpt-4o/" },
    { label: "OpenAI: GPT-4o System Card", url: "https://cdn.openai.com/gpt-4o-system-card.pdf" },
    { label: "OpenAI Help Center: ChatGPT Voice", url: "https://help.openai.com/en/articles/20001274-chatgpt-voice" },
    { label: "Gemini Apps Help: Gemini Apps Privacy Hub", url: "https://support.google.com/gemini/answer/13594961?hl=en" },
  ],
  lastVerified: "2026-10-07",
  glossaryRefs: ["speech-to-speech", "multimodal"],
};
