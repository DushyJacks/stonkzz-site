import { motion } from "framer-motion";
import { WA_DEFAULT } from "@/lib/wa";

const ANNOTATIONS = [
  { num: "01", title: "Stonkzz Score", body: "One AI-blended sentiment number. From Strongly Bearish to Strongly Bullish." },
  { num: "02", title: "NIFTY 50 heatmap", body: "Sector-level breadth at a glance — winners, losers, the leaders pulling the index." },
  { num: "03", title: "FII / DII flows", body: "Yesterday's institutional footprint, in crores. Are they buying or unwinding?" },
  { num: "04", title: "Global indices + commodities", body: "Dow, Nasdaq, S&P, Nikkei, Hang Seng, Gold, Silver, Crude — context before NSE opens." },
  { num: "05", title: "AI news bullets", body: "RBI, banking, IT, auto. Condensed. No filler." },
];

export function ReportPreview() {
  return (
    <section className="bg-paper-white">
      <div className="container-page py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <p className="text-[14px] uppercase tracking-[0.14em]" style={{ color: "var(--color-steel)" }}>
            See it
          </p>
          <h2 className="mt-3 text-heading" style={{ color: "var(--color-ink-black)" }}>
            See what lands in your WhatsApp.
          </h2>
          <p className="mt-4 text-[20px]" style={{ color: "var(--color-steel)", letterSpacing: "-0.023em" }}>
            Every morning. Every trading day.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 flex justify-center">
            <img 
              src="/images/Box.jpg" 
              alt="Stonkzz Report Preview Box" 
              className="w-full max-w-md rounded-[32px] md:rounded-[48px] shadow-xl object-cover"
            />
          </div>

          <div className="lg:col-span-7">
            <ol className="space-y-5">
              {ANNOTATIONS.map((a, i) => (
                <motion.li
                  key={a.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex gap-5 p-5 rounded-[20px]"
                  style={{ background: "var(--color-parchment)" }}
                >
                  <span
                    className="shrink-0 h-10 w-10 rounded-full flex items-center justify-center text-[13px] font-semibold"
                    style={{ background: "var(--color-paper-white)", color: "var(--color-electric-blue)", border: "1px solid var(--color-sand)" }}
                  >
                    {a.num}
                  </span>
                  <div>
                    <h3 className="text-[18px] font-semibold tracking-[-0.02em]" style={{ color: "var(--color-ink-black)" }}>
                      {a.title}
                    </h3>
                    <p className="mt-1 text-[15px]" style={{ color: "var(--color-steel)" }}>{a.body}</p>
                  </div>
                </motion.li>
              ))}
            </ol>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Get today's report →
              </a>
              <a href="/pricing" className="btn-ghost">View plans</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
