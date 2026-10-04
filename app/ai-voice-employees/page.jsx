import SeoLandingPage from '@/components/SeoLandingPage';
import { pageMetadata } from '@/lib/seo';
import { KEYWORDS } from '@/lib/site';
import { PRODUCT_PAGES } from '@/lib/seo-landing';

const page = PRODUCT_PAGES['ai-voice-employees'];

export const metadata = pageMetadata({
  title: page.metaTitle,
  description: page.metaDescription,
  path: page.path,
  keywords: [...page.keywords, ...KEYWORDS],
});

export default function AiVoiceEmployeesPage() {
  return (
    <SeoLandingPage
      page={page}
      crumbs={[
        { name: 'Home', path: '/' },
        { name: page.title, path: page.path },
      ]}
    />
  );
}
