import type { Dictionary } from "@/i18n/dictionaries";
import { NEWS_APP_URL } from "@/engine/site";

export function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>{dict.footer.disclaimer}</p>
        <p>
          <a href={NEWS_APP_URL} rel="noopener noreferrer" target="_blank">
            {dict.footer.newsLink} ↗
          </a>
        </p>
      </div>
    </footer>
  );
}
