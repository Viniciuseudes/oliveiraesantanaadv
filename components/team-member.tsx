// components/team-member.tsx
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

interface TeamMemberProps {
  member: {
    name: string;
    specialty: string;
    oab: string;
    image: string;
    bio: string;
  };
  index: number;
}

export default function TeamMember({ member, index }: TeamMemberProps) {
  const { language, t } = useLanguage();

  const handleWhatsAppRedirect = (location: string) => {
    const phoneNumber = "5551999999999";
    const lawyerName = member.name;

    const message =
      language === "pt"
        ? `Olá, gostaria de agendar uma consulta com ${lawyerName} no escritório de ${location}.`
        : `Hello, I would like to schedule a consultation with ${lawyerName} at the ${location} office.`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    // --- ALTERADO: Cor do Card ---
    <Card className="border-border shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden group bg-card">
      <CardContent className="p-0">
        <div className="relative h-80 overflow-hidden">
          <Image
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            fill
            className="object-cover object-top group-hover:scale-110 transition-transform duration-500" // <-- Esta foi a Correção 1 (no Card)
          />
          {/* --- ALTERADO: Gradiente --- */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <p className="text-sm font-medium mb-1">{member.oab}</p>
            <h4 className="text-2xl font-sans font-bold mb-2">{member.name}</h4>
            <p className="text-sm opacity-90">{member.specialty}</p>
          </div>
        </div>
        <div className="p-6">
          <Dialog>
            <DialogTrigger asChild>
              {/* --- ALTERADO: Estilo do botão --- */}
              <Button
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {t("about.viewProfile") || "Ver Perfil Completo"}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-2xl">
              <DialogHeader className="pr-10">
                {/* --- ALTERADO: Cores do Modal --- */}
                <DialogTitle className="text-2xl font-sans text-foreground">
                  {member.name}
                </DialogTitle>
                <DialogDescription className="text-base">
                  {member.oab} • {member.specialty}
                </DialogDescription>
              </DialogHeader>

              <div className="max-h-[70vh] overflow-y-auto pr-4 space-y-6 custom-scrollbar">
                <div className="relative h-72 md:h-96 rounded-lg overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover object-top" // <-- ESTA É A CORREÇÃO 2 (dentro do Modal)
                  />
                </div>
                {/* --- ALTERADO: Cor do texto --- */}
                <p className="text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
                <div className="space-y-3">
                  <h4 className="font-sans font-semibold text-foreground">
                    {t("about.chooseOffice") ||
                      "Escolha um escritório para consulta:"}
                  </h4>
                  <div className="grid gap-3">
                    {/* --- ALTERADO: Cores dos botões --- */}
                    <Button
                      className="bg-primary text-primary-foreground hover:bg-primary/90 justify-start"
                      onClick={() => handleWhatsAppRedirect("Porto Alegre")}
                    >
                      <MapPin className="mr-2 h-4 w-4" />
                      Porto Alegre - Av. Padre Cacique, 122
                    </Button>
                    <Button
                      className="bg-primary text-primary-foreground hover:bg-primary/90 justify-start"
                      onClick={() => handleWhatsAppRedirect("Garanhuns")}
                    >
                      <MapPin className="mr-2 h-4 w-4" />
                      Garanhuns - R. Dr. José Mariano, 665
                    </Button>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );
}
