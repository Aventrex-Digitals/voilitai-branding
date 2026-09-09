import { SITE_NAME, SITE_URL, DEFAULT_DESCRIPTION, absoluteUrl, CONTACT_EMAIL, BRAND_NAME } from '@/lib/site';
import { FEATURE_DETAILS, HOW_IT_WORKS } from '@/lib/content';
import { SOLUTIONS } from '@/lib/solutions';

const ORG_ID = `${SITE_URL}/#organization`;
const WEB_ID = `${SITE_URL}/#website`;
const APP_ID = `${SITE_URL}/#software`;
const LOGO_URL = `${SITE_URL}/assets/logo/favicon-light.jpeg`;
const SHARE_IMAGE = `${SITE_URL}/opengraph-image`;

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: SITE_NAME,
    legalName: SITE_NAME,
    alternateName: [BRAND_NAME, 'Voilit AI'],
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: LOGO_URL,
      width: 512,
      height: 512,
    },
    image: SHARE_IMAGE,
    email: CONTACT_EMAIL,
    description: DEFAULT_DESCRIPTION,
    foundingDate: '2024',
    brand: { '@type': 'Brand', name: SITE_NAME, logo: LOGO_URL },
    parentOrganization: {
      '@type': 'Organization',
      name: 'Aventrex Digital',
      url: 'https://aventrexdigital.com',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        email: CONTACT_EMAIL,
        contactType: 'sales',
        availableLanguage: ['English'],
        url: absoluteUrl('/contact/'),
      },
      {
        '@type': 'ContactPoint',
        email: CONTACT_EMAIL,
        contactType: 'customer support',
        availableLanguage: ['English'],
      },
    ],
    knowsAbout: [
      'Voice AI',
      'AI receptionist',
      'Conversational AI',
      'Call center automation',
      'SIP trunking',
      'Conversation platform',
      'Vapi alternative',
      'Retell AI alternative',
      'Voice OS agents',
      'AI customer support',
    ],
    areaServed: 'Worldwide',
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEB_ID,
    name: SITE_NAME,
    alternateName: BRAND_NAME,
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
    inLanguage: 'en-US',
    publisher: { '@id': ORG_ID },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/blog/?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function softwareJsonLd(plans = []) {
  const prices = plans
    .map((plan) => Number(plan.monthly_price ?? plan.price))
    .filter((n) => Number.isFinite(n));
  const lowPrice = prices.length ? String(Math.min(...prices)) : undefined;
  const highPrice = prices.length ? String(Math.max(...prices)) : undefined;

  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': APP_ID,
    name: SITE_NAME,
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Voice AI platform and AI receptionist',
    operatingSystem: 'Web',
    url: SITE_URL,
    image: SHARE_IMAGE,
    screenshot: SHARE_IMAGE,
    description: DEFAULT_DESCRIPTION,
    publisher: { '@id': ORG_ID },
    brand: { '@type': 'Brand', name: SITE_NAME },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      ...(lowPrice ? { lowPrice } : {}),
      ...(highPrice ? { highPrice } : {}),
      offerCount: String(plans.length || 0),
      url: absoluteUrl('/pricing/'),
      availability: 'https://schema.org/InStock',
      offers: plans.map((plan) => ({
        '@type': 'Offer',
        name: `${SITE_NAME} ${plan.name}`,
        description: plan.description,
        url: absoluteUrl('/pricing/'),
        priceCurrency: 'USD',
        price: String(plan.price),
        availability: 'https://schema.org/InStock',
        category: 'SaaS',
      })),
    },
    featureList: FEATURE_DETAILS.map((f) => f.title),
    isAccessibleForFree: true,
  };
}

export function faqJsonLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}

export function breadcrumbJsonLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function articleJsonLd(post) {
  const url = absoluteUrl(`/blog/${post.slug}/`);
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt || post.description || '',
    image: post.image || SHARE_IMAGE,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: 'en-US',
    author: post.author
      ? {
          '@type': 'Person',
          name: post.author,
          ...(post.authorRole ? { jobTitle: post.authorRole } : {}),
        }
      : { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    publisher: { '@id': ORG_ID },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    url,
    keywords: (post.keywords || []).join(', '),
  };
}

export function solutionsJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${SITE_NAME} industry solutions`,
    itemListElement: SOLUTIONS.map((solution, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: solution.name,
      url: absoluteUrl(`/solutions/${solution.slug}/`),
      description: solution.description,
    })),
  };
}

export function serviceJsonLd(solution) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${SITE_NAME} for ${solution.name}`,
    description: solution.description,
    provider: { '@id': ORG_ID },
    brand: { '@type': 'Brand', name: SITE_NAME },
    serviceType: 'Voice AI / AI receptionist',
    areaServed: 'Worldwide',
    url: absoluteUrl(`/solutions/${solution.slug}/`),
    image: SHARE_IMAGE,
  };
}

export function howToJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to launch a VoilitAI voice agent',
    description:
      'Describe the job, design the conversation, connect tools, test, then go live on SIP or a new number.',
    image: SHARE_IMAGE,
    totalTime: 'P7D',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: '49',
    },
    step: HOW_IT_WORKS.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.title,
      text: step.description,
      url: absoluteUrl('/how-it-works/'),
    })),
  };
}

export function contactPageJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: `Contact ${SITE_NAME}`,
    url: absoluteUrl('/contact/'),
    description: `Talk to ${SITE_NAME} sales or request a demo.`,
    mainEntity: { '@id': ORG_ID },
  };
}

export function aboutPageJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: `About ${SITE_NAME}`,
    url: absoluteUrl('/about/'),
    description: DEFAULT_DESCRIPTION,
    mainEntity: { '@id': ORG_ID },
  };
}

export function webPageJsonLd({ name, description, path, type = 'WebPage' }) {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    name,
    description,
    url: absoluteUrl(path),
    isPartOf: { '@id': WEB_ID },
    about: { '@id': APP_ID },
    inLanguage: 'en-US',
    publisher: { '@id': ORG_ID },
  };
}
