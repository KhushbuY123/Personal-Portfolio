import { useEffect, useState } from "react";

const greet = (h: number) => {
  if (h < 5) return { text: "Working late", icon: "🌙" };
  if (h < 12) return { text: "Good morning", icon: "☀️" };
  if (h < 17) return { text: "Good afternoon", icon: "⛅" };
  if (h < 21) return { text: "Good evening", icon: "🌆" };
  return { text: "Good night", icon: "🌙" };
};

export const Clock = ({ compact = false }: { compact?: boolean }) => {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const g = greet(now.getHours());
  const time = now.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: compact ? undefined : "2-digit",
    hour12: false,
  });

  return (
    <div className="flex items-center gap-2 font-mono text-xs">
      <span aria-hidden>{g.icon}</span>
      <span className="text-muted-foreground hidden sm:inline">{g.text} ·</span>
      <span className="text-foreground tabular-nums">{time} IST</span>
    </div>
  );
};
