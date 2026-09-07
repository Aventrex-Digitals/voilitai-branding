'use client';

import { useState } from 'react';
import { CONTACT_EMAIL, DEMO_FORM_ENDPOINT } from '@/lib/site';

const FIELD =
  'mt-1.5 w-full rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] px-3.5 py-2.5 text-sm text-[var(--fg)] placeholder:text-[var(--fg-muted)] focus:border-violet-deep focus:outline-none focus:ring-2 focus:ring-violet/20';

export default function DemoForm({ onSuccess, compact = false }) {
  const [status, setStatus] = useState('idle');

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    if (data.website) {
      setStatus('sent');
      onSuccess?.();
      return;
    }

    setStatus('sending');

    const payload = {
      _subject: `VoilitAI demo request — ${data.name}`,
      _template: 'table',
      _captcha: 'false',
      name: data.name,
      email: data.email,
      phone: data.phone,
      company: data.company,
      volume: data.volume || '-',
      message: data.message || '-',
      source: compact ? 'Book a demo modal' : 'Contact page',
    };

    try {
      const response = await fetch(DEMO_FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Submit failed');
      }

      setStatus('sent');
      form.reset();
      onSuccess?.();
    } catch {
      const body = [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone}`,
        `Company: ${data.company}`,
        `Volume: ${data.volume || '-'}`,
        '',
        data.message || '',
      ].join('\n');
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        'VoilitAI demo request'
      )}&body=${encodeURIComponent(body)}`;
      setStatus('sent');
      onSuccess?.();
    }
  }

  if (status === 'sent') {
    return (
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6 text-center">
        <p className="font-display text-lg font-semibold">You’re on the list</p>
        <p className="mt-2 text-sm leading-relaxed text-[var(--fg-muted)]">
          We’ll contact you within 24 hours to schedule your VoilitAI demo.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
      <label className="block text-sm font-medium">
        Full name *
        <input name="name" type="text" required autoComplete="name" className={FIELD} />
      </label>
      <label className="block text-sm font-medium">
        Work email *
        <input name="email" type="email" required autoComplete="email" className={FIELD} />
      </label>
      <label className="block text-sm font-medium">
        Phone *
        <input name="phone" type="tel" required autoComplete="tel" className={FIELD} />
      </label>
      <label className="block text-sm font-medium">
        Company *
        <input name="company" type="text" required autoComplete="organization" className={FIELD} />
      </label>
      <label className="block text-sm font-medium sm:col-span-2">
        Monthly call volume
        <select name="volume" className={FIELD} defaultValue="">
          <option value="" disabled>
            Select a range
          </option>
          <option>Under 500</option>
          <option>500 – 2,000</option>
          <option>2,000 – 10,000</option>
          <option>10,000+</option>
        </select>
      </label>
      <label className="block text-sm font-medium sm:col-span-2">
        What should we show you?
        <textarea
          name="message"
          rows={compact ? 3 : 4}
          className={FIELD}
          placeholder="After-hours booking, overflow, outbound reminders…"
        />
      </label>
      <label className="sr-only" aria-hidden="true">
        Website
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </label>
      <label className="flex items-start gap-2 text-sm text-[var(--fg-muted)] sm:col-span-2">
        <input
          name="consent"
          type="checkbox"
          required
          className="mt-1 accent-[#8b35e8]"
        />
        <span>I agree to be contacted about a VoilitAI demo. We’ll reply within 24 hours.</span>
      </label>
      <button type="submit" className="btn-primary sm:col-span-2" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Submit — contact me in 24 hours'}
      </button>
    </form>
  );
}
