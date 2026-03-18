import { PageLayout } from "@/components/PageLayout";

export default function Contact() {
  return (
    <PageLayout>
      <div className="px-6 lg:px-16 py-20">
        <h1 className="font-display font-bold text-2xl tracking-[0.3em] text-foreground mb-16 text-center">
          CONTACT | CONTACTO
        </h1>
        <form className="max-w-lg mx-auto space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block font-display text-[11px] tracking-[0.15em] font-medium text-foreground mb-2">
              NAME | NOMBRE
            </label>
            <input
              type="text"
              className="w-full border border-border bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-foreground transition-colors duration-150"
            />
          </div>
          <div>
            <label className="block font-display text-[11px] tracking-[0.15em] font-medium text-foreground mb-2">
              EMAIL | CORREO
            </label>
            <input
              type="email"
              className="w-full border border-border bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-foreground transition-colors duration-150"
            />
          </div>
          <div>
            <label className="block font-display text-[11px] tracking-[0.15em] font-medium text-foreground mb-2">
              MESSAGE | MENSAJE
            </label>
            <textarea
              rows={6}
              className="w-full border border-border bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-foreground transition-colors duration-150 resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full border border-foreground bg-foreground text-background py-3 font-display text-xs tracking-[0.2em] font-medium hover:bg-background hover:text-foreground transition-colors duration-150"
          >
            SEND | ENVIAR
          </button>
        </form>
      </div>
    </PageLayout>
  );
}
