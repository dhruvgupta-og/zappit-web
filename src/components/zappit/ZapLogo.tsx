import { cn } from "@/lib/utils";

/** Placeholder Zappit mark — replace public/zappit/logo.svg with the official asset. */
export function ZapMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "relative grid size-9 shrink-0 place-items-center rounded-xl bg-surface-2 gradient-border",
        className,
      )}
    >
      <span
        aria-hidden
        className="absolute inset-0 rounded-xl opacity-45 blur-md"
        style={{ background: "var(--gradient-primary)" }}
      />
      <svg viewBox="0 0 64 64" className="relative size-5" aria-hidden focusable="false">
        <defs>
          <linearGradient id="zapmark" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="var(--primary-glow)" />
            <stop offset="1" stopColor="var(--primary)" />
          </linearGradient>
        </defs>
        <path d="M38 12 L21 35h9l-4 17 18-24h-9l3-16z" fill="url(#zapmark)" />
      </svg>
    </span>
  );
}

export function ZapLogo({
  className,
  showWordmark = true,
}: {
  className?: string;
  showWordmark?: boolean;
}) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <ZapMark />
      {showWordmark && (
        <span className="font-display text-lg font-extrabold tracking-tight text-foreground">
          Zappit
        </span>
      )}
    </span>
  );
}
