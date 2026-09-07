import PageHero from '@/components/PageHero';
import LegalArticle from '@/components/LegalArticle';
import JsonLd from '@/components/JsonLd';
import { breadcrumbJsonLd, webPageJsonLd } from '@/lib/schema';
import { SITE_NAME, CONTACT_EMAIL, APP_URL, LEGAL_UPDATED } from '@/lib/site';
import { PAGE_META } from '@/lib/seo';

const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'Privacy', path: '/privacy/' },
];

const TOC = [
  { id: 'who-we-are', label: 'Who we are' },
  { id: 'scope', label: 'Scope' },
  { id: 'information-we-collect', label: 'Information we collect' },
  { id: 'how-we-use', label: 'How we use information' },
  { id: 'legal-bases', label: 'Legal bases' },
  { id: 'sharing', label: 'How we share information' },
  { id: 'voice-data', label: 'Voice, transcripts, and recordings' },
  { id: 'cookies', label: 'Cookies and similar tech' },
  { id: 'retention', label: 'Retention' },
  { id: 'security', label: 'Security' },
  { id: 'your-rights', label: 'Your rights' },
  { id: 'international', label: 'International transfers' },
  { id: 'children', label: 'Children' },
  { id: 'healthcare', label: 'Healthcare and HIPAA' },
  { id: 'changes', label: 'Changes' },
  { id: 'contact', label: 'Contact' },
];

export const metadata = PAGE_META.privacy;

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(CRUMBS)} />
      <JsonLd
        data={webPageJsonLd({
          name: `${SITE_NAME} Privacy Policy`,
          description: PAGE_META.privacy.description,
          path: '/privacy/',
        })}
      />
      <PageHero
        crumbs={CRUMBS}
        eyebrow="Legal"
        title="Privacy policy"
        lead={`Last updated ${LEGAL_UPDATED}. This policy explains what ${SITE_NAME} collects, why we collect it, and the choices you have.`}
      />
      <LegalArticle toc={TOC}>
        <p>
          {SITE_NAME} (“{SITE_NAME},” “we,” “us,” or “our”) respects your privacy. This Privacy Policy
          describes how we collect, use, disclose, and protect personal information when you visit
          our marketing website, create an account on the product application at{' '}
          <a href={APP_URL}>app.voilitai.com</a>, book a demo, or otherwise interact with our
          services (together, the “Services”).
        </p>
        <p>
          If you do not agree with this policy, please do not use the Services. Questions:{' '}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>

        <h2 id="who-we-are">1. Who we are</h2>
        <p>
          {SITE_NAME} is a voice AI platform operated by Aventrex Digital. We provide tools to
          design, deploy, and operate voice agents that answer calls, take actions (such as booking
          or CRM updates), and hand off to humans. Our public contact address is{' '}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>

        <h2 id="scope">2. Scope</h2>
        <p>This policy covers:</p>
        <ul>
          <li>The marketing website and content (including blog posts we publish or syndicate).</li>
          <li>Demo, contact, and sales requests submitted through our forms or email.</li>
          <li>
            The hosted product at <a href={APP_URL}>app.voilitai.com</a>, including accounts, billing,
            agent configuration, telephony, analytics, and related APIs.
          </li>
        </ul>
        <p>
          It does not replace a customer’s own privacy notice to <em>their</em> callers. If you
          deploy a {SITE_NAME} agent on a phone number you control, you are typically the controller
          (or “business”) for that conversation data. We process it on your instructions as a
          processor / service provider, except where we process data for our own operations (accounts,
          billing, security), in which case we are a controller.
        </p>
        <p>
          An order form, business associate agreement (BAA), or data processing addendum (DPA) will
          control if it conflicts with this policy for that customer relationship.
        </p>

        <h2 id="information-we-collect">3. Information we collect</h2>

        <h3>Information you give us</h3>
        <ul>
          <li>
            <strong>Demo and contact forms.</strong> Name, work email, phone, company, monthly call
            volume, and your message. We use this to reply within about 24 hours and to follow up
            about the Services. Form submissions may be delivered through a form processor
            (currently FormSubmit) to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </li>
          <li>
            <strong>Account and profile.</strong> Name, email, password or SSO identifiers, company,
            role, and preferences when you register on the product.
          </li>
          <li>
            <strong>Billing.</strong> Plan selection, billing contact, tax information, and payment
            method details processed by our payment provider. We do not store full card numbers on
            our servers.
          </li>
          <li>
            <strong>Support.</strong> The content of emails, tickets, and any files you send us.
          </li>
          <li>
            <strong>Integrations you connect.</strong> Credentials or tokens, and the data those
            tools expose (for example calendar availability, CRM records, or knowledge-base
            documents), so the agent can take actions you configure.
          </li>
        </ul>

        <h3>Information collected automatically</h3>
        <ul>
          <li>
            <strong>Device and log data.</strong> IP address, browser or client type, operating
            system, referring URL, pages or API routes requested, and timestamps. We use this to
            operate, secure, and debug the Services.
          </li>
          <li>
            <strong>Usage data.</strong> Feature use, agent configuration metadata, call counts,
            minutes, outcomes, and similar product analytics so we can bill accurately and improve
            reliability.
          </li>
          <li>
            <strong>Cookies.</strong> See <a href="#cookies">Cookies and similar tech</a>.
          </li>
        </ul>

        <h3>Information from voice and messaging</h3>
        <p>
          When a customer uses the Services to place or receive calls, chats, or SMS, we may process
          on their behalf:
        </p>
        <ul>
          <li>Phone numbers and call metadata (time, duration, direction, disposition).</li>
          <li>Audio recordings and real-time audio streams.</li>
          <li>Transcripts, summaries, sentiment or QA labels, and tool-call logs.</li>
          <li>Messages sent over chat or SMS, including media you attach.</li>
          <li>Caller-provided details (appointments, names, account numbers) captured by the agent.</li>
        </ul>
        <p>
          That content can include personal information — and, in some deployments, sensitive data
          such as health or financial details. Customers decide what their agents ask for and how
          long recordings are kept.
        </p>

        <h3>Information from others</h3>
        <p>
          We may receive information from carriers or telephony partners (delivery receipts, STIR/SHAKEN
          or spam-label signals), identity providers (SSO), payment processors (successful charge,
          failure reason), and publicly available or commercially available sources used for fraud
          prevention.
        </p>

        <h2 id="how-we-use">4. How we use information</h2>
        <p>We use personal information to:</p>
        <ul>
          <li>Provide, maintain, and secure the Services, including routing calls and running agents.</li>
          <li>Create and administer accounts, authenticate users, and enforce access controls.</li>
          <li>Process payments, prevent fraud, and send invoices or usage notices (for example at 80% of minutes).</li>
          <li>Respond to demo requests, sales questions, and support tickets.</li>
          <li>Send service, security, and (where permitted) product-update messages. You can opt out of marketing email; transactional mail still goes through.</li>
          <li>Monitor quality, latency, uptime, and abuse.</li>
          <li>Comply with law, enforce our terms, and protect callers, customers, and {SITE_NAME}.</li>
          <li>Improve the product using aggregated or de-identified metrics.</li>
        </ul>
        <p>
          We do <strong>not</strong> sell personal information. We do not use customer conversation
          audio or transcripts to train public foundation models. We may use de-identified or
          aggregated data to improve reliability and features of {SITE_NAME} itself.
        </p>

        <h2 id="legal-bases">5. Legal bases (EEA, UK, and similar)</h2>
        <p>Where GDPR or UK GDPR applies, we rely on:</p>
        <ul>
          <li>
            <strong>Contract</strong> — to provide the Services you or your organization requested
            (account, billing, running an agent).
          </li>
          <li>
            <strong>Legitimate interests</strong> — to secure the platform, prevent abuse, understand
            product usage, and respond to business inquiries, balanced against your rights.
          </li>
          <li>
            <strong>Consent</strong> — where we ask for it (for example optional marketing, or certain
            cookies). You can withdraw consent at any time.
          </li>
          <li>
            <strong>Legal obligation</strong> — tax, accounting, lawful requests, and similar duties.
          </li>
        </ul>
        <p>
          When we process caller data solely on a customer’s instructions, the customer is
          responsible for its legal basis (for example notice and consent to record a call).
        </p>

        <h2 id="sharing">6. How we share information</h2>
        <p>We share personal information only as needed to run the business:</p>
        <ul>
          <li>
            <strong>Service providers / subprocessors</strong> who host infrastructure, send email,
            process payments, accept demo forms, provide telephony or SIP, transcribe speech, or
            store backups — under contracts that limit their use of the data.
          </li>
          <li>
            <strong>Integrations you enable</strong> (CRM, calendar, helpdesk, automation tools).
            Data flows to those providers under <em>your</em> settings and their policies.
          </li>
          <li>
            <strong>Your organization.</strong> Workspace admins can access agents, recordings,
            transcripts, and member accounts according to roles you assign.
          </li>
          <li>
            <strong>Professional advisors</strong> (legal, accounting) under confidentiality.
          </li>
          <li>
            <strong>Corporate transactions.</strong> In a merger, acquisition, or asset sale, information
            may transfer subject to this policy or a successor notice.
          </li>
          <li>
            <strong>Legal and safety.</strong> If we believe disclosure is required by law, or
            necessary to protect rights, safety, or the integrity of the Services.
          </li>
        </ul>
        <p>
          A current subprocessor list is available on request at{' '}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> for customers under a DPA.
        </p>

        <h2 id="voice-data">7. Voice, transcripts, and recordings</h2>
        <p>
          Voice is the core of the product. Customers should treat call audio and transcripts as
          confidential business records.
        </p>
        <ul>
          <li>Audio and transcripts are encrypted in transit and at rest.</li>
          <li>Access is limited by role-based controls and audit logs.</li>
          <li>Optional PII redaction can mask personal information in QA views.</li>
          <li>Retention windows are configurable so you are not keeping recordings “just in case.”</li>
          <li>
            You are responsible for call-recording notices, two-party consent rules, TCPA / PECR /
            equivalent outbound consent, and any industry scripts required in your markets.
          </li>
        </ul>

        <h2 id="cookies">8. Cookies and similar tech</h2>
        <p>We use:</p>
        <ul>
          <li>
            <strong>Essential cookies</strong> — session, authentication, CSRF, load balancing, and
            theme preference. The site will not work correctly without these.
          </li>
          <li>
            <strong>Functional cookies</strong> — remember UI settings such as light or dark theme.
          </li>
        </ul>
        <p>
          We do not currently use advertising or cross-site tracking cookies on the marketing site.
          If we add analytics cookies later, we will update this policy and, where required, ask
          for consent. You can control cookies in your browser; blocking essentials may break sign-in.
        </p>

        <h2 id="retention">9. Retention</h2>
        <p>We keep information only as long as needed for the purposes above:</p>
        <ul>
          <li>Demo and sales inquiries — typically up to 24 months, unless you ask us to delete sooner or we need them for a dispute.</li>
          <li>Account and billing records — for the life of the account plus the period required for tax and accounting (often 7 years).</li>
          <li>Call recordings, transcripts, and logs — according to the customer’s retention settings, then deleted or de-identified.</li>
          <li>Security logs — for a limited period appropriate to detect abuse.</li>
        </ul>
        <p>
          Backup copies may persist for a short time after deletion until they rotate out.
        </p>

        <h2 id="security">10. Security</h2>
        <p>
          We use administrative, technical, and physical safeguards appropriate to a production
          voice platform: encryption in transit and at rest, access control, SSO support, audit
          logging, and network protections. No method of transmission or storage is perfectly
          secure. If we become aware of a breach that affects your personal information, we will
          notify you and regulators as required by law. See also our{' '}
          <a href="/trust/">trust center</a>.
        </p>

        <h2 id="your-rights">11. Your rights</h2>
        <p>
          Depending on where you live, you may have the right to access, correct, delete, or export
          your personal information; to object to or restrict certain processing; to withdraw
          consent; and to lodge a complaint with a supervisory authority.
        </p>
        <p>
          Residents of California and certain other U.S. states may also have rights to know what
          we collect, request deletion, correct inaccuracies, and opt out of “sale” or “sharing”
          for cross-context advertising. <strong>We do not sell personal information</strong> and we
          do not share it for cross-context behavioral advertising.
        </p>
        <p>
          To exercise rights, email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> from
          the address we have on file. We may need to verify your identity. If we process data
          only as a customer’s processor, we will direct you to that customer or handle the request
          on their documented instructions.
        </p>
        <p>
          We will not discriminate against you for exercising privacy rights.
        </p>

        <h2 id="international">12. International transfers</h2>
        <p>
          We may process and store information in the United States and other countries where we
          or our providers operate. Those countries may not provide the same level of data
          protection as your home country. Where required, we use appropriate safeguards such as
          Standard Contractual Clauses or equivalent transfer mechanisms.
        </p>

        <h2 id="children">13. Children</h2>
        <p>
          The Services are built for businesses, not for children. We do not knowingly collect
          personal information from anyone under 16. If you believe a child has provided us
          information, contact <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> and we will
          delete it.
        </p>

        <h2 id="healthcare">14. Healthcare and HIPAA</h2>
        <p>
          {SITE_NAME} can be configured for healthcare workflows and supports a HIPAA-ready
          architecture (access control, encryption, auditability). The marketing website and
          general demo inbox are <strong>not</strong> a HIPAA environment — do not send protected
          health information (PHI) through the public contact form.
        </p>
        <p>
          Covered entities and business associates should execute a BAA with us before pointing a
          production number that will handle PHI at an agent. Contact{' '}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> to start that review.
        </p>

        <h2 id="changes">15. Changes</h2>
        <p>
          We may update this policy from time to time. The “Last updated” date at the top will
          change. Material changes will be posted on this page and, where appropriate, emailed to
          account owners or announced in the product. Continued use after the effective date means
          you accept the updated policy.
        </p>

        <h2 id="contact">16. Contact</h2>
        <p>
          Privacy, DPA, and BAA requests:{' '}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </p>
        <p>
          You can also use our <a href="/contact/">contact page</a> or review the{' '}
          <a href="/terms/">terms of service</a> that govern use of the Services.
        </p>
      </LegalArticle>
    </>
  );
}
