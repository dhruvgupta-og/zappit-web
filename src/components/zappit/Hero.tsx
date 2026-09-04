import { motion } from "motion/react";
import { Bike, CheckCircle2, Clock, Flame, Star, Store, Timer } from "lucide-react";
import { usePointerTilt } from "@/hooks/use-pointer-tilt";
import { EASE_LUX, fadeUp, stagger } from "@/lib/motion";
import { DownloadButton, PlatformNote, SecondaryButton } from "./DownloadButton";
import { FloatingCard, PhoneMockup } from "./PhoneMockup";
import { GlowOrb, GridFloor, Particles } from "./Ambient";
import { GradientMesh } from "./GradientMesh";

const HEADLINE_TOP = ["Campus", "food."];
const HEADLINE_BOTTOM = ["At", "your", "fingertips."];

const TRUST = [
  { icon: Timer, label: "Under 20 min average" },
  { icon: Store, label: "Campus outlets" },
  { icon: Star, label: "Student approved" },
];

export function Hero() {
  const { ref, tilt, enabled, onPointerMove, onPointerLeave } = usePointerTilt(7);

  return (
    <section
      id="top"
      className="grain relative flex min-h-[100svh] items-center overflow-hidden pb-20 pt-28 sm:pt-32"
    >
      <GradientMesh intensity={0.9} />
      <GlowOrb className="-left-40 -top-32" size={640} opacity={0.26} />
      <GlowOrb className="right-[-10rem] top-1/3" size={520} opacity={0.16} />
      <GridFloor />
      <Particles />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <motion.div
          variants={stagger(0.09, 0.12)}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2.5 rounded-full glass px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground"
          >
            <span className="relative grid size-2 place-items-center">
              <span className="absolute inset-0 rounded-full bg-primary" />
              <span className="absolute inset-0 rounded-full bg-primary animate-pulse-ring" />
            </span>
            Now live on campus
          </motion.span>

          <h1 className="mt-6 text-balance font-display text-[2.7rem] font-extrabold leading-[0.94] tracking-[-0.03em] sm:text-6xl lg:text-[4.4rem]">
            <span className="block">
              {HEADLINE_TOP.map((w, i) => (
                <motion.span
                  key={w}
                  initial={{ opacity: 0, y: "0.5em", filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: "0em", filter: "blur(0px)" }}
                  transition={{ duration: 0.9, ease: EASE_LUX, delay: 0.15 + i * 0.09 }}
                  className="mr-[0.28em] inline-block text-gradient"
                >
                  {w}
                </motion.span>
              ))}
            </span>
            <span className="block">
              {HEADLINE_BOTTOM.map((w, i) => (
                <motion.span
                  key={w}
                  initial={{ opacity: 0, y: "0.5em", filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: "0em", filter: "blur(0px)" }}
                  transition={{ duration: 0.9, ease: EASE_LUX, delay: 0.34 + i * 0.09 }}
                  className="mr-[0.28em] inline-block text-gradient-duo animate-gradient-pan"
                >
                  {w}
                </motion.span>
              ))}
            </span>
          </h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            From your favourite campus outlets to your doorstep — Zappit makes ordering food
            faster, simpler, and better.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col items-center gap-4 sm:flex-row lg:items-start"
          >
            <DownloadButton location="hero" size="lg" />
            <SecondaryButton href="#features">Explore Features</SecondaryButton>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-5">
            <PlatformNote />
          </motion.div>

          <motion.ul
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-border pt-6 lg:justify-start"
          >
            {TRUST.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-xs text-subtle">
                <Icon className="size-3.5 text-primary" aria-hidden />
                {label}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          ref={ref}
          onPointerMove={onPointerMove}
          onPointerLeave={onPointerLeave}
          initial={{ opacity: 0, y: 48, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, ease: EASE_LUX, delay: 0.15 }}
          className="relative mx-auto w-full max-w-[19rem] sm:max-w-[21rem]"
          style={{ perspective: "1200px" }}
        >
          <span
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-[90px]"
            style={{ background: "var(--gradient-duo)" }}
          />
          <motion.div
            animate={enabled ? { rotateX: tilt.rx, rotateY: tilt.ry } : { rotateX: 0, rotateY: 0 }}
            transition={{ type: "spring", stiffness: 90, damping: 16 }}
            className="preserve-3d relative"
          >
            <div className="animate-float">
              <PhoneMockup screen="home" />
            </div>

            <FloatingCard
              className="absolute -left-10 top-16 sm:-left-16"
              icon={<CheckCircle2 className="size-4" aria-hidden />}
              title="Order confirmed"
              meta="Central Canteen"
              style={{ transform: "translateZ(60px)" }}
            />
            <FloatingCard
              className="absolute -right-8 top-1/3 sm:-right-14"
              icon={<Bike className="size-4" aria-hidden />}
              title="Rider on the way"
              meta="Block C • 400m"
              style={{ transform: "translateZ(80px)" }}
            />
            <FloatingCard
              className="absolute -left-8 bottom-28 sm:-left-14"
              icon={<Clock className="size-4" aria-hidden />}
              title="Delivered in 12 min"
              style={{ transform: "translateZ(45px)" }}
            />
            <FloatingCard
              className="absolute -right-4 bottom-14 sm:-right-10"
              icon={<Flame className="size-4" aria-hidden />}
              title="₹149"
              meta="Campus favourite"
              style={{ transform: "translateZ(70px)" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
