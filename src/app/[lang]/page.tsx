import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AdamArt } from "@/components/adam-art";
import { HeroArt } from "@/components/hero-art";
import { EntropyStream, MarketTerminal, RatesBoard, TickerTape } from "@/components/market";
import { MarketColumns } from "@/components/market-columns";
import { GuillocheBand, Rosette, Seal } from "@/components/ornaments";
import {
  comparison,
  homeDict,
  products,
  sectors,
  services,
  statusInfo,
  storeCollect,
  storeCrypto,
  type Status,
} from "@/content/home";
import { courses } from "@/content/cursos";
import { hasLocale, site, tr } from "@/lib/i18n";
import { pairs } from "@/lib/market";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = homeDict(lang);

  return (
    <>
      <TickerTape />

      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden">
        <MarketColumns className="absolute inset-0 opacity-[0.13]" />
        <Rosette className="absolute -top-40 -left-40 size-[34rem] text-gold/15" d={83} />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pt-14 pb-20 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:pt-20">
          <div>
            <p className="engraved text-gold">{t.hero.eyebrow}</p>
            <h1 className="mt-6 font-display text-[clamp(2.6rem,8vw,6.2rem)] leading-[0.95] font-bold tracking-[0.06em] text-gold-bright [text-shadow:0_0_40px_rgb(201_165_90/0.25)]">
              CRIPTO
              <br />
              GRAFIA
            </h1>
            <div className="rule-ornament mt-6 max-w-md">
              <span className="pixel text-lg">◆</span>
            </div>
            <p className="mt-6 font-serif text-[clamp(1.6rem,3.2vw,2.4rem)] leading-tight italic text-cream">{t.hero.lead}</p>
            <p className="mt-5 max-w-xl text-lg text-cream/75">{t.hero.body}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a className="btn btn-gold" href={site.whatsapp(t.desk.whatsTrade)}>
                {t.hero.ctaPrimary} <span aria-hidden="true">→</span>
              </a>
              <a className="btn btn-ghost" href="#portas">
                {t.hero.ctaSecondary}
              </a>
            </div>
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-line pt-6 font-mono">
              {[
                ["CNPJ", site.cnpj.slice(0, 10)],
                ["Est.", "2023"],
                ["PR", "Curitiba"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-[0.65rem] uppercase tracking-widest text-muted">{k}</dt>
                  <dd className="pixel mt-1 text-xl text-cream">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="mx-auto w-full max-w-md lg:max-w-none">
            <HeroArt
              label={t.hero.portrait}
              caption={t.hero.caption}
              modeAscii={t.hero.modeAscii}
              modePixel={t.hero.modePixel}
              modeLabel={t.hero.modeLabel}
            />
          </div>
        </div>
      </section>

      {/* ---------- Quatro portas ---------- */}
      <section id="portas" className="paper relative scroll-mt-14">
        <GuillocheBand className="h-6 w-full text-paper-ink/25" />
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="engraved text-paper-muted">{t.doors.eyebrow}</p>
              <h2 className="mt-3 font-serif text-[clamp(2.2rem,5vw,3.6rem)] leading-none italic">{t.doors.title}</h2>
            </div>
            <Seal text="CRIPTOGRAFIA · EST. MMXXIII · CURITIBA · " center="₿" className="size-28 rotate-[-12deg] text-serial/80" />
          </div>
          <ul className="mt-12 grid gap-px bg-paper-ink/20 sm:grid-cols-2 lg:grid-cols-4">
            {t.doors.items.map((d) => {
              const href = d.href.startsWith("#") ? d.href : `/pt${d.href}`;
              return (
                <li key={d.numeral} className="bg-paper">
                  <Link href={href} className="group flex h-full flex-col p-7 transition-colors hover:bg-paper-2">
                    <div className="flex items-baseline justify-between">
                      <span className="font-display text-4xl text-paper-ink/80">{d.numeral}</span>
                      <span className="engraved text-[0.6rem] text-paper-muted">{d.who}</span>
                    </div>
                    <h3 className="mt-8 font-display text-xl font-semibold tracking-wide">{d.title}</h3>
                    <p className="mt-3 flex-1 text-base text-paper-ink/75">{d.body}</p>
                    <span className="mt-6 font-mono text-xs uppercase tracking-widest text-serial transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ---------- Balcão P2P ---------- */}
      <section id="balcao" className="relative scroll-mt-14 border-b border-line">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="engraved text-gold">{t.desk.eyebrow}</p>
              <h2 className="mt-4 font-serif text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.05] text-cream">{t.desk.title}</h2>
              <p className="mt-5 max-w-lg text-cream/75">{t.desk.body}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a className="btn btn-gold" href={site.whatsapp(t.desk.whatsTrade)}>
                  {t.desk.ctaTrade}
                </a>
                <a className="btn btn-ghost" href={site.whatsapp(t.desk.whatsVisit)}>
                  {t.desk.ctaVisit}
                </a>
              </div>
              <p className="mt-3 font-mono text-[0.7rem] uppercase tracking-widest text-muted">
                {t.desk.visitNote} · {t.desk.location}
              </p>

              <h3 className="engraved mt-12 text-gold">{t.desk.pairsTitle}</h3>
              <ol className="mt-4 grid grid-cols-2 gap-x-6 font-mono text-sm sm:grid-cols-2">
                {pairs.map(([a, b], i) => (
                  <li key={a + b} className="flex items-center gap-3 border-b border-line/60 py-2">
                    <span className="pixel text-base text-gold-dim">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-cream">{a}</span>
                    <span className="text-gold">⇄</span>
                    <span className="text-cream">{b}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="self-start">
              <RatesBoard t={t.desk} />
            </div>
          </div>
          <div className="mt-12">
            <MarketTerminal t={t.desk.terminal} />
          </div>
        </div>
      </section>

      {/* ---------- Deep Tech ---------- */}
      <section id="deeptech" className="relative scroll-mt-14">
        <div className="relative h-[clamp(18rem,42vw,34rem)] overflow-hidden border-b border-line bg-ink">
          <AdamArt label={t.deeptech.art} />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_55%,var(--color-ink))]" />
          <p className="absolute right-4 bottom-4 left-4 text-right font-serif text-sm italic text-muted sm:right-6">
            {t.deeptech.caption}
          </p>
        </div>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="engraved text-gold">{t.deeptech.eyebrow}</p>
              <h2 className="mt-4 font-serif text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.05] text-cream">{t.deeptech.title}</h2>
              <p className="mt-5 max-w-2xl text-cream/75">{t.deeptech.body}</p>
            </div>
            <div className="terminal self-end p-5">
              <p className="mb-3 text-[0.7rem] uppercase tracking-widest text-amber">{t.deeptech.legendTitle}</p>
              <ul className="space-y-1.5 text-[0.78rem]">
                {(Object.keys(statusInfo) as Status[]).map((s) => (
                  <li key={s} className="flex gap-3">
                    <StatusTag status={s} lang={lang} />
                    <span className="text-cream/70">{tr(statusInfo[s].meaning, lang)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <ul className="mt-14 grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <li key={p.code} className="flex flex-col bg-ink p-6">
                <div className="flex items-center justify-between font-mono text-[0.7rem]">
                  <span className="pixel text-lg text-gold-dim">[{p.code}]</span>
                  <StatusTag status={p.status} lang={lang} />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold tracking-wide text-gold-bright">{p.name}</h3>
                <p className="mt-1 font-mono text-[0.72rem] uppercase tracking-widest text-muted">{tr(p.tagline, lang)}</p>
                <p className="mt-4 flex-1 text-[0.98rem] leading-relaxed text-cream/75">{tr(p.body, lang)}</p>
                {p.links.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[0.72rem]">
                    {p.links.map((l) => (
                      <a key={l.href} href={l.href} className="text-gold hover:text-gold-bright hover:underline" target="_blank" rel="noopener">
                        {l.label} ↗
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          <h3 className="engraved mt-20 text-gold">{t.deeptech.compareTitle}</h3>
          <div className="terminal mt-5 overflow-x-auto">
            <table className="w-full min-w-[36rem] text-left text-[0.82rem]">
              <thead>
                <tr className="border-b border-line text-[0.68rem] uppercase tracking-widest text-muted">
                  <th className="px-4 py-3 font-normal">{t.deeptech.compareFeature}</th>
                  <th className="px-4 py-3 font-normal text-gold-bright">{t.deeptech.compareUs}</th>
                  <th className="px-4 py-3 font-normal">{t.deeptech.compareThem}</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.feature.en} className="border-b border-line/50 last:border-0">
                    <td className="px-4 py-3 text-cream/80">{tr(row.feature, lang)}</td>
                    <td className="px-4 py-3 text-up">✦ {tr(row.us, lang)}</td>
                    <td className="px-4 py-3 text-down/90">✕ {tr(row.them, lang)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ---------- Setores / iGaming ---------- */}
      <section className="relative overflow-hidden border-y border-line bg-money">
        <Rosette className="absolute -right-48 -bottom-48 size-[40rem] text-gold/15" R={140} r={43} d={97} turns={43} />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6">
          <p className="engraved text-gold">{t.sectors.eyebrow}</p>
          <div className="mt-8 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <blockquote className="font-serif text-[clamp(1.6rem,3.4vw,2.6rem)] leading-snug italic text-cream">
                “{t.sectors.quote}”
              </blockquote>
              <p className="mt-6 max-w-xl text-cream/75">{t.sectors.body}</p>
            </div>
            <div className="self-start">
              <EntropyStream label={t.sectors.entropyLive} />
            </div>
          </div>
          <ul className="mt-16 grid gap-px bg-gold/20 sm:grid-cols-2 lg:grid-cols-4">
            {sectors.map((s) => (
              <li key={s.title.en} className="bg-money p-6">
                <p className="font-mono text-[0.68rem] uppercase tracking-widest text-gold">{tr(s.area, lang)}</p>
                <h3 className="mt-3 font-display text-lg font-semibold text-cream">{tr(s.title, lang)}</h3>
                <p className="mt-3 text-[0.95rem] text-cream/75">{tr(s.body, lang)}</p>
                <p className="pixel mt-4 text-lg text-gold-bright">→ {s.product}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center font-mono text-[0.68rem] uppercase tracking-[0.3em] text-gold/70">{t.sectors.entropy}</p>
        </div>
      </section>

      {/* ---------- Serviços (livro-razão) ---------- */}
      <section id="servicos" className="paper scroll-mt-14">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
            <div className="self-start lg:sticky lg:top-24">
              <p className="engraved text-paper-muted">{t.services.eyebrow}</p>
              <h2 className="mt-4 font-serif text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.05] italic">{t.services.title}</h2>
              <p className="mt-5 max-w-md text-paper-ink/75">{t.services.body}</p>
              <a className="btn btn-ink mt-8" href={`mailto:${site.email}?subject=${encodeURIComponent(t.services.mailSubject)}`}>
                {t.services.cta} → {site.email}
              </a>
            </div>
            <ol className="border-t-2 border-paper-ink">
              {services.map((s, i) => {
                const title = tr(s.title, lang);
                const href = s.href ? (s.href === "/nft" ? `/${lang}/nft` : `/pt${s.href}`) : null;
                return (
                  <li key={s.title.en} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-paper-ink/25 py-6 sm:grid-cols-[3rem_1fr_6rem]">
                    <span className="pixel text-2xl text-serial">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="font-display text-lg font-semibold tracking-wide">
                        {href ? (
                          <Link href={href} className="underline decoration-paper-ink/30 underline-offset-4 hover:decoration-serial">
                            {title}
                          </Link>
                        ) : (
                          title
                        )}
                      </h3>
                      <p className="mt-1 font-mono text-[0.7rem] uppercase tracking-widest text-paper-muted">{s.tags}</p>
                      <p className="mt-3 text-[0.98rem] text-paper-ink/80">{tr(s.body, lang)}</p>
                    </div>
                    <span className="hidden self-start border border-paper-ink/40 px-2 py-0.5 text-center font-mono text-[0.65rem] uppercase tracking-widest sm:block">
                      {s.scope}
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* ---------- Loja física ---------- */}
      <section id="loja" className="scroll-mt-14 border-b border-line">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <p className="engraved text-gold">{t.store.eyebrow}</p>
              <h2 className="mt-4 font-serif text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.05] text-cream">{t.store.title}</h2>
              <p className="mt-5 text-cream/75">{t.store.body}</p>
              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                {[
                  [t.store.cryptoTitle, storeCrypto],
                  [t.store.collectTitle, storeCollect],
                ].map(([title, list]) => (
                  <div key={title as string}>
                    <h3 className="engraved text-gold-bright">{title as string}</h3>
                    <ul className="mt-4 space-y-2 font-mono text-[0.82rem] text-cream/80">
                      {(list as typeof storeCrypto).map((x) => (
                        <li key={x.en} className="flex gap-2">
                          <span className="text-gold">▪</span>
                          {tr(x, lang)}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <a className="btn btn-ghost mt-10" href={site.whatsapp(t.desk.whatsVisit)}>
                {t.store.visitCta}
              </a>
            </div>
            <figure>
              <div className="note-frame overflow-hidden">
                <Image
                  src="/art/cedula.webp"
                  alt={t.store.noteCaption}
                  width={1200}
                  height={715}
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="h-auto w-full sepia-[.15]"
                />
              </div>
              <figcaption className="mt-3 font-serif text-sm italic text-muted">{t.store.noteCaption}</figcaption>
            </figure>
          </div>

          {/* Genesis Card */}
          <div className="mt-20 grid items-center gap-10 border border-line bg-ink-2 p-6 sm:p-10 lg:grid-cols-[1fr_1.2fr]">
            <GenesisCard />
            <div>
              <p className="engraved text-serial">{t.store.genesisEyebrow}</p>
              <h3 className="mt-3 font-serif text-[clamp(1.6rem,3vw,2.4rem)] leading-tight italic text-cream">{t.store.genesisTitle}</h3>
              <p className="mt-4 text-cream/75">{t.store.genesisBody}</p>
              <ol className="mt-6 flex flex-wrap gap-3">
                {t.store.genesisSteps.map((step, i) => (
                  <li key={step} className="pixel border border-gold/50 px-3 py-1 text-xl uppercase text-gold-bright">
                    {i + 1}. {step}
                  </li>
                ))}
              </ol>
              <a className="btn btn-gold mt-8" href="https://genesiscard.criptografia.net" target="_blank" rel="noopener">
                {t.store.genesisCta} ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Cursos + IRPF ---------- */}
      <section className="paper">
        <div className="grid gap-px bg-paper-ink/20 lg:grid-cols-2">
          <div className="paper px-4 py-20 sm:px-10">
            <div className="ml-auto max-w-xl">
            <p className="engraved text-paper-muted">{t.learn.coursesEyebrow}</p>
            <h2 className="mt-4 font-serif text-[clamp(1.9rem,3.6vw,2.8rem)] leading-tight italic">{t.learn.coursesTitle}</h2>
            <p className="mt-4 text-paper-ink/75">{t.learn.coursesBody}</p>
            <ol className="mt-8 space-y-0">
              {courses.map((c, i) => (
                <li key={c.slug} className="flex items-end gap-4 border-b border-paper-ink/25 py-3" style={{ paddingLeft: `${i * 1.1}rem` }}>
                  <span className="pixel text-xl text-serial">N{i + 1}</span>
                  <span className="flex-1 font-display text-base font-semibold">{c.title}</span>
                  <span className="pixel text-2xl">{c.price}</span>
                </li>
              ))}
            </ol>
            <Link className="btn btn-ink mt-8" href="/pt/cursos">
              {t.learn.coursesCta} {lang === "en" && <span className="normal-case">{t.footer.ptOnly}</span>}
            </Link>
            </div>
          </div>
          <div className="bg-paper-2 px-4 py-20 sm:px-10">
            <div className="mr-auto max-w-xl">
            <p className="engraved text-paper-muted">{t.learn.taxEyebrow}</p>
            <h2 className="mt-4 font-serif text-[clamp(1.9rem,3.6vw,2.8rem)] leading-tight italic">{t.learn.taxTitle}</h2>
            <p className="mt-4 text-paper-ink/75">{t.learn.taxBody}</p>
            <dl className="mt-8 grid grid-cols-3 gap-4 border-y border-paper-ink/25 py-6">
              {t.learn.taxStats.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <span className="pixel block text-3xl text-serial">{s.value}</span>
                    <span className="mt-1 block text-sm text-paper-ink/70">{s.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
            <Link className="btn btn-ink mt-8" href="/pt/irpf">
              {t.learn.taxCta} {lang === "en" && <span className="normal-case">{t.footer.ptOnly}</span>}
            </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- NFT ---------- */}
      <section className="border-b border-line">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8 px-4 py-16 sm:px-6">
          <div className="max-w-2xl">
            <p className="engraved text-gold">{t.nftTeaser.eyebrow}</p>
            <h2 className="mt-3 font-serif text-3xl italic text-cream">{t.nftTeaser.title}</h2>
            <p className="mt-3 text-cream/75">{t.nftTeaser.body}</p>
          </div>
          <Link className="btn btn-ghost" href={`/${lang}/nft`}>
            {t.nftTeaser.cta} →
          </Link>
        </div>
      </section>

      {/* ---------- CTA final ---------- */}
      <section id="contato" className="relative scroll-mt-14 overflow-hidden">
        <Rosette className="absolute top-1/2 left-1/2 size-[46rem] -translate-x-1/2 -translate-y-1/2 text-gold/10" R={150} r={47} d={103} turns={47} />
        <div className="relative mx-auto max-w-3xl px-4 py-28 text-center sm:px-6">
          <div className="rule-ornament mx-auto max-w-xs">
            <span className="pixel text-lg">◆</span>
          </div>
          <h2 className="mt-8 font-serif text-[clamp(2.2rem,5vw,3.8rem)] leading-tight italic text-cream">{t.final.title}</h2>
          <p className="mx-auto mt-5 max-w-xl text-cream/75">{t.final.body}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a className="btn btn-gold" href={site.whatsapp(t.desk.whatsTrade)}>
              {t.final.ctaContact}
            </a>
            <a className="btn btn-ghost" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <a className="btn btn-ghost" href={site.whatsapp(t.desk.whatsVisit)}>
              {t.final.ctaStore}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function StatusTag({ status, lang }: { status: Status; lang: "pt" | "en" }) {
  const info = statusInfo[status];
  return (
    <span
      className="inline-flex shrink-0 items-center gap-1.5 border px-1.5 py-0.5 font-mono text-[0.62rem] uppercase tracking-widest"
      style={{ color: info.color, borderColor: info.color }}
    >
      <span className="inline-block size-1.5" style={{ background: info.color }} />
      {tr(info.label, lang)}
    </span>
  );
}

/** Cartão Genesis desenhado em CSS: PVC, QR em blocos e lacre metalizado. */
function GenesisCard() {
  // QR decorativo determinístico (não é um QR de verdade).
  const cells = Array.from({ length: 121 }, (_, i) => ((i * 37 + (i >> 3) * 11) % 7) < 3);
  const finder = (r: number, c: number) => (r < 3 && c < 3) || (r < 3 && c > 7) || (r > 7 && c < 3);
  return (
    <div className="mx-auto w-full max-w-sm [perspective:900px]">
      <div className="relative aspect-[1.586] w-full rotate-[-4deg] overflow-hidden rounded-xl border border-gold/60 bg-[linear-gradient(135deg,#1d3a2b,#0f1d16_55%,#2a2413)] p-5 shadow-[0_30px_60px_-20px_rgb(0_0_0/0.8)] transition-transform duration-500 hover:rotate-0 hover:[transform:rotateY(-8deg)]">
        <Rosette className="absolute -right-16 -bottom-16 size-56 text-gold/25" size={300} R={90} r={29} d={61} turns={29} />
        <div className="relative flex h-full flex-col justify-between">
          <div className="flex items-start justify-between">
            <span className="font-display text-sm font-bold tracking-[0.3em] text-gold-bright">GENESIS</span>
            <span className="pixel text-lg text-serial">0001/1000</span>
          </div>
          <div className="flex items-end justify-between">
            <div className="grid grid-cols-11 gap-px bg-cream p-1.5" aria-hidden="true">
              {cells.map((on, i) => {
                const r = Math.floor(i / 11);
                const c = i % 11;
                return <span key={i} className={`size-1.5 ${finder(r, c) || on ? "bg-ink" : "bg-cream"}`} />;
              })}
            </div>
            <div className="text-right">
              <span className="block font-mono text-[0.6rem] uppercase tracking-widest text-muted">ERC-20 · EVM</span>
              <span className="pixel text-xl text-gold-bright">RIP · SCAN · SWEEP</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
