"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import AccessibilityControls from "./accessibility-controls"

export default function StickyHeader() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.8
      setIsVisible(window.scrollY > heroHeight)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { id: "sobre", label: t("footer.about") },
    { id: "areas-atuacao", label: t("footer.areas") },
    { id: "diferenciais", label: language === "pt" ? "Diferenciais" : "Why Us" },
    { id: "casos", label: language === "pt" ? "Casos" : "Cases" },
    { id: "contato", label: t("footer.contact") },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <Image src="/logo.png" alt="Oliveira & Santana" width={50} height={50} className="h-12 w-auto" />
            <span className="font-sans font-bold text-[#4A1414] text-lg hidden md:block">Oliveira & Santana</span>
          </button>

          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[#6B6B6B] hover:text-[#4A1414] transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Accessibility & Language Controls */}
          <div className="flex items-center space-x-2">
            <AccessibilityControls variant="header" />

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden h-9 w-9"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t animate-in slide-in-from-top">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-[#6B6B6B] hover:text-[#4A1414] hover:bg-gray-50 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
