import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/Layout";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ, ALL_FAQS } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Stonkzz" },
      { name: "description", content: "Stonkzz daily report plans: Monthly ₹149, Half-Yearly ₹499, Annual ₹999. No auto-renewal. 5-day money-back guarantee." },
      { property: "og:title", content: "Pricing — Stonkzz" },
      { property: "og:description", content: "Monthly ₹149, Half-Yearly ₹499, Annual ₹999. No auto-renewal. 5-day refund." },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <SiteLayout>
      <section className="bg-paper-white">
        <div className="container-page pt-20 md:pt-24 pb-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="tag-pill"><ShieldCheck size={14} /> 5-Day Money-Back Guarantee</span>
            <h1 className="mt-6 text-display max-w-3xl mx-auto" style={{ color: "var(--color-ink-black)" }}>
              Simple plans. <span className="italic-flourish" style={{ color: "var(--color-electric-blue)" }}>Honest</span> pricing.
            </h1>
            <p className="mt-5 max-w-xl mx-auto text-[18px]" style={{ color: "var(--color-steel)" }}>
              No auto-renewal. No upsells. Cancel anytime. Refund within 5 days if it's not for you.
            </p>
          </motion.div>
        </div>
      </section>
      <Pricing compact />
      <section className="bg-paper-white">
        <div className="container-page pb-20">
          <div className="rounded-[24px] p-8" style={{ background: "var(--color-parchment)", border: "1px solid var(--color-sand)" }}>
            <h3 className="text-[20px] font-semibold" style={{ color: "var(--color-ink-black)" }}>Refund policy, in one line.</h3>
            <p className="mt-2 text-[16px]" style={{ color: "var(--color-steel)" }}>
              If you're not satisfied within 5 days of your first delivery, message us at <a className="underline" href="mailto:thestonkzz@gmail.com">thestonkzz@gmail.com</a> and we'll refund the full subscription. No forms, no friction.
            </p>
          </div>
        </div>
      </section>
      <FAQ items={ALL_FAQS} />
      <FinalCTA />
    </SiteLayout>
  );
}
