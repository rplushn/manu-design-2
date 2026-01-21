"use client"

import { MessageCircle } from "lucide-react"
import Link from "next/link"

interface FloatingWhatsAppProps {
  whatsappUrl: string
}

export function FloatingWhatsApp({ whatsappUrl }: FloatingWhatsAppProps) {
  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white p-3 md:px-5 md:py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-[#20bd5a] transition-all duration-300 hover:scale-105 group"
      aria-label="Contactar soporte por WhatsApp"
    >
      <MessageCircle className="h-6 w-6 fill-current" />
      <span className="hidden md:inline font-medium">Soporte</span>
    </Link>
  )
}
