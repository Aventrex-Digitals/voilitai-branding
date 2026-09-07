import PageHero from '@/components/PageHero';
import CtaSection from '@/components/CtaSection';
import AnimateIn from '@/components/AnimateIn';
import JsonLd from '@/components/JsonLd';
import { breadcrumbJsonLd, howToJsonLd } from '@/lib/schema';
import { HOW_IT_WORKS } from '@/lib/content';
import { PAGE_META } from '@/lib/seo';

const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'How it works', path: '/how-it-works/' },
];

export const metadata = PAGE_META.howItWorks;

const DETAIL = [
  {
    title: 'Conversation design that operations can own',
    text: 'The visual flow builder captures greetings, tools, guardrails, and escalation without waiting on an engineering sprint. Developers can still drop to the API when the logic is proprietary.',
  },
  {
    title: 'Systems connected before the voice is polished',
    text: 'Calendars, CRMs, knowledge bases, and payment or dispatch tools are wired as real-time actions. If the agent cannot finish the job on the call, it is not production-ready.',
  },
  {
    title: 'Test the ugly calls first',
    text: 'Simulation testing runs interruptions, topic changes, and off-script questions. Continuous QA then reviews live calls for failure patterns so week 12 is better than week 1.',
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(CRUMBS)} />
      <JsonLd data={howToJsonLd()} />
      <PageHero
        crumbs={CRUMBS}
        eyebrow="Rollout"
        title="A production voice agent in three moves"
        lead="Simple agents go live in hours. Complex enterprise deployments with custom integrations typically take 2–4 weeks with us in the loop."
      />

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {HOW_IT_WORKS.map((step, i) => (
            <AnimateIn key={step.step} delay={i * 80} className="premium-card p-7">
              <p className="font-display text-sm font-bold text-violet">{step.step}</p>
              <h2 className="mt-3 text-xl font-semibold">{step.title}</h2>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[var(--fg-muted)]">{step.time}</p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--fg-muted)]">{step.description}</p>
            </AnimateIn>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        {DETAIL.map((block) => (
          <article key={block.title} className="mb-10">
            <h2 className="font-display text-2xl font-bold">{block.title}</h2>
            <p className="mt-3 leading-relaxed text-[var(--fg-muted)]">{block.text}</p>
          </article>
        ))}
      </section>
      <CtaSection />
    </>
  );
}
