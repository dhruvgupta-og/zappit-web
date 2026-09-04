import { CheckCircle2, Download, ShieldAlert, Smartphone } from "lucide-react";
import { motion } from "motion/react";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { APP_PLATFORM, APP_SIZE, APP_VERSION } from "@/config/site";
import { DownloadButton } from "./DownloadButton";
import { QrPanel } from "./QrPanel";
import { GlowOrb } from "./Ambient";
import { GradientMesh } from "./GradientMesh";
import { AndroidIcon } from "./AndroidIcon";

export function SecurityNotice({ className }: { className?: string }) {
  return (
    <aside
      className={`flex items-start gap-3 rounded-2xl glass p-4 text-left ${className ?? ""}`}
      aria-label="Installation information"
    >
      <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary">
        <ShieldAlert className="size-4" aria-hidden />
      </span>
      <p className="text-xs leading-relaxed text-muted-foreground">
        <span className="block font-semibold text-foreground">Installing from the web?</span>
        Android may ask you to allow installation from this source. Only download Zappit from the
        official Zappit website.
      </p>
    </aside>
  );
}

const STEPS = [
  { icon: Download, label: "Tap download" },
  { icon: ShieldAlert, label: "Allow install" },
  { icon: CheckCircle2, label: "Start ordering" },
];

export function DownloadSection() {
  return (
    <section id="download" className="relative overflow-hidden py-24 sm:py-32">
      <GlowOrb className="left-1/2 top-1/3 -translate-x-1/2" size={780} opacity={0.24} />
      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="relative mx-auto max-w-5xl px-5"
      >
        <div className="grain relative overflow-hidden rounded-[2rem] glass-strong p-8 shadow-elevated sm:p-12">
          <GradientMesh intensity={0.55} />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_auto]">
            <div>
              <motion.span
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary"
              >
                <Smartphone className="size-3.5" aria-hidden /> Get the app
              </motion.span>
              <motion.h2
                variants={fadeUp}
                className="mt-5 text-3xl font-extrabold leading-[1.02] text-gradient sm:text-4xl md:text-5xl"
              >
                Your next meal is one tap away.
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base"
              >
                Download Zappit and experience a faster way to order food around your campus.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-8">
                <DownloadButton
                  location="download-section"
                  label="Download Zappit for Android"
                  size="lg"
                  icon={<AndroidIcon className="size-5" />}
                />
                <p className="mt-3 text-xs text-subtle">APK • Android</p>
              </motion.div>

              <motion.ol
                variants={fadeUp}
                className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3"
              >
                {STEPS.map(({ icon: Icon, label }, i) => (
                  <li key={label} className="flex items-center gap-2.5 text-xs text-muted-foreground">
                    <span className="grid size-7 place-items-center rounded-full bg-primary/12 text-primary">
                      <Icon className="size-3.5" aria-hidden />
                    </span>
                    <span>
                      <span className="mr-1.5 font-bold text-foreground">{i + 1}.</span>
                      {label}
                    </span>
                  </li>
                ))}
              </motion.ol>



              <motion.dl
                variants={fadeUp}
                className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6 text-xs"
              >
                {[
                  ["Version", APP_VERSION],
                  ["Size", APP_SIZE],
                  ["Requires", APP_PLATFORM],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="text-subtle">{k}</dt>
                    <dd className="mt-1 font-semibold text-foreground">{v}</dd>
                  </div>
                ))}
              </motion.dl>

              <motion.div variants={fadeUp}>
                <SecurityNotice className="mt-8" />
              </motion.div>
            </div>

            <motion.div variants={fadeUp} className="hidden justify-self-center lg:block">
              <QrPanel />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
