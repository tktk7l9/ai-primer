import { renderMarkdown } from "@/engine/markdown/render";

/** サーバー側で Markdown → HTML 変換した信頼済みコンテンツを描画する。 */
export function LessonBody({ markdown }: { markdown: string }) {
  return (
    <div
      className="prose"
      // biome-ignore lint: レッスン本文はリポジトリ内の信頼済み Markdown のみ
      dangerouslySetInnerHTML={{ __html: renderMarkdown(markdown) }}
    />
  );
}
