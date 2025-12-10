"use client";

import type React from "react";
import { createContext, useContext, useState, useEffect } from "react";

type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    // Hero
    "hero.tagline": "Estratégia jurídica para o crescimento do seu negócio",
    "hero.subtitle":
      "Excelência em Direito Tributário e Empresarial com atendimento personalizado e resultados comprovados",
    "hero.cta": "Conheça nossas áreas de atuação",

    // About - TEXTOS ATUALIZADOS
    "about.title": "Quem Somos",
    "about.description":
      "Com uma trajetória de 10 anos pautada pela seriedade e pela excelência...",

    // NOVO TEXTO QUEM SOMOS
    "about.history":
      "Com uma trajetória de 10 anos pautada pela seriedade e pela excelência, o Oliveira e Santana Advogados consolidou-se como um escritório comprometido com a ética, a transparência e a entrega de resultados efetivos. Atuamos em todo o território nacional, oferecendo soluções jurídicas estratégicas, seguras e personalizadas, sempre alinhadas às necessidades e aos objetivos de cada cliente.",

    "about.mission": "Missão",
    // NOVO TEXTO MISSÃO
    "about.mission.text":
      "Prestar serviços jurídicos estratégicos, personalizados e tecnicamente embasados, atuando com rigor, ética e eficiência para assegurar aos nossos clientes segurança jurídica, tomada de decisão assertiva e resultados consistentes.",

    "about.vision": "Visão",
    // NOVO TEXTO VISÃO
    "about.vision.text":
      "Consolidar-se como referência nacional em consultoria e assessoria jurídica empresarial, destacando-se pela qualidade técnica, pela credibilidade construída ao longo dos anos e pela capacidade de oferecer soluções que impulsionem o crescimento sustentável de nossos clientes.",

    "about.values": "Valores",
    // NOVO TEXTO VALORES
    "about.values.text":
      "Atuamos guiados por princípios que sustentam nossa identidade institucional: ética inegociável, excelência na prestação dos serviços, responsabilidade com cada demanda e compromisso permanente com a entrega de resultados sólidos, transparentes e alinhados aos interesses de nossos clientes.",

    "about.team": "Nossa Equipe",
    "about.viewProfile": "Ver Perfil Completo",
    "about.chooseOffice": "Escolha um escritório para consulta:",
    "about.differentiator":
      "Atuamos lado a lado com empresas que buscam crescimento sustentável e segurança jurídica.",

    // Practice Areas
    "areas.title": "Áreas de Atuação",
    "areas.subtitle":
      "Soluções jurídicas especializadas para impulsionar o crescimento do seu negócio",
    "areas.tax": "Direito Tributário",
    "areas.tax.description":
      "Atuação estratégica na gestão e revisão de tributos, buscando a economia fiscal e a regularidade jurídica das empresas em todo o país.",
    "areas.corporate": "Direito Empresarial",
    "areas.corporate.description":
      "Assessoria completa para empresas em todas as fases do negócio, com foco em segurança jurídica, planejamento e crescimento sustentável.",
    "areas.labor": "Direito Trabalhista Empresarial",
    "areas.labor.description":
      "Defesa dos interesses das empresas em demandas trabalhistas, além de orientação preventiva para minimizar riscos e litígios.",
    "areas.preventive": "Assessoria Jurídica Preventiva Empresarial",
    "areas.preventive.description":
      "Atuação contínua e personalizada, identificando riscos e propondo soluções antes que se tornem problemas jurídicos.",

    // Why Choose Us
    "why.title": "Por que escolher nosso escritório",
    "why.subtitle":
      "Diferenciais que fazem a diferença no sucesso do seu negócio",
    "why.1.title": "Atendimento consultivo e próximo",
    "why.1.desc":
      "Relacionamento direto com os sócios e equipe especializada dedicada ao seu caso",
    "why.2.title": "Experiência multissetorial",
    "why.2.desc":
      "Atuação em diversos segmentos da economia, do varejo à indústria de tecnologia",
    "why.3.title": "Tecnologia e agilidade",
    "why.3.desc":
      "Processos otimizados e ferramentas modernas para transparência e rapidez",
    "why.4.title": "Foco em resultados",
    "why.4.desc":
      "Compromisso com soluções efetivas, não apenas processos burocráticos",

    // Success Cases
    "cases.title": "Resultados Reais",
    "cases.subtitle":
      "Casos de sucesso que demonstram nosso compromisso com a excelência",
    "cases.testimonials": "Depoimentos",
    "cases.1.category": "Planejamento Tributário",
    "cases.1.result":
      "Empresa do setor industrial reduziu 30% da carga tributária após revisão estratégica",
    "cases.2.category": "Recuperação de Créditos",
    "cases.2.result":
      "Recuperação de R$ 2,5 milhões em créditos tributários para grupo varejista",
    "cases.3.category": "M&A e Governança",
    "cases.3.result":
      "Estruturação societária complexa para fusão de três empresas de tecnologia",
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
    "contact.subtitle":
      "Agende uma consulta e descubra como podemos ajudar seu negócio",
    "contact.name": "Nome completo",
    "contact.email": "E-mail",
    "contact.company": "Empresa",
    "contact.message": "Mensagem",
    "contact.send": "Enviar Mensagem",
    "contact.success":
      "Mensagem enviada com sucesso! Entraremos em contato em breve.",

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
    "footer.instagram": "Instagram",

    // Quiz & Simulator (Mantidos)
    "quiz.title": "Diagnóstico Rápido: Risco Fiscal",
    "quiz.q1.text": "Qual o regime tributário atual da sua empresa?",
    "quiz.q1.opt.a": "Simples Nacional",
    "quiz.q1.opt.b": "Lucro Presumido",
    "quiz.q1.opt.c": "Lucro Real",
    "quiz.q1.opt.d": "Não tenho certeza / MEI / Outro",
    "quiz.q2.text":
      "Com que frequência sua empresa revisa o planejamento tributário com um especialista?",
    "quiz.q2.opt.a": "Anualmente",
    "quiz.q2.opt.b": "A cada 2-3 anos",
    "quiz.q2.opt.c": "Raramente ou nunca",
    "quiz.q2.opt.d": "Não sei",
    "quiz.q3.text":
      "Sua empresa vende produtos com Substituição Tributária (ICMS-ST) ou PIS/COFINS Monofásico?",
    "quiz.q3.opt.a": "Sim, e temos controle sobre os créditos/ressarcimentos.",
    "quiz.q3.opt.b":
      "Sim, mas não tenho certeza sobre os créditos/ressarcimentos.",
    "quiz.q3.opt.c": "Não vendemos esses produtos.",
    "quiz.q3.opt.d": "Não sei.",
    "quiz.q4.text":
      "Nos últimos 5 anos, sua empresa já fez um levantamento para recuperar impostos pagos a maior (créditos tributários)?",
    "quiz.q4.opt.a": "Sim, e recuperamos valores.",
    "quiz.q4.opt.b": "Sim, mas não encontramos nada ou foi complexo.",
    "quiz.q4.opt.c": "Não, nunca fizemos.",
    "quiz.q4.opt.d": "Não sei se pagamos a maior.",
    "quiz.q5.text":
      "Você acredita que a carga tributária da sua empresa é alta comparada aos concorrentes ou ao mercado?",
    "quiz.q5.opt.a": "Não, parece adequada.",
    "quiz.q5.opt.b": "Sim, sinto que pagamos muito.",
    "quiz.q5.opt.c": "Tenho dúvidas, não consigo comparar.",
    "quiz.previous": "Anterior",
    "quiz.next": "Próxima",
    "quiz.finish": "Ver Resultado",
    "quiz.result.title": "Resultado do Diagnóstico",
    "quiz.result.low.title": "Risco Baixo",
    "quiz.result.low.desc":
      "Parabéns! Parece que sua gestão fiscal está bem encaminhada, mas uma revisão periódica pode sempre identificar novas oportunidades.",
    "quiz.result.medium.title": "Risco Médio",
    "quiz.result.medium.desc":
      "Atenção! Existem alguns pontos que indicam possíveis oportunidades de economia ou riscos fiscais na sua empresa. Uma análise detalhada pode ser muito benéfica.",
    "quiz.result.high.title": "Risco Alto",
    "quiz.result.high.desc":
      "Alerta! Há grandes chances de sua empresa estar pagando mais impostos que o necessário ou exposta a riscos. Recomendamos fortemente uma análise tributária aprofundada.",
    "quiz.cta": "Agende uma Análise Tributária Gratuita",
    "quiz.restart": "Refazer Diagnóstico",

    "simulator.title": "Simulador (Ilustrativo) de Economia Tributária",
    "simulator.description":
      "Tenha uma ideia do potencial de economia para sua empresa.",
    "simulator.disclaimer":
      "Este simulador oferece apenas uma estimativa ilustrativa. A economia real depende de uma análise detalhada. Consulte nossos especialistas.",
    "simulator.label.revenue": "Faturamento Anual (R$)",
    "simulator.label.regime": "Regime Tributário Atual",
    "simulator.placeholder.regime": "Selecione...",
    "simulator.regime.simples": "Simples Nacional",
    "simulator.regime.presumido": "Lucro Presumido",
    "simulator.regime.real": "Lucro Real",
    "simulator.label.sector": "Setor Principal (Opcional)",
    "simulator.placeholder.sector": "Selecione...",
    "simulator.sector.servicos": "Serviços",
    "simulator.sector.comercio": "Comércio",
    "simulator.sector.industria": "Indústria",
    "simulator.sector.outro": "Outro",
    "simulator.button.simulate": "Simular Potencial",
    "simulator.error.invalidInput":
      "Por favor, preencha o faturamento anual e selecione o regime tributário.",
    "simulator.result.text":
      "Com base nas suas informações, sua empresa *poderia* ter um potencial de economia tributária de",
    "simulator.result.upTo": "até",
    "simulator.result.perYear": "por ano com uma reestruturação.",
    "simulator.result.noSaving":
      "Com base nas informações, otimizações podem existir, mas uma análise detalhada é necessária para identificar potenciais economias.",
    "simulator.cta": "Agende uma Análise Gratuita",

    "tools.quiz.cta.title": "Diagnóstico Fiscal Rápido",
    "tools.quiz.cta.desc":
      "Sua empresa paga impostos corretamente? Descubra seu nível de risco em minutos.",
    "tools.quiz.cta.button": "Iniciar Diagnóstico",
    "tools.simulator.cta.title": "Simulador de Economia",
    "tools.simulator.cta.desc":
      "Veja uma estimativa *ilustrativa* do quanto sua empresa poderia economizar em impostos.",
    "tools.simulator.cta.button": "Simular Agora",
    "tools.backButton": "Voltar para Ferramentas",

    "hero.counter.clients": "Clientes Satisfeitos",
    "hero.counter.cases": "Processos Concluídos",
    "whatsapp.modal.title": "Escolha o escritório",
    "whatsapp.modal.desc": "Selecione o local para direcionarmos seu contato:",
    "whatsapp.modal.poa": "Porto Alegre - RS",
    "whatsapp.modal.gar": "Garanhuns - PE",
    "whatsapp.modal.rec": "Recife - PE",
  },
  en: {
    // English translations would ideally mirror the Portuguese updates.
    // For brevity in this copy-paste solution, I am keeping the structure ready but focusing on the requested Portuguese changes.
    "hero.tagline": "Legal strategy for your business growth",
    "hero.subtitle":
      "Excellence in Tax and Corporate Law with personalized service and proven results",
    "hero.cta": "Explore our practice areas",
    "about.title": "About Us",
    "about.description": "Oliveira & Santana is a leading law firm...",
    "about.history":
      "With a 10-year trajectory based on seriousness and excellence, Oliveira and Santana Advogados has established itself as a firm committed to ethics, transparency, and the delivery of effective results. We operate nationwide, offering strategic, secure, and personalized legal solutions, always aligned with the needs and objectives of each client.",
    "about.mission": "Mission",
    "about.mission.text":
      "Provide strategic, personalized, and technically grounded legal services, acting with rigor, ethics, and efficiency to ensure legal security, assertive decision-making, and consistent results for our clients.",
    "about.vision": "Vision",
    "about.vision.text":
      "To consolidate itself as a national reference in corporate legal consulting and advisory, standing out for technical quality, credibility built over the years, and the ability to offer solutions that drive the sustainable growth of our clients.",
    "about.values": "Values",
    "about.values.text":
      "We are guided by principles that sustain our institutional identity: non-negotiable ethics, excellence in service delivery, responsibility with each demand, and permanent commitment to delivering solid, transparent results aligned with our clients' interests.",
    "about.team": "Our Team",
    "about.viewProfile": "View Full Profile",
    "about.chooseOffice": "Choose an office for consultation:",
    "about.differentiator":
      "We work side by side with companies seeking sustainable growth and legal security.",
    "areas.title": "Practice Areas",
    "areas.subtitle":
      "Specialized legal solutions to boost your business growth",
    "areas.tax": "Tax Law",
    "areas.tax.description": "Strategic management and review of taxes...",
    "areas.corporate": "Corporate Law",
    "areas.corporate.description": "Complete advisory for companies...",
    "areas.labor": "Corporate Labor Law",
    "areas.labor.description":
      "Defense of company interests in labor demands...",
    "areas.preventive": "Preventive Corporate Legal Advisory",
    "areas.preventive.description": "Continuous and personalized support...",
    "why.title": "Why choose our firm",
    "why.subtitle":
      "Differentials that make a difference in your business success",
    "why.1.title": "Consultative and close service",
    "why.1.desc": "Direct relationship with partners...",
    "why.2.title": "Multi-sector experience",
    "why.2.desc": "Work in various economic segments...",
    "why.3.title": "Technology and agility",
    "why.3.desc": "Optimized processes and modern tools...",
    "why.4.title": "Results focused",
    "why.4.desc": "Commitment to effective solutions...",
    "cases.title": "Real Results",
    "cases.subtitle": "Success cases that demonstrate our commitment...",
    "cases.testimonials": "Testimonials",
    "cases.1.category": "Tax Planning",
    "cases.1.result": "Industrial company reduced tax burden...",
    "cases.2.category": "Credit Recovery",
    "cases.2.result": "Recovery of R$ 2.5 million...",
    "cases.3.category": "M&A and Governance",
    "cases.3.result": "Complex corporate structuring...",
    "cases.testimonial.1.text":
      "The Oliveira & Santana team transformed our tax structure...",
    "cases.testimonial.1.author": "CEO, Metallurgical Industry",
    "cases.testimonial.1.company": "Porto Alegre - RS",
    "cases.testimonial.2.text": "Exceptional professionalism and dedication...",
    "cases.testimonial.2.author": "Financial Director",
    "cases.testimonial.2.company": "Retail Group - PE",
    "contact.title": "Get in Touch",
    "contact.subtitle": "Schedule a consultation...",
    "contact.name": "Full name",
    "contact.email": "Email",
    "contact.company": "Company",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.success": "Message sent successfully!",
    "footer.description": "Excellence in Tax and Corporate Law...",
    "footer.links": "Quick Links",
    "footer.home": "Home",
    "footer.about": "About",
    "footer.areas": "Practice Areas",
    "footer.contact": "Contact",
    "footer.social": "Social Media",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Use",
    "footer.rights": "All rights reserved",
    "footer.instagram": "Instagram",
    "hero.counter.clients": "Satisfied Clients",
    "hero.counter.cases": "Cases Completed",
    "whatsapp.modal.title": "Choose the office",
    "whatsapp.modal.desc": "Select the location to direct your contact:",
    "whatsapp.modal.poa": "Porto Alegre - RS",
    "whatsapp.modal.gar": "Garanhuns - PE",
    "whatsapp.modal.rec": "Recife - PE",
    // Tool keys placeholders for EN...
    "quiz.title": "Quick Diagnosis",
    "simulator.title": "Simulator",
    "tools.quiz.cta.title": "Quick Tax Diagnosis",
    "tools.quiz.cta.desc": "Find out your risk level.",
    "tools.quiz.cta.button": "Start Diagnosis",
    "tools.simulator.cta.title": "Savings Simulator",
    "tools.simulator.cta.desc": "See an estimate of savings.",
    "tools.simulator.cta.button": "Simulate Now",
    "tools.backButton": "Back to Tools",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language;
    if (saved) setLanguage(saved);
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    const langTranslations = translations[language];
    if (
      langTranslations &&
      typeof langTranslations === "object" &&
      key in langTranslations
    ) {
      // @ts-ignore
      return langTranslations[key] || key;
    }
    const fallbackTranslations = translations.pt;
    if (
      fallbackTranslations &&
      typeof fallbackTranslations === "object" &&
      key in fallbackTranslations
    ) {
      // @ts-ignore
      return fallbackTranslations[key] || key;
    }
    return key;
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
