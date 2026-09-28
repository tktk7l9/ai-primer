import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

// Converts lesson bodies (trusted Markdown authored in this repository) to HTML.
// remark-gfm enables GFM extensions such as tables and strikethrough.
// remark-rehype ignores raw HTML by default, so the output contains only Markdown-derived elements.
// Runs in a server component; only static HTML reaches the client.
const processor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkRehype)
  .use(rehypeStringify);

export function renderMarkdown(markdown: string): string {
  return String(processor.processSync(markdown));
}
