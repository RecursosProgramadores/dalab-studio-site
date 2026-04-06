import { useState } from "react";
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
  const [isActive, setIsActive] = useState(false);

  return (
    <div 
      className="relative aspect-square cursor-pointer overflow-hidden group border-b border-r border-white/5"
      onClick={() => setIsActive(!isActive)}
    >
      {/* Default State: Blue background with White Lines (Simulated) */}
      <div className={`absolute inset-0 z-10 transition-opacity duration-500 bg-[#1c3865] flex items-center justify-center ${isActive ? "opacity-0" : "opacity-100"}`}>
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
        className={`w-full h-full object-cover transition-transform duration-700 ${isActive ? "scale-100 pointer-events-auto" : "scale-110 pointer-events-none"}`}
        loading="lazy"
      />

      {/* Info Bar: Appears on Click */}
      <div 
        className={`absolute bottom-0 left-0 w-full bg-black text-white p-4 transition-transform duration-500 ease-out z-20 ${
          isActive ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex flex-col space-y-0.5">
          <h3 className="font-display font-medium text-[12px] md:text-[14px] tracking-[0.2em] uppercase">
            {project.title}
          </h3>
          <p className="text-white/70 text-[10px] md:text-[11px] font-light tracking-[0.1em] uppercase">
            {project.use} | {project.location}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Proyectos() {
  return (
    <PageLayout>
      <div className="bg-[#1c3865] min-h-screen">
        <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-0 border-t border-white/10">
          {projects.map((project) => (
            <ProjectItem key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
