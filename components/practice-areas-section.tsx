"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Scale, Building2 } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/contexts/language-context"

export default function PracticeAreasSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { t } = useLanguage()

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

  const areas = [
    {
      icon: Scale,
      title: t("areas.tax"),
      items: [t("areas.tax.1"), t("areas.tax.2"), t("areas.tax.3"), t("areas.tax.4")],
      benefit: t("areas.tax.benefit"),
    },
    {
      icon: Building2,
      title: t("areas.corporate"),
      items: [t("areas.corporate.1"), t("areas.corporate.2"), t("areas.corporate.3"), t("areas.corporate.4")],
      benefit: t("areas.corporate.benefit"),
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-br from-[#F5F5F0] to-[#E8E8E0]"
      id="areas-atuacao"
    >
      <div className="container mx-auto px-4">
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-[#4A1414] mb-6 text-balance">
            {t("areas.title")}
          </h2>
          <p className="text-lg text-[#6B6B6B] leading-relaxed text-balance">{t("areas.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {areas.map((area, index) => (
            <Card
              key={area.title}
              className={`border-none shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-[#4A1414] to-[#6B1414] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <area.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl font-sans font-bold text-[#4A1414] mb-6">{area.title}</h3>
                <ul className="space-y-3 mb-6">
                  {area.items.map((item) => (
                    <li key={item} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-[#4A1414] rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-[#6B6B6B]">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-[#4A1414]/5 border-l-4 border-[#4A1414] p-4 rounded">
                  <p className="text-[#4A1414] font-medium text-balance">💡 {area.benefit}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
