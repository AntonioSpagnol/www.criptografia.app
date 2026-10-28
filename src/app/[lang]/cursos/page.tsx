import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { GuillocheBand } from "@/components/ornaments";
import { courses } from "@/content/cursos";
import { hasLocale, site } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Cursos",
  description:
    "Escada de valor em 4 níveis: Bitcoin do Zero (R$97), Web3 para Devs (R$497), Smart Contract Security (R$1.997) e ZK Proofs & PQC (R$9.777). Em português, com casos reais.",
};

export default async function CursosPage({ params }: PageProps<"/[lang]/cursos">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  if (lang !== "pt") redirect("/pt/cursos");

  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
          <p className="engraved text-gold">Portfólio de cursos · Bitcoin · Web3 · Segurança · ZK & PQC</p>
          <h1 className="mt-5 max-w-4xl font-serif text-[clamp(2.4rem,6vw,4.6rem)] leading-[1.02] text-cream">
            Uma escada de valor, <em className="text-gold-bright">do primeiro Bitcoin ao zkEVM.</em>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-cream/75">
            Quatro produtos, todos os públicos e todos os formatos. Os exemplos vêm do nosso balcão em Curitiba e de auditorias
            reais, sempre em português.
          </p>

          {/* A escada: cada nível sobe um degrau. */}
          <ol className="mt-14 grid items-end sm:grid-cols-4">
            {courses.map((c, i) => (
              <li key={c.slug} className="border-line sm:border-l sm:first:border-l-0">
                <a
                  href={`#${c.slug}`}
                  className="flex flex-col justify-end border-t-2 border-gold p-5 transition-colors hover:bg-ink-2"
                  style={{ minHeight: `${8 + i * 3.2}rem` }}
                >
                  <span className="font-mono text-[0.65rem] uppercase tracking-widest text-muted">{c.level}</span>
                  <span className="pixel mt-1 text-4xl text-gold-bright">{c.price}</span>
                  <span className="mt-1 font-display text-sm font-semibold text-cream">{c.title}</span>
                  <span className="text-xs text-muted">{c.audience}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {courses.map((c, i) => (
        <section key={c.slug} id={c.slug} className={`scroll-mt-14 ${i % 2 ? "paper" : ""}`}>
          {i % 2 === 1 && <GuillocheBand className="h-6 w-full text-paper-ink/25" />}
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.3fr]">
            <div>
              <p className={`font-mono text-[0.7rem] uppercase tracking-widest ${i % 2 ? "text-paper-muted" : "text-gold"}`}>
                {c.level} · {c.audience} · {c.format}
                {c.featured && <span className="ml-2 text-serial">★ Recomendado</span>}
              </p>
              <h2 className={`mt-4 font-serif text-[clamp(2rem,4vw,3rem)] leading-tight ${i % 2 ? "" : "text-cream"}`}>
                {c.title}: <em>{c.subtitle}</em>
              </h2>
              <p className={`mt-4 ${i % 2 ? "text-paper-ink/75" : "text-cream/75"}`}>{c.pitch}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {c.tags.map((tag) => (
                  <li
                    key={tag}
                    className={`border px-2 py-0.5 font-mono text-[0.68rem] uppercase tracking-wider ${
                      i % 2 ? "border-paper-ink/30" : "border-line text-cream/70"
                    }`}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <dl className={`mt-8 grid grid-cols-3 border-y py-5 ${i % 2 ? "border-paper-ink/25" : "border-line"}`}>
                {[
                  ["Preço", c.price],
                  ["Formato", c.format],
                  ["Carga", c.hours],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className={`font-mono text-[0.62rem] uppercase tracking-widest ${i % 2 ? "text-paper-muted" : "text-muted"}`}>{k}</dt>
                    <dd className={`pixel mt-1 text-2xl ${i % 2 ? "text-serial" : "text-gold-bright"}`}>{v}</dd>
                  </div>
                ))}
              </dl>
              {c.cohort && <p className="mt-3 font-mono text-xs uppercase tracking-widest text-amber">{c.cohort}</p>}
              <blockquote className={`mt-8 border-l-2 pl-4 font-serif italic ${i % 2 ? "border-serial text-paper-ink/80" : "border-gold text-cream/80"}`}>
                <span className="engraved not-italic">⁂ Diferencial</span>
                <br />
                {c.edge}
              </blockquote>
              <a
                className={`btn mt-8 ${i % 2 ? "btn-ink" : "btn-gold"}`}
                href={site.whatsapp(`Olá, quero me inscrever no curso ${c.title} (${c.price})`)}
              >
                Quero me inscrever
              </a>
            </div>
            <div>
              <p className={`engraved ${i % 2 ? "text-paper-muted" : "text-gold"}`}>Currículo · {c.modules.length} módulos</p>
              <ol className="mt-4">
                {c.modules.map((m, k) => (
                  <li key={m.title} className={`border-b ${i % 2 ? "border-paper-ink/20" : "border-line"}`}>
                    <details className="group" open={k === 0}>
                      <summary className="flex cursor-pointer list-none items-baseline gap-4 py-4 [&::-webkit-details-marker]:hidden">
                        <span className={`pixel text-xl ${i % 2 ? "text-serial" : "text-gold-dim"}`}>M{String(k + 1).padStart(2, "0")}</span>
                        <span className={`flex-1 font-display text-base font-semibold ${i % 2 ? "" : "text-cream"}`}>{m.title}</span>
                        <span aria-hidden="true" className="font-mono transition-transform group-open:rotate-45">
                          +
                        </span>
                      </summary>
                      <ul className={`pb-5 pl-12 font-mono text-[0.82rem] ${i % 2 ? "text-paper-ink/75" : "text-cream/70"}`}>
                        {m.topics.map((topic) => (
                          <li key={topic} className="py-0.5">
                            › {topic}
                          </li>
                        ))}
                      </ul>
                    </details>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
