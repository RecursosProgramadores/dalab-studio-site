import { PageLayout } from "@/components/PageLayout";

export default function Privacidad() {
  return (
    <PageLayout>
      <div className="bg-[#101E35] min-h-screen text-white pt-16 md:pt-24 pb-24 px-6 lg:px-16 flex justify-center">
        <div className="max-w-4xl w-full animate-in fade-in slide-in-from-bottom-8 duration-700">
          
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="font-display text-3xl md:text-5xl tracking-[0.15em] font-bold mb-4 uppercase">
              Política de Privacidad
            </h1>
            <p className="font-body text-xs md:text-sm tracking-widest text-white/40 uppercase">
              Última actualización: Junio 2026
            </p>
            <div className="w-16 h-[1.5px] bg-white/20 mx-auto mt-6" />
          </div>

          {/* Policy Card */}
          <div className="bg-[#1C3865] rounded-[24px] p-8 md:p-12 shadow-2xl border border-white/5 space-y-10 leading-relaxed font-body text-sm md:text-base text-white/80">
            
            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="font-display text-lg md:text-xl font-semibold text-white tracking-wider uppercase border-b border-white/10 pb-2">
                1. Introducción
              </h2>
              <p className="text-justify">
                En <strong>RAM Diseño Arquitectura</strong>, valoramos su privacidad y estamos comprometidos a proteger sus datos personales. Esta Política de Privacidad describe cómo recopilamos, utilizamos, almacenamos y protegemos la información que nos proporciona al utilizar nuestro sitio web y al interactuar con nuestros servicios.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="font-display text-lg md:text-xl font-semibold text-white tracking-wider uppercase border-b border-white/10 pb-2">
                2. Información que Recopilamos
              </h2>
              <p className="text-justify">
                Recopilamos información únicamente cuando es necesario para brindarle nuestros servicios o responder a sus consultas. La información que recopilamos incluye:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-left">
                <li>Datos de contacto directos: nombre, dirección de correo electrónico, número de teléfono (WhatsApp).</li>
                <li>Detalles sobre consultas de proyectos que comparta voluntariamente mediante nuestros canales de contacto.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
              <h2 className="font-display text-lg md:text-xl font-semibold text-white tracking-wider uppercase border-b border-white/10 pb-2">
                3. Uso de la Información
              </h2>
              <p className="text-justify">
                Utilizamos los datos recopilados con los siguientes propósitos:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-left">
                <li>Responder a sus solicitudes de información, cotizaciones o reuniones de trabajo.</li>
                <li>Gestionar nuestra relación profesional y comercial con usted.</li>
                <li>Enviar comunicaciones relevantes relacionadas con los proyectos contratados.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="space-y-4">
              <h2 className="font-display text-lg md:text-xl font-semibold text-white tracking-wider uppercase border-b border-white/10 pb-2">
                4. Seguridad y Protección de Datos
              </h2>
              <p className="text-justify">
                Implementamos medidas de seguridad técnicas y organizativas adecuadas para proteger sus datos personales contra el acceso no autorizado, alteración, divulgación o destrucción. No compartimos, vendemos ni cedemos sus datos a terceros, excepto cuando sea requerido por la ley aplicable.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-4">
              <h2 className="font-display text-lg md:text-xl font-semibold text-white tracking-wider uppercase border-b border-white/10 pb-2">
                5. Derechos del Usuario (ARCO)
              </h2>
              <p className="text-justify">
                Usted tiene derecho a acceder, rectificar, cancelar u oponerse al tratamiento de sus datos personales. Puede ejercer estos derechos en cualquier momento enviándonos una solicitud directamente a nuestro correo electrónico: <a href="mailto:grupoirema@gmail.com" className="text-white underline hover:text-white/80 transition-colors">grupoirema@gmail.com</a>.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-4">
              <h2 className="font-display text-lg md:text-xl font-semibold text-white tracking-wider uppercase border-b border-white/10 pb-2">
                6. Cambios en la Política de Privacidad
              </h2>
              <p className="text-justify">
                Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento. Cualquier cambio significativo será publicado en esta página con la fecha de actualización correspondiente.
              </p>
            </section>

          </div>

        </div>
      </div>
    </PageLayout>
  );
}
