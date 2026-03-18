import { useState } from "react";
import { useParams } from "react-router-dom";
import { PageLayout } from "@/components/PageLayout";
import { SliderArrow } from "@/components/SliderArrow";

const SLIDE_COUNT = 5;

const infoFields = [
  { label: "YEAR | AÑO", value: "—" },
  { label: "LOCATION | UBICACIÓN", value: "—" },
  { label: "TYPE | TIPO", value: "—" },
  { label: "BUILT | CONSTRUIDO", value: "—" },
  { label: "SURFACE | SUPERFICIE", value: "—" },
  { label: "CLIENT | CLIENTE", value: "—" },
  { label: "COLLABORATORS | COLABORADORES", value: "—" },
  { label: "DESIGN TEAM | EQUIPO DE DISEÑO", value: "—" },
  { label: "AWARDS | PREMIOS", value: "—" },
  { label: "IMAGES | IMÁGENES", value: "—" },
];

export default function ProyectoDetalle() {
  const { slug } = useParams();
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + SLIDE_COUNT) % SLIDE_COUNT);
  const next = () => setCurrent((c) => (c + 1) % SLIDE_COUNT);

  const title = slug?.replace(/-/g, " ").toUpperCase() || "PROYECTO";

  return (
    <PageLayout>
      {/* Media slider */}
      <div className="relative w-full aspect-[16/9] bg-muted">
        <div className="project-image-placeholder absolute inset-0 flex items-center justify-center">
          <span className="font-display text-muted-foreground tracking-[0.2em] text-sm">
            SLIDE {current + 1}
          </span>
        </div>

        <div className="absolute inset-y-0 left-6 flex items-center">
          <SliderArrow direction="left" onClick={prev} />
        </div>
        <div className="absolute inset-y-0 right-6 flex items-center">
          <SliderArrow direction="right" onClick={next} />
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
          {Array.from({ length: SLIDE_COUNT }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 transition-colors duration-150 ${
                i === current ? "bg-foreground" : "bg-foreground/30"
              }`}
              style={{ borderRadius: "50%" }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="px-6 lg:px-16 py-12 lg:py-20">
        <h1 className="font-display font-bold text-2xl tracking-[0.2em] text-foreground mb-10">
          {title}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Description */}
          <div>
            <p className="font-body text-sm leading-7 text-foreground/80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </div>

          {/* Info table */}
          <div>
            <table className="w-full">
              <tbody>
                {infoFields.map((field) => (
                  <tr key={field.label} className="border-b border-border">
                    <td className="py-3 pr-4 font-display text-[11px] tracking-[0.15em] font-medium text-foreground">
                      {field.label}
                    </td>
                    <td className="py-3 font-body text-sm text-muted-foreground">
                      {field.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
