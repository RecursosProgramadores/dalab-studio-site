import { useState } from "react";
import { useParams } from "react-router-dom";
import { PageLayout } from "@/components/PageLayout";
import { MoveLeft, MoveRight } from "lucide-react";

// Importación Directa de Imágenes (Vite)
import portadaImg from "@/assets/images/proyecto1/portada.png";
import vista1Img from "@/assets/images/proyecto1/vista1.png";
import vista2Img from "@/assets/images/proyecto1/vista2.png";
import vista3Img from "@/assets/images/proyecto1/vista3.png";

// ==========================================
// CONFIGURA TUS PROYECTOS AQUÍ
// ==========================================
const PROJECTS_DATA: Record<
  string,
  {
    title: string;
    cover: string;
    views: string[];
    description?: string[];
    details?: { label: string; value: string }[];
  }
> = {
  "casa-aurora": {
    title: "CASA AURORA",
    cover: portadaImg,
    views: [vista1Img, vista2Img, vista3Img],
    description: [
      "The new Radio Télévision Suisse (RTS) headquarters is situated on the campus of EPFL and UNIL universities, next to the Learning Centre on the shores of Lake Geneva. Functioning as both a broadcasting centre and a public venue with educational and research facilities, the building is conceived as a factory that combines technical performance with civic presence. Its ability to adapt to the emerging technologies and changing formats of media production is facilitated by the introduction of two distinct spatial figures: a box and a field. In essence, the building is formed by four independent rectangular ‘boxes’ of varying sizes that support a curvilinear slab suspended 8m above the permeable ground floor. The glazed foyer positioned between three of the boxes encloses the main entrance with its central staircase and divides the public area with a restaurant and café from the logistics area with technical facilities and a garage for production trucks. Each of these compact rectangular volumes is dedicated to a different purpose: to broadcasting and recording studios, technical and educational facilities, and administrative offices. In turn, the double-height suspended slab is designed as an open-plan ‘field’ of offices and production spaces, with flexible workplace configurations. This continuous interior is lit by a shed roof and intersected by Warren trusses that span between the volumes, organising different areas with their distinctive structure and colour patterning. In its complexity and quasi-urban configuration created by furniture and protruding boxes, the field is a collective space that reproduces the sprawling university campus."
    ],
    details: [
      { label: "Year", value: "2014 – 2025" },
      { label: "Location", value: "Lausanne, CH" },
      { label: "Type", value: "Office, Public, Media" },
      { label: "Status", value: "Built" },
      { label: "Surface", value: "40 500 m2" },
      { label: "Client", value: "Société Suisse de Radiodiffusion et Télévision" },
      {
        label: "Collaborator(s)",
        value:
          "Fehlmann Architectes, Bureau Bas Smets, Bollinger+Grohmann, Jeroen Provoost, Ingeni SA, BCS, Les Éclaireurs, AZ Ingénieurs, MAB Ingénierie, Décibel Acoustique, Walters Storyk Design Group Basel, Amstein + Walthert / ALWEOL, SRG Engineering, Ignis Salutem, Estia SA",
      },
      {
        label: "Design team",
        value:
          "Kersten Geers, David Van Severen, Giovanni Lazzareschi Sergiusti, Antonios Prokos, Jacopo Lugli, Ivana Čobejová, Bert Rogiers, Enea Facoetti, Steven Bosmans, Irini Peraki, Justine Rossillion, Hugo Mazza, Joschka Kannen, Yuichiro Onuma, Nenad Ðuric ́, Mahsa Ramezanpour, Riham El Moazen, Federico Taverna, Hugo Santoalha, Ronan Murray, Margaux Dequaire, Gregory Devaud, Alice Tripet",
      },
      { label: "Award", value: "Competition, 1st prize" },
      { label: "Images", value: "ArtefactoryLab" },
    ],
  },
  "default": {
    title: "PROYECTO DESCONOCIDO",
    cover: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000",
    views: [
      "https://images.unsplash.com/photo-1600607687930-cebc5a7aba59?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000"
    ],
  }
};

export default function ProyectoDetalle() {
  const { slug } = useParams();
  const [currentView, setCurrentView] = useState(0);

  // Busca el proyecto por su slug, si no existe usa el "default"
  const project = PROJECTS_DATA[slug || ""] || PROJECTS_DATA["default"];

  const nextView = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentView((prev) => (prev + 1) % project.views.length);
  };

  const prevView = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentView((prev) => (prev - 1 + project.views.length) % project.views.length);
  };

  return (
    <PageLayout>
      {/* 
        Contenedor Principal (100vh ajustado al header) dividido en 2 columnas. 
        En móviles se divide verticalmente (foto arriba y vistas abajo),
        en escritorio (md) se divide mitad y mitad horizontalmente. 
      */}
      <div className="w-full flex flex-col md:flex-row h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] lg:h-[calc(100vh-7rem)] bg-white overflow-hidden">
        
        {/* LADO IZQUIERDO: Imagen Portada (Fija) */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden bg-white">
          <img 
            src={project.cover} 
            alt={`Portada de ${project.title}`} 
            className="w-full h-full object-cover" 
          />
          {/* Título flotante sutil (elegancia arquitectónica) */}
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-10 bg-white/95 backdrop-blur-sm px-6 py-3 border border-black/5 shadow-sm">
            <h1 className="font-serif text-lg md:text-xl tracking-[0.2em] text-[#111]">
              {project.title}
            </h1>
          </div>
        </div>

        {/* LADO DERECHO: Visor Interactivo de Planos/Vistas */}
        <div 
          className="w-full md:w-1/2 h-1/2 md:h-full relative bg-[#fdfdfd] overflow-hidden group"
        >
          {/* Indicador de número de vistas superior derecho (Opcional, mantenido por elegancia) */}
          <div className="absolute top-4 right-6 md:top-8 md:right-10 z-20 font-sans text-[9px] md:text-[11px] tracking-[0.3em] uppercase text-black/30 group-hover:text-black/60 transition-colors duration-300 flex items-center gap-2">
            <span>Siguiente Vista</span>
            <span className="font-medium text-black">({currentView + 1}/{project.views.length})</span>
          </div>

          {/* Left Arrow Button */}
          <button 
            onClick={prevView}
            className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#1c3865] flex items-center justify-center text-white opacity-80 hover:opacity-100 transition-opacity shadow-lg"
            aria-label="Previous view"
          >
            <MoveLeft className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1} />
          </button>

          {/* Right Arrow Button */}
          <button 
            onClick={nextView}
            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#1c3865] flex items-center justify-center text-white opacity-80 hover:opacity-100 transition-opacity shadow-lg"
            aria-label="Next view"
          >
            <MoveRight className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1} />
          </button>

          {/* Dots Pagination */}
          <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3 md:gap-4 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
            {project.views.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => { e.stopPropagation(); setCurrentView(idx); }}
                className={`w-3 h-3 md:w-3.5 md:h-3.5 rounded-full border-[1.5px] border-[#1c3865] transition-all duration-300 ${
                  idx === currentView ? "bg-[#1c3865] scale-110" : "bg-transparent hover:bg-[#1c3865]/20"
                }`}
                aria-label={`Go to view ${idx + 1}`}
              />
            ))}
          </div>

          {/* Transición de las vistas (fade-in estático) */}
          {project.views.map((src, index) => (
            <div 
              key={index}
              className={`absolute inset-0 flex items-center justify-center p-8 md:p-16 transition-opacity duration-700 ease-in-out ${
                index === currentView ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <img 
                src={src} 
                alt={`Vista ${index + 1} de ${project.title}`} 
                className="w-full h-full object-contain mix-blend-multiply" 
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* SECCIÓN INFERIOR: Descripción e Información Técnica */}
      {(project.description || project.details) && (
        <div className="bg-white px-6 md:px-12 lg:px-24 py-16 md:py-24 border-t border-black/5">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-24">
            
            {/* Columna Izquierda: Párrafos descriptivos */}
            <div className="space-y-6">
              {project.description?.map((paragraph, idx) => (
                <p 
                  key={idx} 
                  className="font-sans text-[13px] md:text-[14px] lg:text-[15px] leading-[1.8] text-[#444] text-justify max-w-4xl"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Columna Derecha: Tarjeta / Resumen Técnico */}
            {project.details && (
              <div className="lg:border-l lg:border-black/5 lg:pl-12">
                <div className="space-y-0">
                  {project.details.map((field, index) => (
                    <div
                      key={field.label}
                      className={`flex flex-col sm:flex-row sm:justify-between items-start sm:items-baseline py-4 ${
                        index < project.details!.length - 1 ? "border-b border-black-[0.03]" : ""
                      }`}
                    >
                      {/* Label Moderno Minimalista */}
                      <span className="font-sans text-[10px] tracking-[0.15em] uppercase text-black/40 font-semibold sm:w-1/3 mb-1 sm:mb-0">
                        {field.label}
                      </span>
                      {/* Valor o Datos (ajuste de formato largo como la lista de nombres) */}
                      <span className="font-sans text-[13px] text-[#222] sm:w-2/3 sm:text-right leading-relaxed">
                        {field.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      )}
    </PageLayout>
  );
}
