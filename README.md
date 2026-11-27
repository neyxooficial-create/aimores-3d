# aimores-3d

Aimorés 3D – maquete interativa da cidade (lado do Hospital: Triângulo, Sossego, Residencial Nilton Freire Sampaio, Centro, córrego e Rio Doce).

Site: abra `index.html` por um servidor (GitHub Pages). Não funciona abrindo o arquivo direto do disco (`file://`), porque os dados são baixados com `fetch`.

![antes e depois](docs/antes-depois.jpg)

## O que tem na v5

- **Mais leve**: download de ~5,5 MB (v4) para ~2,8 MB na qualidade Alta e ~2 MB na Leve; cena com ~1,4 milhão de triângulos na Alta (v4: 3–4 milhões) e ~0,7 milhão na Leve.
- **Casas**: cantos retos sem girar a casa (cada uma fica na posição e no ângulo da foto de satélite), nada invadindo rua, trilho ou córrego, sem casas sobrepostas.
- **Ruas**: paralelepípedo de granito, asfalto, terra, calçadas, meio-fio, faixas pintadas e faixas de pedestre no Centro.
- **Trânsito**: hatch, sedã, SUV, picape, moto, ônibus e caminhão, na mão direita, com carros estacionados; faróis à noite.
- **Dia e noite**: sol e lua na posição real para Aimorés, estrelas; relógio no horário de Brasília. Os **postes acendem ao anoitecer** e apagam de manhã, janelas acendem à noite.
- **Córrego** do Triângulo/Centro até o Rio Doce, com leito, margens, mata ciliar, canal de concreto e galerias sob as ruas.
- **Rio Doce e lago da represa** com reflexo do céu e ondulação.
- **Árvores** por espécie (mangueira, oiti, coqueiro, palmeira, ipê, flamboyant, eucalipto, mata).
- **Viadutos** com asfalto novo e postes.

## Novidades da v6

![v6](docs/v6-novidades.jpg)

- **🚶 Passeio a pé e 🚗 Dirigir**: andar pela cidade em primeira pessoa (com colisão em casas e muros) ou dirigir um carro (freio de mão, buzina, faróis, 3 câmeras, motor, quebra-molas sentidos na suspensão).
- **Trem da Vale com horário**: passageiros às 10h29 (sentido BH) e ~16h59 (sentido Vitória), parando na estação; minério e carga ao longo do dia. Cancelas na Rua Antônio Polastri descem, o sinal toca, os carros esperam; buzina e barulho das rodas.
- **Comércios reais** (aba 🏪): 182 estabelecimentos (Overture Maps) com categoria, endereço e telefone; letreiros com os nomes reais nas fachadas; busca de ruas e lugares; nomes das ruas em placas.
- **Casas variadas**: atlas de fachadas, estilos (simples, padrão, moderna com platibanda, antiga, comércio, galpão), varandas, sacadas, garagens, caixas d'água, toldos.
- **Igreja Matriz, estação e Praça João Pinheiro** refeitas pelas fotos.
- **Córrego da Natividade** (OSM/ANA) e canal do Triângulo; relevo corrigido com Copernicus GLO-30.
- **Tempo** (sol, nublado, chuva, neblina); **sons** sintetizados.
- **Quebra-molas** padrão CONTRAN em frente a escolas, igrejas, hospital e clínicas (posição aproximada — ajuste em `source/quebra_molas.json`).

## Novidades da v6.1 (revisão casa por casa, rua por rua)

- **Casas consertadas**: nenhuma casa girada pelo alinhamento automático nem passando no meio da rua (eram 291 invadindo a pista); sobreposições separadas. Conferência automática em `tools/audit-buildings.mjs`.
- **Telhados**: casas em L/T/U com uma água por ala, casas com a esquina cortada pela rua com telhado inclinado próprio, galpões com telhado metálico baixo atrás da platibanda (antes o telhado retangular "sobrava" para fora). Menos caixas d'água à vista em telhado de telha.
- **Ruas**: nenhuma rua da cidade de terra — todas de paralelepípedo (ou asfalto), com meio-fio e calçada; o loteamento também. Faixas pintadas param nos cruzamentos.
- **Rotatória redonda** no começo da Rua Triângulo (antes era um triângulo de ruas).
- **Igreja Matriz** na planta real (estava ~20 m para a rua, com a grade dentro da pista, e com as paredes "do avesso"), adro com gradil branco, portão e jardim redondo; **pracinha triangular** em frente com o **monumento do santo**.
- **Viaduto do Centro**: fechado o buraco no pé da rampa (perto da capela).
- **Trânsito**: os carros não piscam/teleportam mais — fazem curvas suaves nas esquinas e nas dobras das ruas, não ficam presos em becos; bem menos carros. **Pedestres removidos** (pesavam).
- **Ultra mais leve**: a sombra é recalculada só quando a vista ou o sol mudam (carros e trem têm sombra de contato), árvores detalhadas num raio menor.
- **Cemitério São João** refeito: jazigos variados, cruzes, capelinhas, aleias com árvores e muro.

## Novidades da v6.2

- **Córrego do Triângulo** refeito pelo mapa de referência (S1 "Vale da Rotatória"): nasce no morro a sudoeste do Residencial, desce pela grota a leste da rotatória do Residencial, passa pela borda do morro do clube (Vila Tiago), a leste da rotatória do Triângulo, cruza a ferrovia e segue em galeria sob o Centro até o Córrego da Natividade. O canal ao pé do viaduto virou afluente dele (`source/corrego_triangulo.json`). O braço S2 (Vale Oeste) fica fora deste lado do mapa; o S3 (Morro do Sossego) coincide com o Afluente do Natividade, que já existia. Muros que atravessavam o leito foram retirados.
- **Viaduto principal** (o da Praça João Pinheiro, primeiro botão de vistas): muros de contenção com concreto claro de forma (juntas, barbacãs, manchas de chuva) no lugar da textura escura; a estação não invade mais a rampa leste.
- **Carros e motos** com carroceria arredondada, vidros que refletem, rodas com aro, para-choques, retrovisores, faróis e lanternas; moto com piloto (capacete, braços, pernas); ônibus com colunas, porta e faixa; caminhão-baú com nervuras. Carros estacionados usam um modelo mais leve.
- **Menu e Opções** recolhidos por padrão (botões ☰ Menu e ⚙ Opções), marcadores fechados.
- **Iluminação**: luz do céu mais forte (lados na sombra menos escuros); ruas com filtro anisotrópico máximo; menos capim/pedras invisíveis no córrego e raio de árvores detalhadas menor (Ultra mais leve).

## Estrutura

| Pasta / arquivo | O que é |
|---|---|
| `index.html`, `app.js` | o site pronto (gerados pelo build — não editar à mão) |
| `data/` | dados que o navegador baixa: `city.json` (casas, ruas, árvores, córrego…), `geo.bin.gz` (relevo + malhas das ruas + máscara de água), texturas de satélite em WebP (4k para qualidade alta, 2k para leve) |
| `src/` | código-fonte do app (ES modules + three.js) |
| `src/legacy/legacy.js` | construtores feitos à mão na v4 (igreja, praça, clube, estação, viadutos, marcadores…) extraídos do app antigo; vão sendo substituídos aos poucos |
| `source/` | dados brutos (entrada do pipeline) |
| `tools/` | scripts: pipeline de dados, análise do córrego, build |

## Como gerar

```bash
npm install
npm run data     # source/ -> data/  (alinha casas, processa córrego, água, texturas)
npm run build    # src/ -> app.js + index.html
```

`python3 tools/fetch-overture.py places/place base/water transportation/segment` baixa comércios, córregos e nomes de ruas (Overture Maps); `python3 tools/terrain-merge.py` aplica o relevo Copernicus (`source/copernicus_utm24s_30m.tif`).

`python3 tools/creek-trace.py` refaz a análise de drenagem que encontrou o córrego (gera `source/creek_raw.json`); o ajuste manual do trecho do Triângulo fica em `source/creek_fix.json`.

Parâmetros de URL úteis: `?q=low|medium|high|ultra` (qualidade), `?h=19.5` (horário), `?tempo=chuva|neblina|nublado|sol`, `?view=corrego|canal|praca|igreja|viadutocentro` (viadutocentro = viaduto principal; canal = Córrego do Triângulo), `?fps` (mostra FPS).
