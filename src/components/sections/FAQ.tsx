import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Link } from "@tanstack/react-router";

export type FaqItem = { q: string; a: string };

export const ALL_FAQS: FaqItem[] = [
  { q: "What is Stonkzz, and who is it for?", a: "Stonkzz is a daily WhatsApp-delivered market brief for Indian retail traders and active investors who want NIFTY context, FII/DII flows, global indices, commodities and AI-summarized news in one consolidated PDF before the market opens." },
  { q: "What time do I receive the report?", a: "Every trading morning before 8:00 AM IST, straight to your WhatsApp number. No app to install, no inbox to refresh." },
  { q: "Do you give stock tips or buy/sell calls?", a: "No. Stonkzz is an information and intelligence layer — not a recommendation service. We are not a SEBI-registered investment advisor and we don't provide trade calls or portfolio advice." },
  { q: "How do I get on WhatsApp after subscribing?", a: "After payment confirmation we enroll your WhatsApp number manually within a few hours. Your first report lands the next trading morning." },
  { q: "Can I get a refund?", a: "Yes. We offer a no-questions-asked 5-day money-back window. If the brief isn't for you, message us and we'll refund the subscription." },
  { q: "Where do you source data from?", a: "NSE, BSE, RBI publications, FII/DII filings, commodity exchanges, global index feeds and select financial news outlets — 18+ sources blended into one consistent format." },
  { q: "How is Stonkzz different from other platforms?", a: "Most apps drown you in data. Stonkzz strips the morning down to what actually matters and ships it through the channel you already check first — WhatsApp." },
  { q: "Does the subscription auto-renew?", a: "No. Every plan ends on its term. You renew only when you choose to." },
];

export function FAQ({ items = ALL_FAQS, withCta = false }: { items?: FaqItem[]; withCta?: boolean }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-paper-white">
      <div className="container-page py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="text-[14px] uppercase tracking-[0.14em]" style={{ color: "var(--color-steel)" }}>FAQ</p>
            <h2 className="mt-3 text-heading" style={{ color: "var(--color-ink-black)" }}>Questions, answered.</h2>
            <p className="mt-4 text-[16px]" style={{ color: "var(--color-steel)" }}>
              Still curious? Reach out at <a className="underline" href="mailto:thestonkzz@gmail.com">thestonkzz@gmail.com</a>.
            </p>
            {withCta && (
              <Link to="/pricing" className="btn-primary mt-6 inline-flex">View plans →</Link>
            )}
          </div>

          <div className="lg:col-span-8 divide-y" style={{ borderColor: "var(--color-sand)" }}>
            {items.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className="py-5" style={{ borderTop: i === 0 ? "1px solid var(--color-sand)" : undefined, borderBottom: "1px solid var(--color-sand)" }}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-start justify-between gap-6 text-left"
                  >
                    <span className="text-[18px] md:text-[20px] font-semibold tracking-[-0.02em]" style={{ color: "var(--color-ink-black)" }}>
                      {f.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0 h-9 w-9 rounded-full flex items-center justify-center"
                      style={{ background: isOpen ? "var(--color-electric-blue)" : "var(--color-parchment)", color: isOpen ? "white" : "var(--color-ink-black)" }}
                    >
                      <Plus size={18} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 max-w-2xl text-[16px]" style={{ color: "var(--color-steel)" }}>{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
