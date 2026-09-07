export default function FaqList({ items }) {
  return (
    <div className="divide-y divide-[var(--border)]">
      {items.map((item) => (
        <details key={item.q} className="faq-item">
          <summary>
            <h3 className="text-base font-semibold">{item.q}</h3>
          </summary>
          <p className="pb-5 leading-relaxed text-[var(--fg-muted)]">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
