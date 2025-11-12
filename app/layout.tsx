import type React from "react";
import type { Metadata } from "next";
// --- ALTERADO DE Playfair_Display PARA Inter ---
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { LanguageProvider } from "@/contexts/language-context";
import { AccessibilityProvider } from "@/contexts/accessibility-context";
import "./globals.css";

// --- ALTERADO ---
const interSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Oliveira & Santana - Advogados Associados",
  description:
    "Estratégia jurídica para o crescimento do seu negócio. Especialistas em Direito Tributário e Empresarial.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        // --- ALTERADO ---
        className={`${interSans.variable} ${inter.variable} font-mono antialiased overflow-x-hidden`}
      >
        <AccessibilityProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </AccessibilityProvider>
        <Analytics />
      </body>
    </html>
  );
}
