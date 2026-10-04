/**
 * Content for P1 SEO product, use-case, and learn pages.
 * Each page targets one primary intent from the SEO Growth Blueprint.
 */

export const PRODUCT_PAGES = {
  'ai-voice-agents': {
    slug: 'ai-voice-agents',
    path: '/ai-voice-agents/',
    eyebrow: 'Product',
    title: 'AI voice agents for businesses',
    h1: 'AI voice agents that answer, qualify, and book',
    lead:
      'VoilitAI is an AI voice agent platform for businesses that cannot miss a call. Create agents that sound natural, follow your rules, connect to your tools, and hand off to a human when needed.',
    metaTitle: 'AI Voice Agents for Business',
    metaDescription:
      'Deploy AI voice agents that answer calls, qualify leads, and book appointments. No-code builder, phone deployment, CRM sync, and warm human handoff.',
    keywords: [
      'AI voice agents',
      'AI voice agents for business',
      'no-code AI voice agent',
      'voice agent builder',
      'AI voice agent platform',
    ],
    primaryCta: { label: 'Build Your AI Voice Agent', href: 'app' },
    sections: [
      {
        eyebrow: 'What they do',
        title: 'Voice agents built for real phone work',
        body: [
          'An AI voice agent answers inbound calls (and can place outbound ones), understands what the caller needs, follows the instructions you set, and takes action through connected tools.',
          'Unlike IVR menus, callers speak naturally. Unlike developer-only stacks, you configure the agent in a dashboard without assembling speech-to-text, LLM, and text-to-speech yourself.',
        ],
      },
      {
        eyebrow: 'Capabilities',
        title: 'What VoilitAI voice agents handle',
        cards: [
          {
            title: 'Natural conversations',
            text: 'Multi-turn dialog with interruption handling, so callers can correct themselves mid-sentence.',
          },
          {
            title: 'Tool actions on the call',
            text: 'Look up availability, write CRM notes, trigger workflows, and confirm bookings while the caller is still on the line.',
          },
          {
            title: 'Warm human handoff',
            text: 'Transfer to a person with a live summary when the request needs judgment, empathy, or a licensed professional.',
          },
          {
            title: 'Transcripts and analytics',
            text: 'Review every call, spot missed opportunities, and improve scripts from real conversations.',
          },
        ],
      },
      {
        eyebrow: 'Who it is for',
        title: 'Built for operators, not only developers',
        body: [
          'If you want API-first latency benchmarks and a custom STT/LLM/TTS pipeline, a developer platform may fit better. If you want a reliable voice employee on your business lines this month, VoilitAI is built for you.',
        ],
        links: [
          { href: '/ai-receptionist/', label: 'AI receptionist' },
          { href: '/ai-voice-employees/', label: 'AI voice employees' },
          { href: '/use-cases/appointment-booking/', label: 'Appointment booking' },
          { href: '/solutions/', label: 'Industry solutions' },
        ],
      },
    ],
    faqs: [
      {
        q: 'What is an AI voice agent?',
        a: 'An AI voice agent is software that holds phone conversations: it listens, reasons about what was said, speaks back, and can take actions like booking or CRM updates using your connected tools.',
      },
      {
        q: 'Do I need a developer to launch?',
        a: 'No. You create and customize the agent in the VoilitAI dashboard, connect phone numbers and tools, then deploy. Developers can still extend via APIs when you need custom integrations.',
      },
      {
        q: 'Can the agent transfer to a human?',
        a: 'Yes. You define rules for when to transfer (VIP callers, emergencies, or explicit requests for a person). The handoff can include a summary of what already happened on the call.',
      },
      {
        q: 'How is this different from an IVR?',
        a: 'IVRs force callers through press-one menus. AI voice agents converse in plain language, handle interruptions, and complete jobs like qualification and booking instead of only routing.',
      },
    ],
    related: [
      { href: '/ai-receptionist/', label: 'AI receptionist' },
      { href: '/ai-phone-agent/', label: 'AI phone agent' },
      { href: '/learn/what-is-an-ai-voice-agent/', label: 'What is an AI voice agent?' },
      { href: '/pricing/', label: 'Pricing' },
    ],
  },

  'ai-voice-employees': {
    slug: 'ai-voice-employees',
    path: '/ai-voice-employees/',
    eyebrow: 'Category',
    title: 'AI voice employees for businesses',
    h1: 'AI voice employees that work your phone line',
    lead:
      'Hire an AI voice employee the way you would staff a role: define what it knows, what it should do on every call, and when to escalate. VoilitAI makes that employee answer 24/7 without a developer.',
    metaTitle: 'AI Voice Employees for Businesses',
    metaDescription:
      'Create AI voice employees that answer calls, qualify leads, book appointments, and hand off to your team. Built for business owners, not developer teams.',
    keywords: [
      'AI voice employee',
      'AI voice employees',
      'AI employees for businesses',
      'AI employee for phone',
      'hire AI voice employee',
    ],
    primaryCta: { label: 'Create Your AI Voice Employee', href: 'app' },
    sections: [
      {
        eyebrow: 'The idea',
        title: 'Treat the agent like a hire, not a chatbot',
        body: [
          'An AI voice employee is a named role on your phone line: receptionist, appointment coordinator, lead qualifier, or after-hours coverage. You onboard it with knowledge, scripts, tools, and escalation rules.',
          'This framing is deliberate. Buyers do not want another developer platform. They want someone—or something—that picks up when the business cannot.',
        ],
      },
      {
        eyebrow: 'Jobs',
        title: 'Roles your AI voice employee can fill',
        cards: [
          {
            title: 'Front desk',
            text: 'Greet callers, answer FAQs, capture details, and route or book the next step.',
          },
          {
            title: 'Lead qualifier',
            text: 'Ask your questions, score fit, and sync qualified opportunities into your CRM.',
          },
          {
            title: 'Scheduler',
            text: 'Offer real availability, confirm appointments, and reduce no-shows with clear confirmations.',
          },
          {
            title: 'After-hours coverage',
            text: 'Answer nights and weekends so emergency or high-intent callers are never left on voicemail.',
          },
        ],
      },
      {
        eyebrow: 'Setup',
        title: 'Onboard an AI employee in days, not months',
        body: [
          'Create the employee in the dashboard, teach it your business, connect phone numbers and calendars or CRM, test with live calls, then put it on your lines. Your operations team can own the configuration.',
        ],
        links: [
          { href: '/how-it-works/', label: 'How it works' },
          { href: '/ai-employee/', label: 'What it can do' },
          { href: '/features/', label: 'Platform features' },
        ],
      },
    ],
    faqs: [
      {
        q: 'What is an AI voice employee?',
        a: 'An AI voice employee is an AI agent configured as a business role on your phone line. It answers calls, follows your playbook, uses your tools, and escalates to humans when the job requires it.',
      },
      {
        q: 'Will callers know it is AI?',
        a: 'You control tone and disclosure. VoilitAI does not invent facts outside the knowledge you provide, and the agent should not pretend to be human if asked directly.',
      },
      {
        q: 'Can one business run multiple employees?',
        a: 'Yes. Many teams run separate agents for reception, sales qualification, and after-hours triage, each with its own knowledge and tools.',
      },
    ],
    related: [
      { href: '/ai-voice-agents/', label: 'AI voice agents' },
      { href: '/ai-receptionist/', label: 'AI receptionist' },
      { href: '/use-cases/after-hours-answering/', label: 'After-hours answering' },
      { href: '/solutions/', label: 'By industry' },
    ],
  },

  'ai-receptionist': {
    slug: 'ai-receptionist',
    path: '/ai-receptionist/',
    eyebrow: 'Product',
    title: 'AI receptionist for small business',
    h1: 'AI receptionist that never misses a call',
    lead:
      'An AI receptionist answers every ring, handles common questions, books appointments when tools are connected, and transfers to your team with context. Built for dental, home services, auto repair, clinics, and other phone-driven businesses.',
    metaTitle: 'AI Receptionist for Small Business',
    metaDescription:
      'AI receptionist and AI phone answering for small business. Answer calls 24/7, book appointments, capture leads, and warm-transfer to staff. No developer required.',
    keywords: [
      'AI receptionist',
      'AI receptionist for small business',
      'AI virtual receptionist',
      'AI phone answering service',
      'virtual receptionist AI',
      'after-hours answering service AI',
    ],
    primaryCta: { label: 'Set Up Your AI Receptionist', href: 'app' },
    sections: [
      {
        eyebrow: 'Why it matters',
        title: 'Missed calls become missed revenue',
        body: [
          'When your front desk is with a patient, on a job site, or closed for the night, callers hang up and try a competitor who picks up. An AI receptionist covers overflow and after-hours without the cost of a full-time hire.',
          'This page is for AI phone answering and virtual receptionist buyers: you want the phone answered well, not an SDK to assemble.',
        ],
      },
      {
        eyebrow: 'What it handles',
        title: 'Front-desk jobs an AI receptionist can own',
        cards: [
          {
            title: 'Greet and route',
            text: 'Open every call professionally, understand intent, and send the right next step.',
          },
          {
            title: 'Answer FAQs',
            text: 'Hours, location, services, pricing ranges, and policies from the knowledge you provide.',
          },
          {
            title: 'Book appointments',
            text: 'Offer availability and confirm bookings when your calendar or practice software is connected.',
          },
          {
            title: 'Capture messages',
            text: 'Take structured notes and sync them so nothing relies on a scribbled sticky note.',
          },
        ],
      },
      {
        eyebrow: 'Industries',
        title: 'Receptionists tuned to how your business answers the phone',
        body: [
          'Thin “AI receptionist for X” pages flood search results. Ours focus on real call types: new patients vs recalls, emergency vs routine HVAC, service advisors vs sales desks.',
        ],
        links: [
          { href: '/solutions/healthcare/', label: 'Healthcare & dental' },
          { href: '/solutions/home-services/', label: 'HVAC & home services' },
          { href: '/solutions/auto-repair/', label: 'Auto repair' },
          { href: '/solutions/real-estate/', label: 'Real estate' },
        ],
      },
      {
        eyebrow: 'Cost',
        title: 'How AI receptionist pricing compares',
        body: [
          'Traditional answering services bill per minute or per call with human agents. A full-time receptionist is a salary plus benefits. VoilitAI pricing is plan-based with included minutes so you can model cost against your call volume on the pricing page.',
        ],
        links: [
          { href: '/pricing/', label: 'See AI receptionist pricing' },
          { href: '/compare/best-ai-voice-agent-platforms/', label: 'Compare voice agent platforms' },
        ],
      },
    ],
    faqs: [
      {
        q: 'Is an AI receptionist the same as an answering service?',
        a: 'Answering services use human agents (sometimes with scripts). An AI receptionist is software that converses, follows your knowledge base, and can book or update systems directly. Many businesses use AI for first response and humans for complex calls.',
      },
      {
        q: 'Will it sound robotic?',
        a: 'Modern voice models sound natural on routine calls. Quality depends on clear instructions, good knowledge, and testing. You should hear a live demo before you switch production traffic.',
      },
      {
        q: 'Can it book into my calendar?',
        a: 'Yes, when calendar or booking tools are connected. The agent offers real availability you define instead of promising slots that do not exist.',
      },
    ],
    related: [
      { href: '/ai-voice-agents/', label: 'AI voice agents' },
      { href: '/use-cases/appointment-booking/', label: 'Appointment booking' },
      { href: '/use-cases/after-hours-answering/', label: 'After-hours answering' },
      { href: '/pricing/', label: 'Pricing' },
    ],
  },

  'ai-phone-agent': {
    slug: 'ai-phone-agent',
    path: '/ai-phone-agent/',
    eyebrow: 'Product',
    title: 'AI phone agent for inbound and outbound',
    h1: 'AI phone agents for inbound and outbound calls',
    lead:
      'Run AI phone agents on your business lines for inbound answering and structured outbound follow-ups. Qualify, book, remind, and recover missed calls without staffing every ring.',
    metaTitle: 'AI Phone Agent for Inbound & Outbound',
    metaDescription:
      'AI phone agents that handle inbound calls and outbound follow-ups. Qualify leads, book appointments, send reminders, and warm-transfer to your team.',
    keywords: [
      'AI phone agent',
      'AI phone agents',
      'AI call answering',
      'inbound AI phone agent',
      'outbound AI calling',
    ],
    primaryCta: { label: 'Create Your Phone Agent', href: 'app' },
    sections: [
      {
        eyebrow: 'Inbound',
        title: 'Answer every inbound call with a clear job',
        body: [
          'Inbound AI phone agents cover reception, support FAQs, lead intake, and appointment changes. Callers get a response in seconds instead of voicemail or hold music.',
        ],
        cards: [
          {
            title: 'Speed to lead',
            text: 'New inquiries are answered immediately, which matters most in real estate, home services, and local services.',
          },
          {
            title: 'Overflow coverage',
            text: 'When your team is busy, the agent takes the call instead of letting it bounce to voicemail.',
          },
        ],
      },
      {
        eyebrow: 'Outbound',
        title: 'Structured outbound without overtime staffing',
        body: [
          'Outbound AI calling works best for reminders, reactivation, and follow-ups with a clear script—not for spam. Use consent-aware campaigns and hand off interested callers to a human.',
        ],
        cards: [
          {
            title: 'Appointment reminders',
            text: 'Confirm upcoming visits and reduce no-shows with clear, conversational reminders.',
          },
          {
            title: 'Missed-call recovery',
            text: 'Call back unanswered inbound numbers quickly so interest does not go cold.',
          },
        ],
      },
      {
        eyebrow: 'Telephony',
        title: 'Works on the numbers and workflows you already have',
        body: [
          'Connect numbers in the dashboard, keep existing lines when you want, and route by schedule or call type. Voice is live today; additional channels share the same agent brain on the roadmap.',
        ],
        links: [
          { href: '/features/', label: 'Platform features' },
          { href: '/how-it-works/', label: 'How deployment works' },
          { href: '/trust/', label: 'Security & trust' },
        ],
      },
    ],
    faqs: [
      {
        q: 'Can one AI phone agent do inbound and outbound?',
        a: 'Yes, though many teams prefer separate agents or modes so scripts and compliance rules stay clear for each direction.',
      },
      {
        q: 'Is outbound AI calling legal?',
        a: 'Outbound calling is regulated (including TCPA in the US). You are responsible for consent, calling hours, and disclosures. Use outbound for permitted reminders and follow-ups, and review rules with counsel for your use case.',
      },
      {
        q: 'How fast does the agent respond?',
        a: 'VoilitAI is built for conversational latency on business calls. Test with a live demo on your own scripts—hearing the agent is the best quality check.',
      },
    ],
    related: [
      { href: '/ai-voice-agents/', label: 'AI voice agents' },
      { href: '/use-cases/lead-qualification/', label: 'Lead qualification' },
      { href: '/use-cases/after-hours-answering/', label: 'After-hours answering' },
      { href: '/compare/best-ai-voice-agent-platforms/', label: 'Compare platforms' },
    ],
  },
};

export const USE_CASE_PAGES = {
  'appointment-booking': {
    slug: 'appointment-booking',
    path: '/use-cases/appointment-booking/',
    eyebrow: 'Use case',
    title: 'AI appointment booking agent',
    h1: 'AI appointment booking that fills your calendar 24/7',
    lead:
      'Let callers book, reschedule, and confirm appointments over the phone. Your AI agent offers real availability from connected calendars and captures the details your team needs.',
    metaTitle: 'AI Appointment Booking Agent',
    metaDescription:
      'AI appointment booking over the phone. Offer live availability, confirm appointments, and reduce no-shows without a developer.',
    keywords: [
      'AI appointment booking',
      'AI appointment booking agent',
      'AI phone agent that books appointments',
      'AI scheduling phone calls',
    ],
    primaryCta: { label: 'Create Your Booking Agent', href: 'app' },
    workflow: [
      { step: '1', title: 'Caller states the need', text: 'New visit, reschedule, or cancellation in plain language.' },
      { step: '2', title: 'Agent checks rules', text: 'Service type, duration, location, and any intake questions you require.' },
      { step: '3', title: 'Offers real slots', text: 'Availability comes from connected calendars or booking tools—not guesses.' },
      { step: '4', title: 'Confirms and syncs', text: 'Books the appointment and writes the outcome where your team looks.' },
      { step: '5', title: 'Escalates when needed', text: 'Complex cases or VIP requests transfer to a human with context.' },
    ],
    handles: [
      'New appointment requests',
      'Reschedules and cancellations',
      'After-hours booking',
      'Service-type intake questions',
    ],
    handoff: [
      'Clinical or legal judgment required',
      'Caller asks for a specific person',
      'No availability matches and a callback is needed',
    ],
    faqs: [
      {
        q: 'Does the AI invent open times?',
        a: 'No. Booking should use connected availability. If tools are not connected yet, the agent can capture a preferred window and create a follow-up task for your team.',
      },
      {
        q: 'Can it reduce no-shows?',
        a: 'Clear confirmation during the call helps. Many teams also run reminder calls or messages as a separate workflow.',
      },
    ],
    related: [
      { href: '/ai-receptionist/', label: 'AI receptionist' },
      { href: '/solutions/healthcare/', label: 'Healthcare & dental' },
      { href: '/solutions/home-services/', label: 'Home services' },
      { href: '/pricing/', label: 'Pricing' },
    ],
  },

  'lead-qualification': {
    slug: 'lead-qualification',
    path: '/use-cases/lead-qualification/',
    eyebrow: 'Use case',
    title: 'AI lead qualification agent',
    h1: 'AI lead qualification on the first phone call',
    lead:
      'Screen inbound callers against your criteria, capture structured answers, score fit, and sync qualified leads to your CRM so your sales team spends time on real opportunities.',
    metaTitle: 'AI Lead Qualification Agent',
    metaDescription:
      'Qualify inbound leads over the phone with an AI agent. Ask your questions, score fit, sync to CRM, and book the next step automatically.',
    keywords: [
      'AI lead qualification',
      'AI lead qualification agent',
      'qualify leads over the phone',
      'speed to lead',
    ],
    primaryCta: { label: 'Create Your Lead Qualifier', href: 'app' },
    workflow: [
      { step: '1', title: 'Answer instantly', text: 'New leads get a live conversation instead of voicemail.' },
      { step: '2', title: 'Ask your questions', text: 'Budget, timeline, service area, property type—whatever you define.' },
      { step: '3', title: 'Score and branch', text: 'Qualified callers get booked or routed; poor fits get a polite close.' },
      { step: '4', title: 'Write to CRM', text: 'Notes and fields sync so reps are not re-asking the same questions.' },
      { step: '5', title: 'Warm transfer', text: 'Hot leads can go straight to a closer with a live summary.' },
    ],
    handles: [
      'Inbound web and ad lead callbacks',
      'New inquiry screening',
      'Service-area and budget checks',
      'Meeting booking for qualified callers',
    ],
    handoff: [
      'Enterprise or custom pricing discussions',
      'Existing customers needing account help',
      'Angry or sensitive conversations',
    ],
    faqs: [
      {
        q: 'What questions should the agent ask?',
        a: 'Start with the minimum your team needs to decide next steps. Too many questions increase hang-ups; too few waste sales time. Refine from call transcripts.',
      },
      {
        q: 'Does this replace SDRs?',
        a: 'It replaces repetitive first-touch qualification, not relationship selling. Humans still close and handle exceptions.',
      },
    ],
    related: [
      { href: '/solutions/lead-qualification/', label: 'Lead qualification solution' },
      { href: '/solutions/real-estate/', label: 'Real estate' },
      { href: '/ai-phone-agent/', label: 'AI phone agent' },
      { href: '/compare/best-ai-voice-agent-platforms/', label: 'Compare platforms' },
    ],
  },

  'after-hours-answering': {
    slug: 'after-hours-answering',
    path: '/use-cases/after-hours-answering/',
    eyebrow: 'Use case',
    title: 'After-hours AI answering',
    h1: 'After-hours answering without hiring overnight staff',
    lead:
      'Keep your phone covered nights, weekends, and holidays. An AI agent answers, triages urgency, books when possible, and wakes a human only when the call truly needs one.',
    metaTitle: 'After-Hours AI Answering for Small Business',
    metaDescription:
      'After-hours AI phone answering for small business. Cover nights and weekends, triage emergencies, book appointments, and escalate only when needed.',
    keywords: [
      'after-hours answering service AI',
      'after hours answering small business',
      'AI after hours receptionist',
      '24/7 call answering',
    ],
    primaryCta: { label: 'Cover After Hours', href: 'app' },
    workflow: [
      { step: '1', title: 'Answer after close', text: 'Schedule-based routing sends off-hours calls to the AI employee.' },
      { step: '2', title: 'Triage urgency', text: 'Emergency vs routine rules you define for your industry.' },
      { step: '3', title: 'Capture everything', text: 'Name, callback, address, issue details in a structured note.' },
      { step: '4', title: 'Book or escalate', text: 'Next-day appointments for routine; on-call transfer for true emergencies.' },
    ],
    handles: [
      'After-hours appointment requests',
      'Emergency triage intake',
      'Location and hours questions',
      'Missed-call recovery the next morning',
    ],
    handoff: [
      'True emergencies that need an on-call tech or clinician',
      'VIP accounts with dedicated coverage',
      'Situations outside your published service rules',
    ],
    faqs: [
      {
        q: 'Can it page an on-call person?',
        a: 'Yes, when you configure transfer rules for emergency criteria. Routine calls should not wake staff at 2 AM.',
      },
      {
        q: 'Is this cheaper than an answering service?',
        a: 'Often, especially at higher volumes, because you are not paying a human per minute for every FAQ. Compare your monthly call minutes on the pricing page.',
      },
    ],
    related: [
      { href: '/ai-receptionist/', label: 'AI receptionist' },
      { href: '/solutions/home-services/', label: 'HVAC & home services' },
      { href: '/solutions/auto-repair/', label: 'Auto repair' },
      { href: '/pricing/', label: 'Pricing' },
    ],
  },
};

export const LEARN_PAGES = {
  'what-is-an-ai-voice-agent': {
    slug: 'what-is-an-ai-voice-agent',
    path: '/learn/what-is-an-ai-voice-agent/',
    title: 'What Is an AI Voice Agent?',
    metaTitle: 'What Is an AI Voice Agent? How It Works',
    metaDescription:
      'A plain-English definition of AI voice agents: how they handle phone calls, what they can do for a business, limits, and how they differ from IVR and chatbots.',
    keywords: [
      'what is an AI voice agent',
      'AI voice agent meaning',
      'how AI voice agents work',
      'voice AI agent',
    ],
    updated: '2026-10-04',
    definition:
      'An AI voice agent is software that holds a live phone conversation: it converts speech to text, decides what to say or do with a language model, speaks back with text-to-speech, and can trigger business tools such as calendars or CRMs during the call.',
  },
};

export const COMPARE_PAGE = {
  path: '/compare/best-ai-voice-agent-platforms/',
  metaTitle: 'Best AI Voice Agent Platforms (2026)',
  metaDescription:
    'Honest comparison of AI voice agent platforms for developers, no-code teams, enterprises, and small businesses. Includes VoilitAI with a clear “best for” fit.',
  keywords: [
    'best AI voice agent platforms',
    'AI voice agent platform comparison',
    'best voice AI platform 2026',
  ],
  updated: 'October 2026',
  disclosure:
    'VoilitAI makes one of the products compared here. Competitor details are summarized from public docs and pricing pages and should be verified before you buy—prices and features change quickly in this category.',
};

export function getProductPage(slug) {
  return PRODUCT_PAGES[slug] || null;
}

export function getUseCasePage(slug) {
  return USE_CASE_PAGES[slug] || null;
}

export const PRODUCT_SLUGS = Object.keys(PRODUCT_PAGES);
export const USE_CASE_SLUGS = Object.keys(USE_CASE_PAGES);
