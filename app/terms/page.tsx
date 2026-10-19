import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { CONTACT_EMAIL, SITE_NAME } from "@/config/site";

export const metadata: Metadata = {
  title: `Terms & Conditions — ${SITE_NAME}`,
  description: `Terms and conditions for ordering food, campus canteens, and deliveries via the ${SITE_NAME} app.`,
  alternates: { canonical: "/terms" },
  openGraph: {
    title: `Terms & Conditions — ${SITE_NAME}`,
    description: `Terms and conditions for ordering food, campus canteens, and deliveries via the ${SITE_NAME} app.`,
    url: "/terms",
  },
  twitter: {
    title: `Terms & Conditions — ${SITE_NAME}`,
    description: `Terms and conditions for ordering food, campus canteens, and deliveries via the ${SITE_NAME} app.`,
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-bg text-ink-1 pt-28 pb-24 relative overflow-hidden">
      <div className="max-w-2xl mx-auto px-8">
        <a href="/" className="inline-flex items-center gap-2 text-sm text-ink-2 hover:text-orange transition-colors">
          <ArrowLeft size={16} /> Back to {SITE_NAME}
        </a>
        <h1 className="text-4xl font-extrabold mt-6 mb-8 text-white">
          Terms &amp; <span className="text-gradient-amber">Conditions</span>
        </h1>

        <div className="bg-bg3 border border-line rounded-3xl p-8 space-y-6 text-sm text-ink-2 leading-relaxed shadow-card">
          <p>
            Welcome to {SITE_NAME}. By downloading or accessing the {SITE_NAME} app and web service, you agree to these campus terms of service.
          </p>

          <div>
            <h2 className="text-lg font-bold text-white mb-2">1. Campus Service Scope</h2>
            <p>
              {SITE_NAME} coordinates food orders between registered campus outlets/canteens and students, staff, and campus visitors within designated delivery boundary zones.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-2">2. Orders &amp; Delivery Drop Spots</h2>
            <p>
              Deliveries are dispatched to designated hostel gates, academic blocks, or campus hangout spots. Users are expected to receive their order upon rider arrival notification to prevent food cooling.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-2">3. Payments &amp; Pricing</h2>
            <p>
              Menu prices are set by individual campus outlet partners. Payments are settled upfront via digital UPI, card, or wallet mechanisms.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-2">4. Support &amp; Disputes</h2>
            <p>
              For delayed orders, wrong item reports, or assistance, please reach out directly through the in-app help desk or email{" "}
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
