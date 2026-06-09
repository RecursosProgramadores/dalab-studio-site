import { useState } from "react";
import { PageLayout } from "@/components/PageLayout";
import { Mail, MapPin } from "lucide-react";
import whatsappIcon from "@/assets/logos/whatsapp.svg";

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/xqegpvy", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <PageLayout>
      <div className="bg-[#1C3865] min-h-screen text-white pt-16 md:pt-28 pb-20 px-6 lg:px-16 flex items-center relative overflow-hidden font-sans">
        
        {/* Decorative Circle Top-Right */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-white/[0.02] pointer-events-none" />
        
        {/* Decorative Circle Bottom-Left */}
        <div className="absolute -bottom-32 -left-32 w-[450px] h-[450px] rounded-full border border-white/[0.02] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">
          
          {/* Left Column: Contact Information */}
          <div className="flex flex-col justify-center space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
            <div>
              <span className="text-[#7EC8E3] text-xs font-bold tracking-[0.25em] uppercase mb-3 block">
                HABLEMOS
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                Trabajemos <span className="text-[#7EC8E3]">juntos</span>
              </h1>
              {/* Divider */}
              <div className="w-10 h-[2px] bg-[#7EC8E3] my-6" />
              <p className="text-white/55 text-sm md:text-base leading-relaxed text-justify max-w-lg">
                Estamos en la búsqueda de nuevos retos y proyectos que transformen el entorno. 
                Escríbenos para agendar una reunión o solicitar una cotización.
              </p>
            </div>

            <div className="space-y-4 max-w-md">
              {/* Email */}
              <a 
                href="mailto:grupoirema@gmail.com" 
                className="flex items-center gap-4 group p-3 -mx-3 rounded-[10px] hover:bg-white/[0.02] border border-transparent hover:border-white/5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#7EC8E3]/50 group-hover:bg-[#7EC8E3]/5 transition-all duration-300">
                  <Mail className="w-4 h-4 text-white group-hover:text-[#7EC8E3] transition-colors" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] tracking-widest text-white/50 uppercase font-semibold">Email</span>
                  <span className="text-sm text-white group-hover:text-[#7EC8E3] transition-colors">
                    grupoirema@gmail.com
                  </span>
                </div>
              </a>

              {/* WhatsApp */}
              <a 
                href="https://wa.me/51968263462" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-4 group p-3 -mx-3 rounded-[10px] hover:bg-white/[0.02] border border-transparent hover:border-white/5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#7EC8E3]/50 group-hover:bg-[#7EC8E3]/5 transition-all duration-300">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24"
                    className="w-4.5 h-4.5 text-white group-hover:text-[#7EC8E3] transition-colors"
                  >
                    <path 
                      fill="currentColor" 
                      d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] tracking-widest text-white/50 uppercase font-semibold">WhatsApp</span>
                  <span className="text-sm text-white group-hover:text-[#7EC8E3] transition-colors">
                    968 263 462
                  </span>
                </div>
              </a>

              {/* Ubicación */}
              <div className="flex items-center gap-4 p-3 -mx-3 rounded-[10px]">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] tracking-widest text-white/50 uppercase font-semibold">Ubicación</span>
                  <span className="text-sm text-white">
                    Lima, Perú
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form + Map */}
          <div className="flex flex-col space-y-10 animate-in fade-in slide-in-from-right-8 duration-700">
            {/* Form Container */}
            <div className="bg-[#1C3865]/10 rounded-[10px] p-6 md:p-8 border border-white/[0.08] shadow-xl backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Nombre & Empresa row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-xs font-semibold text-white/70">Nombre</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      className="bg-white/[0.05] border border-white/10 focus:border-[#7EC8E3] focus:outline-none rounded-[8px] px-4 py-2.5 text-sm text-white placeholder:text-white/20 transition-colors"
                      placeholder="Tu nombre" 
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <label className="text-xs font-semibold text-white/70">Empresa</label>
                    <input 
                      type="text" 
                      name="company"
                      className="bg-white/[0.05] border border-white/10 focus:border-[#7EC8E3] focus:outline-none rounded-[8px] px-4 py-2.5 text-sm text-white placeholder:text-white/20 transition-colors"
                      placeholder="Tu empresa" 
                    />
                  </div>
                </div>

                {/* Correo electrónico */}
                <div className="flex flex-col space-y-1.5">
                  <label className="text-xs font-semibold text-white/70">Correo electrónico</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    className="bg-white/[0.05] border border-white/10 focus:border-[#7EC8E3] focus:outline-none rounded-[8px] px-4 py-2.5 text-sm text-white placeholder:text-white/20 transition-colors"
                    placeholder="correo@ejemplo.com" 
                  />
                </div>

                {/* Mensaje */}
                <div className="flex flex-col space-y-1.5">
                  <label className="text-xs font-semibold text-white/70">Mensaje</label>
                  <textarea 
                    name="message"
                    required
                    rows={4}
                    className="bg-white/[0.05] border border-white/10 focus:border-[#7EC8E3] focus:outline-none rounded-[8px] px-4 py-2.5 text-sm text-white placeholder:text-white/20 transition-colors resize-none"
                    placeholder="Escribe tu mensaje aquí..." 
                  />
                </div>

                {/* Status Message */}
                {status === 'success' && (
                  <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs rounded-[8px] text-center">
                    ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.
                  </div>
                )}
                {status === 'error' && (
                  <div className="p-3 bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs rounded-[8px] text-center">
                    Ocurrió un error al enviar. Por favor intente de nuevo o use WhatsApp.
                  </div>
                )}

                {/* Buttons container */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button 
                    type="submit"
                    disabled={status === 'submitting'}
                    className="flex-1 bg-[#7EC8E3] text-[#0D1B3E] hover:bg-[#7EC8E3]/90 disabled:bg-[#7EC8E3]/50 active:scale-[0.98] font-bold text-sm py-3 px-6 rounded-[8px] flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#7EC8E3]/10 cursor-pointer"
                  >
                    {status === 'submitting' ? 'Enviando...' : 'Enviar mensaje →'}
                  </button>
                  <a 
                    href="https://wa.me/51968263462" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 border border-[#7EC8E3] text-[#7EC8E3] hover:bg-[#7EC8E3]/10 active:scale-[0.98] font-bold text-sm py-3 px-6 rounded-[8px] flex items-center justify-center gap-2 transition-all text-center cursor-pointer"
                  >
                    Escríbenos por WhatsApp
                  </a>
                </div>
              </form>
            </div>

            {/* Map Container */}
            <div className="space-y-3">
              <span className="text-[#7EC8E3] text-[10px] font-bold tracking-[0.25em] uppercase block">
                UBICACIÓN
              </span>
              <div className="relative w-full h-[180px] md:h-[200px] rounded-[10px] overflow-hidden border border-white/[0.08] shadow-md group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124864.84656689408!2d-77.10091811654817!3d-12.043597086884323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c5f619ee3ec7%3A0x14206cb9cc452e4a!2sLima%2C%20Peru!5e0!3m2!1sen!2sus!4v1710860548123!5m2!1sen!2sus" 
                  className="absolute inset-0 w-full h-full border-0 transition-all duration-[1s] ease-in-out"
                  style={{
                    filter: 'grayscale(1) brightness(1.2) contrast(1.2)',
                  }}
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación del Estudio"
                />
                {/* Subtle Overlay to enhance the brand blue & white effect */}
                <div className="absolute inset-0 bg-[#1C3865]/20 pointer-events-none group-hover:bg-[#1C3865]/0 transition-all duration-1000" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </PageLayout>
  );
}
