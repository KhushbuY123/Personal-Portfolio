import { useEffect, useMemo, useState } from "react";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const USERNAME = "KhushbuY1023";

type Day = { date: string; count: number; level: number };

const levelClass = (lvl: number) => {
  switch (lvl) {
    case 0: return "bg-muted/40";
    case 1: return "bg-primary/20";
    case 2: return "bg-primary/40";
    case 3: return "bg-primary/70";
    case 4: return "bg-primary";
    default: return "bg-muted/40";
  }
};

export const GitHubHeatmap = () => {
  const [days, setDays] = useState<Day[] | null>(null);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`);
        if (!res.ok) throw new Error("fetch failed");
        const data = await res.json();
        if (cancelled) return;
        setDays(data.contributions as Day[]);
        setTotal((data.contributions as Day[]).reduce((a, d) => a + d.count, 0));
      } catch (e) {
        if (!cancelled) setError("Could not load GitHub contributions");
      }
    })();
    return () => { cancelled = true; };
  }, []);

  const { weeks, monthLabels } = useMemo(() => {
    if (!days) return { weeks: [] as Day[][], monthLabels: [] as { week: number; label: string }[] };
    // group into weeks aligned by weekday of first day
    const first = new Date(days[0].date);
    const leading = first.getDay(); // 0..6
    const padded: (Day | null)[] = [...Array(leading).fill(null), ...days];
    const weeks: (Day | null)[][] = [];
    for (let i = 0; i < padded.length; i += 7) weeks.push(padded.slice(i, i + 7));
    const monthLabels: { week: number; label: string }[] = [];
    let lastMonth = -1;
    weeks.forEach((col, w) => {
      const firstDay = col.find(Boolean) as Day | undefined;
      if (!firstDay) return;
      const m = new Date(firstDay.date).getMonth();
      if (m !== lastMonth) {
        monthLabels.push({ week: w, label: MONTHS[m] });
        lastMonth = m;
      }
    });
    return { weeks: weeks as Day[][], monthLabels };
  }, [days]);

  return (
    <div className="mt-5 rounded-xl border border-border bg-card p-6">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <div>
          <p className="font-mono font-semibold text-primary text-sm">contribution.heatmap</p>
          <p className="mt-1 font-mono text-xs text-muted-foreground">
            {days
              ? `${total.toLocaleString()} contributions in the last year · @${USERNAME}`
              : error ?? "loading contributions…"}
          </p>
        </div>
        <div className="flex items-center gap-2 font-mono text-[10px] text-muted-foreground">
          <span>less</span>
          {[0, 1, 2, 3, 4].map((l) => (
            <span key={l} className={`h-2.5 w-2.5 rounded-sm ${levelClass(l)}`} />
          ))}
          <span>more</span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="inline-block min-w-full">
          <div className="flex pl-7 mb-1 relative h-3">
            {monthLabels.map((m) => (
              <span
                key={`${m.week}-${m.label}`}
                className="absolute font-mono text-[10px] text-muted-foreground"
                style={{ left: `${28 + m.week * 13}px` }}
              >
                {m.label}
              </span>
            ))}
          </div>

          <div className="flex gap-[3px]">
            <div className="flex flex-col gap-[3px] pr-1 font-mono text-[9px] text-muted-foreground">
              {["", "Mon", "", "Wed", "", "Fri", ""].map((d, i) => (
                <span key={i} className="h-2.5 leading-[10px]">{d}</span>
              ))}
            </div>

            {weeks.map((col, w) => (
              <div key={w} className="flex flex-col gap-[3px]">
                {Array.from({ length: 7 }).map((_, d) => {
                  const cell = col[d];
                  if (!cell) return <span key={d} className="h-2.5 w-2.5" />;
                  return (
                    <span
                      key={d}
                      title={`${cell.count} contributions on ${cell.date}`}
                      className={`h-2.5 w-2.5 rounded-sm ${levelClass(cell.level)} hover:ring-1 hover:ring-primary/60 transition`}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
