// components/tax-simulator.tsx
"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { AlertCircle, Calculator } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

// Função para formatar número como moeda BRL
const formatCurrency = (value: number | null): string => {
  if (value === null || isNaN(value)) return "R$ 0,00";
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
};

// Lógica de cálculo simplificada
const calculatePotentialSaving = (
  faturamento: number,
  regime: string,
  setor: string
): number | null => {
  if (!faturamento || !regime || faturamento <= 0) return null;

  let potentialPercentage = 0;

  switch (regime) {
    case "simples":
      potentialPercentage = faturamento > 3500000 ? 0.15 : 0.05; // 15% se > 3.5M, senão 5%
      break;
    case "presumido":
      potentialPercentage = setor === "servicos" ? 0.18 : 0.12; // 18% para Serviços, 12% para outros
      break;
    case "real":
      potentialPercentage = 0.1; // Fixo 10% para Lucro Real
      break;
    default:
      return null;
  }

  return faturamento * potentialPercentage;
};

export default function TaxSimulator() {
  const { t } = useLanguage();
  const [faturamento, setFaturamento] = useState<string>("");
  const [regime, setRegime] = useState<string>("");
  const [setor, setSetor] = useState<string>("");
  const [potentialSaving, setPotentialSaving] = useState<number | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false);

  const handleSimulate = () => {
    const faturamentoNum = parseFloat(faturamento.replace(/\D/g, "")) / 100; // Converte string BRL para número
    if (isNaN(faturamentoNum) || faturamentoNum <= 0 || !regime) {
      alert(
        t("simulator.error.invalidInput") ||
          "Por favor, preencha o faturamento anual e selecione o regime tributário."
      );
      return;
    }
    const saving = calculatePotentialSaving(faturamentoNum, regime, setor);
    setPotentialSaving(saving);
    setShowResult(true);
  };

  // Formata o input de faturamento como moeda BRL enquanto digita
  const handleFaturamentoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove tudo que não é dígito
    if (!value) {
      setFaturamento("");
      return;
    }
    value = (parseInt(value, 10) / 100).toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    setFaturamento(`R$ ${value}`);
  };

  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-32 bg-white">
      {" "}
      {/* Fundo branco para alternar com a seção anterior */}
      <div className="container mx-auto px-4 max-w-3xl">
        <Card className="shadow-xl border-none overflow-hidden">
          <CardHeader className="bg-[#4A1414] text-white p-6">
            <CardTitle className="text-2xl font-sans text-center flex items-center justify-center gap-2">
              <Calculator className="h-6 w-6" />
              {t("simulator.title") ||
                "Simulador (Ilustrativo) de Economia Tributária"}
            </CardTitle>
            <CardDescription className="text-white/80 text-center text-sm mt-1">
              {t("simulator.description") ||
                "Tenha uma ideia do potencial de economia para sua empresa."}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 md:p-8 space-y-6">
            <div className="p-3 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 text-sm rounded-r-md">
              <AlertCircle className="inline h-4 w-4 mr-1" />
              {t("simulator.disclaimer") ||
                "Este simulador oferece apenas uma estimativa ilustrativa. A economia real depende de uma análise detalhada. Consulte nossos especialistas."}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label
                  htmlFor="faturamento"
                  className="text-[#4A1414] font-medium"
                >
                  {t("simulator.label.revenue") || "Faturamento Anual (R$)"}
                </Label>
                <Input
                  id="faturamento"
                  value={faturamento}
                  onChange={handleFaturamentoChange}
                  placeholder="R$ 1.000.000,00"
                  className="mt-1 border-[#6B6B6B]/30"
                  inputMode="numeric" // Melhora a experiência mobile
                />
              </div>
              <div>
                <Label htmlFor="regime" className="text-[#4A1414] font-medium">
                  {t("simulator.label.regime") || "Regime Tributário Atual"}
                </Label>
                <Select value={regime} onValueChange={setRegime}>
                  <SelectTrigger
                    id="regime"
                    className="mt-1 border-[#6B6B6B]/30 w-full"
                  >
                    <SelectValue
                      placeholder={
                        t("simulator.placeholder.regime") || "Selecione..."
                      }
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="simples">
                      {t("simulator.regime.simples") || "Simples Nacional"}
                    </SelectItem>
                    <SelectItem value="presumido">
                      {t("simulator.regime.presumido") || "Lucro Presumido"}
                    </SelectItem>
                    <SelectItem value="real">
                      {t("simulator.regime.real") || "Lucro Real"}
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label htmlFor="setor" className="text-[#4A1414] font-medium">
                {t("simulator.label.sector") || "Setor Principal (Opcional)"}
              </Label>
              <Select value={setor} onValueChange={setSetor}>
                <SelectTrigger
                  id="setor"
                  className="mt-1 border-[#6B6B6B]/30 w-full"
                >
                  <SelectValue
                    placeholder={
                      t("simulator.placeholder.sector") || "Selecione..."
                    }
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="servicos">
                    {t("simulator.sector.servicos") || "Serviços"}
                  </SelectItem>
                  <SelectItem value="comercio">
                    {t("simulator.sector.comercio") || "Comércio"}
                  </SelectItem>
                  <SelectItem value="industria">
                    {t("simulator.sector.industria") || "Indústria"}
                  </SelectItem>
                  <SelectItem value="outro">
                    {t("simulator.sector.outro") || "Outro"}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              onClick={handleSimulate}
              className="w-full bg-[#4A1414] hover:bg-[#6B1414] text-white py-3 text-lg mt-4"
            >
              {t("simulator.button.simulate") || "Simular Potencial"}
            </Button>

            {showResult && (
              <div className="mt-8 p-6 bg-green-50 border-l-4 border-green-600 rounded-r-md text-center">
                {potentialSaving !== null && potentialSaving > 0 ? (
                  <p className="text-green-800 text-lg">
                    {t("simulator.result.text") ||
                      "Com base nas suas informações, sua empresa *poderia* ter um potencial de economia tributária de"}{" "}
                    **{t("simulator.result.upTo") || "até"}{" "}
                    {formatCurrency(potentialSaving)}**{" "}
                    {t("simulator.result.perYear") ||
                      "por ano com uma reestruturação."}
                  </p>
                ) : (
                  <p className="text-green-800 text-lg">
                    {t("simulator.result.noSaving") ||
                      "Com base nas informações, otimizações podem existir, mas uma análise detalhada é necessária para identificar potenciais economias."}
                  </p>
                )}
                <Button
                  onClick={scrollToContact}
                  size="lg"
                  className="mt-6 bg-[#4A1414] hover:bg-[#6B1414] text-white"
                >
                  {t("simulator.cta") || "Agende uma Análise Gratuita"}
                </Button>
                <p className="text-xs text-green-700 mt-2">
                  * {t("simulator.disclaimer") || "Estimativa ilustrativa."}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
