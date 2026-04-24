import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollTop}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-50 rounded-full border border-border bg-card p-3 text-primary shadow-lg transition-all hover:border-primary/60 hover:-translate-y-0.5 ${
        visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none"
      }`}
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
};
