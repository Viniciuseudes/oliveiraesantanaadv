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
// Importar o hook de idioma
import { useLanguage } from "@/contexts/language-context";
// (Opcional) Importar ScrollArea se preferir barras de rolagem estilizadas
// import { ScrollArea } from "@/components/ui/scroll-area"

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
  // Adiciona o hook de idioma
  const { language, t } = useLanguage(); // Adicionado 't' para traduções

  // Função para redirecionar ao WhatsApp
  const handleWhatsAppRedirect = (location: string) => {
    // !!! SUBSTITUA PELO NÚMERO DE WHATSAPP REAL !!!
    const phoneNumber = "5551999999999"; // Exemplo: número do Brasil (55), DDD (51), número
    const lawyerName = member.name;

    const message =
      language === "pt"
        ? `Olá, gostaria de agendar uma consulta com ${lawyerName} no escritório de ${location}.`
        : `Hello, I would like to schedule a consultation with ${lawyerName} at the ${location} office.`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank"); // Abre em nova aba
  };

  return (
    <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden group">
      <CardContent className="p-0">
        <div className="relative h-80 overflow-hidden">
          {/* --- AJUSTE DE POSIÇÃO DA IMAGEM DO CARD --- */}
          <Image
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            fill
            // Ajustado para 'center 30%' para tentar mostrar mais do rosto
            className="object-cover object-['center_30%'] group-hover:scale-110 transition-transform duration-500"
          />
          {/* --- FIM DO AJUSTE --- */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#4A1414] via-[#4A1414]/50 to-transparent opacity-80" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <p className="text-sm font-medium mb-1">{member.oab}</p>
            <h4 className="text-2xl font-sans font-bold mb-2">{member.name}</h4>
            <p className="text-sm opacity-90">{member.specialty}</p>
          </div>
        </div>
        <div className="p-6">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="w-full border-[#4A1414] text-[#4A1414] hover:bg-[#4A1414] hover:text-white transition-colors bg-transparent"
              >
                {t("about.viewProfile") || "Ver Perfil Completo"}{" "}
                {/* Usando tradução */}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-2xl">
              <DialogHeader className="pr-10">
                {" "}
                {/* Padding para não sobrepor botão fechar */}
                <DialogTitle className="text-2xl font-sans text-[#4A1414]">
                  {member.name}
                </DialogTitle>
                <DialogDescription className="text-base">
                  {member.oab} • {member.specialty}
                </DialogDescription>
              </DialogHeader>

              {/* Div com scroll */}
              <div className="max-h-[70vh] overflow-y-auto pr-4 space-y-6 custom-scrollbar">
                <div className="relative h-72 md:h-96 rounded-lg overflow-hidden">
                  {/* --- AJUSTE DE POSIÇÃO DA IMAGEM DO MODAL --- */}
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    // Removido object-top, usando object-center (padrão)
                    // Se necessário, usar object-['center_30%'] aqui também
                    className="object-cover object-center"
                  />
                  {/* --- FIM DO AJUSTE --- */}
                </div>
                <p className="text-[#6B6B6B] leading-relaxed">{member.bio}</p>
                <div className="space-y-3">
                  <h4 className="font-sans font-semibold text-[#4A1414]">
                    {t("about.chooseOffice") ||
                      "Escolha um escritório para consulta:"}{" "}
                    {/* Usando tradução */}
                  </h4>
                  <div className="grid gap-3">
                    <Button
                      className="bg-[#4A1414] hover:bg-[#6B1414] text-white justify-start"
                      // Adicionado onClick para WhatsApp
                      onClick={() => handleWhatsAppRedirect("Porto Alegre")}
                    >
                      <MapPin className="mr-2 h-4 w-4" />
                      Porto Alegre - Av. Padre Cacique, 122
                    </Button>
                    <Button
                      className="bg-[#4A1414] hover:bg-[#6B1414] text-white justify-start"
                      // Adicionado onClick para WhatsApp
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
