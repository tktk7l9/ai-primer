import type { Lesson } from "@/engine/content/types";

export const deviceAiSettings: Lesson = {
  id: "ai-in-daily-life-06",
  slug: "device-ai-settings",
  title: {
    ja: "家電・スマホのAI機能の設定 — その処理はどこで行われているか",
    en: "AI Settings on Your Phone and Home Devices: Where Does the Processing Happen?",
  },
  summary: {
    ja: "端末の中で処理されるのか、提供元のクラウドか、別の会社のAIか。Appleのオンデバイス処理とPrivate Cloud Compute、ChatGPT拡張機能の確認の仕組み、Geminiの履歴の設定、家のルーターやカメラの管理用パスワードとアップデート。",
    en: "Does it run on the device, in the vendor's cloud, or on another company's AI? Apple's on-device processing and Private Cloud Compute, how the ChatGPT extension asks first, Gemini's activity settings, and the admin passwords and updates on your home router and cameras.",
  },
  body: {
    ja: `## その処理は、どこで行われているか

写真の整理や通知の要約、通話の文字起こし、話しかけて操作するスピーカー——AIの機能は、設定画面の奥に静かに増えています。設定で最初に確かめたいのは、「その処理はどこで行われるか」です。

### 端末の中か、クラウドか、別の会社か
1. **端末の中（オンデバイス）**: データが端末から出ません。Appleは2026年9月時点の説明で、Apple Intelligenceのモデルは多くの場合すべて端末上で実行され、データが端末から出ることなく処理が完了するとしています。手元で動かすという考え方は、[ローカルで動くAI](/ja/learn/chat-ais/local-and-open-models)のレッスンで扱ったものと同じです。
2. **提供元のクラウド**: より大きなモデルが必要な処理は、提供元のサーバーに送られます。Appleは、より複雑な要求を扱うPrivate Cloud Computeについて、処理されるデータはAppleが保存もアクセスもできず、要求を満たすためだけに処理されて結果が端末に返され、保持されないと説明しています。要求の内容は含まないものの、おおよそのサイズや使われた機能、処理にかかった時間といった限られた情報をAppleが集めることはあるとしています。
3. **別の会社のAI**: 端末のAIが、外部のAIに処理を渡すことがあります。AppleのChatGPT拡張機能は既定ではオフで、オンにすると、要求と添付した書類や写真に加えて、タイムゾーン・国・端末の種類・言語・使っている機能といった限られたデータがOpenAIに送られます。Siriは、ChatGPTに渡す前に、使うかどうかを確認します（この確認をオフにする設定もあります）。ChatGPTのアカウントにサインインしていなければ、OpenAIは要求を満たす目的だけに処理し、法律で求められる場合を除いて保存せず、モデルの学習に使ってはならないとされています。サインインすると、OpenAIのアカウント設定とプライバシーポリシーが適用され、要求や添付、履歴が記録されて学習に使われることがあります。やめるときは、設定アプリの Apple Intelligence と Siri の項目にある ChatGPT で「ChatGPTを使用（Use ChatGPT）」をオフにします。

### 履歴・学習・人のレビュー
クラウドで処理される機能では、会話や共有した画面が保存されるか、学習に使われるか、人が見るか、オフにしても一定期間残るかを確かめます。Googleは、Geminiアプリについて、レビュアーに見られたくない機密情報や、Googleがサービス改善に使うことを望まない情報を入力しないよう求めています。Androidでは、Geminiを既定のデジタルアシスタントに設定できるため、音声アシスタントとして使うときも同じ設定が関わります。保存期間や人のレビューの具体的な条件は、[声で話すAI](/ja/learn/chat-ais/voice-assistants)のレッスンで扱いました。設定の名前や期間は変わるため、使う前に公式のプライバシーページで確かめます。

### 家の中の機器: パスワードとアップデート
ルーターやネットワークカメラのように家の機器をつなぐ装置は、管理用のパスワードが推測されやすいままだと、マルウェアの感染や不正アクセスの危険があり、知らないうちに犯罪に使われることもあります。総務省・NICT（情報通信研究機構）・ICT-ISACやインターネット接続事業者などが2019年2月20日から実施している**NOTICE**は、推測されやすい管理用パスワードが設定されたIoT機器を調査し、管理者や利用者に注意喚起を行う取り組みです。対策として、管理用パスワードを安全性の高いものにすること、最新のファームウェアにアップデートすることを挙げています。AI機能のあるスピーカーやカメラも、この土台の上にあります。

### 設定で確かめる5つのこと
1. **どこで処理されるか**: 端末内か、提供元のクラウドか、別の会社のAIか。
2. **送る前に確認が出るか**: 外部のAIに渡す前に聞いてくれるか、その確認をオフにしていないか。
3. **履歴は残るか、学習に使われるか、人が見るか**: オフにしても残る期間はどれだけか。
4. **機能ごとにオフにできるか**: 使わない機能はオフにし、場所を覚えておく。
5. **機器の土台は安全か**: 管理用パスワードを変え、ファームウェアを更新する。

職場や家族の情報が映り込む端末では、[仕事でAIを使うときの情報の扱い](/ja/learn/society/data-privacy-at-work)のレッスンの考え方も当てはまります。`,
    en: `## Where does the processing happen?

Sorting photos, summarizing notifications, transcribing calls, a speaker you operate by voice — AI features are quietly multiplying deep in the settings screens. The first thing to check in those settings is where the processing happens.

### On the device, in the cloud, or at another company
1. **On the device**: the data never leaves it. In its explanation as of September 2026, Apple says that in many cases Apple Intelligence models run entirely on device so that a task can be completed without data leaving your device. The idea of running AI locally is the same one covered in the lesson on [AI that runs locally](/en/learn/chat-ais/local-and-open-models).
2. **The vendor's cloud**: tasks that need a larger model are sent to the vendor's servers. For Private Cloud Compute, which handles more complex requests, Apple says the data being processed is not stored or made accessible to Apple, is processed only to fulfill the request, after which the results are returned to the device and not retained. Apple may collect limited information about the request — such as its approximate size, which features were used, and how long it took — but not the content of the request or the result.
3. **Another company's AI**: a device's AI may hand a task to an outside AI. Apple's ChatGPT extension is off by default; when it is on, your request and attachments such as documents or photos are sent to OpenAI, along with limited data such as your time zone, country, device type, language, and the feature being used. Siri asks whether you want to use ChatGPT before handing a request over (there is a setting to turn that confirmation off). If you are not signed in to a ChatGPT account, OpenAI must process your information solely to fulfill the request, must not store it unless required by law, and must not use it to improve or train its models. If you sign in, your ChatGPT account settings and OpenAI's privacy policies apply, and OpenAI may log your requests, attachments, and session history and use them for training. To stop, go to the Apple Intelligence & Siri section of Settings, open ChatGPT, and turn off Use ChatGPT.

### History, training, and human review
For features processed in the cloud, check whether conversations and shared screens are saved, whether they are used for training, whether people review them, and whether they persist for a time even when saving is off. For the Gemini app, Google asks you not to enter confidential information that you wouldn't want a reviewer to see or Google to use to improve its services. On Android, Gemini can be set as the default digital assistant, so the same settings apply when you use it by voice. The specific retention periods and review conditions are covered in the [voice assistants](/en/learn/chat-ais/voice-assistants) lesson. Setting names and periods change, so check the official privacy page before you rely on them.

### Devices at home: passwords and updates
Devices that connect your home — a router, a network camera — can be infected with malware or accessed without permission if their administrative password is easy to guess, and can be used for crime without your knowledge. **NOTICE**, run since February 20, 2019 by Japan's Ministry of Internal Affairs and Communications, the National Institute of Information and Communications Technology (NICT), ICT-ISAC, and internet service providers among others, surveys IoT devices set up with easily guessed administrative passwords and alerts their administrators and users. The measures it recommends: set a strong administrative password, and update to the latest firmware. AI-equipped speakers and cameras sit on that same foundation.

### Five things to check in the settings
1. **Where it's processed**: on the device, in the vendor's cloud, or at another company's AI.
2. **Whether it asks before sending**: does it check before handing data to an outside AI, and is that confirmation still on?
3. **Whether history is kept, used for training, or reviewed by people**: and for how long it persists even when turned off.
4. **Whether each feature can be turned off**: switch off what you don't use, and remember where the switch is.
5. **Whether the device itself is secure**: change the administrative password and update the firmware.

On a device that captures information about your workplace or family, the thinking in [handling information when using AI at work](/en/learn/society/data-privacy-at-work) applies as well.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "AppleのChatGPT拡張機能について、2026年10月時点の公式の説明として正しいのは？",
        en: "Which of these matches Apple's official explanation of the ChatGPT extension as of October 2026?",
      },
      choices: [
        {
          ja: "既定ではオフで、オンにしても、Siriは使う前にChatGPTを使うかどうかを確認する",
          en: "It is off by default, and even when on, Siri asks whether to use ChatGPT before doing so",
        },
        {
          ja: "最初からオンで、Siriへの質問はすべてOpenAIに送られる",
          en: "It is on from the start, and every Siri request is sent to OpenAI",
        },
        {
          ja: "端末内で処理されるので、OpenAIには何も送られない",
          en: "It runs on the device, so nothing is sent to OpenAI",
        },
      ],
      correctIndex: 0,
      explanation: {
        ja: "Appleは、ChatGPT拡張機能は既定ではオフで、Siriは使うかどうかを確認するとしています（確認をオフにする設定もあります）。オンにすると要求と添付、限られたデータがOpenAIに送られ、サインインしているかどうかで保存や学習の扱いが変わります。",
        en: "Apple says the extension is off by default and that Siri asks whether to use ChatGPT (the confirmation can be turned off). When on, the request, attachments, and limited data go to OpenAI, and whether you're signed in changes how storage and training are handled.",
      },
    },
    {
      kind: "multi",
      prompt: {
        ja: "家のルーターやネットワークカメラについて、適切な対策をすべて選んでください。",
        en: "Which of these are sound measures for your home router and network cameras? Select all that apply.",
      },
      choices: [
        { ja: "管理用パスワードを推測されにくいものに変える", en: "Change the administrative password to one that is hard to guess" },
        { ja: "ファームウェアを最新の状態に更新する", en: "Update the firmware to the latest version" },
        {
          ja: "初期設定のパスワードは製造元が決めたものなので、そのままが安全",
          en: "The factory-set password was chosen by the manufacturer, so leaving it is safe",
        },
        {
          ja: "NOTICEから注意喚起が届いたら、まず対策を行う",
          en: "If an alert arrives from NOTICE, take the recommended measures first",
        },
      ],
      correctIndexes: [0, 1, 3],
      explanation: {
        ja: "NOTICEは、推測されやすい管理用パスワードが設定されたIoT機器を調査して注意喚起を行い、対策として管理用パスワードを安全性の高いものにすることと、最新のファームウェアへの更新を挙げています。推測されやすいパスワードのままでは、乗っ取られて周りにも被害が及びます。",
        en: "NOTICE surveys IoT devices with easily guessed administrative passwords and alerts their users, recommending a strong administrative password and the latest firmware. A device left with a guessable password can be hijacked and used to harm others too.",
      },
    },
  ],
  sources: [
    {
      label: "Apple: Apple Intelligence & Privacy (2026-09-14)",
      url: "https://www.apple.com/legal/privacy/data/en/intelligence-engine/",
    },
    {
      label: "Apple: ChatGPT Extension & Privacy (2026-09-14)",
      url: "https://www.apple.com/legal/privacy/data/en/chatgpt-extension/",
    },
    {
      label: "Google: Gemini Apps Privacy Hub",
      url: "https://support.google.com/gemini/answer/13594961",
    },
    {
      label: "NOTICE（総務省・NICT・ICT-ISAC）: みんなで守る、IoT。",
      url: "https://notice.go.jp/",
    },
  ],
  lastVerified: "2026-10-10",
  glossaryRefs: ["on-device-processing", "private-cloud-compute", "notice-project", "inference", "open-weight"],
};
