import Icon from '@/components/Icon';
import AnimateIn from '@/components/AnimateIn';
import { PRODUCTS } from '@/lib/products';

function StatusBadge({ status }) {
  const live = status === 'live';
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.14em] ${
        live
          ? 'bg-violet/12 text-violet-deep'
          : 'border border-[var(--border)] text-[var(--fg-muted)]'
      }`}
    >
      {live ? 'Available now' : 'Coming soon'}
    </span>
  );
}

export default function ProductSuite({ products = PRODUCTS }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {products.map((product, i) => (
        <AnimateIn key={product.slug} delay={i * 60}>
          <div id={product.slug} className="premium-card h-full scroll-mt-28 p-6 sm:p-7">
            <div className="flex items-start justify-between gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-violet/10 text-violet">
                <Icon name={product.icon} />
              </span>
              <StatusBadge status={product.status} />
            </div>
            <h3 className="mt-5 text-xl font-semibold">{product.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--fg-muted)]">{product.summary}</p>
          </div>
        </AnimateIn>
      ))}
    </div>
  );
}
