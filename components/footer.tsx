"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export default function Footer() {
  const { language, t } = useLanguage();

  const navItems = [
    { id: "sobre", label: t("footer.about") },
    { id: "areas-atuacao", label: t("footer.areas") },
    {
      id: "diferenciais",
      label: language === "pt" ? "Diferenciais" : "Why Us",
    },
    { id: "casos", label: language === "pt" ? "Casos" : "Cases" },
    { id: "instagram", label: t("footer.instagram") },
    { id: "contato", label: t("footer.contact") },
  ];

  return (
    /* CORREÇÃO AQUI: 
       Removido 'bg-card' (que é branco).
       Adicionado 'bg-[#081c29]' para garantir que o fundo seja o Azul da marca,
       independentemente do degradê do corpo da página.
    */
    <footer className="bg-[#081c29] text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and description */}
          <div className="md:col-span-2">
            {/* Logo branca para fundo escuro */}
            <Image
              src="/123.png"
              alt="Oliveira & Santana"
              width={200}
              height={200}
              className="w-auto h-24 mb-4"
            />
            <p className="text-white/70 leading-relaxed max-w-md">
              {t("footer.description")}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-sans font-bold text-lg mb-4">
              {t("footer.links")}
            </h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`#${item.id}`}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social media */}
          <div>
            <h4 className="font-sans font-bold text-lg mb-4">
              {t("footer.social")}
            </h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/oliveiraesantana.adv/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Oliveira & Santana Advogados
            Associados. {t("footer.rights")}.
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              href="#"
              className="text-white/50 hover:text-white transition-colors"
            >
              {t("footer.privacy")}
            </Link>
            <Link
              href="#"
              className="text-white/50 hover:text-white transition-colors"
            >
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
