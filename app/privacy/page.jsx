import PageHero from '@/components/PageHero';
import JsonLd from '@/components/JsonLd';
import { breadcrumbJsonLd } from '@/lib/schema';
import { SITE_NAME, CONTACT_EMAIL } from '@/lib/site';
import { PAGE_META } from '@/lib/seo';

const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'Privacy', path: '/privacy/' },
];

export const metadata = PAGE_META.privacy;

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(CRUMBS)} />
      <PageHero crumbs={CRUMBS} eyebrow="Legal" title="Privacy policy" lead="Last updated September 7, 2026." />
      <article className="mx-auto max-w-3xl px-4 pb-20 leading-relaxed text-[var(--fg-muted)] sm:px-6 lg:px-8">
        <p>
          This policy describes how {SITE_NAME} (“we”) handles information when you visit this
          marketing website. The product application at voiceos.aventrexdigital.com may present
          additional terms when you create an account.
        </p>
        <h2 className="font-display mt-8 text-xl font-bold text-[var(--fg)]">Information we collect</h2>
        <p className="mt-3">
          If you book a demo, we collect the name, email, phone, company, call volume, and message you
          submit so we can contact you within 24 hours.
          Our hosts may collect standard server logs (IP address, user agent, referring URL) to
          operate and secure the site.
        </p>
        <h2 className="font-display mt-8 text-xl font-bold text-[var(--fg)]">How we use it</h2>
        <p className="mt-3">
          We use contact details to reply to your request, improve the site, and — if you ask — to
          send product updates. We do not sell personal information.
        </p>
        <h2 className="font-display mt-8 text-xl font-bold text-[var(--fg)]">Contact</h2>
        <p className="mt-3">
          Privacy questions: <a className="text-violet" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </p>
      </article>
    </>
  );
}
