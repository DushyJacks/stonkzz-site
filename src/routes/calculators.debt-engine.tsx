import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteLayout } from "@/components/Layout";
import { CalcShell, Field, inputClass, inputStyle, StatCard, fmtINR, fmtINRShort } from "@/components/calc/CalcShell";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

export const Route = createFileRoute("/calculators/debt-engine")({
  head: () => ({ meta: [{ title: "Debt Engine — EMI Calculator — Stonkzz" }] }),
  component: DebtEngine,
});

function DebtEngine() {
  const [loan, setLoan] = useState(500000);
  const [rate, setRate] = useState(8.5);
  const [years, setYears] = useState(20);

  const { emi, totalPaid, interest } = useMemo(() => {
    const n = years * 12;
    const r = rate / 100 / 12;
    const emi = r === 0 ? loan / n : (loan * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPaid = emi * n;
    return { emi, totalPaid, interest: totalPaid - loan };
  }, [loan, rate, years]);

  const pieData = [
    { name: "Principal", value: loan, fill: "#a3a3a3" },
    { name: "Interest", value: interest, fill: "#f9754e" },
  ];

  return (
    <SiteLayout>
      <CalcShell
        eyebrow="Calculator · Debt"
        title={<>Debt <span className="italic-flourish" style={{ color: "var(--color-ember-orange)" }}>Engine</span></>}
        subtitle="Calculate your true interest cost and build your escape plan."
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 rounded-3xl p-7 bg-paper-white" style={{ border: "1px solid var(--color-sand)" }}>
            <h3 className="text-[18px] font-semibold mb-5" style={{ color: "var(--color-ink-black)" }}>Your Loan</h3>
            <div className="space-y-6">
              <Slider label="Loan Amount" suffix={fmtINRShort(loan)} min={50000} max={50000000} step={10000} value={loan} onChange={setLoan}>
                <input type="number" className={inputClass + " mt-3"} style={inputStyle} value={loan} onChange={(e) => setLoan(Math.max(0, Number(e.target.value)))} />
              </Slider>
              <Slider label="Interest Rate" suffix={`${rate.toFixed(2)}%`} min={1} max={24} step={0.1} value={rate} onChange={setRate}>
                <input type="number" step="0.1" className={inputClass + " mt-3"} style={inputStyle} value={rate} onChange={(e) => setRate(Math.max(0, Number(e.target.value)))} />
              </Slider>
              <Slider label="Tenure" suffix={`${years} years`} min={1} max={30} step={1} value={years} onChange={setYears}>
                <input type="number" className={inputClass + " mt-3"} style={inputStyle} value={years} onChange={(e) => setYears(Math.max(1, Number(e.target.value)))} />
              </Slider>
            </div>
          </div>

          <div className="lg:col-span-7 rounded-3xl p-7" style={{ background: "linear-gradient(180deg,#1b1d20,#101828)", color: "var(--color-paper-white)" }}>
            <p className="text-[12px] uppercase tracking-[0.18em] opacity-70">Monthly EMI</p>
            <p className="mt-2 text-[44px] md:text-[56px] font-semibold leading-none" style={{ letterSpacing: "-0.03em" }}>
              {fmtINR(emi)}
            </p>
            <div className="mt-7 grid grid-cols-3 gap-3">
              <DarkStat label="Principal" value={fmtINRShort(loan)} tone="muted" />
              <DarkStat label="Interest" value={fmtINRShort(interest)} tone="ember" />
              <DarkStat label="Total Paid" value={fmtINRShort(totalPaid)} tone="muted" />
            </div>
            <div style={{ width: "100%", height: 240 }} className="mt-6">
              <ResponsiveContainer>
                <PieChart>
                  <Pie data={pieData} dataKey="value" innerRadius={60} outerRadius={95} paddingAngle={2}>
                    {pieData.map((d, i) => <Cell key={i} fill={d.fill} />)}
                  </Pie>
                  <Tooltip formatter={(v: number) => fmtINR(v)} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </CalcShell>
    </SiteLayout>
  );
}

function Slider({
  label, suffix, min, max, step, value, onChange, children,
}: {
  label: string; suffix: string; min: number; max: number; step: number; value: number;
  onChange: (n: number) => void; children?: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex justify-between items-baseline">
        <span className="text-[13px] font-medium" style={{ color: "var(--color-ink-black)" }}>{label}</span>
        <span className="text-[13px] font-semibold" style={{ color: "var(--color-electric-blue)" }}>{suffix}</span>
      </div>
      <input
        type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full mt-2 accent-electric-blue"
      />
      {children}
    </div>
  );
}

function DarkStat({ label, value, tone }: { label: string; value: string; tone: "muted" | "ember" }) {
  return (
    <div className="rounded-2xl p-3.5" style={{ background: "rgba(255,255,255,0.06)" }}>
      <p className="text-[10px] uppercase tracking-[0.18em] opacity-60">{label}</p>
      <p className="mt-1 text-[16px] font-semibold" style={{ color: tone === "ember" ? "var(--color-ember-orange)" : "var(--color-paper-white)" }}>
        {value}
      </p>
    </div>
  );
}
