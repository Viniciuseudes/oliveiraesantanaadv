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

  const team = [
    {
      name: "Raphael Oliveira",
      specialty: "Direito Empresarial",
      oab: "OAB/RS 45.678",
      image: "/team-photo1.jpg",
      bio: "Advogado, pós-graduado em Direito Empresarial, e Conselheiro da OAB Subseccional Garanhuns/PE, nos triênios 2022/2024 e 2025/2027.",
    },
    {
      name: "Joan Felix Oliveira da Silva",
      specialty: "Direito Tributário",
      oab: "OAB/PE 38.588",
      image: "/joan.png",
      bio: "Advogado com mais de 10 anos de atuação em todo o Brasil, com ampla experiência em Transação Tributária.",
    },
    {
      name: "Mayara Naytania",
      specialty: "Direito Trabalhista Empresarial",
      oab: "OAB/PE nº 57.739",
      image: "/joan (1).png",
      bio: "Advogada especializada em Direito Trabalhista Preventivo Empresarial. Atua na construção de relações de trabalho éticas, seguras e sustentáveis, com foco em conformidade e prevenção jurídica.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      // ALTERADO: bg-[#081c29] (Azul Escuro) e texto branco
      className="py-20 md:py-32 bg-[#081c29] text-white relative overflow-hidden"
      id="sobre"
    >
      {/* Pattern de fundo sutil para não ficar chapado */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div
          className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-sans font-bold mb-6 text-balance text-white">
            {t("about.title")}
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed text-balance">
            {t("about.history")}
          </p>
        </div>

        {/* Missão, Visão, Valores (Cards Transparentes com Borda Dourada/Branca) */}
        <div className="mb-24">
          <div className="flex overflow-x-auto space-x-6 md:space-x-0 md:grid md:grid-cols-3 md:gap-8 pb-4 md:pb-0 scrollbar-hide">
            {values.map((value, index) => (
              <Card
                key={value.title}
                // Cards Glassmorphism (efeito vidro fosco sobre o azul)
                className={`flex-shrink-0 w-full max-w-xs sm:max-w-sm md:max-w-none md:w-auto 
                  bg-white/5 border border-white/10 backdrop-blur-sm 
                  hover:bg-white/10 hover:border-white/20 shadow-xl 
                  transition-all duration-500 hover:-translate-y-2 group
                  ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-sans font-bold text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Differentiator (Destaque em Branco para contraste reverso) */}
        <div
          className={`max-w-4xl mx-auto text-center mb-24 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-white text-[#081c29] p-10 md:p-14 rounded-2xl shadow-2xl relative overflow-hidden">
            {/* Detalhe decorativo */}
            <div className="absolute top-0 left-0 w-2 h-full bg-[#c5a059]"></div>

            <p className="text-xl md:text-3xl font-sans font-semibold text-balance italic">
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
          <h3 className="text-3xl md:text-4xl font-sans font-bold text-white text-center mb-16 relative inline-block left-1/2 -translate-x-1/2">
            {t("about.team")}
            <span className="absolute -bottom-4 left-0 w-full h-1 bg-[#c5a059] rounded-full"></span>
          </h3>

          <div className="grid md:grid-cols-3 gap-10">
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
