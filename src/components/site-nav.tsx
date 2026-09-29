"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type NavSection, navSection } from "@/engine/nav";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { LocaleSwitcher } from "./locale-switcher";

/** Header links; the current section gets aria-current so it is highlighted (SHIG 59). */
export function SiteNav({ locale, labels }: { locale: Locale; labels: Dictionary["nav"] }) {
  const current = navSection(usePathname());
  const items: readonly { section: NavSection; href: string; label: string }[] = [
    { section: "home", href: `/${locale}`, label: labels.home },
    { section: "models", href: `/${locale}/models`, label: labels.models },
    { section: "timeline", href: `/${locale}/timeline`, label: labels.timeline },
    { section: "glossary", href: `/${locale}/glossary`, label: labels.glossary },
  ];
  // The locale switch sits outside <nav> so that on phones it can stay on the
  // brand row while the section links get their own line (SHIG 85).
  return (
    <>
      <nav className="site-nav" aria-label={labels.siteNav}>
        {items.map((item) => (
          <Link
            key={item.section}
            href={item.href}
            aria-current={item.section === current ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <LocaleSwitcher locale={locale} label={labels.switchLocale} />
    </>
  );
}
