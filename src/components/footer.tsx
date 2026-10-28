import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { site } from "@/lib/i18n";
import { tech, type HomeDict } from "@/content/home";
import { GuillocheBand } from "@/components/ornaments";

export function Footer({ lang, t }: { lang: Locale; t: HomeDict }) {
  const base = `/${lang}`;
  const year = 2026;
  return (
    <footer className="border-t border-line bg-ink">
      <GuillocheBand className="h-8 w-full text-gold/25" />
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl font-bold tracking-[0.3em] text-gold-bright">CRIPTOGRAFIA</p>
            <p className="mt-3 max-w-sm text-sm text-muted">{t.footer.tagline}</p>
            <p className="mt-6 font-mono text-sm">
              <a className="text-gold-bright hover:underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              <br />
              <a className="text-cream hover:underline" href={site.whatsapp(t.desk.whatsTrade)}>
                WhatsApp {site.phoneDisplay}
              </a>
            </p>
          </div>
          <nav aria-label="Rodapé">
            <ul className="space-y-2 font-mono text-[0.75rem] uppercase tracking-[0.16em] text-cream/80">
              <li><Link className="hover:text-gold-bright" href={`${base}#balcao`}>{t.nav.desk}</Link></li>
              <li><Link className="hover:text-gold-bright" href={`${base}#deeptech`}>{t.nav.deeptech}</Link></li>
              <li><Link className="hover:text-gold-bright" href={`${base}#servicos`}>{t.nav.services}</Link></li>
              <li><Link className="hover:text-gold-bright" href={`${base}#loja`}>{t.nav.store}</Link></li>
              <li>
                <Link className="hover:text-gold-bright" href="/pt/cursos">
                  {t.nav.courses} {lang === "en" && <span className="normal-case text-muted">{t.footer.ptOnly}</span>}
                </Link>
              </li>
              <li>
                <Link className="hover:text-gold-bright" href="/pt/irpf">
                  {t.nav.tax} {lang === "en" && <span className="normal-case text-muted">{t.footer.ptOnly}</span>}
                </Link>
              </li>
              <li><Link className="hover:text-gold-bright" href={`${base}/nft`}>{t.nav.nft}</Link></li>
            </ul>
          </nav>
          <div>
            <p className="engraved text-gold">{t.footer.techTitle}</p>
            <ul className="mt-4 flex flex-wrap gap-2 font-mono text-[0.68rem] uppercase tracking-widest text-muted">
              {tech.map((x) => (
                <li key={x} className="border border-line px-2 py-1">{x}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap justify-between gap-4 border-t border-line pt-6 font-mono text-[0.7rem] text-muted">
          <span>
            © {year} CRIPTOGRAFIA · CNPJ {site.cnpj} · {t.footer.rights}
          </span>
          <span className="pixel text-base text-serial">Nº 50219248 · MMXXIII</span>
        </div>
      </div>
    </footer>
  );
}
