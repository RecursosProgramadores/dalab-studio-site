import { useState } from "react";
import { PageLayout } from "@/components/PageLayout";
import pruebaImg from "@/assets/prueba.png";

const servicesData = {
  diseño: [
    { id: "urb", title: "URBANISMO", desc: "Planificación y diseño de entornos urbanos sostenibles y funcionales que mejoran la calidad de vida en la ciudad." },
    { id: "pai", title: "PAISAJISMO", desc: "Integración de la naturaleza y el diseño arquitectónico para crear espacios exteriores armoniosos y vivos." },
    { id: "arq", title: "ARQUITECTURA", desc: "Diseño conceptual y técnico de edificaciones con un enfoque en la estética, funcionalidad y habitabilidad." },
    { id: "int", title: "INTERIORES", desc: "Transformación de espacios internos mediante el uso de texturas, iluminación y materiales premium." },
  ],
  construccion: [
    { id: "ger", title: "GERENCIA", desc: "Administración integral de recursos y procesos para garantizar que el proyecto cumpla con plazos y presupuestos." },
    { id: "eje", title: "EJECUCIÓN", desc: "Materialización de lo planificado bajo los más altos estándares de calidad y rigor normativo." },
  ]
};

const flowData = {
  contacto: { id: "con", title: "CONTACTO", desc: "Primer punto de encuentro para entender las necesidades y visión de nuestros clientes." },
  diseño: [
    { id: "san", title: "SANEAMIENTO", desc: "Gestión técnica y normativa inicial para la viabilidad del terreno o edificación." },
    { id: "pre", title: "PRE-ANTEPROYECTO", desc: "Exploración de ideas y esquemas básicos para definir el rumbo del diseño." },
    { id: "ant", title: "ANTEPROYECTO", desc: "Definición espacial y volumétrica de la propuesta arquitectónica." },
    { id: "pro", title: "PROYECTO", desc: "Detalle técnico completo y especializado para la obtención de licencias." },
    { id: "doc", title: "DOCUMENTOS DE OBRA", desc: "Expediente técnico final con todas las especificaciones para la construcción." },
  ],
  construccion: [
    { id: "pre-c", title: "PRESUPUESTO", desc: "Análisis detallado de costos para una ejecución financiera transparente y eficiente." },
    { id: "ini", title: "INICIO DE OBRA", desc: "Movilización y preparación del terreno para el comienzo de las actividades." },
    { id: "proc", title: "PROCESO CONSTRUCTIVO", desc: "Seguimiento riguroso de cada fase de edificación asegurando la calidad." },
    { id: "cie", title: "CIERRE DE OBRA", desc: "Finalización de acabados y entrega de la estructura terminada al cliente." },
    { id: "post", title: "POST-EJECUCIÓN", desc: "Servicio de seguimiento y garantía post-entrega para asegurar la satisfacción total." },
  ]
};

function SplitSection({ 
  title, 
  leftData, 
  rightData, 
  inverted = false, 
  topItem = null 
}: { 
  title: string, 
  leftData: any[], 
  rightData: any[], 
  inverted?: boolean,
  topItem?: any 
}) {
  const [hovered, setHovered] = useState<any>(null);

  const leftBg = inverted ? "bg-black" : "bg-white";
  const leftText = inverted ? "text-white" : "text-black";
  const rightBg = inverted ? "bg-white" : "bg-black";
  const rightText = inverted ? "text-white" : "text-black"; // In construction (black side) text should be white usually

  return (
    <div className="relative w-full border-t border-black/5">
      {/* Title Centered Top - Two Tone for Contrast */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-30 flex">
        <h2 className={`font-display font-medium text-[10px] md:text-xs tracking-[0.4em] uppercase`}>
          {title === "SERVICIOS" ? (
            <>
              <span className="text-black">SERVI</span>
              <span className="text-white">CIOS</span>
            </>
          ) : (
            <>
              <span className="text-white">FLUJO DE</span>
              <span className="text-black tracking-[0.4em]"> TRABAJO</span>
            </>
          )}
        </h2>
      </div>

      <div className="flex flex-col md:flex-row h-auto md:h-[120vh] relative overflow-hidden">
        
        {/* Left Half */}
        <div className={`w-full md:w-1/2 min-h-[50vh] ${leftBg} relative p-12 md:p-24 flex flex-col justify-center transition-colors duration-500`}>
          <div className="relative z-20">
            {topItem && (
              <div 
                className="mb-16 group cursor-pointer"
                onMouseEnter={() => setHovered({ ...topItem, side: 'left' })}
                onMouseLeave={() => setHovered(null)}
              >
                <h3 className={`font-display text-lg md:text-xl tracking-[0.2em] mb-4 text-center md:text-left ${inverted ? 'text-white' : 'text-black'}`}>
                  {topItem.title}
                </h3>
              </div>
            )}
            
            <h4 className={`font-display text-[10px] tracking-[0.3em] mb-12 opacity-50 text-center md:text-left ${inverted ? 'text-white' : 'text-black'}`}>
              DISEÑO
            </h4>
            
            <div className="space-y-4 md:space-y-8 flex flex-col items-center md:items-start">
              {leftData.map((item) => (
                <div 
                  key={item.id} 
                  className="group cursor-pointer"
                  onMouseEnter={() => setHovered({ ...item, side: 'left' })}
                  onMouseLeave={() => setHovered(null)}
                >
                  <span className={`block font-display text-sm md:text-lg tracking-[0.15em] transition-all duration-300 group-hover:pl-4 ${inverted ? 'text-white/50 group-hover:text-white' : 'text-black/50 group-hover:text-black'}`}>
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Active Text Overlay for Left Side */}
          <div className={`absolute inset-0 z-21 pointer-events-none p-12 md:p-24 flex items-center justify-center transition-opacity duration-500 ${hovered?.side === 'left' ? 'opacity-100' : 'opacity-0'}`}>
            <div className={`max-w-md text-center ${inverted ? 'text-white' : 'text-black'}`}>
              <h3 className="font-display text-2xl md:text-3xl tracking-[0.2em] mb-8 uppercase">{hovered?.title}</h3>
              <p className="font-body text-sm md:text-base leading-relaxed opacity-80">{hovered?.desc}</p>
            </div>
          </div>

          {/* Image Overlay for when RIGHT side is hovered */}
          <div className={`absolute inset-0 z-10 transition-opacity duration-700 ${hovered?.side === 'right' ? 'opacity-100' : 'opacity-0'}`}>
             <img src={pruebaImg} alt="Reference" className="w-full h-full object-cover grayscale" />
             <div className={`absolute inset-0 ${inverted ? 'bg-black/40' : 'bg-white/20'}`} />
          </div>
        </div>

        {/* Right Half */}
        <div className={`w-full md:w-1/2 min-h-[50vh] ${rightBg} relative p-12 md:p-24 flex flex-col justify-center transition-colors duration-500`}>
          <div className="relative z-20">
            <h4 className={`font-display text-[10px] tracking-[0.3em] mb-12 opacity-50 text-center md:text-left ${!inverted ? 'text-white' : 'text-black'}`}>
              CONSTRUCCIÓN
            </h4>
            
            <div className="space-y-4 md:space-y-8 flex flex-col items-center md:items-start">
              {rightData.map((item) => (
                <div 
                  key={item.id} 
                  className="group cursor-pointer"
                  onMouseEnter={() => setHovered({ ...item, side: 'right' })}
                  onMouseLeave={() => setHovered(null)}
                >
                  <span className={`block font-display text-sm md:text-lg tracking-[0.15em] transition-all duration-300 group-hover:pl-4 ${!inverted ? 'text-white/50 group-hover:text-white' : 'text-black/50 group-hover:text-black'}`}>
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Active Text Overlay for Right Side */}
          <div className={`absolute inset-0 z-21 pointer-events-none p-12 md:p-24 flex items-center justify-center transition-opacity duration-500 ${hovered?.side === 'right' ? 'opacity-100' : 'opacity-0'}`}>
            <div className={`max-w-md text-center ${!inverted ? 'text-white' : 'text-black'}`}>
              <h3 className="font-display text-2xl md:text-3xl tracking-[0.2em] mb-8 uppercase">{hovered?.title}</h3>
              <p className="font-body text-sm md:text-base leading-relaxed opacity-80">{hovered?.desc}</p>
            </div>
          </div>

          {/* Image Overlay for when LEFT side is hovered */}
          <div className={`absolute inset-0 z-10 transition-opacity duration-700 ${hovered?.side === 'left' ? 'opacity-100' : 'opacity-0'}`}>
             <img src={pruebaImg} alt="Reference" className="w-full h-full object-cover grayscale" />
             <div className={`absolute inset-0 ${!inverted ? 'bg-black/40' : 'bg-white/20'}`} />
          </div>
        </div>

      </div>
    </div>
  );
}

export default function Services() {
  return (
    <PageLayout>
      <div className="flex flex-col w-full">
        <SplitSection 
          title="SERVICIOS"
          leftData={servicesData.diseño}
          rightData={servicesData.construccion}
          inverted={false}
        />
        
        <SplitSection 
          title="FLUJO DE TRABAJO"
          leftData={flowData.diseño}
          rightData={flowData.construccion}
          topItem={flowData.contacto}
          inverted={true}
        />
      </div>
    </PageLayout>
  );
}
