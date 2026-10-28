export const risks = [
  {
    level: "Risco elevado",
    title: "Omissão na declaração",
    body: "Deixar de declarar criptoativos acima de R$5.000 é infração. A Receita cruza dados com as exchanges nacionais pela IN 1888.",
  },
  {
    level: "Risco elevado",
    title: "Custo de aquisição incorreto",
    body: "Preço médio errado ou taxas esquecidas distorcem o ganho de capital, geram imposto incorreto e risco de autuação.",
  },
  {
    level: "Risco moderado",
    title: "Conversões cripto-para-cripto",
    body: "Trocar BTC por ETH é fato gerador de ganho de capital. A maioria não declara, e a Receita já sabe disso.",
  },
  {
    level: "Risco moderado",
    title: "NFTs e DeFi ignorados",
    body: "Mint, revenda de NFT, yield farming e liquidity pools são tributáveis, e a Receita está se atualizando.",
  },
  {
    level: "Risco elevado",
    title: "Exchange estrangeira sem reporte",
    body: "Binance internacional, Coinbase e similares entram na declaração de bens no exterior e, quando aplicável, na DCBE do Banco Central.",
  },
  {
    level: "Risco moderado",
    title: "P2P sem documentação",
    body: "Transação P2P sem rastreabilidade é sinal de alerta para o COAF. Documentar cada operação é indispensável.",
  },
];

export const plans = [
  {
    numeral: "I",
    name: "Declaração Básica",
    price: "R$297",
    per: "por ano fiscal",
    who: "Pessoa física, exchange nacional e até 50 transações no período.",
    items: [
      "Importação de CSV do Mercado Bitcoin ou Foxbit",
      "Cálculo do ganho de capital por preço médio ponderado",
      "DARF mensal quando houver imposto",
      "Relatório formatado para o IRPF",
      "Suporte por e-mail por 7 dias",
    ],
    plan: "basica",
  },
  {
    numeral: "II",
    name: "Declaração Completa",
    price: "R$697",
    per: "por ano fiscal",
    who: "PF ou PJ, várias exchanges, operações DeFi, NFT, staking e P2P.",
    items: [
      "Binance, Coinbase, Mercado Bitcoin e Foxbit",
      "Mapeamento de DeFi, staking e NFT",
      "Documentação e rastreabilidade do P2P",
      "Análise de obrigatoriedade junto ao COAF",
      "Relatório detalhado + GCAP pronto",
      "DCBE quando aplicável",
      "Suporte por WhatsApp por 30 dias",
    ],
    plan: "completa",
    featured: true,
  },
  {
    numeral: "III",
    name: "Compliance Empresarial",
    price: "Sob consulta",
    per: "",
    who: "Empresas que operam com cripto: OTC desks, exchanges e fintechs.",
    items: [
      "Registro e compliance COAF completo",
      "Políticas de KYC / AML estruturadas",
      "Adequação de CNAE para atividades cripto",
      "Relatórios de operações suspeitas",
      "Due diligence de clientes",
      "Assessoria mensal contínua",
    ],
    plan: "empresarial",
  },
];

export const steps = [
  {
    title: "Você exporta e envia seus dados",
    body: "Damos um template CSV padronizado e o passo a passo de exportação de cada exchange.",
    note: "Template logo abaixo",
  },
  {
    title: "Processamento técnico com revisão humana",
    body: "O sistema importa, normaliza e calcula pelo custo médio ponderado. Um especialista revisa cada operação.",
    note: "Binance · MB · Foxbit · Coinbase",
  },
  {
    title: "Relatório e GCAP entregues prontos",
    body: "Você recebe o relatório de ganho de capital, o DARF quando houver imposto e todos os dados para o IRPF ou GCAP.",
    note: "Prazo de 3 a 5 dias úteis",
  },
  {
    title: "Suporte depois da entrega",
    body: "Seguimos disponíveis para dúvidas, ajustes e eventuais questionamentos até o fim do prazo do IRPF.",
    note: "WhatsApp ou e-mail",
  },
];

export const exchangeGuides = [
  { name: "Binance", path: "Carteira → Histórico de pedidos → Exportar → Período → CSV" },
  { name: "Mercado Bitcoin", path: "Extrato → Exportar para CSV" },
  { name: "Foxbit", path: "Histórico → Transferências → Exportar" },
  { name: "Coinbase", path: "Reports → Generate report → All transactions → CSV" },
];

export const csvTemplate = [
  "data,tipo,ativo,quantidade,valor_brl,preco_unitario_brl,taxa_brl,exchange,wallet_endereco,hash_tx,par_negociado,observacao",
  "2025-01-15,compra,BTC,0.01,2800.00,280000.00,14.00,Binance,,abc123def456,BTC/BRL,Primeira compra",
  "2025-03-20,venda,BTC,0.005,2100.00,420000.00,10.50,Binance,,def456ghi789,BTC/BRL,Venda parcial",
  "2025-04-10,conversao,ETH,1.5,12000.00,8000.00,0,Binance,,ghi789jkl012,ETH/BTC,Conversao BTC para ETH",
  "2025-05-01,staking_reward,ETH,0.02,120.00,6000.00,0,Binance,,,,Recompensa staking mensal",
  "2025-06-15,nft_venda,MATIC,500,350.00,0.70,5.00,OpenSea,0x1a2b3c4d,jkl012mno345,NFT/MATIC,Venda NFT",
  "2025-07-22,p2p_compra,USDT,1000,5200.00,5.20,0,P2P,,,,Compra P2P via Pix",
].join("\n");

export const fiscalYears = [
  "2025 (declaração 2026)",
  "2026 (declaração 2027)",
  "2024 (retificação)",
  "Vários anos",
];
