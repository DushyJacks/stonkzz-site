import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/Layout";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Stonkzz" },
      { name: "description", content: "Stonkzz is built from Chennai by a small team obsessed with one thing — making the Indian market readable in five minutes a day." },
      { property: "og:title", content: "About — Stonkzz" },
      { property: "og:description", content: "Why we built Stonkzz, and how the daily report comes together." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const PILLARS = [
  { t: "Signal, not noise", b: "We track 18+ sources daily so subscribers don't have to. If it doesn't change a trader's morning, it doesn't ship." },
  { t: "Indian context first", b: "Built around NSE rhythms, FII/DII flows, RBI cycles and INR-denominated commodities. Not a translated Western brief." },
  { t: "WhatsApp-native", b: "Delivery happens where Indian traders already live — no app, no inbox, no extra login. Just open the chat." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <section className="bg-paper-white">
        <div className="container-page pt-20 md:pt-24 pb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
            <span className="tag-pill"><MapPin size={14} /> Chennai · India</span>
            <h1 className="mt-6 text-display" style={{ color: "var(--color-ink-black)" }}>
              Built for traders who'd rather{" "}
              <span className="italic-flourish" style={{ color: "var(--color-electric-blue)" }}>trade</span>{" "}
              than scroll.
            </h1>
            <p className="mt-6 text-[20px] max-w-2xl" style={{ color: "var(--color-steel)", letterSpacing: "-0.023em" }}>
              Stonkzz started as a personal habit — one trader, eight tabs, every morning. The brief you now read is what that habit became after a year of refinement and 100,000+ YouTube subscribers asking for a written version.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-2 md:px-4 py-2 md:py-4">
        <div 
          className="rounded-[32px] md:rounded-[48px] overflow-hidden"
          style={{ background: "var(--color-parchment)" }}
        >
          <div className="container-page py-20 md:py-24 grid grid-cols-1 md:grid-cols-3 gap-5">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="card-surface"
                style={{ border: "1px solid var(--color-sand)" }}
              >
                <p className="text-[14px] uppercase tracking-[0.12em]" style={{ color: "var(--color-electric-blue)" }}>0{i + 1}</p>
                <h3 className="mt-3 text-[22px] font-semibold tracking-[-0.02em]" style={{ color: "var(--color-ink-black)" }}>{p.t}</h3>
                <p className="mt-3 text-[16px]" style={{ color: "var(--color-steel)" }}>{p.b}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper-white">
        <div className="container-page py-20 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <h2 className="text-heading" style={{ color: "var(--color-ink-black)" }}>How a single brief comes together.</h2>
            <p className="mt-5 text-[18px]" style={{ color: "var(--color-steel)" }}>
              Every weekday between 4:30 AM and 7:30 AM IST, our pipeline runs through a fixed sequence — collection, normalization, sentiment scoring, news distillation, layout. By 7:55 AM, the PDF is signed and queued. By 8:00 AM, it's in your chat.
            </p>
          </div>
          <ol className="lg:col-span-7 space-y-4">
            {[
              ["04:30", "Data collection from NSE, BSE, RBI, FII/DII, commodity exchanges and global indices."],
              ["06:00", "Normalization and AI sentiment scoring — the Stonkzz Score is produced."],
              ["06:45", "News distillation — financial headlines compressed to bullets."],
              ["07:30", "Layout, QA, sign-off."],
              ["08:00", "Delivery to every active WhatsApp subscriber."],
            ].map(([time, body]) => (
              <li key={time} className="flex gap-5 p-5 rounded-[20px]" style={{ background: "var(--color-parchment)" }}>
                <span className="shrink-0 font-mono text-[14px] mt-1" style={{ color: "var(--color-electric-blue)" }}>{time}</span>
                <p className="text-[16px]" style={{ color: "var(--color-ink-black)" }}>{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <FinalCTA />
    </SiteLayout>
  );
}
