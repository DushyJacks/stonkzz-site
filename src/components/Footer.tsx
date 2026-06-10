import { Link } from "@tanstack/react-router";
import { Logo, Wordmark } from "./Logo";
import { Mail, Phone } from "lucide-react";

function XIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2H21.5l-7.5 8.57L22.5 22h-6.83l-5.34-6.97L4.2 22H.94l8.02-9.17L1.5 2h7l4.83 6.39L18.244 2Zm-1.2 18h1.86L7.05 4H5.05l11.994 16Z" />
    </svg>
  );
}

const DISCLAIMER =
  "Stonkzz is not registered with SEBI as an investment advisor. The information provided in our daily reports is for educational and informational purposes only and does not constitute investment advice, a recommendation to buy or sell any security, or an offer to provide investment advisory services. All trading involves risk. Past market behavior is not indicative of future results. You are solely responsible for your investment decisions. Please consult a qualified financial advisor before making investment decisions.";

export function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--color-ink-black)", color: "var(--color-paper-white)" }}>
      <div className="container-page py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-5">
              <Logo className="h-9 w-9" invert />
              <Wordmark invert />
            </div>
            <p className="text-[16px] text-fog max-w-sm leading-relaxed">
              India's cleanest daily stock market report. NIFTY, FII/DII, global indices, commodities and AI news — one PDF in WhatsApp before 8:00 AM IST.
            </p>
            <a
              href="https://twitter.com/stonkz_daily"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-fog hover:text-paper-white transition-colors text-[14px]"
            >
              <XIcon size={14} /> @stonkz_daily
            </a>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[14px] uppercase tracking-[0.08em] text-fog mb-4">Product</h4>
            <ul className="space-y-3 text-[16px]">
              <li><Link to="/" className="hover:text-electric-blue transition-colors">Home</Link></li>
              <li><Link to="/report" className="hover:text-electric-blue transition-colors">Sample Report</Link></li>
              <li><Link to="/pricing" className="hover:text-electric-blue transition-colors">Pricing</Link></li>
              <li><Link to="/faq" className="hover:text-electric-blue transition-colors">FAQ</Link></li>
              <li><Link to="/about" className="hover:text-electric-blue transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-electric-blue transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-[14px] uppercase tracking-[0.08em] text-fog mb-4">Legal</h4>
            <ul className="space-y-3 text-[16px]">
              <li><Link to="/legal/disclaimer" className="hover:text-electric-blue transition-colors">Disclaimer</Link></li>
              <li><Link to="/legal/refund-policy" className="hover:text-electric-blue transition-colors">Refund Policy</Link></li>
              <li><Link to="/legal/privacy-policy" className="hover:text-electric-blue transition-colors">Privacy Policy</Link></li>
              <li><Link to="/legal/terms" className="hover:text-electric-blue transition-colors">Terms of Service</Link></li>
            </ul>
            <div className="mt-6 space-y-2 text-[14px] text-fog">
              <a href="mailto:thestonkzz@gmail.com" className="flex items-center gap-2 hover:text-paper-white">
                <Mail size={14} /><span>thestonkzz@gmail.com</span>
              </a>
              <a href="tel:+919025569271" className="flex items-center gap-2 hover:text-paper-white">
                <Phone size={14} /><span>+91 90255 69271</span>
              </a>
              <p>Chennai, Tamil Nadu, India</p>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t" style={{ borderColor: "var(--color-graphite)" }}>
          <p className="text-[12px] leading-relaxed text-fog max-w-4xl">{DISCLAIMER}</p>
          <p className="mt-6 text-[12px] text-fog">© {new Date().getFullYear()} Stonkzz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
