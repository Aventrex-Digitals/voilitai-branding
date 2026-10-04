import { APP_GET_STARTED } from '@/lib/site';

export const PLANS_REVALIDATE_SECONDS = 60;

export function getVoilitApiBase() {
  const fromPublic = typeof process !== 'undefined' ? process.env.NEXT_PUBLIC_VOILIT_API_URL : '';
  const fromServer = typeof process !== 'undefined' ? process.env.VOILIT_API_URL : '';
  return (fromPublic || fromServer || 'http://localhost:4000').replace(/\/$/, '');
}

export function formatPlanPrice(value) {
  const num = Number(value);
  if (!Number.isFinite(num)) return '';
  return num % 1 === 0 ? String(num) : num.toFixed(2);
}

function formatMoney(value) {
  const formatted = formatPlanPrice(value);
  return formatted ? `$${formatted}` : '';
}

const PLAN_COPY = {
  starter: {
    description: 'Create your first AI voice employee and put it on real phone lines.',
    cta: 'Create Your AI Employee',
    href: APP_GET_STARTED,
  },
  growth: {
    description: 'For businesses running more AI employees across inbound and outbound calls.',
    cta: 'Start Building',
    href: APP_GET_STARTED,
    badge: 'Most popular',
  },
  scale: {
    description: 'For organizations that need scale, security, and a dedicated partner.',
    cta: 'Talk to a Live Demo',
    href: '#book-demo',
  },
};

function defaultCopy(plan) {
  return {
    description: `Create and operate AI voice employees on the ${plan.display_name} plan.`,
    cta: 'Create Your AI Employee',
    href: APP_GET_STARTED,
  };
}

/**
 * Map an admin-portal plan row to marketing card fields.
 * Prices, minutes, agents, and overage always come from /admin/plans.
 */
export function mapPublicPlan(plan, index, total) {
  const copy = PLAN_COPY[plan.key] || defaultCopy(plan);
  const agents = Number(plan.included_agents) || 0;
  const minutes = Number(plan.included_minutes) || 0;
  const highlighted = total > 1 ? index === Math.floor((total - 1) / 2) : false;

  return {
    key: plan.key,
    name: plan.display_name,
    description: copy.description,
    price: formatPlanPrice(plan.monthly_price),
    period: '/month',
    highlighted: highlighted || Boolean(copy.badge),
    badge: highlighted ? copy.badge || 'Most popular' : copy.badge,
    features: [
      `${agents} voice agent${agents === 1 ? '' : 's'}`,
      `${minutes.toLocaleString()} minutes / month`,
      `${formatMoney(plan.overage_price_per_minute)} / extra minute`,
      `${formatMoney(plan.extra_agent_price)} / extra agent / month`,
    ],
    overage: `${formatMoney(plan.overage_price_per_minute)} / extra minute`,
    cta: copy.cta,
    href: copy.href,
    monthly_price: Number(plan.monthly_price),
  };
}

/**
 * Active subscription plans from the Voilit admin portal (`/admin/plans`).
 * @returns {Promise<ReturnType<typeof mapPublicPlan>[]>}
 */
export async function getPublicPlans() {
  try {
    const res = await fetch(`${getVoilitApiBase()}/api/v1/plans`, {
      next: { revalidate: PLANS_REVALIDATE_SECONDS, tags: ['plans'] },
    });
    if (!res.ok) {
      console.error(`Voilit plans API error: ${res.status}`);
      return [];
    }
    const data = await res.json();
    const plans = Array.isArray(data.result) ? data.result : [];
    return plans.map((plan, index) => mapPublicPlan(plan, index, plans.length));
  } catch (err) {
    // Expected when the Voilit API is offline in local/dev, fall back to empty plans.
    if (process.env.NODE_ENV === 'development') {
      console.warn('Voilit plans API unavailable; showing empty pricing.');
    } else {
      console.error('Voilit plans API fetch failed:', err);
    }
    return [];
  }
}
