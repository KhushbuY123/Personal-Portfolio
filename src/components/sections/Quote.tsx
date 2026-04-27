import { Quote as QuoteIcon } from "lucide-react";

export const Quote = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      <div className="container-page relative">
        <div className="max-w-4xl mx-auto flex items-start gap-4 md:gap-6">
          <QuoteIcon
            className="h-16 w-16 md:h-24 md:w-24 shrink-0 text-muted-foreground/30 -scale-x-100"
            strokeWidth={1.2}
          />
          <h2 className="font-display italic font-medium text-3xl md:text-5xl lg:text-6xl leading-[1.15] tracking-tight text-muted-foreground">
            Engineering: Turning{" "}
            <span className="inline-flex items-center gap-3">
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
              Impact.
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
};
