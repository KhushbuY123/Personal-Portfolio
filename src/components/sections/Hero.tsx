import { ArrowRight, Download, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { Clock } from "@/components/Clock";

const TYPE_WORDS = ["performs.", "scales.", "ships.", "lasts.", "delights."];

const useTypewriter = (words: string[], typeMs = 90, deleteMs = 50, holdMs = 1400) => {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[idx];
    if (!deleting && text === word) {
      const t = setTimeout(() => setDeleting(true), holdMs);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setIdx((i) => (i + 1) % words.length);
      return;
    }
    const t = setTimeout(
      () => {
        setText((cur) =>
          deleting ? word.slice(0, cur.length - 1) : word.slice(0, cur.length + 1)
        );
      },
      deleting ? deleteMs : typeMs
    );
    return () => clearTimeout(t);
  }, [text, deleting, idx, words, typeMs, deleteMs, holdMs]);

  return text;
};

export const Hero = () => {
  const typed = useTypewriter(TYPE_WORDS);
  return (
    <section id="about" className="relative pt-32 pb-24 overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 grid-bg opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/20 blur-3xl opacity-60" />
      <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-accent/20 blur-3xl opacity-50" />

      <div className="container-page relative grid md:grid-cols-[1.4fr_1fr] gap-12 items-center">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-3 rounded-full border border-border bg-card/70 backdrop-blur px-3 py-1.5 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-terminal-green animate-ping opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-terminal-green" />
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Available · ASE · CSE '25
            </span>
            <span className="hidden sm:block h-3 w-px bg-border" />
            <div className="hidden sm:block">
              <Clock compact />
            </div>
          </div>

          <h1 className="font-display font-bold text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
            Shipping software
            <br />
            <span className="italic font-display text-muted-foreground/80">
              that{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent not-italic font-display italic">
                {typed}
              </span>
            </span>
            <span className="text-primary animate-blink">|</span>
          </h1>

          <p className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
            I'm <span className="text-foreground font-medium">Khushbu Yadav</span> — Associate Software Engineer.
            I build production-grade full-stack web apps with React, Next.js, Node.js and PostgreSQL —
            type-safe, performant, and pixel-clean. CSE '25 graduate, currently shipping at scale.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 font-mono text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Mail className="h-4 w-4" /> Get in touch
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 font-mono text-sm hover:border-primary/60 hover:text-primary transition-colors"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md px-3 py-2.5 font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              See projects <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Tesseract emblem */}
        <div className="relative mx-auto w-full max-w-sm aspect-square">
          <div className="absolute inset-0 rounded-full border border-border" />
          <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full animate-spin-slow">
            <defs>
              <path id="circle" d="M 100,100 m -90,0 a 90,90 0 1,1 180,0 a 90,90 0 1,1 -180,0" />
            </defs>
            <text className="fill-muted-foreground font-mono text-[9px] tracking-[0.3em] uppercase">
              <textPath href="#circle">associate software engineer · cse '25 · india ·</textPath>
            </text>
          </svg>
          <div className="absolute inset-8 rounded-full bg-card border border-border flex items-center justify-center overflow-hidden">
            <span
              className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-5xl md:text-6xl text-center px-4 leading-tight"
              style={{ fontFamily: '"Dancing Script", "Brush Script MT", cursive' }}
            >
              Khushbu<br />Yadav
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
