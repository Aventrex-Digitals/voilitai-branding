import Link from 'next/link';
import Logo from '@/components/Logo';
import BookDemoButton from '@/components/BookDemoButton';
import { FOOTER_LINKS, SITE_NAME, CONTACT_EMAIL, FOOTER_DESCRIPTION } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[var(--border)] bg-[var(--bg-elevated)] text-[var(--fg-muted)]">
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo linked={false} />
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              {FOOTER_DESCRIPTION}
            </p>
            <p className="mt-5 text-sm">
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-violet-deep transition hover:text-violet">
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>

          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <nav key={title} aria-label={`${title} links`}>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--fg-muted)]">{title}</p>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link.href + link.label}>
                    {link.href.includes('#book-demo') ? (
                      <BookDemoButton className="text-sm font-normal text-[var(--fg)] transition hover:text-violet-deep">
                        {link.label}
                      </BookDemoButton>
                    ) : (
                      <Link href={link.href} className="text-sm text-[var(--fg)] transition hover:text-violet-deep">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[var(--border)] pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <p>SOC 2 · HIPAA-ready · GDPR-ready · 99.99% uptime</p>
        </div>
      </div>
    </footer>
  );
}
