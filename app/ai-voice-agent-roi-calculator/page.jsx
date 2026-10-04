import Link from 'next/link';
import PageHero from '@/components/PageHero';
import VoiceAgentRoiCalculator from '@/components/VoiceAgentRoiCalculator';
import FaqList from '@/components/FaqList';
import CtaSection from '@/components/CtaSection';
import AnimateIn from '@/components/AnimateIn';
import JsonLd from '@/components/JsonLd';
import { breadcrumbJsonLd, faqJsonLd } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';
import { KEYWORDS, SITE_NAME, absoluteUrl } from '@/lib/site';
import {
  ROI_DEFAULTS,
  ROI_FAQ,
  ROI_METHOD_STEPS,
  calculateRoi,
} from '@/lib/roi-calculator';

const PATH = '/ai-voice-agent-roi-calculator/';

const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'AI voice agent ROI calculator', path: PATH },
];

const example = calculateRoi(ROI_DEFAULTS);

export const metadata = pageMetadata({
  title: 'Free AI Voice Agent ROI Calculator',
  description:
    'Estimate how much an AI voice agent can save vs human phone staffing. Enter monthly calls, duration, headcount, and cost. Free VoilitAI ROI calculator for operators and bloggers.',
  path: PATH,
  keywords: [
    'AI voice agent ROI calculator',
    'AI receptionist ROI',
    'AI phone agent cost savings',
    'voice AI ROI',
    'AI call answering savings calculator',
    'free AI voice agent calculator',
    ...KEYWORDS,
  ],
});

function webAppJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'VoilitAI AI Voice Agent ROI Calculator',
    url: absoluteUrl(PATH),
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description:
      'Free calculator that estimates monthly and annual savings from replacing or augmenting phone staffing with an AI voice agent.',
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: absoluteUrl('/'),
    },
  };
}

const BENEFITS = [
  {
    title: 'Never miss the math behind missed calls',
    body: 'Volume × duration × headcount turns “we are busy on the phones” into a monthly dollar figure your finance team recognizes.',
  },
  {
    title: 'Model coverage, not magic 100% automation',
    body: 'The coverage slider keeps the story honest: AI handles routine load; humans keep judgment, empathy, and edge cases.',
  },
  {
    title: 'Shareable for blogs, sales decks, and RFPs',
    body: 'Link the free tool when you write “We built a free AI Voice Agent ROI Calculator”—operators get a reason to click and stay.',
  },
];

export default function AiVoiceAgentRoiCalculatorPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(CRUMBS)} />
      <JsonLd data={faqJsonLd(ROI_FAQ)} />
      <JsonLd data={webAppJsonLd()} />

      <PageHero
        crumbs={CRUMBS}
        eyebrow="Free tool"
        title="AI Voice Agent ROI Calculator"
        lead="Enter your monthly calls, average duration, team size, and cost. VoilitAI estimates potential savings from an AI voice employee that answers, qualifies, and books—24/7."
      >
        <p className="animate-on-load animate-on-load-delay-3 mx-auto mt-5 max-w-2xl text-sm text-[var(--fg-muted)]">
          Example defaults: {ROI_DEFAULTS.monthlyCalls.toLocaleString()} calls · {ROI_DEFAULTS.avgDurationMin}{' '}
          min · {ROI_DEFAULTS.employees} employees · ${ROI_DEFAULTS.employeeCost.toLocaleString()}/mo → about{' '}
          <span className="font-semibold text-[var(--fg)]">
            ${example.netMonthlySavings.toLocaleString()}/month
          </span>{' '}
          modeled savings.
        </p>
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8" aria-label="ROI calculator">
        <VoiceAgentRoiCalculator />
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--bg-elevated)]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <AnimateIn>
            <p className="section-eyebrow">How the estimate works</p>
            <h2 className="display-section mt-3 max-w-2xl">Transparent math you can explain on a blog or to your CFO</h2>
            <p className="mt-4 max-w-2xl lede text-[var(--fg-muted)]">
              The calculator does not invent revenue. It compares current phone labor to an editable AI operating
              cost, then shows labor recovered, hours freed, and net monthly savings.
            </p>
          </AnimateIn>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {ROI_METHOD_STEPS.map((step, index) => (
              <AnimateIn key={step.title} delay={index * 70}>
                <article className="premium-card h-full p-6">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--color-violet)_14%,transparent)] text-sm font-bold text-violet">
                    {index + 1}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--fg-muted)]">{step.body}</p>
                </article>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <AnimateIn>
            <p className="section-eyebrow">Worked example</p>
            <h2 className="display-section mt-3">The default scenario, step by step</h2>
            <p className="mt-4 lede text-[var(--fg-muted)]">
              A visitor enters 2,000 monthly calls, 4 minutes average, 3 employees at $3,000/month. Here is what
              the model surfaces before they tune coverage or AI cost assumptions.
            </p>
          </AnimateIn>

          <AnimateIn delay={100}>
            <div className="glass-panel rounded-3xl p-6 sm:p-8">
              <ul className="space-y-4 text-sm leading-relaxed">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-violet" aria-hidden="true" />
                  <span>
                    <strong className="text-[var(--fg)]">Phone labor today:</strong>{' '}
                    {example.employees} × ${example.employeeCost.toLocaleString()} ={' '}
                    <strong>${example.humanLaborCost.toLocaleString()}/month</strong>
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-violet" aria-hidden="true" />
                  <span>
                    <strong className="text-[var(--fg)]">Talk time:</strong>{' '}
                    {example.monthlyCalls.toLocaleString()} calls × {example.avgDurationMin} min ={' '}
                    <strong>{example.totalMinutes.toLocaleString()} minutes</strong> (
                    {example.totalHours.toLocaleString()} hours)
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-violet" aria-hidden="true" />
                  <span>
                    <strong className="text-[var(--fg)]">At {example.automationRatePct}% coverage:</strong> about{' '}
                    <strong>{example.hoursFreed.toLocaleString()} hours</strong> and{' '}
                    <strong>${example.laborRecovered.toLocaleString()}</strong> in labor value recovered
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-violet" aria-hidden="true" />
                  <span>
                    <strong className="text-[var(--fg)]">After estimated AI cost:</strong> roughly{' '}
                    <strong className="accent-text">${example.netMonthlySavings.toLocaleString()}/month</strong>{' '}
                    net (
                    <strong>${example.annualSavings.toLocaleString()}/year</strong>), or about a{' '}
                    {example.roiMultiple}× return on the modeled AI spend
                  </span>
                </li>
              </ul>
              <p className="mt-6 text-xs text-[var(--fg-muted)]">
                Use “Reset example” on the calculator to return to these inputs anytime.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="border-t border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <AnimateIn className="text-center">
            <p className="section-eyebrow">Why this page exists</p>
            <h2 className="display-section mx-auto mt-3 max-w-2xl">
              A free tool bloggers and operators can actually link to
            </h2>
          </AnimateIn>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {BENEFITS.map((item, index) => (
              <AnimateIn key={item.title} delay={index * 80}>
                <article className="premium-card h-full p-6">
                  <h3 className="font-display text-lg font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--fg-muted)]">{item.body}</p>
                </article>
              </AnimateIn>
            ))}
          </div>
          <AnimateIn delay={200}>
            <blockquote className="mx-auto mt-12 max-w-3xl rounded-3xl border border-[var(--border)] bg-[var(--bg-elevated)] px-6 py-8 text-center sm:px-10">
              <p className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
                “We built a free AI Voice Agent ROI Calculator”
              </p>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[var(--fg-muted)]">
                Pitch that line in a roundup, comparison post, or LinkedIn article—and point readers here. They
                get a useful model; you get a branded destination worth linking.
              </p>
            </blockquote>
          </AnimateIn>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <AnimateIn>
          <p className="section-eyebrow">After the number</p>
          <h2 className="display-section mt-3 max-w-2xl">Turn savings into a live AI voice employee</h2>
        </AnimateIn>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { href: '/how-it-works/', label: 'How it works', text: 'Create, connect, deploy without a developer.' },
            { href: '/ai-receptionist/', label: 'AI receptionist', text: 'Front-desk coverage that books and answers.' },
            { href: '/pricing/', label: 'Pricing', text: 'Agents, minutes, and overage from the portal.' },
            { href: '/learn/what-is-an-ai-voice-agent/', label: 'What is an AI voice agent?', text: 'Plain-language primer for your readers.' },
          ].map((card, index) => (
            <AnimateIn key={card.href} delay={index * 60}>
              <Link
                href={card.href}
                className="premium-card group flex h-full flex-col p-5 transition hover:border-violet/40"
              >
                <span className="font-display text-base font-bold group-hover:text-violet">{card.label}</span>
                <span className="mt-2 text-sm text-[var(--fg-muted)]">{card.text}</span>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 lg:px-8">
        <AnimateIn>
          <h2 className="font-display text-center text-2xl font-bold">ROI calculator FAQ</h2>
        </AnimateIn>
        <div className="mt-6">
          <FaqList items={ROI_FAQ} />
        </div>
      </section>

      <CtaSection
        title="Ready to capture that savings on a real line?"
        text="Create your AI voice employee in minutes, or talk through your call volume with the VoilitAI team."
      />
    </>
  );
}
