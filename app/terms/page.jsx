import PageHero from '@/components/PageHero';
import JsonLd from '@/components/JsonLd';
import { breadcrumbJsonLd } from '@/lib/schema';
import { SITE_NAME, CONTACT_EMAIL } from '@/lib/site';
import { PAGE_META } from '@/lib/seo';

const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'Terms', path: '/terms/' },
];

export const metadata = PAGE_META.terms;

export default function TermsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(CRUMBS)} />
      <PageHero crumbs={CRUMBS} eyebrow="Legal" title="Terms of service" lead="Last updated September 7, 2026." />
      <article className="mx-auto max-w-3xl px-4 pb-20 leading-relaxed text-[var(--fg-muted)] sm:px-6 lg:px-8">
        <p>
          By using this website you agree to these terms. The hosted voice AI application is a
          separate service; paid plans are governed by the order form or in-app subscription you
          accept there.
        </p>
        <h2 className="font-display mt-8 text-xl font-bold text-[var(--fg)]">The site</h2>
        <p className="mt-3">
          Content is provided for information. Case studies, calculators, and latency figures are
          illustrative unless we agree otherwise in writing. We may change pages without notice.
        </p>
        <h2 className="font-display mt-8 text-xl font-bold text-[var(--fg)]">Acceptable use</h2>
        <p className="mt-3">
          Do not misuse the site, attempt unauthorized access, or use VoilitAI to place unlawful
          calls. You are responsible for consent and telephony rules in your markets.
        </p>
        <h2 className="font-display mt-8 text-xl font-bold text-[var(--fg)]">Contact</h2>
        <p className="mt-3">
          <a className="text-violet" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </p>
      </article>
    </>
  );
}
