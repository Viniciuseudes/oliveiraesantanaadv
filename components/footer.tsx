"use client"

import Image from "next/image"
import Link from "next/link"
import { Linkedin, Instagram } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-[#1A1A1A] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <Image
              src="/logo.png"
              alt="Oliveira & Santana"
              width={200}
              height={200}
              className="w-auto h-32 mb-4 brightness-0 invert"
            />
            <p className="text-white/70 leading-relaxed max-w-md">{t("footer.description")}</p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-sans font-bold text-lg mb-4">{t("footer.links")}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#quem-somos" className="text-white/70 hover:text-white transition-colors">
                  {t("footer.about")}
                </Link>
              </li>
              <li>
                <Link href="#areas-atuacao" className="text-white/70 hover:text-white transition-colors">
                  {t("footer.areas")}
                </Link>
              </li>
              <li>
                <Link href="#contato" className="text-white/70 hover:text-white transition-colors">
                  {t("footer.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Social media */}
          <div>
            <h4 className="font-sans font-bold text-lg mb-4">{t("footer.social")}</h4>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
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
            © {new Date().getFullYear()} Oliveira & Santana Advogados Associados. {t("footer.rights")}.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-white/50 hover:text-white transition-colors">
              {t("footer.privacy")}
            </Link>
            <Link href="#" className="text-white/50 hover:text-white transition-colors">
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
