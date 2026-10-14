import { GraduationCap, Zap, ShieldCheck, CreditCard } from "lucide-react";

const items = [
  { icon: GraduationCap, label: "Campus Focused", emphasize: true, detail: "Tailored to hostel & dept blocks" },
  { icon: Zap, label: "Fast 10-15m Delivery", detail: "Express campus dispatch" },
  { icon: ShieldCheck, label: "100% Secure Checkout", detail: "Powered by Razorpay & UPI" },
  { icon: CreditCard, label: "Zero Delivery Hassle", detail: "Hostel drop-off ready" },
];

export default function StatsStrip() {
  return (
    <section className="border-y border-line bg-bg2/90 py-7">
      <div className="max-w-6xl mx-auto px-8 flex flex-wrap justify-between items-center gap-6">
        {items.map((it) => (
          <div
            key={it.label}
            className="flex items-center gap-3.5 text-sm"
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
              it.emphasize ? "bg-orange/15 text-orange border border-orange/40 shadow-sm" : "bg-bg3 border border-line text-orange"
            }`}>
              <it.icon size={20} />
            </div>
            <div>
              <div className={`font-bold ${it.emphasize ? "text-orange" : "text-ink-1"}`}>
                {it.label}
              </div>
              <div className="text-[11px] text-ink-2">{it.detail}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
