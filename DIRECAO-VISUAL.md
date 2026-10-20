# Direção visual e produção das imagens

## Referências

Pesquisa realizada pelo Awwwards MCP 1.11.0, a partir do repositório https://github.com/INSANE0777/Awwwards-mcp, usando `search_sites` e `create_design_brief`.

- AAT Architecten — https://www.awwwards.com/sites/aat-architecten: composição com respiro e fotografia arquitetônica. Evidência consultada: screenshot do catálogo.
- Montarville — https://www.awwwards.com/sites/montarville-1: hierarquia tipográfica forte e contraste de escala. Evidência consultada: screenshot do catálogo.
- Belgrade Arbor também foi consultada na busca; sua linguagem 3D mais intensa não foi adotada.

O briefing automático não retornou evidência de movimento ou paleta suficiente. Por isso, nenhuma animação foi apresentada como reprodução dessas referências. O movimento do site é uma implementação própria e discreta do pedido do usuário.

Paleta: vermelho #c51d3d, branco #ffffff, grafite #242322 e neutro #f4f3ef. Tipografia: Archivo, com pesos variáveis e fonte local. Fotografias amplas e capítulos com hierarquia clara substituem os ícones e a colagem da versão anterior.

## Ferramentas

Logo vetorizado e exportado com VectorCraft. Imagens produzidas com a ferramenta integrada de geração de imagens, usando as fotos do repositório como alvos nas edições de produtos. Nenhuma API por chave foi utilizada.

## Prompts de produção

Templates selecionados da biblioteca: Product Commerce Visual e Architecture & Space. Os prompts abaixo registram o conjunto de instruções empregado; cada produto foi gerado em chamada separada com sua própria foto de referência.

### Abertura — materiais

Use case: photorealistic-natural. Asset: full-width homepage hero for Gesso Romeiros, a Brazilian construction materials store. Premium commercial architectural/material photograph, landscape 3:2. A meticulous small Brazilian renovation workshop showroom with stacked white drywall sheets and clean silver galvanized steel profiles on the right foreground, a white plaster cornice section and plaster texture, off-white plaster walls and a deep red architectural panel. Quiet dark charcoal-grey negative space on the left for white HTML heading. Warm side sunlight, realistic grain and soft shadows, straight perspective. Materials are the main subject. No people, text, lettering, logos, watermark or collage. Illustrative scene, not an actual store or completed project.

### Aplicação — acabamento

Use case: photorealistic-natural. Template: Architecture & Space. Single landscape 3:2 composition of a contemporary modest Brazilian living space at final finishing, white plaster ceiling with shallow recessed linear LED cove light, white wall, warm grey microcement wall, small deep red side table and neutral wood bench. Emphasize the ceiling edge and wall texture, with straight perspective, warm natural light and realistic shadows. No people, lettering, logos, watermark or before-after collage. Illustrative scene, not a claimed customer project. Composition useful as wide and portrait crops.

### Produtos — base comum

Use case: compositing. Template Product Commerce Visual. Edit target: supplied actual product photograph. Create a realistic premium commercial studio photograph, landscape 3:2, product centered and entirely visible. Preserve the original product count, proportions, package shapes, label typography, recognizable brand details, colors and caps. Remove screenshot borders and grey interface marks. Place on a low warm off-white concrete plinth against a warm white backdrop with a narrow deep red architectural panel. Soft directional daylight and realistic gentle shadows. Product occupies about 70% of image height. No added typography, logos, claims, watermark, price labels or collage. Illustrative studio setting of the actual product.

Variações por produto, aplicadas a essa base:

1. **Tinta Eucatex Peg & Pinte:** lata azul original, com tampa e alça preservadas; apoio de um rolo de pintura e pequena amostra branca.
2. **Manta Líquida Garin:** os dois baldes originais, grande e pequeno, tampas amarelas e rótulos preservados; gotas discretas apenas na base de concreto.
3. **Cimento Queimado Brasilux:** balde original de tampa transparente e rótulo verde/prateado; amostra de textura cimentícia.
4. **Espaçadores Cortag:** embalagem vermelha, preta e branca original, com peças soltas correspondentes; uma placa de porcelanato claro.
5. **Massa Corrida Klasse Qualyvinil:** balde branco original de 6 kg, rótulo azul-marinho, turquesa e vermelho; espátula de acabamento discreta.
6. **Preparador Eucatex Due Pro 300:** balde branco original de 15 L e tampa azul; pequena amostra de reboco.
7. **Spots LED:** os dois spots originais preto e branco, com suportes visíveis preservados; sem objetos adicionais.
8. **Removedor Suprema:** as três garrafas transparentes originais com tampas roxa, azul e verde e seus rótulos; sem objetos adicionais.

As imagens finais foram inspecionadas visualmente e convertidas para WebP. A fonte original do logo tem baixa resolução; a vetorização mantém o desenho identificável, sem recuperar detalhes que não existiam na imagem de origem.
