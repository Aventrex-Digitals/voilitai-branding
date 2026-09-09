const ICONS = {
  zap: (
    <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
  ),
  wave: (
    <>
      <path d="M4 10v4M8 7v10M12 4v16M16 7v10M20 10v4" />
    </>
  ),
  ear: (
    <path d="M6 13c0-4 3-7 6.5-7S19 9 19 13v2a3 3 0 0 1-3 3h-1M9 17a3 3 0 0 0 3 3" />
  ),
  flow: (
    <>
      <rect x="3" y="4" width="7" height="5" rx="1.5" />
      <rect x="14" y="15" width="7" height="5" rx="1.5" />
      <path d="M10 6.5h4A3.5 3.5 0 0 1 17.5 10v5" />
    </>
  ),
  bolt: (
    <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
  ),
  database: (
    <>
      <ellipse cx="12" cy="6" rx="8" ry="3" />
      <path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
    </>
  ),
  flask: (
    <path d="M9 3h6M10 3v6L5 18a3 3 0 0 0 2.6 4.5h8.8A3 3 0 0 0 19 18l-5-9V3" />
  ),
  scan: (
    <>
      <path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  chart: (
    <path d="M4 19h16M7 16v-5M12 16V8M17 16v-8" />
  ),
  phone: (
    <path d="M7 3h4l1.5 3.5-2 1.5a12 12 0 0 0 5.5 5.5l1.5-2L21 13v4a2 2 0 0 1-2.2 2 16 16 0 0 1-13.6-13.6A2 2 0 0 1 7 3Z" />
  ),
  outbound: (
    <path d="M15 3h6v6M21 3l-9 9M10 5H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3" />
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 10h18" />
    </>
  ),
  crm: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M7 8h10M7 12h6M7 16h4" />
    </>
  ),
  shield: (
    <path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
  ),
  handoff: (
    <path d="M8 12H3m0 0 3-3M3 12l3 3M16 12h5m0 0-3-3m3 3-3 3M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M9 17v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2" />
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18" />
    </>
  ),
  code: (
    <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 4l-4 16" />
  ),
  badge: (
    <>
      <path d="M12 3 14.5 8l5.5.8-4 3.9.9 5.5L12 16l-4.9 2.6.9-5.5-4-3.9L10 8 12 3Z" />
    </>
  ),
  chat: (
    <path d="M5 5h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9l-4 4v-4H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
  ),
  sms: (
    <>
      <rect x="6" y="3" width="12" height="18" rx="2" />
      <path d="M9 7h6M9 11h6M9 15h3" />
    </>
  ),
  cable: (
    <path d="M9 3v6a3 3 0 0 0 6 0V3M9 17v4M15 17v4M7 17h10" />
  ),
  heart: (
    <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.6-7 10-7 10Z" />
  ),
  lock: (
    <>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </>
  ),
  key: (
    <path d="M8 15a4 4 0 1 1 3.5-2H14l1.5 1.5L17 13l2 2-2 2-1.5-1.5H11.5A4 4 0 0 1 8 15Z" />
  ),
  eye: (
    <>
      <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
      <path d="m4 20 16-16" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 19a6 6 0 0 1 12 0M17 11a3 3 0 1 0-1-5.8M21 19a5 5 0 0 0-6-4.9" />
    </>
  ),
  server: (
    <>
      <rect x="3" y="4" width="18" height="6" rx="1.5" />
      <rect x="3" y="14" width="18" height="6" rx="1.5" />
      <path d="M7 7h.01M7 17h.01" />
    </>
  ),
  check: (
    <path d="M5 12.5 9.5 17 19 7" />
  ),
  arrow: (
    <path d="M5 12h14M13 6l6 6-6 6" />
  ),
  play: (
    <path d="M8 5v14l11-7-11-7Z" />
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v2M12 19v2M5 12H3M21 12h-2M6.2 6.2 4.8 4.8M19.2 19.2l-1.4-1.4M17.8 6.2l1.4-1.4M4.8 19.2l1.4-1.4" />
    </>
  ),
  moon: (
    <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4 7 7 0 0 0 20 14.5Z" />
  ),
  menu: (
    <path d="M4 7h16M4 12h16M4 17h16" />
  ),
  close: (
    <path d="M6 6l12 12M18 6 6 18" />
  ),
  chevron: (
    <path d="M6 9l6 6 6-6" />
  ),
  layers: (
    <>
      <path d="M12 3 3 8l9 5 9-5-9-5Z" />
      <path d="M3 12l9 5 9-5M3 16l9 5 9-5" />
    </>
  ),
};

export default function Icon({ name, className = 'h-5 w-5' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {ICONS[name] || ICONS.zap}
    </svg>
  );
}
