import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import AnimateIn from '@/components/AnimateIn';
import Icon from '@/components/Icon';
import Waveform from '@/components/Waveform';
import ConversationDemo from '@/components/ConversationDemo';
import RoiCalculator from '@/components/RoiCalculator';
import ComparisonTable from '@/components/ComparisonTable';
import PricingCards from '@/components/PricingCards';
import FaqList from '@/components/FaqList';
import CtaSection from '@/components/CtaSection';
import Marquee from '@/components/Marquee';
import { softwareJsonLd, faqJsonLd, webPageJsonLd } from '@/lib/schema';
import BookDemoButton from '@/components/BookDemoButton';
import {
  SITE_NAME,
  DEFAULT_DESCRIPTION,
} from '@/lib/site';
import { PAGE_META } from '@/lib/seo';
import {
  STATS,
  TRUST_PILLS,
  FEATURE_GROUPS,
  CASE_STUDIES,
  OMNI_CHANNELS,
  TELEPHONY,
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

        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24">
          <div className="mx-auto max-w-3xl text-center">
           
            <h1 className="font-display animate-on-load animate-on-load-delay-1 mt-6 text-4xl font-bold tracking-tight sm:text-6xl lg:text-[4.15rem] lg:leading-[1.05]">
              Never miss a call again.
              <span className="mt-2 block">Voice agents that feel human.</span>
            </h1>
            <p className="animate-on-load animate-on-load-delay-2 mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--fg-muted)]">
              Design, deploy, and scale intelligent voice agents that hold natural conversations,
              book the job, update your CRM, and stay on the line when your team cannot.
            </p>
            <div className="animate-on-load animate-on-load-delay-3 mt-9 flex flex-wrap justify-center gap-3">
              <BookDemoButton />
              <Link href="/how-it-works/" className="btn-secondary">
                <Icon name="play" className="h-4 w-4" />
                See how it works
              </Link>
            </div>
            <ul className="animate-on-load animate-on-load-delay-4 mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-[var(--fg-muted)]">
              {TRUST_PILLS.map((item) => (
                <li key={item} className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-deep" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mx-auto mt-14 max-w-4xl">
            <Waveform />
            <p className="mt-4 text-center text-xs font-semibold uppercase tracking-[0.28em] text-[var(--fg-muted)]">
              Voice AI — always listening, always learning
            </p>
          </div>

          <dl className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-6 sm:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
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
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimateIn>
            <p className="section-eyebrow">Live preview</p>
            <h2 className="font-display mt-4 text-3xl font-bold sm:text-4xl">See VoilitAI in action</h2>
            <p className="mt-4 text-lg text-[var(--fg-muted)]">
              Natural language, live booking, and a CRM note — all before the caller hangs up.
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              {[
                'Full context across the entire conversation',
                'Real-time appointment booking and task execution',
                'Warm escalation to a human when needed',
                'Multi-language support out of the box',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-violet/15 text-violet-deep">
                    <Icon name="check" className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </AnimateIn>
          <AnimateIn delay={120}>
            <ConversationDemo />
          </AnimateIn>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
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

      {FEATURE_GROUPS.map((group, index) => (
        <section key={group.id} className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <AnimateIn className="max-w-2xl">
            <p className="section-eyebrow">0{index + 1}</p>
            <h2 className="font-display mt-4 text-3xl font-bold sm:text-4xl">{group.title}</h2>
            <p className="mt-3 text-[var(--fg-muted)]">{group.subtitle}</p>
          </AnimateIn>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {group.features.map((feature, i) => (
              <AnimateIn key={feature.title} delay={i * 80} className="premium-card p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-violet/10 text-violet">
                  <Icon name={feature.icon} />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--fg-muted)]">{feature.description}</p>
              </AnimateIn>
            ))}
          </div>
        </section>
      ))}

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
          <h2 className="font-display mt-4 text-3xl font-bold sm:text-4xl">Voice agents for the industries that live on the phone</h2>
        </AnimateIn>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SOLUTIONS.map((solution, i) => (
            <AnimateIn key={solution.slug} delay={i * 50}>
              <Link href={`/solutions/${solution.slug}/`} className="premium-card block h-full p-6">
                <p className="text-xs uppercase tracking-[0.16em] text-[var(--fg-muted)]">{solution.eyebrow}</p>
                <h3 className="mt-3 text-lg font-semibold">{solution.name}</h3>
                <p className="mt-2 text-sm text-[var(--fg-muted)]">{solution.metric} {solution.metricLabel}</p>
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
                <span className="block text-[var(--fg-muted)]">{study.role}, {study.company}</span>
              </p>
            </AnimateIn>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <AnimateIn>
          <p className="section-eyebrow">Omni-channel</p>
          <h2 className="font-display mt-4 text-3xl font-bold sm:text-4xl">Every channel, one AI</h2>
        </AnimateIn>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {OMNI_CHANNELS.map((channel, i) => (
            <AnimateIn key={channel.title} delay={i * 70} className="premium-card p-6">
              <Icon name={channel.icon} className="h-6 w-6 text-violet" />
              <h3 className="mt-4 font-semibold">{channel.title}</h3>
              <p className="mt-2 text-sm text-[var(--fg-muted)]">{channel.description}</p>
            </AnimateIn>
          ))}
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TELEPHONY.map((item) => (
            <div key={item.title} className="rounded-2xl border border-[var(--border)] p-5">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-[var(--fg-muted)]">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Security</p>
          <h2 className="font-display mt-4 text-3xl font-bold sm:text-4xl">Built for healthcare, finance, and teams that cannot guess</h2>
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

      <CtaSection />
    </>
  );
}
