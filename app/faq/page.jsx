import PageHero from '@/components/PageHero';
import FaqList from '@/components/FaqList';
import CtaSection from '@/components/CtaSection';
import JsonLd from '@/components/JsonLd';
import { breadcrumbJsonLd, faqJsonLd } from '@/lib/schema';
import { ALL_FAQS } from '@/lib/content';
import { PAGE_META } from '@/lib/seo';

const flatFaqs = ALL_FAQS.flatMap((group) => group.items);

const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'FAQ', path: '/faq/' },
];

export const metadata = PAGE_META.faq;

export default function FaqPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(CRUMBS)} />
      <JsonLd data={faqJsonLd(flatFaqs)} />
      <PageHero
        crumbs={CRUMBS}
        eyebrow="FAQ"
        title="Everything teams ask before they point a number at an agent"
        lead="If you need a security review, a SIP plan, or a custom workflow, start here — then talk to us."
      />
      <section className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 lg:px-8">
        {ALL_FAQS.map((group) => (
          <div key={group.category} className="mb-12">
            <h2 className="font-display text-xl font-bold">{group.category}</h2>
            <FaqList items={group.items} />
          </div>
        ))}
      </section>
      <CtaSection />
    </>
  );
}
