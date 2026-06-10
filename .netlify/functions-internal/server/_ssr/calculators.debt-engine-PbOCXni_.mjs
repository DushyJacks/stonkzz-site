import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteLayout } from "./Layout-CCezRhq2.mjs";
import { C as CalcShell, i as inputStyle, a as inputClass, f as fmtINRShort, b as fmtINR } from "./CalcShell-CucAHxPb.mjs";
import { R as ResponsiveContainer, P as PieChart, c as Pie, d as Cell, T as Tooltip, L as Legend } from "../_libs/recharts.mjs";
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
import "../_libs/clsx.mjs";
import "../_libs/lodash.mjs";
import "../_libs/react-smooth.mjs";
import "../_libs/prop-types.mjs";
import "../_libs/fast-equals.mjs";
import "../_libs/tiny-invariant.mjs";
import "../_libs/react-is.mjs";
import "../_libs/d3-shape.mjs";
import "../_libs/d3-path.mjs";
import "../_libs/victory-vendor.mjs";
import "../_libs/d3-scale.mjs";
import "../_libs/internmap.mjs";
import "../_libs/d3-array.mjs";
import "../_libs/d3-time-format.mjs";
import "../_libs/d3-time.mjs";
import "../_libs/d3-interpolate.mjs";
import "../_libs/d3-color.mjs";
import "../_libs/d3-format.mjs";
import "../_libs/recharts-scale.mjs";
import "../_libs/decimal.js-light.mjs";
import "../_libs/eventemitter3.mjs";
function DebtEngine() {
  const [loan, setLoan] = reactExports.useState(5e5);
  const [rate, setRate] = reactExports.useState(8.5);
  const [years, setYears] = reactExports.useState(20);
  const {
    emi,
    totalPaid,
    interest
  } = reactExports.useMemo(() => {
    const n = years * 12;
    const r = rate / 100 / 12;
    const emi2 = r === 0 ? loan / n : loan * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    const totalPaid2 = emi2 * n;
    return {
      emi: emi2,
      totalPaid: totalPaid2,
      interest: totalPaid2 - loan
    };
  }, [loan, rate, years]);
  const pieData = [{
    name: "Principal",
    value: loan,
    fill: "#a3a3a3"
  }, {
    name: "Interest",
    value: interest,
    fill: "#f9754e"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CalcShell, { eyebrow: "Calculator · Debt", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    "Debt ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic-flourish", style: {
      color: "var(--color-ember-orange)"
    }, children: "Engine" })
  ] }), subtitle: "Calculate your true interest cost and build your escape plan.", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 rounded-3xl p-7 bg-paper-white", style: {
      border: "1px solid var(--color-sand)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[18px] font-semibold mb-5", style: {
        color: "var(--color-ink-black)"
      }, children: "Your Loan" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Slider, { label: "Loan Amount", suffix: fmtINRShort(loan), min: 5e4, max: 5e7, step: 1e4, value: loan, onChange: setLoan, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", className: inputClass + " mt-3", style: inputStyle, value: loan, onChange: (e) => setLoan(Math.max(0, Number(e.target.value))) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Slider, { label: "Interest Rate", suffix: `${rate.toFixed(2)}%`, min: 1, max: 24, step: 0.1, value: rate, onChange: setRate, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", step: "0.1", className: inputClass + " mt-3", style: inputStyle, value: rate, onChange: (e) => setRate(Math.max(0, Number(e.target.value))) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Slider, { label: "Tenure", suffix: `${years} years`, min: 1, max: 30, step: 1, value: years, onChange: setYears, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", className: inputClass + " mt-3", style: inputStyle, value: years, onChange: (e) => setYears(Math.max(1, Number(e.target.value))) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 rounded-3xl p-7", style: {
      background: "linear-gradient(180deg,#1b1d20,#101828)",
      color: "var(--color-paper-white)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] uppercase tracking-[0.18em] opacity-70", children: "Monthly EMI" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[44px] md:text-[56px] font-semibold leading-none", style: {
        letterSpacing: "-0.03em"
      }, children: fmtINR(emi) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 grid grid-cols-3 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DarkStat, { label: "Principal", value: fmtINRShort(loan), tone: "muted" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DarkStat, { label: "Interest", value: fmtINRShort(interest), tone: "ember" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DarkStat, { label: "Total Paid", value: fmtINRShort(totalPaid), tone: "muted" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        width: "100%",
        height: 240
      }, className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PieChart, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Pie, { data: pieData, dataKey: "value", innerRadius: 60, outerRadius: 95, paddingAngle: 2, children: pieData.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: d.fill }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { formatter: (v) => fmtINR(v) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, {})
      ] }) }) })
    ] })
  ] }) }) });
}
function Slider({
  label,
  suffix,
  min,
  max,
  step,
  value,
  onChange,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-baseline", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-medium", style: {
        color: "var(--color-ink-black)"
      }, children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-semibold", style: {
        color: "var(--color-electric-blue)"
      }, children: suffix })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", min, max, step, value, onChange: (e) => onChange(Number(e.target.value)), className: "w-full mt-2 accent-electric-blue" }),
    children
  ] });
}
function DarkStat({
  label,
  value,
  tone
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl p-3.5", style: {
    background: "rgba(255,255,255,0.06)"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.18em] opacity-60", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[16px] font-semibold", style: {
      color: tone === "ember" ? "var(--color-ember-orange)" : "var(--color-paper-white)"
    }, children: value })
  ] });
}
export {
  DebtEngine as component
};
