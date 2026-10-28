export type Course = {
  slug: string;
  level: string;
  audience: string;
  format: string;
  hours: string;
  price: string;
  title: string;
  subtitle: string;
  pitch: string;
  tags: string[];
  modules: { title: string; topics: string[] }[];
  edge: string;
  featured?: boolean;
  cohort?: string;
};

export const courses: Course[] = [
  {
    slug: "bitcoin-do-zero",
    level: "Nível 01",
    audience: "Iniciantes",
    format: "Gravado",
    hours: "4 h",
    price: "R$97",
    title: "Bitcoin do Zero",
    subtitle: "Como funciona por baixo dos panos",
    pitch:
      "Para quem nunca teve uma carteira, nunca entendeu o que é uma chave privada e quer finalmente parar de depender de exchanges custodiais.",
    tags: ["Bitcoin", "Wallets", "Chaves", "UTXO", "Mempool", "Segurança", "Auto-custódia", "Sem código"],
    modules: [
      {
        title: "Por que o Bitcoin existe",
        topics: [
          "O problema do dinheiro digital antes de Satoshi",
          "O que é o whitepaper e o que ele resolve",
          "Blockchain em termos simples: uma corrente de blocos mesmo",
          "Mineração e proof-of-work sem matemática",
        ],
      },
      {
        title: "Chaves, endereços e carteiras desmistificados",
        topics: [
          "Chave privada → chave pública → endereço",
          "Seed phrase: o que é, por que salva sua vida e como guardar",
          "Tipos de carteira: hot, cold, custodial e não custodial",
          "Prática: criando sua primeira carteira segura",
        ],
      },
      {
        title: "Como uma transação Bitcoin funciona",
        topics: [
          "UTXO: o modelo de \"troco\" do Bitcoin",
          "Taxa de mineração e como ela é calculada",
          "Mempool: a sala de espera das transações",
          "Confirmações: quantas você realmente precisa",
        ],
      },
      {
        title: "Segurança na prática",
        topics: [
          "Os 5 erros que fazem pessoas perderem Bitcoin para sempre",
          "Phishing, carteiras falsas e golpes comuns no Brasil",
          "Cold storage: hardware wallets e paper wallets",
          "Backup e herança digital",
        ],
      },
      {
        title: "Bitcoin além do básico",
        topics: [
          "Lightning Network: pagamentos instantâneos",
          "Taproot: privacidade e scripts avançados",
          "Ordinals e inscriptions: o que são e como ver",
          "P2P: comprando e vendendo sem exchange",
        ],
      },
      {
        title: "Projeto final: sua soberania financeira",
        topics: [
          "Configurando sua cold wallet do zero",
          "Primeira transação on-chain real",
          "Verificando a transação no explorer",
          "Próximos passos depois deste curso",
        ],
      },
    ],
    edge: "A loja física em Curitiba fornece casos reais: clientes comprando paper wallets e cartões pré-carregados viram exemplos práticos no curso.",
  },
  {
    slug: "web3-para-devs",
    level: "Nível 02",
    audience: "Devs Web2 → Web3",
    format: "Gravado + projeto",
    hours: "12 h",
    price: "R$497",
    title: "Web3 para Devs",
    subtitle: "Do Solidity ao deploy com segurança",
    pitch:
      "Para desenvolvedores de JavaScript ou Python que querem entrar no ecossistema EVM sem cometer os erros clássicos de segurança.",
    tags: ["Solidity", "EVM", "Hardhat", "Foundry", "ethers.js", "OpenZeppelin", "Testnet", "Gas"],
    modules: [
      {
        title: "O ecossistema EVM: mapa do território",
        topics: [
          "Ethereum, L2s e o zkSync Era na prática",
          "Diferença entre EOA e contrato inteligente",
          "Como a EVM executa código: stack, memory e storage",
          "Ferramentas do dia a dia: MetaMask, Etherscan e faucets",
        ],
      },
      {
        title: "Solidity do zero ao funcional",
        topics: [
          "Tipos, variáveis, funções e modificadores",
          "Mappings, arrays, structs e events",
          "Herança, interfaces e contratos abstratos",
          "Boas práticas de estilo e organização",
        ],
      },
      {
        title: "Ambiente de desenvolvimento profissional",
        topics: [
          "Hardhat: setup, plugins e tasks customizadas",
          "Foundry: testes escritos em Solidity",
          "Testes unitários e de integração",
          "Deploy em testnet com scripts reproduzíveis",
        ],
      },
      {
        title: "Padrões e bibliotecas essenciais",
        topics: [
          "OpenZeppelin: ERC-20, ERC-721 e ERC-1155",
          "Ownable, AccessControl e Pausable",
          "Proxy patterns: contratos atualizáveis",
          "Quando não usar OpenZeppelin",
        ],
      },
      {
        title: "Frontend + ethers.js",
        topics: [
          "Lendo e escrevendo em contratos com ethers.js v6",
          "Conectando a MetaMask a uma dApp React",
          "Eventos, listeners e WebSockets",
          "Simulando transações antes de assinar",
        ],
      },
      {
        title: "Segurança para quem está começando",
        topics: [
          "As 5 vulnerabilidades que todo dev comete no início",
          "Reentrância: o que é e como evitar",
          "Aleatoriedade on-chain: por que block.timestamp é perigoso",
          "Slither: análise estática automatizada",
        ],
      },
      {
        title: "Projeto: token + launchpad mínimo",
        topics: [
          "ERC-20 com vesting e whitelist",
          "Contrato de venda a preço fixo",
          "Frontend React com conexão de carteira",
          "Deploy na testnet e verificação no Etherscan",
        ],
      },
    ],
    edge: "O projeto final usa a arquitetura real do PREMARKET, um launchpad ERC-20 multi-chain. Você sai com código de produção, não de tutorial.",
  },
  {
    slug: "smart-contract-security",
    level: "Nível 03",
    audience: "Devs Web3 intermediários",
    format: "Gravado + Discord",
    hours: "20 h",
    price: "R$1.997",
    title: "Smart Contract Security",
    subtitle: "Auditoria na prática",
    pitch:
      "Para devs que já escrevem contratos e querem encontrar as vulnerabilidades antes dos atacantes. Baseado em auditorias reais, com falhas documentadas.",
    tags: ["Auditoria", "Foundry", "Slither", "Reentrância", "Access control", "Flash loans", "Fuzzing", "Relatórios"],
    featured: true,
    modules: [
      {
        title: "Mindset de auditor",
        topics: [
          "Como um auditor lê código diferente de um dev",
          "Metodologia: escopo, threat modeling e severidade",
          "Toolkit: Slither, Mythril, Foundry e Echidna",
          "Como estruturar um relatório profissional",
        ],
      },
      {
        title: "Reentrância e ataques de call stack",
        topics: [
          "O ataque clássico: o hack da DAO em 2016",
          "Reentrância single-function, cross-function e cross-contract",
          "Read-only reentrancy: o vetor que muitos ignoram",
          "Exploração prática em Foundry e a correção certa",
        ],
      },
      {
        title: "Controle de acesso e privilégios",
        topics: [
          "Falta de controle de acesso: o erro mais comum em produção",
          "tx.origin vs msg.sender: phishing de contratos",
          "Inicialização insegura de proxies",
          "Estudo de caso: vulnerabilidade real de auditoria (W3GLFun)",
        ],
      },
      {
        title: "Aleatoriedade e oráculos",
        topics: [
          "Por que block.timestamp e blockhash são inseguros",
          "Ataques a jogos e loterias on-chain",
          "Chainlink VRF: implementação correta",
          "Manipulação de oráculo e flash loans",
        ],
      },
      {
        title: "Overflow, underflow e aritmética",
        topics: [
          "Antes do Solidity 0.8 e o perigo do unchecked",
          "Divisão por zero e perda de precisão",
          "Falhas de cálculo em contratos DeFi",
          "Fuzzing com Echidna para achar casos-limite",
        ],
      },
      {
        title: "DoS, griefing e manipulação de gas",
        topics: [
          "Loops sem limite: travar um contrato com uma transação",
          "Push vs pull payment",
          "Selfdestruct e envio forçado de ETH",
          "Front-running e MEV para auditores",
        ],
      },
      {
        title: "Análise automatizada profissional",
        topics: [
          "Slither: detectores, configuração e falsos positivos",
          "Testes de invariantes no Foundry",
          "Introdução à verificação formal com Certora",
          "Ferramentas integradas ao CI/CD",
        ],
      },
      {
        title: "Auditoria completa: do zero ao relatório",
        topics: [
          "Auditando um protocolo DeFi real (código fornecido)",
          "Classificando achados: crítico, alto, médio, baixo e info",
          "Escrevendo PoCs de exploração",
          "Formato profissional e como publicar no portfólio",
        ],
      },
    ],
    edge: "O módulo 3 usa vulnerabilidades reais das auditorias QuranNFT/ERC-404 e W3GLFun (reentrância, acesso indevido e aleatoriedade previsível) documentadas com PoC, em português.",
  },
  {
    slug: "zk-proofs-pqc",
    level: "Nível 04",
    audience: "Profissionais sênior",
    format: "Mentoria ao vivo",
    hours: "30 h",
    price: "R$9.777",
    title: "ZK Proofs & Criptografia Avançada",
    subtitle: "Da teoria ao zkEVM",
    pitch:
      "Para engenheiros, pesquisadores e auditores que querem dominar provas de conhecimento zero, criptografia pós-quântica e implementações reais em zkSync Era e Circom.",
    tags: ["ZK proofs", "Circom", "SnarkJS", "zkSync Era", "PLONK", "Groth16", "NIST PQC", "MPC"],
    cohort: "Turmas fechadas de 8 a 12 pessoas",
    modules: [
      {
        title: "Fundamentos matemáticos sem terror",
        topics: [
          "Aritmética modular e corpos finitos",
          "Curvas elípticas: de secp256k1 a BN254",
          "Hashing criptográfico: SHA-2, Poseidon e Keccak",
          "Commitment schemes: Pedersen e KZG",
        ],
      },
      {
        title: "Zero-knowledge proofs: do conceito à intuição",
        topics: [
          "Completude, soundness e zero-knowledge",
          "Provas interativas vs não interativas (NIZKs)",
          "SNARKs vs STARKs: os trade-offs reais",
          "Groth16, PLONK ou Halo2: quando usar cada um",
        ],
      },
      {
        title: "Circom: escrevendo circuitos na prática",
        topics: [
          "Sintaxe e semântica do Circom 2",
          "Templates, signals e constraints",
          "Circuitos de membership proof e range proof",
          "Compilando e gerando witness com SnarkJS",
        ],
      },
      {
        title: "Trusted setup e cerimônias",
        topics: [
          "O que é o \"toxic waste\" e por que importa",
          "Powers of Tau: participando de uma cerimônia real",
          "Setups universais: PLONK e UltraPLONK",
          "Verificadores em Solidity on-chain",
        ],
      },
      {
        title: "zkSync Era e zkEVM na prática",
        topics: [
          "Arquitetura: sequencer, prover e L1",
          "Equivalência vs compatibilidade com a EVM",
          "Paymaster e account abstraction nativa",
          "Estudo de caso: NEXUS-6",
        ],
      },
      {
        title: "Projeto ENTROPIC: timestamps ZK",
        topics: [
          "Arquitetura do ENTROPIC Protocol",
          "Soulbound Token com timestamp ancorado em zkEVM",
          "Membership e inclusion proof com Circom",
          "Integração com IBM Quantum para entropia real",
        ],
      },
      {
        title: "Criptografia pós-quântica (NIST PQC)",
        topics: [
          "Por que computadores quânticos ameaçam RSA e ECDSA",
          "CRYSTALS-Kyber e CRYSTALS-Dilithium",
          "FALCON e SPHINCS+",
          "Estratégias de migração de sistemas existentes",
        ],
      },
      {
        title: "Threshold cryptography e MPC",
        topics: [
          "Secret sharing: Shamir e Feldman VSS",
          "Assinaturas threshold: FROST e GG20",
          "dHSM: HSMs distribuídos",
          "Custódia multi-party e governança de DAOs",
        ],
      },
    ],
    edge: "O módulo 6 constrói o ENTROPIC Protocol ao vivo, e o módulo 8 se conecta à pesquisa NIST IR 8214C em threshold cryptography. Nenhum curso brasileiro oferece esse material.",
  },
];
