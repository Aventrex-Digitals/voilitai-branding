export default function Waveform({ className = '', bars = 42 }) {
  const heights = Array.from({ length: bars }, (_, i) => {
    const wave = Math.sin(i / 3.2) * 0.45 + Math.sin(i / 7.4) * 0.25 + 0.3;
    return Math.max(0.18, Math.min(1, wave));
  });

  return (
    <div className={`flex h-24 items-end justify-center gap-[3px] sm:h-32 sm:gap-1 ${className}`} aria-hidden="true">
      {heights.map((h, i) => (
        <span
          key={i}
          className="wave-bar w-[3px] rounded-full sm:w-1.5"
          style={{
            height: `${h * 100}%`,
            animationDelay: `${(i % 12) * 80}ms`,
            background: 'var(--accent)',
            opacity: 0.55 + h * 0.45,
          }}
        />
      ))}
    </div>
  );
}
