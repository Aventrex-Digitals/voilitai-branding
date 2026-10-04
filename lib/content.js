export const STATS = [
  { value: '24/7', label: 'Call coverage' },
  { value: '<600ms', label: 'Response latency' },
  { value: 'No-code', label: 'Agent builder' },
  { value: '40+', label: 'Languages' },
];

export const TRUST_PILLS = [
  'Create your own AI employee',
  'No developer required',
  'Deploy on your phone lines',
];

export const COMPARISON = {
  features: [
    'Natural human-like conversations',
    'Sub-second latency',
    'Complex multi-turn dialogs',
    'Real-time tool actions on the call',
    'Create agents without developers',
    'Works on your phone numbers',
    'Call logs and transcripts',
    'Warm transfer to a human',
  ],
  columns: [
    {
      title: 'Traditional IVR',
      description: 'Touch-tone menus',
      results: [false, false, false, false, false, true, false, true],
    },
    {
      title: 'DIY stacks',
      description: 'Custom-built AI',
      results: [true, false, true, true, false, true, true, true],
    },
    {
      title: 'VoilitAI',
      description: 'Your AI voice employee',
      results: [true, true, true, true, true, true, true, true],
      highlighted: true,
    },
  ],
};

export const DEMO_MESSAGES = [
  { role: 'ai', text: 'Hi there. Thanks for calling. How can I help you today?' },
  { role: 'user', text: "I'd like to schedule an appointment for next Tuesday." },
  { role: 'ai', text: 'I have 10 AM, 2 PM, and 4 PM next Tuesday. Which works best?' },
  { role: 'user', text: '2 PM works great.' },
  { role: 'ai', text: "Booked for Tuesday at 2 PM. You'll get a confirmation shortly. Anything else?" },
];

/** Role-based use cases, not fabricated customer testimonials. */
export const USE_CASES = [
  {
    title: 'AI Receptionist',
    description:
      'Answer inbound calls, handle common questions, and help customers book appointments, even after hours.',
    highlight: '24/7',
    highlightLabel: 'front desk coverage',
  },
  {
    title: 'AI Sales Employee',
    description:
      'Qualify callers, capture lead information, and move prospects into your sales process while your team is busy.',
    highlight: 'Qualify',
    highlightLabel: 'every inbound lead',
  },
  {
    title: 'AI Appointment Coordinator',
    description:
      'Schedule, reschedule, and confirm appointments through natural voice conversations on your phone lines.',
    highlight: 'Book',
    highlightLabel: 'while you work',
  },
  {
    title: 'AI Customer Support',
    description:
      'Answer routine customer questions and handle common support requests automatically, then transfer when judgment is needed.',
    highlight: 'Deflect',
    highlightLabel: 'repeat questions',
  },
  {
    title: 'AI Lead Qualification',
    description:
      'Ask the right questions, collect information, and identify qualified prospects before a human follows up.',
    highlight: 'Filter',
    highlightLabel: 'tire-kickers fast',
  },
  {
    title: 'Missed-call recovery',
    description:
      'When your team is busy or unavailable, your AI employee can answer the call, have a conversation, and take the next step.',
    highlight: 'Recover',
    highlightLabel: 'every missed call',
  },
];

export const FEATURE_GROUPS = [
  {
    id: 'voice',
    title: 'An AI employee that sounds human on the phone',
    subtitle: 'Natural voice, instant replies, and intelligent turn-taking, not a robotic phone tree.',
    features: [
      {
        icon: 'zap',
        title: 'Sub-600ms replies',
        description: 'Conversations stay natural. Callers do not wait through awkward AI pauses.',
      },
      {
        icon: 'wave',
        title: 'Natural voice',
        description: 'Clear intonation and personality so customers stay on the line.',
      },
      {
        icon: 'ear',
        title: 'Handles interruptions',
        description: 'Knows when to speak, when to listen, and recovers when callers talk over it.',
      },
    ],
  },
  {
    id: 'build',
    title: 'Your AI employee. Your rules.',
    subtitle: 'You should not need a developer to create an AI employee for your business.',
    features: [
      {
        icon: 'flow',
        title: 'Create without coding',
        description:
          'Build greetings, prompts, and call behavior in the dashboard, then publish your own voice agent.',
      },
      {
        icon: 'bolt',
        title: 'Take action on the call',
        description:
          'Connect Google Calendar, HubSpot, Slack, email, SMS, WhatsApp, or a custom API so your agent can act live — not just talk.',
      },
      {
        icon: 'database',
        title: 'Teach it your business',
        description:
          'Control what your AI employee knows, says, and does with prompts, knowledge, and the tools you attach.',
      },
    ],
  },
  {
    id: 'quality',
    title: 'Deploy with confidence',
    subtitle: 'See every conversation. Improve what your AI employee says over time.',
    features: [
      {
        icon: 'flask',
        title: 'Test before go-live',
        description: 'Try your agent in the dashboard so you know how it handles real questions.',
      },
      {
        icon: 'scan',
        title: 'Review every call',
        description: 'Call logs and transcripts help you tighten answers and handoff rules.',
      },
      {
        icon: 'chart',
        title: 'Usage you can manage',
        description: 'Track minutes and agents on your plan so costs stay predictable.',
      },
    ],
  },
];

export const FEATURE_DETAILS = [
  {
    icon: 'phone',
    title: 'Answer calls automatically',
    description:
      'Your AI employee picks up inbound calls in seconds, nights, weekends, and overflow included.',
  },
  {
    icon: 'outbound',
    title: 'Place outbound calls',
    description:
      'Run callbacks and outbound conversations from agents you configure, with tracking on every dial.',
  },
  {
    icon: 'calendar',
    title: 'Help schedule appointments',
    description:
      'Connect your scheduling tools so the agent can help book and confirm appointments during the call.',
  },
  {
    icon: 'crm',
    title: 'Built-in connectors',
    description:
      'Connect Google Calendar, HubSpot, Slack, email, SMS, WhatsApp, and outbound calling so the agent can take real actions on the call.',
  },
  {
    icon: 'handoff',
    title: 'Warm human handoff',
    description:
      'When a call needs a person, transfer with context so nobody repeats themselves.',
  },
  {
    icon: 'globe',
    title: '40+ languages',
    description:
      'Serve customers in the language they speak, without standing up a second phone team.',
  },
  {
    icon: 'code',
    title: 'API when you need it',
    description:
      'Most teams create agents in the dashboard. Developers can still use the public API for custom workflows.',
  },
  {
    icon: 'cable',
    title: 'Your phone numbers',
    description:
      'Keep numbers customers already know with SIP, or provision new numbers on the platform.',
  },
];

export const OMNI_CHANNELS = [
  {
    icon: 'phone',
    title: 'Voice call',
    status: 'live',
    description: 'Your AI voice employee on inbound and outbound phone lines, available now.',
  },
  {
    icon: 'chat',
    title: 'Chat',
    status: 'soon',
    description: 'Same agent brain on web and in-app chat. Coming next on the platform.',
  },
  {
    icon: 'sms',
    title: 'SMS',
    status: 'soon',
    description: 'Confirmations, reminders, and follow-ups on the same agent.',
  },
  {
    icon: 'code',
    title: 'API',
    status: 'live',
    description: 'Programmatic access to agents, numbers, and calls when you need custom wiring.',
  },
];

export const TELEPHONY = [
  {
    icon: 'badge',
    title: 'Business caller identity',
    description: 'Present your business clearly on outbound conversations.',
  },
  {
    icon: 'cable',
    title: 'SIP trunking',
    description: 'Connect existing phone numbers without ripping out your current setup.',
  },
  {
    icon: 'outbound',
    title: 'Outbound calling',
    description: 'Callbacks and outbound jobs from agents you control.',
  },
  {
    icon: 'shield',
    title: 'Verified numbers',
    description: 'Provision carrier-ready numbers when you need a fresh line.',
  },
];

export const SECURITY_BADGES = [
  { icon: 'shield', name: 'SOC 2 Type II', description: 'Audited security controls' },
  { icon: 'heart', name: 'HIPAA ready', description: 'Built for regulated conversations' },
  { icon: 'globe', name: 'GDPR ready', description: 'EU-ready data handling' },
  { icon: 'lock', name: 'Encryption', description: 'In transit and at rest' },
  { icon: 'key', name: 'Access control', description: 'Org roles for your team' },
  { icon: 'eye', name: 'Call records', description: 'Logs and transcripts for review' },
  { icon: 'users', name: 'Team roles', description: 'Owner, admin, manager, viewer' },
  { icon: 'server', name: 'Production uptime', description: 'Built for always-on answering' },
];

/** Built-in connectors from product Integrations → Connect a service. */
export const CONNECTORS = [
  {
    key: 'google_calendar',
    name: 'Google Calendar',
    auth: 'OAuth',
    icon: 'calendar',
    actions: ['calendar.book'],
    description: 'Check availability and book appointments during the call.',
  },
  {
    key: 'hubspot',
    name: 'HubSpot',
    auth: 'OAuth',
    icon: 'crm',
    actions: ['hubspot.contact'],
    description: 'Create or update contacts and push call outcomes into your CRM.',
  },
  {
    key: 'slack',
    name: 'Slack',
    auth: 'OAuth',
    icon: 'chat',
    actions: ['slack.notify'],
    description: 'Notify your team in Slack when something needs a human.',
  },
  {
    key: 'resend',
    name: 'Email · Resend',
    auth: 'API key',
    icon: 'mail',
    actions: ['email.send'],
    description: 'Send confirmations and follow-up emails from the conversation.',
  },
  {
    key: 'twilio_sms',
    name: 'SMS · Twilio',
    auth: 'Credentials',
    icon: 'sms',
    actions: ['sms.send'],
    description: 'Text callers with confirmations, links, or next steps.',
  },
  {
    key: 'twilio_whatsapp',
    name: 'WhatsApp · Twilio',
    auth: 'Credentials',
    icon: 'chat',
    actions: ['sms.send'],
    description: 'Reach customers on WhatsApp using your Twilio account.',
  },
  {
    key: 'retell_outbound',
    name: 'Outbound calls',
    auth: 'Platform calling',
    icon: 'outbound',
    actions: ['voice.call'],
    description: 'Place callbacks and outbound conversations from agents you control.',
  },
];

export const CUSTOM_CONNECTOR = {
  key: 'custom_api',
  name: 'Custom APIs',
  auth: 'REST',
  icon: 'code',
  description:
    'Connect another system — EHR, CRM, booking tool, or any REST API — when a built-in connector is not enough.',
};

/** Agent actions available through connected services. */
export const CONNECTOR_ACTIONS = [
  { id: 'calendar.book', label: 'Book on calendar' },
  { id: 'hubspot.contact', label: 'Update HubSpot' },
  { id: 'email.send', label: 'Send email' },
  { id: 'sms.send', label: 'Send SMS' },
  { id: 'slack.notify', label: 'Notify Slack' },
  { id: 'voice.call', label: 'Place outbound call' },
];

/** Display names for logos / mention strips. */
export const INTEGRATIONS = [
  ...CONNECTORS.map((item) => item.name),
  CUSTOM_CONNECTOR.name,
];

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Create',
    time: 'Minutes',
    description:
      'Create your AI employee in the VoilitAI dashboard. Name it, choose a voice, and define how it should greet callers.',
  },
  {
    step: '02',
    title: 'Customize',
    time: 'Your rules',
    description:
      'Tell it what your business does, what it knows, and how it should respond. Set handoff rules when a human should take over.',
  },
  {
    step: '03',
    title: 'Connect',
    time: 'Your stack',
    description:
      'Connect your phone number and the business tools you already use: calendars, CRMs, and custom APIs, so the agent can take action.',
  },
  {
    step: '04',
    title: 'Deploy',
    time: 'Go live',
    description:
      'Put your AI employee to work on inbound or outbound lines. Review calls, refine prompts, and improve over time.',
  },
];

export const PAIN_STATS = [
  { value: 'Missed', label: 'calls become missed customers' },
  { value: 'After hours', label: 'is when many buyers still call' },
  { value: 'Busy lines', label: 'push people to competitors' },
  { value: 'Voicemail', label: 'rarely wins the job' },
];

export const PRICING_FAQ = [
  {
    q: 'Can I switch plans at any time?',
    a: 'Yes. Upgrades take effect immediately with a prorated charge. Downgrades apply at the end of the current billing cycle.',
  },
  {
    q: 'What happens when I exceed my minutes?',
    a: 'We notify you at 80% usage. Extra minutes are billed at the overage rate shown on your plan.',
  },
  {
    q: 'Is there a free trial?',
    a: 'Growth includes a 14-day free trial with full feature access. You can also start on Starter and create your AI employee when you are ready.',
  },
  {
    q: 'What am I paying for?',
    a: 'You are paying to create and operate AI voice employees for your business, included agents, monthly minutes, and the ability to connect your phone lines and tools.',
  },
  {
    q: 'Do you offer annual pricing?',
    a: 'Yes. Annual billing saves 20%. Switch from the dashboard or ask sales to quote a yearly Enterprise agreement.',
  },
];

export const HOME_FAQS = [
  {
    q: 'What is an AI voice employee?',
    a: 'An AI voice employee is a voice agent you create for your business. It answers phone calls, follows your rules, uses the tools you connect, and hands off to a human when needed, without you hiring another full-time receptionist.',
  },
  {
    q: 'Do I need a developer to use VoilitAI?',
    a: 'No. You create, customize, and deploy your own AI voice employee from the dashboard. Developers can use the API if they want custom workflows, but it is not required to go live.',
  },
  {
    q: 'What can my AI employee do on a call?',
    a: 'It can answer questions about your business, qualify leads, help with appointment workflows through connected tools, capture details, and transfer to your team with context.',
  },
  {
    q: 'Can I use my existing phone numbers?',
    a: 'Yes. Connect numbers via SIP or provision new numbers on the platform, then assign your AI employee to inbound or outbound lines.',
  },
  {
    q: 'How fast can I deploy?',
    a: 'Most teams create a first agent and connect a number the same day. More complex tool wiring depends on the systems you connect.',
  },
  {
    q: 'Do you offer chat and SMS?',
    a: 'Voice agents are available now. Chat, SMS, and website voice are on the roadmap and will use the same agent you already built for phone.',
  },
  {
    q: 'Is VoilitAI an alternative to Vapi or Retell?',
    a: 'Yes, especially if you want to create your own AI voice employee without assembling a developer stack. VoilitAI gives you the builder, phone deployment, and tool connections in one product.',
  },
  {
    q: 'How do integrations work?',
    a: 'In the dashboard, open Integrations and connect a service: Google Calendar, HubSpot, Slack, Resend email, Twilio SMS or WhatsApp, or outbound calling. Attach those connectors to your agent so it can book, update contacts, send messages, notify your team, or place callbacks during a live call. Need something else? Connect a custom REST API for EHR, CRM, or other systems.',
  },
];


export const ALL_FAQS = [
  {
    category: 'Product',
    items: [
      ...HOME_FAQS,
      {
        q: 'What happens if the AI cannot answer something?',
        a: 'It hands off. You set the rules: transfer to a person, take a message, or follow the next step you define. Callers are not left in a dead end.',
      },
    ],
  },
  {
    category: 'Pricing & onboarding',
    items: PRICING_FAQ,
  },
  {
    category: 'Integrations & telephony',
    items: [
      {
        q: 'Which tools can VoilitAI connect to?',
        a: 'Built-in connectors include Google Calendar, HubSpot, Slack, Resend (email), Twilio SMS, Twilio WhatsApp, and platform outbound calling. You can also connect custom REST APIs for EHR, CRM, or other systems. You choose which connectors each AI employee can use.',
      },
      {
        q: 'What actions can a connected agent take?',
        a: 'Depending on what you connect: book on a calendar, update a HubSpot contact, send email, send SMS, notify Slack, or place an outbound call. Custom APIs can expose whatever actions your own systems support.',
      },
      {
        q: 'Can VoilitAI send SMS and chat as well as voice?',
        a: 'Voice agents are live today, and connected SMS or WhatsApp (via Twilio) can send messages as actions during or after a call. Standalone chat and website voice channels are on the platform roadmap and will use the same agent brain when they ship.',
      },
    ],
  },
];

/** @deprecated Prefer USE_CASES. Kept empty so old imports do not crash. */
export const CASE_STUDIES = [];
