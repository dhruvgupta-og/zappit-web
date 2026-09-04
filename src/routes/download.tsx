import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/zappit/Navbar";
import { Footer } from "@/components/zappit/Footer";
import { DownloadButton } from "@/components/zappit/DownloadButton";
import { AndroidIcon } from "@/components/zappit/AndroidIcon";
import { QrPanel } from "@/components/zappit/QrPanel";
import { SecurityNotice } from "@/components/zappit/DownloadSection";
import { GlowOrb, GridFloor } from "@/components/zappit/Ambient";
import { ZapMark } from "@/components/zappit/ZapLogo";
import { Reveal } from "@/components/zappit/Reveal";
import { APP_PLATFORM, APP_SIZE, APP_VERSION } from "@/config/site";

const TITLE = "Download Zappit for Android — APK";
const DESCRIPTION =
  "Download the Zappit Android APK directly and start ordering food from your campus outlets in minutes.";

const STEPS = [
  "Download the Zappit APK.",
  "Open the downloaded file.",
  "Allow installation from your browser if Android requests permission.",
  "Install Zappit.",
  "Open the app and start ordering.",
];

export const Route = createFileRoute("/download")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/download" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/download" }],
  }),
  component: DownloadPage,
});

function DownloadPage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden pb-24 pt-32 sm:pt-40">
        <GlowOrb className="left-1/2 top-0 -translate-x-1/2" size={760} opacity={0.24} />
        <GridFloor />
        <div className="relative mx-auto max-w-5xl px-5">
          <Reveal className="flex flex-col items-center text-center">
            <ZapMark className="size-16 rounded-2xl" />
            <p className="mt-5 text-xs uppercase tracking-[0.22em] text-subtle">
              Official Android build
            </p>
            <h1 className="mt-3 text-4xl font-extrabold leading-[1] text-gradient sm:text-6xl">
              Download Zappit
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {DESCRIPTION}
            </p>
            <div className="mt-9">
              <DownloadButton
                location="download-page"
                label="Download Zappit for Android"
                size="lg"
                icon={<AndroidIcon className="size-5" />}
              />
            </div>
            <p className="mt-3 text-xs text-subtle">APK • Android</p>
          </Reveal>

          <div className="mt-16 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <Reveal className="rounded-3xl glass gradient-border p-7">
              <h2 className="text-xl font-bold text-foreground">Installation guide</h2>
              <ol className="mt-6 flex flex-col gap-4">
                {STEPS.map((s, i) => (
                  <motion.li
                    key={s}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <span className="grid size-6 shrink-0 place-items-center rounded-full bg-primary/15 text-[11px] font-bold text-primary">
                      {i + 1}
                    </span>
                    {s}
                  </motion.li>
                ))}
              </ol>
              <SecurityNotice className="mt-8" />
              <p className="mt-4 flex items-start gap-2 text-xs text-subtle">
                <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-primary" aria-hidden />
                Only install Zappit APK files downloaded from the official Zappit domain. Files from
                other sources may be modified.
              </p>
            </Reveal>

            <Reveal className="flex flex-col gap-6" delay={0.1}>
              <QrPanel />
              <dl className="rounded-3xl glass p-6 text-sm">
                {[
                  ["Version", APP_VERSION],
                  ["File size", APP_SIZE],
                  ["Requires", APP_PLATFORM],
                  ["Format", "APK (direct download)"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="flex items-center justify-between border-b border-border py-2.5 last:border-0"
                  >
                    <dt className="text-subtle">{k}</dt>
                    <dd className="font-semibold text-foreground">{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
