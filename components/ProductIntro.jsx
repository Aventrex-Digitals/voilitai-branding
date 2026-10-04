'use client';

import AnimateIn from '@/components/AnimateIn';
import CountUp from '@/components/CountUp';
import AiEmployeeCard from '@/components/product/AiEmployeeCard';
import Waveform from '@/components/Waveform';
import { STATS } from '@/lib/content';

const CAPABILITIES = [
  'Answer and qualify every inbound call',
  'Take action: book, update, and escalate',
  'Deploy without a developer',
];

export default function ProductIntro() {
  return (
    <section id="platform" className="relative overflow-hidden border-y border-[var(--border)] bg-[var(--band)]">
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background:
            'radial-gradient(ellipse 55% 50% at 15% 20%, var(--glow-a), transparent 60%), radial-gradient(ellipse 45% 40% at 90% 80%, var(--glow-b), transparent 55%)',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
          <AnimateIn>
            <p className="section-eyebrow">Product</p>
            <h2 className="mt-5 max-w-xl font-display text-[clamp(2rem,3.6vw,2.85rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-[var(--fg)]">
              A platform for building{' '}
              <span className="accent-italic">voice employees</span>
            </h2>
            <p className="mt-5 max-w-md text-[1.05rem] leading-[1.6] tracking-[-0.01em] text-[var(--fg-muted)]">
              Not a chatbot demo. A production system for answering calls, qualifying leads, and taking action.
            </p>

            <ul className="mt-8 space-y-3.5">
              {CAPABILITIES.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[0.95rem] leading-snug tracking-[-0.01em] text-[var(--fg)]"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet shadow-[0_0_0_3px_color-mix(in_srgb,var(--accent)_18%,transparent)]" />
                  {item}
                </li>
              ))}
            </ul>
          </AnimateIn>

          <AnimateIn delay={120} className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
            <div
              className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-[radial-gradient(ellipse_at_center,var(--glow-a),transparent_70%)] opacity-90"
              aria-hidden="true"
            />
            <div className="relative space-y-4">
              <AiEmployeeCard />
              <div className="premium-card overflow-hidden p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[var(--fg-muted)]">
                      Live line
                    </p>
                    <p className="mt-1 text-[0.9rem] font-semibold tracking-tight">
                      Inbound · Reception
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-violet/12 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-violet">
                    <span className="status-dot is-busy" />
                    On call
                  </span>
                </div>
                <Waveform className="mt-4 h-12" bars={28} />
              </div>
            </div>
          </AnimateIn>
        </div>

        <AnimateIn delay={180} className="mt-14">
          <div className="overflow-hidden rounded-[1.35rem] border border-[var(--border)] bg-[color-mix(in_srgb,var(--card)_88%,transparent)] shadow-[var(--shadow)] backdrop-blur-md">
            <dl className="grid grid-cols-2 divide-x divide-y divide-[var(--border)] lg:grid-cols-4 lg:divide-y-0">
              {STATS.map((stat) => (
                <div key={stat.label} className="px-6 py-6 sm:px-8">
                  <dd className="font-display text-[clamp(1.5rem,2.4vw,2rem)] font-semibold tracking-[-0.03em] tabular-nums leading-none">
                    <CountUp value={stat.value} />
                  </dd>
                  <dt className="mt-2 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-[var(--fg-muted)]">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
