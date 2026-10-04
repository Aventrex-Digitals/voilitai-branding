export const AI_EMPLOYEE_CAPABILITIES = [
  {
    icon: 'phone',
    title: 'Inbound call answering',
    text: 'Picks up on your business line and talks to callers like a trained teammate.',
  },
  {
    icon: 'wave',
    title: 'Natural conversation',
    text: 'Real dialogue with your greeting, rules, and tone, not a rigid phone tree.',
  },
  {
    icon: 'users',
    title: 'Lead qualification',
    text: 'Asks the questions you define so only the right callers reach your team.',
  },
  {
    icon: 'crm',
    title: 'Info capture',
    text: 'Collects name, contact details, and job context while the call is live.',
  },
  {
    icon: 'calendar',
    title: 'Appointment booking',
    text: 'Offers real availability from connected calendars and confirms on the call.',
  },
  {
    icon: 'outbound',
    title: 'Missed-call recovery',
    text: 'Follows up when a call slips through so the lead does not go cold.',
  },
  {
    icon: 'bolt',
    title: '24/7 availability',
    text: 'Answers nights, weekends, and overflow when your team is already on another line.',
  },
  {
    icon: 'handoff',
    title: 'Warm human handoff',
    text: 'Transfers to a person with context when the caller needs a human.',
  },
];

export const AI_EMPLOYEE_STEPS = [
  {
    step: '01',
    title: 'Caller dials in',
    text: 'A prospect or customer calls your business number, day or night.',
  },
  {
    step: '02',
    title: 'Your AI employee answers',
    text: 'It greets them in your voice and style, then runs the conversation you configured.',
  },
  {
    step: '03',
    title: 'Booked, logged, or handed off',
    text: 'Details land in your tools. Qualified callers get scheduled. Complex cases go to a human.',
  },
];

export const AI_EMPLOYEE_FOR = [
  'You miss calls while you are with customers or on another job.',
  'Your team cannot answer every ring during busy hours.',
  'After-hours and weekend callers still need a real response.',
  'You want qualification and booking before a human spends time on the call.',
];

export const AI_EMPLOYEE_FAQS = [
  {
    q: 'How quickly does it pick up?',
    a: 'As soon as the call routes to your AI employee. Callers reach a conversation, not a long hold queue, and can be qualified or booked without waiting for a callback.',
  },
  {
    q: 'Will callers know they are talking to an AI?',
    a: 'Many will not notice on a short call. If asked directly, the agent can say it is an AI assistant for your business. That is the honest approach and the safer one in many regions.',
  },
  {
    q: 'What happens if it cannot answer something?',
    a: 'It follows your rules: take a message, transfer to a person, or schedule a callback. It should not invent answers outside the knowledge you give it.',
  },
  {
    q: 'Do I need a developer to set this up?',
    a: 'No. Create the employee in the dashboard, customize what it knows, connect numbers and tools, then deploy. Developers are optional for custom API work.',
  },
  {
    q: 'Can it use my existing phone numbers and CRM?',
    a: 'Yes. Connect the numbers and systems you already run. Calendars, CRMs, booking tools, webhooks, and custom APIs can attach to the same AI employee.',
  },
];
