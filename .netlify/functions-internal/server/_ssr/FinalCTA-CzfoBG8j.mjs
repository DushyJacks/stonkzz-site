import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { W as WA_DEFAULT } from "./Layout-CCezRhq2.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
function FinalCTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-2 md:px-4 py-2 md:py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "rounded-[32px] md:rounded-[48px] overflow-hidden",
      style: { backgroundColor: "var(--color-ink-black)", color: "var(--color-paper-white)" },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-16 md:py-20 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.h2,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-100px" },
            transition: { duration: 0.5 },
            className: "text-display",
            children: [
              "Stop burning hours on research.",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--color-fog)" }, children: "Start at ₹149 and see the difference." })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.5, delay: 0.15 },
            className: "mt-10 flex flex-col sm:flex-row gap-3 justify-center",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: WA_DEFAULT, target: "_blank", rel: "noopener noreferrer", className: "btn-primary", style: { padding: "20px 32px", fontSize: 18 }, children: "Send me the first brief →" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/pricing", className: "btn-ghost-light", style: { padding: "18px 28px", fontSize: 18 }, children: "Compare plans" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-[14px]", style: { color: "var(--color-fog)" }, children: "No auto-renewal · 5-day money back · Cancel anytime" })
      ] })
    }
  ) });
}
export {
  FinalCTA as F
};
