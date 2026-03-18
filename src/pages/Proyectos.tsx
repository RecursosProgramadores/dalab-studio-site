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
      <div className="bg-primary min-h-screen py-12 px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <Link
              key={project.slug}
              to={`/proyectos/${project.slug}`}
              className="group relative aspect-[4/3] overflow-hidden block"
            >
              {/* Image placeholder */}
              <div className="project-image-placeholder absolute inset-0 bg-muted/20 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-150 flex items-center justify-center">
                <span className="text-primary-foreground/40 font-display text-xs tracking-[0.15em]">
                  IMAGE
                </span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-150 flex items-center justify-center">
                <span className="font-display text-sm tracking-[0.2em] text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-150">
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
