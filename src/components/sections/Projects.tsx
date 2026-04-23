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
      </div>
    </section>
  );
};
