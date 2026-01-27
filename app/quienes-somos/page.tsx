import Footer15 from "@/components/Footer15"

export default function QuienesSomosPage() {
  return (
    <>
      <section className="pt-20 pb-16 bg-gradient-to-b from-[#d9d9d9] via-[#d9d9d9] to-white">
        <div className="max-w-4xl mx-auto px-6 mt-[100px]">
          <span className="text-sm font-semibold tracking-[0.25em] text-neutral-500 uppercase">
            Quiénes somos
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-black" style={{ fontSize: '44px' }}>
            Construimos MANU para las PYMES de Honduras.
          </h1>
          <p className="mt-4 text-lg text-neutral-600">
            Somos un equipo de producto y tecnología obsesionado con hacer la contabilidad diaria tan simple como tomar una foto.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div className="space-y-4 text-neutral-700">
            <h2 className="text-2xl font-semibold text-black">
              Nuestra misión
            </h2>
            <p>
              Ayudar a que los pequeños negocios tomen decisiones con datos reales,
              no con suposiciones, automatizando la captura de información de cada factura.
            </p>
            <p>
              Queremos que los emprendedores dediquen su tiempo a vender y crecer,
              no a pelearse con hojas de cálculo.
            </p>
          </div>
          <div className="space-y-4 text-neutral-700">
            <h2 className="text-2xl font-semibold text-black">
              Lo que creemos
            </h2>
            <ul className="space-y-2 list-disc pl-5">
              <li>El mejor software es el que no estorba y se siente natural.</li>
              <li>Los datos deben estar siempre claros, actualizados y a un tap de distancia.</li>
              <li>La contabilidad no tiene por qué ser complicada ni cara.</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer15 />
    </>
  )
}
