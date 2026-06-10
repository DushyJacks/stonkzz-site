import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { WA_DEFAULT } from "@/lib/wa";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Stonkzz" },
      { name: "description", content: "Reach the Stonkzz team. Email, phone, WhatsApp. Chennai, India." },
      { property: "og:title", content: "Contact — Stonkzz" },
      { property: "og:description", content: "Questions, feedback, support — get in touch." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <section className="bg-paper-white">
        <div className="container-page pt-20 md:pt-24 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <p className="text-[14px] uppercase tracking-[0.14em]" style={{ color: "var(--color-steel)" }}>Contact</p>
              <h1 className="mt-3 text-display" style={{ color: "var(--color-ink-black)" }}>
                Talk to a <span className="italic-flourish" style={{ color: "var(--color-electric-blue)" }}>human.</span>
              </h1>
              <p className="mt-5 text-[18px]" style={{ color: "var(--color-steel)" }}>
                Subscription help, partnership ideas, press, refunds — pick whichever is fastest.
              </p>
            </motion.div>

            <ul className="mt-10 space-y-3">
              {[
                { Icon: MessageCircle, label: "WhatsApp", value: "Chat with us now", href: WA_DEFAULT, ext: true },
                { Icon: Mail, label: "Email", value: "thestonkzz@gmail.com", href: "mailto:thestonkzz@gmail.com" },
                { Icon: Phone, label: "Phone", value: "+91 90255 69271", href: "tel:+919025569271" },
                { Icon: MapPin, label: "Office", value: "Chennai, Tamil Nadu, India" },
              ].map(({ Icon, label, value, href, ext }) => {
                const Inner = (
                  <div className="flex items-center gap-4 p-4 rounded-[20px]" style={{ background: "var(--color-parchment)" }}>
                    <span className="h-11 w-11 rounded-full flex items-center justify-center" style={{ background: "var(--color-electric-blue)", color: "white" }}>
                      <Icon size={18} />
                    </span>
                    <div>
                      <p className="text-[12px] uppercase tracking-[0.12em]" style={{ color: "var(--color-steel)" }}>{label}</p>
                      <p className="text-[16px] font-medium" style={{ color: "var(--color-ink-black)" }}>{value}</p>
                    </div>
                  </div>
                );
                return (
                  <li key={label}>
                    {href ? (
                      <a href={href} target={ext ? "_blank" : undefined} rel={ext ? "noopener noreferrer" : undefined}>{Inner}</a>
                    ) : Inner}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="rounded-[24px] p-6 md:p-8 grid gap-4"
              style={{ background: "var(--color-paper-white)", border: "1px solid var(--color-sand)" }}
            >
              <h2 className="text-heading-sm" style={{ color: "var(--color-ink-black)" }}>Send us a message</h2>
              <p className="text-[14px]" style={{ color: "var(--color-steel)" }}>
                We typically reply within one business day.
              </p>

              <Field label="Full name" id="name" required />
              <Field label="Email address" id="email" type="email" required />
              <Field label="WhatsApp number (optional)" id="phone" type="tel" />
              <div>
                <label htmlFor="msg" className="block text-[14px] font-medium mb-1.5" style={{ color: "var(--color-ink-black)" }}>Message</label>
                <textarea id="msg" required rows={5} className="w-full rounded-[12.8px] px-4 py-3 text-[16px] outline-none transition-colors"
                  style={{ background: "var(--color-paper-white)", border: "1px solid var(--color-fog)" }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-electric-blue)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-fog)")}
                />
              </div>

              {sent ? (
                <div className="rounded-[16px] p-4 text-[15px]" style={{ background: "var(--color-electric-blue-soft)", color: "var(--color-ink-black)" }}>
                  Thanks — got it. We'll reply within a business day. For faster help, message us on WhatsApp.
                </div>
              ) : (
                <button type="submit" className="btn-primary mt-2 w-full sm:w-auto">Send message</button>
              )}
              <p className="text-[12px]" style={{ color: "var(--color-steel)" }}>
                By submitting, you agree this form is for general enquiries — not subscription enrollment. Subscribe via the WhatsApp link.
              </p>
            </form>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, id, type = "text", required }: { label: string; id: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={id} className="block text-[14px] font-medium mb-1.5" style={{ color: "var(--color-ink-black)" }}>{label}</label>
      <input
        id={id}
        type={type}
        required={required}
        inputMode={type === "tel" ? "tel" : type === "email" ? "email" : undefined}
        className="w-full rounded-[12.8px] px-4 py-3 text-[16px] outline-none transition-colors"
        style={{ background: "var(--color-paper-white)", border: "1px solid var(--color-fog)" }}
        onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-electric-blue)")}
        onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-fog)")}
      />
    </div>
  );
}
