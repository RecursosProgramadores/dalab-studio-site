import { useState } from "react";
import { useParams } from "react-router-dom";
import { PageLayout } from "@/components/PageLayout";
import { SliderArrow } from "@/components/SliderArrow";

const SLIDE_COUNT = 6;

const slideLabels = [
  "Exterior Photo",
  "Floor Plan — Level 1",
  "Interior Photo",
  "Floor Plan — Level 2",
  "Detail Photo",
  "Section Drawing",
];

const infoFields = [
  { label: "Year", value: "2024" },
  { label: "Location", value: "Mexico City, MX" },
  { label: "Type", value: "Residential" },
  { label: "Built / Status", value: "Under Construction" },
  { label: "Surface / Area", value: "450 m²" },
  { label: "Client", value: "Private" },
  { label: "Collaborators", value: "—" },
  { label: "Design Team", value: "DALAB Studio" },
  { label: "Awards", value: "—" },
  { label: "Images", value: "12" },
];

export default function ProyectoDetalle() {
  const { slug } = useParams();
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + SLIDE_COUNT) % SLIDE_COUNT);
  const next = () => setCurrent((c) => (c + 1) % SLIDE_COUNT);

  const title = slug?.replace(/-/g, " ").toUpperCase() || "PROYECTO";

  return (
    <PageLayout>
      {/* Full-width media slider */}
      <div className="relative w-full h-[70vh] md:h-[90vh] bg-black overflow-hidden">
        {/* Slide content */}
        <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500">
          <div className="slider-placeholder w-full h-full bg-[hsl(220,10%,12%)] flex flex-col items-center justify-center gap-4">
            <span className="font-display text-white/30 text-xs tracking-[0.25em] uppercase">
              {slideLabels[current] || `Slide ${current + 1}`}
            </span>
            <span className="font-body text-white/15 text-[11px] tracking-widest">
              {current + 1} / {SLIDE_COUNT}
            </span>
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="absolute inset-y-0 left-4 md:left-8 flex items-center z-10">
          <SliderArrow direction="left" onClick={prev} />
        </div>
        <div className="absolute inset-y-0 right-4 md:right-8 flex items-center z-10">
          <SliderArrow direction="right" onClick={next} />
        </div>

        {/* Pagination dots */}
        <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex gap-2.5 z-10">
          {Array.from({ length: SLIDE_COUNT }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-primary w-6"
                  : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Slide counter */}
        <div className="absolute top-6 right-6 md:top-10 md:right-10 z-10">
          <span className="font-display text-white/50 text-xs tracking-[0.2em]">
            {current + 1}/{SLIDE_COUNT}
          </span>
        </div>
      </div>

      {/* Content section */}
      <div className="bg-background">
        {/* Project title */}
        <div className="px-6 md:px-12 lg:px-20 pt-12 md:pt-20 pb-4">
          <h1 className="font-display font-bold text-xl md:text-2xl tracking-[0.2em] text-foreground">
            {title}
          </h1>
          <div className="w-12 h-[2px] bg-primary mt-4" />
        </div>

        {/* Two-column layout */}
        <div className="px-6 md:px-12 lg:px-20 pb-16 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-20">
            {/* Description */}
            <div className="space-y-6">
              <p className="font-body text-sm md:text-[15px] leading-[1.9] text-foreground/75">
                The project emerges from a careful dialogue between built form and landscape. 
                Situated on a gently sloping site with mature vegetation, the design strategy 
                prioritizes the preservation of existing trees while creating a sequence of 
                interconnected spaces that blur the boundary between interior and exterior. 
                The material palette — raw concrete, weathered steel, and local stone — anchors 
                the building to its context while allowing the architecture to age gracefully.
              </p>
              <p className="font-body text-sm md:text-[15px] leading-[1.9] text-foreground/75">
                The program is organized across three levels that step down with the terrain, 
                minimizing excavation and maximizing views toward the valley. Each level operates 
                as a semi-independent pavilion connected by an open stairway that doubles as a 
                light well. Cross-ventilation and passive solar strategies reduce energy 
                consumption, while a green roof system integrates the building into the 
                surrounding canopy when viewed from above.
              </p>
              <p className="font-body text-sm md:text-[15px] leading-[1.9] text-foreground/75">
                Structural clarity guides every decision: exposed concrete frames define the 
                spatial rhythm, while floor-to-ceiling glazing dissolves the envelope on the 
                south-facing elevations. The result is a residence that feels simultaneously 
                monumental and intimate — a place of shelter that remains deeply connected to 
                the sky, the ground, and the passage of light throughout the day.
              </p>
            </div>

            {/* Metadata sidebar */}
            <div className="lg:border-l lg:border-border lg:pl-12">
              <div className="space-y-0">
                {infoFields.map((field, index) => (
                  <div
                    key={field.label}
                    className={`flex justify-between items-baseline py-4 ${
                      index < infoFields.length - 1 ? "border-b border-border" : ""
                    }`}
                  >
                    <span className="font-display text-[11px] tracking-[0.15em] uppercase text-foreground/50 font-medium">
                      {field.label}
                    </span>
                    <span className="font-body text-sm text-foreground text-right">
                      {field.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
