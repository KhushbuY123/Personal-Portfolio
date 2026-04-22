import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 section-divider">
      <div className="container-page">
        <p className="label-mono mb-6">// contact</p>
        <h2 className="font-display font-bold text-5xl md:text-6xl tracking-tight">Let's build something.</h2>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Open to SDE & AI/ML roles for 2026. Always up for an interesting conversation about systems, agents, or
          applied research.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-4">
          {[
            { Icon: Mail, label: "Email", value: "khushbu.yadav@example.dev", href: "mailto:khushbu.yadav@example.dev" },
            { Icon: Github, label: "GitHub", value: "@khushbuyadav", href: "#" },
            { Icon: Linkedin, label: "LinkedIn", value: "in/khushbuyadav", href: "#" },
          ].map(({ Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              className="group rounded-xl border border-border bg-card p-6 flex items-center justify-between hover:border-primary/50 hover:-translate-y-0.5 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-md border border-border bg-background p-2.5">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="label-mono">{label}</p>
                  <p className="font-mono text-sm mt-1">{value}</p>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 transition-all" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container-page flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-muted-foreground">
        <p>© 2026 Khushbu Yadav · all systems nominal</p>
        <p>built with care · dark/light · india</p>
      </div>
    </footer>
  );
};
