import PageHero from '@/components/PageHero';
import LegalArticle from '@/components/LegalArticle';
import JsonLd from '@/components/JsonLd';
import { breadcrumbJsonLd, webPageJsonLd } from '@/lib/schema';
import { SITE_NAME, CONTACT_EMAIL, APP_URL, LEGAL_UPDATED } from '@/lib/site';
import { PAGE_META } from '@/lib/seo';

const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'Terms', path: '/terms/' },
];

const TOC = [
  { id: 'agreement', label: 'Agreement' },
  { id: 'services', label: 'The Services' },
  { id: 'eligibility', label: 'Eligibility and accounts' },
  { id: 'customer-data', label: 'Customer content' },
  { id: 'acceptable-use', label: 'Acceptable use' },
  { id: 'telephony', label: 'Telephony and consent' },
  { id: 'ai', label: 'AI output' },
  { id: 'billing', label: 'Plans, trials, and billing' },
  { id: 'third-parties', label: 'Third-party services' },
  { id: 'ip', label: 'Intellectual property' },
  { id: 'confidentiality', label: 'Confidentiality' },
  { id: 'disclaimers', label: 'Disclaimers' },
  { id: 'liability', label: 'Limitation of liability' },
  { id: 'indemnity', label: 'Indemnification' },
  { id: 'term', label: 'Term and termination' },
  { id: 'changes', label: 'Changes' },
  { id: 'general', label: 'General' },
  { id: 'contact', label: 'Contact' },
];

export const metadata = PAGE_META.terms;

export default function TermsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(CRUMBS)} />
      <JsonLd
        data={webPageJsonLd({
          name: `${SITE_NAME} Terms of Service`,
          description: PAGE_META.terms.description,
          path: '/terms/',
        })}
      />
      <PageHero
        crumbs={CRUMBS}
        eyebrow="Legal"
        title="Terms of service"
        lead={`Last updated ${LEGAL_UPDATED}. These terms govern your use of the ${SITE_NAME} website and voice AI platform.`}
      />
      <LegalArticle toc={TOC}>
        <p>
          These Terms of Service (“Terms”) are a contract between you and {SITE_NAME}, a product of
          Aventrex Digital (“{SITE_NAME},” “we,” “us”). They apply to our marketing website, the
          product application at <a href={APP_URL}>app.voilitai.com</a>, APIs, documentation, and
          related services (the “Services”).
        </p>
        <p>
          By accessing the Services, creating an account, submitting a demo request, or clicking to
          accept, you agree to these Terms. If you use the Services on behalf of a company, you
          represent that you can bind that company, and “you” includes that company.
        </p>
        <p>
          An executed order form, enterprise agreement, or in-app subscription checkout may add
          commercial terms. If those documents conflict with these Terms, the signed or checkout
          terms control for that purchase. Our{' '}
          <a href="/privacy/">privacy policy</a> explains how we handle personal information.
        </p>

        <h2 id="agreement">1. Agreement</h2>
        <p>
          You must be at least 18 and able to form a binding contract. The Services are offered to
          businesses and professionals, not to consumers for personal household use, except where
          we expressly allow a free evaluation.
        </p>
        <p>
          We may refuse, suspend, or cancel access if we reasonably believe these Terms are being
          violated or the Services are being abused.
        </p>

        <h2 id="services">2. The Services</h2>
        <p>
          {SITE_NAME} lets you design, test, and operate voice (and related chat/SMS) agents:
          conversation flows, knowledge bases, tool calls, telephony, analytics, and QA. Features
          depend on your plan. We may add, change, or retire features with reasonable notice when
          the change is material to paying customers.
        </p>
        <p>
          Marketing pages, case studies, calculators, latency figures, and testimonials are
          illustrative. They are not a warranty unless we commit to specific metrics in an order
          form or SLA.
        </p>
        <p>
          <strong>Not emergency services.</strong> The Services are not a replacement for 911, 112,
          or any public emergency number. Agents may fail, misroute, or be unavailable. You must
          not rely on {SITE_NAME} for medical, police, or fire emergencies, and you must not
          market an agent as an emergency line.
        </p>

        <h2 id="eligibility">3. Eligibility and accounts</h2>
        <ul>
          <li>Keep account credentials confidential and use SSO or strong passwords where available.</li>
          <li>You are responsible for activity under your workspace, including teammates and API keys.</li>
          <li>Provide accurate registration and billing information and keep it current.</li>
          <li>Notify us promptly at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> if you suspect unauthorized access.</li>
        </ul>
        <p>
          Workspace administrators control roles, integrations, and whether recordings are stored.
          We may access a workspace as needed to provide support you request, to bill, or to
          investigate abuse or security incidents.
        </p>

        <h2 id="customer-data">4. Customer content</h2>
        <p>
          “Customer Content” means agent configurations, knowledge you upload, prompts, phone
          numbers you bring, call audio, transcripts, messages, CRM fields, and any other data you
          or your callers submit through the Services.
        </p>
        <p>
          You retain ownership of Customer Content. You grant {SITE_NAME} a worldwide, non-exclusive
          license to host, process, transmit, display, and create derivative works of Customer
          Content solely to provide and secure the Services, to prevent abuse, and as required by
          law.
        </p>
        <p>
          You represent that you have all rights and consents needed to provide Customer Content
          and to place or receive the communications you run through {SITE_NAME}. You are the
          controller of caller personal data except for the limited account and billing data we
          process as an independent controller.
        </p>
        <p>
          We do not use your call audio or transcripts to train public third-party models. We may
          use aggregated or de-identified usage data to operate and improve {SITE_NAME}.
        </p>

        <h2 id="acceptable-use">5. Acceptable use</h2>
        <p>You will not, and will not allow others to:</p>
        <ul>
          <li>Violate law, including privacy, recording, consumer-protection, export, or sanctions rules.</li>
          <li>Send spam, unlawful robocalls, phishing, or deceptive caller ID.</li>
          <li>Harass, threaten, defraud, or impersonate a person or government agency.</li>
          <li>Collect or process sensitive data (including PHI or payment card data) except as permitted by your plan, a BAA, and applicable law.</li>
          <li>Probe, scan, or attack the Services; bypass rate limits or authentication; or interfere with other customers.</li>
          <li>Reverse engineer the Services except as allowed by mandatory law.</li>
          <li>Resell or white-label the Services except under a written partner agreement.</li>
          <li>Use the Services to build a competing voice platform by systematically scraping our models, prompts, or product.</li>
          <li>Upload malware or content you do not have rights to use.</li>
        </ul>
        <p>
          We may throttle, block numbers, or suspend agents that trigger carrier spam labels, fraud
          systems, or legal complaints.
        </p>

        <h2 id="telephony">6. Telephony and consent</h2>
        <p>
          You are solely responsible for how you use phone numbers, SIP trunks, outbound campaigns,
          and recordings, including:
        </p>
        <ul>
          <li>Obtaining prior express consent (or the correct consent type) for outbound calls and SMS in each country you dial.</li>
          <li>Honoring do-not-call lists, opt-outs, and quiet hours.</li>
          <li>Playing or displaying any legally required recording or AI-disclosure notice.</li>
          <li>Registering brands or campaigns where carriers or regulators require it (for example A2P 10DLC in the United States).</li>
          <li>Keeping numbers you bring via SIP in good standing with your carrier.</li>
        </ul>
        <p>
          Carriers and regulators — not {SITE_NAME} — decide whether a number is labeled as spam.
          We provide tools (verified numbers, branded caller ID where available) but we do not
          guarantee answer rates or that a number will stay unlabeled.
        </p>

        <h2 id="ai">7. AI output</h2>
        <p>
          Agents generate speech and text using probabilistic models. Output can be incomplete,
          outdated, or wrong. You must configure guardrails, test before launch, and monitor live
          calls. You remain responsible for what an agent says and does in your name, including
          bookings, payments it initiates, and transfers.
        </p>
        <p>
          {SITE_NAME} is not a law firm, medical provider, or licensed advisor. Do not use agents
          to provide professional advice that requires a human license unless you have designed
          and supervised that workflow lawfully.
        </p>

        <h2 id="billing">8. Plans, trials, and billing</h2>
        <ul>
          <li>
            <strong>Plans.</strong> Features, included minutes, overage rates, and support levels
            are described on the pricing page and in the product. Prices in the admin portal /
            checkout control if they differ from marketing copy.
          </li>
          <li>
            <strong>Trials.</strong> A trial (for example Growth for 14 days) may require a payment
            method. If you do not cancel before the trial ends, we may convert you to a paid plan.
          </li>
          <li>
            <strong>Subscription term.</strong> Paid plans renew automatically each month or year
            until canceled. Annual billing, where offered, is prepaid.
          </li>
          <li>
            <strong>Usage and overage.</strong> Minutes and other metered usage beyond the included
            amount are billed at the then-current overage rate. We may notify you around 80% usage;
            you remain responsible for usage on your account.
          </li>
          <li>
            <strong>Taxes.</strong> Fees are exclusive of taxes. You are responsible for applicable
            taxes we are required to collect.
          </li>
          <li>
            <strong>Changes and refunds.</strong> Upgrades take effect immediately and may be
            prorated. Downgrades apply at the end of the current cycle. Fees are non-refundable
            except where required by law or expressly stated at checkout.
          </li>
          <li>
            <strong>Cancellation.</strong> You may cancel in the product or by emailing{' '}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. You keep access until the end
            of the paid period unless we terminate for cause.
          </li>
          <li>
            <strong>Enterprise.</strong> Custom SLAs, BAAs, security reviews, and volume pricing
            are only binding when signed (or accepted in a written order).
          </li>
        </ul>
        <p>
          Late or failed payments may result in suspension. You authorize us and our payment
          processor to charge the payment method on file for recurring fees and usage.
        </p>

        <h2 id="third-parties">9. Third-party services</h2>
        <p>
          The Services may interoperate with carriers, CRMs, calendars, automation tools, and
          identity providers. Those products are not under our control. Your use of them is
          governed by their terms. We are not liable for outages, data handling, or fees charged
          by third parties you connect.
        </p>

        <h2 id="ip">10. Intellectual property</h2>
        <p>
          We and our licensors own the Services, including software, models we provide, visual
          design, documentation, and trademarks (including {SITE_NAME} and voilitai). These Terms
          do not transfer that ownership. We grant you a limited, non-exclusive, non-transferable
          license to use the Services during your subscription, solely for your internal business
          purposes.
        </p>
        <p>
          Feedback you send us may be used without restriction or compensation. You will not
          remove proprietary notices from the Services.
        </p>

        <h2 id="confidentiality">11. Confidentiality</h2>
        <p>
          Each party may receive non-public information from the other (“Confidential Information”).
          The recipient will use it only to perform under these Terms, protect it with reasonable
          care, and not disclose it except to personnel and providers who need it and are bound by
          confidentiality. Confidential Information does not include information that is public
          through no fault of the recipient, independently developed, or rightfully received from
          another source. Either party may disclose information if required by law, with notice
          where legally permitted.
        </p>

        <h2 id="disclaimers">12. Disclaimers</h2>
        <p>
          THE SERVICES ARE PROVIDED “AS IS” AND “AS AVAILABLE.” TO THE MAXIMUM EXTENT PERMITTED BY
          LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS
          FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT AGENTS WILL
          BE UNINTERRUPTED, ERROR-FREE, OR THAT EVERY CALL WILL BE ANSWERED, UNDERSTOOD, OR HANDLED
          CORRECTLY.
        </p>
        <p>
          Some jurisdictions do not allow certain disclaimers. In those places, warranties last
          only for the minimum period required.
        </p>

        <h2 id="liability">13. Limitation of liability</h2>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, {SITE_NAME} AND AVENTREX DIGITAL WILL NOT BE
          LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, COVER, OR PUNITIVE DAMAGES, OR
          FOR LOST PROFITS, REVENUE, GOODWILL, OR DATA, EVEN IF ADVISED OF THE POSSIBILITY.
        </p>
        <p>
          OUR TOTAL LIABILITY FOR ALL CLAIMS ARISING OUT OF THE SERVICES IN ANY TWELVE-MONTH PERIOD
          WILL NOT EXCEED THE AMOUNTS YOU PAID US FOR THE SERVICES IN THAT PERIOD (OR, IF YOU ARE
          ON A FREE PLAN, ONE HUNDRED U.S. DOLLARS). These limits apply collectively to us, our
          affiliates, and suppliers, and survive termination.
        </p>
        <p>
          Nothing in these Terms limits liability that cannot be limited by law (for example death
          or personal injury caused by negligence, or fraud). If you have a signed enterprise
          agreement with a different cap, that cap controls.
        </p>

        <h2 id="indemnity">14. Indemnification</h2>
        <p>
          You will defend and indemnify {SITE_NAME} and Aventrex Digital against claims, damages,
          and reasonable legal fees arising from: (a) Customer Content; (b) your calls, messages,
          and campaigns, including alleged TCPA, recording-consent, or telemarketing violations;
          (c) your misuse of the Services or violation of these Terms; or (d) a dispute between you
          and your callers, patients, or end customers.
        </p>
        <p>
          We will defend you against a third-party claim that the unmodified Services, as provided
          by us, directly infringe a U.S. patent or copyright, and we will pay resulting damages
          finally awarded — provided you give prompt notice and control of the defense. We may
          modify the Services, obtain a license, or terminate the affected feature with a prorated
          refund. This obligation does not apply to claims based on Customer Content, combinations
          with third-party systems, or use after we notify you to stop.
        </p>

        <h2 id="term">15. Term and termination</h2>
        <p>
          These Terms start when you first use the Services and continue until you stop using them
          and your subscription ends. You may stop at any time. We may suspend or terminate
          immediately for material breach, legal risk, non-payment, or harm to the platform or
          others.
        </p>
        <p>
          After termination we will disable access. Customer Content may be deleted after a short
          retrieval window (or sooner if required for legal or security reasons). Export what you
          need before you cancel. Sections that by nature should survive (including IP,
          confidentiality, disclaimers, liability, indemnity, and this sentence) will survive.
        </p>

        <h2 id="changes">16. Changes</h2>
        <p>
          We may update these Terms. We will change the “Last updated” date and, for material
          changes that affect paying customers, provide notice via email or the product. If you
          do not agree, you must stop using the Services and cancel before the new Terms take
          effect. Continued use after the effective date is acceptance.
        </p>

        <h2 id="general">17. General</h2>
        <ul>
          <li>
            <strong>Governing law.</strong> Unless an order form says otherwise, these Terms are
            governed by the laws applicable to Aventrex Digital’s principal place of business,
            without regard to conflict-of-law rules. Courts in that jurisdiction have exclusive
            venue, except that either party may seek injunctive relief anywhere.
          </li>
          <li>
            <strong>Export.</strong> You will not use the Services in violation of export or
            sanctions laws.
          </li>
          <li>
            <strong>Assignment.</strong> You may not assign these Terms without our consent. We may
            assign them in connection with a reorganization or sale of the business.
          </li>
          <li>
            <strong>Force majeure.</strong> We are not liable for delays caused by events beyond
            reasonable control, including carrier outages, internet failures, or government action.
          </li>
          <li>
            <strong>Entire agreement.</strong> These Terms, the privacy policy, and any order form
            or DPA/BAA are the entire agreement and supersede prior discussions about the Services.
          </li>
          <li>
            <strong>Severability and waiver.</strong> If a provision is unenforceable, the rest
            remains in effect. A failure to enforce is not a waiver.
          </li>
          <li>
            <strong>Notices.</strong> We may notice you via the product or the email on your
            account. Legal notices to us: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </li>
          <li>
            <strong>No agency.</strong> These Terms do not create a partnership, joint venture, or
            employment relationship.
          </li>
        </ul>

        <h2 id="contact">18. Contact</h2>
        <p>
          Questions about these Terms:{' '}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </p>
        <p>
          Sales and demos: <a href="/contact/">contact page</a>. Product access:{' '}
          <a href={APP_URL}>app.voilitai.com</a>. Privacy details:{' '}
          <a href="/privacy/">privacy policy</a>.
        </p>
      </LegalArticle>
    </>
  );
}
