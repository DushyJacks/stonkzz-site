import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { l as ArrowLeft } from "../_libs/lucide-react.mjs";
function CalcShell({
  eyebrow,
  title,
  subtitle,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": true,
        className: "absolute inset-0 -z-10",
        style: { background: "radial-gradient(60% 60% at 50% 0%, #eef3ff 0%, #ffffff 70%)" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-14 md:py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/calculators",
          className: "inline-flex items-center gap-2 text-[14px] mb-8 hover:text-ink-black",
          style: { color: "var(--color-steel)" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 16 }),
            " All calculators"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] uppercase tracking-[0.22em]", style: { color: "var(--color-ash)" }, children: eyebrow }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 text-heading", style: { color: "var(--color-ink-black)" }, children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-[17px]", style: { color: "var(--color-steel)" }, children: subtitle })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children })
    ] })
  ] });
}
function Field({
  label,
  hint,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[13px] font-medium mb-2", style: { color: "var(--color-ink-black)" }, children: label }),
    children,
    hint && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block mt-1.5 text-[12px]", style: { color: "var(--color-ash)" }, children: hint })
  ] });
}
const inputClass = "w-full rounded-xl border bg-paper-white px-4 py-3 text-[15px] outline-none transition-colors focus:border-electric-blue";
const inputStyle = {
  borderColor: "var(--color-sand)",
  color: "var(--color-ink-black)"
};
function StatCard({ label, value, accent }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "rounded-2xl p-5",
      style: { background: "var(--color-paper-white)", border: "1px solid var(--color-sand)" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] uppercase tracking-[0.16em]", style: { color: "var(--color-ash)" }, children: label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[26px] font-semibold", style: { color: accent ?? "var(--color-ink-black)", letterSpacing: "-0.02em" }, children: value })
      ]
    }
  );
}
const fmtINR = (n) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);
const fmtINRShort = (n) => {
  if (n >= 1e7) return `₹${(n / 1e7).toFixed(2)}Cr`;
  if (n >= 1e5) return `₹${(n / 1e5).toFixed(2)}L`;
  if (n >= 1e3) return `₹${(n / 1e3).toFixed(1)}K`;
  return `₹${n.toFixed(0)}`;
};
export {
  CalcShell as C,
  Field as F,
  StatCard as S,
  inputClass as a,
  fmtINR as b,
  fmtINRShort as f,
  inputStyle as i
};
