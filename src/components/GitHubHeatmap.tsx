import { useMemo } from "react";

const WEEKS = 53;
const DAYS = 7;
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Deterministic pseudo-random so it renders consistently
const seeded = (n: number) => {
  const x = Math.sin(n * 9301 + 49297) * 233280;
  return x - Math.floor(x);
};

const levelClass = (lvl: number) => {
  switch (lvl) {
    case 0:
      return "bg-muted/40";
    case 1:
      return "bg-primary/20";
    case 2:
      return "bg-primary/40";
    case 3:
      return "bg-primary/70";
    case 4:
      return "bg-primary";
    default:
      return "bg-muted/40";
  }
};

export const GitHubHeatmap = () => {
  const { cells, total, monthLabels } = useMemo(() => {
    const today = new Date();
    const start = new Date(today);
    start.setDate(today.getDate() - (WEEKS * DAYS - 1));
    // align to Sunday
    start.setDate(start.getDate() - start.getDay());

    const grid: { date: Date; level: number; count: number }[][] = [];
    let total = 0;

    for (let w = 0; w < WEEKS; w++) {
      const col: { date: Date; level: number; count: number }[] = [];
      for (let d = 0; d < DAYS; d++) {
        const date = new Date(start);
        date.setDate(start.getDate() + w * 7 + d);
        if (date > today) {
          col.push({ date, level: -1, count: 0 });
          continue;
        }
        const r = seeded(w * 7 + d + 1);
        const isWeekend = d === 0 || d === 6;
        const bias = isWeekend ? 0.55 : 0.25;
        let count = 0;
        if (r > bias) {
          count = Math.floor((r - bias) * 18);
        }
        let level = 0;
        if (count > 0) level = 1;
        if (count > 3) level = 2;
        if (count > 7) level = 3;
        if (count > 12) level = 4;
        total += count;
        col.push({ date, level, count });
      }
      grid.push(col);
    }

    const monthLabels: { week: number; label: string }[] = [];
    let lastMonth = -1;
    grid.forEach((col, w) => {
      const m = col[0].date.getMonth();
      if (m !== lastMonth) {
        monthLabels.push({ week: w, label: MONTHS[m] });
        lastMonth = m;
      }
    });

    return { cells: grid, total, monthLabels };
  }, []);

  return (
    <div className="mt-5 rounded-xl border border-border bg-card p-6">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <div>
          <p className="font-mono font-semibold text-primary text-sm">contribution.heatmap</p>
          <p className="mt-1 font-mono text-xs text-muted-foreground">
            {total.toLocaleString()} contributions in the last year
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
          {/* Month labels */}
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
            {/* Day labels */}
            <div className="flex flex-col gap-[3px] pr-1 font-mono text-[9px] text-muted-foreground">
              {["", "Mon", "", "Wed", "", "Fri", ""].map((d, i) => (
                <span key={i} className="h-2.5 leading-[10px]">
                  {d}
                </span>
              ))}
            </div>

            {cells.map((col, w) => (
              <div key={w} className="flex flex-col gap-[3px]">
                {col.map((cell, d) => {
                  if (cell.level === -1) {
                    return <span key={d} className="h-2.5 w-2.5" />;
                  }
                  return (
                    <span
                      key={d}
                      title={`${cell.count} contributions on ${cell.date.toDateString()}`}
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
