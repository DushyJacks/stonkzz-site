import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { S as SiteLayout, W as WA_DEFAULT } from "./Layout-CCezRhq2.mjs";
import { P as Pricing } from "./Pricing-BmVJy2RO.mjs";
import { R as Root, I as Image, F as Fallback } from "../_libs/radix-ui__react-avatar.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { u as useEmblaCarousel } from "../_libs/embla-carousel-react.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { F as FAQ, A as ALL_FAQS } from "./router-BFtkXzb1.mjs";
import { F as FinalCTA } from "./FinalCTA-CzfoBG8j.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useReducedMotion, m as motion, a as useInView } from "../_libs/framer-motion.mjs";
import { C as Check, d as CreditCard, e as Smartphone, f as Sunrise, G as Gauge, g as LayoutGrid, B as Building2, E as Earth, N as Newspaper, h as ChartLine, A as ArrowUpRight, i as ChartPie, j as Coins, T as TrendingDown, L as Lock, k as Baby, l as ArrowLeft, m as ArrowRight, n as Star } from "../_libs/lucide-react.mjs";
import "../_libs/lenis.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/@radix-ui/react-use-is-hydrated+[...].mjs";
import "../_libs/embla-carousel-reactive-utils.mjs";
import "../_libs/embla-carousel.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function Hero() {
  const reduce = useReducedMotion();
  const fade = (delay = 0) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 16 },
    animate: reduce ? { opacity: 1 } : { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -top-40 inset-x-0 overflow-hidden -z-20", style: { height: "calc(100vh + 128px)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 -z-10",
          style: {
            backgroundImage: "url('/images/hero/Hero BG 2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          "aria-hidden": true,
          className: "absolute inset-x-0 bottom-0 -z-10 h-[40%] pointer-events-none",
          style: {
            background: "linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 1) 100%)"
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-page relative h-screen flex flex-col items-center justify-start pt-20 md:pt-24 pb-16 md:pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col items-center justify-center text-center px-4 md:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.h1,
        {
          ...fade(0.05),
          className: "text-display max-w-3xl",
          style: { color: "var(--color-ink-black)" },
          children: [
            "Your morning market ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", { className: "hidden sm:block" }),
            "breakdown before ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic-flourish", style: { color: "var(--color-paper-white)" }, children: "8 AM." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          ...fade(0.18),
          className: "mx-auto mt-6 max-w-xl text-[18px] leading-[1.5]",
          style: { color: "var(--color-ink-black)" },
          children: "Every morning, one PDF lands in your WhatsApp inbox. NIFTY moves, FII/DII shifts, global overnight action, commodities, and the AI news that actually moves markets. Built for people who check their portfolio before their emails."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { ...fade(0.28), className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: WA_DEFAULT,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-medium text-paper-white transition-transform hover:scale-[1.03]",
          style: { backgroundColor: "var(--color-ink-black)" },
          children: "Try it now"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          ...fade(0.36),
          className: "mt-4 text-[13px]",
          style: { color: "var(--color-ink-black)" },
          children: "₹149/month · 5-day money-back · Cancel anytime"
        }
      )
    ] }) })
  ] });
}
function Counter({ to, suffix = "", prefix = "", duration = 1.5 }) {
  const ref = reactExports.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [val, setVal] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const step = (t) => {
      const p = Math.min(1, (t - start) / (duration * 1e3));
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, children: [
    prefix,
    val.toLocaleString("en-IN"),
    suffix
  ] });
}
const STATS = [
  { value: /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { to: 100, suffix: "K+" }) }), caption: "YouTube community" },
  { value: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    "8:00 AM ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--color-steel)", fontSize: "0.6em", marginLeft: 4 } })
  ] }), caption: "Daily delivery" },
  { value: /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { to: 18, suffix: "+" }) }), caption: "Data sources aggregated" },
  { value: /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: "₹149" }), caption: "Starting monthly plan" }
];
function StatRow() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { style: { backgroundColor: "var(--color-white)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-page py-12 md:py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-100px" },
      transition: { duration: 0.5, ease: "easeOut" },
      className: "grid grid-cols-2 md:grid-cols-4 gap-y-10 md:divide-x md:divide-sand",
      children: STATS.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-2 md:px-8 text-center md:text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "text-[40px] md:text-[56px] font-bold",
            style: { color: "var(--color-ink-black)", letterSpacing: "-0.06em", lineHeight: 1.05 },
            children: s.value
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[14px]", style: { color: "var(--color-steel)" }, children: s.caption })
      ] }, i))
    }
  ) }) });
}
function ProblemSolution() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { style: { backgroundColor: "var(--color-paper-white)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-16 md:py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-4xl mx-auto mb-16 md:mb-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: "text-[12px] md:text-[14px] uppercase tracking-[0.2em] font-medium mb-6",
          style: { color: "var(--color-steel)" },
          children: "The morning ritual, rewritten"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.h2,
        {
          className: "text-[40px] md:text-[60px] lg:text-[72px] font-semibold leading-[1.05] tracking-tight mb-8",
          style: { color: "var(--color-ink-black)" },
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          children: [
            "Stop opening ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", { className: "hidden md:block" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "italic font-serif pr-2",
                style: { color: "var(--color-ember-orange)", fontFamily: "Georgia, Cambria, serif" },
                children: "eight tabs"
              }
            ),
            "every morning."
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: "text-[18px] md:text-[22px] max-w-2xl mx-auto leading-relaxed",
          style: { color: "var(--color-steel)" },
          children: "We sweep through every source a serious trader checks before the bell — and hand you one calm brief instead."
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "relative rounded-[32px] md:rounded-[48px] p-8 md:p-14 overflow-hidden",
          style: { backgroundColor: "var(--color-parchment)", border: "1px solid var(--color-sand)" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-[-15%] top-[5%] w-[80%] sm:w-[70%] flex flex-col gap-4 opacity-40 md:opacity-60 pointer-events-none transform -rotate-[4deg] scale-[1.15]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-sand p-4 rounded-2xl shadow-sm text-[13px] font-medium blur-[2px] translate-x-12", style: { color: "var(--color-steel)" }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--color-ember-orange)" }, children: "ALERT:" }),
                " NIFTY options OI shifts rapidly..."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white border border-sand p-4 rounded-2xl shadow-sm text-[13px] font-medium blur-[1px] translate-x-6", style: { color: "var(--color-steel)" }, children: "FIIs sell ₹2000cr in cash market" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white border border-sand p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] text-[15px] font-semibold -ml-4 z-10", style: { color: "var(--color-ink-black)" }, children: "RBI maintains status quo on repo rate" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white border border-sand p-4 rounded-2xl shadow-sm text-[13px] font-medium blur-[1px] translate-x-2", style: { color: "var(--color-steel)" }, children: "Dow Jones futures plunge 300 points" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white border border-sand p-4 rounded-2xl shadow-sm text-[13px] font-medium blur-[2px] translate-x-8", style: { color: "var(--color-steel)" }, children: "Crude oil prices soar amid tensions..." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white border border-sand p-4 rounded-2xl shadow-sm text-[13px] font-medium blur-[3px] translate-x-14", style: { color: "var(--color-steel)" }, children: "Gold hits new all-time high..." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 h-full flex flex-col justify-between min-h-[360px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[200px] md:max-w-[260px]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-[12px] uppercase tracking-[0.2em] font-semibold mb-4",
                    style: { color: "var(--color-ember-orange)" },
                    children: "7:00 AM"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h3",
                  {
                    className: "text-[32px] md:text-[42px] font-semibold leading-tight tracking-tight",
                    style: { color: "var(--color-ink-black)" },
                    children: "The endless scrolling."
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 mt-16 md:mt-24", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full", style: { backgroundColor: "var(--color-ember-orange)" } }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "text-[18px] font-medium line-through decoration-2",
                      style: { color: "var(--color-steel)", textDecorationColor: "var(--color-ember-orange)" },
                      children: "45 minutes lost"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full", style: { backgroundColor: "var(--color-ember-orange)" } }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "text-[18px] font-medium line-through decoration-2",
                      style: { color: "var(--color-steel)", textDecorationColor: "var(--color-ember-orange)" },
                      children: "8+ tabs open"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full", style: { backgroundColor: "var(--color-ember-orange)" } }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "text-[18px] font-medium line-through decoration-2",
                      style: { color: "var(--color-steel)", textDecorationColor: "var(--color-ember-orange)" },
                      children: "Information overload"
                    }
                  )
                ] })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: 0.1 },
          className: "relative rounded-[32px] md:rounded-[48px] p-8 md:p-14 overflow-hidden",
          style: { backgroundColor: "var(--color-ink-black)" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute top-0 right-0 w-64 h-64 opacity-20 blur-[100px] rounded-full mix-blend-screen transform translate-x-1/2 -translate-y-1/2",
                style: { backgroundColor: "var(--color-electric-blue)" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 h-full flex flex-col justify-between min-h-[360px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-[12px] uppercase tracking-[0.2em] font-semibold mb-4",
                    style: { color: "var(--color-electric-blue)" },
                    children: "8:00 AM"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "h3",
                  {
                    className: "text-[32px] md:text-[42px] font-semibold leading-tight tracking-tight max-w-sm",
                    style: { color: "var(--color-paper-white)" },
                    children: [
                      "One ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic font-serif", style: { color: "var(--color-electric-blue)", fontFamily: "Georgia, Cambria, serif" }, children: "calm" }),
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                      " message."
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "backdrop-blur-md rounded-2xl p-6 mt-12",
                  style: { backgroundColor: "rgba(255, 255, 255, 0.08)", border: "1px solid rgba(255, 255, 255, 0.12)" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-1",
                        style: { backgroundColor: "var(--color-electric-blue)" },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { color: "var(--color-paper-white)", className: "w-5 h-5" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "text-[18px] font-medium mb-1",
                          style: { color: "var(--color-paper-white)" },
                          children: "Ready to trade"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "text-[15px] leading-relaxed",
                          style: { color: "rgba(255, 255, 255, 0.6)" },
                          children: "A beautifully formatted PDF covering market sentiment, NIFTY 50 heatmaps, and FII flows. Read it in 2 minutes."
                        }
                      )
                    ] })
                  ] })
                }
              )
            ] })
          ]
        }
      )
    ] })
  ] }) });
}
const FEATURES = [
  {
    Icon: Gauge,
    title: "Market Sentiment",
    body: "A single score tells you whether institutions are buying or dumping. Ranges from strongly bearish to strongly bullish. The one number that matters.",
    accent: "blue"
  },
  {
    Icon: LayoutGrid,
    title: "Sector Breakdown",
    body: "Which sectors outran the index yesterday? Banks leading or IT dragging? Scan this in 10 seconds instead of pulling up five different tabs.",
    accent: "orange"
  },
  {
    Icon: Building2,
    title: "Institutional Money",
    body: "FII and DII numbers come in at 3:30 PM. We pull them apart and show you: are institutions adding or exiting? That flow matters more than most news.",
    accent: "blue"
  },
  {
    Icon: Earth,
    title: "Overnight Global",
    body: "Dow closed down 2%? Nikkei surged? You need global context before the Indian market opens, not after.",
    accent: "orange"
  },
  {
    Icon: Newspaper,
    title: "News That Moves Things",
    body: "RBI rate decisions. Banking bailouts. IT contract wins. We skip the fluff and flag what actually moves your portfolio.",
    accent: "blue"
  },
  {
    Icon: ChartLine,
    title: "Options Interest",
    body: "Call/Put OI tells you where traders are placing bets. Support and resistance zones emerge from derivatives data.",
    accent: "orange"
  }
];
function accentColor(accent) {
  return accent === "blue" ? "var(--color-electric-blue)" : "var(--color-ember-orange)";
}
function accentBg(accent) {
  return accent === "blue" ? "var(--color-electric-blue-soft)" : "#fef0ec";
}
function Features() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { style: { backgroundColor: "var(--color-paper-white)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-12 md:py-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-60px" },
        transition: { duration: 0.6 },
        className: "relative mb-16 md:mb-24 w-full rounded-[32px] overflow-hidden",
        style: {
          boxShadow: "0 20px 60px -15px rgba(0,0,0,0.15)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "/images/Banner.jpg",
              alt: "Stonkzz Banner",
              className: "w-full object-cover",
              style: {
                aspectRatio: "21 / 6",
                // Matches the wide aspect ratio of the uploaded image
                minHeight: "280px"
                // Ensure it doesn't get too thin on mobile
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center text-center p-6 sm:p-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-white text-[24px] sm:text-[32px] md:text-[42px] lg:text-[48px] font-semibold tracking-[-0.03em] leading-[1.15]", children: [
              "The stock market wasn't built for ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", { className: "hidden sm:block" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-transparent bg-clip-text",
                  style: {
                    backgroundImage: "linear-gradient(90deg, #5196fe 0%, #5196fe 100%)"
                  },
                  children: "everyday investors."
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "mt-1 sm:mt-2 text-white text-[28px] sm:text-[36px] md:text-[46px] lg:text-[54px] font-serif italic tracking-[-0.04em] font-bold",
                style: {
                  fontFamily: "Georgia, Cambria, 'Times New Roman', Times, serif"
                },
                children: "Stonkzz is."
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row gap-12 lg:gap-24 items-start relative mt-8 md:mt-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:sticky lg:top-32 lg:w-5/12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-80px" },
          transition: { duration: 0.5 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] uppercase tracking-[0.22em] mb-4 font-semibold", style: { color: "var(--color-ember-orange)" }, children: "What's inside" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-[36px] md:text-[48px] lg:text-[56px] font-semibold leading-[1.05] tracking-tight mb-6", style: { color: "var(--color-ink-black)" }, children: [
              "Everything you need. ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic font-serif", style: { color: "var(--color-steel)", fontFamily: "Georgia, Cambria, serif" }, children: "Nothing you don't." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[18px] md:text-[20px] leading-relaxed max-w-md", style: { color: "var(--color-steel)" }, children: "Six pillars power every morning brief. Each one designed to replace a tab you used to open." })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:w-7/12 w-full mt-6 lg:mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { borderTop: "1px solid var(--color-sand)", borderBottom: "1px solid var(--color-sand)" }, children: FEATURES.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-60px" },
          transition: { duration: 0.5, delay: i * 0.05 },
          className: "group flex flex-col md:flex-row md:items-start py-8 md:py-12 cursor-default",
          style: { borderBottom: i !== FEATURES.length - 1 ? "1px solid var(--color-sand)" : "none" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:w-5/12 mb-4 md:mb-0 pr-6 shrink-0 flex items-start gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: "text-[12px] font-medium uppercase tracking-[0.2em] mt-1.5 shrink-0",
                  style: { color: "var(--color-ash)" },
                  children: [
                    "0",
                    i + 1
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h3",
                {
                  className: "text-[20px] md:text-[24px] font-semibold tracking-tight transition-colors duration-300",
                  style: { color: "var(--color-ink-black)" },
                  children: f.title
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:w-7/12 flex flex-col items-start relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-10 h-10 rounded-full flex items-center justify-center mb-4 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-12",
                  style: { backgroundColor: accentBg(f.accent), color: accentColor(f.accent) },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(f.Icon, { size: 18, strokeWidth: 2.5 })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-[16px] md:text-[17px] leading-relaxed",
                  style: { color: "var(--color-steel)" },
                  children: f.body
                }
              )
            ] })
          ]
        },
        f.title
      )) }) })
    ] })
  ] }) });
}
const ANNOTATIONS = [
  { num: "01", title: "Stonkzz Score", body: "One AI-blended sentiment number. From Strongly Bearish to Strongly Bullish." },
  { num: "02", title: "NIFTY 50 heatmap", body: "Sector-level breadth at a glance — winners, losers, the leaders pulling the index." },
  { num: "03", title: "FII / DII flows", body: "Yesterday's institutional footprint, in crores. Are they buying or unwinding?" },
  { num: "04", title: "Global indices + commodities", body: "Dow, Nasdaq, S&P, Nikkei, Hang Seng, Gold, Silver, Crude — context before NSE opens." },
  { num: "05", title: "AI news bullets", body: "RBI, banking, IT, auto. Condensed. No filler." }
];
function ReportPreview() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-paper-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-12 md:py-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.5 },
        className: "max-w-3xl",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] uppercase tracking-[0.14em]", style: { color: "var(--color-steel)" }, children: "See it" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-heading", style: { color: "var(--color-ink-black)" }, children: "See what lands in your WhatsApp." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-[20px]", style: { color: "var(--color-steel)", letterSpacing: "-0.023em" }, children: "Every morning. Every trading day." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: "/images/Box.jpg",
          alt: "Stonkzz Report Preview Box",
          className: "w-full max-w-md rounded-[32px] md:rounded-[48px] shadow-xl object-cover"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "space-y-5", children: ANNOTATIONS.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.li,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-60px" },
            transition: { duration: 0.4, delay: i * 0.08 },
            className: "flex gap-5 p-5 rounded-[20px]",
            style: { background: "var(--color-parchment)" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "shrink-0 h-10 w-10 rounded-full flex items-center justify-center text-[13px] font-semibold",
                  style: { background: "var(--color-paper-white)", color: "var(--color-electric-blue)", border: "1px solid var(--color-sand)" },
                  children: a.num
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[18px] font-semibold tracking-[-0.02em]", style: { color: "var(--color-ink-black)" }, children: a.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[15px]", style: { color: "var(--color-steel)" }, children: a.body })
              ] })
            ]
          },
          a.num
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: WA_DEFAULT, target: "_blank", rel: "noopener noreferrer", className: "btn-primary", children: "Get today's report →" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/pricing", className: "btn-ghost", children: "View plans" })
        ] })
      ] })
    ] })
  ] }) });
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const avatarVariants = cva(
  "relative flex shrink-0 overflow-hidden rounded-full",
  {
    variants: {
      size: {
        sm: "h-8 w-8",
        default: "h-10 w-10",
        lg: "h-12 w-12",
        xl: "h-16 w-16"
      }
    },
    defaultVariants: {
      size: "default"
    }
  }
);
const Avatar = reactExports.forwardRef(({ className, size, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Root,
  {
    ref,
    className: cn(avatarVariants({ size }), className),
    ...props
  }
));
Avatar.displayName = Root.displayName;
const AvatarImage = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Image,
  {
    ref,
    className: cn("aspect-square h-full w-full", className),
    ...props
  }
));
AvatarImage.displayName = Image.displayName;
const AvatarFallback = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Fallback,
  {
    ref,
    className: cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    ),
    ...props
  }
));
AvatarFallback.displayName = Fallback.displayName;
const Card = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      className: cn("rounded-xl border bg-card text-card-foreground shadow", className),
      ...props
    }
  )
);
Card.displayName = "Card";
const CardHeader = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("flex flex-col space-y-1.5 p-6", className), ...props })
);
CardHeader.displayName = "CardHeader";
const CardTitle = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      className: cn("font-semibold leading-none tracking-tight", className),
      ...props
    }
  )
);
CardTitle.displayName = "CardTitle";
const CardDescription = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("text-sm text-muted-foreground", className), ...props })
);
CardDescription.displayName = "CardDescription";
const CardContent = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("p-6 pt-0", className), ...props })
);
CardContent.displayName = "CardContent";
const CardFooter = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("flex items-center p-6 pt-0", className), ...props })
);
CardFooter.displayName = "CardFooter";
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const CarouselContext = reactExports.createContext(null);
function useCarousel() {
  const context = reactExports.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
const Carousel = reactExports.forwardRef(({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y"
    },
    plugins
  );
  const [canScrollPrev, setCanScrollPrev] = reactExports.useState(false);
  const [canScrollNext, setCanScrollNext] = reactExports.useState(false);
  const onSelect = reactExports.useCallback((api2) => {
    if (!api2) {
      return;
    }
    setCanScrollPrev(api2.canScrollPrev());
    setCanScrollNext(api2.canScrollNext());
  }, []);
  const scrollPrev = reactExports.useCallback(() => {
    api?.scrollPrev();
  }, [api]);
  const scrollNext = reactExports.useCallback(() => {
    api?.scrollNext();
  }, [api]);
  const handleKeyDown = reactExports.useCallback(
    (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );
  reactExports.useEffect(() => {
    if (!api || !setApi) {
      return;
    }
    setApi(api);
  }, [api, setApi]);
  reactExports.useEffect(() => {
    if (!api) {
      return;
    }
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CarouselContext.Provider,
    {
      value: {
        carouselRef,
        api,
        opts,
        orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          ref,
          onKeyDownCapture: handleKeyDown,
          className: cn("relative", className),
          role: "region",
          "aria-roledescription": "carousel",
          ...props,
          children
        }
      )
    }
  );
});
Carousel.displayName = "Carousel";
const CarouselContent = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: carouselRef, className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref,
        className: cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        ),
        ...props
      }
    ) });
  }
);
CarouselContent.displayName = "CarouselContent";
const CarouselItem = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel();
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref,
        role: "group",
        "aria-roledescription": "slide",
        className: cn(
          "min-w-0 shrink-0 grow-0 basis-full",
          orientation === "horizontal" ? "pl-4" : "pt-4",
          className
        ),
        ...props
      }
    );
  }
);
CarouselItem.displayName = "CarouselItem";
const CarouselPrevious = reactExports.forwardRef(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        ref,
        variant,
        size,
        className: cn(
          "absolute  h-8 w-8 rounded-full",
          orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        ),
        disabled: !canScrollPrev,
        onClick: scrollPrev,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Previous slide" })
        ]
      }
    );
  }
);
CarouselPrevious.displayName = "CarouselPrevious";
const CarouselNext = reactExports.forwardRef(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        ref,
        variant,
        size,
        className: cn(
          "absolute h-8 w-8 rounded-full",
          orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        ),
        disabled: !canScrollNext,
        onClick: scrollNext,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Next slide" })
        ]
      }
    );
  }
);
CarouselNext.displayName = "CarouselNext";
const ratingVariants = cva("transition-colors", {
  variants: {
    variant: {
      default: "text-foreground fill-current",
      destructive: "text-destructive fill-current",
      outline: "text-muted-foreground fill-transparent stroke-current",
      secondary: "text-muted-foreground fill-current",
      yellow: "fill-current text-amber-600 dark:text-amber-400"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
const RATING_DEFAULTS = {
  precision: 1,
  maxStars: 5,
  size: 20,
  variant: "default",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, {})
};
function RatingItem({
  size,
  variant = "default",
  value,
  point,
  hoveredValue,
  name,
  readOnly = false,
  disabled = false,
  precision,
  Icon,
  onMouseLeave,
  onValueChange,
  onValueHover,
  className,
  ...props
}) {
  const Comp = readOnly ? "span" : "label";
  const id = reactExports.useId();
  const ratingIconId = `rating-icon-${id}`;
  const isInteractive = !readOnly && !disabled;
  const partialPoint = point % 1;
  const isPartialPoint = partialPoint !== 0;
  const shouldShowFilled = (hoveredValue || value) >= point;
  const partialPointWidth = isPartialPoint && shouldShowFilled ? `${partialPoint * 100}%` : void 0;
  const icons = reactExports.useMemo(() => {
    const emptyIcon = reactExports.cloneElement(Icon, {
      size,
      className: cn(
        "fill-muted-foreground/20 stroke-muted-foreground/10 text-muted-foreground/10",
        variant === "yellow" && "fill-amber-600/30 stroke-amber-600/10 text-amber-600/10 dark:fill-amber-400/30 dark:stroke-amber-400/10"
      ),
      "aria-hidden": "true"
    });
    const fullIcon = reactExports.cloneElement(Icon, {
      size,
      className: cn(ratingVariants({ variant })),
      "aria-hidden": "true"
    });
    return { emptyIcon, fullIcon };
  }, [Icon, size, variant]);
  const getRatingPoint = reactExports.useCallback(
    (event) => {
      const { left, width } = event.currentTarget.getBoundingClientRect();
      if (width === 0 || precision <= 0 || precision > 1) return 0;
      const x = event.clientX - left;
      const fillRatio = x / width;
      const base = Math.ceil(point) - 1;
      return base + Math.ceil(fillRatio / precision) * precision;
    },
    [precision, point]
  );
  const handleMouseMove = reactExports.useCallback(
    (event) => {
      if (!isInteractive) return;
      onValueHover(getRatingPoint(event));
    },
    [isInteractive, onValueHover, getRatingPoint]
  );
  const handleClick = reactExports.useCallback(
    (event) => {
      if (!isInteractive) return;
      const newPoint = getRatingPoint(event);
      onValueHover(0);
      onValueChange?.(newPoint === value ? 0 : newPoint);
      event.currentTarget.blur();
    },
    [isInteractive, value, onValueChange, onValueHover, getRatingPoint]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Comp,
      {
        "data-slot": "rating-item",
        htmlFor: readOnly ? void 0 : `${ratingIconId}-${point}`,
        "aria-label": readOnly ? `${point} Stars` : void 0,
        onClick: !readOnly ? handleClick : void 0,
        onMouseMove: !readOnly ? handleMouseMove : void 0,
        onMouseLeave: !readOnly ? onMouseLeave : void 0,
        "data-disabled": disabled,
        "data-readonly": readOnly,
        "data-filled": shouldShowFilled,
        className: cn(
          "[&_svg]:pointer-events-none",
          isPartialPoint && "pointer-events-none absolute top-0 left-0 overflow-hidden",
          isInteractive && "cursor-pointer hover:scale-105",
          disabled && "cursor-not-allowed opacity-50",
          className
        ),
        style: { width: partialPointWidth },
        ...props,
        children: [
          !isPartialPoint && !shouldShowFilled && icons.emptyIcon,
          shouldShowFilled && icons.fullIcon
        ]
      }
    ),
    !readOnly && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type: "radio",
        id: `${ratingIconId}-${point}`,
        name,
        value: point,
        className: "sr-only",
        tabIndex: -1,
        "data-slot": "rating-input"
      }
    )
  ] });
}
function Rating({
  value: controlledValue,
  defaultValue = 0,
  name,
  max = RATING_DEFAULTS.maxStars,
  size = RATING_DEFAULTS.size,
  icon: Icon = RATING_DEFAULTS.icon,
  variant = RATING_DEFAULTS.variant,
  className,
  readOnly = false,
  disabled = false,
  precision = RATING_DEFAULTS.precision,
  onValueChange,
  onValueHover,
  ...props
}) {
  const id = reactExports.useId();
  const ratingName = name ?? `rating-${id}`;
  const [internalValue, setInternalValue] = reactExports.useState(defaultValue);
  const [hoveredValue, setHoveredValue] = reactExports.useState(0);
  const isControlled = controlledValue !== void 0;
  const value = isControlled ? controlledValue : internalValue;
  const isInteractive = !readOnly && !disabled;
  const handleValueChange = reactExports.useCallback(
    (newValue) => {
      if (!isControlled) {
        setInternalValue(newValue);
      }
      onValueChange?.(newValue);
    },
    [isControlled, onValueChange]
  );
  const handleValueHover = reactExports.useCallback(
    (point) => {
      setHoveredValue(point);
      onValueHover?.(point);
    },
    [onValueHover]
  );
  const handleKeyDown = reactExports.useCallback(
    (event) => {
      if (!isInteractive) return;
      switch (event.key) {
        case "ArrowRight":
        case "ArrowUp":
          event.preventDefault();
          if (value + precision > max) {
            handleValueChange(0);
          } else {
            handleValueChange(value + precision);
          }
          break;
        case "ArrowLeft":
        case "ArrowDown":
          event.preventDefault();
          if (value - precision < 0) {
            handleValueChange(max);
          } else {
            handleValueChange(value - precision);
          }
          break;
        case " ":
        case "Enter":
          event.preventDefault();
          if (value === 0) {
            handleValueChange(precision);
          } else {
            handleValueChange(0);
          }
          break;
        case "Home":
          event.preventDefault();
          handleValueChange(precision);
          break;
        case "End":
          event.preventDefault();
          handleValueChange(max);
          break;
      }
    },
    [isInteractive, value, max, precision, handleValueChange]
  );
  const handleMouseDown = reactExports.useCallback((event) => {
    event.preventDefault();
  }, []);
  const stars = reactExports.useMemo(() => {
    if (precision <= 0 || precision > 1) {
      console.warn("Rating: precision must be greater than 0 and less than or equal to 1");
      return [];
    }
    return Array.from({ length: max }, (_, index) => ({
      key: index,
      points: Array.from({ length: Math.floor(1 / precision) }, (_2, i) => index + precision * (i + 1))
    }));
  }, [max, precision]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "rating",
      role: !readOnly ? "radiogroup" : "img",
      onKeyDown: !readOnly ? handleKeyDown : void 0,
      onMouseDown: !readOnly ? handleMouseDown : void 0,
      tabIndex: !readOnly && !disabled ? 0 : void 0,
      "data-disabled": disabled,
      "data-readonly": readOnly,
      className: cn(
        "focus-visible:ring-ring/50 flex gap-px focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
        disabled && "opacity-50",
        className
      ),
      "aria-label": readOnly ? `${value} of ${max} stars` : "Rating",
      ...props,
      children: stars.map(({ key, points }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          "data-slot": "rating-star",
          className: cn(
            "relative",
            isInteractive && "transition-transform hover:scale-110",
            disabled && "cursor-not-allowed"
          ),
          "aria-disabled": disabled,
          "aria-hidden": readOnly,
          children: points.map((point) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            RatingItem,
            {
              name: ratingName,
              disabled,
              hoveredValue,
              point,
              precision,
              readOnly,
              size,
              value,
              variant,
              Icon,
              onMouseLeave: () => setHoveredValue(0),
              onValueHover: handleValueHover,
              onValueChange: handleValueChange
            },
            point
          ))
        },
        key
      ))
    }
  );
}
const TestimonialsComponent = ({ testimonials }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-4 sm:pt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Carousel,
    {
      className: "mx-auto flex max-w-7xl gap-12 px-4 **:data-[slot=carousel-content]:px-px max-sm:flex-col sm:items-center sm:gap-16 sm:px-6 lg:gap-24 lg:px-8",
      opts: {
        align: "start",
        slidesToScroll: 1
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 sm:w-1/2 lg:w-1/3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold sm:text-3xl lg:text-4xl", children: "Customers Feedback" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xl", children: "From career changes to dream jobs, here's how Shadcn Studio helped." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CarouselPrevious,
              {
                size: "icon",
                variant: "default",
                className: "disabled:bg-primary/10 disabled:text-primary static translate-y-0 rounded-md disabled:opacity-100"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CarouselNext,
              {
                size: "icon",
                variant: "default",
                className: "disabled:bg-primary/10 disabled:text-primary static translate-y-0 rounded-md disabled:opacity-100"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative max-w-196 sm:w-1/2 lg:w-2/3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselContent, { className: "ml-0 sm:-ml-6", children: testimonials.map((testimonial, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselItem, { className: "px-0.5 py-0.5 sm:pl-6 lg:basis-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "hover:ring-primary h-full transition-colors duration-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Avatar, { size: "lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarImage, { src: testimonial.avatar, alt: testimonial.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarFallback, { children: testimonial.name.split(" ", 2).map((n) => n[0]).join("") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-base font-medium", children: testimonial.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm", children: [
                testimonial.role,
                " at",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-card-foreground font-semibold", children: testimonial.company })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Rating, { readOnly: true, variant: "yellow", size: 24, value: testimonial.rating, precision: 0.5 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base", children: testimonial.content }) })
        ] }) }, index)) }) })
      ]
    }
  ) });
};
const CAROUSEL_TESTIMONIALS = [
  {
    name: "Rahul M.",
    role: "Beginner Trader",
    company: "College Student",
    avatar: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png?width=40&height=40&format=auto",
    rating: 5,
    content: "Stonkzz simplified technical analysis for me. I never thought I'd feel this confident reading candlestick patterns!"
  },
  {
    name: "Samantha D.",
    role: "Product Manager",
    company: "Fintech",
    avatar: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png?width=40&height=40&format=auto",
    rating: 5,
    content: "The daily insights and charts feel like having a personal market analyst in my pocket. Love how clean the UI is."
  },
  {
    name: "Naveen R.",
    role: "Software Engineer",
    company: "Bengaluru",
    avatar: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png?width=40&height=40&format=auto",
    rating: 5,
    content: "I stopped following 5 different apps. Now I just check Stonkzz once in the morning — everything I need is there."
  },
  {
    name: "Shweta N.",
    role: "Part-Time Trader",
    company: "Blogger",
    avatar: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-4.png?width=40&height=40&format=auto",
    rating: 4,
    content: "I made back my subscription fee with one smart trade. That's how actionable their data is."
  },
  {
    name: "Deepika S.",
    role: "Homemaker",
    company: "New Investor",
    avatar: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png?width=40&height=40&format=auto",
    rating: 5,
    content: "I finally understand market sentiment. The way Stonkzz explains it with visuals and real data is just brilliant."
  },
  {
    name: "Ajay K.",
    role: "Swing Trader",
    company: "Freelance Designer",
    avatar: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png?width=40&height=40&format=auto",
    rating: 5,
    content: "In just 2 weeks, I've made smarter trades thanks to their analysis. Their NIFTY50 trends are on point!"
  }
];
function Testimonials() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { style: { backgroundColor: "var(--color-paper-white)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-page py-12 md:py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TestimonialsComponent, { testimonials: CAROUSEL_TESTIMONIALS }) }) });
}
const STEPS = [
  { Icon: CreditCard, title: "Choose your plan", body: "Pick Monthly, Half-Yearly or Annual. No auto-renewal." },
  { Icon: Smartphone, title: "Share your WhatsApp", body: "We enroll your number. Setup takes under two minutes." },
  { Icon: Sunrise, title: "Wake up ready", body: "Every trading morning before 8:00 AM IST, the brief is waiting." }
];
function HowItWorks() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-2 md:px-4 py-2 md:py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "rounded-[32px] md:rounded-[48px] overflow-hidden",
      style: { backgroundColor: "var(--color-parchment)" },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-12 md:py-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-100px" },
            transition: { duration: 0.5 },
            className: "max-w-3xl",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] uppercase tracking-[0.14em]", style: { color: "var(--color-steel)" }, children: "How it works" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-heading", style: { color: "var(--color-ink-black)" }, children: "From signup to morning brief." })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 relative grid grid-cols-1 md:grid-cols-3 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block absolute left-[16%] right-[16%] top-[60px] h-px", style: { borderTop: "2px dashed var(--color-electric-blue)" } }),
          STEPS.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, margin: "-60px" },
              transition: { duration: 0.4, delay: i * 0.12 },
              className: "relative card-surface text-center md:text-left",
              style: { border: "1px solid var(--color-sand)" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "mx-auto md:mx-0 h-14 w-14 rounded-2xl flex items-center justify-center mb-5",
                    style: { background: "var(--color-electric-blue)", color: "var(--color-paper-white)" },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.Icon, { size: 24 })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[12px] uppercase tracking-[0.14em]", style: { color: "var(--color-steel)" }, children: [
                  "Step ",
                  i + 1
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 text-[20px] font-semibold", style: { color: "var(--color-ink-black)" }, children: s.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[15px]", style: { color: "var(--color-steel)" }, children: s.body })
              ]
            },
            s.title
          ))
        ] })
      ] })
    }
  ) });
}
const ITEMS = [
  { to: "/calculators/asset-allocation", icon: ChartPie, name: "Asset Allocation" },
  { to: "/calculators/gold-returns", icon: Coins, name: "Gold Returns" },
  { to: "/calculators/swp", icon: TrendingDown, name: "SWP" },
  { to: "/calculators/debt-engine", icon: Lock, name: "Debt Engine" },
  { to: "/calculators/child-legacy", icon: Baby, name: "Child Legacy" }
];
function CalculatorsTeaser() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-page py-12 md:py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-10 items-end", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] uppercase tracking-[0.22em]", style: { color: "var(--color-ash)" }, children: "Free tools" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 text-heading", style: { color: "var(--color-ink-black)" }, children: [
        "Five calculators we ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic-flourish", style: { color: "var(--color-electric-blue)" }, children: "use ourselves" }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-[17px]", style: { color: "var(--color-steel)" }, children: "Quick, no signup. Made for Indian investors who want answers in under a minute." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/calculators", className: "mt-6 inline-flex items-center gap-2 text-[14px] font-medium", style: { color: "var(--color-electric-blue)" }, children: [
        "Open all calculators ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { size: 16 })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-3", children: ITEMS.map((c, i) => {
      const Icon = c.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 14 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-80px" },
          transition: { duration: 0.4, delay: i * 0.05 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: c.to,
              className: "group flex items-center gap-3 rounded-2xl p-4 transition-all hover:-translate-y-0.5",
              style: { background: "var(--color-paper-white)", border: "1px solid var(--color-sand)" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "h-9 w-9 rounded-xl flex items-center justify-center",
                    style: { background: "var(--color-electric-blue-soft)", color: "var(--color-electric-blue)" },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 16 })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px] font-medium", style: { color: "var(--color-ink-black)" }, children: c.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { size: 14, className: "ml-auto opacity-40 group-hover:opacity-100 transition-opacity", style: { color: "var(--color-steel)" } })
              ]
            }
          )
        },
        c.to
      );
    }) })
  ] }) });
}
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StatRow, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProblemSolution, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HowItWorks, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Features, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ReportPreview, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CalculatorsTeaser, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Pricing, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, { items: ALL_FAQS.slice(0, 5), withCta: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FinalCTA, {})
  ] });
}
export {
  Home as component
};
