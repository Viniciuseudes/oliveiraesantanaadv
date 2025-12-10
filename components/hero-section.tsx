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
    <section className="relative h-screen w-full overflow-hidden flex flex-col justify-center items-center">
      {/* 1. BACKGROUND CINEMÁTICO COM ZOOM LENTO */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/justice.jpg" // Certifique-se que esta imagem existe e tem alta qualidade
          alt="Background Justice"
          fill
          className="object-cover object-center animate-slow-zoom" // Efeito de zoom lento (Ken Burns)
          priority
        />
        {/* Overlay Azul da Marca + Vinheta para escurecer bordas */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#081c29]/90 via-[#081c29]/80 to-[#081c29] mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/40" />{" "}
        {/* Escurecimento extra para contraste */}
      </div>

      {/* 2. CONTEÚDO PRINCIPAL */}
      <div className="relative z-20 container mx-auto px-4 flex flex-col items-center text-center mt-[-60px]">
        {/* Logo Monograma (Branco) - Opacidade inicial 0 para animação */}
        <div
          className={`mb-8 transition-all duration-1000 ease-out transform ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          {/* Se tiver a logo completa branca, use aqui. Se não, use o monograma */}
          <Image
            src="/123.png"
            alt="Logo Icon"
            width={80}
            height={80}
            className="w-40 h-40 md:w-48 md:h-48 opacity-90 drop-shadow-2xl"
          />
        </div>

        {/* Badge Dourada de "Excelência" */}

        {/* Título Principal */}
        <h1
          className={`text-4xl md:text-6xl lg:text-7xl font-sans font-bold text-white mb-6 tracking-tight leading-tight max-w-5xl transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="block text-balance drop-shadow-lg">
            {t("hero.tagline") ||
              "Estratégia Jurídica para o Crescimento do seu Negócio"}
          </span>
        </h1>

        {/* Subtítulo */}
        <p
          className={`text-lg md:text-xl text-gray-200/90 mb-10 max-w-2xl font-light leading-relaxed transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {t("hero.subtitle") ||
            "Excelência em Direito Tributário e Empresarial com atendimento personalizado e resultados comprovados."}
        </p>

        {/* Botões de Ação (Estilo Premium) */}
        <div
          className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-[#c5a059] hover:bg-[#b08d4b] text-white px-8 py-7 text-base rounded-full shadow-[0_0_20px_rgba(197,160,89,0.3)] transition-all hover:scale-105"
          >
            Falar com um Especialista
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={scrollToAreas}
            className="border-white/30 text-white hover:bg-white hover:text-[#081c29] bg-transparent backdrop-blur-sm px-8 py-7 text-base rounded-full transition-all"
          >
            {t("hero.cta")}
          </Button>
        </div>
      </div>

      {/* 3. BARRA DE ESTATÍSTICAS FLUTUANTE (GLASSMORPHISM) */}
      <div
        className={`absolute bottom-8 md:bottom-12 left-4 right-4 z-20 transition-all duration-1000 delay-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-center divide-x divide-white/10">
            {/* Item 1 */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
              <div className="bg-[#c5a059]/20 p-3 rounded-full text-[#c5a059]">
                <Scale className="h-6 w-6" />
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white flex items-center justify-center md:justify-start">
                  +10{" "}
                  <span className="text-sm font-normal text-gray-400 ml-1">
                    Anos
                  </span>
                </div>
                <div className="text-xs md:text-sm text-gray-300 uppercase tracking-wider">
                  De Experiência
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left pl-4 md:pl-0">
              <div className="bg-[#c5a059]/20 p-3 rounded-full text-[#c5a059]">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <div className="flex items-center justify-center md:justify-start">
                  <span className="text-2xl md:text-3xl font-bold text-white mr-1">
                    +
                  </span>
                  <AnimatedCounter
                    targetValue={1000}
                    className="text-2xl md:text-3xl font-bold text-white"
                  />
                </div>
                <div className="text-xs md:text-sm text-gray-300 uppercase tracking-wider">
                  {t("hero.counter.clients") || "Clientes Atendidos"}
                </div>
              </div>
            </div>

            {/* Item 3 (Oculto em mobile muito pequeno se faltar espaço, ou ajustado) */}
            <div className="hidden md:flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
              <div className="bg-[#c5a059]/20 p-3 rounded-full text-[#c5a059]">
                <FileCheck className="h-6 w-6" />
              </div>
              <div>
                <div className="flex items-center justify-center md:justify-start">
                  <span className="text-2xl md:text-3xl font-bold text-white mr-1">
                    +
                  </span>
                  <AnimatedCounter
                    targetValue={2300}
                    className="text-2xl md:text-3xl font-bold text-white"
                  />
                </div>
                <div className="text-xs md:text-sm text-gray-300 uppercase tracking-wider">
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
