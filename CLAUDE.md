# Noémia · Restaurante (Lisboa) — memória do projeto

## Estado atual do repositório
- `index.html` e `em-breve.html` são a página "em breve" (splash), atualmente **iguais** — o restaurante já está aberto, mas o site completo ainda não foi construído aqui.
- Botão "Fazer Reserva" na página "em breve" liga para `https://reserve.dish.co/347019` (ver secção "Reservas — plataforma Dish" abaixo). Imagem de fundo fixa (não arrasta/bounce em mobile).
- O site oficial multi-página (Conceito, Fado, Vinhos, Carta, Reservas) **ainda não existe como HTML neste repo**, mas já tem todo o copy escrito em `assets/js/i18n.js` em PT/EN/ES (chaves `nav.*`, `fado.*`, `splitpanel.vinhos.*`, `carta.*`, `vinhos.*`, `reservas.*`). Isto foi provavelmente feito noutro dispositivo e nunca chegou a ser sincronizado com páginas HTML reais — usar este ficheiro como base de conteúdo quando o site oficial for construído.
- Domínio: **noemia.pt**
- Contactos: R. do Duque, 21, 1200-158 Lisboa · (+351) 210 509 605 · noemia.contacto@gmail.com · @noemia_restaurante (Instagram)
- Já existe ficha Google Business Profile / Google Maps verificada.
- Fado ao vivo: sextas, sábados, domingos e segundas, 20h–23h.

## Reservas — plataforma Dish
- Sistema de reservas: **Dish** (reserve.dish.co).
- Link direto (usado agora no botão "Fazer Reserva" da página "em breve"): `https://reserve.dish.co/347019`
- Também foi enviado um **widget embutível** (script + `<div>`) para inserir o formulário de reservas diretamente numa página — não usado na página "em breve" (é um ecrã fixo de um só bloco, sem espaço/scroll para um widget completo), mas é a opção ideal para a futura página `/reservas` do site oficial, onde há espaço dedicado. Código a reaproveitar nessa altura:
  ```html
  <div id="hors-hydra-31c12010-b2c2-4fda-a51e-a3d2e9975b77"></div><script>	var _hors=[['eid','hydra-31c12010-b2c2-4fda-a51e-a3d2e9975b77'],['tagid','hors-hydra-31c12010-b2c2-4fda-a51e-a3d2e9975b77'],['width','100%'],['height',''],['foregroundColor',''],['backgroundColor',''],['linkColor',''],['errorColor',''],['primaryButtonForegroundColor',''],['primaryButtonBackgroundColor',''],['secondaryButtonForegroundColor',''],['secondaryButtonBackgroundColor','']];	(function(d, t) { var e=d.createElement(t),s=d.getElementsByTagName(t)[0];	e.src = "https://reservation.dish.co/widget.js";	s.parentNode.insertBefore(e,s);	}(document, 'script'));</script>
  ```

## Objetivo de SEO
Aparecer em 1º lugar nas pesquisas:
1. **Restaurante Noémia** (branded)
2. **Noémia restaurante** (branded)
3. **Restaurante com fados Lisboa** (categoria/local — muito disputado por casas de fado tradicionais, o Local Pack/Google Maps pesa mais do que o site aqui)
4. **Restaurante com vinhos Lisboa** (categoria/local)
5. **Tapas vinhos e fados Lisboa** (é literalmente o posicionamento da marca — deve ser fácil de dominar se o copy usar sempre esta frase)

## O que já foi aplicado (16 jul 2026) na página "em breve"
Aplicado a `index.html` e `em-breve.html`:
- `<title>` e `<meta description>` reescritos com as palavras-chave alvo.
- **`noindex` removido** (decisão do cliente) → `index, follow`. A página já pode ser indexada pelo nome da marca.
- `<link rel="canonical" href="https://noemia.pt/">`
- Open Graph + Twitter Card (og:title, og:description, og:image, og:url, twitter:card, etc.)
- **JSON-LD `Restaurant`** (schema.org) com nome, morada, telefone, email, sameAs (Instagram). Falta preencher quando disponível: `priceRange`, `openingHoursSpecification` (horário completo do restaurante, não só o do fado), e validar em https://search.google.com/test/rich-results
- Nova linha visível "Restaurante de Vinhos, Tapas e Fados em Lisboa" por baixo do logo (`.embreve-tagline`) — reforça a relevância temática no conteúdo visível, não só nos metadados.
- `robots.txt` e `sitemap.xml` criados na raiz (apontam para `https://noemia.pt/`).

## Plano para o site oficial (quando as páginas multi-página forem construídas)

Mapear cada palavra-chave-alvo à página certa, reaproveitando o copy já existente em `assets/js/i18n.js`:

| Página | URL sugerido | Palavra-chave alvo | Conteúdo já pronto em i18n.js |
|---|---|---|---|
| Homepage | `/` | Restaurante Noémia / Noémia restaurante / Tapas vinhos e fados Lisboa | `meta.title.index`, `meta.description.index`, `conceito.*`, `pillar.*` |
| Fado | `/fado` | Restaurante com fados Lisboa | `fado.eyebrow/heading/lead/note/img.alt` — **falta criar** `meta.title.fado` e `meta.description.fado` (ainda não existem no i18n.js) |
| Vinhos | `/vinhos` | Restaurante com vinhos Lisboa | `splitpanel.vinhos.*`, `vinhos.*`, `meta.title.vinhos` (ajustar para incluir "restaurante" + "Lisboa" explicitamente, hoje é só "Carta de Vinhos · Noémia") |
| Carta/Menu | `/carta` | apoio (long-tail: pratos específicos) | `carta.*`, `meta.title.carta` |
| Reservas | `/reservas` | apoio (intenção transacional) | `reservas.*` |

### Checklist técnico a fazer no lançamento do site oficial
- [ ] Title + meta description únicos por página (criar as chaves em falta no i18n.js, especialmente `meta.title.fado` / `meta.description.fado`).
- [ ] `<link rel="canonical">` por página.
- [ ] Reaproveitar o bloco JSON-LD `Restaurant` da homepage; considerar adicionar dados estruturados de evento/horário para as noites de fado.
- [ ] Atualizar `sitemap.xml` com todas as páginas novas e submeter no Google Search Console assim que `noemia.pt` estiver ativo.
- [ ] **Limitação técnica conhecida**: o site troca de idioma (PT/EN/ES) via JS + `localStorage`, sem URLs distintas por idioma. O Google só vai indexar o conteúdo PT (o que serve os termos-alvo, que são todos em português), mas as versões EN/ES não têm visibilidade orgânica própria. Não é prioritário corrigir agora, mas ficar registado.
- [ ] Continuar a garantir `alt` descritivo com palavras-chave nas imagens (já bem feito em `img.alt.*` / `fado.img.alt` no i18n.js) — ajuda no Google Imagens.
- [ ] Otimizar/comprimir imagens (WebP) e usar `loading="lazy"` fora do primeiro ecrã antes do lançamento.
- [ ] Remover a página "em breve" e apontar o domínio para o site completo; manter os aprendizados de meta/schema já validados aqui.

## Local SEO / Google Business Profile (já existe ficha)
- Garantir que o NAP (Nome, Morada, Telefone) é **exatamente igual** entre o site e a ficha do Google.
- Categoria principal "Restaurante" + secundárias tipo "Bar de vinhos" / "Restaurante português", se disponíveis na ficha.
- Ativar atributo "Música ao vivo", publicar posts no Google sobre as noites de fado (sex–seg, 20h–23h).
- Fotos regulares (pratos, sala, fado ao vivo) e responder a reviews mencionando naturalmente "fado", "vinhos", "tapas", "Lisboa" — isto pesa muito no Local Pack para os termos de categoria (#3 e #4 da lista de objetivos).
- Pedir reviews ativamente aos clientes.
- Garantir NAP consistente noutros diretórios: TripAdvisor, TheFork, Facebook, Time Out Lisboa, Zomato.

## Conteúdo / backlinks a construir a prazo
- Cobertura em blogs/guias de Lisboa sobre fado e vinhos.
- Parcerias com hotéis/concierges na zona (Chiado/Bairro Alto) para recomendações e links.
- Conteúdo tipo "onde ouvir fado em Lisboa" ligado ao site, para captar buscas mais amplas e reforçar relevância temática nos termos de categoria.

## Métricas
- Configurar Google Search Console + GA4 para `noemia.pt` assim que o domínio estiver ativo.
- Acompanhar posição para as 5 queries-alvo listadas em "Objetivo de SEO".
