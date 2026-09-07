'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

export default function RoiCalculator() {
  const [missed, setMissed] = useState(20);
  const [value, setValue] = useState(500);
  const bookRate = 0.25;

  const monthly = useMemo(() => Math.round(missed * bookRate * value), [missed, value]);
  const yearly = monthly * 12;

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-8">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <label className="block">
            <span className="flex items-center justify-between text-sm font-medium">
              Calls you miss a month
              <strong>{missed}</strong>
            </span>
            <input
              type="range"
              min="5"
              max="100"
              value={missed}
              onChange={(e) => setMissed(Number(e.target.value))}
              className="mt-3 w-full accent-[#8b35e8]"
            />
          </label>
          <label className="block">
            <span className="flex items-center justify-between text-sm font-medium">
              Average value of a job
              <strong>${value.toLocaleString()}</strong>
            </span>
            <input
              type="range"
              min="100"
              max="5000"
              step="50"
              value={value}
              onChange={(e) => setValue(Number(e.target.value))}
              className="mt-3 w-full accent-[#8b35e8]"
            />
          </label>
          <p className="text-xs leading-relaxed text-[var(--fg-muted)]">
            Assumes 1 in 4 missed callers would have booked. Illustrative — your numbers depend on
            call volume and job value.
          </p>
        </div>
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6">
          <p className="text-sm text-[var(--fg-muted)]">You could be losing</p>
          <p className="mt-2 font-display text-4xl font-bold tracking-tight">
            ${monthly.toLocaleString()}
            <span className="text-lg font-medium text-[var(--fg-muted)]"> / month</span>
          </p>
          <p className="mt-2 text-lg">
            or <span className="accent-text font-semibold">${yearly.toLocaleString()}</span> a year
            in work that went to whoever answered.
          </p>
          <p className="mt-5 text-sm text-[var(--fg-muted)]">
            A VoilitAI Starter agent that answers all of them starts at $49/month.
          </p>
          <Link href="/pricing/" className="btn-primary mt-6">
            See pricing
          </Link>
        </div>
      </div>
    </div>
  );
}
