import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import en from "@/i18n/dictionaries/en";

vi.mock("next/navigation", () => ({
  notFound: () => {
    throw new Error("NEXT_NOT_FOUND");
  },
  usePathname: () => "/en",
}));

const { default: LocaleLayout, generateMetadata, generateStaticParams } = await import("./layout");
const params = (locale: string) => ({ params: Promise.resolve({ locale }) });

describe("LocaleLayout", () => {
  it("wraps the page in the header, main region and footer, tagged with the page language", async () => {
    const { container } = render(
      await LocaleLayout({ children: <p>本文</p>, ...params("en") }),
    );
    expect(container.firstElementChild).toHaveAttribute("lang", "en");
    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("main")).toHaveTextContent("本文");
    expect(screen.getByRole("contentinfo")).toHaveTextContent(en.footer.disclaimer);
  });

  it("rejects unknown locales with a 404", async () => {
    await expect(LocaleLayout({ children: null, ...params("fr") })).rejects.toThrow("NEXT_NOT_FOUND");
  });

  it("pre-renders both languages", () => {
    expect(generateStaticParams().map((p) => p.locale).sort()).toEqual(["en", "ja"]);
  });

  it("builds per-language metadata with Open Graph locale", async () => {
    const ja = await generateMetadata(params("ja"));
    expect(ja.openGraph).toMatchObject({ locale: "ja_JP" });
    const enMeta = await generateMetadata(params("en"));
    expect(enMeta.openGraph).toMatchObject({ locale: "en_US", title: en.meta.title });
    expect(await generateMetadata(params("fr"))).toEqual({});
  });
});
