"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X, Download, Zap } from "lucide-react";
import { SITE_NAME, NAV_LINKS, APP_DOWNLOAD_URL, trackDownloadClick } from "@/config/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-[100] w-[92%] max-w-5xl rounded-2xl border border-line px-5 py-3 flex items-center justify-between transition-all duration-300 ${
        scrolled ? "bg-bg/90 shadow-2xl shadow-black/60 border-line" : "bg-bg/60 border-line/60"
      } backdrop-blur-xl`}
    >
      <a href="/#home" className="flex items-center gap-2.5 font-extrabold text-lg group">
        <div className="relative w-7 h-7 rounded-lg overflow-hidden bg-gradient-to-br from-orange to-orange-dark p-0.5 shadow-md shadow-orange/30 group-hover:scale-105 transition-transform">
          <div className="w-full h-full bg-bg rounded-[6px] flex items-center justify-center">
            <Zap className="w-4 h-4 text-orange fill-orange" />
          </div>
        </div>
        <span className="tracking-tight text-white flex items-center gap-1.5">
          {SITE_NAME}
          <span className="w-1.5 h-1.5 rounded-full bg-orange" />
        </span>
      </a>

      <div className="hidden md:flex items-center gap-8 text-sm text-ink-2">
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href} className="hover:text-orange transition-colors">
            {l.label}
          </a>
        ))}
      </div>

      <div className="hidden md:flex items-center gap-3">
        <div className="inline-flex items-center gap-1.5 text-xs text-ink-2 px-3 py-1.5 rounded-full bg-bg3/80 border border-line">
          <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
          <span>Express Delivery</span>
        </div>
        <a
          href={APP_DOWNLOAD_URL}
          onClick={() => trackDownloadClick("navbar")}
          className="inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-full bg-gradient-to-br from-orange to-orange-dark text-bg shadow-amber hover:-translate-y-0.5 hover:shadow-[0_12px_36px_-6px_rgba(255,193,7,0.55)] transition-all"
        >
          <Download size={16} /> Download App
        </a>
      </div>

      <button
        aria-label="Toggle menu"
        onClick={() => setOpen((o) => !o)}
        className="md:hidden w-9 h-9 rounded-lg glass flex items-center justify-center text-ink-1"
      >
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>

      {open && (
        <div className="absolute top-16 left-0 right-0 md:hidden bg-bg3/95 border border-line backdrop-blur-xl rounded-2xl p-5 flex flex-col gap-4 shadow-2xl">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-ink-2 hover:text-orange">
              {l.label}
            </a>
          ))}
          <a
            href={APP_DOWNLOAD_URL}
            onClick={() => trackDownloadClick("mobile_nav")}
            className="inline-flex items-center justify-center gap-2 text-sm font-bold px-5 py-3 rounded-full bg-gradient-to-br from-orange to-orange-dark text-bg shadow-amber"
          >
            <Download size={16} /> Download App
          </a>
        </div>
      )}
    </nav>
  );
}
