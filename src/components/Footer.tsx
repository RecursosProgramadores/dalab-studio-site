import { Link, useLocation } from "react-router-dom";
import logoFooter from "../assets/logos/logofooter.png";
import { Mail, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.18-1.3-.44-.24-.86-.52-1.24-.84V15a7.5 7.5 0 01-14.91 1.34 7.5 7.5 0 011.61-6.06c1.34-1.67 3.33-2.61 5.48-2.67V11.7c-1.31.11-2.5.76-3.15 1.86-.65 1.1-.64 2.5.15 3.53.79 1.03 2.13 1.55 3.37 1.28 1.24-.27 2.19-1.23 2.45-2.48a3.1 3.1 0 00-.01-.76V.02z"/>
  </svg>
);

const navLinks = [
  { label: "NOSOTROS", path: "/nosotros" },
  { label: "SERVICIOS", path: "/services" },
  { label: "PROYECTOS", path: "/proyectos" },
  { label: "INVESTIGACIÓN", path: "/investigacion" },
  { label: "CONTACTO", path: "/contact" },
];

export function Footer() {
  const location = useLocation();
  const isProyectosPage = location.pathname.startsWith("/proyectos");
  const isNosotrosPage = location.pathname.startsWith("/nosotros");
  const isServicesPage = location.pathname.startsWith("/services");
  const isContactPage = location.pathname.startsWith("/contact");
  const isPrivacidadPage = location.pathname.startsWith("/privacidad");
  const isTerminosPage = location.pathname.startsWith("/terminos");
  const isInvestigacionSubPage = location.pathname.startsWith("/investigacion") && location.pathname !== "/investigacion";

  return (
    <footer className={`${(isNosotrosPage || isServicesPage) ? "bg-[#000000]" : ((isProyectosPage || isContactPage || isInvestigacionSubPage || isPrivacidadPage || isTerminosPage) ? "bg-[#1C3865]" : "bg-footer")} text-footer-foreground border-t border-white/10 py-5`}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 lg:gap-6 xl:gap-8 mb-12">
          
          {/* Brand/Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="inline-block group" aria-label="Home">
              <img 
                src={logoFooter} 
                alt="RAM Diseño Arquitectura" 
                className="w-[120px] sm:w-[140px] h-auto transition-transform duration-300 group-hover:scale-105" 
                loading="lazy"
              />
            </Link>
          </div>

          {/* Description Section */}
          <div className="flex flex-col items-center md:items-start pt-1">
            <p className="text-white/70 text-xs font-light leading-relaxed max-w-[200px] text-center md:text-left">
              Creamos espacios exclusivos y atemporales que elevan la calidad de vida a través del diseño arquitectónico de primer nivel.
            </p>
          </div>

          {/* Navigation Section */}
          <div className="flex flex-col items-center md:items-start pt-1">
            <nav className="flex flex-col space-y-3 items-center md:items-start">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="font-body text-white/50 hover:text-white text-xs tracking-[0.18em] transition-colors duration-300 uppercase"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col items-center md:items-start pt-1">
            <div className="flex flex-col items-center md:items-start w-full mb-4">
              <a 
                href="mailto:grupoirema@gmail.com" 
                className="flex items-center gap-4 text-white/50 hover:text-white transition-colors duration-300 text-xs tracking-wider group"
              >
                <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span>grupoirema@gmail.com</span>
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-5">
              <a href="#" className="text-white/30 hover:text-white transition-colors duration-300 transform hover:scale-110" aria-label="Instagram">
                <Instagram className="w-4.5 h-4.5" />
              </a>
              <a href="#" className="text-white/30 hover:text-white transition-colors duration-300 transform hover:scale-110" aria-label="Facebook">
                <Facebook className="w-4.5 h-4.5" />
              </a>
              <a href="#" className="text-white/30 hover:text-white transition-colors duration-300 transform hover:scale-110" aria-label="LinkedIn">
                <Linkedin className="w-4.5 h-4.5" />
              </a>
              <a href="#" className="text-white/30 hover:text-white transition-colors duration-300 transform hover:scale-110" aria-label="YouTube">
                <Youtube className="w-4.5 h-4.5" />
              </a>
              <a href="#" className="text-white/30 hover:text-white transition-colors duration-300 transform hover:scale-110" aria-label="TikTok">
                <TikTokIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-xs font-light tracking-wider text-center md:text-left">
            &copy; {new Date().getFullYear()} RAM Diseño Arquitectura. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-white/40 font-light tracking-wider">
            <Link to="/privacidad" className="hover:text-white transition-colors">Política de Privacidad</Link>
            <Link to="/terminos" className="hover:text-white transition-colors">Términos y Condiciones</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
