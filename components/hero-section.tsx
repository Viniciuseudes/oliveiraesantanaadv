"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Scale, FileCheck } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/language-context";
import AnimatedCounter from "./animated-counter";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAreas = () => {
    document
      .getElementById("areas-atuacao")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center items-center py-20 lg:py-0">
      {/* 1. BACKGROUND CINEMÁTICO */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/justice.jpg"
          alt="Background Justice"
          fill
          className="object-cover object-center animate-slow-zoom"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#081c29]/90 via-[#081c29]/80 to-[#081c29] mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* 2. CONTEÚDO PRINCIPAL */}
      <div className="relative z-20 container mx-auto px-4 flex flex-col items-center text-center flex-grow justify-center">
        {/* --- LOGO: Aumentada Drasticamente --- */}
        <div
          className={`mb-4 -mt-16 md:-mt-24 transition-all duration-1000 ease-out transform ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          {/* Mobile: w-60 (240px) | Desktop: w-[28rem] (448px) */}
          <div className="relative w-60 h-60 md:w-[28rem] md:h-[28rem]">
            <Image
              src="/123.png"
              alt="Oliveira & Santana Logo"
              fill
              className="object-contain opacity-90 drop-shadow-2xl"
            />
          </div>
        </div>

        {/* --- TÍTULO: Espaçamento reduzido (mb-2) --- */}
        <h1
          className={`text-2xl md:text-4xl lg:text-5xl font-sans font-bold text-white mb-2 tracking-tight leading-tight max-w-4xl transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="block text-balance drop-shadow-lg">
            {t("hero.tagline") ||
              "Estratégia jurídica para o crescimento do seu negócio"}
          </span>
        </h1>

        {/* --- SUBTÍTULO: Margem mínima (mb-6 -> mb-4) para puxar botões --- */}
        <p
          className={`text-sm md:text-lg text-gray-200/90 mb-5 max-w-2xl font-light leading-snug transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {t("hero.subtitle") ||
            "Excelência em Direito Tributário e Empresarial com atendimento personalizado."}
        </p>

        {/* --- BOTÕES: Subiram devido à redução das margens acima --- */}
        <div
          className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-[#c5a059] hover:bg-[#b08d4b] text-white px-8 py-6 text-base rounded-full shadow-[0_0_20px_rgba(197,160,89,0.3)] transition-all hover:scale-105"
          >
            Falar com um Especialista
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={scrollToAreas}
            className="border-white/30 text-white hover:bg-white hover:text-[#081c29] bg-transparent backdrop-blur-sm px-8 py-6 text-base rounded-full transition-all"
          >
            {t("hero.cta") || "Conheça Nossas Áreas"}
          </Button>
        </div>
      </div>

      {/* 3. BARRA DE ESTATÍSTICAS */}
      <div
        className={`w-full px-4 z-20 mt-8 lg:mt-0 lg:absolute lg:bottom-8 transition-all duration-1000 delay-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-center md:divide-x md:divide-white/10">
            {/* Item 1 */}
            <div className="flex flex-row items-center justify-center gap-4 text-left">
              <div className="bg-[#c5a059]/20 p-2 md:p-3 rounded-full text-[#c5a059] shrink-0">
                <Scale className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <div>
                <div className="text-xl md:text-3xl font-bold text-white flex items-center">
                  +10{" "}
                  <span className="text-sm font-normal text-gray-400 ml-1">
                    Anos
                  </span>
                </div>
                <div className="text-[10px] md:text-xs text-gray-300 uppercase tracking-wider">
                  De Experiência
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex flex-row items-center justify-center gap-4 text-left md:pl-4">
              <div className="bg-[#c5a059]/20 p-2 md:p-3 rounded-full text-[#c5a059] shrink-0">
                <Users className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <div>
                <div className="flex items-center">
                  <span className="text-xl md:text-3xl font-bold text-white mr-1">
                    +
                  </span>
                  <AnimatedCounter
                    targetValue={1000}
                    className="text-xl md:text-3xl font-bold text-white"
                  />
                </div>
                <div className="text-[10px] md:text-xs text-gray-300 uppercase tracking-wider">
                  {t("hero.counter.clients") || "Clientes Atendidos"}
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex flex-row items-center justify-center gap-4 text-left md:pl-4">
              <div className="bg-[#c5a059]/20 p-2 md:p-3 rounded-full text-[#c5a059] shrink-0">
                <FileCheck className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <div>
                <div className="flex items-center">
                  <span className="text-xl md:text-3xl font-bold text-white mr-1">
                    +
                  </span>
                  <AnimatedCounter
                    targetValue={2300}
                    className="text-xl md:text-3xl font-bold text-white"
                  />
                </div>
                <div className="text-[10px] md:text-xs text-gray-300 uppercase tracking-wider">
                  {t("hero.counter.cases") || "Processos Êxitosos"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
