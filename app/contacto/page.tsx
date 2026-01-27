import Footer15 from "@/components/Footer15"
import Link from "next/link"

export default function ContactoPage() {
  return (
    <>
      <section className="pt-20 pb-16 bg-gradient-to-b from-[#d9d9d9] via-[#d9d9d9] to-white">
          <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
            <div className="mt-[100px]">
              <span className="text-sm font-semibold tracking-[0.25em] text-neutral-500 uppercase">
                Contacto
              </span>
              <h1 className="mt-4 text-4xl md:text-5xl font-bold text-black">
                Hablemos de tu negocio.
              </h1>
              <p className="mt-4 text-lg text-neutral-600">
                Agenda una demo o escríbenos si quieres ver cómo MANU puede adaptarse a tu empresa.
              </p>

              <div className="mt-8 space-y-3 text-neutral-800">
                <p>
                  WhatsApp:{" "}
                  <Link
                    href="https://wa.me/50489502917"
                    className="underline underline-offset-4"
                    target="_blank"
                  >
                    +504 8950-2917
                  </Link>
                </p>
                <p>
                  Instagram:{" "}
                  <Link
                    href="https://instagram.com/holamanu_hn"
                    className="underline underline-offset-4"
                    target="_blank"
                  >
                    @holamanu_hn
                  </Link>
                </p>
                <p>Correo: soporte@holamanu.com</p>
              </div>
            </div>

            <div className="border border-neutral-200 p-6 bg-[#d9d9d9] mt-[100px]">
              <h2 className="text-lg font-semibold text-black mb-4">
                Solicitar una demo
              </h2>
              <p className="text-sm text-neutral-600 mb-6">
                Cuéntanos brevemente sobre tu negocio y te contactaremos para mostrarte MANU en acción.
              </p>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Nombre y negocio"
                  className="w-full border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-black"
                />
                <input
                  type="email"
                  placeholder="Correo"
                  className="w-full border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-black"
                />
                <textarea
                  placeholder="Cuéntanos qué necesitas"
                  className="w-full border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-black min-h-[96px]"
                />
                <button
                  type="submit"
                  className="w-full bg-black text-white text-sm py-2 hover:bg-neutral-900 transition-colors"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </section>

      <Footer15 />
    </>
  )
}
