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
  // --- ESTRATÉGIA MULTI-LOCATION PARA SEO ---
  // Criamos uma lista com as 3 unidades para o Google Maps/Search
  const jsonLd = [
    // UNIDADE 1: GARANHUNS (Sede/Principal)
    {
      "@context": "https://schema.org",
      "@type": "LegalService",
      name: "Oliveira & Santana Advogados - Garanhuns",
      image: "https://www.oliveiraesantana.com.br/justice.jpg",
      url: "https://www.oliveiraesantana.com.br",
      telephone: "+5587999889988", // Telefone da Central (já formatado)
      priceRange: "$$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "R. Dr. José Mariano, 665 - Heliópolis",
        addressLocality: "Garanhuns",
        addressRegion: "PE",
        postalCode: "55290-000", // Verifique se o CEP está exato
        addressCountry: "BR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -8.8828, // Coordenadas aproximadas de Garanhuns (ajuste se tiver exatas)
        longitude: -36.4969,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      sameAs: [
        "https://www.instagram.com/oliveiraesantana.adv/",
        "https://www.linkedin.com/company/oliveiraesantana",
      ],
    },

    // UNIDADE 2: RECIFE
    {
      "@context": "https://schema.org",
      "@type": "LegalService",
      name: "Oliveira & Santana Advogados - Recife",
      image: "https://www.oliveiraesantana.com.br/justice.jpg",
      url: "https://www.oliveiraesantana.com.br",
      telephone: "+5587999889988", // Use um número fixo de Recife se tiver (ex: +5581...)
      priceRange: "$$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Av. Domingos Ferreira, 704 - Pina",
        addressLocality: "Recife",
        addressRegion: "PE",
        postalCode: "51011-050",
        addressCountry: "BR",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    },

    // UNIDADE 3: PORTO ALEGRE
    {
      "@context": "https://schema.org",
      "@type": "LegalService",
      name: "Oliveira & Santana Advogados - Porto Alegre",
      image: "https://www.oliveiraesantana.com.br/justice.jpg",
      url: "https://www.oliveiraesantana.com.br",
      telephone: "+5587999889988", // Use um número fixo de POA se tiver (ex: +5551...)
      priceRange: "$$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Av. Padre Cacique, 122 - Praia de Belas",
        addressLocality: "Porto Alegre",
        addressRegion: "RS",
        postalCode: "90810-240",
        addressCountry: "BR",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Script unificado com todos os locais */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <StickyHeader />
      <HeroSection />

      {/* Seções da Landing Page */}
      <AboutSection />
      <PracticeAreasSection />
      <InteractiveToolsSection />
      <WhyChooseUsSection />
      <SuccessCasesSection />
      <ContactSection />

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
