import { SOLUTIONS } from '@/lib/solutions';
import { getBlogPosts } from '@/lib/aventrex-blog';
import { absoluteUrl } from '@/lib/site';

export const revalidate = 60;

export default async function sitemap() {
  const lastModified = new Date();
  const posts = await getBlogPosts();

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
    ...posts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}/`),
      lastModified: post.date ? new Date(`${post.date}T00:00:00.000Z`) : lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    })),
  ];
}
