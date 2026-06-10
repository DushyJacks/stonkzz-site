import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { waPlan } from "@/lib/wa";
import { Link } from "@tanstack/react-router";

type Plan = {
  name: string;
  price: string;
  per: string;
  blurb: string;
  features: string[];
  cta: string;
  variant: "ghost" | "primary";
  popular?: boolean;
  badge?: string;
  href?: string;
};

export const PLANS: Plan[] = [
  {
    name: "Monthly",
    price: "₹149",
    per: "/ month",
    blurb: "Test drive the brief. No lock-in.",
    features: ["Daily report at 8 AM IST", "All sections included", "Stop anytime, no questions", "Money back in 5 days if you don't like it"],
    cta: "Start Monthly",
    variant: "ghost",
    href: waPlan("Monthly", "₹149"),
  },
  {
    name: "Half-Yearly",
    price: "₹499",
    per: "/ 6 months",
    blurb: "Most people land here. Obvious choice.",
    features: ["Everything in Monthly, plus", "₹400 cheaper than paying monthly", "Priority reply on WhatsApp", "Monthly market summary emailed to you"],
    cta: "Get Half-Yearly",
    variant: "primary",
    popular: true,
    badge: "Most Popular",
    href: waPlan("Half-Yearly", "₹499"),
  },
  {
    name: "Annual",
    price: "₹999",
    per: "/ 12 months",
    blurb: "If you trade seriously, this pays for itself.",
    features: ["Everything in Half-Yearly", "44% off the monthly rate", "Year-end market recap", "Early access to new features"],
    cta: "Go Annual",
    variant: "ghost",
    href: waPlan("Annual", "₹999"),
  },
];

export function Pricing({ compact = false }: { compact?: boolean }) {
  return (
    <section className="bg-paper-white">
      <div className="container-page py-12 md:py-16">
        {!compact && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <p className="text-[14px] uppercase tracking-[0.14em]" style={{ color: "var(--color-steel)" }}>
              Pricing
            </p>
            <h2 className="mt-3 text-heading" style={{ color: "var(--color-ink-black)" }}>Pick your plan.</h2>
            <p className="mt-4 text-[18px]" style={{ color: "var(--color-steel)" }}>
              No auto-renewal. Cancel anytime. 5-day money-back guarantee.
            </p>
          </motion.div>
        )}

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {PLANS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative rounded-[24px] p-6 md:p-8 flex flex-col"
              style={{
                background: p.popular ? "var(--color-paper-white)" : "var(--color-parchment)",
                border: p.popular ? "2px solid var(--color-electric-blue)" : "1px solid var(--color-sand)",
                boxShadow: p.popular ? "0 30px 60px -30px rgba(81,150,254,0.45)" : undefined,
              }}
            >
              {p.popular && (
                <span
                  className="absolute -top-3 right-6 px-3 py-1 rounded-full text-[12px] font-semibold uppercase tracking-[0.08em]"
                  style={{ background: "var(--color-electric-blue)", color: "var(--color-paper-white)" }}
                >
                  {p.badge}
                </span>
              )}
              <p className="text-[20px] font-semibold" style={{ color: "var(--color-ink-black)" }}>{p.name}</p>
              <p className="text-[14px] mt-1" style={{ color: "var(--color-steel)" }}>{p.blurb}</p>

              <div className="mt-6 flex items-baseline gap-1.5">
                <span className="text-[48px] font-bold tracking-[-0.06em]" style={{ color: "var(--color-ink-black)" }}>{p.price}</span>
                <span className="text-[14px]" style={{ color: "var(--color-steel)" }}>{p.per}</span>
              </div>

              <ul className="mt-6 space-y-2.5 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-[15px]" style={{ color: "var(--color-ink-black)" }}>
                    <Check size={16} style={{ color: "var(--color-electric-blue)", marginTop: 3 }} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-7 ${p.variant === "primary" ? "btn-primary" : "btn-ghost"} w-full`}
              >
                {p.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-[14px]" style={{ color: "var(--color-steel)" }}>
          Need a different plan? <Link to="/contact" className="underline">Talk to us</Link>.
        </p>
      </div>
    </section>
  );
}
