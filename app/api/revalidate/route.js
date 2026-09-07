import { revalidatePath, revalidateTag } from 'next/cache';

/**
 * Aventrex publish hook.
 * POST { secret, slug } — secret must match REVALIDATE_SECRET
 * (same value as Aventrex VOILIT_REVALIDATE_SECRET).
 */
export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const expected = process.env.REVALIDATE_SECRET;
  const secret = typeof body?.secret === 'string' ? body.secret : '';
  const slug = typeof body?.slug === 'string' ? body.slug.trim() : '';
  const resource = body?.resource === 'plans' ? 'plans' : 'blog';

  if (!expected || secret !== expected) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (resource === 'plans') {
    revalidateTag('plans');
    revalidatePath('/');
    revalidatePath('/pricing');
    revalidatePath('/pricing/');
    return Response.json({
      revalidated: true,
      resource: 'plans',
      now: Date.now(),
    });
  }

  revalidateTag('blog');
  revalidatePath('/blog');
  revalidatePath('/blog/');
  revalidatePath('/sitemap.xml');

  if (slug) {
    revalidateTag(`blog:${slug}`);
    revalidatePath(`/blog/${slug}`);
    revalidatePath(`/blog/${slug}/`);
  }

  return Response.json({
    revalidated: true,
    slug: slug || null,
    now: Date.now(),
  });
}
