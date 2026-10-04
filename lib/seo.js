import { SITE_NAME, SITE_URL, KEYWORDS, absoluteUrl } from '@/lib/site';

export const OG_IMAGE_PATH = '/opengraph-image';

export const OG_IMAGE = {
  url: OG_IMAGE_PATH,
  width: 1200,
  height: 630,
  alt: 'VoilitAI, create your own AI voice employee without developers',
  type: 'image/png',
};

export function pageMetadata({
  title,
  description,
  path,
  keywords = KEYWORDS,
  type = 'website',
  absoluteTitle = false,
  publishedTime,
  modifiedTime,
  noIndex = false,
  authors,
  image,
}) {
  const url = absoluteUrl(path);
  const ogTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`;
  const ogImages = image
    ? [{ url: image, width: 1200, height: 630, alt: title }]
    : [OG_IMAGE];
  const twitterImages = image ? [image] : [OG_IMAGE_PATH];

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    authors: authors || [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    category: 'technology',
    alternates: {
      canonical: path,
    },
    openGraph: {
      type,
      url,
      siteName: SITE_NAME,
      locale: 'en_US',
      title: ogTitle,
      description,
      images: ogImages,
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description,
      images: twitterImages,
    },
    robots: noIndex
      ? { index: false, follow: false, nocache: true }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
          },
        },
  };
}

export const PAGE_META = {
  home: pageMetadata({
    title: 'VoilitAI — AI Voice Agent Platform for Businesses | AI Voice Employees',
    description:
      'Create AI voice employees that answer calls, qualify leads and book appointments 24/7. Connect your CRM and calendar and go live in days. Hear a demo.',
    path: '/',
    absoluteTitle: true,
    keywords: KEYWORDS,
  }),
  features: pageMetadata({
    title: 'AI Voice Employee Features',
    description:
      'Create your own AI voice employee: natural voice, no-code builder, phone deployment, tool connections, and warm human handoff, without a developer.',
    path: '/features/',
    keywords: [
      'AI voice employee features',
      'no-code AI voice agent',
      'AI phone agent',
      'AI call answering', ...KEYWORDS,
    ],
  }),
  aiEmployee: pageMetadata({
    title: 'What Your AI Voice Employee Can Do',
    description:
      'See what a VoilitAI voice employee does on every call: answer, qualify, book appointments, recover missed calls, and hand off to your team 24/7.',
    path: '/ai-employee/',
    keywords: [
      'AI voice employee',
      'what AI receptionist can do',
      'AI call answering',
      'AI appointment booking',
      ...KEYWORDS,
    ],
  }),
  solutions: pageMetadata({
    title: 'AI Voice Employees by Industry',
    description:
      'AI receptionist and voice employee solutions for dental, auto repair, HVAC, real estate, clinics, and other phone-driven businesses.',
    path: '/solutions/',
    keywords: [
      'AI receptionist for dental offices',
      'AI receptionist for auto repair',
      'AI receptionist for HVAC', ...KEYWORDS,
    ],
  }),
  howItWorks: pageMetadata({
    title: 'How to Create an AI Voice Employee',
    description:
      'Create, customize, connect, and deploy your own AI voice employee with VoilitAI. No developer required.',
    path: '/how-it-works/',
    keywords: [
      'create AI voice employee',
      'no-code AI voice agent',
      'deploy voice agent', ...KEYWORDS,
    ],
  }),
  pricing: pageMetadata({
    title: 'AI Voice Employee Pricing',
    description:
      'Plans for creating and operating AI voice employees: agents, minutes, and overage from the VoilitAI admin portal.',
    path: '/pricing/',
    keywords: ['AI receptionist cost', 'voice agent pricing', ...KEYWORDS],
  }),
  faq: pageMetadata({
    title: 'AI Voice Employee FAQ',
    description:
      'Do I need a developer? Can I use my numbers? What can an AI voice employee do? Answers for VoilitAI.',
    path: '/faq/',
    keywords: KEYWORDS,
  }),
  blog: pageMetadata({
    title: 'AI Voice Agent Guides',
    description:
      'Guides on creating AI voice employees, AI receptionists for small business, missed-call recovery, and alternatives to Vapi or Retell.',
    path: '/blog/',
    keywords: ['AI voice agent blog', 'AI receptionist guide', ...KEYWORDS],
  }),
  trust: pageMetadata({
    title: 'Security & Trust',
    description:
      'How VoilitAI approaches security for business phone AI: encryption, access control, and regulated-industry readiness.',
    path: '/trust/',
    keywords: ['secure AI receptionist', ...KEYWORDS],
  }),
  about: pageMetadata({
    title: 'About VoilitAI',
    description:
      'VoilitAI helps businesses create their own AI voice employees, without developers, so every call can be answered.',
    path: '/about/',
  }),
  contact: pageMetadata({
    title: 'Talk to a Live Demo',
    description:
      'Talk through your call workflow with VoilitAI, or create your AI voice employee in the app.',
    path: '/contact/',
    keywords: ['VoilitAI demo', 'AI receptionist demo', ...KEYWORDS],
  }),
  privacy: pageMetadata({
    title: 'Privacy Policy',
    description:
      'How VoilitAI collects, uses, shares, and protects personal information across the marketing site and app.voilitai.com.',
    path: '/privacy/',
  }),
  terms: pageMetadata({
    title: 'Terms of Service',
    description:
      'Terms of service for the VoilitAI website and AI voice employee platform.',
    path: '/terms/',
  }),
};

function seoKeywordList(seo, fallback = []) {
  if (Array.isArray(seo?.keywords)) {
    return seo.keywords.map(String).map((k) => k.trim()).filter(Boolean);
  }
  if (typeof seo?.keywords === 'string' && seo.keywords.trim()) {
    return seo.keywords.split(',').map((k) => k.trim()).filter(Boolean);
  }
  return Array.isArray(fallback) ? fallback : [];
}

export function pricingMetadata(plans = []) {
  const prices = plans
    .map((plan) => Number(plan.monthly_price ?? plan.price))
    .filter((n) => Number.isFinite(n));
  const low = prices.length ? Math.min(...prices) : null;
  return pageMetadata({
    title: low != null ? `AI Voice Employee Pricing from $${low % 1 === 0 ? low : low.toFixed(2)}` : 'AI Voice Employee Pricing',
    description:
      low != null
        ? `Create and operate AI voice employees from $${low % 1 === 0 ? low : low.toFixed(2)}/month. Compare agents, minutes, and overage, prices sync from the admin portal.`
        : PAGE_META.pricing.description,
    path: '/pricing/',
    keywords: ['AI receptionist cost', 'voice agent pricing', ...KEYWORDS],
  });
}

export function articleMetadata(post) {
  const seo = post.seo && typeof post.seo === 'object' ? post.seo : {};
  const title = seo.meta_title || post.title;
  const description = seo.meta_description || post.excerpt || post.description || '';
  const path = seo.canonical_path || `/blog/${post.slug}/`;

  return pageMetadata({
    title,
    description,
    path,
    keywords: [...seoKeywordList(seo, post.keywords), ...KEYWORDS],
    type: 'article',
    publishedTime: post.date,
    modifiedTime: post.date,
    authors: post.author ? [{ name: post.author }] : [{ name: SITE_NAME, url: SITE_URL }],
    noIndex: seo.noindex === true,
    image: seo.og_image || post.image || undefined,
  });
}

export function solutionMetadata(solution) {
  return pageMetadata({
    title: `${solution.name} AI Receptionist | VoilitAI`,
    description: solution.description,
    path: `/solutions/${solution.slug}/`,
    keywords: [
      `${solution.name} AI receptionist`,
      `${solution.name} AI voice employee`,
      `AI voice agent ${solution.name}`,
      ...(solution.keywords || []),
      ...KEYWORDS,
    ],
  });
}
