"use client";

import { motion } from "framer-motion";
import { Download, Sparkles } from "lucide-react";
import { APP_DOWNLOAD_URL, trackDownloadClick } from "@/config/site";
import PhoneMockup from "./PhoneMockup";

export default function Hero() {
  return (
    <header
      id="home"
      className="relative min-h-screen flex items-start md:items-center pt-32 md:pt-36 pb-16 md:pb-0 overflow-hidden"
    >
      {/* Ambient background glow tailored to Zappit navy & amber palette */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(750px 520px at 20% 15%, rgba(255,193,7,0.12), transparent 70%), radial-gradient(900px 650px at 85% 35%, rgba(255,145,0,0.08), transparent 65%), radial-gradient(1000px 800px at 50% 90%, rgba(19,30,58,0.7), transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 -z-10 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(circle at 50% 35%, black, transparent 80%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-10 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold text-orange border border-orange/30 bg-orange/10 px-3.5 py-1.5 rounded-full mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-success animate-ping" />
            <span className="w-1.5 h-1.5 -ml-3.5 rounded-full bg-success" />
            <span>Built for campus life</span>
            <span className="text-ink-2">•</span>
            <span className="text-ink-2 font-normal">10-15 Min Express</span>
          </span>

          <h1 className="text-[40px] sm:text-6xl md:text-[68px] leading-[1.04] font-extrabold tracking-tight">
            <span className="bg-gradient-to-br from-orange via-[#FFD54F] to-orange-dark bg-clip-text text-transparent">
              Campus
            </span>{" "}
            food.
            <br />
            At your fingertips.
          </h1>

          <p className="mt-6 text-lg text-ink-2 max-w-md leading-relaxed">
            From your favourite <strong className="text-ink-1">campus outlets</strong> to your hostel doorstep — Zappit makes
            ordering food faster, simpler, and better.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={APP_DOWNLOAD_URL}
              onClick={() => trackDownloadClick("hero_primary")}
              className="inline-flex items-center gap-2.5 font-bold text-[15px] px-7 py-4 rounded-full bg-gradient-to-br from-orange to-orange-dark text-bg shadow-amber hover:-translate-y-0.5 hover:shadow-[0_14px_38px_-6px_rgba(255,193,7,0.55)] transition-all"
            >
              <Download size={18} /> Download Zappit
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 font-semibold text-[15px] px-7 py-4 rounded-full border border-line bg-bg3/70 hover:bg-bg3 hover:border-orange/40 text-ink-1 transition-all"
            >
              <Sparkles size={16} className="text-orange" /> Explore Features
            </a>
          </div>
          <p className="mt-4 text-xs text-ink-2 flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-orange" />
            Available for Android • Direct APK download
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <PhoneMockup />
        </motion.div>
      </div>
    </header>
  );
}
