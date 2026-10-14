import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import HowItWorks from "@/components/HowItWorks";
import AppShowcase from "@/components/AppShowcase";
import Features from "@/components/Features";
import DownloadSection from "@/components/DownloadSection";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import MobileDownloadBar from "@/components/MobileDownloadBar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsStrip />
      <HowItWorks />
      <AppShowcase />
      <Features />
      <DownloadSection />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
      <MobileDownloadBar />
    </main>
  );
}
