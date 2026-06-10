import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/Layout";
import { FAQ, ALL_FAQS } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { motion } from "framer-motion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Stonkzz" },
      { name: "description", content: "Answers about the Stonkzz daily WhatsApp report — delivery time, refund policy, data sources, SEBI status." },
      { property: "og:title", content: "FAQ — Stonkzz" },
      { property: "og:description", content: "Delivery, billing, technical and legal answers about the Stonkzz daily report." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: ALL_FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    }],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <SiteLayout>
      <section className="bg-paper-white">
        <div className="container-page pt-20 md:pt-24 pb-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
            <p className="text-[14px] uppercase tracking-[0.14em]" style={{ color: "var(--color-steel)" }}>FAQ</p>
            <h1 className="mt-3 text-display" style={{ color: "var(--color-ink-black)" }}>
              Everything you'd ask before subscribing.
            </h1>
          </motion.div>
        </div>
      </section>
      <FAQ items={ALL_FAQS} withCta />
      <FinalCTA />
    </SiteLayout>
  );
}
