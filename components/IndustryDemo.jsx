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
    <div className="glass-panel overflow-hidden rounded-[1.75rem]">
      <div className="flex gap-1 overflow-x-auto border-b border-[var(--border)] px-3 py-3">
        {demos.map((item) => {
          const selected = item.id === demo.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveId(item.id)}
              className={`shrink-0 rounded-full px-3.5 py-1.5 text-sm font-medium transition ${
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

      <div className="flex items-center justify-between px-5 py-4">
        <div>
          <p className="text-sm font-semibold">VoilitAI · {demo.agent}</p>
          <p className="text-xs text-[var(--fg-muted)]">Voice agent · Live preview</p>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full bg-violet/10 px-2.5 py-1 text-xs font-semibold text-violet-deep">
          <span className="h-1.5 w-1.5 rounded-full bg-violet-deep" />
          On call
        </span>
      </div>

      <div className="min-h-[16.5rem] space-y-3 px-5 pb-5">
        {demo.messages.slice(0, visible).map((message, index) => (
          <div
            key={`${demo.id}-${index}`}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <p
              className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                message.role === 'user'
                  ? 'bg-[color-mix(in_srgb,var(--fg)_8%,transparent)] text-[var(--fg)]'
                  : 'bg-violet/10 text-[var(--fg)]'
              }`}
            >
              {message.text}
            </p>
          </div>
        ))}
        {visible < demo.messages.length && (
          <p className="text-xs text-[var(--fg-muted)]">Agent responding…</p>
        )}
      </div>

      <div className="grid grid-cols-3 gap-px border-t border-[var(--border)] bg-[var(--border)] text-center text-xs">
        {demo.outcomes.map((label) => (
          <p key={label} className="bg-[var(--bg-elevated)] px-2 py-3 font-medium text-[var(--fg-muted)]">
            {label}
          </p>
        ))}
      </div>

      <div className="border-t border-[var(--border)] px-5 py-3 text-center">
        <Link href={demo.href} className="text-sm font-semibold text-violet hover:text-violet-deep">
          {demo.cta} →
        </Link>
      </div>
    </div>
  );
}
