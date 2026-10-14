"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  { q: "What is Zappit?", a: "Zappit is a photo-fast campus food ordering and delivery app designed specifically for college students, faculty, and hostel residents to order from campus canteens and nearby student food joints." },
  { q: "Where does Zappit deliver?", a: "Zappit delivers to designated campus drop spots, hostel gates, department entrances, and common campus hangout areas." },
  { q: "How do I download the Zappit app?", a: "Tap any \"Download Zappit\" button on this website to download the direct Android APK, or scan the QR code with your phone camera." },
  { q: "Is Zappit available on Android?", a: "Yes! Zappit is currently available for Android via direct APK download with instant installation." },
  { q: "Why does Android ask for APK installation permission?", a: "Android requires explicit permission when installing applications outside Google Play Store. Simply tap 'Settings' and enable 'Allow from this source'." },
  { q: "How does payment work on Zappit?", a: "Zappit supports direct UPI (Google Pay, PhonePe, Paytm), debit/credit cards, and net banking with zero extra processing friction." },
  { q: "How do I update the Zappit app?", a: "You can download updated APKs directly from this official portal, or receive in-app update notifications when a new build drops." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-orange uppercase tracking-wider">Help & Answers</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-2">
            Frequently <span className="text-gradient-amber">asked.</span>
          </h2>
        </div>

        <div className="space-y-2">
          {faqs.map((f, i) => {
            const open = openIndex === i;
            return (
              <div
                key={f.q}
                className={`border border-line rounded-2xl transition-all duration-200 overflow-hidden ${
                  open ? "bg-bg3 border-orange/40 shadow-card" : "bg-bg2/60 hover:border-line/80"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  className="w-full text-left p-6 flex justify-between items-center font-semibold text-base text-white"
                >
                  <span className="pr-4">{f.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                    open ? "bg-orange text-bg rotate-45" : "bg-bg3 text-orange border border-line"
                  }`}>
                    <Plus size={16} />
                  </div>
                </button>
                {open && (
                  <p className="px-6 pb-6 text-sm text-ink-2 leading-relaxed max-w-2xl border-t border-line/60 pt-4">
                    {f.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
