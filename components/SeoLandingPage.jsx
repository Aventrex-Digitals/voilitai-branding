import Link from 'next/link';
import PageHero from '@/components/PageHero';
import CtaSection from '@/components/CtaSection';
import AnimateIn from '@/components/AnimateIn';
import JsonLd from '@/components/JsonLd';
import BookDemoButton from '@/components/BookDemoButton';
import { breadcrumbJsonLd, faqJsonLd, webPageJsonLd } from '@/lib/schema';
import { APP_GET_STARTED, SITE_NAME } from '@/lib/site';

function resolveCtaHref(href) {
  if (href === 'app') return APP_GET_STARTED;
  return href;
}

export default function SeoLandingPage({ page, crumbs }) {
  const ctaHref = resolveCtaHref(page.primaryCta?.href || 'app');
  const ctaLabel = page.primaryCta?.label || `Get started with ${SITE_NAME}`;

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      {page.faqs?.length ? <JsonLd data={faqJsonLd(page.faqs)} /> : null}
      <JsonLd
        data={webPageJsonLd({
          name: page.h1 || page.title,
          description: page.metaDescription || page.lead,
          path: page.path,
        })}
      />

      <PageHero crumbs={crumbs} eyebrow={page.eyebrow} title={page.h1} lead={page.lead}>
        <div className="animate-on-load animate-on-load-delay-3 mt-9 flex flex-wrap items-center justify-center gap-3">
          <a href={ctaHref} className="btn-primary px-6 py-3.5 text-[0.9rem]">
            {ctaLabel}
          </a>
          <BookDemoButton className="btn-secondary px-6 py-3.5 text-[0.9rem]">
            Hear a live demo
          </BookDemoButton>
        </div>
      </PageHero>

      {page.sections?.map((section, index) => {
        const band = index % 2 === 0;
        return (
          <section
            key={section.title}
            className={band ? 'border-y border-[var(--border)] bg-[var(--band)]' : ''}
          >
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
              <AnimateIn className="mx-auto max-w-2xl text-center">
                {section.eyebrow ? (
                  <p className="section-eyebrow justify-center">{section.eyebrow}</p>
                ) : null}
                <h2 className="display-section mt-5">{section.title}</h2>
              </AnimateIn>

              {section.body?.length ? (
                <div className="mx-auto mt-8 max-w-3xl space-y-4 text-center leading-relaxed text-[var(--fg-muted)]">
                  {section.body.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </div>
              ) : null}

              {section.cards?.length ? (
                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {section.cards.map((card, i) => (
                    <AnimateIn key={card.title} delay={i * 40}>
                      <article className="h-full">
                        <h3 className="text-base font-semibold tracking-tight">{card.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-[var(--fg-muted)]">
                          {card.text}
                        </p>
                      </article>
                    </AnimateIn>
                  ))}
                </div>
              ) : null}

              {section.links?.length ? (
                <ul className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-x-5 gap-y-3 text-sm">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="font-semibold text-violet">
                        {link.label} →
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </section>
        );
      })}

      {page.workflow?.length ? (
        <section className="border-y border-[var(--border)] bg-[var(--band)]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <AnimateIn className="mx-auto max-w-2xl text-center">
              <p className="section-eyebrow justify-center">Workflow</p>
              <h2 className="display-section mt-5">How the call flows</h2>
            </AnimateIn>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {page.workflow.map((item, i) => (
                <AnimateIn key={item.step} delay={i * 50}>
                  <p className="font-display text-sm font-bold text-violet">{item.step}</p>
                  <h3 className="mt-3 text-lg font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--fg-muted)]">{item.text}</p>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {(page.handles?.length || page.handoff?.length) && (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            {page.handles?.length ? (
              <AnimateIn>
                <p className="section-eyebrow">Handles</p>
                <h2 className="display-feature mt-4">What it handles</h2>
                <ul className="mt-6 space-y-3 text-[var(--fg-muted)]">
                  {page.handles.map((item) => (
                    <li key={item} className="leading-relaxed">
                      · {item}
                    </li>
                  ))}
                </ul>
              </AnimateIn>
            ) : null}
            {page.handoff?.length ? (
              <AnimateIn delay={60}>
                <p className="section-eyebrow">Handoff</p>
                <h2 className="display-feature mt-4">When it transfers to a human</h2>
                <ul className="mt-6 space-y-3 text-[var(--fg-muted)]">
                  {page.handoff.map((item) => (
                    <li key={item} className="leading-relaxed">
                      · {item}
                    </li>
                  ))}
                </ul>
              </AnimateIn>
            ) : null}
          </div>
        </section>
      )}

      {page.faqs?.length ? (
        <section className="border-y border-[var(--border)] bg-[var(--band)]">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <AnimateIn>
              <p className="section-eyebrow">FAQ</p>
              <h2 className="display-section mt-5">Common questions</h2>
            </AnimateIn>
            <div className="mt-8 divide-y divide-[var(--border)] border-y border-[var(--border)]">
              {page.faqs.map((item) => (
                <details key={item.q} className="faq-item">
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {page.related?.length ? (
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="section-eyebrow">Explore</p>
          <h2 className="mt-4 text-xl font-semibold tracking-tight">Related pages</h2>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm">
            {page.related.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="font-semibold text-violet">
                  {link.label} →
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <CtaSection title={ctaLabel} text={page.lead} />
    </>
  );
}
