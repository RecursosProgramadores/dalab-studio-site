import { Link } from "react-router-dom";
import { PageLayout } from "@/components/PageLayout";
import pruebaImg from "@/assets/prueba.png";

const projects = [
  { slug: "casa-aurora", title: "CASA AURORA", location: "LIMA, PERÚ" },
  { slug: "torre-mirador", title: "TORRE MIRADOR", location: "LIMA, PERÚ" },
  { slug: "centro-cultural", title: "CENTRO CULTURAL", location: "CUSCO, PERÚ" },
  { slug: "residencia-bosque", title: "RESIDENCIA BOSQUE", location: "PIURA, PERÚ" },
  { slug: "oficinas-nexo", title: "OFICINAS NEXO", location: "LIMA, PERÚ" },
  { slug: "museo-forma", title: "MUSEO FORMA", location: "AREQUIPA, PERÚ" },
  { slug: "pabellon-este", title: "PABELLÓN ESTE", location: "LIMA, PERÚ" },
  { slug: "villa-marina", title: "VILLA MARINA", location: "PARACAS, PERÚ" },
  { slug: "corporativo-delta", title: "CORPORATIVO DELTA", location: "LIMA, PERÚ" },
  { slug: "hotel-boutique", title: "HOTEL BOUTIQUE", location: "VALLE SAGRADO, PERÚ" },
  { slug: "galeria-norte", title: "GALERÍA NORTE", location: "TRUJILLO, PERÚ" },
  { slug: "casa-del-valle", title: "CASA DEL VALLE", location: "URUBAMBA, PERÚ" },
];

export default function Proyectos() {
  return (
    <PageLayout>
      <div className="bg-[#fcfcfc] min-h-screen py-24 pb-32">
        {/* Using a 4-column grid for large screens as requested, NO horizontal gap! */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-0 gap-y-16 w-full">
          {projects.map((project) => (
            <Link
              key={project.slug}
              to={`/proyectos/${project.slug}`}
              className="group relative block cursor-pointer flex flex-col"
            >
              {/* Image Box - Large Aspect Ratio */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#111] mb-5">
                <img
                  src={pruebaImg}
                  alt={`Proyecto ${project.title}`}
                  className="w-full h-full object-cover grayscale transition-all duration-[600ms] ease-in-out group-hover:grayscale-0"
                  loading="lazy"
                />
              </div>

              {/* Text underneath the image */}
              <div className="flex flex-col space-y-1 px-4 lg:px-6">
                <h3 className="font-display font-medium text-[14px] md:text-[16px] tracking-[0.15em] text-[#111] uppercase group-hover:text-[#c4a661] transition-colors duration-300">
                  {project.title}
                </h3>
                <span className="font-body font-light text-[11px] md:text-[13px] text-black/50 tracking-[0.1em] uppercase transition-colors duration-300 group-hover:text-black/80">
                  {project.location}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
