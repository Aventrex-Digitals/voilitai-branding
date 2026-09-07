'use client';

import { useEffect, useRef } from 'react';
import Icon from '@/components/Icon';
import DemoForm from '@/components/DemoForm';
import { useDemo } from '@/components/DemoProvider';

export default function DemoModal() {
  const { open, closeDemo } = useDemo();
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    closeRef.current?.focus();

    function onKey(event) {
      if (event.key === 'Escape') closeDemo();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, closeDemo]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center p-3 sm:items-center sm:p-6">
      <button
        type="button"
        className="absolute inset-0 bg-[rgba(11,18,32,0.48)] backdrop-blur-sm"
        aria-label="Close demo form"
        onClick={closeDemo}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-dialog-title"
        className="relative z-10 max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-[var(--border)] bg-[var(--bg-elevated)] p-5 shadow-[0_24px_80px_rgba(11,18,32,0.18)] sm:p-7"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-deep">
              Book a demo
            </p>
            <h2 id="demo-dialog-title" className="font-display mt-1 text-2xl font-bold">
              See VoilitAI on a real call
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--fg-muted)]">
              Submit this form and we’ll contact you within 24 hours to schedule a walkthrough.
            </p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={closeDemo}
            className="rounded-full p-2 text-[var(--fg-muted)] transition hover:bg-[color-mix(in_srgb,var(--fg)_6%,transparent)] hover:text-[var(--fg)]"
            aria-label="Close"
          >
            <Icon name="close" className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-6">
          <DemoForm compact />
        </div>
      </div>
    </div>
  );
}
