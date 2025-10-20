import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import PracticeAreasSection from "@/components/practice-areas-section"
import WhyChooseUsSection from "@/components/why-choose-us-section"
import SuccessCasesSection from "@/components/success-cases-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import StickyHeader from "@/components/sticky-header"

export default function Home() {
  return (
    <main className="min-h-screen">
      <StickyHeader />
      <HeroSection />
      <AboutSection />
      <PracticeAreasSection />
      <WhyChooseUsSection />
      <SuccessCasesSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
