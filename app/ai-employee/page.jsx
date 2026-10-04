import Link from 'next/link';
import PageHero from '@/components/PageHero';
import CtaSection from '@/components/CtaSection';
import AnimateIn from '@/components/AnimateIn';
import Icon from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import BookDemoButton from '@/components/BookDemoButton';
import { breadcrumbJsonLd, faqJsonLd } from '@/lib/schema';
import {
  AI_EMPLOYEE_CAPABILITIES,
  AI_EMPLOYEE_STEPS,
  AI_EMPLOYEE_FOR,
  AI_EMPLOYEE_FAQS,
} from '@/lib/ai-employee';
import { PAGE_META } from '@/lib/seo';
import { APP_GET_STARTED } from '@/lib/site';

const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'AI Employee', path: '/ai-employee/' },
];

export const metadata = PAGE_META.aiEmployee;

export default function AiEmployeePage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(CRUMBS)} />
      <JsonLd data={faqJsonLd(AI_EMPLOYEE_FAQS)} />

      <PageHero
        crumbs={CRUMBS}
        eyebrow="AI Employee"
        title="What your AI voice employee can do"
        lead="An AI employee that answers every call for your business: greets callers, qualifies leads, books appointments, and hands off to your team when needed."
      >
        <div className="animate-on-load animate-on-load-delay-3 mt-9 flex flex-wrap items-center justify-center gap-3">
          <a href={APP_GET_STARTED} className="btn-primary px-6 py-3.5 text-[0.9rem]">
            Create Your Voice Employee
          </a>
          <BookDemoButton className="btn-secondary px-6 py-3.5 text-[0.9rem]">
            Talk to Our Team
          </BookDemoButton>
        </div>
      </PageHero>

      <section className="border-y border-[var(--border)] bg-[var(--band)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">
          <AnimateIn>
            <p className="section-eyebrow">The problem</p>
            <h2 className="display-feature mt-4">Missed calls become missed revenue</h2>
            <p className="mt-4 leading-relaxed text-[var(--fg-muted)]">
              You are with a customer, on a job, or after hours when a prospect calls. They hit
              voicemail, try a competitor who picks up, and the lead is gone. Every unanswered ring
              is money walking out the door.
            </p>
          </AnimateIn>
          <AnimateIn delay={80}>
            <p className="section-eyebrow">The solution</p>
            <h2 className="display-feature mt-4">Your AI employee never misses the phone</h2>
            <p className="mt-4 leading-relaxed text-[var(--fg-muted)]">
              VoilitAI lets you create an AI voice employee for your lines. It answers, follows the
              script and knowledge you set, captures what matters, books when tools are connected,
              and escalates to a human with context when the call needs one.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow justify-center">Capabilities</p>
          <h2 className="display-section mt-5">What it does on every call</h2>
          <p className="lede mt-5 text-[var(--fg-muted)]">
            Built for real business phone work, not a demo chatbot with a microphone.
          </p>
        </AnimateIn>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {AI_EMPLOYEE_CAPABILITIES.map((item, i) => (
            <AnimateIn key={item.title} delay={i * 40}>
              <article className="h-full">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] text-violet">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--fg-muted)]">{item.text}</p>
              </article>
            </AnimateIn>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--band)]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <AnimateIn className="mx-auto max-w-2xl text-center">
            <p className="section-eyebrow justify-center">How it works</p>
            <h2 className="display-section mt-5">From ring to result in three steps</h2>
          </AnimateIn>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {AI_EMPLOYEE_STEPS.map((step, i) => (
              <AnimateIn key={step.step} delay={i * 70}>
                <p className="font-display text-sm font-bold text-violet">{step.step}</p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--fg-muted)]">{step.text}</p>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <AnimateIn className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow justify-center">Who it is for</p>
          <h2 className="display-section mt-5">Built for phone-driven businesses</h2>
        </AnimateIn>
        <ul className="mx-auto mt-10 grid max-w-3xl gap-4">
          {AI_EMPLOYEE_FOR.map((item, i) => (
            <AnimateIn key={item} delay={i * 50}>
              <li className="flex gap-3 text-[var(--fg-muted)]">
                <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet/15 text-violet">
                  <Icon name="check" className="h-3 w-3" />
                </span>
                <span className="leading-relaxed">{item}</span>
              </li>
            </AnimateIn>
          ))}
        </ul>
        <p className="mt-8 text-center text-sm">
          <Link href="/solutions/" className="font-semibold text-violet">
            See industries →
          </Link>
        </p>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--band)]">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <AnimateIn>
            <p className="section-eyebrow">On the call</p>
            <h2 className="display-section mt-5">What your AI employee actually does</h2>
            <div className="mt-8 space-y-5 leading-relaxed text-[var(--fg-muted)]">
              <p>
                The call is answered as soon as it routes to your AI employee, at three in the
                morning as readily as mid-afternoon. There is no press-one tree and no hold music
                by default. The caller says why they are ringing and the employee responds in the
                voice and tone you configured.
              </p>
              <p>
                From there it does the job a strong front-desk person does. It works out what the
                caller wants, asks the qualifying questions you set, and captures the details you
                need: name, number, the nature of the request, timing, and anything else you teach
                it. If your calendar or booking tools are connected, it can offer real availability
                and confirm during the call.
              </p>
              <p>
                Conversation outcomes can sync into the systems you already use, so the next person
                on your team is not starting from a blank note. If the caller does not fit, the
                employee can say so politely instead of booking a meeting that wastes an hour. When
                a human is needed, handoff carries the context forward.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <AnimateIn>
          <p className="section-eyebrow">Boundaries</p>
          <h2 className="display-section mt-5">What it deliberately does not do</h2>
          <div className="mt-8 space-y-5 leading-relaxed text-[var(--fg-muted)]">
            <p>
              It does not invent facts. Your AI employee works from the knowledge, services, and
              rules you give it. When a caller asks something outside that, it should escalate or
              promise a human follow-up rather than guess.
            </p>
            <p>
              It does not pretend to be human if asked directly. That is both the honest answer and,
              in many places, the safer one.
            </p>
            <p>
              It does not replace your whole team. It handles first contact, qualification, booking,
              and overflow so the conversations your people take are with callers who are already
              prepared.
            </p>
          </div>
        </AnimateIn>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--band)]">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <AnimateIn>
            <p className="section-eyebrow">Stack</p>
            <h2 className="display-section mt-5">Connects to what you already run</h2>
            <p className="mt-6 leading-relaxed text-[var(--fg-muted)]">
              Attach phone numbers, calendars, CRMs, booking tools, webhooks, and custom APIs to the
              same AI employee. Keep your existing lines when you want, or deploy on numbers you
              connect in the dashboard. Voice is live today; chat, SMS, and website voice are on the
              roadmap with the same agent brain.
            </p>
            <p className="mt-6 text-sm">
              <Link href="/#integrations" className="font-semibold text-violet">
                View integrations →
              </Link>
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <AnimateIn>
          <p className="section-eyebrow">FAQ</p>
          <h2 className="display-section mt-5">Questions about your AI employee</h2>
        </AnimateIn>
        <div className="mt-8 divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {AI_EMPLOYEE_FAQS.map((item) => (
            <details key={item.q} className="faq-item">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <CtaSection
        title="Put an AI employee on your phone line"
        text="Create your voice employee, connect your numbers, and start answering real calls without hiring another person."
      />
    </>
  );
}
