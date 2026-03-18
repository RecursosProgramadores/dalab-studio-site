import { PageLayout } from "@/components/PageLayout";

const services = [
  { title: "ARCHITECTURE | ARQUITECTURA", desc: "Comprehensive architectural design from concept to completion." },
  { title: "INTERIOR DESIGN | DISEÑO INTERIOR", desc: "Thoughtful interior spaces that complement the architecture." },
  { title: "URBAN PLANNING | URBANISMO", desc: "Strategic urban development and master planning." },
  { title: "CONSULTING | CONSULTORÍA", desc: "Expert guidance on building projects and regulations." },
];

export default function Services() {
  return (
    <PageLayout>
      <div className="px-6 lg:px-16 py-20">
        <h1 className="font-display font-bold text-2xl tracking-[0.3em] text-foreground mb-16 text-center">
          SERVICES | SERVICIOS
        </h1>
        <div className="max-w-3xl mx-auto space-y-12">
          {services.map((s) => (
            <div key={s.title} className="border-b border-border pb-8">
              <h2 className="font-display text-sm font-medium tracking-[0.2em] text-foreground mb-3">
                {s.title}
              </h2>
              <p className="font-body text-sm leading-7 text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
