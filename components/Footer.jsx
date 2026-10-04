import Link from 'next/link';
import Logo from '@/components/Logo';
import Icon from '@/components/Icon';
import BookDemoButton from '@/components/BookDemoButton';
import {
  FOOTER_LINKS,
  SITE_NAME,
  CONTACT_EMAIL,
  FOOTER_DESCRIPTION,
  SOCIAL_LINKS,
} from '@/lib/site';

function SocialItem({ item }) {
  const className =
    'inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--fg-muted)] transition hover:border-violet/40 hover:text-violet';

  if (item.href) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={item.label}
        className={className}
      >
        <Icon name={item.icon} className="h-4 w-4" />
      </a>
    );
  }

  return (
    <span
      aria-label={`${item.label} (link coming soon)`}
      title={`${item.label} — link coming soon`}
      className={`${className} opacity-70`}
    >
      <Icon name={item.icon} className="h-4 w-4" />
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[var(--border)] bg-[var(--bg-elevated)] text-[var(--fg-muted)]">
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6">
          <div className="sm:col-span-2 lg:col-span-2">
            <Logo linked={false} />
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              {FOOTER_DESCRIPTION}
            </p>
            <p className="mt-5 text-sm">
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-violet-deep transition hover:text-violet">
                {CONTACT_EMAIL}
              </a>
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-2.5" aria-label="Social profiles">
              {SOCIAL_LINKS.map((item) => (
                <SocialItem key={item.id} item={item} />
              ))}
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <nav key={title} aria-label={`${title} links`} className="lg:col-span-1">
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
