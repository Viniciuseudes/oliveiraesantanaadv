"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image"
import { MapPin } from "lucide-react"

interface TeamMemberProps {
  member: {
    name: string
    specialty: string
    oab: string
    image: string
    bio: string
  }
  index: number
}

export default function TeamMember({ member, index }: TeamMemberProps) {
  return (
    <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden group">
      <CardContent className="p-0">
        <div className="relative h-80 overflow-hidden">
          <Image
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
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
                Ver Perfil Completo
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-sans text-[#4A1414]">{member.name}</DialogTitle>
                <DialogDescription className="text-base">
                  {member.oab} • {member.specialty}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-6">
                <div className="relative h-96 rounded-lg overflow-hidden">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <p className="text-[#6B6B6B] leading-relaxed">{member.bio}</p>
                <div className="space-y-3">
                  <h4 className="font-sans font-semibold text-[#4A1414]">Escolha um escritório para consulta:</h4>
                  <div className="grid gap-3">
                    <Button className="bg-[#4A1414] hover:bg-[#6B1414] text-white justify-start">
                      <MapPin className="mr-2 h-4 w-4" />
                      Porto Alegre - Av. Padre Cacique, 122
                    </Button>
                    <Button className="bg-[#4A1414] hover:bg-[#6B1414] text-white justify-start">
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
  )
}
