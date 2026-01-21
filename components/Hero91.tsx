"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface Hero91Props {
  className?: string;
}

const Hero91 = ({ className }: Hero91Props) => {
  return (
    <section
      id="inicio"
      className={cn(
        "relative flex min-h-screen items-center justify-between bg-background py-14 overflow-hidden",
        className,
      )}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-neutral-50 animate-gradient-shift" />
      
      <div className="flex flex-col gap-5 px-[10%] lg:w-[50%] lg:pr-0 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0 }}
          className="font-light text-foreground uppercase tracking-widest text-sm"
        >
          FACTURACIÓN + INVENTARIO EN TIEMPO REAL
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl font-bold text-foreground md:text-6xl lg:text-7xl leading-[1.1]"
        >
          Una simple foto a tus facturas es todo lo que necesitas.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="my-8 text-foreground/80 md:text-xl font-light leading-relaxed"
        >
          Ahora con control de inventario integrado. Cada factura que escaneas actualiza tus existencias automáticamente. Sin hojas de cálculo, sin errores.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col gap-4 font-medium md:flex-row"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Button className="h-fit items-center gap-1 rounded-full px-8 py-4 text-base relative overflow-hidden group">
              <span className="relative z-10">Comenzar gratis →</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200" />
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Button variant="secondary" className="h-fit rounded-full px-8 py-4 text-base">
              Ver cómo funciona
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.2 }}
        className="w-full shrink-0 hidden lg:block lg:w-[45%] relative z-10"
      >
        <div className="relative mx-auto h-[27.5rem] w-full max-w-[36.5rem] overflow-hidden rounded-3xl bg-neutral-50 bg-cover bg-center bg-no-repeat sm:h-[39.5rem]">
          <div className="relative mx-auto mt-20 w-[12.5rem] sm:w-[18.75rem]">
            {/* App Screen Image - BEHIND */}
            <img
              src="/Manu-Dashboard-foto.png"
              alt="MANU App Dashboard"
              className="absolute top-0 left-0 w-full h-full object-cover object-top rounded-[50px] z-0"
            />
            {/* iPhone Frame - IN FRONT */}
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/hero108/iphone.png"
              alt="iPhone mockup"
              className="relative z-10 block w-full pointer-events-none"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export { Hero91 };
