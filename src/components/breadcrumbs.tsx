import Link from "next/link";

export interface Crumb {
  readonly label: string;
  readonly href: string;
}

/**
 * Visible "where am I / how do I get back" trail (SHIG 59, 60, 82).
 * The current page itself is the h1, so only its ancestors are listed.
 */
export function Breadcrumbs({ items, label }: { items: readonly Crumb[]; label: string }) {
  return (
    <nav className="breadcrumbs" aria-label={label}>
      <ol>
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
