import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { PhoneMockup } from "./PhoneMockup";
import { GlowOrb, Particles } from "./Ambient";
import { Reveal } from "./Reveal";
import { DownloadButton } from "./DownloadButton";

const CHIPS = [
  { label: "Quick ordering", pos: "left-0 top-[18%]" },
  { label: "Campus favourites", pos: "right-0 top-[30%]" },
  { label: "Order tracking", pos: "left-2 bottom-[26%]" },
  { label: "Easy checkout", pos: "right-2 bottom-[14%]" },
];

export function Spotlight() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rotate = useTransform(scrollYProgress, [0, 1], [10, -10]);
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section
      ref={ref}
      aria-labelledby="spotlight-title"
      className="relative overflow-hidden bg-surface py-24 sm:py-32"
    >
      <GlowOrb className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" size={860} opacity={0.22} />
      <Particles count={12} />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-2">
        <Reveal className="flex flex-col items-start">
          <h2
            id="spotlight-title"
            className="text-4xl font-extrabold leading-[0.95] text-gradient sm:text-5xl lg:text-6xl"
          >
            One app.
            <br />
            <span className="text-gradient-primary">Every craving.</span>
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
            Zappit brings your entire campus food scene into a single, beautifully fast experience —
            from the canteen queue you'd rather skip to the late-night kitchen down the block.
          </p>
          <div className="mt-9">
            <DownloadButton location="spotlight" size="lg" />
          </div>
        </Reveal>

        <div className="relative mx-auto w-full max-w-[20rem]" style={{ perspective: "1200px" }}>
          <motion.div
            style={reduced ? {} : { rotateY: rotate, y }}
            className="preserve-3d"
          >
            <PhoneMockup screen="tracking" />
          </motion.div>
          {CHIPS.map((c, i) => (
            <motion.span
              key={c.label}
              animate={reduced ? { y: 0 } : { y: [0, -10, 0] }}
              transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
              className={`absolute ${c.pos} rounded-full glass-strong px-3.5 py-2 text-[11px] font-semibold text-foreground shadow-elevated`}
            >
              {c.label}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
