import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteLayout, W as WA_DEFAULT } from "./Layout-CCezRhq2.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { M as MessageCircle, a as Mail, b as Phone, c as MapPin } from "../_libs/lucide-react.mjs";
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
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function ContactPage() {
  const [sent, setSent] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-paper-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page pt-20 md:pt-24 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.5
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] uppercase tracking-[0.14em]", style: {
          color: "var(--color-steel)"
        }, children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-3 text-display", style: {
          color: "var(--color-ink-black)"
        }, children: [
          "Talk to a ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic-flourish", style: {
            color: "var(--color-electric-blue)"
          }, children: "human." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-[18px]", style: {
          color: "var(--color-steel)"
        }, children: "Subscription help, partnership ideas, press, refunds — pick whichever is fastest." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-10 space-y-3", children: [{
        Icon: MessageCircle,
        label: "WhatsApp",
        value: "Chat with us now",
        href: WA_DEFAULT,
        ext: true
      }, {
        Icon: Mail,
        label: "Email",
        value: "thestonkzz@gmail.com",
        href: "mailto:thestonkzz@gmail.com"
      }, {
        Icon: Phone,
        label: "Phone",
        value: "+91 90255 69271",
        href: "tel:+919025569271"
      }, {
        Icon: MapPin,
        label: "Office",
        value: "Chennai, Tamil Nadu, India"
      }].map(({
        Icon,
        label,
        value,
        href,
        ext
      }) => {
        const Inner = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 p-4 rounded-[20px]", style: {
          background: "var(--color-parchment)"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-11 w-11 rounded-full flex items-center justify-center", style: {
            background: "var(--color-electric-blue)",
            color: "white"
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 18 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] uppercase tracking-[0.12em]", style: {
              color: "var(--color-steel)"
            }, children: label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[16px] font-medium", style: {
              color: "var(--color-ink-black)"
            }, children: value })
          ] })
        ] });
        return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: href ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href, target: ext ? "_blank" : void 0, rel: ext ? "noopener noreferrer" : void 0, children: Inner }) : Inner }, label);
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
      e.preventDefault();
      setSent(true);
    }, className: "rounded-[24px] p-6 md:p-8 grid gap-4", style: {
      background: "var(--color-paper-white)",
      border: "1px solid var(--color-sand)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-heading-sm", style: {
        color: "var(--color-ink-black)"
      }, children: "Send us a message" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px]", style: {
        color: "var(--color-steel)"
      }, children: "We typically reply within one business day." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full name", id: "name", required: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email address", id: "email", type: "email", required: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "WhatsApp number (optional)", id: "phone", type: "tel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "msg", className: "block text-[14px] font-medium mb-1.5", style: {
          color: "var(--color-ink-black)"
        }, children: "Message" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { id: "msg", required: true, rows: 5, className: "w-full rounded-[12.8px] px-4 py-3 text-[16px] outline-none transition-colors", style: {
          background: "var(--color-paper-white)",
          border: "1px solid var(--color-fog)"
        }, onFocus: (e) => e.currentTarget.style.borderColor = "var(--color-electric-blue)", onBlur: (e) => e.currentTarget.style.borderColor = "var(--color-fog)" })
      ] }),
      sent ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-[16px] p-4 text-[15px]", style: {
        background: "var(--color-electric-blue-soft)",
        color: "var(--color-ink-black)"
      }, children: "Thanks — got it. We'll reply within a business day. For faster help, message us on WhatsApp." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "btn-primary mt-2 w-full sm:w-auto", children: "Send message" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px]", style: {
        color: "var(--color-steel)"
      }, children: "By submitting, you agree this form is for general enquiries — not subscription enrollment. Subscribe via the WhatsApp link." })
    ] }) })
  ] }) }) });
}
function Field({
  label,
  id,
  type = "text",
  required
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: id, className: "block text-[14px] font-medium mb-1.5", style: {
      color: "var(--color-ink-black)"
    }, children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id, type, required, inputMode: type === "tel" ? "tel" : type === "email" ? "email" : void 0, className: "w-full rounded-[12.8px] px-4 py-3 text-[16px] outline-none transition-colors", style: {
      background: "var(--color-paper-white)",
      border: "1px solid var(--color-fog)"
    }, onFocus: (e) => e.currentTarget.style.borderColor = "var(--color-electric-blue)", onBlur: (e) => e.currentTarget.style.borderColor = "var(--color-fog)" })
  ] });
}
export {
  ContactPage as component
};
