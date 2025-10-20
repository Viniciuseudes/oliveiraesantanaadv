"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/contexts/language-context"

export default function SuccessCasesSection() {
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

  const cases = [
    {
      result: t("cases.1.result"),
      category: t("cases.1.category"),
    },
    {
      result: t("cases.2.result"),
      category: t("cases.2.category"),
    },
    {
      result: t("cases.3.result"),
      category: t("cases.3.category"),
    },
  ]

  const testimonials = [
    {
      text: t("cases.testimonial.1.text"),
      author: t("cases.testimonial.1.author"),
      company: t("cases.testimonial.1.company"),
    },
    {
      text: t("cases.testimonial.2.text"),
      author: t("cases.testimonial.2.author"),
      company: t("cases.testimonial.2.company"),
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-gradient-to-br from-[#4A1414] to-[#6B1414] text-white">
      <div className="container mx-auto px-4">
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl font-sans font-bold mb-6 text-balance">{t("cases.title")}</h2>
          <p className="text-lg text-white/90 leading-relaxed text-balance">{t("cases.subtitle")}</p>
        </div>

        {/* Success Cases */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-6xl mx-auto">
          {cases.map((item, index) => (
            <Card
              key={index}
              className={`bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="text-sm font-medium text-white/70 mb-3">{item.category}</div>
                <p className="text-white font-medium leading-relaxed text-balance">{item.result}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div
          className={`max-w-5xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h3 className="text-3xl font-sans font-bold text-center mb-12">{t("cases.testimonials")}</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-500"
              >
                <CardContent className="p-8">
                  <Quote className="h-10 w-10 text-white/50 mb-4" />
                  <p className="text-white/90 leading-relaxed mb-6 italic text-balance">"{testimonial.text}"</p>
                  <div>
                    <p className="text-white font-semibold">{testimonial.author}</p>
                    <p className="text-white/70 text-sm">{testimonial.company}</p>
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
