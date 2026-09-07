import Icon from '@/components/Icon';
import { COMPARISON } from '@/lib/content';

export default function ComparisonTable() {
  return (
    <div className="overflow-x-auto rounded-3xl border border-[var(--border)]">
      <table className="min-w-full text-left text-sm">
        <caption className="sr-only">VoilitAI compared with traditional IVR and DIY voice stacks</caption>
        <thead className="bg-[color-mix(in_srgb,var(--fg)_4%,transparent)] text-[var(--fg-muted)]">
          <tr>
            <th scope="col" className="px-4 py-4 font-medium sm:px-6">
              Capability
            </th>
            {COMPARISON.columns.map((col) => (
              <th
                key={col.title}
                scope="col"
                className={`px-4 py-4 font-semibold sm:px-6 ${col.highlighted ? 'text-[var(--fg)]' : ''}`}
              >
                {col.title}
                <span className="mt-1 block text-xs font-normal text-[var(--fg-muted)]">{col.description}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {COMPARISON.features.map((feature, row) => (
            <tr key={feature} className="border-t border-[var(--border)]">
              <th scope="row" className="px-4 py-3.5 font-medium sm:px-6">
                {feature}
              </th>
              {COMPARISON.columns.map((col) => (
                <td key={col.title} className={`px-4 py-3.5 sm:px-6 ${col.highlighted ? 'bg-violet/5' : ''}`}>
                  {col.results[row] ? (
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-violet/15 text-violet-deep">
                      <Icon name="check" className="h-3.5 w-3.5" />
                    </span>
                  ) : (
                    <span className="text-[var(--fg-muted)]">—</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
