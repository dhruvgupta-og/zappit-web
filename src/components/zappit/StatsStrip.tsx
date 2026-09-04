import { motion } from "motion/react";
import { GraduationCap, ShieldCheck, Wallet, Zap } from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { CountUp } from "./CountUp";

const ITEMS = [
  { icon: Zap, title: "Fast Ordering", meta: "Seconds, not minutes" },
  { icon: GraduationCap, title: "Campus Focused", meta: "Built for student life" },
  { icon: ShieldCheck, title: "Secure Experience", meta: "Safe by default" },
  { icon: Wallet, title: "Simple Payments", meta: "Checkout without friction" },
];

/** Placeholder metrics — replace with verified numbers before launch. */
const METRICS = [
  { value: 500, suffix: "+", label: "Orders placed" },
  { value: 15, suffix: "", label: "Campus outlets" },
  { value: 20, prefix: "< ", suffix: " min", label: "Average delivery" },
  { value: 4.8, decimals: 1, suffix: "★", label: "App rating" },
];

export function StatsStrip() {
  return (
    <section aria-label="Why Zappit" className="relative border-y border-border bg-surface/60">
      <motion.ul
        variants={stagger(0.09)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 pt-10 lg:grid-cols-4"
      >
        {ITEMS.map(({ icon: Icon, title, meta }) => (
          <motion.li
            key={title}
            variants={fadeUp}
            className="group flex flex-col items-center gap-2 px-2 text-center sm:flex-row sm:gap-3.5 sm:text-left"
          >
            <span className="relative grid size-11 shrink-0 place-items-center rounded-2xl glass text-primary transition-transform duration-500 group-hover:-translate-y-1">
              <Icon className="relative z-10 size-5" aria-hidden />
              <span
                aria-hidden
                className="absolute inset-0 rounded-2xl opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-70"
                style={{ background: "var(--gradient-primary)" }}
              />
            </span>
            <span>
              <span className="block text-sm font-semibold text-foreground">{title}</span>
              <span className="block text-xs text-subtle">{meta}</span>
            </span>
          </motion.li>
        ))}
      </motion.ul>

      <motion.dl
        variants={stagger(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mx-auto mt-10 grid max-w-6xl grid-cols-2 gap-6 border-t border-border px-5 py-10 lg:grid-cols-4"
      >
        {METRICS.map((m) => (
          <motion.div key={m.label} variants={fadeUp} className="text-center sm:text-left">
            <dd className="font-display text-3xl font-extrabold tracking-tight text-gradient-duo sm:text-4xl">
              <CountUp
                to={m.value}
                decimals={m.decimals ?? 0}
                prefix={m.prefix ?? ""}
                suffix={m.suffix}
              />
            </dd>
            <dt className="mt-1.5 text-xs text-subtle">{m.label}</dt>
          </motion.div>
        ))}
      </motion.dl>
    </section>
  );
}
