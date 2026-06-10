import { motion, useReducedMotion } from "framer-motion";
import { WA_DEFAULT } from "@/lib/wa";

/**
 * Stonkzz hero with clouds background image
 *  – full-width clouds image with rounded corners and margins
 *  – text content positioned on top
 *  – headline, description, CTA, and pricing
 */
export function Hero() {
  const reduce = useReducedMotion();
  const fade = (delay = 0) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 16 },
    animate: reduce ? { opacity: 1 } : { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay },
  });

  return (
    <section className="relative">
      <div className="absolute -top-40 inset-x-0 overflow-hidden -z-20" style={{ height: "calc(100vh + 128px)" }}>
        {/* Background image covering the hero section and nav */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: "url('/images/hero/Hero BG 2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Fade gradient at the bottom */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 -z-10 h-[40%] pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 1) 100%)",
          }}
        />
      </div>

      <div className="container-page relative h-screen flex flex-col items-center justify-start pt-20 md:pt-24 pb-16 md:pb-20">

        {/* Content overlay with text */}
        <div className="relative flex flex-col items-center justify-center text-center px-4 md:px-8">
          <motion.h1
            {...fade(0.05)}
            className="text-display max-w-3xl"
            style={{ color: "var(--color-ink-black)" }}
          >
            Your morning market <br className="hidden sm:block" />
            breakdown before <span className="italic-flourish" style={{ color: "var(--color-paper-white)" }}>8 AM.</span>
          </motion.h1>

          <motion.p
            {...fade(0.18)}
            className="mx-auto mt-6 max-w-xl text-[18px] leading-[1.5]"
            style={{ color: "var(--color-ink-black)" }}
          >
            Every morning, one PDF lands in your WhatsApp inbox. NIFTY moves, FII/DII shifts, global overnight action, commodities, and the AI news that actually moves markets. Built for people who check their portfolio before their emails.
          </motion.p>

          <motion.div {...fade(0.28)} className="mt-8 flex justify-center">
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-medium text-paper-white transition-transform hover:scale-[1.03]"
              style={{ backgroundColor: "var(--color-ink-black)" }}
            >
              Try it now
            </a>
          </motion.div>

          <motion.p
            {...fade(0.36)}
            className="mt-4 text-[13px]"
            style={{ color: "var(--color-ink-black)" }}
          >
            ₹149/month · 5-day money-back · Cancel anytime
          </motion.p>
        </div>
      </div>
    </section>
  );
}
