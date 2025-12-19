"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Phone, Send, MapPin, Clock } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/contexts/language-context";

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  // --- OTIMIZAÇÃO DE MAPAS (Lazy Loading) ---
  // Estado para rastrear quais mapas já foram carregados pelo usuário
  const [loadedMaps, setLoadedMaps] = useState<Set<string>>(
    new Set(["garanhuns"])
  );

  // Função chamada ao clicar na aba: libera o carregamento do mapa específico
  const handleTabChange = (value: string) => {
    setLoadedMaps((prev) => {
      const newSet = new Set(prev);
      newSet.add(value);
      return newSet;
    });
  };

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t("contact.success"));
  };

  // Dados dos escritórios com URLs de Embed REAIS geradas para os endereços
  const offices = [
    {
      id: "garanhuns",
      label: "Garanhuns - PE",
      address: "R. Dr. José Mariano, 665 - Heliópolis",
      // URL gerada para o endereço específico
      mapSrc:
        "https://maps.google.com/maps?q=R.+Dr.+Jos%C3%A9+Mariano,+665+-+Heli%C3%B3polis,+Garanhuns+-+PE&t=&z=15&ie=UTF8&iwloc=&output=embed",
    },
    {
      id: "recife",
      label: "Recife - PE",
      address: "Av. Domingos Ferreira, 704 - Pina",
      mapSrc:
        "https://maps.google.com/maps?q=Av.+Domingos+Ferreira,+704+-+Pina,+Recife+-+PE&t=&z=15&ie=UTF8&iwloc=&output=embed",
    },
    {
      id: "poa",
      label: "Porto Alegre - RS",
      address: "Av. Padre Cacique, 122 - Praia de Belas",
      mapSrc:
        "https://maps.google.com/maps?q=Av.+Padre+Cacique,+122+-+Praia+de+Belas,+Porto+Alegre+-+RS&t=&z=15&ie=UTF8&iwloc=&output=embed",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contato"
      className="relative py-20 md:py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #ffffff 0%, #f0f4f8 50%, #081c29 100%)",
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Header da Seção */}
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-[#081c29] font-bold tracking-wider uppercase text-sm mb-4 block">
            Fale Conosco
          </span>
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-[#081c29] mb-6">
            {t("contact.title")}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          {/* Coluna da Esquerda: Info + Mapas (Abas) */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Cards Rápidos */}
            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="border-none shadow-md bg-white/80 backdrop-blur-md">
                <CardContent className="p-5 flex flex-col items-center text-center">
                  <div className="bg-[#081c29]/10 p-3 rounded-full mb-3">
                    <Phone className="h-5 w-5 text-[#081c29]" />
                  </div>
                  <h3 className="font-bold text-[#081c29] text-sm">
                    Central de Atendimento
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">(87) 99988-9988 </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md bg-white/80 backdrop-blur-md">
                <CardContent className="p-5 flex flex-col items-center text-center">
                  <div className="bg-[#081c29]/10 p-3 rounded-full mb-3">
                    <Mail className="h-5 w-5 text-[#081c29]" />
                  </div>
                  <h3 className="font-bold text-[#081c29] text-sm">
                    E-mail Corporativo
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    contato@oliveiraesantana.adv.br
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* MAPAS COM LAZY LOADING */}
            <Card className="border-none shadow-xl bg-white/90 backdrop-blur-md overflow-hidden">
              <div className="p-6 pb-0">
                <h3 className="text-xl font-sans font-bold text-[#081c29] mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5" /> Nossas Unidades
                </h3>
              </div>

              {/* Adicionado onValueChange para detectar clique na aba */}
              <Tabs
                defaultValue="garanhuns"
                className="w-full"
                onValueChange={handleTabChange}
              >
                <div className="px-6">
                  <TabsList className="w-full grid grid-cols-3 bg-[#f0f4f8] rounded-lg p-1">
                    {offices.map((office) => (
                      <TabsTrigger
                        key={office.id}
                        value={office.id}
                        className="data-[state=active]:bg-[#081c29] data-[state=active]:text-white text-xs sm:text-sm font-medium transition-all"
                      >
                        {office.id === "poa"
                          ? "Porto Alegre"
                          : office.label.split(" - ")[0]}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>

                {offices.map((office) => (
                  <TabsContent
                    key={office.id}
                    value={office.id}
                    className="mt-0"
                  >
                    <div className="p-6 pt-4 space-y-4">
                      <div className="flex items-start gap-3 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-100">
                        <MapPin className="h-4 w-4 text-[#081c29] shrink-0 mt-0.5" />
                        <span>{office.address}</span>
                      </div>

                      {/* O MAPA (Iframe Otimizado) */}
                      <div className="w-full h-48 bg-gray-200 rounded-xl overflow-hidden border border-gray-200 shadow-inner relative group">
                        {/* Só renderiza o Iframe se a aba foi ativada */}
                        {loadedMaps.has(office.id) ? (
                          <iframe
                            width="100%"
                            height="100%"
                            src={office.mapSrc}
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy" // Native lazy loading
                            referrerPolicy="no-referrer-when-downgrade"
                            title={`Mapa ${office.label}`}
                            className="transition-opacity duration-700 opacity-0 animate-in fade-in fill-mode-forwards"
                            onLoad={(e) =>
                              e.currentTarget.classList.remove("opacity-0")
                            }
                          ></iframe>
                        ) : (
                          // Placeholder enquanto não clica/carrega
                          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 text-gray-400">
                            <MapPin className="h-8 w-8 mb-2 opacity-20" />
                            <span className="text-xs">
                              Carregando visualização...
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </Card>

            <div className="flex items-center justify-center gap-2 text-sm text-[#081c29]/70 bg-white/50 py-2 rounded-full">
              <Clock className="h-4 w-4" />
              <span>Segunda a Sexta, das 8h às 18h</span>
            </div>
          </div>

          {/* Coluna da Direita: Formulário (Sem Alterações) */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <Card className="border-none shadow-2xl bg-white rounded-2xl overflow-hidden">
              <div className="h-2 bg-[#081c29] w-full"></div>

              <CardContent className="p-8 md:p-10">
                <h3 className="text-2xl font-sans font-bold text-[#081c29] mb-6">
                  Envie uma mensagem
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 ml-1">
                      {t("contact.name")}
                    </label>
                    <Input
                      placeholder="Nome completo"
                      className="bg-gray-50 border-gray-200 focus:border-[#081c29] focus:ring-[#081c29]/20 h-11"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 ml-1">
                        {t("contact.email")}
                      </label>
                      <Input
                        type="email"
                        placeholder="seu@email.com"
                        className="bg-gray-50 border-gray-200 focus:border-[#081c29] focus:ring-[#081c29]/20 h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 ml-1">
                        {t("contact.company")}
                      </label>
                      <Input
                        placeholder="Sua empresa"
                        className="bg-gray-50 border-gray-200 focus:border-[#081c29] focus:ring-[#081c29]/20 h-11"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 ml-1">
                      {t("contact.message")}
                    </label>
                    <Textarea
                      placeholder="Como podemos ajudar juridicamente?"
                      className="min-h-[120px] bg-gray-50 border-gray-200 focus:border-[#081c29] focus:ring-[#081c29]/20 resize-none p-4"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#081c29] text-white hover:bg-[#081c29]/90 h-12 text-base font-medium rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                  >
                    {t("contact.send")}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
