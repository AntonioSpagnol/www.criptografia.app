export const locales = ["pt", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "pt";

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

/** Texto nas duas línguas, para conteúdo que mora em listas. */
export type L = { pt: string; en: string };
export const tr = (text: L, lang: Locale) => text[lang];

export const site = {
  url: "https://www.criptografia.app",
  email: "info@criptografia.net",
  phoneDisplay: "+55 48 99170-3924",
  cnpj: "50.219.248/0001-16",
  whatsapp: (message: string) =>
    `https://wa.me/5548991703924?text=${encodeURIComponent(message)}`,
};
