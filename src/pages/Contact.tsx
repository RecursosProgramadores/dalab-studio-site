import { PageLayout } from "@/components/PageLayout";

const offices = [
  {
    city: "DALAB Lima",
    address: "Calle Las Begonias 457\nPiso 8, San Isidro\nLima 15073, Perú",
    email: "lima@dalabcr.com",
    phone: "+51 1 422 5600",
    mapUrl: "https://maps.google.com",
  },
  {
    city: "DALAB San José",
    address: "Avenida Central 120\nBarrio Escalante\nSan José 10101, Costa Rica",
    email: "sanjose@dalabcr.com",
    phone: "+506 2234 5678",
    mapUrl: "https://maps.google.com",
  },
];

const enquiries = [
  { label: "Media enquiries | Consultas de prensa", email: "press@dalabcr.com" },
  { label: "New projects | Nuevos proyectos", email: "projects@dalabcr.com" },
  { label: "General enquiries | Consultas generales", email: "info@dalabcr.com" },
  { label: "Careers | Carreras", email: "careers@dalabcr.com" },
];

const socials = [
  { label: "DALAB Instagram", url: "https://instagram.com/dalabcr" },
  { label: "DALAB LinkedIn", url: "https://linkedin.com/company/dalabcr" },
  { label: "DALAB Facebook", url: "https://facebook.com/dalabcr" },
];

export default function Contact() {
  return (
    <PageLayout>
      <div className="px-6 lg:px-16 py-20 max-w-[900px] mx-auto">

        {/* Offices */}
        <section className="mb-24">
          <h1 className="font-display font-bold text-lg tracking-[0.25em] text-foreground mb-16">
            OFFICES | OFICINAS
          </h1>

          <div className="space-y-16">
            {offices.map((office, i) => (
              <div key={i}>
                <h2 className="font-display font-semibold text-sm tracking-[0.2em] text-foreground mb-6">
                  {office.city}
                </h2>
                <div className="font-body text-sm leading-7 text-foreground/80 space-y-4">
                  <p className="whitespace-pre-line">{office.address}</p>
                  <p>
                    <a
                      href={`mailto:${office.email}`}
                      className="underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground transition-colors duration-150"
                    >
                      {office.email}
                    </a>
                  </p>
                  <p>
                    <a
                      href={`tel:${office.phone.replace(/\s/g, "")}`}
                      className="underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground transition-colors duration-150"
                    >
                      {office.phone}
                    </a>
                  </p>
                  <p>
                    <a
                      href={office.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground transition-colors duration-150"
                    >
                      View on Google Maps
                    </a>
                  </p>
                </div>

                {i < offices.length - 1 && (
                  <hr className="border-border mt-16" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Enquiries */}
        <section className="mb-24">
          <h2 className="font-display font-bold text-lg tracking-[0.25em] text-foreground mb-12">
            ENQUIRIES | CONSULTAS
          </h2>
          <div className="space-y-8">
            {enquiries.map((item, i) => (
              <div key={i}>
                <h3 className="font-display text-xs tracking-[0.15em] font-semibold text-foreground mb-2">
                  {item.label}
                </h3>
                <a
                  href={`mailto:${item.email}`}
                  className="font-body text-sm text-foreground/80 underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground transition-colors duration-150"
                >
                  {item.email}
                </a>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-border mb-24" />

        {/* Social */}
        <section className="mb-24">
          <h2 className="font-display font-bold text-lg tracking-[0.25em] text-foreground mb-12">
            FOLLOW US ON | SÍGUENOS EN
          </h2>
          <ul className="space-y-4">
            {socials.map((item, i) => (
              <li key={i}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-foreground/80 underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground transition-colors duration-150"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </section>

      </div>
    </PageLayout>
  );
}
