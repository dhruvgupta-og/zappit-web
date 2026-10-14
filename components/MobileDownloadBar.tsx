"use client";

import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { APP_DOWNLOAD_URL, trackDownloadClick } from "@/config/site";

/**
 * Fixed bottom CTA shown on mobile once the user has scrolled past the hero,
 * hidden again while the main #download section is in view.
 */
export default function MobileDownloadBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function onScroll() {
      const hero = document.getElementById("home");
      const dl = document.getElementById("download");
      if (!hero || !dl) return;
      const heroBottom = hero.offsetHeight;
      const dlRect = dl.getBoundingClientRect();
      const dlVisible = dlRect.top < window.innerHeight && dlRect.bottom > 0;
      setShow(window.scrollY > heroBottom && !dlVisible);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`md:hidden fixed bottom-4 left-4 right-4 z-[90] flex items-center justify-between gap-3 rounded-2xl border border-line bg-bg3/95 backdrop-blur-xl px-4 py-3 shadow-2xl shadow-black/70 transition-transform duration-300 ${
        show ? "translate-y-0" : "translate-y-[140%]"
      }`}
    >
      <div className="flex items-center gap-2 text-sm font-semibold text-white">
        <span className="w-6 h-6 rounded-lg bg-gradient-to-br from-orange to-orange-dark p-0.5 flex items-center justify-center shadow-sm">
          <span className="w-full h-full bg-bg rounded-[6px] flex items-center justify-center text-[10px] text-orange">⚡</span>
        </span>
        <span>Get Zappit App</span>
      </div>
      <a
        href={APP_DOWNLOAD_URL}
        onClick={() => trackDownloadClick("mobile_sticky")}
        className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full bg-gradient-to-br from-orange to-orange-dark text-bg shadow-amber"
      >
        <Download size={14} /> Download
      </a>
    </div>
  );
}
