export const STATS = [
  { value: '100%', label: 'Calls answered' },
  { value: '<600ms', label: 'Response latency' },
  { value: '99.99%', label: 'Uptime SLA' },
  { value: '40+', label: 'Languages' },
];

export const TRUST_PILLS = [
  'Start building free',
  'Sub-second replies',
  'Every call answered',
];

export const COMPARISON = {
  features: [
    'Natural human-like conversations',
    'Sub-second latency',
    'Complex multi-turn dialogs',
    'Real-time function calling',
    'No-code setup',
    'Scales to millions of calls',
    'Built-in analytics dashboard',
    'Enterprise-grade security',
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
      results: [true, false, true, false, false, false, false, false],
    },
    {
      title: 'VoilitAI',
      description: 'Production voice AI',
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
  { role: 'ai', text: "Booked for Tuesday at 2 PM. You'll get a confirmation text shortly. Anything else?" },
];

export const CASE_STUDIES = [
  {
    company: 'Meridian Health',
    quote:
      'VoilitAI reduced our call center wait times by 78% while maintaining a 96% patient satisfaction score.',
    author: 'Sarah Chen',
    role: 'VP of Operations',
    metric: '78%',
    metricLabel: 'Reduction in wait times',
  },
  {
    company: 'NovaPay Financial',
    quote: 'We automated 60% of our inbound support calls in the first month. The ROI was immediate.',
    author: 'Marcus Williams',
    role: 'CTO',
    metric: '60%',
    metricLabel: 'Calls automated',
  },
  {
    company: 'Apex Logistics',
    quote: 'Our dispatch AI handles 2,000+ calls daily with zero downtime. It transformed our operations.',
    author: 'Rachel Torres',
    role: 'Director of Technology',
    metric: '2,000+',
    metricLabel: 'Daily calls handled',
  },
  {
    company: 'ClearView Insurance',
    quote: 'Claims calls that took 15 minutes now resolve in under 3. Our agents focus on complex cases.',
    author: 'David Park',
    role: 'COO',
    metric: '5x',
    metricLabel: 'Faster resolution',
  },
];

export const FEATURE_GROUPS = [
  {
    id: 'voice',
    title: 'Human-standard AI voice',
    subtitle: 'Agents that sound natural, respond instantly, and know when to listen.',
    features: [
      {
        icon: 'zap',
        title: 'Ultra-low latency',
        description: 'Sub-600ms response time for real-time conversations without awkward pauses.',
      },
      {
        icon: 'wave',
        title: 'Ultra-realistic voice',
        description: 'Natural intonation, emotion, and personality — not a robotic script reader.',
      },
      {
        icon: 'ear',
        title: 'Intelligent turn-taking',
        description: 'Knows when to speak, when to listen, and handles interruptions gracefully.',
      },
    ],
  },
  {
    id: 'build',
    title: 'Effortless to build, powerful to deploy',
    subtitle: 'From routine requests to complex edge cases. Launch in weeks, not months.',
    features: [
      {
        icon: 'flow',
        title: 'Visual flow builder',
        description: 'Drag-and-drop conversation designer with built-in guardrails. No code required.',
      },
      {
        icon: 'bolt',
        title: 'Real-time actions',
        description: 'Book appointments, process payments, transfer calls — all during live conversations.',
      },
      {
        icon: 'database',
        title: 'Streaming knowledge base',
        description: 'Auto-syncing RAG pipeline keeps your agent current with the latest information.',
      },
    ],
  },
  {
    id: 'quality',
    title: 'Quality at every touchpoint',
    subtitle: 'Test, monitor, and optimize with built-in QA tools.',
    features: [
      {
        icon: 'flask',
        title: 'Simulation testing',
        description: 'Test hundreds of scenarios before launch. Catch edge cases before customers do.',
      },
      {
        icon: 'scan',
        title: 'Continuous QA',
        description: 'Auto-review past calls to surface failure patterns and improvement areas.',
      },
      {
        icon: 'chart',
        title: 'Performance analytics',
        description: 'Custom dashboards for call outcomes, sentiment, and business impact metrics.',
      },
    ],
  },
];

export const FEATURE_DETAILS = [
  {
    icon: 'phone',
    title: '24/7 inbound answering',
    description:
      'Every call is answered in seconds — nights, weekends, and holidays included. No hold music. No missed leads.',
  },
  {
    icon: 'outbound',
    title: 'Outbound campaigns',
    description:
      'Reminders, callbacks, lead nurturing, and batch calling without concurrency ceilings. Built-in tracking on every dial.',
  },
  {
    icon: 'calendar',
    title: 'Live appointment booking',
    description:
      'Sync Google Calendar, Outlook, and industry schedulers. The agent books, reschedules, and sends confirmations in the call.',
  },
  {
    icon: 'crm',
    title: 'CRM that updates itself',
    description:
      'Contacts, notes, and opportunities land in Salesforce, HubSpot, GoHighLevel, and more — with zero manual entry.',
  },
  {
    icon: 'shield',
    title: 'Spam and robocall detection',
    description:
      'Known spam and marketing noise is filtered so your team only hears from real customers.',
  },
  {
    icon: 'handoff',
    title: 'Warm human handoff',
    description:
      'When a call needs a person, VoilitAI transfers with a live summary so nobody repeats themselves.',
  },
  {
    icon: 'globe',
    title: '40+ languages',
    description:
      'Switch languages mid-conversation. Regional accents and dialects are handled without extra setup.',
  },
  {
    icon: 'code',
    title: 'API and WebSocket access',
    description:
      'Build custom experiences on the same engine that powers voice, chat, and SMS — REST and streaming included.',
  },
  {
    icon: 'badge',
    title: 'Branded caller ID',
    description:
      'Display your business name on outbound calls to lift answer rates and keep numbers off spam lists.',
  },
];

export const OMNI_CHANNELS = [
  {
    icon: 'phone',
    title: 'Voice call',
    description: 'Natural phone conversations at scale with carrier-grade reliability.',
  },
  {
    icon: 'chat',
    title: 'Chat',
    description: 'Web and in-app chat powered by the same AI. Seamless handoff to voice.',
  },
  {
    icon: 'sms',
    title: 'SMS',
    description: 'Compliant text messaging with smart follow-ups and two-way conversations.',
  },
  {
    icon: 'code',
    title: 'API',
    description: 'REST and WebSocket APIs for custom experiences. Full flexibility.',
  },
];

export const TELEPHONY = [
  {
    icon: 'badge',
    title: 'Branded caller ID',
    description: 'Display your business name to boost answer rates and build trust.',
  },
  {
    icon: 'cable',
    title: 'SIP trunking',
    description: 'Connect existing phone numbers with zero migration friction.',
  },
  {
    icon: 'outbound',
    title: 'Batch calling',
    description: 'Outbound campaigns without concurrency limits. Built-in tracking.',
  },
  {
    icon: 'shield',
    title: 'Verified numbers',
    description: 'Carrier-verified numbers to prevent spam labeling.',
  },
];

export const SECURITY_BADGES = [
  { icon: 'shield', name: 'SOC 2 Type II', description: 'Audited security controls' },
  { icon: 'heart', name: 'HIPAA ready', description: 'Healthcare data privacy' },
  { icon: 'globe', name: 'GDPR ready', description: 'EU data protection' },
  { icon: 'lock', name: 'E2E encryption', description: 'In transit and at rest' },
  { icon: 'key', name: 'SSO', description: 'Enterprise single sign-on' },
  { icon: 'eye', name: 'PII redaction', description: 'Automatic personal-info masking' },
  { icon: 'users', name: 'RBAC', description: 'Granular permissions' },
  { icon: 'server', name: '99.99% uptime', description: 'Enterprise SLA' },
];

export const INTEGRATIONS = [
  'Twilio',
  'Salesforce',
  'HubSpot',
  'Zapier',
  'Make',
  'n8n',
  'GoHighLevel',
  'Cal.com',
  'Vonage',
  'Genesys',
  'Five9',
  'Amazon Connect',
  'Telnyx',
  'Avaya',
  'Jobber',
  'Housecall Pro',
];

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Describe the job',
    time: 'Minutes',
    description:
      'Tell VoilitAI how your business answers the phone — services, hours, FAQs, escalation rules, and the tools you already use.',
  },
  {
    step: '02',
    title: 'Design the conversation',
    time: 'Hours, not months',
    description:
      'Use the visual flow builder or start from an industry template. Connect calendars, CRMs, and knowledge bases. Guardrails stay on.',
  },
  {
    step: '03',
    title: 'Go live and improve',
    time: 'Same week',
    description:
      'Point your numbers via SIP or provision new ones. Simulation testing, live analytics, and continuous QA keep the agent sharp.',
  },
];

export const PAIN_STATS = [
  { value: '62%', label: 'of small-business calls go unanswered' },
  { value: '23%', label: 'of companies never respond to a new lead' },
  { value: '42 hrs', label: 'average time to follow up' },
  { value: '100×', label: 'more likely to connect within 5 minutes' },
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
    a: 'Growth includes a 14-day free trial with full feature access. You can also start on Starter and upgrade when you are ready. No credit card is required to explore the builder.',
  },
  {
    q: 'Do you offer annual pricing?',
    a: 'Yes — annual billing saves 20%. Switch from the dashboard or ask sales to quote a yearly Enterprise agreement.',
  },
];

export const HOME_FAQS = [
  {
    q: 'What is a Voice AI agent?',
    a: 'A Voice AI agent is software that holds natural phone conversations. Unlike IVR menus, it understands language, keeps context across turns, and takes real actions — booking, qualifying, transferring, or updating your CRM — while the caller is still on the line.',
  },
  {
    q: 'How does VoilitAI work?',
    a: 'You design conversation flows in a visual builder (or via API), connect your knowledge base and tools, then deploy to phone numbers, chat, or SMS. Speech recognition, understanding, reasoning, and text-to-speech run in real time with sub-600ms replies.',
  },
  {
    q: 'Can I use my existing phone numbers?',
    a: 'Yes. VoilitAI supports SIP trunking so you can keep the numbers customers already know. You can also provision new carrier-verified numbers directly on the platform.',
  },
  {
    q: 'How fast can I deploy an agent?',
    a: 'Simple agents go live in hours using templates. Complex enterprise deployments with custom integrations typically take 2–4 weeks with hands-on support.',
  },
  {
    q: 'Is it secure enough for healthcare and finance?',
    a: 'VoilitAI is built for regulated teams: SOC 2 Type II controls, HIPAA-ready architecture, GDPR-ready processing, PII redaction, encryption in transit and at rest, SSO, and role-based access.',
  },
  {
    q: 'What languages are supported?',
    a: 'English, Spanish, French, German, Portuguese, Japanese, Mandarin, and 30+ more — with natural pronunciation per language and mid-call language switching.',
  },
  {
    q: 'Is VoilitAI an alternative to Vapi or Retell?',
    a: 'Yes. Teams looking for an alternative to Vapi or Retell AI use VoilitAI when they want production Voice OS agents — sub-600ms replies, a visual builder, SIP on existing numbers, CRM actions on the call, and enterprise support — without stitching vendors together.',
  },
  {
    q: 'What are the fastest Voice OS agents?',
    a: 'The fastest voice OS agents stream speech recognition, reasoning, and audio together so replies land in under 600ms. VoilitAI is built for that latency, plus barge-in and turn-taking, so callers do not hear the awkward pause common in stacked STT + LLM + TTS setups.',
  },
  {
    q: 'What is the most reliable AI customer support?',
    a: 'The most reliable customer support answers every call, keeps context across voice, chat, and SMS, and hands off to a human with a summary when judgment is needed. VoilitAI adds 99.99% uptime, simulation QA, and live knowledge-base answers so tier-1 never goes dark after hours.',
  },
];

export const ALL_FAQS = [
  {
    category: 'Product',
    items: [
      ...HOME_FAQS,
      {
        q: 'What happens if the AI cannot answer something?',
        a: 'It hands off. You set the rules: warm transfer with a summary, take a detailed message, or schedule a callback. The caller is never left in a dead end.',
      },
      {
        q: 'Does VoilitAI detect spam and robocalls?',
        a: 'Yes. Known spam and marketing calls are flagged automatically so real customers get through in seconds and junk never reaches your team.',
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
        q: 'Which CRMs and tools does VoilitAI connect to?',
        a: 'Out-of-the-box connectors include Salesforce, HubSpot, GoHighLevel, Zapier, Make, n8n, Cal.com, Twilio, Vonage, Telnyx, Genesys, Five9, Amazon Connect, and more. Custom APIs are available on Growth and Enterprise.',
      },
      {
        q: 'Can VoilitAI send SMS and chat as well as voice?',
        a: 'Yes. Voice, web chat, and SMS share the same agent brain, so a conversation can start on one channel and continue on another without losing context.',
      },
    ],
  },
];
