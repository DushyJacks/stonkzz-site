import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteLayout } from "@/components/Layout";
import { CalcShell, Field, inputClass, inputStyle, StatCard, fmtINR, fmtINRShort } from "@/components/calc/CalcShell";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

export const Route = createFileRoute("/calculators/swp")({
  head: () => ({ meta: [{ title: "SWP Calculator — Stonkzz" }] }),
  component: SWPCalc,
});

function SWPCalc() {
  const [corpus, setCorpus] = useState(5000000);
  const [annualReturn, setAnnualReturn] = useState(8);
  const [monthly, setMonthly] = useState(30000);
  const [years, setYears] = useState(20);

  const { rows, totals } = useMemo(() => {
    const months = years * 12;
    const r = annualReturn / 100 / 12;
    let balance = corpus;
    let totalWithdrawn = 0;
    const rows: { m: number; balance: number }[] = [{ m: 0, balance: corpus }];
    for (let m = 1; m <= months; m++) {
      balance = balance * (1 + r) - monthly;
      totalWithdrawn += monthly;
      if (balance < 0) balance = 0;
      rows.push({ m, balance });
      if (balance === 0) break;
    }
    return {
      rows,
      totals: { invested: corpus, withdrawn: totalWithdrawn, final: balance, lastsMonths: rows[rows.length - 1].m },
    };
  }, [corpus, annualReturn, monthly, years]);

  const sustains = totals.lastsMonths >= years * 12 && totals.final > 0;

  return (
    <SiteLayout>
      <CalcShell
        eyebrow="Calculator · SWP"
        title={<>SWP <span className="italic-flourish" style={{ color: "var(--color-electric-blue)" }}>Calculator</span></>}
        subtitle="Plan your Systematic Withdrawal Plan — see how long your corpus lasts and how much you can withdraw each month."
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4 rounded-3xl p-7 bg-paper-white" style={{ border: "1px solid var(--color-sand)" }}>
            <h3 className="text-[18px] font-semibold mb-5" style={{ color: "var(--color-ink-black)" }}>Inputs</h3>
            <div className="space-y-5">
              <Field label="Total Investment Amount (₹)">
                <input type="number" className={inputClass} style={inputStyle}
                  value={corpus} onChange={(e) => setCorpus(Math.max(0, Number(e.target.value)))} />
              </Field>
              <Field label="Expected Annual Return (%)">
                <input type="number" step="0.1" className={inputClass} style={inputStyle}
                  value={annualReturn} onChange={(e) => setAnnualReturn(Math.max(0, Number(e.target.value)))} />
              </Field>
              <Field label="Monthly Withdrawal (₹)">
                <input type="number" className={inputClass} style={inputStyle}
                  value={monthly} onChange={(e) => setMonthly(Math.max(0, Number(e.target.value)))} />
              </Field>
              <Field label="Investment Duration (Years)">
                <input type="number" className={inputClass} style={inputStyle}
                  value={years} onChange={(e) => setYears(Math.max(1, Number(e.target.value)))} />
              </Field>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-5">
            <div className="grid grid-cols-3 gap-3">
              <StatCard label="Total Invested" value={fmtINRShort(totals.invested)} />
              <StatCard label="Total Withdrawn" value={fmtINRShort(totals.withdrawn)} accent="var(--color-ember-orange)" />
              <StatCard label="Final Corpus" value={fmtINRShort(totals.final)} accent={sustains ? "var(--color-electric-blue)" : "#dc2626"} />
            </div>
            <div className="rounded-3xl p-5 bg-paper-white" style={{ border: "1px solid var(--color-sand)" }}>
              <div className="flex items-center justify-between mb-3">
                <p className="text-[14px] font-semibold" style={{ color: "var(--color-ink-black)" }}>Corpus Over Time</p>
                <span
                  className="text-[11px] px-2.5 py-1 rounded-full font-medium"
                  style={{
                    background: sustains ? "#dcfce7" : "#fee2e2",
                    color: sustains ? "#16a34a" : "#dc2626",
                  }}
                >
                  {sustains ? "Sustains full duration" : `Depletes in ${Math.floor(totals.lastsMonths / 12)}y ${totals.lastsMonths % 12}m`}
                </span>
              </div>
              <div style={{ width: "100%", height: 320 }}>
                <ResponsiveContainer>
                  <AreaChart data={rows} margin={{ top: 10, right: 16, bottom: 0, left: 0 }}>
                    <defs>
                      <linearGradient id="swpFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#f9754e" stopOpacity={0.4} />
                        <stop offset="100%" stopColor="#f9754e" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e1dfd8" />
                    <XAxis dataKey="m" tick={{ fill: "#6e6e6e", fontSize: 12 }}
                      label={{ value: "Months", position: "insideBottom", offset: -2, fill: "#a3a3a3", fontSize: 11 }} />
                    <YAxis tickFormatter={(v) => fmtINRShort(v)} tick={{ fill: "#6e6e6e", fontSize: 12 }} width={70} />
                    <Tooltip formatter={(v: number) => fmtINR(v)} labelFormatter={(l) => `Month ${l}`} />
                    <Area type="monotone" dataKey="balance" stroke="#f9754e" strokeWidth={2.5} fill="url(#swpFill)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </CalcShell>
    </SiteLayout>
  );
}
