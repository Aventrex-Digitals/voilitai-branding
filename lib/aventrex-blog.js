import {
  BLOG_REVALIDATE_SECONDS,
  blogListUrl,
  blogPostUrl,
  resolveBlogImageUrl,
} from '@/lib/aventrex-blog-config';

/** @param {Record<string, unknown>} apiPost */
export function mapApiPost(apiPost) {
  const image = typeof apiPost.image === 'string' ? apiPost.image : '';
  return {
    slug: String(apiPost.slug ?? ''),
    title: String(apiPost.title ?? ''),
    excerpt: String(apiPost.excerpt ?? ''),
    date: String(apiPost.date ?? ''),
    author: apiPost.author ? String(apiPost.author) : '',
    authorRole: apiPost.authorRole ? String(apiPost.authorRole) : '',
    image: resolveBlogImageUrl(image),
    category: apiPost.category ? String(apiPost.category) : '',
    readTime: apiPost.readTime ? String(apiPost.readTime) : '',
    content: typeof apiPost.content === 'string' ? apiPost.content : '',
    seo: apiPost.seo && typeof apiPost.seo === 'object' ? apiPost.seo : null,
  };
}

export function formatBlogDate(dateStr) {
  if (!dateStr) return '';
  const parsed = new Date(dateStr);
  if (Number.isNaN(parsed.getTime())) return dateStr;
  return parsed.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * @returns {Promise<ReturnType<typeof mapApiPost>[]>}
 */
export async function getBlogPosts() {
  try {
    const res = await fetch(blogListUrl(), {
      next: { revalidate: BLOG_REVALIDATE_SECONDS, tags: ['blog'] },
    });

    if (!res.ok) {
      console.error(`Aventrex blog API error: ${res.status}`);
      return [];
    }

    const data = await res.json();
    const posts = Array.isArray(data.posts) ? data.posts : [];
    return posts.map(mapApiPost).filter((post) => post.slug);
  } catch (err) {
    console.error('Aventrex blog API fetch failed:', err);
    return [];
  }
}

/**
 * @param {string} slug
 * @returns {Promise<ReturnType<typeof mapApiPost> | null>}
 */
export async function getBlogPost(slug) {
  if (!slug) return null;

  try {
    const res = await fetch(blogPostUrl(slug), {
      next: { revalidate: BLOG_REVALIDATE_SECONDS, tags: ['blog', `blog:${slug}`] },
    });

    if (res.status === 404) return null;
    if (!res.ok) {
      console.error(`Aventrex blog API error for ${slug}: ${res.status}`);
      return null;
    }

    const data = await res.json();
    return data.post ? mapApiPost(data.post) : null;
  } catch (err) {
    console.error(`Aventrex blog API fetch failed for ${slug}:`, err);
    return null;
  }
}
