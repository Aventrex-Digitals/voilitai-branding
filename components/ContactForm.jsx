import DemoForm from '@/components/DemoForm';

export default function ContactForm() {
  return (
    <div className="glass-panel rounded-3xl p-8">
      <h2 className="font-display text-xl font-bold">Book a demo</h2>
      <p className="mt-2 text-sm text-[var(--fg-muted)]">
        Submit the form and we’ll contact you within 24 hours to schedule a walkthrough.
      </p>
      <div className="mt-6">
        <DemoForm />
      </div>
    </div>
  );
}
