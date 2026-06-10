import { Link } from "@tanstack/react-router";
import { PieChart, Coins, TrendingDown, Lock, Baby, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const ITEMS = [
  { to: "/calculators/asset-allocation", icon: PieChart, name: "Asset Allocation" },
  { to: "/calculators/gold-returns",     icon: Coins,     name: "Gold Returns" },
  { to: "/calculators/swp",              icon: TrendingDown, name: "SWP" },
  { to: "/calculators/debt-engine",      icon: Lock,      name: "Debt Engine" },
  { to: "/calculators/child-legacy",     icon: Baby,      name: "Child Legacy" },
] as const;

export function CalculatorsTeaser() {
  return (
    <section className="container-page py-12 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
        <div className="lg:col-span-5">
          <p className="text-[12px] uppercase tracking-[0.22em]" style={{ color: "var(--color-ash)" }}>
            Free tools
          </p>
          <h2 className="mt-3 text-heading" style={{ color: "var(--color-ink-black)" }}>
            Five calculators we <span className="italic-flourish" style={{ color: "var(--color-electric-blue)" }}>use ourselves</span>.
          </h2>
          <p className="mt-4 text-[17px]" style={{ color: "var(--color-steel)" }}>
            Quick, no signup. Made for Indian investors who want answers in under a minute.
          </p>
          <Link to="/calculators" className="mt-6 inline-flex items-center gap-2 text-[14px] font-medium" style={{ color: "var(--color-electric-blue)" }}>
            Open all calculators <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-3">
          {ITEMS.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.to}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link
                  to={c.to}
                  className="group flex items-center gap-3 rounded-2xl p-4 transition-all hover:-translate-y-0.5"
                  style={{ background: "var(--color-paper-white)", border: "1px solid var(--color-sand)" }}
                >
                  <span className="h-9 w-9 rounded-xl flex items-center justify-center"
                    style={{ background: "var(--color-electric-blue-soft)", color: "var(--color-electric-blue)" }}>
                    <Icon size={16} />
                  </span>
                  <span className="text-[14px] font-medium" style={{ color: "var(--color-ink-black)" }}>{c.name}</span>
                  <ArrowUpRight size={14} className="ml-auto opacity-40 group-hover:opacity-100 transition-opacity" style={{ color: "var(--color-steel)" }} />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
