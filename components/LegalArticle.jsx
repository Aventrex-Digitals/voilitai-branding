export default function LegalArticle({ toc = [], children }) {
  return (
    <article className="article-body mx-auto max-w-3xl px-4 pb-24 sm:px-6 lg:px-8">
      {toc.length > 0 ? (
        <nav className="legal-toc" aria-label="On this page">
          <p className="font-display m-0 text-sm font-semibold tracking-tight text-[var(--fg)]">
            On this page
          </p>
          <ol>
            {toc.map((item, index) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>
                  {index + 1}. {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      ) : null}
      {children}
    </article>
  );
}
