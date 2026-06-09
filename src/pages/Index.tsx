import { useState } from "react";
import { Link } from "react-router-dom";
import { PageLayout } from "@/components/PageLayout";
import { SliderArrow } from "@/components/SliderArrow";

// ==========================================
// CONFIGURA TUS VIDEOS DE YOUTUBE AQUÍ
// ==========================================
// Puedes pegar el enlace completo de YouTube, el código corto, o el src del iframe. 
// El sistema extraerá automáticamente el ID correcto.
const HERO_VIDEOS = [
  "https://www.youtube.com/embed/Q-KURe_23OU?si=Yzo8pVMdUOGbgY9z", 
  "https://www.youtube.com/embed/ACu3CTFWkwA?si=zJeHUj3SJV69Glig", 
  "https://www.youtube.com/embed/FkhuVt_vudE?si=Xfavjn78ne7ahVwH",
];

// Función para extraer solo el ID del video sin importar el formato del enlace
function getYouTubeId(url: string) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

export default function Index() {
  const [current, setCurrent] = useState(0);
  const slideCount = HERO_VIDEOS.length;

  const prev = () => setCurrent((c) => (c - 1 + slideCount) % slideCount);
  const next = () => setCurrent((c) => (c + 1) % slideCount);

  return (
    <PageLayout>
      <div className="relative w-full h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] lg:h-[calc(100vh-7rem)] bg-[#111] overflow-hidden">
        
        {/* Videos de Fondo (Cinematic Cover Trick) */}
        <div className="absolute inset-0 pointer-events-none">
          {HERO_VIDEOS.map((videoPath, index) => {
            const videoId = getYouTubeId(videoPath);
            if (!videoId) return null;

            // Parametros para hacerlo cinemático (sin controles, autoplay, muteado, en loop)
            const videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1`;

            return (
              <div 
                key={index} 
                className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
                  index === current ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                {/* 
                  Este estilo y tamaño convierte un iframe cuadrado en un "fondo de pantalla" (cover). 
                  Garantiza que el video cubra toda el área de forma perfecta sin ver bordes negros de youtube. 
                */}
                <iframe
                  src={videoSrc}
                  title={`Video Hero ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  style={{ 
                    position: 'absolute', 
                    top: '50%', 
                    left: '50%', 
                    transform: 'translate(-50%, -50%)',
                    width: '100vw', 
                    height: '56.25vw', 
                    minHeight: '100vh', 
                    minWidth: '177.77vh' 
                  }}
                />
                {/* Overlay Oscurecedor para que el texto resalte (opcional pero profesional) */}
                <div className="absolute inset-0 bg-black/20" />
              </div>
            );
          })}
        </div>

        {/* Flechas de Navegación Lateral */}
        <div className="absolute inset-y-0 left-4 md:left-8 flex items-center z-20">
          <SliderArrow direction="left" onClick={prev} />
        </div>
        <div className="absolute inset-y-0 right-4 md:right-8 flex items-center z-20">
          <SliderArrow direction="right" onClick={next} />
        </div>

        {/* Puntos (Dots) de Navegación Inferior */}
        <div className="absolute bottom-16 md:bottom-24 left-1/2 -translate-x-1/2 flex gap-3 md:gap-4 z-20">
          {Array.from({ length: slideCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 md:w-3 md:h-3 transition-colors duration-300 rounded-full border border-white/50 ${
                i === current ? "bg-white" : "bg-transparent hover:bg-white/30"
              }`}
              aria-label={`Ir al video ${i + 1}`}
            />
          ))}
        </div>

        {/* Centered Typography and Action Button Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-start text-center z-20 px-6 pt-[53vh] md:pt-[55vh] pointer-events-none select-none">
          <div className="flex flex-col items-center max-w-4xl animate-fade-in">
            {/* TEXTO 1 with TT NORMS Typography */}
            <h1 
              style={{ fontFamily: '"TT Norms", "Montserrat", sans-serif' }}
              className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-[0.2em] uppercase leading-none mb-1.5 text-shadow-md"
            >
              DISEÑO ATEMPORAL
            </h1>

            {/* TEXTO 2 with Bahnschrift SemiBold Typography */}
            <p 
              style={{ fontFamily: '"Bahnschrift", "Segoe UI", "Montserrat", sans-serif', fontWeight: 600 }}
              className="text-white/95 text-xs sm:text-sm md:text-base lg:text-lg tracking-wide max-w-2xl leading-normal mb-1"
            >
              Creamos espacios sofisticados que fusionan el arte, la técnica y el lujo atemporal.
            </p>

            {/* Blue Brand Action Button linking to /services */}
            <Link
              to="/services"
              style={{ backgroundColor: '#1C3865' }}
              className="pointer-events-auto inline-flex items-center justify-center text-white px-10 py-3.5 sm:px-12 sm:py-4 rounded-full font-display font-semibold text-[13px] sm:text-[15px] tracking-[0.25em] uppercase transition-all duration-300 hover:bg-[#1C3865]/90 hover:scale-105 active:scale-95 shadow-[0_4px_25px_rgba(28,56,101,0.5)]"
            >
              Empecemos
            </Link>
          </div>
        </div>
        
      </div>
    </PageLayout>
  );
}
