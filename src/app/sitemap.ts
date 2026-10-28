import type { MetadataRoute } from "next";
import { site } from "@/lib/i18n";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const both = ["", "/nft"].map((path) => ({
    url: `${site.url}/pt${path}/`,
    alternates: { languages: { "pt-BR": `${site.url}/pt${path}/`, en: `${site.url}/en${path}/` } },
  }));
  const ptOnly = ["/cursos", "/irpf"].map((path) => ({ url: `${site.url}/pt${path}/` }));
  return [...both, ...ptOnly];
}
