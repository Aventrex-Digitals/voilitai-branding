import { SITE_NAME, SITE_URL, KEYWORDS, absoluteUrl } from '@/lib/site';

export const OG_IMAGE_PATH = '/opengraph-image';

export const OG_IMAGE = {
  url: OG_IMAGE_PATH,
  width: 1200,
  height: 630,
  alt: 'VoilitAI — fast Voice OS agents, a reliable Vapi and Retell alternative',
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
}) {
  const url = absoluteUrl(path);
  const ogTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`;

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
      images: [OG_IMAGE],
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description,
      images: [OG_IMAGE_PATH],
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
    title: 'Fast Voice AI Agents | Vapi & Retell Alternative | VoilitAI',
    description:
      'VoilitAI is a fast, reliable Vapi and Retell alternative. Best Voice OS agents for 24/7 customer support, booking, and CRM — with sub-600ms replies.',
    path: '/',
    absoluteTitle: true,
    keywords: [
      ...KEYWORDS,
      'AI phone answering',
      'best VoiceOS',
      'fastest AI receptionist',
    ],
  }),
  features: pageMetadata({
    title: 'Voice AI Features, Telephony & QA',
    description:
      'See why VoilitAI is a fast Voice OS alternative to Vapi and Retell: sub-600ms voice, visual flow builder, live booking, CRM tools, SIP, and production QA.',
    path: '/features/',
    keywords: [
      'voice AI features',
      'fastest voice AI',
      'visual flow builder',
      'SIP trunking AI',
      'voice AI analytics',
      ...KEYWORDS,
    ],
  }),
  solutions: pageMetadata({
    title: 'Industry Voice AI Solutions',
    description:
      'Most reliable AI customer support and voice agents for healthcare, finance, insurance, home services, real estate, and legal — 24/7 booking and intake.',
    path: '/solutions/',
    keywords: [
      'most reliable customer support',
      'healthcare AI receptionist',
      'home services voice AI',
      'insurance voice AI',
      ...KEYWORDS,
    ],
  }),
  howItWorks: pageMetadata({
    title: 'How to Launch a Voice Agent',
    description:
      'See how VoilitAI goes live: describe the job, design the conversation, connect CRM and calendars, test scenarios, then point SIP or new numbers.',
    path: '/how-it-works/',
    keywords: ['how voice AI works', 'deploy voice agent', 'voice agent rollout', ...KEYWORDS],
  }),
  pricing: pageMetadata({
    title: 'Voice AI Pricing from $49',
    description:
      'VoilitAI plans start at $49/month. Compare Starter, Growth (14-day trial), and Enterprise for minutes, numbers, CRM, HIPAA-ready controls, and SLA.',
    path: '/pricing/',
    keywords: ['voice AI pricing', 'AI receptionist cost', 'voice agent plans', ...KEYWORDS],
  }),
  faq: pageMetadata({
    title: 'Voice AI FAQ: Setup & Security',
    description:
      'FAQ: is VoilitAI an alternative to Vapi or Retell, how fast Voice OS agents reply, most reliable AI customer support, SIP numbers, HIPAA, and pricing.',
    path: '/faq/',
    keywords: [
      'voice AI FAQ',
      'alternative to Vapi',
      'alternative to Retell',
      'HIPAA voice AI',
      'SIP existing numbers',
      ...KEYWORDS,
    ],
  }),
  blog: pageMetadata({
    title: 'Voice AI Guides & Resources',
    description:
      'Guides on Vapi and Retell alternatives, the fastest Voice OS agents, most reliable AI customer support, missed-call ROI, HIPAA, and no-code builders.',
    path: '/blog/',
    keywords: ['voice AI blog', 'AI receptionist guide', 'missed call ROI', ...KEYWORDS],
  }),
  trust: pageMetadata({
    title: 'SOC 2 & HIPAA Voice AI Trust',
    description:
      'VoilitAI trust center: SOC 2 Type II, HIPAA-ready architecture, GDPR, encryption, SSO, PII redaction, RBAC, and a 99.99% uptime SLA.',
    path: '/trust/',
    keywords: ['HIPAA voice AI', 'SOC 2 voice AI', 'secure AI receptionist', ...KEYWORDS],
  }),
  about: pageMetadata({
    title: 'About Our Voice AI Platform',
    description:
      'VoilitAI is the voice AI platform from Aventrex Digital: human-sounding agents, real-time actions, and enterprise telephony so you never miss a call.',
    path: '/about/',
  }),
  contact: pageMetadata({
    title: 'Contact Sales & Support',
    description:
      'Request a VoilitAI demo, talk to sales about Enterprise, or email hello@aventrexdigital.com. Most teams leave with a path to a live test agent.',
    path: '/contact/',
    keywords: ['contact VoilitAI', 'voice AI demo', 'enterprise voice AI', ...KEYWORDS],
  }),
  privacy: pageMetadata({
    title: 'Privacy Policy',
    description:
      'How VoilitAI collects, uses, and protects information on voilitai.aventrexdigital.com, including demo requests, logs, and contact details.',
    path: '/privacy/',
  }),
  terms: pageMetadata({
    title: 'Terms of Service',
    description:
      'Terms that govern the VoilitAI marketing website and links to the product app. Paid plans are covered by the in-app subscription or order form.',
    path: '/terms/',
  }),
};

export function articleMetadata(post) {
  return pageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}/`,
    keywords: [...(post.keywords || []), ...KEYWORDS],
    type: 'article',
    publishedTime: post.date,
    modifiedTime: post.date,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
  });
}

export function solutionMetadata(solution) {
  return pageMetadata({
    title: `${solution.name} AI Voice Agents`,
    description: solution.description,
    path: `/solutions/${solution.slug}/`,
    keywords: [
      `${solution.name} AI receptionist`,
      `${solution.name} voice AI`,
      `AI voice agent ${solution.name}`,
      ...(solution.keywords || []),
      ...KEYWORDS,
    ],
  });
}
