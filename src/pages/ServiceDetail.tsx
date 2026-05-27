import { useState, useEffect } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { PageLayout } from "@/components/PageLayout";
import { MoveLeft, MoveRight } from "lucide-react";

// Importación de imágenes locales
import arquiImg from "@/assets/servicio/ARQUITECTURAESPECIALIDADES.png";
import ejecImg from "@/assets/servicio/EJECUCIONDEOBRA.png";
import gerenImg from "@/assets/servicio/GERENCIASUPERVISION.png";
import interiorImg from "@/assets/servicio/INTERIORISMO.png";
import vista2Img from "@/assets/images/proyecto1/vista2.png";
import vista3Img from "@/assets/images/proyecto1/vista3.png";
import pruebaImg from "@/assets/prueba.png";

interface ServiceData {
  title: string;
  description: string;
  bgImage: string;
}

const servicesDataMap: Record<string, ServiceData> = {
  URBANISMO: {
    title: "URBANISMO",
    description: "Planificamos y estructuramos desarrollos urbanos de gran escala que responden a las dinámicas sociales y ambientales modernas. Nuestro enfoque integra el ordenamiento territorial, la movilidad sostenible y el diseño de espacios públicos vibrantes que promueven la interacción humana, garantizando que el crecimiento de la ciudad sea ordenado, ecológico y enfocado en elevar el bienestar de sus habitantes.",
    bgImage: vista2Img
  },
  ARQUITECTURA: {
    title: "ARQUITECTURA",
    description: "Concebimos la arquitectura como la unión perfecta entre el arte y la técnica. Desarrollamos anteproyectos y proyectos de edificación integrales, contemplando la coordinación técnica de especialidades y la resolución de licencias. Diseñamos espacios con una impronta estética sofisticada, alta funcionalidad y una estrecha relación con el entorno, materializando proyectos residenciales y comerciales exclusivos.",
    bgImage: arquiImg
  },
  INTERIORES: {
    title: "INTERIORES",
    description: "Diseñamos el interior de cada espacio con un enfoque en la personalización y el lujo atemporal. Seleccionamos materiales de primer nivel, diseñamos mobiliario a medida y estructuramos una iluminación escenográfica para esculpir ambientes cálidos, expresivos y sumamente funcionales. Transformamos la atmósfera interior para que refleje fielmente la identidad y el estilo de vida único de cada cliente.",
    bgImage: interiorImg
  },
  PAISAJISMO: {
    title: "PAISAJISMO",
    description: "Diseñamos espacios exteriores y jardines que dialogan armónicamente con la volumetría de la arquitectura. Integramos especies vegetales nativas, iluminación exterior sutil y elementos de agua para crear oasis naturales vivos y dinámicos. Nuestro trabajo paisajístico realza la belleza espacial del entorno, creando recorridos sensoriales únicos y propiciando un contacto directo y reconfortante con la naturaleza.",
    bgImage: vista3Img
  },
  GERENCIA: {
    title: "GERENCIA",
    description: "Llevamos a cabo la administración integral de recursos, contratistas y cronogramas con el máximo rigor profesional. Supervisamos cada fase técnica y coordinamos la comunicación entre los equipos para mitigar riesgos, asegurar la transparencia de los presupuestos y garantizar el cumplimiento estricto de los plazos de entrega, salvaguardando la inversión de nuestros clientes con honestidad y eficacia.",
    bgImage: gerenImg
  },
  EJECUCION: {
    title: "EJECUCIÓN",
    description: "Construimos cada proyecto llevando el diseño conceptual al terreno con total precisión y maestría técnica. Empleamos mano de obra altamente calificada, materiales de calidad superior y una supervisión constante en obra. Aseguramos el estricto cumplimiento de la normativa constructiva, logrando acabados impecables de alta gama y garantizando una edificación robusta, duradera y fiel al proyecto diseñado.",
    bgImage: ejecImg
  }
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

function WorkflowSection({ steps }: { steps: any[] }) {
  const [activeStepIndex, setActiveStepIndex] = useState<number | null>(null);

  // Resetea la sección al cambiar de especialidad/pestaña
  useEffect(() => {
    setActiveStepIndex(null);
  }, [steps]);

  return (
    <section className="w-full bg-white py-24 px-6 md:px-12 flex flex-col items-center border-t border-black/5 transition-all duration-500">
      <h2 className="font-display font-extrabold text-[#111111] text-xs md:text-sm tracking-[0.4em] uppercase text-center mb-16 select-none">
        ETAPAS DE LA ESPECIALIDAD
      </h2>

      {activeStepIndex === null ? (
        /* Default View: Clickable Grid Row centered based on length */
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ${steps.length === 4 ? "xl:grid-cols-4 max-w-5xl" : "xl:grid-cols-6 max-w-7xl"} gap-4 w-full mx-auto`}>
          {steps.map((step, index) => (
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
              {steps.map((step, idx) => (
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
                {steps[activeStepIndex].title}
              </h4>
              
              <p 
                style={{ fontFamily: '"Bahnschrift", "Segoe UI", "Montserrat", sans-serif', fontWeight: 600 }}
                className="text-white/80 text-[11px] md:text-[12px] leading-[2.2] font-semibold text-center mb-8"
              >
                {steps[activeStepIndex].description}
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
                    {steps[activeStepIndex].processes.map((proc, pIdx) => (
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
                    {steps[activeStepIndex].deliverables.map((deliv, dIdx) => (
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
                  src={steps[activeStepIndex].image}
                  alt={steps[activeStepIndex].title}
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

export default function ServiceDetail() {
  const { id } = useParams();

  if (!id) return <Navigate to="/services" replace />;

  // Normalizar el ID para buscarlo en el mapa (ej. "EJECUCIÓN" o "ejecucion" -> "EJECUCION")
  const normalizedId = id
    .toUpperCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  const service = servicesDataMap[normalizedId];

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Filtrado dinámico de las etapas:
  // - INTERIORES y PAISAJISMO: solo 4 etapas (Pre-Anteproyecto, Anteproyecto, Proyecto, Documentos de Obra)
  // - ARQUITECTURA, URBANISMO, GERENCIA, EJECUCIÓN: las 6 etapas completas
  const isFourStepSpecialty = ["INTERIORES", "PAISAJISMO"].includes(normalizedId);
  const activeSteps = isFourStepSpecialty
    ? serviceSteps.filter((step) =>
        ["PRE-ANTEPROYECTO", "ANTEPROYECTO", "PROYECTO", "DOCUMENTOS DE OBRA"].includes(step.title)
      )
    : serviceSteps;

  return (
    <PageLayout>
      <div className="flex flex-col w-full bg-white">
        
        {/* LADO DE PORTADA: Hero Landing Section (100vh) */}
        <div className="relative w-full h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] lg:h-[calc(100vh-7rem)] bg-neutral-950 overflow-hidden">
          
          {/* Full-screen Background Image with Grayscale & Dark Overlay */}
          <div className="absolute inset-0">
            <img 
              src={service.bgImage} 
              alt={service.title} 
              className="w-full h-full object-cover grayscale opacity-45"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          {/* Back Link Button */}
          <Link 
            to="/services" 
            className="pointer-events-auto absolute top-8 left-6 md:top-12 md:left-12 z-30 flex items-center gap-2.5 text-white/50 hover:text-white transition-all duration-300 tracking-[0.25em] text-xs font-semibold uppercase group hover:-translate-x-1"
          >
            <span className="text-base transition-transform group-hover:-translate-x-0.5">&larr;</span> VOLVER
          </Link>

          {/* Bottom Left Content Container */}
          <div className="relative z-10 w-full h-full flex flex-col items-start justify-end text-left px-6 sm:px-12 md:px-20 lg:px-28 pb-12 sm:pb-20 md:pb-24 lg:pb-28 pointer-events-none select-none">
            <div className="flex flex-col items-start max-w-4xl animate-fade-in">
              {/* TEXTO 1 with TT NORMS Typography */}
              <h1 
                style={{ fontFamily: '"TT Norms", "Montserrat", sans-serif' }}
                className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[0.2em] uppercase leading-none mb-1 text-shadow-md"
              >
                {service.title}
              </h1>
              <span 
                style={{ fontFamily: '"TT Norms", "Montserrat", sans-serif' }}
                className="text-white/60 text-xs sm:text-sm md:text-base tracking-[0.3em] uppercase font-light block mb-8 sm:mb-10"
              >
                (tipografía TT NORMS)
              </span>

              {/* TEXTO 2 with Bahnschrift SemiBold Typography */}
              <p 
                style={{ fontFamily: '"Bahnschrift", "Segoe UI", "Montserrat", sans-serif', fontWeight: 600 }}
                className="text-white/90 text-[13px] sm:text-base md:text-lg lg:text-xl tracking-wide max-w-3xl leading-relaxed mb-2"
              >
                {service.description}
              </p>
              <span 
                style={{ fontFamily: '"Bahnschrift", "Segoe UI", "Montserrat", sans-serif', fontWeight: 600 }}
                className="text-white/55 text-xs sm:text-sm md:text-base tracking-[0.2em] uppercase block"
              >
                (tipografía Bahnschrift SemiBol)
              </span>
            </div>
          </div>

        </div>

        {/* SECCIÓN DE ETAPAS / FLUJO DE TRABAJO (Scrolling below hero) */}
        <WorkflowSection steps={activeSteps} />

      </div>
    </PageLayout>
  );
}
