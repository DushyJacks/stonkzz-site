import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteLayout } from "./Layout-CCezRhq2.mjs";
import { C as CalcShell, F as Field, i as inputStyle, a as inputClass, S as StatCard, f as fmtINRShort, b as fmtINR } from "./CalcShell-CucAHxPb.mjs";
import { R as ResponsiveContainer, e as LineChart, C as CartesianGrid, X as XAxis, Y as YAxis, T as Tooltip, L as Legend, f as Line } from "../_libs/recharts.mjs";
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
const PROFILES = {
  Conservative: {
    equity: 30,
    debt: 60,
    gold: 10,
    blended: 9
  },
  Moderate: {
    equity: 60,
    debt: 30,
    gold: 10,
    blended: 11.5
  },
  Aggressive: {
    equity: 80,
    debt: 10,
    gold: 10,
    blended: 14
  }
};
function AssetAllocation() {
  const [capital, setCapital] = reactExports.useState(1e5);
  const [years, setYears] = reactExports.useState(10);
  const [profile, setProfile] = reactExports.useState("Moderate");
  const data = reactExports.useMemo(() => {
    const rows = [];
    for (let y = 0; y <= years; y++) {
      rows.push({
        year: y,
        Conservative: capital * Math.pow(1 + PROFILES.Conservative.blended / 100, y),
        Moderate: capital * Math.pow(1 + PROFILES.Moderate.blended / 100, y),
        Aggressive: capital * Math.pow(1 + PROFILES.Aggressive.blended / 100, y)
      });
    }
    return rows;
  }, [capital, years]);
  const final = data[data.length - 1];
  const finalForProfile = final[profile];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CalcShell, { eyebrow: "Calculator · Allocation", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    "Asset ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic-flourish", style: {
      color: "var(--color-electric-blue)"
    }, children: "Allocation" })
  ] }), subtitle: "See how Conservative, Moderate & Aggressive allocations grow over time.", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 rounded-3xl p-7 bg-paper-white", style: {
      border: "1px solid var(--color-sand)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[18px] font-semibold mb-5", style: {
        color: "var(--color-ink-black)"
      }, children: "Investment Details" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Investment Capital (₹)", hint: "Min ₹5,000 · Max ₹10Cr", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", className: inputClass, style: inputStyle, value: capital, onChange: (e) => setCapital(Math.max(0, Number(e.target.value))) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Time Period (Years)", hint: "Min 1 · Max 40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", className: inputClass, style: inputStyle, value: years, onChange: (e) => setYears(Math.min(40, Math.max(1, Number(e.target.value)))) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium mb-2", style: {
            color: "var(--color-ink-black)"
          }, children: "Allocation Type" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: Object.keys(PROFILES).map((p) => {
            const active = p === profile;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setProfile(p), className: "rounded-xl p-3 text-left transition-colors", style: {
              border: `1px solid ${active ? "var(--color-electric-blue)" : "var(--color-sand)"}`,
              background: active ? "var(--color-electric-blue-soft)" : "transparent"
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-semibold", style: {
                color: "var(--color-ink-black)"
              }, children: p }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] mt-0.5", style: {
                color: "var(--color-steel)"
              }, children: [
                PROFILES[p].equity,
                "/",
                PROFILES[p].debt,
                "/",
                PROFILES[p].gold
              ] })
            ] }, p);
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[11px]", style: {
            color: "var(--color-ash)"
          }, children: "Equity / Debt / Gold split" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: `${profile} corpus`, value: fmtINRShort(finalForProfile), accent: "var(--color-electric-blue)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Invested", value: fmtINRShort(capital) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Gain", value: fmtINRShort(finalForProfile - capital), accent: "var(--color-ember-orange)" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl p-5 bg-paper-white", style: {
        border: "1px solid var(--color-sand)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] font-semibold mb-3", style: {
          color: "var(--color-ink-black)"
        }, children: "Growth Curve" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          width: "100%",
          height: 320
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(LineChart, { data, margin: {
          top: 10,
          right: 16,
          bottom: 0,
          left: 0
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "#e1dfd8" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "year", tick: {
            fill: "#6e6e6e",
            fontSize: 12
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { tickFormatter: (v) => fmtINRShort(v), tick: {
            fill: "#6e6e6e",
            fontSize: 12
          }, width: 70 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { formatter: (v) => fmtINR(v), labelFormatter: (l) => `Year ${l}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Line, { type: "monotone", dataKey: "Conservative", stroke: "#6e6e6e", strokeWidth: 2, dot: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Line, { type: "monotone", dataKey: "Moderate", stroke: "#5196fe", strokeWidth: 2.5, dot: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Line, { type: "monotone", dataKey: "Aggressive", stroke: "#f9754e", strokeWidth: 2, dot: false })
        ] }) }) })
      ] })
    ] })
  ] }) }) });
}
export {
  AssetAllocation as component
};
