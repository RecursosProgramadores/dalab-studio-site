import { Link, useParams, Navigate } from "react-router-dom";
import { PageLayout } from "@/components/PageLayout";
import vista1Img from "@/assets/images/proyecto1/vista1.png";
import vista2Img from "@/assets/images/proyecto1/vista2.png";
import vista3Img from "@/assets/images/proyecto1/vista3.png";

// Interface and export of research data so that it can be imported by the detail page
export interface StudyItem {
  slug: string;
  title: string;
  category: string;
  location: string;
  covers: string[];
  views: string[];
  description: string[];
  details: { label: string; value: string }[];
}

export interface CategoryData {
  title: string;
  introduction: string;
  studies: StudyItem[];
}

export const RESEARCH_CATEGORIES_DATA: Record<string, CategoryData> = {
  "teoria-diseno": {
    title: "Teoría y Diseño",
    introduction: "Exploramos los cimientos conceptuales y paradigmas espaciales de la arquitectura.",
    studies: [
      {
        slug: "proporcion-aurea",
        title: "PROPORCIÓN ÁUREA Y GEOMETRÍA SAGRADA",
        category: "Teoría y Diseño",
        location: "RAM LAB",
        covers: [vista1Img, vista2Img, vista3Img],
        views: [vista1Img, vista2Img, vista3Img],
        description: [
          "Este estudio aborda la aplicación contemporánea de la proporción áurea y la geometría sagrada en el diseño residencial de alta gama. A través del análisis matemático de proyectos históricos y modernos, desarrollamos un marco de diseño digital que optimiza la armonía visual y la coherencia espacial de las distribuciones contemporáneas.",
          "Mediante algoritmos generativos de diseño paramétrico, calibramos las proporciones de fachadas, vanos e interiores para alcanzar un equilibrio áureo integral, logrando que el habitante experimente una sensación innata de confort físico y orden mental en el espacio cotidiano."
        ],
        details: [
          { label: "Año", value: "2025" },
          { label: "Área", value: "Teoría y Diseño" },
          { label: "Metodología", value: "Análisis Paramétrico, Algoritmos Áureos" },
          { label: "Investigador Principal", value: "RAM Diseño Arquitectura" },
          { label: "Estatus", value: "Publicado" },
          { label: "Colaboración", value: "Universidad Nacional de Ingeniería" }
        ]
      },
      {
        slug: "espacio-postmoderno",
        title: "PARADIGMAS DEL ESPACIO POST-MODERNO",
        category: "Teoría y Diseño",
        location: "RAM LAB",
        covers: [vista2Img, vista3Img, vista1Img],
        views: [vista2Img, vista3Img, vista1Img],
        description: [
          "Exploramos las transiciones y mutaciones de la percepción espacial en la era digital y post-moderna. Este análisis teórico cuestiona los límites tradicionales establecidos entre lo público y lo privado, lo interior y lo exterior.",
          "El estudio propone una arquitectura fluida y adaptativa con elementos móviles que responden de forma instantánea a las nuevas formas de vida híbrida, teletrabajo y bienestar en el siglo XXI."
        ],
        details: [
          { label: "Año", value: "2024" },
          { label: "Área", value: "Teoría y Diseño" },
          { label: "Metodología", value: "Fenomenología Espacial, Análisis Sociológico" },
          { label: "Investigador Principal", value: "RAM Diseño Arquitectura" },
          { label: "Estatus", value: "Publicado" },
          { label: "Colaboración", value: "RAM Studio Barcelona" }
        ]
      },
      {
        slug: "sociologia-vivienda",
        title: "SOCIOLOGÍA EN LA VIVIENDA EXCLUSIVA",
        category: "Teoría y Diseño",
        location: "RAM LAB",
        covers: [vista3Img, vista1Img, vista2Img],
        views: [vista3Img, vista1Img, vista2Img],
        description: [
          "Investigamos la relación intrínseca existente entre la distribución espacial residencial y el bienestar psicológico en la vivienda premium moderna.",
          "Evaluamos el impacto directo de factores biofílicos como la luz cenital natural, los techos a doble altura y la absorción acústica de materiales selectos en el comportamiento, la reducción del estrés y las dinámicas familiares contemporáneas."
        ],
        details: [
          { label: "Año", value: "2025" },
          { label: "Área", value: "Teoría y Diseño" },
          { label: "Metodología", value: "Encuestas Psicológicas, Modelado Tridimensional" },
          { label: "Investigador Principal", value: "RAM Diseño Arquitectura" },
          { label: "Estatus", value: "Publicado" },
          { label: "Colaboración", value: "Estudio Psico-Ambiental Lima" }
        ]
      }
    ]
  },
  "sistemas-constructivos": {
    title: "Sistemas Constructivos",
    introduction: "Investigamos e integramos tecnologías constructivas de vanguardia y análisis de ingeniería estructural.",
    studies: [
      {
        slug: "estructuras-reticulares",
        title: "ESTRUCTURAS RETICULARES COMPLEJAS",
        category: "Sistemas Constructivos",
        location: "RAM LAB",
        covers: [vista2Img, vista1Img, vista3Img],
        views: [vista2Img, vista1Img, vista3Img],
        description: [
          "Investigación sobre el diseño de ingeniería y el cálculo avanzado de estructuras reticulares tridimensionales para luces arquitectónicas amplias sin apoyos intermedios.",
          "El estudio optimiza el comportamiento del acero estructural y la madera laminada cruzada para concebir techumbres ligeras y de alta resistencia estética, reduciendo el peso de la edificación en un 30%."
        ],
        details: [
          { label: "Año", value: "2025" },
          { label: "Área", value: "Sistemas Constructivos" },
          { label: "Metodología", value: "Análisis de Elementos Finitos (FEA)" },
          { label: "Investigador Principal", value: "RAM Diseño Arquitectura" },
          { label: "Estatus", value: "En Desarrollo" },
          { label: "Software Utilizado", value: "Grasshopper, Karamba3D" }
        ]
      },
      {
        slug: "aislamiento-termico",
        title: "AISLAMIENTO TÉRMICO DE ALTA EFICIENCIA",
        category: "Sistemas Constructivos",
        location: "RAM LAB",
        covers: [vista3Img, vista2Img, vista1Img],
        views: [vista3Img, vista2Img, vista1Img],
        description: [
          "Análisis termodinámico y energético de cerramientos multicapa para climas de alta radiación y variaciones térmicas drásticas.",
          "Evaluamos materiales aislantes ecológicos innovadores y optimizamos puentes térmicos críticos en la unión de vigas y columnas para lograr edificaciones residenciales con consumo de energía nulo (Passive House)."
        ],
        details: [
          { label: "Año", value: "2024" },
          { label: "Área", value: "Sistemas Constructivos" },
          { label: "Metodología", value: "Simulación Termodinámica Dinámica" },
          { label: "Investigador Principal", value: "RAM Diseño Arquitectura" },
          { label: "Estatus", value: "Completado" },
          { label: "Certificación", value: "Passive House Standard" }
        ]
      },
      {
        slug: "optimizacion-modular",
        title: "OPTIMIZACIÓN MODULAR CONCRETO-ACERO",
        category: "Sistemas Constructivos",
        location: "RAM LAB",
        covers: [vista1Img, vista3Img, vista2Img],
        views: [vista1Img, vista3Img, vista2Img],
        description: [
          "Desarrollamos una metodología constructiva avanzada basada en módulos prefabricados híbridos de concreto de alta resistencia y acero estructural.",
          "Este sistema innovador reduce los tiempos de construcción en obra en un 40% manteniendo la rigidez estructural, el aislamiento sísmico y la calidad premium de los acabados de alta gama."
        ],
        details: [
          { label: "Año", value: "2025" },
          { label: "Área", value: "Sistemas Constructivos" },
          { label: "Metodología", value: "Industrialización Constructiva, Lean Construction" },
          { label: "Investigador Principal", value: "RAM Diseño Arquitectura" },
          { label: "Estatus", value: "Patente en Trámite" },
          { label: "Laboratorio", value: "Tech Construction Lab" }
        ]
      }
    ]
  },
  "materiales-acabados": {
    title: "Materiales y Acabados",
    introduction: "Sometemos a análisis científico y estético la composición y textura de los materiales premium.",
    studies: [
      {
        slug: "piedras-nobles",
        title: "PIEDRAS NOBLES Y REVESTIMIENTOS FINOS",
        category: "Materiales y Acabados",
        location: "RAM LAB",
        covers: [vista3Img, vista2Img, vista1Img],
        views: [vista3Img, vista2Img, vista1Img],
        description: [
          "Investigación táctil y estética sobre el uso de mármoles finos, granitos exóticos de importación y cuarcitas nobles en revestimientos arquitectónicos de gran formato.",
          "Analizamos técnicas avanzadas de corte a chorro de agua de alta precisión y probaron sistemas de anclaje invisible por perfiles de aluminio para fachadas ventiladas residenciales sismo-resistentes."
        ],
        details: [
          { label: "Año", value: "2025" },
          { label: "Área", value: "Materiales y Acabados" },
          { label: "Metodología", value: "Espectroscopía, Ensayos de Desgaste Mecánico" },
          { label: "Investigador Principal", value: "RAM Diseño Arquitectura" },
          { label: "Estatus", value: "Publicado" },
          { label: "Material Base", value: "Mármol de Carrara, Cuarcita Taj Mahal" }
        ]
      },
      {
        slug: "envejecimiento-maderas",
        title: "ENVEJECIMIENTO ORGÁNICO DE MADERAS EXÓTICAS",
        category: "Materiales y Acabados",
        location: "RAM LAB",
        covers: [vista1Img, vista3Img, vista2Img],
        views: [vista1Img, vista3Img, vista2Img],
        description: [
          "Analizamos el comportamiento de maderas nobles exóticas como el Teca, Shihuahuaco y Cumala expuestas a la intemperie solar extrema y salinidad costera.",
          "Desarrollamos protectores orgánicos permeables al vapor basados en aceites naturales y nanotecnología para preservar la saturación del color original sin alterar la textura mate natural."
        ],
        details: [
          { label: "Año", value: "2024" },
          { label: "Área", value: "Materiales y Acabados" },
          { label: "Metodología", value: "Cámara de Envejecimiento Acelerado (UV)" },
          { label: "Investigador Principal", value: "RAM Diseño Arquitectura" },
          { label: "Estatus", value: "Completado" },
          { label: "Protector Usado", value: "Nanocristales de Silicio" }
        ]
      },
      {
        slug: "optica-superficies",
        title: "ÓPTICA Y REFRACCIÓN EN SUPERFICIES DE CRISTAL",
        category: "Materiales y Acabados",
        location: "RAM LAB",
        covers: [vista2Img, vista1Img, vista3Img],
        views: [vista2Img, vista1Img, vista3Img],
        description: [
          "Estudiamos la interacción de la luz artificial y natural al refractarse en vidrios templados de bajo contenido de hierro (Extra Clear) con tratamientos antirreflejo y texturizados especiales.",
          "El objetivo principal es maximizar la difusión lumínica indirecta en espacios interiores residenciales profundos o sombríos, optimizando la sensación de amplitud visual."
        ],
        details: [
          { label: "Año", value: "2025" },
          { label: "Área", value: "Materiales y Acabados" },
          { label: "Metodología", value: "Simulación Óptica de Rayos (Ray Tracing)" },
          { label: "Investigador Principal", value: "RAM Diseño Arquitectura" },
          { label: "Estatus", value: "En Desarrollo" },
          { label: "Laboratorio Optico", value: "Optics Design Peru" }
        ]
      }
    ]
  }
};

function StudyCard({ study, categorySlug }: { study: StudyItem; categorySlug: string }) {
  return (
    <Link 
      to={`/investigacion/${categorySlug}/${study.slug}`}
      className="relative aspect-square cursor-pointer overflow-hidden group border-b border-r border-white/5 block bg-black"
    >
      {/* Active State Color Image (Always visible, scales on hover) */}
      <img 
        src={study.covers[0]} 
        alt={study.title} 
        className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-105 scale-100"
        loading="lazy"
      />

      {/* Subtle dark bottom gradient to guarantee metadata legibility (transitions on hover) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

      {/* Centered bottom transparent overlay (slides and fades up on hover) */}
      <div 
        style={{ textShadow: "0 2px 10px rgba(0, 0, 0, 0.6)" }}
        className="absolute bottom-6 left-0 w-full text-center px-6 transition-all duration-500 ease-out z-20 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none"
      >
        <div className="flex flex-col space-y-1">
          <h3 className="font-display font-bold text-[12px] md:text-[14px] tracking-[0.2em] uppercase text-white leading-normal">
            {study.title}
          </h3>
          <p className="text-white/90 text-[9px] md:text-[10px] font-medium tracking-[0.15em] uppercase">
            {study.category} | {study.location}
          </p>
        </div>
      </div>

    </Link>
  );
}

export default function InvestigacionCategory() {
  const { category } = useParams();

  // Validate the active category slug
  const activeCategory = category ? RESEARCH_CATEGORIES_DATA[category] : null;

  if (!activeCategory || !category) {
    return <Navigate to="/investigacion" replace />;
  }

  return (
    <PageLayout>
      <div className="bg-[#1C3865] min-h-screen">
        <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-0 border-t border-white/10">
          {activeCategory.studies.map((study) => (
            <StudyCard 
              key={study.slug} 
              study={study} 
              categorySlug={category} 
            />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
