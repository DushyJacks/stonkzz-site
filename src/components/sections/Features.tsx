import { motion } from "framer-motion";
import { Gauge, LayoutGrid, Building2, Globe2, Newspaper, LineChart, type LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FEATURES: {
  Icon: LucideIcon;
  title: string;
  body: string;
  accent: "blue" | "orange";
}[] = [
  {
    Icon: Gauge,
    title: "Market Sentiment",
    body: "A single score tells you whether institutions are buying or dumping. Ranges from strongly bearish to strongly bullish. The one number that matters.",
    accent: "blue",
  },
  {
    Icon: LayoutGrid,
    title: "Sector Breakdown",
    body: "Which sectors outran the index yesterday? Banks leading or IT dragging? Scan this in 10 seconds instead of pulling up five different tabs.",
    accent: "orange",
  },
  {
    Icon: Building2,
    title: "Institutional Money",
    body: "FII and DII numbers come in at 3:30 PM. We pull them apart and show you: are institutions adding or exiting? That flow matters more than most news.",
    accent: "blue",
  },
  {
    Icon: Globe2,
    title: "Overnight Global",
    body: "Dow closed down 2%? Nikkei surged? You need global context before the Indian market opens, not after.",
    accent: "orange",
  },
  {
    Icon: Newspaper,
    title: "News That Moves Things",
    body: "RBI rate decisions. Banking bailouts. IT contract wins. We skip the fluff and flag what actually moves your portfolio.",
    accent: "blue",
  },
  {
    Icon: LineChart,
    title: "Options Interest",
    body: "Call/Put OI tells you where traders are placing bets. Support and resistance zones emerge from derivatives data.",
    accent: "orange",
  },
];

function accentColor(accent: "blue" | "orange") {
  return accent === "blue" ? "var(--color-electric-blue)" : "var(--color-ember-orange)";
}

function accentBg(accent: "blue" | "orange") {
  return accent === "blue" ? "var(--color-electric-blue-soft)" : "#fef0ec";
}

export function Features() {
  return (
    <section style={{ backgroundColor: "var(--color-paper-white)" }}>
      <div className="container-page py-12 md:py-16">
        {/* Banner Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative mb-16 md:mb-24 w-full rounded-[32px] overflow-hidden"
          style={{
            boxShadow: "0 20px 60px -15px rgba(0,0,0,0.15)",
          }}
        >
          {/* Banner Image */}
          <img 
            src="/images/Banner.jpg" 
            alt="Stonkzz Banner" 
            className="w-full object-cover"
            style={{ 
              aspectRatio: "21 / 6", // Matches the wide aspect ratio of the uploaded image
              minHeight: "280px" // Ensure it doesn't get too thin on mobile
            }} 
          />
          
          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 sm:p-10">
            <h2 className="text-white text-[24px] sm:text-[32px] md:text-[42px] lg:text-[48px] font-semibold tracking-[-0.03em] leading-[1.15]">
              The stock market wasn't built for <br className="hidden sm:block" />
              <span 
                className="text-transparent bg-clip-text" 
                style={{ 
                  backgroundImage: "linear-gradient(90deg, #5196fe 0%, #5196fe 100%)" 
                }}
              >
                everyday investors.
              </span>
            </h2>
            <p 
              className="mt-1 sm:mt-2 text-white text-[28px] sm:text-[36px] md:text-[46px] lg:text-[54px] font-serif italic tracking-[-0.04em] font-bold"
              style={{
                fontFamily: "Georgia, Cambria, 'Times New Roman', Times, serif"
              }}
            >
              Stonkzz is.
            </p>
          </div>
        </motion.div>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start relative mt-8 md:mt-16">
          {/* Sticky Header Side */}
          <div className="lg:sticky lg:top-32 lg:w-5/12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
            >
               <p className="text-[12px] uppercase tracking-[0.22em] mb-4 font-semibold" style={{ color: "var(--color-ember-orange)" }}>
                 What's inside
               </p>
               <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-semibold leading-[1.05] tracking-tight mb-6" style={{ color: "var(--color-ink-black)" }}>
                  Everything you need. <br/>
                  <span className="italic font-serif" style={{ color: "var(--color-steel)", fontFamily: "Georgia, Cambria, serif" }}>
                    Nothing you don't.
                  </span>
               </h2>
               <p className="text-[18px] md:text-[20px] leading-relaxed max-w-md" style={{ color: "var(--color-steel)" }}>
                 Six pillars power every morning brief. Each one designed to replace a tab you used to open.
               </p>
            </motion.div>
          </div>

          {/* List Side */}
          <div className="lg:w-7/12 w-full mt-6 lg:mt-0">
            <div style={{ borderTop: "1px solid var(--color-sand)", borderBottom: "1px solid var(--color-sand)" }}>
              {FEATURES.map((f, i) => (
                <motion.div 
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="group flex flex-col md:flex-row md:items-start py-8 md:py-12 cursor-default"
                  style={{ borderBottom: i !== FEATURES.length - 1 ? "1px solid var(--color-sand)" : "none" }}
                >
                  <div className="md:w-5/12 mb-4 md:mb-0 pr-6 shrink-0 flex items-start gap-4">
                    <span 
                      className="text-[12px] font-medium uppercase tracking-[0.2em] mt-1.5 shrink-0"
                      style={{ color: "var(--color-ash)" }}
                    >
                      0{i + 1}
                    </span>
                    <h3 
                      className="text-[20px] md:text-[24px] font-semibold tracking-tight transition-colors duration-300"
                      style={{ color: "var(--color-ink-black)" }}
                    >
                      {f.title}
                    </h3>
                  </div>
                  <div className="md:w-7/12 flex flex-col items-start relative">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center mb-4 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-12"
                      style={{ backgroundColor: accentBg(f.accent), color: accentColor(f.accent) }}
                    >
                      <f.Icon size={18} strokeWidth={2.5} />
                    </div>
                    <p 
                      className="text-[16px] md:text-[17px] leading-relaxed"
                      style={{ color: "var(--color-steel)" }}
                    >
                      {f.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
