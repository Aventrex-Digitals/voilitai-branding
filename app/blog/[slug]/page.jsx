import { notFound } from 'next/navigation';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import CtaSection from '@/components/CtaSection';
import { breadcrumbJsonLd, articleJsonLd } from '@/lib/schema';
import { POSTS, getPost } from '@/lib/posts';
import { SITE_NAME } from '@/lib/site';
import { articleMetadata } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return articleMetadata(post);
}

function Block({ block }) {
  if (block.h) return <h2 className="font-display mt-10 text-2xl font-bold text-[var(--fg)]">{block.h}</h2>;
  if (block.p) return <p className="mt-4 leading-relaxed text-[var(--fg-muted)]">{block.p}</p>;
  if (block.ul) {
    return (
      <ul className="mt-4 list-disc space-y-2 pl-5 text-[var(--fg-muted)]">
        {block.ul.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  return null;
}

export default async function BlogArticlePage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Resources', path: '/blog/' },
          { name: post.title, path: `/blog/${post.slug}/` },
        ])}
      />
      <JsonLd data={articleJsonLd(post)} />
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <Breadcrumbs
          align="left"
          items={[
            { name: 'Home', path: '/' },
            { name: 'Resources', path: '/blog/' },
            { name: post.title, path: `/blog/${post.slug}/` },
          ]}
        />
        <p className="text-xs uppercase tracking-[0.16em] text-[var(--fg-muted)]">
          {post.category} · {post.date} · {post.readingTime}
        </p>
        <h1 className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-5xl">{post.title}</h1>
        <p className="mt-5 text-lg text-[var(--fg-muted)]">{post.description}</p>
        {post.body.map((block, index) => (
          <Block key={index} block={block} />
        ))}
        <p className="mt-12 text-sm text-[var(--fg-muted)]">
          Written by {SITE_NAME}. Want this in production?{' '}
          <Link href="/contact/" className="font-semibold text-violet">
            Talk to us
          </Link>
          .
        </p>
      </article>
      <CtaSection />
    </>
  );
}
