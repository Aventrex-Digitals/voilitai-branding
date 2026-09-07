/** Aventrex Digital public API — product-scoped Voilit AI blogs. */

export const AVENTREX_API_BASE = 'https://aventrexdigital.com';

export const AVENTREX_PRODUCT_SLUG = 'voilit-ai';

export const BLOG_REVALIDATE_SECONDS = 60;

export function getApiBase() {
  const fromPublic = typeof process !== 'undefined' ? process.env.NEXT_PUBLIC_AVENTREX_API_URL : '';
  const fromServer = typeof process !== 'undefined' ? process.env.AVENTREX_API_URL : '';
  return (fromPublic || fromServer || AVENTREX_API_BASE).replace(/\/$/, '');
}

export function getProductSlug() {
  const fromPublic = typeof process !== 'undefined' ? process.env.NEXT_PUBLIC_AVENTREX_PRODUCT_SLUG : '';
  const fromServer = typeof process !== 'undefined' ? process.env.AVENTREX_PRODUCT_SLUG : '';
  return fromPublic || fromServer || AVENTREX_PRODUCT_SLUG;
}

export function resolveBlogImageUrl(image, apiBase = getApiBase()) {
  if (!image || typeof image !== 'string') return '';
  const trimmed = image.trim();
  if (!trimmed) return '';
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) return trimmed;
  if (trimmed.startsWith('//')) return `https:${trimmed}`;
  if (apiBase && trimmed.startsWith('/')) return `${apiBase.replace(/\/$/, '')}${trimmed}`;
  return trimmed;
}

export function blogListUrl() {
  const product = getProductSlug();
  return `${getApiBase()}/api/blog?scope=product&product=${encodeURIComponent(product)}`;
}

export function blogPostUrl(slug) {
  const product = getProductSlug();
  return `${getApiBase()}/api/blog/${encodeURIComponent(slug)}?scope=product&product=${encodeURIComponent(product)}`;
}
