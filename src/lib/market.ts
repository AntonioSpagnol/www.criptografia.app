export type Coin = { id: string; symbol: string; name: string };

export const coins: Coin[] = [
  { id: "bitcoin", symbol: "BTC", name: "Bitcoin" },
  { id: "ethereum", symbol: "ETH", name: "Ethereum" },
  { id: "solana", symbol: "SOL", name: "Solana" },
  { id: "binancecoin", symbol: "BNB", name: "BNB" },
  { id: "tether", symbol: "USDT", name: "Tether" },
  { id: "usd-coin", symbol: "USDC", name: "USD Coin" },
  { id: "avalanche-2", symbol: "AVAX", name: "Avalanche" },
  { id: "polygon-ecosystem-token", symbol: "POL", name: "Polygon" },
  { id: "arbitrum", symbol: "ARB", name: "Arbitrum" },
];

export type Quote = {
  symbol: string;
  name: string;
  brl: number;
  change24h: number;
  /** Forma da curva de 7 dias, já normalizada entre 0 e 1. */
  spark: number[];
};

export type QuotesPayload = {
  live: boolean;
  updatedAt: string;
  quotes: Quote[];
};

// Usado só quando a CoinGecko não responde. A interface avisa que são indicativos.
const fallbackPrices: Record<string, number> = {
  BTC: 417000,
  ETH: 12490,
  SOL: 532,
  BNB: 3716,
  USDT: 5.04,
  USDC: 5.04,
  AVAX: 50.5,
  POL: 0.49,
  ARB: 0.93,
};

export function fallbackQuotes(): QuotesPayload {
  return {
    live: false,
    updatedAt: new Date().toISOString(),
    quotes: coins.map((c) => ({
      symbol: c.symbol,
      name: c.name,
      brl: fallbackPrices[c.symbol],
      change24h: 0,
      spark: [],
    })),
  };
}

export const pairs: [string, string][] = [
  ["BTC", "ETH"],
  ["ETH", "SOL"],
  ["BTC", "SOL"],
  ["ETH", "BNB"],
  ["USDT", "USDC"],
  ["ETH", "AVAX"],
  ["ETH", "POL"],
  ["SOL", "USDC"],
  ["BTC", "USDT"],
  ["ETH", "ARB"],
];

export function formatBRL(value: number) {
  const digits = value >= 1000 ? 0 : value >= 1 ? 2 : 4;
  return value.toLocaleString("pt-BR", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
}

export function formatChange(value: number) {
  const sign = value > 0 ? "+" : value < 0 ? "−" : "";
  return `${sign}${Math.abs(value).toFixed(2)}%`;
}
