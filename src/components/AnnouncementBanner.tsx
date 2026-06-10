import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

interface AnnouncementBannerProps {
  visible: boolean;
  onDismiss: () => void;
}

export function AnnouncementBanner({ visible, onDismiss }: AnnouncementBannerProps) {
  return (
    <AnimatePresence initial={false}>
      {visible && (
        <motion.div
          initial={{ height: 44, opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-50 overflow-hidden"
          style={{ backgroundColor: "var(--color-electric-blue)" }}
        >
          <div className="container-page flex items-center justify-center gap-3 h-11 text-paper-white text-[14px] font-medium">
            <span className="hidden sm:inline">🎉 Now delivering before 8:00 AM IST to traders across India.</span>
            <span className="sm:hidden">🎉 Daily before 8:00 AM IST.</span>
            <a href="/report" className="underline underline-offset-2 hover:opacity-90">
              See today's sample →
            </a>
            <button
              onClick={onDismiss}
              aria-label="Dismiss announcement"
              className="ml-auto opacity-80 hover:opacity-100"
            >
              <X size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
