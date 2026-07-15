import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

// レッスン本文（リポジトリ内で著述された信頼済み Markdown）を HTML へ変換する。
// remark-rehype は生 HTML を既定で無視するため、出力は Markdown 由来の要素のみ。
// サーバーコンポーネントで実行され、クライアントには静的 HTML だけが届く。
const processor = unified().use(remarkParse).use(remarkRehype).use(rehypeStringify);

export function renderMarkdown(markdown: string): string {
  return String(processor.processSync(markdown));
}
