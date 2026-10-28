"use client";

import { useSyncExternalStore } from "react";
import { coins, fallbackQuotes, type QuotesPayload } from "@/lib/market";

// Uma só busca compartilhada entre o letreiro e o quadro de cotações.
let state: QuotesPayload | null = null;
let timer: ReturnType<typeof setInterval> | undefined;
const listeners = new Set<() => void>();

type Market = {
  id: string;
  current_price: number;
  price_change_percentage_24h: number | null;
  sparkline_in_7d?: { price: number[] };
};

function normalize(values: number[]) {
  if (!values.length) return [];
  // 168 pontos por hora é mais do que o desenho precisa.
  const step = Math.max(1, Math.floor(values.length / 42));
  const picked = values.filter((_, i) => i % step === 0);
  const min = Math.min(...picked);
  const max = Math.max(...picked);
  const span = max - min || 1;
  return picked.map((v) => Number(((v - min) / span).toFixed(3)));
}

// O site é estático (GitHub Pages), então o navegador fala direto com a CoinGecko,
// que libera CORS na API pública.
async function fetchQuotes(): Promise<QuotesPayload> {
  const url = new URL("https://api.coingecko.com/api/v3/coins/markets");
  url.searchParams.set("vs_currency", "brl");
  url.searchParams.set("ids", coins.map((c) => c.id).join(","));
  url.searchParams.set("sparkline", "true");

  const res = await fetch(url, {
    headers: { accept: "application/json" },
    signal: AbortSignal.timeout(6000),
  });
  if (!res.ok) throw new Error(`CoinGecko ${res.status}`);
  const data = (await res.json()) as Market[];
  const byId = new Map(data.map((m) => [m.id, m]));

  return {
    live: true,
    updatedAt: new Date().toISOString(),
    quotes: coins.map((c) => {
      const m = byId.get(c.id);
      return {
        symbol: c.symbol,
        name: c.name,
        brl: m?.current_price ?? 0,
        change24h: m?.price_change_percentage_24h ?? 0,
        spark: normalize(m?.sparkline_in_7d?.price ?? []),
      };
    }),
  };
}

async function refresh() {
  try {
    state = await fetchQuotes();
  } catch {
    // Mantém a última cotação boa; sem nenhuma, mostra valores indicativos.
    state = state?.live ? state : fallbackQuotes();
  }
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  if (listeners.size === 1) {
    refresh();
    timer = setInterval(refresh, 60_000);
  }
  return () => {
    listeners.delete(listener);
    if (!listeners.size) clearInterval(timer);
  };
}

export function useQuotes() {
  return useSyncExternalStore(
    subscribe,
    () => state,
    () => null,
  );
}
