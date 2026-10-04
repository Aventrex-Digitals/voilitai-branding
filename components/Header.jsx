'use client';

import { useEffect, useId, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/components/Logo';
import Icon from '@/components/Icon';
import { useTheme } from '@/components/ThemeProvider';
import BookDemoButton from '@/components/BookDemoButton';
import { NAV_LINKS, APP_SIGN_IN, APP_GET_STARTED } from '@/lib/site';
import { INDUSTRY_NAV } from '@/lib/solutions';

const FEATURED_INDUSTRIES = INDUSTRY_NAV.slice(0, 8);

export default function Header() {
  const [open, setOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();
  const pathname = usePathname();
  const industriesRef = useRef(null);
  const closeTimer = useRef(null);
  const menuId = useId();

  useEffect(() => {
    setOpen(false);
    setIndustriesOpen(false);
    setMobileIndustriesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!industriesOpen) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') setIndustriesOpen(false);
    };
    const onPointer = (event) => {
      if (industriesRef.current && !industriesRef.current.contains(event.target)) {
        setIndustriesOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('pointerdown', onPointer);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('pointerdown', onPointer);
    };
  }, [industriesOpen]);

  const openIndustries = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setIndustriesOpen(true);
  };

  const scheduleCloseIndustries = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setIndustriesOpen(false), 140);
  };

  return (
    <header className={`sticky top-0 z-50 nav-shell ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => {
            if (link.mega === 'industries') {
              return (
                <div
                  key={link.href}
                  ref={industriesRef}
                  className="relative"
                  onMouseEnter={openIndustries}
                  onMouseLeave={scheduleCloseIndustries}
                >
                  <button
                    type="button"
                    className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[0.9rem] font-medium transition ${
                      industriesOpen || pathname.startsWith('/solutions')
                        ? 'text-[var(--fg)]'
                        : 'text-[var(--fg-muted)] hover:text-[var(--fg)]'
                    }`}
                    aria-expanded={industriesOpen}
                    aria-controls={menuId}
                    onClick={() => setIndustriesOpen((value) => !value)}
                    onFocus={openIndustries}
                  >
                    Industries
                    <Icon
                      name="chevron"
                      className={`h-3.5 w-3.5 transition duration-300 ${industriesOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  <div
                    id={menuId}
                    role="menu"
                    aria-label="Industries"
                    className={`industries-mega absolute left-0 top-[calc(100%+0.65rem)] z-50 w-[min(42rem,calc(100vw-2rem))] ${
                      industriesOpen ? 'is-open' : ''
                    }`}
                    onMouseEnter={openIndustries}
                    onMouseLeave={scheduleCloseIndustries}
                  >
                    <div className="overflow-hidden rounded-[1.35rem] border border-[var(--border)] bg-[var(--card)] shadow-[var(--shadow)]">
                      <div className="flex items-end justify-between gap-4 border-b border-[var(--border)] px-5 py-4">
                        <div>
                          <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-violet">
                            Industries
                          </p>
                          <p className="mt-1 text-sm text-[var(--fg-muted)]">
                            AI voice employees built for phone-driven businesses
                          </p>
                        </div>
                        <Link
                          href="/solutions/"
                          className="hidden shrink-0 text-sm font-semibold text-violet sm:inline-flex"
                          role="menuitem"
                        >
                          View all →
                        </Link>
                      </div>

                      <div className="grid gap-1 p-2 sm:grid-cols-2">
                        {FEATURED_INDUSTRIES.map((industry) => (
                          <Link
                            key={industry.slug}
                            href={industry.href}
                            role="menuitem"
                            className="group flex items-start gap-3 rounded-[1rem] px-3 py-3 transition hover:bg-[color-mix(in_srgb,var(--fg)_5%,transparent)]"
                          >
                            <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] text-violet transition group-hover:border-violet/35 group-hover:bg-violet/10">
                              <Icon name={industry.icon} className="h-4 w-4" />
                            </span>
                            <span className="min-w-0">
                              <span className="block text-sm font-semibold tracking-tight text-[var(--fg)]">
                                {industry.name}
                              </span>
                              <span className="mt-0.5 block text-xs leading-snug text-[var(--fg-muted)]">
                                {industry.blurb}
                              </span>
                            </span>
                          </Link>
                        ))}
                      </div>

                      <div className="border-t border-[var(--border)] bg-[color-mix(in_srgb,var(--band)_70%,transparent)] px-5 py-3.5">
                        <Link
                          href="/solutions/"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--fg)] transition hover:text-violet"
                          role="menuitem"
                        >
                          Explore all industries
                          <Icon name="arrow" className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-3.5 py-2 text-[0.9rem] font-medium text-[var(--fg-muted)] transition hover:text-[var(--fg)]"
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <button
            type="button"
            onClick={toggle}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--fg-muted)] transition hover:text-[var(--fg)]"
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} className="h-4 w-4" />
          </button>
          <a
            href={APP_SIGN_IN}
            className="px-2 text-[0.9rem] font-medium text-[var(--fg-muted)] transition hover:text-[var(--fg)]"
          >
            Sign in
          </a>
          <BookDemoButton className="btn-primary px-4 py-2.5 text-[0.875rem]">
            Book a Demo
          </BookDemoButton>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={toggle}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--fg-muted)]"
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--fg)]"
            aria-expanded={open}
            aria-label="Toggle navigation menu"
          >
            <Icon name={open ? 'close' : 'menu'} className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="border-t border-[var(--border)] bg-[var(--bg-elevated)] px-4 pb-5 pt-2 lg:hidden"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link) => {
            if (link.mega === 'industries') {
              return (
                <div key={link.href} className="border-b border-[var(--border)] py-1">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between px-2 py-3 text-[0.95rem] font-medium text-[var(--fg)]"
                    aria-expanded={mobileIndustriesOpen}
                    onClick={() => setMobileIndustriesOpen((value) => !value)}
                  >
                    Industries
                    <Icon
                      name="chevron"
                      className={`h-4 w-4 text-[var(--fg-muted)] transition ${
                        mobileIndustriesOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {mobileIndustriesOpen && (
                    <div className="space-y-1 pb-3 pl-2">
                      {FEATURED_INDUSTRIES.map((industry) => (
                        <Link
                          key={industry.slug}
                          href={industry.href}
                          className="flex items-center gap-3 rounded-xl px-2 py-2.5 text-sm text-[var(--fg-muted)] transition hover:bg-[color-mix(in_srgb,var(--fg)_5%,transparent)] hover:text-[var(--fg)]"
                        >
                          <Icon name={industry.icon} className="h-4 w-4 text-violet" />
                          {industry.name}
                        </Link>
                      ))}
                      <Link href="/solutions/" className="block px-2 py-2 text-sm font-semibold text-violet">
                        View all industries →
                      </Link>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className="block px-2 py-3 text-[0.95rem] font-medium text-[var(--fg)]"
              >
                {link.label}
              </Link>
            );
          })}
          <BookDemoButton className="btn-primary mt-2 w-full py-3 text-center">
            Book a Demo
          </BookDemoButton>
          <a href={APP_GET_STARTED} className="btn-secondary mt-2 w-full py-3 text-center">
            Create Your Voice Employee
          </a>
          <a href={APP_SIGN_IN} className="mt-2 block py-3 text-center text-sm font-medium text-[var(--fg-muted)]">
            Sign in
          </a>
        </nav>
      )}
    </header>
  );
}
