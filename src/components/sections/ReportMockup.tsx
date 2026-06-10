import { motion, useReducedMotion } from "framer-motion";
import logoAsset from "@/assets/stonkzz-logo.png.asset.json";

/**
 * Stylized PDF report mockup. Dark Ink Black card, blue→ember gradient
 * overlay, lives inside a soft blue rounded container. Floats subtly.
 */
export function ReportMockup({ compact = false }: { compact?: boolean }) {
  const reduce = useReducedMotion();

  return (
    <div className="relative" style={{ perspective: 1400 }}>
      {/* soft cradle */}
      <div
        aria-hidden
        className="absolute inset-0 -m-6 rounded-[40px]"
        style={{
          background:
            "linear-gradient(160deg, rgba(81,150,254,0.18) 0%, rgba(81,150,254,0.06) 60%, rgba(255,255,255,0) 100%)",
        }}
      />
      <motion.div
        animate={reduce ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
        style={{
          transform: "rotate(-3deg)",
          boxShadow:
            "0 30px 60px -20px rgba(27,29,32,0.35), 0 0 0 1px rgba(255,255,255,0.04) inset",
        }}
        className="relative rounded-[26px] overflow-hidden"
      >
        <div
          className="relative p-6"
          style={{
            backgroundColor: "var(--color-ink-black)",
            color: "var(--color-paper-white)",
            aspectRatio: compact ? "4 / 5" : "1 / 1.4",
          }}
        >
          {/* gradient overlay */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(120% 80% at 110% -10%, #5196fe 0%, transparent 50%), radial-gradient(120% 80% at -10% 110%, #f9754e 0%, transparent 50%)",
            }}
          />

          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={logoAsset.url} alt="" className="h-6 w-6" style={{ filter: "brightness(0) invert(1)" }} />
              <span className="text-[14px] font-semibold tracking-[-0.02em]">Stonkzz · Daily Brief</span>
            </div>
            <span className="text-[11px] uppercase tracking-[0.12em] opacity-70">
              Pre-Market
            </span>
          </div>

          <div className="relative mt-6">
            <p className="text-[11px] uppercase tracking-[0.14em] opacity-70">Stonkzz Score</p>
            <div className="mt-1.5 flex items-baseline gap-2">
              <span className="text-[34px] font-bold tracking-[-0.04em]">BULLISH</span>
              <span className="text-[14px]" style={{ color: "#7ee3a4" }}>● 72</span>
            </div>
            {/* sentiment bar */}
            <div className="mt-3 h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
              <div className="h-full" style={{ width: "72%", background: "linear-gradient(90deg,#f9754e,#5196fe,#7ee3a4)" }} />
            </div>
          </div>

          {/* NIFTY mini heatmap */}
          <div className="relative mt-6">
            <p className="text-[11px] uppercase tracking-[0.14em] opacity-70">NIFTY 50 Heatmap</p>
            <div className="mt-2 grid grid-cols-6 gap-1">
              {[
                { c: "#1f8a4d" }, { c: "#22a35a" }, { c: "#176a3c" }, { c: "#3b3d40" }, { c: "#b13a3a" }, { c: "#8a2828" },
                { c: "#22a35a" }, { c: "#1f8a4d" }, { c: "#3b3d40" }, { c: "#176a3c" }, { c: "#b13a3a" }, { c: "#3b3d40" },
                { c: "#22a35a" }, { c: "#3b3d40" }, { c: "#1f8a4d" }, { c: "#176a3c" }, { c: "#22a35a" }, { c: "#8a2828" },
              ].map((t, i) => (
                <div key={i} className="h-6 rounded-[3px]" style={{ background: t.c }} />
              ))}
            </div>
          </div>

          {/* FII/DII row */}
          <div className="relative mt-5 grid grid-cols-2 gap-2">
            <div className="rounded-[14px] p-3" style={{ background: "rgba(255,255,255,0.06)" }}>
              <p className="text-[10px] uppercase tracking-[0.12em] opacity-70">FII</p>
              <p className="mt-1 text-[16px] font-semibold" style={{ color: "#7ee3a4" }}>+₹2,340 Cr</p>
              <p className="text-[10px] opacity-60">Net Bought</p>
            </div>
            <div className="rounded-[14px] p-3" style={{ background: "rgba(255,255,255,0.06)" }}>
              <p className="text-[10px] uppercase tracking-[0.12em] opacity-70">DII</p>
              <p className="mt-1 text-[16px] font-semibold" style={{ color: "#7ee3a4" }}>+₹1,890 Cr</p>
              <p className="text-[10px] opacity-60">Net Bought</p>
            </div>
          </div>

          {/* news */}
          <div className="relative mt-5">
            <p className="text-[11px] uppercase tracking-[0.14em] opacity-70">News bulletin</p>
            <ul className="mt-2 space-y-1.5 text-[12px] opacity-90">
              <li>· RBI holds repo at 6.50% — cautious stance</li>
              <li>· TCS leads IT Q3 earnings beat</li>
              <li>· Auto rally on rural demand outlook</li>
            </ul>
          </div>

          <div className="absolute bottom-3 right-4 text-[10px] uppercase tracking-[0.18em] opacity-60">
            08:00 IST
          </div>
        </div>
      </motion.div>
    </div>
  );
}
