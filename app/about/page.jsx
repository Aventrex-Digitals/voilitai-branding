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
        title={`${SITE_NAME} exists so the most important channel you have never goes unanswered`}
        lead="We build production voice AI — not demo theater. The product is designed for operators who need bookings, CRM notes, and a human handoff, not a novelty greeting."
      />
      <article className="mx-auto max-w-3xl px-4 pb-16 text-lg leading-relaxed text-[var(--fg-muted)] sm:px-6 lg:px-8">
        <p>
          VoilitAI is the branded voice AI platform from Aventrex Digital. The engine behind it is
          the same production stack teams already use to design agents, connect telephony, and
          watch live conversations — now with a name and visual system that matches the product:
          fluid, precise, and built around voice.
        </p>
        <h2 className="font-display mt-10 text-2xl font-bold text-[var(--fg)]">What we believe</h2>
        <p className="mt-4">
          Latency is the product. If the agent pauses, callers hang up. Tools are the product. If
          it cannot book, qualify, or transfer, it is a talking FAQ. Security is the product. If
          you handle health or money, a pretty voice without access control is a liability.
        </p>
        <h2 className="font-display mt-10 text-2xl font-bold text-[var(--fg)]">How we work</h2>
        <p className="mt-4">
          Simple agents launch from templates in hours. Complex deployments get a partner who will
          sit in the flow builder, the SIP plan, and the QA queue with you. We would rather ship
          one workflow that books jobs than ten personas that only demo well.
        </p>
      </article>
      <CtaSection />
    </>
  );
}
