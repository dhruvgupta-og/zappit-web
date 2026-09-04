import { motion } from "motion/react";
import { Compass, PartyPopper, ShoppingBag } from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { usePointerTilt } from "@/hooks/use-pointer-tilt";
import { SectionHeading } from "./Reveal";
import { GlowOrb } from "./Ambient";

const STEPS = [
  {
    n: "01",
    icon: Compass,
    title: "Explore",
    copy: "Browse food from your favourite campus outlets.",
  },
  {
    n: "02",
    icon: ShoppingBag,
    title: "Order",
    copy: "Choose your meal and place your order in seconds.",
  },
  {
    n: "03",
    icon: PartyPopper,
    title: "Enjoy",
    copy: "Track your order and enjoy food without the hassle.",
  },
];

function StepCard({ step }: { step: (typeof STEPS)[number] }) {
  const { ref, tilt, enabled, onPointerMove, onPointerLeave } = usePointerTilt(6);
  const Icon = step.icon;

  return (
    <motion.li variants={fadeUp} className="relative" style={{ perspective: "900px" }}>
      <motion.div
        ref={ref}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
        animate={enabled ? { rotateX: tilt.rx, rotateY: tilt.ry } : { rotateX: 0, rotateY: 0 }}
        transition={{ type: "spring", stiffness: 110, damping: 18 }}
        className="group relative flex h-full flex-col items-center gap-5 rounded-3xl glass gradient-border p-7 text-center transition-shadow duration-500 hover:shadow-elevated lg:items-start lg:text-left"
      >
        <span className="relative grid size-14 shrink-0 place-items-center rounded-full text-base font-extrabold text-primary-foreground shadow-glow-sm">
          <span
            aria-hidden
            className="absolute inset-0 rounded-full"
            style={{ background: "var(--gradient-duo)" }}
          />
          <span className="relative font-display">{step.n}</span>
        </span>

        <span className="grid size-12 place-items-center rounded-2xl bg-surface-2 text-primary transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105">
          <Icon className="size-5" aria-hidden />
        </span>
        <div>
          <h3 className="font-display text-xl font-bold text-foreground">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.copy}</p>
        </div>
      </motion.div>
    </motion.li>
  );
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden py-24 sm:py-32">
      <GlowOrb className="left-1/2 top-0 -translate-x-1/2" size={560} opacity={0.14} />
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="The process"
          title={
            <>
              Craving to delivered.
              <br />
              Three simple steps.
            </>
          }
          subtitle="Zappit keeps the whole journey short — discover, order, and eat."
        />

        <div className="relative mt-16">
          <motion.div
            aria-hidden
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="absolute left-[16%] right-[16%] top-[5.5rem] hidden h-px origin-left lg:block"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, color-mix(in oklab, var(--primary) 70%, transparent) 0 8px, transparent 8px 18px)",
            }}
          />
          <motion.ol
            variants={stagger(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="relative grid gap-6 md:grid-cols-3"
          >
            {STEPS.map((s) => (
              <StepCard key={s.n} step={s} />
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
