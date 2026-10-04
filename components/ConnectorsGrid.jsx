import Icon from '@/components/Icon';
import { CONNECTORS, CUSTOM_CONNECTOR, CONNECTOR_ACTIONS } from '@/lib/content';

/**
 * @param {{ showIntro?: boolean, className?: string }} props
 */
export default function ConnectorsGrid({ showIntro = true, className = '' }) {
  return (
    <div className={`space-y-8 ${showIntro ? 'mt-10' : 'mt-8'} ${className}`.trim()}>
      {showIntro ? (
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-violet">
            Built-in connectors
          </p>
          <p className="mt-2 text-sm leading-relaxed text-[var(--fg-muted)]">
            Connect a service from Integrations in the product. Your AI employee can then take
            real actions — book, update CRM, email, SMS, Slack notify, or call back.
          </p>
        </div>
      ) : null}

      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {CONNECTORS.map((connector) => (
          <li
            key={connector.key}
            className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-4"
          >
            <div className="flex items-start gap-3">
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] text-violet">
                <Icon name={connector.icon} className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-sm font-semibold tracking-tight">{connector.name}</p>
                  <span className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-[var(--fg-muted)]">
                    {connector.auth}
                  </span>
                </div>
                <p className="mt-1.5 text-[0.8rem] leading-relaxed text-[var(--fg-muted)]">
                  {connector.description}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="rounded-2xl border border-dashed border-violet/35 bg-[color-mix(in_srgb,var(--color-violet)_6%,transparent)] px-5 py-5 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex gap-3">
            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-violet/25 bg-[var(--bg-elevated)] text-violet">
              <Icon name={CUSTOM_CONNECTOR.icon} className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-semibold tracking-tight">{CUSTOM_CONNECTOR.name}</p>
              <p className="mt-1 max-w-xl text-[0.85rem] leading-relaxed text-[var(--fg-muted)]">
                {CUSTOM_CONNECTOR.description}
              </p>
            </div>
          </div>
          <p className="shrink-0 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-violet sm:pt-1">
            Connect another system
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2">
        {CONNECTOR_ACTIONS.map((action) => (
          <span
            key={action.id}
            className="rounded-full border border-[var(--border)] px-3 py-1 text-[0.72rem] font-medium text-[var(--fg-muted)]"
          >
            {action.label}
          </span>
        ))}
      </div>
    </div>
  );
}
