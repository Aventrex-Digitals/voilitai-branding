export const SITE_URL = 'https://voilitai.aventrexdigital.com';

export const SITE_NAME = 'VoilitAI';

export const BRAND_NAME = 'voilitai';

export const TAGLINE = 'Voice agents that feel human.';

export const CONTACT_EMAIL = 'hello@aventrexdigital.com';

export const DEMO_FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

export const APP_URL = 'https://voiceos.aventrexdigital.com';

export const APP_SIGN_IN = `${APP_URL}/auth`;

export const APP_GET_STARTED = `${APP_URL}/auth`;

export const LOGO_DARK = '/assets/logo/wordmark-dark.jpeg';
export const LOGO_LIGHT = '/assets/logo/wordmark-light.jpeg';
export const FAVICON_DARK = '/assets/logo/favicon-dark.jpeg';
export const FAVICON_LIGHT = '/assets/logo/favicon-light.jpeg';

export const DEFAULT_DESCRIPTION =
  'VoilitAI is a fast, reliable Vapi and Retell alternative. Best Voice OS agents for 24/7 customer support, booking, and CRM — with sub-600ms replies.';

export const FOOTER_DESCRIPTION =
  'Production-ready voice AI for businesses that cannot miss a call. Human-like agents that answer 24/7, book appointments, update your CRM, and hand off with context.';

export const DEFAULT_TITLE = 'Fast Voice AI Agents | Vapi & Retell Alternative | VoilitAI';

export const KEYWORDS = [
  'VoilitAI',
  'AI voice agent',
  'voice AI platform',
  'AI receptionist',
  '24/7 call answering',
  'conversational AI',
  'voice agent builder',
  'automated phone answering',
  'AI call center',
  'inbound voice AI',
  'outbound voice AI',
  'HIPAA voice AI',
  'no-code voice agent',
  'SIP trunking AI',
  'AI appointment booking',
  'virtual receptionist',
  'never miss a call',
  'alternative to Vapi',
  'Vapi alternative',
  'alternative to Retell',
  'Retell alternative',
  'Retell AI alternative',
  'best voice OS agents',
  'fast voice OS agents',
  'fastest voice AI agents',
  'best voice AI agent',
  'best AI voice agent platform',
  'most reliable customer support',
  'most reliable AI customer support',
  'reliable AI receptionist',
  'VoiceOS alternative',
  'Bland AI alternative',
  'Synthflow alternative',
];

export const NAV_LINKS = [
  { href: '/features/', label: 'Features' },
  { href: '/solutions/', label: 'Solutions' },
  { href: '/how-it-works/', label: 'How it works' },
  { href: '/pricing/', label: 'Pricing' },
  { href: '/blog/', label: 'Resources' },
];

export const FOOTER_LINKS = {
  Product: [
    { href: '/features/', label: 'Features' },
    { href: '/how-it-works/', label: 'How it works' },
    { href: '/pricing/', label: 'Pricing' },
    { href: '/faq/', label: 'FAQ' },
    { href: '/trust/', label: 'Security & trust' },
  ],
  Solutions: [
    { href: '/solutions/healthcare/', label: 'Healthcare' },
    { href: '/solutions/financial-services/', label: 'Financial services' },
    { href: '/solutions/insurance/', label: 'Insurance' },
    { href: '/solutions/customer-support/', label: 'Customer support' },
    { href: '/solutions/lead-qualification/', label: 'Lead qualification' },
    { href: '/solutions/home-services/', label: 'Home services' },
  ],
  Company: [
    { href: '/about/', label: 'About' },
    { href: '/#book-demo', label: 'Book a demo' },
    { href: '/contact/', label: 'Contact' },
    { href: '/blog/', label: 'Blog' },
    { href: '/privacy/', label: 'Privacy policy' },
    { href: '/terms/', label: 'Terms of service' },
  ],
};

export function absoluteUrl(path = '/') {
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}
