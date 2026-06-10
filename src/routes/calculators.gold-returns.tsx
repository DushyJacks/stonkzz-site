import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteLayout } from "@/components/Layout";
import { CalcShell, Field, inputClass, inputStyle, StatCard, fmtINR, fmtINRShort } from "@/components/calc/CalcShell";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from "recharts";

export const Route = createFileRoute("/calculators/gold-returns")({
  head: () => ({ meta: [{ title: "Gold Returns Calculator — Stonkzz" }] }),
  component: GoldReturns,
});

// Effective drag on returns due to fees / making charges / spread
const DRAG = { Physical: 2.5, Digital: 0.5, ETF: 0.45 } as const;

function GoldReturns() {
  const [capital, setCapital] = useState(100000);
  const [ret, setRet] = useState(10);
  const [years, setYears] = useState(10);

  const result = useMemo(() => {
    return (Object.keys(DRAG) as (keyof typeof DRAG)[]).map((k) => {
      const eff = ret - DRAG[k];
      const fv = capital * Math.pow(1 + eff / 100, years);
      return { name: k, value: Math.round(fv), gain: Math.round(fv - capital), eff };
    });
  }, [capital, ret, years]);

  return (
    <SiteLayout>
      <CalcShell
        eyebrow="Calculator · Gold"
        title={<>Gold <span className="italic-flourish" style={{ color: "var(--color-electric-blue)" }}>Returns</span></>}
        subtitle="Compare Physical, Digital & ETF gold returns with fees built-in."
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 rounded-3xl p-7 bg-paper-white" style={{ border: "1px solid var(--color-sand)" }}>
            <h3 className="text-[18px] font-semibold mb-5" style={{ color: "var(--color-ink-black)" }}>Investment Details</h3>
            <div className="space-y-5">
              <Field label="Investment Capital (₹)" hint="Min ₹10,000 · Max ₹1Cr">
                <input type="number" className={inputClass} style={inputStyle}
                  value={capital} onChange={(e) => setCapital(Math.max(0, Number(e.target.value)))} />
              </Field>
              <Field label="Expected Returns (% p.a.)" hint="Min 1% · Max 30%">
                <input type="number" step="0.1" className={inputClass} style={inputStyle}
                  value={ret} onChange={(e) => setRet(Math.min(30, Math.max(0, Number(e.target.value))))} />
              </Field>
              <Field label="Time Period (Years)" hint="Min 1 · Max 40">
                <input type="number" className={inputClass} style={inputStyle}
                  value={years} onChange={(e) => setYears(Math.min(40, Math.max(1, Number(e.target.value))))} />
              </Field>
            </div>
            <div className="mt-6 rounded-2xl p-4 text-[12px] leading-[1.55]" style={{ background: "var(--color-parchment)", color: "var(--color-steel)" }}>
              Fee drag applied: Physical −2.5% (making/storage), Digital −0.5% (spread), ETF −0.45% (expense ratio).
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <div className="grid grid-cols-3 gap-3">
              {result.map((r) => (
                <StatCard
                  key={r.name}
                  label={r.name}
                  value={fmtINRShort(r.value)}
                  accent={r.name === "ETF" ? "var(--color-electric-blue)" : "var(--color-ink-black)"}
                />
              ))}
            </div>
            <div className="rounded-3xl p-5 bg-paper-white" style={{ border: "1px solid var(--color-sand)" }}>
              <p className="text-[14px] font-semibold mb-3" style={{ color: "var(--color-ink-black)" }}>Final corpus comparison</p>
              <div style={{ width: "100%", height: 320 }}>
                <ResponsiveContainer>
                  <BarChart data={result} margin={{ top: 10, right: 16, bottom: 0, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e1dfd8" />
                    <XAxis dataKey="name" tick={{ fill: "#6e6e6e", fontSize: 12 }} />
                    <YAxis tickFormatter={(v) => fmtINRShort(v)} tick={{ fill: "#6e6e6e", fontSize: 12 }} width={70} />
                    <Tooltip formatter={(v: number) => fmtINR(v)} />
                    <Legend />
                    <Bar dataKey="value" name="Final Value" fill="#5196fe" radius={[8, 8, 0, 0]} />
                    <Bar dataKey="gain" name="Net Gain" fill="#f9754e" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </CalcShell>
    </SiteLayout>
  );
}
