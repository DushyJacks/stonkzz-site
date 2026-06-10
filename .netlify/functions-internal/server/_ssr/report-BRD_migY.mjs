import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteLayout, W as WA_DEFAULT } from "./Layout-CCezRhq2.mjs";
import { F as FinalCTA } from "./FinalCTA-CzfoBG8j.mjs";
import { m as motion, u as useReducedMotion } from "../_libs/framer-motion.mjs";
import { L as Lock } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/lenis.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const url = "/__l5e/assets-v1/2732745f-52e1-47c8-a4bf-2a7e869bb3b5/stonkzz-logo.png";
const logoAsset = {
  url
};
function ReportMockup({ compact = false }) {
  const reduce = useReducedMotion();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", style: { perspective: 1400 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": true,
        className: "absolute inset-0 -m-6 rounded-[40px]",
        style: {
          background: "linear-gradient(160deg, rgba(81,150,254,0.18) 0%, rgba(81,150,254,0.06) 60%, rgba(255,255,255,0) 100%)"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        animate: reduce ? void 0 : { y: [0, -8, 0] },
        transition: { duration: 4, ease: "easeInOut", repeat: Infinity },
        style: {
          transform: "rotate(-3deg)",
          boxShadow: "0 30px 60px -20px rgba(27,29,32,0.35), 0 0 0 1px rgba(255,255,255,0.04) inset"
        },
        className: "relative rounded-[26px] overflow-hidden",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "relative p-6",
            style: {
              backgroundColor: "var(--color-ink-black)",
              color: "var(--color-paper-white)",
              aspectRatio: compact ? "4 / 5" : "1 / 1.4"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  "aria-hidden": true,
                  className: "absolute inset-0 opacity-60",
                  style: {
                    background: "radial-gradient(120% 80% at 110% -10%, #5196fe 0%, transparent 50%), radial-gradient(120% 80% at -10% 110%, #f9754e 0%, transparent 50%)"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoAsset.url, alt: "", className: "h-6 w-6", style: { filter: "brightness(0) invert(1)" } }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px] font-semibold tracking-[-0.02em]", children: "Stonkzz · Daily Brief" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.12em] opacity-70", children: "Pre-Market" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] uppercase tracking-[0.14em] opacity-70", children: "Stonkzz Score" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1.5 flex items-baseline gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[34px] font-bold tracking-[-0.04em]", children: "BULLISH" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px]", style: { color: "#7ee3a4" }, children: "● 72" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 h-1.5 rounded-full overflow-hidden", style: { background: "rgba(255,255,255,0.08)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full", style: { width: "72%", background: "linear-gradient(90deg,#f9754e,#5196fe,#7ee3a4)" } }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] uppercase tracking-[0.14em] opacity-70", children: "NIFTY 50 Heatmap" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 grid grid-cols-6 gap-1", children: [
                  { c: "#1f8a4d" },
                  { c: "#22a35a" },
                  { c: "#176a3c" },
                  { c: "#3b3d40" },
                  { c: "#b13a3a" },
                  { c: "#8a2828" },
                  { c: "#22a35a" },
                  { c: "#1f8a4d" },
                  { c: "#3b3d40" },
                  { c: "#176a3c" },
                  { c: "#b13a3a" },
                  { c: "#3b3d40" },
                  { c: "#22a35a" },
                  { c: "#3b3d40" },
                  { c: "#1f8a4d" },
                  { c: "#176a3c" },
                  { c: "#22a35a" },
                  { c: "#8a2828" }
                ].map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-6 rounded-[3px]", style: { background: t.c } }, i)) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-5 grid grid-cols-2 gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[14px] p-3", style: { background: "rgba(255,255,255,0.06)" }, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.12em] opacity-70", children: "FII" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[16px] font-semibold", style: { color: "#7ee3a4" }, children: "+₹2,340 Cr" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] opacity-60", children: "Net Bought" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[14px] p-3", style: { background: "rgba(255,255,255,0.06)" }, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.12em] opacity-70", children: "DII" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[16px] font-semibold", style: { color: "#7ee3a4" }, children: "+₹1,890 Cr" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] opacity-60", children: "Net Bought" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] uppercase tracking-[0.14em] opacity-70", children: "News bulletin" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-2 space-y-1.5 text-[12px] opacity-90", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "· RBI holds repo at 6.50% — cautious stance" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "· TCS leads IT Q3 earnings beat" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "· Auto rally on rural demand outlook" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-3 right-4 text-[10px] uppercase tracking-[0.18em] opacity-60", children: "08:00 IST" })
            ]
          }
        )
      }
    )
  ] });
}
const SECTIONS = [{
  title: "Stonkzz Score",
  body: "AI-blended sentiment dial. One number from Strongly Bearish to Strongly Bullish.",
  locked: false
}, {
  title: "NIFTY 50 Heatmap",
  body: "Sector breadth, gainers and laggards — at a glance.",
  locked: false
}, {
  title: "FII / DII Activity",
  body: "Institutional flows in crores. Net bought or net sold yesterday.",
  locked: false
}, {
  title: "Global Indices + Commodities",
  body: "Dow, Nasdaq, S&P, Nikkei, Hang Seng, Gold, Silver, Crude.",
  locked: true
}, {
  title: "Open Interest Analysis",
  body: "Call/Put OI shifts, support/resistance clusters from derivatives.",
  locked: true
}, {
  title: "AI News Bullets",
  body: "RBI, banking, IT, auto. Condensed to bullet points.",
  locked: true
}];
function ReportPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-paper-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-page pt-20 md:pt-24 pb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 20
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      duration: 0.5
    }, className: "max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] uppercase tracking-[0.14em]", style: {
        color: "var(--color-steel)"
      }, children: "Sample report" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-3 text-display", style: {
        color: "var(--color-ink-black)"
      }, children: [
        "See the brief traders wake up to,",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic-flourish", style: {
          color: "var(--color-electric-blue)"
        }, children: "daily." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-[20px]", style: {
        color: "var(--color-steel)",
        letterSpacing: "-0.023em"
      }, children: "A redacted preview of yesterday's edition. Three sections are unlocked. The rest land in your WhatsApp." })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-paper-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 lg:sticky lg:top-28 self-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ReportMockup, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: WA_DEFAULT, target: "_blank", rel: "noopener noreferrer", className: "btn-primary w-full", children: "Get full report on WhatsApp" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: SECTIONS.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true,
        margin: "-60px"
      }, transition: {
        duration: 0.4,
        delay: i * 0.05
      }, className: "relative card-surface overflow-hidden", style: {
        border: "1px solid var(--color-sand)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[12px] uppercase tracking-[0.14em]", style: {
          color: "var(--color-steel)"
        }, children: [
          "Section ",
          String(i + 1).padStart(2, "0")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 text-[18px] font-semibold tracking-[-0.02em]", style: {
          color: "var(--color-ink-black)"
        }, children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[14px]", style: {
          color: "var(--color-steel)"
        }, children: s.body }),
        s.locked && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 backdrop-blur-[2px] flex items-end justify-center p-4", style: {
          background: "rgba(242,241,236,0.55)"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: WA_DEFAULT, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-medium", style: {
          background: "var(--color-ink-black)",
          color: "var(--color-paper-white)"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { size: 14 }),
          " Subscribe to unlock"
        ] }) })
      ] }, s.title)) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FinalCTA, {})
  ] });
}
export {
  ReportPage as component
};
