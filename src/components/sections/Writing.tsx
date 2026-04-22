const posts = [
  {
    source: "Medium · Oct 2025",
    title: "When the Government is the One Who Bought Everything",
    excerpt:
      "Ownership is never absolute. The state underwrites every property claim — it doesn't just regulate ownership, it underwrites and can revoke it. In that sense, the government is the meta-owner of everything.",
    quote: "The thought experiment of one man buying the world collapses into absurdity — he'd end up reinventing government.",
  },
  {
    source: "Medium · Sep 2025",
    title: "What Happens If You Could Secretly Print 2¹⁰⁰ Hundred-Dollar Bills?",
    excerpt:
      "A thought experiment in economics — infinite money still can't escape the feedback loops of markets. The system pushes back harder the more you spend.",
  },
  {
    source: "LinkedIn · Article",
    title: "cuSuite — Install Fast, Build Faster",
    excerpt:
      "Automated GPU, driver, and cuDNN version checks. Cut CUDA setup time by 80%. Tested across 30+ driver configurations. Released v1.13.9-12 on GitHub.",
  },
];

export const Writing = () => {
  return (
    <section id="writing" className="py-24 section-divider scroll-mt-20">
      <div className="container-page">
        <p className="label-mono mb-6">// writing</p>
        <h2 className="font-display font-bold text-5xl md:text-6xl tracking-tight">Things I've written.</h2>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Technical deep-dives, economics thought experiments, and the occasional study of how systems — human or
          otherwise — actually work.
        </p>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {posts.map((p, i) => (
            <article
              key={i}
              className="rounded-xl border border-border bg-card p-6 hover:border-primary/40 transition-colors"
            >
              <p className="font-mono text-xs uppercase tracking-wider text-primary flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {p.source}
              </p>
              <h3 className="mt-4 font-display font-bold text-xl leading-snug">{p.title}</h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{p.excerpt}</p>
              {p.quote && (
                <blockquote className="mt-4 border-l-2 border-primary/60 pl-3 text-xs italic text-muted-foreground">
                  {p.quote}
                </blockquote>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
