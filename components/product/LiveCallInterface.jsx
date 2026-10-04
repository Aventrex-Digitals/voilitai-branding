'use client';

import { useEffect, useState } from 'react';
import Waveform from '@/components/Waveform';

const TRANSCRIPT = [
  { role: 'caller', text: "Hi, I'd like to book an appointment for tomorrow." },
  {
    role: 'ai',
    text: 'Absolutely. I have 10:30 AM and 2:00 PM available. Which works better for you?',
  },
  { role: 'caller', text: '10:30 works perfectly.' },
  { role: 'ai', text: "You're booked for 10:30 AM tomorrow. I'll send a confirmation shortly." },
];

export default function LiveCallInterface({ className = '' }) {
  const [visible, setVisible] = useState(1);
  const [seconds, setSeconds] = useState(161);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setVisible(TRANSCRIPT.length);
      return undefined;
    }
    const msgTimer = setInterval(() => {
      setVisible((count) => (count >= TRANSCRIPT.length ? 1 : count + 1));
    }, 2200);
    const clock = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => {
      clearInterval(msgTimer);
      clearInterval(clock);
    };
  }, []);

  const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');

  return (
    <div className={`ui-shell ${className}`}>
      <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-4">
        <div className="flex items-center gap-3">
          <span className="status-dot is-busy" />
          <div>
            <p className="text-sm font-semibold">Live call</p>
            <p className="text-xs text-[var(--fg-muted)]">Ava · Reception</p>
          </div>
        </div>
        <p className="font-mono text-sm tabular-nums text-[var(--fg-muted)]">
          00:{mins}:{secs}
        </p>
      </div>

      <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="border-b border-[var(--border)] p-5 lg:border-b-0 lg:border-r">
          <div className="flex items-center justify-between text-xs text-[var(--fg-muted)]">
            <span>Caller · +1 (415) 882-1044</span>
            <span className="rounded-full bg-violet/12 px-2 py-0.5 font-semibold uppercase tracking-[0.1em] text-violet">
              Connected
            </span>
          </div>
          <Waveform className="mt-6 h-16 sm:h-20" bars={36} />
          <div className="mt-5 flex flex-wrap gap-2">
            {['Mute', 'Hold', 'Transfer', 'End'].map((label) => (
              <span
                key={label}
                className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs font-medium text-[var(--fg-muted)]"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="max-h-[18rem] space-y-3 overflow-hidden p-5">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[var(--fg-muted)]">
            Transcript
          </p>
          {TRANSCRIPT.slice(0, visible).map((message, index) => (
            <div
              key={`${message.role}-${index}`}
              className={`flex ${message.role === 'caller' ? 'justify-end' : 'justify-start'}`}
            >
              <p
                className={`max-w-[92%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                  message.role === 'caller'
                    ? 'rounded-tr-sm bg-[color-mix(in_srgb,var(--fg)_8%,transparent)]'
                    : 'rounded-tl-sm bg-violet/12'
                }`}
              >
                {message.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-px border-t border-[var(--border)] bg-[var(--border)] text-center text-xs">
        <div className="bg-[var(--bg-elevated)] px-2 py-3">
          <p className="font-semibold">Intent</p>
          <p className="mt-0.5 text-[var(--fg-muted)]">Appointment booking</p>
        </div>
        <div className="bg-[var(--bg-elevated)] px-2 py-3">
          <p className="font-semibold">Action</p>
          <p className="mt-0.5 text-[var(--fg-muted)]">Slot reserved</p>
        </div>
        <div className="bg-[var(--bg-elevated)] px-2 py-3">
          <p className="font-semibold">CRM</p>
          <p className="mt-0.5 text-[var(--fg-muted)]">Contact updated</p>
        </div>
      </div>
    </div>
  );
}
