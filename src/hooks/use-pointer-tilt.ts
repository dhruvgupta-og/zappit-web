import { useCallback, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { useIsMobile } from "@/hooks/use-mobile";

export type Tilt = { rx: number; ry: number; px: number; py: number };

const NEUTRAL: Tilt = { rx: 0, ry: 0, px: 0.5, py: 0.5 };

/**
 * Subtle pointer-driven tilt for cards / mockups.
 * Disabled on touch devices and when the user prefers reduced motion.
 */
export function usePointerTilt(max = 8) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState<Tilt>(NEUTRAL);
  const reduced = useReducedMotion();
  const isMobile = useIsMobile();
  const enabled = !reduced && !isMobile;

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!enabled || e.pointerType !== "mouse") return;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      setTilt({
        rx: (0.5 - py) * max * 2,
        ry: (px - 0.5) * max * 2,
        px,
        py,
      });
    },
    [enabled, max],
  );

  const onPointerLeave = useCallback(() => setTilt(NEUTRAL), []);

  return { ref, tilt, enabled, onPointerMove, onPointerLeave };
}
