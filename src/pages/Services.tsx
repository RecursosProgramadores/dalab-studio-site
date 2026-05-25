import { useState } from "react";
import { Link } from "react-router-dom";
import { PageLayout } from "@/components/PageLayout";
import pruebaImg from "@/assets/prueba.png";

// Importación de imágenes locales para el flujo de trabajo
import arquiImg from "@/assets/servicio/ARQUITECTURAESPECIALIDADES.png";
import ejecImg from "@/assets/servicio/EJECUCIONDEOBRA.png";
import gerenImg from "@/assets/servicio/GERENCIASUPERVISION.png";
import interiorImg from "@/assets/servicio/INTERIORISMO.png";
import vista2Img from "@/assets/images/proyecto1/vista2.png";
import vista3Img from "@/assets/images/proyecto1/vista3.png";

const servicesData = {
  diseño: [
    { id: "urb", title: "URBANISMO", desc: "Planificación y diseño de entornos urbanos sostenibles y funcionales que mejoran la calidad de vida en la ciudad." },
    { id: "arq", title: "ARQUITECTURA", desc: "Diseño conceptual y técnico de edificaciones con un enfoque en la estética, funcionalidad y habitabilidad." },
    { id: "int", title: "INTERIORES", desc: "Transformación de espacios internos mediante el uso de texturas, iluminación y materiales premium." },
    { id: "pai", title: "PAISAJISMO", desc: "Integración de la naturaleza y el diseño arquitectónico para crear espacios exteriores armoniosos y vivos." },
  ],
  construccion: [
    { id: "ger", title: "GERENCIA", desc: "Administración integral de recursos y procesos para garantizar que el proyecto cumpla con plazos y presupuestos." },
    { id: "eje", title: "EJECUCIÓN", desc: "Materialización de lo planificado bajo los más altos estándares de calidad y rigor normativo." },
  ]
};

const flowData = {
  contacto: { id: "con", title: "CONTACTO", desc: "Primer punto de encuentro para entender las necesidades y visión de nuestros clientes." },
  diseño: [
    { id: "san", title: "SANEAMIENTO", desc: "Gestión técnica y normativa inicial para la viabilidad del terreno o edificación." },
    { id: "pre", title: "PRE-ANTEPROYECTO", desc: "Exploración de ideas y esquemas básicos para definir el rumbo del diseño." },
    { id: "ant", title: "ANTEPROYECTO", desc: "Definición espacial y volumétrica de la propuesta arquitectónica." },
    { id: "pro", title: "PROYECTO", desc: "Detalle técnico completo y especializado para la obtención de licencias." },
    { id: "doc", title: "DOCUMENTOS DE OBRA", desc: "Expediente técnico final con todas las especificaciones para la construcción." },
  ],
  construccion: [
    { id: "pre-c", title: "PRESUPUESTO", desc: "Análisis detallado de costos para una ejecución financiera transparente y eficiente." },
    { id: "ini", title: "INICIO DE OBRA", desc: "Movilización y preparación del terreno para el comienzo de las actividades." },
    { id: "proc", title: "PROCESO CONSTRUCTIVO", desc: "Seguimiento riguroso de cada fase de edificación asegurando la calidad." },
    { id: "cie", title: "CIERRE DE OBRA", desc: "Finalización de acabados y entrega de la estructura terminada al cliente." },
    { id: "post", title: "POST-EJECUCIÓN", desc: "Servicio de seguimiento y garantía post-entrega para asegurar la satisfacción total." },
  ]
};

const serviceSteps = [
  {
    title: "SANEAMIENTO",
    description: "Evaluación legal y viabilidad técnica del terreno para garantizar la compatibilidad del proyecto con los parámetros urbanísticos locales y evitar contratiempos en los permisos.",
    image: vista2Img,
    processes: [
      "Diagnóstico legal y físico exhaustivo del predio.",
      "Búsqueda y análisis de antecedentes registrales en Sunarp.",
      "Estudio de parámetros urbanísticos y de edificación locales.",
      "Gestión de trámites para habilitaciones y saneamiento físico legal."
    ],
    deliverables: [
      "Certificado oficial de Parámetros Urbanísticos.",
      "Memoria descriptiva detallada del estado técnico del lote.",
      "Planos de localización, ubicación y levantamiento catastral.",
      "Expediente de saneamiento legal apto para iniciar el diseño."
    ]
  },
  {
    title: "PRE-ANTEPROYECTO",
    description: "Exploración y bocetado de ideas preliminares en estrecha colaboración con el cliente para definir la volumetría básica, las intenciones y el rumbo espacial del diseño.",
    image: pruebaImg,
    processes: [
      "Entrevistas personalizadas para el programa de necesidades.",
      "Análisis físico del sitio (asoleamiento, viento y topografía).",
      "Elaboración de primeros bocetos conceptuales a mano alzada.",
      "Definición esquemática de la zonificación de los espacios."
    ],
    deliverables: [
      "Moodboard conceptual de inspiración y propuesta material.",
      "Esquemas de flujos y distribución espacial de funciones.",
      "Maqueta volumétrica 3D inicial de la propuesta espacial.",
      "Portafolio conceptual del rumbo de diseño consensuado."
    ]
  },
  {
    title: "ANTEPROYECTO",
    description: "Desarrollo detallado del concepto espacial definitivo mediante renders tridimensionales y planos esquemáticos, concretando la distribución física del diseño.",
    image: vista3Img,
    processes: [
      "Desarrollo formal y proporcional de las fachadas y volúmenes.",
      "Diseño arquitectónico detallado de plantas de distribución.",
      "Modelado digital tridimensional del proyecto completo.",
      "Sesiones de revisión del diseño en renders y vistas 3D."
    ],
    deliverables: [
      "Planos generales (plantas, elevaciones principales y cortes).",
      "Modelado en 3D del proyecto a escala real.",
      "Renders fotorrealistas de alta calidad del interior y exterior.",
      "Carpeta digital interactiva con la propuesta final."
    ]
  },
  {
    title: "PROYECTO",
    description: "Elaboración minuciosa de toda la planimetría final y coordinación de especialidades (estructuras, instalaciones sanitarias y eléctricas) para obtención de licencias.",
    image: arquiImg,
    processes: [
      "Coordinación y desarrollo integral de ingenierías técnicas.",
      "Diseño de estructuras (cimentaciones, vigas y losas).",
      "Trazado de instalaciones sanitarias, eléctricas y mecánicas.",
      "Adecuación total del expediente técnico al Reglamento de Edificaciones."
    ],
    deliverables: [
      "Planimetría completa de arquitectura a escala constructiva.",
      "Planos de estructuras y memorias de cálculo detalladas.",
      "Planos de instalaciones sanitarias, eléctricas y especiales.",
      "Expediente técnico oficial y formularios para la licencia municipal."
    ]
  },
  {
    title: "DOCUMENTOS DE OBRA",
    description: "Compilación técnica final que reúne las especificaciones detalladas de los acabados, planos de detalle constructivo y metrados necesarios para cotizar y edificar.",
    image: interiorImg,
    processes: [
      "Diseño de detalles de carpintería, cerrajería e iluminación.",
      "Selección final de acabados finos y materiales de revestimiento.",
      "Cuantificación de metrados por partidas de obra (materiales y horas).",
      "Elaboración del cronograma de ejecución física y presupuesto base."
    ],
    deliverables: [
      "Planos de detalles constructivos, pisos, baños y cielos rasos.",
      "Catálogo descriptivo de acabados y fichas técnicas de materiales.",
      "Planillas completas de metrados de todas las especialidades.",
      "Presupuesto referencial final y cronograma Gantt para obra."
    ]
  },
  {
    title: "POST-EJECUCIÓN",
    description: "Auditoría final de acabados, entrega física de la obra, y plan de mantenimiento especializado continuo para asegurar la durabilidad y excelente estado del proyecto.",
    image: ejecImg,
    processes: [
      "Auditoría técnica rigurosa de control de calidad final.",
      "Pruebas de funcionamiento de todos los sistemas instalados.",
      "Levantamiento de detalles y entrega formal de llaves.",
      "Elaboración del manual de conservación y post-venta del inmueble."
    ],
    deliverables: [
      "Acta de entrega formal firmada por el cliente y constructor.",
      "Planos finales de obra ejecutada ('As-Built').",
      "Manual descriptivo de mantenimiento preventivo y de uso.",
      "Dossier de garantías técnicas y directorio de proveedores."
    ]
  }
];

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
  const [activeStepIndex, setActiveStepIndex] = useState<number | null>(null);

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

  if (title === "FLUJO DE TRABAJO") {
    return (
      <section className="w-full bg-white py-24 px-6 md:px-12 flex flex-col items-center border-t border-black/5 transition-all duration-500">
        <h2 className="font-display font-extrabold text-[#111111] text-xs md:text-sm tracking-[0.4em] uppercase text-center mb-16 select-none">
          FLUJO DE TRABAJO
        </h2>

        {activeStepIndex === null ? (
          /* Default View: 6-Card Row Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 w-full max-w-7xl mx-auto">
            {serviceSteps.map((step, index) => (
              <div 
                key={index}
                onClick={() => setActiveStepIndex(index)}
                className="flex flex-col items-center justify-start text-center bg-[#000000] rounded-[2rem] px-5 py-12 min-h-[440px] md:min-h-[480px] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)] group select-none animate-fade-in cursor-pointer border-2 border-transparent hover:border-white/10"
              >
                {/* Top: Step Title */}
                <h4 
                  style={{ fontFamily: '"TT Norms", "Montserrat", sans-serif' }}
                  className="text-white text-sm md:text-base tracking-[0.15em] font-bold uppercase mb-8 transition-transform duration-300 group-hover:scale-105"
                >
                  {step.title}
                </h4>
                
                {/* Middle: Step Description */}
                <p 
                  style={{ fontFamily: '"Bahnschrift", "Segoe UI", "Montserrat", sans-serif', fontWeight: 600 }}
                  className="text-white/80 text-[11px] md:text-[12px] leading-[2.2] font-semibold text-center"
                >
                  {step.description}
                </p>

                {/* Micro-interaction indicator at bottom */}
                <div className="mt-auto pt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1.5 text-white/50 text-[10px] tracking-[0.2em] uppercase font-bold">
                  VER MÁS <span className="text-xs">&rarr;</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Expanded Detail View: Dynamic Split Layout with Top Navigation */
          <div className="w-full max-w-7xl mx-auto flex flex-col gap-8 animate-fade-in">
            {/* Top Pill Navigation & Close Controls */}
            <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-4 border-b border-black/10 pb-6 w-full">
              <div className="flex flex-wrap gap-2 md:gap-3">
                {serviceSteps.map((step, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStepIndex(idx)}
                    style={{ fontFamily: '"TT Norms", "Montserrat", sans-serif' }}
                    className={`px-4 py-2 rounded-full text-[10px] md:text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-300 ${
                      activeStepIndex === idx
                        ? "bg-black text-white shadow-md scale-105"
                        : "bg-transparent text-black/50 border border-black/15 hover:text-black hover:border-black/50 hover:bg-black/[0.02]"
                    }`}
                  >
                    {step.title}
                  </button>
                ))}
              </div>

              {/* General Close Button */}
              <button
                onClick={() => setActiveStepIndex(null)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-black/10 hover:border-black text-black text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-black hover:text-white group select-none ml-auto"
              >
                <span>&larr;</span> VOLVER
              </button>
            </div>

            {/* Split layout block: Left Black Card, Right White Card */}
            <div className="flex flex-col lg:flex-row gap-6 items-stretch justify-center w-full min-h-[460px]">
              
              {/* Left Stage Container (Black Card Running Left) */}
              <div className="w-full lg:w-1/3 xl:w-1/4 bg-black text-white rounded-[2rem] px-6 py-12 flex flex-col justify-start items-center text-center shadow-[0_15px_35px_rgba(0,0,0,0.15)] relative select-none animate-fade-in border border-white/5">
                <h4 
                  style={{ fontFamily: '"TT Norms", "Montserrat", sans-serif' }}
                  className="text-white text-base md:text-lg tracking-[0.15em] font-bold uppercase mb-8"
                >
                  {serviceSteps[activeStepIndex].title}
                </h4>
                
                <p 
                  style={{ fontFamily: '"Bahnschrift", "Segoe UI", "Montserrat", sans-serif', fontWeight: 600 }}
                  className="text-white/80 text-[11px] md:text-[12px] leading-[2.2] font-semibold text-center mb-8"
                >
                  {serviceSteps[activeStepIndex].description}
                </p>

                {/* Inline Close Button for Quick Access */}
                <button
                  onClick={() => setActiveStepIndex(null)}
                  className="mt-auto py-2.5 px-6 rounded-full border border-white/20 hover:border-white text-white/70 hover:text-white text-[10px] tracking-[0.2em] font-bold uppercase transition-all duration-300 hover:bg-white/10"
                >
                  CERRAR SECCIÓN
                </button>
              </div>

              {/* Right Details Container (White Container with Processes, Deliverables, and Grayscale Image) */}
              <div className="w-full lg:w-2/3 xl:w-3/4 bg-white border-2 border-black/10 rounded-[2rem] p-6 sm:p-8 md:p-12 relative shadow-[0_15px_35px_rgba(0,0,0,0.06)] flex flex-col xl:flex-row gap-8 justify-between items-stretch animate-fade-in">
                
                {/* Close Button X in Top Right */}
                <button
                  onClick={() => setActiveStepIndex(null)}
                  className="absolute top-4 right-4 md:top-6 md:right-6 w-8 h-8 rounded-full flex items-center justify-center border border-black/10 hover:border-black text-black/50 hover:text-black text-sm transition-all duration-300 z-10 bg-white"
                >
                  &times;
                </button>

                {/* Processes and Deliverables Lists */}
                <div className="flex-1 flex flex-col sm:flex-row gap-8 md:gap-12 pr-0 xl:pr-4">
                  {/* Processes Column */}
                  <div className="flex-1 flex flex-col">
                    <h5 
                      style={{ fontFamily: '"TT Norms", "Montserrat", sans-serif' }}
                      className="text-[#5B84C4] text-xs md:text-sm tracking-[0.25em] font-extrabold uppercase mb-6"
                    >
                      PROCESOS
                    </h5>
                    <ul className="space-y-4 flex-1">
                      {serviceSteps[activeStepIndex].processes.map((proc, pIdx) => (
                        <li 
                          key={pIdx}
                          style={{ fontFamily: '"Bahnschrift", "Segoe UI", "Montserrat", sans-serif', fontWeight: 600 }}
                          className="text-black/75 text-[11px] md:text-[12px] leading-[2] font-semibold flex items-start text-left"
                        >
                          <span className="bg-[#5B84C4] w-1.5 h-1.5 rounded-full mt-2 mr-3 shrink-0" />
                          <span>{proc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables Column */}
                  <div className="flex-1 flex flex-col">
                    <h5 
                      style={{ fontFamily: '"TT Norms", "Montserrat", sans-serif' }}
                      className="text-[#5B84C4] text-xs md:text-sm tracking-[0.25em] font-extrabold uppercase mb-6"
                    >
                      ENTREGABLES
                    </h5>
                    <ul className="space-y-4 flex-1">
                      {serviceSteps[activeStepIndex].deliverables.map((deliv, dIdx) => (
                        <li 
                          key={dIdx}
                          style={{ fontFamily: '"Bahnschrift", "Segoe UI", "Montserrat", sans-serif', fontWeight: 600 }}
                          className="text-black/75 text-[11px] md:text-[12px] leading-[2] font-semibold flex items-start text-left"
                        >
                          <span className="bg-[#5B84C4] w-1.5 h-1.5 rounded-full mt-2 mr-3 shrink-0" />
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Visual Image Space */}
                <div className="w-full xl:w-[320px] min-h-[220px] md:min-h-[280px] rounded-2xl overflow-hidden relative border border-black/5 shadow-inner shrink-0 group/img">
                  <img
                    src={serviceSteps[activeStepIndex].image}
                    alt={serviceSteps[activeStepIndex].title}
                    className="w-full h-full object-cover grayscale group-hover/img:grayscale-0 transition-all duration-700 hover:scale-105"
                  />
                  {/* Subtle Premium Overlay */}
                  <div className="absolute inset-0 bg-black/5 group-hover/img:bg-black/0 transition-all duration-700 pointer-events-none" />
                </div>

              </div>

            </div>
          </div>
        )}
      </section>
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
        
        <SplitSection 
          title="FLUJO DE TRABAJO"
          leftData={flowData.diseño}
          rightData={flowData.construccion}
          topItem={flowData.contacto}
          inverted={true}
        />

        <FaqSection />
      </div>
    </PageLayout>
  );
}
