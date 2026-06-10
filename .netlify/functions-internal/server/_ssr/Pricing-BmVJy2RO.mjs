import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { w as waPlan } from "./Layout-CCezRhq2.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { C as Check } from "../_libs/lucide-react.mjs";
const PLANS = [
  {
    name: "Monthly",
    price: "₹149",
    per: "/ month",
    blurb: "Test drive the brief. No lock-in.",
    features: ["Daily report at 8 AM IST", "All sections included", "Stop anytime, no questions", "Money back in 5 days if you don't like it"],
    cta: "Start Monthly",
    variant: "ghost",
    href: waPlan("Monthly", "₹149")
  },
  {
    name: "Half-Yearly",
    price: "₹499",
    per: "/ 6 months",
    blurb: "Most people land here. Obvious choice.",
    features: ["Everything in Monthly, plus", "₹400 cheaper than paying monthly", "Priority reply on WhatsApp", "Monthly market summary emailed to you"],
    cta: "Get Half-Yearly",
    variant: "primary",
    popular: true,
    badge: "Most Popular",
    href: waPlan("Half-Yearly", "₹499")
  },
  {
    name: "Annual",
    price: "₹999",
    per: "/ 12 months",
    blurb: "If you trade seriously, this pays for itself.",
    features: ["Everything in Half-Yearly", "44% off the monthly rate", "Year-end market recap", "Early access to new features"],
    cta: "Go Annual",
    variant: "ghost",
    href: waPlan("Annual", "₹999")
  }
];
function Pricing({ compact = false }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-paper-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-12 md:py-16", children: [
    !compact && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.5 },
        className: "max-w-3xl",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] uppercase tracking-[0.14em]", style: { color: "var(--color-steel)" }, children: "Pricing" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-heading", style: { color: "var(--color-ink-black)" }, children: "Pick your plan." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-[18px]", style: { color: "var(--color-steel)" }, children: "No auto-renewal. Cancel anytime. 5-day money-back guarantee." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch", children: PLANS.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-60px" },
        transition: { duration: 0.4, delay: i * 0.08 },
        className: "relative rounded-[24px] p-6 md:p-8 flex flex-col",
        style: {
          background: p.popular ? "var(--color-paper-white)" : "var(--color-parchment)",
          border: p.popular ? "2px solid var(--color-electric-blue)" : "1px solid var(--color-sand)",
          boxShadow: p.popular ? "0 30px 60px -30px rgba(81,150,254,0.45)" : void 0
        },
        children: [
          p.popular && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "absolute -top-3 right-6 px-3 py-1 rounded-full text-[12px] font-semibold uppercase tracking-[0.08em]",
              style: { background: "var(--color-electric-blue)", color: "var(--color-paper-white)" },
              children: p.badge
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[20px] font-semibold", style: { color: "var(--color-ink-black)" }, children: p.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] mt-1", style: { color: "var(--color-steel)" }, children: p.blurb }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-baseline gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[48px] font-bold tracking-[-0.06em]", style: { color: "var(--color-ink-black)" }, children: p.price }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px]", style: { color: "var(--color-steel)" }, children: p.per })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-2.5 flex-1", children: p.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-[15px]", style: { color: "var(--color-ink-black)" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 16, style: { color: "var(--color-electric-blue)", marginTop: 3 } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: f })
          ] }, f)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: p.href,
              target: "_blank",
              rel: "noopener noreferrer",
              className: `mt-7 ${p.variant === "primary" ? "btn-primary" : "btn-ghost"} w-full`,
              children: p.cta
            }
          )
        ]
      },
      p.name
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-8 text-center text-[14px]", style: { color: "var(--color-steel)" }, children: [
      "Need a different plan? ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "underline", children: "Talk to us" }),
      "."
    ] })
  ] }) });
}
export {
  Pricing as P
};
