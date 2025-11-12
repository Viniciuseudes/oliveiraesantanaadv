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
import InteractiveQuiz from "./interactive-quiz";
import TaxSimulator from "./tax-simulator";
import { useLanguage } from "@/contexts/language-context";

type ActiveTool = "none" | "quiz" | "simulator";

export default function InteractiveToolsSection() {
  const { t } = useLanguage();
  const [activeTool, setActiveTool] = useState<ActiveTool>("none");

  const renderContent = () => {
    switch (activeTool) {
      case "quiz":
        return <InteractiveQuiz />;
      case "simulator":
        return <TaxSimulator />;
      default:
        return (
          <div className="grid md:grid-cols-2 gap-8">
            {/* CTA para o Quiz */}
            {/* --- ALTERADO: Cores --- */}
            <Card className="shadow-lg border-border hover:shadow-xl transition-shadow flex flex-col bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <FileQuestion className="h-6 w-6" />
                  {t("tools.quiz.cta.title") || "Diagnóstico Fiscal Rápido"}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {t("tools.quiz.cta.desc") ||
                    "Sua empresa paga impostos corretamente? Descubra seu nível de risco em minutos."}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex items-end">
                <Button
                  onClick={() => setActiveTool("quiz")}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  {t("tools.quiz.cta.button") || "Iniciar Diagnóstico"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* CTA para o Simulador */}
            {/* --- ALTERADO: Cores --- */}
            <Card className="shadow-lg border-border hover:shadow-xl transition-shadow flex flex-col bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Calculator className="h-6 w-6" />
                  {t("tools.simulator.cta.title") || "Simulador de Economia"}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {t("tools.simulator.cta.desc") ||
                    "Veja uma estimativa *ilustrativa* do quanto sua empresa poderia economizar em impostos."}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex items-end">
                <Button
                  onClick={() => setActiveTool("simulator")}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
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

  const renderBackButton = () => (
    // --- ALTERADO: Cores ---
    <Button
      variant="outline"
      onClick={() => setActiveTool("none")}
      className="mb-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
    >
      &larr; {t("tools.backButton") || "Voltar para Ferramentas"}
    </Button>
  );

  return (
    // --- ALTERADO: Fundo ---
    <section className="py-20 md:py-32 bg-transparent">
      <div className="container mx-auto px-4 max-w-4xl">
        {activeTool !== "none" && renderBackButton()}
        {renderContent()}
      </div>
    </section>
  );
}
