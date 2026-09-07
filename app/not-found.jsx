import Link from 'next/link';

export const metadata = {
  title: 'Page not found',
  description: 'That URL does not exist on VoilitAI. Return home or browse voice AI features.',
  robots: { index: false, follow: false, nocache: true },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center px-4 py-24 text-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet">404</p>
        <h1 className="font-display mt-3 text-4xl font-bold">Page not found</h1>
        <p className="mt-4 text-lg text-[var(--fg-muted)]">
          That URL does not exist — or it moved when we shipped the VoilitAI brand.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn-primary">
            Back to home
          </Link>
          <Link href="/features/" className="btn-secondary">
            Explore features
          </Link>
        </div>
      </div>
    </section>
  );
}
