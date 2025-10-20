"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "pt" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  pt: {
    // Hero
    "hero.tagline": "Estratégia jurídica para o crescimento do seu negócio",
    "hero.subtitle":
      "Excelência em Direito Tributário e Empresarial com atendimento personalizado e resultados comprovados",
    "hero.cta": "Conheça nossas áreas de atuação",

    // About
    "about.title": "Quem Somos",
    "about.description":
      "O escritório Oliveira & Santana é referência em Direito Tributário e Empresarial, atuando lado a lado com empresas que buscam crescimento sustentável e segurança jurídica.",
    "about.mission": "Missão",
    "about.mission.text": "Oferecer soluções jurídicas estratégicas e personalizadas",
    "about.vision": "Visão",
    "about.vision.text": "Ser referência nacional em consultoria empresarial",
    "about.values": "Valores",
    "about.values.text": "Ética, excelência e compromisso com resultados",
    "about.team": "Nossa Equipe",
    "about.viewProfile": "Ver Perfil Completo",
    "about.chooseOffice": "Escolha um escritório para consulta:",
    "about.history":
      "O escritório Oliveira & Santana nasceu da união de profissionais com vasta experiência em Direito Tributário e Empresarial, comprometidos em oferecer soluções jurídicas estratégicas e personalizadas.",
    "about.differentiator": "Atuamos lado a lado com empresas que buscam crescimento sustentável e segurança jurídica.",

    // Practice Areas
    "areas.title": "Áreas de Atuação",
    "areas.subtitle": "Soluções jurídicas especializadas para impulsionar o crescimento do seu negócio",
    "areas.tax": "Direito Tributário",
    "areas.tax.1": "Planejamento tributário estratégico",
    "areas.tax.2": "Recuperação de créditos tributários",
    "areas.tax.3": "Defesa em autos de infração",
    "areas.tax.4": "Consultoria preventiva",
    "areas.tax.benefit": "Reduza custos e riscos com uma estrutura tributária eficiente",
    "areas.corporate": "Direito Empresarial",
    "areas.corporate.1": "Constituição e estruturação de empresas",
    "areas.corporate.2": "Contratos e governança corporativa",
    "areas.corporate.3": "Fusões e aquisições (M&A)",
    "areas.corporate.4": "Contencioso empresarial",
    "areas.corporate.benefit": "Proteja seu negócio com estruturas jurídicas sólidas e estratégicas",

    // Why Choose Us
    "why.title": "Por que escolher nosso escritório",
    "why.subtitle": "Diferenciais que fazem a diferença no sucesso do seu negócio",
    "why.1.title": "Atendimento consultivo e próximo",
    "why.1.desc": "Relacionamento direto com os sócios e equipe especializada dedicada ao seu caso",
    "why.2.title": "Experiência multissetorial",
    "why.2.desc": "Atuação em diversos segmentos da economia, do varejo à indústria de tecnologia",
    "why.3.title": "Tecnologia e agilidade",
    "why.3.desc": "Processos otimizados e ferramentas modernas para transparência e rapidez",
    "why.4.title": "Foco em resultados",
    "why.4.desc": "Compromisso com soluções efetivas, não apenas processos burocráticos",

    // Success Cases
    "cases.title": "Resultados Reais",
    "cases.subtitle": "Casos de sucesso que demonstram nosso compromisso com a excelência",
    "cases.testimonials": "Depoimentos",
    "cases.1.category": "Planejamento Tributário",
    "cases.1.result": "Empresa do setor industrial reduziu 30% da carga tributária após revisão estratégica",
    "cases.2.category": "Recuperação de Créditos",
    "cases.2.result": "Recuperação de R$ 2,5 milhões em créditos tributários para grupo varejista",
    "cases.3.category": "M&A e Governança",
    "cases.3.result": "Estruturação societária complexa para fusão de três empresas de tecnologia",
    "cases.testimonial.1.text":
      "A equipe do Oliveira & Santana transformou nossa estrutura tributária. O resultado foi além das expectativas, com economia real e segurança jurídica.",
    "cases.testimonial.1.author": "CEO, Indústria Metalúrgica",
    "cases.testimonial.1.company": "Porto Alegre - RS",
    "cases.testimonial.2.text":
      "Profissionalismo e dedicação excepcionais. Nos ajudaram em um momento crítico com soluções práticas e eficientes.",
    "cases.testimonial.2.author": "Diretor Financeiro",
    "cases.testimonial.2.company": "Grupo Varejista - PE",

    // Contact
    "contact.title": "Entre em Contato",
    "contact.subtitle": "Agende uma consulta e descubra como podemos ajudar seu negócio",
    "contact.name": "Nome completo",
    "contact.email": "E-mail",
    "contact.company": "Empresa",
    "contact.message": "Mensagem",
    "contact.send": "Enviar Mensagem",
    "contact.success": "Mensagem enviada com sucesso! Entraremos em contato em breve.",

    // Team
    "team.raphael.bio":
      "Especialista em planejamento tributário estratégico com mais de 15 anos de experiência. Mestre em Direito Tributário pela UFRGS.",
    "team.joan.bio":
      "Expert em fusões e aquisições e governança corporativa. Pós-graduado em Direito Empresarial pela FGV.",
    "team.caline.bio":
      "Especialista em contencioso tributário e estruturação empresarial. Doutoranda em Direito pela PUC-RS.",

    // Footer
    "footer.description":
      "Excelência em Direito Tributário e Empresarial. Estratégia jurídica para o crescimento do seu negócio.",
    "footer.links": "Links Rápidos",
    "footer.home": "Início",
    "footer.about": "Sobre",
    "footer.areas": "Áreas de Atuação",
    "footer.contact": "Contato",
    "footer.social": "Redes Sociais",
    "footer.privacy": "Política de Privacidade",
    "footer.terms": "Termos de Uso",
    "footer.rights": "Todos os direitos reservados",
  },
  en: {
    // Hero
    "hero.tagline": "Legal strategy for your business growth",
    "hero.subtitle": "Excellence in Tax and Corporate Law with personalized service and proven results",
    "hero.cta": "Explore our practice areas",

    // About
    "about.title": "About Us",
    "about.description":
      "Oliveira & Santana is a leading law firm in Tax and Corporate Law, working alongside companies seeking sustainable growth and legal security.",
    "about.mission": "Mission",
    "about.mission.text": "Provide strategic and personalized legal solutions",
    "about.vision": "Vision",
    "about.vision.text": "Be a national reference in corporate consulting",
    "about.values": "Values",
    "about.values.text": "Ethics, excellence and commitment to results",
    "about.team": "Our Team",
    "about.viewProfile": "View Full Profile",
    "about.chooseOffice": "Choose an office for consultation:",
    "about.history":
      "Oliveira & Santana was born from the union of professionals with extensive experience in Tax and Corporate Law, committed to offering strategic and personalized legal solutions.",
    "about.differentiator": "We work side by side with companies seeking sustainable growth and legal security.",

    // Practice Areas
    "areas.title": "Practice Areas",
    "areas.subtitle": "Specialized legal solutions to boost your business growth",
    "areas.tax": "Tax Law",
    "areas.tax.1": "Strategic tax planning",
    "areas.tax.2": "Tax credit recovery",
    "areas.tax.3": "Defense in tax assessments",
    "areas.tax.4": "Preventive consulting",
    "areas.tax.benefit": "Reduce costs and risks with an efficient tax structure",
    "areas.corporate": "Corporate Law",
    "areas.corporate.1": "Company formation and structuring",
    "areas.corporate.2": "Contracts and corporate governance",
    "areas.corporate.3": "Mergers and acquisitions (M&A)",
    "areas.corporate.4": "Corporate litigation",
    "areas.corporate.benefit": "Protect your business with solid and strategic legal structures",

    // Why Choose Us
    "why.title": "Why choose our firm",
    "why.subtitle": "Differentials that make a difference in your business success",
    "why.1.title": "Consultative and close service",
    "why.1.desc": "Direct relationship with partners and specialized team dedicated to your case",
    "why.2.title": "Multi-sector experience",
    "why.2.desc": "Work in various economic segments, from retail to technology industry",
    "why.3.title": "Technology and agility",
    "why.3.desc": "Optimized processes and modern tools for transparency and speed",
    "why.4.title": "Results focused",
    "why.4.desc": "Commitment to effective solutions, not just bureaucratic processes",

    // Success Cases
    "cases.title": "Real Results",
    "cases.subtitle": "Success cases that demonstrate our commitment to excellence",
    "cases.testimonials": "Testimonials",
    "cases.1.category": "Tax Planning",
    "cases.1.result": "Industrial company reduced tax burden by 30% after strategic review",
    "cases.2.category": "Credit Recovery",
    "cases.2.result": "Recovery of R$ 2.5 million in tax credits for retail group",
    "cases.3.category": "M&A and Governance",
    "cases.3.result": "Complex corporate structuring for merger of three technology companies",
    "cases.testimonial.1.text":
      "The Oliveira & Santana team transformed our tax structure. The result exceeded expectations, with real savings and legal security.",
    "cases.testimonial.1.author": "CEO, Metallurgical Industry",
    "cases.testimonial.1.company": "Porto Alegre - RS",
    "cases.testimonial.2.text":
      "Exceptional professionalism and dedication. They helped us in a critical moment with practical and efficient solutions.",
    "cases.testimonial.2.author": "Financial Director",
    "cases.testimonial.2.company": "Retail Group - PE",

    // Contact
    "contact.title": "Get in Touch",
    "contact.subtitle": "Schedule a consultation and discover how we can help your business",
    "contact.name": "Full name",
    "contact.email": "Email",
    "contact.company": "Company",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.success": "Message sent successfully! We will contact you soon.",

    // Team
    "team.raphael.bio":
      "Specialist in strategic tax planning with over 15 years of experience. Master's in Tax Law from UFRGS.",
    "team.joan.bio":
      "Expert in mergers and acquisitions and corporate governance. Postgraduate in Corporate Law from FGV.",
    "team.caline.bio": "Specialist in tax litigation and corporate structuring. PhD candidate in Law at PUC-RS.",

    // Footer
    "footer.description": "Excellence in Tax and Corporate Law. Legal strategy for your business growth.",
    "footer.links": "Quick Links",
    "footer.home": "Home",
    "footer.about": "About",
    "footer.areas": "Practice Areas",
    "footer.contact": "Contact",
    "footer.social": "Social Media",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Use",
    "footer.rights": "All rights reserved",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt")

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language
    if (saved) setLanguage(saved)
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations.pt] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error("useLanguage must be used within LanguageProvider")
  return context
}
