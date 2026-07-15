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
          <LocaleSwitcher locale={locale} label={dict.nav.switchLocale} />
        </nav>
      </div>
    </header>
  );
}
