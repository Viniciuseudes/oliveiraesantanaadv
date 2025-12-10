"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/language-context";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface GoogleReview {
  author_name: string;
  profile_photo_url: string | null;
  rating: number;
  relative_time_description: string;
  text: string;
}

export default function SuccessCasesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  // Estado para armazenar as avaliações
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [stats, setStats] = useState({ rating: 5.0, total: 44 });

  // Efeito para puxar os dados da API (ou do fallback)
  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await fetch("/api/reviews");
        const data = await res.json();
        setStats({ rating: data.rating, total: data.total });
        setReviews(data.reviews || []);
      } catch (error) {
        console.error("Erro ao buscar reviews", error);
      }
    }
    fetchReviews();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const cases = [
    { result: t("cases.1.result"), category: t("cases.1.category") },
    { result: t("cases.2.result"), category: t("cases.2.category") },
    { result: t("cases.3.result"), category: t("cases.3.category") },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 bg-card text-foreground"
      id="casos"
    >
      <div className="container mx-auto px-4">
        {/* --- CABEÇALHO DA SEÇÃO --- */}
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-[#081c29] font-bold tracking-wider uppercase text-sm mb-4 block">
            Resultados Comprovados
          </span>
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-[#081c29] mb-6 text-balance">
            {t("cases.title")}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-balance">
            {t("cases.subtitle")}
          </p>
        </div>

        {/* --- CARDS DE RESULTADOS (CLEAN) --- */}
        <div className="grid md:grid-cols-3 gap-6 mb-24 max-w-6xl mx-auto">
          {cases.map((item, index) => (
            <Card
              key={index}
              className={`bg-white/60 backdrop-blur-sm border-border hover:bg-white hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8">
                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-4">
                  {item.category}
                </div>
                <p className="text-[#081c29] font-medium text-lg leading-relaxed text-balance">
                  {item.result}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* --- BLOCO DE REVIEWS (DARK BLUE PREMIUM) --- */}
        <div
          className={`mt-12 md:mt-24 py-16 px-6 md:px-16 bg-[#081c29] rounded-[2.5rem] relative overflow-hidden shadow-2xl transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Efeitos de Luz de Fundo (Glow) */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] -ml-32 -mb-32 pointer-events-none"></div>

          {/* Cabeçalho do Bloco Escuro */}
          <div className="relative z-10 text-center mb-14">
            <h3 className="text-3xl md:text-4xl font-sans font-bold text-white mb-3">
              O que dizem nossos clientes
            </h3>
            <div className="flex flex-col md:flex-row justify-center items-center gap-3">
              <span className="text-blue-100/80 text-sm font-medium tracking-wide">
                Classificação 5.0 no Google
              </span>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-blue-100/60 text-xs">
                ({stats.total} avaliações)
              </span>
            </div>
          </div>

          {/* Carrossel */}
          <div className="relative z-10">
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent>
                {reviews.map((review, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3 pl-6"
                  >
                    <div className="h-full pt-2 pb-2">
                      {/* CARD DO REVIEW (BRANCO para contraste) */}
                      <Card className="bg-white border-none h-full flex flex-col rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                        <CardContent className="p-8 flex flex-col h-full">
                          {/* Topo do Card: Foto e Nome */}
                          <div className="flex items-start justify-between mb-6">
                            <div className="flex items-center gap-3">
                              {review.profile_photo_url ? (
                                <Image
                                  src={review.profile_photo_url}
                                  alt={review.author_name}
                                  width={48}
                                  height={48}
                                  className="rounded-full object-cover border-2 border-gray-100"
                                />
                              ) : (
                                <div className="w-12 h-12 bg-[#081c29]/5 text-[#081c29] rounded-full flex items-center justify-center font-bold text-xl">
                                  {review.author_name.charAt(0)}
                                </div>
                              )}
                              <div>
                                <h4 className="font-bold text-sm text-gray-900 line-clamp-1">
                                  {review.author_name}
                                </h4>
                                <p className="text-xs text-gray-500 font-medium">
                                  {review.relative_time_description}
                                </p>
                              </div>
                            </div>
                            {/* Ícone do Google (SVG) */}
                            <div className="w-6 h-6 opacity-90">
                              <svg
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                  fill="#4285F4"
                                />
                                <path
                                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                  fill="#34A853"
                                />
                                <path
                                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                  fill="#FBBC05"
                                />
                                <path
                                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                  fill="#EA4335"
                                />
                              </svg>
                            </div>
                          </div>

                          {/* Estrelas */}
                          <div className="flex gap-1 mb-4">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating
                                    ? "fill-[#FBBC05] text-[#FBBC05]"
                                    : "fill-gray-200 text-gray-200"
                                }`}
                              />
                            ))}
                          </div>

                          {/* Texto do Depoimento */}
                          <div className="relative">
                            <p className="text-gray-600 text-[0.95rem] leading-relaxed line-clamp-5">
                              "{review.text}"
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {/* Controles do Carrossel (Brancos para contrastar com o fundo escuro) */}
              <CarouselPrevious className="-left-2 md:-left-8 bg-white/10 border-white/20 text-white hover:bg-white hover:text-[#081c29] h-10 w-10 md:h-12 md:w-12" />
              <CarouselNext className="-right-2 md:-right-8 bg-white/10 border-white/20 text-white hover:bg-white hover:text-[#081c29] h-10 w-10 md:h-12 md:w-12" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
