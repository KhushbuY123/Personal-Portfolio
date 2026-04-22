// Hand-traced single-stroke style portrait that auto-fills (draws itself).
// Each path uses pathLength="1" so we can animate strokeDashoffset 1 -> 0.

export const PortraitLine = () => {
  return (
    <svg
      viewBox="0 0 400 460"
      className="w-full h-full"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <style>{`
        .ld { stroke-dasharray: 1; stroke-dashoffset: 1; animation: draw 2.4s ease-out forwards; }
        @keyframes draw { to { stroke-dashoffset: 0; } }
      `}</style>

      {/* Hair top + side sweep */}
      <path
        pathLength={1}
        className="ld"
        style={{ animationDelay: "0.05s" }}
        d="M120 150 C 110 95, 170 55, 215 60 C 270 64, 310 100, 312 155 C 314 185, 305 205, 300 225"
      />
      {/* Long flowing hair right */}
      <path
        pathLength={1}
        className="ld"
        style={{ animationDelay: "0.4s" }}
        d="M310 160 C 335 200, 345 260, 330 320 C 322 350, 308 370, 295 385"
      />
      {/* Long flowing hair left */}
      <path
        pathLength={1}
        className="ld"
        style={{ animationDelay: "0.5s" }}
        d="M118 160 C 95 210, 88 280, 105 340 C 115 370, 130 388, 145 400"
      />
      {/* Inner hair strand */}
      <path
        pathLength={1}
        className="ld"
        style={{ animationDelay: "0.7s" }}
        d="M150 130 C 175 110, 220 105, 260 120"
      />

      {/* Face oval */}
      <path
        pathLength={1}
        className="ld"
        style={{ animationDelay: "0.9s" }}
        d="M155 175 C 150 230, 160 285, 200 305 C 240 285, 260 235, 258 175"
      />
      {/* Jawline accent */}
      <path
        pathLength={1}
        className="ld"
        style={{ animationDelay: "1.15s" }}
        d="M175 285 C 190 300, 215 300, 235 288"
      />

      {/* Left eyebrow */}
      <path pathLength={1} className="ld" style={{ animationDelay: "1.25s" }}
        d="M170 205 C 180 200, 195 200, 205 205" />
      {/* Right eyebrow */}
      <path pathLength={1} className="ld" style={{ animationDelay: "1.3s" }}
        d="M225 205 C 235 200, 248 200, 255 206" />

      {/* Left eye */}
      <path pathLength={1} className="ld" style={{ animationDelay: "1.4s" }}
        d="M172 222 C 182 215, 198 215, 207 222 C 198 230, 182 230, 172 222 Z" />
      {/* Right eye */}
      <path pathLength={1} className="ld" style={{ animationDelay: "1.45s" }}
        d="M223 222 C 233 215, 249 215, 258 222 C 249 230, 233 230, 223 222 Z" />
      {/* Pupils */}
      <circle cx="189" cy="222" r="2" fill="currentColor" className="ld" style={{ animationDelay: "1.6s" }} />
      <circle cx="240" cy="222" r="2" fill="currentColor" className="ld" style={{ animationDelay: "1.6s" }} />

      {/* Nose */}
      <path pathLength={1} className="ld" style={{ animationDelay: "1.55s" }}
        d="M213 230 C 208 250, 205 262, 210 268 C 215 272, 222 270, 225 266" />

      {/* Lips */}
      <path pathLength={1} className="ld" style={{ animationDelay: "1.7s" }}
        d="M195 278 C 205 273, 220 273, 230 278" />
      <path pathLength={1} className="ld" style={{ animationDelay: "1.78s" }}
        d="M192 280 C 205 290, 222 290, 233 280" />

      {/* Neck */}
      <path pathLength={1} className="ld" style={{ animationDelay: "1.85s" }}
        d="M188 305 L 185 340" />
      <path pathLength={1} className="ld" style={{ animationDelay: "1.9s" }}
        d="M225 305 L 228 340" />

      {/* Shoulders / collar */}
      <path pathLength={1} className="ld" style={{ animationDelay: "1.95s" }}
        d="M150 400 C 170 365, 190 348, 205 348 C 220 348, 240 365, 265 400" />

      {/* Floating earring sparkle */}
      <circle cx="150" cy="245" r="2.5" fill="currentColor" className="ld" style={{ animationDelay: "2.1s" }} />
      <circle cx="270" cy="245" r="2.5" fill="currentColor" className="ld" style={{ animationDelay: "2.1s" }} />
    </svg>
  );
};
