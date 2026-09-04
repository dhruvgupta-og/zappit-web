import { motion, useReducedMotion } from "motion/react";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { DownloadButton, PlatformNote } from "./DownloadButton";
import { GlowOrb, Particles } from "./Ambient";
import { GradientMesh } from "./GradientMesh";

const FOOD = ["🍕", "🍔", "🍟", "🥤", "🌮", "🍜", "🍩", "☕"];

function FoodParticles() {
  const reduced = useReducedMotion();
  if (reduced) return null;
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {FOOD.map((f, i) => (
        <span
          key={f}
          className="absolute bottom-0 text-2xl opacity-0 animate-rise sm:text-3xl"
          style={{
            left: `${8 + i * 11}%`,
            animationDelay: `${i * 1.7}s`,
            animationDuration: `${13 + (i % 4) * 2}s`,
          }}
        >
          {f}
        </span>
      ))}
    </div>
  );
}

export function FinalCta() {
  return (
    <section
      aria-labelledby="final-cta-title"
      className="grain relative flex min-h-[80svh] items-center overflow-hidden py-24"
    >
      <GradientMesh intensity={0.8} />
      <GlowOrb
        className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        size={900}
        opacity={0.3}
      />
      <Particles count={14} />
      <FoodParticles />
      <motion.div
        variants={stagger(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="relative mx-auto flex max-w-4xl flex-col items-center px-5 text-center"
      >
        <motion.h2
          id="final-cta-title"
          variants={fadeUp}
          className="font-display text-[3.2rem] font-extrabold leading-[0.9] tracking-[-0.04em] text-gradient sm:text-7xl lg:text-8xl"
        >
          Hungry?
          <br />
          <span className="text-gradient-duo animate-gradient-pan">Zappit.</span>
        </motion.h2>
        <motion.div variants={fadeUp} className="mt-12">
          <DownloadButton location="final-cta" size="lg" />
        </motion.div>
        <motion.div variants={fadeUp} className="mt-5">
          <PlatformNote />
        </motion.div>
      </motion.div>
    </section>
  );
}
