import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ZapMark } from "./ZapLogo";

/** Very short premium intro reveal. Never blocks longer than ~750ms. */
export function IntroLoader() {
  const reduced = useReducedMotion();
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setDone(true), reduced ? 0 : 700);
    return () => window.clearTimeout(t);
  }, [reduced]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          aria-hidden
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] grid place-items-center bg-background"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-4"
          >
            <ZapMark className="size-14" />
            <span className="font-display text-sm font-bold tracking-[0.35em] text-subtle">
              ZAPPIT
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
