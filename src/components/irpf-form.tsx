"use client";

import { useState } from "react";
import { csvTemplate, fiscalYears, plans } from "@/content/irpf";
import { site } from "@/lib/i18n";

type State = { kind: "idle" } | { kind: "ok" } | { kind: "error"; message: string };

const field =
  "w-full border border-paper-ink/40 bg-paper px-3 py-2.5 font-mono text-sm text-paper-ink placeholder:text-paper-muted/70 focus:border-paper-ink focus:outline-none";
const label = "mb-1.5 block font-mono text-[0.68rem] uppercase tracking-widest text-paper-muted";

const read = (data: FormData, key: string, max = 500) => String(data.get(key) ?? "").trim().slice(0, max);

// O site é estático (GitHub Pages), sem servidor para receber o lead. A solicitação
// segue pelo WhatsApp do balcão, já escrita, e o cliente só toca em enviar.
function whatsappMessage(data: FormData) {
  const plan = plans.find((p) => p.plan === read(data, "modalidade"));
  const lines = [
    "Olá! Quero contratar a declaração de cripto no IRPF.",
    "",
    `Nome: ${read(data, "nome", 120)}`,
    `E-mail: ${read(data, "email", 160)}`,
    `WhatsApp: ${read(data, "whatsapp", 40)}`,
    `Modalidade: ${plan ? `${plan.numeral} · ${plan.name}` : "Não sei ainda"}`,
    `Ano fiscal: ${read(data, "ano", 40)}`,
    `Perfil: ${read(data, "perfil", 20)}`,
  ];
  const exchanges = read(data, "exchanges", 200);
  const obs = read(data, "obs", 1500);
  if (exchanges) lines.push(`Exchanges: ${exchanges}`);
  if (obs) lines.push("", `Observações: ${obs}`);
  return lines.join("\n");
}

export function IrpfForm() {
  const [state, setState] = useState<State>({ kind: "idle" });

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (!read(data, "nome") || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(read(data, "email")) || read(data, "whatsapp").replace(/\D/g, "").length < 10) {
      setState({ kind: "error", message: "Confira nome, e-mail e WhatsApp." });
      return;
    }
    if (data.get("consentimento") !== "sim") {
      setState({ kind: "error", message: "É preciso autorizar o contato." });
      return;
    }
    window.open(site.whatsapp(whatsappMessage(data)), "_blank", "noopener");
    setState({ kind: "ok" });
    form.reset();
  }

  if (state.kind === "ok") {
    return (
      <div role="status" className="border-2 border-paper-ink p-8 text-center">
        <p className="pixel text-3xl text-serial">✦ Solicitação pronta</p>
        <p className="mt-3 text-paper-ink/80">Abrimos o WhatsApp com a sua solicitação escrita. É só tocar em enviar, e um assessor responde em até 24 horas úteis.</p>
        <button type="button" className="btn btn-ink mt-6" onClick={() => setState({ kind: "idle" })}>
          Enviar outra
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2" noValidate={false}>
      <div className="sm:col-span-2">
        <label className={label} htmlFor="nome">Nome completo</label>
        <input className={field} id="nome" name="nome" required autoComplete="name" />
      </div>
      <div>
        <label className={label} htmlFor="email">E-mail</label>
        <input className={field} id="email" name="email" type="email" required autoComplete="email" />
      </div>
      <div>
        <label className={label} htmlFor="whatsapp">WhatsApp</label>
        <input className={field} id="whatsapp" name="whatsapp" type="tel" required autoComplete="tel" placeholder="(41) 9 0000-0000" />
      </div>
      <div>
        <label className={label} htmlFor="modalidade">Modalidade</label>
        <select className={field} id="modalidade" name="modalidade" defaultValue="completa">
          {plans.map((p) => (
            <option key={p.plan} value={p.plan}>
              {p.numeral} · {p.name}
            </option>
          ))}
          <option value="nao-sei">Não sei ainda</option>
        </select>
      </div>
      <div>
        <label className={label} htmlFor="ano">Ano fiscal</label>
        <select className={field} id="ano" name="ano" defaultValue={fiscalYears[0]}>
          {fiscalYears.map((y) => (
            <option key={y}>{y}</option>
          ))}
        </select>
      </div>
      <div>
        <label className={label} htmlFor="perfil">Perfil</label>
        <select className={field} id="perfil" name="perfil" defaultValue="PF">
          <option value="PF">Pessoa física</option>
          <option value="MEI">Pessoa jurídica (MEI)</option>
          <option value="EPP/ME">Pessoa jurídica (EPP / ME)</option>
        </select>
      </div>
      <div>
        <label className={label} htmlFor="exchanges">Exchanges que você usa</label>
        <input className={field} id="exchanges" name="exchanges" placeholder="Binance, Mercado Bitcoin, P2P…" />
      </div>
      <div className="sm:col-span-2">
        <label className={label} htmlFor="obs">Observações</label>
        <textarea className={`${field} min-h-28`} id="obs" name="obs" />
      </div>
      <label className="flex gap-3 text-sm text-paper-ink/80 sm:col-span-2">
        <input type="checkbox" name="consentimento" value="sim" required className="mt-1 size-4 accent-[#1c1a12]" />
        Autorizo o contato da CRIPTOGRAFIA sobre esta solicitação. O CPF e os extratos só são pedidos depois, por canal seguro.
      </label>
      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button type="submit" className="btn btn-ink">
          Enviar pelo WhatsApp
        </button>
        {state.kind === "error" && (
          <p role="alert" className="text-sm text-serial">
            {state.message}
          </p>
        )}
      </div>
    </form>
  );
}

export function CsvDownload() {
  function download() {
    const blob = new Blob([csvTemplate], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "criptografia_template.csv";
    a.click();
    URL.revokeObjectURL(url);
  }
  return (
    <button type="button" onClick={download} className="btn btn-gold">
      ↓ Baixar template CSV
    </button>
  );
}
