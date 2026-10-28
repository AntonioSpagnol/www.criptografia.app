"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { Locale } from "@/lib/i18n";
import type { HomeDict } from "@/content/home";

export function Header({ lang, nav }: { lang: Locale; nav: HomeDict["nav"] }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const base = `/${lang}`;
  const home = pathname === base;
  // Âncoras da home viram links absolutos quando estamos numa subpágina.
  const anchor = (id: string) => (home ? `#${id}` : `${base}#${id}`);
  // Cursos e IRPF só existem em português.
  const ptOnly = (path: string) => `/pt${path}`;

  const links = [
    { href: anchor("balcao"), label: nav.desk },
    { href: anchor("deeptech"), label: nav.deeptech },
    { href: anchor("servicos"), label: nav.services },
    { href: anchor("loja"), label: nav.store },
    { href: ptOnly("/cursos"), label: nav.courses },
    { href: ptOnly("/irpf"), label: nav.tax },
    { href: `${base}/nft`, label: nav.nft },
  ];

  const other: Locale = lang === "pt" ? "en" : "pt";
  const rest = pathname.replace(/^\/(pt|en)/, "");
  const switchable = !rest.startsWith("/cursos") && !rest.startsWith("/irpf");
  const otherHref = `/${other}${switchable ? rest : ""}`;

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/95">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6">
        <Link href={base} className="font-display text-sm font-bold tracking-[0.3em] text-gold-bright">
          CRIPTOGRAFIA
        </Link>
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex gap-6 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-cream/80">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-gold-bright">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <div className="flex border border-line font-mono text-[0.72rem]" role="group" aria-label="Idioma / Language">
            {(["pt", "en"] as const).map((l) => (
              <Link
                key={l}
                href={l === lang ? pathname : otherHref}
                hrefLang={l === "pt" ? "pt-BR" : "en"}
                aria-current={l === lang ? "true" : undefined}
                className={`px-2.5 py-1 uppercase tracking-widest ${
                  l === lang ? "bg-gold text-ink" : "text-gold-bright hover:bg-gold/10"
                }`}
              >
                {l}
              </Link>
            ))}
          </div>
          <a href={anchor("contato")} className="btn btn-gold hidden !py-1.5 sm:inline-flex">
            {nav.contact}
          </a>
          <button
            type="button"
            className="border border-line px-3 py-1 font-mono text-[0.72rem] uppercase tracking-widest text-gold-bright lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? nav.close : nav.menu}
          </button>
        </div>
      </div>
      {open && (
        <nav id="menu-mobile" aria-label="Principal" className="border-t border-line bg-ink lg:hidden">
          <ul className="mx-auto max-w-7xl px-4 py-4 font-mono text-sm uppercase tracking-[0.16em]">
            {[...links, { href: anchor("contato"), label: nav.contact }].map((l, i) => (
              <li key={l.href}>
                <Link href={l.href} onClick={() => setOpen(false)} className="flex gap-4 border-b border-line/50 py-3 text-cream hover:text-gold-bright">
                  <span className="pixel text-base text-gold-dim">{String(i + 1).padStart(2, "0")}</span>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
