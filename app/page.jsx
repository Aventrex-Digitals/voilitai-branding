import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import AnimateIn from '@/components/AnimateIn';
import HowItWorksTimeline from '@/components/HowItWorksTimeline';
import UseCasesGrid from '@/components/UseCasesGrid';
import IntegrationsDiagram from '@/components/IntegrationsDiagram';
import ConnectorsGrid from '@/components/ConnectorsGrid';
import ProductIntro from '@/components/ProductIntro';
import ProductDashboard from '@/components/product/ProductDashboard';
import HeroSection from '@/components/HeroSection';
import GapSection from '@/components/GapSection';
import WhyVoilitSection from '@/components/WhyVoilitSection';
import LiveCallInterface from '@/components/product/LiveCallInterface';
import ConversationTimeline from '@/components/product/ConversationTimeline';
import CtaSection from '@/components/CtaSection';
import { softwareJsonLd, faqJsonLd, webPageJsonLd } from '@/lib/schema';
import { SITE_NAME, DEFAULT_DESCRIPTION } from '@/lib/site';
import { PAGE_META } from '@/lib/seo';
import { HOME_FAQS } from '@/lib/content';
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

      {/* 1-2 Hero */}
      <HeroSection />

      {/* The Gap */}
      <GapSection />

      {/* 3 Product introduction */}
      <ProductIntro />

      {/* 4 How it works */}
      <section id="how-it-works" className="relative scroll-mt-28 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              'radial-gradient(ellipse 50% 45% at 80% 10%, var(--glow-a), transparent 55%), radial-gradient(ellipse 40% 35% at 10% 90%, var(--glow-b), transparent 50%)',
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <AnimateIn className="mx-auto max-w-2xl text-center">
            <p className="section-eyebrow justify-center">How it works</p>
            <h2 className="mt-5 font-display text-[clamp(2rem,3.6vw,2.85rem)] font-semibold leading-[1.12] tracking-[-0.03em]">
              Create. Connect. <span className="accent-italic">Deploy.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-[1.05rem] leading-[1.6] tracking-[-0.01em] text-[var(--fg-muted)]">
              Three clear steps to put an AI voice employee on your lines, without a custom build.
            </p>
          </AnimateIn>
          <div className="mt-12 lg:mt-14">
            <HowItWorksTimeline />
          </div>
        </div>
      </section>

      {/* 5 AI conversation demonstration */}
      <section className="border-y border-[var(--border)] bg-[var(--band)]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <AnimateIn className="mx-auto max-w-2xl text-center">
            <p className="section-eyebrow justify-center">Live conversation</p>
            <h2 className="display-section mt-5">Hear the product in action</h2>
          </AnimateIn>
          <AnimateIn delay={100} className="mx-auto mt-12 max-w-4xl">
            <LiveCallInterface />
          </AnimateIn>
          <AnimateIn delay={160} className="mx-auto mt-10 max-w-3xl">
            <ConversationTimeline />
          </AnimateIn>
        </div>
      </section>

      {/* 6 Use cases */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <AnimateIn className="max-w-2xl">
          <p className="section-eyebrow">Use cases</p>
          <h2 className="display-section mt-5">Built for real business work</h2>
        </AnimateIn>
        <div className="mt-12">
          <UseCasesGrid />
        </div>
      </section>

      {/* 7 Why VoilitAI */}
      <WhyVoilitSection />

      {/* 8 Integrations */}
      <section id="integrations" className="mx-auto max-w-7xl scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow justify-center">Integrations</p>
          <h2 className="display-section mt-5">Connect VoilitAI to Your Business</h2>
          <p className="lede mt-5 text-[var(--fg-muted)]">
            Built-in connectors for calendar, CRM, messaging, and calling — plus custom APIs for everything else.
          </p>
        </AnimateIn>
        <div className="mt-10">
          <IntegrationsDiagram />
        </div>
        <AnimateIn delay={80}>
          <ConnectorsGrid />
        </AnimateIn>
      </section>

      {/* 9 Product dashboard */}
      <section className="border-y border-[var(--border)] bg-[var(--band)]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <AnimateIn className="mx-auto max-w-2xl text-center">
            <p className="section-eyebrow justify-center">Platform</p>
            <h2 className="display-section mt-5">A real software product</h2>
            <p className="lede mt-5 text-[var(--fg-muted)]">
              Manage employees, calls, analytics, and integrations from one dashboard.
            </p>
          </AnimateIn>
          <AnimateIn delay={100} className="mx-auto mt-12 max-w-5xl">
            <ProductDashboard />
          </AnimateIn>
        </div>
      </section>

      {/* FAQ kept lean for SEO */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <AnimateIn>
          <p className="section-eyebrow">FAQ</p>
          <h2 className="display-section mt-5">Questions, answered</h2>
        </AnimateIn>
        <div className="mt-8 divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {HOME_FAQS.slice(0, 5).map((item) => (
            <details key={item.q} className="faq-item">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
        <p className="mt-6 text-sm">
          <Link href="/faq/" className="font-semibold text-violet">
            View all questions →
          </Link>
        </p>
      </section>

      {/* 10 Final CTA */}
      <CtaSection />
    </>
  );
}
