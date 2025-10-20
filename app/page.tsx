// app/page.tsx
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import PracticeAreasSection from "@/components/practice-areas-section";
import InteractiveToolsSection from "@/components/interactive-tools-section";
import WhyChooseUsSection from "@/components/why-choose-us-section";
import SuccessCasesSection from "@/components/success-cases-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";
import StickyHeader from "@/components/sticky-header";

export default function Home() {
  return (
    <main className="min-h-screen">
      <StickyHeader />
      <HeroSection />

      {/* --- Wrapper Div para Watermark --- */}
      <div className="content-wrapper-with-watermark">
        <AboutSection />
        <PracticeAreasSection />
        <InteractiveToolsSection />
        <WhyChooseUsSection />
        <SuccessCasesSection />
        <ContactSection />
      </div>
      {/* --- Fim do Wrapper Div --- */}

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
