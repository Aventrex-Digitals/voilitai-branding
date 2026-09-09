import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import AnimateIn from '@/components/AnimateIn';
import Icon from '@/components/Icon';
import IndustryDemo from '@/components/IndustryDemo';
import CapabilityAccordion from '@/components/CapabilityAccordion';
import ProductSuite from '@/components/ProductSuite';
import ProblemSection from '@/components/ProblemSection';
import RoiCalculator from '@/components/RoiCalculator';
import ComparisonTable from '@/components/ComparisonTable';
import PricingCards from '@/components/PricingCards';
import FaqList from '@/components/FaqList';
import CtaSection from '@/components/CtaSection';
import Marquee from '@/components/Marquee';
import { softwareJsonLd, faqJsonLd, webPageJsonLd } from '@/lib/schema';
import BookDemoButton from '@/components/BookDemoButton';
import { SITE_NAME, DEFAULT_DESCRIPTION, APP_GET_STARTED } from '@/lib/site';
import { PAGE_META } from '@/lib/seo';
import { PLATFORM_PILLS } from '@/lib/products';
import {
  STATS,
  CASE_STUDIES,
  SECURITY_BADGES,
  INTEGRATIONS,
  HOW_IT_WORKS,
  PAIN_STATS,
  HOME_FAQS,
} from '@/lib/content';
import { SOLUTIONS } from '@/lib/solutions';
import { getPublicPlans } from '@/lib/voilit-plans';

export const metadata = PAGE_META.home;

export const revalidate = 60;

export default async function HomePage() {
  const plans = await getPublicPlans();

  return (
    <>
      <JsonLd data={softwareJsonLd(plans)} />
      <JsonLd data={faqJsonLd(HOME_FAQS)} />
      <JsonLd
        data={webPageJsonLd({
          name: SITE_NAME,
          description: DEFAULT_DESCRIPTION,
          path: '/',
        })}
      />

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 grid-noise opacity-[0.18]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
            <div>
              <p className="section-eyebrow animate-on-load">The VoilitAI platform</p>
              <h1 className="font-display animate-on-load animate-on-load-delay-1 mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.85rem] lg:leading-[1.05]">
                Start with voice.
                <span className="mt-2 block">Grow into every conversation.</span>
              </h1>
              <p className="animate-on-load animate-on-load-delay-2 mt-6 max-w-xl text-lg leading-relaxed text-[var(--fg-muted)]">
                Production voice agents that answer, book, and update your CRM — with sub-600ms
                replies. Chat, SMS, and website voice share the same agent brain when they ship.
              </p>
              <div className="animate-on-load animate-on-load-delay-3 mt-9 flex flex-wrap gap-3">
                <BookDemoButton />
                <a href={APP_GET_STARTED} className="btn-secondary">
                  Start building free
                </a>
              </div>
              <ul className="animate-on-load animate-on-load-delay-4 mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[var(--fg-muted)]">
                {PLATFORM_PILLS.map((item) => (
                  <li key={item} className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-violet-deep" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <AnimateIn delay={80} className="lg:pt-4">
              <IndustryDemo />
            </AnimateIn>
          </div>

          <dl className="mt-16 grid grid-cols-2 gap-6 border-t border-[var(--border)] pt-10 sm:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="text-xs uppercase tracking-[0.16em] text-[var(--fg-muted)]">{stat.label}</dt>
                <dd className="mt-1 font-display text-2xl font-bold sm:text-3xl">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-y border-[var(--border)] py-8" aria-label="Integrations">
        <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[var(--fg-muted)]">
          Plugs into the stack you already run
        </p>
        <Marquee items={INTEGRATIONS} />
      </section>

      <ProblemSection />

      <section id="platform" className="mx-auto max-w-7xl scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8">
        <AnimateIn className="max-w-2xl">
          <p className="section-eyebrow">Platform</p>
          <h2 className="font-display mt-4 text-3xl font-bold sm:text-4xl">
            Voice is live. The rest of the suite is designed in.
          </h2>
          <p className="mt-4 text-[var(--fg-muted)]">
            One builder, knowledge base, and analytics layer. Add channels without standing up a
            second bot — or a second vendor.
          </p>
        </AnimateIn>
        <div className="mt-10">
          <ProductSuite />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <AnimateIn className="max-w-2xl">
          <p className="section-eyebrow">Voice agents</p>
          <h2 className="font-display mt-4 text-3xl font-bold sm:text-4xl">
            What the agent actually does on the call
          </h2>
          <p className="mt-4 text-[var(--fg-muted)]">
            Not a phone tree. A production agent that listens, acts, and knows when a human should
            take over.
          </p>
        </AnimateIn>
        <AnimateIn delay={80} className="mt-10">
          <CapabilityAccordion />
        </AnimateIn>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Hidden cost</p>
          <h2 className="font-display mt-4 text-3xl font-bold sm:text-4xl">
            Every unanswered call is revenue you will never see
          </h2>
          <p className="mt-4 text-[var(--fg-muted)]">
            The phone is still the highest-intent channel you have. VoilitAI answers it in seconds —
            then books, qualifies, or hands off.
          </p>
        </AnimateIn>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PAIN_STATS.map((stat, i) => (
            <AnimateIn key={stat.label} delay={i * 70} className="premium-card p-6">
              <p className="font-display text-3xl font-bold accent-text">{stat.value}</p>
              <p className="mt-2 text-sm text-[var(--fg-muted)]">{stat.label}</p>
            </AnimateIn>
          ))}
        </div>
        <AnimateIn delay={120} className="mt-10">
          <RoiCalculator />
        </AnimateIn>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Why VoilitAI</p>
          <h2 className="font-display mt-4 text-3xl font-bold sm:text-4xl">
            Next-gen voice AI, not another phone tree
          </h2>
        </AnimateIn>
        <AnimateIn delay={80} className="mt-10">
          <ComparisonTable />
        </AnimateIn>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">How it works</p>
          <h2 className="font-display mt-4 text-3xl font-bold sm:text-4xl">Live in weeks, not a six-month IT project</h2>
        </AnimateIn>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {HOW_IT_WORKS.map((step, i) => (
            <AnimateIn key={step.step} delay={i * 80} className="premium-card p-7">
              <p className="font-display text-sm font-bold text-violet">{step.step}</p>
              <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[var(--fg-muted)]">{step.time}</p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--fg-muted)]">{step.description}</p>
            </AnimateIn>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/how-it-works/" className="text-sm font-semibold text-violet hover:text-violet-deep">
            Full rollout process →
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Solutions</p>
          <h2 className="font-display mt-4 text-3xl font-bold sm:text-4xl">
            Voice agents for the industries that live on the phone
          </h2>
        </AnimateIn>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SOLUTIONS.map((solution, i) => (
            <AnimateIn key={solution.slug} delay={i * 50}>
              <Link href={`/solutions/${solution.slug}/`} className="premium-card block h-full p-6">
                <p className="text-xs uppercase tracking-[0.16em] text-[var(--fg-muted)]">{solution.eyebrow}</p>
                <h3 className="mt-3 text-lg font-semibold">{solution.name}</h3>
                <p className="mt-2 text-sm text-[var(--fg-muted)]">
                  {solution.metric} {solution.metricLabel}
                </p>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Results</p>
          <h2 className="font-display mt-4 text-3xl font-bold sm:text-4xl">Proven impact on the metrics that matter</h2>
        </AnimateIn>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {CASE_STUDIES.map((study, i) => (
            <AnimateIn key={study.company} delay={i * 70} className="premium-card p-7">
              <p className="font-display text-4xl font-bold accent-text">{study.metric}</p>
              <p className="mt-1 text-sm text-[var(--fg-muted)]">{study.metricLabel}</p>
              <blockquote className="mt-5 text-[var(--fg)]">“{study.quote}”</blockquote>
              <p className="mt-4 text-sm font-medium">
                {study.author}
                <span className="block text-[var(--fg-muted)]">
                  {study.role}, {study.company}
                </span>
              </p>
            </AnimateIn>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Security</p>
          <h2 className="font-display mt-4 text-3xl font-bold sm:text-4xl">
            Built for healthcare, finance, and teams that cannot guess
          </h2>
        </AnimateIn>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SECURITY_BADGES.map((badge) => (
            <div key={badge.name} className="premium-card p-5">
              <Icon name={badge.icon} className="h-5 w-5 text-violet" />
              <h3 className="mt-3 font-semibold">{badge.name}</h3>
              <p className="mt-1 text-sm text-[var(--fg-muted)]">{badge.description}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm">
          <Link href="/trust/" className="font-semibold text-violet">
            Read the trust center →
          </Link>
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Pricing</p>
          <h2 className="font-display mt-4 text-3xl font-bold sm:text-4xl">Simple plans. Production-ready from day one.</h2>
        </AnimateIn>
        <div className="mt-12">
          <PricingCards plans={plans} />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <AnimateIn className="text-center">
          <p className="section-eyebrow">FAQ</p>
          <h2 className="font-display mt-4 text-3xl font-bold sm:text-4xl">Questions, answered</h2>
        </AnimateIn>
        <div className="mt-8">
          <FaqList items={HOME_FAQS} />
        </div>
        <p className="mt-6 text-center text-sm">
          <Link href="/faq/" className="font-semibold text-violet">
            View all questions →
          </Link>
        </p>
      </section>

      <CtaSection
        title="Start with a voice agent. Add the rest as you grow."
        text="Book a demo and we’ll contact you within 24 hours. Or start building a production voice agent free the same day."
      />
    </>
  );
}
