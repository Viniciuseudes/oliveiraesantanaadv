// components/hero-section.tsx
"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Users, FileText } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/language-context";
import AccessibilityControls from "./accessibility-controls";
import AnimatedCounter from "./animated-counter";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAreas = () => {
    document
      .getElementById("areas-atuacao")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    // Adicionado 'flex-col' para garantir empilhamento e 'justify-center'
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#F5F5F0] via-[#E8E8E0] to-[#D5D5C8] py-10">
      {" "}
      {/* Adicionado py-10 para dar algum respiro */}
      {/* ... (Controles de acessibilidade e divs de fundo) ... */}
      <div className="absolute top-6 right-6 z-20">
        <AccessibilityControls variant="hero" />
      </div>
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-[#4A1414] opacity-5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-[#6B6B6B] opacity-5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "10s", animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4A1414] opacity-3 rounded-full blur-2xl animate-float"
          style={{ animationDuration: "15s" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8B8B8B] opacity-3 rounded-full blur-2xl animate-float"
          style={{ animationDuration: "12s", animationDelay: "3s" }}
        />
      </div>
      {/* Container principal */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        {" "}
        {/* Adicionado flex flex-col items-center */}
        <div
          // Removido py-20 daqui, movido para a section
          className={`w-full max-w-5xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* --- AJUSTE: Margem inferior do logo reduzida --- */}
          <div className="mb-8 md:mb-10 flex justify-center">
            {" "}
            {/* Era mb-12 */}
            <div
              className={`transition-all duration-1000 delay-300 animate-logo-entrance ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              <Image
                src="/logo.png"
                alt="Oliveira & Santana"
                width={280}
                height={280}
                // Talvez reduzir um pouco a altura se necessário: h-40 md:h-56
                className="w-auto h-48 md:h-64 animate-subtle-float hover:scale-110 transition-transform duration-500"
                priority
              />
            </div>
          </div>

          <h1
            // Mantido mb-6
            className={`text-4xl md:text-6xl lg:text-7xl font-sans font-bold text-[#4A1414] mb-6 transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="block text-balance animate-slide-in-left">
              {t("hero.tagline")}
            </span>
          </h1>

          {/* Subtitle */}
          {/* --- AJUSTE: Margem inferior do subtítulo reduzida --- */}
          <p
            className={`text-lg md:text-xl text-[#6B6B6B] mb-8 md:mb-10 max-w-2xl mx-auto transition-all duration-1000 delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            } text-balance`} // Era mb-12
          >
            {t("hero.subtitle")}
          </p>

          {/* Bloco de Contadores */}
          {/* --- AJUSTE: Margem inferior dos contadores reduzida --- */}
          <div
            className={`grid grid-cols-2 gap-6 md:gap-12 max-w-sm md:max-w-md mx-auto mb-8 md:mb-10 transition-all duration-1000 delay-[900ms] ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`} // Era mb-12, ajustado max-w e gap
          >
            <AnimatedCounter
              targetValue={1000}
              label={t("hero.counter.clients") || "Clientes Satisfeitos"}
              icon={Users}
            />
            <AnimatedCounter
              targetValue={2300}
              label={t("hero.counter.cases") || "Processos Concluídos"}
              icon={FileText}
            />
          </div>

          {/* Botão CTA */}
          <div
            className={`transition-all duration-1000 delay-[1100ms] ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <Button
              size="lg"
              onClick={scrollToAreas}
              className="bg-[#4A1414] hover:bg-[#6B1414] text-white px-8 py-6 text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 group"
            >
              {t("hero.cta")}
              <ArrowDown className="ml-2 h-5 w-5 animate-bounce group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
