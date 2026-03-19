import { PageLayout } from "@/components/PageLayout";
import procesoImg from "@/assets/proceso.png";

const teamMembers = [
  { 
    name: "CARLOS NAVARRO", 
    role: "DIRECTOR | DIRECTOR",
    bio: "Lidera la visión estratégica y creativa del estudio, con más de 15 años de experiencia en el diseño y ejecución de proyectos residenciales premium. Su enfoque garantiza excelencia y atemporalidad.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=500"
  },
  { 
    name: "LUCÍA FERNÁNDEZ", 
    role: "ARCHITECT | ARQUITECTO",
    bio: "Especialista en desarrollo conceptual y coordinación técnica. Transforma ideas en realidades tangibles asegurando que cada detalle constructivo cumpla con los más altos estándares de calidad.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=500"
  },
  { 
    name: "MATEO RÍOS", 
    role: "DESIGNER | DISEÑADOR",
    bio: "Creador de espacios interiores únicos. Su profundo conocimiento de materiales, texturas e iluminación le permite esculpir ambientes sofisticados que dialogan con la arquitectura del lugar.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=500"
  },
  { 
    name: "VALERIA GÓMEZ", 
    role: "PROJECT MANAGER | GERENTE",
    bio: "Garantiza la viabilidad, presupuesto y tiempos de entrega de cada proyecto. Su capacidad de gestión y liderazgo permite materializar las visiones arquitectónicas con precisión y eficiencia.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=500"
  },
];

const flowSteps = [
  "CLIENTE",
  "ANÁLISIS",
  "CONCEPTO",
  "DISEÑO",
  "DESARROLLO",
  "CONSTRUCCIÓN",
  "ENTREGA",
];

export default function Nosotros() {
  return (
    <PageLayout>
      
      {/* Hero team photo - Parallax and Cinematic Effect */}
      <div className="relative w-full h-[50vh] md:h-[65vh] lg:h-[75vh] overflow-hidden group">
        {/* Parallax Image Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed scale-105 group-hover:scale-100 transition-transform duration-[2s] ease-[cubic-bezier(0.25,0.1,0.25,1)]"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2850')" }}
        />
        
        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-[1s]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#fdfdfd] via-transparent to-transparent opacity-90" />
      </div>

      <div className="bg-[#fdfdfd] pt-20 pb-32">
        {/* NUEVA SECCIÓN: ¿Quiénes somos? */}
        <section className="mb-24 sm:mb-32 px-6 lg:px-24 text-center max-w-4xl mx-auto">
          <h1 className="font-serif font-medium text-2xl md:text-3xl tracking-[0.2em] text-[#111] uppercase mb-6">
            ¿Quiénes somos?
          </h1>
          
          <div className="w-12 h-[1px] bg-black/20 mx-auto mb-16" />

          <div className="space-y-6">
            <p className="font-sans text-[14px] md:text-[15px] lg:text-[16px] leading-[2.2] text-[#444] text-justify sm:text-center mx-auto max-w-2xl">
              Somos un equipo de profesionales en el rubro del diseño y construcción, 
              movilizados por el deseo de trascender a través de nuestro trabajo.
            </p>
            <p className="font-sans text-[14px] md:text-[15px] lg:text-[16px] leading-[2.2] text-[#444] text-justify sm:text-center mx-auto max-w-2xl">
              Como equipo, buscamos aprovechar al máximo el conocimiento técnico 
              y la sensibilidad para plasmar de forma armoniosa, lógica y coherente, 
              la esencia de cada uno de nuestros clientes en su entorno.
            </p>
          </div>
        </section>

        {/* Certifications original */}
        <section className="py-16 px-6 lg:px-16 bg-white border-y border-black/5">
          <h2 className="font-display text-xs tracking-[0.2em] font-medium text-foreground mb-8 text-center">
            CERTIFICATIONS | CERTIFICACIONES
          </h2>
          <div className="flex justify-center gap-6 flex-wrap">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="w-16 h-16 border border-border flex items-center justify-center bg-muted/30"
                style={{ borderRadius: "50%" }}
              >
                <span className="text-[10px] text-muted-foreground">{i + 1}</span>
              </div>
            ))}
          </div>
        </section>

        {/* NUEVA SECCIÓN: Equipo (Diseño Oscuro Premium) */}
        <section className="py-24 px-6 lg:px-16 bg-[#0a0a0a]">
          <h2 className="font-serif font-light text-2xl md:text-3xl tracking-[0.2em] text-white uppercase text-center mb-16">
            EQUIPO
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {teamMembers.map((member, i) => (
              <div 
                key={i} 
                className="flex flex-col sm:flex-row bg-[#111] border border-white/10 rounded-sm overflow-hidden group hover:bg-[#151515] hover:border-white/20 transition-all duration-500 shadow-2xl"
              >
                {/* Image Container */}
                <div className="w-full sm:w-[220px] aspect-[4/5] sm:aspect-auto shrink-0 relative overflow-hidden bg-neutral-900 border-r border-white/5">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover object-top grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1s] ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                    loading="lazy"
                  />
                </div>
                
                {/* Info Container */}
                <div className="p-6 sm:p-8 flex flex-col justify-center text-left">
                  <h3 className="font-serif text-[18px] md:text-[20px] text-white tracking-[0.1em] mb-1 font-medium transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="font-sans text-[10px] md:text-[11px] text-[#c4a661] uppercase tracking-[0.2em] mb-4 md:mb-6 font-semibold opacity-90">
                    {member.role}
                  </p>
                  <p className="font-sans text-[12px] md:text-[13px] leading-relaxed text-white/50 group-hover:text-white/70 transition-colors duration-500 text-justify">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* NUEVA SECCIÓN: Nuestro Proceso */}
        <section className="py-24 px-6 lg:px-24 text-center max-w-4xl mx-auto border-t border-black/5">
          <h2 className="font-serif font-medium text-2xl md:text-3xl tracking-[0.2em] text-[#111] uppercase mb-6">
            Nuestro Proceso
          </h2>
          
          <div className="w-12 h-[1px] bg-black/20 mx-auto mb-16" />

          <div className="space-y-6">
            <p className="font-sans text-[14px] md:text-[15px] lg:text-[16px] leading-[2.2] text-[#444] text-justify sm:text-center mx-auto max-w-2xl">
              Creemos que la evolución de cada proyecto depende de un trabajo constante 
              en el que estudiamos cada detalle, a la vez, que el proyecto de manera integral.
            </p>
            <p className="font-sans text-[14px] md:text-[15px] lg:text-[16px] leading-[2.2] text-[#444] text-justify sm:text-center mx-auto max-w-2xl">
              Al observar el proyecto en curso desde todos sus ángulos posibles, obtenemos 
              y descubrimos nuevas oportunidades que llevan el trabajo hacia su mayor potencial.
            </p>
            <p className="font-sans text-[14px] md:text-[15px] lg:text-[16px] leading-[2.2] text-[#444] text-justify sm:text-center mx-auto max-w-2xl font-medium tracking-wide mt-8">
              Estamos seguros que cada detalle es tan importante como el todo, y viceversa.
            </p>
          </div>
        </section>

        {/* NUEVA SECCIÓN: Imagen del Proceso (Debajo del texto) */}
        <section className="w-full flex justify-center mb-24 px-6">
          <img 
            src={procesoImg} 
            alt="Esquema Visual de Nuestro Proceso" 
            className="w-full max-w-5xl h-auto object-contain mix-blend-multiply opacity-95 hover:opacity-100 transition-opacity duration-500"
            loading="lazy"
          />
        </section>

        {/* Services flowchart original */}
        <section className="py-16 px-6 lg:px-16 bg-white border-t border-black/5">
          <h2 className="font-display text-xs tracking-[0.2em] font-medium text-foreground mb-10 text-center">
            SERVICES | SERVICIOS (FLUJO)
          </h2>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-0">
            {flowSteps.map((step, i) => (
              <div key={step} className="flex items-center">
                <div className="border border-foreground px-6 py-3">
                  <span className="font-display text-[11px] tracking-[0.15em] font-medium text-foreground">
                    {step}
                  </span>
                </div>
                {i < flowSteps.length - 1 && (
                  <>
                    {/* Desktop arrow */}
                    <div className="hidden lg:block w-8 h-px bg-foreground relative">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-[5px] border-l-foreground border-y-[3px] border-y-transparent" />
                    </div>
                    {/* Mobile arrow */}
                    <div className="lg:hidden h-6 w-px bg-foreground relative mx-auto">
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-t-[5px] border-t-foreground border-x-[3px] border-x-transparent" />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>

      </div>
    </PageLayout>
  );
}
