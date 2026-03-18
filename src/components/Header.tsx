import { useState } from "react";
import { Link } from "react-router-dom";
import { MobileMenu } from "./MobileMenu";

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

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
        <div className="flex items-center justify-between h-16 px-6 lg:px-12">
          {/* Hamburger - mobile only */}
          <button
            className="lg:hidden flex flex-col gap-[5px] w-7"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-full h-[2px] bg-foreground" />
            <span className="block w-full h-[2px] bg-foreground" />
            <span className="block w-full h-[2px] bg-foreground" />
          </button>

          {/* Desktop nav - left */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-[11px] font-display font-medium tracking-[0.15em] text-foreground hover:text-primary transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Logo - center */}
          <Link
            to="/"
            className="absolute left-1/2 -translate-x-1/2 font-display font-bold text-2xl tracking-[0.3em] text-foreground"
          >
            DALAB
          </Link>

          {/* Empty right side for balance */}
          <div className="w-7 lg:hidden" />
          <div className="hidden lg:block" />
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        links={navLinks}
      />
    </>
  );
}
