'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/components/Logo';
import Icon from '@/components/Icon';
import { useTheme } from '@/components/ThemeProvider';
import BookDemoButton from '@/components/BookDemoButton';
import { NAV_LINKS, APP_SIGN_IN, APP_GET_STARTED } from '@/lib/site';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-all duration-300 ${
        scrolled
          ? 'border-[var(--border)] bg-[color-mix(in_srgb,var(--bg)_88%,transparent)] shadow-[0_8px_30px_rgba(11,18,32,0.06)]'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-[var(--fg-muted)] transition hover:bg-[color-mix(in_srgb,var(--fg)_6%,transparent)] hover:text-[var(--fg)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <button
            type="button"
            onClick={toggle}
            className="rounded-full p-2 text-[var(--fg-muted)] transition hover:bg-[color-mix(in_srgb,var(--fg)_6%,transparent)] hover:text-[var(--fg)]"
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} className="h-5 w-5" />
          </button>
          <a
            href={APP_SIGN_IN}
            className="rounded-full px-3.5 py-2 text-sm font-medium text-[var(--fg-muted)] transition hover:text-[var(--fg)]"
          >
            Sign in
          </a>
          <a
            href={APP_GET_STARTED}
            className="rounded-full px-3.5 py-2 text-sm font-medium text-[var(--fg-muted)] transition hover:text-[var(--fg)]"
          >
            Get started
          </a>
          <BookDemoButton className="btn-primary px-4 py-2 text-sm" />
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <button
            type="button"
            onClick={toggle}
            className="rounded-full p-2 text-[var(--fg-muted)]"
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="rounded-full p-2 text-[var(--fg)]"
            aria-expanded={open}
            aria-label="Toggle navigation menu"
          >
            <Icon name={open ? 'close' : 'menu'} className="h-6 w-6" />
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="border-t border-[var(--border)] bg-[var(--bg-elevated)] px-4 pb-5 pt-2 lg:hidden"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block rounded-xl px-3 py-3 text-base font-medium text-[var(--fg)]"
            >
              {link.label}
            </Link>
          ))}
          <BookDemoButton className="btn-primary mt-2 w-full py-3 text-center text-base" />
          <a
            href={APP_SIGN_IN}
            className="mt-2 block rounded-full py-3 text-center text-base font-medium text-[var(--fg-muted)]"
          >
            Sign in
          </a>
          <a
            href={APP_GET_STARTED}
            className="block rounded-full py-3 text-center text-base font-medium text-[var(--fg-muted)]"
          >
            Get started
          </a>
        </nav>
      )}
    </header>
  );
}
