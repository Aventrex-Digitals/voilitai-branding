import PageHero from '@/components/PageHero';
import CtaSection from '@/components/CtaSection';
import AnimateIn from '@/components/AnimateIn';
import Icon from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import { breadcrumbJsonLd } from '@/lib/schema';
import { FEATURE_GROUPS, FEATURE_DETAILS, OMNI_CHANNELS, TELEPHONY } from '@/lib/content';
import { PAGE_META } from '@/lib/seo';

const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'Features', path: '/features/' },
];

export const metadata = PAGE_META.features;

export default function FeaturesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(CRUMBS)} />
      <PageHero
        crumbs={CRUMBS}
        eyebrow="Platform"
        title="Everything required to run voice AI in production — and grow into more channels"
        lead="Human-standard voice, a visual builder, live tools, telephony, and QA — so you are not stitching five vendors into a demo that dies on the first real call."
      />

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURE_DETAILS.map((feature, i) => (
            <AnimateIn key={feature.title} delay={i * 40} className="premium-card p-6">
              <Icon name={feature.icon} className="h-6 w-6 text-violet" />
              <h2 className="mt-4 text-lg font-semibold">{feature.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-[var(--fg-muted)]">{feature.description}</p>
            </AnimateIn>
          ))}
        </div>
      </section>

      {FEATURE_GROUPS.map((group) => (
        <section key={group.id} className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">{group.title}</h2>
          <p className="mt-2 max-w-2xl text-[var(--fg-muted)]">{group.subtitle}</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {group.features.map((feature) => (
              <article key={feature.title} className="rounded-2xl border border-[var(--border)] p-5">
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-[var(--fg-muted)]">{feature.description}</p>
              </article>
            ))}
          </div>
        </section>
      ))}

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-bold sm:text-3xl">Channels and telephony</h2>
        <p className="mt-2 max-w-2xl text-[var(--fg-muted)]">
          Voice and the API are live. Chat and SMS are on the platform roadmap.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[...OMNI_CHANNELS, ...TELEPHONY].map((item) => (
            <article key={item.title} className="premium-card p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-semibold">{item.title}</h3>
                {item.status ? (
                  <span className="text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[var(--fg-muted)]">
                    {item.status === 'live' ? 'Live' : 'Soon'}
                  </span>
                ) : null}
              </div>
              <p className="mt-2 text-sm text-[var(--fg-muted)]">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
