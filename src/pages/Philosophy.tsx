import { PageLayout } from "@/components/PageLayout";

export default function Philosophy() {
  return (
    <PageLayout>
      <div className="min-h-[70vh] flex items-center justify-center px-6 lg:px-24 py-20">
        <div className="max-w-3xl text-center">
          <h1 className="font-display font-bold text-2xl tracking-[0.3em] text-foreground mb-10">
            PHILOSOPHY | FILOSOFÍA
          </h1>
          <p className="font-body text-sm leading-8 text-foreground/80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <p className="font-body text-sm leading-8 text-foreground/80 mt-6">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
