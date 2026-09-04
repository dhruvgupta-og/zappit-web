import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { type ScreenKind } from "./AppScreen";
import homeScreen from "@/assets/zappit-app-home.png";
import outletsScreen from "@/assets/zappit-app-outlets.png";
import dishScreen from "@/assets/zappit-app-dish.png";
import cartScreen from "@/assets/zappit-app-cart.png";
import trackingScreen from "@/assets/zappit-app-tracking.png";
import profileScreen from "@/assets/zappit-app-profile.png";

const SCREENS: Record<ScreenKind, { url: string; alt: string }> = {
  home: { url: homeScreen, alt: "Zappit app home screen with campus outlets and food categories" },
  outlets: { url: outletsScreen, alt: "Zappit app campus outlets list screen" },
  dish: { url: dishScreen, alt: "Zappit app dish detail screen with add-ons and price" },
  cart: { url: cartScreen, alt: "Zappit app cart and checkout screen" },
  tracking: { url: trackingScreen, alt: "Zappit app live order tracking screen" },
  profile: { url: profileScreen, alt: "Zappit app profile screen" },
};



/**
 * Realistic device shell with glass bezel, reflection and orange rim light.
 * Content is an illustrative in-code app UI placeholder (see AppScreen).
 */
export function PhoneMockup({
  screen = "home",
  className,
  glow = true,
  children,
}: {
  screen?: ScreenKind;
  className?: string;
  glow?: boolean;
  children?: ReactNode;
}) {
  return (
    <div className={cn("relative", className)}>
      {glow && (
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-10 -z-10 rounded-[60px] opacity-60 blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 50% 45%, color-mix(in oklab, var(--primary) 45%, transparent), transparent 70%)",
          }}
        />
      )}
      <div
        className="relative aspect-[9/19] w-full overflow-hidden rounded-[2.4rem] p-[3px] shadow-elevated"
        style={{
          background:
            "linear-gradient(150deg, oklch(1 0 0 / 30%), oklch(1 0 0 / 6%) 35%, oklch(0.2 0 0) 60%, color-mix(in oklab, var(--primary) 35%, transparent))",
          boxShadow: "var(--shadow-elevated), 0 0 50px -20px color-mix(in oklab, var(--primary) 60%, transparent)",
        }}
      >
        <div className="relative h-full w-full overflow-hidden rounded-[2.2rem] bg-background">
          <div
            aria-hidden
            className="absolute left-1/2 top-2 z-20 h-5 w-16 -translate-x-1/2 rounded-full bg-background/90"
          />
          <div className="absolute inset-0">
            {children ?? (
              <img
                src={SCREENS[screen].url}
                alt={SCREENS[screen].alt}
                loading="lazy"
                className="h-full w-full object-cover object-top"
              />
            )}
          </div>


          {/* screen reflection */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-30"
            style={{
              background:
                "linear-gradient(115deg, oklch(1 0 0 / 14%) 0%, transparent 32%, transparent 68%, oklch(1 0 0 / 6%) 100%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export function FloatingCard({
  className,
  icon,
  title,
  meta,
  style,
}: {
  className?: string;
  icon?: ReactNode;
  title: string;
  meta?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={cn(
        "pointer-events-none flex items-center gap-2.5 rounded-2xl glass-strong px-3.5 py-2.5 shadow-elevated",
        className,
      )}
      style={style}
    >
      {icon && (
        <span className="grid size-7 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
          {icon}
        </span>
      )}
      <span className="min-w-0">
        <span className="block whitespace-nowrap text-xs font-semibold text-foreground">{title}</span>
        {meta && <span className="block whitespace-nowrap text-[10px] text-subtle">{meta}</span>}
      </span>
    </div>
  );
}
