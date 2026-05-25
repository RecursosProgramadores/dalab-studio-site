import { useParams, Navigate, Link } from "react-router-dom";
import { PageLayout } from "@/components/PageLayout";

// Importación de imágenes locales
import arquiImg from "@/assets/servicio/ARQUITECTURAESPECIALIDADES.png";
import ejecImg from "@/assets/servicio/EJECUCIONDEOBRA.png";
import gerenImg from "@/assets/servicio/GERENCIASUPERVISION.png";
import interiorImg from "@/assets/servicio/INTERIORISMO.png";
import vista2Img from "@/assets/images/proyecto1/vista2.png";
import vista3Img from "@/assets/images/proyecto1/vista3.png";

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

  return (
    <PageLayout>
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
    </PageLayout>
  );
}
