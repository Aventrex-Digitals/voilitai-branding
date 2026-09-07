import Link from 'next/link';
import BookDemoButton from '@/components/BookDemoButton';
import { PRICING_PLANS } from '@/lib/content';

export default function PricingCards() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {PRICING_PLANS.map((plan) => {
        const isDemo = plan.href === '#book-demo';
        const isExternal = plan.href.startsWith('http');
        const Cta = isExternal ? 'a' : Link;
        const ctaProps = isExternal
          ? { href: plan.href, rel: 'noopener noreferrer' }
          : { href: plan.href };

        return (
          <article
            key={plan.name}
            className={`premium-card relative flex flex-col p-7 ${
              plan.highlighted ? 'ring-1 ring-violet-deep/35' : ''
            }`}
          >
            {plan.badge && (
              <p className="absolute -top-3 left-6 rounded-full bg-violet-deep px-3 py-1 text-xs font-semibold text-white">
                {plan.badge}
              </p>
            )}
            <h3 className="font-display text-xl font-bold">{plan.name}</h3>
            <p className="mt-2 min-h-12 text-sm text-[var(--fg-muted)]">{plan.description}</p>
            <p className="mt-6 flex items-end gap-1">
              {plan.price === 'Custom' ? (
                <span className="font-display text-4xl font-bold">Custom</span>
              ) : (
                <>
                  <span className="font-display text-4xl font-bold">${plan.price}</span>
                  <span className="pb-1 text-sm text-[var(--fg-muted)]">{plan.period}</span>
                </>
              )}
            </p>
            <p className="mt-2 text-xs text-[var(--fg-muted)]">{plan.overage}</p>
            <ul className="mt-6 flex-1 space-y-2.5 text-sm">
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-deep" />
                  {feature}
                </li>
              ))}
            </ul>
            {isDemo ? (
              <BookDemoButton
                className={`mt-8 ${plan.highlighted ? 'btn-primary' : 'btn-secondary'}`}
              >
                {plan.cta}
              </BookDemoButton>
            ) : (
              <Cta {...ctaProps} className={`mt-8 ${plan.highlighted ? 'btn-primary' : 'btn-secondary'}`}>
                {plan.cta}
              </Cta>
            )}
          </article>
        );
      })}
    </div>
  );
}
