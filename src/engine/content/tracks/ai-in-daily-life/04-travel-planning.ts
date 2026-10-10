import type { Lesson } from "@/engine/content/types";

export const travelPlanning: Lesson = {
  id: "ai-in-daily-life-04",
  slug: "travel-planning",
  title: {
    ja: "旅行の計画にAIを使うとき — たたき台は任せ、事実と予約は自分で",
    en: "Planning a Trip with AI: Let It Draft, but Verify the Facts and Book Yourself",
  },
  summary: {
    ja: "旅程のたたき台づくりはAIの得意分野だが、条件をすべて満たす計画を作るのはまだ難しく、営業時間や料金は違っていることがある。予約サイトのチェックポイント、電子渡航認証の代行サイトの罠、外務省のたびレジ。",
    en: "Drafting an itinerary is where AI shines, but plans that satisfy every constraint are still hard, and opening hours and prices can be wrong. Checkpoints for booking sites, the trap of travel-authorization proxy sites, and Japan's Tabi-Reg registration.",
  },
  body: {
    ja: `## たたき台は最高、事実確認と予約は別

「3泊4日で金沢、歴史と食をテーマに」と頼めば、チャットAIは数分で旅程を作ってくれます。ただ、AIが作る旅程は、文章としてもっともらしいことと、実際に成り立つことが別です。

### 「成り立つ旅程」はまだ難しい
2024年に機械学習の国際会議ICMLで発表されたTravelPlannerは、交通・宿・観光地などの約400万件のデータとそれを調べるツールをそろえた環境で、予算や日程などの条件を満たす旅行計画を言語モデルのエージェントが立てられるかを、1,225の課題で測るベンチマークです。すべての条件を満たす計画を作れた割合は、当時のGPT-4でも**わずか0.6%**にとどまりました。研究者らは、エージェントが課題から逸れたり、情報を集めるのに適切なツールを使えなかったり、複数の条件を同時に追えなかったりすると報告しています。モデルはその後も更新されていますが、旅程は「条件をすべて満たしているか」を人が確かめるものだと考えておきましょう（[エージェントの仕組み](/ja/learn/ai-agents/tool-use-loop)のレッスン参照）。

### 閉まっている店、違う営業時間
AIは、閉店した施設や変わった営業時間、違う料金を、現在のことのように書くことがあります（[ハルシネーション](/ja/learn/ai-basics/hallucination)、[よくある失敗パターン](/ja/learn/how-llms-work/failure-patterns)のレッスン参照）。検索と連動して答えるAIでも、出典のページに書かれていないことを答えたり、古いページを根拠にしたりします（[AIで調べ物をする](/ja/learn/ai-agents/research-with-ai)のレッスン参照）。旅程に出てきた施設は、営業時間・定休日・料金・予約の要否を、その施設の公式サイトか公式の観光情報で確かめます。

### 予約は、自分で、確かめて
国民生活センターは2025年3月、旅行予約サイトのチェックポイントとして、サイトの運営事業者が日本の事業者か海外の事業者かを確かめること、航空券や宿泊施設はプランや商品ごとにキャンセル条件などの契約内容が違うこと、予約確認メールはキャンセル条件などの契約内容が明記された大切な情報であることを挙げ、予約画面ややり取りの記録を保存するよう勧めています。困ったときは消費者ホットライン「188」や、海外の事業者とのトラブルなら越境消費者センター（CCJ）に相談できます。AIに予約の操作を任せるときも、確定と支払いの前には自分の目で条件を確かめ、確認メールを保存します（[定型作業の自動化](/ja/learn/ai-at-work/automating-routine-work)のレッスン参照）。

### 入国の条件は公式サイトで
ビザや電子渡航認証、パスポートの残存期間といった入国の条件は変わることがあり、AIの学習データは古いことがあります。渡航先の政府や大使館の公式サイトで確かめます。東京都消費生活総合センターには、米国の電子渡航認証ESTAを申請しようと「エスタ 申請」で検索し、一番上に表示されたサイトを公式だと思って申請したところ、申請費用は21ドルのつもりが150ドルを請求され、よく見ると「代行手数料129ドル」と小さく書かれていた、という相談が寄せられています（2024年7・8月号）。同センターは、公式サイトに似たデザインの申請代行サイトがあるため、申請の前に大使館のサイトなどで所定の費用と公式サイトのURLを確かめるよう勧めています。AIが示すリンクも、検索結果の広告も、そのまま信用しません。

### 現地の安全情報は外務省から
外務省の「たびレジ」に旅行の予定を登録すると、旅先の大使館や総領事館からの安全情報を無料で受け取れ、現地で事件や災害に巻き込まれたときの安否確認や支援にもつながります。

### 上手な使い方
1. **条件を全部書く**: 人数、日程、予算、移動手段、歩ける距離、食の制限。書かなかった条件は考慮されません。
2. **候補出しと比較に使う**: 「この3つのエリアの特徴を比べて」「雨の日の代案を」。
3. **たたき台を自分の情報で埋める**: 営業時間と料金は公式サイト、所要時間は地図アプリの実測で置き換える。
4. **予約は公式サイトか、信頼できる予約サイトで**: 運営事業者とキャンセル条件を確かめ、確認メールを保存する。
5. **当日の変更は現地の情報で**: 休館や運休は、施設や交通機関の公式の最新情報で。`,
    en: `## A great first draft; facts and bookings are another matter

Ask for "four days in Kanazawa, focused on history and food," and a chat AI produces an itinerary in minutes. But an itinerary that reads well and an itinerary that actually works are two different things.

### Plans that satisfy every constraint are still hard
TravelPlanner, presented in 2024 at the machine-learning conference ICML, is a benchmark that tests whether language-model agents can build travel plans meeting constraints such as budget and dates, using 1,225 tasks in a sandbox with nearly four million records of transport, lodging, and attractions and tools to search them. The share of plans that satisfied every constraint was **0.6%** even for GPT-4 at the time. The researchers report that agents struggle to stay on task, to use the right tools to collect information, and to keep track of multiple constraints. Models have been updated since, but treat an itinerary as something a person checks against every constraint (see the lesson on [how agents work](/en/learn/ai-agents/tool-use-loop)).

### Closed shops and wrong opening hours
An AI can describe a place that has closed, hours that have changed, or the wrong price as if they were current (see the [hallucination](/en/learn/ai-basics/hallucination) and [common failure patterns](/en/learn/how-llms-work/failure-patterns) lessons). Even AI that searches the web before answering can state things its sources don't say or rely on outdated pages (see the [researching with AI](/en/learn/ai-agents/research-with-ai) lesson). For every place in the itinerary, check the hours, closing days, prices, and whether booking is needed on the venue's official site or official tourist information.

### Book it yourself, and check
In March 2025, Japan's National Consumer Affairs Center listed checkpoints for travel booking sites: confirm whether the site's operator is a Japanese or an overseas business; remember that cancellation terms and other contract conditions differ by plan and product for flights and lodging; and treat the booking confirmation email as important information that sets out the contract terms, including cancellation conditions. It also recommends saving screenshots of booking screens and records of correspondence. If something goes wrong, you can contact the consumer hotline "188," or the Cross-border Consumer Center Japan (CCJ) for trouble with an overseas business. Even if you let an AI operate a booking, check the terms with your own eyes before confirming and paying, and keep the confirmation email (see the [automating routine work](/en/learn/ai-at-work/automating-routine-work) lesson).

### Entry rules come from official sites
Entry requirements — visas, electronic travel authorizations, passport validity — change, and an AI's training data may be out of date. Check them on the official sites of the destination's government or embassy. The Tokyo Metropolitan Consumer Affairs Center reports a case in which a traveler searching for "ESTA application" for a US trip applied on the top result, assuming it was official, and was charged 150 dollars instead of the 21-dollar application fee they expected; on closer inspection the site stated in small print a "service fee of 129 dollars" (July–August 2024 issue). Because proxy sites exist that look like the official one, the center advises confirming the official fee and the official site's URL on the embassy's website before applying. Don't take a link from an AI, or an ad in search results, at face value.

### Safety information from Japan's foreign ministry
Register your trip with the Ministry of Foreign Affairs' "Tabi-Reg" service and you receive safety information from the embassy or consulate at your destination free of charge; if you're caught up in an incident or disaster, it also helps the ministry confirm your safety and support you.

### Good ways to use AI
1. **State every constraint**: group size, dates, budget, transport, how far you can walk, dietary limits. Constraints you don't write down aren't considered.
2. **Use it to generate and compare options**: "Compare these three areas," "Give me rainy-day alternatives."
3. **Fill the draft with your own information**: replace hours and prices with the official site's, and travel times with a map app's.
4. **Book on official sites or booking sites you trust**: check the operator and the cancellation terms, and keep the confirmation email.
5. **Same-day changes from local sources**: closures and cancellations come from the venue's or operator's latest official information.`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "AIが作った旅程に「◯◯寺は毎日17時まで拝観できる」とある。どうするのが適切？",
        en: "The AI's itinerary says a temple is \"open for visits until 5 p.m. every day.\" What should you do?",
      },
      choices: [
        {
          ja: "寺の公式サイトや公式の観光情報で、拝観時間・休業日・料金を確かめる",
          en: "Check the hours, closing days, and fees on the temple's official site or official tourist information",
        },
        {
          ja: "AIに「本当に合っていますか？」と聞き直し、「はい」と答えたら信じる",
          en: "Ask the AI \"Are you sure?\" and trust it if it says yes",
        },
        {
          ja: "検索して最初に出てきた個人のブログの記述で確かめる",
          en: "Confirm it with the first personal blog that comes up in a search",
        },
      ],
      correctIndex: 0,
      explanation: {
        ja: "AIは変わった営業時間や閉まった施設を現在のことのように書くことがあり、聞き直しても自分の答えを確かめる手段を持ちません。施設の情報は公式サイトか公式の観光情報で確かめます。",
        en: "AI can present changed hours or closed venues as current, and asking again doesn't give it any way to verify its own answer. Check venue information on the official site or official tourist information.",
      },
    },
    {
      kind: "multi",
      prompt: {
        ja: "海外旅行の準備として適切なものをすべて選んでください。",
        en: "Which of these are sound preparations for a trip abroad? Select all that apply.",
      },
      choices: [
        {
          ja: "電子渡航認証は、大使館などのサイトで所定の費用と公式サイトのURLを確かめてから申請する",
          en: "Before applying for an electronic travel authorization, confirm the official fee and the official site's URL on the embassy's website",
        },
        {
          ja: "予約確認メールと予約画面のスクリーンショットを保存しておく",
          en: "Keep the booking confirmation email and screenshots of the booking screens",
        },
        {
          ja: "検索結果の一番上に出たサイトなら公式なので、そのまま申請する",
          en: "The top search result must be the official site, so apply there",
        },
        {
          ja: "外務省の「たびレジ」に旅行の予定を登録する",
          en: "Register the trip with the foreign ministry's Tabi-Reg service",
        },
      ],
      correctIndexes: [0, 1, 3],
      explanation: {
        ja: "検索結果の上位には公式サイトに似た申請代行サイトが出ることがあり、東京都の消費生活センターには21ドルのつもりが150ドルを請求された相談が寄せられています。確認メールは契約内容が明記された大切な情報で、たびレジに登録すると旅先の安全情報を無料で受け取れます。",
        en: "Proxy sites resembling the official one can appear at the top of search results — Tokyo's consumer center reports a traveler charged 150 dollars instead of the expected 21. The confirmation email records the contract terms, and Tabi-Reg delivers safety information for your destination free of charge.",
      },
    },
  ],
  sources: [
    {
      label: "Xie et al.: TravelPlanner: A Benchmark for Real-World Planning with Language Agents (ICML 2024; arXiv 2402.01622)",
      url: "https://arxiv.org/abs/2402.01622",
    },
    {
      label: "国民生活センター: 便利な旅行予約サイトでトラブルに！？トラブル防止のための旅行予約サイトのチェックポイント（2025-03-18）",
      url: "https://www.kokusen.go.jp/news/data/n-20250318_1.html",
    },
    {
      label: "東京都消費生活総合センター: 海外旅行をするときは、電子渡航認証（ESTA（エスタ）等）の申請代行サイトに注意しましょう（東京くらしねっと 2024年7・8月号）",
      url: "https://www.shouhiseikatu.metro.tokyo.lg.jp/kurashi/2407_08/soudan.html",
    },
    {
      label: "外務省: たびレジ（海外旅行登録）",
      url: "https://www.ezairyu.mofa.go.jp/tabireg/index.html",
    },
  ],
  lastVerified: "2026-10-10",
  glossaryRefs: ["hallucination", "grounding", "tabi-reg", "electronic-travel-authorization", "consumer-hotline-188"],
};
