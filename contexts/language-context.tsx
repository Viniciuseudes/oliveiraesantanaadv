// contexts/language-context.tsx
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

    // About
    "about.title": "Quem Somos",
    "about.description":
      "O escritório Oliveira & Santana é referência em Direito Tributário e Empresarial, atuando lado a lado com empresas que buscam crescimento sustentável e segurança jurídica.",
    "about.mission": "Missão",
    "about.mission.text":
      "Oferecer soluções jurídicas estratégicas e personalizadas",
    "about.vision": "Visão",
    "about.vision.text": "Ser referência nacional em consultoria empresarial",
    "about.values": "Valores",
    "about.values.text": "Ética, excelência e compromisso com resultados",
    "about.team": "Nossa Equipe",
    "about.viewProfile": "Ver Perfil Completo",
    "about.chooseOffice": "Escolha um escritório para consulta:",
    // --- TEXTO ATUALIZADO ---
    "about.history":
      "Há 10 anos atuando com seriedade e excelência. O Oliveira Santana Advocacia construiu sua trajetória com compromisso, ética e resultados. Com atuação em todo o Brasil, seguimos dedicados a oferecer soluções jurídicas eficazes e personalizadas para cada cliente.",
    "about.differentiator":
      "Atuamos lado a lado com empresas que buscam crescimento sustentável e segurança jurídica.",

    // Practice Areas - REESTRUTURADO
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

    // Quiz
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

    // Simulator
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
  },
  en: {
    // Hero
    "hero.tagline": "Legal strategy for your business growth",
    "hero.subtitle":
      "Excellence in Tax and Corporate Law with personalized service and proven results",
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
    // --- UPDATED TEXT ---
    "about.history":
      "For 10 years, we have been operating with integrity and excellence. Oliveira Santana Advocacia has built its trajectory on commitment, ethics, and results. Operating throughout Brazil, we remain dedicated to offering effective and personalized legal solutions for each client.",
    "about.differentiator":
      "We work side by side with companies seeking sustainable growth and legal security.",

    // Practice Areas - RESTRUCTURED
    "areas.title": "Practice Areas",
    "areas.subtitle":
      "Specialized legal solutions to boost your business growth",
    "areas.tax": "Tax Law",
    "areas.tax.description":
      "Strategic management and review of taxes, seeking tax savings and legal compliance for companies nationwide.",
    "areas.corporate": "Corporate Law",
    "areas.corporate.description":
      "Complete advisory for companies in all business phases, focusing on legal security, planning, and sustainable growth.",
    "areas.labor": "Corporate Labor Law",
    "areas.labor.description":
      "Defense of company interests in labor demands, as well as preventive guidance to minimize risks and litigation.",
    "areas.preventive": "Preventive Corporate Legal Advisory",
    "areas.preventive.description":
      "Continuous and personalized support, identifying risks and proposing solutions before they become legal problems.",

    // Why Choose Us
    "why.title": "Why choose our firm",
    "why.subtitle":
      "Differentials that make a difference in your business success",
    "why.1.title": "Consultative and close service",
    "why.1.desc":
      "Direct relationship with partners and specialized team dedicated to your case",
    "why.2.title": "Multi-sector experience",
    "why.2.desc":
      "Work in various economic segments, from retail to technology industry",
    "why.3.title": "Technology and agility",
    "why.3.desc":
      "Optimized processes and modern tools for transparency and speed",
    "why.4.title": "Results focused",
    "why.4.desc":
      "Commitment to effective solutions, not just bureaucratic processes",

    // Success Cases
    "cases.title": "Real Results",
    "cases.subtitle":
      "Success cases that demonstrate our commitment to excellence",
    "cases.testimonials": "Testimonials",
    "cases.1.category": "Tax Planning",
    "cases.1.result":
      "Industrial company reduced tax burden by 30% after strategic review",
    "cases.2.category": "Credit Recovery",
    "cases.2.result":
      "Recovery of R$ 2.5 million in tax credits for retail group",
    "cases.3.category": "M&A and Governance",
    "cases.3.result":
      "Complex corporate structuring for merger of three technology companies",
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
    "contact.subtitle":
      "Schedule a consultation and discover how we can help your business",
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
    "team.caline.bio":
      "Specialist in tax litigation and corporate structuring. PhD candidate in Law at PUC-RS.",

    // Footer
    "footer.description":
      "Excellence in Tax and Corporate Law. Legal strategy for your business growth.",
    "footer.links": "Quick Links",
    "footer.home": "Home",
    "footer.about": "About",
    "footer.areas": "Practice Areas",
    "footer.contact": "Contact",
    "footer.social": "Social Media",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Use",
    "footer.rights": "All rights reserved",

    // Quiz
    "quiz.title": "Quick Diagnosis: Tax Risk",
    "quiz.q1.text": "What is your company's current tax regime?",
    "quiz.q1.opt.a": "Simples Nacional",
    "quiz.q1.opt.b": "Presumed Profit",
    "quiz.q1.opt.c": "Actual Profit",
    "quiz.q1.opt.d": "Not sure / MEI / Other",
    "quiz.q2.text":
      "How often does your company review tax planning with a specialist?",
    "quiz.q2.opt.a": "Annually",
    "quiz.q2.opt.b": "Every 2-3 years",
    "quiz.q2.opt.c": "Rarely or never",
    "quiz.q2.opt.d": "I don't know",
    "quiz.q3.text":
      "Does your company sell products with Tax Substitution (ICMS-ST) or Single-Phase PIS/COFINS?",
    "quiz.q3.opt.a": "Yes, and we have control over credits/refunds.",
    "quiz.q3.opt.b": "Yes, but I'm not sure about credits/refunds.",
    "quiz.q3.opt.c": "We don't sell these products.",
    "quiz.q3.opt.d": "I don't know.",
    "quiz.q4.text":
      "In the last 5 years, has your company conducted a review to recover overpaid taxes (tax credits)?",
    "quiz.q4.opt.a": "Yes, and we recovered amounts.",
    "quiz.q4.opt.b": "Yes, but we found nothing or the process was complex.",
    "quiz.q4.opt.c": "No, we never have.",
    "quiz.q4.opt.d": "I don't know if we overpaid.",
    "quiz.q5.text":
      "Do you believe your company's tax burden is high compared to competitors or the market?",
    "quiz.q5.opt.a": "No, it seems appropriate.",
    "quiz.q5.opt.b": "Yes, I feel we pay too much.",
    "quiz.q5.opt.c": "I have doubts, I can't compare.",
    "quiz.previous": "Previous",
    "quiz.next": "Next",
    "quiz.finish": "See Result",
    "quiz.result.title": "Diagnosis Result",
    "quiz.result.low.title": "Low Risk",
    "quiz.result.low.desc":
      "Congratulations! It seems your tax management is on the right track, but a periodic review can always identify new opportunities.",
    "quiz.result.medium.title": "Medium Risk",
    "quiz.result.medium.desc":
      "Attention! There are points indicating possible savings opportunities or tax risks in your company. A detailed analysis could be very beneficial.",
    "quiz.result.high.title": "High Risk",
    "quiz.result.high.desc":
      "Alert! There's a high chance your company is paying more taxes than necessary or is exposed to risks. We strongly recommend an in-depth tax analysis.",
    "quiz.cta": "Schedule a Free Tax Analysis",
    "quiz.restart": "Retake Diagnosis",

    // Simulator
    "simulator.title": "Tax Savings Simulator (Illustrative)",
    "simulator.description":
      "Get an idea of the potential savings for your company.",
    "simulator.disclaimer":
      "This simulator offers only an illustrative estimate. Actual savings depend on a detailed analysis. Consult our specialists.",
    "simulator.label.revenue": "Annual Revenue (BRL)",
    "simulator.label.regime": "Current Tax Regime",
    "simulator.placeholder.regime": "Select...",
    "simulator.regime.simples": "Simples Nacional",
    "simulator.regime.presumido": "Presumed Profit",
    "simulator.regime.real": "Actual Profit",
    "simulator.label.sector": "Main Sector (Optional)",
    "simulator.placeholder.sector": "Select...",
    "simulator.sector.servicos": "Services",
    "simulator.sector.comercio": "Commerce",
    "simulator.sector.industria": "Industry",
    "simulator.sector.outro": "Other",
    "simulator.button.simulate": "Simulate Potential",
    "simulator.error.invalidInput":
      "Please enter the annual revenue and select the tax regime.",
    "simulator.result.text":
      "Based on your information, your company *could* have a potential tax saving of",
    "simulator.result.upTo": "up to",
    "simulator.result.perYear": "per year with restructuring.",
    "simulator.result.noSaving":
      "Based on the information, optimizations may exist, but a detailed analysis is needed to identify potential savings.",
    "simulator.cta": "Schedule a Free Analysis",
    "tools.quiz.cta.title": "Quick Tax Diagnosis",
    "tools.quiz.cta.desc":
      "Is your company paying taxes correctly? Find out your risk level in minutes.",
    "tools.quiz.cta.button": "Start Diagnosis",
    "tools.simulator.cta.title": "Savings Simulator",
    "tools.simulator.cta.desc":
      "See an *illustrative* estimate of how much your company could save on taxes.",
    "tools.simulator.cta.button": "Simulate Now",
    "tools.backButton": "Back to Tools",
    "hero.counter.clients": "Satisfied Clients",
    "hero.counter.cases": "Cases Completed",
    "whatsapp.modal.title": "Choose the office",
    "whatsapp.modal.desc": "Select the location to direct your contact:",
    "whatsapp.modal.poa": "Porto Alegre - RS",
    "whatsapp.modal.gar": "Garanhuns - PE",
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
    // Tenta obter a tradução para o idioma atual
    const langTranslations = translations[language];
    // Verifica se a chave existe no objeto de tradução do idioma atual
    if (
      langTranslations &&
      typeof langTranslations === "object" &&
      key in langTranslations
    ) {
      // @ts-ignore Acessando a chave dinamicamente, o TS pode reclamar mas está correto aqui
      return langTranslations[key] || key; // Retorna a tradução ou a própria chave se a tradução for vazia
    }
    // Fallback: Tenta obter a tradução em Português se não encontrar no idioma atual
    const fallbackTranslations = translations.pt;
    if (
      fallbackTranslations &&
      typeof fallbackTranslations === "object" &&
      key in fallbackTranslations
    ) {
      // @ts-ignore
      return fallbackTranslations[key] || key;
    }
    // Se não encontrar em lugar nenhum, retorna a chave
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
