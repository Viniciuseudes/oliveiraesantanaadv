// components/interactive-quiz.tsx
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { AlertCircle, CheckCircle, BarChart } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

// Definição das perguntas (adaptado do contexto do idioma)
const getQuizQuestions = (t: (key: string) => string) => [
  {
    id: "q1",
    text: t("quiz.q1.text") || "Qual o regime tributário atual da sua empresa?", // Fallback
    options: [
      { value: "a", label: t("quiz.q1.opt.a") || "Simples Nacional", score: 1 },
      { value: "b", label: t("quiz.q1.opt.b") || "Lucro Presumido", score: 1 },
      { value: "c", label: t("quiz.q1.opt.c") || "Lucro Real", score: 0 },
      {
        value: "d",
        label: t("quiz.q1.opt.d") || "Não tenho certeza / MEI / Outro",
        score: 2,
      },
    ],
  },
  {
    id: "q2",
    text:
      t("quiz.q2.text") ||
      "Com que frequência sua empresa revisa o planejamento tributário com um especialista?",
    options: [
      { value: "a", label: t("quiz.q2.opt.a") || "Anualmente", score: 0 },
      { value: "b", label: t("quiz.q2.opt.b") || "A cada 2-3 anos", score: 1 },
      {
        value: "c",
        label: t("quiz.q2.opt.c") || "Raramente ou nunca",
        score: 2,
      },
      { value: "d", label: t("quiz.q2.opt.d") || "Não sei", score: 2 },
    ],
  },
  {
    id: "q3",
    text:
      t("quiz.q3.text") ||
      "Sua empresa vende produtos com Substituição Tributária (ICMS-ST) ou PIS/COFINS Monofásico?",
    options: [
      {
        value: "a",
        label:
          t("quiz.q3.opt.a") ||
          "Sim, e temos controle sobre os créditos/ressarcimentos.",
        score: 0,
      },
      {
        value: "b",
        label:
          t("quiz.q3.opt.b") ||
          "Sim, mas não tenho certeza sobre os créditos/ressarcimentos.",
        score: 2,
      },
      {
        value: "c",
        label: t("quiz.q3.opt.c") || "Não vendemos esses produtos.",
        score: 1,
      }, // Pontuação neutra/baixa
      { value: "d", label: t("quiz.q3.opt.d") || "Não sei.", score: 2 },
    ],
  },
  {
    id: "q4",
    text:
      t("quiz.q4.text") ||
      "Nos últimos 5 anos, sua empresa já fez um levantamento para recuperar impostos pagos a maior (créditos tributários)?",
    options: [
      {
        value: "a",
        label: t("quiz.q4.opt.a") || "Sim, e recuperamos valores.",
        score: 0,
      },
      {
        value: "b",
        label:
          t("quiz.q4.opt.b") ||
          "Sim, mas não encontramos nada ou foi complexo.",
        score: 1,
      },
      {
        value: "c",
        label: t("quiz.q4.opt.c") || "Não, nunca fizemos.",
        score: 2,
      },
      {
        value: "d",
        label: t("quiz.q4.opt.d") || "Não sei se pagamos a maior.",
        score: 2,
      },
    ],
  },
  {
    id: "q5",
    text:
      t("quiz.q5.text") ||
      "Você acredita que a carga tributária da sua empresa é alta comparada aos concorrentes ou ao mercado?",
    options: [
      {
        value: "a",
        label: t("quiz.q5.opt.a") || "Não, parece adequada.",
        score: 0,
      },
      {
        value: "b",
        label: t("quiz.q5.opt.b") || "Sim, sinto que pagamos muito.",
        score: 2,
      },
      {
        value: "c",
        label: t("quiz.q5.opt.c") || "Tenho dúvidas, não consigo comparar.",
        score: 1,
      },
    ],
  },
];

type Answers = { [key: string]: string };
type ResultLevel = "baixo" | "medio" | "alto";

export default function InteractiveQuiz() {
  const { t } = useLanguage();
  const questions = getQuizQuestions(t);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [showResult, setShowResult] = useState(false);
  const [resultLevel, setResultLevel] = useState<ResultLevel>("baixo");

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      calculateResult();
      setShowResult(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const calculateResult = () => {
    let totalScore = 0;
    questions.forEach((q) => {
      const selectedOptionValue = answers[q.id];
      const selectedOption = q.options.find(
        (opt) => opt.value === selectedOptionValue
      );
      if (selectedOption) {
        totalScore += selectedOption.score;
      }
    });

    if (totalScore <= 3) {
      setResultLevel("baixo");
    } else if (totalScore <= 6) {
      setResultLevel("medio");
    } else {
      setResultLevel("alto");
    }
  };

  const resetQuiz = () => {
    setAnswers({});
    setCurrentQuestionIndex(0);
    setShowResult(false);
    setResultLevel("baixo");
  };

  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  const currentQuestion = questions[currentQuestionIndex];
  const isAnswerSelected = !!answers[currentQuestion.id];

  // Textos dos resultados baseados no nível
  const resultTexts: {
    [key in ResultLevel]: {
      title: string;
      description: string;
      icon: React.ElementType;
    };
  } = {
    baixo: {
      title: t("quiz.result.low.title") || "Risco Baixo",
      description:
        t("quiz.result.low.desc") ||
        "Parabéns! Parece que sua gestão fiscal está bem encaminhada, mas uma revisão periódica pode sempre identificar novas oportunidades.",
      icon: CheckCircle,
    },
    medio: {
      title: t("quiz.result.medium.title") || "Risco Médio",
      description:
        t("quiz.result.medium.desc") ||
        "Atenção! Existem alguns pontos que indicam possíveis oportunidades de economia ou riscos fiscais na sua empresa. Uma análise detalhada pode ser muito benéfica.",
      icon: AlertCircle,
    },
    alto: {
      title: t("quiz.result.high.title") || "Risco Alto",
      description:
        t("quiz.result.high.desc") ||
        "Alerta! Há grandes chances de sua empresa estar pagando mais impostos que o necessário ou exposta a riscos. Recomendamos fortemente uma análise tributária aprofundada.",
      icon: BarChart, // Ou outro ícone que represente alerta/atenção
    },
  };

  const ResultIcon = resultTexts[resultLevel].icon;

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-[#F5F5F0] to-[#E8E8E0]">
      {" "}
      {/* Mesmo fundo da seção 'areas' */}
      <div className="container mx-auto px-4 max-w-3xl">
        <Card className="shadow-xl border-none overflow-hidden">
          {!showResult ? (
            <>
              <CardHeader className="bg-[#4A1414] text-white p-6">
                <CardTitle className="text-2xl font-sans text-center">
                  {t("quiz.title") || "Diagnóstico Rápido: Risco Fiscal"} (
                  {currentQuestionIndex + 1}/{questions.length})
                </CardTitle>
                <Progress
                  value={progress}
                  className="w-full mt-2 h-2 bg-white/30 [&>div]:bg-white"
                />
              </CardHeader>
              <CardContent className="p-6 md:p-8 space-y-6">
                <p className="text-lg font-semibold text-center text-[#4A1414]">
                  {currentQuestion.text}
                </p>
                <RadioGroup
                  value={answers[currentQuestion.id] || ""}
                  onValueChange={(value) =>
                    handleAnswerChange(currentQuestion.id, value)
                  }
                  className="space-y-3"
                >
                  {currentQuestion.options.map((option) => (
                    <div
                      key={option.value}
                      className="flex items-center space-x-3 p-3 border rounded-md hover:bg-gray-50 transition-colors"
                    >
                      <RadioGroupItem
                        value={option.value}
                        id={`${currentQuestion.id}-${option.value}`}
                      />
                      <Label
                        htmlFor={`${currentQuestion.id}-${option.value}`}
                        className="flex-1 cursor-pointer text-[#6B6B6B]"
                      >
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
              <CardFooter className="flex justify-between p-6 bg-gray-50 border-t">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentQuestionIndex === 0}
                >
                  {t("quiz.previous") || "Anterior"}
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={!isAnswerSelected}
                  className="bg-[#4A1414] hover:bg-[#6B1414] text-white"
                >
                  {currentQuestionIndex === questions.length - 1
                    ? t("quiz.finish") || "Ver Resultado"
                    : t("quiz.next") || "Próxima"}
                </Button>
              </CardFooter>
            </>
          ) : (
            <>
              <CardHeader className="bg-[#4A1414] text-white p-6">
                <CardTitle className="text-2xl font-sans text-center">
                  {t("quiz.result.title") || "Resultado do Diagnóstico"}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 md:p-8 text-center space-y-4">
                <ResultIcon
                  className={`h-16 w-16 mx-auto mb-4 ${
                    resultLevel === "alto"
                      ? "text-red-600"
                      : resultLevel === "medio"
                      ? "text-yellow-500"
                      : "text-green-600"
                  }`}
                />
                <h3
                  className={`text-2xl font-bold font-sans ${
                    resultLevel === "alto"
                      ? "text-red-700"
                      : resultLevel === "medio"
                      ? "text-yellow-600"
                      : "text-green-700"
                  }`}
                >
                  {resultTexts[resultLevel].title}
                </h3>
                <p className="text-[#6B6B6B] leading-relaxed max-w-prose mx-auto">
                  {resultTexts[resultLevel].description}
                </p>
                <Button
                  onClick={scrollToContact}
                  size="lg"
                  className="mt-6 bg-[#4A1414] hover:bg-[#6B1414] text-white"
                >
                  {t("quiz.cta") || "Agende uma Análise Tributária Gratuita"}
                </Button>
              </CardContent>
              <CardFooter className="flex justify-center p-6 bg-gray-50 border-t">
                <Button variant="ghost" onClick={resetQuiz}>
                  {t("quiz.restart") || "Refazer Diagnóstico"}
                </Button>
              </CardFooter>
            </>
          )}
        </Card>
      </div>
    </section>
  );
}
