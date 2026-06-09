import { PageLayout } from "@/components/PageLayout";

export default function Terminos() {
  return (
    <PageLayout>
      <div className="bg-[#101E35] min-h-screen text-white pt-16 md:pt-24 pb-24 px-6 lg:px-16 flex justify-center">
        <div className="max-w-4xl w-full animate-in fade-in slide-in-from-bottom-8 duration-700">
          
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="font-display text-3xl md:text-5xl tracking-[0.15em] font-bold mb-4 uppercase">
              Términos y Condiciones
            </h1>
            <p className="font-body text-xs md:text-sm tracking-widest text-white/40 uppercase">
              Última actualización: Junio 2026
            </p>
            <div className="w-16 h-[1.5px] bg-white/20 mx-auto mt-6" />
          </div>

          {/* Terms Card */}
          <div className="bg-[#1C3865] rounded-[24px] p-8 md:p-12 shadow-2xl border border-white/5 space-y-10 leading-relaxed font-body text-sm md:text-base text-white/80">
            
            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="font-display text-lg md:text-xl font-semibold text-white tracking-wider uppercase border-b border-white/10 pb-2">
                1. Aceptación de los Términos
              </h2>
              <p className="text-justify">
                Al acceder y utilizar este sitio web, usted acepta cumplir y estar sujeto a los siguientes Términos y Condiciones de uso. Si no está de acuerdo con alguna parte de estos términos, le solicitamos abstenerse de utilizar nuestro sitio.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="font-display text-lg md:text-xl font-semibold text-white tracking-wider uppercase border-b border-white/10 pb-2">
                2. Servicios Prestados
              </h2>
              <p className="text-justify">
                <strong>RAM Diseño Arquitectura</strong> ofrece servicios profesionales de diseño arquitectónico, interiorismo, gestión de proyectos, consultoría, desarrollo de especialidades y supervisión de obra. La información contenida en esta web tiene fines exclusivamente ilustrativos e informativos y no constituye un acuerdo contractual vinculante por sí sola.
              </p>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
              <h2 className="font-display text-lg md:text-xl font-semibold text-white tracking-wider uppercase border-b border-white/10 pb-2">
                3. Propiedad Intelectual
              </h2>
              <p className="text-justify">
                Todos los contenidos de este sitio, incluidos, entre otros, textos, fotografías, proyectos, renders, diseños, planos, logotipos e identidad de marca, son propiedad exclusiva de <strong>RAM Diseño Arquitectura</strong> y están protegidos por las leyes internacionales de derechos de autor y propiedad intelectual. Queda estrictamente prohibida la reproducción, distribución o uso comercial de cualquier material sin previa autorización escrita.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-4">
              <h2 className="font-display text-lg md:text-xl font-semibold text-white tracking-wider uppercase border-b border-white/10 pb-2">
                4. Limitación de Responsabilidad
              </h2>
              <p className="text-justify">
                Hacemos todo lo posible por asegurar que la información en este sitio web sea exacta y esté actualizada. Sin embargo, no garantizamos la ausencia total de errores tipográficos o técnicos. <strong>RAM Diseño Arquitectura</strong> no será responsable de ningún daño derivado del uso o la imposibilidad de uso de la plataforma.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-4">
              <h2 className="font-display text-lg md:text-xl font-semibold text-white tracking-wider uppercase border-b border-white/10 pb-2">
                5. Enlaces y Canales Externos
              </h2>
              <p className="text-justify">
                Este sitio incluye accesos directos a canales oficiales de comunicación externa, como WhatsApp. El uso de estos canales de comunicación está sujeto a los términos del proveedor externo. <strong>RAM Diseño Arquitectura</strong> vela por una interacción segura y profesional, pero no controla las políticas de dichas plataformas externas.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-4">
              <h2 className="font-display text-lg md:text-xl font-semibold text-white tracking-wider uppercase border-b border-white/10 pb-2">
                6. Ley Aplicable y Jurisdicción
              </h2>
              <p className="text-justify">
                Estos Términos y Condiciones se rigen e interpretan de acuerdo con las leyes vigentes de la República del Perú. Para cualquier controversia relacionada con el uso de este sitio web, las partes se someten a la competencia exclusiva de los tribunales de la ciudad de Lima, Perú.
              </p>
            </section>

          </div>

        </div>
      </div>
    </PageLayout>
  );
}
