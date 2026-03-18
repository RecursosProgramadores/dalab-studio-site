import { Link } from "react-router-dom";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: { label: string; path: string }[];
}

export function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-background flex flex-col">
      <div className="flex items-center h-16 px-6">
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="font-display text-2xl font-light text-foreground"
        >
          ✕
        </button>
      </div>
      <nav className="flex-1 flex flex-col items-center justify-center gap-8">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={onClose}
            className="font-display text-sm font-medium tracking-[0.2em] text-foreground"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
