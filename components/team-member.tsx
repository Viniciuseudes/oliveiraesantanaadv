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
import { MapPin, User } from "lucide-react"; // Adicionei User como fallback
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
    const phoneNumber = "5551999999999"; // Substitua pelo número real
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
    <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-500 lg:hover:-translate-y-2 overflow-hidden group bg-transparent h-full">
      <CardContent className="p-0 h-full">
        <div className="relative h-[450px] w-full overflow-hidden rounded-xl">
          {/* IMAGEM DO ADVOGADO */}
          <Image
            src={member.image || "/placeholder-user.jpg"}
            alt={member.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-700 lg:group-hover:scale-110"
          />

          {/* DEGRADÊ ESCURO (Para o texto aparecer) */}
          <div className="absolute inset-x-0 bottom-0 h-[80%] bg-gradient-to-t from-[#081c29] via-[#081c29]/90 to-transparent pointer-events-none" />

          {/* CONTEÚDO DE TEXTO E BOTÃO */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white flex flex-col justify-end h-full pointer-events-none">
            {/* O conteúdo interativo precisa de pointer-events-auto */}
            <div className="pointer-events-auto transform transition-transform duration-500 translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0">
              <p className="text-xs font-bold tracking-widest text-[#c5a059] mb-1 uppercase opacity-90">
                {member.oab}
              </p>

              <h4 className="text-2xl font-sans font-bold mb-1 leading-tight text-white">
                {member.name}
              </h4>

              <p className="text-sm opacity-80 mb-4 font-light text-gray-200">
                {member.specialty}
              </p>

              {/* BOTÃO VER PERFIL:
                  - Mobile: Opacity 100 (Sempre visível)
                  - Desktop: Opacity 0 (Invisível) -> Hover: Opacity 100
              */}
              <div className="opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full border-white/30 text-white bg-white/10 backdrop-blur-md hover:bg-white hover:text-[#081c29] transition-all font-medium"
                    >
                      {t("about.viewProfile") || "Ver Perfil Completo"}
                    </Button>
                  </DialogTrigger>

                  <DialogContent className="sm:max-w-2xl bg-white text-[#081c29] max-h-[90vh] overflow-y-auto">
                    <DialogHeader className="pr-10">
                      <DialogTitle className="text-2xl font-sans text-[#081c29] flex items-center gap-2">
                        <User className="h-5 w-5 text-[#c5a059]" />
                        {member.name}
                      </DialogTitle>
                      <DialogDescription className="text-base text-gray-500">
                        {member.oab} • {member.specialty}
                      </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-6 pt-4">
                      {/* Imagem no Modal */}
                      <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-inner">
                        <Image
                          src={member.image || "/placeholder-user.jpg"}
                          alt={member.name}
                          fill
                          className="object-cover object-top"
                        />
                      </div>

                      {/* Bio */}
                      <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed">
                        <p>{member.bio}</p>
                      </div>

                      {/* Botões de Contato */}
                      <div className="space-y-3 pt-2 border-t border-gray-100">
                        <h4 className="font-sans font-semibold text-[#081c29] mb-3">
                          {t("about.chooseOffice") || "Agendar consulta em:"}
                        </h4>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <Button
                            className="bg-[#081c29] text-white hover:bg-[#081c29]/90 justify-start h-auto py-3 px-4 shadow-md"
                            onClick={() => handleWhatsAppRedirect("Recife")}
                          >
                            <MapPin className="mr-3 h-5 w-5 shrink-0 text-[#c5a059]" />
                            <div className="text-left">
                              <span className="block font-semibold">
                                Recife - PE
                              </span>
                              <span className="text-xs opacity-70 font-normal">
                                Sede Principal
                              </span>
                            </div>
                          </Button>

                          <Button
                            className="bg-[#081c29] text-white hover:bg-[#081c29]/90 justify-start h-auto py-3 px-4 shadow-md"
                            onClick={() =>
                              handleWhatsAppRedirect("Porto Alegre")
                            }
                          >
                            <MapPin className="mr-3 h-5 w-5 shrink-0 text-[#c5a059]" />
                            <div className="text-left">
                              <span className="block font-semibold">
                                Porto Alegre - RS
                              </span>
                              <span className="text-xs opacity-70 font-normal">
                                Filial Sul
                              </span>
                            </div>
                          </Button>

                          <Button
                            className="bg-[#081c29] text-white hover:bg-[#081c29]/90 justify-start h-auto py-3 px-4 shadow-md col-span-1 sm:col-span-2"
                            onClick={() => handleWhatsAppRedirect("Online")}
                          >
                            <MapPin className="mr-3 h-5 w-5 shrink-0 text-[#c5a059]" />
                            <div className="text-left">
                              <span className="block font-semibold">
                                Atendimento Online
                              </span>
                              <span className="text-xs opacity-70 font-normal">
                                Videoconferência
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
        </div>
      </CardContent>
    </Card>
  );
}
