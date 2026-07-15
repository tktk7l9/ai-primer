import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { LocaleSwitcher } from "./locale-switcher";

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <header className="site-header">
      <div className="container">
        <Link href={`/${locale}`} className="brand">
          <svg className="brand-mark" viewBox="0 0 32 32" width="22" height="22" aria-hidden="true">
            <rect width="32" height="32" rx="7" fill="currentColor" />
            <g stroke="var(--paper)" strokeWidth="1.6" strokeLinecap="round">
              <line x1="10" y1="11" x2="22" y2="11" />
              <line x1="10" y1="11" x2="16" y2="22" />
              <line x1="22" y1="11" x2="16" y2="22" />
            </g>
            <circle cx="10" cy="11" r="2.4" fill="var(--paper)" />
            <circle cx="22" cy="11" r="2.4" fill="var(--paper)" />
            <circle cx="16" cy="22" r="2.8" fill="var(--paper)" />
          </svg>
          <span>AI Primer</span>
        </Link>
        <nav className="site-nav" aria-label="Site">
          <Link href={`/${locale}`}>{dict.nav.home}</Link>
          <Link href={`/${locale}/models`}>{dict.nav.models}</Link>
          <Link href={`/${locale}/timeline`}>{dict.nav.timeline}</Link>
          <Link href={`/${locale}/glossary`}>{dict.nav.glossary}</Link>
          <LocaleSwitcher locale={locale} label={dict.nav.switchLocale} />
        </nav>
      </div>
    </header>
  );
}
