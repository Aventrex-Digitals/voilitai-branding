'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { VOICE_DEMOS } from '@/lib/products';

export default function IndustryDemo({ demos = VOICE_DEMOS }) {
  const [activeId, setActiveId] = useState(demos[0]?.id);
  const [visible, setVisible] = useState(1);
  const demo = demos.find((item) => item.id === activeId) || demos[0];

  useEffect(() => {
    setVisible(1);
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setVisible(demo.messages.length);
      return undefined;
    }
    const timer = setInterval(() => {
      setVisible((count) => (count >= demo.messages.length ? 1 : count + 1));
    }, 1800);
    return () => clearInterval(timer);
  }, [demo]);

  if (!demo) return null;

  return (
    <div className="demo-shell relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet/50 to-transparent" aria-hidden="true" />

      <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-4">
        <div className="flex items-center gap-3">
          <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-violet/15 text-sm font-bold text-violet">
            {demo.agent.slice(0, 2).toUpperCase()}
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-[var(--card)] bg-emerald-400" />
          </span>
          <div>
            <p className="text-sm font-bold tracking-tight">{demo.agent}</p>
            <p className="text-xs text-[var(--fg-muted)]">Speed to lead · Live conversation</p>
          </div>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[color-mix(in_srgb,var(--bg)_55%,transparent)] px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-violet">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet opacity-50" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-violet" />
          </span>
          Active
        </span>
      </div>

      <div className="flex gap-1 overflow-x-auto px-3 py-3">
        {demos.map((item) => {
          const selected = item.id === demo.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveId(item.id)}
              className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.08em] transition ${
                selected
                  ? 'bg-[var(--fg)] text-[var(--bg)]'
                  : 'text-[var(--fg-muted)] hover:bg-[color-mix(in_srgb,var(--fg)_6%,transparent)] hover:text-[var(--fg)]'
              }`}
              aria-pressed={selected}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="h-[22rem] space-y-3 overflow-hidden px-5 pb-5 sm:h-[24rem]">
        <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-[var(--fg-muted)]">
          Outbound engaged · Interactive
        </p>
        {demo.messages.slice(0, visible).map((message, index) => (
          <div
            key={`${demo.id}-${index}`}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <p
              className={`max-w-[85%] rounded-[1.1rem] px-4 py-2.5 text-sm leading-relaxed ${
                message.role === 'user'
                  ? 'rounded-tr-sm bg-[color-mix(in_srgb,var(--fg)_8%,transparent)] text-[var(--fg)]'
                  : 'rounded-tl-sm bg-violet/15 text-[var(--fg)]'
              }`}
            >
              {message.text}
            </p>
          </div>
        ))}
        <p
          className={`text-xs text-[var(--fg-muted)] transition-opacity ${
            visible < demo.messages.length ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={visible >= demo.messages.length}
        >
          Agent responding…
        </p>
      </div>

      <div className="grid grid-cols-3 gap-px border-t border-[var(--border)] bg-[var(--border)] text-center text-xs">
        {demo.outcomes.map((label) => (
          <p key={label} className="bg-[var(--bg-elevated)] px-2 py-3.5 font-semibold text-[var(--fg-muted)]">
            {label}
          </p>
        ))}
      </div>

      <div className="border-t border-[var(--border)] px-5 py-3.5 text-center">
        <Link href={demo.href} className="text-sm font-semibold text-violet hover:text-violet-deep">
          Explore {demo.label} →
        </Link>
      </div>
    </div>
  );
}
