import Link from 'next/link';
import PageHero from '@/components/PageHero';
import CtaSection from '@/components/CtaSection';
import AnimateIn from '@/components/AnimateIn';
import JsonLd from '@/components/JsonLd';
import { articleJsonLd, breadcrumbJsonLd } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';
import { KEYWORDS, SITE_NAME } from '@/lib/site';
import { LEARN_PAGES } from '@/lib/seo-landing';

const page = LEARN_PAGES['what-is-an-ai-voice-agent'];

export const metadata = pageMetadata({
  title: page.metaTitle,
  description: page.metaDescription,
  path: page.path,
  keywords: [...page.keywords, ...KEYWORDS],
  type: 'article',
  publishedTime: page.updated,
  modifiedTime: page.updated,
});

const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'Learn', path: '/learn/' },
  { name: page.title, path: page.path },
];

const ARTICLE = {
  title: page.title,
  slug: page.slug,
  excerpt: page.metaDescription,
  date: page.updated,
  author: SITE_NAME,
  keywords: page.keywords,
};

export default function WhatIsAnAiVoiceAgentPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(CRUMBS)} />
      <JsonLd
        data={{
          ...articleJsonLd(ARTICLE),
          mainEntityOfPage: { '@type': 'WebPage', '@id': `https://voilitai.com${page.path}` },
          url: `https://voilitai.com${page.path}`,
        }}
      />

      <PageHero crumbs={CRUMBS} eyebrow="Learn" title={page.title} lead={page.definition}>
        <p className="mt-4 text-sm text-[var(--fg-muted)]">Updated {page.updated}</p>
      </PageHero>

      <article className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 lg:px-8">
        <AnimateIn className="space-y-6 leading-relaxed text-[var(--fg-muted)]">
          <h2 className="display-feature text-[var(--fg)]">How an AI voice agent works</h2>
          <p>
            On every turn of a call, a typical voice agent pipeline does three things: speech-to-text (listen),
            language-model reasoning (decide what to say or which tool to use), and text-to-speech (speak).
            Good systems also handle interruptions (barge-in), keep short-term conversation state, and write
            outcomes to business tools.
          </p>
          <ol className="list-decimal space-y-3 pl-5">
            <li>Caller speaks.</li>
            <li>Speech is transcribed nearly in real time.</li>
            <li>The model chooses a response or a tool action (lookup, book, transfer).</li>
            <li>The reply is spoken back; the loop continues until the job is done or a human takes over.</li>
          </ol>

          <h2 className="display-feature pt-6 text-[var(--fg)]">What AI voice agents can do for a business</h2>
          <p>
            Common jobs include answering the main line, recovering missed calls, qualifying inbound leads,
            booking appointments, answering FAQs, and transferring to a person with context. The useful ones
            are connected to calendars, CRMs, and phone numbers you already use—not demos that only chat.
          </p>

          <h2 className="display-feature pt-6 text-[var(--fg)]">AI voice agent vs IVR vs chatbot</h2>
          <p>
            IVR menus force “press 1” paths. Chatbots work in text. An AI voice agent holds a spoken
            conversation on a phone call. It can still escalate like a good receptionist: when judgment,
            empathy, or a license is required, it should hand off rather than invent an answer.
          </p>

          <h2 className="display-feature pt-6 text-[var(--fg)]">Limits to respect</h2>
          <p>
            Voice agents are only as good as their knowledge, tools, and escalation rules. They should not
            fabricate facts, ignore compliance constraints on recording or outbound dialing, or pretend to be
            human when asked. Test with real scripts before moving production traffic.
          </p>

          <h2 className="display-feature pt-6 text-[var(--fg)]">Where VoilitAI fits</h2>
          <p>
            {SITE_NAME} is an AI voice agent platform for businesses that want to create an AI voice employee
            without assembling the developer stack. If you need full custom infrastructure, a developer
            platform may fit better. If you need the phone answered, qualified, and booked, start with a{' '}
            <Link href="/ai-voice-agents/" className="font-semibold text-violet">
              VoilitAI voice agent
            </Link>
            .
          </p>
        </AnimateIn>

        <div className="mt-12 flex flex-wrap gap-x-5 gap-y-3 text-sm">
          <Link href="/ai-voice-agents/" className="font-semibold text-violet">
            AI voice agents →
          </Link>
          <Link href="/ai-receptionist/" className="font-semibold text-violet">
            AI receptionist →
          </Link>
          <Link href="/compare/best-ai-voice-agent-platforms/" className="font-semibold text-violet">
            Best platforms guide →
          </Link>
          <Link href="/pricing/" className="font-semibold text-violet">
            Pricing →
          </Link>
        </div>
      </article>

      <CtaSection
        title="Hear an AI voice agent on a real call"
        text="Create your agent in the dashboard, or talk through a live demo with the VoilitAI team."
      />
    </>
  );
}
