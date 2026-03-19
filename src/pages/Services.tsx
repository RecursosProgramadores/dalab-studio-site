import { PageLayout } from "@/components/PageLayout";

// Imports de imágenes
import imgArquitectura from "@/assets/servicio/ARQUITECTURAESPECIALIDADES.png";
import imgInteriorismo from "@/assets/servicio/INTERIORISMO.png";
import imgMobiliario from "@/assets/servicio/MOBILIARIO.png";
import imgGerencia from "@/assets/servicio/GERENCIASUPERVISION.png";
import imgEjecucion from "@/assets/servicio/EJECUCIONDEOBRA.png";

const services = [
  {
    category: "DISEÑO",
    title: "ARQUITECTURA + ESPECIALIDADES",
    image: imgArquitectura,
    text: "Es la etapa de diseño del proyecto elaborando la documentación técnica de arquitectura y especialidades (Expediente Técnico), con el objetivo de obtener la licencia de ediﬁcación correspondiente, ya sea una Obra Nueva, Ampliación, Remodelación, Demolición o Acondicionamiento.\n\nEsta documentación deﬁne el alcance del proyecto, justiﬁca los costos y plazos de duración de las etapas. Además permite que todos los involucrados en la construcción estén alineados.\n\nEn nuestra experiencia, este paso es fundamental para que el proyecto cumpla con la calidad deseada. Es imprescindible ponerle especial énfasis a esta fase del proceso, ya que es el momento en que se deﬁne todos los pormenores del proyecto, de manera clara y especíﬁca."
  },
  {
    category: "DISEÑO",
    title: "INTERIORISMO",
    image: imgInteriorismo,
    text: "Es el diseño de la distribución, mobiliario, acabados, complementos e iluminación de cada ambiente de manera que se conciba como un proyecto integral.\n\nNosotros lo realizamos conociendo al cliente y sus necesidades para elaborar una propuesta acorde a sus expectativas, entregando un modelo 3D, planos, moodboard, vistas y el presupuesto para la ejecución de obra.\n\nPara nosotros es clave entablar una relación muy cercana con nuestros clientes, de esta manera podemos conocerlos y reconocer su forma de pensar sobre ciertos puntos particularmente importantes para elaborar un diseño ideal, que se adapte a sus preferencias y satisfaga sus expectativas."
  },
  {
    category: "DISEÑO",
    title: "MOBILIARIO DISEÑO + FABRICACIÓN",
    image: imgMobiliario,
    text: "Es el diseño y fábrica de muebles a medida, para algún espacio en particular, tomando en cuenta el entorno y los requisitos estéticos y funcionales del cliente, aportando nuestra experiencia, conocimiento técnico y sensibilidad al proyecto.\n\nEn este aspecto somos pragmáticos, buscamos soluciones técnicamente simples para resolver problemas complejos, adaptando nuestras propuestas a cualquier estilo de diseño de interiores."
  },
  {
    category: "CONSTRUCCIÓN",
    title: "GERENCIA + SUPERVISIÓN",
    image: imgGerencia,
    text: "La gerencia de proyectos es la disciplina de organizar y administrar los recursos para lograr que un proyecto cumpla con sus objetivos de alcance, tiempo y costos. Mientras que la supervisión de obra es el monitoreo y control de los procesos para garantizar que se cumpla con las especiﬁcaciones del entregable.\n\nNosotros realizamos la supervisión y gerencia de proyectos tomando como guía el enfoque del PMBOK, siguiendo los cinco grupos de procesos: inicio, planiﬁcación, ejecución, control y monitoreo, y cierre; a través de las 10 áreas de conocimiento: integración, alcance, tiempo, costo, calidad, recursos, riesgos, comunicaciones, adquisiciones e interesados."
  },
  {
    category: "CONSTRUCCIÓN",
    title: "EJECUCIÓN DE OBRA",
    image: imgEjecucion,
    text: "La ejecución de obra es la parte del proyecto en la que se hace realidad lo planiﬁcado, siguiendo la metodología y protocolos establecidos.\n\nNosotros realizamos la ejecución de obra de construcción en modalidad llave en mano o por partidas, según sea el requerimiento del cliente, cumpliendo todos los protocolos normativos para el sector construcción, según RNE, ministerio de vivienda y municipalidad correspondiente.\n\nNuestra experiencia en este rubro nos ha permitido trabajar con el personal más capacitado y las mejores empresas del mercado, garantizando un proyecto con los más altos estándares de calidad en cada una de sus partidas. Nuestra trayectoria nos avala."
  }
];

export default function Services() {
  return (
    <PageLayout>
      <div className="bg-[#fdfdfd] min-h-screen text-[#111] pb-32">
        
        {/* Header Section */}
        <div className="pt-24 pb-16 px-6 lg:px-12 max-w-7xl mx-auto flex flex-col items-center">
          <div className="flex items-center w-full justify-center mb-16 opacity-40">
            <div className="h-[1px] flex-1 bg-black max-w-[50px] md:max-w-[150px]" />
            <h1 className="font-sans text-[10px] md:text-sm tracking-[0.3em] font-medium uppercase px-4 md:px-8 text-center text-[#1c3865]">
              Nuestros Servicios
            </h1>
            <div className="h-[1px] flex-1 bg-black max-w-[50px] md:max-w-[150px]" />
          </div>

          {/* Sub-header index */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32 w-full max-w-4xl text-center md:text-left mb-24 uppercase">
            <div className="flex flex-col items-center md:items-start">
              <h2 className="font-serif text-3xl md:text-4xl tracking-[0.1em] mb-6 md:mb-8 font-light text-[#1c3865]">DISEÑO</h2>
              <ul className="font-sans text-[10px] md:text-xs tracking-[0.2em] leading-[2.5] text-black/60 space-y-2">
                <li>ARQUITECTURA + ESPECIALIDADES</li>
                <li>INTERIORISMO</li>
                <li>MOBILIARIO</li>
              </ul>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h2 className="font-serif text-3xl md:text-4xl tracking-[0.1em] mb-6 md:mb-8 font-light text-[#1c3865]">CONSTRUCCIÓN</h2>
              <ul className="font-sans text-[10px] md:text-xs tracking-[0.2em] leading-[2.5] text-black/60 space-y-2">
                <li>GERENCIA + SUPERVISIÓN</li>
                <li>EJECUCIÓN DE OBRA</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Services List with Alternating Layout */}
        <div className="flex flex-col w-full">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={index} 
                className={`py-16 md:py-24 ${!isEven ? 'bg-[#f5f5f5]' : 'bg-[#fdfdfd]'}`}
              >
                <div className="px-6 lg:px-12 max-w-7xl mx-auto">
                  <div className={`grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-24 items-center`}>
                    
                    {/* Text Side */}
                    <div className={`flex flex-col order-2 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                      <span className="font-sans text-[10px] tracking-[0.4em] text-[#1c3865]/60 font-semibold uppercase mb-4">
                        {service.category}
                      </span>
                      <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-[0.05em] mb-8 font-light text-[#1c3865] leading-[1.2]">
                        {service.title}
                      </h3>
                      <div className="font-sans text-sm md:text-[15px] leading-relaxed text-black/70 space-y-6">
                        {service.text.split('\n\n').map((paragraph, pIdx) => (
                          <p key={pIdx} className="text-justify md:text-left">{paragraph}</p>
                        ))}
                      </div>
                    </div>

                    {/* Image Side */}
                    <div className={`order-1 ${isEven ? 'lg:order-2' : 'lg:order-1'} w-full h-full min-h-[400px] lg:min-h-[600px] relative overflow-hidden shadow-xl`}>
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </PageLayout>
  );
}
