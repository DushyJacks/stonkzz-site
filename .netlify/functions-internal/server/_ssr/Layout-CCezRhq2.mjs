import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useLocation, L as Link } from "../_libs/tanstack__react-router.mjs";
import { L as Lenis } from "../_libs/lenis.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import { X, o as Menu, a as Mail, b as Phone } from "../_libs/lucide-react.mjs";
function AnnouncementBanner({ visible, onDismiss }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: visible && /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { height: 44, opacity: 1 },
      exit: { height: 0, opacity: 0 },
      transition: { duration: 0.2, ease: "easeOut" },
      className: "fixed top-0 left-0 right-0 z-50 overflow-hidden",
      style: { backgroundColor: "var(--color-electric-blue)" },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page flex items-center justify-center gap-3 h-11 text-paper-white text-[14px] font-medium", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "🎉 Now delivering before 8:00 AM IST to traders across India." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden", children: "🎉 Daily before 8:00 AM IST." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/report", className: "underline underline-offset-2 hover:opacity-90", children: "See today's sample →" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: onDismiss,
            "aria-label": "Dismiss announcement",
            className: "ml-auto opacity-80 hover:opacity-100",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 16 })
          }
        )
      ] })
    }
  ) });
}
function Logo({ className = "h-8 w-8", invert = false }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "img",
    {
      src: "/images/Logo.png",
      alt: "Stonkzz",
      className,
      style: invert ? { filter: "brightness(0) invert(1)" } : void 0,
      width: 40,
      height: 40
    }
  );
}
function Wordmark({ invert = false, scrolled = false }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: "text-[20px] font-semibold tracking-[-0.03em]",
      style: {
        color: scrolled ? "var(--color-ink-black)" : invert ? "var(--color-paper-white)" : "var(--color-paper-white)"
      },
      children: "Stonkzz"
    }
  );
}
const WA_NUMBER = "919025569271";
function waLink(message) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}
const WA_DEFAULT = waLink(
  "Hi Stonkzz! I'd like to subscribe to the daily WhatsApp market report. Please share the plan options."
);
function waPlan(plan, price) {
  return waLink(
    `Hi Stonkzz! I'd like to subscribe to the ${plan} plan (${price}). Please help me get started.`
  );
}
const links = [
  { to: "/", label: "Home" },
  { to: "/report", label: "Report" },
  { to: "/calculators", label: "Calculators" },
  { to: "/pricing", label: "Pricing" },
  { to: "/faq", label: "FAQ" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" }
];
function Nav({ bannerVisible = false }) {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  const location = useLocation();
  const isHomepage = location.pathname === "/";
  const topOffset = bannerVisible ? 44 : 0;
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  reactExports.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: "fixed left-0 right-0 z-40",
      style: {
        top: topOffset,
        backgroundColor: isHomepage ? scrolled ? "rgba(255,255,255,0.92)" : "transparent" : "rgba(255,255,255,0.92)",
        backdropFilter: isHomepage ? scrolled ? "blur(12px)" : "blur(0px)" : "blur(12px)",
        borderBottom: isHomepage ? scrolled ? "1px solid rgba(0,0,0,0.06)" : "1px solid transparent" : "1px solid rgba(0,0,0,0.06)",
        boxShadow: isHomepage ? scrolled ? "0 2px 8px rgba(0,0,0,0.08)" : "none" : "0 2px 8px rgba(0,0,0,0.08)",
        transition: "top 0.2s ease-out, background-color 0.3s ease-out, backdrop-filter 0.3s ease-out, border-color 0.3s ease-out, box-shadow 0.3s ease-out"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page flex items-center justify-between h-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { className: "h-8 w-8" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Wordmark, { scrolled: isHomepage ? scrolled : true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden md:flex items-center gap-7", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: l.to,
              className: `text-[15px] font-medium transition-colors ${isHomepage ? scrolled ? "text-steel hover:text-ink-black" : "text-paper-white hover:text-paper-white" : "text-steel hover:text-ink-black"}`,
              activeProps: { style: { color: isHomepage ? scrolled ? "var(--color-ink-black)" : "var(--color-paper-white)" : "var(--color-ink-black)" } },
              activeOptions: { exact: l.to === "/" },
              children: l.label
            },
            l.to
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:flex items-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: WA_DEFAULT, target: "_blank", rel: "noopener noreferrer", className: "btn-primary", children: "Get Daily Report" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: `md:hidden p-2 -mr-2 ${isHomepage ? scrolled ? "text-ink-black" : "text-paper-white" : "text-ink-black"}`,
              onClick: () => setOpen((v) => !v),
              "aria-label": "Toggle menu",
              children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 24 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { size: 24 })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { x: "100%" },
            animate: { x: 0 },
            exit: { x: "100%" },
            transition: { duration: 0.3, ease: "easeInOut" },
            className: `md:hidden fixed right-0 bottom-0 w-[82%] max-w-sm bg-paper-white border-l border-sand z-50 flex flex-col p-6 gap-2`,
            style: { top: `${topOffset + 64}px` },
            children: [
              links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: l.to,
                  onClick: () => setOpen(false),
                  className: "text-[20px] font-medium text-ink-black py-3 border-b border-sand",
                  children: l.label
                },
                l.to
              )),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: WA_DEFAULT,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "btn-primary mt-6 w-full",
                  onClick: () => setOpen(false),
                  children: "Get Daily Report"
                }
              )
            ]
          }
        ) })
      ]
    }
  );
}
function XIcon({ size = 16 }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M18.244 2H21.5l-7.5 8.57L22.5 22h-6.83l-5.34-6.97L4.2 22H.94l8.02-9.17L1.5 2h7l4.83 6.39L18.244 2Zm-1.2 18h1.86L7.05 4H5.05l11.994 16Z" }) });
}
const DISCLAIMER = "Stonkzz is not registered with SEBI as an investment advisor. The information provided in our daily reports is for educational and informational purposes only and does not constitute investment advice, a recommendation to buy or sell any security, or an offer to provide investment advisory services. All trading involves risk. Past market behavior is not indicative of future results. You are solely responsible for your investment decisions. Please consult a qualified financial advisor before making investment decisions.";
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { style: { backgroundColor: "var(--color-ink-black)", color: "var(--color-paper-white)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-16 md:py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-12 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { className: "h-9 w-9", invert: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Wordmark, { invert: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[16px] text-fog max-w-sm leading-relaxed", children: "India's cleanest daily stock market report. NIFTY, FII/DII, global indices, commodities and AI news — one PDF in WhatsApp before 8:00 AM IST." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://twitter.com/stonkz_daily",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "inline-flex items-center gap-2 mt-6 text-fog hover:text-paper-white transition-colors text-[14px]",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(XIcon, { size: 14 }),
              " @stonkz_daily"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[14px] uppercase tracking-[0.08em] text-fog mb-4", children: "Product" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-[16px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-electric-blue transition-colors", children: "Home" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/report", className: "hover:text-electric-blue transition-colors", children: "Sample Report" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/pricing", className: "hover:text-electric-blue transition-colors", children: "Pricing" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/faq", className: "hover:text-electric-blue transition-colors", children: "FAQ" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "hover:text-electric-blue transition-colors", children: "About" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "hover:text-electric-blue transition-colors", children: "Contact" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[14px] uppercase tracking-[0.08em] text-fog mb-4", children: "Legal" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-[16px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/legal/disclaimer", className: "hover:text-electric-blue transition-colors", children: "Disclaimer" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/legal/refund-policy", className: "hover:text-electric-blue transition-colors", children: "Refund Policy" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/legal/privacy-policy", className: "hover:text-electric-blue transition-colors", children: "Privacy Policy" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/legal/terms", className: "hover:text-electric-blue transition-colors", children: "Terms of Service" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-2 text-[14px] text-fog", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:thestonkzz@gmail.com", className: "flex items-center gap-2 hover:text-paper-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 14 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "thestonkzz@gmail.com" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:+919025569271", className: "flex items-center gap-2 hover:text-paper-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 14 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "+91 90255 69271" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Chennai, Tamil Nadu, India" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 pt-8 border-t", style: { borderColor: "var(--color-graphite)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] leading-relaxed text-fog max-w-4xl", children: DISCLAIMER }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-[12px] text-fog", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Stonkzz. All rights reserved."
      ] })
    ] })
  ] }) });
}
function SmoothScroll() {
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
    let frame = 0;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);
  return null;
}
function SiteLayout({ children }) {
  const [bannerVisible, setBannerVisible] = reactExports.useState(true);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("stonkzz-banner-dismissed")) {
      setBannerVisible(false);
    }
  }, []);
  const dismissBanner = () => {
    setBannerVisible(false);
    sessionStorage.setItem("stonkzz-banner-dismissed", "1");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SmoothScroll, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnnouncementBanner, { visible: bannerVisible, onDismiss: dismissBanner }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { bannerVisible }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  SiteLayout as S,
  WA_DEFAULT as W,
  waPlan as w
};
