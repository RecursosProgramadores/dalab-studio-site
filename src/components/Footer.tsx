import { Link } from "react-router-dom";
import logoImg from "../assets/logos/logoRAM.jpg";
import { Mail, Instagram, Facebook, Linkedin } from "lucide-react";

const navLinks = [
  { label: "PROJECTS | PROYECTOS", path: "/proyectos" },
  { label: "US | NOSOTROS", path: "/nosotros" },
  { label: "PHILOSOPHY | FILOSOFÍA", path: "/philosophy" },
  { label: "SERVICES | SERVICIOS", path: "/services" },
  { label: "GALLERY | GALERÍA", path: "/gallery" },
  { label: "CONTACT | CONTACTO", path: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-footer text-footer-foreground border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          
          {/* Brand/Logo Section */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <Link to="/" className="inline-block group" aria-label="Home">
              <div className="bg-white p-3 rounded-sm flex items-center justify-center overflow-hidden w-[100px] sm:w-[120px] h-[50px] sm:h-[60px] transition-transform duration-300 group-hover:scale-105">
                <img 
                  src={logoImg} 
                  alt="RAM Diseño Arquitectura" 
                  className="w-full h-auto object-cover object-top mix-blend-multiply" 
                  loading="lazy"
                />
              </div>
            </Link>
            <div className="text-center md:text-left flex flex-col items-center md:items-start">
              <span className="font-sans text-[6px] md:text-[7.5px] tracking-[0.45em] text-white/80 font-bold whitespace-nowrap mb-4 pl-[0.45em]">
                ARCHITECTURE  |  INTERIORS  |  BUILDING
              </span>
              <p className="text-white/60 text-sm font-light leading-relaxed max-w-[280px]">
                Creamos espacios exclusivos y atemporales que elevan la calidad de vida a través del diseño arquitectónico de primer nivel.
              </p>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <h4 className="font-display text-xs md:text-sm tracking-[0.2em] text-white/90 uppercase border-b border-[#c4a661]/50 pb-2 inline-block">
              Navegación
            </h4>
            <nav className="flex flex-col space-y-4 items-center md:items-start">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="font-body text-white/60 hover:text-[#c4a661] text-xs sm:text-sm tracking-[0.1em] md:tracking-[0.15em] transition-colors duration-300 relative group inline-block"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#c4a661] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <h4 className="font-display text-xs md:text-sm tracking-[0.2em] text-white/90 uppercase border-b border-[#c4a661]/50 pb-2 inline-block">
              Contacto
            </h4>
            <div className="flex flex-col space-y-4 items-center md:items-start w-full">
              
              <a 
                href="mailto:grupoirema@gmail.com" 
                className="flex items-center gap-4 text-white/60 hover:text-[#c4a661] transition-colors duration-300 group"
              >
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#c4a661]/50 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-body text-sm font-light tracking-wider">grupoirema@gmail.com</span>
              </a>

            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-5 pt-4">
              <a href="#" className="text-white/40 hover:text-[#c4a661] transition-colors duration-300" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/40 hover:text-[#c4a661] transition-colors duration-300" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/40 hover:text-[#c4a661] transition-colors duration-300" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
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
