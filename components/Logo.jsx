'use client';

import Image from 'next/image';
import Link from 'next/link';
import { SITE_NAME, FAVICON_DARK, FAVICON_LIGHT } from '@/lib/site';
import { useTheme } from '@/components/ThemeProvider';

export function Wordmark({ className = '' }) {
  return (
    <span className={`font-display font-bold lowercase tracking-[-0.04em] ${className}`}>
      vo
      <span className="wordmark-i wordmark-i-violet">i</span>
      l
      <span className="wordmark-i">i</span>
      ta
      <span className="wordmark-i wordmark-i-cyan">i</span>
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
        alt=""
        width={40}
        height={40}
        className="h-10 w-10 rounded-[0.9rem] object-cover ring-1 ring-[var(--border)]"
        priority
      />
      <Wordmark className="text-[1.35rem] text-[var(--fg)]" />
    </span>
  );

  if (!linked) {
    return (
      <span className="inline-flex shrink-0 items-center" role="img" aria-label={SITE_NAME}>
        {mark}
      </span>
    );
  }

  return (
    <Link href="/" className="inline-flex shrink-0 items-center" aria-label={`${SITE_NAME} home`}>
      {mark}
    </Link>
  );
}
