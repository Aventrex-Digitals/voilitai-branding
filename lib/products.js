export const PRODUCTS = [
  {
    slug: 'voice-agents',
    name: 'AI Voice Employees',
    status: 'live',
    href: '/#platform',
    icon: 'phone',
    kicker: 'Available now',
    headline: 'Create your own AI voice employee for real phone calls.',
    summary: 'Answer, qualify, book, and hand off, with sub-600ms replies and the tools you connect.',
    description:
      'Build and deploy an AI employee that holds natural phone conversations, takes action during the call, and stays on the line when your team cannot.',
  },
  {
    slug: 'chat-agents',
    name: 'Chat Agents',
    status: 'soon',
    href: '/#chat-agents',
    icon: 'chat',
    kicker: 'Coming soon',
    headline: 'The same AI employee on web and in-app chat.',
    summary: 'Qualify visitors and answer questions without a separate chatbot stack.',
    description:
      'Chat agents will share context, tools, and rules with your voice employee so conversations can start on the site and continue on the phone.',
  },
  {
    slug: 'sms-agents',
    name: 'SMS Agents',
    status: 'soon',
    href: '/#sms-agents',
    icon: 'sms',
    kicker: 'Coming soon',
    headline: 'Text follow-ups from the same AI employee.',
    summary: 'Confirmations, reminders, and missed-call recovery on the agent that already knows the customer.',
    description:
      'SMS will use the same knowledge and tools as voice, without a second vendor.',
  },
  {
    slug: 'website-voice',
    name: 'Website Voice',
    status: 'soon',
    href: '/#website-voice',
    icon: 'globe',
    kicker: 'Coming soon',
    headline: 'Talk to your site the way callers talk to your phone.',
    summary: 'A voice experience for high-intent pages, without another form graveyard.',
    description:
      'Website voice will reuse the AI employee you already created for phone.',
  },
];

export const PLATFORM_CAPABILITIES = [
  {
    id: 'answer',
    number: '01',
    title: 'Answer every call',
    lead: 'Your AI employee picks up inbound calls in seconds, nights, weekends, and overflow included.',
    points: [
      'No hold music and no voicemail black hole',
      'Recover conversations when your team is busy',
      'Keep existing numbers with SIP, or provision new ones',
    ],
  },
  {
    id: 'booking',
    number: '02',
    title: 'Book and take action',
    lead: 'Connect the tools you already use so the agent can help schedule and complete work during the call.',
    points: [
      'Attach calendars, booking tools, and custom APIs',
      'Lookups, transfers, and live actions you allow',
      'Guardrails so the agent only does what you configure',
    ],
  },
  {
    id: 'capture',
    number: '03',
    title: 'Qualify and capture leads',
    lead: 'Ask the right questions, collect details, and push outcomes into the systems you connect.',
    points: [
      'Structured summaries and call transcripts',
      'Lead details captured while the caller is still on the line',
      'Handoff rules for hot prospects',
    ],
  },
  {
    id: 'handoff',
    number: '04',
    title: 'Warm human handoff',
    lead: 'When judgment is required, a person gets the call plus context, nobody repeats themselves.',
    points: [
      'Rules you control: transfer, message, or next step',
      'Context preserved across the conversation',
      'Escalation for emergencies, VIP accounts, and edge cases',
    ],
  },
  {
    id: 'platform',
    number: '05',
    title: 'Built for your business',
    lead: 'Create your AI employee once. Grow into more channels as they ship, without rebuilding from scratch.',
    points: [
      'No-code agent builder for business operators',
      'Same knowledge and tools across future chat and SMS',
      'API access when you need custom workflows',
    ],
  },
];

export const VOICE_DEMOS = [
  {
    id: 'healthcare',
    label: 'Dental & clinics',
    agent: 'Clinic receptionist',
    href: '/solutions/healthcare/',
    cta: 'Explore healthcare',
    outcomes: ['Visit booked', 'Intake captured', 'Reminder set'],
    messages: [
      { role: 'ai', text: 'Good afternoon, Riverside Clinic. How can I help you today?' },
      { role: 'user', text: 'I need a cleaning sometime next week, preferably after 3.' },
      { role: 'ai', text: 'I have Tuesday at 3:30 or Thursday at 4:00 with Dr. Patel. Which works better?' },
      { role: 'user', text: 'Thursday at 4.' },
      { role: 'ai', text: 'Booked for Thursday at 4:00. I’ll send a confirmation to this number. Anything else?' },
    ],
  },
  {
    id: 'auto',
    label: 'Auto repair',
    agent: 'Service advisor',
    href: '/solutions/auto-repair/',
    cta: 'Explore auto repair',
    outcomes: ['Job details taken', 'Slot offered', 'Callback set'],
    messages: [
      { role: 'ai', text: 'Thanks for calling Harbor Auto. Are you calling about an existing repair or a new appointment?' },
      { role: 'user', text: 'My brakes are squealing and I need someone this week.' },
      { role: 'ai', text: 'I can help. What’s the year, make, and model, and do mornings or afternoons work better?' },
      { role: 'user', text: '2019 Honda Civic. Afternoons.' },
      { role: 'ai', text: 'I have Thursday at 2:30. I’ll hold that and have the service desk confirm with a callback.' },
    ],
  },
  {
    id: 'hvac',
    label: 'HVAC',
    agent: 'Dispatch coordinator',
    href: '/solutions/home-services/',
    cta: 'Explore home services',
    outcomes: ['Urgency triaged', 'Window booked', 'Tech alerted'],
    messages: [
      { role: 'ai', text: 'Harbor HVAC. We can get someone out today. Is this a no-heat emergency or a maintenance visit?' },
      { role: 'user', text: 'The furnace is out and it’s 40 degrees in here.' },
      { role: 'ai', text: 'That’s an emergency dispatch. I have a technician at 1:15 or 3:45. I need the address and a callback number.' },
      { role: 'user', text: '14 Cedar Lane. Use this number.' },
      { role: 'ai', text: 'Booked at 1:15. You’ll get a text when Alex is 20 minutes out. Stay warm.' },
    ],
  },
  {
    id: 'saas',
    label: 'Support',
    agent: 'Product support',
    href: '/solutions/customer-support/',
    cta: 'Explore support',
    outcomes: ['Issue triaged', 'Details captured', 'Human queued'],
    messages: [
      { role: 'ai', text: 'Hi, this is VoilitAI for Northstar. Are you calling about billing or a product issue?' },
      { role: 'user', text: 'My workspace login stopped working after we rotated keys.' },
      { role: 'ai', text: 'I can capture the details and escalate. What’s the workspace name, and when did it start?' },
      { role: 'user', text: 'acme.northstar.io, about an hour ago. We’re blocked.' },
      { role: 'ai', text: 'Got it. I’m connecting you to Maya on the identity team with that context ready.' },
    ],
  },
];

export const PLATFORM_PILLS = [
  'Create your own AI employee',
  'No developer required',
  'Deploy on your phone lines',
];
