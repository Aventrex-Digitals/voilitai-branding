'use client';

import Link from 'next/link';
import AnimateIn from '@/components/AnimateIn';
import Icon from '@/components/Icon';

const USE_CASES = [
  {
    icon: 'calendar',
    title: 'Appointment booking',
    description: 'Offer availability and confirm appointments live on the call.',
    href: '/use-cases/appointment-booking/',
  },
  {
    icon: 'scan',
    title: 'Lead qualification',
    description: 'Screen callers against your rules before human time.',
    href: '/use-cases/lead-qualification/',
  },
  {
    icon: 'phone',
    title: 'Reception',
    description: 'Greet callers, route requests, and capture details 24/7.',
    href: '/ai-receptionist/',
  },
  {
    icon: 'bolt',
    title: 'After-hours answering',
    description: 'Cover nights and weekends without overnight staff.',
    href: '/use-cases/after-hours-answering/',
  },
  {
    icon: 'chart',
    title: 'Sales intake',
    description: 'Qualify inbound interest and book the next conversation.',
    href: '/ai-phone-agent/',
  },
  {
    icon: 'chat',
    title: 'Support',
    description: 'Answer routine questions and escalate when needed.',
    href: '/solutions/customer-support/',
  },
  {
    icon: 'outbound',
    title: 'Follow-up calls',
    description: 'Re-engage quiet leads with timely outbound calls.',
    href: '/ai-phone-agent/',
  },
  {
    icon: 'flow',
    title: 'Operations',
    description: 'Handle status checks and routine workflow updates.',
    href: '/ai-voice-agents/',
  },
];

export default function UseCasesGrid() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {USE_CASES.map((item, i) => (
        <AnimateIn key={item.title} delay={i * 55}>
          <Link href={item.href} className="premium-card group relative block overflow-hidden p-5 transition hover:border-violet/40">
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
          </Link>
        </AnimateIn>
      ))}
    </div>
  );
}
