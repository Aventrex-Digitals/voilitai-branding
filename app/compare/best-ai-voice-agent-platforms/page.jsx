import Link from 'next/link';
import PageHero from '@/components/PageHero';
import CtaSection from '@/components/CtaSection';
import AnimateIn from '@/components/AnimateIn';
import JsonLd from '@/components/JsonLd';
import BookDemoButton from '@/components/BookDemoButton';
import { breadcrumbJsonLd, webPageJsonLd } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';
import { APP_GET_STARTED, KEYWORDS, SITE_NAME } from '@/lib/site';
import { COMPARE_PAGE } from '@/lib/seo-landing';

export const metadata = pageMetadata({
  title: COMPARE_PAGE.metaTitle,
  description: COMPARE_PAGE.metaDescription,
  path: COMPARE_PAGE.path,
  keywords: [...COMPARE_PAGE.keywords, ...KEYWORDS],
  absoluteTitle: true,
});

const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'Compare', path: '/compare/best-ai-voice-agent-platforms/' },
];

const PLATFORMS = [
  {
    name: 'VoilitAI',
    bestFor: 'Business owners who want an AI voice employee without assembling a developer stack',
    setup: 'No-code dashboard',
    buyer: 'SMB / operations',
    notes: 'Answer, qualify, book, warm handoff; voice live today',
    href: '/',
  },
  {
    name: 'Vapi',
    bestFor: 'Engineering teams building custom voice agents with full pipeline control',
    setup: 'API / SDK first',
    buyer: 'Developers',
    notes: 'Bring your own models and telephony wiring; usage-based complexity',
    href: 'https://vapi.ai',
  },
  {
    name: 'Retell AI',
    bestFor: 'Teams that want strong voice quality with a developer-friendly platform',
    setup: 'API + dashboard',
    buyer: 'Developers / product',
    notes: 'Often compared on latency and agent tooling; verify current pricing on their site',
    href: 'https://www.retellai.com',
  },
  {
    name: 'Synthflow',
    bestFor: 'Agencies and builders shipping no-code voice flows at volume',
    setup: 'No-code / templates',
    buyer: 'Agencies',
    notes: 'Strong template and white-label angle; confirm fit if you are a single business, not an agency',
    href: 'https://synthflow.ai',
  },
  {
    name: 'Bland AI',
    bestFor: 'Outbound and high-volume calling use cases with an API focus',
    setup: 'API first',
    buyer: 'Developers',
    notes: 'Evaluate compliance carefully for outbound; features change quickly',
    href: 'https://www.bland.ai',
  },
  {
    name: 'Smith.ai',
    bestFor: 'Businesses that want human-backed reception with optional AI',
    setup: 'Managed service',
    buyer: 'SMB',
    notes: 'Human agents plus AI options; typically higher per-interaction cost than pure AI',
    href: 'https://smith.ai',
  },
];

const BUYER_TYPES = [
  {
    title: 'If you are a developer',
    text: 'Start with Vapi, Retell, or Bland when you need full control of STT, LLM, TTS, and custom orchestration. You will own reliability, cost math, and compliance wiring.',
  },
  {
    title: 'If you run an agency',
    text: 'Look at Synthflow-style no-code builders with templates and white-label. Speed of shipping many client agents matters more than a single business playbook.',
  },
  {
    title: 'If you want a receptionist with humans',
    text: 'Smith.ai and similar answering services fit when you prefer people on the line and will pay for that coverage. AI is a supplement, not the whole product.',
  },
  {
    title: 'If you are a business owner who needs the phone answered',
    text: `${SITE_NAME} is built for this lane: create an AI voice employee, connect numbers and tools, and go live without assembling a voice stack.`,
  },
];

export default function BestAiVoiceAgentPlatformsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(CRUMBS)} />
      <JsonLd
        data={webPageJsonLd({
          name: COMPARE_PAGE.metaTitle,
          description: COMPARE_PAGE.metaDescription,
          path: COMPARE_PAGE.path,
          type: 'Article',
        })}
      />

      <PageHero
        crumbs={CRUMBS}
        eyebrow="Comparison"
        title="Best AI voice agent platforms in 2026"
        lead="A practical guide by buyer type—not a crowning of one winner. Pick the platform that matches how you buy and operate, then verify pricing and features on each vendor’s site."
      >
        <p className="animate-on-load animate-on-load-delay-3 mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-[var(--fg-muted)]">
          Updated {COMPARE_PAGE.updated}. {COMPARE_PAGE.disclosure}
        </p>
      </PageHero>

      <section className="border-y border-[var(--border)] bg-[var(--band)]">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
          <AnimateIn>
            <p className="section-eyebrow">TL;DR</p>
            <h2 className="display-section mt-5">Quick verdict</h2>
            <ul className="mt-6 space-y-3 leading-relaxed text-[var(--fg-muted)]">
              <li>· Developers who want full stack control: Vapi, Retell, Bland.</li>
              <li>· Agencies shipping many client agents: Synthflow-style builders.</li>
              <li>· Human-backed reception: Smith.ai and answering services.</li>
              <li>
                · Business owners who want an AI voice employee without developers:{' '}
                <Link href="/" className="font-semibold text-violet">
                  VoilitAI
                </Link>
                .
              </li>
            </ul>
          </AnimateIn>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow justify-center">By buyer type</p>
          <h2 className="display-section mt-5">The market splits four ways</h2>
        </AnimateIn>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {BUYER_TYPES.map((item, i) => (
            <AnimateIn key={item.title} delay={i * 40}>
              <article className="h-full rounded-2xl border border-[var(--border)] p-6">
                <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--fg-muted)]">{item.text}</p>
              </article>
            </AnimateIn>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--band)]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <AnimateIn className="mx-auto max-w-2xl text-center">
            <p className="section-eyebrow justify-center">Comparison</p>
            <h2 className="display-section mt-5">Platform snapshot</h2>
            <p className="mt-4 text-sm text-[var(--fg-muted)]">
              High-level fit only. Always confirm current pricing, compliance, and telephony limits with each vendor.
            </p>
          </AnimateIn>
          <div className="mt-10 overflow-x-auto">
            <table className="min-w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="px-3 py-3 font-semibold">Platform</th>
                  <th className="px-3 py-3 font-semibold">Best for</th>
                  <th className="px-3 py-3 font-semibold">Setup model</th>
                  <th className="px-3 py-3 font-semibold">Primary buyer</th>
                </tr>
              </thead>
              <tbody>
                {PLATFORMS.map((row) => (
                  <tr key={row.name} className="border-b border-[var(--border)] align-top">
                    <td className="px-3 py-4 font-semibold">
                      {row.href.startsWith('http') ? (
                        <a href={row.href} target="_blank" rel="noopener noreferrer" className="text-violet">
                          {row.name}
                        </a>
                      ) : (
                        <Link href={row.href} className="text-violet">
                          {row.name}
                        </Link>
                      )}
                    </td>
                    <td className="px-3 py-4 text-[var(--fg-muted)]">{row.bestFor}</td>
                    <td className="px-3 py-4 text-[var(--fg-muted)]">{row.setup}</td>
                    <td className="px-3 py-4 text-[var(--fg-muted)]">{row.buyer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <AnimateIn>
          <p className="section-eyebrow">When to choose what</p>
          <h2 className="display-section mt-5">When a competitor is the better choice</h2>
          <div className="mt-8 space-y-5 leading-relaxed text-[var(--fg-muted)]">
            <p>
              Choose a developer platform if your team will own latency budgets, model selection, and custom
              telephony. That flexibility is real—and so is the engineering cost.
            </p>
            <p>
              Choose a human answering service if callers must reach a person on every interaction, or if your
              industry expectations make full automation a poor fit today.
            </p>
            <p>
              Choose VoilitAI when the job is to put a reliable AI voice employee on business phone lines:
              reception, qualification, booking, and handoff—without building the voice stack yourself.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={APP_GET_STARTED} className="btn-primary px-6 py-3.5 text-[0.9rem]">
              Try VoilitAI
            </a>
            <BookDemoButton className="btn-secondary px-6 py-3.5 text-[0.9rem]">
              Compare on a live call
            </BookDemoButton>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-5 gap-y-3 text-sm">
            <li>
              <Link href="/ai-voice-agents/" className="font-semibold text-violet">
                AI voice agents →
              </Link>
            </li>
            <li>
              <Link href="/pricing/" className="font-semibold text-violet">
                Pricing →
              </Link>
            </li>
            <li>
              <Link href="/learn/what-is-an-ai-voice-agent/" className="font-semibold text-violet">
                What is an AI voice agent? →
              </Link>
            </li>
          </ul>
        </AnimateIn>
      </section>

      <CtaSection
        title="Create your AI voice employee"
        text="If you want the phone answered without assembling STT, LLM, and TTS yourself, start with VoilitAI."
      />
    </>
  );
}
