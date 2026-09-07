export default function BlogToc({ items = [] }) {
  if (!items.length) return null;

  return (
    <nav className="blog-toc" aria-label="Table of contents">
      <p className="font-display text-sm font-semibold tracking-tight text-[var(--fg)]">
        On this page
      </p>
      <ol>
        {items.map((item) => (
          <li key={item.id} className={item.level === 3 ? 'toc-h3' : 'toc-h2'}>
            <a href={`#${item.id}`}>{item.label}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
