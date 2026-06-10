import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteLayout } from "./Layout-CCezRhq2.mjs";
import { C as CalcShell, F as Field, i as inputStyle, a as inputClass, S as StatCard, f as fmtINRShort, b as fmtINR } from "./CalcShell-CucAHxPb.mjs";
import { R as ResponsiveContainer, B as BarChart, C as CartesianGrid, X as XAxis, Y as YAxis, T as Tooltip, L as Legend, b as Bar } from "../_libs/recharts.mjs";
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
const DRAG = {
  Physical: 2.5,
  Digital: 0.5,
  ETF: 0.45
};
function GoldReturns() {
  const [capital, setCapital] = reactExports.useState(1e5);
  const [ret, setRet] = reactExports.useState(10);
  const [years, setYears] = reactExports.useState(10);
  const result = reactExports.useMemo(() => {
    return Object.keys(DRAG).map((k) => {
      const eff = ret - DRAG[k];
      const fv = capital * Math.pow(1 + eff / 100, years);
      return {
        name: k,
        value: Math.round(fv),
        gain: Math.round(fv - capital),
        eff
      };
    });
  }, [capital, ret, years]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CalcShell, { eyebrow: "Calculator · Gold", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    "Gold ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic-flourish", style: {
      color: "var(--color-electric-blue)"
    }, children: "Returns" })
  ] }), subtitle: "Compare Physical, Digital & ETF gold returns with fees built-in.", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 rounded-3xl p-7 bg-paper-white", style: {
      border: "1px solid var(--color-sand)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[18px] font-semibold mb-5", style: {
        color: "var(--color-ink-black)"
      }, children: "Investment Details" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Investment Capital (₹)", hint: "Min ₹10,000 · Max ₹1Cr", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", className: inputClass, style: inputStyle, value: capital, onChange: (e) => setCapital(Math.max(0, Number(e.target.value))) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Expected Returns (% p.a.)", hint: "Min 1% · Max 30%", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", step: "0.1", className: inputClass, style: inputStyle, value: ret, onChange: (e) => setRet(Math.min(30, Math.max(0, Number(e.target.value)))) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Time Period (Years)", hint: "Min 1 · Max 40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", className: inputClass, style: inputStyle, value: years, onChange: (e) => setYears(Math.min(40, Math.max(1, Number(e.target.value)))) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 rounded-2xl p-4 text-[12px] leading-[1.55]", style: {
        background: "var(--color-parchment)",
        color: "var(--color-steel)"
      }, children: "Fee drag applied: Physical −2.5% (making/storage), Digital −0.5% (spread), ETF −0.45% (expense ratio)." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3", children: result.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: r.name, value: fmtINRShort(r.value), accent: r.name === "ETF" ? "var(--color-electric-blue)" : "var(--color-ink-black)" }, r.name)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl p-5 bg-paper-white", style: {
        border: "1px solid var(--color-sand)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] font-semibold mb-3", style: {
          color: "var(--color-ink-black)"
        }, children: "Final corpus comparison" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          width: "100%",
          height: 320
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data: result, margin: {
          top: 10,
          right: 16,
          bottom: 0,
          left: 0
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "#e1dfd8" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "name", tick: {
            fill: "#6e6e6e",
            fontSize: 12
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { tickFormatter: (v) => fmtINRShort(v), tick: {
            fill: "#6e6e6e",
            fontSize: 12
          }, width: 70 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { formatter: (v) => fmtINR(v) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "value", name: "Final Value", fill: "#5196fe", radius: [8, 8, 0, 0] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "gain", name: "Net Gain", fill: "#f9754e", radius: [8, 8, 0, 0] })
        ] }) }) })
      ] })
    ] })
  ] }) }) });
}
export {
  GoldReturns as component
};
