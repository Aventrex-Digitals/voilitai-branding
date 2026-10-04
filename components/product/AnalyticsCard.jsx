export default function AnalyticsCard({
  className = '',
  metrics = [
    { label: 'Calls', value: '1,248' },
    { label: 'Conversations', value: '986' },
    { label: 'Appointments', value: '312' },
    { label: 'Leads', value: '184' },
  ],
}) {
  return (
    <div className={`premium-card flex h-full flex-col p-5 ${className}`}>
      <div className="flex items-center justify-between gap-3">
        <p className="text-[0.9rem] font-semibold tracking-tight">Automation activity</p>
        <span className="shrink-0 text-[0.7rem] font-medium uppercase tracking-[0.1em] text-[var(--fg-muted)]">
          30 days
        </span>
      </div>
      <dl className="mt-5 grid flex-1 grid-cols-2 gap-x-4 gap-y-5 content-center">
        {metrics.map((metric) => (
          <div key={metric.label} className="min-w-0">
            <dd className="metric-value truncate">{metric.value}</dd>
            <dt className="mt-1 text-[0.7rem] font-medium uppercase tracking-[0.1em] text-[var(--fg-muted)]">
              {metric.label}
            </dt>
          </div>
        ))}
      </dl>
    </div>
  );
}
