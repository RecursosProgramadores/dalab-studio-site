import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { PageLayout } from "@/components/PageLayout";
import { MoveLeft, MoveRight } from "lucide-react";
import { RESEARCH_CATEGORIES_DATA } from "./InvestigacionCategory";

export default function InvestigacionDetail() {
  const { category, slug } = useParams();
  const [currentView, setCurrentView] = useState(0);
  const [currentCover, setCurrentCover] = useState(0);

  // Validate route parameters
  const activeCategory = category ? RESEARCH_CATEGORIES_DATA[category] : null;
  const study = activeCategory ? activeCategory.studies.find((s) => s.slug === slug) : null;

  if (!activeCategory || !study || !category || !slug) {
    return <Navigate to="/investigacion" replace />;
  }

  const nextView = (e?: React.MouseEvent | React.TouchEvent) => {
    if (e && 'stopPropagation' in e) e.stopPropagation();
    setCurrentView((prev) => (prev + 1) % study.views.length);
  };

  const prevView = (e?: React.MouseEvent | React.TouchEvent) => {
    if (e && 'stopPropagation' in e) e.stopPropagation();
    setCurrentView((prev) => (prev - 1 + study.views.length) % study.views.length);
  };

  const nextCover = (e?: React.MouseEvent | React.TouchEvent) => {
    if (e && 'stopPropagation' in e) e.stopPropagation();
    setCurrentCover((prev) => (prev + 1) % study.covers.length);
  };

  const prevCover = (e?: React.MouseEvent | React.TouchEvent) => {
    if (e && 'stopPropagation' in e) e.stopPropagation();
    setCurrentCover((prev) => (prev - 1 + study.covers.length) % study.covers.length);
  };

  // Touch Swipe Handlers for Left Visor (Covers)
  const [touchStartLeft, setTouchStartLeft] = useState<number | null>(null);
  const [touchEndLeft, setTouchEndLeft] = useState<number | null>(null);

  const handleTouchStartLeft = (e: React.TouchEvent) => {
    setTouchStartLeft(e.targetTouches[0].clientX);
  };

  const handleTouchMoveLeft = (e: React.TouchEvent) => {
    setTouchEndLeft(e.targetTouches[0].clientX);
  };

  const handleTouchEndLeft = () => {
    if (!touchStartLeft || !touchEndLeft) return;
    const distance = touchStartLeft - touchEndLeft;
    if (distance > 50) nextCover();
    if (distance < -50) prevCover();
    setTouchStartLeft(null);
    setTouchEndLeft(null);
  };

  // Touch Swipe Handlers for Right Visor (Views)
  const [touchStartRight, setTouchStartRight] = useState<number | null>(null);
  const [touchEndRight, setTouchEndRight] = useState<number | null>(null);

  const handleTouchStartRight = (e: React.TouchEvent) => {
    setTouchStartRight(e.targetTouches[0].clientX);
  };

  const handleTouchMoveRight = (e: React.TouchEvent) => {
    setTouchEndRight(e.targetTouches[0].clientX);
  };

  const handleTouchEndRight = () => {
    if (!touchStartRight || !touchEndRight) return;
    const distance = touchStartRight - touchEndRight;
    if (distance > 50) nextView();
    if (distance < -50) prevView();
    setTouchStartRight(null);
    setTouchEndRight(null);
  };

  return (
    <PageLayout>
      {/* 
        Contenedor Principal (100vh ajustado al header) dividido en 2 columnas. 
        En móviles se divide verticalmente (foto arriba y vistas abajo),
        en escritorio (md) se divide mitad y mitad horizontalmente. 
      */}
      <div className="w-full flex flex-col md:flex-row h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] lg:h-[calc(100vh-7rem)] bg-white overflow-hidden">
        
        {/* LADO IZQUIERDO: Visor Interactivo de Renders/Portada (slideshow) */}
        <div 
          onTouchStart={handleTouchStartLeft}
          onTouchMove={handleTouchMoveLeft}
          onTouchEnd={handleTouchEndLeft}
          className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden bg-white group/left border-b md:border-b-0 md:border-r border-black/5 touch-pan-y"
        >
          
          {/* Back to Category Button */}
          <Link 
            to={`/investigacion/${category}`} 
            className="pointer-events-auto absolute top-8 left-6 md:top-12 md:left-12 z-30 flex items-center gap-2.5 text-white/50 hover:text-white transition-all duration-300 tracking-[0.25em] text-xs font-semibold uppercase group hover:-translate-x-1"
          >
            <span className="text-base transition-transform group-hover:-translate-x-0.5">&larr;</span> VOLVER
          </Link>

          {/* Indicador de número de vistas superior izquierdo */}
          <div className="absolute top-4 right-6 md:top-8 md:right-10 z-20 font-sans text-[9px] md:text-[11px] tracking-[0.3em] uppercase text-white/40 group-hover/left:text-white/70 transition-colors duration-300 flex items-center gap-2">
            <span>Render</span>
            <span className="font-medium text-white/90">({currentCover + 1}/{study.covers.length})</span>
          </div>

          {/* Left Arrow Button for Cover Slideshow */}
          {study.covers.length > 1 && (
            <button 
              onClick={prevCover}
              className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-30 w-6 h-6 md:w-8 md:h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover/left:opacity-80 hover:group-hover/left:opacity-100 transition-all duration-300 shadow-md"
              aria-label="Previous render"
            >
              <MoveLeft className="w-3 h-3 md:w-4 md:h-4" strokeWidth={1.5} />
            </button>
          )}

          {/* Right Arrow Button for Cover Slideshow */}
          {study.covers.length > 1 && (
            <button 
              onClick={nextCover}
              className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-30 w-6 h-6 md:w-8 md:h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover/left:opacity-80 hover:group-hover/left:opacity-100 transition-all duration-300 shadow-md"
              aria-label="Next render"
            >
              <MoveRight className="w-3 h-3 md:w-4 md:h-4" strokeWidth={1.5} />
            </button>
          )}

          {/* Dots Pagination for Cover Slideshow */}
          {study.covers.length > 1 && (
            <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5 md:gap-2 bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-sm">
              {study.covers.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); setCurrentCover(idx); }}
                  className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full border-[1px] border-white transition-all duration-300 ${
                    idx === currentCover ? "bg-white scale-110" : "bg-transparent hover:bg-white/20"
                  }`}
                  aria-label={`Go to render ${idx + 1}`}
                />
              ))}
            </div>
          )}

          {/* Transición de las portadas (fade-in) */}
          {study.covers.map((src, index) => (
            <div 
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentCover ? "opacity-100 z-0" : "opacity-0 -z-10"
              }`}
            >
              <img 
                src={src} 
                alt={`Render ${index + 1} de ${study.title}`} 
                className="w-full h-full object-cover grayscale opacity-90" 
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/35" />
            </div>
          ))}

          {/* Título flotante sutil (elegancia arquitectónica sin fondo y estilo TEXTO 1 TT Norms) */}
          <div 
            style={{ textShadow: "0 2px 10px rgba(0, 0, 0, 0.6)" }}
            className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-10 select-none pointer-events-none pr-6"
          >
            <h1 
              style={{ fontFamily: '"TT Norms", "Montserrat", sans-serif' }}
              className="text-white text-2xl sm:text-3xl md:text-4xl font-bold tracking-[0.2em] uppercase leading-[1.2] mb-1"
            >
              {study.title}
            </h1>
            <span 
              style={{ fontFamily: '"TT Norms", "Montserrat", sans-serif' }}
              className="text-white/60 text-[9px] md:text-[10px] tracking-[0.3em] uppercase font-light block"
            >
              (tipografía TT NORMS)
            </span>
          </div>

        </div>

        {/* LADO DERECHO: Visor Interactivo de Planos/Vistas */}
        <div 
          onTouchStart={handleTouchStartRight}
          onTouchMove={handleTouchMoveRight}
          onTouchEnd={handleTouchEndRight}
          className="w-full md:w-1/2 h-1/2 md:h-full relative bg-[#fdfdfd] overflow-hidden group touch-pan-y"
        >
          {/* Indicador de número de vistas superior derecho */}
          <div className="absolute top-4 right-6 md:top-8 md:right-10 z-20 font-sans text-[9px] md:text-[11px] tracking-[0.3em] uppercase text-black/30 group-hover:text-black/60 transition-colors duration-300 flex items-center gap-2">
            <span>Siguiente Gráfico</span>
            <span className="font-medium text-black">({currentView + 1}/{study.views.length})</span>
          </div>

          {/* Left Arrow Button (Reduced to half size) */}
          <button 
            onClick={prevView}
            className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-30 w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#1C3865] flex items-center justify-center text-white opacity-80 hover:opacity-100 transition-opacity shadow-md"
            aria-label="Previous view"
          >
            <MoveLeft className="w-3 h-3 md:w-4 md:h-4" strokeWidth={1.5} />
          </button>

          {/* Right Arrow Button (Reduced to half size) */}
          <button 
            onClick={nextView}
            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-30 w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#1C3865] flex items-center justify-center text-white opacity-80 hover:opacity-100 transition-opacity shadow-md"
            aria-label="Next view"
          >
            <MoveRight className="w-3 h-3 md:w-4 md:h-4" strokeWidth={1.5} />
          </button>

          {/* Dots Pagination (Reduced to half size) */}
          <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5 md:gap-2 bg-white/50 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-sm">
            {study.views.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => { e.stopPropagation(); setCurrentView(idx); }}
                className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full border-[1px] border-[#1C3865] transition-all duration-300 ${
                  idx === currentView ? "bg-[#1C3865] scale-110" : "bg-transparent hover:bg-[#1C3865]/20"
                }`}
                aria-label={`Go to view ${idx + 1}`}
              />
            ))}
          </div>

          {/* Transición de las vistas (fade-in estático) */}
          {study.views.map((src, index) => (
            <div 
              key={index}
              className={`absolute inset-0 flex items-center justify-center p-8 md:p-16 transition-opacity duration-700 ease-in-out ${
                index === currentView ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <img 
                src={src} 
                alt={`Vista ${index + 1} de ${study.title}`} 
                className="w-full h-full object-contain mix-blend-multiply" 
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* SECCIÓN INFERIOR: Descripción e Información Técnica */}
      <div className="bg-white px-6 md:px-12 lg:px-24 py-16 md:py-24 border-t border-black/5">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-24">
          
          {/* Columna Izquierda: Párrafos descriptivos */}
          <div className="space-y-6">
            {study.description.map((paragraph, idx) => (
              <p 
                key={idx} 
                className="font-sans text-[13px] md:text-[14px] lg:text-[15px] leading-[1.8] text-[#444] text-justify max-w-4xl"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Columna Derecha: Tarjeta / Resumen Técnico */}
          <div className="lg:border-l lg:border-black/5 lg:pl-12">
            <div className="space-y-0">
              {study.details.map((field, index) => (
                <div
                  key={field.label}
                  className={`flex flex-col sm:flex-row sm:justify-between items-start sm:items-baseline py-4 ${
                    index < study.details.length - 1 ? "border-b border-black-[0.03]" : ""
                  }`}
                >
                  {/* Label Moderno Minimalista */}
                  <span className="font-sans text-[10px] tracking-[0.15em] uppercase text-black/40 font-semibold sm:w-1/3 mb-1 sm:mb-0">
                    {field.label}
                  </span>
                  {/* Valor o Datos */}
                  <span className="font-sans text-[13px] text-[#222] sm:w-2/3 sm:text-right leading-relaxed">
                    {field.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}
