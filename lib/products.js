export const PRODUCTS = [
  {
    slug: 'voice-agents',
    name: 'Voice Agents',
    status: 'live',
    href: '/#platform',
    icon: 'phone',
    kicker: 'Available now',
    headline: 'Human-sounding agents on every inbound and outbound call.',
    summary: 'Answer, qualify, book, and hand off — with sub-600ms replies and a CRM note before the caller hangs up.',
    description:
      'Production voice agents that hold natural phone conversations, take real actions during the call, and stay on the line when your team cannot.',
  },
  {
    slug: 'chat-agents',
    name: 'Chat Agents',
    status: 'soon',
    href: '/#chat-agents',
    icon: 'chat',
    kicker: 'Coming soon',
    headline: 'The same agent brain on web and in-app chat.',
    summary: 'Qualify visitors, answer product questions, and book demos without a separate chatbot stack.',
    description:
      'Chat agents will share context, tools, and guardrails with your voice agents so a conversation can start on the site and continue on the phone.',
  },
  {
    slug: 'sms-agents',
    name: 'SMS Agents',
    status: 'soon',
    href: '/#sms-agents',
    icon: 'sms',
    kicker: 'Coming soon',
    headline: 'Two-way text that follows up when a call is not enough.',
    summary: 'Confirmations, reminders, and missed-call recovery on the same agent that already knows the customer.',
    description:
      'SMS agents will send and receive messages from the same knowledge base and CRM actions as voice — without a second vendor.',
  },
  {
    slug: 'website-voice',
    name: 'Website Voice',
    status: 'soon',
    href: '/#website-voice',
    icon: 'globe',
    kicker: 'Coming soon',
    headline: 'Talk to the site the way callers talk to the phone.',
    summary: 'A voice widget for high-intent pages — qualify, book, and route without a form graveyard.',
    description:
      'Website voice will put a live agent on pricing, demo, and contact pages using the flows you already designed for the phone.',
  },
];

export const PLATFORM_CAPABILITIES = [
  {
    id: 'answer',
    number: '01',
    title: '24/7 call answering',
    lead: 'Every inbound call is picked up in seconds — nights, weekends, and overflow included.',
    points: [
      'No hold music and no voicemail black hole',
      'Spam and robocall filtering so real customers get through',
      'Keep your existing numbers with SIP, or provision new ones',
    ],
  },
  {
    id: 'booking',
    number: '02',
    title: 'Booking and live actions',
    lead: 'The agent does the work during the call, not in a follow-up email that never gets sent.',
    points: [
      'Book, reschedule, and confirm on Google Calendar, Outlook, and Cal.com',
      'Real-time tools: payments, lookups, transfers, and custom APIs',
      'Guardrails so the agent only does what you allow',
    ],
  },
  {
    id: 'capture',
    number: '03',
    title: 'Lead capture and CRM sync',
    lead: 'Name, intent, and next step land in Salesforce, HubSpot, or GoHighLevel before the line drops.',
    points: [
      'Structured summaries and full transcripts on every call',
      'Opportunities and notes created without manual entry',
      'Slack and email alerts for hot leads',
    ],
  },
  {
    id: 'handoff',
    number: '04',
    title: 'Warm human handoff',
    lead: 'When judgment is required, a person gets the call plus a live summary — nobody repeats themselves.',
    points: [
      'Rules you control: transfer, message, or callback',
      'Context preserved across the conversation',
      'Escalation for emergencies, VIP accounts, and edge cases',
    ],
  },
  {
    id: 'platform',
    number: '05',
    title: 'Built as a platform',
    lead: 'Voice is the first product, not the last. Chat, SMS, and website voice share the same agent brain when they ship.',
    points: [
      'One visual builder, knowledge base, and analytics layer',
      'Add channels without retraining a second bot',
      'API and WebSocket access for custom experiences',
    ],
  },
];

export const VOICE_DEMOS = [
  {
    id: 'healthcare',
    label: 'Healthcare',
    agent: 'Clinic receptionist',
    href: '/solutions/healthcare/',
    cta: 'Explore healthcare',
    outcomes: ['Visit booked', 'Intake captured', 'Reminder set'],
    messages: [
      { role: 'ai', text: 'Good afternoon, Riverside Clinic. How can I help you today?' },
      { role: 'user', text: 'I need a cleaning sometime next week, preferably after 3.' },
      { role: 'ai', text: 'I have Tuesday at 3:30 or Thursday at 4:00 with Dr. Patel. Which works better?' },
      { role: 'user', text: 'Thursday at 4.' },
      { role: 'ai', text: 'Booked for Thursday at 4:00. I’ll text a confirmation to this number. Anything else?' },
    ],
  },
  {
    id: 'saas',
    label: 'SaaS support',
    agent: 'Product support',
    href: '/solutions/customer-support/',
    cta: 'Explore support',
    outcomes: ['Issue triaged', 'Ticket filed', 'Human queued'],
    messages: [
      { role: 'ai', text: 'Hi — this is VoilitAI for Northstar. Are you calling about billing or a product issue?' },
      { role: 'user', text: 'My workspace SSO stopped working after we rotated keys.' },
      { role: 'ai', text: 'I can see the SSO error on acme.northstar.io from 10:14 UTC. I can reset the connection or escalate to an engineer. Which do you prefer?' },
      { role: 'user', text: 'Escalate, please — we’re blocked.' },
      { role: 'ai', text: 'Connecting you to Maya on the identity team. She already has the workspace ID and error log.' },
    ],
  },
  {
    id: 'legal',
    label: 'Legal intake',
    agent: 'Intake specialist',
    href: '/solutions/legal/',
    cta: 'Explore legal',
    outcomes: ['Matter qualified', 'Consult booked', 'Conflict screen'],
    messages: [
      { role: 'ai', text: 'You’ve reached Hale & Co. I can take a few details and book a consult. What type of matter is this?' },
      { role: 'user', text: 'I was in a car accident last Friday. The other driver ran a red light.' },
      { role: 'ai', text: 'I’m sorry that happened. Was anyone taken to the hospital, and do you already have an attorney?' },
      { role: 'user', text: 'I went to urgent care. No attorney yet.' },
      { role: 'ai', text: 'I have a consult Thursday at 11 with Jordan Hale. I’ll send the intake form after we book. Does Thursday work?' },
    ],
  },
  {
    id: 'home',
    label: 'Home services',
    agent: 'Dispatch desk',
    href: '/solutions/home-services/',
    cta: 'Explore home services',
    outcomes: ['Job booked', 'CRM updated', 'Tech assigned'],
    messages: [
      { role: 'ai', text: 'Harbor HVAC — we can get someone out today. Is this a no-heat emergency or a maintenance visit?' },
      { role: 'user', text: 'The furnace is out and it’s 40 degrees in here.' },
      { role: 'ai', text: 'That’s an emergency dispatch. I have a technician in your zip at 1:15 or 3:45. I need the address and a callback number.' },
      { role: 'user', text: '14 Cedar Lane. Use this number.' },
      { role: 'ai', text: 'Booked at 1:15. You’ll get a text when Alex is 20 minutes out. Stay warm.' },
    ],
  },
];

export const PLATFORM_PILLS = [
  'Voice agents live now',
  'Chat, SMS, and web next',
  'Same builder for every channel',
];
