"use client";
import { motion } from "framer-motion"
import { Instagram, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";

const SOCIAL_LINKS = [
  {
    icon: Instagram,
    href: "https://instagram.com/holamanu_hn",
  },
  {
    icon: MessageCircle,
<<<<<<< HEAD
    href: "https://web.whatsapp.com/send?phone=50489502917",
=======
    href: "https://api.whatsapp.com/send?phone=50489502917",
>>>>>>> 8d17f8661785e322679613bbd7e132d25c4d1d8d
  },
];

const NAVIGATION = [
  {
    title: "Producto",
    links: [
      { name: "Inicio", href: "/" },
      { name: "Funcionalidades", href: "/funcionalidades" },
      { name: "Negocios", href: "/#precios" },
      { name: "Precios", href: "/#precios" },
    ],
  },
  {
    title: "Soporte",
    links: [
<<<<<<< HEAD
      { name: "Centro de Ayuda", href: "#" },
      { name: "Tutoriales", href: "#" },
=======
      { name: "Centro de Ayuda", href: "/ayuda" },
      { name: "Tutoriales", href: "/ayuda" },
>>>>>>> 8d17f8661785e322679613bbd7e132d25c4d1d8d
      { name: "Contacto", href: "mailto:soporte@holamanu.com" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Términos", href: "/terms" },
      { name: "Privacidad", href: "/privacy-policy" },
    ],
  },
];

interface Footer15Props {
  className?: string;
}

const Footer15 = ({ className }: Footer15Props) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className={cn("py-32 bg-black", className)}
    >
      <footer className="container mx-auto max-w-7xl px-6 flex flex-col gap-32">
        <div className="flex w-full flex-col justify-between gap-y-24 lg:flex-row">
          <div className="flex shrink-0 grow-0 basis-auto flex-col items-start justify-start gap-6">
            {/* Logo */}
            <a href="/">
              <img
                src="/LOGO-MANU-negro.svg"
                alt="MANU Logo"
                className="h-12 invert"
              />
            </a>
            <p className="w-full max-w-54 text-base leading-normal text-gray-300 md:text-lg">
              Software de facturación, inventario y control de gastos para PYMES en Honduras.
            </p>
            <div className="flex w-full items-center justify-start gap-7">
              {SOCIAL_LINKS.map((item, i) => (
                <a
                  href={item.href}
                  key={`social-link-${i}`}
                  className="flex size-6 opacity-100 transition-opacity hover:opacity-50 text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <item.icon className="m-auto size-full stroke-white" />
                </a>
              ))}
            </div>
            <div className="pt-6">
              <Badge className="rounded-none border-gray-700 bg-black p-0 text-white">
                <a href="#" className="flex items-center gap-2 px-3 py-2">
                  <div className="relative size-[0.4375rem]">
                    <span className="absolute top-1/2 left-1/2 z-10 size-[0.6875rem] -translate-1/2 animate-pulse rounded-full bg-green-400/50" />
                    <span className="absolute top-1/2 left-1/2 z-20 size-full -translate-1/2 rounded-full bg-green-500" />
                  </div>
                  <div className="text-[0.9375rem] leading-none font-normal">
                    MANU Online
                  </div>
                </a>
              </Badge>
            </div>
          </div>
          <div className="flex flex-col gap-24">
            <nav className="flex flex-wrap gap-24 md:gap-40">
              {NAVIGATION.map((section, _) => (
                <div
                  key={section.title}
                  className="flex flex-col items-start justify-start gap-4"
                >
                  <p className="mb-2 text-sm font-semibold text-white md:text-base">
                    {section.title}
                  </p>
                  {section.links.map((link, _) => {
                    const LinkComponent = (section.title === "Legal" || section.title === "Producto" || link.href.startsWith('/')) ? Link : "a";
                    const linkProps = { href: link.href };
                    return (
                      <LinkComponent
                        key={link.name}
                        {...linkProps}
                        className="text-sm leading-none font-medium text-gray-400 opacity-50 transition-opacity hover:opacity-100 hover:text-white"
                      >
                        {link.name}
                      </LinkComponent>
                    );
                  })}
                  {section.title === "Soporte" && (
                    <div className="mt-2 flex flex-col gap-2">
<<<<<<< HEAD
                      <div className="flex items-center gap-2 text-sm font-medium text-gray-400">
                        <Phone className="size-4" />
                        <a 
                          href="https://web.whatsapp.com/send?phone=50489502917" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-white transition-colors"
                        >
                          +504 8950-2917
                        </a>
                      </div>
                      <a 
                        href="mailto:soporte@holamanu.com" 
                        className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
                      >
                        soporte@holamanu.com
                      </a>
=======
                        <div className="flex items-center gap-2 text-sm font-medium text-gray-400">
                            <Phone className="size-4" />
                            <a href="https://api.whatsapp.com/send?phone=50489502917" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                                +504 8950-2917
                            </a>
                        </div>
                         <div className="flex items-center gap-2 text-sm font-medium text-gray-400">
                             <a href="mailto:soporte@holamanu.com" className="hover:text-white transition-colors">
                                 soporte@holamanu.com
                             </a>
                         </div>
>>>>>>> 8d17f8661785e322679613bbd7e132d25c4d1d8d
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-y-4 md:flex-row">
          <div className="text-sm font-medium text-gray-400">
            © 2026 MANU. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-gray-400">
            Hecho en Honduras 🇭🇳
          </div>
        </div>
      </footer>
    </motion.section>
  );
};

export { Footer15 };
export default Footer15;
