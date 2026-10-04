import AnimateIn from '@/components/AnimateIn';
import { APP_GET_STARTED } from '@/lib/site';

const GAPS = [
  {
    title: 'Missed calls, missed revenue',
    text: 'When your team is busy or offline, callers hang up and book with whoever answers first.',
  },
  {
    title: 'After hours still converts',
    text: 'High-intent inquiries arrive nights and weekends. Voicemail rarely wins those conversations.',
  },
  {
    title: 'Hold time kills intent',
    text: 'Every minute on hold raises the chance a buyer drops off and never calls back.',
  },
];

export default function GapSection() {
  return (
    <section id="the-gap" className="relative scroll-mt-28 overflow-hidden border-y border-[var(--border)] bg-[var(--band)]">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            'radial-gradient(ellipse 45% 40% at 10% 20%, var(--glow-a), transparent 55%), radial-gradient(ellipse 40% 35% at 90% 80%, var(--glow-b), transparent 50%)',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <AnimateIn className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow justify-center">The Gap</p>
          <h2 className="mt-5 font-display text-[clamp(2rem,3.8vw,3rem)] font-semibold leading-[1.1] tracking-[-0.03em]">
            Every unanswered call is a{' '}
            <span className="accent-italic">customer walking away</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[1.05rem] leading-[1.6] tracking-[-0.01em] text-[var(--fg-muted)]">
            Phone-driven businesses lose work when people cannot get through. An AI voice employee
            closes that gap before competitors do.
          </p>
        </AnimateIn>

        <div className="mt-12 grid gap-4 md:grid-cols-3 md:gap-5">
          {GAPS.map((item, i) => (
            <AnimateIn key={item.title} delay={i * 80}>
              <article className="premium-card h-full p-6 sm:p-7">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-violet">
                  0{i + 1}
                </p>
                <h3 className="mt-4 font-display text-[1.25rem] font-semibold tracking-[-0.02em] sm:text-[1.35rem]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed tracking-[-0.01em] text-[var(--fg-muted)]">
                  {item.text}
                </p>
              </article>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={220} className="mt-10 flex justify-center">
          <a href={APP_GET_STARTED} className="btn-primary px-6 py-3.5 text-[0.9rem]">
            Create Your Voice Employee
          </a>
        </AnimateIn>
      </div>
    </section>
  );
}
