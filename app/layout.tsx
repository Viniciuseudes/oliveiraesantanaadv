import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { LanguageProvider } from "@/contexts/language-context";
import { AccessibilityProvider } from "@/contexts/accessibility-context";
import "./globals.css";

// Configuração de Fontes Otimizada
const interSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap", // Melhora a performance de carregamento da fonte
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

// --- METADADOS OTIMIZADOS PARA SEO ---
export const metadata: Metadata = {
  // 1. Defina a URL base do site para corrigir imagens de compartilhamento (OG Images)
  metadataBase: new URL("https://www.oliveirasantanaadv.com.br"),

  // 2. Título Otimizado (Template)
  title: {
    default: "Oliveira & Santana | Direito Tributário e Empresarial",
    template: "%s | Oliveira & Santana Advogados",
  },

  // 3. Descrição Rica em Palavras-Chave
  description:
    "Escritório de advocacia empresarial especializado em Direito Tributário, Recuperação de Créditos e Defesa Corporativa. Atendimento em PE, RS e todo o Brasil.",

  // 4. Palavras-chave (Keywords)
  keywords: [
    "Direito Tributário",
    "Advogado Empresarial",
    "Recuperação de Crédito Tributário",
    "Defesa Corporativa",
    "Advogado em Recife",
    "Advogado em Garanhuns",
    "Advogado em Porto Alegre",
    "Oliveira e Santana",
  ],

  // 5. Autores e Criador
  authors: [{ name: "Oliveira & Santana Advogados" }],
  creator: "Oliveira & Santana Advogados",

  // 6. Configuração para Redes Sociais (Open Graph)
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.oliveirasantanaadv.com.br",
    title: "Oliveira & Santana | Excelência Jurídica Empresarial",
    description:
      "Estratégia jurídica para o crescimento do seu negócio. Especialistas em reduzir riscos e maximizar resultados.",
    siteName: "Oliveira & Santana Advogados Associados",
    images: [
      {
        url: "/justice.jpg", // Certifique-se de que esta imagem existe em /public
        width: 1200,
        height: 630,
        alt: "Oliveira & Santana Advogados Sede",
      },
    ],
  },

  // 7. Controle de Robôs (Indexação)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // 8. Ícones (Favicon)
  icons: {
    icon: "/favicon.ico", // Se tiver um ícone específico, ajuste aqui
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png", // Opcional: ícone para iPhone
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      {/* Adicionado 'scroll-smooth' para navegação suave nos links */}
      <body
        className={`${interSans.variable} ${inter.variable} font-sans antialiased overflow-x-hidden`}
      >
        <AccessibilityProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </AccessibilityProvider>
        <Analytics />
      </body>
    </html>
  );
}
