'use client';

import { useEffect, useState } from 'react';
import { DEMO_MESSAGES } from '@/lib/content';

export default function ConversationDemo() {
  const [visible, setVisible] = useState(1);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setVisible(DEMO_MESSAGES.length);
      return;
    }
    const timer = setInterval(() => {
      setVisible((count) => (count >= DEMO_MESSAGES.length ? 1 : count + 1));
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="glass-panel overflow-hidden rounded-3xl">
      <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-4">
        <div>
          <p className="text-sm font-semibold">VoilitAI agent</p>
          <p className="text-xs text-[var(--fg-muted)]">Receptionist · Live</p>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full bg-violet/10 px-2.5 py-1 text-xs font-semibold text-violet-deep">
          <span className="h-1.5 w-1.5 rounded-full bg-violet-deep" />
          On call
        </span>
      </div>
      <div className="space-y-3 px-5 py-5">
        {DEMO_MESSAGES.slice(0, visible).map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <p
              className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                message.role === 'user'
                  ? 'bg-white/10 text-[var(--fg)]'
                  : 'bg-violet/10 text-[var(--fg)]'
              }`}
            >
              {message.text}
            </p>
          </div>
        ))}
        {visible < DEMO_MESSAGES.length && (
          <p className="text-xs text-[var(--fg-muted)]">Agent responding…</p>
        )}
      </div>
      <div className="grid grid-cols-3 gap-px border-t border-[var(--border)] bg-[var(--border)] text-center text-xs">
        {['Appointment booked', 'CRM updated', 'Text sent'].map((label) => (
          <p key={label} className="bg-[var(--bg-elevated)] px-2 py-3 font-medium text-[var(--fg-muted)]">
            {label}
          </p>
        ))}
      </div>
    </div>
  );
}
