import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/Layout";
import { ReportMockup } from "@/components/sections/ReportMockup";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import { WA_DEFAULT } from "@/lib/wa";

export const Route = createFileRoute("/report")({
  head: () => ({
    meta: [
      { title: "Sample Report — Stonkzz" },
      { name: "description", content: "See the daily Stonkzz brief — Stonkzz Score, NIFTY 50 heatmap, FII/DII flows, global indices, commodities and AI news bullets." },
      { property: "og:title", content: "Sample Report — Stonkzz" },
      { property: "og:description", content: "A preview of the WhatsApp PDF that lands every trading morning before 8:00 AM IST." },
      { property: "og:url", content: "/report" },
    ],
    links: [{ rel: "canonical", href: "/report" }],
  }),
  component: ReportPage,
});

const SECTIONS = [
  { title: "Stonkzz Score", body: "AI-blended sentiment dial. One number from Strongly Bearish to Strongly Bullish.", locked: false },
  { title: "NIFTY 50 Heatmap", body: "Sector breadth, gainers and laggards — at a glance.", locked: false },
  { title: "FII / DII Activity", body: "Institutional flows in crores. Net bought or net sold yesterday.", locked: false },
  { title: "Global Indices + Commodities", body: "Dow, Nasdaq, S&P, Nikkei, Hang Seng, Gold, Silver, Crude.", locked: true },
  { title: "Open Interest Analysis", body: "Call/Put OI shifts, support/resistance clusters from derivatives.", locked: true },
  { title: "AI News Bullets", body: "RBI, banking, IT, auto. Condensed to bullet points.", locked: true },
];

function ReportPage() {
  return (
    <SiteLayout>
      <section className="bg-paper-white">
        <div className="container-page pt-20 md:pt-24 pb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
            <p className="text-[14px] uppercase tracking-[0.14em]" style={{ color: "var(--color-steel)" }}>Sample report</p>
            <h1 className="mt-3 text-display" style={{ color: "var(--color-ink-black)" }}>
              See the brief traders wake up to,{" "}
              <span className="italic-flourish" style={{ color: "var(--color-electric-blue)" }}>daily.</span>
            </h1>
            <p className="mt-5 text-[20px]" style={{ color: "var(--color-steel)", letterSpacing: "-0.023em" }}>
              A redacted preview of yesterday's edition. Three sections are unlocked. The rest land in your WhatsApp.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-paper-white">
        <div className="container-page pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
            <div className="rounded-[48px] overflow-hidden shadow-[0px_4px_24px_rgba(0,0,0,0.06)] border border-[var(--color-sand)]" style={{ background: "var(--color-paper-white)" }}>
              <img src="/images/Box.jpg" alt="Stonkzz Report Preview" className="w-full h-auto object-cover" />
            </div>
            <div className="mt-6 flex gap-3">
              <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">Get full report on WhatsApp</a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SECTIONS.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="relative card-surface overflow-hidden"
                  style={{ border: "1px solid var(--color-sand)" }}
                >
                  <p className="text-[12px] uppercase tracking-[0.14em]" style={{ color: "var(--color-steel)" }}>Section {String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-2 text-[18px] font-semibold tracking-[-0.02em]" style={{ color: "var(--color-ink-black)" }}>{s.title}</h3>
                  <p className="mt-2 text-[14px]" style={{ color: "var(--color-steel)" }}>{s.body}</p>
                  {s.locked && (
                    <div className="absolute inset-0 backdrop-blur-[2px] flex items-end justify-center p-4" style={{ background: "rgba(242,241,236,0.55)" }}>
                      <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-medium" style={{ background: "var(--color-ink-black)", color: "var(--color-paper-white)" }}>
                        <Lock size={14} /> Subscribe to unlock
                      </a>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <FinalCTA />
    </SiteLayout>
  );
}
