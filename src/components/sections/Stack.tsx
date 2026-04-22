const groups = [
  {
    label: "Languages",
    items: ["C", "C++", "Python", "Java", "JavaScript", "Rust", "Bash"],
  },
  {
    label: "Frameworks",
    items: ["Spring Boot", "React", "Next.js", "Express", "FastAPI", "Kafka", "PyTorch", "Wordpress"],
  },
  {
    label: "Cloud & Infra",
    items: ["AWS", "Docker", "Kubernetes", "Grafana", "Terraform", "GraphQL", "Cloudflare"],
  },
  {
    label: "AI & Data",
    items: ["LangChain", "LangGraph", "Ollama", "Claude", "MySQL", "MongoDB", "Redis", "PostgreSQL", "Cassandra"],
  },
];

export const Stack = () => {
  return (
    <section id="stack" className="py-24 section-divider">
      <div className="container-page">
        <p className="label-mono mb-6">// stack</p>
        <h2 className="font-display font-bold text-5xl md:text-6xl tracking-tight">Tools I think in.</h2>
        <p className="mt-4 max-w-xl text-muted-foreground">
          From systems programming to orchestration to inference — the full picture.
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px rounded-xl border border-border bg-border overflow-hidden">
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
