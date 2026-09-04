import { Bike, Clock, Home, Search, ShoppingBag, Star, User, Utensils } from "lucide-react";
import { cn } from "@/lib/utils";

export type ScreenKind = "home" | "outlets" | "dish" | "cart" | "tracking" | "profile";

/**
 * Illustrative in-code app UI placeholders.
 * REPLACE: drop real screenshots into /public/zappit/screens/ and render them instead.
 */
export function AppScreen({ kind, className }: { kind: ScreenKind; className?: string }) {
  return (
    <div
      className={cn(
        "flex h-full w-full flex-col gap-3 bg-background p-4 text-[10px] text-foreground",
        className,
      )}
      aria-hidden
    >
      <div className="flex items-center justify-between text-[9px] text-subtle">
        <span>9:41</span>
        <span className="flex gap-1">
          <span className="h-1.5 w-4 rounded-sm bg-subtle/60" />
          <span className="h-1.5 w-2 rounded-sm bg-subtle/60" />
        </span>
      </div>

      {kind === "home" && <HomeScreen />}
      {kind === "outlets" && <OutletsScreen />}
      {kind === "dish" && <DishScreen />}
      {kind === "cart" && <CartScreen />}
      {kind === "tracking" && <TrackingScreen />}
      {kind === "profile" && <ProfileScreen />}

      <TabBar active={kind} />
    </div>
  );
}

function Chip({ children, active }: { children: string; active?: boolean }) {
  return (
    <span
      className={cn(
        "rounded-full px-2.5 py-1 text-[9px] font-medium",
        active ? "bg-primary text-primary-foreground" : "bg-surface-2 text-muted-foreground",
      )}
    >
      {children}
    </span>
  );
}

function FoodTile({ label, price, tall }: { label: string; price: string; tall?: boolean }) {
  return (
    <div className="overflow-hidden rounded-xl bg-surface">
      <div
        className={cn("relative", tall ? "h-16" : "h-12")}
        style={{
          background:
            "radial-gradient(circle at 30% 20%, color-mix(in oklab, var(--primary) 55%, transparent), transparent 65%), linear-gradient(135deg, var(--surface-2), var(--surface))",
        }}
      >
        <Utensils className="absolute bottom-1.5 right-1.5 size-3 text-primary/70" />
      </div>
      <div className="flex items-center justify-between px-2 py-1.5">
        <span className="truncate font-semibold">{label}</span>
        <span className="text-primary">{price}</span>
      </div>
    </div>
  );
}

function HomeScreen() {
  return (
    <>
      <div>
        <p className="text-[9px] text-subtle">Deliver to</p>
        <p className="font-display text-[11px] font-bold">Hostel Block C</p>
      </div>
      <div className="flex items-center gap-1.5 rounded-full bg-surface px-2.5 py-1.5 text-subtle">
        <Search className="size-3" />
        <span className="text-[9px]">Search campus food</span>
      </div>
      <div className="flex gap-1.5">
        <Chip active>All</Chip>
        <Chip>Snacks</Chip>
        <Chip>Meals</Chip>
        <Chip>Drinks</Chip>
      </div>
      <div className="grid flex-1 grid-cols-2 gap-2">
        <FoodTile label="Paneer Roll" price="₹149" tall />
        <FoodTile label="Cold Coffee" price="₹89" tall />
        <FoodTile label="Veg Thali" price="₹129" />
        <FoodTile label="Loaded Fries" price="₹99" />
      </div>
    </>
  );
}

function OutletsScreen() {
  return (
    <>
      <p className="font-display text-[11px] font-bold">Campus outlets</p>
      <div className="flex flex-1 flex-col gap-2">
        {["Central Canteen", "Block B Cafe", "Night Kitchen", "Juice Bar"].map((n, i) => (
          <div key={n} className="flex items-center gap-2 rounded-xl bg-surface p-2">
            <span className="size-8 shrink-0 rounded-lg bg-surface-2" />
            <div className="min-w-0 flex-1">
              <p className="truncate font-semibold">{n}</p>
              <p className="flex items-center gap-1 text-[9px] text-subtle">
                <Star className="size-2.5 text-primary" /> 4.{6 - i} • {8 + i * 3} min
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function DishScreen() {
  return (
    <>
      <div
        className="h-24 rounded-2xl"
        style={{
          background:
            "radial-gradient(circle at 70% 25%, color-mix(in oklab, var(--primary) 60%, transparent), transparent 60%), linear-gradient(160deg, var(--surface-2), var(--surface))",
        }}
      />
      <p className="font-display text-[12px] font-bold">Paneer Tikka Roll</p>
      <p className="text-[9px] leading-relaxed text-muted-foreground">
        Smoky paneer, mint chutney, soft roomali wrap. Campus favourite.
      </p>
      <div className="mt-auto flex items-center justify-between rounded-full bg-surface px-3 py-2">
        <span className="font-display font-bold text-primary">₹149</span>
        <span className="rounded-full bg-primary px-3 py-1 text-[9px] font-bold text-primary-foreground">
          Add to cart
        </span>
      </div>
    </>
  );
}

function CartScreen() {
  return (
    <>
      <p className="font-display text-[11px] font-bold">Your cart</p>
      <div className="flex flex-1 flex-col gap-2">
        {[
          ["Paneer Roll", "₹149"],
          ["Cold Coffee", "₹89"],
        ].map(([n, p]) => (
          <div key={n} className="flex items-center justify-between rounded-xl bg-surface p-2">
            <span className="font-semibold">{n}</span>
            <span className="text-primary">{p}</span>
          </div>
        ))}
        <div className="mt-1 flex items-center justify-between text-[9px] text-subtle">
          <span>Delivery</span>
          <span>₹0</span>
        </div>
      </div>
      <div className="rounded-full bg-primary px-3 py-2 text-center text-[10px] font-bold text-primary-foreground">
        Pay ₹238
      </div>
    </>
  );
}

function TrackingScreen() {
  return (
    <>
      <p className="font-display text-[11px] font-bold">Order on the way</p>
      <div
        className="relative h-24 overflow-hidden rounded-2xl bg-surface"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(1 0 0 / 6%) 1px, transparent 1px), linear-gradient(to bottom, oklch(1 0 0 / 6%) 1px, transparent 1px)",
          backgroundSize: "14px 14px",
        }}
      >
        <span className="absolute left-1/2 top-1/2 size-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25" />
        <Bike className="absolute left-1/2 top-1/2 size-3.5 -translate-x-1/2 -translate-y-1/2 text-primary" />
      </div>
      <div className="flex flex-1 flex-col gap-2">
        {["Order confirmed", "Prepared at outlet", "Rider on the way"].map((s, i) => (
          <div key={s} className="flex items-center gap-2">
            <span className={cn("size-2 rounded-full", i < 2 ? "bg-primary" : "bg-surface-2")} />
            <span className={i < 2 ? "text-foreground" : "text-subtle"}>{s}</span>
          </div>
        ))}
      </div>
      <p className="flex items-center gap-1 text-[9px] text-primary">
        <Clock className="size-2.5" /> Arriving in 12 min
      </p>
    </>
  );
}

function ProfileScreen() {
  return (
    <>
      <div className="flex items-center gap-2">
        <span className="grid size-9 place-items-center rounded-full bg-surface-2">
          <User className="size-4 text-primary" />
        </span>
        <div>
          <p className="font-display text-[11px] font-bold">Campus User</p>
          <p className="text-[9px] text-subtle">Placeholder profile</p>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-2">
        {["Order history", "Saved outlets", "Addresses", "Payments"].map((n) => (
          <div key={n} className="rounded-xl bg-surface px-2.5 py-2 font-medium">
            {n}
          </div>
        ))}
      </div>
    </>
  );
}

function TabBar({ active }: { active: ScreenKind }) {
  const items = [
    { icon: Home, key: "home" },
    { icon: Search, key: "outlets" },
    { icon: ShoppingBag, key: "cart" },
    { icon: User, key: "profile" },
  ] as const;
  return (
    <div className="mt-1 flex items-center justify-around rounded-2xl bg-surface py-2">
      {items.map(({ icon: Icon, key }) => (
        <Icon
          key={key}
          className={cn("size-3.5", key === active ? "text-primary" : "text-subtle")}
        />
      ))}
    </div>
  );
}
