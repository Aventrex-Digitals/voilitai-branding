'use client';

import AnimateIn from '@/components/AnimateIn';
import Icon from '@/components/Icon';

const USE_CASES = [
  { icon: 'chart', title: 'Sales', description: 'Qualify inbound interest and book the next conversation.' },
  { icon: 'chat', title: 'Support', description: 'Answer routine questions and escalate when needed.' },
  { icon: 'scan', title: 'Lead Qualification', description: 'Screen callers against your rules before human time.' },
  { icon: 'calendar', title: 'Appointment Booking', description: 'Offer availability and confirm appointments live.' },
  { icon: 'outbound', title: 'Customer Follow-up', description: 'Re-engage quiet leads with timely outbound calls.' },
  { icon: 'phone', title: 'Reception', description: 'Greet callers, route requests, and capture details.' },
  { icon: 'bolt', title: 'Outbound Calls', description: 'Run structured outreach without staffing overtime.' },
  { icon: 'flow', title: 'Operations', description: 'Handle status checks and routine workflow updates.' },
];

export default function UseCasesGrid() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {USE_CASES.map((item, i) => (
        <AnimateIn key={item.title} delay={i * 55}>
          <article className="premium-card group relative overflow-hidden p-5">
            <Icon name={item.icon} className="h-5 w-5 text-violet transition duration-300 group-hover:scale-110" />
            <h3 className="mt-4 text-base font-semibold tracking-tight">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--fg-muted)]">{item.description}</p>
            <div
              className="pointer-events-none absolute inset-x-5 bottom-3 flex h-5 items-end justify-center gap-[2px] opacity-0 transition duration-300 group-hover:opacity-70"
              aria-hidden="true"
            >
              {Array.from({ length: 12 }).map((_, bar) => (
                <span
                  key={bar}
                  className="wave-bar w-[2px] rounded-full bg-violet"
                  style={{
                    height: `${30 + ((bar * 17) % 50)}%`,
                    animationDelay: `${bar * 60}ms`,
                  }}
                />
              ))}
            </div>
          </article>
        </AnimateIn>
      ))}
    </div>
  );
}
