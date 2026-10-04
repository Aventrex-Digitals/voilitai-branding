import AnimateIn from '@/components/AnimateIn';
import BookDemoButton from '@/components/BookDemoButton';
import { APP_GET_STARTED } from '@/lib/site';

export default function CtaSection({
  title = 'Create your AI voice employee',
  text = 'Build, deploy, and manage intelligent voice employees for real business conversations.',
}) {
  return (
    <section className="relative overflow-hidden border-t border-[var(--border)]">
      <div className="absolute inset-0 bg-[var(--band)]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 hero-glow" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-24">
        <AnimateIn>
          <h2 className="display-section">{title}</h2>
        </AnimateIn>
        <AnimateIn delay={80}>
          <p className="mx-auto mt-5 max-w-xl lede text-[var(--fg-muted)]">{text}</p>
        </AnimateIn>
        <AnimateIn delay={160}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a href={APP_GET_STARTED} className="btn-primary">
              Create Your Voice Employee
            </a>
            <BookDemoButton className="btn-secondary">Talk to Our Team</BookDemoButton>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
