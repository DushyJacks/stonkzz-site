import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ to, suffix = "", prefix = "", duration = 1.5 }: { to: number; suffix?: string; prefix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);
  return <span ref={ref}>{prefix}{val.toLocaleString("en-IN")}{suffix}</span>;
}

const STATS: Array<{ value: React.ReactNode; caption: string }> = [
  { value: <><Counter to={100} suffix="K+" /></>, caption: "YouTube community" },
  { value: <>8:00 AM <span style={{ color: "var(--color-steel)", fontSize: "0.6em", marginLeft: 4 }}></span></>, caption: "Daily delivery" },
  { value: <><Counter to={18} suffix="+" /></>, caption: "Data sources aggregated" },
  { value: <>₹149</>, caption: "Starting monthly plan" },
];

export function StatRow() {
  return (
    <section style={{ backgroundColor: "var(--color-white)" }}>
      <div className="container-page py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-y-10 md:divide-x md:divide-sand"
        >
          {STATS.map((s, i) => (
            <div key={i} className="px-2 md:px-8 text-center md:text-left">
              <p
                className="text-[40px] md:text-[56px] font-bold"
                style={{ color: "var(--color-ink-black)", letterSpacing: "-0.06em", lineHeight: 1.05 }}
              >
                {s.value}
              </p>
              <p className="mt-2 text-[14px]" style={{ color: "var(--color-steel)" }}>
                {s.caption}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
