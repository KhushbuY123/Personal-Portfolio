import { ArrowLeft, ArrowUpRight, Sparkles, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Contact";
import { ScrollToTop } from "@/components/ScrollToTop";

const miniProjects = [
  {
    no: "01",
    tag: "GAME",
    tagColor: "text-sky-400 border-sky-400/40 bg-sky-400/10",
    emoji: "🎮",
    title: "Simon Says",
    desc:
      "Classic memory game built with vanilla JavaScript. Tracks user sequences, increases difficulty per level, and stores the highest score — my first real dive into DOM events and game loops.",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://simon-says-seven-gules.vercel.app/",
    status: "Live",
  },
  {
    no: "02",
    tag: "UTILITY",
    tagColor: "text-terminal-green border-terminal-green/40 bg-terminal-green/10",
    emoji: "🌡️",
    title: "Temperature Converter",
    desc:
      "A clean React app to convert between Celsius, Fahrenheit, and Kelvin in real time. Built while learning controlled components, hooks, and reactive state updates.",
    stack: ["React", "Hooks", "Tailwind"],
    link: "https://temperature-converter-snowy-seven.vercel.app/",
    status: "Live",
  },
  {
    no: "03",
    tag: "FUN",
    tagColor: "text-fuchsia-400 border-fuchsia-400/40 bg-fuchsia-400/10",
    emoji: "😂",
    title: "Meme Generator",
    desc:
      "Create custom memes by uploading your own image, GIF, or video, adding top and bottom text, and downloading the final meme instantly.",
    stack: ["React", "CSS"],
    link: "https://khushbuy123.github.io/Meme-Generator/",
    status: "Live",
  },
  {
    no: "04",
    tag: "PRODUCTIVITY",
    tagColor: "text-primary border-primary/40 bg-primary/10",
    emoji: "✅",
    title: "NexTask",
    desc:
      "Minimal task manager with add, complete, and delete actions. Persists tasks in localStorage so nothing is lost on refresh — a small project that taught me a lot about state.",
    stack: ["React", "Tailwind"],
    link: "https://nex-task-five.vercel.app/",
    status: "Live",
  },
  {
    no: "05",
    tag: "UTILITY",
    tagColor: "text-accent border-accent/40 bg-accent/10",
    emoji: "🎨",
    title: "Color Picker",
    desc:
      "Random color generator that creates fresh palettes instantly. Built to practice DOM updates, event handling, and visual UI feedback.",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://khushbuy123.github.io/Color-Picker/",
    status: "Live",
  },
  {
    no: "06",
    tag: "API",
    tagColor: "text-orange-400 border-orange-400/40 bg-orange-400/10",
    emoji: "🤣",
    title: "Dad's Joke",
    desc:
      "A lightweight fun app that serves random dad jokes to users with a clean one-click interaction flow.",
    stack: ["JavaScript", "API", "HTML/CSS"],
    link: "https://khushbuy123.github.io/Dad-s-Joke/",
    status: "Live",
  },
];

const MiniProjects = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-28">
        {/* Hero */}
        <section className="container-page pb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            back to home
          </Link>

          <div className="mt-8 flex items-center gap-2">
            <Wrench className="h-4 w-4 text-primary" />
            <p className="label-mono">// the lab — experiments & tools</p>
          </div>

          <h1 className="mt-4 font-display font-bold text-5xl md:text-6xl lg:text-7xl tracking-tight">
            Built to{" "}
            <span className="italic font-medium text-primary">learn</span>,
            <br />
            shared to{" "}
            <span className="relative inline-block">
              <span className="relative z-10">inspire</span>
              <span className="absolute inset-x-0 bottom-1 h-3 bg-primary/20 -z-0" />
            </span>
            .
          </h1>

          <p className="mt-6 max-w-2xl text-muted-foreground leading-relaxed">
            A collection of small but meaningful projects I built while learning React, JavaScript,
            and web fundamentals. Each one taught me something new — from DOM manipulation to API
            integration. Tiny in scope, huge in lessons.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="chip">
              <Sparkles className="h-3 w-3 text-primary" />
              {miniProjects.length} lab experiments
            </span>
            <span className="chip">
              <span className="h-1.5 w-1.5 rounded-full bg-terminal-green animate-pulse" />
              learning never stops
            </span>
          </div>
        </section>

        {/* Grid */}
        <section className="container-page pb-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {miniProjects.map((p) => (
              <article
                key={p.no}
                className="group relative flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-xs text-muted-foreground">{p.no}</span>
                  <span
                    className={`rounded border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${p.tagColor}`}
                  >
                    {p.tag}
                  </span>
                </div>

                <div className="text-4xl mb-3" aria-hidden="true">
                  {p.emoji}
                </div>

                <h2 className="font-display font-bold text-xl leading-snug">{p.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                  {p.desc}
                </p>

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
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-primary"
                    >
                      Live
                      <ArrowUpRight className="h-4 w-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                    </a>
                  ) : (
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* More coming soon card */}
          <div className="mt-5 rounded-xl border border-dashed border-border bg-card/40 p-8 text-center">
            <p className="font-mono text-xs text-muted-foreground mb-2">// status</p>
            <h3 className="font-display font-bold text-2xl">
              More experiments{" "}
              <span className="text-primary italic">brewing</span> in the lab
            </h3>
            <p className="mt-3 text-sm text-muted-foreground max-w-md mx-auto">
              I keep building tiny tools to sharpen my skills. Check back soon — or follow the
              journey on GitHub.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default MiniProjects;
