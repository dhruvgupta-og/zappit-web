import { useRef, useState } from "react";
import { motion } from "motion/react";
import {
  Bell,
  GraduationCap,
  LayoutGrid,
  MapPin,
  Sparkles,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { usePointerTilt } from "@/hooks/use-pointer-tilt";
import { SectionHeading } from "./Reveal";
import { cn } from "@/lib/utils";

type Feature = {
  icon: LucideIcon;
  title: string;
  copy: string;
  span: string;
  visual: "orbit" | "map" | "bars" | "pulse" | "minimal" | "campus";
};

const FEATURES: Feature[] = [
  {
    icon: GraduationCap,
    title: "Campus-first ordering",
    copy: "Built around how students actually order food.",
    span: "md:col-span-2 md:row-span-2",
    visual: "orbit",
  },
  {
    icon: MapPin,
    title: "Discover nearby food",
    copy: "Find popular meals and campus outlets quickly.",
    span: "md:col-span-2",
    visual: "map",
  },
  {
    icon: Zap,
    title: "Fast checkout",
    copy: "Spend less time ordering and more time enjoying.",
    span: "md:col-span-2",
    visual: "bars",
  },
  {
    icon: Bell,
    title: "Live order experience",
    copy: "Know what is happening with your order.",
    span: "md:col-span-2",
    visual: "pulse",
  },
  {
    icon: LayoutGrid,
    title: "Simple interface",
    copy: "No unnecessary complexity. Just food, fast.",
    span: "md:col-span-2",
    visual: "minimal",
  },
  {
    icon: Sparkles,
    title: "Built for students",
    copy: "A focused food delivery experience designed around campus life.",
    span: "md:col-span-2",
    visual: "campus",
  },
];

function Visual({ kind }: { kind: Feature["visual"] }) {
  if (kind === "orbit")
    return (
      <div className="relative mt-6 h-44 w-full sm:h-64">
        <span
          aria-hidden
          className="absolute left-1/2 top-1/2 size-20 -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-surface-2 shadow-glow-sm"
        />
        <span
          aria-hidden
          className="absolute left-1/2 top-1/2 size-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/40 animate-pulse-ring"
        />
        <span
          aria-hidden
          className="absolute left-1/2 top-1/2 size-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-border-strong animate-spin-slow"
        />
        {["₹149", "12 min", "Canteen", "4.8★"].map((t, i) => (
          <motion.span
            key={t}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
            className="absolute rounded-full glass px-3 py-1.5 text-[11px] font-semibold text-foreground"
            style={{
              left: `${[6, 62, 12, 58][i]}%`,
              top: `${[12, 20, 70, 66][i]}%`,
            }}
          >
            {t}
          </motion.span>
        ))}
      </div>
    );

  if (kind === "map")
    return (
      <div
        className="relative mt-6 h-28 overflow-hidden rounded-2xl bg-surface-2"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(1 0 0 / 5%) 1px, transparent 1px), linear-gradient(to bottom, oklch(1 0 0 / 5%) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      >
        {[20, 48, 74].map((l, i) => (
          <span
            key={l}
            className="absolute size-2.5 rounded-full bg-primary shadow-glow-sm"
            style={{ left: `${l}%`, top: `${30 + i * 16}%` }}
          />
        ))}
      </div>
    );

  if (kind === "bars")
    return (
      <div className="mt-6 flex h-24 items-end gap-2">
        {[35, 55, 40, 80, 60, 100].map((h, i) => (
          <motion.span
            key={i}
            initial={{ height: 6 }}
            whileInView={{ height: `${h}%` }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, delay: i * 0.08 }}
            className="w-full rounded-t-md"
            style={{ background: "var(--gradient-duo)", opacity: 0.35 + i * 0.11 }}
          />
        ))}
      </div>
    );

  if (kind === "pulse")
    return (
      <div className="mt-6 flex flex-col gap-2">
        {["Order confirmed", "Prepared", "Out for delivery"].map((s, i) => (
          <div key={s} className="flex items-center gap-2.5 rounded-xl bg-surface-2 px-3 py-2">
            <span className={cn("size-2 rounded-full", i < 2 ? "bg-primary" : "bg-subtle/50")} />
            <span className="text-xs text-muted-foreground">{s}</span>
          </div>
        ))}
      </div>
    );

  if (kind === "minimal")
    return (
      <div className="mt-6 space-y-2">
        <div className="h-3 w-2/3 rounded-full bg-surface-2" />
        <div className="h-3 w-1/2 rounded-full bg-surface-2" />
        <div className="h-3 w-1/4 rounded-full bg-primary/50" />
      </div>
    );

  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {["Hostels", "Blocks", "Libraries", "Late night"].map((t) => (
        <span key={t} className="rounded-full glass px-3 py-1.5 text-[11px] text-muted-foreground">
          {t}
        </span>
      ))}
    </div>
  );
}

function BentoCard({ feature }: { feature: Feature }) {
  const { ref, tilt, enabled, onPointerMove, onPointerLeave } = usePointerTilt(4);
  const cardRef = useRef<HTMLDivElement>(null);
  const [spot, setSpot] = useState({ x: 50, y: 0, on: false });
  const Icon = feature.icon;

  const track = (e: React.PointerEvent<HTMLDivElement>) => {
    onPointerMove(e);
    const r = cardRef.current?.getBoundingClientRect();
    if (!r) return;
    setSpot({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
      on: e.pointerType === "mouse",
    });
  };

  const leave = () => {
    onPointerLeave();
    setSpot((s) => ({ ...s, on: false }));
  };

  return (
    <motion.li
      variants={fadeUp}
      className={cn("relative", feature.span)}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        ref={ref}
        onPointerMove={track}
        onPointerLeave={leave}
        animate={enabled ? { rotateX: tilt.rx, rotateY: tilt.ry } : { rotateX: 0, rotateY: 0 }}
        transition={{ type: "spring", stiffness: 110, damping: 18 }}
        className="group relative h-full"
      >
        <div
          ref={cardRef}
          className="relative flex h-full flex-col overflow-hidden rounded-3xl glass gradient-border p-6 transition-shadow duration-500 hover:shadow-elevated sm:p-7"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 transition-opacity duration-300"
            style={{
              opacity: spot.on ? 1 : 0,
              background: `radial-gradient(20rem 20rem at ${spot.x}% ${spot.y}%, color-mix(in oklab, var(--primary) 12%, transparent), transparent 70%)`,
            }}
          />
          <span
            className="relative grid size-11 place-items-center rounded-2xl text-primary-foreground shadow-glow-sm transition-transform duration-500 group-hover:-translate-y-1"
            style={{ background: "var(--gradient-duo)" }}
          >
            <Icon className="size-5" aria-hidden />
          </span>
          <h3 className="relative mt-5 font-display text-lg font-bold text-foreground">
            {feature.title}
          </h3>
          <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
            {feature.copy}
          </p>
          <div className="relative mt-auto">
            <Visual kind={feature.visual} />
          </div>
        </div>
      </motion.div>
    </motion.li>
  );
}

export function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Why Zappit"
          title={
            <>
              Designed for speed.
              <br />
              Tuned for campus.
            </>
          }
          subtitle="Every detail exists to shorten the distance between craving and first bite."
        />
        <motion.ul
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-4"
        >
          {FEATURES.map((f) => (
            <BentoCard key={f.title} feature={f} />
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
