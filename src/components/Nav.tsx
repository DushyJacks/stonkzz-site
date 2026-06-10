import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo, Wordmark } from "./Logo";
import { WA_DEFAULT } from "@/lib/wa";

const links = [
  { to: "/", label: "Home" },
  { to: "/report", label: "Report" },
  { to: "/calculators", label: "Calculators" },
  { to: "/pricing", label: "Pricing" },
  { to: "/faq", label: "FAQ" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav({ bannerVisible = false }: { bannerVisible?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHomepage = location.pathname === "/";
  const topOffset = bannerVisible ? 44 : 0;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className="fixed left-0 right-0 z-40"
      style={{
        top: topOffset,
        backgroundColor: isHomepage ? (scrolled ? "rgba(255,255,255,0.92)" : "transparent") : "rgba(255,255,255,0.92)",
        backdropFilter: isHomepage ? (scrolled ? "blur(12px)" : "blur(0px)") : "blur(12px)",
        borderBottom: isHomepage ? (scrolled ? "1px solid rgba(0,0,0,0.06)" : "1px solid transparent") : "1px solid rgba(0,0,0,0.06)",
        boxShadow: isHomepage ? (scrolled ? "0 2px 8px rgba(0,0,0,0.08)" : "none") : "0 2px 8px rgba(0,0,0,0.08)",
        transition: "top 0.2s ease-out, background-color 0.3s ease-out, backdrop-filter 0.3s ease-out, border-color 0.3s ease-out, box-shadow 0.3s ease-out",
      }}
    >
      <div className="container-page flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2.5">
          <Logo className="h-8 w-8" />
          <Wordmark scrolled={isHomepage ? scrolled : true} />
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-[15px] font-medium transition-colors ${
                isHomepage
                  ? scrolled ? "text-steel hover:text-ink-black" : "text-paper-white hover:text-paper-white"
                  : "text-steel hover:text-ink-black"
              }`}
              activeProps={{ style: { color: isHomepage ? (scrolled ? "var(--color-ink-black)" : "var(--color-paper-white)") : "var(--color-ink-black)" } }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Get Daily Report
          </a>
        </div>

        <button
          className={`md:hidden p-2 -mr-2 ${
            isHomepage
              ? scrolled ? "text-ink-black" : "text-paper-white"
              : "text-ink-black"
          }`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`md:hidden fixed right-0 bottom-0 w-[82%] max-w-sm bg-paper-white border-l border-sand z-50 flex flex-col p-6 gap-2`}
            style={{ top: `${topOffset + 64}px` }}
          >
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-[20px] font-medium text-ink-black py-3 border-b border-sand"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 w-full"
              onClick={() => setOpen(false)}
            >
              Get Daily Report
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
