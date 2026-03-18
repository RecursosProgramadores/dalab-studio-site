import { ChevronLeft, ChevronRight } from "lucide-react";

interface SliderArrowProps {
  direction: "left" | "right";
  onClick: () => void;
}

export function SliderArrow({ direction, onClick }: SliderArrowProps) {
  return (
    <button
      onClick={onClick}
      className="w-10 h-10 border border-primary-foreground/50 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/10 transition-colors duration-150"
      style={{ borderRadius: "50%" }}
      aria-label={direction === "left" ? "Previous" : "Next"}
    >
      {direction === "left" ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
    </button>
  );
}
