import PageHero from '@/components/PageHero';
import JsonLd from '@/components/JsonLd';
import Icon from '@/components/Icon';
import CtaSection from '@/components/CtaSection';
import { breadcrumbJsonLd } from '@/lib/schema';
import { SECURITY_BADGES } from '@/lib/content';
import { PAGE_META } from '@/lib/seo';

const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'Trust', path: '/trust/' },
];

export const metadata = PAGE_META.trust;

export default function TrustPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(CRUMBS)} />
      <PageHero
        crumbs={CRUMBS}
        eyebrow="Trust center"
        title="Security that belongs on a production phone line"
        lead="Voice carries names, card last-fours, and symptoms. VoilitAI is built so those conversations stay encrypted, access-controlled, and auditable."
      />
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SECURITY_BADGES.map((badge) => (
            <article key={badge.name} className="premium-card p-5">
              <Icon name={badge.icon} className="h-5 w-5 text-violet" />
              <h2 className="mt-3 font-semibold">{badge.name}</h2>
              <p className="mt-1 text-sm text-[var(--fg-muted)]">{badge.description}</p>
            </article>
          ))}
        </div>
        <article className="mx-auto mt-14 max-w-3xl leading-relaxed text-[var(--fg-muted)]">
          <h2 className="font-display text-2xl font-bold text-[var(--fg)]">How we think about data</h2>
          <p className="mt-4">
            Audio, transcripts, and metadata are encrypted in transit and at rest. Role-based access
            and audit logs govern who can listen or export. PII redaction can mask personal
            information in QA views. Customer conversation data is not used to train public models.
          </p>
          <p className="mt-4">
            Healthcare and finance teams should request a security review and, where PHI is involved,
            a business associate agreement before pointing a production number at an agent. Retention
            windows are configurable so you are not keeping recordings “just in case.”
          </p>
        </article>
      </section>
      <CtaSection title="Need a security review?" text="We’ll walk through architecture, subprocessors, and retention with your team." />
    </>
  );
}
