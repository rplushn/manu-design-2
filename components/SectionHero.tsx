"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionHeroProps {
  label?: string
  title: string
  subtitle?: string
  children?: React.ReactNode
  className?: string
}

export function SectionHero({ 
  label, 
  title, 
  subtitle, 
  children,
  className 
}: SectionHeroProps) {
  return (
    <section
      className={cn(
        "relative flex min-h-screen items-center justify-between py-14 overflow-hidden bg-gradient-to-b from-[#d9d9d9] via-[#d9d9d9] to-white",
        className,
      )}
    >
      <div className="container max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 px-6 lg:px-12 relative z-10">
        <div className="flex flex-col gap-5 lg:w-[50%] lg:pr-8">
          {label && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              className="font-light text-gray-900 uppercase tracking-widest text-sm"
            >
              {label}
            </motion.p>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl font-bold text-gray-900 md:text-6xl lg:text-7xl leading-[1.1]"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="my-8 text-gray-700 md:text-xl font-light leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
        {children && (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.2 }}
            className="w-full shrink-0 hidden lg:block lg:w-[45%]"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  )
}
