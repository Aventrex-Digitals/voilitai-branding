import AnimateIn from '@/components/AnimateIn';
import BookDemoButton from '@/components/BookDemoButton';
import { APP_GET_STARTED } from '@/lib/site';

export default function CtaSection({
  title = 'Create your own AI voice employee',
  text = 'Build, customize, and deploy an AI employee for your business — without developers. Or talk to a live demo first.',
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <AnimateIn>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
        </AnimateIn>
        <AnimateIn delay={80}>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[var(--fg-muted)]">{text}</p>
        </AnimateIn>
        <AnimateIn delay={160}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href={APP_GET_STARTED} className="btn-primary">
              Create Your AI Employee
            </a>
            <BookDemoButton className="btn-secondary">Talk to a Live Demo</BookDemoButton>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
