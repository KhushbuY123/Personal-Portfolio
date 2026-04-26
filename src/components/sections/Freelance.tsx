import { ArrowUpRight, Briefcase, Code2, Globe, Smartphone, Mail } from "lucide-react";

const services = [
  {
    icon: Globe,
    tag: "WEB",
    title: "Web Apps & Landing Pages",
    desc: "Production-grade React + TypeScript builds. Fast, accessible, and themed end-to-end.",
  },
  {
    icon: Code2,
    tag: "API",
    title: "Backends & APIs",
    desc: "REST and serverless endpoints, auth, databases, and integrations wired cleanly.",
  },
  {
    icon: Smartphone,
    tag: "PWA",
    title: "Progressive Web Apps",
    desc: "Installable, offline-ready web apps with native-like UX — no app store required.",
  },
];

export const Freelance = () => {
  return (
    <section id="freelance" className="py-24 section-divider scroll-mt-20">
      <div className="container-page">
        <div className="flex items-center gap-3 mb-6">
          <p className="label-mono">// freelance</p>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-terminal-green/40 bg-terminal-green/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-terminal-green">
            <span className="h-1.5 w-1.5 rounded-full bg-terminal-green animate-pulse" />
            Open for work
          </span>
        </div>

        <h2 className="font-display font-bold text-5xl md:text-6xl tracking-tight">
          Available for freelance.
        </h2>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Outside of my day job, I take on a small number of focused builds — web apps, backends,
          and database work. Async-friendly, ship-first, no fluff.
        </p>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {services.map((s) => (
            <article
              key={s.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="rounded-md border border-border bg-background p-2">
                  <s.icon className="h-4 w-4 text-primary" />
                </div>
                <span className="rounded border border-primary/40 bg-primary/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary">
                  {s.tag}
                </span>
              </div>
              <h3 className="font-display font-bold text-xl leading-snug">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </article>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-8 rounded-xl border border-border bg-card p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="rounded-md border border-border bg-background p-2.5">
              <Briefcase className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-display font-bold text-xl">Have a project in mind?</p>
              <p className="mt-1 font-mono text-xs text-muted-foreground">
                Typical reply within 24h · Remote · Worldwide
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 font-mono text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Mail className="h-4 w-4" /> Hire me
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-4 py-2 font-mono text-sm hover:border-primary/50 hover:text-primary transition-colors"
            >
              See past work <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
