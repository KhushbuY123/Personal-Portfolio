const USERNAME = "KhushbuY1023";

export const GitHubHeatmap = () => {
  return (
    <div className="mt-5 rounded-xl border border-border bg-card p-6">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <div>
          <p className="font-mono font-semibold text-primary text-sm">contribution.heatmap</p>
          <p className="mt-1 font-mono text-xs text-muted-foreground">
            live from github.com/@{USERNAME}
          </p>
        </div>
        <a
          href={`https://github.com/${USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[10px] text-muted-foreground hover:text-primary transition-colors"
        >
          view on github →
        </a>
      </div>

      <div className="overflow-x-auto rounded-md bg-background/40 p-3">
        <img
          src={`https://ghchart.rshah.org/3b82f6/${USERNAME}`}
          alt={`${USERNAME}'s GitHub contribution chart`}
          loading="lazy"
          className="w-full min-w-[680px] h-auto"
        />
      </div>
    </div>
  );
};
