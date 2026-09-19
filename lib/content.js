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
  { role: 'ai', text: 'Hi there — thanks for calling. How can I help you today?' },
  { role: 'user', text: "I'd like to schedule an appointment for next Tuesday." },
  { role: 'ai', text: 'I have 10 AM, 2 PM, and 4 PM next Tuesday. Which works best?' },
  { role: 'user', text: '2 PM works great.' },
  { role: 'ai', text: "Booked for Tuesday at 2 PM. You'll get a confirmation shortly. Anything else?" },
];

/** Role-based use cases — not fabricated customer testimonials. */
export const USE_CASES = [
  {
    title: 'AI Receptionist',
    description:
      'Answer inbound calls, handle common questions, and help customers book appointments — even after hours.',
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
      'Answer routine customer questions and handle common support requests automatically — then transfer when judgment is needed.',
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
    subtitle: 'Natural voice, instant replies, and intelligent turn-taking — not a robotic phone tree.',
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
          'Build greetings, prompts, and call behavior in the dashboard — then publish your own voice agent.',
      },
      {
        icon: 'bolt',
        title: 'Take action on the call',
        description:
          'Connect the business tools you already use so your agent can look up data, book work, and transfer calls live.',
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
      'Your AI employee picks up inbound calls in seconds — nights, weekends, and overflow included.',
  },
  {
    icon: 'outbound',
    title: 'Place outbound calls',
    description:
      'Run callbacks and outbound conversations from agents you configure — with tracking on every dial.',
  },
  {
    icon: 'calendar',
    title: 'Help schedule appointments',
    description:
      'Connect your scheduling tools so the agent can help book and confirm appointments during the call.',
  },
  {
    icon: 'crm',
    title: 'Connect your business tools',
    description:
      'Attach CRM, booking, and operations APIs as integrations so the agent can take real actions — not just chat.',
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
      'Serve customers in the language they speak — without standing up a second phone team.',
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
    description: 'Your AI voice employee on inbound and outbound phone lines — available now.',
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

export const INTEGRATIONS = [
  'Twilio',
  'Your CRM',
  'Calendars',
  'Zapier',
  'Make',
  'n8n',
  'Booking tools',
  'Jobber',
  'Housecall Pro',
  'Custom APIs',
  'SIP carriers',
  'Helpdesks',
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
      'Connect your phone number and the business tools you already use — calendars, CRMs, and custom APIs — so the agent can take action.',
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
    a: 'You are paying to create and operate AI voice employees for your business — included agents, monthly minutes, and the ability to connect your phone lines and tools.',
  },
  {
    q: 'Do you offer annual pricing?',
    a: 'Yes — annual billing saves 20%. Switch from the dashboard or ask sales to quote a yearly Enterprise agreement.',
  },
];

export const HOME_FAQS = [
  {
    q: 'What is an AI voice employee?',
    a: 'An AI voice employee is a voice agent you create for your business. It answers phone calls, follows your rules, uses the tools you connect, and hands off to a human when needed — without you hiring another full-time receptionist.',
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
    a: 'Yes — especially if you want to create your own AI voice employee without assembling a developer stack. VoilitAI gives you the builder, phone deployment, and tool connections in one product.',
  },
  {
    q: 'How do integrations work?',
    a: 'You connect the business systems you already use as integrations and attach them to your agent. That is how your AI employee looks up information or takes action during a live call.',
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
        a: 'Connect calendars, CRMs, booking tools, and other systems through integrations and custom APIs. You control which tools each AI employee can use.',
      },
      {
        q: 'Can VoilitAI send SMS and chat as well as voice?',
        a: 'Voice is live today. Chat, SMS, and website voice are on the platform roadmap and will use the same agent brain when they ship.',
      },
    ],
  },
];

/** @deprecated Prefer USE_CASES — kept empty so old imports do not crash. */
export const CASE_STUDIES = [];
