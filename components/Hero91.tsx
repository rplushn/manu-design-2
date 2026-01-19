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
        <h1 className="text-5xl font-semibold text-foreground md:text-6xl lg:text-7xl leading-[1.1]">
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
      <div className="relative hidden h-[720px] w-[45%] overflow-hidden rounded-l-full bg-black lg:block">
        <video
          autoPlay
          loop
          muted
          playsInline
          data-wf-ignore="true"
          data-object-fit="cover"
          className="h-full w-full rounded-tl-xl object-cover"
        >
          <source src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/video-1.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export { Hero91 };
