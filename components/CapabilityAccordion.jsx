'use client';

import { useState } from 'react';
import { PLATFORM_CAPABILITIES } from '@/lib/products';
import Icon from '@/components/Icon';

export default function CapabilityAccordion({ items = PLATFORM_CAPABILITIES }) {
  const [openId, setOpenId] = useState(items[0]?.id);
  const active = items.find((item) => item.id === openId) || items[0];

  return (
    <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
      <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
        {items.map((item) => {
          const open = item.id === openId;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setOpenId(item.id)}
              className="flex w-full items-start gap-4 py-5 text-left transition"
              aria-expanded={open}
            >
              <span className="font-display w-10 shrink-0 text-sm font-bold text-violet">{item.number}</span>
              <span className="min-w-0 flex-1">
                <span className={`block font-display text-xl font-semibold sm:text-2xl ${open ? 'text-[var(--fg)]' : 'text-[var(--fg-muted)]'}`}>
                  {item.title}
                </span>
                {open && (
                  <span className="mt-2 block sm:hidden">
                    <span className="block text-sm leading-relaxed text-[var(--fg-muted)]">{item.lead}</span>
                    <span className="mt-3 block space-y-2">
                      {item.points.map((point) => (
                        <span key={point} className="flex gap-2 text-sm text-[var(--fg)]">
                          <Icon name="check" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-violet" />
                          {point}
                        </span>
                      ))}
                    </span>
                  </span>
                )}
              </span>
              <Icon
                name="chevron"
                className={`mt-1.5 h-4 w-4 shrink-0 text-[var(--fg-muted)] transition ${open ? 'rotate-180' : ''}`}
              />
            </button>
          );
        })}
      </div>

      {active && (
        <div className="premium-card hidden p-8 lg:block">
          <p className="font-display text-sm font-bold text-violet">{active.number}</p>
          <h3 className="font-display mt-3 text-2xl font-bold">{active.title}</h3>
          <p className="mt-3 leading-relaxed text-[var(--fg-muted)]">{active.lead}</p>
          <ul className="mt-6 space-y-3">
            {active.points.map((point) => (
              <li key={point} className="flex gap-3 text-sm">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-violet/15 text-violet-deep">
                  <Icon name="check" className="h-3 w-3" />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
