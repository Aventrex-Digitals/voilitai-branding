export const SITE_URL = 'https://voilitai.com';

export const SITE_NAME = 'VoilitAI';

export const BRAND_NAME = 'voilitai';

export const TAGLINE = 'AI voice agent platform for businesses that cannot miss a call.';

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
  'Create AI voice employees that answer calls, qualify leads and book appointments 24/7. Connect your CRM and calendar and go live in days. Hear a demo.';

export const FOOTER_DESCRIPTION =
  'VoilitAI is an AI voice agent platform for businesses. Create your own AI voice employee, connect your phone and tools, and put it to work without a developer.';

export const DEFAULT_TITLE = 'VoilitAI | AI Voice Agent Platform for Businesses | AI Voice Employees';

export const ENTITY_DESCRIPTION =
  'VoilitAI is an AI voice agent platform that lets businesses create AI voice employees to answer calls, qualify leads and book appointments.';

/** Public social profiles. Leave href empty until the profile is live. */
export const SOCIAL_LINKS = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/voilitai',
    icon: 'linkedin',
  },
  {
    id: 'facebook',
    label: 'Facebook',
    href: '',
    icon: 'facebook',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: '',
    icon: 'instagram',
  },
  {
    id: 'threads',
    label: 'Threads',
    href: '',
    icon: 'threads',
  },
];

/** Organization sameAs — only profiles with a real URL. */
export const SOCIAL_PROFILES = SOCIAL_LINKS.map((item) => item.href).filter(Boolean);

export const KEYWORDS = [
  'VoilitAI',
  'AI voice agent platform',
  'AI voice agent',
  'AI voice agents',
  'AI voice agents for business',
  'AI voice employee',
  'AI voice employees',
  'AI receptionist',
  'AI receptionist for small business',
  'AI phone agent',
  'AI phone answering service',
  'AI call answering',
  'AI appointment scheduling',
  'AI appointment booking',
  'AI lead qualification',
  'AI customer service agent',
  'no-code AI voice agent',
  'create your own voice agent',
  'AI receptionist for dental offices',
  'AI receptionist for auto repair',
  'AI receptionist for HVAC',
  '24/7 call answering',
  'voice agent builder',
  'voice AI platform',
  'virtual receptionist',
  'never miss a call',
  'best AI voice agent platforms',
  'alternative to Vapi',
  'Vapi alternative',
  'alternative to Retell',
  'Retell alternative',
  'Retell AI alternative',
];

export const NAV_LINKS = [
  { href: '/ai-voice-employees/', label: 'AI Employee' },
  { href: '/ai-receptionist/', label: 'Receptionist' },
  { href: '/use-cases/', label: 'Use cases' },
  { href: '/solutions/', label: 'Industries', mega: 'industries' },
  { href: '/pricing/', label: 'Pricing' },
  { href: '/learn/', label: 'Learn' },
];

export const FOOTER_LINKS = {
  Product: [
    { href: '/ai-voice-agents/', label: 'AI voice agents' },
    { href: '/ai-voice-employees/', label: 'AI voice employees' },
    { href: '/ai-receptionist/', label: 'AI receptionist' },
    { href: '/ai-phone-agent/', label: 'AI phone agent' },
    { href: '/features/', label: 'Features' },
    { href: '/how-it-works/', label: 'How it works' },
    { href: '/pricing/', label: 'Pricing' },
    { href: '/faq/', label: 'FAQ' },
    { href: '/trust/', label: 'Security & trust' },
  ],
  'Use cases': [
    { href: '/use-cases/appointment-booking/', label: 'Appointment booking' },
    { href: '/use-cases/lead-qualification/', label: 'Lead qualification' },
    { href: '/use-cases/after-hours-answering/', label: 'After-hours answering' },
    { href: '/ai-employee/', label: 'What an AI employee does' },
  ],
  Industries: [
    { href: '/solutions/healthcare/', label: 'Healthcare & dental' },
    { href: '/solutions/auto-repair/', label: 'Auto repair' },
    { href: '/solutions/home-services/', label: 'HVAC & home services' },
    { href: '/solutions/real-estate/', label: 'Real estate' },
    { href: '/solutions/lead-qualification/', label: 'Lead qualification' },
    { href: '/solutions/customer-support/', label: 'Customer support' },
  ],
  Resources: [
    { href: '/learn/', label: 'Learn' },
    { href: '/learn/what-is-an-ai-voice-agent/', label: 'What is an AI voice agent?' },
    { href: '/ai-voice-agent-roi-calculator/', label: 'ROI calculator' },
    { href: '/compare/best-ai-voice-agent-platforms/', label: 'Best AI voice agent platforms' },
    { href: '/blog/', label: 'Blog' },
    { href: '/about/', label: 'About' },
    { href: '/contact/', label: 'Contact' },
    { href: '/privacy/', label: 'Privacy policy' },
    { href: '/terms/', label: 'Terms of service' },
  ],
};

export function absoluteUrl(path = '/') {
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}
