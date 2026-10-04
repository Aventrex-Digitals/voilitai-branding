'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { APP_GET_STARTED } from '@/lib/site';
import {
  ROI_DEFAULTS,
  ROI_LIMITS,
  calculateRoi,
} from '@/lib/roi-calculator';

function formatMoney(value, compact = false) {
  const abs = Math.abs(value);
  if (compact && abs >= 1000) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation: 'compact',
      maximumFractionDigits: 1,
    }).format(value);
  }
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
}

function formatNumber(value, digits = 0) {
  return new Intl.NumberFormat('en-US', {
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  }).format(value);
}

function AnimatedValue({ value, format = (v) => String(Math.round(v)), className = '' }) {
  const [display, setDisplay] = useState(value);
  const prev = useRef(value);
  const frame = useRef(0);

  useEffect(() => {
    const from = prev.current;
    const to = value;
    prev.current = value;

    if (typeof window === 'undefined') {
      setDisplay(to);
      return undefined;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || from === to) {
      setDisplay(to);
      return undefined;
    }

    const start = performance.now();
    const duration = 520;
    const tick = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(from + (to - from) * eased);
      if (progress < 1) frame.current = requestAnimationFrame(tick);
    };

    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame.current);
  }, [value]);

  return <span className={className}>{format(display)}</span>;
}

function Field({ id, label, hint, value, onChange, limits, prefix, suffix, formatValue }) {
  const shown = formatValue ? formatValue(value) : value;

  return (
    <label htmlFor={id} className="block">
      <span className="flex items-start justify-between gap-3 text-sm font-medium text-[var(--fg)]">
        <span>
          {label}
          {hint ? <span className="mt-0.5 block text-xs font-normal text-[var(--fg-muted)]">{hint}</span> : null}
        </span>
        <strong className="shrink-0 tabular-nums text-violet">
          {prefix}
          {shown}
          {suffix}
        </strong>
      </span>
      <input
        id={id}
        type="range"
        min={limits.min}
        max={limits.max}
        step={limits.step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="roi-range mt-3 w-full"
        aria-valuemin={limits.min}
        aria-valuemax={limits.max}
        aria-valuenow={value}
      />
      <input
        type="number"
        min={limits.min}
        max={limits.max}
        step={limits.step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="input-field mt-2 py-2 text-sm tabular-nums"
        aria-label={`${label} exact value`}
      />
    </label>
  );
}

function StatCard({ label, value, sub, accent = false, delay = 0 }) {
  return (
    <div
      className={`rounded-2xl border p-4 transition duration-500 ${
        accent
          ? 'border-violet/35 bg-[color-mix(in_srgb,var(--color-violet)_10%,var(--bg-elevated))] shadow-[0_0_0_1px_color-mix(in_srgb,var(--color-violet)_18%,transparent)]'
          : 'border-[var(--border)] bg-[var(--bg-elevated)]'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <p className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--fg-muted)]">{label}</p>
      <p className={`mt-2 font-display text-2xl font-bold tracking-tight tabular-nums sm:text-[1.65rem] ${accent ? 'accent-text' : ''}`}>
        {value}
      </p>
      {sub ? <p className="mt-1 text-xs leading-relaxed text-[var(--fg-muted)]">{sub}</p> : null}
    </div>
  );
}

export default function VoiceAgentRoiCalculator() {
  const [monthlyCalls, setMonthlyCalls] = useState(ROI_DEFAULTS.monthlyCalls);
  const [avgDurationMin, setAvgDurationMin] = useState(ROI_DEFAULTS.avgDurationMin);
  const [employees, setEmployees] = useState(ROI_DEFAULTS.employees);
  const [employeeCost, setEmployeeCost] = useState(ROI_DEFAULTS.employeeCost);
  const [automationRate, setAutomationRate] = useState(ROI_DEFAULTS.automationRate);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [aiCostPerMinute, setAiCostPerMinute] = useState(ROI_DEFAULTS.aiCostPerMinute);
  const [platformBase, setPlatformBase] = useState(ROI_DEFAULTS.platformBase);

  const result = useMemo(
    () =>
      calculateRoi({
        monthlyCalls,
        avgDurationMin,
        employees,
        employeeCost,
        automationRate,
        aiCostPerMinute,
        platformBase,
      }),
    [monthlyCalls, avgDurationMin, employees, employeeCost, automationRate, aiCostPerMinute, platformBase]
  );

  const savingsPositive = result.netMonthlySavings > 0;
  const barWidth = Math.min(100, Math.max(8, Math.abs(result.costReductionPct)));

  function resetDefaults() {
    setMonthlyCalls(ROI_DEFAULTS.monthlyCalls);
    setAvgDurationMin(ROI_DEFAULTS.avgDurationMin);
    setEmployees(ROI_DEFAULTS.employees);
    setEmployeeCost(ROI_DEFAULTS.employeeCost);
    setAutomationRate(ROI_DEFAULTS.automationRate);
    setAiCostPerMinute(ROI_DEFAULTS.aiCostPerMinute);
    setPlatformBase(ROI_DEFAULTS.platformBase);
  }

  return (
    <div className="hero-panel-enter glass-panel overflow-hidden rounded-[1.75rem]">
      <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
        <div className="border-b border-[var(--border)] p-6 sm:p-8 lg:border-b-0 lg:border-r">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="section-eyebrow">Interactive calculator</p>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                Your call desk vs VoilitAI
              </h2>
            </div>
            <button
              type="button"
              onClick={resetDefaults}
              className="text-sm font-medium text-violet transition hover:text-violet-deep"
            >
              Reset example
            </button>
          </div>

          <div className="mt-8 space-y-7">
            <Field
              id="monthly-calls"
              label="Monthly calls"
              hint="Inbound volume your team handles or misses"
              value={monthlyCalls}
              onChange={setMonthlyCalls}
              limits={ROI_LIMITS.monthlyCalls}
              formatValue={(v) => formatNumber(v)}
            />
            <Field
              id="avg-duration"
              label="Average call duration"
              hint="Talk time per call"
              value={avgDurationMin}
              onChange={setAvgDurationMin}
              limits={ROI_LIMITS.avgDurationMin}
              suffix=" min"
              formatValue={(v) => formatNumber(v, v % 1 === 0 ? 0 : 1)}
            />
            <Field
              id="employees"
              label="Employees handling calls"
              hint="Reception, support, or sales on the phones"
              value={employees}
              onChange={setEmployees}
              limits={ROI_LIMITS.employees}
            />
            <Field
              id="employee-cost"
              label="Average employee cost"
              hint="Fully loaded monthly cost per person"
              value={employeeCost}
              onChange={setEmployeeCost}
              limits={ROI_LIMITS.employeeCost}
              prefix="$"
              suffix="/mo"
              formatValue={(v) => formatNumber(v)}
            />
            <Field
              id="automation-rate"
              label="AI automation coverage"
              hint="Share of call load an AI voice agent can take"
              value={automationRate}
              onChange={setAutomationRate}
              limits={ROI_LIMITS.automationRate}
              suffix="%"
            />
          </div>

          <button
            type="button"
            onClick={() => setShowAdvanced((v) => !v)}
            className="mt-6 text-sm font-semibold text-violet"
            aria-expanded={showAdvanced}
          >
            {showAdvanced ? 'Hide cost assumptions' : 'Tune AI cost assumptions'}
          </button>

          {showAdvanced ? (
            <div className="mt-5 space-y-6 rounded-2xl border border-[var(--border)] bg-[var(--bg)]/50 p-4 sm:p-5">
              <Field
                id="platform-base"
                label="Platform base"
                hint="Illustrative monthly subscription before minutes"
                value={platformBase}
                onChange={setPlatformBase}
                limits={ROI_LIMITS.platformBase}
                prefix="$"
                suffix="/mo"
              />
              <Field
                id="ai-cpm"
                label="Blended AI cost per minute"
                hint="Edit to model conservatively against live pricing"
                value={aiCostPerMinute}
                onChange={setAiCostPerMinute}
                limits={ROI_LIMITS.aiCostPerMinute}
                prefix="$"
                suffix="/min"
                formatValue={(v) => v.toFixed(2)}
              />
              <p className="text-xs leading-relaxed text-[var(--fg-muted)]">
                Live plan prices and included minutes are on{' '}
                <Link href="/pricing/" className="font-semibold text-violet">
                  Pricing
                </Link>
                . This tool stays editable so bloggers and operators can stress-test the math.
              </p>
            </div>
          ) : null}
        </div>

        <div className="relative bg-[var(--band)] p-6 sm:p-8">
          <div className="pointer-events-none absolute inset-0 hero-glow opacity-60" aria-hidden="true" />
          <div className="relative">
            <p className="text-sm font-medium text-[var(--fg-muted)]">Estimated potential savings</p>
            <p className="mt-2 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              <AnimatedValue
                value={result.netMonthlySavings}
                format={(v) => formatMoney(Math.round(v))}
                className={savingsPositive ? 'accent-text' : 'text-amber-600 dark:text-amber-400'}
              />
              <span className="text-lg font-medium text-[var(--fg-muted)]"> / month</span>
            </p>
            <p className="mt-2 text-lg">
              or{' '}
              <AnimatedValue
                value={result.annualSavings}
                format={(v) => formatMoney(Math.round(v))}
                className="font-semibold accent-text"
              />{' '}
              a year vs keeping the same phone staffing load.
            </p>

            <div className="mt-6">
              <div className="mb-2 flex items-center justify-between text-xs text-[var(--fg-muted)]">
                <span>Modeled cost reduction</span>
                <span className="tabular-nums font-semibold text-[var(--fg)]">{result.costReductionPct}%</span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-[var(--border)]">
                <div
                  className="roi-savings-bar h-full rounded-full bg-gradient-to-r from-violet to-[color-mix(in_srgb,var(--color-violet)_55%,#22d3ee)]"
                  style={{ width: `${barWidth}%` }}
                />
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <StatCard
                label="Human labor today"
                value={
                  <AnimatedValue value={result.humanLaborCost} format={(v) => formatMoney(Math.round(v))} />
                }
                sub={`${result.employees} people × ${formatMoney(result.employeeCost)}`}
              />
              <StatCard
                label="Estimated VoilitAI cost"
                value={
                  <AnimatedValue value={result.estimatedAiCost} format={(v) => formatMoney(Math.round(v))} />
                }
                sub={`${formatNumber(result.totalMinutes)} min × blended rate + base`}
                delay={40}
              />
              <StatCard
                label="Labor value recovered"
                value={
                  <AnimatedValue value={result.laborRecovered} format={(v) => formatMoney(Math.round(v))} />
                }
                sub={`${result.automationRatePct}% of phone load automated`}
                accent
                delay={80}
              />
              <StatCard
                label="Hours freed / month"
                value={
                  <AnimatedValue
                    value={result.hoursFreed}
                    format={(v) => `${formatNumber(v, 1)} hrs`}
                  />
                }
                sub={`${formatNumber(result.aiHandledCalls)} calls handled by AI`}
                delay={120}
              />
            </div>

            <dl className="mt-6 grid gap-3 rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)]/80 p-4 text-sm sm:grid-cols-3">
              <div>
                <dt className="text-[var(--fg-muted)]">Cost / call (humans)</dt>
                <dd className="mt-1 font-semibold tabular-nums">${formatNumber(result.humanCostPerCall, 2)}</dd>
              </div>
              <div>
                <dt className="text-[var(--fg-muted)]">Cost / call (with AI)</dt>
                <dd className="mt-1 font-semibold tabular-nums">${formatNumber(result.aiCostPerCall, 2)}</dd>
              </div>
              <div>
                <dt className="text-[var(--fg-muted)]">ROI multiple</dt>
                <dd className="mt-1 font-semibold tabular-nums">
                  <AnimatedValue value={result.roiMultiple} format={(v) => `${v.toFixed(1)}×`} />
                </dd>
              </div>
            </dl>

            {result.paybackDays != null ? (
              <p className="mt-4 text-sm text-[var(--fg-muted)]">
                At this coverage, modeled payback is about{' '}
                <strong className="text-[var(--fg)]">{result.paybackDays} days</strong> of recovered labor
                value. Remaining human oversight ≈{' '}
                <strong className="text-[var(--fg)]">{result.remainingStaffFte} FTE</strong> (
                {formatMoney(result.remainingHumanCost)}/mo).
              </p>
            ) : null}

            <div className="mt-7 flex flex-wrap gap-3">
              <a href={APP_GET_STARTED} className="btn-primary">
                Create Your AI Employee
              </a>
              <Link href="/pricing/" className="btn-secondary">
                See live pricing
              </Link>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-[var(--fg-muted)]">
              Illustrative only. Not a binding quote. Swap in your minutes and plan from Pricing for a closer
              forecast, then validate with a pilot line.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
