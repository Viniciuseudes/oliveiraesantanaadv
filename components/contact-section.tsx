"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/contexts/language-context"

const offices = [
  {
    city: "Porto Alegre",
    address: "Avenida Padre Cacique nº 122",
    neighborhood: "Praia de Belas",
    cep: "CEP 90810-240",
    state: "Porto Alegre - RS",
    phone: "(51) 3333-4444",
    email: "poa@oliveirasantana.adv.br",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.2!2d-51.2287!3d-30.0368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAyJzEyLjUiUyA1McKwMTMnNDMuMyJX!5e0!3m2!1spt-BR!2sbr!4v1234567890",
  },
  {
    city: "Garanhuns",
    address: "Rua Dr. José Mariano, 665",
    neighborhood: "Heliópolis",
    cep: "",
    state: "Garanhuns - PE",
    phone: "(87) 3333-5555",
    email: "garanhuns@oliveirasantana.adv.br",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.5!2d-36.4927!3d-8.8903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwNTMnMjUuMSJTIDM2wrAyOSczMy43Ilc!5e0!3m2!1spt-BR!2sbr!4v1234567890",
  },
]

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(t("contact.success"))
    setFormData({ name: "", email: "", company: "", message: "" })
  }

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-white" id="contato">
      <div className="container mx-auto px-4">
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-[#4A1414] mb-6 text-balance">
            {t("contact.title")}
          </h2>
          <p className="text-lg text-[#6B6B6B] leading-relaxed text-balance">{t("contact.subtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card
            className={`border-none shadow-xl transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#4A1414] mb-2">
                    {t("contact.name")}
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="border-[#6B6B6B]/30"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#4A1414] mb-2">
                    {t("contact.email")}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="border-[#6B6B6B]/30"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-[#4A1414] mb-2">
                    {t("contact.company")}
                  </label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="border-[#6B6B6B]/30"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#4A1414] mb-2">
                    {t("contact.message")}
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="border-[#6B6B6B]/30"
                  />
                </div>
                <Button type="submit" className="w-full bg-[#4A1414] hover:bg-[#6B1414] text-white py-6 text-lg">
                  {t("contact.send")}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Office Information */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            {offices.map((office) => (
              <Card key={office.city} className="border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-sans font-bold text-[#4A1414] mb-4">{office.city}</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-[#4A1414] mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-[#6B6B6B]">{office.address}</p>
                        <p className="text-[#6B6B6B]">{office.neighborhood}</p>
                        {office.cep && <p className="text-[#6B6B6B]">{office.cep}</p>}
                        <p className="text-[#6B6B6B]">{office.state}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-[#4A1414] mr-3" />
                      <a href={`tel:${office.phone}`} className="text-[#6B6B6B] hover:text-[#4A1414] transition-colors">
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-[#4A1414] mr-3" />
                      <a
                        href={`mailto:${office.email}`}
                        className="text-[#6B6B6B] hover:text-[#4A1414] transition-colors"
                      >
                        {office.email}
                      </a>
                    </div>
                  </div>
                  <div className="mt-4 h-48 rounded-lg overflow-hidden">
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
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
