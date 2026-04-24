import { Linkedin, Quote } from "lucide-react";

type Recommendation = {
  name: string;
  title: string;
  relation: string;
  date: string;
  text: string;
  profileUrl?: string;
};

const RECOMMENDATIONS: Recommendation[] = [
  {
    name: "Saksham Verma",
    title: "Full-Stack Developer · AWS Certified Cloud Practitioner",
    relation: "Saksham managed Khushbu directly",
    date: "December 26, 2024",
    text: "It has been a pleasure working with Khushbu, a highly skilled and dedicated full-stack intern. Her technical expertise, problem-solving ability, and commitment to delivering quality work make her an asset to any team.",
  },
];

export const Recommendations = () => {
  return (
    <section id="recommendations" className="py-24 section-divider scroll-mt-20">
      <div className="container-page">
        <p className="label-mono mb-6">// recommendations</p>
        <div className="flex items-end justify-between flex-wrap gap-4">
          <h2 className="font-display font-bold text-5xl md:text-6xl tracking-tight">
            Words from <br className="hidden md:block" />collaborators.
          </h2>
          <a
            href="https://www.linkedin.com/in/khushbu10yadav/details/recommendations/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="h-4 w-4" /> view on linkedin
          </a>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {RECOMMENDATIONS.map((r) => (
            <article
              key={r.name}
              className="group relative rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-colors"
            >
              <Quote className="absolute top-5 right-5 h-6 w-6 text-primary/30" />

              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-full border border-border bg-background font-display text-lg font-bold text-primary">
                  {r.name
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div>
                  <p className="font-display text-base font-semibold">{r.name}</p>
                  <p className="font-mono text-xs text-muted-foreground mt-0.5">{r.title}</p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-foreground/90">
                "{r.text}"
              </p>

              <div className="mt-5 pt-4 border-t border-border flex items-center justify-between gap-2 flex-wrap">
                <span className="label-mono">{r.relation}</span>
                <span className="font-mono text-[10px] text-muted-foreground">{r.date}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
