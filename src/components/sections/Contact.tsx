import { ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";

export const Contact = () => {
  const resumeHref = `${import.meta.env.BASE_URL}Khushbu_Yadav_Resume.pdf`;
  return (
    <section id="contact" className="py-24 section-divider scroll-mt-20">
      <div className="container-page">
        <p className="label-mono mb-6">// contact</p>
        <h2 className="font-display font-bold text-5xl md:text-6xl tracking-tight">
          Let's build something.
        </h2>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Associate Software Engineer · CSE '25 graduate. Always up for a
          conversation about full-stack web, clean APIs, or thoughtful UI — and
          open to interesting collaborations.
        </p>
        <a
            href={resumeHref}
            download="Khushbu_Yadav_Resume.pdf" 
            className="mt-4 inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 font-mono text-sm hover:border-primary/60 hover:text-primary transition-colors"
          >
            <Download className="h-4 w-4" /> Download Resume
          </a>

        <div className="mt-12 grid md:grid-cols-3 gap-4">
          {[
            {
              Icon: Mail,
              label: "Email",
              value: "khushbuyad123@gmail.com",
              href: "mailto:khushbuyad123@gmail.com",
            },
            {
              Icon: Github,
              label: "GitHub",
              value: "@KhushbuY123",
              href: "https://github.com/KhushbuY123",
            },
            {
              Icon: Linkedin,
              label: "LinkedIn",
              value: "in/khushbu10yadav",
              href: "https://www.linkedin.com/in/khushbu10yadav/",
            },
          ].map(({ Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
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
        <p>built with care 💓· india</p>
      </div>
    </footer>
  );
};
