import { notFound } from 'next/navigation';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import CtaSection from '@/components/CtaSection';
import BlogContent from '@/components/BlogContent';
import BlogToc from '@/components/BlogToc';
import Breadcrumbs from '@/components/Breadcrumbs';
import { breadcrumbJsonLd, articleJsonLd } from '@/lib/schema';
import { formatBlogDate, getBlogPost, getBlogPosts } from '@/lib/aventrex-blog';
import { extractBlogToc } from '@/lib/blog-toc';
import { SITE_NAME } from '@/lib/site';
import { articleMetadata } from '@/lib/seo';

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) {
    return {
      title: 'Article not found',
      robots: { index: false, follow: false },
    };
  }
  return articleMetadata(post);
}

export default async function BlogArticlePage({ params }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) notFound();

  const toc = extractBlogToc(post.content);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog/' },
          { name: post.title, path: `/blog/${post.slug}/` },
        ])}
      />
      <JsonLd data={articleJsonLd(post)} />
      <article className="mx-auto w-full max-w-[90rem] px-4 py-16 sm:px-6 lg:px-8">
        <Breadcrumbs
          align="left"
          items={[
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog/' },
            { name: post.title, path: `/blog/${post.slug}/` },
          ]}
        />

        <div
          className={`mt-4 grid items-start gap-10 ${
            toc.length ? 'lg:grid-cols-[minmax(0,1fr)_18rem] xl:grid-cols-[minmax(0,1fr)_20rem]' : ''
          }`}
        >
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--fg-muted)]">
              {post.category ? `${post.category} · ` : ''}
              {post.date ? <time dateTime={post.date}>{formatBlogDate(post.date)}</time> : null}
              {post.author ? ` · ${post.author}` : ''}
              {post.authorRole ? ` · ${post.authorRole}` : ''}
              {post.readTime ? ` · ${post.readTime}` : ''}
            </p>
            <h1 className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
              {post.title}
            </h1>
            {post.excerpt ? (
              <p className="mt-5 text-lg text-[var(--fg-muted)]">{post.excerpt}</p>
            ) : null}
            {post.image ? (
              <figure className="mt-8 rounded-3xl border border-[var(--border)] bg-[var(--bg-elevated)] p-2 sm:p-3">
                <img
                  src={post.image}
                  alt={post.title}
                  className="block h-auto w-full object-contain"
                />
              </figure>
            ) : null}
            <div className="mt-10">
              <BlogContent content={post.content} toc={toc} />
            </div>
            <p className="mt-12 text-sm text-[var(--fg-muted)]">
              {post.author ? `Written by ${post.author}` : `Written by ${SITE_NAME}`}. Want this in
              production?{' '}
              <Link href="/contact/" className="font-semibold text-violet">
                Talk to us
              </Link>
              .
            </p>
          </div>
          {toc.length ? (
            <aside className="order-first lg:order-none">
              <div className="lg:sticky lg:top-24 lg:max-h-[calc(100vh-7.5rem)] lg:overflow-y-auto">
                <BlogToc items={toc} />
              </div>
            </aside>
          ) : null}
        </div>
      </article>
      <CtaSection />
    </>
  );
}
