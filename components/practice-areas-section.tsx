"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, Building2, Users, ShieldCheck, ArrowRight } from "lucide-react"; // Adicionei ArrowRight
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/language-context";

export default function PracticeAreasSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const areas = [
    {
      title: t("areas.tax"),
      description: t("areas.tax.description"),
      icon: Scale,
    },
    {
      title: t("areas.corporate"),
      description: t("areas.corporate.description"),
      icon: Building2,
    },
    {
      title: t("areas.labor"),
      description: t("areas.labor.description"),
      icon: Users,
    },
    {
      title: t("areas.preventive"),
      description: t("areas.preventive.description"),
      icon: ShieldCheck,
    },
  ];

  return (
    <section
      ref={sectionRef}
      // Fundo Cinza Claro "Off-White" Premium
      className="py-20 md:py-32 bg-[#f4f7fa]"
      id="areas-atuacao"
    >
      <div className="container mx-auto px-4">
        <div
          className={`max-w-3xl mx-auto text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-[#081c29] font-bold tracking-wider uppercase text-sm mb-4 block">
            Nossa Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-[#081c29] mb-6">
            {t("areas.title")}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t("areas.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, index) => (
            <Card
              key={index}
              className={`border-none shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group bg-white relative overflow-hidden ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Barra lateral colorida no hover */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#081c29] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></div>

              <CardHeader className="pt-8 pb-4">
                <div className="w-14 h-14 bg-[#081c29]/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#081c29] transition-colors duration-500">
                  <area.icon className="h-7 w-7 text-[#081c29] group-hover:text-white transition-colors duration-500" />
                </div>
                <CardTitle className="text-xl font-bold text-[#081c29] group-hover:text-primary transition-colors">
                  {area.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-sm mb-6">
                  {area.description}
                </p>

                {/* Link "Saiba mais" implícito */}
                <div className="flex items-center text-[#081c29] font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300">
                  Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
