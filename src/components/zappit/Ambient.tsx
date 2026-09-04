import { useMemo } from "react";
import { useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

/** Soft orange orb used for ambient lighting. */
export function GlowOrb({
  className,
  size = 620,
  opacity = 0.28,
}: {
  className?: string;
  size?: number;
  opacity?: number;
}) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute rounded-full blur-[110px]", className)}
      style={{
        width: size,
        height: size,
        opacity,
        background:
          "radial-gradient(circle at center, var(--primary) 0%, color-mix(in oklab, var(--primary) 30%, transparent) 45%, transparent 72%)",
      }}
    />
  );
}

/** 3D perspective grid floor. */
export function GridFloor({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-x-0 bottom-0 h-[55%] overflow-hidden", className)}
      style={{ perspective: "600px" }}
    >
      <div
        className="grid-bg absolute inset-x-[-30%] bottom-0 h-full origin-bottom"
        style={{
          transform: "rotateX(72deg)",
          maskImage: "linear-gradient(to top, oklch(1 0 0 / 55%), transparent 78%)",
          WebkitMaskImage: "linear-gradient(to top, oklch(1 0 0 / 55%), transparent 78%)",
        }}
      />
    </div>
  );
}

/** Lightweight CSS-only ambient particles. */
export function Particles({ count = 18, className }: { count?: number; className?: string }) {
  const reduced = useReducedMotion();
  const dots = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: (i * 37) % 100,
        top: (i * 61) % 100,
        delay: (i % 7) * 0.9,
        duration: 7 + (i % 5) * 1.6,
        size: i % 3 === 0 ? 3 : 2,
      })),
    [count],
  );

  if (reduced) return null;

  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {dots.map((d, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-primary/70 animate-drift"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
            animationDelay: `${d.delay}s`,
            animationDuration: `${d.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

export function SectionDivider() {
  return <div aria-hidden className="hairline mx-auto h-px w-full max-w-6xl" />;
}
