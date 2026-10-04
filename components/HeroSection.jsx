import HeroProductVisual from '@/components/product/HeroProductVisual';
import { APP_GET_STARTED } from '@/lib/site';

const BRAND = 'VoilitAI';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 hero-glow opacity-90" />
        <div className="absolute inset-0 grid-noise opacity-35" />
        <div className="absolute left-1/2 top-0 h-[32rem] w-[48rem] -translate-x-1/2 rounded-full bg-violet/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[var(--bg)] to-transparent" />
      </div>

      <div className="relative z-[1] mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="mx-auto max-w-4xl text-center">

          <h1 className="animate-on-load animate-on-load-delay-2 mt-4 font-display text-[clamp(2.5rem,6.5vw,4.75rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-[var(--fg)]">
              The AI voice agent platform for businesses that can&apos;t miss a call
          </h1>

          <p className="animate-on-load animate-on-load-delay-3 mx-auto mt-6 max-w-2xl text-[clamp(1.05rem,1.5vw,1.2rem)] leading-[1.55] tracking-[-0.01em] text-[var(--fg-muted)]">
            Create AI voice employees that answer every call, qualify leads, and book appointments
            live in days, not months.
          </p>

          <div className="animate-on-load animate-on-load-delay-3 mt-9 flex flex-wrap items-center justify-center gap-3">
            <a href={APP_GET_STARTED} className="btn-primary px-6 py-3.5 text-[0.9rem]">
              Create Your AI Voice Employee
            </a>
            <a href="/contact/" className="btn-secondary px-6 py-3.5 text-[0.9rem]">
              Hear a Live Demo
            </a>
          </div>
        </div>

        <div className="animate-on-load animate-on-load-delay-4 mx-auto mt-14 max-w-5xl lg:mt-16">
          <HeroProductVisual />
        </div>
      </div>
    </section>
  );
}
