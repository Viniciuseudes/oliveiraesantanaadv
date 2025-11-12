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
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background py-10">
      <div className="absolute top-6 right-6 z-20">
        <AccessibilityControls variant="hero" />
      </div>
      <div className="absolute inset-0 overflow-hidden">
        {/* --- ALTERADO: Cores dos blurs --- */}
        <div
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary/5 opacity-5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-secondary/5 opacity-5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "10s", animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/3 opacity-3 rounded-full blur-2xl animate-float"
          style={{ animationDuration: "15s" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/3 opacity-3 rounded-full blur-2xl animate-float"
          style={{ animationDuration: "12s", animationDelay: "3s" }}
        />
      </div>
      {/* Container principal */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        <div
          className={`w-full max-w-5xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-8 md:mb-10 flex justify-center">
            <div
              className={`transition-all duration-1000 delay-300 animate-logo-entrance ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              {/* --- ALTERADO: Logo e classes --- */}
              <Image
                src="/logo-monogram-white.png"
                alt="Oliveira & Santana"
                width={280}
                height={280}
                className="w-auto h-48 md:h-64 transition-transform duration-500"
                priority
              />
            </div>
          </div>

          <h1
            className={`text-4xl md:text-6xl lg:text-7xl font-sans font-bold text-foreground mb-6 transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="block text-balance animate-slide-in-left">
              {t("hero.tagline")}
            </span>
          </h1>

          {/* --- ALTERADO: Cor do Subtítulo --- */}
          <p
            className={`text-lg md:text-xl text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto transition-all duration-1000 delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            } text-balance`}
          >
            {t("hero.subtitle")}
          </p>

          {/* --- ALTERADO: Cores dos Contadores --- */}
          <div
            className={`grid grid-cols-2 gap-6 md:gap-12 max-w-sm md:max-w-md mx-auto mb-8 md:mb-10 transition-all duration-1000 delay-[900ms] ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* O componente AnimatedCounter buscará as cores do CSS global (text-foreground, text-muted-foreground) */}
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

          {/* --- ALTERADO: Cores do Botão CTA --- */}
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
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 group"
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
