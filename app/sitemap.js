import { SOLUTIONS } from '@/lib/solutions';
import { getBlogPosts } from '@/lib/aventrex-blog';
import { absoluteUrl, SITE_URL } from '@/lib/site';

export const revalidate = 60;

/** Core marketing pages — keep in sync with the app route pages. */
const STATIC_PAGES = [
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

/**
 * Normalize a path or absolute URL to a trailing-slash site URL.
 * @param {string} pathOrUrl
 */
function toSitemapUrl(pathOrUrl) {
  if (!pathOrUrl) return absoluteUrl('/');

  try {
    const url = pathOrUrl.startsWith('http://') || pathOrUrl.startsWith('https://')
      ? new URL(pathOrUrl)
      : new URL(pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`, SITE_URL);

    if (url.origin !== new URL(SITE_URL).origin) {
      return absoluteUrl('/');
    }

    let pathname = url.pathname || '/';
    if (!pathname.endsWith('/')) pathname = `${pathname}/`;
    return `${SITE_URL}${pathname}`;
  } catch {
    return absoluteUrl('/');
  }
}

/**
 * @param {unknown} value
 * @returns {Date | undefined}
 */
function safeDate(value) {
  if (!value) return undefined;
  if (value instanceof Date && !Number.isNaN(value.getTime())) return value;

  const raw = String(value).trim();
  if (!raw) return undefined;

  // Prefer YYYY-MM-DD as UTC midnight so lastmod is stable across regions.
  const dayOnly = /^(\d{4})-(\d{2})-(\d{2})$/.exec(raw);
  if (dayOnly) {
    const parsed = new Date(`${dayOnly[1]}-${dayOnly[2]}-${dayOnly[3]}T00:00:00.000Z`);
    return Number.isNaN(parsed.getTime()) ? undefined : parsed;
  }

  const parsed = new Date(raw);
  return Number.isNaN(parsed.getTime()) ? undefined : parsed;
}

/**
 * @param {Awaited<ReturnType<typeof getBlogPosts>>[number]} post
 */
function blogEntry(post, fallbackDate) {
  const seo = post.seo && typeof post.seo === 'object' ? post.seo : {};
  if (seo.noindex === true) return null;

  const path = typeof seo.canonical_path === 'string' && seo.canonical_path.trim()
    ? seo.canonical_path.trim()
    : `/blog/${post.slug}/`;

  const lastModified =
    safeDate(seo.updated_at) ||
    safeDate(seo.modified_time) ||
    safeDate(post.date) ||
    fallbackDate;

  const image =
    (typeof seo.og_image === 'string' && seo.og_image.trim()) ||
    (typeof post.image === 'string' && post.image.trim()) ||
    '';

  return {
    url: toSitemapUrl(path),
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
    ...(image ? { images: [image] } : {}),
  };
}

export default async function sitemap() {
  const generatedAt = new Date();

  /** @type {import('next').MetadataRoute.Sitemap} */
  const entries = STATIC_PAGES.map((page) => ({
    url: toSitemapUrl(page.path),
    lastModified: generatedAt,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  for (const solution of SOLUTIONS) {
    entries.push({
      url: toSitemapUrl(`/solutions/${solution.slug}/`),
      lastModified: generatedAt,
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  }

  try {
    const posts = await getBlogPosts();
    for (const post of posts) {
      if (!post?.slug) continue;
      const entry = blogEntry(post, generatedAt);
      if (entry) entries.push(entry);
    }
  } catch (err) {
    // Blog API outages must never take down /sitemap.xml for Google Search Console.
    console.error('[sitemap] Failed to load blog posts:', err);
  }

  const seen = new Set();
  return entries.filter((entry) => {
    if (!entry?.url || seen.has(entry.url)) return false;
    seen.add(entry.url);
    return true;
  });
}
