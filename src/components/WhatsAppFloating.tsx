import { useState, useEffect } from "react";

export function WhatsAppFloating() {
  const [showBubble, setShowBubble] = useState(false);
  const [bottomOffset, setBottomOffset] = useState(32); // default desktop offset (32px)

  useEffect(() => {
    // Show the chat bubble after a short delay for a premium feel
    const timer = setTimeout(() => {
      setShowBubble(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const footerElement = document.querySelector("footer");
      if (!footerElement) return;

      const footerRect = footerElement.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const isMobile = window.innerWidth < 768;
      
      const defaultBottom = isMobile ? 20 : 32; // 20px on mobile, 32px on desktop (bottom-5 or bottom-8)
      const gap = isMobile ? 12 : 24;          // gap above the footer

      if (footerRect.top < viewportHeight) {
        // Footer is visible, push the button up by the visible height of the footer + gap
        const visibleFooterHeight = viewportHeight - footerRect.top;
        setBottomOffset(visibleFooterHeight + gap);
      } else {
        // Footer is not visible, use default floating position
        setBottomOffset(defaultBottom);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    
    // Run initial calculation
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div 
      className="fixed right-4 md:right-6 z-50 flex items-center gap-3.5 pointer-events-none transition-all duration-75"
      style={{ bottom: `${bottomOffset}px` }}
    >
      {/* Speech Bubble / Tooltip */}
      <div 
        className={`pointer-events-auto bg-white/95 dark:bg-black/95 backdrop-blur-md text-neutral-800 dark:text-white px-4 py-2.5 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.12)] border border-neutral-200/40 dark:border-neutral-800/40 flex items-center gap-2.5 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] transform ${
          showBubble 
            ? "opacity-100 translate-x-0 scale-100" 
            : "opacity-0 translate-x-8 scale-90 pointer-events-none"
        }`}
      >
        {/* Animated green pulse dot for online status */}
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="text-[11px] sm:text-xs font-semibold tracking-wide whitespace-nowrap text-neutral-800 dark:text-neutral-200">
          ¿En qué podemos ayudarte?
        </span>
        <button 
          onClick={() => setShowBubble(false)}
          className="text-neutral-400 hover:text-neutral-800 dark:hover:text-white transition-colors duration-200 p-0.5 text-[10px] font-bold ml-1"
          aria-label="Cerrar mensaje"
        >
          ✕
        </button>
        {/* Subtle arrow pointing to the WhatsApp button */}
        <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white/95 dark:bg-black/95 rotate-45 border-r border-t border-neutral-200/40 dark:border-neutral-800/40" />
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/51968263462"
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#128C7E] to-[#25D366] flex items-center justify-center shadow-[0_8px_30px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-110 active:scale-95 group"
        aria-label="Contactar por WhatsApp"
      >
        {/* Continuous soft pulsing glow */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/20 animate-ping opacity-75 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />
        <span className="absolute -inset-1.5 rounded-full border border-[#25D366]/10 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300 pointer-events-none" />
        
        {/* SVG WhatsApp icon */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          className="w-6 h-6 sm:w-7 sm:h-7 fill-white relative z-10 transition-transform duration-300 group-hover:rotate-12"
        >
          <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28" />
        </svg>
      </a>
    </div>
  );
}
