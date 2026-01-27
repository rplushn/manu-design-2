"use client"

import { MessageCircle } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function WhatsAppButton() {
<<<<<<< HEAD
  const whatsappUrl = "https://web.whatsapp.com/send?phone=50489502917&text=" + encodeURIComponent("Hola Manu, necesito más información")
=======
  // Using api.whatsapp.com usually provides the best "Direct" experience across devices
  // It opens the app on mobile and the web/app prompt on desktop without the "Landing page" style of wa.me
  const whatsappUrl = "https://api.whatsapp.com/send?phone=50489502917&text=Hola%20Manu%2C%20necesito%20m%C3%A1s%20informaci%C3%B3n"
>>>>>>> 8d17f8661785e322679613bbd7e132d25c4d1d8d

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-[#25D366]/90 backdrop-blur-sm text-white rounded-full shadow-lg hover:shadow-xl hover:bg-[#25D366] transition-all duration-300 hover:scale-105 group"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="h-6 w-6 md:h-7 md:w-7 fill-current group-hover:scale-110 transition-transform duration-300" />
      </Link>
    </motion.div>
  )
}
