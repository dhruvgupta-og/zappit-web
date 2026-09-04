import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/zappit/Navbar";
import { Hero } from "@/components/zappit/Hero";
import { StatsStrip } from "@/components/zappit/StatsStrip";
import { HowItWorks } from "@/components/zappit/HowItWorks";
import { AppShowcase } from "@/components/zappit/AppShowcase";
import { Features } from "@/components/zappit/Features";
import { Spotlight } from "@/components/zappit/Spotlight";
import { DownloadSection } from "@/components/zappit/DownloadSection";
import { Testimonials } from "@/components/zappit/Testimonials";
import { FaqSection, FAQS } from "@/components/zappit/FaqSection";
import { FinalCta } from "@/components/zappit/FinalCta";
import { Footer } from "@/components/zappit/Footer";
import { MobileDownloadBar } from "@/components/zappit/MobileDownloadBar";
import { CursorGlow } from "@/components/zappit/CursorGlow";
import { IntroLoader } from "@/components/zappit/IntroLoader";
import { SITE_DESCRIPTION } from "@/config/site";

const TITLE = "Zappit — Campus Food Delivery";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: SITE_DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: SITE_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MobileApplication",
          name: "Zappit",
          applicationCategory: "FoodDeliveryApplication",
          operatingSystem: "Android",
          description: SITE_DESCRIPTION,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <>
      <IntroLoader />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <HowItWorks />
        <AppShowcase />
        <Features />
        <Spotlight />
        <DownloadSection />
        <Testimonials />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
      <MobileDownloadBar />
    </>
  );
}
