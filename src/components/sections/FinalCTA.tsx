import { motion } from "framer-motion";
import { WA_DEFAULT } from "@/lib/wa";

export function FinalCTA() {
  return (
    <section className="px-2 md:px-4 py-2 md:py-4">
      <div 
        className="rounded-[32px] md:rounded-[48px] overflow-hidden"
        style={{ backgroundColor: "var(--color-ink-black)", color: "var(--color-paper-white)" }}
      >
        <div className="container-page py-16 md:py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-display"
        >
          Stop burning hours on research.
          <br />
          <span style={{ color: "var(--color-fog)" }}>Start at ₹149 and see the difference.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-10 flex flex-col sm:flex-row gap-3 justify-center"
        >
          <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "20px 32px", fontSize: 18 }}>
            Send me the first brief →
          </a>
          <a href="/pricing" className="btn-ghost-light" style={{ padding: "18px 28px", fontSize: 18 }}>
            Compare plans
          </a>
        </motion.div>

        <p className="mt-6 text-[14px]" style={{ color: "var(--color-fog)" }}>
          No auto-renewal · 5-day money back · Cancel anytime
        </p>
      </div>
      </div>
    </section>
  );
}
