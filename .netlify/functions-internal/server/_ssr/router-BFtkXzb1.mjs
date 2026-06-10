import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { Q as notFound } from "../_libs/tanstack__router-core.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { P as Plus } from "../_libs/lucide-react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const appCss = "/assets/styles-C5F_AF27.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$e = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Stonkzz — India's Cleanest Daily Stock Market Report" },
      { name: "description", content: "NIFTY, FII/DII, global indices, commodities and AI news in one PDF on WhatsApp every morning before 8:00 AM IST. ₹149/month." },
      { name: "author", content: "Stonkzz" },
      { name: "theme-color", content: "#ffffff" },
      { property: "og:site_name", content: "Stonkzz" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@stonkz_daily" },
      { property: "og:title", content: "Stonkzz — India's Cleanest Daily Stock Market Report" },
      { name: "twitter:title", content: "Stonkzz — India's Cleanest Daily Stock Market Report" },
      { property: "og:description", content: "NIFTY, FII/DII, global indices, commodities and AI news in one PDF on WhatsApp every morning before 8:00 AM IST. ₹149/month." },
      { name: "twitter:description", content: "NIFTY, FII/DII, global indices, commodities and AI news in one PDF on WhatsApp every morning before 8:00 AM IST. ₹149/month." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/06f9af34-1daa-4f30-a482-77208f33dd1e/id-preview-66df1c4e--a7f67370-3d28-4cd1-8833-fb940eb9d8f8.lovable.app-1781096788544.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/06f9af34-1daa-4f30-a482-77208f33dd1e/id-preview-66df1c4e--a7f67370-3d28-4cd1-8833-fb940eb9d8f8.lovable.app-1781096788544.png" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Newsreader:ital,opsz,wght@1,16,500&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$e.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const Route$d = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths = [
          "/",
          "/pricing",
          "/report",
          "/about",
          "/faq",
          "/contact",
          "/legal/disclaimer",
          "/legal/refund-policy",
          "/legal/privacy-policy",
          "/legal/terms"
        ];
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((p) => `  <url><loc>${p}</loc><changefreq>weekly</changefreq></url>`).join("\n")}
</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" } });
      }
    }
  }
});
const $$splitComponentImporter$c = () => import("./report-BRD_migY.mjs");
const Route$c = createFileRoute("/report")({
  head: () => ({
    meta: [{
      title: "Sample Report — Stonkzz"
    }, {
      name: "description",
      content: "See the daily Stonkzz brief — Stonkzz Score, NIFTY 50 heatmap, FII/DII flows, global indices, commodities and AI news bullets."
    }, {
      property: "og:title",
      content: "Sample Report — Stonkzz"
    }, {
      property: "og:description",
      content: "A preview of the WhatsApp PDF that lands every trading morning before 8:00 AM IST."
    }, {
      property: "og:url",
      content: "/report"
    }],
    links: [{
      rel: "canonical",
      href: "/report"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./pricing-C-hVtfOO.mjs");
const Route$b = createFileRoute("/pricing")({
  head: () => ({
    meta: [{
      title: "Pricing — Stonkzz"
    }, {
      name: "description",
      content: "Stonkzz daily report plans: Monthly ₹149, Half-Yearly ₹499, Annual ₹999. No auto-renewal. 5-day money-back guarantee."
    }, {
      property: "og:title",
      content: "Pricing — Stonkzz"
    }, {
      property: "og:description",
      content: "Monthly ₹149, Half-Yearly ₹499, Annual ₹999. No auto-renewal. 5-day refund."
    }, {
      property: "og:url",
      content: "/pricing"
    }],
    links: [{
      rel: "canonical",
      href: "/pricing"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const ALL_FAQS = [
  { q: "What is Stonkzz, and who is it for?", a: "Stonkzz is a daily WhatsApp-delivered market brief for Indian retail traders and active investors who want NIFTY context, FII/DII flows, global indices, commodities and AI-summarized news in one consolidated PDF before the market opens." },
  { q: "What time do I receive the report?", a: "Every trading morning before 8:00 AM IST, straight to your WhatsApp number. No app to install, no inbox to refresh." },
  { q: "Do you give stock tips or buy/sell calls?", a: "No. Stonkzz is an information and intelligence layer — not a recommendation service. We are not a SEBI-registered investment advisor and we don't provide trade calls or portfolio advice." },
  { q: "How do I get on WhatsApp after subscribing?", a: "After payment confirmation we enroll your WhatsApp number manually within a few hours. Your first report lands the next trading morning." },
  { q: "Can I get a refund?", a: "Yes. We offer a no-questions-asked 5-day money-back window. If the brief isn't for you, message us and we'll refund the subscription." },
  { q: "Where do you source data from?", a: "NSE, BSE, RBI publications, FII/DII filings, commodity exchanges, global index feeds and select financial news outlets — 18+ sources blended into one consistent format." },
  { q: "How is Stonkzz different from other platforms?", a: "Most apps drown you in data. Stonkzz strips the morning down to what actually matters and ships it through the channel you already check first — WhatsApp." },
  { q: "Does the subscription auto-renew?", a: "No. Every plan ends on its term. You renew only when you choose to." }
];
function FAQ({ items = ALL_FAQS, withCta = false }) {
  const [open, setOpen] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-paper-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-page py-12 md:py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] uppercase tracking-[0.14em]", style: { color: "var(--color-steel)" }, children: "FAQ" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-heading", style: { color: "var(--color-ink-black)" }, children: "Questions, answered." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-[16px]", style: { color: "var(--color-steel)" }, children: [
        "Still curious? Reach out at ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "underline", href: "mailto:thestonkzz@gmail.com", children: "thestonkzz@gmail.com" }),
        "."
      ] }),
      withCta && /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/pricing", className: "btn-primary mt-6 inline-flex", children: "View plans →" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-8 divide-y", style: { borderColor: "var(--color-sand)" }, children: items.map((f, i) => {
      const isOpen = open === i;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-5", style: { borderTop: i === 0 ? "1px solid var(--color-sand)" : void 0, borderBottom: "1px solid var(--color-sand)" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setOpen(isOpen ? null : i),
            className: "w-full flex items-start justify-between gap-6 text-left",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[18px] md:text-[20px] font-semibold tracking-[-0.02em]", style: { color: "var(--color-ink-black)" }, children: f.q }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.span,
                {
                  animate: { rotate: isOpen ? 45 : 0 },
                  transition: { duration: 0.2 },
                  className: "shrink-0 h-9 w-9 rounded-full flex items-center justify-center",
                  style: { background: isOpen ? "var(--color-electric-blue)" : "var(--color-parchment)", color: isOpen ? "white" : "var(--color-ink-black)" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 18 })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { height: 0, opacity: 0 },
            animate: { height: "auto", opacity: 1 },
            exit: { height: 0, opacity: 0 },
            transition: { duration: 0.3, ease: "easeInOut" },
            className: "overflow-hidden",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-2xl text-[16px]", style: { color: "var(--color-steel)" }, children: f.a })
          }
        ) })
      ] }, i);
    }) })
  ] }) }) });
}
const $$splitComponentImporter$a = () => import("./faq-BP46pRGf.mjs");
const Route$a = createFileRoute("/faq")({
  head: () => ({
    meta: [{
      title: "FAQ — Stonkzz"
    }, {
      name: "description",
      content: "Answers about the Stonkzz daily WhatsApp report — delivery time, refund policy, data sources, SEBI status."
    }, {
      property: "og:title",
      content: "FAQ — Stonkzz"
    }, {
      property: "og:description",
      content: "Delivery, billing, technical and legal answers about the Stonkzz daily report."
    }, {
      property: "og:url",
      content: "/faq"
    }],
    links: [{
      rel: "canonical",
      href: "/faq"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: ALL_FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a
          }
        }))
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./contact-BtQnwhWj.mjs");
const Route$9 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — Stonkzz"
    }, {
      name: "description",
      content: "Reach the Stonkzz team. Email, phone, WhatsApp. Chennai, India."
    }, {
      property: "og:title",
      content: "Contact — Stonkzz"
    }, {
      property: "og:description",
      content: "Questions, feedback, support — get in touch."
    }, {
      property: "og:url",
      content: "/contact"
    }],
    links: [{
      rel: "canonical",
      href: "/contact"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./about-BhSJ7Rem.mjs");
const Route$8 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — Stonkzz"
    }, {
      name: "description",
      content: "Stonkzz is built from Chennai by a small team obsessed with one thing — making the Indian market readable in five minutes a day."
    }, {
      property: "og:title",
      content: "About — Stonkzz"
    }, {
      property: "og:description",
      content: "Why we built Stonkzz, and how the daily report comes together."
    }, {
      property: "og:url",
      content: "/about"
    }],
    links: [{
      rel: "canonical",
      href: "/about"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./index-D43zrA6N.mjs");
const Route$7 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Stonkzz — India's Cleanest Daily Stock Market Report"
    }, {
      name: "description",
      content: "Replace 8 morning tabs with one curated PDF on WhatsApp. NIFTY, FII/DII, global indices, commodities and AI news before 8:00 AM IST. From ₹149/month."
    }, {
      property: "og:title",
      content: "Stonkzz — India's Cleanest Daily Stock Market Report"
    }, {
      property: "og:description",
      content: "One WhatsApp PDF before market open. NIFTY, FII/DII, global indices, commodities and AI news. From ₹149/month."
    }, {
      property: "og:url",
      content: "/"
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./calculators.index-DFgWy4fw.mjs");
const Route$6 = createFileRoute("/calculators/")({
  head: () => ({
    meta: [{
      title: "Calculators — Stonkzz"
    }, {
      name: "description",
      content: "Free finance calculators: asset allocation, gold returns, SWP, loan EMI, and child legacy planning."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./legal._slug-BvXDtf-e.mjs");
const DOCS = {
  disclaimer: {
    title: "Disclaimer",
    updated: "Updated June 2026",
    body: `Stonkzz is not registered with SEBI as an investment advisor. The information provided in our daily reports and on this website is for educational and informational purposes only and does not constitute investment advice, a recommendation to buy or sell any security, or an offer to provide investment advisory services.

All trading and investment activities involve substantial risk of loss. Past market behavior is not indicative of future results. Any decisions you make based on information from Stonkzz are made at your own risk and you are solely responsible for those decisions.

Stonkzz aggregates publicly available market data from sources believed to be reliable, but we make no warranty as to the accuracy, completeness or timeliness of any information presented. You should consult a qualified, SEBI-registered financial advisor before making any investment decision.

By using this website or subscribing to the Stonkzz daily report, you acknowledge and accept these terms.`
  },
  "refund-policy": {
    title: "Refund Policy",
    updated: "Updated June 2026",
    body: `We offer a 5-day money-back guarantee on every Stonkzz plan.

If you are not satisfied with the daily report within 5 calendar days of your first successful delivery, simply email thestonkzz@gmail.com or WhatsApp +91 90255 69271 and we will refund the full subscription amount to your original payment method within 7 working days.

After the 5-day window, plans are non-refundable for the remaining term, but you may cancel auto-enrollment at any time (no Stonkzz plan auto-renews).

Refunds for partial periods after the guarantee window are not provided. There are no hidden fees or partial refunds beyond the conditions above.`
  },
  "privacy-policy": {
    title: "Privacy Policy",
    updated: "Updated June 2026",
    body: `We collect only what we need to deliver the daily report: your WhatsApp number, email address, name (optional) and payment metadata from our payment processor.

We do not sell your data. We do not share your personal information with advertisers or third parties for marketing purposes. Your contact details are used solely to deliver the daily report, send service updates and respond to support requests.

Payment processing is handled by reputed third-party gateways (Razorpay/UPI). Stonkzz does not store card or banking details.

You may request access to or deletion of your personal data at any time by emailing thestonkzz@gmail.com. We will action verified requests within 30 days as required by applicable Indian data protection law.

We use minimal first-party analytics to understand site usage. Cookies are limited to functional purposes; no cross-site advertising trackers are used.`
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

8. Governing law. These terms are governed by the laws of India. Disputes are subject to the exclusive jurisdiction of the courts of Chennai, Tamil Nadu.`
  }
};
const Route$5 = createFileRoute("/legal/$slug")({
  loader: ({
    params
  }) => {
    const doc = DOCS[params.slug];
    if (!doc) throw notFound();
    return doc;
  },
  head: ({
    loaderData
  }) => ({
    meta: [{
      title: `${loaderData?.title ?? "Legal"} — Stonkzz`
    }, {
      name: "description",
      content: `${loaderData?.title ?? "Legal"} for Stonkzz — India's daily WhatsApp market report.`
    }, {
      property: "og:title",
      content: `${loaderData?.title ?? "Legal"} — Stonkzz`
    }, {
      property: "og:url",
      content: `/legal`
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./calculators.swp-DDjLnpsn.mjs");
const Route$4 = createFileRoute("/calculators/swp")({
  head: () => ({
    meta: [{
      title: "SWP Calculator — Stonkzz"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./calculators.gold-returns-42mMvKmT.mjs");
const Route$3 = createFileRoute("/calculators/gold-returns")({
  head: () => ({
    meta: [{
      title: "Gold Returns Calculator — Stonkzz"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./calculators.debt-engine-PbOCXni_.mjs");
const Route$2 = createFileRoute("/calculators/debt-engine")({
  head: () => ({
    meta: [{
      title: "Debt Engine — EMI Calculator — Stonkzz"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./calculators.child-legacy-ZfzRoq4d.mjs");
const Route$1 = createFileRoute("/calculators/child-legacy")({
  head: () => ({
    meta: [{
      title: "Child Legacy Engine — Stonkzz"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./calculators.asset-allocation-CoxHZgMu.mjs");
const Route = createFileRoute("/calculators/asset-allocation")({
  head: () => ({
    meta: [{
      title: "Asset Allocation Calculator — Stonkzz"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SitemapDotxmlRoute = Route$d.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$e
});
const ReportRoute = Route$c.update({
  id: "/report",
  path: "/report",
  getParentRoute: () => Route$e
});
const PricingRoute = Route$b.update({
  id: "/pricing",
  path: "/pricing",
  getParentRoute: () => Route$e
});
const FaqRoute = Route$a.update({
  id: "/faq",
  path: "/faq",
  getParentRoute: () => Route$e
});
const ContactRoute = Route$9.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$e
});
const AboutRoute = Route$8.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$e
});
const IndexRoute = Route$7.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$e
});
const CalculatorsIndexRoute = Route$6.update({
  id: "/calculators/",
  path: "/calculators/",
  getParentRoute: () => Route$e
});
const LegalSlugRoute = Route$5.update({
  id: "/legal/$slug",
  path: "/legal/$slug",
  getParentRoute: () => Route$e
});
const CalculatorsSwpRoute = Route$4.update({
  id: "/calculators/swp",
  path: "/calculators/swp",
  getParentRoute: () => Route$e
});
const CalculatorsGoldReturnsRoute = Route$3.update({
  id: "/calculators/gold-returns",
  path: "/calculators/gold-returns",
  getParentRoute: () => Route$e
});
const CalculatorsDebtEngineRoute = Route$2.update({
  id: "/calculators/debt-engine",
  path: "/calculators/debt-engine",
  getParentRoute: () => Route$e
});
const CalculatorsChildLegacyRoute = Route$1.update({
  id: "/calculators/child-legacy",
  path: "/calculators/child-legacy",
  getParentRoute: () => Route$e
});
const CalculatorsAssetAllocationRoute = Route.update({
  id: "/calculators/asset-allocation",
  path: "/calculators/asset-allocation",
  getParentRoute: () => Route$e
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  FaqRoute,
  PricingRoute,
  ReportRoute,
  SitemapDotxmlRoute,
  CalculatorsAssetAllocationRoute,
  CalculatorsChildLegacyRoute,
  CalculatorsDebtEngineRoute,
  CalculatorsGoldReturnsRoute,
  CalculatorsSwpRoute,
  LegalSlugRoute,
  CalculatorsIndexRoute
};
const routeTree = Route$e._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  ALL_FAQS as A,
  FAQ as F,
  Route$5 as R,
  router as r
};
