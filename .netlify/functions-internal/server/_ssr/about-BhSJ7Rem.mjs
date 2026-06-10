import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteLayout } from "./Layout-CCezRhq2.mjs";
import { F as FinalCTA } from "./FinalCTA-CzfoBG8j.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { c as MapPin } from "../_libs/lucide-react.mjs";
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
const PILLARS = [{
  t: "Signal, not noise",
  b: "We track 18+ sources daily so subscribers don't have to. If it doesn't change a trader's morning, it doesn't ship."
}, {
  t: "Indian context first",
  b: "Built around NSE rhythms, FII/DII flows, RBI cycles and INR-denominated commodities. Not a translated Western brief."
}, {
  t: "WhatsApp-native",
  b: "Delivery happens where Indian traders already live — no app, no inbox, no extra login. Just open the chat."
}];
function AboutPage() {
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
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "tag-pill", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 14 }),
        " Chennai · India"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 text-display", style: {
        color: "var(--color-ink-black)"
      }, children: [
        "Built for traders who'd rather",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic-flourish", style: {
          color: "var(--color-electric-blue)"
        }, children: "trade" }),
        " ",
        "than scroll."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-[20px] max-w-2xl", style: {
        color: "var(--color-steel)",
        letterSpacing: "-0.023em"
      }, children: "Stonkzz started as a personal habit — one trader, eight tabs, every morning. The brief you now read is what that habit became after a year of refinement and 100,000+ YouTube subscribers asking for a written version." })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-2 md:px-4 py-2 md:py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-[32px] md:rounded-[48px] overflow-hidden", style: {
      background: "var(--color-parchment)"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-page py-20 md:py-24 grid grid-cols-1 md:grid-cols-3 gap-5", children: PILLARS.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
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
      delay: i * 0.08
    }, className: "card-surface", style: {
      border: "1px solid var(--color-sand)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[14px] uppercase tracking-[0.12em]", style: {
        color: "var(--color-electric-blue)"
      }, children: [
        "0",
        i + 1
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 text-[22px] font-semibold tracking-[-0.02em]", style: {
        color: "var(--color-ink-black)"
      }, children: p.t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-[16px]", style: {
        color: "var(--color-steel)"
      }, children: p.b })
    ] }, p.t)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-paper-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-20 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-heading", style: {
          color: "var(--color-ink-black)"
        }, children: "How a single brief comes together." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-[18px]", style: {
          color: "var(--color-steel)"
        }, children: "Every weekday between 4:30 AM and 7:30 AM IST, our pipeline runs through a fixed sequence — collection, normalization, sentiment scoring, news distillation, layout. By 7:55 AM, the PDF is signed and queued. By 8:00 AM, it's in your chat." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "lg:col-span-7 space-y-4", children: [["04:30", "Data collection from NSE, BSE, RBI, FII/DII, commodity exchanges and global indices."], ["06:00", "Normalization and AI sentiment scoring — the Stonkzz Score is produced."], ["06:45", "News distillation — financial headlines compressed to bullets."], ["07:30", "Layout, QA, sign-off."], ["08:00", "Delivery to every active WhatsApp subscriber."]].map(([time, body]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-5 p-5 rounded-[20px]", style: {
        background: "var(--color-parchment)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 font-mono text-[14px] mt-1", style: {
          color: "var(--color-electric-blue)"
        }, children: time }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[16px]", style: {
          color: "var(--color-ink-black)"
        }, children: body })
      ] }, time)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FinalCTA, {})
  ] });
}
export {
  AboutPage as component
};
