import { Zap } from "lucide-react";
import {
  SITE_NAME,
  CONTACT_EMAIL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  X_URL,
  PRIVACY_URL,
  TERMS_URL,
  DOWNLOAD_URL,
} from "@/config/site";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-[#070D1E] py-16">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex flex-wrap justify-between items-start gap-9 mb-12">
          <div className="max-w-xs">
            <a href="/#home" className="flex items-center gap-2.5 font-extrabold text-xl group mb-3">
              <div className="relative w-8 h-8 rounded-xl overflow-hidden bg-gradient-to-br from-orange to-orange-dark p-0.5 shadow-md shadow-orange/30 group-hover:scale-105 transition-transform">
                <div className="w-full h-full bg-bg rounded-[9px] flex items-center justify-center">
                  <Zap className="w-4 h-4 text-orange fill-orange" />
                </div>
              </div>
              <span className="tracking-tight text-white flex items-center gap-1.5">
                {SITE_NAME}
                <span className="w-1.5 h-1.5 rounded-full bg-orange" />
              </span>
            </a>
            <p className="text-sm text-ink-2 leading-relaxed">
              Campus food, delivered fast. Bringing your favourite hostel snacks and canteen meals straight to your door.
            </p>
          </div>

          <div className="flex flex-wrap gap-12 sm:gap-16">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-orange mb-4">Product</h4>
              <a href="/#home" className="block text-sm text-ink-2 mb-2.5 hover:text-orange transition-colors">Home</a>
              <a href="/#features" className="block text-sm text-ink-2 mb-2.5 hover:text-orange transition-colors">Features</a>
              <a href="/#showcase" className="block text-sm text-ink-2 mb-2.5 hover:text-orange transition-colors">App Showcase</a>
              <a href={DOWNLOAD_URL} className="block text-sm text-ink-2 mb-2.5 hover:text-orange transition-colors">Download APK</a>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-orange mb-4">Legal</h4>
              <a href={PRIVACY_URL} className="block text-sm text-ink-2 mb-2.5 hover:text-orange transition-colors">Privacy Policy</a>
              <a href={TERMS_URL} className="block text-sm text-ink-2 mb-2.5 hover:text-orange transition-colors">Terms of Service</a>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-orange mb-4">Contact</h4>
              <a href={`mailto:${CONTACT_EMAIL}`} className="block text-sm text-ink-2 mb-2.5 hover:text-orange transition-colors">
                {CONTACT_EMAIL}
              </a>
              <span className="inline-block mt-2 text-xs text-ink-2">Support hours: 9 AM - 11 PM</span>
            </div>
          </div>

          <div className="flex gap-3">
            <a href={INSTAGRAM_URL} aria-label="Instagram" className="w-10 h-10 rounded-xl bg-bg3 border border-line flex items-center justify-center text-xs font-bold text-ink-2 hover:border-orange/50 hover:text-orange transition-all">IG</a>
            <a href={LINKEDIN_URL} aria-label="LinkedIn" className="w-10 h-10 rounded-xl bg-bg3 border border-line flex items-center justify-center text-xs font-bold text-ink-2 hover:border-orange/50 hover:text-orange transition-all">in</a>
            <a href={X_URL} aria-label="X" className="w-10 h-10 rounded-xl bg-bg3 border border-line flex items-center justify-center text-xs font-bold text-ink-2 hover:border-orange/50 hover:text-orange transition-all">X</a>
          </div>
        </div>

        <div className="border-t border-line/70 pt-8 flex flex-wrap justify-between items-center gap-4 text-xs text-ink-2">
          <span>© {new Date().getFullYear()} {SITE_NAME}. Campus Food Delivery. All rights reserved.</span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-success inline-block" />
            Active across campus hostels & academic blocks
          </span>
        </div>
      </div>
    </footer>
  );
}
