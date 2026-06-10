import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout } from "./Layout-CCezRhq2.mjs";
import { i as ChartPie, j as Coins, T as TrendingDown, L as Lock, k as Baby, m as ArrowRight } from "../_libs/lucide-react.mjs";
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
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const CALCS = [{
  to: "/calculators/asset-allocation",
  icon: ChartPie,
  title: "Asset Allocation",
  desc: "Conservative vs Moderate vs Aggressive — see how each grows over time.",
  tone: "blue"
}, {
  to: "/calculators/gold-returns",
  icon: Coins,
  title: "Gold Returns",
  desc: "Compare Physical, Digital & ETF gold returns with fees built-in.",
  tone: "ember"
}, {
  to: "/calculators/swp",
  icon: TrendingDown,
  title: "SWP Calculator",
  desc: "Plan your Systematic Withdrawal — how long your corpus lasts.",
  tone: "ink"
}, {
  to: "/calculators/debt-engine",
  icon: Lock,
  title: "Debt Engine",
  desc: "Calculate your true interest cost and build your escape plan.",
  tone: "ember"
}, {
  to: "/calculators/child-legacy",
  icon: Baby,
  title: "Child Legacy",
  desc: "Head-to-head: PPF vs SSY vs SIP for your child's future corpus.",
  tone: "blue"
}];
function CalculatorsHub() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "absolute inset-0 -z-10", style: {
      background: "radial-gradient(60% 60% at 50% 0%, #eef3ff 0%, #ffffff 70%)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-16 md:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] uppercase tracking-[0.22em]", style: {
          color: "var(--color-ash)"
        }, children: "Free tools" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-3 text-display", style: {
          color: "var(--color-ink-black)"
        }, children: [
          "Calculators that ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic-flourish", style: {
            color: "var(--color-electric-blue)"
          }, children: "make sense" }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-[18px]", style: {
          color: "var(--color-steel)"
        }, children: "Five small tools we use ourselves. No signup, no spam — just the numbers you actually need." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5", children: CALCS.map((c) => {
        const Icon = c.icon;
        const tone = c.tone === "blue" ? {
          bg: "var(--color-electric-blue-soft)",
          fg: "var(--color-electric-blue)"
        } : c.tone === "ember" ? {
          bg: "#fde7dc",
          fg: "var(--color-ember-orange)"
        } : {
          bg: "#1b1d20",
          fg: "var(--color-paper-white)"
        };
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: c.to, className: "group rounded-3xl p-7 transition-all hover:-translate-y-1", style: {
          background: "var(--color-paper-white)",
          border: "1px solid var(--color-sand)"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-2xl flex items-center justify-center", style: {
            background: tone.bg,
            color: tone.fg
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 22 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-[20px] font-semibold", style: {
            color: "var(--color-ink-black)",
            letterSpacing: "-0.02em"
          }, children: c.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[14px] leading-[1.55]", style: {
            color: "var(--color-steel)"
          }, children: c.desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium group-hover:gap-2.5 transition-all", style: {
            color: "var(--color-electric-blue)"
          }, children: [
            "Open calculator ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
          ] })
        ] }, c.to);
      }) })
    ] })
  ] }) });
}
export {
  CalculatorsHub as component
};
