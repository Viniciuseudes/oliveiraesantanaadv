"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { MapPin } from "lucide-react";

export default function WhatsAppButton() {
  const { language, t } = useLanguage();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleWhatsAppRedirect = (location: string) => {
    // ... (função mantida)
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        {/* O botão flutuante verde do WhatsApp foi mantido intencionalmente por ser uma cor de marca global */}
        <Button
          className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-2xl z-50 p-0 animate-bounce hover:animate-none transition-all hover:scale-110"
          aria-label={
            language === "pt" ? "Contato via WhatsApp" : "Contact via WhatsApp"
          }
        >
          <svg viewBox="0 0 32 32" className="w-9 h-9" fill="white">
            <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.37 5.173 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-5.247 1.408 1.417-5.267-0.325-0.528c-1.331-2.217-2.035-4.743-2.035-7.317 0-7.384 6.007-13.391 13.391-13.391s13.391 6.007 13.391 13.391c0 7.384-6.007 13.391-13.391 13.391zM22.259 18.744c-0.392-0.196-2.32-1.145-2.679-1.275s-0.621-0.196-0.883 0.196c-0.262 0.392-1.015 1.275-1.243 1.537s-0.458 0.294-0.85 0.098c-0.392-0.196-1.656-0.61-3.154-1.946-1.166-1.039-1.954-2.323-2.182-2.715s-0.024-0.605 0.172-0.801c0.176-0.176 0.392-0.458 0.588-0.687s0.262-0.392 0.392-0.654c0.131-0.262 0.065-0.491-0.033-0.687s-0.883-2.13-1.211-2.915c-0.32-0.766-0.644-0.662-0.883-0.674-0.228-0.012-0.49-0.014-0.752-0.014s-0.687 0.098-1.047 0.491c-0.36 0.392-1.373 1.343-1.373 3.273s1.406 3.797 1.602 4.059c0.196 0.262 2.767 4.224 6.706 5.925 0.937 0.405 1.668 0.647 2.238 0.828 0.943 0.3 1.801 0.257 2.479 0.156 0.756-0.113 2.32-0.949 2.647-1.865s0.327-1.702 0.229-1.865c-0.098-0.163-0.36-0.262-0.752-0.458z" />
          </svg>
        </Button>
      </DialogTrigger>

      {/* Conteúdo do Modal */}
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          {/* --- ALTERADO: Cor do Título --- */}
          <DialogTitle className="text-foreground">
            {t("whatsapp.modal.title") || "Escolha o escritório"}
          </DialogTitle>
          <DialogDescription>
            {t("whatsapp.modal.desc") ||
              "Selecione o local para direcionarmos seu contato:"}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {/* --- ALTERADO: Cores dos botões --- */}
          <Button
            className="bg-primary text-primary-foreground hover:bg-primary/90 justify-start py-6 text-base"
            onClick={() => handleWhatsAppRedirect("Porto Alegre")}
          >
            <MapPin className="mr-3 h-5 w-5" />
            {t("whatsapp.modal.poa") || "Porto Alegre - RS"}
          </Button>

          <Button
            className="bg-primary text-primary-foreground hover:bg-primary/90 justify-start py-6 text-base"
            onClick={() => handleWhatsAppRedirect("Garanhuns")}
          >
            <MapPin className="mr-3 h-5 w-5" />
            {t("whatsapp.modal.gar") || "Garanhuns - PE"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
