import { Link } from "react-router-dom";
import { PageLayout } from "@/components/PageLayout";

const projects = [
  { slug: "casa-aurora", title: "CASA AURORA" },
  { slug: "torre-mirador", title: "TORRE MIRADOR" },
  { slug: "centro-cultural", title: "CENTRO CULTURAL" },
  { slug: "residencia-bosque", title: "RESIDENCIA BOSQUE" },
  { slug: "oficinas-nexo", title: "OFICINAS NEXO" },
  { slug: "museo-forma", title: "MUSEO FORMA" },
];

export default function Proyectos() {
  return (
    <PageLayout>
      <div className="bg-primary min-h-screen py-16 px-6 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 max-w-7xl mx-auto">
          {projects.map((project) => (
            <Link
              key={project.slug}
              to={`/proyectos/${project.slug}`}
              className="group relative aspect-[4/3] overflow-hidden block cursor-pointer"
            >
              {/* Image placeholder */}
              <div className="absolute inset-0 bg-[hsl(220,15%,25%)] grayscale group-hover:grayscale-0 group-hover:scale-[1.04] group-hover:brightness-110 transition-all duration-300 ease-out flex items-center justify-center">
                <span className="text-white/20 font-body text-xs tracking-[0.2em] uppercase select-none">
                  Project Image
                </span>
              </div>

              {/* Hover overlay with title */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <span className="font-display font-bold text-base md:text-lg tracking-[0.15em] text-white opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                  {project.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
