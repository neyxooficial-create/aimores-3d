# aimores-3d

Aimorés 3D – maquete interativa da cidade (lado do Hospital: Triângulo, Sossego, Residencial Nilton Freire Sampaio, Centro, córrego e Rio Doce).

Site: abra `index.html` por um servidor (GitHub Pages). Não funciona abrindo o arquivo direto do disco (`file://`), porque os dados são baixados com `fetch`.

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

`python3 tools/creek-trace.py` refaz a análise de drenagem que encontrou o córrego (gera `source/creek_raw.json`); o ajuste manual do trecho do Triângulo fica em `source/creek_fix.json`.

Parâmetros de URL úteis: `?q=low|medium|high|ultra` (qualidade), `?h=19.5` (horário), `?view=corrego`, `?fps` (mostra FPS).
