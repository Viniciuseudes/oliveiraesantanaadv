"use client";

import { Button } from "@/components/ui/button";
import { Globe, Type } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { useAccessibility } from "@/contexts/accessibility-context";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface AccessibilityControlsProps {
  variant?: "hero" | "header";
}

export default function AccessibilityControls({
  variant = "header",
}: AccessibilityControlsProps) {
  const { language, setLanguage } = useLanguage();
  const { increaseFontSize, decreaseFontSize, resetFontSize } =
    useAccessibility();

  const isHero = variant === "hero";

  return (
    <div className={`flex items-center ${isHero ? "space-x-3" : "space-x-2"}`}>
      {/* Language Selector */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            // --- ALTERADO: Cores dos botões de acessibilidade ---
            variant={isHero ? "outline" : "ghost"}
            size="icon"
            className={`${
              isHero
                ? "h-11 w-11 bg-primary/10 hover:bg-primary/20 border-primary/20"
                : "h-9 w-9"
            }`}
            aria-label={
              language === "pt" ? "Selecionar idioma" : "Select language"
            }
          >
            <Globe className={`${isHero ? "h-5 w-5" : "h-4 w-4"}`} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setLanguage("pt")}>
            🇧🇷 Português {language === "pt" && "✓"}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setLanguage("en")}>
            🇺🇸 English {language === "en" && "✓"}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Font Size Controls */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            // --- ALTERADO: Cores dos botões de acessibilidade ---
            variant={isHero ? "outline" : "ghost"}
            size="icon"
            className={`${
              isHero
                ? "h-11 w-11 bg-primary/10 hover:bg-primary/20 border-primary/20"
                : "h-9 w-9"
            }`}
            aria-label={
              language === "pt"
                ? "Ajustar tamanho da fonte"
                : "Adjust font size"
            }
          >
            <Type className={`${isHero ? "h-5 w-5" : "h-4 w-4"}`} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={increaseFontSize}>
            A+ {language === "pt" ? "Aumentar" : "Increase"}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={decreaseFontSize}>
            A- {language === "pt" ? "Diminuir" : "Decrease"}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={resetFontSize}>
            {language === "pt" ? "Padrão" : "Reset"}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
