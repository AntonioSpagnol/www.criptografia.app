/* Colunas de números subindo ao fundo, como as telas de uma mesa de operações.
   Geradas no servidor com semente fixa, então não há divergência na hidratação. */

function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const SYMBOLS = ["BTC", "ETH", "SOL", "BNB", "AVAX", "ARB", "POL", "USDT"];

export function MarketColumns({ columns = 7, rows = 34, className = "" }: { columns?: number; rows?: number; className?: string }) {
  const rand = mulberry32(2023);
  const cols = Array.from({ length: columns }, (_, c) => {
    const lines = Array.from({ length: rows }, () => {
      const kind = rand();
      if (kind < 0.2) return `${SYMBOLS[(rand() * SYMBOLS.length) | 0]} ${rand() > 0.5 ? "▲" : "▼"}`;
      if (kind < 0.45) return `0x${Math.floor(rand() * 0xffffffff).toString(16).padStart(8, "0")}`;
      const v = (rand() * 9000 + 100).toFixed(2);
      return `${rand() > 0.5 ? "+" : "−"}${(rand() * 4).toFixed(2)}% ${v}`;
    });
    return { lines, duration: 40 + ((c * 7) % 23), up: rand() > 0.5 };
  });
  return (
    <div aria-hidden="true" className={`pointer-events-none flex justify-between overflow-hidden font-mono text-[0.68rem] leading-6 select-none ${className}`}>
      {cols.map((col, i) => (
        <div
          key={i}
          className="animate-scroll-up whitespace-nowrap"
          style={{ "--scroll-duration": `${col.duration}s`, animationDirection: col.up ? "normal" : "reverse" } as React.CSSProperties}
        >
          {[...col.lines, ...col.lines].map((l, k) => (
            <div key={k} className={l.includes("▼") || l.startsWith("−") ? "text-down/70" : l.startsWith("0x") ? "text-gold-dim" : "text-up/70"}>
              {l}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
