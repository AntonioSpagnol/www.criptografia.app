"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { formatBRL, formatChange, type Quote } from "@/lib/market";
import { useQuotes } from "@/lib/use-quotes";

/** Pausa animações quando o elemento sai da tela. */
function useOnScreen<T extends Element>() {
  const ref = useRef<T>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setOn(e.isIntersecting), { rootMargin: "120px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, on] as const;
}

const REDUCED = "(prefers-reduced-motion: reduce)";
function useReducedMotion() {
  return useSyncExternalStore(
    (cb) => {
      const mq = window.matchMedia(REDUCED);
      mq.addEventListener("change", cb);
      return () => mq.removeEventListener("change", cb);
    },
    () => window.matchMedia(REDUCED).matches,
    () => false,
  );
}

function changeColor(v: number) {
  return v > 0 ? "text-up" : v < 0 ? "text-down" : "text-muted";
}

/* ---------- Letreiro ---------- */

export function TickerTape() {
  const data = useQuotes();
  const items = data?.quotes ?? [];
  const row = (key: string) => (
    <div key={key} className="flex shrink-0 items-center gap-8 pr-8" aria-hidden={key === "b"}>
      {items.length === 0
        ? Array.from({ length: 9 }, (_, i) => (
            <span key={i} className="text-muted">
              ··· R$ ······
            </span>
          ))
        : items.map((q) => (
            <span key={q.symbol} className="flex items-baseline gap-2 whitespace-nowrap">
              <span className="text-gold-bright">{q.symbol}</span>
              <span className="text-cream">R$ {formatBRL(q.brl)}</span>
              <span className={changeColor(q.change24h)}>
                {q.change24h >= 0 ? "▲" : "▼"} {formatChange(q.change24h)}
              </span>
            </span>
          ))}
      <span className="text-gold">◆ P2P TOKEN DESK</span>
    </div>
  );
  return (
    <div className="relative flex overflow-hidden border-y border-line bg-ink-2 py-1.5 font-mono text-[0.78rem]">
      <div className="flex animate-marquee" style={{ "--marquee-duration": "70s" } as React.CSSProperties}>
        {row("a")}
        {row("b")}
      </div>
    </div>
  );
}

/* ---------- Quadro de cotações ---------- */

type BoardText = {
  boardTitle: string;
  boardSource: string;
  boardFallback: string;
  asset: string;
  price: string;
  change: string;
  trend: string;
};

export function RatesBoard({ t }: { t: BoardText }) {
  const data = useQuotes();
  // Guarda a cotação anterior para piscar a linha que mudou (padrão de "estado da render anterior").
  const [current, setCurrent] = useState(data);
  const [previous, setPrevious] = useState<typeof data>(null);
  if (data !== current) {
    setPrevious(current);
    setCurrent(data);
  }
  const before = new Map(previous?.quotes.map((q) => [q.symbol, q.brl]));

  const time = data ? new Date(data.updatedAt).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }) : "--:--";

  return (
    <div className="terminal">
      <div className="flex items-center justify-between gap-4 border-b border-line bg-gold/10 px-4 py-2">
        <span className="pixel text-xl uppercase text-amber">{t.boardTitle}</span>
        <span className="flex items-center gap-2 text-[0.7rem] uppercase tracking-widest text-muted">
          <span className={`inline-block size-2 ${data?.live ? "animate-blink bg-up" : "bg-muted"}`} />
          {data?.live ? `live ${time}` : data ? "offline" : "···"}
        </span>
      </div>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-[0.68rem] uppercase tracking-widest text-muted">
            <th className="px-4 py-2 font-normal">{t.asset}</th>
            <th className="px-2 py-2 text-right font-normal">{t.price}</th>
            <th className="px-2 py-2 text-right font-normal">{t.change}</th>
            <th className="hidden px-4 py-2 text-right font-normal sm:table-cell">{t.trend}</th>
          </tr>
        </thead>
        <tbody>
          {(data?.quotes ?? placeholderRows).map((q) => (
            <tr
              // A chave muda a cada atualização para a animação de flash rodar de novo.
              key={`${q.symbol}-${data?.updatedAt ?? ""}`}
              className={`border-t border-line/60 ${
                before.has(q.symbol) && before.get(q.symbol) !== q.brl
                  ? (before.get(q.symbol) ?? 0) < q.brl
                    ? "animate-flash-up"
                    : "animate-flash-down"
                  : ""
              }`}
            >
              <td className="px-4 py-2">
                <span className="pixel text-lg text-gold-bright">{q.symbol}</span>{" "}
                <span className="hidden text-xs text-muted md:inline">{q.name}</span>
              </td>
              <td className="px-2 py-2 text-right tabular-nums text-cream">
                {q.brl ? `R$ ${formatBRL(q.brl)}` : "···"}
              </td>
              <td className={`px-2 py-2 text-right tabular-nums ${changeColor(q.change24h)}`}>
                {data ? formatChange(q.change24h) : "···"}
              </td>
              <td className={`hidden px-4 py-2 sm:table-cell ${changeColor(q.change24h)}`}>
                <Spark values={q.spark} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="border-t border-line px-4 py-2 text-[0.7rem] text-muted">
        {data && !data.live ? t.boardFallback : t.boardSource}
      </p>
    </div>
  );
}

function Spark({ values }: { values: number[] }) {
  if (values.length < 2) return <span className="block h-5 w-28 border-b border-dashed border-line" />;
  const w = 112;
  const h = 20;
  const step = w / (values.length - 1);
  let d = `M0 ${h - values[0] * h}`;
  values.slice(1).forEach((v, i) => {
    const x = ((i + 1) * step).toFixed(1);
    d += `H${x}V${(h - v * (h - 2) - 1).toFixed(1)}`;
  });
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="ml-auto block h-5 w-28" aria-hidden="true" shapeRendering="crispEdges">
      <path d={d} fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

const placeholderRows: Quote[] = ["BTC", "ETH", "SOL", "BNB", "USDT", "USDC", "AVAX", "POL", "ARB"].map((s) => ({
  symbol: s,
  name: "",
  brl: 0,
  change24h: 0,
  spark: [],
}));

/* ---------- Terminal de mercado (simulação) ---------- */

type TerminalText = { book: string; tape: string; chart: string; sim: string; bid: string; ask: string; qty: string };
type Candle = { o: number; h: number; l: number; c: number };
type Trade = { id: number; side: "buy" | "sell"; price: number; qty: number; time: string };

function nextPrice(p: number) {
  return p * (1 + (Math.random() - 0.5) * 0.0016);
}

function drawCandles(canvas: HTMLCanvasElement | null, candles: Candle[]) {
  const ctx = canvas?.getContext("2d");
  if (!canvas || !ctx) return;
  const rect = canvas.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  if (canvas.width !== Math.round(rect.width * dpr)) {
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);
  }
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const w = rect.width;
  const h = rect.height;
  ctx.clearRect(0, 0, w, h);

  const hi = Math.max(...candles.map((c) => c.h));
  const lo = Math.min(...candles.map((c) => c.l));
  const pad = (hi - lo) * 0.12 || 1;
  const y = (v: number) => Math.round(h - 14 - ((v - lo + pad) / (hi - lo + pad * 2)) * (h - 24));

  // Grade pontilhada, como papel milimetrado de terminal.
  ctx.fillStyle = "rgba(201,165,90,0.16)";
  for (let gx = 0; gx < w; gx += 12) for (let gy = 6; gy < h; gy += 24) ctx.fillRect(gx, gy, 1, 1);

  const step = w / candles.length;
  const body = Math.max(2, Math.floor(step * 0.6));
  candles.forEach((c, i) => {
    const x = Math.floor(i * step + step / 2);
    ctx.fillStyle = c.c >= c.o ? "#7fd18b" : "#e46f5f";
    // Tudo em blocos inteiros: o gráfico parece desenhado em pixels.
    ctx.fillRect(x, y(c.h), 1, Math.max(1, y(c.l) - y(c.h)));
    const top = y(Math.max(c.o, c.c));
    ctx.fillRect(x - Math.floor(body / 2), top, body, Math.max(2, y(Math.min(c.o, c.c)) - top));
  });

  const last = candles[candles.length - 1].c;
  ctx.fillStyle = "rgba(240,181,74,0.8)";
  for (let dx = 0; dx < w; dx += 6) ctx.fillRect(dx, y(last), 3, 1);
}

export function MarketTerminal({ t }: { t: TerminalText }) {
  const data = useQuotes();
  const [ref, onScreen] = useOnScreen<HTMLDivElement>();
  const reduced = useReducedMotion();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const priceRef = useRef(417000);
  const candlesRef = useRef<Candle[]>([]);
  const [book, setBook] = useState<{ asks: [number, number][]; bids: [number, number][] }>({ asks: [], bids: [] });
  const [trades, setTrades] = useState<Trade[]>([]);
  const [clock, setClock] = useState("");
  const [price, setPrice] = useState(0);
  const seeded = useRef(false);

  // Ancora a simulação no preço real do BTC assim que ele chega.
  useEffect(() => {
    const btc = data?.quotes.find((q) => q.symbol === "BTC");
    if (btc?.brl && !seeded.current) {
      seeded.current = true;
      priceRef.current = btc.brl;
      candlesRef.current = [];
    }
  }, [data]);

  useEffect(() => {
    if (!onScreen) return;
    let tradeId = 0;
    const seedCandles = () => {
      let p = priceRef.current * 0.992;
      const list: Candle[] = [];
      for (let i = 0; i < 60; i++) {
        const o = p;
        let h = o;
        let l = o;
        for (let k = 0; k < 6; k++) {
          p = nextPrice(p);
          h = Math.max(h, p);
          l = Math.min(l, p);
        }
        list.push({ o, h, l, c: p });
      }
      const k = priceRef.current / p;
      candlesRef.current = list.map((c) => ({ o: c.o * k, h: c.h * k, l: c.l * k, c: c.c * k }));
    };
    const tick = () => {
      // Vazio no início ou quando o preço real do BTC acabou de chegar.
      if (!candlesRef.current.length) seedCandles();
      const p = nextPrice(priceRef.current);
      priceRef.current = p;
      const candles = candlesRef.current;
      const last = candles[candles.length - 1];
      last.c = p;
      last.h = Math.max(last.h, p);
      last.l = Math.min(last.l, p);

      const spread = p * 0.0004;
      const asks: [number, number][] = [];
      const bids: [number, number][] = [];
      for (let i = 0; i < 7; i++) {
        asks.unshift([p + spread * (i + 1), Math.random() * 0.9 + 0.02]);
        bids.push([p - spread * (i + 1), Math.random() * 0.9 + 0.02]);
      }
      setBook({ asks, bids });
      setPrice(p);

      const now = new Date();
      const time = now.toLocaleTimeString("pt-BR");
      setClock(time);
      setTrades((list) =>
        [
          { id: tradeId++, side: (Math.random() > 0.5 ? "buy" : "sell") as Trade["side"], price: p, qty: Math.random() * 0.4 + 0.001, time },
          ...list,
        ].slice(0, 14),
      );
      drawCandles(canvasRef.current, candlesRef.current);
    };

    const roll = () => {
      const p = priceRef.current;
      candlesRef.current = [...candlesRef.current.slice(-59), { o: p, h: p, l: p, c: p }];
    };

    tick();
    if (reduced) return;
    const a = setInterval(tick, 650);
    const b = setInterval(roll, 4000);
    return () => {
      clearInterval(a);
      clearInterval(b);
    };
  }, [onScreen, reduced]);

  const maxQty = Math.max(0.01, ...book.asks.map((a) => a[1]), ...book.bids.map((b) => b[1]));

  return (
    <div ref={ref} className="terminal overflow-hidden text-[0.72rem]">
      <div className="flex flex-wrap items-center justify-between gap-2 bg-amber px-3 py-1 font-mono text-[0.72rem] font-semibold uppercase text-ink">
        <span>CRIPTOGRAFIA &lt;GO&gt; · BTC/BRL</span>
        <span className="tabular-nums">{clock || "--:--:--"}</span>
      </div>
      <div className="grid md:grid-cols-[1.6fr_1fr_1fr]">
        <div className="border-b border-line p-3 md:border-b-0 md:border-r">
          <div className="mb-2 flex justify-between uppercase tracking-widest text-muted">
            <span>{t.chart}</span>
            <span className="text-amber tabular-nums">{price ? `R$ ${formatBRL(price)}` : "···"}</span>
          </div>
          <canvas ref={canvasRef} className="h-48 w-full md:h-64" aria-hidden="true" />
        </div>
        <div className="border-b border-line p-3 md:border-b-0 md:border-r">
          <div className="mb-2 flex justify-between uppercase tracking-widest text-muted">
            <span>{t.book}</span>
            <span>{t.qty}</span>
          </div>
          <ul className="tabular-nums">
            {book.asks.map(([p, q], i) => (
              <li key={`a${i}`} className="relative flex justify-between px-1 leading-5 text-down">
                <span className="absolute inset-y-0 right-0 bg-down/12" style={{ width: `${(q / maxQty) * 100}%` }} />
                <span className="relative">{formatBRL(p)}</span>
                <span className="relative">{q.toFixed(4)}</span>
              </li>
            ))}
            <li className="my-1 border-y border-line py-0.5 text-center text-amber">
              {t.ask} ▲ ▼ {t.bid}
            </li>
            {book.bids.map(([p, q], i) => (
              <li key={`b${i}`} className="relative flex justify-between px-1 leading-5 text-up">
                <span className="absolute inset-y-0 right-0 bg-up/12" style={{ width: `${(q / maxQty) * 100}%` }} />
                <span className="relative">{formatBRL(p)}</span>
                <span className="relative">{q.toFixed(4)}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-3">
          <div className="mb-2 uppercase tracking-widest text-muted">{t.tape}</div>
          <ul className="h-[19.5rem] overflow-hidden tabular-nums">
            {trades.map((tr) => (
              <li key={tr.id} className="flex justify-between gap-2 leading-5">
                <span className="text-muted">{tr.time}</span>
                <span className={tr.side === "buy" ? "text-up" : "text-down"}>{formatBRL(tr.price)}</span>
                <span className="text-cream">{tr.qty.toFixed(3)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-line px-3 py-1 text-[0.65rem] uppercase tracking-widest text-muted">
        ⚠ {t.sim}
      </div>
    </div>
  );
}

/* ---------- Fluxo de entropia ---------- */

function randomHex(bytes: number) {
  const a = new Uint8Array(bytes);
  crypto.getRandomValues(a);
  return Array.from(a, (b) => b.toString(16).padStart(2, "0")).join("");
}

export function EntropyStream({ label }: { label: string }) {
  const [ref, onScreen] = useOnScreen<HTMLDivElement>();
  const reduced = useReducedMotion();
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    if (!onScreen) return;
    const fill = () => setLines((l) => (l.length ? l : Array.from({ length: 10 }, () => randomHex(32))));
    if (reduced) {
      const id = setTimeout(fill, 0);
      return () => clearTimeout(id);
    }
    const id = setInterval(() => setLines((l) => [randomHex(32), ...l].slice(0, 10)), 260);
    const first = setTimeout(fill, 0);
    return () => {
      clearInterval(id);
      clearTimeout(first);
    };
  }, [onScreen, reduced]);

  return (
    <div ref={ref} className="terminal p-4 text-[0.7rem] leading-5">
      <div className="mb-2 flex items-center gap-2 uppercase tracking-widest text-amber">
        <span className="inline-block size-2 animate-blink bg-amber" /> {label}
      </div>
      <ul className="overflow-hidden break-all">
        {lines.map((l, i) => (
          <li key={l + i} className={i === 0 ? "text-gold-bright" : "text-gold-dim"} style={{ opacity: 1 - i * 0.08 }}>
            0x{l}
          </li>
        ))}
      </ul>
    </div>
  );
}
