import { PageLayout } from "@/components/PageLayout";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <PageLayout>
      <div className="relative w-full h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] lg:h-[calc(100vh-7rem)] overflow-hidden bg-neutral-900">
        
        {/* Fullscreen Map */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124864.84656689408!2d-77.10091811654817!3d-12.043597086884323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c5f619ee3ec7%3A0x14206cb9cc452e4a!2sLima%2C%20Peru!5e0!3m2!1sen!2sus!4v1710860548123!5m2!1sen!2sus" 
          className="absolute inset-0 w-full h-full border-0 grayscale opacity-90 transition-all duration-[2s] hover:grayscale-0 hover:opacity-100 object-cover"
          allowFullScreen={false} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación del Estudio"
        />

        {/* Cinematic Gradient Overlays to ensure readability of the floating card */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none md:bg-gradient-to-r md:from-black/80 md:via-black/20 md:to-transparent" />

        {/* Floating Contact Panel (Bottom Left) */}
        <div className="absolute bottom-0 left-0 right-0 md:bottom-12 md:left-12 md:right-auto md:w-[420px] z-20 bg-white/95 backdrop-blur-2xl p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] md:rounded-sm border-t md:border border-white/40 overflow-y-auto max-h-[85vh] hide-scrollbar select-none rounded-t-2xl md:rounded-t-sm transition-transform duration-500 ease-out translate-y-0 opacity-100 animate-in fade-in slide-in-from-bottom-10">
          
          <div className="flex flex-col space-y-6 md:space-y-8">
            
            {/* Elegant Header */}
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-[#1c3865] mb-2 tracking-wide font-light">Contáctanos</h2>
              <p className="font-sans text-[13px] leading-relaxed text-black/60 text-justify">
                Estamos en la búsqueda de nuevos retos y proyectos que transformen el entorno. Escríbenos para agendar una reunión o solicitar una cotización.
              </p>
            </div>

            {/* Compact Contact Info */}
            <div className="flex flex-col space-y-4">
              <a href="mailto:grupoirema@gmail.com" className="flex items-center gap-4 group">
                <div className="w-10 h-10 shrink-0 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-[#1c3865] group-hover:border-[#1c3865] transition-all shadow-sm">
                  <Mail className="w-4 h-4 text-[#1c3865] group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-[9px] tracking-[0.15em] text-black/40 uppercase font-semibold">Email</span>
                  <span className="font-serif text-[15px] tracking-wide text-[#222] group-hover:text-[#1c3865] transition-colors">grupoirema@gmail.com</span>
                </div>
              </a>

              <a href="tel:968263462" className="flex items-center gap-4 group">
                <div className="w-10 h-10 shrink-0 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-[#1c3865] group-hover:border-[#1c3865] transition-all shadow-sm">
                  <Phone className="w-4 h-4 text-[#1c3865] group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-[9px] tracking-[0.15em] text-black/40 uppercase font-semibold">Teléfono</span>
                  <span className="font-serif text-[15px] tracking-wide text-[#222] group-hover:text-[#1c3865] transition-colors">968 263 462</span>
                </div>
              </a>

              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 shrink-0 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-[#1c3865] group-hover:border-[#1c3865] transition-all shadow-sm">
                  <MapPin className="w-4 h-4 text-[#1c3865] group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-[9px] tracking-[0.15em] text-black/40 uppercase font-semibold">Ubicación</span>
                  <span className="font-serif text-[15px] tracking-wide text-[#222] group-hover:text-[#1c3865] transition-colors">Lima, Perú</span>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-[1px] w-full bg-gradient-to-r from-black/5 via-black/10 to-black/5" />

            {/* Compact Form */}
            <form className="flex flex-col space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col space-y-1">
                  <label className="font-sans text-[9px] tracking-[0.15em] text-black/40 uppercase font-medium">Nombre</label>
                  <input type="text" className="w-full bg-transparent border-b border-black/20 pb-2 text-[13px] font-sans focus:outline-none focus:border-[#1c3865] transition-colors rounded-none placeholder:text-black/20" placeholder="Tu nombre" />
                </div>
                <div className="flex flex-col space-y-1">
                  <label className="font-sans text-[9px] tracking-[0.15em] text-black/40 uppercase font-medium">Email</label>
                  <input type="email" className="w-full bg-transparent border-b border-black/20 pb-2 text-[13px] font-sans focus:outline-none focus:border-[#1c3865] transition-colors rounded-none placeholder:text-black/20" placeholder="correo@.com" />
                </div>
              </div>

              <div className="flex flex-col space-y-1">
                <label className="font-sans text-[9px] tracking-[0.15em] text-black/40 uppercase font-medium">Mensaje</label>
                <textarea rows={2} className="w-full bg-transparent border-b border-black/20 pb-2 text-[13px] font-sans focus:outline-none focus:border-[#1c3865] transition-colors resize-none rounded-none placeholder:text-black/20" placeholder="Escribe tu consulta..."></textarea>
              </div>

              <button className="group relative mt-2 inline-flex items-center justify-center gap-3 bg-[#1c3865] text-white py-3 md:py-4 px-6 overflow-hidden transition-all duration-500 hover:bg-[#112444] shadow-md w-full rounded-sm">
                <span className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold relative z-10">Enviar</span>
                <Send className="w-3.5 h-3.5 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>

          </div>
        </div>

      </div>
    </PageLayout>
  );
}
