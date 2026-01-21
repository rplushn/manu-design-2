import Link from 'next/link'
import { Footer15 } from '@/components/Footer15'

export const metadata = {
  title: 'Términos y Condiciones de Uso - MANU',
  description: 'Términos y condiciones de uso de MANU. Lee nuestros términos antes de usar la plataforma.',
}

export default function TermsPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link 
          href="/" 
          className="inline-flex items-center text-sm text-neutral-600 hover:text-black mb-8 transition-colors"
        >
          ← Volver al inicio
        </Link>

        <h1 className="text-4xl font-bold text-black mb-4">
          Términos y Condiciones de Uso
        </h1>
        <p className="text-sm text-neutral-500 mb-12">
          Última actualización: Enero 2026
        </p>

        <div className="prose prose-neutral max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">1. Aceptación de los Términos</h2>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              Los presentes Términos y Condiciones de Uso ("Términos") constituyen un acuerdo legal entre tú ("Usuario", "tú" o "tu") y Manu App Inc., con domicilio en Tegucigalpa, Honduras ("MANU", "nosotros", "nuestro" o "la Empresa").
            </p>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              Al acceder, descargar, instalar o utilizar la aplicación MANU ("el Servicio" o "la Aplicación"), ya sea a través de nuestro sitio web holamanu.com o cualquier plataforma móvil, aceptas estar legalmente vinculado por estos Términos. Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar el Servicio.
            </p>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              Estos Términos se aplican a todos los usuarios del Servicio, incluyendo visitantes, usuarios registrados y suscriptores. Nos reservamos el derecho de modificar estos términos en cualquier momento, y tu uso continuado del Servicio después de dichos cambios constituye tu aceptación de los términos modificados.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">2. Descripción del Servicio</h2>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              MANU es una plataforma de software como servicio (SaaS) diseñada para pequeñas y medianas empresas en Honduras, que proporciona herramientas integrales de gestión financiera y contable, incluyendo:
            </p>
            <ul className="list-disc list-inside text-base text-neutral-700 leading-relaxed mb-4 space-y-2 ml-4">
              <li><strong>Gestión de facturas:</strong> Escaneo y procesamiento de facturas mediante tecnología de reconocimiento óptico de caracteres (OCR)</li>
              <li><strong>Control de inventario:</strong> Gestión de existencias en tiempo real con actualización automática</li>
              <li><strong>Gestión de gastos:</strong> Registro, categorización y seguimiento de gastos empresariales</li>
              <li><strong>Reportes fiscales:</strong> Generación de reportes contables y fiscales conforme a las normativas hondureñas</li>
              <li><strong>Análisis financiero:</strong> Herramientas de análisis y visualización de datos financieros</li>
            </ul>
            <p className="text-base text-neutral-700 leading-relaxed mb-4 mt-4">
              Nos reservamos el derecho de modificar, suspender o discontinuar cualquier aspecto del Servicio en cualquier momento, con o sin previo aviso.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">3. Licencia de Uso</h2>
            <h3 className="text-xl font-medium text-black mb-3 mt-6">3.1 Licencia No Exclusiva y Personal</h3>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              Sujeto a tu cumplimiento de estos Términos, MANU te otorga una licencia limitada, no exclusiva, no transferible, revocable y personal para acceder y utilizar el Servicio únicamente para fines comerciales legítimos de tu negocio.
            </p>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              Esta licencia NO incluye:
            </p>
            <ul className="list-disc list-inside text-base text-neutral-700 leading-relaxed mb-4 space-y-2 ml-4">
              <li>El derecho de sublicenciar, vender, alquilar, arrendar o transferir el Servicio</li>
              <li>El derecho de realizar ingeniería inversa, descompilar o desensamblar el Servicio</li>
              <li>El derecho de modificar, adaptar o crear trabajos derivados del Servicio</li>
              <li>El derecho de utilizar el Servicio para competir con MANU o desarrollar productos similares</li>
            </ul>

            <h3 className="text-xl font-medium text-black mb-3 mt-6">3.2 Restricciones de Uso</h3>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              Debes utilizar el Servicio únicamente de acuerdo con estos Términos y todas las leyes y regulaciones aplicables. Cualquier uso no autorizado del Servicio puede resultar en la terminación inmediata de tu cuenta y posibles acciones legales.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">4. Registro y Cuenta de Usuario</h2>
            <h3 className="text-xl font-medium text-black mb-3 mt-6">4.1 Creación de Cuenta</h3>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              Para utilizar MANU, debes crear una cuenta proporcionando información precisa, actual y completa, incluyendo:
            </p>
            <ul className="list-disc list-inside text-base text-neutral-700 leading-relaxed mb-4 space-y-2 ml-4">
              <li>Un correo electrónico válido y verificado</li>
              <li>Una contraseña segura que cumpla con nuestros requisitos de seguridad</li>
              <li>Cualquier otra información requerida durante el proceso de registro</li>
            </ul>
            <p className="text-base text-neutral-700 leading-relaxed mb-4 mt-4">
              La autenticación se realiza mediante el sistema de email/password proporcionado por Supabase Auth. Eres responsable de mantener la confidencialidad de tus credenciales de acceso y de todas las actividades que ocurran bajo tu cuenta.
            </p>

            <h3 className="text-xl font-medium text-black mb-3 mt-6">4.2 Responsabilidad de la Cuenta</h3>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              Eres completamente responsable de:
            </p>
            <ul className="list-disc list-inside text-base text-neutral-700 leading-relaxed mb-4 space-y-2 ml-4">
              <li>Mantener la seguridad y confidencialidad de tu cuenta y contraseña</li>
              <li>Todas las actividades y transacciones realizadas bajo tu cuenta</li>
              <li>Notificarnos inmediatamente de cualquier uso no autorizado de tu cuenta o cualquier violación de seguridad</li>
              <li>Asegurar que toda la información proporcionada sea precisa y esté actualizada</li>
            </ul>
            <p className="text-base text-neutral-700 leading-relaxed mb-4 mt-4">
              MANU no será responsable de ninguna pérdida o daño que resulte de tu incumplimiento de mantener la seguridad de tu cuenta.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">5. Uso Aceptable</h2>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              Al utilizar MANU, aceptas que NO utilizarás el Servicio para:
            </p>
            <ul className="list-disc list-inside text-base text-neutral-700 leading-relaxed mb-4 space-y-2 ml-4">
              <li>Violar ninguna ley, regulación, ordenanza o norma aplicable en Honduras o en cualquier otra jurisdicción</li>
              <li>Infringir derechos de propiedad intelectual, privacidad o publicidad de terceros</li>
              <li>Transmitir, distribuir o almacenar material que contenga virus, malware, troyanos u otro código malicioso</li>
              <li>Intentar obtener acceso no autorizado a sistemas, redes, cuentas de otros usuarios o datos</li>
              <li>Realizar ingeniería inversa, descompilar, desensamblar o intentar extraer el código fuente del Servicio</li>
              <li>Usar el Servicio para actividades fraudulentas, ilegales o no autorizadas</li>
              <li>Interferir con, interrumpir o sobrecargar el funcionamiento del Servicio o servidores relacionados</li>
              <li>Recopilar información de otros usuarios sin su consentimiento explícito</li>
              <li>Utilizar bots, scripts automatizados o cualquier medio para acceder al Servicio de manera no autorizada</li>
              <li>Suplantar la identidad de otra persona o entidad</li>
            </ul>
            <p className="text-base text-neutral-700 leading-relaxed mb-4 mt-4">
              Nos reservamos el derecho de investigar y tomar las medidas legales apropiadas, incluyendo la suspensión o terminación inmediata de tu cuenta, si violas estos términos de uso aceptable.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">6. Responsabilidad del Usuario y Descargo de Responsabilidad Fiscal</h2>
            <h3 className="text-xl font-medium text-black mb-3 mt-6">6.1 MANU es una Herramienta</h3>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              <strong>IMPORTANTE:</strong> MANU es una herramienta de software diseñada para facilitar la gestión financiera y contable de tu negocio. MANU NO es un asesor fiscal, contable o legal, y NO proporciona asesoramiento profesional en estas áreas.
            </p>

            <h3 className="text-xl font-medium text-black mb-3 mt-6">6.2 Responsabilidad del Usuario por Declaraciones Fiscales y Financieras</h3>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              <strong>EL USUARIO ES ÚNICA Y EXCLUSIVAMENTE RESPONSABLE DE:</strong>
            </p>
            <ul className="list-disc list-inside text-base text-neutral-700 leading-relaxed mb-4 space-y-2 ml-4">
              <li>La precisión, veracidad y completitud de todos los datos ingresados en MANU</li>
              <li>La revisión y verificación de toda la información procesada, calculada o generada por el Servicio</li>
              <li>La preparación, presentación y cumplimiento de todas las declaraciones fiscales, reportes contables y obligaciones legales ante las autoridades hondureñas, incluyendo pero no limitado a:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Declaraciones ante el Servicio de Administración de Rentas (SAR)</li>
                  <li>Pago de impuestos y contribuciones</li>
                  <li>Cumplimiento de normativas contables y fiscales</li>
                  <li>Mantenimiento de registros y documentación requerida por ley</li>
                </ul>
              </li>
              <li>Consultar con contadores, asesores fiscales o abogados calificados antes de tomar decisiones importantes basadas en información del Servicio</li>
              <li>Mantener copias de seguridad de todos sus datos y documentos</li>
            </ul>

            <h3 className="text-xl font-medium text-black mb-3 mt-6">6.3 Descargo de Responsabilidad por Errores Fiscales</h3>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              <strong>MANU NO SERÁ RESPONSABLE, EN NINGÚN CASO, DE:</strong>
            </p>
            <ul className="list-disc list-inside text-base text-neutral-700 leading-relaxed mb-4 space-y-2 ml-4">
              <li>Errores, omisiones o inexactitudes en los datos ingresados por el usuario</li>
              <li>Errores en el procesamiento OCR que no sean detectados y corregidos por el usuario</li>
              <li>Decisiones fiscales, contables o comerciales tomadas por el usuario basadas en información del Servicio</li>
              <li>Multas, sanciones, intereses, penalizaciones o cualquier otra consecuencia derivada de:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Declaraciones fiscales incorrectas o tardías</li>
                  <li>Incumplimiento de obligaciones tributarias</li>
                  <li>Errores en cálculos fiscales o contables</li>
                  <li>Pérdida de datos o información</li>
                </ul>
              </li>
              <li>Daños financieros, pérdidas de beneficios o oportunidades comerciales resultantes del uso o mal uso del Servicio</li>
            </ul>
            <p className="text-base text-neutral-700 leading-relaxed mb-4 mt-4">
              El usuario reconoce y acepta que debe verificar independientemente toda la información generada por MANU y consultar con profesionales calificados antes de presentar declaraciones fiscales o tomar decisiones financieras importantes.
            </p>

            <h3 className="text-xl font-medium text-black mb-3 mt-6">6.4 Precisión de Datos y OCR</h3>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              Aunque nuestro sistema de reconocimiento óptico de caracteres (OCR) utiliza tecnología avanzada para extraer información de documentos, no garantizamos la exactitud absoluta del procesamiento. El usuario debe revisar y verificar manualmente toda la información extraída antes de utilizarla para fines fiscales, contables o legales.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">7. Planes y Pagos</h2>
            <h3 className="text-xl font-medium text-black mb-3 mt-6">7.1 Plan Gratuito (Nivel Actual)</h3>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              MANU ofrece actualmente un plan gratuito que proporciona acceso a funcionalidades básicas del Servicio. Este plan gratuito puede estar sujeto a limitaciones en:
            </p>
            <ul className="list-disc list-inside text-base text-neutral-700 leading-relaxed mb-4 space-y-2 ml-4">
              <li>Número de facturas procesadas por mes</li>
              <li>Volumen de datos almacenados</li>
              <li>Funcionalidades avanzadas disponibles</li>
              <li>Soporte al cliente</li>
            </ul>
            <p className="text-base text-neutral-700 leading-relaxed mb-4 mt-4">
              Nos reservamos el derecho de modificar, limitar, restringir o descontinuar el plan gratuito en cualquier momento, con o sin previo aviso.
            </p>

            <h3 className="text-xl font-medium text-black mb-3 mt-6">7.2 Planes de Pago (Futuro)</h3>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              Si en el futuro ofrecemos planes de suscripción de pago:
            </p>
            <ul className="list-disc list-inside text-base text-neutral-700 leading-relaxed mb-4 space-y-2 ml-4">
              <li><strong>Precios y facturación:</strong> Los precios, características y términos de facturación se especificarán claramente en el momento de la suscripción</li>
              <li><strong>Pagos automáticos:</strong> Los pagos se procesarán automáticamente según el ciclo de facturación seleccionado (mensual, trimestral o anual)</li>
              <li><strong>Renovación automática:</strong> Las suscripciones se renovarán automáticamente al final de cada período, a menos que canceles antes de la fecha de renovación</li>
              <li><strong>Cancelación:</strong> Puedes cancelar tu suscripción en cualquier momento desde la configuración de tu cuenta. La cancelación será efectiva al final del período de facturación actual</li>
              <li><strong>Reembolsos:</strong> No se realizarán reembolsos por períodos parciales de servicio, excepto cuando la ley lo requiera o a nuestra exclusiva discreción</li>
              <li><strong>Cambios de precio:</strong> Nos reservamos el derecho de modificar los precios con 30 días de aviso previo</li>
              <li><strong>Impuestos:</strong> Todos los precios están expresados en la moneda indicada y pueden estar sujetos a impuestos aplicables en Honduras</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">8. Propiedad Intelectual</h2>
            <h3 className="text-xl font-medium text-black mb-3 mt-6">8.1 Propiedad de MANU</h3>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              El Servicio, incluyendo pero no limitado a su código fuente, diseño, interfaz de usuario, gráficos, logotipos, marcas comerciales, textos, imágenes, audio, video, software y cualquier otro contenido, es propiedad exclusiva de MANU o sus licenciantes y está protegido por las leyes de derechos de autor, marcas registradas, patentes y otras leyes de propiedad intelectual de Honduras e internacionales.
            </p>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              <strong>NO puedes:</strong>
            </p>
            <ul className="list-disc list-inside text-base text-neutral-700 leading-relaxed mb-4 space-y-2 ml-4">
              <li>Copiar, reproducir, distribuir, transmitir, mostrar públicamente o crear trabajos derivados del Servicio</li>
              <li>Modificar, adaptar, traducir o realizar ingeniería inversa del Servicio</li>
              <li>Vender, alquilar, arrendar, sublicenciar o transferir cualquier derecho sobre el Servicio</li>
              <li>Utilizar marcas comerciales, nombres comerciales o logotipos de MANU sin nuestro consentimiento previo por escrito</li>
            </ul>

            <h3 className="text-xl font-medium text-black mb-3 mt-6">8.2 Contenido del Usuario</h3>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              Conservas todos los derechos de propiedad sobre los datos, información, documentos y contenido que subas, ingreses o crees en MANU ("Contenido del Usuario"). Al utilizar el Servicio, otorgas a MANU una licencia mundial, no exclusiva, libre de regalías, transferible y sublicenciable para usar, almacenar, procesar, reproducir y mostrar tu Contenido del Usuario únicamente para:
            </p>
            <ul className="list-disc list-inside text-base text-neutral-700 leading-relaxed mb-4 space-y-2 ml-4">
              <li>Proporcionar, mantener y mejorar el Servicio</li>
              <li>Procesar tus solicitudes y transacciones</li>
              <li>Cumplir con obligaciones legales</li>
            </ul>
            <p className="text-base text-neutral-700 leading-relaxed mb-4 mt-4">
              Eres responsable de asegurar que tienes todos los derechos necesarios sobre tu Contenido del Usuario y que no viola los derechos de terceros.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">9. Disponibilidad y Mantenimiento del Servicio</h2>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              Nos esforzamos por mantener el Servicio disponible las 24 horas del día, los 7 días de la semana. Sin embargo:
            </p>
            <ul className="list-disc list-inside text-base text-neutral-700 leading-relaxed mb-4 space-y-2 ml-4">
              <li>No garantizamos que el Servicio esté siempre disponible, ininterrumpido, libre de errores o completamente seguro</li>
              <li>Podemos realizar mantenimiento programado o no programado que resulte en interrupciones temporales del servicio</li>
              <li>Podemos modificar, suspender o discontinuar cualquier aspecto del Servicio en cualquier momento</li>
              <li>No seremos responsables por interrupciones del servicio, pérdida de datos o cualquier inconveniente resultante</li>
            </ul>
            <p className="text-base text-neutral-700 leading-relaxed mb-4 mt-4">
              Te recomendamos mantener copias de seguridad de tus datos importantes fuera del Servicio.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">10. Limitación de Responsabilidad</h2>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              <strong>EN LA MÁXIMA MEDIDA PERMITIDA POR LA LEY APLICABLE EN HONDURAS, MANU, SUS AFILIADOS, PROVEEDORES, LICENCIANTES Y SUS RESPECTIVOS DIRECTORES, OFICIALES, EMPLEADOS Y AGENTES NO SERÁN RESPONSABLES DE:</strong>
            </p>
            <ul className="list-disc list-inside text-base text-neutral-700 leading-relaxed mb-4 space-y-2 ml-4">
              <li>Daños indirectos, incidentales, especiales, consecuentes, punitivos o ejemplares</li>
              <li>Pérdida de beneficios, ingresos, datos, oportunidades comerciales, buena voluntad o reputación</li>
              <li>Errores en el procesamiento de documentos, cálculos o datos</li>
              <li>Decisiones comerciales, fiscales, contables o legales basadas en información del Servicio</li>
              <li>Interrupciones del servicio, pérdida de datos o fallos técnicos</li>
              <li>Costos de productos, servicios o información sustitutos</li>
              <li>Daños resultantes del uso o la imposibilidad de usar el Servicio</li>
            </ul>
            <p className="text-base text-neutral-700 leading-relaxed mb-4 mt-4">
              Nuestra responsabilidad total hacia ti por cualquier reclamo relacionado con el Servicio, independientemente de la teoría legal, no excederá el monto que hayas pagado a MANU en los últimos doce (12) meses anteriores al evento que dio lugar al reclamo, o cien dólares estadounidenses ($100 USD), lo que sea mayor.
            </p>
            <p className="text-base text-neutral-700 leading-relaxed mb-4 mt-4">
              Algunas jurisdicciones no permiten la exclusión o limitación de daños incidentales o consecuentes, por lo que las limitaciones anteriores pueden no aplicarse a ti en su totalidad.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">11. Renuncia de Garantías</h2>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              <strong>EL SERVICIO SE PROPORCIONA "TAL CUAL", "SEGÚN DISPONIBILIDAD" Y "CON TODAS SUS FALTAS" SIN GARANTÍAS DE NINGÚN TIPO, EXPRESAS O IMPLÍCITAS.</strong>
            </p>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              RENUNCIAMOS ESPECÍFICAMENTE A TODAS LAS GARANTÍAS, INCLUYENDO PERO NO LIMITADO A:
            </p>
            <ul className="list-disc list-inside text-base text-neutral-700 leading-relaxed mb-4 space-y-2 ml-4">
              <li>Garantías de comerciabilidad</li>
              <li>Garantías de idoneidad para un propósito particular</li>
              <li>Garantías de no violación</li>
              <li>Garantías de precisión, confiabilidad o disponibilidad continua</li>
              <li>Garantías de que el Servicio estará libre de errores, virus o componentes dañinos</li>
            </ul>
            <p className="text-base text-neutral-700 leading-relaxed mb-4 mt-4">
              El usuario reconoce que utiliza el Servicio bajo su propio riesgo y que es responsable de verificar la precisión de toda la información generada.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">12. Indemnización</h2>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              Aceptas indemnizar, defender y eximir de responsabilidad a MANU, sus afiliados, proveedores, licenciantes y sus respectivos directores, oficiales, empleados, agentes y representantes de y contra cualquier reclamo, demanda, pérdida, responsabilidad, daño, costo, gasto (incluidos los honorarios razonables de abogados) que surja de o esté relacionado con:
            </p>
            <ul className="list-disc list-inside text-base text-neutral-700 leading-relaxed mb-4 space-y-2 ml-4">
              <li>Tu uso o mal uso del Servicio</li>
              <li>Tu violación de estos Términos</li>
              <li>Tu violación de cualquier ley, regulación o derecho de terceros</li>
              <li>Tu Contenido del Usuario</li>
              <li>Cualquier declaración fiscal, contable o financiera que presentes basada en información del Servicio</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">13. Terminación</h2>
            <h3 className="text-xl font-medium text-black mb-3 mt-6">13.1 Terminación por el Usuario</h3>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              Puedes cancelar tu cuenta y dejar de utilizar el Servicio en cualquier momento desde la configuración de tu cuenta o contactándonos directamente en soporte@holamanu.com.
            </p>

            <h3 className="text-xl font-medium text-black mb-3 mt-6">13.2 Terminación por MANU</h3>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              Nos reservamos el derecho de suspender o terminar tu cuenta y acceso al Servicio inmediatamente, sin previo aviso, por cualquier motivo, incluyendo pero no limitado a:
            </p>
            <ul className="list-disc list-inside text-base text-neutral-700 leading-relaxed mb-4 space-y-2 ml-4">
              <li>Violación de estos Términos</li>
              <li>Uso fraudulento, ilegal o no autorizado del Servicio</li>
              <li>Incumplimiento de obligaciones de pago (si aplica)</li>
              <li>Inactividad prolongada de la cuenta</li>
              <li>Por razones legales o regulatorias</li>
            </ul>

            <h3 className="text-xl font-medium text-black mb-3 mt-6">13.3 Efectos de la Terminación</h3>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              Al terminar:
            </p>
            <ul className="list-disc list-inside text-base text-neutral-700 leading-relaxed mb-4 space-y-2 ml-4">
              <li>Tu derecho a usar el Servicio cesará inmediatamente</li>
              <li>Podemos eliminar o retener tus datos según lo permitido por la ley</li>
              <li>No tendrás derecho a reembolsos por períodos no utilizados</li>
              <li>Las disposiciones de estos Términos que por su naturaleza deban sobrevivir permanecerán en vigor</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">14. Ley Aplicable y Jurisdicción</h2>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              Estos Términos se regirán, interpretarán y aplicarán de acuerdo con las leyes de la República de Honduras, sin tener en cuenta sus disposiciones sobre conflictos de leyes.
            </p>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              Cualquier disputa, controversia o reclamo que surja de o esté relacionado con estos Términos o el Servicio será resuelto exclusivamente por los tribunales competentes de Tegucigalpa, Honduras. El usuario acepta someterse a la jurisdicción personal y exclusiva de dichos tribunales y renuncia a cualquier objeción a la jurisdicción o el lugar de dichos tribunales.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">15. Disposiciones Generales</h2>
            <h3 className="text-xl font-medium text-black mb-3 mt-6">15.1 Acuerdo Completo</h3>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              Estos Términos constituyen el acuerdo completo entre tú y MANU respecto al uso del Servicio y reemplazan todos los acuerdos, entendimientos o comunicaciones previos, ya sean escritos u orales.
            </p>

            <h3 className="text-xl font-medium text-black mb-3 mt-6">15.2 Modificaciones</h3>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              Nos reservamos el derecho de modificar estos Términos en cualquier momento. Te notificaremos sobre cambios significativos mediante:
            </p>
            <ul className="list-disc list-inside text-base text-neutral-700 leading-relaxed mb-4 space-y-2 ml-4">
              <li>Publicación de los términos actualizados en esta página</li>
              <li>Actualización de la fecha de "Última actualización"</li>
              <li>Notificación por correo electrónico para cambios materiales</li>
            </ul>
            <p className="text-base text-neutral-700 leading-relaxed mb-4 mt-4">
              Tu uso continuado del Servicio después de dichos cambios constituye tu aceptación de los términos modificados. Si no estás de acuerdo con los cambios, debes dejar de usar el Servicio y cancelar tu cuenta.
            </p>

            <h3 className="text-xl font-medium text-black mb-3 mt-6">15.3 Divisibilidad</h3>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              Si alguna disposición de estos Términos se considera inválida, ilegal o inaplicable, las disposiciones restantes permanecerán en pleno vigor y efecto.
            </p>

            <h3 className="text-xl font-medium text-black mb-3 mt-6">15.4 Renuncia</h3>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              El hecho de que MANU no ejerza o haga cumplir cualquier derecho o disposición de estos Términos no constituirá una renuncia a tal derecho o disposición.
            </p>

            <h3 className="text-xl font-medium text-black mb-3 mt-6">15.5 Cesión</h3>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              No puedes ceder, transferir o sublicenciar estos Términos o tus derechos bajo estos Términos sin nuestro consentimiento previo por escrito. MANU puede ceder estos Términos sin restricción.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">16. Contacto</h2>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              Si tienes preguntas, comentarios o inquietudes sobre estos Términos y Condiciones de Uso, puedes contactarnos en:
            </p>
            <div className="bg-neutral-50 p-6 rounded-lg mt-4">
              <p className="text-base text-neutral-700 mb-2">
                <strong>Manu App Inc.</strong>
              </p>
              <p className="text-base text-neutral-700 mb-2">
                <strong>Dirección:</strong> Tegucigalpa, Honduras
              </p>
              <p className="text-base text-neutral-700 mb-2">
                <strong>Email:</strong> <a href="mailto:soporte@holamanu.com" className="text-black underline">soporte@holamanu.com</a>
              </p>
              <p className="text-base text-neutral-700">
                <strong>Sitio web:</strong> <a href="https://holamanu.com" className="text-black underline">holamanu.com</a>
              </p>
            </div>
          </section>
        </div>
      </div>
      <Footer15 />
    </div>
  )
}
