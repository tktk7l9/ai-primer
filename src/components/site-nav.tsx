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
  return (
    <nav className="site-nav" aria-label="Site">
      <div className="site-nav-links">
        {items.map((item) => (
          <Link
            key={item.section}
            href={item.href}
            aria-current={item.section === current ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <LocaleSwitcher locale={locale} label={labels.switchLocale} />
    </nav>
  );
}
