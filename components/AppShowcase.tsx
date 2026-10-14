"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Bike, Clock, MapPin, PhoneCall } from "lucide-react";

const screens = [
  { label: "Campus Outlets", rotate: 16, y: 20, scale: 0.94, z: 1, image: "/zappit/screens/home.png" },
  { label: "Live Tracker", rotate: 0, y: -14, scale: 1.08, z: 3, image: null },
  { label: "Quick Checkout", rotate: -16, y: 20, scale: 0.94, z: 1, image: "/zappit/screens/checkout.png" },
];

export default function AppShowcase() {
  return (
    <section id="showcase" className="py-20 md:py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] -z-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,193,7,0.08), transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-xl mx-auto text-center mb-12 md:mb-16">
          <span className="text-xs font-bold text-orange uppercase tracking-wider">The App Experience</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mt-2 text-white">
            Everything you need.
            <br />
            <span className="text-gradient-amber">Nothing in your way.</span>
          </h2>
          <p className="mt-4 text-ink-2 text-sm sm:text-base">
            A laser-focused interface for browsing menus, seamless UPI payment, and real-time tracking across your campus.
          </p>
        </div>

        {/* Phone screens — scaled down on mobile */}
        <div
          className="flex justify-center items-center py-6 overflow-hidden"
          style={{ perspective: 1200 }}
        >
          {screens.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: s.y, rotateY: s.rotate, scale: s.scale }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: s.y - 12, scale: s.scale + 0.04 }}
              style={{
                zIndex: s.z,
                marginLeft: i === 0 ? 0 : -16,
                marginRight: i === screens.length - 1 ? 0 : -16,
              }}
              className="w-[140px] h-[280px] sm:w-[170px] sm:h-[340px] md:w-[195px] md:h-[390px] rounded-[30px] border border-line bg-gradient-to-b from-[#1E293B] via-[#0B132B] to-[#070D1E] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.85),0_0_50px_-10px_rgba(255,193,7,0.25)] relative overflow-hidden p-2 flex-shrink-0"
            >
              {s.image ? (
                <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-bg">
                  <Image
                    src={s.image}
                    alt={`Zappit app — ${s.label}`}
                    fill
                    sizes="(max-width: 640px) 140px, (max-width: 768px) 170px, 195px"
                    className="object-cover object-top"
                  />
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-2.5 rounded-full bg-black/80 z-10" />
                </div>
              ) : (
                <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-bg p-2.5 pt-4 text-white flex flex-col justify-between text-left select-none">
                  <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-12 h-2 rounded-full bg-black/90 z-20" />
                  <div>
                    <div className="flex items-center justify-between text-[9px] text-ink-2 mb-1.5">
                      <span className="font-semibold text-orange flex items-center gap-0.5">
                        <span className="w-1 h-1 rounded-full bg-orange animate-ping" />
                        LIVE ORDER
                      </span>
                      <span>#ZAP-2418</span>
                    </div>
                    <div className="bg-bg3 border border-line rounded-xl p-2 mb-2">
                      <div className="flex items-center gap-1 text-[10px] font-bold text-white mb-0.5">
                        <Bike size={11} className="text-orange" />
                        <span>Out for Delivery</span>
                      </div>
                      <div className="text-[9px] text-orange font-semibold flex items-center gap-0.5">
                        <Clock size={9} />
                        <span>Arriving in ~6 mins</span>
                      </div>
                      <div className="w-full bg-bg h-1 rounded-full mt-1.5 overflow-hidden">
                        <div className="bg-gradient-to-r from-orange to-orange-dark h-full w-[82%] rounded-full animate-pulse" />
                      </div>
                    </div>
                    <div className="bg-bg3/60 border border-line/80 rounded-xl p-1.5 mb-1.5 text-[9px]">
                      <div className="flex items-center gap-0.5 text-ink-2 mb-0.5">
                        <MapPin size={8} className="text-orange" />
                        <span>Delivering to</span>
                      </div>
                      <div className="font-semibold text-white truncate">Hostel Block B, Room 204</div>
                    </div>
                    <div className="bg-bg3/60 border border-line/80 rounded-xl p-1.5 text-[9px]">
                      <div className="flex justify-between text-ink-2 mb-0.5">
                        <span>1x Paneer Tikka Roll</span>
                        <span className="text-white font-medium">₹120</span>
                      </div>
                      <div className="flex justify-between text-ink-2">
                        <span>1x Cold Coffee</span>
                        <span className="text-white font-medium">₹45</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-bg3 to-[#162244] border border-orange/30 rounded-xl p-1.5 flex items-center justify-between mt-1.5">
                    <div className="flex items-center gap-1">
                      <div className="w-6 h-6 rounded-full bg-orange/20 border border-orange/40 flex items-center justify-center text-[9px] font-bold text-orange">R</div>
                      <div>
                        <div className="text-[9px] font-bold text-white">Rider Rahul</div>
                        <div className="text-[8px] text-success">★ 4.9 on campus</div>
                      </div>
                    </div>
                    <div className="w-5 h-5 rounded-full bg-orange text-bg flex items-center justify-center">
                      <PhoneCall size={9} />
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
