import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteLayout } from "./Layout-CCezRhq2.mjs";
import { P as Pricing } from "./Pricing-BmVJy2RO.mjs";
import { F as FAQ, A as ALL_FAQS } from "./router-BFtkXzb1.mjs";
import { F as FinalCTA } from "./FinalCTA-CzfoBG8j.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { S as ShieldCheck } from "../_libs/lucide-react.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function PricingPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-paper-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-page pt-20 md:pt-24 pb-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 20
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      duration: 0.5
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "tag-pill", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { size: 14 }),
        " 5-Day Money-Back Guarantee"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 text-display max-w-3xl mx-auto", style: {
        color: "var(--color-ink-black)"
      }, children: [
        "Simple plans. ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic-flourish", style: {
          color: "var(--color-electric-blue)"
        }, children: "Honest" }),
        " pricing."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-xl mx-auto text-[18px]", style: {
        color: "var(--color-steel)"
      }, children: "No auto-renewal. No upsells. Cancel anytime. Refund within 5 days if it's not for you." })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Pricing, { compact: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-paper-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-page pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[24px] p-8", style: {
      background: "var(--color-parchment)",
      border: "1px solid var(--color-sand)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[20px] font-semibold", style: {
        color: "var(--color-ink-black)"
      }, children: "Refund policy, in one line." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-[16px]", style: {
        color: "var(--color-steel)"
      }, children: [
        "If you're not satisfied within 5 days of your first delivery, message us at ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "underline", href: "mailto:thestonkzz@gmail.com", children: "thestonkzz@gmail.com" }),
        " and we'll refund the full subscription. No forms, no friction."
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, { items: ALL_FAQS }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FinalCTA, {})
  ] });
}
export {
  PricingPage as component
};
