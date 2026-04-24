import { ArrowUpRight } from "lucide-react";
import { GitHubHeatmap } from "../GitHubHeatmap";

export const GitHub = () => {
  return (
    <section id="github" className="py-24 section-divider scroll-mt-20">
      <div className="container-page">
        <p className="label-mono mb-6">// github</p>
        <h2 className="font-display font-bold text-5xl md:text-6xl tracking-tight">
          Code in the open.
        </h2>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Daily commits, open-source contributions, and a public trail of the work.
        </p>

        {/* OSS strip */}
        <div className="mt-14 rounded-xl border border-border bg-card p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
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
            href="https://github.com/KhushbuY1023"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-4 py-2 font-mono text-sm hover:border-primary/50 hover:text-primary transition-colors"
          >
            View GitHub <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Contribution heatmap */}
        <GitHubHeatmap />
      </div>
    </section>
  );
};
