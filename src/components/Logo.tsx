export function Logo({ className = "h-8 w-8", invert = false }: { className?: string; invert?: boolean }) {
  return (
    <img
      src="/images/Logo.png"
      alt="Stonkzz"
      className={className}
      style={invert ? { filter: "brightness(0) invert(1)" } : undefined}
      width={40}
      height={40}
    />
  );
}

export function Wordmark({ invert = false, scrolled = false }: { invert?: boolean; scrolled?: boolean }) {
  return (
    <span
      className="text-[20px] font-semibold tracking-[-0.03em]"
      style={{
        color: scrolled
          ? "var(--color-ink-black)"
          : invert
            ? "var(--color-paper-white)"
            : "var(--color-paper-white)",
      }}
    >
      Stonkzz
    </span>
  );
}
