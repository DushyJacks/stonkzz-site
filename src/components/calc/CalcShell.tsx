import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export function CalcShell({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <section className="relative">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ background: "radial-gradient(60% 60% at 50% 0%, #eef3ff 0%, #ffffff 70%)" }}
      />
      <div className="container-page py-14 md:py-20">
        <Link
          to="/calculators"
          className="inline-flex items-center gap-2 text-[14px] mb-8 hover:text-ink-black"
          style={{ color: "var(--color-steel)" }}
        >
          <ArrowLeft size={16} /> All calculators
        </Link>
        <div className="max-w-3xl">
          <p className="text-[12px] uppercase tracking-[0.22em]" style={{ color: "var(--color-ash)" }}>
            {eyebrow}
          </p>
          <h1 className="mt-3 text-heading" style={{ color: "var(--color-ink-black)" }}>{title}</h1>
          <p className="mt-3 text-[17px]" style={{ color: "var(--color-steel)" }}>{subtitle}</p>
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

export function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-[13px] font-medium mb-2" style={{ color: "var(--color-ink-black)" }}>
        {label}
      </span>
      {children}
      {hint && (
        <span className="block mt-1.5 text-[12px]" style={{ color: "var(--color-ash)" }}>
          {hint}
        </span>
      )}
    </label>
  );
}

export const inputClass =
  "w-full rounded-xl border bg-paper-white px-4 py-3 text-[15px] outline-none transition-colors focus:border-electric-blue";

export const inputStyle: React.CSSProperties = {
  borderColor: "var(--color-sand)",
  color: "var(--color-ink-black)",
};

export function StatCard({ label, value, accent }: { label: string; value: string; accent?: string }) {
  return (
    <div
      className="rounded-2xl p-5"
      style={{ background: "var(--color-paper-white)", border: "1px solid var(--color-sand)" }}
    >
      <p className="text-[12px] uppercase tracking-[0.16em]" style={{ color: "var(--color-ash)" }}>{label}</p>
      <p className="mt-2 text-[26px] font-semibold" style={{ color: accent ?? "var(--color-ink-black)", letterSpacing: "-0.02em" }}>
        {value}
      </p>
    </div>
  );
}

export const fmtINR = (n: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);

export const fmtINRShort = (n: number) => {
  if (n >= 1e7) return `₹${(n / 1e7).toFixed(2)}Cr`;
  if (n >= 1e5) return `₹${(n / 1e5).toFixed(2)}L`;
  if (n >= 1e3) return `₹${(n / 1e3).toFixed(1)}K`;
  return `₹${n.toFixed(0)}`;
};
