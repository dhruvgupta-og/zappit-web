import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

/** Subtle radial orange glow that follows the mouse (desktop only). */
export function CursorGlow() {
  const reduced = useReducedMotion();
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (reduced) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    let frame = 0;
    const onMove = (e: PointerEvent) => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        setPos({ x: e.clientX, y: e.clientY });
      });
    };
    window.addEventListener("pointermove", onMove);
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [reduced]);

  if (!pos) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-[5] hidden size-[420px] rounded-full opacity-40 blur-[90px] lg:block"
      style={{
        left: pos.x - 210,
        top: pos.y - 210,
        background:
          "radial-gradient(circle at center, color-mix(in oklab, var(--primary) 45%, transparent), transparent 68%)",
      }}
    />
  );
}
