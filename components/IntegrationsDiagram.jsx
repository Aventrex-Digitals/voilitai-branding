'use client';

import { useEffect, useId, useRef, useState } from 'react';
import Icon from '@/components/Icon';

/** Shared canvas. SVG viewBox and HTML pins must use the same space. */
const W = 760;
const H = 540;
const HUB = { x: W / 2, y: H / 2 };
const RADIUS = 235;

const NODE_DEFS = [
  { id: 'auto', label: 'Automation', icon: 'bolt', angle: -90 },
  { id: 'calendar', label: 'Calendar', icon: 'calendar', angle: -30 },
  { id: 'api', label: 'APIs', icon: 'code', angle: 30 },
  { id: 'hooks', label: 'Webhooks', icon: 'flow', angle: 90 },
  { id: 'crm', label: 'CRM', icon: 'crm', angle: 150 },
  { id: 'phone', label: 'Phone systems', icon: 'phone', angle: 210 },
];

const NODES = NODE_DEFS.map((node) => {
  const rad = (node.angle * Math.PI) / 180;
  return {
    ...node,
    x: HUB.x + RADIUS * Math.cos(rad),
    y: HUB.y + RADIUS * Math.sin(rad),
  };
});

const LEFT_POINTS = [
  {
    icon: 'phone',
    title: 'Keep your numbers',
    text: 'Connect existing phone lines and routing without rebuilding your call stack.',
  },
  {
    icon: 'crm',
    title: 'Sync your CRM',
    text: 'Push call outcomes, notes, and lead status back into the tools your team already uses.',
  },
  {
    icon: 'calendar',
    title: 'Book into calendars',
    text: 'Offer real availability and confirm appointments during the conversation.',
  },
];

const RIGHT_POINTS = [
  {
    icon: 'flow',
    title: 'Trigger workflows',
    text: 'Hand off to Zapier, Make, n8n, or webhooks the moment an action is taken.',
  },
  {
    icon: 'code',
    title: 'Open APIs',
    text: 'Extend VoilitAI with custom endpoints when your process needs more than a plug-in.',
  },
  {
    icon: 'shield',
    title: 'Secure by default',
    text: 'Encrypted traffic, controlled access, and audit-friendly conversation records.',
  },
];

function pct(n, total) {
  return `${(n / total) * 100}%`;
}

function SidePoint({ icon, title, text, delay, align = 'left' }) {
  return (
    <div
      className={`integration-side-item flex gap-3 ${align === 'right' ? 'lg:flex-row-reverse lg:text-right' : ''}`}
      style={{ '--node-delay': delay }}
    >
      <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] text-violet">
        <Icon name={icon} className="h-4 w-4" />
      </span>
      <div className="min-w-0">
        <p className="text-sm font-semibold tracking-tight">{title}</p>
        <p className="mt-1 text-[0.8rem] leading-relaxed text-[var(--fg-muted)]">{text}</p>
      </div>
    </div>
  );
}

function DiagramCanvas({ uid }) {
  return (
    <div className="relative w-full aspect-[38/27]">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid meet"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <radialGradient
            id={`${uid}-stroke`}
            cx={HUB.x}
            cy={HUB.y}
            r={RADIUS}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="var(--color-violet)" stopOpacity="0.85" />
            <stop offset="70%" stopColor="var(--color-violet)" stopOpacity="0.45" />
            <stop offset="100%" stopColor="var(--color-cyan)" stopOpacity="0.3" />
          </radialGradient>
          <filter id={`${uid}-glow`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <circle
          cx={HUB.x}
          cy={HUB.y}
          r="48"
          className="integration-orbit"
          stroke="color-mix(in srgb, var(--color-violet) 28%, transparent)"
          strokeWidth="1"
          strokeDasharray="3 6"
        />

        {NODES.map((node, i) => {
          const d = `M ${HUB.x} ${HUB.y} L ${node.x} ${node.y}`;
          return (
            <g key={node.id}>
                <path
                  d={d}
                  className="integration-path"
                  stroke={`url(#${uid}-stroke)`}
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  style={{ '--path-delay': `${100 + i * 70}ms` }}
                />
              <circle
                r="2.5"
                fill="var(--color-violet)"
                filter={`url(#${uid}-glow)`}
                className="integration-packet"
              >
                <animateMotion
                  dur={`${2.6 + i * 0.25}s`}
                  begin={`${0.75 + i * 0.12}s`}
                  repeatCount="indefinite"
                  path={d}
                />
              </circle>
            </g>
          );
        })}
      </svg>

      <div
        className="integration-pin absolute z-[2]"
        style={{ left: pct(HUB.x, W), top: pct(HUB.y, H), '--node-delay': '60ms' }}
      >
        <div className="integration-hub relative">
          <span className="pointer-events-none absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet/25 pulse-ring" />
          <div className="relative whitespace-nowrap rounded-xl border border-violet/35 bg-[color-mix(in_srgb,var(--card)_96%,transparent)] px-4 py-2.5 text-center shadow-[0_0_36px_rgba(178,75,255,0.14)] backdrop-blur-md">
            <p className="text-sm font-semibold tracking-tight">VoilitAI</p>
            <p className="mt-0.5 text-[0.68rem] leading-none text-[var(--fg-muted)]">
              AI Voice Employee platform
            </p>
          </div>
        </div>
      </div>

      {NODES.map((node, i) => (
        <div
          key={node.id}
          className="integration-pin absolute z-[1]"
          style={{
            left: pct(node.x, W),
            top: pct(node.y, H),
            '--node-delay': `${220 + i * 70}ms`,
            '--float-delay': `${i * 0.35}s`,
          }}
        >
          <div className="integration-node">
            <div className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-[var(--border)] bg-[color-mix(in_srgb,var(--bg-elevated)_96%,transparent)] px-3 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.08)] backdrop-blur-md transition duration-300 hover:border-violet/40">
              <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet/12 text-violet">
                <Icon name={node.icon} className="h-3.5 w-3.5" />
              </span>
              <p className="pr-0.5 text-[0.8rem] font-semibold tracking-tight">{node.label}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function IntegrationsDiagram() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  const uid = useId().replace(/:/g, '');

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setActive(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`ui-shell relative w-full overflow-hidden integration-stage ${active ? 'is-active' : ''}`}
    >
      <div className="pointer-events-none absolute inset-0 hero-glow opacity-60" aria-hidden="true" />

      <div className="relative grid items-center gap-8 px-5 py-8 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.35fr)_minmax(0,0.9fr)] lg:gap-6 lg:px-8 lg:py-10 xl:gap-10">
        {/* Left content */}
        <div className="order-2 space-y-6 lg:order-1">
          <div className="integration-side-item" style={{ '--node-delay': '80ms' }}>
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-violet">Connect</p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight">Plug into your stack</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--fg-muted)]">
              VoilitAI sits in the middle of the systems you already run: phones, CRM, and calendars.
            </p>
          </div>
          <div className="space-y-5">
            {LEFT_POINTS.map((item, i) => (
              <SidePoint key={item.title} {...item} delay={`${180 + i * 90}ms`} />
            ))}
          </div>
        </div>

        {/* Center graphic */}
        <div className="order-1 mx-auto w-full max-w-xl lg:order-2">
          <DiagramCanvas uid={uid} />
        </div>

        {/* Right content */}
        <div className="order-3 space-y-6">
          <div className="integration-side-item lg:text-right" style={{ '--node-delay': '100ms' }}>
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-violet">Extend</p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight">Automate what happens next</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--fg-muted)]">
              From booking to follow-up, every conversation can trigger the next step in your business.
            </p>
          </div>
          <div className="space-y-5">
            {RIGHT_POINTS.map((item, i) => (
              <SidePoint key={item.title} {...item} delay={`${200 + i * 90}ms`} align="right" />
            ))}
          </div>
        </div>
      </div>

      <p className="integration-caption relative z-[1] border-t border-[var(--border)] px-5 py-4 text-center text-[0.85rem] leading-relaxed text-[var(--fg-muted)] sm:px-8">
        Twilio, calendars, CRMs, Zapier, Make, n8n, booking tools, and custom APIs. Connect what you already run.
      </p>
    </div>
  );
}
