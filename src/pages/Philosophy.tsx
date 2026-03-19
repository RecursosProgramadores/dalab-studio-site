import { PageLayout } from "@/components/PageLayout";

export default function Philosophy() {
  return (
    <PageLayout>
      <div className="min-h-[80vh] flex items-center justify-center px-6 lg:px-24 py-24 bg-[#fdfdfd]">
        <div className="max-w-4xl text-center">
          
          <h1 className="font-serif font-medium text-2xl md:text-3xl tracking-[0.2em] text-[#111] uppercase mb-6">
            Nuestra filosofía
          </h1>
          
          <div className="w-12 h-[1px] bg-black/20 mx-auto mb-16" />

          <p className="font-sans text-[14px] md:text-[15px] lg:text-[16px] leading-[2.2] text-[#444] mb-8 max-w-2xl mx-auto text-justify sm:text-center">
            Cada persona que confía en nosotros merece que cumplamos con sus
            expectativas, es por eso que decidimos homenajearlos mediante un
            proyecto que lo refleje en cada detalle, manifestándose en un trabajo
            único y especial.
          </p>

          <p className="font-sans text-[14px] md:text-[15px] lg:text-[16px] leading-[2.2] text-[#444] max-w-2xl mx-auto text-justify sm:text-center">
            Para nosotros es importante que tanto el proceso como el resultado de
            nuestros proyectos satisfagan las demandas del cliente, por ello
            buscamos generar un entorno saludable para todos los involucrados,
            trabajando con empatía y altos estándares de calidad.
          </p>

        </div>
      </div>
    </PageLayout>
  );
}
