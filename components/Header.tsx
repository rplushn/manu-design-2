'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function Header() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const deltaY = currentScrollY - lastScrollY

      // Si estamos en los primeros 100px, header siempre visible
      if (currentScrollY < 100) {
        setIsHeaderVisible(true)
      } else {
        // Solo aplicar lógica de ocultar/mostrar si pasamos el threshold
        if (deltaY > 10) {
          // Scroll DOWN rápido (más de 10px) - ocultar header
          setIsHeaderVisible(false)
        } else if (deltaY < -10) {
          // Scroll UP (más de 10px hacia arriba) - mostrar header
          setIsHeaderVisible(true)
        }
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <motion.header
      animate={{
        y: isHeaderVisible ? 0 : '-100%',
      }}
      transition={{
        duration: 0.3,
        ease: 'easeInOut'
      }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#d9d9d9]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group transition-transform group-hover:scale-105">
            <img
              src="/LOGO-MANU-negro.svg"
              alt="MANU Logo"
              className="h-10"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="/" 
              className="text-sm font-light text-black/70 hover:text-black transition-colors"
            >
              Inicio
            </Link>
            <Link 
              href="/funcionalidades" 
              className="text-sm font-light text-black/70 hover:text-black transition-colors"
            >
              Funcionalidades
            </Link>
            <Link 
              href="/quienes-somos" 
              className="text-sm font-light text-black/70 hover:text-black transition-colors"
            >
              Quiénes Somos
            </Link>
            <Link 
              href="/contacto" 
              className="text-sm font-light text-black/70 hover:text-black transition-colors"
            >
              Contacto
            </Link>
            <Link 
              href="/ayuda" 
              className="text-sm font-light text-black/70 hover:text-black transition-colors"
            >
              Ayuda
            </Link>
          </nav>

          {/* Login Button */}
          <Link 
            href="/portal" 
            className="px-6 py-2 text-sm font-light text-black border border-black/10 hover:border-black/30 hover:bg-black/5 transition-all"
          >
            Portal Web (Feb 2026)
          </Link>
        </div>
      </div>
    </motion.header>
  )
}
