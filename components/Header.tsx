'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
    <>
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
          <Link href="/" className="flex items-center group transition-transform group-hover:scale-105 z-50">
            <img
              src="/LOGO-MANU-negro.svg"
              alt="MANU Logo"
              className="h-10"
            />
          </Link>

          {/* Desktop Navigation */}
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

          {/* Desktop Login Button */}
          <div className="hidden md:block">
            <Link 
              href="/portal" 
              className="px-6 py-2 text-sm font-light text-black border border-black/10 hover:border-black/30 hover:bg-black/5 transition-all"
            >
              Portal Web (Feb 2026)
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden z-50 p-2 -mr-2 text-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </motion.header>

    {/* Mobile Menu Overlay */}
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-40 bg-[#d9d9d9] pt-24 px-6 md:hidden"
        >
          <nav className="flex flex-col gap-6 text-center">
            <Link 
              href="/" 
              className="text-xl font-light text-black hover:text-neutral-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link 
              href="/funcionalidades" 
              className="text-xl font-light text-black hover:text-neutral-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Funcionalidades
            </Link>
            <Link 
              href="/quienes-somos" 
              className="text-xl font-light text-black hover:text-neutral-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Quiénes Somos
            </Link>
            <Link 
              href="/contacto" 
              className="text-xl font-light text-black hover:text-neutral-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contacto
            </Link>
            <Link 
              href="/ayuda" 
              className="text-xl font-light text-black hover:text-neutral-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Ayuda
            </Link>
            <Link 
              href="/portal" 
              className="mt-4 px-6 py-3 text-lg font-light text-black border border-black/20 rounded-none mx-auto inline-block hover:bg-black/5 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Portal Web (Feb 2026)
            </Link>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  )
}
