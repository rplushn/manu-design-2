'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md border-b border-black/5 shadow-sm' 
          : 'bg-transparent'
      }`}
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
    </header>
  )
}
