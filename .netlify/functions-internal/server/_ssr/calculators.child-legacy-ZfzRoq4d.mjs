import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteLayout } from "./Layout-CCezRhq2.mjs";
import { C as CalcShell, F as Field, i as inputStyle, a as inputClass, f as fmtINRShort, b as fmtINR } from "./CalcShell-CucAHxPb.mjs";
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
const RATES = {
  PPF: 7.1,
  SSY: 8.2,
  SIP: 13
};
function ChildLegacy() {
  const [age, setAge] = reactExports.useState(0);
  const [target, setTarget] = reactExports.useState(21);
  const [monthly, setMonthly] = reactExports.useState(1e4);
  const [inflation, setInflation] = reactExports.useState(false);
  const data = reactExports.useMemo(() => {
    const years = Math.max(1, target - age);
    const invested = monthly * 12 * years;
    const inflBoost = inflation ? 1.06 : 1;
    const rows = [];
    const accumulate = (rate) => {
      let bal = 0;
      const r = rate / 100 / 12;
      const out = [];
      for (let y = 1; y <= years; y++) {
        for (let m = 0; m < 12; m++) bal = bal * (1 + r) + monthly;
        out.push(bal / inflBoost);
      }
      return out;
    };
    const ppf = accumulate(RATES.PPF);
    const ssy = accumulate(RATES.SSY);
    const sip = accumulate(RATES.SIP);
    for (let y = 1; y <= years; y++) {
      rows.push({
        age: age + y,
        PPF: Math.round(ppf[y - 1]),
        SSY: Math.round(ssy[y - 1]),
        SIP: Math.round(sip[y - 1])
      });
    }
    return {
      rows,
      invested,
      final: rows[rows.length - 1]
    };
  }, [age, target, monthly, inflation]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CalcShell, { eyebrow: "Calculator · Legacy", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    "Child ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic-flourish", style: {
      color: "var(--color-electric-blue)"
    }, children: "Legacy" })
  ] }), subtitle: "Head-to-head: PPF vs SSY vs SIP. See exactly how much corpus your child gets when they turn the target age.", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-4 rounded-3xl p-7 bg-paper-white", style: {
      border: "1px solid var(--color-sand)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[18px] font-semibold mb-5", style: {
        color: "var(--color-ink-black)"
      }, children: "Plan Inputs" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Child's Current Age", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", className: inputClass, style: inputStyle, value: age, onChange: (e) => setAge(Math.min(20, Math.max(0, Number(e.target.value)))) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Target Age (Corpus Release)", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", className: inputClass, style: inputStyle, value: target, onChange: (e) => setTarget(Math.min(25, Math.max(age + 1, Number(e.target.value)))) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Monthly Investment (₹)", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", className: inputClass, style: inputStyle, value: monthly, onChange: (e) => setMonthly(Math.max(500, Number(e.target.value))) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center justify-between rounded-xl p-3", style: {
          background: "var(--color-parchment)"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-medium", style: {
            color: "var(--color-ink-black)"
          }, children: "Adjust for educational inflation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setInflation((v) => !v), className: "h-6 w-11 rounded-full transition-colors relative", style: {
            background: inflation ? "var(--color-electric-blue)" : "#cfcec8"
          }, "aria-pressed": inflation, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-0.5 h-5 w-5 rounded-full bg-white transition-all", style: {
            left: inflation ? "22px" : "2px"
          } }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl p-3 text-[12px]", style: {
          background: "#f7faff",
          color: "var(--color-steel)"
        }, children: [
          "Rates used · PPF ",
          RATES.PPF,
          "% · SSY ",
          RATES.SSY,
          "% · SIP ",
          RATES.SIP,
          "%"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-8 space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3", children: ["PPF", "SSY", "SIP"].map((k) => {
        const v = data.final?.[k] ?? 0;
        const best = k === "SIP";
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl p-5", style: {
          background: "var(--color-paper-white)",
          border: `1px solid ${best ? "var(--color-electric-blue)" : "var(--color-sand)"}`,
          boxShadow: best ? "0 0 0 4px var(--color-electric-blue-soft)" : "none"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] uppercase tracking-[0.16em]", style: {
              color: "var(--color-ash)"
            }, children: k }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-semibold px-2 py-0.5 rounded-full", style: {
              background: "var(--color-parchment)",
              color: "var(--color-steel)"
            }, children: [
              RATES[k],
              "%"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[24px] font-semibold", style: {
            color: best ? "var(--color-electric-blue)" : "var(--color-ink-black)",
            letterSpacing: "-0.02em"
          }, children: fmtINRShort(v) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] mt-1", style: {
            color: "var(--color-ash)"
          }, children: [
            "Invested: ",
            fmtINRShort(data.invested)
          ] })
        ] }, k);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl p-5 bg-paper-white", style: {
        border: "1px solid var(--color-sand)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] font-semibold mb-3", style: {
          color: "var(--color-ink-black)"
        }, children: "Wealth Gap Over Time" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          width: "100%",
          height: 340
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data: data.rows, margin: {
          top: 10,
          right: 16,
          bottom: 10,
          left: 0
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "#e1dfd8" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "age", tick: {
            fill: "#6e6e6e",
            fontSize: 11
          }, label: {
            value: "Child's Age",
            position: "insideBottom",
            offset: -2,
            fill: "#a3a3a3",
            fontSize: 11
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { tickFormatter: (v) => fmtINRShort(v), tick: {
            fill: "#6e6e6e",
            fontSize: 11
          }, width: 70 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { formatter: (v) => fmtINR(v), labelFormatter: (l) => `Age ${l}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "PPF", fill: "#5196fe", radius: [4, 4, 0, 0] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "SSY", fill: "#a78bfa", radius: [4, 4, 0, 0] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "SIP", fill: "#10b981", radius: [4, 4, 0, 0] })
        ] }) }) })
      ] })
    ] })
  ] }) }) });
}
export {
  ChildLegacy as component
};
