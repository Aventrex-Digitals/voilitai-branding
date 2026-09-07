import Link from 'next/link';
import PageHero from '@/components/PageHero';
import JsonLd from '@/components/JsonLd';
import { breadcrumbJsonLd } from '@/lib/schema';
import { POSTS } from '@/lib/posts';
import { PAGE_META } from '@/lib/seo';

const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'Resources', path: '/blog/' },
];

export const metadata = PAGE_META.blog;

export default function BlogPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(CRUMBS)} />
      <PageHero
        crumbs={CRUMBS}
        eyebrow="Resources"
        title="Clear writing on voice AI — not another hype roundup"
        lead="Guides for operators who have to put a number in production: ROI, compliance, conversation design, and what to automate first."
      />
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {POSTS.map((post) => (
            <article key={post.slug} className="premium-card flex flex-col p-7">
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--fg-muted)]">
                {post.category} · {post.readingTime}
              </p>
              <h2 className="mt-3 text-xl font-semibold">
                <Link href={`/blog/${post.slug}/`} className="hover:text-violet">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--fg-muted)]">{post.description}</p>
              <p className="mt-5 text-sm font-semibold text-violet">
                <Link href={`/blog/${post.slug}/`}>Read article →</Link>
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
