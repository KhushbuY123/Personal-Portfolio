import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";

const links = [
  { label: "About", href: "/#about" },
  { label: "Stack", href: "/#stack" },
  { label: "Work", href: "/#work" },
  { label: "Projects", href: "/#projects" },
  { label: "The Lab", href: "/lab" },
  { label: "Terminal", href: "/#terminal" },
  { label: "Contact", href: "/#contact" },
];

export const Navbar = () => {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between gap-4">
        <a href="/#about" className="font-mono text-sm font-semibold tracking-tight shrink-0">
          khushbuyadav<span className="text-primary">.dev</span>
        </a>
        <ul className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="rounded-md border border-border p-2 hover:bg-secondary transition-colors"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href="/#contact"
            className="hidden sm:inline-flex rounded-md bg-primary px-4 py-2 font-mono text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Hire me
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="lg:hidden rounded-md border border-border p-2 hover:bg-secondary transition-colors"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile / tablet menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[480px] border-t border-border" : "max-h-0"
        }`}
      >
        <ul className="container-page flex flex-col py-4 gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2.5 font-mono text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="sm:hidden pt-2">
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="block rounded-md bg-primary px-3 py-2.5 font-mono text-sm font-medium text-primary-foreground text-center hover:bg-primary/90 transition-colors"
            >
              Hire me
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
