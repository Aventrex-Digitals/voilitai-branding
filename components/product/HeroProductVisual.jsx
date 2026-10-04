import ProductDashboard from '@/components/product/ProductDashboard';

export default function HeroProductVisual() {
  return (
    <div className="relative hero-panel-enter">
      <div
        className="pointer-events-none absolute -inset-10 rounded-[2.5rem] bg-[radial-gradient(ellipse_at_center,var(--glow-a),transparent_62%)] glow-breathe"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-8 left-1/2 h-24 w-[70%] -translate-x-1/2 rounded-full bg-violet/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-[1.35rem] border border-[var(--border)] bg-[var(--card)] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.35)] ring-1 ring-white/5">
          <div className="flex items-center gap-2 border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--bg-elevated)_70%,transparent)] px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <div className="ml-3 flex flex-1 items-center justify-center">
              <span className="rounded-md border border-[var(--border)] bg-[var(--bg)] px-3 py-1 text-[0.7rem] text-[var(--fg-muted)]">
                app.voilitai.com
              </span>
            </div>
          </div>
          <div className="relative">
            <ProductDashboard bare showChrome={false} />
          </div>
        </div>
      </div>
    </div>
  );
}
