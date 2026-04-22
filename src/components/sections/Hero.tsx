export const Hero = () => {
  return (
    <section id="about" className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="container-page relative grid md:grid-cols-[1.4fr_1fr] gap-12 items-center">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-terminal-green animate-ping opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-terminal-green" />
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Available · SDE & AI/ML · 2026
            </span>
          </div>

          <h1 className="font-display font-bold text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
            Building things
            <br />
            <span className="italic font-display text-muted-foreground/80">
              for{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent not-italic font-display italic">
                impact.
              </span>
            </span>
            <span className="text-primary animate-blink">|</span>
          </h1>

          <p className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
            I'm <span className="text-foreground font-medium">Khushbu Yadav</span> — I build systems that run in
            production and models that run in the real world. Currently shipping agentic AI experiences and
            advancing applied research in computer vision. CS final year.
          </p>

          <div className="mt-10 flex flex-wrap gap-3 font-mono text-xs text-muted-foreground">
            <span className="chip">→ scroll to explore</span>
            <span className="chip">↳ /work</span>
            <span className="chip">↳ /projects</span>
            <span className="chip">↳ /terminal</span>
          </div>
        </div>

        {/* Tesseract emblem */}
        <div className="relative mx-auto w-full max-w-sm aspect-square">
          <div className="absolute inset-0 rounded-full border border-border" />
          <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full animate-spin-slow">
            <defs>
              <path id="circle" d="M 100,100 m -90,0 a 90,90 0 1,1 180,0 a 90,90 0 1,1 -180,0" />
            </defs>
            <text className="fill-muted-foreground font-mono text-[9px] tracking-[0.3em] uppercase">
              <textPath href="#circle">a tesseract is to the cube as the cube is to the square ·</textPath>
            </text>
          </svg>
          <div className="absolute inset-8 rounded-full bg-card border border-border flex items-center justify-center overflow-hidden">
            <svg viewBox="0 0 200 200" className="w-3/4 h-3/4 text-foreground/80">
              <g fill="none" stroke="currentColor" strokeWidth="0.8">
                <rect x="40" y="40" width="120" height="120" />
                <rect x="65" y="65" width="70" height="70" />
                <line x1="40" y1="40" x2="65" y2="65" />
                <line x1="160" y1="40" x2="135" y2="65" />
                <line x1="40" y1="160" x2="65" y2="135" />
                <line x1="160" y1="160" x2="135" y2="135" />
              </g>
            </svg>
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-center">
            <p className="font-display font-bold tracking-wider text-primary">KHUSHBU YADAV</p>
            <p className="label-mono mt-1">SDE & AGENTS · CS · '26 · INDIA</p>
          </div>
        </div>
      </div>
    </section>
  );
};
