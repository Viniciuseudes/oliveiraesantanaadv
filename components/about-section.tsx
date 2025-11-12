"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart } from "lucide-react";
import TeamMember from "./team-member";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/language-context";

const AboutSection = () => {
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

  const values = [
    {
      icon: Target,
      title: t("about.mission"),
      description: t("about.mission.text"),
    },
    {
      icon: Eye,
      title: t("about.vision"),
      description: t("about.vision.text"),
    },
    {
      icon: Heart,
      title: t("about.values"),
      description: t("about.values.text"),
    },
  ];

  // --- EQUIPE ATUALIZADA CONFORME SOLICITADO ---
  const team = [
    {
      name: "Joan Felix Oliveira da Silva",
      specialty: "Direito Tributário",
      oab: "OAB/PE 38.146",
      image: "joan.png", // Usando a foto placeholder
      bio: "Advogado com mais de 10 anos de atuação em todo o Brasil, com ampla experiência em Transação Tributária.",
    },
    {
      name: "Raphael Oliveira",
      specialty: "Direito Empresarial",
      oab: "OAB/RS 45.678", // Mantida a OAB do código anterior
      image: "/team-photo1.jpg", // Foto correta do Raphael
      bio: "Advogado, pós-graduado em Direito Empresarial, e Conselheiro da OAB Subseccional Garanhuns/PE, nos triênios 2022/2024 e 2025/2027.",
    },
    {
      name: "Mayara Naytania",
      specialty: "Direito Trabalhista Empresarial",
      oab: "OAB/PE nº 57.739",
      image: "/joan (1).png", // Usando a foto placeholder
      bio: "Advogada especializada em Direito Trabalhista Preventivo Empresarial. Atua na construção de relações de trabalho éticas, seguras e sustentáveis, com foco em conformidade e prevenção jurídica.",
    },
  ];
  // --- FIM DA ATUALIZAÇÃO ---

  return (
    // --- ALTERADO: Fundo ---
    <section
      ref={sectionRef}
      className="py-20 md:py-32 bg-background"
      id="sobre"
    >
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* --- ALTERADO: Cores de texto --- */}
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-6 text-balance">
            {t("about.title")}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-balance">
            {t("about.history")}
          </p>
        </div>

        <div className="mb-20">
          <div className="flex overflow-x-auto space-x-6 md:space-x-0 md:grid md:grid-cols-3 md:gap-8 pb-4 md:pb-0 scrollbar-hide">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className={`flex-shrink-0 w-full max-w-xs sm:max-w-sm md:max-w-none md:w-auto border-none shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-card ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8 text-center">
                  {/* --- ALTERADO: Cores do ícone --- */}
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-foreground" />
                  </div>
                  <h3 className="text-2xl font-sans font-bold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Differentiator */}
        <div
          className={`max-w-4xl mx-auto text-center mb-20 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* --- ALTERADO: Cores --- */}
          <div className="bg-secondary text-foreground p-8 md:p-12 rounded-2xl shadow-2xl">
            <p className="text-xl md:text-2xl font-sans font-semibold text-balance">
              "{t("about.differentiator")}"
            </p>
          </div>
        </div>

        {/* Team */}
        <div
          className={`transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* --- ALTERADO: Cor --- */}
          <h3 className="text-3xl md:text-4xl font-sans font-bold text-foreground text-center mb-12">
            {t("about.team")}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <TeamMember key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
