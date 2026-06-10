import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteLayout } from "@/components/Layout";
import { CalcShell, Field, inputClass, inputStyle, StatCard, fmtINR, fmtINRShort } from "@/components/calc/CalcShell";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from "recharts";

export const Route = createFileRoute("/calculators/asset-allocation")({
  head: () => ({ meta: [{ title: "Asset Allocation Calculator — Stonkzz" }] }),
  component: AssetAllocation,
});

const PROFILES = {
  Conservative: { equity: 30, debt: 60, gold: 10, blended: 9 },
  Moderate:     { equity: 60, debt: 30, gold: 10, blended: 11.5 },
  Aggressive:   { equity: 80, debt: 10, gold: 10, blended: 14 },
} as const;
type Profile = keyof typeof PROFILES;

function AssetAllocation() {
  const [capital, setCapital] = useState(100000);
  const [years, setYears] = useState(10);
  const [profile, setProfile] = useState<Profile>("Moderate");

  const data = useMemo(() => {
    const rows: { year: number; Conservative: number; Moderate: number; Aggressive: number }[] = [];
    for (let y = 0; y <= years; y++) {
      rows.push({
        year: y,
        Conservative: capital * Math.pow(1 + PROFILES.Conservative.blended / 100, y),
        Moderate:     capital * Math.pow(1 + PROFILES.Moderate.blended / 100, y),
        Aggressive:   capital * Math.pow(1 + PROFILES.Aggressive.blended / 100, y),
      });
    }
    return rows;
  }, [capital, years]);

  const final = data[data.length - 1];
  const finalForProfile = final[profile];

  return (
    <SiteLayout>
      <CalcShell
        eyebrow="Calculator · Allocation"
        title={<>Asset <span className="italic-flourish" style={{ color: "var(--color-electric-blue)" }}>Allocation</span></>}
        subtitle="See how Conservative, Moderate & Aggressive allocations grow over time."
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Inputs */}
          <div className="lg:col-span-5 rounded-3xl p-7 bg-paper-white" style={{ border: "1px solid var(--color-sand)" }}>
            <h3 className="text-[18px] font-semibold mb-5" style={{ color: "var(--color-ink-black)" }}>Investment Details</h3>
            <div className="space-y-5">
              <Field label="Investment Capital (₹)" hint="Min ₹5,000 · Max ₹10Cr">
                <input type="number" className={inputClass} style={inputStyle}
                  value={capital} onChange={(e) => setCapital(Math.max(0, Number(e.target.value)))} />
              </Field>
              <Field label="Time Period (Years)" hint="Min 1 · Max 40">
                <input type="number" className={inputClass} style={inputStyle}
                  value={years} onChange={(e) => setYears(Math.min(40, Math.max(1, Number(e.target.value))))} />
              </Field>
              <div>
                <p className="text-[13px] font-medium mb-2" style={{ color: "var(--color-ink-black)" }}>Allocation Type</p>
                <div className="grid grid-cols-3 gap-2">
                  {(Object.keys(PROFILES) as Profile[]).map((p) => {
                    const active = p === profile;
                    return (
                      <button
                        key={p}
                        onClick={() => setProfile(p)}
                        className="rounded-xl p-3 text-left transition-colors"
                        style={{
                          border: `1px solid ${active ? "var(--color-electric-blue)" : "var(--color-sand)"}`,
                          background: active ? "var(--color-electric-blue-soft)" : "transparent",
                        }}
                      >
                        <p className="text-[13px] font-semibold" style={{ color: "var(--color-ink-black)" }}>{p}</p>
                        <p className="text-[11px] mt-0.5" style={{ color: "var(--color-steel)" }}>
                          {PROFILES[p].equity}/{PROFILES[p].debt}/{PROFILES[p].gold}
                        </p>
                      </button>
                    );
                  })}
                </div>
                <p className="mt-2 text-[11px]" style={{ color: "var(--color-ash)" }}>Equity / Debt / Gold split</p>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-7 space-y-5">
            <div className="grid grid-cols-3 gap-3">
              <StatCard label={`${profile} corpus`} value={fmtINRShort(finalForProfile)} accent="var(--color-electric-blue)" />
              <StatCard label="Invested" value={fmtINRShort(capital)} />
              <StatCard label="Gain" value={fmtINRShort(finalForProfile - capital)} accent="var(--color-ember-orange)" />
            </div>
            <div className="rounded-3xl p-5 bg-paper-white" style={{ border: "1px solid var(--color-sand)" }}>
              <p className="text-[14px] font-semibold mb-3" style={{ color: "var(--color-ink-black)" }}>Growth Curve</p>
              <div style={{ width: "100%", height: 320 }}>
                <ResponsiveContainer>
                  <LineChart data={data} margin={{ top: 10, right: 16, bottom: 0, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e1dfd8" />
                    <XAxis dataKey="year" tick={{ fill: "#6e6e6e", fontSize: 12 }} />
                    <YAxis tickFormatter={(v) => fmtINRShort(v)} tick={{ fill: "#6e6e6e", fontSize: 12 }} width={70} />
                    <Tooltip formatter={(v: number) => fmtINR(v)} labelFormatter={(l) => `Year ${l}`} />
                    <Legend />
                    <Line type="monotone" dataKey="Conservative" stroke="#6e6e6e" strokeWidth={2} dot={false} />
                    <Line type="monotone" dataKey="Moderate" stroke="#5196fe" strokeWidth={2.5} dot={false} />
                    <Line type="monotone" dataKey="Aggressive" stroke="#f9754e" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </CalcShell>
    </SiteLayout>
  );
}
