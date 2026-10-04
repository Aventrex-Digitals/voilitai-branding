export default function ConversationTimeline({
  className = '',
  steps = [
    { label: 'Caller', text: 'Books for tomorrow' },
    { label: 'AI Employee', text: 'Offers open slots' },
    { label: 'Action', text: 'Appointment scheduled' },
  ],
}) {
  return (
    <ol className={`flex flex-col gap-0 sm:flex-row sm:items-stretch ${className}`}>
      {steps.map((step, index) => (
        <li key={step.label} className="relative flex flex-1 flex-col sm:items-center">
          {index > 0 && (
            <span
              className="absolute left-4 top-0 h-full w-px bg-[var(--border)] sm:left-0 sm:top-4 sm:h-px sm:w-full"
              aria-hidden="true"
            />
          )}
          <div className="relative z-[1] flex gap-3 sm:flex-col sm:items-center sm:text-center">
            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] text-xs font-semibold text-violet">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="pb-6 sm:pb-0 sm:pt-3">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--fg-muted)]">
                {step.label}
              </p>
              <p className="mt-1 text-sm font-medium tracking-tight">{step.text}</p>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
