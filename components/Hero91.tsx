import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface Hero91Props {
  className?: string;
}

const Hero91 = ({ className }: Hero91Props) => {
  return (
    <section
      className={cn(
        "flex min-h-screen items-center justify-between bg-background py-14",
        className,
      )}
    >
      <div className="flex flex-col gap-5 px-[10%] lg:w-[50%] lg:pr-0">
        <p className="font-light text-foreground uppercase tracking-widest text-sm">
          FACTURACIÓN + INVENTARIO EN TIEMPO REAL
        </p>
        <h1 className="text-5xl font-bold text-foreground md:text-6xl lg:text-7xl leading-[1.1]">
          Una simple foto a tus facturas es todo lo que necesitas.
        </h1>
        <p className="my-8 text-foreground/80 md:text-xl font-light leading-relaxed">
          Ahora con control de inventario integrado. Cada factura que escaneas actualiza tus existencias automáticamente. Sin hojas de cálculo, sin errores.
        </p>
        <div className="flex flex-col gap-4 font-medium md:flex-row">
          <Button className="h-fit items-center gap-1 rounded-full px-8 py-4 text-base">
            Comenzar gratis →
          </Button>
          <Button variant="secondary" className="h-fit rounded-full px-8 py-4 text-base">
            Ver cómo funciona
          </Button>
        </div>
      </div>
      <div className="w-full shrink-0 hidden lg:block lg:w-[45%]">
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
      </div>
    </section>
  );
};

export { Hero91 };
