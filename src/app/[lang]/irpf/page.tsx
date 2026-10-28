import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { CsvDownload, IrpfForm } from "@/components/irpf-form";
import { GuillocheBand, Seal } from "@/components/ornaments";
import { exchangeGuides, plans, risks, steps } from "@/content/irpf";
import { hasLocale, site } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "IRPF Cripto",
  description:
    "Declaração de criptoativos para a Receita Federal: ganho de capital, GCAP, DARF e compliance COAF. Atendimento na Grande Curitiba ou remoto para todo o Brasil.",
};

const marquee = [
  "IN RFB 1888/2019",
  "Compliance COAF",
  "Ganho de capital cripto",
  "Importação GCAP",
  "Declaração IRPF",
  "Binance · Mercado Bitcoin · Foxbit",
  "NFT · DeFi · P2P · Staking",
  "Lei 14.478/2022",
];

export default async function IrpfPage({ params }: PageProps<"/[lang]/irpf">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  // Serviço só para contribuintes brasileiros: a página existe em português.
  if (lang !== "pt") redirect("/pt/irpf");

  return (
    <>
      <div className="flex overflow-hidden border-b border-line bg-ink-2 py-1.5 font-mono text-[0.72rem] uppercase tracking-widest text-gold">
        <div className="flex animate-marquee" style={{ "--marquee-duration": "45s" } as React.CSSProperties}>
          {[0, 1].map((k) => (
            <div key={k} className="flex shrink-0 gap-10 pr-10" aria-hidden={k === 1}>
              {marquee.map((m) => (
                <span key={m} className="whitespace-nowrap">◆ {m}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className="relative">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:py-28">
          <div>
            <p className="engraved text-gold">Assessoria tributária especializada</p>
            <h1 className="mt-5 font-serif text-[clamp(2.4rem,6vw,4.6rem)] leading-[1.02] text-cream">
              Seu cripto na Receita Federal. <em className="text-gold-bright">Do jeito certo.</em>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-cream/75">
              A maioria dos brasileiros com criptoativos está errando a declaração. Organizamos o seu histórico,
              calculamos o ganho de capital com precisão e entregamos tudo pronto para o GCAP e o IRPF.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#contato-irpf" className="btn btn-gold">Iniciar assessoria</a>
              <a href="#template" className="btn btn-ghost">Template CSV</a>
            </div>
          </div>
          <dl className="terminal grid grid-cols-2 self-center">
            {[
              ["R$35 mil", "multa possível por omissão"],
              ["150%", "multa por evasão dolosa"],
              ["2019", "IN RFB obrigatória desde"],
              ["5 anos", "prazo decadencial"],
            ].map(([v, l], i) => (
              <div key={l} className={`p-5 ${i % 2 === 0 ? "border-r border-line" : ""} ${i < 2 ? "border-b border-line" : ""}`}>
                <dt className="sr-only">{l}</dt>
                <dd>
                  <span className="pixel block text-4xl text-amber">{v}</span>
                  <span className="mt-1 block text-xs text-muted">{l}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-y border-line bg-ink-2">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <p className="engraved text-gold">Os erros mais comuns</p>
          <h2 className="mt-3 max-w-2xl font-serif text-3xl italic text-cream sm:text-4xl">
            Todo brasileiro com cripto está exposto a pelo menos um destes riscos.
          </h2>
          <ul className="mt-12 grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
            {risks.map((r) => (
              <li key={r.title} className="bg-ink p-6">
                <span className={`font-mono text-[0.65rem] uppercase tracking-widest ${r.level === "Risco elevado" ? "text-down" : "text-amber"}`}>
                  ⚠ {r.level}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold text-cream">{r.title}</h3>
                <p className="mt-2 text-[0.95rem] text-cream/70">{r.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="paper">
        <GuillocheBand className="h-6 w-full text-paper-ink/25" />
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <p className="engraved text-paper-muted">Nossas modalidades</p>
          <h2 className="mt-3 font-serif text-4xl italic">Escolha a que combina com o seu histórico.</h2>
          <ul className="mt-12 grid gap-6 lg:grid-cols-3">
            {plans.map((p) => (
              <li
                key={p.plan}
                className={`relative flex flex-col border p-7 ${p.featured ? "border-2 border-paper-ink bg-paper-2" : "border-paper-ink/30"}`}
              >
                {p.featured && (
                  <Seal text="MAIS PROCURADA · MAIS PROCURADA · " center="✦" className="absolute -top-8 -right-6 size-20 rotate-12 text-serial" />
                )}
                <span className="font-display text-3xl text-paper-ink/70">{p.numeral}</span>
                <h3 className="mt-4 font-display text-xl font-semibold">{p.name}</h3>
                <p className="mt-2">
                  <span className="pixel text-4xl text-serial">{p.price}</span>{" "}
                  <span className="text-sm text-paper-muted">{p.per}</span>
                </p>
                <p className="mt-3 text-[0.95rem] text-paper-ink/75">{p.who}</p>
                <ul className="mt-5 flex-1 space-y-2 border-t border-paper-ink/20 pt-5 font-mono text-[0.8rem]">
                  {p.items.map((it) => (
                    <li key={it} className="flex gap-2">
                      <span className="text-serial">✓</span>
                      {it}
                    </li>
                  ))}
                </ul>
                <a href="#contato-irpf" className="btn btn-ink mt-7 justify-center">
                  {p.plan === "empresarial" ? "Falar com especialista" : "Solicitar"}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <p className="engraved text-gold">Como funciona</p>
          <h2 className="mt-3 font-serif text-4xl italic text-cream">Processo claro. Resultado sem pendência.</h2>
          <ol className="mt-12 grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="bg-ink p-6">
                <span className="font-display text-3xl text-gold">{["I", "II", "III", "IV"][i]}</span>
                <h3 className="mt-4 font-display text-base font-semibold text-cream">{s.title}</h3>
                <p className="mt-2 text-[0.95rem] text-cream/70">{s.body}</p>
                <p className="mt-4 font-mono text-[0.68rem] uppercase tracking-widest text-amber">{s.note}</p>
              </li>
            ))}
          </ol>

          <div id="template" className="mt-16 grid scroll-mt-20 gap-8 lg:grid-cols-2">
            <div className="terminal p-6">
              <p className="text-[0.7rem] uppercase tracking-widest text-amber">criptografia_template.csv</p>
              <p className="mt-3 text-sm text-cream/75">
                Compatível com todas as exchanges. Campos: data, tipo, ativo, quantidade, valor em BRL, preço unitário,
                taxa, exchange, carteira, hash, par e observação.
              </p>
              <div className="mt-6">
                <CsvDownload />
              </div>
            </div>
            <div>
              <p className="engraved text-gold">Como exportar em cada exchange</p>
              <ul className="mt-4 divide-y divide-line border-y border-line font-mono text-[0.8rem]">
                {exchangeGuides.map((g) => (
                  <li key={g.name} className="grid gap-1 py-3 sm:grid-cols-[9rem_1fr]">
                    <span className="text-gold-bright">{g.name}</span>
                    <span className="text-cream/75">{g.path}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contato-irpf" className="paper scroll-mt-14">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <p className="engraved text-paper-muted">Iniciar atendimento</p>
            <h2 className="mt-3 font-serif text-4xl italic">Regularize seus ativos.</h2>
            <p className="mt-4 text-paper-ink/75">
              Atendimento presencial na Grande Curitiba ou remoto para todo o Brasil. Respondemos em até 24 horas úteis.
            </p>
            <p className="mt-6 text-sm text-paper-ink/65">
              Seus dados são tratados com sigilo profissional e não são compartilhados com terceiros. CRIPTOGRAFIA · CNPJ {site.cnpj}.
            </p>
            <p className="mt-6 font-mono text-[0.68rem] uppercase tracking-widest text-paper-muted">
              IN RFB 1888/2019 · Lei 14.478/2022 · Resolução COAF 36/2021
            </p>
          </div>
          <IrpfForm />
        </div>
      </section>
    </>
  );
}
