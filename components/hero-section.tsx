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
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-10">
      {/* Removemos os blurs escuros antigos, pois o fundo agora é claro/degradê via CSS global */}

      <div className="absolute top-6 right-6 z-20">
        <AccessibilityControls variant="hero" />
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        <div
          className={`w-full max-w-5xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* LOGO: Trocado para a versão padrão (Azul/Escura) para contrastar no branco */}
          <div className="mb-10 flex justify-center">
            <div
              className={`transition-all duration-1000 delay-300 animate-logo-entrance ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              <Image
                src="/logo.png"
                alt="Oliveira & Santana"
                width={300}
                height={300}
                className="w-auto h-40 md:h-56 transition-transform duration-500 hover:scale-105"
                priority
              />
            </div>
          </div>

          {/* TIPOGRAFIA: Ajustada para ser mais leve, minimalista e proporcional */}
          <h1
            className={`text-3xl md:text-5xl lg:text-6xl font-sans font-light tracking-tight text-primary mb-6 transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="block text-balance leading-tight">
              {t("hero.tagline")}
            </span>
          </h1>

          <p
            className={`text-base md:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto font-light leading-relaxed transition-all duration-1000 delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            } text-balance`}
          >
            {t("hero.subtitle")}
          </p>

          {/* Contadores e CTA */}
          <div className="space-y-8">
            <div
              className={`grid grid-cols-2 gap-8 max-w-sm mx-auto transition-all duration-1000 delay-[900ms] ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
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
                className="bg-primary text-white hover:bg-primary/90 px-8 py-6 text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {t("hero.cta")}
                <ArrowDown className="ml-2 h-4 w-4 animate-bounce" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
