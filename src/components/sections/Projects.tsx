import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    no: "01",
    tag: "INFRA",
    tagColor: "text-sky-400 border-sky-400/40 bg-sky-400/10",
    title: "K8s Multi-Store Orchestration Platform",
    desc:
      "One-click provision and teardown of isolated WordPress stores across 100+ instances — namespaced, secret-managed, PVC-bound. Idempotent lifecycle from a single React UI.",
    stack: ["K8s", "React", "Docker", "Redis"],
  },
  {
    no: "02",
    tag: "HFT",
    tagColor: "text-terminal-green border-terminal-green/40 bg-terminal-green/10",
    title: "Real-Time Oracle Price Feed",
    desc:
      "~40ms price ingestion latency for HFT operations. Redis caching layer, PostgreSQL persistence, health-checked REST endpoints, Prometheus metrics, live Svelte dashboard.",
    stack: ["Rust", "Redis", "Svelte"],
  },
  {
    no: "03",
    tag: "OSS",
    tagColor: "text-primary border-primary/40 bg-primary/10",
    title: "cuSuite — CUDA Environment Manager",
    desc:
      "GPU, driver, CUDA, and cuDNN version automation via NVIDIA system APIs. 80% setup time reduction. 30+ REST API compatibility tests. v1.13.9 released on GitHub.",
    stack: ["Python", "Bash", "API"],
  },
  {
    no: "04",
    tag: "VISION",
    tagColor: "text-accent border-accent/40 bg-accent/10",
    title: "All-Weather Object Detection",
    desc:
      "End-to-end pipeline that recovers detection accuracy in fog, rain and low-light. Custom dehazing front-end fused with YOLO heads, fine-tuned for paramilitary deployment.",
    stack: ["Python", "YOLO", "OpenCV", "Streamlit"],
  },
  {
    no: "05",
    tag: "TOOL",
    tagColor: "text-fuchsia-400 border-fuchsia-400/40 bg-fuchsia-400/10",
    title: "ds-cli — Dataset Quality Auditor",
    desc:
      "CLI utility that audits image / text datasets for duplicates, label drift, class imbalance and leakage. Generates a publishable report with reproducible seeds.",
    stack: ["Python", "NumPy", "Bash"],
  },
  {
    no: "06",
    tag: "AGENTS",
    tagColor: "text-orange-400 border-orange-400/40 bg-orange-400/10",
    title: "Local Agentic Workbench",
    desc:
      "Self-hosted agent runtime with tool calling, memory, and a streaming chat UI. Runs Llama models via llama.cpp, exposes a FastAPI control plane, ships with React studio.",
    stack: ["FastAPI", "React", "llama.cpp", "Python"],
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 section-divider scroll-mt-20">
      <div className="container-page">
        <p className="label-mono mb-6">// projects</p>
        <h2 className="font-display font-bold text-5xl md:text-6xl tracking-tight">Things I've shipped.</h2>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Production constraints, real stakes, non-trivial problems.
        </p>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p) => (
            <article
              key={p.no}
              className="group relative flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-xs text-muted-foreground">{p.no}</span>
                <span className={`rounded border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${p.tagColor}`}>
                  {p.tag}
                </span>
              </div>
              <h3 className="font-display font-bold text-xl leading-snug">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{p.desc}</p>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span key={s} className="chip text-[10px] py-0.5">
                      <span className="h-1 w-1 rounded-full bg-primary/60" />
                      {s}
                    </span>
                  ))}
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </div>
            </article>
          ))}
        </div>

        {/* OSS strip */}
        <div className="mt-8 rounded-xl border border-border bg-card p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <svg viewBox="0 0 24 24" className="h-7 w-7 fill-foreground" aria-hidden>
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.74 1.27 3.41.97.1-.75.41-1.27.74-1.56-2.55-.29-5.24-1.27-5.24-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17.91-.25 1.89-.38 2.86-.38s1.95.13 2.86.38c2.18-1.48 3.14-1.17 3.14-1.17.62 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.07 0 4.4-2.69 5.36-5.25 5.65.42.36.79 1.07.79 2.16v3.2c0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
            </svg>
            <div className="font-mono text-sm text-muted-foreground">Systems · AI · Open Source</div>
          </div>
          <div className="flex items-center gap-10">
            <div>
              <div className="font-display text-3xl font-bold">50+</div>
              <div className="label-mono mt-1">OSS Repos</div>
            </div>
            <div>
              <div className="font-display text-3xl font-bold">100+</div>
              <div className="label-mono mt-1">Stars Earned</div>
            </div>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-4 py-2 font-mono text-sm hover:border-primary/50 hover:text-primary transition-colors"
          >
            View GitHub <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* PR contributions */}
        <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-px rounded-xl border border-border bg-border overflow-hidden">
          {[
            { name: "NGAOpenData", pr: "#17", desc: "Geospatial data tooling — open government dataset pipeline improvement" },
            { name: "adenhq (YC '20)", pr: "#2348", desc: "YC-backed productivity platform — agent infrastructure fix" },
            { name: "Roboflow", pr: "#262", desc: "Computer vision toolkit — dataset pipeline improvement" },
            { name: "Mindscape", pr: "#14", desc: "AI reasoning framework — mental health monitoring" },
          ].map((c) => (
            <div key={c.name} className="bg-card p-5">
              <p className="font-mono font-semibold text-primary">{c.name}</p>
              <p className="mt-1 font-mono text-xs text-muted-foreground">PR {c.pr}</p>
              <p className="mt-3 text-sm text-foreground/80 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
