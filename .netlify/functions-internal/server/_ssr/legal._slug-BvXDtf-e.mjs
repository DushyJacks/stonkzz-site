import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteLayout } from "./Layout-CCezRhq2.mjs";
import { R as Route$5 } from "./router-BFtkXzb1.mjs";
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
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
function LegalPage() {
  const doc = Route$5.useLoaderData();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("article", { className: "bg-paper-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-20 md:py-24 max-w-[760px]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[14px] uppercase tracking-[0.14em]", style: {
      color: "var(--color-steel)"
    }, children: [
      "Legal · ",
      doc.updated
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 text-heading", style: {
      color: "var(--color-ink-black)"
    }, children: doc.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 space-y-5 text-[17px] leading-[1.65]", style: {
      color: "var(--color-ink-black)"
    }, children: doc.body.split("\n\n").map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: p }, i)) })
  ] }) }) });
}
export {
  LegalPage as component
};
