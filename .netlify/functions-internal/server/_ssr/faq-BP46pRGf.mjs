import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteLayout } from "./Layout-CCezRhq2.mjs";
import { F as FAQ, A as ALL_FAQS } from "./router-BFtkXzb1.mjs";
import { F as FinalCTA } from "./FinalCTA-CzfoBG8j.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
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
import "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function FaqPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-paper-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-page pt-20 md:pt-24 pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
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
      }, children: "FAQ" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 text-display", style: {
        color: "var(--color-ink-black)"
      }, children: "Everything you'd ask before subscribing." })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, { items: ALL_FAQS, withCta: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FinalCTA, {})
  ] });
}
export {
  FaqPage as component
};
