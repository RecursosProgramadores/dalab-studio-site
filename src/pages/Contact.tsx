import { PageLayout } from "@/components/PageLayout";
import { Mail, MapPin, Send } from "lucide-react";
import whatsappIcon from "@/assets/logos/whatsapp.svg";

export default function Contact() {
  return (
    <PageLayout>
      <div className="bg-[#1c3865] min-h-screen text-white pt-10 md:pt-20 pb-20 px-6 lg:px-16">
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Information & Form */}
          <div className="flex flex-col space-y-12 animate-in fade-in slide-in-from-left-8 duration-700">
            
            {/* Header info */}
            <div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-[0.1em] mb-6 uppercase">
                Contáctanos
              </h1>
              <p className="font-body text-[14px] md:text-[16px] leading-relaxed text-white/70 max-w-lg mb-10 text-justify">
                Estamos en la búsqueda de nuevos retos y proyectos que transformen el entorno. 
                Escríbenos para agendar una reunión o solicitar una cotización.
              </p>

              <div className="space-y-6">
                <a href="mailto:grupoirema@gmail.com" className="flex items-center gap-6 group w-fit">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center transition-all group-hover:bg-white group-hover:border-white">
                    <Mail className="w-5 h-5 text-white group-hover:text-[#1c3865] transition-colors" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] tracking-[0.2em] text-white/40 uppercase font-semibold">Email</span>
                    <span className="text-[16px] tracking-wide group-hover:text-white transition-colors">grupoirema@gmail.com</span>
                  </div>
                </a>

                <a href="https://wa.me/51968263462" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group w-fit">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center transition-all group-hover:bg-white/10 group-hover:border-white">
                    <div 
                      className="w-5 h-5 bg-white transition-colors"
                      style={{
                        maskImage: `url(${whatsappIcon})`,
                        WebkitMaskImage: `url(${whatsappIcon})`,
                        maskRepeat: 'no-repeat',
                        WebkitMaskRepeat: 'no-repeat',
                        maskSize: 'contain',
                        WebkitMaskSize: 'contain'
                      }}
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] tracking-[0.2em] text-white/40 uppercase font-semibold">WhatsApp</span>
                    <span className="text-[16px] tracking-wide group-hover:text-white transition-colors">968 263 462</span>
                  </div>
                </a>

                <div className="flex items-center gap-6 group w-fit">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center transition-all group-hover:bg-white group-hover:border-white">
                    <MapPin className="w-5 h-5 text-white group-hover:text-[#1c3865] transition-colors" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] tracking-[0.2em] text-white/40 uppercase font-semibold">Ubicación</span>
                    <span className="text-[16px] tracking-wide group-hover:text-white transition-colors">Lima, Perú</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Compact Form */}
            <form className="flex flex-col space-y-8 max-w-lg mt-12 bg-white/5 p-8 md:p-10 border border-white/10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col space-y-2">
                  <label className="text-[10px] tracking-[0.3em] text-white/50 uppercase">Nombre</label>
                  <input type="text" className="bg-transparent border-b border-white/20 pb-2 text-[14px] focus:outline-none focus:border-white transition-all rounded-none placeholder:text-white/10" placeholder="Tu nombre" />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-[10px] tracking-[0.3em] text-white/50 uppercase">Email</label>
                  <input type="email" className="bg-transparent border-b border-white/20 pb-2 text-[14px] focus:outline-none focus:border-white transition-all rounded-none placeholder:text-white/10" placeholder="correo@.com" />
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-[10px] tracking-[0.3em] text-white/50 uppercase">Mensaje</label>
                <textarea rows={3} className="bg-transparent border-b border-white/20 pb-2 text-[14px] focus:outline-none focus:border-white transition-all resize-none rounded-none placeholder:text-white/10" placeholder="Escribe tu consulta..."></textarea>
              </div>

              <button className="group flex items-center justify-center gap-4 bg-white text-[#1c3865] py-4 px-8 overflow-hidden transition-all duration-300 hover:bg-white/90 shadow-xl">
                <span className="text-[11px] tracking-[0.3em] uppercase font-bold">Enviar</span>
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </div>

          {/* Right Column: Interactive Map */}
          <div className="relative w-full h-[500px] lg:h-[700px] border border-white/10 overflow-hidden shadow-2xl group animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124864.84656689408!2d-77.10091811654817!3d-12.043597086884323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c5f619ee3ec7%3A0x14206cb9cc452e4a!2sLima%2C%20Peru!5e0!3m2!1sen!2sus!4v1710860548123!5m2!1sen!2sus" 
              className="absolute inset-0 w-full h-full border-0 transition-all duration-[1s] ease-in-out"
              style={{
                filter: 'sepia(1) saturate(3) hue-rotate(190deg) brightness(0.7) contrast(1.2)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.filter = 'grayscale(1) brightness(0.9) contrast(1.1)')}
              onMouseLeave={(e) => (e.currentTarget.style.filter = 'sepia(1) saturate(3) hue-rotate(190deg) brightness(0.7) contrast(1.2)')}
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación del Estudio"
            />
            {/* Subtle Overlay to enhance the blue scale effect */}
            <div className="absolute inset-0 bg-[#1c3865]/10 pointer-events-none group-hover:opacity-0 transition-opacity duration-1000" />
          </div>

        </div>

      </div>
    </PageLayout>
  );
}
