import { Link } from "react-router-dom";
import { PageLayout } from "@/components/PageLayout";
import pruebaImg from "@/assets/prueba.png";

const projects = [
  { slug: "casa-aurora", title: "CASA AURORA", use: "Residencial", location: "LIMA, PERÚ" },
  { slug: "torre-mirador", title: "TORRE MIRADOR", use: "Oficinas", location: "LIMA, PERÚ" },
  { slug: "centro-cultural", title: "CENTRO CULTURAL", use: "Cultura", location: "CUSCO, PERÚ" },
  { slug: "residencia-bosque", title: "RESIDENCIA BOSQUE", use: "Residencial", location: "PIURA, PERÚ" },
  { slug: "oficinas-nexo", title: "OFICINAS NEXO", use: "Corporativo", location: "LIMA, PERÚ" },
  { slug: "museo-forma", title: "MUSEO FORMA", use: "Cultura", location: "AREQUIPA, PERÚ" },
  { slug: "pabellon-este", title: "PABELLÓN ESTE", use: "Educación", location: "LIMA, PERÚ" },
  { slug: "villa-marina", title: "VILLA MARINA", use: "Residencial", location: "PARACAS, PERÚ" },
  { slug: "corporativo-delta", title: "CORPORATIVO DELTA", use: "Corporativo", location: "LIMA, PERÚ" },
  { slug: "hotel-boutique", title: "HOTEL BOUTIQUE", use: "Hostelería", location: "VALLE SAGRADO, PERÚ" },
  { slug: "galeria-norte", title: "GALERÍA NORTE", use: "Comercial", location: "TRUJILLO, PERÚ" },
  { slug: "casa-del-valle", title: "CASA DEL VALLE", use: "Residencial", location: "URUBAMBA, PERÚ" },
];

function ProjectItem({ project }: { project: typeof projects[0] }) {
  return (
    <Link 
      to={`/proyectos/${project.slug}`}
      className="relative aspect-square cursor-pointer overflow-hidden group border-b border-r border-white/5 block"
    >
      {/* Default State: Blue background with White Lines (Simulated) */}
      <div className="absolute inset-0 z-10 transition-opacity duration-500 bg-[#1C3865] flex items-center justify-center group-hover:opacity-0 opacity-100">
        {/* Simplified Sketch Representation (House/Building SVG in white) */}
        <svg 
          viewBox="0 0 100 100" 
          className="w-1/2 h-1/2 text-white/40"
          fill="none" 
          stroke="currentColor" 
          strokeWidth="0.5"
        >
          <path d="M20 80 L20 40 L50 20 L80 40 L80 80 Z" />
          <path d="M20 40 L80 40" />
          <path d="M50 20 L50 80" />
          <circle cx="50" cy="50" r="10" />
          <rect x="35" y="55" width="30" height="25" />
        </svg>
      </div>

      {/* Active State: Color Image */}
      <img 
        src={pruebaImg} 
        alt={project.title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-100 scale-110"
        loading="lazy"
      />

      {/* Info Bar: Appears on Hover (Centered bottom, white text, no background, fade & slide up) */}
      <div 
        style={{ textShadow: "0 2px 10px rgba(0, 0, 0, 0.6)" }}
        className="absolute bottom-6 left-0 w-full text-center px-4 transition-all duration-500 ease-out z-20 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none"
      >
        <div className="flex flex-col space-y-1">
          <h3 className="font-display font-bold text-[12px] md:text-[14px] tracking-[0.2em] uppercase text-white">
            {project.title}
          </h3>
          <p className="text-white/90 text-[9px] md:text-[10px] font-medium tracking-[0.15em] uppercase">
            {project.use} | {project.location}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default function Proyectos() {
  return (
    <PageLayout>
      <div className="bg-[#1C3865] min-h-screen">
        <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-0 border-t border-white/10">
          {projects.map((project) => (
            <ProjectItem key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
