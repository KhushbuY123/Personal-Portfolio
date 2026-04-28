import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    no: "01",
    tag: "FINTECH",
    tagColor: "text-sky-400 border-sky-400/40 bg-sky-400/10",
    title: "Budget Brain",
    desc:
      "A smart budget tracking platform focused on helping users monitor spending patterns, plan savings, and make better financial decisions.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    status: "In Build Mode",
  },
  {
    no: "02",
    tag: "CLI",
    tagColor: "text-terminal-green border-terminal-green/40 bg-terminal-green/10",
    title: "Docgen",
    desc:
      "Engineered a Node.js CLI that automates backend documentation by scanning JavaScript/TypeScript code and using Gemini API to generate structured markdown files for API testing and project overview docs. Launching soon.",
    stack: ["Node.js", "JavaScript", "TypeScript", "Gemini API"],
    link: "https://github.com/KhushbuY123/Docgen",
    status: "Launching Soon",
  },
  {
    no: "03",
    tag: "PYTHON",
    tagColor: "text-primary border-primary/40 bg-primary/10",
    title: "Audio-Book",
    desc:
      "Built an audiobook application using PyPDF2, pyttsx3, and Tkinter to convert written text into spoken words. Improved user engagement by 40% and supports inclusive access for users with visual or physical impairments.",
    stack: ["Python", "PyPDF2", "pyttsx3", "Tkinter"],
    link: "https://github.com/KhushbuY123/Audio-Book",
  },
  {
    no: "04",
    tag: "WEATHER",
    tagColor: "text-accent border-accent/40 bg-accent/10",
    title: "Know Your Weather",
    desc:
      "A weather application built to practice API integration, dynamic data rendering, and real-time updates for current weather conditions.",
    stack: ["JavaScript", "CSS", "HTML", "Weather API"],
    link: "https://github.com/KhushbuY123/Weather-App",
    liveLink: "https://find-your-weather.vercel.app/",
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
                {p.link ? (
                  <div className="flex items-center gap-3">
                    {p.status && (
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                        {p.status}
                      </span>
                    )}
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-primary"
                    >
                      GitHub
                      <ArrowUpRight className="h-4 w-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                    </a>
                    {p.liveLink && (
                      <a
                        href={p.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-primary"
                      >
                        Live
                        <ArrowUpRight className="h-4 w-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                      </a>
                    )}
                  </div>
                ) : (
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    {p.status}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
