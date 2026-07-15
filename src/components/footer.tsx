import type { Dictionary } from "@/i18n/dictionaries";

const NEWS_URL = "https://ai-news-feed-app.vercel.app";

export function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>{dict.footer.disclaimer}</p>
        <p>
          <a href={NEWS_URL} rel="noopener noreferrer" target="_blank">
            {dict.footer.newsLink} ↗
          </a>
        </p>
      </div>
    </footer>
  );
}
