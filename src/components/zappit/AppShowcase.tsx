import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import type { ScreenKind } from "./AppScreen";
import { PhoneMockup } from "./PhoneMockup";
import { SectionHeading } from "./Reveal";
import { GlowOrb } from "./Ambient";

const PHONES: { screen: ScreenKind; label: string; rotate: number }[] = [
  { screen: "outlets", label: "Campus outlets", rotate: -12 },
  { screen: "dish", label: "Food details", rotate: -6 },
  { screen: "home", label: "Home feed", rotate: 0 },
  { screen: "cart", label: "Cart", rotate: 6 },
  { screen: "tracking", label: "Order tracking", rotate: 12 },
];

function ShowcasePhone({
  phone,
  dir,
  progress,
  reduced,
}: {
  phone: (typeof PHONES)[number];
  dir: number;
  progress: MotionValue<number>;
  reduced: boolean;
}) {
  const x = useTransform(progress, [0, 1], [0, dir * 14]);
  const y = useTransform(progress, [0, 1], [48, Math.abs(dir) * 22]);
  const rotateY = useTransform(progress, [0, 1], [0, phone.rotate]);
  const opacity = useTransform(progress, [0, 0.6], [0.2, 1]);

  const visibility =
    Math.abs(dir) === 2 ? "hidden lg:block" : Math.abs(dir) === 1 ? "hidden sm:block" : "";

  return (
    <motion.div
      style={
        reduced
          ? { width: "100%", maxWidth: 220 }
          : { x, y, rotateY, opacity, width: "100%", maxWidth: 220, zIndex: 10 - Math.abs(dir) }
      }
      className={`preserve-3d relative shrink ${visibility}`}
    >
      <PhoneMockup screen={phone.screen} glow={dir === 0} />
      <p className="mt-4 text-center text-xs font-medium text-subtle">{phone.label}</p>
    </motion.div>
  );
}

export function AppShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  return (
    <section
      id="app"
      ref={sectionRef}
      className="relative overflow-hidden py-24 sm:py-32"
      style={{
        background:
          "linear-gradient(180deg, var(--background), var(--surface) 55%, var(--background))",
      }}
    >
      <GlowOrb className="left-1/2 top-1/4 -translate-x-1/2" size={720} opacity={0.16} />
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Inside the app"
          title={
            <>
              Everything you need.
              <br />
              Nothing you don't.
            </>
          }
          subtitle="A focused interface built around one thing: getting campus food to you fast."
        />

        <div
          className="mt-16 flex items-end justify-center gap-3 sm:gap-6"
          style={{ perspective: "1400px" }}
        >
          {PHONES.map((p, i) => (
            <ShowcasePhone
              key={p.label}
              phone={p}
              dir={i - 2}
              progress={scrollYProgress}
              reduced={!!reduced}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
