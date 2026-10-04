import AiEmployeeCard from '@/components/product/AiEmployeeCard';
import AnalyticsCard from '@/components/product/AnalyticsCard';

const NAV = [
  'Dashboard',
  'AI Employees',
  'Calls',
  'Contacts',
  'Analytics',
  'Integrations',
  'Settings',
];

const RECENT = [
  { name: 'Riverside Clinic', detail: 'Appointment booked · 2m ago' },
  { name: 'Metro Auto', detail: 'Lead qualified · 9m ago' },
  { name: 'North HVAC', detail: 'Callback scheduled · 14m ago' },
];

export default function ProductDashboard({ className = '', showChrome = true, bare = false }) {
  return (
    <div
      role="region"
      className={`${bare ? 'overflow-hidden bg-[var(--card)]' : 'ui-shell'} ${className}`}
      aria-label="VoilitAI product dashboard preview"
    >
      {showChrome && (
        <div className="ui-chrome">
          <span className="ui-chrome-dot bg-[#ff5f57]" />
          <span className="ui-chrome-dot bg-[#febc2e]" />
          <span className="ui-chrome-dot bg-[#28c840]" />
          <span className="ml-3 truncate text-xs text-[var(--fg-muted)]">app.voilitai.com / dashboard</span>
        </div>
      )}

      <div className="grid min-h-[26rem] lg:grid-cols-[11rem_minmax(0,1fr)]">
        <aside className="hidden border-r border-[var(--border)] bg-[color-mix(in_srgb,var(--bg-elevated)_55%,transparent)] p-4 lg:block">
          <p className="px-2 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[var(--fg-muted)]">
            VoilitAI
          </p>
          <ul className="mt-4 space-y-1">
            {NAV.map((item, index) => (
              <li key={item}>
                <span
                  className={`block rounded-lg px-2.5 py-2 text-sm ${
                    index === 0
                      ? 'bg-[color-mix(in_srgb,var(--fg)_7%,transparent)] font-medium'
                      : 'text-[var(--fg-muted)]'
                  }`}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </aside>

        <div className="space-y-4 p-4 sm:p-5">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--fg-muted)]">
                Overview
              </p>
              <h3 className="mt-1 text-lg font-semibold tracking-tight">Active AI employees</h3>
            </div>
            <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--fg-muted)]">
              3 online
            </span>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            <AiEmployeeCard name="Ava" role="Reception" status="active" />
            <AiEmployeeCard name="Marcus" role="Sales qualifier" voice="Neural · Bilingual" status="active" />
            <div className="hidden xl:block">
              <AiEmployeeCard name="Nina" role="Follow-up" status="idle" />
            </div>
          </div>

          <div className="grid gap-3 lg:grid-cols-2">
            <AnalyticsCard />
            <div className="premium-card p-5">
              <p className="text-sm font-semibold tracking-tight">Recent conversations</p>
              <ul className="mt-4 space-y-3">
                {RECENT.map((item) => (
                  <li key={item.name} className="flex items-center justify-between gap-3 border-b border-[var(--border)] pb-3 last:border-0 last:pb-0">
                    <div>
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-xs text-[var(--fg-muted)]">{item.detail}</p>
                    </div>
                    <span className="status-dot" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
