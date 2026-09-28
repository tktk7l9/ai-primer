import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { FreshnessBadge } from "./freshness-badge";
import ja from "@/i18n/dictionaries/ja";

function daysAgo(days: number): string {
  const d = new Date();
  d.setDate(d.getDate() - days);
  return d.toISOString().slice(0, 10);
}

describe("FreshnessBadge", () => {
  it("90日以内は data-stale=false で警告タイトルを持たない", () => {
    render(<FreshnessBadge lastVerified={daysAgo(10)} locale="ja" dict={ja} />);
    const badge = screen.getByText(new RegExp(ja.lesson.lastVerified));
    expect(badge).toHaveAttribute("data-stale", "false");
    expect(screen.queryByText(ja.lesson.staleNotice)).not.toBeInTheDocument();
  });

  it("90日超は data-stale=true で警告文を画面に出す", () => {
    render(<FreshnessBadge lastVerified={daysAgo(120)} locale="ja" dict={ja} />);
    const badge = screen.getByText(new RegExp(ja.lesson.lastVerified));
    expect(badge).toHaveAttribute("data-stale", "true");
    // Visible text, not a hover-only title, so touch users can read it (SHIG 31, 96).
    expect(screen.getByText(ja.lesson.staleNotice)).toBeVisible();
  });
});
