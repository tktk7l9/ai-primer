import type { Lesson } from "@/engine/content/types";

export const spreadsheetsAndData: Lesson = {
  id: "ai-at-work-04",
  slug: "spreadsheets-and-data",
  title: {
    ja: "表計算とデータ分析 — 数字は自分で確かめる",
    en: "Spreadsheets and Data Analysis: Check the Numbers Yourself",
  },
  summary: {
    ja: "数式づくり、表計算ソフトのAI機能、コードを実行する分析。どれも便利だが、計算が合っているかと、どのデータを渡したかは自分で確かめる。",
    en: "Formula help, built-in spreadsheet AI, and analysis that runs code are all useful — but checking the math, and what data you handed over, is still up to you.",
  },
  body: {
    ja: `## 表計算でのAIの使い方は3つ

1. **数式を作ってもらう・読み解いてもらう**: 「A列の日付から月ごとに売上を合計する式」「この式は何をしているか」など。できた式は、答えの分かっている小さなデータで試してから使います。
2. **表計算ソフトに組み込まれたAI機能**: 2026年10月時点のヘルプによると、Googleスプレッドシートでは、セルに \`=AI()\` と書いてGeminiに文章の生成・要約・分類をさせられます。回答は文章に限られ、この関数はスプレッドシート全体やGoogleドライブのほかのファイルを参照しません。参照しているセルが変わっても自動では更新されず、いつ更新するかを自分で決める必要があります。ExcelのCopilotについてMicrosoftは、間違えたり、情報を誤って解釈したり、不正確な結果を出したりすることがあるとして、金融・法律・医療といったセンシティブな分野の判断に使うのは避け、作られたものは頼る前に見直して確かめるよう求めています。こうした機能や対応プランは入れ替わりが速いので、使う前に公式ヘルプで確かめてください。
3. **コードを実行して分析する**: ファイルを渡すと、AIが分析用のプログラムを書き、隔離された環境（サンドボックス）で実際に動かして、集計・表・グラフを返す方式です。たとえばAnthropicのAPIのコード実行ツールは、サンドボックスのコンテナでPythonやbashのコードを動かしてデータを分析し、ファイルを作ります。このコンテナはインターネットに接続しません。

### 数字を確かめる
LLMは電卓のように厳密に計算する仕組みを持たないため、会話の中で答えた数字は間違えることがあります（[LLMのよくある失敗パターン](/ja/learn/how-llms-work/failure-patterns)のレッスン参照）。コードを実行する方式なら計算そのものは正確でも、**どのデータを、どう処理したか**を誤れば結果は誤ります。たとえば次のような誤りです。
- 列の取り違え（税込と税抜、金額と数量）
- 絞り込みの誤り（期間・部署・重複の扱い）
- 空欄や「N/A」の扱い（勝手に0にする、行ごと落とす）
- 単位や桁の取り違え（千円単位の表を円として扱う）

確かめ方:
1. **使ったコードと手順を見せてもらう**: どの列を使い、どんな条件で絞り込み、何行が対象になったか。
2. **答えの分かっている数字と照らす**: 元の表の合計や件数を自分で関数（SUM・COUNTなど）で出し、AIの結果と一致するか確かめる。
3. **数行を手でたどる**: 結果のうち数件を、元のデータで追いかける。
4. **グラフは軸と単位を見る**: 縦軸がどこから始まっているか、単位や期間は合っているか。
5. **再現できるようにする**: 同じ依頼でも、分析の手順が毎回同じになるとは限りません（[推論とtemperature](/ja/learn/how-llms-work/inference-temperature)のレッスン参照）。報告に使う数字は、確かめたコードや数式を残しておきます。

### 渡すデータに注意
- **ファイルを渡すことは、中身をすべて渡すこと**: Microsoftは、ブックには非表示の行・列・ワークシートが含まれることがあり、そのまま配ると、受け取った人が再表示して中身を見られると説明しています。ピボットテーブルなどのキャッシュ、コメント、ドキュメントのプロパティも残ります。渡す前にコピーを作り、「ドキュメント検査」などで不要な情報を取り除き、必要な列だけを残します（Microsoftは、取り除いたデータは元に戻せないことがあるため、ドキュメント検査はコピーに対して使うよう勧めています）。
- **個人や取引先が特定できる情報を減らす**: 氏名を記号に置き換える、集計済みの数字だけを渡す。数式を作ってもらうだけなら、本物と同じ形のダミーデータで足ります。職場で認められたツールを使うことも前提です（[仕事でAIを使うときの情報の扱い](/ja/learn/society/data-privacy-at-work)のレッスン参照）。
- **外から受け取ったファイルは「データ」として扱う**: セルの中に、AIへの指示が仕込まれていることもあります（[プロンプトインジェクション](/ja/learn/ai-agents/prompt-injection)のレッスン参照）。`,
    en: `## Three ways AI helps with spreadsheets

1. **Writing and explaining formulas**: "a formula that totals sales by month from the dates in column A," "what does this formula do?" Test any formula on a small sample whose answer you already know before you rely on it.
2. **AI built into the spreadsheet**: according to Google's help as of October 2026, in Google Sheets you can type \`=AI()\` in a cell to have Gemini generate, summarize, or categorize text. Responses are limited to text, and the function doesn't have access to your entire spreadsheet or to other files in your Google Drive. When the cells it refers to change, it doesn't update on its own — you decide when to refresh. Of Copilot in Excel, Microsoft says it can make mistakes, misinterpret information, or produce inaccurate results; it advises against using Copilot for decisions in sensitive areas such as finance, legal, or medical topics, and asks you to review and verify anything Copilot creates before relying on it. These features and the plans that include them change quickly, so check the official help before you use them.
3. **Analysis that runs code**: you hand over a file, and the AI writes an analysis program, actually runs it in an isolated environment (a sandbox), and returns totals, tables, and charts. Anthropic's code execution tool for its API, for example, runs Python and bash code in a sandboxed container to analyze data and generate files. The container has no internet access.

### Checking the numbers
LLMs have no built-in way to calculate precisely like a calculator, so numbers they state in conversation can be wrong (see the lesson on [failure patterns](/en/learn/how-llms-work/failure-patterns)). When the AI runs code, the arithmetic itself is exact — but if it picks the wrong data or processes it the wrong way, the result is still wrong. Typical mistakes:
- Mixing up columns (tax included vs. excluded, amount vs. quantity)
- Filtering wrongly (date range, department, duplicates)
- Mishandling blanks or "N/A" (silently treating them as zero, or dropping whole rows)
- Confusing units or scale (treating a table in thousands of yen as yen)

How to check:
1. **Ask to see the code and the steps**: which columns it used, how it filtered, how many rows were included.
2. **Compare with numbers you know**: compute the source table's total or row count yourself with a function (SUM, COUNT) and confirm the AI's result matches.
3. **Trace a few rows by hand**: follow a handful of results back to the source data.
4. **Read the axes and units of charts**: where does the vertical axis start, and are the units and period right?
5. **Make it reproducible**: the same request won't necessarily produce the same analysis steps every time (see the lesson on [inference and temperature](/en/learn/how-llms-work/inference-temperature)). For any figure that goes into a report, keep the code or formula you checked.

### Watch what data you hand over
- **Handing over a file hands over everything in it**: Microsoft explains that workbooks can contain hidden rows, columns, and entire worksheets, and that people who receive a copy might unhide them and see the data. Cached data for PivotTables and similar features, comments, and document properties come along too. Before sharing, make a copy, strip what isn't needed with a tool like the Document Inspector, and keep only the columns you need. (Microsoft recommends running the Document Inspector on a copy, because removed data can't always be restored.)
- **Reduce what identifies people or clients**: replace names with placeholders, or share only aggregated figures. If all you need is a formula, dummy data in the same shape as the real thing is enough. Using a tool your workplace has approved is a given (see the lesson on [handling information at work](/en/learn/society/data-privacy-at-work)).
- **Treat files from outside as data**: a cell can contain instructions planted for the AI (see the [prompt injection](/en/learn/ai-agents/prompt-injection) lesson).`,
  },
  quiz: [
    {
      kind: "single",
      prompt: {
        ja: "AIにファイルを分析させたところ「売上合計は1,234万円」と答えた。最初にすべき確認は？",
        en: "You ask AI to analyze a file, and it reports \"total sales: 12.34 million yen.\" What should you check first?",
      },
      choices: [
        {
          ja: "元の表の合計を自分で関数で出し、一致するか確かめる",
          en: "Compute the source table's total yourself with a function and see whether it matches",
        },
        {
          ja: "同じ質問をもう一度して、同じ答えが返るか見る",
          en: "Ask the same question again and see whether you get the same answer",
        },
        { ja: "グラフがきれいに描けているかを見る", en: "Check whether the chart looks clean" },
      ],
      correctIndex: 0,
      explanation: {
        ja: "答えの分かっている数字と照らすのが確実です。同じ答えが返っても、同じ誤り（列や絞り込みの取り違え）を繰り返しているだけかもしれません。",
        en: "Checking against a number you can compute yourself is the reliable test. Getting the same answer twice may just mean the same mistake — a wrong column or filter — was repeated.",
      },
    },
    {
      kind: "boolean",
      prompt: {
        ja: "Excelのブックを渡しても、非表示にしたシートや列の中身は相手に伝わらない。",
        en: "If you share an Excel workbook, the contents of hidden sheets and columns stay out of the recipient's reach.",
      },
      answer: false,
      explanation: {
        ja: "非表示の行・列・ワークシートは、受け取った人が再表示できます。渡す前にコピーを作り、不要な情報を取り除きましょう。",
        en: "Hidden rows, columns, and worksheets can be unhidden by whoever receives the file. Make a copy and strip what isn't needed before you share it.",
      },
    },
  ],
  sources: [
    {
      label: "Google Docs Editors Help: Use the AI function in Google Sheets",
      url: "https://support.google.com/docs/answer/15877199?hl=en",
    },
    {
      label: "Microsoft Support: Frequently asked questions about Copilot in Excel",
      url: "https://support.microsoft.com/en-us/excel/copilot/frequently-asked-questions-about-copilot-in-excel",
    },
    {
      label: "Anthropic Docs: Code execution tool",
      url: "https://platform.claude.com/docs/en/agents-and-tools/tool-use/code-execution-tool",
    },
    {
      label: "Microsoft Support: Remove hidden data and personal information by inspecting documents, presentations, or workbooks",
      url: "https://support.microsoft.com/en-us/office/remove-hidden-data-and-personal-information-by-inspecting-documents-presentations-or-workbooks-356b7b5d-77af-44fe-a07f-9aa4d085966f",
    },
  ],
  lastVerified: "2026-10-07",
  glossaryRefs: ["code-execution", "temperature", "prompt-injection"],
};
