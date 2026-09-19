export const SITE_URL = 'https://voilitai.com';

export const SITE_NAME = 'VoilitAI';

export const BRAND_NAME = 'voilitai';

export const TAGLINE = 'Create your own AI voice employee — without developers.';

export const CONTACT_EMAIL = 'contact@voilitai.com';

export const LEGAL_UPDATED = 'September 8, 2026';

export const DEMO_FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

export const APP_URL = 'https://app.voilitai.com';

export const APP_SIGN_IN = `${APP_URL}/`;

export const APP_GET_STARTED = `${APP_URL}/`;

export const LOGO_DARK = '/assets/logo/wordmark-dark.jpeg';
export const LOGO_LIGHT = '/assets/logo/wordmark-light.jpeg';
export const FAVICON_DARK = '/assets/logo/favicon-dark.jpeg';
export const FAVICON_LIGHT = '/assets/logo/favicon-light.jpeg';

export const DEFAULT_DESCRIPTION =
  'Create your own AI voice employee with VoilitAI — build, customize, and deploy a voice agent for your business without developers. Answer calls, qualify leads, and handle appointments 24/7.';

export const FOOTER_DESCRIPTION =
  'VoilitAI lets you create your own AI voice employee. Build it, customize what it knows, connect your phone and tools, and put it to work — without a developer.';

export const DEFAULT_TITLE = 'Create Your Own AI Voice Employee | VoilitAI';

export const KEYWORDS = [
  'VoilitAI',
  'AI voice agent',
  'AI voice agents',
  'AI voice employee',
  'AI receptionist',
  'AI receptionist for small business',
  'AI phone agent',
  'AI call answering',
  'AI appointment scheduling',
  'AI customer service agent',
  'no-code AI voice agent',
  'create your own voice agent',
  'AI receptionist for dental offices',
  'AI receptionist for auto repair',
  'AI receptionist for HVAC',
  '24/7 call answering',
  'voice agent builder',
  'virtual receptionist',
  'never miss a call',
  'alternative to Vapi',
  'Vapi alternative',
  'alternative to Retell',
  'Retell alternative',
  'Retell AI alternative',
];

export const NAV_LINKS = [
  { href: '/features/', label: 'Features' },
  { href: '/solutions/', label: 'Solutions' },
  { href: '/how-it-works/', label: 'How it works' },
  { href: '/pricing/', label: 'Pricing' },
  { href: '/blog/', label: 'Blog' },
];

export const FOOTER_LINKS = {
  Product: [
    { href: '/#platform', label: 'Platform' },
    { href: '/features/', label: 'Features' },
    { href: '/how-it-works/', label: 'How it works' },
    { href: '/pricing/', label: 'Pricing' },
    { href: '/faq/', label: 'FAQ' },
    { href: '/trust/', label: 'Security & trust' },
  ],
  Solutions: [
    { href: '/solutions/healthcare/', label: 'Healthcare & dental' },
    { href: '/solutions/auto-repair/', label: 'Auto repair' },
    { href: '/solutions/home-services/', label: 'HVAC & home services' },
    { href: '/solutions/real-estate/', label: 'Real estate' },
    { href: '/solutions/lead-qualification/', label: 'Lead qualification' },
    { href: '/solutions/customer-support/', label: 'Customer support' },
  ],
  Company: [
    { href: '/about/', label: 'About' },
    { href: '/#book-demo', label: 'Talk to a live demo' },
    { href: '/contact/', label: 'Contact' },
    { href: '/blog/', label: 'Blog' },
    { href: '/privacy/', label: 'Privacy policy' },
    { href: '/terms/', label: 'Terms of service' },
  ],
};

export function absoluteUrl(path = '/') {
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}
