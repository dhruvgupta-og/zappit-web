import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/zappit/Navbar";
import { Footer } from "@/components/zappit/Footer";
import { GlowOrb } from "@/components/zappit/Ambient";
import { Reveal } from "@/components/zappit/Reveal";
import { LegalBody, type LegalSection } from "@/components/zappit/LegalBody";
import { CONTACT_EMAIL } from "@/config/site";

const TITLE = "Terms of Service — Zappit";
const DESCRIPTION =
  "The terms that apply when you use the Zappit app or download the Zappit Android APK from this website.";

const SECTIONS: LegalSection[] = [
  {
    h: "1. Acceptance",
    p: [
      "This placeholder document sets out the terms for using Zappit. Replace it with terms reviewed by your legal counsel before launch.",
    ],
  },
  {
    h: "2. Using Zappit",
    p: [
      "Zappit connects students with campus outlets and delivery partners. You agree to provide accurate delivery information and to use the service lawfully.",
    ],
  },
  {
    h: "3. Orders and payments",
    p: [
      "Prices, availability, and delivery times are set by the outlets. Once an order is accepted by an outlet it may not be cancellable.",
    ],
  },
  {
    h: "4. App downloads",
    p: [
      "The Zappit Android APK is distributed from the official Zappit website. Builds obtained elsewhere are not supported and may be unsafe.",
    ],
  },
  {
    h: "5. Availability",
    p: [
      "Service coverage depends on the campus outlets and delivery partners live in your area, and may change without notice.",
    ],
  },
  {
    h: "6. Limitation of liability",
    p: [
      "Zappit is provided on an as-is basis to the fullest extent permitted by applicable law.",
    ],
  },
  { h: "7. Contact", p: [`Questions about these terms can be sent to ${CONTACT_EMAIL}.`] },
];

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/terms" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden pb-24 pt-32 sm:pt-40">
        <GlowOrb className="-right-40 top-0" size={520} opacity={0.16} />
        <div className="relative mx-auto max-w-3xl px-5">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.22em] text-subtle">Legal</p>
            <h1 className="mt-3 text-4xl font-extrabold text-gradient sm:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-4 text-sm text-muted-foreground">
              Placeholder document — replace before launch.
            </p>
          </Reveal>
          <LegalBody sections={SECTIONS} />
        </div>
      </main>
      <Footer />
    </>
  );
}
