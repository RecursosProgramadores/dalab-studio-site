import { PageLayout } from "@/components/PageLayout";

export default function Gallery() {
  return (
    <PageLayout>
      <div className="px-6 lg:px-16 py-20">
        <h1 className="font-display font-bold text-2xl tracking-[0.3em] text-foreground mb-16 text-center">
          GALLERY | GALERÍA
        </h1>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {Array.from({ length: 9 }).map((_, i) => {
            const heights = ["aspect-[3/4]", "aspect-square", "aspect-[4/3]"];
            return (
              <div
                key={i}
                className={`project-image-placeholder bg-muted ${heights[i % 3]} flex items-center justify-center break-inside-avoid`}
              >
                <span className="text-muted-foreground text-xs font-display tracking-[0.15em]">
                  IMAGE {i + 1}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </PageLayout>
  );
}
