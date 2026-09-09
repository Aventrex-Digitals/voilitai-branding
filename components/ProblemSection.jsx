import AnimateIn from '@/components/AnimateIn';

function FlowStep({ label, tone = 'neutral' }) {
  const tones = {
    ok: 'border-[var(--border)] bg-[var(--bg-elevated)] text-[var(--fg)]',
    warn: 'border-amber-400/40 bg-amber-400/10 text-[var(--fg)]',
    bad: 'border-rose-500/35 bg-rose-500/10 text-rose-600 dark:text-rose-300',
  };

  return (
    <span
      className={`inline-flex min-w-[6.5rem] items-center justify-center rounded-full border px-3 py-1.5 text-center text-xs font-semibold ${tones[tone]}`}
    >
      {label}
    </span>
  );
}

function Arrow() {
  return (
    <span className="hidden text-[var(--fg-muted)] sm:inline" aria-hidden="true">
      →
    </span>
  );
}

function MissedCallFlow() {
  return (
    <div className="flex h-44 flex-col items-center justify-center gap-3 rounded-2xl border border-[var(--border)] bg-[color-mix(in_srgb,var(--fg)_3%,transparent)] px-3">
      <div className="flex flex-wrap items-center justify-center gap-2">
        <FlowStep label="Incoming call" tone="ok" />
        <Arrow />
        <FlowStep label="Unattended" tone="warn" />
        <Arrow />
        <FlowStep label="Missed" tone="bad" />
      </div>
      <p className="max-w-[16rem] text-center text-xs font-medium text-rose-600 dark:text-rose-300">
        Revenue lost · customer switches to a competitor
      </p>
    </div>
  );
}

function HoldScreen() {
  return (
    <div className="flex h-44 items-center justify-center rounded-2xl border border-[var(--border)] bg-[color-mix(in_srgb,var(--fg)_3%,transparent)] px-4">
      <div className="w-full max-w-[13.5rem] rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-4 shadow-[0_10px_28px_rgba(11,18,32,0.08)]">
        <div className="flex items-center justify-between text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-amber-600 dark:text-amber-400">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-500" />
            On hold
          </span>
          <span>04:12</span>
        </div>
        <div className="mt-3 flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-violet/15 text-sm font-bold text-violet-deep">
            JD
          </span>
          <div>
            <p className="text-sm font-semibold">John Doe</p>
            <p className="text-xs text-[var(--fg-muted)]">Waiting for an agent</p>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <span className="rounded-full bg-amber-500/15 py-1.5 text-center text-[0.65rem] font-bold uppercase tracking-[0.12em] text-amber-700 dark:text-amber-300">
            Hold
          </span>
          <span className="rounded-full bg-rose-500/15 py-1.5 text-center text-[0.65rem] font-bold uppercase tracking-[0.12em] text-rose-600 dark:text-rose-300">
            End
          </span>
        </div>
      </div>
    </div>
  );
}

function OverflowCalls() {
  const calls = [
    { name: 'Inbound · +1 (415) 882-1044', status: 'Ringing', dropped: false },
    { name: 'Inbound · +1 (312) 441-2290', status: 'Dropped', dropped: true },
    { name: 'Inbound · +1 (646) 901-7741', status: 'Dropped', dropped: true },
  ];

  return (
    <div className="flex h-44 items-center justify-center rounded-2xl border border-[var(--border)] bg-[color-mix(in_srgb,var(--fg)_3%,transparent)] px-4">
      <div className="w-full max-w-[16.5rem]">
        {calls.map((call, index) => (
          <div
            key={call.name}
            className={`rounded-xl border bg-[var(--bg-elevated)] px-3 py-2 shadow-[0_8px_20px_rgba(11,18,32,0.08)] ${
              call.dropped ? 'border-rose-500/30' : 'border-[var(--border)]'
            } ${index > 0 ? '-mt-1' : ''}`}
            style={{ zIndex: calls.length - index, position: 'relative' }}
          >
            <div className="flex items-center justify-between gap-2">
              <p className="truncate text-xs font-medium">{call.name}</p>
              <span
                className={`shrink-0 rounded-full px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-[0.1em] ${
                  call.dropped
                    ? 'bg-rose-500/15 text-rose-600 dark:text-rose-300'
                    : 'bg-violet/12 text-violet-deep'
                }`}
              >
                {call.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const PROBLEMS = [
  {
    title: 'Missed Calls Mean Lost Revenue',
    text: "When customers can't get through, they abandon purchases, switch to competitors, and rarely try again — directly impacting your bottom line.",
    Visual: MissedCallFlow,
  },
  {
    title: 'Long Wait Times Damage Customer Trust',
    text: 'Customers expect instant responses. Being put on hold creates frustration, lowers satisfaction, and increases repeat follow-ups.',
    Visual: HoldScreen,
  },
  {
    title: "Support Teams Don't Scale With Demand",
    text: 'As call volume grows, teams struggle to keep up. Hiring and training new agents takes weeks, while demand increases overnight.',
    Visual: OverflowCalls,
  },
];

export default function ProblemSection() {
  return (
    <section id="the-problem" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <AnimateIn className="max-w-3xl">
        <p className="section-eyebrow">The Problem</p>
        <h2 className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
          Enterprise sales teams lose{' '}
          <span className="accent-text">40%</span> of leads before proposal
        </h2>
      </AnimateIn>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {PROBLEMS.map((problem, i) => (
          <AnimateIn key={problem.title} delay={i * 80} className="premium-card flex h-full flex-col p-6">
            <problem.Visual />
            <h3 className="mt-5 text-lg font-semibold">{problem.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--fg-muted)]">{problem.text}</p>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
