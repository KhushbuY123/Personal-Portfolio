const groups = [
  {
    label: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Tailwind", "MUI", "Redux Toolkit", "Framer Motion"],
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
          From systems code to orchestration to inference — the full toolkit.
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
        </div>
      </div>
    </section>
  );
};
