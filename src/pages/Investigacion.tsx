import { Link } from "react-router-dom";
import { PageLayout } from "@/components/PageLayout";

interface ResearchCardProps {
  number: string;
  title: string;
  description: string;
  slug: string;
}

function ResearchCard({ number, title, description, slug }: ResearchCardProps) {
  return (
    <Link 
      to={`/investigacion/${slug}`}
      className="bg-white rounded-[3rem] px-8 py-12 md:px-10 md:py-16 flex flex-col items-center text-center justify-start min-h-[460px] md:min-h-[500px] border border-black shadow-[0_4px_25px_rgba(0,0,0,0.02)] transition-all duration-500 ease-out hover:scale-[1.03] hover:-translate-y-2 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.08)] hover:border-black group block text-inherit no-underline"
    >
      {/* Premium Number Badge */}
      <span 
        style={{ fontFamily: '"TT Norms", "Montserrat", sans-serif' }}
        className="inline-block border border-black/20 rounded-full px-3.5 py-1 text-[9px] md:text-[10px] tracking-[0.2em] text-black/50 uppercase font-semibold mb-6 transition-all duration-500 group-hover:border-black/50 group-hover:text-black/80"
      >
        {number}
      </span>

      {/* Card Title */}
      <h2 
        style={{ fontFamily: '"TT Norms", "Montserrat", sans-serif' }}
        className="text-black text-lg md:text-xl font-bold tracking-[0.2em] uppercase leading-snug mb-6 transition-colors duration-500 group-hover:text-[#1C3865]"
      >
        {title}
      </h2>

      {/* Dynamic Animated Divider */}
      <div className="w-12 h-[1px] bg-black/20 mb-8 transition-all duration-500 group-hover:w-20 group-hover:bg-[#1C3865]" />

      {/* Card Content Description */}
      <p 
        style={{ fontFamily: '"Bahnschrift", "Segoe UI", "Montserrat", sans-serif', fontWeight: 600 }}
        className="text-black/85 text-[12.5px] md:text-[13.5px] leading-[2.1] font-semibold tracking-wide text-justify md:text-center"
      >
        {description}
      </p>

    </Link>
  );
}

export default function Investigacion() {
  const cardsData = [
    {
      number: "01",
      title: "Teoría y Diseño",
      slug: "teoria-diseno",
      description: "Investigamos los fundamentos conceptuales y espaciales de la arquitectura contemporánea. A través del análisis riguroso de corrientes teóricas, escalas urbanas y dinámicas sociales, articulamos ideas que trascienden la mera utilidad, convirtiendo el espacio en una manifestación artística e intelectual que dialoga de forma directa con su entorno."
    },
    {
      number: "02",
      title: "Sistemas Constructivos",
      slug: "sistemas-constructivos",
      description: "Analizamos y desarrollamos soluciones tecnológicas avanzadas para la materialización de edificaciones. Desde estructuras de alta complejidad hasta la optimización de procesos modulares y eficientes, estudiamos la viabilidad técnica y el comportamiento estructural para garantizar la máxima seguridad, solidez y precisión en la obra."
    },
    {
      number: "03",
      title: "Materiales y Acabados",
      slug: "materiales-acabados",
      description: "Investigamos la ciencia material y su impacto sensorial en el espacio habitable. Seleccionamos y experimentamos con texturas premium, maderas selectas, piedras nobles e iluminación arquitectónica para comprobar su interacción con el tiempo y el uso, logrando una atmósfera sofisticada de una finura excepcional."
    }
  ];

  return (
    <PageLayout>
      <div className="bg-[#FAFAFA] min-h-screen py-16 md:py-24 px-6 lg:px-12 flex flex-col justify-start">
        <div className="max-w-7xl mx-auto w-full text-center">
          
          {/* Section Page Title */}
          <h1 
            style={{ fontFamily: '"TT Norms", "Montserrat", sans-serif' }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.25em] text-[#111] uppercase mb-6 animate-fade-in"
          >
            INVESTIGACIÓN
          </h1>
          
          {/* Subtle Accent Page Divider */}
          <div className="w-12 h-[1.5px] bg-[#1C3865]/30 mx-auto mb-8 md:mb-10" />

          {/* Premium Editorial Introduction */}
          <p 
            style={{ fontFamily: '"Bahnschrift", "Segoe UI", "Montserrat", sans-serif', fontWeight: 600 }}
            className="text-[#444] text-[13px] sm:text-base md:text-lg leading-[2] font-semibold max-w-3xl mx-auto mb-16 md:mb-20 text-justify sm:text-center px-4"
          >
            En RAM, entendemos la arquitectura no solo como construcción, sino como un proceso continuo de indagación teórica, tecnológica y material. Nuestra división de investigación fundamenta cada trazo de nuestros proyectos en el rigor conceptual y técnico.
          </p>

          {/* Responsive 3-Card Grid Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto items-stretch justify-center">
            {cardsData.map((card, idx) => (
              <ResearchCard 
                key={idx}
                number={card.number}
                title={card.title}
                description={card.description}
                slug={card.slug}
              />
            ))}
          </div>

        </div>
      </div>
    </PageLayout>
  );
}
