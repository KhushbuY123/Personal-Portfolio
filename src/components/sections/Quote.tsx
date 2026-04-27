import { Quote as QuoteIcon } from "lucide-react";

export const Quote = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      <div className="container-page relative">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <QuoteIcon
            className="h-12 w-12 md:h-16 md:w-16 text-muted-foreground/30 -scale-x-100 mb-4"
            strokeWidth={1.2}
          />
          <h2 className="font-display italic font-medium text-3xl md:text-5xl lg:text-6xl leading-[1.2] tracking-tight text-muted-foreground">
            "Engineering: Turning{" "}
            <span className="inline-flex items-center gap-3 align-middle">
              <span className="hidden md:inline-block h-px w-8 bg-border" />
              <span className="not-italic font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Curiosity
              </span>
              <span className="text-foreground/70">into</span>
              <span className="not-italic font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Code
              </span>
              <span className="hidden md:inline-block h-px w-8 bg-border" />
            </span>
            <br />
            then{" "}
            <span className="not-italic font-bold text-foreground bg-primary/15 px-3 py-0.5 rounded-md">
              Impact
            </span>
            <span className="text-muted-foreground">."</span>
          </h2>
        </div>
      </div>
    </section>
  );
};
