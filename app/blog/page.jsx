import Link from 'next/link';
import PageHero from '@/components/PageHero';
import JsonLd from '@/components/JsonLd';
import { breadcrumbJsonLd } from '@/lib/schema';
import { formatBlogDate, getBlogPosts } from '@/lib/aventrex-blog';
import { PAGE_META } from '@/lib/seo';

const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'Blog', path: '/blog/' },
];

export const metadata = PAGE_META.blog;

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(CRUMBS)} />
      <PageHero
        crumbs={CRUMBS}
        eyebrow="Blog"
        title="Clear writing on voice AI — not another hype roundup"
        lead="Guides for operators who have to put a number in production: ROI, compliance, conversation design, and what to automate first."
      />
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        {posts.length === 0 ? (
          <div className="mx-auto max-w-lg py-10 text-center">
            <p className="text-lg text-[var(--fg-muted)]">No articles published yet.</p>
            <p className="mt-3 text-sm text-[var(--fg-muted)]">
              New guides will appear here as soon as they go live.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <article key={post.slug} className="premium-card flex flex-col overflow-hidden">
                {post.image ? (
                  <Link href={`/blog/${post.slug}/`} className="block overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="aspect-[16/9] w-full object-cover"
                    />
                  </Link>
                ) : null}
                <div className="flex flex-1 flex-col p-7">
                  <p className="text-xs uppercase tracking-[0.16em] text-[var(--fg-muted)]">
                    {[post.category, post.readTime].filter(Boolean).join(' · ')}
                  </p>
                  <h2 className="mt-3 text-xl font-semibold">
                    <Link href={`/blog/${post.slug}/`} className="hover:text-violet">
                      {post.title}
                    </Link>
                  </h2>
                  {post.excerpt ? (
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--fg-muted)]">
                      {post.excerpt}
                    </p>
                  ) : (
                    <div className="flex-1" />
                  )}
                  <p className="mt-5 text-sm text-[var(--fg-muted)]">
                    {post.date ? <time dateTime={post.date}>{formatBlogDate(post.date)}</time> : null}
                    {post.author ? ` · ${post.author}` : ''}
                  </p>
                  <p className="mt-3 text-sm font-semibold text-violet">
                    <Link href={`/blog/${post.slug}/`}>Read article →</Link>
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
