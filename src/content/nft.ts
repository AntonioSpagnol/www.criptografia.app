import type { L } from "@/lib/i18n";

export const nftPage = {
  pt: {
    title: "Vitrine NFT",
    eyebrow: "Bitcoin Ordinals · coleções Ethereum · arte Web3",
    heading: "Coleções com história.",
    body: "Lançamentos curados da CRIPTOGRAFIA: Satoshi Square, Ramadan 2030, UMBANDA e Timor Lorosa'e. Para colecionadores, builders e marcas que querem entender o nosso ecossistema de NFTs.",
    ctaTitle: "Quer lançar a sua coleção?",
    ctaBody: "Criamos a coleção, inscrevemos Ordinals ou montamos a vitrine da sua marca digital com a infraestrutura da CRIPTOGRAFIA.",
    cta: "Falar com a gente",
    back: "Voltar para a home",
  },
  en: {
    title: "NFT Showcase",
    eyebrow: "Bitcoin Ordinals · Ethereum collections · Web3 art",
    heading: "Collections with a story.",
    body: "Curated CRIPTOGRAFIA launches: Satoshi Square, Ramadan 2030, UMBANDA and Timor Lorosa'e. For collectors, builders and brands exploring our NFT ecosystem.",
    ctaTitle: "Want to launch your own collection?",
    ctaBody: "We build the collection, inscribe Ordinals or set up your digital brand showcase on CRIPTOGRAFIA infrastructure.",
    cta: "Talk to us",
    back: "Back to home",
  },
};

export const collections: { name: string; status: L; kind: L; body: L; link?: { label: L; href: string } }[] = [
  {
    name: "Satoshi Square",
    status: { pt: "No ar", en: "Live" },
    kind: { pt: "Mesa P2P ao vivo · motor de aquisição de NFT", en: "Live P2P trading board · NFT acquisition engine" },
    body: {
      pt: "Uma mesa de negociação P2P de NFTs pensada para encontros cripto. Integra MetaMask, WalletConnect e Unisat para descobrir NFTs, Ordinals e tokens na hora.",
      en: "A peer-to-peer NFT trading board built for crypto meetups. Integrates MetaMask, WalletConnect and Unisat for instant NFT, Ordinal and token discovery.",
    },
    link: { label: { pt: "Pitch deck", en: "Pitch deck" }, href: "https://criptografia.lovable.app/whitepapers/SatoshiSquare-Pitch-EN.pdf" },
  },
  {
    name: "Ramadan 2030",
    status: { pt: "Coleção", en: "Collection" },
    kind: { pt: "Coleção Ethereum · narrativa cultural", en: "Ethereum collection · cultural storytelling" },
    body: {
      pt: "Uma série curada com ressonância cultural e espiritual, de código aberto no GitHub. Une arte, comunidade e procedência em blockchain.",
      en: "A curated series with cultural and spiritual resonance, open source on GitHub. Blends art, community and blockchain provenance.",
    },
    link: { label: { pt: "Projeto no GitHub", en: "GitHub project" }, href: "https://github.com/criptografia-cash/ramadan2030" },
  },
  {
    name: "UMBANDA",
    status: { pt: "Coleção", en: "Collection" },
    kind: { pt: "Arte espiritual & identidade", en: "Spiritual art & identity" },
    body: {
      pt: "Coleção comunitária inspirada na Umbanda, em que simbologia sagrada, herança ritual e procedência em blockchain se encontram.",
      en: "A community-first collection inspired by Umbanda, where sacred symbolism, ritual heritage and blockchain provenance converge.",
    },
  },
  {
    name: "Timor Lorosa'e",
    status: { pt: "Coleção", en: "Collection" },
    kind: { pt: "Herança insular", en: "Island heritage" },
    body: {
      pt: "O olhar de um viajante sobre uma cultura única, destacando a herança timorense, as histórias da comunidade e narrativas colecionáveis.",
      en: "A traveler's view of a unique culture, highlighting Timorese heritage, community storytelling and collectible narratives.",
    },
  },
];
