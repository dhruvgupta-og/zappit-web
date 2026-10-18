import type { Metadata } from "next";
import Image from "next/image";
import { Download, Info, ShieldCheck, ArrowLeft, Smartphone } from "lucide-react";
import { APP_DOWNLOAD_URL, APP_VERSION_LABEL, SITE_NAME } from "@/config/site";

export const metadata: Metadata = {
  title: `Download ${SITE_NAME} — Android APK (Official)`,
  description: `Get the official ${SITE_NAME} Android app directly without Play Store. Fast campus food ordering, real-time rider tracking, and zero queue.`,
  alternates: { canonical: "/download" },
  openGraph: {
    title: `Download ${SITE_NAME} — Android APK`,
    description: `Get the official ${SITE_NAME} Android app directly without Play Store. Fast campus food ordering and delivery.`,
    url: "/download",
    images: ["/zappit/app-icon.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: `Download ${SITE_NAME} — Android APK`,
    description: `Get the official ${SITE_NAME} Android app directly without Play Store. Fast campus food ordering and delivery.`,
    images: ["/zappit/app-icon.png"],
  },
};

const steps = [
  "Tap 'Download APK' to download the latest Zappit Android package directly.",
  "Open the downloaded file from your browser downloads or notification shade.",
  "If Android prompts 'Install unknown apps', tap 'Settings' and toggle 'Allow from this source'.",
  "Tap 'Install' and wait a few seconds for the setup to complete.",
  "Launch Zappit, select your campus hostel/department, and start ordering!",
];

export default function DownloadPage() {
  return (
    <main className="min-h-screen bg-bg text-ink-1 pt-28 pb-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] -z-10 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255,193,7,0.1), transparent 70%)",
        }}
      />

      <div className="max-w-3xl mx-auto px-8">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm text-ink-2 hover:text-orange transition-colors"
        >
          <ArrowLeft size={16} /> Back to {SITE_NAME} Home
        </a>

        <div className="mt-6 mb-3">
          <span className="text-xs font-bold text-orange uppercase tracking-wider">Official Android Release</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-1">
            Download <span className="text-gradient-amber">{SITE_NAME}</span>
          </h1>
        </div>
        <p className="text-ink-2 max-w-lg text-base">
          Get the official {SITE_NAME} Android app directly — lightweight, battery friendly, and built for instant campus food ordering.
        </p>

        {/* Download card with official app icon */}
        <div className="mt-10 bg-gradient-to-br from-bg3 to-bg2 border border-line rounded-3xl p-8 grid sm:grid-cols-[100px_1fr_auto] gap-6 items-center text-center sm:text-left shadow-card">
          <div className="relative w-[92px] h-[92px] mx-auto sm:mx-0 rounded-2xl overflow-hidden bg-bg border border-line shadow-lg">
            <Image
              src="/zappit/app-icon.png"
              alt={`${SITE_NAME} app icon`}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">{SITE_NAME} for Android</h2>
            <div className="flex flex-wrap items-center gap-2 mt-1.5 justify-center sm:justify-start">
              <span className="text-xs font-semibold text-orange bg-orange/10 border border-orange/30 px-2.5 py-0.5 rounded-full">
                {APP_VERSION_LABEL}
              </span>
              <span className="text-ink-2 text-xs">• Verified APK</span>
              <span className="text-ink-2 text-xs">• Campus Ready</span>
            </div>
          </div>
          <a
            href={APP_DOWNLOAD_URL}
            download="ZAPPIT.apk"
            className="inline-flex items-center justify-center gap-2 font-bold text-sm px-7 py-4 rounded-full bg-gradient-to-br from-orange to-orange-dark text-bg shadow-amber hover:-translate-y-0.5 hover:shadow-[0_12px_36px_-6px_rgba(255,193,7,0.55)] transition-all"
          >
            <Download size={18} /> Download APK
          </a>
        </div>

        {/* QR Scan alternative */}
        <div className="mt-8 p-6 rounded-2xl bg-bg3/60 border border-line flex flex-wrap items-center gap-6">
          <div className="p-2.5 rounded-xl bg-white shadow-md">
            <div
              className="w-[100px] h-[100px] rounded"
              style={{
                backgroundImage:
                  "radial-gradient(#000 3px, transparent 3px), radial-gradient(#000 3px, transparent 3px)",
                backgroundPosition: "0 0, 7px 7px",
                backgroundSize: "14px 14px",
              }}
              aria-label="QR code placeholder pointing to the APK download URL"
            />
          </div>
          <div className="flex-1 min-w-[200px]">
            <div className="text-sm font-bold text-white flex items-center gap-2">
              <Smartphone size={16} className="text-orange" />
              Scan to install on mobile
            </div>
            <p className="text-ink-2 text-xs mt-1 leading-relaxed">
              Open your smartphone camera and point at this code to start the APK download directly on your phone.
            </p>
          </div>
        </div>

        {/* Installation guide */}
        <div className="mt-14">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span>Easy installation steps</span>
            <span className="text-xs text-orange bg-orange/10 px-2 py-0.5 rounded-full font-semibold">1-minute setup</span>
          </h3>
          <div className="space-y-3">
            {steps.map((s, i) => (
              <div key={s} className="flex gap-4 p-4 rounded-xl bg-bg3/50 border border-line items-start">
                <div className="w-7 h-7 rounded-full bg-orange/15 border border-orange/40 text-orange text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <p className="text-ink-1 text-sm leading-relaxed">{s}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Security badge */}
        <div className="mt-12 flex gap-3.5 p-5 rounded-2xl bg-bg3 border border-line text-sm text-ink-2">
          <Info size={19} className="text-orange flex-shrink-0 mt-0.5" />
          <span>
            <strong className="text-white">Security guarantee:</strong> Always ensure you download Zappit APK from this official domain. Zappit will never ask for unnecessary device permissions like contacts, camera, or SMS.
          </span>
        </div>
      </div>
    </main>
  );
}
