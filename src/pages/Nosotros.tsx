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
  "CONSTRUCCIÓN"
];

const valuesList = [
  {
    title: "INNOVACIÓN",
    description: "Desafiamos los límites del diseño para concebir soluciones arquitectónicas únicas, combinando tecnología de vanguardia y creatividad sin límites."
  },
  {
    title: "SOSTENIBILIDAD",
    description: "Proyectamos con conciencia ecológica, optimizando el uso de recursos y diseñando espacios de bajo impacto ambiental y alta durabilidad."
  },
  {
    title: "EXCELENCIA",
    description: "Buscamos la perfección técnica en cada detalle, desde la precisión conceptual hasta la impecable materialización en obra."
  },
  {
    title: "FUNCIONALIDAD",
    description: "Priorizamos el bienestar humano, creando espacios donde la lógica de la función y la belleza estética conviven en perfecto equilibrio."
  },
  {
    title: "INTEGRIDAD",
    description: "Construimos relaciones basadas en la honestidad, la transparencia y el estricto cumplimiento de presupuestos, plazos y objetivos trazados."
  }
];

export default function Nosotros() {
  return (
    <PageLayout>
      <div className="bg-[#000000] min-h-screen">
        
        {/* Section 1: Team Photo (B&W, Full Width, No Title) */}
        <section className="w-full grayscale overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2850" 
            alt="Nuestro Equipo" 
            className="w-full h-[60vh] md:h-[75vh] object-cover"
            loading="eager"
          />
        </section>

        {/* Section 2: ¿Quiénes somos? */}
        <section className="py-24 px-6 lg:px-24 text-center max-w-4xl mx-auto">
          <h1 className="tracking-[0.3em] font-display font-light text-white uppercase mb-12 text-xl md:text-2xl">
            ¿Quiénes somos?
          </h1>
          
          <div className="w-16 h-[1px] bg-white/20 mx-auto mb-16" />

          <div className="space-y-10">
            <p className="font-body text-[15px] md:text-[17px] leading-[2.4] text-white/90 text-justify sm:text-center mx-auto max-w-3xl">
              Somos un equipo de profesionales en el rubro del diseño y construcción, 
              movilizados por el deseo de trascender a través de nuestro trabajo.
            </p>
            <p className="font-body text-[15px] md:text-[17px] leading-[2.4] text-white/90 text-justify sm:text-center mx-auto max-w-3xl">
              Como equipo, buscamos aprovechar al máximo el conocimiento técnico 
              y la sensibilidad para plasmar de forma armoniosa, lógica y coherente, 
              la esencia de cada uno de nuestros clientes en su entorno.
            </p>
          </div>
        </section>

        {/* Section 3: EQUIPO */}
        <section className="py-24 px-6 lg:px-16 bg-[#000000]">
          <h2 className="tracking-[0.3em] font-display font-light text-white uppercase text-center mb-10 text-lg md:text-xl">
            EQUIPO
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 max-w-4xl mx-auto">
            {teamMembers.map((member, i) => (
              <div 
                key={i} 
                className="flex flex-col sm:flex-row bg-transparent overflow-hidden group transition-all duration-700"
              >
                {/* Image Container - Slightly Smaller and closer to the red box in mockup */}
                <div className="w-full sm:w-[160px] aspect-[4/5] sm:aspect-auto shrink-0 relative overflow-hidden bg-neutral-900 shadow-xl">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"
                    loading="lazy"
                  />
                </div>
                
                {/* Info Container - Tighter Padding */}
                <div className="pl-0 sm:pl-8 py-6 sm:py-2 flex flex-col justify-center text-left">
                  <h3 className="text-[18px] text-white tracking-[0.1em] mb-1.5 transition-colors duration-500">
                    {member.name}
                  </h3>
                  <p className="font-body text-[10px] text-white/40 uppercase tracking-[0.2em] mb-4 font-medium italic">
                    {member.role}
                  </p>
                  <p className="font-body text-[12px] leading-[1.8] text-white/50 group-hover:text-white/70 transition-colors duration-700 text-justify">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: NUESTROS VALORES */}
        <section className="py-24 px-6 lg:px-12 bg-[#000000] border-t border-white/5">
          <h2 className="tracking-[0.3em] font-display font-light text-white uppercase text-center mb-16 text-lg md:text-xl">
            NUESTROS VALORES
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {valuesList.map((val, index) => (
              <div 
                key={index}
                className="flex flex-col items-center justify-between text-center bg-transparent border border-white/10 rounded-[2.5rem] p-8 min-h-[380px] transition-all duration-300 hover:border-white/30 hover:bg-white/[0.02]"
              >
                {/* Top: Value Title and Font specification text */}
                <div className="flex flex-col items-center w-full">
                  <span 
                    style={{ fontFamily: '"TT Norms", "Montserrat", sans-serif' }}
                    className="text-white text-base md:text-lg tracking-wider font-bold uppercase block"
                  >
                    {val.title}
                  </span>
                  <span 
                    style={{ fontFamily: '"TT Norms", "Montserrat", sans-serif' }}
                    className="text-white/40 text-[9px] tracking-[0.2em] uppercase font-light mt-1 block"
                  >
                    (tipografía TT NORMS)
                  </span>
                </div>

                {/* Middle: Description */}
                <p 
                  style={{ fontFamily: '"Bahnschrift", "Segoe UI", "Montserrat", sans-serif', fontWeight: 600 }}
                  className="text-white/80 text-[12px] leading-[2] my-6 font-semibold"
                >
                  {val.description}
                </p>

                {/* Bottom: Font specification text */}
                <span 
                  style={{ fontFamily: '"Bahnschrift", "Segoe UI", "Montserrat", sans-serif', fontWeight: 600 }}
                  className="text-white/30 text-[9px] tracking-[0.15em] uppercase font-semibold block"
                >
                  (tipografía Bahnschrift SemiBol)
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: CERTIFICACIONES */}
        <section className="py-24 px-6 lg:px-16 border-t border-white/5">
          <h2 className="font-display font-light text-[11px] tracking-[0.3em] text-white/40 mb-16 text-center uppercase">
            CERTIFICATIONS | CERTIFICACIONES
          </h2>
          <div className="flex justify-center gap-10 flex-wrap opacity-40 hover:opacity-100 transition-opacity duration-1000">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="w-20 h-20 border border-white/10 flex items-center justify-center grayscale"
                style={{ borderRadius: "50%" }}
              >
                <span className="text-[10px] text-white/30">{i + 1}</span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </PageLayout>
  );
}
