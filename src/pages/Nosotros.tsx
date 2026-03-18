import { PageLayout } from "@/components/PageLayout";

const teamMembers = [
  { name: "NOMBRE APELLIDO", role: "DIRECTOR | DIRECTOR" },
  { name: "NOMBRE APELLIDO", role: "ARCHITECT | ARQUITECTO" },
  { name: "NOMBRE APELLIDO", role: "DESIGNER | DISEÑADOR" },
  { name: "NOMBRE APELLIDO", role: "PROJECT MANAGER | GERENTE" },
];

const flowSteps = [
  "CLIENTE",
  "ANÁLISIS",
  "CONCEPTO",
  "DISEÑO",
  "DESARROLLO",
  "CONSTRUCCIÓN",
  "ENTREGA",
];

export default function Nosotros() {
  return (
    <PageLayout>
      {/* Hero team photo */}
      <div className="w-full aspect-[21/9] bg-muted flex items-center justify-center">
        <span className="font-display text-muted-foreground tracking-[0.2em] text-sm">
          FOTO DEL EQUIPO
        </span>
      </div>

      {/* Certifications */}
      <section className="py-16 px-6 lg:px-16">
        <h2 className="font-display text-xs tracking-[0.2em] font-medium text-foreground mb-8 text-center">
          CERTIFICATIONS | CERTIFICACIONES
        </h2>
        <div className="flex justify-center gap-6 flex-wrap">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="w-16 h-16 border border-border flex items-center justify-center"
              style={{ borderRadius: "50%" }}
            >
              <span className="text-[10px] text-muted-foreground">{i + 1}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-6 lg:px-16">
        <h2 className="font-display text-xs tracking-[0.2em] font-medium text-foreground mb-10 text-center">
          TEAM | EQUIPO
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {teamMembers.map((member, i) => (
            <div key={i} className="text-center">
              <div className="aspect-square bg-muted mb-4 flex items-center justify-center">
                <span className="text-muted-foreground text-xs font-display tracking-[0.15em]">
                  PHOTO
                </span>
              </div>
              <p className="font-display text-sm font-medium tracking-[0.15em] text-foreground">
                {member.name}
              </p>
              <p className="font-body text-xs text-muted-foreground mt-1 tracking-[0.1em]">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Services flowchart */}
      <section className="py-16 px-6 lg:px-16">
        <h2 className="font-display text-xs tracking-[0.2em] font-medium text-foreground mb-10 text-center">
          SERVICES | SERVICIOS
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-0">
          {flowSteps.map((step, i) => (
            <div key={step} className="flex items-center">
              <div className="border border-foreground px-6 py-3">
                <span className="font-display text-[11px] tracking-[0.15em] font-medium text-foreground">
                  {step}
                </span>
              </div>
              {i < flowSteps.length - 1 && (
                <>
                  {/* Desktop arrow */}
                  <div className="hidden lg:block w-8 h-px bg-foreground relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-[5px] border-l-foreground border-y-[3px] border-y-transparent" />
                  </div>
                  {/* Mobile arrow */}
                  <div className="lg:hidden h-6 w-px bg-foreground relative mx-auto">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-t-[5px] border-t-foreground border-x-[3px] border-x-transparent" />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
