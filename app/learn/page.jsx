import Link from 'next/link';
import PageHero from '@/components/PageHero';
import AnimateIn from '@/components/AnimateIn';
import JsonLd from '@/components/JsonLd';
import { breadcrumbJsonLd, webPageJsonLd } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';
import { KEYWORDS } from '@/lib/site';
import { LEARN_PAGES } from '@/lib/seo-landing';

export const metadata = pageMetadata({
  title: 'Learn: AI Voice Agents & Receptionists',
  description:
    'Guides on AI voice agents, AI receptionists, costs, and how phone AI works—written for business buyers.',
  path: '/learn/',
  keywords: ['AI voice agent guide', 'what is an AI voice agent', ...KEYWORDS],
});

const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'Learn', path: '/learn/' },
];

const ARTICLES = Object.values(LEARN_PAGES);

export default function LearnIndexPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(CRUMBS)} />
      <JsonLd
        data={webPageJsonLd({
          name: 'Learn',
          description: 'Guides on AI voice agents and receptionists.',
          path: '/learn/',
        })}
      />
      <PageHero
        crumbs={CRUMBS}
        eyebrow="Resources"
        title="Learn about AI voice agents"
        lead="Plain-English guides for business buyers evaluating voice AI, receptionists, and phone automation."
      />
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {ARTICLES.map((item, i) => (
            <AnimateIn key={item.slug} delay={i * 40}>
              <Link href={item.path} className="premium-card block h-full p-6 transition hover:border-violet/40">
                <h2 className="text-lg font-semibold tracking-tight">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--fg-muted)]">{item.definition}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-violet">Read guide →</span>
              </Link>
            </AnimateIn>
          ))}
        </div>
        <p className="mt-10 text-sm text-[var(--fg-muted)]">
          Looking for product updates and industry notes?{' '}
          <Link href="/blog/" className="font-semibold text-violet">
            Visit the blog →
          </Link>
        </p>
      </section>
    </>
  );
}
