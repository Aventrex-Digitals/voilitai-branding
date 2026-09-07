import { POSTS } from '@/lib/posts';
import { SOLUTIONS } from '@/lib/solutions';
import { absoluteUrl } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap() {
  const lastModified = new Date('2026-09-07T00:00:00.000Z');

  const staticPages = [
    { path: '/', priority: 1, changeFrequency: 'weekly' },
    { path: '/features/', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/solutions/', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/how-it-works/', priority: 0.85, changeFrequency: 'monthly' },
    { path: '/pricing/', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/faq/', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/blog/', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/trust/', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/about/', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/contact/', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/privacy/', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/terms/', priority: 0.3, changeFrequency: 'yearly' },
  ];

  return [
    ...staticPages.map((page) => ({
      url: absoluteUrl(page.path),
      lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...SOLUTIONS.map((solution) => ({
      url: absoluteUrl(`/solutions/${solution.slug}/`),
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
    ...POSTS.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}/`),
      lastModified: new Date(`${post.date}T00:00:00.000Z`),
      changeFrequency: 'monthly',
      priority: 0.7,
    })),
  ];
}
