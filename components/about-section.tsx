"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart } from "lucide-react"
import TeamMember from "./team-member"
import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/contexts/language-context"

const AboutSection = () => {
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
  ]

  const team = [
    {
      name: "Raphael Oliveira",
      specialty: t("areas.tax"),
      oab: "OAB/RS 45.678",
      image: "/team-photo.png",
      bio: t("team.raphael.bio"),
    },
    {
      name: "Joan Santana",
      specialty: t("areas.corporate"),
      oab: "OAB/PE 32.456",
      image: "/team-photo.png",
      bio: t("team.joan.bio"),
    },
    {
      name: "Caline Rodrigues",
      specialty: `${t("areas.tax")} e ${t("areas.corporate")}`,
      oab: "OAB/RS 51.234",
      image: "/team-photo.png",
      bio: t("team.caline.bio"),
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-white" id="sobre">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-[#4A1414] mb-6 text-balance">
            {t("about.title")}
          </h2>
          <p className="text-lg text-[#6B6B6B] leading-relaxed text-balance">{t("about.history")}</p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <Card
              key={value.title}
              className={`border-none shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#4A1414] rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-sans font-bold text-[#4A1414] mb-4">{value.title}</h3>
                <p className="text-[#6B6B6B] leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Differentiator */}
        <div
          className={`max-w-4xl mx-auto text-center mb-20 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="bg-gradient-to-r from-[#4A1414] to-[#6B1414] text-white p-8 md:p-12 rounded-2xl shadow-2xl">
            <p className="text-xl md:text-2xl font-sans font-semibold text-balance">"{t("about.differentiator")}"</p>
          </div>
        </div>

        {/* Team */}
        <div
          className={`transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h3 className="text-3xl md:text-4xl font-sans font-bold text-[#4A1414] text-center mb-12">
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
  )
}

export default AboutSection
