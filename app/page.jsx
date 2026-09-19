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
  USE_CASES,
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
              <p className="section-eyebrow animate-on-load">AI voice employees</p>
              <h1 className="font-display animate-on-load animate-on-load-delay-1 mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.85rem] lg:leading-[1.05]">
                Create Your Own
                <span className="mt-2 block">AI Voice Employee</span>
              </h1>
              <p className="animate-on-load animate-on-load-delay-2 mt-6 max-w-xl text-lg leading-relaxed text-[var(--fg-muted)]">
                Build, customize and deploy an AI voice employee for your business — without
                developers.
              </p>
              <p className="animate-on-load animate-on-load-delay-2 mt-4 max-w-xl text-base leading-relaxed text-[var(--fg-muted)]">
                Handle calls, answer customer questions, qualify leads, schedule appointments and
                automate conversations with an AI employee you create yourself.
              </p>
              <div className="animate-on-load animate-on-load-delay-3 mt-9 flex flex-wrap gap-3">
                <a href={APP_GET_STARTED} className="btn-primary">
                  Create Your AI Employee
                </a>
                <BookDemoButton className="btn-secondary">Talk to a Live Demo</BookDemoButton>
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
          Connect the tools your business already runs
        </p>
        <Marquee items={INTEGRATIONS} />
      </section>

      <ProblemSection />

      <section id="platform" className="mx-auto max-w-7xl scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8">
        <AnimateIn className="max-w-2xl">
          <p className="section-eyebrow">Platform</p>
          <h2 className="font-display mt-4 text-3xl font-bold sm:text-4xl">
            Your AI employee. Your rules.
          </h2>
          <p className="mt-4 text-[var(--fg-muted)]">
            You shouldn&apos;t need a developer to create an AI employee. Build it once, connect
            your phone and tools, then grow into more channels as they ship.
          </p>
        </AnimateIn>
        <div className="mt-10">
          <ProductSuite />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <AnimateIn className="max-w-2xl">
          <p className="section-eyebrow">On the call</p>
          <h2 className="font-display mt-4 text-3xl font-bold sm:text-4xl">
            What your AI employee actually does
          </h2>
          <p className="mt-4 text-[var(--fg-muted)]">
            Answer calls automatically. Qualify leads. Help book appointments. Hand off to a human
            when judgment is needed.
          </p>
        </AnimateIn>
        <AnimateIn delay={80} className="mt-10">
          <CapabilityAccordion />
        </AnimateIn>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Missed calls</p>
          <h2 className="font-display mt-4 text-3xl font-bold sm:text-4xl">
            Every missed call could be a missed customer
          </h2>
          <p className="mt-4 text-[var(--fg-muted)]">
            When your team is busy or unavailable, VoilitAI can answer the call, have a conversation
            with the customer and take the next step.
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
            Create your own AI employee — don&apos;t rent a phone tree
          </h2>
        </AnimateIn>
        <AnimateIn delay={80} className="mt-10">
          <ComparisonTable />
        </AnimateIn>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">How it works</p>
          <h2 className="font-display mt-4 text-3xl font-bold sm:text-4xl">
            Create. Customize. Connect. Deploy.
          </h2>
          <p className="mt-4 text-[var(--fg-muted)]">
            Four clear steps to put an AI voice employee on your phone lines — without a developer.
          </p>
        </AnimateIn>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
            See the full process →
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Use cases</p>
          <h2 className="font-display mt-4 text-3xl font-bold sm:text-4xl">
            AI employees for real business work
          </h2>
        </AnimateIn>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {USE_CASES.map((item, i) => (
            <AnimateIn key={item.title} delay={i * 50} className="premium-card p-7">
              <p className="font-display text-3xl font-bold accent-text">{item.highlight}</p>
              <p className="mt-1 text-sm text-[var(--fg-muted)]">{item.highlightLabel}</p>
              <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--fg-muted)]">{item.description}</p>
            </AnimateIn>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Industries</p>
          <h2 className="font-display mt-4 text-3xl font-bold sm:text-4xl">
            Built for businesses that live on the phone
          </h2>
          <p className="mt-4 text-[var(--fg-muted)]">
            Dental practices, auto repair shops, HVAC, plumbing, real estate, clinics, and more.
          </p>
        </AnimateIn>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((solution, i) => (
            <AnimateIn key={solution.slug} delay={i * 50}>
              <Link href={`/solutions/${solution.slug}/`} className="premium-card block h-full p-6">
                <p className="text-xs uppercase tracking-[0.16em] text-[var(--fg-muted)]">{solution.eyebrow}</p>
                <h3 className="mt-3 text-lg font-semibold">{solution.name}</h3>
                <p className="mt-2 text-sm text-[var(--fg-muted)] line-clamp-3">{solution.description}</p>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Security</p>
          <h2 className="font-display mt-4 text-3xl font-bold sm:text-4xl">
            Built for businesses that cannot guess with customer calls
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
          <h2 className="font-display mt-4 text-3xl font-bold sm:text-4xl">
            Pay to create and operate AI voice employees
          </h2>
          <p className="mt-4 text-[var(--fg-muted)]">
            Plans cover the agents and minutes you need to put AI employees on your phone lines.
          </p>
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
        title="Don't just read about it. Create one."
        text="Create your AI voice employee in the dashboard — or talk to a live demo and hear what callers experience."
      />
    </>
  );
}
