import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { CONTACT_EMAIL, SITE_NAME } from "@/config/site";

export const metadata: Metadata = {
  title: `Privacy Policy — ${SITE_NAME}`,
  description: `Learn how ${SITE_NAME} handles student account data, delivery addresses, and privacy securely.`,
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: `Privacy Policy — ${SITE_NAME}`,
    description: `Learn how ${SITE_NAME} handles student account data, delivery addresses, and privacy securely.`,
    url: "/privacy",
  },
  twitter: {
    title: `Privacy Policy — ${SITE_NAME}`,
    description: `Learn how ${SITE_NAME} handles student account data, delivery addresses, and privacy securely.`,
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-bg text-ink-1 pt-28 pb-24 relative overflow-hidden">
      <div className="max-w-2xl mx-auto px-8">
        <a href="/" className="inline-flex items-center gap-2 text-sm text-ink-2 hover:text-orange transition-colors">
          <ArrowLeft size={16} /> Back to {SITE_NAME}
        </a>
        <h1 className="text-4xl font-extrabold mt-6 mb-8 text-white">
          Privacy <span className="text-gradient-amber">Policy</span>
        </h1>

        <div className="bg-bg3 border border-line rounded-3xl p-8 space-y-6 text-sm text-ink-2 leading-relaxed shadow-card">
          <p>
            At {SITE_NAME}, student privacy and data security are our top priorities. This document outlines how campus account, order, and location details are handled to ensure a safe delivery experience.
          </p>

          <div>
            <h2 className="text-lg font-bold text-white mb-2">1. Information We Collect</h2>
            <p>
              We collect basic contact details (name, phone number for delivery coordination), hostel or campus drop locations, and past order history to provide speedy re-orders.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-2">2. How We Use Information</h2>
            <p>
              Your data is solely used to route meals from partner canteens to your hostel or campus drop zone, process transactions securely via verified payment gateways, and send live order updates.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-2">3. Payment Security</h2>
            <p>
              {SITE_NAME} does not store sensitive debit card or UPI PIN information. All transactions are encrypted and processed through RBI-authorized payment providers.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-2">4. Contact &amp; Inquiries</h2>
            <p>
              For privacy requests or account data deletion, reach our campus team at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-orange hover:underline font-medium">
                {CONTACT_EMAIL}
              </a>.
            </p>
          </div>

          <div className="p-4 border border-line rounded-xl text-xs text-ink-2 bg-bg/50">
            Last updated: Campus Academic Session {new Date().getFullYear()}.
          </div>
        </div>
      </div>
    </main>
  );
}
