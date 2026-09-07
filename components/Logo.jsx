'use client';

import Image from 'next/image';
import Link from 'next/link';
import { SITE_NAME, FAVICON_DARK, FAVICON_LIGHT } from '@/lib/site';
import { useTheme } from '@/components/ThemeProvider';

function DotI({ color }) {
  return (
    <span className="relative mx-[0.02em] inline-block h-[0.72em] w-[0.28em] align-baseline">
      <span
        className="absolute left-1/2 top-[0.05em] h-[0.18em] w-[0.18em] -translate-x-1/2 rounded-full"
        style={{ background: color }}
      />
      <span className="absolute bottom-0 left-1/2 h-[0.5em] w-[0.14em] -translate-x-1/2 rounded-full bg-current" />
    </span>
  );
}

export function Wordmark({ className = '' }) {
  return (
    <span className={`font-display font-bold lowercase tracking-[-0.04em] ${className}`}>
      vo
      <DotI color="#c44dff" />
      l
      <DotI color="currentColor" />
      ta
      <DotI color="#00c2d7" />
    </span>
  );
}

export default function Logo({ linked = true, className = '' }) {
  const { theme } = useTheme();
  const src = theme === 'dark' ? FAVICON_DARK : FAVICON_LIGHT;

  const mark = (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src={src}
        alt={`${SITE_NAME} logo`}
        width={40}
        height={40}
        className="h-10 w-10 rounded-[0.9rem] object-cover ring-1 ring-[var(--border)]"
        priority
      />
      <Wordmark className="text-[1.35rem] text-[var(--fg)]" />
      <span className="sr-only">{SITE_NAME}</span>
    </span>
  );

  if (!linked) return mark;

  return (
    <Link href="/" className="inline-flex shrink-0 items-center" aria-label={`${SITE_NAME} home`}>
      {mark}
    </Link>
  );
}
