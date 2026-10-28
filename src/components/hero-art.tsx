"use client";

import { useState } from "react";
import { AsciiArt, type AsciiMode } from "@/components/ascii-art";
import { NoteCorners } from "@/components/ornaments";

// Fora do componente para não recriar o canvas a cada render.
const GOLD: [string, string, string] = ["#6b5a2c", "#b0914a", "#f0d892"];
const PIXEL: [string, string, string] = ["#7d6a35", "#c9a55a", "#f3e2a6"];

type Props = {
  label: string;
  caption: string;
  modeAscii: string;
  modePixel: string;
  modeLabel: string;
};

export function HeroArt({ label, caption, modeAscii, modePixel, modeLabel }: Props) {
  const [mode, setMode] = useState<AsciiMode>("ascii");
  return (
    <figure className="relative">
      <div className="note-frame relative aspect-[4/5] w-full overflow-hidden bg-[radial-gradient(ellipse_at_50%_40%,#1a1d14,#0b0d0a_70%)]">
        <AsciiArt
          src="/art/turing.png"
          mode={mode}
          cell={mode === "ascii" ? 8 : 5}
          tones={mode === "ascii" ? GOLD : PIXEL}
          contrast={1.2}
          gamma={1.05}
          vignette={0.25}
          label={label}
          className="absolute inset-0 size-full cursor-crosshair"
        />
        <NoteCorners label="100" corners="top" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-ink via-ink/80 to-transparent px-5 pt-12 pb-4">
          <div className="flex items-end justify-between gap-4">
            <span className="engraved text-[0.62rem] text-gold">Série MMXXIII</span>
            <span className="pixel text-xl tracking-[0.2em] text-serial">Nº 50219248</span>
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <figcaption className="max-w-xs font-serif text-sm italic text-muted">{caption}</figcaption>
        <div role="group" aria-label={modeLabel} className="flex border border-line font-mono text-[0.68rem] uppercase tracking-widest">
          {(
            [
              ["ascii", modeAscii],
              ["dither", modePixel],
            ] as const
          ).map(([m, text]) => (
            <button
              key={m}
              type="button"
              aria-pressed={mode === m}
              onClick={() => setMode(m)}
              className={`px-3 py-1.5 ${mode === m ? "bg-gold text-ink" : "text-gold-bright hover:bg-gold/10"}`}
            >
              {text}
            </button>
          ))}
        </div>
      </div>
    </figure>
  );
}
