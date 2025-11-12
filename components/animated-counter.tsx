// components/animated-counter.tsx
"use client";

import { useEffect, useState, useRef } from "react";

interface AnimatedCounterProps {
  targetValue: number;
  duration?: number; // Duração da animação em milissegundos
  label: string;
  icon?: React.ElementType; // Ícone opcional
}

export default function AnimatedCounter({
  targetValue,
  duration = 2000,
  label,
  icon: Icon,
}: AnimatedCounterProps) {
  const [currentValue, setCurrentValue] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Anima apenas uma vez
        }
      },
      { threshold: 0.1 } // Inicia quando 10% está visível
    );

    const currentRef = counterRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return; // Não inicia a animação se não estiver visível

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) {
        startTime = timestamp;
      }
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3); // Easing function (easeOutCubic)

      setCurrentValue(Math.floor(easedProgress * targetValue));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCurrentValue(targetValue); // Garante que o valor final seja exato
      }
    };

    requestAnimationFrame(step);
  }, [targetValue, duration, isVisible]); // Re-executa se o valor alvo mudar ou se ficar visível

  return (
    <div ref={counterRef} className="text-center">
      {Icon && (
        // --- ALTERADO: Cor do ícone ---
        <Icon className="h-8 w-8 md:h-10 md:w-10 mx-auto mb-2 text-muted-foreground" />
      )}
      {/* --- ALTERADO: Cor do número --- */}
      <div className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-foreground">
        {currentValue.toLocaleString("pt-BR")}+
      </div>
      {/* --- ALTERADO: Cor do label --- */}
      <p className="text-sm md:text-base text-muted-foreground mt-1">{label}</p>
    </div>
  );
}
