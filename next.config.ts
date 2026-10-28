import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // O site é publicado no GitHub Pages: tudo vira HTML estático em out/.
  output: "export",
  // /pt/irpf → /pt/irpf/index.html, que o Pages serve sem extensão.
  trailingSlash: true,
  images: { unoptimized: true },
  turbopack: {
    // A pasta pai (demo SAGE) tem outro package-lock; o projeto é este diretório.
    root: import.meta.dirname,
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
