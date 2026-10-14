"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Zap, Radio, Sparkles, ShieldCheck } from "lucide-react";

const features = [
  { icon: GraduationCap, title: "Campus-first ordering", copy: "Built around how students actually eat — from late night study sessions to quick canteen breaks.", span: "md:col-span-2" },
  { icon: MapPin, title: "Discover nearby food", copy: "Find popular meals, student combos, and campus outlets in seconds.", span: "" },
  { icon: Zap, title: "Lightning-fast checkout", copy: "Direct UPI, Paytm, and card payments. No unnecessary steps.", span: "" },
  { icon: Radio, title: "Live GPS & status tracker", copy: "Watch your meal from kitchen prep to hostel entrance in real time.", span: "md:col-span-2" },
  { icon: Sparkles, title: "Clean student UI", copy: "Zero clutter, no annoying ad banners. Just fast food ordering.", span: "" },
  { icon: ShieldCheck, title: "Verified campus partners", copy: "Fresh hygiene verified outlets and trusted local spots.", span: "" },
];

export default function Features() {
  return (
    <section id="features" className="py-32 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/3 -right-32 w-[500px] h-[500px] -z-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,193,7,0.06), transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-8">
        <div className="max-w-xl mx-auto text-center mb-16">
          <span className="text-xs font-bold text-orange uppercase tracking-wider">Features</span>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mt-2 text-white">
            Made for how your{" "}
            <span className="text-gradient-amber">
              campus
            </span>{" "}
            orders.
          </h2>
          <p className="mt-4 text-ink-2">Tailored for colleges, hostels, and student schedules.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 auto-rows-[220px]">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -5 }}
              className={`relative overflow-hidden rounded-[22px] border border-line bg-gradient-to-br from-bg3 to-bg2 p-7 flex flex-col justify-between hover:border-orange/45 hover:shadow-card transition-all ${f.span}`}
            >
              <div
                className="absolute w-48 h-48 rounded-full -right-16 -bottom-16 pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(255,193,7,0.12), transparent 70%)" }}
              />
              <div className="w-11 h-11 rounded-xl bg-orange/10 border border-orange/30 flex items-center justify-center text-orange relative z-10 shadow-inner">
                <f.icon size={20} />
              </div>
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-white mt-4">{f.title}</h3>
                <p className="text-ink-2 text-sm mt-1.5 max-w-sm leading-relaxed">{f.copy}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
