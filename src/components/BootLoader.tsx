import { useEffect, useState } from "react";

const lines = [
  { text: "$ booting khushbu_os v2.6.1 ...", delay: 30 },
  { text: "[ ok ] mounting /portfolio", delay: 25 },
  { text: "[ ok ] starting service: animations", delay: 25 },
  
  { text: "[ ok ] decrypting: ./profile --user=khushbu", delay: 25 },
  { text: "$ ./launch --portfolio", delay: 35 },
  { text: "ready.", delay: 40 },
];

export const BootLoader = ({ onDone }: { onDone: () => void }) => {
  const [output, setOutput] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState("");
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    if (lineIdx >= lines.length) {
      const t1 = setTimeout(() => setFadingOut(true), 400);
      const t2 = setTimeout(onDone, 900);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
    const line = lines[lineIdx];
    if (charIdx <= line.text.length) {
      const t = setTimeout(() => {
        setCurrentLine(line.text.slice(0, charIdx));
        setCharIdx((c) => c + 1);
      }, line.delay);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setOutput((o) => [...o, line.text]);
        setCurrentLine("");
        setCharIdx(0);
        setLineIdx((i) => i + 1);
      }, 80);
      return () => clearTimeout(t);
    }
  }, [lineIdx, charIdx, onDone]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500 overflow-hidden ${
        fadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* animated background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-primary/30 blur-3xl animate-pulse" />
      <div className="absolute -bottom-32 -right-32 h-[420px] w-[420px] rounded-full bg-accent/30 blur-3xl animate-pulse [animation-delay:600ms]" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden font-mono text-[10px] leading-tight text-primary/30">
        {Array.from({ length: 18 }).map((_, i) => (
          <div
            key={i}
            className="absolute top-0 whitespace-pre animate-rain"
            style={{
              left: `${(i * 100) / 18}%`,
              animationDuration: `${6 + (i % 5) * 1.5}s`,
              animationDelay: `${(i % 7) * 0.4}s`,
            }}
          >
            {Array.from({ length: 30 })
              .map(() => (Math.random() > 0.5 ? "1" : "0"))
              .join("\n")}
          </div>
        ))}
      </div>

      <div className="relative w-full max-w-2xl px-6">
        <div className="rounded-lg border border-border bg-card/80 backdrop-blur shadow-2xl overflow-hidden">
          <div className="flex items-center gap-2 border-b border-border bg-muted/40 px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-destructive/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-terminal-amber" />
            <span className="h-2.5 w-2.5 rounded-full bg-terminal-green" />
            <span className="ml-3 font-mono text-xs text-muted-foreground">khushbu@os : ~ — boot</span>
          </div>
          <div className="p-5 font-mono text-sm leading-relaxed min-h-[280px]">
            {output.map((l, i) => (
              <div key={i} className={l.startsWith("[ ok ]") ? "text-terminal-green" : l.startsWith("$") ? "text-primary" : "text-foreground"}>
                {l}
              </div>
            ))}
            <div className={lines[lineIdx]?.text.startsWith("[ ok ]") ? "text-terminal-green" : lines[lineIdx]?.text.startsWith("$") ? "text-primary" : "text-foreground"}>
              {currentLine}
              <span className="inline-block w-2 h-4 align-middle bg-primary ml-0.5 animate-blink" />
            </div>
          </div>
        </div>
        <p className="mt-4 text-center label-mono">khushbuyadav.dev :: initializing</p>
      </div>
    </div>
  );
};
