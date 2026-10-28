/* Ornamentos de cédula gerados por matemática, sem imagem. */

type RosetteProps = {
  size?: number;
  /** Raios do hipotrocoide: R fixo, r rolando, d do traço. */
  R?: number;
  r?: number;
  d?: number;
  turns?: number;
  className?: string;
  strokeWidth?: number;
};

/** Rosácea de guilhochê, o desenho de segurança das cédulas. */
export function Rosette({
  size = 400,
  R = 120,
  r = 37,
  d = 83,
  turns = 37,
  className,
  strokeWidth = 0.5,
}: RosetteProps) {
  const steps = 1600;
  const c = size / 2;
  const scale = (size / 2 - 4) / (R - r + d);
  let path = "";
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * Math.PI * 2 * turns;
    const x = (R - r) * Math.cos(t) + d * Math.cos(((R - r) / r) * t);
    const y = (R - r) * Math.sin(t) - d * Math.sin(((R - r) / r) * t);
    path += `${i ? "L" : "M"}${(c + x * scale).toFixed(1)} ${(c + y * scale).toFixed(1)}`;
  }
  return (
    <svg viewBox={`0 0 ${size} ${size}`} className={className} aria-hidden="true">
      <path d={path} fill="none" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** Faixa de guilhochê para bordas: ondas senoidais defasadas. */
export function GuillocheBand({ className, lines = 9 }: { className?: string; lines?: number }) {
  const w = 1200;
  const h = 40;
  const paths: string[] = [];
  for (let k = 0; k < lines; k++) {
    let p = "";
    const phase = (k / lines) * Math.PI * 2;
    for (let x = 0; x <= w; x += 4) {
      const y = h / 2 + Math.sin(x / 18 + phase) * (h / 2.6) * Math.cos(x / 140 + phase / 3);
      p += `${x ? "L" : "M"}${x} ${y.toFixed(1)}`;
    }
    paths.push(p);
  }
  return (
    <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" className={className} aria-hidden="true">
      {paths.map((p, i) => (
        <path key={i} d={p} fill="none" stroke="currentColor" strokeWidth={0.6} vectorEffect="non-scaling-stroke" />
      ))}
    </svg>
  );
}

/** Carimbo circular com texto em volta. */
export function Seal({ text, center, className }: { text: string; center: string; className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <defs>
        <path id="seal-ring" d="M100 100 m-74 0 a74 74 0 1 1 148 0 a74 74 0 1 1 -148 0" />
      </defs>
      <circle cx="100" cy="100" r="94" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="100" cy="100" r="88" fill="none" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="100" cy="100" r="58" fill="none" stroke="currentColor" strokeWidth="0.8" />
      <text fontFamily="var(--font-display)" fontSize="13" letterSpacing="4" fill="currentColor">
        <textPath href="#seal-ring">{text}</textPath>
      </text>
      <text
        x="100"
        y="112"
        textAnchor="middle"
        fontFamily="var(--font-pixel)"
        fontSize="38"
        fill="currentColor"
      >
        {center}
      </text>
    </svg>
  );
}

/** Cantos ornamentados de cédula, posicionados dentro de um pai `relative`. */
export function NoteCorners({ label, corners = "all", className = "" }: { label: string; corners?: "all" | "top"; className?: string }) {
  const pos = ["top-2 left-3", "top-2 right-3", ...(corners === "all" ? ["bottom-2 left-3", "bottom-2 right-3"] : [])];
  return (
    <>
      {pos.map((p) => (
        <span
          key={p}
          aria-hidden="true"
          className={`pixel pointer-events-none absolute z-10 text-3xl leading-none text-gold-bright drop-shadow-[0_0_8px_rgb(0_0_0/0.9)] ${p} ${className}`}
        >
          {label}
        </span>
      ))}
    </>
  );
}
