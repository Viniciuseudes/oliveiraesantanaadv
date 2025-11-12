"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Scale, Building2, Briefcase, ShieldCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/language-context";

export default function PracticeAreasSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const areas = [
    {
      icon: Scale,
      title: t("areas.tax"),
      description: t("areas.tax.description"),
    },
    {
      icon: Building2,
      title: t("areas.corporate"),
      description: t("areas.corporate.description"),
    },
    {
      icon: Briefcase,
      title: t("areas.labor"),
      description: t("areas.labor.description"),
    },
    {
      icon: ShieldCheck,
      title: t("areas.preventive"),
      description: t("areas.preventive.description"),
    },
  ];

  return (
    <section
      ref={sectionRef}
      // --- ALTERADO: Fundo ---
      className="py-20 md:py-32 bg-transparent"
      id="areas-atuacao"
    >
      <div className="container mx-auto px-4">
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* --- ALTERADO: Cores de texto --- */}
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-6 text-balance">
            {t("areas.title")}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-balance">
            {t("areas.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {areas.map((area, index) => (
            <Card
              key={area.title}
              // --- ALTERADO: Cor do Card ---
              className={`border-border shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col bg-card ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8 flex flex-col flex-grow">
                {/* --- ALTERADO: Cor do box do ícone --- */}
                <div className="w-20 h-20 bg-secondary rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <area.icon className="h-10 w-10 text-foreground" />
                </div>
                {/* --- ALTERADO: Cores de texto --- */}
                <h3 className="text-3xl font-sans font-bold text-foreground mb-6">
                  {area.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
