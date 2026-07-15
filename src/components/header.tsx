import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { LocaleSwitcher } from "./locale-switcher";

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <header className="site-header">
      <div className="container">
        <Link href={`/${locale}`} className="brand">
          <span className="brand-mark">AI</span>
          <span>Primer</span>
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
