import Link from 'next/link'
import { Footer15 } from '@/components/Footer15'

export const metadata = {
  title: 'Política de Privacidad - MANU',
  description: 'Política de privacidad de MANU. Conoce cómo protegemos y manejamos tus datos personales conforme a las leyes de Honduras.',
}

export default function PrivacyPolicyPage() {
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
          Política de Privacidad
        </h1>
        <p className="text-sm text-neutral-500 mb-12">
          Última actualización: Enero 2026
        </p>

        <div className="prose prose-neutral max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">1. Introducción</h2>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              Manu App Inc., con domicilio en Tegucigalpa, Honduras ("nosotros", "nuestro", "la Empresa" o "MANU"), se compromete a proteger y respetar tu privacidad conforme a las leyes de la República de Honduras, incluyendo la Ley de Protección de Datos Personales y demás normativas aplicables.
            </p>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              Esta Política de Privacidad describe cómo recopilamos, utilizamos, almacenamos, protegemos y divulgamos tu información personal cuando utilizas nuestra aplicación de gestión financiera MANU, que incluye servicios de facturación, control de inventario y gestión de gastos para pequeñas y medianas empresas.
            </p>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              Al utilizar MANU, aceptas las prácticas descritas en esta política. Si no estás de acuerdo con esta política, por favor no utilices nuestros servicios.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">2. Datos Recopilados</h2>
            <h3 className="text-xl font-medium text-black mb-3 mt-6">2.1 Información de Identificación Personal</h3>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              Recopilamos la siguiente información personal cuando creas una cuenta y utilizas MANU:
            </p>
            <ul className="list-disc list-inside text-base text-neutral-700 leading-relaxed mb-4 space-y-2 ml-4">
              <li><strong>Correo electrónico:</strong> Requerido para crear tu cuenta y autenticación mediante el sistema de email/password proporcionado por Supabase Auth</li>
              <li><strong>Contraseña:</strong> Almacenada de forma encriptada mediante hash seguro (bcrypt) y nunca accesible por nuestro personal</li>
              <li><strong>Información de perfil:</strong> Nombre, nombre de empresa, y cualquier otra información que elijas proporcionar voluntariamente</li>
            </ul>

            <h3 className="text-xl font-medium text-black mb-3 mt-6">2.2 Datos de Negocio y Financieros</h3>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              Para proporcionar nuestros servicios, recopilamos y almacenamos información relacionada con tu negocio:
            </p>
            <ul className="list-disc list-inside text-base text-neutral-700 leading-relaxed mb-4 space-y-2 ml-4">
              <li>Facturas, recibos y documentos fiscales escaneados o cargados</li>
              <li>Datos de inventario y productos</li>
              <li>Registros de gastos y transacciones comerciales</li>
              <li>Información contable y fiscal que ingreses en el sistema</li>
              <li>Datos de proveedores y clientes que registres</li>
              <li>Reportes y análisis generados por la aplicación</li>
            </ul>

            <h3 className="text-xl font-medium text-black mb-3 mt-6">2.3 Registros de Uso y Datos Técnicos</h3>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              Automáticamente recopilamos información técnica y de uso cuando accedes a MANU:
            </p>
            <ul className="list-disc list-inside text-base text-neutral-700 leading-relaxed mb-4 space-y-2 ml-4">
              <li>Dirección IP y ubicación geográfica aproximada</li>
              <li>Tipo de dispositivo, sistema operativo y navegador</li>
              <li>Registros de actividad y sesiones de usuario</li>
              <li>Cookies y tecnologías de seguimiento similares</li>
              <li>Errores y registros de rendimiento del sistema</li>
              <li>Patrones de uso y funcionalidades más utilizadas</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">3. Uso de Datos</h2>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              Utilizamos la información recopilada exclusivamente para los siguientes propósitos legítimos:
            </p>
            <ul className="list-disc list-inside text-base text-neutral-700 leading-relaxed mb-4 space-y-2 ml-4">
              <li><strong>Prestación del servicio:</strong> Procesar facturas, gestionar inventario, calcular gastos y generar reportes fiscales</li>
              <li><strong>Autenticación y seguridad:</strong> Verificar tu identidad mediante email/password a través de Supabase Auth y proteger tu cuenta contra accesos no autorizados</li>
              <li><strong>Mejora del servicio:</strong> Analizar patrones de uso para mejorar funcionalidades, corregir errores y optimizar el rendimiento</li>
              <li><strong>Soporte al cliente:</strong> Responder a tus consultas, resolver problemas técnicos y proporcionar asistencia</li>
              <li><strong>Facturación:</strong> En caso de planes de pago futuros, procesar pagos y gestionar suscripciones</li>
              <li><strong>Cumplimiento legal:</strong> Cumplir con obligaciones legales, fiscales y regulatorias aplicables en Honduras</li>
              <li><strong>Prevención de fraude:</strong> Detectar y prevenir actividades fraudulentas, abusivas o ilegales</li>
              <li><strong>Comunicaciones:</strong> Enviarte notificaciones importantes sobre tu cuenta, cambios en el servicio o actualizaciones legales</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">4. Almacenamiento y Seguridad</h2>
            <h3 className="text-xl font-medium text-black mb-3 mt-6">4.1 Almacenamiento en la Nube</h3>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              Todos tus datos personales y de negocio se almacenan de forma segura en Supabase, una plataforma de infraestructura en la nube que cumple con estándares internacionales de seguridad, incluyendo:
            </p>
            <ul className="list-disc list-inside text-base text-neutral-700 leading-relaxed mb-4 space-y-2 ml-4">
              <li>Encriptación de datos en tránsito mediante TLS/SSL</li>
              <li>Encriptación de datos en reposo (AES-256)</li>
              <li>Copias de seguridad automáticas y redundantes</li>
              <li>Cumplimiento con normativas de seguridad internacionales</li>
              <li>Monitoreo continuo de seguridad y detección de amenazas</li>
            </ul>

            <h3 className="text-xl font-medium text-black mb-3 mt-6">4.2 Medidas de Seguridad</h3>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger tu información:
            </p>
            <ul className="list-disc list-inside text-base text-neutral-700 leading-relaxed mb-4 space-y-2 ml-4">
              <li>Controles de acceso estrictos y autenticación de dos factores cuando esté disponible</li>
              <li>Monitoreo regular de sistemas y auditorías de seguridad</li>
              <li>Capacitación del personal en protección de datos</li>
              <li>Procedimientos de respuesta a incidentes de seguridad</li>
            </ul>
            <p className="text-base text-neutral-700 leading-relaxed mb-4 mt-4">
              A pesar de nuestros esfuerzos, ningún método de transmisión por Internet o almacenamiento electrónico es 100% seguro. No podemos garantizar la seguridad absoluta de tus datos, pero nos comprometemos a notificarte de cualquier violación de seguridad que pueda afectar tus datos personales.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">5. Compartir y Divulgación de Información</h2>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              <strong>No vendemos, alquilamos ni comercializamos tu información personal.</strong> Solo compartimos tus datos en las siguientes circunstancias limitadas:
            </p>
            <ul className="list-disc list-inside text-base text-neutral-700 leading-relaxed mb-4 space-y-2 ml-4">
              <li><strong>Proveedores de servicios:</strong> Con proveedores de confianza que nos ayudan a operar la plataforma, como Supabase (almacenamiento de datos y autenticación), que están contractualmente obligados a proteger tu información</li>
              <li><strong>Requisitos legales:</strong> Cuando sea requerido por ley, orden judicial, proceso legal o autoridades gubernamentales de Honduras</li>
              <li><strong>Protección de derechos:</strong> Para proteger nuestros derechos legales, propiedad, seguridad o la de nuestros usuarios</li>
              <li><strong>Con tu consentimiento:</strong> Cuando hayas dado tu consentimiento explícito para compartir información específica</li>
              <li><strong>Transferencias comerciales:</strong> En caso de fusión, adquisición o venta de activos, tus datos pueden transferirse como parte de la transacción, previa notificación</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">6. Derechos ARCO (Acceso, Rectificación, Cancelación y Oposición)</h2>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              Conforme a las leyes de protección de datos de Honduras, tienes los siguientes derechos sobre tus datos personales:
            </p>
            
            <h3 className="text-xl font-medium text-black mb-3 mt-6">6.1 Derecho de Acceso</h3>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              Tienes derecho a solicitar y obtener una copia de todos los datos personales que tenemos sobre ti, incluyendo información sobre cómo se procesan y utilizan tus datos.
            </p>

            <h3 className="text-xl font-medium text-black mb-3 mt-6">6.2 Derecho de Rectificación</h3>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              Puedes solicitar la corrección de cualquier información personal inexacta, incompleta o desactualizada. Puedes actualizar la mayoría de tu información directamente desde tu cuenta en MANU.
            </p>

            <h3 className="text-xl font-medium text-black mb-3 mt-6">6.3 Derecho de Cancelación (Eliminación)</h3>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              Tienes derecho a solicitar la eliminación de tus datos personales cuando:
            </p>
            <ul className="list-disc list-inside text-base text-neutral-700 leading-relaxed mb-4 space-y-2 ml-4">
              <li>Los datos ya no sean necesarios para los fines para los que fueron recopilados</li>
              <li>Retires tu consentimiento y no haya otra base legal para el procesamiento</li>
              <li>Los datos se hayan procesado de manera ilícita</li>
            </ul>
            <p className="text-base text-neutral-700 leading-relaxed mb-4 mt-4">
              Podemos conservar cierta información cuando la ley lo requiera o cuando tengamos intereses legítimos para hacerlo (por ejemplo, para cumplir con obligaciones fiscales).
            </p>

            <h3 className="text-xl font-medium text-black mb-3 mt-6">6.4 Derecho de Oposición</h3>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              Tienes derecho a oponerte al procesamiento de tus datos personales cuando:
            </p>
            <ul className="list-disc list-inside text-base text-neutral-700 leading-relaxed mb-4 space-y-2 ml-4">
              <li>El procesamiento se base en intereses legítimos y tengas razones para oponerte</li>
              <li>Los datos se utilicen para marketing directo</li>
              <li>El procesamiento se realice para fines de investigación científica o histórica</li>
            </ul>

            <h3 className="text-xl font-medium text-black mb-3 mt-6">6.5 Cómo Ejercer tus Derechos</h3>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              Para ejercer cualquiera de estos derechos ARCO, puedes:
            </p>
            <ul className="list-disc list-inside text-base text-neutral-700 leading-relaxed mb-4 space-y-2 ml-4">
              <li>Enviar una solicitud por correo electrónico a <a href="mailto:soporte@holamanu.com" className="text-black underline">soporte@holamanu.com</a></li>
              <li>Incluir en tu solicitud: tu nombre completo, correo electrónico asociado a la cuenta, y una descripción clara del derecho que deseas ejercer</li>
              <li>Responderemos a tu solicitud dentro de un plazo máximo de 30 días hábiles</li>
            </ul>
            <p className="text-base text-neutral-700 leading-relaxed mb-4 mt-4">
              Podemos solicitar información adicional para verificar tu identidad antes de procesar tu solicitud, con el fin de proteger tu privacidad y seguridad.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">7. Retención de Datos</h2>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              Conservamos tus datos personales durante el tiempo necesario para cumplir con los propósitos descritos en esta política, a menos que la ley de Honduras requiera o permita un período de retención más largo. Específicamente:
            </p>
            <ul className="list-disc list-inside text-base text-neutral-700 leading-relaxed mb-4 space-y-2 ml-4">
              <li>Datos de cuenta: Mientras tu cuenta esté activa y hasta 2 años después de su cierre</li>
              <li>Datos fiscales y contables: Según los requisitos legales de retención de documentos fiscales en Honduras (generalmente 5-7 años)</li>
              <li>Registros de transacciones: Durante el tiempo necesario para cumplir con obligaciones legales y fiscales</li>
            </ul>
            <p className="text-base text-neutral-700 leading-relaxed mb-4 mt-4">
              Cuando elimines tu cuenta, eliminaremos o anonimizaremos tus datos personales, excepto cuando la ley requiera que los conservemos para cumplir con obligaciones legales, resolver disputas o hacer cumplir nuestros acuerdos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">8. Transferencias Internacionales</h2>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              Tus datos pueden ser almacenados y procesados en servidores ubicados fuera de Honduras, específicamente a través de Supabase, que opera infraestructura en la nube. Al utilizar MANU, consientes esta transferencia. Nos aseguramos de que cualquier transferencia internacional de datos se realice con las salvaguardas adecuadas y conforme a las leyes aplicables.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">9. Menores de Edad</h2>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              MANU no está dirigido a menores de 18 años. No recopilamos intencionalmente información personal de menores. Si descubrimos que hemos recopilado información de un menor sin el consentimiento de sus padres o tutores, tomaremos medidas para eliminar esa información de nuestros servidores.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">10. Cookies y Tecnologías Similares</h2>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              Utilizamos cookies y tecnologías similares para mejorar tu experiencia, analizar el uso del servicio y personalizar contenido. Puedes controlar el uso de cookies a través de la configuración de tu navegador, aunque esto puede afectar la funcionalidad del servicio.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">11. Cambios a esta Política</h2>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              Podemos actualizar esta Política de Privacidad ocasionalmente para reflejar cambios en nuestras prácticas, servicios o requisitos legales. Te notificaremos sobre cambios significativos mediante:
            </p>
            <ul className="list-disc list-inside text-base text-neutral-700 leading-relaxed mb-4 space-y-2 ml-4">
              <li>Publicación de la política actualizada en esta página</li>
              <li>Actualización de la fecha de "Última actualización"</li>
              <li>Notificación por correo electrónico para cambios materiales</li>
            </ul>
            <p className="text-base text-neutral-700 leading-relaxed mb-4 mt-4">
              Te recomendamos revisar esta política periódicamente. Tu uso continuado del servicio después de los cambios constituye tu aceptación de la política revisada.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">12. Contacto y Reclamos</h2>
            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              Si tienes preguntas, inquietudes, solicitudes relacionadas con tus derechos ARCO, o deseas presentar un reclamo sobre el manejo de tus datos personales, puedes contactarnos en:
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
            <p className="text-base text-neutral-700 leading-relaxed mb-4 mt-4">
              Si no estás satisfecho con nuestra respuesta, tienes derecho a presentar una queja ante la autoridad de protección de datos competente en Honduras.
            </p>
          </section>
        </div>
      </div>
      <Footer15 />
    </div>
  )
}
