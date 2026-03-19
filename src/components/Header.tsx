import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logoImg from "../assets/logos/logoRAM.jpg";

const navLinks = [
  { label: "PROJECTS | PROYECTOS", path: "/proyectos" },
  { label: "US | NOSOTROS", path: "/nosotros" },
  { label: "PHILOSOPHY | FILOSOFÍA", path: "/philosophy" },
  { label: "SERVICES | SERVICIOS", path: "/services" },
  { label: "GALLERY | GALERÍA", path: "/gallery" },
  { label: "CONTACT | CONTACTO", path: "/contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <>
      {/* Professional Sticky Top Navigation */}
      <header className="sticky top-0 z-40 w-full bg-[#fdfdfd] border-b border-black/5 flex items-center justify-between px-6 md:px-12 py-2 lg:py-2.5 transition-all duration-300">
        
        {/* Left: Hamburger */}
        <div className="flex-1 flex items-center">
          <button
            className="flex flex-col justify-between w-[24px] h-[14px] md:w-[28px] md:h-[16px] group"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-full h-[1.5px] bg-[#111] transition-transform duration-300 ease-out origin-right group-hover:scale-x-75" />
            <span className="block w-full h-[1.5px] bg-[#111] transition-opacity duration-300 ease-out" />
            <span className="block w-full h-[1.5px] bg-[#111] transition-transform duration-300 ease-out origin-right group-hover:scale-x-50" />
          </button>
        </div>

        {/* Center: Logo Image with Subtitle (Fully Encapsulated) */}
        <div className="flex-none flex flex-col items-center justify-center relative">
          {/* Hitbox del link que ocupa toda la caja central */}
          <Link 
            to="/" 
            className="absolute inset-0 z-10"
            aria-label="Home"
          />
          
          {/* 
            Contenedor para RECORTAR el espacio en blanco gigante 
            que la imagen original tiene en la mitad de abajo.
          */}
          <div className="overflow-hidden flex items-start justify-center w-[50px] sm:w-[60px] md:w-[70px] lg:w-[86px] h-[30px] sm:h-[36px] md:h-[42px] lg:h-[52px]">
            <img 
              src={logoImg} 
              alt="RAM Diseño Arquitectura" 
              className="w-full h-auto object-cover object-top mix-blend-multiply drop-shadow-sm transition-transform duration-300" 
              loading="eager"
            />
          </div>
          
          {/* Subtítulo dinámico pegado directamente debajo del marco recortado */}
          <span className="font-sans text-[5px] sm:text-[5.5px] md:text-[6.5px] lg:text-[7.5px] tracking-[0.45em] text-[#444] font-bold whitespace-nowrap mt-[2px] lg:mt-[4px] pl-[0.45em]">
            ARCHITECTURE  |  INTERIORS  |  BUILDING
          </span>
        </div>

        {/* Right: Empty space to balance the sticky header */}
        <div className="flex-1" />
        
      </header>

      {/* Full-screen Overlay Menu */}
      <div 
        className={`fixed inset-0 z-[100] bg-[#111111]/95 backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div 
          className={`absolute inset-0 flex flex-col justify-center items-center px-6 transition-transform duration-700 delay-[50ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
            menuOpen ? "translate-x-0" : "-translate-x-16"
          }`}
        >
          {/* Close button (X) */}
          <button
            className="absolute top-8 left-6 md:top-12 md:left-12 z-50 w-10 h-10 flex items-center justify-center group"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <div className="relative w-6 h-6 flex items-center justify-center">
              <span className="absolute w-full h-[1.5px] bg-white transform rotate-45 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:rotate-[135deg]" />
              <span className="absolute w-full h-[1.5px] bg-white transform -rotate-45 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-rotate-[135deg]" />
            </div>
          </button>

          {/* Vertical Nav List */}
          <nav className="flex flex-col items-center text-center gap-6 md:gap-10">
            {navLinks.map((link, i) => (
              <Link
                key={link.path}
                to={link.path}
                className="group relative inline-flex flex-col items-center overflow-hidden"
              >
                <span className="block font-serif font-light text-[24px] sm:text-[32px] md:text-[42px] text-white/90 tracking-[0.1em] md:tracking-[0.15em] leading-[1.6] uppercase transition-all duration-300 group-hover:text-[#c4a661] group-hover:tracking-[0.2em] md:group-hover:tracking-[0.25em]">
                  {link.label}
                </span>
                {/* Thin animated underline to gold */}
                <span className="absolute bottom-1 w-full h-[1px] bg-[#c4a661] origin-center scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
