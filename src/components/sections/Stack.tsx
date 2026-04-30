const groups = [
  {
    label: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Tailwind", "MUI", "Redux Toolkit", "Framer Motion", "Shadcn","Scss"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "Mongoose", "REST API"],
  },
  {
    label: "Databases",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    label: "Cloud & Tools",
    items: ["Vercel", "Render", "Git"],
  },
];

export const Stack = () => {
  return (
    <section id="stack" className="py-24 section-divider scroll-mt-20">
      <div className="container-page">
        <p className="label-mono mb-6">// stack</p>
        <h2 className="font-display font-bold text-5xl md:text-6xl tracking-tight">My daily stack.</h2>
        <p className="mt-4 max-w-xl text-muted-foreground">
          From clean frontends to type-safe APIs to scalable databases — the full-stack toolkit.
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px rounded-xl border border-border bg-border overflow-hidden">
          {groups.map((g) => (
            <div key={g.label} className="bg-card p-6">
              <p className="label-mono mb-4">{g.label}</p>
              <div className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span key={it} className="chip hover:border-primary/50 hover:text-primary transition-colors cursor-default">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Coming soon — work in progress */}
          <div className="relative bg-card p-6 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-60" />
            <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl animate-pulse" />
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <p className="label-mono">// in progress</p>
                <span className="inline-flex items-center gap-1.5 rounded border border-terminal-amber/40 bg-terminal-amber/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-terminal-amber">
                  <span className="h-1.5 w-1.5 rounded-full bg-terminal-amber animate-pulse" />
                  Loading
                </span>
              </div>
              <p className="font-display font-bold text-lg leading-snug">
                Working on myself —<br />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  new skills compiling…
                </span>
              </p>
              <p className="mt-3 font-mono text-xs text-muted-foreground leading-relaxed">
                $ learning --next
                <br />
                <span className="text-primary">›</span> always shipping the next version of me.
              </p>
              <div className="mt-4 h-1 w-full rounded-full bg-border overflow-hidden">
                <div className="h-full w-2/3 bg-gradient-to-r from-primary to-accent animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
