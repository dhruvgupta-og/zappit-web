"use client";

import { Download, Zap } from "lucide-react";
import { APP_DOWNLOAD_URL, trackDownloadClick } from "@/config/site";

export default function FinalCTA() {
  return (
    <section className="relative py-24 md:py-36 text-center overflow-hidden">
      <div
        className="absolute w-[500px] h-[500px] md:w-[650px] md:h-[650px] left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,193,7,0.18), rgba(255,145,0,0.06) 40%, transparent 70%)" }}
      />
      <div className="relative max-w-3xl mx-auto px-5 sm:px-8 flex flex-col items-center">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-orange to-orange-dark p-0.5 shadow-amber mb-7 flex items-center justify-center">
          <div className="w-full h-full bg-bg rounded-[14px] flex items-center justify-center">
            <Zap className="w-6 h-6 md:w-7 md:h-7 text-orange fill-orange" />
          </div>
        </div>

        <h2 className="text-5xl sm:text-6xl md:text-8xl font-black leading-[0.98] text-white tracking-tight">
          Hungry?
          <br />
          <span className="text-gradient-amber">Zappit.</span>
        </h2>
        <p className="mt-5 text-base sm:text-lg text-ink-2 max-w-md">
          Join thousands of students ordering without the queues. Install today.
        </p>
        <a
          href={APP_DOWNLOAD_URL}
          download="ZAPPIT.apk"
          onClick={() => trackDownloadClick("final_cta")}
          className="mt-8 inline-flex items-center gap-2.5 font-bold text-base px-8 md:px-9 py-4 rounded-full bg-gradient-to-br from-orange to-orange-dark text-bg shadow-amber hover:-translate-y-0.5 hover:shadow-[0_14px_40px_-6px_rgba(255,193,7,0.6)] transition-all"
        >
          <Download size={19} /> Download Zappit App
        </a>
        <p className="mt-4 text-xs text-ink-2">Available for Android • Instant installation</p>
      </div>
    </section>
  );
}
