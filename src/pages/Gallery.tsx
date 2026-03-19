import { PageLayout } from "@/components/PageLayout";

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
    title: "VILLA NEUVA",
    category: "EXTERIOR"
  },
  {
    url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200",
    title: "CASA LUZ",
    category: "INTERIOR"
  },
  {
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200",
    title: "RESIDENCIA SUR",
    category: "EXTERIOR"
  },
  {
    url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
    title: "TORRE CORPORATIVA",
    category: "COMERCIAL"
  },
  {
    url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    title: "ESTUDIO OAK",
    category: "INTERIOR"
  },
  {
    url: "https://images.unsplash.com/photo-1613490908679-fd30db804c55?auto=format&fit=crop&q=80&w=1200",
    title: "PABELLÓN CRISTAL",
    category: "EXTERIOR"
  },
  {
    url: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800",
    title: "PROYECTO ZEN",
    category: "DETALLE"
  },
  {
    url: "https://images.unsplash.com/photo-1428366890462-dd4baecf492b?auto=format&fit=crop&q=80&w=1200",
    title: "CENTRO FINANCIERO",
    category: "FACHADA"
  },
  {
    url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200",
    title: "CASA BOSQUE",
    category: "EXTERIOR"
  }
];

export default function Gallery() {
  return (
    <PageLayout>
      <div className="bg-[#fcfcfc] min-h-screen pb-32">
        {/* Modern Header Section */}
        <div className="pt-32 pb-16 px-6 lg:px-12 max-w-7xl mx-auto flex flex-col items-center">
          <div className="flex items-center w-full justify-center mb-8 opacity-40">
            <div className="h-[1px] flex-1 bg-[#1c3865] max-w-[50px] md:max-w-[150px]" />
            <h1 className="font-sans text-[10px] md:text-sm tracking-[0.3em] font-medium uppercase px-4 md:px-8 text-center text-[#1c3865]">
              Portafolio
            </h1>
            <div className="h-[1px] flex-1 bg-[#1c3865] max-w-[50px] md:max-w-[150px]" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-5xl tracking-[0.05em] font-light text-[#1c3865] text-center mb-6">
            GALERÍA DE PROYECTOS
          </h2>
          <p className="font-sans text-[13px] md:text-[14px] leading-relaxed text-black/60 text-center max-w-2xl mx-auto">
            Una selección visual de nuestros trabajos más representativos, donde la proporción, la luz y los materiales dialogan en armonía.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="px-4 md:px-8 max-w-[1600px] mx-auto">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
            {galleryImages.map((image, i) => (
              <div
                key={i}
                className="relative overflow-hidden group break-inside-avoid shadow-sm hover:shadow-xl transition-shadow duration-[1.5s]"
              >
                {/* Image */}
                <img
                  src={image.url}
                  alt={image.title}
                  loading="lazy"
                  className="w-full h-auto object-cover grayscale-[0.2] md:grayscale-[0.4] group-hover:grayscale-0 transition-all duration-[1.5s] ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-[1.03]"
                />
                
                {/* Cinematic Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[1s] pointer-events-none" />
                
                {/* Hover Content */}
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col items-start justify-end opacity-0 group-hover:opacity-100 transition-all duration-[1s] translate-y-4 group-hover:translate-y-0 pointer-events-none">
                  <span className="font-sans text-[10px] tracking-[0.3em] font-semibold uppercase text-[#c4a661] mb-2 drop-shadow-md">
                    {image.category}
                  </span>
                  <h3 className="font-serif text-lg md:text-xl tracking-wider text-white font-light drop-shadow-md">
                    {image.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More Button or Footer Note */}
        <div className="mt-24 w-full flex justify-center">
          <div className="h-[1px] bg-black/10 w-24 mb-12"></div>
        </div>
      </div>
    </PageLayout>
  );
}
