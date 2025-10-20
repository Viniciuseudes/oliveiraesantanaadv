"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import AccessibilityControls from "./accessibility-controls"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToAreas = () => {
    document.getElementById("areas-atuacao")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F5F5F0] via-[#E8E8E0] to-[#D5D5C8]">
      <div className="absolute top-6 right-6 z-20">
        <AccessibilityControls variant="hero" />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-[#4A1414] opacity-5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-[#6B6B6B] opacity-5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "10s", animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4A1414] opacity-3 rounded-full blur-2xl animate-float"
          style={{ animationDuration: "15s" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8B8B8B] opacity-3 rounded-full blur-2xl animate-float"
          style={{ animationDuration: "12s", animationDelay: "3s" }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div
          className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="mb-12 flex justify-center">
            <div
              className={`transition-all duration-1000 delay-300 animate-logo-entrance ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
            >
              <Image
                src="/logo.png"
                alt="Oliveira & Santana"
                width={280}
                height={280}
                className="w-auto h-48 md:h-64 animate-subtle-float hover:scale-110 transition-transform duration-500"
                priority
              />
            </div>
          </div>

          <h1
            className={`text-4xl md:text-6xl lg:text-7xl font-sans font-bold text-[#4A1414] mb-6 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <span className="block text-balance animate-slide-in-left">{t("hero.tagline")}</span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-lg md:text-xl text-[#6B6B6B] mb-12 max-w-2xl mx-auto transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} text-balance`}
          >
            {t("hero.subtitle")}
          </p>

          <div
            className={`transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Button
              size="lg"
              onClick={scrollToAreas}
              className="bg-[#4A1414] hover:bg-[#6B1414] text-white px-8 py-6 text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 group"
            >
              {t("hero.cta")}
              <ArrowDown className="ml-2 h-5 w-5 animate-bounce group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#4A1414] rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-[#4A1414] rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
