"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Users, TrendingUp, Zap, Target } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/language-context";

export default function WhyChooseUsSection() {
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

  const differentials = [
    {
      icon: Users,
      title: t("why.1.title"),
      description: t("why.1.desc"),
    },
    {
      icon: TrendingUp,
      title: t("why.2.title"),
      description: t("why.2.desc"),
    },
    {
      icon: Zap,
      title: t("why.3.title"),
      description: t("why.3.desc"),
    },
    {
      icon: Target,
      title: t("why.4.title"),
      description: t("why.4.desc"),
    },
  ];

  return (
    // --- ALTERADO: Fundo E ADICIONADO ID ---
    <section
      ref={sectionRef}
      className="py-20 md:py-32 bg-background"
      id="diferenciais" // <-- CORREÇÃO AQUI
    >
      <div className="container mx-auto px-4">
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* --- ALTERADO: Cores de texto --- */}
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-6 text-balance">
            {t("why.title")}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-balance">
            {t("why.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {differentials.map((item, index) => (
            <Card
              key={item.title}
              // --- ALTERADO: Cor do Card ---
              className={`border-border shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group bg-card ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6 text-center">
                {/* --- ALTERADO: Cores do ícone --- */}
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="h-8 w-8 text-foreground" />
                </div>
                {/* --- ALTERADO: Cores de texto --- */}
                <h3 className="text-lg font-sans font-bold text-foreground mb-3 text-balance">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
