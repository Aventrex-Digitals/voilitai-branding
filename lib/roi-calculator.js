/** Defaults match the public pitch example on /ai-voice-agent-roi-calculator/ */
export const ROI_DEFAULTS = {
  monthlyCalls: 2000,
  avgDurationMin: 4,
  employees: 3,
  employeeCost: 3000,
  automationRate: 70,
  aiCostPerMinute: 0.12,
  platformBase: 99,
};

export const ROI_LIMITS = {
  monthlyCalls: { min: 50, max: 50000, step: 50 },
  avgDurationMin: { min: 1, max: 20, step: 0.5 },
  employees: { min: 1, max: 50, step: 1 },
  employeeCost: { min: 500, max: 15000, step: 100 },
  automationRate: { min: 30, max: 95, step: 1 },
  aiCostPerMinute: { min: 0.05, max: 0.4, step: 0.01 },
  platformBase: { min: 0, max: 999, step: 1 },
};

/**
 * Illustrative ROI model for AI voice agent staffing vs human phone coverage.
 * @param {Partial<typeof ROI_DEFAULTS>} input
 */
export function calculateRoi(input = {}) {
  const monthlyCalls = clamp(Number(input.monthlyCalls) || ROI_DEFAULTS.monthlyCalls, ROI_LIMITS.monthlyCalls);
  const avgDurationMin = clamp(Number(input.avgDurationMin) || ROI_DEFAULTS.avgDurationMin, ROI_LIMITS.avgDurationMin);
  const employees = clamp(Number(input.employees) || ROI_DEFAULTS.employees, ROI_LIMITS.employees);
  const employeeCost = clamp(Number(input.employeeCost) || ROI_DEFAULTS.employeeCost, ROI_LIMITS.employeeCost);
  const automationRatePct = clamp(Number(input.automationRate) || ROI_DEFAULTS.automationRate, ROI_LIMITS.automationRate);
  const aiCostPerMinuteRaw = Number(input.aiCostPerMinute);
  const aiCostPerMinute = clamp(
    Number.isFinite(aiCostPerMinuteRaw) ? aiCostPerMinuteRaw : ROI_DEFAULTS.aiCostPerMinute,
    ROI_LIMITS.aiCostPerMinute
  );
  const platformBaseRaw = Number(input.platformBase);
  const platformBase = clamp(
    Number.isFinite(platformBaseRaw) ? platformBaseRaw : ROI_DEFAULTS.platformBase,
    ROI_LIMITS.platformBase
  );

  const automationRate = automationRatePct / 100;
  const totalMinutes = monthlyCalls * avgDurationMin;
  const totalHours = totalMinutes / 60;
  const humanLaborCost = employees * employeeCost;
  const humanCostPerCall = monthlyCalls > 0 ? humanLaborCost / monthlyCalls : 0;
  const humanCostPerMinute = totalMinutes > 0 ? humanLaborCost / totalMinutes : 0;

  const aiHandledMinutes = totalMinutes * automationRate;
  const aiHandledCalls = monthlyCalls * automationRate;
  const hoursFreed = aiHandledMinutes / 60;
  const laborRecovered = humanLaborCost * automationRate;

  const estimatedAiCost = platformBase + totalMinutes * aiCostPerMinute;
  const aiCostPerCall = monthlyCalls > 0 ? estimatedAiCost / monthlyCalls : 0;

  const netMonthlySavings = laborRecovered - estimatedAiCost;
  const annualSavings = netMonthlySavings * 12;
  const roiMultiple = estimatedAiCost > 0 ? laborRecovered / estimatedAiCost : 0;
  const paybackDays =
    laborRecovered > 0 ? Math.max(1, Math.round((estimatedAiCost / laborRecovered) * 30)) : null;

  const remainingStaffFte = Math.max(0.25, +(employees * (1 - automationRate)).toFixed(2));
  const remainingHumanCost = remainingStaffFte * employeeCost;
  const totalWithAi = estimatedAiCost + remainingHumanCost;
  const costReductionPct = humanLaborCost > 0 ? ((humanLaborCost - totalWithAi) / humanLaborCost) * 100 : 0;

  return {
    monthlyCalls,
    avgDurationMin,
    employees,
    employeeCost,
    automationRatePct,
    aiCostPerMinute,
    platformBase,
    totalMinutes: Math.round(totalMinutes),
    totalHours: Math.round(totalHours * 10) / 10,
    humanLaborCost: Math.round(humanLaborCost),
    humanCostPerCall: Math.round(humanCostPerCall * 100) / 100,
    humanCostPerMinute: Math.round(humanCostPerMinute * 1000) / 1000,
    aiHandledMinutes: Math.round(aiHandledMinutes),
    aiHandledCalls: Math.round(aiHandledCalls),
    hoursFreed: Math.round(hoursFreed * 10) / 10,
    laborRecovered: Math.round(laborRecovered),
    estimatedAiCost: Math.round(estimatedAiCost),
    aiCostPerCall: Math.round(aiCostPerCall * 100) / 100,
    netMonthlySavings: Math.round(netMonthlySavings),
    annualSavings: Math.round(annualSavings),
    roiMultiple: Math.round(roiMultiple * 10) / 10,
    paybackDays,
    remainingStaffFte,
    remainingHumanCost: Math.round(remainingHumanCost),
    totalWithAi: Math.round(totalWithAi),
    costReductionPct: Math.round(costReductionPct),
  };
}

function clamp(value, { min, max }) {
  if (!Number.isFinite(value)) return min;
  return Math.min(max, Math.max(min, value));
}

export const ROI_FAQ = [
  {
    q: 'How accurate is this AI voice agent ROI calculator?',
    a: 'It is an illustrative model for planning, not a quote. It compares your current phone-staffing cost to an estimated VoilitAI cost based on call volume, duration, automation coverage, and a blended per-minute rate. Your real savings depend on plan, overage, and how much of each call the agent can fully resolve.',
  },
  {
    q: 'What do the default numbers represent?',
    a: 'The defaults (2,000 monthly calls, 4-minute average, 3 employees at $3,000/month) mirror a common mid-size inbound desk. Adjust every field to match your business. The automation slider estimates how much call load an AI voice agent can take off your team.',
  },
  {
    q: 'Does “labor recovered” mean I have to lay people off?',
    a: 'No. Most teams redeploy phone capacity to in-person service, sales follow-up, or growth work. The calculator shows the dollar value of time freed, plus an optional view of remaining FTE still needed for complex or escalated calls.',
  },
  {
    q: 'Is the VoilitAI cost the same as my invoice?',
    a: 'No. The platform base and per-minute fields are editable assumptions so you can model conservatively. For live plan prices, agents, and included minutes, check Pricing. Sales can also quote Enterprise with volume discounts.',
  },
  {
    q: 'What should I do after I see a savings number?',
    a: 'Create an AI voice employee in the app, or book a live demo with your real call scripts. The fastest validation is a pilot on a single line: measure answered rate, bookings, and transfers for two weeks, then compare to this model.',
  },
];

export const ROI_METHOD_STEPS = [
  {
    title: 'Measure current phone labor',
    body: 'Employees handling calls × average fully loaded monthly cost = what you spend to keep the phones covered today.',
  },
  {
    title: 'Convert volume into minutes',
    body: 'Monthly calls × average duration gives total talk time. That is the workload an AI voice agent would absorb.',
  },
  {
    title: 'Apply automation coverage',
    body: 'Not every call ends without a human. The coverage slider estimates the share of minutes your agent can handle before escalation.',
  },
  {
    title: 'Subtract estimated AI cost',
    body: 'Platform base + (total minutes × blended per-minute rate) approximates operating cost. Net savings = labor recovered − AI cost.',
  },
];
