import PageHero from '@/components/PageHero';
import PricingCards from '@/components/PricingCards';
import FaqList from '@/components/FaqList';
import CtaSection from '@/components/CtaSection';
import JsonLd from '@/components/JsonLd';
import { breadcrumbJsonLd, softwareJsonLd, faqJsonLd } from '@/lib/schema';
import { PRICING_FAQ } from '@/lib/content';
import { pricingMetadata } from '@/lib/seo';
import { getPublicPlans } from '@/lib/voilit-plans';

const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'Pricing', path: '/pricing/' },
];

export const revalidate = 60;

export async function generateMetadata() {
  const plans = await getPublicPlans();
  return pricingMetadata(plans);
}

export default async function PricingPage() {
  const plans = await getPublicPlans();

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(CRUMBS)} />
      <JsonLd data={softwareJsonLd(plans)} />
      <JsonLd data={faqJsonLd(PRICING_FAQ)} />
      <PageHero
        crumbs={CRUMBS}
        eyebrow="Pricing"
        title="Production voice AI without a surprise invoice"
        lead="Start free on the builder, trial Growth for 14 days, or talk to sales about unlimited agents, HIPAA-ready controls, and a dedicated partner."
      />
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <PricingCards plans={plans} />
        <p className="mt-8 text-center text-sm text-[var(--fg-muted)]">
          Annual billing saves 20%. Overage minutes are billed only after we warn you at 80% usage.
        </p>
      </section>
      <section className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="font-display text-center text-2xl font-bold">Pricing questions</h2>
        <div className="mt-6">
          <FaqList items={PRICING_FAQ} />
        </div>
      </section>
      <CtaSection />
    </>
  );
}
