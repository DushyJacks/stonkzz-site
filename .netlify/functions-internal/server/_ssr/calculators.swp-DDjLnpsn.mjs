import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteLayout } from "./Layout-CCezRhq2.mjs";
import { C as CalcShell, F as Field, i as inputStyle, a as inputClass, S as StatCard, f as fmtINRShort, b as fmtINR } from "./CalcShell-CucAHxPb.mjs";
import { R as ResponsiveContainer, A as AreaChart, C as CartesianGrid, X as XAxis, Y as YAxis, T as Tooltip, a as Area } from "../_libs/recharts.mjs";
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
function SWPCalc() {
  const [corpus, setCorpus] = reactExports.useState(5e6);
  const [annualReturn, setAnnualReturn] = reactExports.useState(8);
  const [monthly, setMonthly] = reactExports.useState(3e4);
  const [years, setYears] = reactExports.useState(20);
  const {
    rows,
    totals
  } = reactExports.useMemo(() => {
    const months = years * 12;
    const r = annualReturn / 100 / 12;
    let balance = corpus;
    let totalWithdrawn = 0;
    const rows2 = [{
      m: 0,
      balance: corpus
    }];
    for (let m = 1; m <= months; m++) {
      balance = balance * (1 + r) - monthly;
      totalWithdrawn += monthly;
      if (balance < 0) balance = 0;
      rows2.push({
        m,
        balance
      });
      if (balance === 0) break;
    }
    return {
      rows: rows2,
      totals: {
        invested: corpus,
        withdrawn: totalWithdrawn,
        final: balance,
        lastsMonths: rows2[rows2.length - 1].m
      }
    };
  }, [corpus, annualReturn, monthly, years]);
  const sustains = totals.lastsMonths >= years * 12 && totals.final > 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CalcShell, { eyebrow: "Calculator · SWP", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    "SWP ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic-flourish", style: {
      color: "var(--color-electric-blue)"
    }, children: "Calculator" })
  ] }), subtitle: "Plan your Systematic Withdrawal Plan — see how long your corpus lasts and how much you can withdraw each month.", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-4 rounded-3xl p-7 bg-paper-white", style: {
      border: "1px solid var(--color-sand)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[18px] font-semibold mb-5", style: {
        color: "var(--color-ink-black)"
      }, children: "Inputs" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Total Investment Amount (₹)", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", className: inputClass, style: inputStyle, value: corpus, onChange: (e) => setCorpus(Math.max(0, Number(e.target.value))) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Expected Annual Return (%)", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", step: "0.1", className: inputClass, style: inputStyle, value: annualReturn, onChange: (e) => setAnnualReturn(Math.max(0, Number(e.target.value))) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Monthly Withdrawal (₹)", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", className: inputClass, style: inputStyle, value: monthly, onChange: (e) => setMonthly(Math.max(0, Number(e.target.value))) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Investment Duration (Years)", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", className: inputClass, style: inputStyle, value: years, onChange: (e) => setYears(Math.max(1, Number(e.target.value))) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-8 space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Total Invested", value: fmtINRShort(totals.invested) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Total Withdrawn", value: fmtINRShort(totals.withdrawn), accent: "var(--color-ember-orange)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Final Corpus", value: fmtINRShort(totals.final), accent: sustains ? "var(--color-electric-blue)" : "#dc2626" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl p-5 bg-paper-white", style: {
        border: "1px solid var(--color-sand)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] font-semibold", style: {
            color: "var(--color-ink-black)"
          }, children: "Corpus Over Time" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] px-2.5 py-1 rounded-full font-medium", style: {
            background: sustains ? "#dcfce7" : "#fee2e2",
            color: sustains ? "#16a34a" : "#dc2626"
          }, children: sustains ? "Sustains full duration" : `Depletes in ${Math.floor(totals.lastsMonths / 12)}y ${totals.lastsMonths % 12}m` })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          width: "100%",
          height: 320
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AreaChart, { data: rows, margin: {
          top: 10,
          right: 16,
          bottom: 0,
          left: 0
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "swpFill", x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#f9754e", stopOpacity: 0.4 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#f9754e", stopOpacity: 0 })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "#e1dfd8" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "m", tick: {
            fill: "#6e6e6e",
            fontSize: 12
          }, label: {
            value: "Months",
            position: "insideBottom",
            offset: -2,
            fill: "#a3a3a3",
            fontSize: 11
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { tickFormatter: (v) => fmtINRShort(v), tick: {
            fill: "#6e6e6e",
            fontSize: 12
          }, width: 70 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { formatter: (v) => fmtINR(v), labelFormatter: (l) => `Month ${l}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Area, { type: "monotone", dataKey: "balance", stroke: "#f9754e", strokeWidth: 2.5, fill: "url(#swpFill)" })
        ] }) }) })
      ] })
    ] })
  ] }) }) });
}
export {
  SWPCalc as component
};
