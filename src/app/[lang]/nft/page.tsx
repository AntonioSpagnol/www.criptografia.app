import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Rosette } from "@/components/ornaments";
import { collections, nftPage } from "@/content/nft";
import { hasLocale, site, tr } from "@/lib/i18n";

export async function generateMetadata({ params }: PageProps<"/[lang]/nft">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  return { title: nftPage[lang].title, description: nftPage[lang].body };
}

// Assinatura visual de cada coleção: uma rosácea própria (d = R - r fecha o centro).
const rosettes = [
  { R: 120, r: 37, d: 83, turns: 37 },
  { R: 110, r: 31, d: 79, turns: 31 },
  { R: 130, r: 41, d: 89, turns: 41 },
  { R: 100, r: 23, d: 77, turns: 23 },
];

export default async function NftPage({ params }: PageProps<"/[lang]/nft">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = nftPage[lang];

  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
          <p className="engraved text-gold">{t.eyebrow}</p>
          <h1 className="mt-5 font-serif text-[clamp(2.4rem,6vw,4.6rem)] leading-[1.02] italic text-cream">{t.heading}</h1>
          <p className="mt-6 max-w-2xl text-lg text-cream/75">{t.body}</p>
        </div>
      </section>

      <section>
        <ul className="mx-auto grid max-w-7xl gap-px bg-line px-0 sm:grid-cols-2">
          {collections.map((c, i) => (
            <li key={c.name} className="relative overflow-hidden bg-ink p-8 sm:p-10">
              <Rosette className="absolute -top-16 -right-16 size-72 text-gold/15" {...rosettes[i]} />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="pixel text-xl text-serial">#{String(i + 1).padStart(3, "0")}</span>
                  <span className="border border-gold/60 px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-widest text-gold-bright">
                    {tr(c.status, lang)}
                  </span>
                </div>
                <h2 className="mt-10 font-display text-3xl font-semibold tracking-wide text-gold-bright">{c.name}</h2>
                <p className="mt-2 font-mono text-[0.72rem] uppercase tracking-widest text-muted">{tr(c.kind, lang)}</p>
                <p className="mt-5 text-cream/75">{tr(c.body, lang)}</p>
                {c.link && (
                  <a href={c.link.href} target="_blank" rel="noopener" className="mt-6 inline-block font-mono text-sm text-gold hover:text-gold-bright hover:underline">
                    {tr(c.link.label, lang)} ↗
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="paper">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
          <h2 className="font-serif text-4xl italic">{t.ctaTitle}</h2>
          <p className="mt-4 text-paper-ink/75">{t.ctaBody}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a className="btn btn-ink" href={`mailto:${site.email}?subject=NFT`}>
              {t.cta}
            </a>
            <Link className="btn btn-ink" href={`/${lang}`}>
              {t.back}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
