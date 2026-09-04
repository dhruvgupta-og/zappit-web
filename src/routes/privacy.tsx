import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/zappit/Navbar";
import { Footer } from "@/components/zappit/Footer";
import { GlowOrb } from "@/components/zappit/Ambient";
import { Reveal } from "@/components/zappit/Reveal";
import { LegalBody, type LegalSection } from "@/components/zappit/LegalBody";
import { CONTACT_EMAIL } from "@/config/site";

const TITLE = "Privacy Policy — Zappit";
const DESCRIPTION =
  "How Zappit handles the information you share when ordering campus food through the app and website.";

const SECTIONS: LegalSection[] = [
  {
    h: "1. Overview",
    p: [
      "This placeholder policy describes how Zappit collects, uses, and protects information. Replace this content with a policy reviewed by your legal counsel before launch.",
    ],
  },
  {
    h: "2. Information we collect",
    p: [
      "Account details such as your name, phone number, and campus delivery location; order details such as items, outlets, and timing; and technical data such as device type and app version.",
    ],
  },
  {
    h: "3. How we use information",
    p: [
      "To place and deliver your orders, to keep your account secure, to provide support, and to improve the Zappit experience.",
    ],
  },
  {
    h: "4. Sharing",
    p: [
      "Order information is shared with the outlet preparing your food and the delivery partner fulfilling it. We do not sell your personal information.",
    ],
  },
  {
    h: "5. Data retention and security",
    p: [
      "Information is kept only as long as needed to operate the service or as required by law, and is protected using industry-standard safeguards.",
    ],
  },
  {
    h: "6. Your choices",
    p: [
      "You may request access to, correction of, or deletion of your information at any time by contacting us.",
    ],
  },
  { h: "7. Contact", p: [`Questions about this policy can be sent to ${CONTACT_EMAIL}.`] },
];

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/privacy" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden pb-24 pt-32 sm:pt-40">
        <GlowOrb className="-left-40 top-0" size={520} opacity={0.16} />
        <div className="relative mx-auto max-w-3xl px-5">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.22em] text-subtle">Legal</p>
            <h1 className="mt-3 text-4xl font-extrabold text-gradient sm:text-5xl">
              Privacy Policy
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
