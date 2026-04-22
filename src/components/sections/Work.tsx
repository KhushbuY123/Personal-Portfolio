const roles = [
  {
    period: { from: "Jul 2025", to: "Present", active: true },
    title: "SDE Intern",
    org: "Emerson · Hyderabad, India",
    bullets: [
      "Shipped a full-stack invoicing system that cut manual billing effort by **90%** — React frontend, FastAPI backend, C++ computation engines for high-throughput processing.",
      "Architected a session-isolated agentic backend that handles **1,000+ concurrent users** at TTFT p95 under 3 seconds, running entirely on local infrastructure for air-gapped security compliance.",
      "Built a RAG pipeline (LangChain + FAISS) with custom chunking and retrieval strategies — meaningfully improved accuracy on internal knowledge queries.",
    ],
  },
  {
    period: { from: "Jan 2026", to: "Present", active: true },
    title: "Research Intern",
    org: "DRDO-IRDE · Grant No. DFTM/034",
    bullets: [
      "Developing Transformer-based models that restore weather-degraded optical sensor images with **92% structural similarity** — practically useful in adverse field conditions.",
      "Cut inference latency by **90%** through network pruning and aggressive pipeline optimisation, making real-time deployment viable.",
      "**150%+ gain** in scene context analysis accuracy over baseline using custom image enhancement algorithms.",
    ],
  },
  {
    period: { from: "Feb 2024", to: "Oct 2024", active: false },
    title: "Core Contributor",
    org: "Project Sarvadrushti · Open Source",
    bullets: [
      "Built and benchmarked Vision Enhancement algorithms for paramilitary use — fog, rain, and haze removal from live optical feeds.",
      "REST APIs and ingestion pipelines at **sub-500ms latency** with integrity checks and automatic fallback handling.",
      "Modified CycleGAN architecture improved model robustness by **~40%** in low-visibility scenarios. Directly contributed to the grant proposal.",
    ],
  },
];

const renderBullet = (text: string) => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) =>
    p.startsWith("**") && p.endsWith("**") ? (
      <strong key={i} className="font-semibold text-foreground">
        {p.slice(2, -2)}
      </strong>
    ) : (
      <span key={i}>{p}</span>
    )
  );
};

export const Work = () => {
  return (
    <section id="work" className="py-24 section-divider">
      <div className="container-page">
        <p className="label-mono mb-6">// work</p>
        <h2 className="font-display font-bold text-5xl md:text-6xl tracking-tight">Where I've worked.</h2>

        <div className="mt-16 space-y-16">
          {roles.map((r, idx) => (
            <div key={idx} className="grid md:grid-cols-[180px_1fr] gap-8 md:gap-12">
              <div className="font-mono text-sm text-muted-foreground">
                <div>{r.period.from}</div>
                <div>→ {r.period.to}</div>
                {r.period.active && (
                  <span className="mt-3 inline-flex items-center gap-1.5 rounded border border-terminal-green/40 bg-terminal-green/10 px-2 py-1 text-xs uppercase tracking-wider text-terminal-green">
                    Active
                  </span>
                )}
              </div>
              <div>
                <h3 className="font-display font-bold text-3xl md:text-4xl">{r.title}</h3>
                <p className="mt-2 font-mono text-sm text-muted-foreground">{r.org}</p>
                <ul className="mt-6 space-y-3 text-foreground/85 leading-relaxed">
                  {r.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="font-mono text-primary mt-0.5">//</span>
                      <span>{renderBullet(b)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
