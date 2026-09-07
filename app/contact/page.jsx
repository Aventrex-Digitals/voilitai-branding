import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import JsonLd from '@/components/JsonLd';
import { breadcrumbJsonLd, contactPageJsonLd } from '@/lib/schema';
import { CONTACT_EMAIL, APP_GET_STARTED } from '@/lib/site';
import { PAGE_META } from '@/lib/seo';

const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'Contact', path: '/contact/' },
];

export const metadata = PAGE_META.contact;

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(CRUMBS)} />
      <JsonLd data={contactPageJsonLd()} />
      <PageHero
        crumbs={CRUMBS}
        eyebrow="Contact"
        title="Tell us the job. We’ll tell you how the agent should work."
        lead="Book a demo — share call volume and the workflow that hurts most. We’ll contact you within 24 hours."
      />
      <section className="mx-auto grid max-w-7xl gap-10 px-4 pb-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <ContactForm />
        <div className="premium-card h-fit p-8">
          <h2 className="font-display text-xl font-bold">Other ways in</h2>
          <p className="mt-4 text-sm text-[var(--fg-muted)]">
            Email{' '}
            <a className="font-medium text-violet" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
          </p>
          <p className="mt-4 text-sm text-[var(--fg-muted)]">
            Prefer to click around first?{' '}
            <a className="font-medium text-violet" href={APP_GET_STARTED}>
              Start building free
            </a>
            .
          </p>
          <ul className="mt-8 space-y-3 text-sm text-[var(--fg-muted)]">
            <li>Starter and Growth self-serve in the product</li>
            <li>Enterprise security reviews welcome</li>
            <li>SIP and existing-number migrations supported</li>
          </ul>
        </div>
      </section>
    </>
  );
}
