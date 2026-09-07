export default function Marquee({ items }) {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden" aria-hidden="true">
      <div className="marquee-track gap-10 px-4">
        {row.map((item, index) => (
          <span key={`${item}-${index}`} className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--fg-muted)]">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
