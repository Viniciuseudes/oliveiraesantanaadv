"use client";

import type React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/language-context";

// DADOS ATUALIZADOS COM RECIFE
const offices = [
  {
    city: "Recife",
    address: "Av. Domingos Ferreira, Empresarial Business Beach, Sala 704",
    neighborhood: "Boa Viagem",
    cep: "", // CEP não foi fornecido
    state: "Recife - PE",
    phone: "(87) 9988-9988", // <<< ATUALIZAR (Telefone placeholder)
    email: "almeidaraphael.adv@gmail.com / joanfelixadv@gmail.com", // <<< ATUALIZAR (Email placeholder)
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.39000806495!2d-34.90306158889047!3d-8.06129889200424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1f9f25a7698d%3A0x67a3855e7e1e406!2sAv.%20Domingos%20Ferreira%2C%201920%20-%20Empresarial%20Business%20Beach%20-%20Boa%20Viagem%2C%20Recife%20-%20PE%2C%2051111-020!5e0!3m2!1spt-BR!2sbr!4v1731370000000!5m2!1spt-BR!2sbr", // <<< ATUALIZAR (URL do mapa placeholder)
  },
  {
    city: "Porto Alegre",
    address: "Avenida Padre Cacique nº 122",
    neighborhood: "Praia de Belas",
    cep: "CEP 90810-240",
    state: "Porto Alegre - RS",
    phone: "(51) 99621-4554",
    email: "almeidaraphael.adv@gmail.com / joanfelixadv@gmail.com",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.2!2d-51.2287!3d-30.0368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAyJzEyLjUiUyA1McKwMTMnNDMuMyJX!5e0!3m2!1spt-BR!2sbr!4v1234567890",
  },
  {
    city: "Garanhuns",
    address: "Rua Dr. José Mariano, 665",
    neighborhood: "Heliópolis",
    cep: "",
    state: "Garanhuns - PE",
    phone: "(87) 9988-9988",
    email: "almeidaraphael.adv@gmail.com / joanfelixadv@gmail.com",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.5!2d-36.4927!3d-8.8903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwNTMnMjUuMSJTIDM2wrAyOSczMy43Ilc!5e0!3m2!1spt-BR!2sbr!4v1234567890",
  },
];

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t("contact.success"));
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 bg-background"
      id="contato"
    >
      <div className="container mx-auto px-4">
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            {t("contact.title")}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-balance">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Coluna do Formulário (Sem Card) */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="sr-only">
                  {t("contact.name")}
                </label>
                <Input
                  id="name"
                  placeholder={t("contact.name")}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="bg-transparent border-0 border-b border-border rounded-none text-lg p-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary transition"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  {t("contact.email")}
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t("contact.email")}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="bg-transparent border-0 border-b border-border rounded-none text-lg p-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary transition"
                />
              </div>
              <div>
                <label htmlFor="company" className="sr-only">
                  {t("contact.company")}
                </label>
                <Input
                  id="company"
                  placeholder={t("contact.company")}
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="bg-transparent border-0 border-b border-border rounded-none text-lg p-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary transition"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  {t("contact.message")}
                </label>
                <Textarea
                  id="message"
                  placeholder={t("contact.message")}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={5}
                  className="bg-transparent border-0 border-b border-border rounded-none text-lg p-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary transition"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-lg"
              >
                {t("contact.send")}
              </Button>
            </form>
          </div>

          {/* Coluna dos Endereços (Sem Cards) */}
          <div
            className={`space-y-12 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            {offices.map((office) => (
              <div key={office.city}>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {office.city}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-muted-foreground mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-muted-foreground">{office.address}</p>
                      <p className="text-muted-foreground">
                        {office.neighborhood}
                      </p>
                      {office.cep && (
                        <p className="text-muted-foreground">{office.cep}</p>
                      )}
                      <p className="text-muted-foreground">{office.state}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-muted-foreground mr-3" />
                    <a
                      href={`tel:${office.phone}`}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-muted-foreground mr-3" />
                    <a
                      href={`mailto:${office.email}`}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {office.email}
                    </a>
                  </div>
                </div>
                <div className="mt-6 h-48 rounded-lg overflow-hidden">
                  <iframe
                    src={office.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
