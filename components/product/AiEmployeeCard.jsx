export default function AiEmployeeCard({
  name = 'Ava',
  role = 'Reception',
  voice = 'Neural · English',
  status = 'active',
  className = '',
}) {
  const live = status === 'active';

  return (
    <div className={`premium-card p-5 ${className}`}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-full bg-violet/15 text-sm font-semibold tracking-tight text-violet">
            {name.slice(0, 2).toUpperCase()}
            <span
              className={`absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-[var(--card)] ${
                live ? 'bg-emerald-400' : 'bg-[var(--fg-muted)]'
              }`}
            />
          </span>
          <div>
            <p className="text-[0.95rem] font-semibold tracking-tight">{name}</p>
            <p className="mt-0.5 text-[0.8rem] text-[var(--fg-muted)]">{role}</p>
          </div>
        </div>
        <span
          className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] ${
            live
              ? 'border-emerald-400/25 bg-emerald-400/10 text-emerald-500'
              : 'border-[var(--border)] text-[var(--fg-muted)]'
          }`}
        >
          <span className={`status-dot ${live ? '' : 'opacity-40'}`} />
          {live ? 'Active' : 'Idle'}
        </span>
      </div>
      <dl className="mt-5 grid grid-cols-2 gap-3 border-t border-[var(--border)] pt-4">
        <div>
          <dt className="text-[0.65rem] font-medium uppercase tracking-[0.12em] text-[var(--fg-muted)]">
            Voice
          </dt>
          <dd className="mt-1 text-[0.85rem] font-medium tracking-tight">{voice}</dd>
        </div>
        <div>
          <dt className="text-[0.65rem] font-medium uppercase tracking-[0.12em] text-[var(--fg-muted)]">
            Channel
          </dt>
          <dd className="mt-1 text-[0.85rem] font-medium tracking-tight">Phone + SMS</dd>
        </div>
      </dl>
    </div>
  );
}
