import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logoImg from "../assets/logos/logoRAM.jpg";
import logoProyectos from "../assets/logos/logoproyectos.png";
import logoFooter from "../assets/logos/logofooter.png";

const navLinks = [
  { label: "NOSOTROS", path: "/nosotros" },
  { label: "SERVICIOS", path: "/services" },
  { label: "PROYECTOS", path: "/proyectos" },
  { label: "FILOSOFÍA", path: "/philosophy" },
  { label: "CONTACTO", path: "/contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isProyectosPage = location.pathname.startsWith("/proyectos");
  const isNosotrosPage = location.pathname.startsWith("/nosotros");
  const isServicesPage = location.pathname.startsWith("/services");
  const isContactPage = location.pathname.startsWith("/contact");
  const isDarkTheme = isProyectosPage || isNosotrosPage || isContactPage;

  const [lang, setLang] = useState(() => {
    return localStorage.getItem("lang") || "ES";
  });

  useEffect(() => {
    const handleGlobalLangChange = () => {
      setLang(localStorage.getItem("lang") || "ES");
    };
    window.addEventListener("languageChange", handleGlobalLangChange);
    return () => {
      window.removeEventListener("languageChange", handleGlobalLangChange);
    };
  }, []);

  const handleLangChange = (newLang: string) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
    window.dispatchEvent(new Event("languageChange"));
  };

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
      <header 
        className={`sticky top-0 z-40 w-full flex items-center justify-between px-6 md:px-12 py-2 lg:py-2.5 transition-all duration-300 border-b ${
          isNosotrosPage
            ? "bg-[#000000] border-white/10"
            : (isProyectosPage || isContactPage)
              ? "bg-[#1C3865] border-white/10"  
              : isServicesPage
                ? "bg-[#ffffff] border-black/5"
                : "bg-[#fdfdfd] border-black/5"
        }`}
      >
        
        {/* Left: Hamburger */}
        <div className="flex-1 flex items-center">
          <button
            className="flex flex-col justify-between w-[24px] h-[14px] md:w-[28px] md:h-[16px] group"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className={`block w-full h-[1.5px] transition-transform duration-300 ease-out origin-right group-hover:scale-x-75 ${isDarkTheme ? "bg-white" : "bg-[#111]"}`} />
            <span className={`block w-full h-[1.5px] transition-opacity duration-300 ease-out ${isDarkTheme ? "bg-white" : "bg-[#111]"}`} />
            <span className={`block w-full h-[1.5px] transition-transform duration-300 ease-out origin-right group-hover:scale-x-50 ${isDarkTheme ? "bg-white" : "bg-[#111]"}`} />
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
          
          <img 
            src={isNosotrosPage ? logoFooter : ((isProyectosPage || isContactPage) ? logoProyectos : logoImg)} 
            alt="RAM Diseño Arquitectura" 
            className="w-[90px] sm:w-[110px] md:w-[130px] h-auto transition-opacity duration-[1.5s] ease-in-out" 
            loading="eager"
          />
          
        </div>

        {/* Right: Language Selector */}
        <div className="flex-1 flex items-center justify-end">
          <div className="flex items-center gap-1.5 md:gap-2 font-display text-[11px] sm:text-[13px] tracking-widest font-semibold select-none">
            <button 
              onClick={() => handleLangChange("EN")}
              className={`transition-colors duration-300 uppercase py-1 ${
                lang === "EN" 
                  ? (isDarkTheme ? "text-white font-extrabold" : "text-[#111111] font-extrabold") 
                  : (isDarkTheme ? "text-white/40 hover:text-white" : "text-black/40 hover:text-black")
              }`}
            >
              EN
            </button>
            <span className={`text-[10px] ${isDarkTheme ? "text-white/20" : "text-black/20"}`}>|</span>
            <button 
              onClick={() => handleLangChange("ES")}
              className={`transition-colors duration-300 uppercase py-1 ${
                lang === "ES" 
                  ? (isDarkTheme ? "text-white font-extrabold" : "text-[#111111] font-extrabold") 
                  : (isDarkTheme ? "text-white/40 hover:text-white" : "text-black/40 hover:text-black")
              }`}
            >
              ES
            </button>
            <span className={`text-[10px] ${isDarkTheme ? "text-white/20" : "text-black/20"}`}>|</span>
            <button 
              onClick={() => handleLangChange("IT")}
              className={`transition-colors duration-300 uppercase py-1 ${
                lang === "IT" 
                  ? (isDarkTheme ? "text-white font-extrabold" : "text-[#111111] font-extrabold") 
                  : (isDarkTheme ? "text-white/40 hover:text-white" : "text-black/40 hover:text-black")
              }`}
            >
              IT
            </button>
          </div>
        </div>
        
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
          <nav className="flex flex-col items-center text-center gap-5 md:gap-8">
            {navLinks.map((link, i) => (
              <Link
                key={link.path}
                to={link.path}
                className="group relative inline-flex flex-col items-center"
              >
                <span className="block font-display font-bold text-[15px] sm:text-[18px] md:text-[22px] text-white tracking-[0.2em] md:tracking-[0.25em] leading-[1.6] uppercase transition-all duration-300 group-hover:text-[#1C3865] group-hover:italic">
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
