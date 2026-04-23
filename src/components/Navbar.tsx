import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";

const links = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Writing", href: "#writing" },
  { label: "Terminal", href: "#terminal" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between gap-4">
        <a href="#about" className="font-mono text-sm font-semibold tracking-tight shrink-0">
          khushbuyadav<span className="text-primary">.dev</span>
        </a>
        <ul className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <Clock compact />
          </div>
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="rounded-md border border-border p-2 hover:bg-secondary transition-colors"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-2 font-mono text-sm hover:border-primary/60 hover:text-primary transition-colors"
          >
            <Download className="h-3.5 w-3.5" /> Resume
          </a>
          <a
            href="#contact"
            className="hidden sm:inline-flex rounded-md bg-primary px-4 py-2 font-mono text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Hire me
          </a>
        </div>
      </nav>
    </header>
  );
};
