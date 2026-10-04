import AnimateIn from '@/components/AnimateIn';
import Icon from '@/components/Icon';

const REASONS = [
  {
    icon: 'phone',
    title: 'Always on',
    text: 'Answer every call and follow-up without staffing nights and weekends.',
    points: ['24/7 coverage', 'No hold queues', 'Missed-call recovery'],
  },
  {
    icon: 'bolt',
    title: 'Action, not chat',
    text: 'Book appointments, update records, and hand off with full conversation context.',
    points: ['Live booking', 'CRM updates', 'Warm human handoff'],
  },
  {
    icon: 'shield',
    title: 'Your rules',
    text: 'Control knowledge, tone, escalation, and exactly what the employee is allowed to do.',
    points: ['Custom knowledge', 'Escalation paths', 'Brand-safe replies'],
  },
];

export default function WhyVoilitSection() {
  return (
    <section id="why-voilit" className="relative scroll-mt-28 overflow-hidden border-y border-[var(--border)] bg-[var(--band)]">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            'radial-gradient(ellipse 50% 45% at 15% 15%, var(--glow-a), transparent 55%), radial-gradient(ellipse 40% 35% at 90% 85%, var(--glow-b), transparent 50%)',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
          <AnimateIn>
            <p className="section-eyebrow">Why VoilitAI</p>
            <h2 className="mt-5 max-w-xl font-display text-[clamp(2rem,3.6vw,2.85rem)] font-semibold leading-[1.12] tracking-[-0.03em]">
              Built for businesses that live on the{' '}
              <span className="accent-italic">phone</span>
            </h2>
          </AnimateIn>
          <AnimateIn delay={80}>
            <p className="max-w-md text-[1.05rem] leading-[1.6] tracking-[-0.01em] text-[var(--fg-muted)] lg:justify-self-end lg:text-right">
              VoilitAI is not a generic chatbot wrapper. It is a production voice employee platform
              designed for real calls, real workflows, and real revenue.
            </p>
          </AnimateIn>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3 md:gap-5 lg:mt-14">
          {REASONS.map((item, i) => (
            <AnimateIn key={item.title} delay={i * 80}>
              <article className="premium-card group flex h-full flex-col p-6 sm:p-7">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] text-violet transition duration-300 group-hover:border-violet/35 group-hover:bg-violet/10">
                  <Icon name={item.icon} className="h-4 w-4" />
                </span>

                <h3 className="mt-6 font-display text-[1.35rem] font-semibold tracking-[-0.025em] sm:text-[1.45rem]">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed tracking-[-0.01em] text-[var(--fg-muted)]">
                  {item.text}
                </p>

                <ul className="mt-6 space-y-2 border-t border-[var(--border)] pt-4">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2.5 text-[0.85rem] tracking-[-0.01em] text-[var(--fg)]"
                    >
                      <span className="h-1 w-1 shrink-0 rounded-full bg-violet" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
