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
    title: 'Create your AI employee',
    text: 'Start in the dashboard. Name your agent, pick a voice, and define the greeting. You are creating a real AI employee for your business, not waiting on a custom software project.',
  },
  {
    title: 'Customize what it knows and does',
    text: 'Tell it what your business does, what it should say, and when a human should take over. Your AI employee follows your rules.',
  },
  {
    title: 'Connect phone lines and tools',
    text: 'Attach your numbers and the business systems you already use. Integrations let the agent look up information and take action during the call.',
  },
  {
    title: 'Deploy without a developer',
    text: 'Put your AI employee on inbound or outbound lines, review conversations, and refine prompts over time. Most teams go live the same day.',
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(CRUMBS)} />
      <JsonLd data={howToJsonLd()} />
      <PageHero
        crumbs={CRUMBS}
        eyebrow="How it works"
        title="Create your AI voice employee in four steps"
        lead="Create. Customize. Connect. Deploy. You shouldn’t need a developer to put an AI employee on your phone lines."
      />

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
