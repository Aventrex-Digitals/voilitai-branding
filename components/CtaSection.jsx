import Link from 'next/link';
import AnimateIn from '@/components/AnimateIn';
import BookDemoButton from '@/components/BookDemoButton';
import { APP_GET_STARTED } from '@/lib/site';

export default function CtaSection({
  title = 'Ready to put a human-sounding agent on the phone?',
  text = 'Book a demo and we’ll contact you within 24 hours. Or start building free the same day.',
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
            <BookDemoButton />
            <Link href={APP_GET_STARTED} className="btn-secondary">
              Start building free
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
