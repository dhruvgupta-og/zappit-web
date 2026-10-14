"use client";

import { useState } from "react";
import Image from "next/image";
import { Download, Info, ShieldCheck, QrCode } from "lucide-react";
import { APP_DOWNLOAD_URL, trackDownloadClick, APP_VERSION_LABEL } from "@/config/site";

export default function DownloadSection() {
  const [loading, setLoading] = useState(false);

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    trackDownloadClick("download_section");
    setLoading(true);
    setTimeout(() => {
      window.location.href = APP_DOWNLOAD_URL;
      setLoading(false);
    }, 500);
  }

  return (
    <section id="download" className="bg-bg2/90 border-y border-line py-32 relative overflow-hidden">
      {/* Background radial glow */}
      <div
        className="absolute bottom-0 left-1/4 w-[600px] h-[400px] -z-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,193,7,0.08), transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
        <div>
          <span className="text-xs font-bold text-orange uppercase tracking-wider">Fast Setup</span>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mt-2 text-white">
            Your next meal is
            <br />
            <span className="text-gradient-amber">one tap away.</span>
          </h2>
          <p className="mt-5 text-ink-2 text-base max-w-md leading-relaxed">
            Download Zappit and experience the fastest way to order food around your college campus.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button
              onClick={handleClick}
              className="inline-flex items-center gap-2.5 font-bold text-base px-8 py-4 rounded-full bg-gradient-to-br from-orange to-orange-dark text-bg shadow-amber hover:-translate-y-0.5 hover:shadow-[0_14px_38px_-6px_rgba(255,193,7,0.55)] transition-all disabled:opacity-70"
              disabled={loading}
            >
              <Download size={19} /> {loading ? "Preparing download…" : "Download Zappit for Android"}
            </button>
            <div className="flex items-center gap-2 text-xs text-ink-2">
              <ShieldCheck size={16} className="text-success" />
              <span>Verified APK • {APP_VERSION_LABEL}</span>
            </div>
          </div>

          <div className="mt-8 flex gap-3 p-4 rounded-2xl bg-bg3/80 border border-line max-w-lg text-sm text-ink-2">
            <Info size={18} className="text-orange flex-shrink-0 mt-0.5" />
            <span>
              <strong className="text-white">Installing on Android:</strong> Android may ask you to allow
              installation from this source. Only download Zappit from this official campus portal.
            </span>
          </div>
        </div>

        {/* QR Code Card */}
        <div className="bg-bg3 border border-line rounded-3xl p-8 text-center shadow-card relative flex flex-col items-center">
          <div className="relative mb-5 p-3 rounded-2xl bg-white shadow-md">
            <div
              className="w-[140px] h-[140px] rounded-lg"
              style={{
                backgroundImage:
                  "radial-gradient(#000 3px, transparent 3px), radial-gradient(#000 3px, transparent 3px)",
                backgroundPosition: "0 0, 8px 8px",
                backgroundSize: "16px 16px",
              }}
              aria-label="QR code placeholder pointing to the APK download URL"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-9 h-9 rounded-xl bg-bg p-0.5 shadow-md flex items-center justify-center">
                <div className="w-full h-full bg-orange rounded-[8px] flex items-center justify-center text-xs font-black text-bg">
                  ⚡
                </div>
              </div>
            </div>
          </div>
          <div className="text-sm font-bold text-white flex items-center gap-1.5 justify-center">
            <QrCode size={16} className="text-orange" />
            Scan to download on phone
          </div>
          <p className="text-xs text-ink-2 mt-1">Point your camera to begin APK download</p>
        </div>
      </div>
    </section>
  );
}
