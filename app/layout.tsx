import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Header } from "@/components/Header"
import { WhatsAppButton } from "@/components/WhatsAppButton"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "MANU - Gastos y Facturas Simplificados para Honduras",
  description:
    "Una simple foto a tus facturas es todo lo que necesitas. Gestiona tu negocio y contabilidad desde tu celular.",
  keywords: ["gastos", "facturas", "Honduras", "RTN", "Lempiras", "contabilidad", "PYME"],
  authors: [{ name: "MANU" }],
  openGraph: {
    title: "MANU - Gastos y Facturas Simplificados",
    description: "Una simple foto a tus facturas es todo lo que necesitas.",
    type: "website",
    locale: "es_HN",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
