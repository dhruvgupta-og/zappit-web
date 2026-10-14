"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * Hero 3D phone mockup. Tilts subtly toward the cursor on desktop.
 * Screen content is the real Zappit home screen at /public/zappit/screens/home.png.
 */
export default function PhoneMockup() {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-28, -4]), { stiffness: 120, damping: 18 });
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [16, -6]), { stiffness: 120, damping: 18 });

  function handleMouseMove(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    px.set((e.clientX - rect.left) / rect.width - 0.5);
    py.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function handleMouseLeave() {
    px.set(0);
    py.set(0);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-[420px] md:h-[600px]"
      style={{ perspective: 1500 }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[210px] h-[420px] md:w-[270px] md:h-[550px]"
      >
        {/* Floating badges styled with Zappit theme */}
        <div
          className="absolute top-[8%] -left-[12%] bg-bg3/90 border border-line backdrop-blur-xl rounded-2xl px-3.5 py-2 text-xs flex items-center gap-2 shadow-2xl text-ink-1"
          style={{ transform: "translateZ(75px)" }}
        >
          <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
          <span className="font-semibold">Order Confirmed</span>
        </div>
        <div
          className="absolute top-[44%] -right-[18%] bg-bg3/90 border border-line backdrop-blur-xl rounded-2xl px-3.5 py-2 text-xs shadow-2xl text-ink-1 flex items-center gap-1.5"
          style={{ transform: "translateZ(75px)" }}
        >
          <span className="text-orange font-bold text-sm">₹149</span>
          <span className="text-ink-2">• Campus Cafe</span>
        </div>
        <div
          className="absolute bottom-[10%] -left-[6%] bg-bg3/90 border border-line backdrop-blur-xl rounded-2xl px-3.5 py-2 text-xs flex items-center gap-2 shadow-2xl text-ink-1"
          style={{ transform: "translateZ(75px)" }}
        >
          <span className="w-2 h-2 rounded-full bg-orange" />
          <span className="font-semibold">Rider on the way ⚡</span>
        </div>

        {/* Phone body with titanium dark bezel and amber ambient shadow */}
        <div className="absolute inset-0 rounded-[40px] border border-line/80 bg-gradient-to-b from-[#1E293B] via-[#0B132B] to-[#070D1E] shadow-[0_60px_120px_-30px_rgba(0,0,0,0.9),0_0_90px_-20px_rgba(255,193,7,0.35)] p-2.5">
          <div
            className="relative w-full h-full rounded-[30px] overflow-hidden bg-bg"
            style={{ transform: "translateZ(20px)" }}
          >
            <Image
              src="/zappit/screens/home.png"
              alt="Zappit app home screen"
              fill
              sizes="270px"
              className="object-cover object-top"
              priority
            />
            {/* Dynamic island / speaker pill */}
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-4 rounded-full bg-black/80 border border-white/10 z-10 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-black border border-white/20" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
