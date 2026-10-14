"use client";

import { motion } from "framer-motion";
import { Search, ShoppingCart, UtensilsCrossed } from "lucide-react";

const steps = [
  { n: "01", icon: Search, title: "Explore", copy: "Browse food from your favourite campus outlets and canteen spots." },
  { n: "02", icon: ShoppingCart, title: "Order", copy: "Choose your favourite items, add toppings, and place your order in seconds." },
  { n: "03", icon: UtensilsCrossed, title: "Enjoy", copy: "Track your order in real time and collect it warm at your designated spot." },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-32 relative overflow-hidden">
      {/* Background ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] -z-10 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255,193,7,0.06), transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-8">
        <div className="max-w-xl mx-auto text-center mb-16">
          <span className="text-xs font-bold text-orange uppercase tracking-wider">Simple Process</span>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mt-2 text-white">
            Craving to delivered.
            <br />
            <span className="text-gradient-amber">Three simple steps.</span>
          </h2>
        </div>

        <div className="relative grid md:grid-cols-3 gap-6">
          <div className="hidden md:block absolute top-[70px] left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-orange/40 to-transparent" />
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative z-10 bg-gradient-to-b from-bg3 to-bg2 border border-line rounded-2xl p-8 hover:border-orange/45 hover:shadow-card transition-all"
            >
              <div className="text-5xl font-extrabold text-orange/25 font-sans tracking-tight">{s.n}</div>
              <div className="w-[52px] h-[52px] rounded-2xl bg-orange/10 border border-orange/30 flex items-center justify-center my-5 text-orange shadow-inner">
                <s.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{s.title}</h3>
              <p className="text-ink-2 text-sm leading-relaxed">{s.copy}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
