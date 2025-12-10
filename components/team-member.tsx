"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
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
    const phoneNumber = "5551999999999"; // Ajuste conforme necessário
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
    <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden group bg-transparent">
      <CardContent className="p-0">
        <div className="relative h-[450px] overflow-hidden rounded-xl">
          {/* IMAGEM: Agora com scale no hover para dar vida */}
          <Image
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
          />

          {/* DEGRADÊ AJUSTADO: 
              1. Removida a opacidade geral.
              2. Gradient começa do preto/azul (#081c29) embaixo e vai ficando transparente.
              3. Ocupa apenas os 60% inferiores (h-[60%]), deixando o rosto (topo) limpo.
          */}
          <div className="absolute bottom-0 left-0 right-0 h-[70%] bg-gradient-to-t from-[#081c29] via-[#081c29]/80 to-transparent" />

          {/* Conteúdo de Texto sobre a imagem */}
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            <p className="text-xs font-bold tracking-widest text-[#c5a059] mb-2 uppercase opacity-90">
              {member.oab}
            </p>
            <h4 className="text-2xl font-sans font-bold mb-2 leading-tight">
              {member.name}
            </h4>
            <p className="text-sm opacity-80 mb-6 font-light">
              {member.specialty}
            </p>

            {/* Dialog (Modal) */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full border-white/30 text-white bg-white/10 backdrop-blur-md hover:bg-white hover:text-[#081c29] transition-all"
                  >
                    {t("about.viewProfile") || "Ver Perfil Completo"}
                  </Button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-2xl bg-white text-[#081c29]">
                  <DialogHeader className="pr-10">
                    <DialogTitle className="text-2xl font-sans text-[#081c29]">
                      {member.name}
                    </DialogTitle>
                    <DialogDescription className="text-base text-gray-500">
                      {member.oab} • {member.specialty}
                    </DialogDescription>
                  </DialogHeader>

                  <div className="max-h-[70vh] overflow-y-auto pr-4 space-y-6 custom-scrollbar">
                    <div className="relative h-72 md:h-96 rounded-lg overflow-hidden">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {member.bio}
                    </p>
                    <div className="space-y-3">
                      <h4 className="font-sans font-semibold text-[#081c29]">
                        {t("about.chooseOffice") ||
                          "Escolha um escritório para consulta:"}
                      </h4>
                      <div className="grid gap-3">
                        <Button
                          className="bg-[#081c29] text-white hover:bg-[#081c29]/90 justify-start h-auto py-3"
                          onClick={() => handleWhatsAppRedirect("Recife")}
                        >
                          <MapPin className="mr-3 h-4 w-4 shrink-0" />
                          <div className="text-left">
                            <span className="block font-semibold">
                              Recife - PE
                            </span>
                            <span className="text-xs opacity-80 font-normal">
                              Av. Domingos Ferreira, 704
                            </span>
                          </div>
                        </Button>

                        <Button
                          className="bg-[#081c29] text-white hover:bg-[#081c29]/90 justify-start h-auto py-3"
                          onClick={() => handleWhatsAppRedirect("Porto Alegre")}
                        >
                          <MapPin className="mr-3 h-4 w-4 shrink-0" />
                          <div className="text-left">
                            <span className="block font-semibold">
                              Porto Alegre - RS
                            </span>
                            <span className="text-xs opacity-80 font-normal">
                              Av. Padre Cacique, 122
                            </span>
                          </div>
                        </Button>

                        <Button
                          className="bg-[#081c29] text-white hover:bg-[#081c29]/90 justify-start h-auto py-3"
                          onClick={() => handleWhatsAppRedirect("Garanhuns")}
                        >
                          <MapPin className="mr-3 h-4 w-4 shrink-0" />
                          <div className="text-left">
                            <span className="block font-semibold">
                              Garanhuns - PE
                            </span>
                            <span className="text-xs opacity-80 font-normal">
                              R. Dr. José Mariano, 665
                            </span>
                          </div>
                        </Button>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
