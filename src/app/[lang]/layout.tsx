import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Cinzel, EB_Garamond, IBM_Plex_Mono, VT323 } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { homeDict } from "@/content/home";
import { hasLocale, locales, site } from "@/lib/i18n";
import "../globals.css";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-cinzel" });
const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-garamond",
});
const vt323 = VT323({ subsets: ["latin"], weight: "400", variable: "--font-vt323" });
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-plex-mono" });

export const viewport: Viewport = { themeColor: "#0b0d0a" };

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = homeDict(lang);
  return {
    metadataBase: new URL(site.url),
    title: { default: t.meta.title, template: "%s · CRIPTOGRAFIA" },
    description: t.meta.description,
    openGraph: {
      type: "website",
      siteName: "CRIPTOGRAFIA",
      locale: lang === "pt" ? "pt_BR" : "en_US",
      images: [{ url: "/art/cedula.webp", width: 1200, height: 715, alt: "CRIPTOGRAFIA" }],
    },
    twitter: { card: "summary_large_image" },
  };
}

export default async function LangLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = homeDict(lang);

  return (
    <html
      lang={lang === "pt" ? "pt-BR" : "en"}
      className={`${cinzel.variable} ${garamond.variable} ${vt323.variable} ${plexMono.variable} antialiased`}
    >
      <body>
        <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:bg-gold focus:px-3 focus:py-2 focus:text-ink">
          {lang === "pt" ? "Pular para o conteúdo" : "Skip to content"}
        </a>
        <Header lang={lang} nav={t.nav} />
        <main id="conteudo">{children}</main>
        <Footer lang={lang} t={t} />
      </body>
    </html>
  );
}
