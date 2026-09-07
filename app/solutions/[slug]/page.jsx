import { notFound } from 'next/navigation';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import CtaSection from '@/components/CtaSection';
import JsonLd from '@/components/JsonLd';
import Icon from '@/components/Icon';
import BookDemoButton from '@/components/BookDemoButton';
import { breadcrumbJsonLd, serviceJsonLd } from '@/lib/schema';
import { SOLUTIONS, getSolution } from '@/lib/solutions';
import { solutionMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return SOLUTIONS.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) return {};
  return solutionMetadata(solution);
}

export default async function SolutionPage({ params }) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Solutions', path: '/solutions/' },
          { name: solution.name, path: `/solutions/${solution.slug}/` },
        ])}
      />
      <JsonLd data={serviceJsonLd(solution)} />
      <PageHero
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Solutions', path: '/solutions/' },
          { name: solution.name, path: `/solutions/${solution.slug}/` },
        ]}
        eyebrow={solution.eyebrow}
        title={solution.title}
        lead={solution.description}
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-4 pb-20 sm:px-6 lg:grid-cols-3 lg:px-8">
        <article className="lg:col-span-2">
          <h2 className="font-display text-2xl font-bold">The problem on the line</h2>
          <p className="mt-4 leading-relaxed text-[var(--fg-muted)]">{solution.pain}</p>
          <h2 className="font-display mt-10 text-2xl font-bold">What VoilitAI takes off your team</h2>
          <ul className="mt-5 space-y-3">
            {solution.outcomes.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-violet/15 text-violet-deep">
                  <Icon name="check" className="h-3 w-3" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </article>
        <aside className="premium-card h-fit p-6">
          <p className="font-display text-4xl font-bold accent-text">{solution.metric}</p>
          <p className="mt-1 text-sm text-[var(--fg-muted)]">{solution.metricLabel}</p>
          <h3 className="mt-6 font-semibold">Starter workflows</h3>
          <ul className="mt-3 space-y-2 text-sm text-[var(--fg-muted)]">
            {solution.workflows.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <BookDemoButton className="btn-primary mt-6 w-full">Talk through this use case</BookDemoButton>
        </aside>
      </section>
      <CtaSection />
    </>
  );
}
