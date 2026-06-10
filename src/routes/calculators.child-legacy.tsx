import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteLayout } from "@/components/Layout";
import { CalcShell, Field, inputClass, inputStyle, fmtINR, fmtINRShort } from "@/components/calc/CalcShell";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from "recharts";

export const Route = createFileRoute("/calculators/child-legacy")({
  head: () => ({ meta: [{ title: "Child Legacy Engine — Stonkzz" }] }),
  component: ChildLegacy,
});

const RATES = { PPF: 7.1, SSY: 8.2, SIP: 13 };

function ChildLegacy() {
  const [age, setAge] = useState(0);
  const [target, setTarget] = useState(21);
  const [monthly, setMonthly] = useState(10000);
  const [inflation, setInflation] = useState(false);

  const data = useMemo(() => {
    const years = Math.max(1, target - age);
    const invested = monthly * 12 * years;
    const inflBoost = inflation ? 1.06 : 1; // 6% education inflation drag
    const rows: { age: number; PPF: number; SSY: number; SIP: number }[] = [];

    const accumulate = (rate: number) => {
      let bal = 0;
      const r = rate / 100 / 12;
      const out: number[] = [];
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
      rows.push({ age: age + y, PPF: Math.round(ppf[y - 1]), SSY: Math.round(ssy[y - 1]), SIP: Math.round(sip[y - 1]) });
    }
    return { rows, invested, final: rows[rows.length - 1] };
  }, [age, target, monthly, inflation]);

  return (
    <SiteLayout>
      <CalcShell
        eyebrow="Calculator · Legacy"
        title={<>Child <span className="italic-flourish" style={{ color: "var(--color-electric-blue)" }}>Legacy</span></>}
        subtitle="Head-to-head: PPF vs SSY vs SIP. See exactly how much corpus your child gets when they turn the target age."
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4 rounded-3xl p-7 bg-paper-white" style={{ border: "1px solid var(--color-sand)" }}>
            <h3 className="text-[18px] font-semibold mb-5" style={{ color: "var(--color-ink-black)" }}>Plan Inputs</h3>
            <div className="space-y-5">
              <Field label="Child's Current Age">
                <input type="number" className={inputClass} style={inputStyle} value={age}
                  onChange={(e) => setAge(Math.min(20, Math.max(0, Number(e.target.value))))} />
              </Field>
              <Field label="Target Age (Corpus Release)">
                <input type="number" className={inputClass} style={inputStyle} value={target}
                  onChange={(e) => setTarget(Math.min(25, Math.max(age + 1, Number(e.target.value))))} />
              </Field>
              <Field label="Monthly Investment (₹)">
                <input type="number" className={inputClass} style={inputStyle} value={monthly}
                  onChange={(e) => setMonthly(Math.max(500, Number(e.target.value)))} />
              </Field>
              <label className="flex items-center justify-between rounded-xl p-3" style={{ background: "var(--color-parchment)" }}>
                <span className="text-[13px] font-medium" style={{ color: "var(--color-ink-black)" }}>Adjust for educational inflation</span>
                <button
                  type="button"
                  onClick={() => setInflation((v) => !v)}
                  className="h-6 w-11 rounded-full transition-colors relative"
                  style={{ background: inflation ? "var(--color-electric-blue)" : "#cfcec8" }}
                  aria-pressed={inflation}
                >
                  <span
                    className="absolute top-0.5 h-5 w-5 rounded-full bg-white transition-all"
                    style={{ left: inflation ? "22px" : "2px" }}
                  />
                </button>
              </label>
              <div className="rounded-xl p-3 text-[12px]" style={{ background: "#f7faff", color: "var(--color-steel)" }}>
                Rates used · PPF {RATES.PPF}% · SSY {RATES.SSY}% · SIP {RATES.SIP}%
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-5">
            <div className="grid grid-cols-3 gap-3">
              {(["PPF", "SSY", "SIP"] as const).map((k) => {
                const v = data.final?.[k] ?? 0;
                const best = k === "SIP";
                return (
                  <div key={k} className="rounded-2xl p-5"
                    style={{
                      background: "var(--color-paper-white)",
                      border: `1px solid ${best ? "var(--color-electric-blue)" : "var(--color-sand)"}`,
                      boxShadow: best ? "0 0 0 4px var(--color-electric-blue-soft)" : "none",
                    }}>
                    <div className="flex justify-between items-center">
                      <p className="text-[12px] uppercase tracking-[0.16em]" style={{ color: "var(--color-ash)" }}>{k}</p>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ background: "var(--color-parchment)", color: "var(--color-steel)" }}>
                        {RATES[k]}%
                      </span>
                    </div>
                    <p className="mt-2 text-[24px] font-semibold" style={{ color: best ? "var(--color-electric-blue)" : "var(--color-ink-black)", letterSpacing: "-0.02em" }}>
                      {fmtINRShort(v)}
                    </p>
                    <p className="text-[11px] mt-1" style={{ color: "var(--color-ash)" }}>Invested: {fmtINRShort(data.invested)}</p>
                  </div>
                );
              })}
            </div>
            <div className="rounded-3xl p-5 bg-paper-white" style={{ border: "1px solid var(--color-sand)" }}>
              <p className="text-[14px] font-semibold mb-3" style={{ color: "var(--color-ink-black)" }}>Wealth Gap Over Time</p>
              <div style={{ width: "100%", height: 340 }}>
                <ResponsiveContainer>
                  <BarChart data={data.rows} margin={{ top: 10, right: 16, bottom: 10, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e1dfd8" />
                    <XAxis dataKey="age" tick={{ fill: "#6e6e6e", fontSize: 11 }}
                      label={{ value: "Child's Age", position: "insideBottom", offset: -2, fill: "#a3a3a3", fontSize: 11 }} />
                    <YAxis tickFormatter={(v) => fmtINRShort(v)} tick={{ fill: "#6e6e6e", fontSize: 11 }} width={70} />
                    <Tooltip formatter={(v: number) => fmtINR(v)} labelFormatter={(l) => `Age ${l}`} />
                    <Legend />
                    <Bar dataKey="PPF" fill="#5196fe" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="SSY" fill="#a78bfa" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="SIP" fill="#10b981" radius={[4, 4, 0, 0]} />
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
