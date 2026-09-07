import Link from 'next/link';
import PageHero from '@/components/PageHero';
import CtaSection from '@/components/CtaSection';
import AnimateIn from '@/components/AnimateIn';
import JsonLd from '@/components/JsonLd';
import { breadcrumbJsonLd, solutionsJsonLd } from '@/lib/schema';
import { SOLUTIONS } from '@/lib/solutions';
import { PAGE_META } from '@/lib/seo';

const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'Solutions', path: '/solutions/' },
];

export const metadata = PAGE_META.solutions;

export default function SolutionsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(CRUMBS)} />
      <JsonLd data={solutionsJsonLd()} />
      <PageHero
        crumbs={CRUMBS}
        eyebrow="Industries"
        title="The same human-sounding agent. A different job for every line of business."
        lead="Start from an industry workflow — booking, intake, FNOL, speed-to-lead — then connect the tools you already run."
      />
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {SOLUTIONS.map((solution, i) => (
            <AnimateIn key={solution.slug} delay={i * 40}>
              <Link href={`/solutions/${solution.slug}/`} className="premium-card block h-full p-7">
                <p className="text-xs uppercase tracking-[0.16em] text-[var(--fg-muted)]">{solution.eyebrow}</p>
                <h2 className="mt-3 text-2xl font-semibold">{solution.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--fg-muted)]">{solution.description}</p>
                <p className="mt-5 text-sm font-semibold text-violet">
                  {solution.metric} {solution.metricLabel} →
                </p>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </section>
      <CtaSection />
    </>
  );
}
