import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    no: "01",
    tag: "WEB",
    tagColor: "text-sky-400 border-sky-400/40 bg-sky-400/10",
    title: "Full-Stack E-Commerce Platform",
    desc:
      "Production-grade storefront with product catalog, cart, checkout, and admin dashboard. Server-side rendering, optimized queries, and a clean component system.",
    stack: ["Next.js", "Node.js", "MongoDB", "Tailwind"],
  },
  {
    no: "02",
    tag: "API",
    tagColor: "text-terminal-green border-terminal-green/40 bg-terminal-green/10",
    title: "REST API & Auth Service",
    desc:
      "Type-safe REST endpoints with JWT auth, role-based access, and rate limiting. Postgres schema designed for scale, with sub-100ms p95 on hot endpoints.",
    stack: ["Node.js", "Express", "PostgreSQL", "TypeScript"],
  },
  {
    no: "03",
    tag: "PWA",
    tagColor: "text-primary border-primary/40 bg-primary/10",
    title: "Installable Progressive Web App",
    desc:
      "Offline-first PWA with service workers, push-ready manifest, and native-like UX. Lighthouse 95+ across performance, accessibility, and best practices.",
    stack: ["React", "Vite", "Workbox", "Tailwind"],
  },
  {
    no: "04",
    tag: "UI",
    tagColor: "text-accent border-accent/40 bg-accent/10",
    title: "Component Library & Design System",
    desc:
      "Reusable React + Tailwind components with theming, dark mode, and accessibility baked in. Drives consistent UI across multiple internal products.",
    stack: ["React", "TypeScript", "Tailwind", "Radix"],
  },
  {
    no: "05",
    tag: "DASH",
    tagColor: "text-fuchsia-400 border-fuchsia-400/40 bg-fuchsia-400/10",
    title: "Realtime Analytics Dashboard",
    desc:
      "Interactive dashboard with charts, filters, and live updates. Redux Toolkit for state, Framer Motion for transitions, and a responsive grid that holds up on mobile.",
    stack: ["React", "Redux Toolkit", "Framer Motion", "REST API"],
  },
  {
    no: "06",
    tag: "WEB",
    tagColor: "text-orange-400 border-orange-400/40 bg-orange-400/10",
    title: "Marketing Site & CMS",
    desc:
      "SEO-first marketing site with dynamic routing, MDX-driven content, and an editor-friendly CMS. Deployed on Vercel with edge caching and instant rollbacks.",
    stack: ["Next.js", "MongoDB", "Mongoose", "Vercel"],
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
