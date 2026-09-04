import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  APP_DOWNLOAD_URL,
  isDownloadConfigured,
  trackDownloadClick,
} from "@/config/site";
import { ZapMark } from "./ZapLogo";
import { AndroidIcon } from "./AndroidIcon";

/** Sticky mobile CTA — appears past the hero, hides over the download section. */
export function MobileDownloadBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const pastHero = window.scrollY > window.innerHeight * 0.85;
      const target = document.getElementById("download");
      let overlapping = false;
      if (target) {
        const r = target.getBoundingClientRect();
        overlapping = r.top < window.innerHeight * 0.9 && r.bottom > 0;
      }
      setVisible(pastHero && !overlapping);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const configured = isDownloadConfigured();

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 90, opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-x-3 bottom-3 z-50 sm:hidden"
        >
          <div className="relative flex items-center gap-3 overflow-hidden rounded-2xl glass-strong p-2.5 shadow-elevated">
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-25 blur-xl"
              style={{ background: "var(--gradient-duo)" }}
            />
            <ZapMark className="relative size-10" />
            <div className="relative min-w-0 flex-1">
              <p className="text-sm font-bold text-foreground">Get Zappit</p>
              <p className="truncate text-[11px] text-subtle">APK • Android</p>
            </div>
            <a
              href={configured ? APP_DOWNLOAD_URL : "#download"}
              download={configured ? "" : undefined}
              onClick={() => trackDownloadClick("mobile-sticky-bar")}
              className="relative inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold text-primary-foreground animate-pulse-glow"
              style={{ background: "var(--gradient-primary)" }}
            >
              <AndroidIcon className="size-4" />
              Download
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
