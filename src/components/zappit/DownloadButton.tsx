import { useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Download, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  APP_DOWNLOAD_URL,
  isDownloadConfigured,
  trackDownloadClick,
} from "@/config/site";

type Props = {
  /** Analytics label for where the CTA lives. */
  location: string;
  label?: string;
  size?: "md" | "lg";
  className?: string;
  icon?: ReactNode;
};

/** Primary APK download CTA — magnetic hover, loading state, analytics hook. */
export function DownloadButton({
  location,
  label = "Download Zappit",
  size = "md",
  className,
  icon,
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduced = useReducedMotion();
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [state, setState] = useState<"idle" | "loading" | "unconfigured">("idle");
  const configured = isDownloadConfigured();

  const magnet = (e: React.PointerEvent<HTMLAnchorElement>) => {
    if (reduced || e.pointerType !== "mouse") return;
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setOffset({
      x: ((e.clientX - (r.left + r.width / 2)) / r.width) * 12,
      y: ((e.clientY - (r.top + r.height / 2)) / r.height) * 8,
    });
  };

  const handleClick = (e: React.MouseEvent) => {
    trackDownloadClick(location);
    if (!configured) {
      e.preventDefault();
      setState("unconfigured");
      window.setTimeout(() => setState("idle"), 2600);
      return;
    }
    setState("loading");
    window.setTimeout(() => setState("idle"), 1800);
  };

  return (
    <div className={cn("inline-flex flex-col items-start gap-2", className)}>
      <motion.a
        ref={ref}
        href={configured ? APP_DOWNLOAD_URL : "#download"}
        onClick={handleClick}
        onPointerMove={magnet}
        onPointerLeave={() => setOffset({ x: 0, y: 0 })}
        animate={{ x: offset.x, y: offset.y }}
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
        whileTap={{ scale: 0.97 }}
        aria-label={`${label} — Android APK`}
        aria-busy={state === "loading"}
        download={configured ? "" : undefined}
        className={cn(
          "group relative inline-flex items-center gap-3 overflow-hidden rounded-full font-semibold text-primary-foreground shadow-glow-sm transition-shadow duration-300 hover:shadow-glow",
          size === "lg" ? "px-8 py-4 text-base sm:text-lg" : "px-6 py-3 text-sm sm:text-base",
        )}
        style={{ background: "var(--gradient-primary)" }}
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-12 bg-white/25 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100 group-hover:animate-shimmer"
        />
        <span className="relative grid place-items-center">
          {icon ?? <Download className={size === "lg" ? "size-5" : "size-4"} aria-hidden />}
        </span>
        <span className="relative">
          {state === "loading" ? "Starting download…" : label}
        </span>
        <ArrowRight
          className="relative size-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden
        />
      </motion.a>
      {state === "unconfigured" && (
        <p role="status" className="text-xs text-primary">
          APK link not configured yet — set APP_DOWNLOAD_URL in src/config/site.ts.
        </p>
      )}
    </div>
  );
}

export function SecondaryButton({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-foreground transition-colors duration-300 hover:border-border-strong hover:bg-surface-2 sm:text-base",
        className,
      )}
    >
      {children}
      <ArrowRight
        className="size-4 text-primary transition-transform duration-300 group-hover:translate-x-1"
        aria-hidden
      />
    </a>
  );
}

export function PlatformNote({ className }: { className?: string }) {
  return (
    <p className={cn("flex items-center gap-2 text-xs text-subtle", className)}>
      <Smartphone className="size-3.5 text-primary" aria-hidden />
      Available for Android • Direct APK download
    </p>
  );
}
