import { renderMarkdown } from "@/engine/markdown/render";

/** Renders trusted content converted from Markdown to HTML on the server. */
export function LessonBody({ markdown }: { markdown: string }) {
  return (
    <div
      className="prose"
      // biome-ignore lint: lesson bodies are only trusted Markdown from this repository
      dangerouslySetInnerHTML={{ __html: renderMarkdown(markdown) }}
    />
  );
}
