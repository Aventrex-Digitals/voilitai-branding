import Link from 'next/link';

export default function Breadcrumbs({ items, align = 'center' }) {
  if (!items?.length) return null;

  return (
    <nav aria-label="Breadcrumb" className={align === 'left' ? 'mb-5' : 'mb-5'}>
      <ol
        className={`flex flex-wrap items-center gap-1.5 text-xs text-[var(--fg-muted)] ${
          align === 'left' ? 'justify-start' : 'justify-center'
        }`}
      >
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={item.path} className="inline-flex items-center gap-1.5">
              {index > 0 && <span aria-hidden="true">/</span>}
              {last ? (
                <span aria-current="page" className="font-medium text-[var(--fg)]">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="transition hover:text-violet-deep">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
