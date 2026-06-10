import { createFileRoute, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/Layout";

type Doc = { title: string; updated: string; body: string };

const DOCS: Record<string, Doc> = {
  disclaimer: {
    title: "Disclaimer",
    updated: "Updated June 2026",
    body: `Stonkzz is not registered with SEBI as an investment advisor. The information provided in our daily reports and on this website is for educational and informational purposes only and does not constitute investment advice, a recommendation to buy or sell any security, or an offer to provide investment advisory services.

All trading and investment activities involve substantial risk of loss. Past market behavior is not indicative of future results. Any decisions you make based on information from Stonkzz are made at your own risk and you are solely responsible for those decisions.

Stonkzz aggregates publicly available market data from sources believed to be reliable, but we make no warranty as to the accuracy, completeness or timeliness of any information presented. You should consult a qualified, SEBI-registered financial advisor before making any investment decision.

By using this website or subscribing to the Stonkzz daily report, you acknowledge and accept these terms.`,
  },
  "refund-policy": {
    title: "Refund Policy",
    updated: "Updated June 2026",
    body: `We offer a 5-day money-back guarantee on every Stonkzz plan.

If you are not satisfied with the daily report within 5 calendar days of your first successful delivery, simply email thestonkzz@gmail.com or WhatsApp +91 90255 69271 and we will refund the full subscription amount to your original payment method within 7 working days.

After the 5-day window, plans are non-refundable for the remaining term, but you may cancel auto-enrollment at any time (no Stonkzz plan auto-renews).

Refunds for partial periods after the guarantee window are not provided. There are no hidden fees or partial refunds beyond the conditions above.`,
  },
  "privacy-policy": {
    title: "Privacy Policy",
    updated: "Updated June 2026",
    body: `We collect only what we need to deliver the daily report: your WhatsApp number, email address, name (optional) and payment metadata from our payment processor.

We do not sell your data. We do not share your personal information with advertisers or third parties for marketing purposes. Your contact details are used solely to deliver the daily report, send service updates and respond to support requests.

Payment processing is handled by reputed third-party gateways (Razorpay/UPI). Stonkzz does not store card or banking details.

You may request access to or deletion of your personal data at any time by emailing thestonkzz@gmail.com. We will action verified requests within 30 days as required by applicable Indian data protection law.

We use minimal first-party analytics to understand site usage. Cookies are limited to functional purposes; no cross-site advertising trackers are used.`,
  },
  terms: {
    title: "Terms of Service",
    updated: "Updated June 2026",
    body: `By subscribing to Stonkzz or using www.stonkzz.com, you agree to these terms.

1. Service. Stonkzz delivers a daily market-intelligence PDF via WhatsApp on Indian trading days, typically before 8:00 AM IST. Delivery on a particular day is not guaranteed and may be delayed or skipped due to public holidays, technical issues or events outside our control.

2. Eligibility. You must be 18 years or older and capable of entering into a binding contract under Indian law to subscribe.

3. Subscription & Payment. Plans are pre-paid for a fixed term (Monthly, Half-Yearly, Annual). No subscription auto-renews. You are responsible for renewing manually if you wish to continue.

4. Refunds. See the Refund Policy.

5. Use of content. The daily report and all content are provided for your personal, non-commercial use. Redistribution, resale or unauthorized sharing of the report is prohibited.

6. No advice. Stonkzz is not a SEBI-registered investment advisor. See the Disclaimer.

7. Limitation of liability. To the maximum extent permitted by Indian law, Stonkzz is not liable for any direct, indirect, incidental or consequential damages arising from use of the service.

8. Governing law. These terms are governed by the laws of India. Disputes are subject to the exclusive jurisdiction of the courts of Chennai, Tamil Nadu.`,
  },
};

export const Route = createFileRoute("/legal/$slug")({
  loader: ({ params }) => {
    const doc = DOCS[params.slug];
    if (!doc) throw notFound();
    return doc;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Legal"} — Stonkzz` },
      { name: "description", content: `${loaderData?.title ?? "Legal"} for Stonkzz — India's daily WhatsApp market report.` },
      { property: "og:title", content: `${loaderData?.title ?? "Legal"} — Stonkzz` },
      { property: "og:url", content: `/legal` },
    ],
  }),
  component: LegalPage,
});

function LegalPage() {
  const doc = Route.useLoaderData();
  return (
    <SiteLayout>
      <article className="bg-paper-white">
        <div className="container-page py-20 md:py-24 max-w-[760px]">
          <p className="text-[14px] uppercase tracking-[0.14em]" style={{ color: "var(--color-steel)" }}>Legal · {doc.updated}</p>
          <h1 className="mt-3 text-heading" style={{ color: "var(--color-ink-black)" }}>{doc.title}</h1>
          <div className="mt-10 space-y-5 text-[17px] leading-[1.65]" style={{ color: "var(--color-ink-black)" }}>
            {doc.body.split("\n\n").map((p: string, i: number) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </article>
    </SiteLayout>
  );
}
