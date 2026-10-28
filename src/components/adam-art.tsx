"use client";

import { AsciiArt } from "@/components/ascii-art";

const CREAM: [string, string, string] = ["#5f5a48", "#b9b29a", "#f3ecd8"];

export function AdamArt({ label }: { label: string }) {
  return (
    <AsciiArt
      src="/art/adao.png"
      mode="dither"
      cell={5}
      tones={CREAM}
      contrast={1.15}
      gamma={1.25}
      vignette={0.35}
      label={label}
      className="absolute inset-0 size-full cursor-crosshair"
    />
  );
}
