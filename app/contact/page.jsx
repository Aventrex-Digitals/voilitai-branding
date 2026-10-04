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
        title="Talk to a live demo, or create your AI employee"
        lead="Share your call volume and the workflow that hurts most. We’ll contact you within 24 hours. Prefer to start now? Create your AI employee in the app."
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
            Ready to build?{' '}
            <a className="font-medium text-violet" href={APP_GET_STARTED}>
              Create Your AI Employee
            </a>
            .
          </p>
          <ul className="mt-8 space-y-3 text-sm text-[var(--fg-muted)]">
            <li>Create agents in the dashboard. No developer required</li>
            <li>Connect phone numbers and business tools</li>
            <li>Starter and Growth self-serve in the product</li>
          </ul>
        </div>
      </section>
    </>
  );
}
