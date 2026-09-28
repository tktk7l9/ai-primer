import { isLocale } from "@/i18n/config";

export type NavSection = "home" | "models" | "timeline" | "glossary";

/**
 * Which header item a pathname belongs to, so the header can mark it with
 * aria-current (SHIG 59). Tracks and lessons live under the course ("home").
 */
export function navSection(pathname: string | null): NavSection | null {
  const [, locale, section] = (pathname ?? "").split("/");
  if (!locale || !isLocale(locale)) return null;
  if (!section || section === "learn") return "home";
  if (section === "models" || section === "timeline" || section === "glossary") return section;
  return null;
}
