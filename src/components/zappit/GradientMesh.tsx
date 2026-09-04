import { cn } from "@/lib/utils";

/**
 * Animated gradient mesh backdrop — three slowly drifting radial orbs
 * (orange + violet) rendered as one layer so it stays cheap on mobile.
 */
export function GradientMesh({
  className,
  intensity = 1,
  animated = true,
}: {
  className?: string;
  intensity?: number;
  animated?: boolean;
}) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div
        className={cn(
          "gradient-mesh absolute inset-[-20%] blur-[60px]",
          animated && "animate-mesh-drift",
        )}
        style={{ opacity: intensity }}
      />
    </div>
  );
}
