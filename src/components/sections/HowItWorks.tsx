import { motion } from "framer-motion";
import { CreditCard, Smartphone, Sunrise } from "lucide-react";

const STEPS = [
  { Icon: CreditCard, title: "Choose your plan", body: "Pick Monthly, Half-Yearly or Annual. No auto-renewal." },
  { Icon: Smartphone, title: "Share your WhatsApp", body: "We enroll your number. Setup takes under two minutes." },
  { Icon: Sunrise, title: "Wake up ready", body: "Every trading morning before 8:00 AM IST, the brief is waiting." },
];

export function HowItWorks() {
  return (
    <section className="px-2 md:px-4 py-2 md:py-4">
      <div 
        className="rounded-[32px] md:rounded-[48px] overflow-hidden"
        style={{ backgroundColor: "var(--color-parchment)" }}
      >
        <div className="container-page py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <p className="text-[14px] uppercase tracking-[0.14em]" style={{ color: "var(--color-steel)" }}>How it works</p>
          <h2 className="mt-3 text-heading" style={{ color: "var(--color-ink-black)" }}>From signup to morning brief.</h2>
        </motion.div>

        <div className="mt-14 relative grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* dashed connector */}
          <div className="hidden md:block absolute left-[16%] right-[16%] top-[60px] h-px" style={{ borderTop: "2px dashed var(--color-electric-blue)" }} />
          {STEPS.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              className="relative card-surface text-center md:text-left"
              style={{ border: "1px solid var(--color-sand)" }}
            >
              <div
                className="mx-auto md:mx-0 h-14 w-14 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: "var(--color-electric-blue)", color: "var(--color-paper-white)" }}
              >
                <s.Icon size={24} />
              </div>
              <p className="text-[12px] uppercase tracking-[0.14em]" style={{ color: "var(--color-steel)" }}>Step {i + 1}</p>
              <h3 className="mt-1 text-[20px] font-semibold" style={{ color: "var(--color-ink-black)" }}>{s.title}</h3>
              <p className="mt-2 text-[15px]" style={{ color: "var(--color-steel)" }}>{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
