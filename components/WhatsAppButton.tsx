"use client"

import { MessageCircle } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function WhatsAppButton() {
  const whatsappUrl = "https://web.whatsapp.com/send?phone=50489502917"

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
