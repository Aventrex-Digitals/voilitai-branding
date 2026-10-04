import Link from 'next/link';
import PageHero from '@/components/PageHero';
import AnimateIn from '@/components/AnimateIn';
import JsonLd from '@/components/JsonLd';
import { breadcrumbJsonLd, webPageJsonLd } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';
import { KEYWORDS } from '@/lib/site';
import { USE_CASE_PAGES } from '@/lib/seo-landing';

export const metadata = pageMetadata({
  title: 'AI Voice Agent Use Cases',
  description:
    'Use cases for VoilitAI voice agents: appointment booking, lead qualification, after-hours answering, and more.',
  path: '/use-cases/',
  keywords: ['AI voice agent use cases', 'AI appointment booking', 'AI lead qualification', ...KEYWORDS],
});

const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'Use cases', path: '/use-cases/' },
];

const CASES = Object.values(USE_CASE_PAGES);

export default function UseCasesIndexPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(CRUMBS)} />
      <JsonLd
        data={webPageJsonLd({
          name: 'AI Voice Agent Use Cases',
          description: 'Jobs VoilitAI voice agents handle for businesses.',
          path: '/use-cases/',
        })}
      />
      <PageHero
        crumbs={CRUMBS}
        eyebrow="Use cases"
        title="Jobs your AI voice agent can own"
        lead="Start with the workflow that costs you the most missed revenue, then expand to the next role."
      />
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {CASES.map((item, i) => (
            <AnimateIn key={item.slug} delay={i * 40}>
              <Link href={item.path} className="premium-card block h-full p-6 transition hover:border-violet/40">
                <h2 className="text-lg font-semibold tracking-tight">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--fg-muted)]">{item.lead}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-violet">View use case →</span>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </section>
    </>
  );
}
