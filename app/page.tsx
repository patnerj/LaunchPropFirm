import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProofStrip from "@/components/ProofStrip";
import ThreePaths from "@/components/ThreePaths";
import LiveDemo from "@/components/LiveDemo";
import Walkthrough from "@/components/Walkthrough";
import OwnerControlRoom from "@/components/OwnerControlRoom";
import ComplianceSafety from "@/components/ComplianceSafety";
import CertificateSpotlight from "@/components/CertificateSpotlight";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import Comparison from "@/components/Comparison";
import LaunchProcess from "@/components/LaunchProcess";
import TrustBand from "@/components/TrustBand";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import AboutBuilder from "@/components/AboutBuilder";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProofStrip />
        <ThreePaths />
        <LiveDemo />
        <Walkthrough />
        <OwnerControlRoom />
        <ComplianceSafety />
        <CertificateSpotlight />
        <WhoThisIsFor />
        <Comparison />
        <LaunchProcess />
        <TrustBand />
        <Pricing />
        <FAQ />
        <AboutBuilder />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
