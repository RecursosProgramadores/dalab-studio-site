import { useState } from "react";
import { Link } from "react-router-dom";
import { PageLayout } from "@/components/PageLayout";
import pruebaImg from "@/assets/prueba.png";

const servicesData = {
  diseño: [
    { id: "urb", title: "URBANISMO", desc: "Planificación y diseño de entornos urbanos sostenibles y funcionales que mejoran la calidad de vida en la ciudad." },
    { id: "arq", title: "ARQUITECTURA", desc: "Diseño conceptual y técnico de edificaciones con un enfoque en la estética, funcionalidad and habitabilidad." },
    { id: "int", title: "INTERIORES", desc: "Transformación de espacios internos mediante el uso de texturas, iluminación y materiales premium." },
    { id: "pai", title: "PAISAJISMO", desc: "Integración de la naturaleza y el diseño arquitectónico para crear espacios exteriores armoniosos y vivos." },
  ],
  construccion: [
    { id: "ger", title: "GERENCIA", desc: "Administración integral de recursos y procesos para garantizar que el proyecto cumpla con plazos y presupuestos." },
    { id: "eje", title: "EJECUCIÓN", desc: "Materialización de lo planificado bajo los más altos estándares de calidad y rigor normativo." },
  ]
};

const faqData: Record<string, { q: string; a: string }[]> = {
  arquitectura: [
    {
      q: "¿Qué documentos incluye el expediente de un proyecto arquitectónico completo?",
      a: "El expediente técnico definitivo contiene la planimetría completa de distribución conceptual y técnica, planos estructurales, memorias de cálculo, planos detallados de instalaciones sanitarias y eléctricas, y todos los formularios y firmas oficiales requeridos para tramitar y obtener la licencia de edificación municipal."
    },
    {
      q: "¿Cómo garantizan que el diseño final sea fiel a mis requerimientos?",
      a: "Llevamos a cabo un proceso interactivo sumamente visual apoyado en modelado digital tridimensional, moodboards y renders fotorrealistas de la más alta gama. Esto le permite experimentar espacialmente el proyecto, aprobar texturas, distribución e iluminación antes de iniciar la planimetría de obra."
    },
    {
      q: "¿El proyecto es apto si no planeo construir de manera inmediata?",
      a: "Sí, por supuesto. El expediente técnico final se entrega completamente cerrado y con validez legal. Funciona como un documento base de alta precisión que le servirá para obtener cotizaciones constructivas exactas de diferentes contratistas y programar la obra cuando lo considere oportuno."
    }
  ],
  urbanismo: [
    {
      q: "¿Cuánto tiempo toma desarrollar un estudio de planificación urbana?",
      a: "El plazo varía de acuerdo con la escala del terreno y la complejidad de las normativas de zonificación vigentes, pero usualmente toma entre 3 y 6 meses. Este periodo abarca el diagnóstico inicial del entorno, estudios de viabilidad catastral, diseño del plan maestro y la preparación de la carpeta técnica para el municipio."
    },
    {
      q: "¿Cómo se integran las normativas municipales en el diseño urbano?",
      a: "Efectuamos una auditoría inicial rigurosa de los parámetros urbanísticos oficiales de la municipalidad correspondiente. Calibramos cada área, sección vial, zonificación y distribución de usos de suelo para cumplir plenamente con la reglamentación, optimizando el potencial de desarrollo del suelo."
    },
    {
      q: "¿Qué nivel de detalle se incluye en los entregables de diseño urbano?",
      a: "Entregamos planos catastrales y de topografía, secciones viales detalladas con especificación de movilidad peatonal y vehicular, propuestas técnicas de áreas verdes, memorias descriptivas justificativas y simulaciones fotográficas en 3D del impacto del desarrollo en la ciudad."
    }
  ],
  paisajismo: [
    {
      q: "¿Qué criterios utilizan para seleccionar las especies vegetales de un proyecto?",
      a: "Priorizamos la sostenibilidad y la belleza natural seleccionando especies nativas o de alta adaptación climática que presenten un consumo hídrico eficiente. Esto asegura un crecimiento sano, un mantenimiento preventivo optimizado y que el jardín o terraza luzca vigoroso en todas las estaciones del año."
    },
    {
      q: "¿El diseño de paisajismo incluye sistemas de riego e iluminación?",
      a: "Sí, todos nuestros expedientes de paisajismo integran el diseño técnico completo de sistemas de riego automatizado por goteo o aspersión, así como una propuesta detallada de iluminación exterior escenográfica con luminarias LED de alta durabilidad y bajo consumo eléctrico."
    },
    {
      q: "¿Cómo dialoga el paisajismo con la arquitectura de la edificación?",
      a: "Concebimos las áreas exteriores como una prolongación natural y funcional de la arquitectura. Los ejes visuales, las texturas de los pavimentos, los recorridos peatonales y la distribución de las masas vegetales se diseñan en estricta coherencia con la geometría y materialidad de la edificación."
    }
  ],
  interiores: [
    {
      q: "¿Cómo se eligen los materiales y texturas para el interiorismo?",
      a: "Desarrollamos moodboards físicos y virtuales combinando muestras reales de maderas finas, piedras naturales, textiles y metales premium. Buscamos crear un equilibrio cromático y táctil sofisticado, garantizando que cada material cumpla con rigurosos estándares de resistencia al uso diario."
    },
    {
      q: "¿El servicio de diseño de interiores contempla mobiliario a medida?",
      a: "Sí, elaboramos planos detallados a escala milimétrica para la fabricación de carpintería fija y mobiliario a medida (cocinas, clósets, muebles de entretenimiento y piezas de autor). Especificamos tipos de tableros, herrajes de alta gama, acabados de pintura y detalles constructivos precisos."
    },
    {
      q: "¿Qué nivel de personalización se puede alcanzar en los acabados?",
      a: "El nivel de personalización es absoluto. Colaboramos de cerca con proveedores internacionales y artesanos especializados en metalistería, iluminación y textiles de lujo para diseñar soluciones exclusivas que reflejen fielmente el estilo de vida, confort y la identidad particular de cada cliente."
    }
  ],
  gerencia: [
    {
      q: "¿Cómo se controlan las desviaciones presupuestarias en obra?",
      a: "Implementamos auditorías de costos estrictas y reportes semanales comparativos que contrastan las valorizaciones de obra con los metrados reales ejecutados. Esto nos permite identificar oportunamente cualquier desviación en el presupuesto base y aplicar medidas correctivas de forma inmediata."
    },
    {
      q: "¿Qué funciones realiza el gerente de proyectos durante la fase constructiva?",
      a: "Se encarga de centralizar la comunicación entre el cliente y las contratas, supervisar la calidad de los procesos constructivos, validar el cumplimiento del cronograma Gantt, negociar adicionales y velar por que cada partida de obra cumpla rigurosamente con las especificaciones del proyecto arquitectónico."
    },
    {
      q: "¿Cómo garantizan que se cumplan las fechas de entrega acordadas?",
      a: "Aplicamos metodologías ágiles de planificación semanal ('Last Planner System') combinadas con software de control de ruta crítica. Identificamos potenciales retrasos de materiales o mano de obra con semanas de anticipación, asegurando la continuidad del flujo constructivo y el cumplimiento estricto del plazo de entrega."
    }
  ],
  ejecucion: [
    {
      q: "¿Cuáles son los estándares de calidad que aplican durante la construcción?",
      a: "Edificamos bajo los más estrictos estándares normativos de seguridad, resistencia estructural y control de calidad en acabados de alta gama. Contamos con ingenieros de campo permanentes en obra que auditan cada fase de vaciado, tabiquería, tarrajeo y colocación de recubrimientos finos."
    },
    {
      q: "¿Qué sucede si deseo realizar cambios al diseño durante la ejecución?",
      a: "Evaluamos inmediatamente la viabilidad técnica de la modificación y calculamos su impacto en el costo y en el plazo general de la obra. Tras coordinar y obtener su aprobación firmada, procedemos a actualizar los planos de obra y a ejecutar los cambios directamente en el terreno con total orden."
    },
    {
      q: "¿Ofrecen servicios de garantía o post-venta tras la entrega de la obra?",
      a: "Sí, al concluir el proyecto entregamos la carpeta formal con planos definitivos de obra ejecutada ('As-Built') y el manual de uso y conservación preventiva del inmueble. Asimismo, ofrecemos un servicio de garantía post-obra estructurado con visitas técnicas periódicas para asegurar el comportamiento óptimo de la edificación."
    }
  ]
};

function SplitSection({ 
  title, 
  leftData, 
  rightData, 
  inverted = false, 
  topItem = null 
}: { 
  title: string, 
  leftData: any[], 
  rightData: any[], 
  inverted?: boolean,
  topItem?: any 
}) {
  const [hovered, setHovered] = useState<any>(null);

  const leftBg = inverted ? "bg-black" : "bg-white";
  const rightBg = inverted ? "bg-white" : "bg-black";

  if (title === "SERVICIOS") {
    return (
      <div className="relative w-full border-t border-black/5">
        {/* Title Centered Top - Two Tone for Contrast */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-30 flex flex-nowrap">
          <h2 className="font-display font-extrabold text-xs md:text-sm tracking-[0.4em] uppercase whitespace-nowrap">
            <span className="text-black">SERVI</span>
            <span className="text-white">CIOS</span>
          </h2>
        </div>

        <div className="flex flex-col xl:flex-row h-auto relative overflow-hidden">
          
          {/* Left Half (DISEÑO) - White Background */}
          <div className="w-full xl:w-1/2 bg-white relative pt-20 pb-20 px-6 sm:px-10 flex flex-col justify-start items-center border-r border-black/5">
            <h3 className="font-display font-extrabold text-xs md:text-sm tracking-[0.4em] uppercase text-black mb-16 mt-4 text-center">
              DISEÑO
            </h3>
            
            {/* 4 Cards Grid - Single Row on Desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-5xl">
              {leftData.map((item) => (
                <Link 
                  key={item.id}
                  to={`/services/${item.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                  className="flex flex-col items-center justify-start text-center bg-transparent border-2 border-black/10 rounded-[2rem] px-5 py-12 min-h-[380px] md:min-h-[420px] transition-all duration-500 hover:-translate-y-2 hover:border-black/60 hover:bg-black/[0.01] hover:shadow-[0_15px_35px_rgba(0,0,0,0.06)] group cursor-pointer"
                >
                  <h4 
                    style={{ fontFamily: '"TT Norms", "Montserrat", sans-serif' }}
                    className="text-black text-base md:text-lg tracking-[0.2em] font-bold uppercase mb-8"
                  >
                    {item.title}
                  </h4>
                  
                  <p 
                    style={{ fontFamily: '"Bahnschrift", "Segoe UI", "Montserrat", sans-serif', fontWeight: 600 }}
                    className="text-black/70 text-[11px] md:text-[12px] leading-[2.2] font-semibold text-center"
                  >
                    {item.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Half (CONSTRUCCIÓN) - Black Background */}
          <div className="w-full xl:w-1/2 bg-black relative pt-20 pb-20 px-6 sm:px-10 flex flex-col justify-start items-center">
            <h3 className="font-display font-extrabold text-xs md:text-sm tracking-[0.4em] uppercase text-white mb-16 mt-4 text-center">
              CONSTRUCCIÓN
            </h3>
            
            {/* 2 Cards Grid - Single Row on Desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
              {rightData.map((item) => (
                <Link 
                  key={item.id}
                  to={`/services/${item.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                  className="flex flex-col items-center justify-start text-center bg-transparent border-2 border-white/10 rounded-[2rem] px-5 py-12 min-h-[380px] md:min-h-[420px] transition-all duration-500 hover:-translate-y-2 hover:border-white/60 hover:bg-white/[0.03] hover:shadow-[0_15px_35px_rgba(255,255,255,0.06)] group cursor-pointer"
                >
                  <h4 
                    style={{ fontFamily: '"TT Norms", "Montserrat", sans-serif' }}
                    className="text-white text-base md:text-lg tracking-[0.2em] font-bold uppercase mb-8"
                  >
                    {item.title}
                  </h4>
                  
                  <p 
                    style={{ fontFamily: '"Bahnschrift", "Segoe UI", "Montserrat", sans-serif', fontWeight: 600 }}
                    className="text-white/80 text-[11px] md:text-[12px] leading-[2.2] font-semibold text-center"
                  >
                    {item.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full border-t border-black/5">
      {/* Title Centered Top - Two Tone for Contrast */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-30 flex flex-nowrap">
        <h2 className="font-display font-extrabold text-xs md:text-sm tracking-[0.4em] uppercase whitespace-nowrap">
          {title === "SERVICIOS" ? (
            <>
              <span className="text-black">SERVI</span>
              <span className="text-white">CIOS</span>
            </>
          ) : (
            <>
              <span className="text-white">FLUJO DE</span>
              <span className="text-black tracking-[0.4em]"> TRABAJO</span>
            </>
          )}
        </h2>
      </div>

      <div className="flex flex-col md:flex-row h-auto md:h-[120vh] relative overflow-hidden">
        
        {/* Left Half */}
        <div className={`w-full md:w-1/2 min-h-[50vh] ${leftBg} relative p-12 md:p-24 flex flex-col justify-center transition-colors duration-500`}>
          <div className="relative z-20">
            {topItem && (
              <div 
                className="mb-16 group cursor-pointer"
                onMouseEnter={() => setHovered({ ...topItem, side: 'left' })}
                onMouseLeave={() => setHovered(null)}
              >
                <h3 className={`font-display text-lg md:text-xl tracking-[0.2em] mb-4 text-center md:text-left ${inverted ? 'text-white' : 'text-black'}`}>
                  {topItem.title}
                </h3>
              </div>
            )}
            
            <h4 className={`font-display text-[10px] tracking-[0.3em] mb-12 opacity-50 text-center md:text-left ${inverted ? 'text-white' : 'text-black'}`}>
              DISEÑO
            </h4>
            
            <div className="space-y-4 md:space-y-8 flex flex-col items-center md:items-start">
              {leftData.map((item) => (
                <div 
                  key={item.id} 
                  className="group cursor-pointer"
                  onMouseEnter={() => setHovered({ ...item, side: 'left' })}
                  onMouseLeave={() => setHovered(null)}
                >
                  <span className={`block font-display text-sm md:text-lg tracking-[0.15em] transition-all duration-300 group-hover:pl-4 ${inverted ? 'text-white/50 group-hover:text-white' : 'text-black/50 group-hover:text-black'}`}>
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Active Text Overlay for Left Side */}
          <div className={`absolute inset-0 z-21 pointer-events-none p-12 md:p-24 flex items-center justify-center transition-opacity duration-500 ${hovered?.side === 'left' ? 'opacity-100' : 'opacity-0'}`}>
            <div className={`max-w-md text-center ${inverted ? 'text-white' : 'text-black'}`}>
              <h3 className="font-display text-2xl md:text-3xl tracking-[0.2em] mb-8 uppercase">{hovered?.title}</h3>
              <p className="font-body text-sm md:text-base leading-relaxed opacity-80">{hovered?.desc}</p>
            </div>
          </div>

          {/* Image Overlay for when RIGHT side is hovered */}
          <div className={`absolute inset-0 z-10 transition-opacity duration-700 ${hovered?.side === 'right' ? 'opacity-100' : 'opacity-0'}`}>
             <img src={pruebaImg} alt="Reference" className="w-full h-full object-cover grayscale" />
             <div className={`absolute inset-0 ${inverted ? 'bg-black/40' : 'bg-white/20'}`} />
          </div>
        </div>

        {/* Right Half */}
        <div className={`w-full md:w-1/2 min-h-[50vh] ${rightBg} relative p-12 md:p-24 flex flex-col justify-center transition-colors duration-500`}>
          <div className="relative z-20">
            <h4 className={`font-display text-[10px] tracking-[0.3em] mb-12 opacity-50 text-center md:text-left ${!inverted ? 'text-white' : 'text-black'}`}>
              CONSTRUCCIÓN
            </h4>
            
            <div className="space-y-4 md:space-y-8 flex flex-col items-center md:items-start">
              {rightData.map((item) => (
                <div 
                  key={item.id} 
                  className="group cursor-pointer"
                  onMouseEnter={() => setHovered({ ...item, side: 'right' })}
                  onMouseLeave={() => setHovered(null)}
                >
                  <span className={`block font-display text-sm md:text-lg tracking-[0.15em] transition-all duration-300 group-hover:pl-4 ${!inverted ? 'text-white/50 group-hover:text-white' : 'text-black/50 group-hover:text-black'}`}>
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Active Text Overlay for Right Side */}
          <div className={`absolute inset-0 z-21 pointer-events-none p-12 md:p-24 flex items-center justify-center transition-opacity duration-500 ${hovered?.side === 'right' ? 'opacity-100' : 'opacity-0'}`}>
            <div className={`max-w-md text-center ${!inverted ? 'text-white' : 'text-black'}`}>
              <h3 className="font-display text-2xl md:text-3xl tracking-[0.2em] mb-8 uppercase">{hovered?.title}</h3>
              <p className="font-body text-sm md:text-base leading-relaxed opacity-80">{hovered?.desc}</p>
            </div>
          </div>

          {/* Image Overlay for when LEFT side is hovered */}
          <div className={`absolute inset-0 z-10 transition-opacity duration-700 ${hovered?.side === 'left' ? 'opacity-100' : 'opacity-0'}`}>
             <img src={pruebaImg} alt="Reference" className="w-full h-full object-cover grayscale" />
             <div className={`absolute inset-0 ${!inverted ? 'bg-black/40' : 'bg-white/20'}`} />
          </div>
        </div>

      </div>
    </div>
  );
}

function FaqSection() {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("arquitectura");
  const [openIndex, setOpenIndex] = useState<number | null>(0); // El primero abierto por defecto para coincidir con la referencia

  const specialties = [
    { id: "arquitectura", label: "ARQUITECTURA" },
    { id: "urbanismo", label: "URBANISMO" },
    { id: "paisajismo", label: "PAISAJISMO" },
    { id: "interiores", label: "INTERIORES" },
    { id: "gerencia", label: "GERENCIA" },
    { id: "ejecucion", label: "EJECUCIÓN" }
  ];

  const activeFaqs = faqData[selectedSpecialty] || [];

  return (
    <section className="w-full bg-[#FAFAFA] py-24 px-6 md:px-12 flex flex-col items-center border-t border-black/5">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
        {/* Title */}
        <h2 
          style={{ fontFamily: '"TT Norms", "Montserrat", sans-serif' }}
          className="text-[#111111] text-3xl md:text-4xl font-extrabold tracking-tight text-center mb-12 select-none"
        >
          Frequently asked questions
        </h2>

        {/* Dynamic Specialty Tabs Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 w-full">
          {specialties.map((spec) => (
            <button
              key={spec.id}
              onClick={() => {
                setSelectedSpecialty(spec.id);
                setOpenIndex(0); // Reiniciar al primer elemento abierto al cambiar de pestaña
              }}
              style={{ fontFamily: '"TT Norms", "Montserrat", sans-serif' }}
              className={`px-5 py-2.5 rounded-full text-[10px] md:text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-300 ${
                selectedSpecialty === spec.id
                  ? "bg-black text-white shadow-[0_5px_15px_rgba(0,0,0,0.15)] scale-105"
                  : "bg-white text-black/55 border border-black/10 hover:text-black hover:border-black/40 hover:bg-black/[0.01]"
              }`}
            >
              {spec.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List - Clean cards matching the image */}
        <div className="w-full flex flex-col gap-4">
          {activeFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-black/10 rounded-2xl p-6 md:p-8 transition-all duration-500 hover:shadow-[0_10px_25px_rgba(0,0,0,0.03)] hover:border-black/25 overflow-hidden group"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between text-left focus:outline-none select-none"
                >
                  <span
                    style={{ fontFamily: '"TT Norms", "Montserrat", sans-serif' }}
                    className="text-[#111111] text-sm md:text-base font-bold tracking-wide transition-colors duration-300 group-hover:text-black pr-4"
                  >
                    {faq.q}
                  </span>
                  
                  {/* Indicator Sign: Plus or Minus inside a hover circle */}
                  <span className="text-[#111111] text-lg font-bold select-none shrink-0 transition-transform duration-300 w-8 h-8 flex items-center justify-center rounded-full bg-black/5 group-hover:bg-black/10">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Accordion Body Panel */}
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-[300px] opacity-100 mt-5 pt-5 border-t border-black/5" : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <p
                    style={{ fontFamily: '"Bahnschrift", "Segoe UI", "Montserrat", sans-serif', fontWeight: 600 }}
                    className="text-black/70 text-[11px] md:text-[12px] leading-[2.2] font-semibold text-left"
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <PageLayout>
      <div className="flex flex-col w-full">
        <SplitSection 
          title="SERVICIOS"
          leftData={servicesData.diseño}
          rightData={servicesData.construccion}
          inverted={false}
        />
        
        <FaqSection />
      </div>
    </PageLayout>
  );
}
