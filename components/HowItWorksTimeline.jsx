'use client';

import { useEffect, useRef, useState } from 'react';
import AnimateIn from '@/components/AnimateIn';
import Icon from '@/components/Icon';

const STEPS = [
  {
    step: '01',
    title: 'Create',
    time: 'Minutes',
    icon: 'layers',
    text: 'Design your AI voice employee with name, voice, knowledge, and tone.',
    points: ['Choose a voice', 'Set greeting & rules', 'Add business knowledge'],
  },
  {
    step: '02',
    title: 'Connect',
    time: 'Same day',
    icon: 'flow',
    text: 'Connect phone numbers, workflows, calendars, and business systems.',
    points: ['Attach your numbers', 'Link CRM & calendar', 'Define handoff paths'],
  },
  {
    step: '03',
    title: 'Deploy',
    time: 'Go live',
    icon: 'bolt',
    text: 'Let your AI employee handle real conversations around the clock.',
    points: ['Inbound & outbound', 'Review every call', 'Refine as you grow'],
  },
];

export default function HowItWorksTimeline() {
  const ref = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setActive(STEPS.length - 1);
      return undefined;
    }

    let timer;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        let step = 0;
        setActive(0);
        timer = setInterval(() => {
          step += 1;
          setActive(Math.min(step, STEPS.length - 1));
          if (step >= STEPS.length - 1) clearInterval(timer);
        }, 650);
        observer.disconnect();
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (timer) clearInterval(timer);
    };
  }, []);

  const progress = (active / (STEPS.length - 1)) * 100;

  return (
    <div ref={ref}>
      <div className="relative">
        {/* Desktop progress rail */}
        <div
          className="pointer-events-none absolute left-[10%] right-[10%] top-[2.15rem] hidden h-px bg-[var(--border)] md:block"
          aria-hidden="true"
        >
          <span
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-violet to-cyan transition-[width] duration-700 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <ol className="grid gap-4 md:grid-cols-3 md:gap-5">
          {STEPS.map((item, i) => {
            const lit = i <= active;
            return (
              <li key={item.step}>
                <AnimateIn delay={i * 90}>
                  <article
                    className={`premium-card relative h-full p-6 transition duration-500 sm:p-7 ${
                      lit
                        ? 'border-violet/25 shadow-[var(--shadow)]'
                        : 'opacity-80'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span
                        className={`inline-flex h-10 w-10 items-center justify-center rounded-full border text-[0.75rem] font-semibold tabular-nums transition duration-500 ${
                          lit
                            ? 'border-violet/40 bg-violet/10 text-violet shadow-[0_0_0_4px_color-mix(in_srgb,var(--accent)_12%,transparent)]'
                            : 'border-[var(--border)] bg-[var(--bg-elevated)] text-[var(--fg-muted)]'
                        }`}
                      >
                        {item.step}
                      </span>
                      <span className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[var(--fg-muted)]">
                        {item.time}
                      </span>
                    </div>

                    <div className="mt-6 flex items-center gap-3">
                      <span
                        className={`inline-flex h-9 w-9 items-center justify-center rounded-xl border transition duration-500 ${
                          lit
                            ? 'border-violet/25 bg-violet/10 text-violet'
                            : 'border-[var(--border)] text-[var(--fg-muted)]'
                        }`}
                      >
                        <Icon name={item.icon} className="h-4 w-4" />
                      </span>
                      <h3
                        className={`font-display text-[1.45rem] font-semibold tracking-[-0.03em] transition duration-500 sm:text-[1.65rem] ${
                          lit ? 'text-[var(--fg)]' : 'text-[var(--fg-muted)]'
                        }`}
                      >
                        {item.title}
                      </h3>
                    </div>

                    <p className="mt-3 text-[0.95rem] leading-relaxed tracking-[-0.01em] text-[var(--fg-muted)]">
                      {item.text}
                    </p>

                    <ul className="mt-5 space-y-2 border-t border-[var(--border)] pt-4">
                      {item.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-center gap-2.5 text-[0.85rem] tracking-[-0.01em] text-[var(--fg)]"
                        >
                          <span
                            className={`h-1 w-1 shrink-0 rounded-full ${
                              lit ? 'bg-violet' : 'bg-[var(--fg-muted)]'
                            }`}
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </article>
                </AnimateIn>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
