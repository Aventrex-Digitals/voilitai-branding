import PageHero from '@/components/PageHero';
import CtaSection from '@/components/CtaSection';
import JsonLd from '@/components/JsonLd';
import { breadcrumbJsonLd, aboutPageJsonLd } from '@/lib/schema';
import { SITE_NAME } from '@/lib/site';
import { PAGE_META } from '@/lib/seo';

const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about/' },
];

export const metadata = PAGE_META.about;

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(CRUMBS)} />
      <JsonLd data={aboutPageJsonLd()} />
      <PageHero
        crumbs={CRUMBS}
        eyebrow="Company"
        title={`${SITE_NAME} helps businesses create their own AI voice employees`}
        lead="We build software for operators who need calls answered, leads qualified, and appointments handled, without waiting on a developer to ship a custom bot."
      />
      <article className="mx-auto max-w-3xl px-4 pb-16 text-lg leading-relaxed text-[var(--fg-muted)] sm:px-6 lg:px-8">
        <p>
          VoilitAI is the branded AI voice platform from Aventrex Digital. The product lets you
          create, customize, and deploy an AI voice employee for your business, then connect your
          phone lines and tools so it can do real work on the call.
        </p>
        <h2 className="font-display mt-10 text-2xl font-bold text-[var(--fg)]">What we believe</h2>
        <p className="mt-4">
          You shouldn&apos;t need a developer to create an AI employee. Latency matters. If the
          agent pauses, callers hang up. Actions matter. If it cannot help book, qualify, or
          transfer, it is just a talking FAQ. Control matters. Your AI employee should follow your
          rules.
        </p>
        <h2 className="font-display mt-10 text-2xl font-bold text-[var(--fg)]">How we work</h2>
        <p className="mt-4">
          Most teams create a first agent in the dashboard the same day. Complex deployments get a
          partner who will sit in the builder, telephony plan, and go-live with you. We would rather
          ship one workflow that books jobs than ten personas that only demo well.
        </p>
      </article>
      <CtaSection />
    </>
  );
}
