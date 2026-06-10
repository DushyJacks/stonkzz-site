import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/Layout";
import { PieChart, Coins, TrendingDown, Lock, Baby, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/calculators/")({
  head: () => ({
    meta: [
      { title: "Calculators — Stonkzz" },
      { name: "description", content: "Free finance calculators: asset allocation, gold returns, SWP, loan EMI, and child legacy planning." },
    ],
  }),
  component: CalculatorsHub,
});

const CALCS = [
  { to: "/calculators/asset-allocation", icon: PieChart, title: "Asset Allocation", desc: "Conservative vs Moderate vs Aggressive — see how each grows over time.", tone: "blue" },
  { to: "/calculators/gold-returns", icon: Coins, title: "Gold Returns", desc: "Compare Physical, Digital & ETF gold returns with fees built-in.", tone: "ember" },
  { to: "/calculators/swp", icon: TrendingDown, title: "SWP Calculator", desc: "Plan your Systematic Withdrawal — how long your corpus lasts.", tone: "ink" },
  { to: "/calculators/debt-engine", icon: Lock, title: "Debt Engine", desc: "Calculate your true interest cost and build your escape plan.", tone: "ember" },
  { to: "/calculators/child-legacy", icon: Baby, title: "Child Legacy", desc: "Head-to-head: PPF vs SSY vs SIP for your child's future corpus.", tone: "blue" },
] as const;

function CalculatorsHub() {
  return (
    <SiteLayout>
      <section className="relative">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(60% 60% at 50% 0%, #eef3ff 0%, #ffffff 70%)" }}
        />
        <div className="container-page py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="text-[12px] uppercase tracking-[0.22em]" style={{ color: "var(--color-ash)" }}>
              Free tools
            </p>
            <h1 className="mt-3 text-display" style={{ color: "var(--color-ink-black)" }}>
              Calculators that <span className="italic-flourish" style={{ color: "var(--color-electric-blue)" }}>make sense</span>.
            </h1>
            <p className="mt-4 text-[18px]" style={{ color: "var(--color-steel)" }}>
              Five small tools we use ourselves. No signup, no spam — just the numbers you actually need.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CALCS.map((c) => {
              const Icon = c.icon;
              const tone =
                c.tone === "blue"
                  ? { bg: "var(--color-electric-blue-soft)", fg: "var(--color-electric-blue)" }
                  : c.tone === "ember"
                  ? { bg: "#fde7dc", fg: "var(--color-ember-orange)" }
                  : { bg: "#1b1d20", fg: "var(--color-paper-white)" };
              return (
                <Link
                  key={c.to}
                  to={c.to}
                  className="group rounded-3xl p-7 transition-all hover:-translate-y-1"
                  style={{ background: "var(--color-paper-white)", border: "1px solid var(--color-sand)" }}
                >
                  <div
                    className="h-12 w-12 rounded-2xl flex items-center justify-center"
                    style={{ background: tone.bg, color: tone.fg }}
                  >
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-[20px] font-semibold" style={{ color: "var(--color-ink-black)", letterSpacing: "-0.02em" }}>
                    {c.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.55]" style={{ color: "var(--color-steel)" }}>
                    {c.desc}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium group-hover:gap-2.5 transition-all" style={{ color: "var(--color-electric-blue)" }}>
                    Open calculator <ArrowRight size={14} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
