import { useEffect, useRef, useState } from "react";

type Line = { kind: "in" | "out" | "ok"; text: string };

const COMMANDS: Record<string, () => Line[]> = {
  help: () => [
    { kind: "out", text: "available commands:" },
    { kind: "out", text: "  whoami           print profile summary" },
    { kind: "out", text: "  ls --experience  list work experience" },
    { kind: "out", text: "  ls --projects    list shipped projects" },
    { kind: "out", text: "  cat skills.txt   print stack" },
    { kind: "out", text: "  cat contact.txt  print contact info" },
    { kind: "out", text: "  ./open-source    list open-source contributions" },
    { kind: "out", text: "  clear            clear the terminal" },
  ],
  whoami: () => [
    { kind: "out", text: "khushbu yadav — associate software engineer (ase)" },
    { kind: "out", text: "cse '25 passout · india · open to collaborations" },
  ],
  "ls --experience": () => [
    { kind: "ok", text: "[ ok ] associate software engineer · shunyity tech solutions · aug 2025 → present" },
    { kind: "ok", text: "[ ok ] full stack developer intern · shunyity tech solutions · aug 2024 → jul 2025" },
  ],
  "ls --projects": () => [
    { kind: "ok", text: "[ ok ] full-stack e-commerce platform" },
    { kind: "ok", text: "[ ok ] rest api & auth service" },
    { kind: "ok", text: "[ ok ] installable progressive web app" },
    { kind: "ok", text: "[ ok ] component library & design system" },
    { kind: "ok", text: "[ ok ] realtime analytics dashboard" },
    { kind: "ok", text: "[ ok ] marketing site & cms" },
  ],
  "cat skills.txt": () => [
    { kind: "out", text: "languages   : python, javascript, typescript, html, css" },
    { kind: "out", text: "frontend    : react, next.js, tailwind, mui, redux toolkit, framer motion" },
    { kind: "out", text: "backend     : node.js, express, mongoose, rest api" },
    { kind: "out", text: "databases   : mongodb, postgresql" },
    { kind: "out", text: "tools       : vercel, render, git" },
  ],
  "cat contact.txt": () => [
    { kind: "out", text: "email    : khushbuyad123@gmail.com" },
    { kind: "out", text: "github   : github.com/KhushbuY123" },
    { kind: "out", text: "linkedin : linkedin.com/in/khushbu10yadav" },
  ],
  "./open-source": () => [
    { kind: "out", text: "browse all contributions on github → github.com/KhushbuY123" },
  ],
};

const SUGGESTIONS = Object.keys(COMMANDS).concat(["clear"]);

export const Terminal = () => {
  const [history, setHistory] = useState<Line[]>([
    { kind: "out", text: "welcome to khushbu_os :: type 'help' to see commands" },
  ]);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [hIdx, setHIdx] = useState(-1);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [history]);

  const run = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;
    setCmdHistory((h) => [...h, cmd]);
    setHIdx(-1);

    if (cmd === "clear") {
      setHistory([]);
      return;
    }
    const handler = COMMANDS[cmd];
    setHistory((h) => [
      ...h,
      { kind: "in", text: raw },
      ...(handler ? handler() : [{ kind: "out" as const, text: `command not found: ${cmd} — try 'help'` }]),
    ]);
  };

  const onKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      run(input);
      setInput("");
    } else if (e.key === "Tab") {
      e.preventDefault();
      const match = SUGGESTIONS.find((s) => s.startsWith(input.toLowerCase()));
      if (match) setInput(match);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      const next = hIdx < 0 ? cmdHistory.length - 1 : Math.max(0, hIdx - 1);
      setHIdx(next);
      setInput(cmdHistory[next]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (hIdx < 0) return;
      const next = hIdx + 1;
      if (next >= cmdHistory.length) {
        setHIdx(-1);
        setInput("");
      } else {
        setHIdx(next);
        setInput(cmdHistory[next]);
      }
    }
  };

  const sidebar = [
    { label: "whoami", cmd: "whoami" },
    { label: "ls --experience", cmd: "ls --experience" },
    { label: "ls --projects", cmd: "ls --projects" },
    { label: "cat skills.txt", cmd: "cat skills.txt" },
    { label: "./open-source", cmd: "./open-source" },
    { label: "cat contact.txt", cmd: "cat contact.txt" },
    { label: "help", cmd: "help" },
  ];

  return (
    <section id="terminal" className="py-24 section-divider scroll-mt-20">
      <div className="container-page">
        <p className="label-mono text-center mb-6">// this is an interactive terminal — type commands below</p>

        <div
          className="rounded-xl border border-border bg-card overflow-hidden shadow-2xl cursor-text"
          onClick={() => inputRef.current?.focus()}
        >
          {/* title bar */}
          <div className="flex items-center gap-2 border-b border-border bg-muted/40 px-4 py-2.5">
            <span className="h-3 w-3 rounded-full bg-destructive/80" />
            <span className="h-3 w-3 rounded-full bg-terminal-amber" />
            <span className="h-3 w-3 rounded-full bg-terminal-green" />
            <span className="ml-3 font-mono text-xs text-muted-foreground">
              KHUSHBU_OS :: STACK_CORE v9.05 — khushbu@core:~
            </span>
          </div>

          <div className="grid md:grid-cols-[240px_1fr] min-h-[480px]">
            {/* sidebar */}
            <aside className="border-b md:border-b-0 md:border-r border-border bg-background/40 p-5">
              <div className="mb-6">
                <p className="font-display font-bold text-primary text-lg leading-tight">KHUSHBU YADAV</p>
                <p className="label-mono mt-2">ASSOCIATE SOFTWARE ENGINEER</p>
                <div className="mt-3 flex gap-1.5 flex-wrap">
                  <span className="chip text-[10px] py-0.5">Shunyity</span>
                  <span className="chip text-[10px] py-0.5">Full-Stack</span>
                </div>
                <span className="mt-2 inline-block rounded border border-terminal-green/40 bg-terminal-green/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-terminal-green">
                  Open to work
                </span>
              </div>

              <p className="label-mono mb-3">// navigate</p>
              <ul className="space-y-1.5 font-mono text-sm">
                {sidebar.map((s) => (
                  <li key={s.cmd}>
                    <button
                      onClick={() => run(s.cmd)}
                      className="text-muted-foreground hover:text-primary transition-colors text-left w-full"
                    >
                      › {s.label}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-4 border-t border-border space-y-1.5 font-mono text-xs">
                <div className="flex justify-between"><span className="text-muted-foreground">server</span><span>cloudflare</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">cdn</span><span>cf cdn</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">location</span><span>IND</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">cgpa</span><span>9.05 / 10</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">status</span><span className="text-terminal-green">READY</span></div>
              </div>
            </aside>

            {/* main */}
            <div className="flex flex-col">
              <div ref={scrollRef} className="flex-1 p-5 font-mono text-sm leading-relaxed overflow-y-auto max-h-[420px]">
                {history.map((l, i) => (
                  <div
                    key={i}
                    className={
                      l.kind === "in"
                        ? "text-foreground"
                        : l.kind === "ok"
                        ? "text-terminal-green"
                        : "text-muted-foreground"
                    }
                  >
                    {l.kind === "in" ? <><span className="text-primary">khushbu@core:~$</span> {l.text}</> : l.text}
                  </div>
                ))}
              </div>
              <div className="border-t border-border px-5 py-2 font-mono text-[11px] text-muted-foreground">
                // type a command · tab to autocomplete · ↑↓ history
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  run(input);
                  setInput("");
                }}
                className="flex items-center gap-2 px-5 py-3 border-t border-border bg-background/60"
              >
                <span className="font-mono text-sm text-primary">khushbu@core:~$</span>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKey}
                  spellCheck={false}
                  autoComplete="off"
                  placeholder="type a command..."
                  className="flex-1 bg-transparent outline-none font-mono text-sm text-foreground placeholder:text-muted-foreground/60"
                />
              </form>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-border bg-muted/40 px-5 py-2 font-mono text-[10px] uppercase tracking-wider">
            <span className="text-terminal-green">READY</span>
            <span className="text-muted-foreground hidden sm:block">KHUSHBU_OS :: CORE v9.05 · CSE2025 · ALL SYSTEMS NOMINAL</span>
            <span className="text-terminal-green flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-terminal-green animate-pulse" /> ONLINE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
