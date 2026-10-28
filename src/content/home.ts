import type { L, Locale } from "@/lib/i18n";

const pt = {
  meta: {
    title: "CRIPTOGRAFIA · Blockchain Crypto Services em Curitiba",
    description:
      "Balcão P2P de cripto com cotação ao vivo, carteiras frias e colecionáveis em Curitiba. Para empresas: entropia quântica, nós RPC dedicados, zkML e segurança pós-quântica.",
  },
  nav: {
    desk: "Balcão",
    deeptech: "Deep Tech",
    services: "Serviços",
    store: "Loja",
    courses: "Cursos",
    tax: "IRPF",
    nft: "NFTs",
    contact: "Contato",
    menu: "Menu",
    close: "Fechar",
  },
  hero: {
    eyebrow: "Blockchain Crypto Services · Curitiba · Est. MMXXIII",
    lead: "Do balcão ao pós-quântico.",
    body: "Compramos e vendemos qualquer token na cotação do momento, guardamos suas chaves com segurança e construímos infraestrutura criptográfica para empresas que não podem errar.",
    ctaPrimary: "Negociar no WhatsApp",
    ctaSecondary: "Ver o que fazemos",
    portrait: "Retrato de Alan Turing em arte ASCII animada",
    caption: "Alan Turing, 1912–1954. O pai da computação estampa a nossa cédula.",
    denomination: "Cem",
    modeAscii: "ASCII",
    modePixel: "Pixel",
    modeLabel: "Estilo da gravura",
  },
  doors: {
    eyebrow: "Quatro portas",
    title: "Escolha a sua.",
    items: [
      {
        numeral: "I",
        who: "Para você",
        title: "Balcão P2P & Loja",
        body: "Compre ou venda cripto com gente de verdade, no balcão ou pelo WhatsApp. Carteiras frias, recuperação de seed e colecionáveis graduados.",
        href: "#balcao",
      },
      {
        numeral: "II",
        who: "Para empresas",
        title: "Deep Tech",
        body: "Entropia quântica certificada, nós RPC dedicados, provas zkML e gestão de chaves pronta para o pós-quântico.",
        href: "#deeptech",
      },
      {
        numeral: "III",
        who: "Para devs",
        title: "Cursos",
        body: "Do primeiro Bitcoin à auditoria de smart contracts e provas ZK. Quatro níveis, de R$97 a R$9.777.",
        href: "/cursos",
      },
      {
        numeral: "IV",
        who: "Para o contribuinte",
        title: "IRPF Cripto",
        body: "Seus criptoativos declarados do jeito certo, com o ganho de capital calculado e o GCAP pronto.",
        href: "/irpf",
      },
    ],
  },
  desk: {
    eyebrow: "Mesa de operações · P2P & OTC",
    title: "Cotação ao vivo. Atendimento de gente.",
    body: "Executamos ordens de compra e venda de qualquer token pelo WhatsApp, na cotação do momento. Para valores maiores, agende uma visita ao balcão.",
    boardTitle: "Cotações em reais",
    boardSource: "Fonte: CoinGecko · atualiza a cada 60 s",
    boardFallback: "Sem conexão com a fonte. Valores indicativos.",
    asset: "Ativo",
    price: "Preço",
    change: "24 h",
    trend: "7 d",
    pairsTitle: "Top 10 pares cross-chain",
    ctaTrade: "Negociar no WhatsApp",
    ctaVisit: "Agendar visita presencial",
    visitNote: "recomendado para valores maiores",
    whatsTrade: "Olá, quero comprar/vender tokens no P2P Token Desk",
    whatsVisit: "Olá, quero agendar uma visita presencial ao balcão",
    terminal: {
      book: "Livro de ofertas",
      tape: "Negócios",
      chart: "BTC/BRL · 1 min",
      sim: "Simulação ilustrativa",
      bid: "Compra",
      ask: "Venda",
      qty: "Qtd",
    },
    location: "Curitiba & Grande Curitiba · PR",
  },
  deeptech: {
    eyebrow: "Deep Tech · AI × Web3 · Pós-quântico",
    title: "Infraestrutura criptográfica para a era das IAs.",
    body: "Construímos a camada de computação verificável da qual agentes de IA, protocolos blockchain e sistemas pós-quânticos dependem: de nós RPC dedicados e provas de inferência zkML até gestão de chaves resistente ao quantum.",
    art: "A Criação de Adão, de Michelangelo, em pixel art animada",
    caption: "A Criação de Adão, Michelangelo, c. 1512. Humano e máquina, a um bit de distância.",
    legendTitle: "Como ler os status",
    compareTitle: "Onde o nosso stack é diferente",
    compareFeature: "Característica",
    compareUs: "Stack CRIPTOGRAFIA",
    compareThem: "Cripto clássica / RPC global",
  },
  sectors: {
    eyebrow: "iGaming · Fintech · Web3 · Saúde",
    quote:
      "Seu cassino perde dinheiro toda vez que um jogador adivinha o próximo resultado. PRNGs comuns tornam isso possível. O QSHaaS torna isso impossível.",
    body: "Toda geração de número aleatório por software é determinística, e um atacante bem equipado consegue prever o resultado. O QSHaaS troca essa aleatoriedade por entropia quântica física certificada, com prova auditável a cada sorteio.",
    entropy: "SHA3-256 · semente QRNG · CRYSTALS-Dilithium ready",
    entropyLive: "Fluxo de entropia",
  },
  services: {
    eyebrow: "Serviços profissionais · B2B & local",
    title: "O que podemos fazer por você.",
    body: "Além dos produtos, entregamos serviço técnico feito por quem já opera protocolo em produção. De auditoria de smart contract a workshop de carteira fria.",
    cta: "Pedir orçamento",
    mailSubject: "Orçamento",
  },
  store: {
    eyebrow: "Loja física · Curitiba & Grande Curitiba · PR",
    title: "Onde blockchain encontra numismática.",
    body: "Um balcão para gestão de ativos digitais, hardware de segurança e câmbio P2P, ao lado de uma coleção curada de colecionáveis graduados. É o único lugar da região em que cripto, moedas certificadas, quadrinhos CGC e cards de coleção dividem a vitrine.",
    cryptoTitle: "Serviços cripto",
    collectTitle: "Colecionáveis graduados",
    noteCaption: "A cédula CRIPTOGRAFIA, nosso cartão de visita.",
    genesisEyebrow: "The Genesis Card · edição limitada 1/1000",
    genesisTitle: "Uma carteira fria que cabe na carteira.",
    genesisBody: "Cartão-carteira em PVC de alta durabilidade, lacrado num booster pack metalizado. Funciona em qualquer rede EVM (Ethereum, Base, Arbitrum, Polygon). Escaneie o QR da frente para conferir o saldo e rasgue o lacre para varrer a chave privada.",
    genesisSteps: ["Rasgue", "Escaneie", "Varra"],
    genesisCta: "Conhecer o Genesis Card",
    visitCta: "Agendar visita",
  },
  learn: {
    coursesEyebrow: "Escada de valor · Cursos",
    coursesTitle: "Aprenda com quem audita.",
    coursesBody: "Quatro níveis, do primeiro Bitcoin às provas de conhecimento zero. Os casos vêm da loja e de auditorias reais.",
    coursesCta: "Ver os cursos",
    taxEyebrow: "Assessoria tributária · IRPF",
    taxTitle: "Seu cripto na Receita Federal. Do jeito certo.",
    taxBody: "A maioria dos brasileiros com criptoativos está errando a declaração. Organizamos o histórico, calculamos o ganho de capital e entregamos tudo pronto para o GCAP e o IRPF.",
    taxCta: "Ver modalidades",
    taxStats: [
      { value: "150%", label: "multa por evasão dolosa" },
      { value: "R$5 mil", label: "limite para declarar cada ativo" },
      { value: "3–5 dias", label: "prazo de entrega" },
    ],
  },
  nftTeaser: {
    eyebrow: "Vitrine NFT",
    title: "Coleções com história.",
    body: "Satoshi Square, Ramadan 2030, UMBANDA e Timor Lorosa'e. Lançamentos curados e infraestrutura para quem quer lançar a própria coleção.",
    cta: "Ver as coleções",
  },
  final: {
    title: "Pronto para proteger o seu futuro?",
    body: "Segurança quântica para empresas, conformidade em iGaming ou uma hardware wallet. Estamos aqui.",
    ctaContact: "Falar com a gente",
    ctaStore: "Visitar a loja",
  },
  footer: {
    tagline: "Blockchain Crypto Services · Grande Curitiba · PR · Brasil · Est. 2023",
    techTitle: "Tecnologias com que trabalhamos",
    rights: "Todos os direitos reservados.",
    ptOnly: "(em português)",
  },
};

export type HomeDict = typeof pt;

const en: HomeDict = {
  meta: {
    title: "CRIPTOGRAFIA · Blockchain Crypto Services in Curitiba, Brazil",
    description:
      "P2P crypto desk with live rates, cold wallets and graded collectibles in Curitiba. For enterprises: quantum entropy, dedicated RPC nodes, zkML and post-quantum security.",
  },
  nav: {
    desk: "Desk",
    deeptech: "Deep Tech",
    services: "Services",
    store: "Store",
    courses: "Courses",
    tax: "Tax",
    nft: "NFTs",
    contact: "Contact",
    menu: "Menu",
    close: "Close",
  },
  hero: {
    eyebrow: "Blockchain Crypto Services · Curitiba · Est. MMXXIII",
    lead: "From the trading desk to post-quantum.",
    body: "We buy and sell any token at live market rates, keep your keys safe, and build cryptographic infrastructure for companies that cannot afford to get it wrong.",
    ctaPrimary: "Trade on WhatsApp",
    ctaSecondary: "See what we do",
    portrait: "Portrait of Alan Turing as animated ASCII art",
    caption: "Alan Turing, 1912–1954. The father of computing is on our banknote.",
    denomination: "One hundred",
    modeAscii: "ASCII",
    modePixel: "Pixel",
    modeLabel: "Engraving style",
  },
  doors: {
    eyebrow: "Four doors",
    title: "Pick yours.",
    items: [
      {
        numeral: "I",
        who: "For you",
        title: "P2P Desk & Store",
        body: "Buy or sell crypto with real people, in person or on WhatsApp. Cold wallets, seed recovery and graded collectibles.",
        href: "#balcao",
      },
      {
        numeral: "II",
        who: "For enterprises",
        title: "Deep Tech",
        body: "Certified quantum entropy, dedicated RPC nodes, zkML proofs and post-quantum-ready key management.",
        href: "#deeptech",
      },
      {
        numeral: "III",
        who: "For developers",
        title: "Courses",
        body: "From your first Bitcoin to smart contract audits and ZK proofs. Four levels, taught in Portuguese.",
        href: "/cursos",
      },
      {
        numeral: "IV",
        who: "For Brazilian taxpayers",
        title: "Crypto Tax",
        body: "Your digital assets declared correctly to the Receita Federal, capital gains calculated and GCAP ready.",
        href: "/irpf",
      },
    ],
  },
  desk: {
    eyebrow: "Trading desk · P2P & OTC",
    title: "Live rates. Human service.",
    body: "We execute buy and sell orders for any token over WhatsApp at the current market rate. For larger amounts, book a private visit to the desk.",
    boardTitle: "Rates in BRL",
    boardSource: "Source: CoinGecko · refreshes every 60 s",
    boardFallback: "Source unreachable. Indicative values.",
    asset: "Asset",
    price: "Price",
    change: "24 h",
    trend: "7 d",
    pairsTitle: "Top 10 cross-chain pairs",
    ctaTrade: "Trade on WhatsApp",
    ctaVisit: "Book an in-person visit",
    visitNote: "recommended for larger amounts",
    whatsTrade: "Hi, I want to buy/sell tokens at the P2P Token Desk",
    whatsVisit: "Hi, I want to book an in-person visit to the desk",
    terminal: {
      book: "Order book",
      tape: "Trades",
      chart: "BTC/BRL · 1 min",
      sim: "Illustrative simulation",
      bid: "Bid",
      ask: "Ask",
      qty: "Qty",
    },
    location: "Curitiba & Greater Curitiba · PR · Brazil",
  },
  deeptech: {
    eyebrow: "Deep Tech · AI × Web3 · Post-quantum",
    title: "Cryptographic infrastructure for the AI-native era.",
    body: "We build the verifiable compute layer that AI agents, blockchain protocols and post-quantum systems depend on: from dedicated RPC nodes and zkML inference proofs to quantum-resistant key management.",
    art: "Michelangelo's Creation of Adam as animated pixel art",
    caption: "The Creation of Adam, Michelangelo, c. 1512. Human and machine, one bit apart.",
    legendTitle: "How to read the status",
    compareTitle: "Where our stack is different",
    compareFeature: "Feature",
    compareUs: "CRIPTOGRAFIA stack",
    compareThem: "Classical crypto / global RPC",
  },
  sectors: {
    eyebrow: "iGaming · Fintech · Web3 · Healthcare",
    quote:
      "Your casino loses money every time a player predicts the next result. Standard PRNGs make that possible. QSHaaS makes it impossible.",
    body: "Software randomness is deterministic, and a well-equipped attacker can predict the outcome. QSHaaS replaces it with certified physical quantum entropy, with an auditable proof for every draw.",
    entropy: "SHA3-256 · QRNG seed · CRYSTALS-Dilithium ready",
    entropyLive: "Entropy stream",
  },
  services: {
    eyebrow: "Professional services · B2B & local",
    title: "What we can do for you.",
    body: "Beyond products, we deliver hands-on technical work by people who run live protocols. From smart contract audits to cold-wallet workshops.",
    cta: "Request a quote",
    mailSubject: "Quote request",
  },
  store: {
    eyebrow: "Physical store · Curitiba & Greater Curitiba · PR",
    title: "Where blockchain meets numismatics.",
    body: "A desk for digital asset management, security hardware and P2P exchange, next to a curated collection of graded collectibles. The only place in the region where crypto, certified coins, CGC comics and trading cards share the same display case.",
    cryptoTitle: "Crypto services",
    collectTitle: "Graded collectibles",
    noteCaption: "The CRIPTOGRAFIA banknote, our business card.",
    genesisEyebrow: "The Genesis Card · limited edition 1/1000",
    genesisTitle: "A cold wallet that fits in your wallet.",
    genesisBody: "A high-durability PVC wallet card, sealed in a foil booster pack. Works on any EVM network (Ethereum, Base, Arbitrum, Polygon). Scan the front QR to check the balance, then rip the tamper-evident foil to sweep the private key.",
    genesisSteps: ["Rip", "Scan", "Sweep"],
    genesisCta: "Discover the Genesis Card",
    visitCta: "Book a visit",
  },
  learn: {
    coursesEyebrow: "Value ladder · Courses",
    coursesTitle: "Learn from auditors.",
    coursesBody: "Four levels, from your first Bitcoin to zero-knowledge proofs. Cases come from our store and from real audits.",
    coursesCta: "See the courses",
    taxEyebrow: "Tax advisory · Brazil",
    taxTitle: "Your crypto, declared to the Receita Federal. Correctly.",
    taxBody: "Most Brazilians holding digital assets are filing wrong. We organize your history, calculate capital gains and deliver everything ready for GCAP and IRPF.",
    taxCta: "See plans",
    taxStats: [
      { value: "150%", label: "fine for willful evasion" },
      { value: "R$5k", label: "threshold to declare each asset" },
      { value: "3–5 days", label: "turnaround" },
    ],
  },
  nftTeaser: {
    eyebrow: "NFT showcase",
    title: "Collections with a story.",
    body: "Satoshi Square, Ramadan 2030, UMBANDA and Timor Lorosa'e. Curated launches and the infrastructure to launch your own collection.",
    cta: "See the collections",
  },
  final: {
    title: "Ready to secure your future?",
    body: "Enterprise quantum security, iGaming compliance or a hardware wallet. We are here.",
    ctaContact: "Talk to us",
    ctaStore: "Visit the store",
  },
  footer: {
    tagline: "Blockchain Crypto Services · Greater Curitiba · PR · Brazil · Est. 2023",
    techTitle: "Technologies we work with",
    rights: "All rights reserved.",
    ptOnly: "(in Portuguese)",
  },
};

export const homeDict = (lang: Locale) => (lang === "en" ? en : pt);

/* ---------- Listas bilíngues ---------- */

export type Status = "launch" | "active" | "alpha" | "building" | "stealth";

export const statusInfo: Record<Status, { label: L; meaning: L; color: string }> = {
  launch: {
    label: { pt: "Lançado", en: "Launch" },
    meaning: { pt: "Disponível, aceitando clientes agora", en: "Available, taking clients now" },
    color: "var(--color-up)",
  },
  active: {
    label: { pt: "Ativo", en: "Active" },
    meaning: { pt: "Em produção, com clientes usando", en: "In production with clients" },
    color: "var(--color-gold-bright)",
  },
  alpha: {
    label: { pt: "Alpha", en: "Alpha" },
    meaning: { pt: "Piloto com parceiros selecionados", en: "Pilot with selected partners" },
    color: "var(--color-amber)",
  },
  building: {
    label: { pt: "Em construção", en: "Building" },
    meaning: { pt: "Em desenvolvimento, lista de espera aberta", en: "In development, waitlist open" },
    color: "var(--color-muted)",
  },
  stealth: {
    label: { pt: "Sob NDA", en: "Stealth" },
    meaning: { pt: "Apresentado só sob acordo de confidencialidade", en: "Shown only under NDA" },
    color: "var(--color-serial)",
  },
};

export type Product = {
  code: string;
  name: string;
  status: Status;
  tagline: L;
  body: L;
  links: { label: string; href: string }[];
};

const wp = "https://criptografia.lovable.app/whitepapers/";

export const products: Product[] = [
  {
    code: "RPC",
    name: "CRIPTOGRAFIA RPC",
    status: "launch",
    tagline: { pt: "Nós blockchain dedicados", en: "Dedicated blockchain nodes" },
    body: {
      pt: "Nós dedicados nativos de Bitcoin para devs brasileiros, com pagamento por PIX, suporte em português e Counterparty/XCP. Um contêiner Docker por cliente, txindex e addrindex ligados, Ordinals e Stamps suportados e menos de 10 ms de latência na América Latina. De R$200 a R$800 por mês.",
      en: "Dedicated Bitcoin-native nodes for Brazilian developers, with PIX payments, Portuguese support and Counterparty/XCP. One Docker container per client, txindex and addrindex enabled, Ordinals and Stamps supported and under 10 ms LATAM latency. R$200 to R$800 per month.",
    },
    links: [{ label: "rpc.criptografia.net", href: "https://rpc.criptografia.net" }],
  },
  {
    code: "QSH",
    name: "QSHaaS",
    status: "active",
    tagline: { pt: "Hash semeado por entropia quântica", en: "Quantum Seeded Hash as a Service" },
    body: {
      pt: "Entropia quântica física gerada em hardware IBM Quantum, pronta para CRYSTALS-Dilithium, com certificado verificável de Prova de Entropia. Substitui PRNGs vulneráveis em iGaming, fintechs, contratos Web3 (no lugar do VRF) e trilhas de auditoria de modelos de IA.",
      en: "Physical quantum entropy from IBM Quantum hardware, CRYSTALS-Dilithium ready, with verifiable Proof of Entropy certificates. Replaces vulnerable PRNGs in iGaming, fintechs, Web3 contracts (as a VRF replacement) and AI model audit trails.",
    },
    links: [
      { label: "api.criptografia.net", href: "https://api.criptografia.net" },
      { label: "Whitepaper", href: `${wp}QSHaaS_Whitepaper_PQC_Seeding_Auditability.pdf` },
    ],
  },
  {
    code: "ENT",
    name: "ENTROPIC",
    status: "active",
    tagline: { pt: "Autenticidade de conteúdo gerado por IA", en: "AI content authenticity infrastructure" },
    body: {
      pt: "Backend on-chain para o Artigo 50 do EU AI Act, C2PA / Content Credentials e Adobe Content Authenticity. Soulbound Tokens selados com entropia quântica em zkEVM ancoram cada conteúdo gerado por IA, e a procedência fica impossível de contestar.",
      en: "The on-chain backend for EU AI Act Article 50, C2PA / Content Credentials and Adobe Content Authenticity. Quantum-sealed Soulbound Tokens on zkEVM anchor every AI-generated content event, making provenance cryptographically irrefutable.",
    },
    links: [
      { label: "Whitepaper V2", href: `${wp}ENTROPIC-CRIPTOGRAFIA_Ecosystem_Whitepaper_V2.pdf` },
      { label: "Ecosystem", href: `${wp}CRIPTOGRAFIA_Ecosystem_Whitepaper_EN.pdf` },
    ],
  },
  {
    code: "VML",
    name: "VeritasML",
    status: "active",
    tagline: { pt: "Segurança do ciclo de vida de ML", en: "ML lifecycle security" },
    body: {
      pt: "Procedência em blockchain, controle de acesso verificável e trilha de auditoria imutável para seus modelos. Gere o hash de um checkpoint, registre on-chain, detecte adulteração e emita o relatório de conformidade. Feito para fintechs sob o olhar do BACEN e para o EU AI Act.",
      en: "Blockchain provenance, verifiable access control and immutable audit trails for your models. Hash a checkpoint, register it on-chain, detect tampering and generate the compliance report. Built for fintechs under BACEN scrutiny and for the EU AI Act.",
    },
    links: [{ label: "veritasml", href: "https://veritasml.lovable.app" }],
  },
  {
    code: "VRD",
    name: "VERIDIUS",
    status: "alpha",
    tagline: { pt: "Inteligência AML on-chain e off-chain", en: "AML intelligence, on-chain + off-chain" },
    body: {
      pt: "Análise de risco AML em tempo real, cruzando sinais on-chain e off-chain por nós RPC dedicados. Trilha de auditoria protegida por PQC desde o primeiro dia e relatórios no formato COAF/BACEN, por uma fração da licença corporativa da Chainalysis.",
      en: "Real-time AML risk analysis fusing on-chain and off-chain signals through dedicated RPC nodes. PQC-hardened audit trail from day one and COAF/BACEN report formats, at a fraction of Chainalysis enterprise pricing.",
    },
    links: [{ label: "veridius", href: "https://veridius.lovable.app/" }],
  },
  {
    code: "CNS",
    name: "Consensus",
    status: "alpha",
    tagline: { pt: "Acordo multipartes descentralizado", en: "Decentralized multi-party agreement" },
    body: {
      pt: "O dHSM guarda as chaves, o QSHaaS fornece a entropia e o Consensus cuida da autorização entre várias partes. Juntos, substituem HSM + CA legados em organizações Web3 com assinaturas threshold, governança de DAO e quórum verificável.",
      en: "dHSM stores the keys, QSHaaS provides the entropy and Consensus handles multi-party authorization. Together they replace legacy HSM + CA for Web3 organizations with threshold signatures, DAO governance and verifiable quorum.",
    },
    links: [{ label: "theconsensus", href: "https://theconsensus.lovable.app/" }],
  },
  {
    code: "ZKM",
    name: "zkML",
    status: "building",
    tagline: { pt: "Inferência de IA verificável", en: "Verifiable AI inference" },
    body: {
      pt: "Prove que uma rede neural rodou corretamente sem precisar confiar no operador. Provas de conhecimento zero aplicadas à inferência com EZKL sobre circuitos Circom/SnarkJS, para crédito DeFi, verificação de RNG em iGaming e conformidade com o EU AI Act.",
      en: "Prove a neural network ran correctly without trusting the operator. Zero-knowledge proofs for ML inference via EZKL on Circom/SnarkJS circuits, for DeFi credit, iGaming RNG verification and EU AI Act compliance.",
    },
    links: [],
  },
  {
    code: "CRW",
    name: "CREW Agents",
    status: "building",
    tagline: { pt: "Agentes de IA nativos em blockchain", en: "Blockchain-native AI agents" },
    body: {
      pt: "O framework CREW, de 13 agentes, ganhando carteira própria: agentes que monitoram eventos on-chain e assinam transações sozinhos, rodando sobre o CRIPTOGRAFIA RPC. Compatível com ElizaOS, Olas e Brian API.",
      en: "The 13-agent CREW framework, now with wallets of its own: agents that watch on-chain events and sign transactions autonomously, running on CRIPTOGRAFIA RPC. Compatible with ElizaOS, Olas and Brian API.",
    },
    links: [],
  },
  {
    code: "HSM",
    name: "dHSM",
    status: "stealth",
    tagline: { pt: "Gestão de chaves pronta para o quantum", en: "Quantum-ready key management" },
    body: {
      pt: "Transforma qualquer carteira num HSM de nível empresarial com Protocolo de Exposição Zero. Vem com QSHaaS e Consensus numa suíte única para bancos em migração pós-quântica. O NIST fechou os padrões PQC em 2024: o prazo já começou.",
      en: "Turns any wallet into an enterprise-grade HSM with a Zero-Exposure Protocol. Bundled with QSHaaS and Consensus as one suite for banks facing post-quantum migration. NIST finalized PQC standards in 2024: the clock is running.",
    },
    links: [{ label: "Whitepaper", href: `${wp}dHSM_Whitepaper_Quantum-Ready_Edition.pdf` }],
  },
];

export const comparison: { feature: L; us: L; them: L }[] = [
  {
    feature: { pt: "Fonte de entropia", en: "Entropy source" },
    us: { pt: "Quântica física (IBM)", en: "Physical quantum (IBM)" },
    them: { pt: "PRNG algorítmico", en: "Algorithmic PRNG" },
  },
  {
    feature: { pt: "Resistência pós-quântica", en: "Post-quantum resistance" },
    us: { pt: "Nativa (Dilithium / Kyber)", en: "Native (Dilithium / Kyber)" },
    them: { pt: "RSA/ECC, vulnerável", en: "RSA/ECC, vulnerable" },
  },
  {
    feature: { pt: "Provas de inferência de IA", en: "AI inference proofs" },
    us: { pt: "zkML via EZKL / Circom", en: "zkML via EZKL / Circom" },
    them: { pt: "Sem verificação", en: "No verifiability" },
  },
  {
    feature: { pt: "Infraestrutura para agentes", en: "Agent infrastructure" },
    us: { pt: "Nós dedicados, pronto para ElizaOS/Olas", en: "Dedicated nodes, ElizaOS/Olas ready" },
    them: { pt: "Compartilhada, com limite de taxa", en: "Shared, rate-limited" },
  },
  {
    feature: { pt: "Feito para a América Latina", en: "LATAM native" },
    us: { pt: "PIX, BRL, suporte em PT, < 10 ms", en: "PIX, BRL, PT support, < 10 ms" },
    them: { pt: "USD + IOF, só em inglês", en: "USD + IOF, English only" },
  },
  {
    feature: { pt: "Âncora on-chain", en: "On-chain anchor" },
    us: { pt: "zkEVM + SBT + C2PA", en: "zkEVM + SBT + C2PA" },
    them: { pt: "Nenhuma", en: "None" },
  },
];

export const sectors: { area: L; title: L; body: L; product: string }[] = [
  {
    area: { pt: "iGaming & apostas", en: "iGaming & betting" },
    title: { pt: "Provably Fair 2.0", en: "Provably Fair 2.0" },
    body: {
      pt: "Cada giro, embaralhamento e lance de dados semeado por entropia quântica certificada. Auditável, verificável e defensável perante o regulador.",
      en: "Every spin, shuffle and roll seeded by certified quantum entropy. Auditable, verifiable and defensible before regulators.",
    },
    product: "QSHaaS",
  },
  {
    area: { pt: "Fintech & bancos", en: "Fintech & banking" },
    title: { pt: "Autenticação quântica", en: "Quantum authentication" },
    body: {
      pt: "Autenticação de transações semeada quanticamente, sem ataques de replay e alinhada às exigências NIST PQC que estão chegando.",
      en: "Quantum-seeded transaction authentication, with no replay attacks and aligned with upcoming NIST PQC mandates.",
    },
    product: "dHSM",
  },
  {
    area: { pt: "Web3 & DeFi", en: "Web3 & DeFi" },
    title: { pt: "Semeadura quântica de chaves", en: "Quantum key seeding" },
    body: {
      pt: "A base dos HSMs descentralizados: chaves privadas geradas a partir de aleatoriedade quântica verificável.",
      en: "The backbone of decentralized HSMs: private keys generated from verifiable quantum randomness.",
    },
    product: "QSHaaS",
  },
  {
    area: { pt: "Saúde", en: "Healthcare" },
    title: { pt: "Longevidade de dados", en: "Data longevity" },
    body: {
      pt: "Proteja dados genômicos e de pacientes contra ataques do tipo \"guarde agora, decifre depois\". Só criptografia pós-quântica garante décadas de privacidade.",
      en: "Protect genomic and patient data against \"store now, decrypt later\" attacks. Only post-quantum encryption guarantees decades of privacy.",
    },
    product: "PQC",
  },
];

export const services: { scope: "B2B" | "Local"; title: L; tags: string; body: L; href?: string }[] = [
  {
    scope: "B2B",
    title: { pt: "Auditoria de smart contracts", en: "Smart contract audit" },
    tags: "EVM · Base · Ethereum",
    body: {
      pt: "Auditoria completa de contratos EVM, com vulnerabilidades classificadas de crítica a baixa e análise estática (Slither, Mythril, Solhint). Experiência na Base mainnet, ERC-404, DeFi e iGaming. Relatório em 5 a 10 dias úteis.",
      en: "Full EVM contract audits, with findings ranked from critical to low and static analysis (Slither, Mythril, Solhint). Experience on Base mainnet, ERC-404, DeFi and iGaming. Report in 5 to 10 business days.",
    },
  },
  {
    scope: "B2B",
    title: { pt: "Consultoria em provas ZK", en: "ZK proof consulting" },
    tags: "Circom · SnarkJS · zkEVM",
    body: {
      pt: "Desenho e implementação de sistemas de prova de conhecimento zero: circuitos Circom, pipeline SnarkJS e deploy em zkEVM. Somos dos poucos no Brasil com ZK em produção.",
      en: "Design and implementation of zero-knowledge proof systems: Circom circuits, SnarkJS pipelines and zkEVM deployment. One of very few teams in Brazil running ZK in production.",
    },
  },
  {
    scope: "B2B",
    title: { pt: "DevOps blockchain", en: "Blockchain DevOps" },
    tags: "Node infra · RPC · Protocol ops",
    body: {
      pt: "Operação de infraestrutura blockchain: monitoramento de nós, gestão de endpoints RPC, Cloudflare Tunnel e DevOps multi-chain, com base em protocolos que operamos ao vivo.",
      en: "Blockchain infrastructure operations: node monitoring, RPC endpoint management, Cloudflare Tunnel and multi-chain DevOps, based on protocols we run live.",
    },
  },
  {
    scope: "B2B",
    title: { pt: "NFTs & Ordinals", en: "NFT & Ordinals minting" },
    tags: "ERC-721 · ERC-1155 · Bitcoin Ordinals",
    body: {
      pt: "Coleção NFT de ponta a ponta: contrato, metadata, IPFS e listagem em marketplace, além de inscrição de Ordinals via Unisat. Para marcas, artistas, eventos e tokenização imobiliária.",
      en: "End-to-end NFT collections: contract, metadata, IPFS and marketplace listing, plus Ordinals inscription via Unisat. For brands, artists, events and real estate tokenization.",
    },
    href: "/nft",
  },
  {
    scope: "Local",
    title: { pt: "Declaração cripto & compliance", en: "Crypto tax & compliance" },
    tags: "Receita Federal · COAF",
    body: {
      pt: "Declaração correta de ativos digitais para a Receita Federal, compliance COAF, organização do histórico e cálculo do ganho de capital, para pessoa física e jurídica.",
      en: "Correct declaration of digital assets to the Receita Federal, COAF compliance, history organization and capital gains calculation, for individuals and companies.",
    },
    href: "/irpf",
  },
  {
    scope: "Local",
    title: { pt: "Workshops & treinamentos", en: "Workshops & training" },
    tags: "Presencial · Grande Curitiba",
    body: {
      pt: "Workshops práticos na loja ou na sua empresa: seu primeiro Bitcoin, como proteger a carteira, NFTs, DeFi para iniciantes e segurança pós-quântica. Grupos de 5 a 20 pessoas, com certificado.",
      en: "Hands-on workshops at our store or your company: your first Bitcoin, securing your wallet, NFTs, DeFi for beginners and post-quantum security. Groups of 5 to 20, with certificate.",
    },
    href: "/cursos",
  },
];

export const storeCrypto: L[] = [
  { pt: "Câmbio P2P (BRL, USD, EUR, ARS)", en: "P2P exchange (BRL, USD, EUR, ARS)" },
  { pt: "Hardware wallets", en: "Hardware wallets" },
  { pt: "Armazenamento frio em paper wallet", en: "Cold storage paper wallets" },
  { pt: "Configuração de hot wallet", en: "Hot wallet setup" },
  { pt: "Genesis Cards em PVC (ERC-20)", en: "PVC Genesis Cards (ERC-20)" },
  { pt: "Consultoria de segurança", en: "Security consulting" },
  { pt: "Recuperação de carteira e seed", en: "Wallet and seed recovery" },
  { pt: "Configuração e migração", en: "Wallet setup & migration" },
];

export const storeCollect: L[] = [
  { pt: "Quadrinhos graduados CGC", en: "CGC graded comics" },
  { pt: "Moedas PCGS / NGC", en: "PCGS / NGC coins" },
  { pt: "Action figures graduados", en: "Graded action figures" },
  { pt: "Cards certificados", en: "Certified trading cards" },
  { pt: "Pokémon TCG", en: "Pokémon TCG" },
  { pt: "Numismática", en: "Numismatics" },
];

export const tech = ["IBM Quantum", "NIST PQC", "zkEVM", "QuickNode", "CRYSTALS-Dilithium", "Bitcoin Ordinals"];
