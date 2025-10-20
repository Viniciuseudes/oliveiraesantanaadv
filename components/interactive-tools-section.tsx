// components/interactive-tools-section.tsx
"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileQuestion, Calculator, ArrowRight } from "lucide-react";
import InteractiveQuiz from "./interactive-quiz"; // Importa o componente do quiz
import TaxSimulator from "./tax-simulator"; // Importa o componente do simulador
import { useLanguage } from "@/contexts/language-context";

// Define os possíveis estados: 'none', 'quiz', 'simulator'
type ActiveTool = "none" | "quiz" | "simulator";

export default function InteractiveToolsSection() {
  const { t } = useLanguage();
  const [activeTool, setActiveTool] = useState<ActiveTool>("none");

  const renderContent = () => {
    switch (activeTool) {
      case "quiz":
        // Passamos uma função para voltar à seleção
        return <InteractiveQuiz />; // O quiz já tem botão de refazer/fechar implicitamente
      case "simulator":
        // Passamos uma função para voltar à seleção
        return <TaxSimulator />; // O simulador pode precisar de um botão "Voltar" se quisermos
      default:
        // Renderiza os CTAs
        return (
          <div className="grid md:grid-cols-2 gap-8">
            {/* CTA para o Quiz */}
            <Card className="shadow-lg border-none hover:shadow-xl transition-shadow flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#4A1414]">
                  <FileQuestion className="h-6 w-6" />
                  {t("tools.quiz.cta.title") || "Diagnóstico Fiscal Rápido"}
                </CardTitle>
                <CardDescription className="text-[#6B6B6B]">
                  {t("tools.quiz.cta.desc") ||
                    "Sua empresa paga impostos corretamente? Descubra seu nível de risco em minutos."}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex items-end">
                <Button
                  onClick={() => setActiveTool("quiz")}
                  className="w-full bg-[#4A1414] hover:bg-[#6B1414] text-white"
                >
                  {t("tools.quiz.cta.button") || "Iniciar Diagnóstico"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* CTA para o Simulador */}
            <Card className="shadow-lg border-none hover:shadow-xl transition-shadow flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#4A1414]">
                  <Calculator className="h-6 w-6" />
                  {t("tools.simulator.cta.title") || "Simulador de Economia"}
                </CardTitle>
                <CardDescription className="text-[#6B6B6B]">
                  {t("tools.simulator.cta.desc") ||
                    "Veja uma estimativa *ilustrativa* do quanto sua empresa poderia economizar em impostos."}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex items-end">
                <Button
                  onClick={() => setActiveTool("simulator")}
                  className="w-full bg-[#4A1414] hover:bg-[#6B1414] text-white"
                >
                  {t("tools.simulator.cta.button") || "Simular Agora"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        );
    }
  };

  // Botão Voltar (aparece quando uma ferramenta está ativa)
  const renderBackButton = () => (
    <Button
      variant="outline"
      onClick={() => setActiveTool("none")}
      className="mb-6 border-[#4A1414] text-[#4A1414] hover:bg-[#4A1414]/10"
    >
      &larr; {t("tools.backButton") || "Voltar para Ferramentas"}
    </Button>
  );

  return (
    // Mantém o estilo da seção consistente (pode ajustar o fundo se preferir)
    <section className="py-20 md:py-32 bg-gradient-to-br from-[#F5F5F0] to-[#E8E8E0]">
      <div className="container mx-auto px-4 max-w-4xl">
        {" "}
        {/* Aumentei um pouco o max-w */}
        {activeTool !== "none" && renderBackButton()}
        {renderContent()}
      </div>
    </section>
  );
}
