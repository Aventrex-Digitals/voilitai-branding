import SeoLandingPage from '@/components/SeoLandingPage';
import { pageMetadata } from '@/lib/seo';
import { KEYWORDS } from '@/lib/site';
import { getUseCasePage, USE_CASE_SLUGS } from '@/lib/seo-landing';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return USE_CASE_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const page = getUseCasePage(params.slug);
  if (!page) return {};
  return pageMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: page.path,
    keywords: [...(page.keywords || []), ...KEYWORDS],
  });
}

export default function UseCasePage({ params }) {
  const page = getUseCasePage(params.slug);
  if (!page) notFound();

  return (
    <SeoLandingPage
      page={page}
      crumbs={[
        { name: 'Home', path: '/' },
        { name: 'Use cases', path: '/use-cases/' },
        { name: page.title, path: page.path },
      ]}
    />
  );
}
