import { useState } from "react";
import { PageLayout } from "@/components/PageLayout";
import { SliderArrow } from "@/components/SliderArrow";

const SLIDE_COUNT = 5;

export default function Index() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + SLIDE_COUNT) % SLIDE_COUNT);
  const next = () => setCurrent((c) => (c + 1) % SLIDE_COUNT);

  return (
    <PageLayout>
      <div className="relative w-full h-[calc(100vh-4rem)] bg-muted">
        {/* Video placeholder */}
        <div className="video-slider-placeholder absolute inset-0 flex items-center justify-center">
          <span className="font-display text-muted-foreground tracking-[0.2em] text-sm">
            VIDEO {current + 1}
          </span>
        </div>

        {/* Arrows */}
        <div className="absolute inset-y-0 left-6 flex items-center">
          <SliderArrow direction="left" onClick={prev} />
        </div>
        <div className="absolute inset-y-0 right-6 flex items-center">
          <SliderArrow direction="right" onClick={next} />
        </div>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
          {Array.from({ length: SLIDE_COUNT }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 transition-colors duration-150 ${
                i === current ? "bg-foreground" : "bg-foreground/30"
              }`}
              style={{ borderRadius: "50%" }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
