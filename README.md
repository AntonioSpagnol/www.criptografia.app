# CRIPTOGRAFIA · redesign do site

Redesign local de https://www.criptografia.app/. A direção visual mistura ASCII e pixel de tecnologia antiga, *old money* (cédula gravada, papel de certificado, guilhochê) e telas de mercado financeiro em movimento.

```bash
npm install
npm run dev -- -p 3100   # http://localhost:3100/pt
npm run build            # gera o site estático em out/
python -m http.server 3100 -d out   # confere o build como o GitHub Pages serve
```

Stack: Next.js 16 (App Router, `output: "export"`) + React 19 + Tailwind 4. Não há servidor: o build vira HTML estático publicado no GitHub Pages pelo workflow `.github/workflows/deploy.yml` a cada push na `main` (em Settings → Pages, a fonte precisa ser **GitHub Actions**). O domínio vem de `public/CNAME`.

## Páginas

| Rota | Conteúdo |
|---|---|
| `/pt`, `/en` | Home: hero com o Turing em ASCII, as 4 portas (balcão, deep tech, cursos, IRPF), balcão P2P com cotações reais, terminal de mercado, deep tech com a Criação de Adão em pixel, setores, serviços, loja e Genesis Card |
| `/pt/cursos` | Escada de valor com o currículo completo dos 4 cursos (só em PT; `/en/cursos` redireciona) |
| `/pt/irpf` | Modalidades, riscos, processo, template CSV e formulário (só em PT) |
| `/pt/nft`, `/en/nft` | Coleções NFT |

A raiz `/` (`public/index.html`) manda para `/pt/` ou `/en/` conforme o idioma do navegador. As URLs antigas (`/irpf.html`, `/cursos.html`, `/nft.html`) continuam existindo em `public/` e redirecionam para as páginas novas.

## Onde mexer

- `src/content/*.ts`: todo o texto, em PT e EN. A home usa dois dicionários (`homeDict`), e as listas usam `{ pt, en }`.
- `src/components/ascii-art.tsx`: o renderizador de arte. Ele recebe uma imagem, reduz para uma grade de células e desenha em `ascii` (caracteres VT323 em 3 tons, um `fillText` por linha) ou em `dither` (Bayer 4x4, pixels com 1 px de vão). Tem uma onda contínua e ondas que nascem do mouse, roda a 30 fps, pausa fora da tela e fica estático com `prefers-reduced-motion`.
- `public/art/turing.png`: o retrato recortado da cédula original, com máscara de silhueta e CLAHE para o rosto se destacar do fundo. `adao.png` vem da Criação de Adão (domínio público, Wikimedia Commons).
- `src/components/market.tsx`: letreiro, quadro de cotações, terminal (candles, livro de ofertas e negócios) e fluxo de entropia.
- `src/components/ornaments.tsx`: rosácea de guilhochê (hipotrocoide; com `d = R − r` a curva passa pelo centro e não deixa furo), faixa de guilhochê, selo e cantos de cédula.

## Dados

- **Cotações:** o navegador busca a CoinGecko em BRL direto (`src/lib/use-quotes.ts`, uma busca a cada 60 s compartilhada entre o letreiro e o quadro). Se a fonte cair, mostra valores indicativos, e o quadro avisa disso.
- **Terminal de mercado:** é uma simulação ancorada no preço real do BTC, e a interface diz isso ("Simulação ilustrativa").
- **Formulário do IRPF:** valida os dados no navegador e abre o WhatsApp do balcão com a solicitação já escrita; o cliente só toca em enviar. Se um dia quiserem receber por e-mail ou CRM, dá para trocar por um serviço de formulário (Formspree, Web3Forms) sem precisar de servidor. O CPF não é pedido no primeiro contato.
