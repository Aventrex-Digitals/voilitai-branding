import AnimateIn from '@/components/AnimateIn';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function PageHero({ eyebrow, title, lead, children, crumbs }) {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
        {crumbs ? <Breadcrumbs items={crumbs} /> : null}
        {eyebrow && <p className="section-eyebrow animate-on-load">{eyebrow}</p>}
        <h1 className="font-display animate-on-load animate-on-load-delay-1 mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.15rem] lg:leading-[1.12]">
          {title}
        </h1>
        {lead && (
          <p className="animate-on-load animate-on-load-delay-2 mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--fg-muted)]">
            {lead}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
