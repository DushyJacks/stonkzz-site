import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function ProblemSolution() {
  return (
    <section style={{ backgroundColor: "var(--color-paper-white)" }}>
      <div className="container-page py-16 md:py-24">
        
        {/* Editorial Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
          <p 
            className="text-[12px] md:text-[14px] uppercase tracking-[0.2em] font-medium mb-6"
            style={{ color: "var(--color-steel)" }}
          >
            The morning ritual, rewritten
          </p>
          <motion.h2 
            className="text-[40px] md:text-[60px] lg:text-[72px] font-semibold leading-[1.05] tracking-tight mb-8"
            style={{ color: "var(--color-ink-black)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Stop opening <br className="hidden md:block"/>
            <span 
              className="italic font-serif pr-2" 
              style={{ color: "var(--color-ember-orange)", fontFamily: "Georgia, Cambria, serif" }}
            >
              eight tabs
            </span>
            every morning.
          </motion.h2>
          <p 
            className="text-[18px] md:text-[22px] max-w-2xl mx-auto leading-relaxed"
            style={{ color: "var(--color-steel)" }}
          >
            We sweep through every source a serious trader checks before the bell — and hand you one calm brief instead.
          </p>
        </div>

        {/* The bespoke comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 max-w-6xl mx-auto">
          
          {/* BEFORE: The Noise */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[32px] md:rounded-[48px] p-8 md:p-14 overflow-hidden"
            style={{ backgroundColor: "var(--color-parchment)", border: "1px solid var(--color-sand)" }}
          >
            {/* Visual Metaphor: Stack of noisy notifications/tabs */}
            <div className="absolute right-[-15%] top-[5%] w-[80%] sm:w-[70%] flex flex-col gap-4 opacity-40 md:opacity-60 pointer-events-none transform -rotate-[4deg] scale-[1.15]">
              <div className="bg-white border border-sand p-4 rounded-2xl shadow-sm text-[13px] font-medium blur-[2px] translate-x-12" style={{ color: "var(--color-steel)" }}>
                <span style={{ color: "var(--color-ember-orange)" }}>ALERT:</span> NIFTY options OI shifts rapidly...
              </div>
              <div className="bg-white border border-sand p-4 rounded-2xl shadow-sm text-[13px] font-medium blur-[1px] translate-x-6" style={{ color: "var(--color-steel)" }}>
                FIIs sell ₹2000cr in cash market
              </div>
              <div className="bg-white border border-sand p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] text-[15px] font-semibold -ml-4 z-10" style={{ color: "var(--color-ink-black)" }}>
                RBI maintains status quo on repo rate
              </div>
              <div className="bg-white border border-sand p-4 rounded-2xl shadow-sm text-[13px] font-medium blur-[1px] translate-x-2" style={{ color: "var(--color-steel)" }}>
                Dow Jones futures plunge 300 points
              </div>
              <div className="bg-white border border-sand p-4 rounded-2xl shadow-sm text-[13px] font-medium blur-[2px] translate-x-8" style={{ color: "var(--color-steel)" }}>
                Crude oil prices soar amid tensions...
              </div>
              <div className="bg-white border border-sand p-4 rounded-2xl shadow-sm text-[13px] font-medium blur-[3px] translate-x-14" style={{ color: "var(--color-steel)" }}>
                Gold hits new all-time high...
              </div>
            </div>

            <div className="relative z-10 h-full flex flex-col justify-between min-h-[360px]">
              <div className="max-w-[200px] md:max-w-[260px]">
                <p 
                  className="text-[12px] uppercase tracking-[0.2em] font-semibold mb-4"
                  style={{ color: "var(--color-ember-orange)" }}
                >
                  7:00 AM
                </p>
                <h3 
                  className="text-[32px] md:text-[42px] font-semibold leading-tight tracking-tight"
                  style={{ color: "var(--color-ink-black)" }}
                >
                  The endless scrolling.
                </h3>
              </div>
              
              <div className="space-y-4 mt-16 md:mt-24">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--color-ember-orange)" }} />
                  <span 
                    className="text-[18px] font-medium line-through decoration-2"
                    style={{ color: "var(--color-steel)", textDecorationColor: "var(--color-ember-orange)" }}
                  >
                    45 minutes lost
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--color-ember-orange)" }} />
                  <span 
                    className="text-[18px] font-medium line-through decoration-2"
                    style={{ color: "var(--color-steel)", textDecorationColor: "var(--color-ember-orange)" }}
                  >
                    8+ tabs open
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--color-ember-orange)" }} />
                  <span 
                    className="text-[18px] font-medium line-through decoration-2"
                    style={{ color: "var(--color-steel)", textDecorationColor: "var(--color-ember-orange)" }}
                  >
                    Information overload
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* AFTER: The Signal */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative rounded-[32px] md:rounded-[48px] p-8 md:p-14 overflow-hidden"
            style={{ backgroundColor: "var(--color-ink-black)" }}
          >
            {/* Subtle glow or accent in background */}
            <div 
              className="absolute top-0 right-0 w-64 h-64 opacity-20 blur-[100px] rounded-full mix-blend-screen transform translate-x-1/2 -translate-y-1/2" 
              style={{ backgroundColor: "var(--color-electric-blue)" }}
            />
            
            <div className="relative z-10 h-full flex flex-col justify-between min-h-[360px]">
              <div>
                <p 
                  className="text-[12px] uppercase tracking-[0.2em] font-semibold mb-4"
                  style={{ color: "var(--color-electric-blue)" }}
                >
                  8:00 AM
                </p>
                <h3 
                  className="text-[32px] md:text-[42px] font-semibold leading-tight tracking-tight max-w-sm"
                  style={{ color: "var(--color-paper-white)" }}
                >
                  One <span className="italic font-serif" style={{ color: "var(--color-electric-blue)", fontFamily: "Georgia, Cambria, serif" }}>calm</span> <br/> message.
                </h3>
              </div>

              <div 
                className="backdrop-blur-md rounded-2xl p-6 mt-12"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.08)", border: "1px solid rgba(255, 255, 255, 0.12)" }}
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-1"
                    style={{ backgroundColor: "var(--color-electric-blue)" }}
                  >
                    <Check color="var(--color-paper-white)" className="w-5 h-5" />
                  </div>
                  <div>
                    <p 
                      className="text-[18px] font-medium mb-1"
                      style={{ color: "var(--color-paper-white)" }}
                    >
                      Ready to trade
                    </p>
                    <p 
                      className="text-[15px] leading-relaxed"
                      style={{ color: "rgba(255, 255, 255, 0.6)" }}
                    >
                      A beautifully formatted PDF covering market sentiment, NIFTY 50 heatmaps, and FII flows. Read it in 2 minutes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
