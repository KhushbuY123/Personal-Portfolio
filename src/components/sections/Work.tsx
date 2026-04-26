const roles = [
  {
    period: { from: "Aug 2025", to: "Present", active: true },
    title: "Associate Software Engineer",
    org: "Shunyity Tech Solutions",
    bullets: [
      "Developing type-safe, production-grade applications using **TypeScript, React, and PostgreSQL**, improving code reliability and maintainability.",
      "Architected modular frontend components and reusable hooks, reducing development time for new features by **30%+**.",
      "Optimized database schema design and query performance in PostgreSQL, enabling efficient handling of large datasets.",
      "Worked closely with cross-functional teams to deliver scalable solutions, focusing on performance, clean architecture, and best practices.",
    ],
  },
  {
    period: { from: "Aug 2024", to: "Jul 2025", active: false },
    title: "Full Stack Developer Intern",
    org: "Shunyity Tech Solutions",
    bullets: [
      "Built and deployed scalable full-stack web applications using **Next.js, Node.js, and MongoDB**, improving overall application performance and load efficiency.",
      "Designed RESTful APIs and optimized database queries, reducing response time by up to **40%** for high-traffic endpoints.",
      "Implemented server-side rendering and dynamic routing with Next.js, enhancing SEO performance and user experience.",
      "Collaborated on feature development and debugging across frontend and backend, ensuring smooth integration and faster delivery cycles.",
    ],
  },
];

const renderBullet = (text: string) => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) =>
    p.startsWith("**") && p.endsWith("**") ? (
      <strong key={i} className="font-semibold text-foreground">
        {p.slice(2, -2)}
      </strong>
    ) : (
      <span key={i}>{p}</span>
    )
  );
};

export const Work = () => {
  return (
    <section id="work" className="py-24 section-divider scroll-mt-20">
      <div className="container-page">
        <p className="label-mono mb-6">// work</p>
        <h2 className="font-display font-bold text-5xl md:text-6xl tracking-tight">Where I've worked.</h2>

        <div className="mt-16 space-y-16">
          {roles.map((r, idx) => (
            <div key={idx} className="grid md:grid-cols-[180px_1fr] gap-8 md:gap-12">
              <div className="font-mono text-sm text-muted-foreground">
                <div>{r.period.from}</div>
                <div>→ {r.period.to}</div>
                {r.period.active && (
                  <span className="mt-3 inline-flex items-center gap-1.5 rounded border border-terminal-green/40 bg-terminal-green/10 px-2 py-1 text-xs uppercase tracking-wider text-terminal-green">
                    Active
                  </span>
                )}
              </div>
              <div>
                <h3 className="font-display font-bold text-3xl md:text-4xl">{r.title}</h3>
                <p className="mt-2 font-mono text-sm text-muted-foreground">{r.org}</p>
                <ul className="mt-6 space-y-3 text-foreground/85 leading-relaxed">
                  {r.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="font-mono text-primary mt-0.5">//</span>
                      <span>{renderBullet(b)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
