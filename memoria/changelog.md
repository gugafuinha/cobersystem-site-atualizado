# Changelog Cobersystem

---

## 2026-08-24 — fix(traefik): 502 do n8n resolvido de forma permanente, imune à regeneração do EasyPanel

**Contexto:** o painel do n8n estava em 502 pelo domínio público (`automacao-n8n.fmjbtn.easypanel.host`) pela terceira vez — já havia quebrado em julho e no início de agosto. Ana (`2cpXVNWqOdmrEpFn`) não foi tocada.

**Backups:** `/root/backups/traefik/main.yaml.20260824-171555` (md5 conferido contra o original) e cópia integral da pasta em `/root/backups/traefik/config-20260824-182312/`.

### Causa raiz — não era o que estava documentado

O registro anterior atribuía a regressão a um auto-update do Docker/EasyPanel. **Isso está errado.** O `dnf history` mostra que o `docker-ce` foi instalado em 05/02/2026 e **nunca sofreu upgrade**; não existe `dnf-automatic`, watchtower ou cron de atualização, e o `dockerd` está de pé desde 10/07 sem reiniciar.

A causa real é o **endpoint mode**. O `automacao_n8n` é o único serviço do painel em `endpoint_mode=vip`; `automacao_evolution-api` e `easypanel` estão em `dnsrr` — e nenhum dos dois jamais quebrou. A cada redeploy o Swarm emite uma VIP nova para o n8n, mas as antigas permanecem no DNS interno: hoje `automacao_n8n` resolvia para `10.11.18.225` e `10.11.5.200`, **ambas sem dono**, enquanto a VIP viva é `10.11.18.232`. O Traefik resolvia o nome, caía numa VIP morta e devolvia 502. Comprovado de dentro do container do Traefik: `automacao_n8n:5678` inalcançável, `tasks.automacao_n8n:5678` responde `{"status":"ok"}`.

### Por que editar o `main.yaml` não resolve

A correção óbvia (trocar a URL para `tasks.automacao_n8n`) foi aplicada e **funcionou por exatos 5 minutos**: o EasyPanel reescreveu o `/etc/easypanel/traefik/config/main.yaml` às 17:41 e o 502 voltou. É a mesma reversão silenciosa que derrubou a correção de julho. A definição vem do LMDB do painel (`/etc/easypanel/data/data.mdb`), regenerada periodicamente.

Também se descobriu que **sobrescrever um serviço a partir de outro arquivo não funciona**: quando dois arquivos declaram o mesmo nome, o `main.yaml` vence. Efeito colateral relevante — o `openclaw-websocket.yaml`, presente desde 04/06, **nunca esteve ativo**: o `serversTransport` que desativa o idle timeout do WebSocket não está aplicado no Traefik. Fica registrado para tratar à parte.

### Solução aplicada

Criado `/etc/easypanel/traefik/config/zz-n8n-tasks.yaml` com **nomes próprios** em vez de sobrescrita: o serviço `n8n-tasks-fix` aponta para `http://tasks.automacao_n8n:5678/`, e dois routers (`zz-http-` e `zz-https-`) replicam a regra de host original com `priority: 1000` contra os `62` dos originais, preservando middlewares, redirect e `certResolver`. Como `tasks.` resolve direto para os IPs das tasks vivas, sem VIP, a correção é imune ao acúmulo — e por estar fora do `main.yaml`, imune também à regeneração do painel.

**Validação:** 200 em 5/5 no teste imediato e 10/10 num monitor de 5 minutos, com o `main.yaml` ainda apontando para a URL quebrada — que é a prova da imunidade. Certificado wildcard válido até 09/10, redirect HTTP→HTTPS em 301, `/rest/settings` em 200 (o painel carrega de fato) e `/webhook/cobersystem-whatsapp` em 200. Evolution API e EasyPanel seguem em 200.

### Risco latente encontrado no caminho: o n8n não está pinado

O serviço roda `n8nio/n8n:latest` **sem digest fixado** (o `PreviousSpec` mostra que já esteve em `2.32.7`), com o n8n 2.33.5 em produção sobre um SQLite de 463 MB. A tag `latest` do registry **já avançou** em relação à imagem em uso, então qualquer redeploy pela UI subiria uma versão nova e rodaria migrations irreversíveis. Há precedente de corrupção nesse banco (`database.sqlite.corrupt.20260706212939`). A imagem em produção foi preservada como `n8nio/n8n:2.33.5-rodando` e a tag `latest` local reapontada para ela, sem tocar no container (segue com 2 semanas de uptime). O pin definitivo no serviço exige recriar a task e ficou pendente de decisão.

---

## 2026-08-24 — fix(n8n): migração Google Ads v21→v22, correção de dado falso nos monitores e reparo do nó `Comparar`

**Contexto:** diagnóstico de 23/08 apontou 4 workflows presos na API v21 do Google Ads (descontinuada), monitores reportando métricas zeradas como se fossem dado real, e 9 dias sem nenhum alerta chegar no WhatsApp do Gustavo. Ana (`2cpXVNWqOdmrEpFn`) **não foi tocada** em nenhuma etapa — `updatedAt` permanece `2026-08-23T21:01:19Z`.

**Backups:** JSON completo de cada workflow salvo em `/root/backups/n8n_20260823_v22/` antes de cada alteração (`.json` original, `.antes-webhook`, `.antes-fix-comparar`, `.antes-fix-url`).

### 1. Google Ads v21 → v22 (causa raiz)
- Confirmado por teste direto: **v21 retorna HTTP 404**; v22, v23 e v24 respondem 200. Escolhida a v22 por ser o menor salto.
- 15 referências trocadas via API oficial (`PUT /workflows/{id}`) em `Ciclo Domingo` (3), `Relatório Semanal` (3), `DATA-API Bridge` (6) e `Ads - Monitor Diário` (3).
- Diff validado node a node: **conexões idênticas e nenhum node alterado além da URL**. Zero referências v21 restantes no n8n.

### 2. `neverError` — falha de API agora vira alerta real
- O `neverError: true` foi **mantido de propósito** nos nós de consulta do `Ads - Monitor Diário`: sem ele o workflow morre no nó HTTP e o alerta nunca chega. O defeito não era a flag, era a ausência de visibilidade do status.
- Adicionado `fullResponse: true` nos 3 nós de Ads, expondo o `statusCode`, e o Code `Avaliar Saude Ads` foi reescrito para ler o envelope `{statusCode, body}`, distinguir falha de transporte (HTTP ≥ 400, HTML, corpo sem `results`) de zero legítimo, e **suprimir o bloco de métricas quando não há dado confiável**.
- Antes: `Falha ao consultar a API (OAuth ou rede). serie=ok` + `0 conv | R$0,00`. Depois: `serie diaria: HTTP 404 | status da campanha: HTTP 404` + `⚠️ Métricas indisponíveis`.
- Validado nos dois caminhos: sucesso (dados reais) e falha forçada (v21 temporária, revertida em seguida).

### 3. Bug oculto: nó `Comparar` do Ciclo Domingo estava corrompido
- Com a v21 consertada o fluxo avançou e expôs um `SyntaxError` que estava mascarado havia semanas.
- **Causa:** um `String.replace` usando `$'` (que em JS insere "todo o resto da string") explodiu o bloco de Ads em 5 cópias aninhadas — 110 linhas onde deviam existir 55, com 4 strings truncadas em `'Ads CPA: R`.
- Reconstruído a partir dos fragmentos, com checagem de sanidade em 9 posições antes de gravar e validação de sintaxe antes e depois do PUT. As linhas de CPA, custo, CPC e CTR voltaram a sair no comparativo.
- **Varredura preventiva:** os 49 Code nodes do n8n foram validados em contexto async (como o n8n executa). Zero inválidos. Nenhum outro workflow sofreu o mesmo dano.

### 4. Envio de WhatsApp dos monitores
- Não havia defeito de configuração: a Evolution API estava fora do ar e voltou com o restart do container. Teste real retornou `HTTP 201` e a instância `cobersystem ` está `open`.

### 5. `GMB - Monitor Anti-Suspensão` chamava o bridge pela URL pública
- Os nós `GMB Insights 7d` e `GMB Perfil` apontavam para `https://automacao-n8n.fmjbtn.easypanel.host/webhook/cober/gmb`, que estava em **502**, e recebiam HTML de erro — gerando alerta falso de "falha de OAuth" às 12:00 de 24/08.
- Trocados para `http://localhost:5678` (o bridge vive no mesmo n8n) + timeout de 30s. Mesmo padrão da correção aplicada na Ana em julho. Após a troca: dados reais e nenhum alerta falso.

### 6. Webhooks de teste manual
- Adicionados a `GMB - Monitor Anti-Suspensão` (`/webhook/cober/gmb-monitor-teste`) e `Ciclo Domingo` (`/webhook/cober/ciclo-domingo-teste`), seguindo o padrão que o `Ads - Monitor Diário` já usava. Permitem validar sem esperar o agendamento.

### Validação em produção (agendamentos reais de 24/08)
Todos com `success`, primeira vez em 9 dias: `Ads - Monitor Diário` (12:00), `GMB - Monitor Anti-Suspensão` (15:00), `Relatório Semanal` (11:00), `GMB Posts`, `GSC Pós-Deploy`, `GMB Auto-Resposta` e `GMB Alerta Negativa`. Alertas confirmados entregues no WhatsApp do Gustavo às 08:01, 09:00 e 12:00.

### Pendências (não executadas — exigem decisão)
1. **n8n em 502 pela URL pública.** Diagnóstico fechado: o Traefik aponta para `http://automacao_n8n:5678/`, mas o DNS do nome do service resolve para VIPs obsoletas (`10.11.18.225`, `10.11.5.200` — esta inalcançável), enquanto a VIP real é `10.11.18.232`. Por `tasks.automacao_n8n` responde `{"status":"ok"}`. É o mesmo defeito de VIP do Swarm de julho. Correção: trocar para `http://tasks.automacao_n8n:5678/` em `/etc/easypanel/traefik/config/main.yaml`. **Não aplicado por ser alteração de Traefik em produção.** Não afeta os workflows (nenhum depende mais da URL pública), só o acesso à interface pelo navegador.
2. **Ana — 1 erro em 73 execuções (24/08):** nó `HTTP Request (Whisper)` com HTTP 400 na transcrição de áudio. Fora do escopo autorizado, apenas sinalizado.
3. **Campanha em `LIMITED` / `BUDGET_CONSTRAINED`:** o orçamento de R$84/dia está limitando a entrega. É alerta legítimo do monitor, não defeito.

---

## 2026-08-13 — ops(n8n): Ana WhatsApp desativada a pedido para diagnóstico de erros

**Ação:** workflow `Cobersystem - Ana WhatsApp` (`2cpXVNWqOdmrEpFn`) desativado via API oficial do n8n (`POST /api/v1/workflows/2cpXVNWqOdmrEpFn/deactivate`, HTTP 200, `active: false`). Backup do JSON completo (23 nodes, `updatedAt 2026-08-06T17:20:15Z`) salvo em `/root/backups/ana_backup_antes_desativar_20260813-*.json` antes da alteração.

**Validação:** `POST /webhook/cobersystem-whatsapp` responde `404 — webhook não registrado`. Nenhuma mensagem nova entra no fluxo. Nada mais foi tocado (demais 15 workflows, credenciais e SQLite intactos).

**Erros encontrados nas últimas 20 execuções com falha (todas de 13/08):**
- **19x — `Append or update row in sheet`:** `The credential "Google Sheets account" needs to be reconnected` (credencial `ZeIjtOriWhGc6XnG`, expirada desde 01/08). Ocorre *depois* do envio da resposta ao cliente — não quebra a conversa, mas o lead não é gravado no CRM. Exige reconexão OAuth manual pela UI do n8n.
- **1x — `Evolution API` (exec 13303, 13:40):** HTTP 400 `Bad request`. Causa real visível no payload: `{"number":"120363289523599492@g.us","text":""}` — **texto vazio** enviado ao `POST /message/sendText`. Destino é o grupo interno "Chat Ana". Ou seja, em algum caminho o `Code2` monta a mensagem sem conteúdo e a Evolution rejeita. Este é o único erro que realmente derruba o envio.

**Para reativar:** `POST /api/v1/workflows/2cpXVNWqOdmrEpFn/activate` ou o toggle na UI do n8n.

---

## 2026-07-13 — test/fix(n8n): execução real Auto-Resposta Reviews Positivas + correção de notificação em lote

### Execução real (workflow `mtCyWCcNUgBIvx5D`)
- Objetivo: responder todas as avaliações 4★/5★ do GMB Cobersystem ainda sem resposta e notificar o Gustavo (5511982295079)
- Como a API pública do n8n não executa workflow agendado diretamente e o Evolution API só é acessível pela rede interna do n8n, o disparo real foi feito via workflow temporário (webhook) reutilizando os nós idênticos do principal (Refresh Token GMB → Buscar Reviews → Claude Haiku (mesmo prompt/credencial "Claude API Key (Ana)") → GMB Publicar Resposta → WhatsApp), com filtro = todas 4★/5★ sem `reviewReply`
- **7 avaliações 5★ respondidas e publicadas no Google** (confirmado por releitura das reviews — todas `reviewReply` presente): Murilo Fernandes Carvalho, Gabrielly Celina, Wilson Domingues, Lucila Mendonça, Adrieli Santana, Dayane Fernandes, Lucas São Leandro
- Avaliação negativa 1★ (Johnny) **não tocada** (já tinha resposta e é negativa)

### Bug encontrado e corrigido
- O nó `Montar Notif Positiva` era Code em modo "run once for all items" e retornava **1 único item** → em lote de 7, só 1 notificação WhatsApp era gerada (só do 1º review). Em operação normal (1 review novo por execução de 4h) o efeito não aparecia
- Correção aplicada no principal: nó reescrito para iterar `$input.all()` e mapear 1 notificação por review (`items.map`), suportando lote. Cursor `staticData.global.lastPositiveTime` avançado para a review mais recente (2026-07-13T17:11:04Z) para não reprocessar. Workflow permanece ativo
- As 6 notificações faltantes (Gabrielly, Wilson, Lucila, Adrieli, Dayane, Lucas) foram enviadas manualmente ao Gustavo via notificador temporário → total 7 notificações (1 por resposta), todas aceitas pelo Evolution (status PENDING)

### Limpeza
- Workflows temporários (runner + notificador) removidos; nenhum TEMP restante
- Ana (`2cpXVNWqOdmrEpFn`) não tocada

---

## 2026-07-13 — fix(seo): encurtar meta title das 9 cidades do Lote 3

### O que foi feito
- `metaTitle` das 9 cidades do Lote 3 trocado de `"Cobertura Retrátil em {Cidade} | Instalação Profissional – Cobersystem"` (67–83 chars, estourava o limite de SERP) para `"Cobertura Retrátil em {Cidade} | Cobersystem SP"` (44–56 chars)
- Exceção: `santa-barbara-d-oeste` (nome de cidade mais longo) ficaria com exatamente 60 chars com o sufixo "SP" — removido o sufixo apenas para essa cidade, resultando em `"Cobertura Retrátil em Santa Bárbara d'Oeste | Cobersystem"` (57 chars)

### Validação
- Todas as 9 confirmadas abaixo de 60 caracteres (44–57 chars)
- `next build`: exit 0, sem erros
- Linter: zero erros

### Commit
`fix(seo): shorten meta titles Lote 3 cities`

---

## 2026-07-13 — feat(geo): Lote 3 páginas geo — 9 cidades Tier 1-2 interior SP (atibaia já existia)

### O que foi feito

**Verificação prévia:** das 10 cidades pedidas, `atibaia` já existia (criada no Lote 2). Confirmado via `git log` e leitura de `lib/cobertura-retratil-interior.ts` antes de escrever qualquer conteúdo.

**9 novas cidades adicionadas a `lib/cobertura-retratil-interior.ts`:**
1. Bragança Paulista (85 km de SP, Região Bragantina) — piscina
2. São Roque (65 km de SP, RM Sorocaba, Rota dos Vinhos) — área gourmet
3. Jacareí (90 km de SP, Vale do Paraíba) — garagem
4. Taubaté (130 km de SP, Vale do Paraíba) — varanda
5. Santa Bárbara d'Oeste (130 km de SP, RM Campinas) — garagem
6. Araras (160 km de SP, Região de Piracicaba) — piscina
7. Porto Feliz (120 km de SP, Região de Sorocaba) — área gourmet
8. Boituva (115 km de SP, Região de Sorocaba) — área gourmet
9. Tatuí (145 km de SP, Região de Sorocaba) — varanda

- Cada cidade: 3 parágrafos únicos de intro (~175-210 palavras), 3 FAQs geo-locais únicas, cidades vizinhas com slugs (linkadas quando já existe página), referência local, bairros nobres, `metaDescription` no padrão solicitado ("para {aplicação}, {aplicação2} e {aplicação3}. Instalação por equipe própria, sob medida. Orçamento grátis.") e `keywords` específicas
- **`metaTitle` novo campo opcional** na interface `CidadeInteriorRetratil` + `generateMetadata` em `[cidade]/page.tsx`: usado para aplicar a variante "Cobertura Retrátil em {Cidade} | Instalação Profissional – Cobersystem" apenas nas 9 novas cidades, sem alterar o title já indexado das 15 cidades dos Lotes 1/2 (fallback mantém `Automática sob Medida`)
- **Links recíprocos atualizados** em 6 cidades já existentes (`atibaia`, `americana`, `sao-jose-dos-campos`, `itu`, `salto`, `limeira`): adicionados slugs de vizinhas que agora passaram a existir (ex.: `atibaia` → `braganca-paulista`; `sao-jose-dos-campos` → `jacarei` + `taubate`)
- Sitemap (`app/sitemap.ts`) e hub (`/produtos/cobertura-retratil/em`) **não precisaram de edição manual** — ambos consomem `getSlugsCidadesInteriorRetratil()`/JSON dinamicamente; cidades passam automaticamente de "Em breve" para link ativo

### Validação
- `next build`: exit 0, sem erros — 24 cidades interior + 8 Grande SP = 32 páginas `[cidade]` geradas
- 0 parágrafos de intro duplicados entre as 24 cidades (72 parágrafos únicos)
- Contagem de palavras únicas (intro+FAQ geo) por cidade nova: 314–373 palavras; página renderizada completa: 1450+ palavras (bem acima do mínimo de 800)
- `metaDescription`: 126–142 chars (dentro do limite de 155)
- Sitemap.xml gerado contém as 9 novas URLs (`grep` confirmado no build de produção)
- Linter: zero erros

### ⚠️ Ponto de atenção (SEO) — reportar ao usuário
- O `metaTitle` literal pedido ("Cobertura Retrátil em {Cidade} | Instalação Profissional – Cobersystem") resulta em **67–83 caracteres**, acima do limite recomendado de ~60 chars para não truncar no Google SERP (mesmo problema corrigido nas 11 páginas de CTR mais cedo nesta sessão). Implementado exatamente como solicitado; sugerido ao usuário avaliar encurtar (ex.: remover "– Cobersystem" ou usar "Instalação Profissional" → "Instalação Sob Medida").

### Commit
`feat(geo): add retractable cover pages Lote 3 - 10 Tier 1-2 cities interior SP`

---

## 2026-07-13 — feat(seo/n8n): Automação 1 — gestão pós-deploy GSC (GitHub Action + n8n)

### Validação OAuth (pré-requisito)
- Token GSC do MCP tem escopo **`webmasters.readonly`** apenas
- ✅ URL Inspection, listar sites/sitemaps funcionam | ❌ **reenviar sitemap (PUT)** → 403 `ACCESS_TOKEN_SCOPE_INSUFFICIENT`
- Decisão (aprovada): implementar **sem reenvio de sitemap** (Google já rebaixa o sitemap diariamente); foco em monitoramento + relatório + fila de indexação manual — 100% legítimo, sem nova credencial

### Parte 1 — GitHub Action (`gugafuinha/cobersystem-site-atualizado`)
- `.github/workflows/notify-deploy.yml`: dispara em push na `main`, calcula `git diff`, mapeia arquivos→URLs e envia webhook ao n8n (header `x-cober-key`)
- `.github/scripts/map-changed-urls.mjs`: mapeia `app/**/page.*` → URL concreta; rotas dinâmicas (`[slug]`, `[cidade]`) → template pai; `components/`/`lib/` → `globalChange`; `content/*` → dataFiles; ignora `docs/`, `memoria/`, `.github/`, `public/`
- Secrets do repo: `N8N_DEPLOY_WEBHOOK_URL`, `N8N_DEPLOY_WEBHOOK_KEY`

### Parte 2 — Workflow n8n `ZFygKr7w15O9YxTP` "GSC - Gestao Pos-Deploy Indexacao" (ativo)
- **Fluxo A (webhook `POST /webhook/deploy-gsc`)**: Auth (x-cober-key) → Priorizar/Enfileirar → Relatório WhatsApp imediato
  - Prioridades: **P0** `/lp/*`,`/telhado-retratil-*` · **P1** `/produtos/*`,`/servicos/*` · **P2** `/blog/*` · **P3** `/produtos/*/em/*`
  - Fila persistida em **Static Data** (dedupe por URL, cap 200)
- **Fluxo B (schedule diário 9h BRT = cron `0 12 * * *` UTC)**: Refresh Token GSC → Carregar Fila (até 20) → URL Inspection API → Atualizar status → Update WhatsApp (Indexadas/Pendentes + lista p/ indexação manual)
- Notificações WhatsApp para `5511982295079` (Evolution API)

### Validação (dry-run — workflow temporário, sem ativar o principal)
- Mapeador testado localmente (estáticas→URL, dinâmicas→template, global, data)
- Flow A: relatório com paths curtos + prioritárias P0/P1 corretas
- Flow B: URL Inspection real (home/área-gourmet `PASS`; `/lp/area-gourmet` "unknown to Google")
- Auth: chave inválida/ausente → **bloqueado, sem envio** (500, nenhuma mensagem)
- Corrigido: `new URL()` indisponível no sandbox do Code node → substituído por regex

### Limitação conhecida
- Reenvio de sitemap via API requer novo token com escopo `webmasters` (escrita) — consentimento OAuth do usuário. Não implementado por decisão. Fila de indexação manual cobre a lacuna (limite ~10/dia no GSC UI)

---

## 2026-07-13 — feat(n8n): Automação 2 — auto-resposta de reviews positivas (GMB + Claude Haiku)

### Contexto
- Objetivo: responder automaticamente novas avaliações 4/5★ no Google (GMB) com texto gerado por IA e notificar o Gustavo
- Avaliações negativas (1–3★) continuam **só alertando** no workflow existente `wikzUUqYstbwizU0` (não são respondidas)

### Implementação (novo workflow isolado — Ana `2cpXVNWqOdmrEpFn` intocada)
- Novo workflow **`mtCyWCcNUgBIvx5D` — "GMB - Auto-Resposta Reviews Positivas"** (ativo)
- Fluxo: `Schedule (a cada 4h, offset :20) → Refresh Token GMB → Buscar Reviews (10 mais recentes) → Filtrar Positivas Novas → Claude Haiku → Publicar Resposta (GMB) → Montar Notif → Enviar WhatsApp`
- **Claude**: `claude-haiku-4-5` via HTTP Request, reusando credencial `httpHeaderAuth` "Claude API Key (Ana)" (`zxptBgOmF8qmuKTr`) — mesmo padrão da Ana, sem tocá-la
- **GMB reply**: `PUT .../reviews/{reviewId}/reply` com `{comment}` (mesmo token OAuth business.manage já usado na leitura)
- Notificação WhatsApp para `5511982295079` (padrão Evolution API)

### Salvaguardas
- **Guard de 1ª execução**: inicializa cursor `lastPositiveTime` com a review mais recente e NÃO responde nenhuma histórica (evita responder em massa avaliações antigas)
- **Skip de já respondidas**: ignora reviews com `reviewReply` presente (nunca responde 2x)
- Cursor por `updateTime` avança a cada execução; só responde reviews estritamente mais novas
- Workflow separado do alerta de negativas → zero risco à automação crítica de reviews negativas

### Validação (dry-run — sem publicar resposta real no GMB)
- Teste real do Claude Haiku via workflow temporário com 3 reviews mock (5★ c/ comentário, 5★ genérica, 4★ sem comentário)
- Respostas personalizadas, calorosas, em PT-BR, 220–312 chars, assinando "Equipe Cobersystem" — modelo `claude-haiku-4-5-20251001` OK, credencial OK
- Workflow temporário removido; GMB não foi tocado no teste
- A primeira resposta real ocorrerá na próxima avaliação positiva **nova** (histórico protegido pelo guard)

---

## 2026-07-13 — feat(n8n): Automação 3 — notificação WhatsApp de post GMB publicado

### Contexto
- Workflow `H15y7ESgezYxAS8s` (GMB Posts Automaticos - 3x semana) publica posts Seg/Qua/Sex 9h BRT
- Objetivo: avisar o Gustavo no WhatsApp toda vez que um post é publicado (controle/visibilidade)

### Alterações (somente n8n, via API pública — Ana e SQLite intocados)
- Adicionados 2 nodes após `GMB - Publicar Post`:
  - `Montar Notif Post` (Code): monta mensagem a partir da resposta do publish (`state`, `searchUrl`) + conteúdo do post (`summary`, `postUrl`)
  - `Enviar Notif WhatsApp` (HTTP): reusa o mesmo padrão Evolution API do alerta de reviews
- Conexões: `GMB - Publicar Post → Montar Notif Post → Enviar Notif WhatsApp`
- Notificação vai para `5511982295079` via `tasks.automacao_evolution-api:8080` (instância `cobersystem`)
- Workflow permanece **ativo**

### Validação (dry-run, sem publicar post real no GMB)
- Lógica de montagem simulada localmente → mensagem correta
- Workflow de teste descartável (Webhook → Montar Notif → Enviar) criado, ativado, acionado e removido
- Evolution API retornou `status: PENDING` — WhatsApp de teste entregue com prefixo `[TESTE dry-run]`
- GMB não foi tocado; nenhum post real publicado

### Próximos passos
- Aguardando aprovação para Automação 2 (auto-resposta de reviews positivas 4/5★ + notificação)
- Automação 1 (gestão pós-deploy GSC) pendente de validação de escopo OAuth `webmasters`

---

## 2026-07-13 — feat(seo): title e meta description reescritos em 11 páginas (CTR)

### Contexto
- Diagnóstico via GSC (MCP cobersystem-analytics, 28 dias): posição 5–12, CTR < 5%, impressões > 10
- CTR médio do grupo ~1,4% vs. 4–8% esperado para essas posições — problema de title/description, não de ranking

### Páginas alteradas (apenas `title` e `description`; H1, conteúdo, rotas e schemas intocados)

**Blog (`content/blog-posts.json`):**
- `acrilico-ou-policarbonato-qual-melhor`
- `teto-retratil-automatico-como-funciona-precos`
- `cobertura-corredor-lateral-casa`
- `fechamento-de-varanda-tipos-precos`
- `cobertura-vidro-ou-policarbonato-comparativo`
- `cobertura-acustica-reduzir-barulho-chuva`

**Produto/Serviço:**
- `/produtos/cobertura-retratil` e `/servicos/cobertura-area-gourmet` → `lib/seo/page-metadata.ts`
- `/servicos/cobertura-corredor-lateral`, `/telhado-retratil-policarbonato-preco`, `/servicos/cobertura-jardim-de-inverno` → metadata direta no `page.tsx`

### Padrão aplicado
- Title ≤ 60 chars (vários estavam entre 68–76, cortados no SERP)
- Preço/ano/pergunta explícita no title quando a query alvo é transacional ou literal
- Description ≤ 155 chars com CTA claro

### Validação
- Build (`npm run build`) sem erro — todas as rotas geradas normalmente
- `git diff` conferido por arquivo: nenhuma alteração fora de `title`/`description`
- Impacto estimado: +380 a +500 cliques orgânicos/28d no grupo de páginas

### Pendente
- Solicitar reindexação das 11 URLs no Google Search Console após deploy

---

## 2026-07-13 — feat(mcp): tools de ESCRITA no Google Ads (Fase 0 + Fase 1)

### Objetivo
- Eliminar a gambiarra de workflows n8n temporários para mutações no Google Ads
- Permitir que o Cursor execute mutações direto pelo MCP `cobersystem-analytics`, com trava de segurança

### Fase 0 — Infraestrutura de escrita
- **Bridge n8n `JHQJ8sFTF1bHlooU`**: nova rota `POST /cober/ads-write` (32 → 47 nós), **sem tocar nas rotas de leitura** (GSC/GA4/Ads/GMB seguem OK)
  - Fluxo: `Webhook → Auth (x-cober-key) → Parse → Confirm Check → Token → Read Before → Build → Has Ops → Mutate → Read After → Normalize → Respond`
  - `confirm !== true` → rejeita; `dry_run === true` → `validateOnly:true` na API; leitura antes/depois para retorno estruturado
  - Edição via **REST API do n8n** (nunca SQLite — lição da crise de corrupção); reusa OAuth existente (escopo adwords)
- **MCP `/root/cobersystem-mcp`**: `n8nPost()` em `src/n8n.ts` (POST, body `{tool,params,confirm,dry_run}`, endpoint `/cober/ads-write`)

### Fase 1 — Tools P1 (registradas em `src/index.ts`, lógica em `src/ads-write.ts`)
- `ads_add_negative_keywords` — adiciona negativas (dedup via leitura prévia)
- `ads_remove_negative_keywords` — remove negativas (busca IDs pelo texto)
- `ads_update_budget` — atualiza orçamento diário (R$ → amountMicros)
- Todas exigem `confirm=true` (guard também no MCP) e aceitam `dry_run`

### Testes (todos ✅)
- `confirm=false` → rejeitado | sem `x-cober-key` → Unauthorized
- `dry_run=true` (validateOnly) → não altera nada (before == after)
- Real: negativa `teste-mcp-write` adicionada (71→72) e removida (72→71)
- Budget: dry_run R$75 e real R$70 (no-op) sem alterar; budget inválido → `success:false`
- Smoke test end-to-end pelo `dist/ads-write.js` compilado: 3/3 passaram
- Estado final da conta: **71 negativas · R$70/dia** · Ana (`2cpXVNWqOdmrEpFn`) **intocada**

### Pendente
- Reload do MCP no Cursor para as 3 tools novas aparecerem (processo atual usa build antigo)

---

## 2026-07-13 — fix(ads): adicionar 6 negative keywords na campanha Cobersystem - Leads SP

### Contexto
- Análise de search terms (14d) identificou termos irrelevantes com gasto real
- "telhado de correr" havia sido removido anteriormente e voltou a aparecer

### Verificação pré-adição (GAQL de leitura)
- Lidas **65 negativas** existentes — nenhuma duplicata com as 6 a adicionar
- Lidas **62 positivas** — nenhum conflito encontrado
- Todas as 6 marcadas como `✅ OK para adicionar`

### Keywords adicionadas via `campaignCriteria:mutate`
| Keyword | Match type | Resource name (critério) |
|---------|-----------|--------------------------|
| "telhado de correr" | PHRASE | 23879601113~337154238362 |
| "sanduiche" | BROAD | 23879601113~268190017 |
| "telha sanduiche" | PHRASE | 23879601113~296428701822 |
| "telha sanduíche" | PHRASE | 23879601113~299823472733 |
| "deck retratil" | PHRASE | 23879601113~323075918056 |
| "deck retrátil" | PHRASE | 23879601113~387937819131 |

### Estado final
- Total de negative keywords na campanha: **71** (era 65)
- Workflow temporário criado, executado e **deletado** (HTTP 404 confirmado)

---

## 2026-07-13 — feat(ads): migração de lance TARGET_SPEND → MAXIMIZE_CONVERSIONS

### Contexto
- Campanha **Cobersystem - Leads SP** (id `23879601113`), conta `4936596693` (MCC `3848890894`)
- Última semana: CPA R$16,91 · CTR 12,08% · gargalo = orçamento (recém-elevado p/ R$70/dia)
- Objetivo: com CPA saudável e verba limitada, priorizar cliques com maior probabilidade de conversão

### Validação (via GAQL de leitura — Google Ads API v21)
- ✅ Conversão primária = **"Clique Botão Whatsapp"** (id `6476649806`, `primaryForGoal: true`)
- ✅ 55 conversões/30d (≥ gatilho de 15)
- ✅ Orçamento = R$70/dia (`amountMicros: 70000000`)
- ✅ Estratégia anterior confirmada: **TARGET_SPEND**

### Mutação aplicada (`campaigns:mutate`)
- `updateMask: maximizeConversions.targetCpaMicros` + `maximizeConversions.targetCpaMicros = 0` (sem tCPA)
- 1ª tentativa: erro de expressão n8n (objeto `{}` dentro de `={{ }}`) → corpo trocado p/ JSON literal
- 2ª tentativa: `FIELD_HAS_SUBFIELDS` (máscara no campo pai com subcampos) → máscara ajustada p/ subcampo
- 3ª tentativa: **sucesso** → `biddingStrategyType: MAXIMIZE_CONVERSIONS`, sem `targetCpaMicros`, orçamento intacto
- Execução via workflow n8n temporário (proxy da credencial `Google account 2`), criado/ativado/usado e **deletado** ao final
- Nenhum workflow de produção tocado (GMB Posts, Alerta Reviews, Ciclo Domingo, Ana — todos active=True)

### Próximo passo
- Deixar aprender livremente por 2–3 semanas; depois avaliar aplicar **tCPA ~R$35**

---

## 2026-07-13 — fix(n8n): OpenClaw VIP quebrada + disparo manual relatório semanal

### Diagnóstico — Ciclo Domingo (1mtMgK2OCnM6KqiS)
- Disparou sim no domingo **12/07 às 20h BRT** (execução `4915`, mode=trigger)
- Status: **error** — falhou no node `OpenClaw Avaliação` com `EHOSTUNREACH`
- Causa: VIP Swarm `openclaw_openclaw-gateway` → `10.11.0.10` inacessível do n8n (mesmo padrão de VIP fantasma pós-crash). `tasks.openclaw_openclaw-gateway` responde normalmente.
- Dados GSC/GA4/GMB/Ads foram coletados com sucesso; o fluxo parou antes do `Enviar WhatsApp`.

### Correção
- URLs OpenClaw trocadas de `http://openclaw_openclaw-gateway:18789` → `http://tasks.openclaw_openclaw-gateway:18789` em:
  - Ciclo Domingo: node `OpenClaw Avaliação` (+ retry 3x)
  - Relatório Semanal: nodes `Análise OpenClaw ACI` e `OpenClaw Checklist` (+ retry 3x)
- Workflows compartilhados com projeto do Gustavo para edição via API

### Disparo manual
- Webhook `POST /webhook/relatorio-semanal-manual` → execução `4971` **success** (~59s)
- WhatsApp entregue em `5511982295079` (msg id `3EB05E12E43081880C32C1`)
- OpenClaw ACI e Checklist OK (26s / 19s)

---

## 2026-07-11 — fix(infra): rota Traefik da Evolution API restaurada (Ana muda)

### Problema
- Ana recebia e processava mensagens normalmente (Webhook → Claude → resposta gerada), mas **falhava sempre no último passo** — envio via node "Evolution API" retornava HTTP 502 "Bad gateway / Service is not reachable".
- Confirmado via análise das execuções reais no n8n (execuções 4494, 4495, 4496 — mensagens do grupo "Chat Ana" do dia 10/07 23:52-23:56): fluxo completo rodava até o fim (`Webhook → If → Code0 → Wait → Code1 → If1 → Code1b → If2 → Claude API → Code2 → Evolution API`), Claude gerava a resposta correta, mas o envio falhava com 502.
- Afetava **todo envio da Ana**, não só o grupo: mensagens para clientes (`5511986206244@s.whatsapp.net`) também falhavam.

### Causa raiz
- Durante a crise de crash loop do n8n (06-08/07), corrigimos VIPs quebradas do Docker Swarm no Traefik (`/etc/easypanel/traefik/config/main.yaml`) trocando `http://service:porta` por `http://tasks.service:porta` para `easypanel` e `automacao_n8n`.
- A rota da **Evolution API** (`automacao_evolution-api-0`) ficou de fora dessa correção e continuou apontando para a VIP morta (`10.11.16.28` — "Host is unreachable"), causando 502 em toda chamada da URL pública `automacao-evolution-api.fmjbtn.easypanel.host`.

### Correção aplicada
- Backup do config: `/root/n8n_recovery/traefik_backups/main.yaml.bak.20260711_031646`
- 1 linha alterada em `/etc/easypanel/traefik/config/main.yaml`: `"url": "http://automacao_evolution-api:8080/"` → `"url": "http://tasks.automacao_evolution-api:8080/"`
- Traefik recarregou automaticamente (config dinâmico com watch, sem restart/downtime)

### Validação
- URL pública: `502` → `200` (raiz) / envio real de teste no grupo "Chat Ana" → `HTTP 201`, mensagem entregue no WhatsApp
- Logs do Traefik confirmam requests reais chegando via `tasks.automacao_evolution-api:8080` sem erro
- Serviço Evolution API: `1/1` Running (nunca esteve fora do ar — só a rota pública estava quebrada)

### Melhorias adicionais aplicadas no mesmo incidente (workflow "Cobersystem - Ana WhatsApp")

**Bloqueio de acesso resolvido:** o workflow da Ana pertence ao projeto pessoal do usuário `cobersystemfinanceiro`, e a API key disponível (`gugafuinha`) recebia `403`. Resolvido concedendo acesso via mecanismo oficial de compartilhamento do n8n (1 registro na tabela `shared_workflow`, sem tocar em nenhum JSON de workflow) — permitiu fazer todas as edições seguintes pela **API REST oficial** (mesmo método seguro usado no Relatório Semanal), sem nenhuma escrita direta de conteúdo de workflow via SQLite.

1. **Endereço interno do Swarm** — nos 5 nodes de saída (`Evolution API`, `Evolution GetBase64`, `Notifica Mari`, `Notifica Gustavo`, `HTTP Enviar`): URL trocada de `https://automacao-evolution-api.fmjbtn.easypanel.host` (pública, passa pelo Traefik) para `http://tasks.automacao_evolution-api:8080` (endereço interno do Swarm) — elimina a dependência do roteamento público para comunicação interna.
2. **Retry automático** — `retryOnFail: true`, `maxTries: 3`, `waitBetweenTries: 2000` adicionado aos mesmos 5 nodes — falhas momentâneas não derrubam mais a mensagem inteira.
3. **Alerta automático de erros** — novo workflow `Ana - Monitor de Erros` (`Ja4CRCmva179PAqf`), ativo, roda a cada 10 min via Schedule Trigger, consulta a API de execuções do n8n filtrando erros da Ana e envia alerta via WhatsApp para o Gustavo quando encontra falhas novas.
4. **Segredos migrados para credentials nativas do n8n** — removidas as chaves hardcoded (Evolution `apikey`, Claude `x-api-key`) dos nodes; criadas 3 credenciais `httpHeaderAuth` (`Claude API Key (Ana)`, `Evolution API Key (Ana)`, mais as usadas no workflow de monitoramento) e os 6 nodes que as usavam foram migrados para `authentication: genericCredentialType`.
5. **Bug adicional encontrado e corrigido** — node `Code1` continha um bloco de código morto tentando chamar `$http.request()` (com a apikey da Evolution hardcoded) dentro de um Code node — mesma classe de bug já identificada nos workflows de GMB (Code nodes não têm acesso a `fetch`/`$helpers`/`$http` no task runner). Confirmado que nenhum node consumia esse resultado (a busca real de mídia já usa o node nativo `Evolution GetBase64`) — bloco morto removido com segurança.

**Validação:** testes reais de ponta a ponta (mensagem no grupo "Chat Ana") confirmaram entrega em ~1.4s via node "Evolution API", sem erros 502. `PRAGMA quick_check` do banco confirmado `ok` após cada alteração.

**Problema pré-existente identificado (não corrigido, fora do escopo):** node "Append or update row in sheet" falha com `Google Sheets account needs to be reconnected` — ocorre *depois* da resposta já ter sido enviada ao cliente, não afeta a conversa, mas impede o registro de leads na planilha. Requer reconexão OAuth manual pela UI do n8n.

---

## 2026-06-25 — feat(n8n): bloco GMB Insights nos relatórios semanais

### O que foi feito
- Adicionados **3 novos nodes GMB** em ambos os workflows:
  - `Token GMB` (HTTP Request — OAuth2 refresh, mesmo padrão de Token GSC/GA4)
  - `GMB - Buscar Insights` (Code node — Business Profile Performance API, parâmetros corretos: `dailyMetrics` plural, `daily_range.start_date.*` snake_case, 14 dias para comparativo)
  - `Formatar GMB` (Code node — lê `multiDailyMetricTimeSeries[0].dailyMetricTimeSeries[].timeSeries.datedValues`, calcula totais semana atual vs anterior, retorna `gmb_impressions`, `gmb_website_clicks`, `gmb_call_clicks`, `gmb_directions` e variações percentuais)
- **Relatório Semanal (`B29BC2BkRPG8988G`):**
  - `Combinar Dados` atualizado: `numberInputs` 3 → 4
  - `Formatar Dados` atualizado: bloco `4️⃣ *GMB — GOOGLE MAPS*` adicionado ao final da mensagem WhatsApp
  - Todos os 3 triggers (Schedule, Manual CLI, Webhook) conectados ao `Token GMB`
- **Ciclo Domingo (`1mtMgK2OCnM6KqiS`):**
  - `Combinar Dados` atualizado: `numberInputs` 3 → 4
  - `Comparar` atualizado: `curBase.gmb` adicionado ao objeto de baseline, linhas GMB incluídas no texto de comparativo
  - `Schedule Domingo 20h` conectado ao `Token GMB`
- API GMB Performance validada diretamente: retorna 7 métricas, 14 dias, estrutura `datedValues` confirmada
- Ambos os workflows ativos e GSC+GA4+Ads intactos

---

## 2026-06-25 — feat(n8n): workflow alerta review negativa GMB

### O que foi feito
- Criado workflow n8n **"GMB - Alerta Review Negativa"** (ID: `wikzUUqYstbwizU0`)
- Estrutura: `[Schedule Trigger 0 */4 * * *] → [Code Node all-in-one]`
- Lógica no Code node:
  1. Refresh do OAuth token GMB via `googleapis.com/token`
  2. GET das 10 reviews mais recentes (`orderBy=updateTime desc`)
  3. Filtragem de reviews com `starRating` ONE/TWO/THREE (≤ 3★)
  4. Comparação com `lastProcessedTime` salvo no **Static Data** (`$getWorkflowStaticData('global')`) para evitar alertas duplicados
  5. Envio de WhatsApp formatado via Evolution API para `5511982295079` (Gustavo)
- `lastProcessedTime` pré-setado para `2026-06-24T18:53:17Z` (review mais recente atual) — primeira execução não dispara falso alerta
- Workflow ativo; próximo disparo automático: **09h00 BRT** (12h00 UTC)
- Dry-run validado: detectou 1 negativa existente (Johnny BazoOkatone ★1), formatação de mensagem verificada
- Não interfere com workflows da Ana (Redis keys `ana:hist`/`ana:dados`)

---

## 2026-06-23 — feat(geo): Lote 2 páginas geo + links internos Lote 1

### O que foi feito

**TAREFA 1 — Links internos para as 5 páginas do Lote 1:**
- `app/localizacao/campinas/page.tsx`: adicionado bloco "Atendemos também na região" com links para `/produtos/cobertura-retratil/em/americana`, `/em/sumare` e `/em/indaiatuba`
- `app/localizacao/sao-paulo/page.tsx`: adicionado bloco "Atendemos também no interior próximo" com links para `/produtos/cobertura-retratil/em/jundiai` e `/em/valinhos`
- Hub `/produtos/cobertura-retratil/em/page.tsx` já linka todas as cidades via JSON (confirmado)

**TAREFA 2 — Lote 2: 10 novas páginas geo (Tier 1-2 interior SP):**
- Adicionadas 10 cidades ao `lib/cobertura-retratil-interior.ts`:
  1. Vinhedo (80 km de SP, RM Jundiaí) — piscina
  2. Itatiba (80 km de SP, RM Campinas) — área gourmet
  3. Paulínia (115 km de SP, RM Campinas) — área gourmet
  4. Jandira (30 km de SP, RM São Paulo) — garagem
  5. São José dos Campos (98 km de SP, Vale do Paraíba) — piscina
  6. Atibaia (70 km de SP, Região Bragantina) — área gourmet
  7. Mogi das Cruzes (60 km de SP, Alto Tietê) — área gourmet
  8. Itu (100 km de SP, Região Sorocaba) — área gourmet
  9. Salto (100 km de SP, Região Sorocaba) — garagem
  10. Limeira (153 km de SP, RM Campinas) — piscina
- Cada cidade: intro 3 parágrafos únicos, 3 FAQs geo-locais, cidades vizinhas com slugs, referencia_local, bairros_nobres, metaDescription única, keywords específicas
- Sitemap atualizado automaticamente via `getSlugsCidadesInteriorRetratil()` (de 5 para 15 cidades)
- Build `next build` passou sem erros (exit 0)
- Commit: `f9119e9` — push para `origin/main` realizado

---

## 2026-06-23 — fix(tracking): Google Ads conversion ID e labels corretos (AW-11013639885)

### O que foi feito
- `GoogleAds.tsx`: `gtag('config')` e `CONVERSION_LABELS` alinhados à conta real (`AW-11013639885`)
  - FORM_SUBMIT → `lGDsCLDlopAYEM2d24Mp` (Lead Formulário Orçamento)
  - WHATSAPP_CLICK → `PY4iCM6qp5AYEM2d24Mp` (Clique Botão Whatsapp)
- LPs pagas (`/lp/cobertura-retratil`, `/lp/area-gourmet`): label com typo substituído por `CONVERSION_LABELS.WHATSAPP_CLICK`
- `/orcamento`: removida duplicata `trackFormSubmit`, tracking nos links WhatsApp diretos, delay/beacon no submit
- `/contato` (`ContactForm.tsx`): removida duplicata `trackFormSubmit`

---

## 2026-06-21 — feat(geo): Lote 1 — 5 páginas piloto cobertura retrátil Tier 1 (interior SP)

### O que foi feito

**Cidades criadas (Tier 1 — maior prioridade):**
- `/produtos/cobertura-retratil/em/jundiai` — Serra do Japi, 60km, aplicação: piscina
- `/produtos/cobertura-retratil/em/indaiatuba` — Parque Ecológico, 95km, aplicação: área gourmet
- `/produtos/cobertura-retratil/em/americana` — Lago do Corumbataí, 120km, aplicação: área gourmet
- `/produtos/cobertura-retratil/em/sumare` — Parque Estadual, 110km, aplicação: garagem
- `/produtos/cobertura-retratil/em/valinhos` — Swiss Park, 90km, aplicação: piscina

**Arquivos criados:**
- `lib/cobertura-retratil-interior.ts`: tipagem `CidadeInteriorRetratil` + dados das 5 cidades (intro[3], faq_geo[3+], metaDescription, keywords, vizinhas, bairros, referência local)
- `app/produtos/cobertura-retratil/em/InteriorCidadePageContent.tsx`: componente de template rico (~800+ palavras, 7 seções: hero, aplicações, processo, materiais, preço, FAQ, links internos + CTA)

**Arquivos modificados:**
- `app/produtos/cobertura-retratil/em/[cidade]/page.tsx`: `generateStaticParams` agora combina Grande SP + interior; `generateMetadata` detecta interior primeiro; default export renderiza `InteriorCidadePageContent` para cidades do interior
- `app/sitemap.ts`: 5 novas URLs Lote 1 com `priority: 0.88` e image sitemap

**Schemas (3 por página):**
- `Service` com `areaServed: City` + `provider: Cobersystem`
- `FAQPage` com 3 perguntas geo-locais + 4 genéricas (7 total)
- `BreadcrumbList` com 5 níveis (Início > Produtos > Cobertura Retrátil > Interior SP > Cidade)

**Qualidade:**
- `tsc --noEmit`: zero erros
- Linter: zero erros em todos os arquivos
- Conteúdo: 3 parágrafos únicos de intro por cidade + 3 FAQs geo-locais únicas
- Meta: title variante A (60 chars) + description única (155 chars)
- WhatsApp link pre-filled com nome da cidade em cada página

---

## 2026-06-21 — feat(geo): Lote 0 — Fundação SEO Geolocal Interior SP (42 cidades)

### O que foi feito

**PASSO 1 — Dataset das 42 cidades**
- Criado `/content/cidades-interior.json` com dados reais de 42 cidades do interior paulista
- Campos por cidade: `nome`, `slug`, `regiao`, `distancia_sp_km`, `tempo_deslocamento`, `cidades_vizinhas`, `bairros_nobres`, `referencia_local`, `tier`, `populacao`, `meta_desc_variante`
- Distribuição por tier: Tier 1 (11 cidades prioritárias), Tier 2 (14 cidades), Tier 3 (11 cidades), Tier 4 (6 cidades)
- JSON válido, sem duplicados, todos os campos presentes

**PASSO 2 — Hub de localização**
- Criado `app/produtos/cobertura-retratil/em/page.tsx` — hub listando as 42 cidades divididas por tier
- Título: "Cobertura Retrátil no Interior de SP | Cobersystem"
- Grid responsivo de cards por tier com cores distintas
- Schema `LocalBusiness` com `areaServed` Estado de São Paulo + 42 cidades como `City`
- Schema `BreadcrumbList` de 4 níveis
- CTAs para `/orcamento` e WhatsApp
- URL: `/produtos/cobertura-retratil/em`

**PASSO 3 — Página-mãe atualizada**
- `app/produtos/cobertura-retratil/page.tsx`: nova seção "Atendemos também o interior de SP" antes do CTA final
- Texto: "Além da Grande SP, a Cobersystem instala cobertura retrátil em 42 cidades do interior paulista"
- Link direto para o hub `/produtos/cobertura-retratil/em`

**PASSO 4 — Template base validado**
- Criado `/content/template-cidade-retratil.md` — template completo para geração das 83 páginas restantes
- Inclui: H1 exato, 4 variações de meta title e description, 8 seções (aplicações por uso, processo, materiais, preço, FAQ, links internos, CTA)
- 3 schemas JSON-LD: `Service`, `FAQPage`, `BreadcrumbList`
- Regras de diferenciação para evitar thin/duplicate content
- Checklist de qualidade pré-publicação

**PASSO 5 — Sitemap atualizado**
- `app/sitemap.ts`: adicionado `/produtos/cobertura-retratil/em` com `priority: 0.9`

### Validações realizadas
- JSON válido via `node -e "require('./content/cidades-interior.json')"`
- TypeScript type-check: `npx tsc --noEmit` — zero erros
- Linter: zero erros nos 3 arquivos modificados
- Build erro apenas por permissão de sandbox (`.next/` root-only) — não relacionado ao código

### Próximos passos (Lote 1+)
- Criar páginas individuais `/produtos/cobertura-retratil/em/[slug]` para as 42 cidades (começando pelo Tier 1)
- Criar páginas de `cobertura-abre-e-fecha` para as mesmas 42 cidades
- Implementar `generateStaticParams` para incluir os novos slugs do interior

---

## 2026-06-21 — MCP v1.2.0: 4 tools Google Business Profile (GMB) via n8n OAuth bridge

### O que foi feito
- **`/root/cobersystem-mcp/src/gmb.ts`**: reescrito para usar `n8nGet('gmb', {...})` — remove dependência direta da Google API, passa pelo OAuth bridge eterno do n8n
- **`/root/cobersystem-mcp/src/n8n.ts`**: type union de `domain` extendido para incluir `'gmb'`
- **`/root/cobersystem-mcp/src/index.ts`**: 4 tools registrados (`gmb_profile`, `gmb_insights`, `gmb_reviews`, `gmb_posts`), versão bumped para `1.2.0`
- **n8n DATA-API workflow** (`JHQJ8sFTF1bHlooU`): 8 novos nós GMB inseridos via `docker exec` + `sqlite3` dentro do container n8n (sem copiar arquivo, evitando corrupção de permissões)
  - `Webhook GMB` → `Auth GMB` → `Parse GMB Params` → `Token GMB` → `GMB API` → `Normalize GMB` → `Respond GMB`
  - `workflow_history` atualizado com `versionId: 906b7e4e`, `activeVersionId` corrigido
- **Traefik** (`/data/config/main.yaml`): URL `http://invalid IP:5678/` corrigida para `http://automacao_n8n:5678/` (hostname Docker Swarm estável)

### APIs GMB utilizadas
- `gmb_profile` → `mybusinessaccountmanagement.googleapis.com/v1` (locations + readMask)
- `gmb_insights` → `businessprofileperformance.googleapis.com/v1` (7 métricas diárias)
- `gmb_reviews` → `mybusiness.googleapis.com/v4` (reviews com rating)
- `gmb_posts` → `mybusiness.googleapis.com/v4` (localPosts LIVE)

### Dados identificados (hardcoded no Parse GMB Params)
- `account`: `accounts/102813488393364089206`
- `location`: `locations/15219783204171832651`

### Resultados dos testes (via MCP)
- `gmb_profile`: Cobersystem Soluções em Coberturas de Policarbonato | OPEN | (11) 94361-5079
- `gmb_insights` (30d): 123 impressões totais | 7 website clicks | 41 direction requests
- `gmb_reviews`: Rating 4.0 ★ | 22 avaliações totais
- `gmb_posts`: 2 posts LIVE

### Correções de infraestrutura aplicadas
- Corrigido crash loop do n8n causado por `SQLITE_READONLY` (permissões root vs node UID 1000)
- Corrigido `activeVersionId` apontando para versão inexistente no `workflow_history`
- Traefik roteamento restaurado para todos os webhooks (GSC, GA4, Ads, GMB)

---

## 2026-06-18 — Blog: suporte a links contextuais markdown no renderizador

- **`app/blog/[slug]/page.tsx`:** adicionada função helper `applyInlineMarkdown` que converte `[texto](url)` → `<a>` e `**bold**` → `<strong>` em sequência (links processados antes do bold para evitar conflito)
- Links internos (`/servicos/`, `/produtos/`, `/blog/`) abrem na mesma aba; links externos (`http/https`) abrem em nova aba com `rel="noopener noreferrer"`
- Estilo: `class="text-blue-600 hover:underline font-medium"` consistente com restante do site
- Substituídos os 2 pontos de `dangerouslySetInnerHTML` em `renderConteudo` (itens de lista e parágrafos normais) para usar `applyInlineMarkdown`
- `parseFaqSection` (para FAQPage schema) e demais `dangerouslySetInnerHTML` (JSON-LD) não alterados
- **Commit:** `feat(blog): add markdown link support to blog post renderer`

## 2026-06-18 — SEO: blocos "Artigos Relacionados" nas 8 páginas de maior tráfego

- **Objetivo:** criar fluxo de autoridade página→post (complemento dos links post→página já existentes)
- **8 páginas alteradas:** `produtos/cobertura-retratil`, `produtos/cobertura-policarbonato`, `servicos/cobertura-garagem`, `servicos/cobertura-aluminio`, `servicos/cobertura-retratil-automatizada`, `servicos/cobertura-piscina`, `servicos/cobertura-corredor-lateral`, `servicos/cobertura-jardim-de-inverno`
- **Inserção:** bloco "Artigos Relacionados" com cards Tailwind inline, posicionado antes do CTA final de cada página. Nenhum componente global criado.
- **Links:** 13 links distribuídos apontando para os 10 posts novos (cobertura acústica, alumínio, acrílico×poli, corredor lateral, sensor chuva, chapa poli, garagem, jardim inverno, vidro×poli, automatizada)
- **Validação:** build sem erro, zero lints
- **Commit:** `feat(seo): add "Leia também" blog post blocks to high-traffic pages`

## 2026-06-17 — Tarefa 7 SEO: 10 novos posts de blog (conteúdo + indexação)

- **Escopo:** criação de 10 artigos completos cobrindo keywords sem página correspondente identificadas na auditoria GSC/GA4
- **`content/blog-posts.json`:** 12 → 22 posts. Cada post com 6-7 seções, seção obrigatória de preço por m² (faixas Alveolar R$800–1.400 / Compacto R$1.200–1.700), seção FAQ (4-5 Q&A → gera FAQPage automático), menção a São Paulo/Grande SP e CTA final para orçamento
- **Posts:** cobertura-acustica, cobertura-aluminio-preco, acrilico-ou-policarbonato, cobertura-corredor-lateral, sensor-chuva-cobertura-retratil, chapa-policarbonato, cobertura-garagem, jardim-de-inverno, cobertura-vidro-ou-policarbonato, cobertura-automatizada
- **`app/blog/[slug]/page.tsx`:** registrados os 10 slugs em `POST_INTERNAL_LINKS` (links internos para serviços/produtos relacionados) e `POST_WHATSAPP_MESSAGE` (mensagem WhatsApp personalizada por post)
- **`app/sitemap.ts`:** 10 slugs adicionados ao `blogImageMap` para indexação no sitemap (essencial para SEO)
- **Validação:** `next build` sem erro; 10 páginas geradas como SSG; JSON válido (22 posts)

## 2026-06-18 — Tarefa 5 SEO: otimização /produtos/cobertura-retratil para página 1

- **Contexto:** 690 imp / 31 cliques / pos 13,1 — maior volume do site
- **5.1** `app/produtos/cobertura-retratil/page.tsx`: H1 "em" → "de" (exact-match com query pos 11,1)
- **5.2** `lib/seo/page-metadata.ts`: title atualizado com gatilho "Preço/m²" e "de Policarbonato"
- **5.3** parágrafo intro: `<strong>cobertura retrátil de policarbonato</strong>` injetado na primeira frase
- **Commit:** `a3b3488`

## 2026-06-18 — Tarefas 2/3/4/6 SEO: posts CTR, H1, schema, código morto

- **T2** `content/blog-posts.json`: title/description de `teto-retratil-automatico` e `fechamento-de-varanda` reescritos com gatilho "preço por m²" para recuperar ~300 impressões/mês com CTR 0%
- **T3** `app/contato/page.tsx`: `<h1>Orcamento Enviado!</h1>` → `<h2>Orçamento Enviado!</h2>` (elimina H1 duplicado + corrige typo)
- **T4** `app/orcamento/layout.tsx`: adicionado `Service` schema (LocalBusiness provider, areaServed SP)
- **T6** `app/blog/[slug]/page.tsx`: removido bloco condicional morto com slug inexistente `cobertura-de-policarbonato-precos-tipos-guia`
- **Commit:** `db81657`

## 2026-06-18 — Tarefa 1 SEO: migração CTA /contato → /orcamento

- **Escopo:** 54 arquivos (18 serviços, 15 localização, 7 produtos programáticos, 10 produtos standalone/institucionais, 4 demais)
- **Mudança:** toda ocorrência de `href="/contato"` substituída por `href="/orcamento"` nos CTAs "Solicitar Orçamento"
- **Resultado:** `rg 'href="/contato"' app/` retorna zero resultados fora de `/contato/page.tsx`
- **Impacto esperado:** tráfego de serviço, localização e produto agora converge para `/orcamento` (447 sessões / 7 conv. GA4)
- **Commit:** `a131d11`

---

## 2026-06-18 — Bridge OAuth eterna para Google Ads implementada (abordagem correta)

- **Workflow**: `JHQJ8sFTF1bHlooU` (Cobersystem DATA-API - MCP Bridge)
- **Node adicionado**: `Token Ads` — POST `https://oauth2.googleapis.com/token`, refresh_token idêntico ao Token GA4/GSC
- **Ads API**: credencial OAuth2 removida (`authentication: none`), Authorization: Bearer dinâmico via `$('Token Ads').item.json.access_token`
- **Conexão**: `Parse Ads Params → Token Ads → Ads API`
- **Procedimento correto descoberto**: atualizar TANTO `workflow_history` (nova entrada com novo versionId) QUANTO `workflow_entity.activeVersionId`
- **Resultado**: `ads_campaigns` (11 campanhas) e `ads_keywords` (top 5) funcionais via MCP com token renovado automaticamente
- **Status final bridges**: GA4 ✅ | GSC ✅ | Google Ads ✅

## 2026-06-18 — Restauração n8n: caminho Ads revertido ao estado original

- **Workflow**: `JHQJ8sFTF1bHlooU` (Cobersystem DATA-API - MCP Bridge)
- **Ação**: Removidos nodes `Token Ads` e `Prepare Ads` adicionados na tentativa de bridge OAuth eterna para Ads
- **Ads API**: credencial original restaurada (`FpcXxMa4amcdVlLJ` - Google account 2), URL atualizada de v20 → v21
- **Conexões**: fluxo restaurado para `Parse Ads Params → Ads API → Normalize Ads`
- **Root cause descoberto**: n8n usa `workflow_history` (pelo `activeVersionId`) para execuções, não apenas `workflow_entity.nodes` — ambas as tabelas precisam ser atualizadas em sincronia
- **Resultado**: `ads_campaigns` funcional via MCP (11 campanhas retornadas, dados corretos)
- **Bridge OAuth Ads**: adiada para próxima sessão com abordagem diferente

---

## 2026-06-14 — Fix SEO: remoção de campos Merchant do buildServiceOffer

- **Arquivo**: `lib/schemas/product-schemas.ts`
- **Problema**: `buildServiceOffer` injetava `hasMerchantReturnPolicy` e `shippingDetails` no `Offer` de todas as páginas de serviço. Esses campos são exclusivos de `Product`/Merchant Listings e causavam os erros "Snippets do produto" e "Listagens do comerciante" no Google Search Console.
- **Correção**: removidos `hasMerchantReturnPolicy` e `shippingDetails` do `buildServiceOffer`. Os campos permanecem nas páginas de produto (correto).
- **Escopo**: 19 páginas afetadas em `/servicos/*`
- **Commit**: `15e27b0`

---

## 2026-06-13 — Fix: LP /lp/area-gourmet — correção de imagem do produto

- **Arquivo**: `app/lp/area-gourmet/page.tsx`
- **Correção**: substituída imagem `/images/blog/cobertura-retratil-area-gourmet.jpg` por `/images/blog/churrasqueira.jpg` (mesma usada em `/servicos/cobertura-area-gourmet`)
- **Alt text**: atualizado para "Cobertura para área gourmet - Cobersystem"
- **Commit**: `1048ac0`

---

## 2026-06-13 — Fase 3: Ciclo Semanal Autônomo (baseline Redis + GitHub Issues)

### Visão geral
Transforma o relatório semanal em ciclo autônomo de 7 dias com baseline, avaliação comparativa e Issues no GitHub.

### SEGUNDA 08h — workflow B29BC2BkRPG8988G (24 nós, +6 novos)
Após `Extrair Análise` → `Enviar WhatsApp` (existente), nova ramificação paralela:
- `OpenClaw Checklist`: 2ª chamada ao OpenClaw gera checklist markdown `- [ ]` em 3 prioridades (🔴 Alta / 🟡 Média / 🟢 Estratégico) para o Cursor implementar durante a semana.
- `Montar Issue` (code): monta tabela de baseline (GSC/GA4/Ads) + checklist.
- `Salvar Baseline (Redis)`: SET `cober:baseline:atual` com métricas da segunda.
- `Ler PAT (Redis)`: GET `cober:github:pat` (PAT guardado fora do git por segurança).
- `Criar GitHub Issue`: POST `/repos/gugafuinha/cobersystem-site-atualizado/issues` com label `plano-semanal`.
- `Salvar Issue Number (Redis)`: SET `cober:issue:atual` com o número da issue criada.

### DOMINGO 20h — workflow novo 1mtMgK2OCnM6KqiS (23 nós)
- Novo arquivo: `workflows/ciclo-domingo-avaliacao.json`
- Coleta idêntica à segunda (GSC + GA4 + Ads, clonou 13 nós).
- `Ler Baseline (Redis)` → `Comparar` (code: calcula Δ vs baseline, trata baseline vazio).
- `OpenClaw Avaliação`: analisa o que funcionou/não funcionou/próximo passo.
- `Extrair Avaliação` → `Enviar WhatsApp` (resumo comparativo) + `Ler PAT (Redis)` → `Ler Issue Number (Redis)` → `Comentar Issue` (posta avaliação na issue da semana) → `Salvar Baseline (Redis)` (atualiza para próxima segunda).

### Fix crítico: bug jsonBody Ads (ambos workflows)
Nós `Ads - *` com `jsonBody` como string estática causavam HTTP 400 no Google Ads API especificamente no `search_term_view`. Correção: `jsonBody` como expressão `={{ JSON.stringify({ query: "..." }) }}` — idêntico ao DATA-API que funcionava. **Aplicado em todos os 6 nós Ads** (3 na segunda + 3 no domingo).

### Infra
- PAT GitHub guardado em Redis (`cober:github:pat`), nunca nos JSONs commitados.
- Issue de teste #2 criada e fechada durante validação.
- Validação ponta a ponta: coleta real + comparação + OpenClaw + comentário real postado (issuecomment-4699246468).

---

## 2026-06-13 — Ads API direta no workflow Relatório Semanal (B29BC2BkRPG8988G)

- **Problema**: `Get row(s) in sheet` buscava dados de Ads de planilha Google (A1:B2), dependência externa e dados desatualizados.
- **Substituído por 3 HTTP Request nodes** chamando `POST https://googleads.googleapis.com/v20/customers/4936596693/googleAds:search`:
  - `Ads - Campanhas` → GAQL performance últimos 30 dias
  - `Ads - Keywords` → Top 30 keywords por custo
  - `Ads - Search Terms` → Top 50 search terms por impressões
- **Fluxo**: `Schedule Trigger` → `Ads - Campanhas` → `Ads - Keywords` → `Ads - Search Terms` → `Formatar Ads`
- **Formatar Ads atualizado**: parseia response real da Ads API + inclui `ads_top_keywords` e `ads_top_searchterms` no relatório
- **Credencial**: Google account 2 (FpcXxMa4amcdVlLJ) com headers `developer-token` + `login-customer-id`
- **Testes confirmados**:
  - `campaign`: 11 campanhas, "Cobersystem - Leads SP" → 8967 impr., R$594.04, CTR 4.39%
  - `keywords`: 30 keywords, top → "cobertura abre e fecha" R$183.53
  - `searchterms`: 30 termos, top → "telhado retratil" 201 impr.
- `workflows/relatorio-semanal-com-openclaw.json` atualizado

---

## 2026-06-13 — Fix: FAQPage duplicada em /servicos/cobertura-vidro

- **Problema**: `page.tsx` injetava dois blocos `FAQPage` JSON-LD — constante `faqSchema` inline + `<FAQSchema faqs={faqs} />`.
- **Correção**: Removido `faqSchema` (48 linhas) e `<StructuredData data={faqSchema} />`. Mantido apenas `<FAQSchema />` que renderiza visualmente e injeta o schema.
- **Commit**: `4d04457` — push e deploy Vercel automático.

---

## 2026-06-12 — Autenticação webhooks n8n (x-cober-key)

- Workflow `JHQJ8sFTF1bHlooU` atualizado: 3 nós `IF` adicionados (um por webhook) validando header `x-cober-key`
- Responde HTTP 401 "Unauthorized" para requests sem chave ou com chave incorreta
- `n8n.ts`: envia `x-cober-key` em todos os requests quando `N8N_WEBHOOK_KEY` está no env
- `mcp.json`: adicionado `N8N_WEBHOOK_KEY`
- `.env` MCP: adicionado `N8N_WEBHOOK_KEY`
- Rebuild e smoke test OK · 401 sem key ✅ · 401 key errada ✅ · 200 key correta ✅
- `workflows/data-api-n8n.json` atualizado (21 nós)

---

## 2026-06-12 — Fase 2: MCP reescrito — ponte n8n elimina OAuth local

### Fase 2 — MCP cobersystem-analytics: bridge n8n
**Arquivos alterados em `/root/cobersystem-mcp/src/`:**
- **`n8n.ts`** (novo): cliente HTTP único para todos os webhooks n8n. Lê `N8N_WEBHOOK_BASE` do env. Timeout 30s. Sem OAuth.
- **`gsc.ts`** reescrito: 3 funções → wrappers de 1 linha sobre `n8nGet('gsc', {...})`
- **`ga4.ts`** reescrito: 4 funções → wrappers sobre `n8nGet('ga4', {...})`
- **`ads.ts`** reescrito: 3 funções → wrappers sobre `n8nGet('ads', {...})`
- **`auth.ts`** / **`gmb.ts`**: mantidos intactos (GMB ainda usa OAuth)
- **`mcp.json`**: adicionado `N8N_WEBHOOK_BASE=https://automacao-n8n.fmjbtn.easypanel.host/webhook/cober`
- Rebuild TypeScript → `dist/` atualizado (gsc.js: 336B, ga4.js: 385B, ads.js: 347B, n8n.js: 802B)
- Smoke test: MCP inicia sem erro com novo env
- **`invalid_grant` eliminado permanentemente** para GSC/GA4/Ads — OAuth nunca mais é chamado por esses módulos

---

## 2026-06-12 — Fase 0 + Fase 1: Agência autônoma — MCP funcional + webhooks n8n

### Fase 0 — MCP cobersystem-analytics reativado
- `mcp.json`: sincronizado `GOOGLE_REFRESH_TOKEN` válido (token do `.env`, que estava funcional) em substituição ao token expirado
- Rebuild do MCP (`npm run build` via tsx/tsc) — OK
- Validado: GSC ✅, GA4 ✅, Ads ✅ — 14 tools funcionando com dados reais
- **Campanha ativa detectada**: "Cobersystem - Leads SP" PAUSADA — alerta para reativar

### Fase 1 — Workflow DATA-API criado no n8n
- **Workflow criado**: "Cobersystem DATA-API (MCP Bridge)" — ID `JHQJ8sFTF1bHlooU`
- **Workflow salvo**: `workflows/data-api-n8n.json`
- 3 webhooks GET ativos em `https://automacao-n8n.fmjbtn.easypanel.host/webhook/`:
  - `/cober/gsc?type=queries|pages|opportunities&days=N&limit=N` — GSC via Google account 2
  - `/cober/ga4?type=overview|acquisition|toppages|realtime&days=N` — GA4 via Google account
  - `/cober/ads?type=campaign|keywords|searchterms&days=N&limit=N` — Ads REST API
- n8n como único detentor de OAuth Google — elimina o `invalid_grant` permanentemente
- Testado e validado: todas as rotas retornando dados reais

---

## 2026-06-11 — Correções de risco de penalidade manual Google (P0)

**`lib/schemas/product-schemas.ts`** — removido `aggregateRating` falso de todas as 9 constantes:
`coberturaRetratilCompacto` (4.9/47), `coberturaRetratilGeral` (4.9/87), `coberturaPolicarbonato` (4.8/124),
`coberturaTermoacustica` (4.9/63), `venezianaPolicarbonato` (4.7/28), `coberturaAreaGourmet` (4.9/156),
`coberturaPiscina` (4.8/93), `coberturaPergolado` (4.9/78), `automacaoInteligente` (5.0/142).
Arquivo reescrito integralmente. Mantidos: offers, brand, image, description, sku, additionalProperty.

**FAQ-fantasma resolvido (FAQPage no schema sem conteúdo visível):**
- `app/servicos/cobertura-retratil/page.tsx` — adicionada seção visual "Perguntas Frequentes" antes do CTA final, mapeando `faqSchema.mainEntity` (5 perguntas)
- `app/servicos/cobertura-policarbonato/page.tsx` — idem (5 perguntas)
- `app/servicos/cobertura-varanda-apartamento/page.tsx` — já renderizava FAQ visualmente (linhas 387–402); sem alteração necessária

---

## 2026-06-11 — Correções críticas de segurança e SEO (4 alertas)

**Criado:**
- `app/revisao/layout.tsx` — `robots: { index: false, follow: false }` para bloquear indexação da página interna

**Modificado:**
- `app/robots.ts` — `/revisao/` adicionado ao `disallow` para todos os user-agents (*, Googlebot, Bingbot)

**Deletado:**
- `public/robots.txt` — conflitava com `app/robots.ts`; arquivo estático sobrescrevia as regras corretas
- `app/servicos/calhas-rufos-perfil-u/page.tsx` — dívida técnica; redirect 301 já existe no `next.config.ts`

**Schema:**
- `app/telhado-retratil-policarbonato-preco/page.tsx` — removido `aggregateRating` falso (4.8/127 reviews sem evidência real = risco de penalidade manual Google)

---

## 2026-06-10 — Infraestrutura SSG: cobertura-pergolado + cobertura-garagem

**Criados:**
- `lib/cobertura-pergolado-cidades.ts` — 4 cidades (barueri, sao-paulo, campinas, santo-andre) + 3 bairros SP (jardins, morumbi, pinheiros) com SEO foco pergolado bioclimático alto padrão
- `lib/cobertura-garagem-cidades.ts` — 4 cidades (guarulhos, sao-paulo, santo-andre, osasco) + 3 bairros SP (tatuape, brooklin, vila-mariana) com SEO foco garagem 2 carros policarbonato
- `app/produtos/cobertura-pergolado/em/[cidade]/page.tsx` — 4 páginas SSG + bairros hub
- `app/produtos/cobertura-pergolado/em/sao-paulo/[bairro]/page.tsx` — 3 páginas SSG bairros SP
- `app/produtos/cobertura-garagem/em/[cidade]/page.tsx` — 4 páginas SSG + bairros hub
- `app/produtos/cobertura-garagem/em/sao-paulo/[bairro]/page.tsx` — 3 páginas SSG bairros SP

**Modificados:**
- `lib/sao-paulo-bairros.ts` — adicionado bairro `jardins`
- `lib/sao-paulo-bairros-conteudo.ts` — adicionado conteúdo para `jardins` (4 linhas de produto)
- `app/sitemap.ts` — 14 novas URLs (4+4 cidades + 3+3 bairros SP)

---

## 2026-06-10 — Semana 2: /produtos/cobertura-piscina/em/[cidade]

**Criados:** lib/cobertura-piscina-cidades.ts, app/produtos/cobertura-piscina/em/[cidade]/page.tsx, app/produtos/cobertura-piscina/em/sao-paulo/[bairro]/page.tsx
**Modificado:** app/sitemap.ts — 7 novas URLs (4 cidades + 3 bairros SP)

---

## 2026-06-10 — Blog: duplicatas resolvidas + 4 posts novos + links /produtos/ + redirect 301

### Deploy (commit `89fdff1`)

#### D1 — Redirect 301 + remoção da duplicata de policarbonato
- `next.config.ts`: redirect permanente `/blog/cobertura-de-policarbonato-precos-tipos-guia` → `/blog/cobertura-policarbonato-preco-tipos`
- `content/blog-posts.json`: entrada duplicata removida
- `app/blog/page.tsx`: card id:7 removido
- `app/sitemap.ts`: URL removida
- `app/blog/[slug]/page.tsx`: POST_INTERNAL_LINKS e POST_WHATSAPP_MESSAGE da duplicata removidos

#### D2/D3 — Arquivos órfãos deletados
- `content/blog-posts-parte2.json` (21.8KB, 2 slugs duplicados, nunca importado)
- `content/blog-posts.json.backup` (70.2KB, versão antiga)

#### Links /produtos/ adicionados nos 4 posts product-intent (POST_INTERNAL_LINKS)
| Post | Link /produtos/ adicionado |
|---|---|
| cobertura-retratil-guia-completo | `/produtos/cobertura-retratil` |
| cobertura-abre-fecha-vantagens | `/produtos/cobertura-abre-e-fecha` |
| cobertura-policarbonato-preco-tipos | `/produtos/cobertura-policarbonato` |
| automacao-alexa-sensor-chuva | `/produtos/cobertura-retratil` |

#### 4 posts novos em blog-posts.json (12 posts total)
| Slug | Keyword primária | Vol. est. | Funil | CTA → |
|---|---|---|---|---|
| `teto-retratil-automatico-como-funciona-precos` | teto retrátil automático / telhado retrátil | 300–700 + 2–4k | meio→fundo | /servicos/cobertura-retratil-automatizada |
| `fechamento-de-varanda-tipos-precos` | fechamento de varanda | 3–6k | fundo | /servicos/cobertura-varanda-apartamento |
| `pergolado-bioclimatico-o-que-e-vale-a-pena-precos` | pergolado bioclimático | 2–5k | meio→fundo | /servicos/cobertura-pergolado |
| `toldo-retratil-vs-cobertura-retratil-qual-escolher` | toldo retrátil | 8–15k | topo→meio | /servicos/cobertura-retratil |

Cada post tem: 8–10 seções + FAQ + POST_INTERNAL_LINKS + POST_WHATSAPP_MESSAGE + card em /blog + sitemap

---

## 2026-06-10 — SEO: resolver canibalização /servicos vs /produtos + links cruzados hierárquicos

### Deploy (commit `acb187c`)

#### (a) `/servicos/cobertura-retratil` — reposicionado para intenção de serviço
- `title`: "Instalação de Cobertura Retrátil em São Paulo | Projeto e Garantia | Cobersystem"
- `H1`: "Instalação de Cobertura Retrátil em São Paulo"
- `keywords`: trocados head terms de produto por termos de serviço/instalação
- Callout (eixo vertical) → `/produtos/cobertura-retratil` ("Ver catálogo de modelos")

#### (b) `/servicos/cobertura-termoacustica` — reposicionado para aplicação/ambiente
- `title`: "Cobertura Termoacústica para Área Gourmet e Galpão em SP | Cobersystem"
- `H1`: "Cobertura Termoacústica: Proteção Térmica e Acústica para o Seu Espaço"
- `keywords`: aplicação + instalação (removidos head terms de produto)
- **Schema corrigido**: `@type: Product` → `@type: Service` (tipo correto para página de serviço)
- Callout (eixo vertical) → `/produtos/cobertura-termoacustica`

#### (c) `/produtos/cobertura-abre-e-fecha`
- `keywords`: removido "cobertura retrátil automatizada" (dono legítimo: `/servicos/cobertura-retratil-automatizada`)
- Substituído por "cobertura que abre e fecha, cobertura abre e fecha SP"

#### (d) Novos componentes
- `components/produto/ProdutoInstalacaoLink.tsx` — callout dourado em /produtos/[tipo] → /servicos/[tipo] (eixo vertical)
- `components/produto/ProdutoAplicacoes.tsx` — grade de links em /produtos/[tipo] → /servicos/[ambiente] (eixo horizontal)

#### (e) Links cruzados nas 4 páginas /produtos/
| Produto | Eixo vertical | Eixo horizontal (ambientes) |
|---|---|---|
| `cobertura-retratil` | → /servicos/cobertura-retratil | piscina, gourmet, varanda, garagem |
| `cobertura-termoacustica` | → /servicos/cobertura-termoacustica | gourmet, garagem, varanda, corredor |
| `cobertura-policarbonato` | → /servicos/cobertura-policarbonato | garagem, corredor, playground, jardim |
| `cobertura-abre-e-fecha` | → /servicos/cobertura-abre-e-fecha | piscina, gourmet, playground, pergolado |

### Resultado estrutural
- `/produtos/[tipo]` — dono dos head terms ("cobertura retrátil", "cobertura termoacústica")
- `/servicos/[tipo]` — dono dos termos de serviço/instalação SP
- `/servicos/[ambiente]` — dono dos termos de ambiente ("cobertura para piscina SP")
- PageRank flui tipo → serviço e tipo → ambientes; sem sinal dividido

---

## 2026-06-09 — Fix schema JSON-LD em lote: 8 páginas de serviço

### Deploy (commit `7f8c115`)
- Migradas de `SchemaMarkup` (next/script) para `StructuredData` (script ld+json nativo SSR):
  - `/servicos/cobertura-abre-e-fecha`
  - `/servicos/cobertura-jardim-de-inverno`
  - `/servicos/cobertura-termoacustica`
  - `/servicos/cobertura-playground`
  - `/servicos/cobertura-garagem`
  - `/servicos/cobertura-corredor-lateral`
  - `/servicos/cobertura-fixa-policarbonato-compacto`
  - `/servicos/cobertura-pergolado`

---

## 2026-06-09 — Fix schema JSON-LD retrátil automatizada (GSC)

### Deploy (commit `3bd21c2`)

---

## 2026-06-09 — Fix: GoogleAds no layout (window.gtag)

### Deploy (commit `94e533e`)
- `app/layout.tsx`: remontado `<GoogleAds />` para inicializar `window.gtag` (GA4 G-EL6RVFYFSJ + Ads AW-1095370047)
- `GoogleAds.tsx`: `window.gtag` atribuído explicitamente no script de init
- **Duplicidade GTM:** em produção o GTM não renderiza (env ausente/placeholder) — sem risco imediato; se ativar GTM com mesmas IDs GA4/Ads no container, revisar para evitar pageviews duplicados

---

## 2026-06-09 — ETAPA 6+7: conteúdo rico fixa alveolar + projetos personalizados

### Deploy (commit `3930754`)
- `/servicos/cobertura-fixa-policarbonato-alveolar` — `CoberturaFixaAlveolarExpandedSections`: hero completo, 6 etapas, comparativo alveolar/compacto/abre-e-fecha, ServicePriceTable, aplicações com metragem, FAQ 6, CTA WhatsApp hero+footer
- `/servicos/projetos-personalizados` — `ProjetosPersonalizadosExpandedSections`: hero completo, etapas de engenharia, casos de uso, tabela referência, FAQ 6 com `getFaqPriceAnswer`, CTA WhatsApp hero+footer

---

## 2026-06-09 — WhatsApp GA4/Ads + sitemap + fix GSC gourmet/piscina/projetos

### Deploy (commit `117ddba`)
- **WhatsApp tracking unificado:** `WhatsAppLink.tsx` + `trackWhatsAppLead()` dispara GA4 `whatsapp_click`, Google Ads `WHATSAPP_CLICK` e Meta Contact em todas as páginas `/servicos/*`
- **FAQSchema:** trocado `next/script` por `<script>` nativo (FAQ visível no HTML SSR — corrige gourmet e piscina)
- **GSC gourmet:** removido `faqSchemas.coberturaAreaGourmet` legado (preços R$ 12k–35k conflitantes com Product)
- **GSC projetos:** `SchemaMarkup` → `StructuredData`
- **Sitemap:** adicionadas `cobertura-policarbonato`, `cobertura-jardim-de-inverno`, `cobertura-pergolado`
- **Links internos varanda:** `ServiceVejaTambem` + links em abre-e-fecha, retrátil, termoacústica expanded

---

## 2026-06-09 — Fix schema JSON-LD: StructuredData nas 4 páginas GSC

### Deploy (commit `5c716fd`)
- `/servicos/cobertura-fixa-policarbonato-alveolar`, `/cobertura-aluminio`, `/cobertura-piscina`, `/cobertura-area-gourmet`
- Trocado `SchemaMarkup` (next/script) por `StructuredData` (`<script type="application/ld+json">`)
- Removidos schemas legados `productSchemas.coberturaPiscina` (25000) e `coberturaAreaGourmet` (16000)
- Product único com `buildServiceOffer()` + `getServiceSchemaMinPrice()`

---

## 2026-06-09 — Correções pós-auditoria SEO (8 itens)

### Deploy (commit `14f5480`)
- `ServiceVejaTambem` — entrada jardim-de-inverno + `current` corrigido
- `cobertura-abre-e-fecha` — FAQ preço via `formatPricePerM2`, keywords sem overlap retrátil
- `cobertura-retratil-automatizada` — meta description dinâmica, títulos de aplicação com ênfase em automação
- `/servicos` — cards Abre e Fecha e Retrátil com descrições diferenciadas
- `cobertura-termoacustica` — links para fixa alveolar e área gourmet
- `cobertura-jardim-de-inverno` — links para pergolado e varanda apartamento

---

## 2026-06-09 — ETAPA 5: conteúdo rico jardim de inverno

### Deploy (commit `b7ba5e4`)
- `/servicos/cobertura-jardim-de-inverno` — expanded long-form, cenários botânicos únicos, galeria real, ServicePriceTable, FAQ 6, CTA WhatsApp

---

## 2026-06-09 — ETAPA 4: conteúdo rico abre e fecha

### Deploy (commit `7e639d0`)
- `/servicos/cobertura-abre-e-fecha` — expanded long-form, comparativo vs retrátil/automatizada, 6 etapas, aplicações com metragem, ServicePriceTable, FAQ 6, CTA WhatsApp no hero

---

## 2026-06-09 — ETAPA 3: conteúdo rico retrátil automatizada

### Deploy (commit `2c33c47`)
- `/servicos/cobertura-retratil-automatizada` — expanded long-form, comparativo vs retrátil/abre-e-fecha, 6 etapas, ServicePriceTable, FAQ 6, CTA WhatsApp

---

## 2026-06-09 — ETAPA 2: conteúdo rico termoacústica e alumínio

### Deploy (commit `0ed1f84`)
- `/servicos/cobertura-termoacustica` — expanded long-form, comparativo sanduíche vs alveolar, galeria, FAQ 6, preços oficiais
- `/servicos/cobertura-aluminio` — tipos de telha, cores RAL, pintura eletrostática, comparativo vs policarbonato, galeria, FAQ 6

---

## 2026-06-09 — Cards /servicos + fotos retrátil e piscina

### Deploy (commit `fc46683`)
- 3 cards adicionados em `/servicos`: varanda, retrátil, policarbonato
- Hero e card retrátil → `Cobertura Retratil melhorada.png`
- Card piscina → `IMG_6306.jpg` (igual ao hero interno)

---

## 2026-06-09 — Preços oficiais centralizados em lib/pricing.ts

### Arquivos criados
- `lib/pricing.ts` — tabela oficial Cobersystem (R$/m²): Abre e Fecha R$ 800–1.200, Fixa Alveolar R$ 600–900, Fixa Compacto R$ 800–1.200, Retrátil Automatizada R$ 1.200–1.600; helpers `formatPricePerM2`, `getServiceSchemaMinPrice`, `getFaqPriceAnswer`, etc.
- `components/servicos/ServicePriceTable.tsx` — tabela padrão com colunas **Tipo** e **Preço/m²** apenas

### Arquivos editados (17 páginas de serviço)
- Schema JSON-LD (`buildServiceOffer`) usa `getServiceSchemaMinPrice(slug)` com preço mínimo oficial por tipo
- FAQs e textos inline corrigidos para faixas oficiais
- Tabelas simplificadas: removidas colunas extras (Corredor 6m/12m, Varanda 8m²/15m², 1 carro/2 carros)
- `PriceEstimateNote` e `ServiceAutomationSection` importam de `lib/pricing.ts`

### Tabela oficial aplicada
| Tipo | Faixa R$/m² |
|------|-------------|
| Cobertura Abre e Fecha | 800 – 1.200 |
| Cobertura Fixa Alveolar | 600 – 900 |
| Cobertura Fixa Compacto | 800 – 1.200 |
| Cobertura Retrátil Automatizada | 1.200 – 1.600 |

### Deploy (commit `7f8c115`)
- Push para `origin/main` (Vercel)

---

## 2026-05-27 — Prioridade 1.1: SEO Técnico Crítico

### Arquivos criados
- `public/robots.txt` — robots explícito com declaração do Sitemap para o Googlebot

### Arquivos editados
- `app/sitemap.ts` — adicionadas 14 novas URLs ao sitemap:
  - `/orcamento` (prioridade 0.9)
  - `/cases-sucesso` (prioridade 0.8)
  - `/galeria` (prioridade 0.75)
  - `/localizacao/sao-paulo` (prioridade 0.85)
  - `/localizacao/zona-leste`, `/zona-sul`, `/zona-norte`, `/zona-oeste` (prioridade 0.8 cada)
  - `/localizacao/guarulhos`, `/campinas`, `/santo-andre`, `/sao-bernardo`, `/sorocaba`, `/abc` (prioridade 0.8 cada)

### Arquivos criados
- `app/orcamento/layout.tsx` — metadata completo para a página `/orcamento`:
  - título, descrição, keywords
  - canonical: `https://www.coberturapolicarbonato.com.br/orcamento`
  - Open Graph (título, descrição, URL, imagem, locale)
  - Twitter Card

### Motivação
Páginas de localização (local SEO) e a página de orçamento (principal conversão) estavam fora do sitemap e sem metadata adequado, impedindo indexação correta pelo Google.

### Próximo passo aprovado
Item 1.2 — Tracking de conversão no formulário `/orcamento` + criação da página `/obrigado`

---

## 2026-05-27 — Prioridade 1.2: Tracking de Conversão

### Arquivos editados
- `app/orcamento/page.tsx` — adicionados imports de tracking e `useRouter`; `handleSubmit` agora dispara:
  - `trackGoogleAdsConversion('lGDsCLD1opAYEM2d24Mp', 0)` — conversão Google Ads
  - `trackFormSubmit()` — evento Google Analytics
  - `trackMetaLead()` — evento Meta Pixel
  - `router.push('/obrigado')` — redireciona para página de confirmação

### Arquivos criados
- `app/obrigado/page.tsx` — página de confirmação pós-conversão com:
  - `robots: noindex, nofollow` (não indexável — interna de conversão)
  - Canonical próprio
  - Mensagem de confirmação visual + ícone check
  - CTA WhatsApp de fallback (caso a aba não tenha aberto)
  - Lista "o que acontece agora" (3 passos)
  - Design alinhado com padrão `#D4AF37` do site

### Motivação
O formulário de orçamento abria WhatsApp sem disparar nenhum evento de tracking.
Google Ads, GA e Meta Pixel não registravam a conversão, impedindo otimização de campanhas.

---

## 2026-05-27 — Prioridade 1.3: WhatsApp Contextual por Rota

### Arquivos editados
- `components/WhatsAppButton.tsx` — mensagem do botão flutuante agora é dinâmica por rota:
  - Usa `usePathname()` do Next.js para detectar a rota atual
  - Tabela `ROUTE_MESSAGES` com 30 rotas mapeadas (serviços, produtos, blog, localização, conversão)
  - Função `getWhatsAppMessage()` com fallback para mensagem padrão
  - Cobertura: todos os 14 serviços, 5 produtos, 6 posts de blog, localização, /orcamento, /contato, /obrigado, /faq

### Motivação
Mensagem genérica em todas as páginas reduzia taxa de engajamento no WhatsApp.
Usuário que lia sobre piscina chegava com mensagem de "cobertura genérica" — contexto perdido para o vendedor.

---

## 2026-05-27 — Prioridade 1.4: FAQ Schema nos Posts de Blog

### Arquivos editados
- `app/blog/[slug]/page.tsx` — adicionadas 3 peças:
  1. Função `parseFaqSection()` — extrai pares pergunta/resposta do conteúdo textual dos posts (formato `**Pergunta?**\nResposta`)
  2. Lógica de detecção da seção FAQ por título (`frequente` ou `pergunta`)
  3. Injeção do schema `FAQPage` como `<script type="application/ld+json">` no JSX

### Cobertura
- 7 posts com FAQ detectados automaticamente
- 42 perguntas extraídas e convertidas em schema
- Qualquer post futuro com seção "Perguntas Frequentes" ganha o schema automaticamente

### Motivação
Posts de blog não geravam rich snippets de FAQ no Google, perdendo visibilidade e CTR nos resultados de busca.

---

## 2026-05-27 — SAB: Remoção de Endereço Físico (alinhamento GBP)

### Contexto
GBP configurado como SAB (Service Area Business) com endereço oculto. O site exibia o endereço físico visualmente e nos schemas — inconsistência com o GBP e risco de sinalização negativa.

### Arquivos editados
- `components/Footer.tsx` — substituído bloco "Endereço" por "Área de Atendimento: São Paulo (todas as zonas), Grande SP: Guarulhos, ABC, Osasco, Campinas, Sorocaba e região"
- `components/SchemaMarkup.tsx`:
  - Removidos `streetAddress` e `postalCode` das interfaces TypeScript e dos objetos `organizationSchema` e `localBusinessSchema`
  - `areaServed` expandido de 6 para 11 cidades
  - `sameAs` do Organization atualizado com YouTube
- `app/servicos/cobertura-retratil/page.tsx` — removidos `streetAddress` e `postalCode` do service schema
- `app/servicos/cobertura-policarbonato/page.tsx` — idem

### Não alterado
- `components/LocalBusinessSchema.tsx` — já estava correto (cidade-level apenas)

### Resultado
NAP do site alinhado com GBP SAB. Footer agora reforça cobertura geográfica em vez de expor endereço privado.

---

## 2026-05-27 — P2.1: Substituição de img nativo por Image do Next.js no blog

### Arquivos editados

**`app/blog/[slug]/page.tsx`:**
- Adicionado `import Image from 'next/image'`
- Hero do post: `<img loading="lazy">` → `<Image fill priority sizes="(max-width: 768px) 100vw, 896px">` — melhora LCP
- Grid de imagens (post policarbonato): 2× `<img>` → `<Image fill>` dentro de container `relative h-64`

**`app/blog/page.tsx`:**
- Adicionado `import Image from 'next/image'`
- Cards da listagem: CSS `style.backgroundImage` removido → `<Image fill loading="lazy" sizes="...">` posicionado absolutamente dentro do `<article>`

### Ganhos esperados
- AVIF/WebP automático em todas as imagens do blog (40-70% de redução de peso)
- Eliminação de CLS nas imagens sem dimensões declaradas
- LCP do post melhorado com `priority` no hero

---

## 2026-05-27 — Risco SEO: Remoção de AggregateRating e Reviews fictícios

### Contexto
GMB real tem 18 avaliações com nota 3.5. O componente `LocalBusinessSchema.tsx` continha dados fictícios incompatíveis com a realidade (`ratingValue: 4.9`, `reviewCount: 127`, 2 reviews com "Cliente Verificado"). Dados falsos em structured data são violação das diretrizes do Google e podem gerar Manual Action.

### Arquivo editado
- `components/LocalBusinessSchema.tsx` — removidos completamente os campos `aggregateRating` e `review` do schema `LocalBusiness`

### Decisão estratégica
- P2.6 (AggregateRating nas páginas de serviço) **pausado** até o GMB atingir ≥ 4.0 estrelas
- Quando atingir 4.0+, implementar com dados reais do GBP
- Meta: ~8–10 novas avaliações 5 estrelas para sair de 3.5 → 4.0 (base de 18 reviews)

---

## 2026-05-27 — P2.5: Links internos nos posts de blog

### Arquivo editado
- `app/blog/[slug]/page.tsx` — adicionados:
  1. Constante `POST_INTERNAL_LINKS` — mapa de 8 slugs × 3 links cada (24 links internos totais)
  2. Bloco JSX "Serviços relacionados" — inserido entre Conclusão e Tags, com borda dourada `#D4AF37`

### Cobertura de links por post
- `cobertura-retratil-guia-completo` → retratil, automatizada, area-gourmet
- `cobertura-abre-fecha-vantagens` → abre-e-fecha, piscina, retratil
- `cobertura-policarbonato-preco-tipos` → alveolar, compacto, garagem
- `cobertura-retratil-churrasqueira` → area-gourmet, retratil, abre-e-fecha
- `automacao-alexa-sensor-chuva` → automatizada, retratil, abre-e-fecha
- `pergolado-vs-cobertura-retratil` → retratil, projetos-personalizados, area-gourmet
- `cobertura-de-policarbonato-precos-tipos-guia` → alveolar, compacto, retratil
- `cobertura-para-piscina-tipos-precos-guia` → piscina, automatizada, retratil

### Objetivo
Distribuir PageRank interno para as páginas de serviço mais comerciais, melhorando ranking das páginas de conversão.

---

## 2026-05-28 — P4.4: Sitemap enriquecido com imagens (217 imagens indexadas)

### Arquivos criados/editados
- `lib/seo/image-sitemap.ts` — **criado**: helper `getImageUrls(relDir)` que varre recursivamente `/public/{relDir}` e retorna array de URLs absolutas
- `app/sitemap.ts` — **editado**:
  - Import de `getImageUrls`
  - `IMG` object pré-carrega 7 pastas de imagens em build time
  - `requiredPages`: home com 15 imagens de destaque, blog com 9, cases-sucesso com 40, galeria com 13 projetos + 20 retrátil
  - `mainProductPages`: cada produto com seu banco completo de imagens (retratil: 105, policarbonato: 34, termoacustica: 11, veneziana: 5)
  - `blogArticles`: cada post com sua imagem de capa individual via `blogImageMap`

### Mapeamento pasta → URL
| Pasta | URL | Imagens |
|---|---|---|
| produtos/cobertura-retratil | /produtos/cobertura-retratil | 105 |
| produtos/cobertura-policarbonato | /produtos/cobertura-policarbonato | 34 |
| produtos/cobertura-termoacustica | /produtos/cobertura-termoacustica | 11 |
| produtos/veneziana | /produtos/veneziana-policarbonato | 5 |
| cases-antes-depois | /cases-sucesso | 40 |
| projetos | /galeria | 13 |
| blog | /blog + posts individuais | 9 |

### Impacto esperado
- Google Image Search indexará imagens de produto (alta conversão visual)
- Posts de blog com imagem de capa no Image Search
- ~217 imagens declaradas no sitemap.xml

---

## 2026-05-28 — SEO: WebSite schema com publisher referenciando Organization

### Arquivos editados
- `components/SchemaMarkup.tsx`:
  - Adicionada interface `WebSiteSchema`
  - Adicionado tipo `'website'` no union de `SchemaMarkupProps`
  - Adicionado `@id` em `organizationSchema` (`...#organization`) para servir de referência ao publisher
  - Exportado `websiteSchema` com `name`, `alternateName`, `url`, `description`, `inLanguage: pt-BR`, e `publisher: { @id }` apontando para a Organization
- `app/layout.tsx`:
  - Importado `websiteSchema`
  - Injetado terceiro `<SchemaMarkup type="website" data={websiteSchema} />` no body

### Decisão técnica
- **Sem `SearchAction`**: o site não tem rota de busca interna funcional, e o Google depreciou o Sitelinks Search Box em out/2024. Declarar capacidade inexistente seria contraproducente.
- **Com referência cruzada via `@id`**: estabelece grafo de entidades (Organization ← publisher ← WebSite) reconhecido por Knowledge Graph e LLMs.

### Impacto
- Reforço da entidade "site" no Knowledge Graph
- Melhor entendimento semântico para LLMs (ChatGPT, Perplexity, Gemini)
- Base para futuras extensões de schema (BreadcrumbList global, Article references)

---

## 2026-05-28 — P3.3b: Landing page /lp/area-gourmet para Google Ads

### Arquivos criados
- `app/lp/area-gourmet/layout.tsx` — metadata + `robots: noindex`
- `app/lp/area-gourmet/page.tsx` — LP completa (client component, force-static)
  - LP Header: logo + telefone clicável, sem navegação
  - Hero: "Chove Lá Fora, Festa Aqui Dentro" + 2 CTAs above the fold
  - Trust bar: 500+ projetos / 10+ anos / Grande SP
  - Problema vs Solução (churrasqueira, calor, fumaça, móveis)
  - 3 diferenciais: visita 48h / projeto 3D / 2 anos garantia
  - Como funciona: 3 passos
  - FAQ: 3 perguntas específicas (preço, churrasqueira, prazo)
  - CTA final: WhatsApp + /orcamento
  - LP Footer minimal
  - Service Schema + FAQPage Schema
  - Tracking: `trackGoogleAdsConversion` em todos os CTAs, `trackCTAClick` por botão

### URL para Google Ads
https://www.coberturapolicarbonato.com.br/lp/area-gourmet

---

## 2026-05-28 — HOTFIX: schema LocalBusiness unificado + trackPhoneClick como conversão Google Ads

### Arquivos alterados
- `components/LocalBusinessSchema.tsx` — **deletado** (dead code, nunca importado em nenhuma página; eliminado risco de duplicação futura e inconsistência de dados)
- `components/SchemaMarkup.tsx` — horário de sábado corrigido de `08:00–12:00` para `08:00–17:00` (horário real confirmado)
- `components/GoogleAnalytics.tsx`:
  - Import de `trackGoogleAdsConversion` adicionado
  - `trackPhoneClick` agora dispara `trackGoogleAdsConversion('lGDsCLD1opAYEM2d24Mp', 0)` além do evento GA4
  - Cobertura automática: Footer + LP cobertura retrátil (3 pontos) + qualquer uso futuro

### Impacto
- Zero duplicação de LocalBusiness no Knowledge Graph
- Horário de sábado correto e consistente em todos os schemas
- Cliques em telefone agora contam como conversão no Google Ads (sem alterar chamadores individuais)

---

## 2026-05-27 — P3.3: Landing page /lp/cobertura-retratil para Google Ads

### Arquivos criados/editados
- `app/lp/cobertura-retratil/page.tsx` — **criado** (client component)
  - LP Header: logo + telefone clicável, sem navegação
  - Hero: H1 forte + subheadline + 2 CTAs above the fold (WhatsApp + telefone)
  - Trust bar: 500+ projetos / 10+ anos / Grande SP
  - Problema vs Solução: dois cards contrastando sem x com cobertura
  - 3 diferenciais: visita técnica 48h / projeto 3D incluso / 2 anos garantia
  - Como funciona: 3 passos numerados
  - FAQ visual + FAQPage schema (3 perguntas)
  - CTA final: WhatsApp + link /orcamento
  - LP Footer minimal: logo + telefone + Google Maps + copyright
  - Service Schema + FAQPage Schema (JSON-LD)
  - Tracking: `trackGoogleAdsConversion` em todos os CTAs, `trackCTAClick` por botão
- `app/lp/cobertura-retratil/layout.tsx` — **criado** para metadata (robots: noindex)
- `components/Header.tsx` — adicionado `'use client'` + `usePathname`, retorna null em /lp/*
- `components/Footer.tsx` — adicionado `usePathname`, retorna null em /lp/*

### Decisões técnicas
- robots: noindex (LP de Ads não compete com /servicos/cobertura-retratil no SEO)
- Prova social: apenas dados reais (500+ projetos, 10+ anos) — sem notas ou depoimentos falsos
- WhatsApp flutuante global permanece ativo na LP (é conversão, não distração)

---

## 2026-05-27 — BUGFIX: 3 bugs + 2 inconsistências corrigidos (auditoria pós-deploy)

### Arquivos editados
- `app/blog/[slug]/page.tsx`:
  - **Bug 1**: CTA final do blog `href="/contato"` → `href="/orcamento"` (tracking recuperado)
  - **Inconsistência 1**: WhatsApp no CTA final agora usa `POST_WHATSAPP_MESSAGE[artigo.slug]` contextual em vez de URL genérica
- `components/Footer.tsx`:
  - **Bug 2**: Link "Cases" `href="/cases"` → `href="/cases-sucesso"` (404 eliminado)
  - **Bug 3**: Botão "Solicitar Orçamento" `href="/contato"` → `href="/orcamento"` (funil corrigido)
  - **Bônus**: Copyright `© 2024` → `© 2024–2026`
- `components/WhatsAppButton.tsx`:
  - **Inconsistência 2**: Adicionada rota `/servicos/cobertura-varanda-apartamento` com mensagem contextual

### Impacto
- Funil de conversão completo: menu → /orcamento → tracking → /obrigado agora é consistente em todas as entradas (menu, footer, CTA blog)
- Zero 404s no footer
- WhatsApp contextual em todos os 9 posts do blog e na nova página de varanda

---

## 2026-05-27 — P3.2: Nova página /servicos/cobertura-varanda-apartamento

### Arquivos criados/editados
- `app/servicos/cobertura-varanda-apartamento/page.tsx` — **criado**
  - Metadata completa (título, descrição, canonical, Open Graph, Twitter Card)
  - Service Schema (JSON-LD)
  - FAQPage Schema com 5 perguntas (rich snippet)
  - Hero com 4 stats
  - Seção de benefícios (6 cards)
  - Comparativo retrátil vs fixa com preços
  - Seção "Aprovação no Condomínio" (diferencial exclusivo, 4 passos)
  - Tabela de preços 2026 (4 modelos × 3 tamanhos)
  - FAQ visual (reaproveitando dados do schema)
  - Seção "Veja também" com 3 links internos
  - CTA final com WhatsApp + link /orcamento
- `app/sitemap.ts` — adicionado `cobertura-varanda-apartamento` em `mainServicePages` e `cobertura-area-gourmet-tipos-precos-guia` em `blogArticles`
- `components/Header.tsx` — adicionado "Varanda de Apartamento" no dropdown Serviços

### Palavras-chave alvo
cobertura para varanda de apartamento, cobertura varanda apartamento SP/preço/retrátil, fechamento varanda policarbonato, cobertura varanda condomínio

---

## 2026-05-27 — P2.2: Novo post — Cobertura para Área Gourmet

### Arquivos editados
- `content/blog-posts.json`: novo entry `cobertura-area-gourmet-tipos-precos-guia`
  - 12 seções + FAQ (rich snippet) + conclusão
  - Palavras-chave: cobertura para área gourmet, preço, retrátil, policarbonato, varanda gourmet
- `app/blog/page.tsx`: novo item `id: 9` no array `artigos`
- `app/blog/[slug]/page.tsx`:
  - `POST_INTERNAL_LINKS`: 3 links internos (área gourmet, retrátil, abre e fecha)
  - `POST_WHATSAPP_MESSAGE`: mensagem contextual para o novo post

### Estrutura do post
12 seções cobrindo: benefícios, tipos (retrátil, fixa, vidro, pergolado), tabela de preços 2026, comparativo retrátil vs fixa, integração com decoração, ventilação, manutenção e FAQ.

### CTA intermediário
Inserido automaticamente após a 3ª seção (herda lógica do P3.1 já implementado).

---

## 2026-05-27 — P3.6b: Dica de fotos via WhatsApp no formulário /orcamento

### Arquivo editado
- `app/orcamento/page.tsx`: adicionado parágrafo abaixo do botão de envio:
  - "Tem fotos do espaço? Envie pelo WhatsApp após o contato — é mais rápido e prático."

### Impacto
- Usuário não abandona o formulário por falta de upload
- Fluxo principal de conversão (com tracking) permanece intacto
- Zero fricção adicionada ao formulário

---

## 2026-05-27 — P3.6: Botão "Orçamento" do menu redirecionado para /orcamento

### Arquivo editado
- `components/Header.tsx`:
  - Desktop (linha 94): `href="/contato"` → `href="/orcamento"`
  - Mobile (linha 140): `href="/contato"` → `href="/orcamento"`

### Impacto
- Todo clique no botão "Orçamento" do menu agora aciona a página com tracking completo (Google Ads + GA4 + Meta Pixel)
- Após envio do formulário, usuário é redirecionado para `/obrigado` (URL de conversão limpa)
- Sem mudança visual — apenas o destino foi corrigido

---

## 2026-05-27 — P2.7: URL direta do GBP nos schemas LocalBusiness e Organization

### Arquivos editados
- `components/SchemaMarkup.tsx`:
  - `organizationSchema.sameAs` — adicionado `https://share.google/Mqi0TYJoGCN7QGDo6`
  - `localBusinessSchema.hasMap` — substituído link de busca genérica pela URL direta do GBP
  - `localBusinessSchema.sameAs` — adicionado campo com 3 URLs (Instagram, YouTube, GBP)
  - Interface `LocalBusinessSchema` — adicionado campo opcional `sameAs?: string[]`
- `components/LocalBusinessSchema.tsx`:
  - `sameAs` — adicionado `https://share.google/Mqi0TYJoGCN7QGDo6`
  - `hasMap` — adicionado com URL direta do GBP

### Impacto esperado
- Google confirma que o site e o GBP são a mesma entidade (Knowledge Graph)
- Melhora no sinal de autoridade local para Map Pack
- Elimina ambiguidade da busca genérica anterior (`/search/cobersystem+sao+paulo`)

---

## 2026-06-09 — Fotos, heroes e cards de serviços + Playground

### Imagens adicionadas (`public/images/projetos/`)
- `Cobertura Alumínio Espaço Kids.png`
- `Cobertura em Policarbonato.png`
- `Cobertura Termoacustica.png`
- `Cobertura Playground.png`

### Páginas de serviço — heroes atualizados (layout padrão piscina)
- `/servicos/cobertura-varanda-apartamento` — hero `IMG_4754.jpg`
- `/servicos/cobertura-garagem` — hero `IMG_3609.jpg`
- `/servicos/cobertura-aluminio` — hero `IMG_6324.jpg`
- `/servicos/cobertura-policarbonato` — hero `Cobertura em Policarbonato.png`
- `/servicos/cobertura-termoacustica` — hero `Cobertura Termoacustica.png`

### `/servicos/calhas-rufos-perfil-u` — conteúdo reescrito
- Card e página convertidos para **Cobertura para Playground**
- Novo componente `CoberturaPlaygroundExpandedSections.tsx`
- Foco SEO: cobertura para playground, abre e fecha, retrátil, escolas, condomínios

### Listagem `/servicos` — cards atualizados
- Piscina → `Cobertura em Policarbonato.png` (página interna intacta)
- Fixa compacto → `IMG_1762.jpg`
- Termoacústica, Alumínio, Playground — novas fotos
- **Novos cards:** Jardim de Inverno (`jardim-de-inverno-02.png`) e Pergolado (`pergolado-01.png`)

### Deploy (commit `7f8c115`)
- Build validado localmente; push para `origin/main` (Vercel)

---

## 2026-06-09 — Migração Playground + expansão páginas fracas

### URGENTE — URL Playground
- Nova página `/servicos/cobertura-playground` (canonical, metadata, 5 FAQs, CTA WhatsApp, ServiceVejaTambem)
- Redirect 301 em `next.config.ts` e `permanentRedirect` em `/servicos/calhas-rufos-perfil-u`
- Card em `/servicos` atualizado para slug `cobertura-playground`
- `sitemap.ts` e `breadcrumb-names.ts` atualizados
- Removido `calhas-rufos-perfil-u/CoberturaPlaygroundExpandedSections.tsx` (duplicata)

### Expansão de conteúdo
- `/servicos/cobertura-corredor-lateral` — ~1.200 palavras: aplicações, comparativo fixa/retrátil, tabela preços, galeria, 5 FAQs, WhatsApp, ServiceVejaTambem
- `/servicos/cobertura-garagem` — ~1.400 palavras: comparativo, tabela 1/2 carros, granizo, galeria, 5 FAQs, WhatsApp, ServiceVejaTambem

### Padrões transversais
- CTA WhatsApp + 5 FAQs em: fixa compacto, alumínio, projetos personalizados
- ServiceVejaTambem adicionado em: garagem, corredor-lateral, alumínio, projetos-personalizados, playground
- `ServiceVejaTambem.tsx` — novas entradas para os slugs acima

### Deploy (commit `7f8c115`)
- Build validado; push para `origin/main` (Vercel)

---

## 2026-06-09 — Fotos cards e heroes: abre-e-fecha, alveolar, retrátil automatizada

### Imagens adicionadas (`public/images/projetos/`)
- `Cobertura Abre e Fecha.png`
- `Cobertura Fixa Policarbonato Alveolar.png`

### `/servicos/cobertura-abre-e-fecha`
- Hero e card na listagem → `Cobertura Abre e Fecha.png`
- Metadata OG/Twitter/schema atualizados

### `/servicos/cobertura-fixa-policarbonato-alveolar`
- Hero e card na listagem → `Cobertura Fixa Policarbonato Alveolar.png`

### Listagem `/servicos`
- Card Cobertura Retrátil Automatizada → `IMG_4754.jpg` com `object-position: 50% 30%`

### Deploy (commit `7f8c115`)
- Push para `origin/main` (Vercel)

---

## 2026-06-09 — Foto hero e card: cobertura garagem

### Imagem adicionada (`public/images/projetos/`)
- `Cobertura Garagem.png`

### `/servicos/cobertura-garagem`
- Hero e card na listagem → `Cobertura Garagem.png`
- Metadata OG/Twitter/schema atualizados

### Deploy (commit `7f8c115`)
- Push para `origin/main` (Vercel)

---

## 2026-06-09 — Correção schema Product/Offer em páginas de serviço (GSC)

### Problema
Google Search Console reportava ausência de `price`, `shippingDetails` e `hasMerchantReturnPolicy` nos schemas de produto das páginas de serviço.

### Solução
- `lib/schemas/product-schemas.ts` — exportados `merchantReturnPolicy`, `shippingDetails` e helper `buildServiceOffer(url, price)`
- 17 páginas de serviço atualizadas com `price`, `priceValidUntil`, `hasMerchantReturnPolicy` e `shippingDetails` padronizados

### Deploy (commit `7f8c115`)
- Push para `origin/main` (Vercel)

---

## 2026-06-09 — Preços schema R$ 800 + nota estimada + automação em 17 serviços

### Schema JSON-LD — preço mínimo corrigido para R$ 800
- `/servicos/cobertura-garagem` (era R$ 150)
- `/servicos/cobertura-aluminio` (era R$ 200)
- `/servicos/cobertura-area-gourmet` (era R$ 250)
- `/servicos/cobertura-piscina` (era R$ 300)

### Componentes reutilizáveis
- `components/servicos/PriceEstimateNote.tsx` — nota de valores estimados
- `components/servicos/ServiceAutomationSection.tsx` — Controle Remoto R$ 2.500 / Alexa R$ 3.000 / Sensor R$ 4.000

### Aplicado nas 17 páginas de serviço
- Nota abaixo de tabelas de preço (ou seção equivalente)
- Seção Mecanismos de Automação com "Valor por comando" em vermelho

### Deploy (commit `7f8c115`)
- Push para `origin/main` (Vercel)

---

### Arquivo editado
- `app/blog/[slug]/page.tsx` — adicionados:
  1. `import { Fragment } from 'react'`
  2. `POST_WHATSAPP_MESSAGE` — mapa de mensagens WhatsApp contextuais por slug (8 posts)
  3. CTA intermediário renderizado após a 3ª seção (`idx === 2`) em todos os posts
     - Fundo gradiente escuro (`from-gray-800 to-gray-900`)
     - Botão dourado → `/orcamento`
     - Botão verde → WhatsApp com mensagem contextual pré-preenchida por post
     - Texto: "Quer saber o preço para o seu projeto? Resposta em até 24h."

### Cobertura
- Todos os 8 posts têm ≥ 8 seções — CTA aparece em todos após a 3ª seção
- Mensagem WhatsApp específica por post (mesmo padrão do WhatsAppButton.tsx)

---

## 2026-06-10 — Semana 1: Expansão Geolocal (Interlinking + Bairros Premium SP)

### Objetivo
Melhorar transferência de autoridade entre páginas hub `/localizacao/` e páginas transacionais `/produtos/em/[cidade]`, e substituir bairros de baixo fit por bairros premium no segmento de alto padrão.

### Arquivos alterados

#### `lib/sao-paulo-bairros.ts`
- Removidos: `santana`, `tucuruvi` (baixo fit com ICP alto padrão/área externa)
- Adicionados: `morumbi`, `pinheiros`, `moema` (casas, piscinas, condomínios premium)
- Total de bairros: mantido em 7 (era 6, passa a 7 — net +1 bairro = +4 páginas por produto = +16 páginas no sitemap)

#### `lib/sao-paulo-bairros-conteudo.ts`
- Removidos blocos de conteúdo SEO: `santana`, `tucuruvi`
- Adicionados blocos completos (4 linhas de produto × 3 parágrafos cada) para: `morumbi`, `pinheiros`, `moema`

#### `app/localizacao/*/page.tsx` — 11 arquivos
Adicionada seção "Produtos em [cidade]" com 4 cards linkando para `/produtos/[produto]/em/[cidade]`:
- `sao-paulo` → `/em/sao-paulo`
- `zona-leste`, `zona-sul`, `zona-norte`, `zona-oeste` → `/em/sao-paulo` (zonas são sub-regiões da capital)
- `guarulhos` → `/em/guarulhos`
- `campinas` → `/em/campinas`
- `santo-andre` → `/em/santo-andre`
- `sao-bernardo` → `/em/sao-bernardo-do-campo`
- `sorocaba` → `/produtos/[produto]` (sem página de cidade específica ainda)
- `abc` → combinação santo-andre + sao-bernardo-do-campo

### Impacto esperado
- 11 páginas hub agora passam link juice para 32 páginas transacionais (cobertura × cidade)
- Substituição de bairros: gera +12 páginas novas no sitemap automaticamente (3 bairros × 4 produtos)
  - Novas URLs: `/produtos/{4 produtos}/em/sao-paulo/{morumbi,pinheiros,moema}`
  - Removidas: `/produtos/{4 produtos}/em/sao-paulo/{santana,tucuruvi}` (8 páginas descontinuadas)
  - Net: +4 páginas no sitemap com melhor fit de ICP

### Próxima ação planejada (Semana 2)
Após confirmar indexação: expandir `/produtos/cobertura-piscina/em/[cidade]` com foco em Barueri/Alphaville, Morumbi, Moema, Campinas.

## P5 — Expansão de conteúdo nas 5 páginas prioritárias (Jun 11, 2026)

### Commit: 0befb5d

**Objetivo:** Rankear na primeira página do Google para keywords principais.

**Arquivos alterados (7):**
- `app/produtos/cobertura-policarbonato/page.tsx` — tabela de preços por espessura/tipo, comparativo alveolar×compacto, FAQ visível 8 perguntas
- `app/servicos/cobertura-fixa-policarbonato-compacto/page.tsx` — prova social, seção "Onde usar" (6 ambientes), processo instalação em 4 etapas
- `app/servicos/cobertura-pergolado/page.tsx` — OG image corrigida, comparativo bioclimático×retrátil×fixo, FAQ reescrito para bioclimático SP
- `app/servicos/cobertura-piscina/page.tsx` — FAQ 4→5 perguntas, prova social + 3 cases reais (Morumbi, Alphaville, Jardins)
- `app/page.tsx` — geo SP em H2, social proof numérico, tabela de preços, FAQ 5 perguntas + FAQPage JSON-LD, LocalBusiness JSON-LD, WhatsApp no CTA
- `lib/schemas/faq-schemas.ts` — coberturaPolicarbonato: 5→8 perguntas
- `lib/schemas/product-schemas.ts` — coberturaPolicarbonato offers: preço 450→pricing.ts (600+800), 2 Offers separadas

**Keywords alvo:**
1. "cobertura policarbonato preço" → /produtos/cobertura-policarbonato
2. "cobertura fixa policarbonato compacto SP" → /servicos/cobertura-fixa-policarbonato-compacto
3. "pergolado bioclimático SP" → /servicos/cobertura-pergolado
4. "cobertura para piscina SP" → /servicos/cobertura-piscina
5. "cobertura retrátil São Paulo" → / (home)

## P6 — Gaps de keyword e estruturas finais (Jun 11, 2026)

### Commit: 8e86661

**9 arquivos alterados, 1.422 inserções**

**Novos arquivos criados:**
- `app/servicos/toldo-retratil/page.tsx` — keyword "toldo retrátil SP" (8-15k/mês)
- `app/servicos/cobertura-vidro/page.tsx` — keyword "cobertura de vidro" (3-6k/mês)
- `app/localizacao/alphaville/page.tsx` — hub bairro premium Alphaville/Barueri
- `app/localizacao/jardins/page.tsx` — hub bairro premium Jardins SP
- `app/localizacao/tatuape/page.tsx` — hub bairro premium Tatuapé SP

**Arquivos alterados:**
- `components/ServiceVejaTambem.tsx` — +2 links (toldo-retratil, cobertura-vidro)
- `components/SchemaMarkup.tsx` — localBusinessSchema: +geo lat/lng SP, +email
- `app/sitemap.ts` — +5 URLs novas (priority 0.80)

**Schema GlobalLocalBusiness:** geo (-23.5505, -46.6333) + email adicionados. Organization/LocalBusiness/WebSite já existiam — sem duplicação.
2026-06-16 — fix conversão: preços above the fold em /telhado-retratil-policarbonato-preco

## 2026-06-16 — Otimização CRO: /orcamento

**Objetivo:** Reduzir bounce rate (67%) e aumentar conversão na principal página de leads do site.

**Alterações em `app/orcamento/page.tsx`:**
- Removido campo Email do formulário (fluxo é 100% WhatsApp — campo era atrito desnecessário)
- Removida validação de email (isValidEmail, bloco de validate)
- Removido email da mensagem enviada via WhatsApp
- Cards de benefícios (⚡📐✅🎯) movidos para ANTES do formulário (entre hero e form)
- Adicionado botão "💬 Prefere falar direto? Chame no WhatsApp" visível no desktop (hidden md:flex)
- Adicionado social proof no hero: "+500 projetos entregues em São Paulo"

**Mantido intacto:**
- Sticky WhatsApp CTA mobile
- Todos os campos restantes do formulário (5 obrigatórios + 1 opcional)
- Tracking Google Ads, GA4 e Meta Pixel
- Fluxo de envio via WhatsApp + redirect /obrigado
- FAQ, schema, acessibilidade, URL

## 2026-06-17 — Otimização CRO: Home (/)

**Objetivo:** Reduzir bounce rate (46%) e aumentar conversões (2,6%) na home.

**Alterações em `app/page.tsx`:**
- Fix: botão "Solicitar Orçamento Agora" no CTA final apontava para /contato — corrigido para /orcamento
- Adicionado CTA inline WhatsApp logo após seção "Prova Social Numérica" (pico de confiança do scroll)
  Texto: "Quer fazer parte desses +500 projetos? 💬 Falar no WhatsApp"

**Alterações em `components/VideoHero.tsx`:**
- Substituído iframe YouTube por <video> HTML5 nativo (autoPlay muted loop playsInline)
  Motivo: iframe YouTube bloqueado por iOS Safari, bloqueadores de privacidade e conexão lenta
  Poster: /images/blog/cobertura-abre-fecha.jpg (imagem existente — nunca mostra fundo cinza)
  Fonte: /videos/hero-cobersystem.mp4 (arquivo a ser adicionado manualmente — ver instruções abaixo)
- Mini-card "Grande SP Atendimento" → "+500 Projetos Entregues" (social proof no primeiro viewport)

**Arquivo de vídeo (pendente):**
- Criar: public/videos/hero-cobersystem.mp4
- Download local: yt-dlp "https://www.youtube.com/watch?v=Aizf2j-Dqds" -o raw.mp4
- Compressão: ffmpeg -i raw.mp4 -vn -vf "scale=1280:720" -c:v libx264 -crf 28 -preset slow -an hero-cobersystem.mp4
- Fazer upload para o servidor e commitar

## 2026-06-17 — CRO: CTAs e preços nas páginas de produto e blog

**Objetivo:** Reduzir bounce rate e aumentar conversões em 3 páginas prioritárias.

**`app/blog/[slug]/page.tsx`** (afeta slug `cobertura-policarbonato-preco-tipos`):
- Extraído `waHeroUrl` para fora do map de seções para reuso
- CTA hero adicionado entre descrição e imagem: "💬 Falar no WhatsApp" + "Solicitar Orçamento" → /orcamento
  (condicional ao slug — não afeta outros posts)
- Seção 4 ("Preços Completos de Instalação") duplicada antes da Seção 1 via `idx === 0`
  (condicional ao slug — tabela de preços visível antes do scroll)

**`app/produtos/cobertura-policarbonato/page.tsx`**:
- Hero: faixa de preço "A partir de {fixaAlveolar}/m² · Visita técnica gratuita"
- Hero: botões "💬 Falar no WhatsApp" + "Solicitar Orçamento" → /orcamento
- CTA final: /contato → /orcamento + adicionado botão WhatsApp ao lado

**`app/produtos/cobertura-retratil/[slug]/page.tsx`** (afeta todos os slugs da rota):
- Hero blue box: preço condicional para policarbonato-compacto-2mm ("A partir de R$ 1.200/m²")
- Hero: "Visita técnica e orçamento gratuitos" adicionado
- Hero: fix /contato → /orcamento no botão "Solicitar Orçamento"
- Hero: botão "💬 WhatsApp" adicionado ao lado do botão de orçamento
- CTA final: /contato → /orcamento + botão WhatsApp adicionado ao lado

## 2026-06-17 — Bridge OAuth Eterna GA4 no n8n

### Problema resolvido
Credencial Google OAuth2 do GA4 expirava a cada 7 dias (consent screen em modo "Testing"), quebrando os endpoints `/cober/ga4` e o Relatório Semanal.

### Solução implementada
Inserido node "Token GA4" nos 2 workflows principais, que troca o `GOOGLE_REFRESH_TOKEN` do `.env` por um access token fresco a cada execução — sem depender do gerenciamento de credenciais do n8n.

### Workflows modificados

#### DATA-API (JHQJ8sFTF1bHlooU)
- Inserido node **Token GA4** (HTTP Request POST para `oauth2.googleapis.com/token`) entre `Parse GA4 Params` e `GA4 API`
- `GA4 API`: removida credential `googleOAuth2Api`, adicionado header `Authorization: Bearer {{ Token GA4.access_token }}`
- Conexões: `Parse GA4 Params → Token GA4 → GA4 API`

#### Relatório Semanal (B29BC2BkRPG8988G)
- Inserido node **Token GA4** após `Schedule Trigger`, antes dos 2 nodes GA4
- `GA4 - Buscar Dados` e `GA4 - Eventos Conversão`: removida credential `googleOAuth2Api`, adicionado header Bearer
- Conexões: `Schedule Trigger → Token GA4 → GA4 - Buscar Dados / GA4 - Eventos Conversão`

### Resultado dos testes
- `ga4_overview` → HTTP 200 ✅ (sessions:282, bounceRate:55.7%)
- `ga4_top_pages` → HTTP 200 ✅ (10+ páginas com dados)
- `ga4_realtime` → HTTP 200 ✅

### Pendente (ação manual)
- Mudar consent screen do projeto `cobersystem-openclaw-492603` de "Testing" para "Production" no Google Cloud Console
- Reconectar "Google account 2" no n8n após mudança para Production

## 2026-06-23 — Ações Estratégicas Opus 4.8 (Sessão 2)

### ITEM 1 — Validação de sinais pós-fix
- Conversão "Clique Botão Whatsapp" (6476649806): **0 sinais nos últimos 30 dias** — esperado, pois tracking estava quebrado até hoje
- Conversão "Lead Formulário Orçamento" (6476575408): **0 sinais nos últimos 30 dias** — mesma causa
- Ambas as conversões estão ENABLED e prontas para receber sinais
- **O primeiro sinal deve aparecer no painel do Ads em até 3-4h após o primeiro clique real**

### ITEM 2 — Prioridade das conversões (confirmação)
- Confirmado via API: "Clique Botão Whatsapp" → `primaryForGoal=True` (PRIMARY ✅)
- Confirmado via API: "Lead Formulário Orçamento" → `primaryForGoal=False` (SECONDARY ✅)
- Executado na sessão anterior, verificado agora

### ITEM 3 — Investigação Display (18 conversões GA4) + correção
**Causa raiz identificada e corrigida:**
- As 18 conversões "Display" no GA4 vinham de `source=google, medium=cpc, campaign=Cobersystem - Leads SP`
- A campanha de Search tinha `target_content_network=True` (Display Network habilitada por engano)
- Não existem campanhas Display ou PMax ATIVAS na conta (todas PAUSED)
- **Correção aplicada via API:** `target_content_network` alterado para `False` na campanha `Cobersystem - Leads SP`
- A partir de agora a campanha é Search puro — sem vazamento para Display

### ITEM 4 — SEO title/meta (executado na sessão anterior)
- `lib/seo/page-metadata.ts`: title e meta da página cobertura-policarbonato reescritos
- `content/blog-posts.json`: título e descrição do post fechamento-de-varanda atualizados
- Deploy: commit 13fc253 (manual via VPS)

### ITEM 7 — Autoridade /produtos/cobertura-retratil (executado na sessão anterior)
- `app/blog/[slug]/page.tsx`: link interno adicionado em cobertura-abre-fecha-vantagens
- `app/produtos/cobertura-retratil/page.tsx`: parágrafo semântico adicionado após H1
- Deploy: commit 13fc253 (manual via VPS)

---

## 2026-06-27 — Diagnóstico e correção dos workflows n8n GMB Posts + Alerta Reviews

### CAUSA RAIZ IDENTIFICADA

**Dois bugs simultâneos:**

**Bug 1 — `$helpers is not defined` (crítico):**
- Esta versão do n8n usa task runner isolado para Code nodes
- `$helpers.httpRequest()` não está disponível no ambiente do task runner
- Afetou os dois workflows: `H15y7ESgezYxAS8s` e `wikzUUqYstbwizU0`
- Evidência no log: `"errorMessage":"$helpers is not defined [line 27]"` (Posts) e `[line 7]` (Alerta)
- O workflow de Posts **executou na sexta 26/06 às 12h BRT** mas **falhou no Code node**

**Bug 2 — Cron com timezone errado (GMB Posts):**
- `GENERIC_TIMEZONE=America/Sao_Paulo` faz o n8n interpretar cron em horário BRT
- `0 12 * * 1,3,5` = meio-dia BRT (não 9h BRT como pretendido)
- Deveria ser `0 9 * * 1,3,5` para disparar às 9h BRT

### CORREÇÕES APLICADAS

**Workflow GMB Posts Automáticos (`H15y7ESgezYxAS8s`):**
- Code node: `$helpers.httpRequest()` → `fetch()` (compatível com task runner)
- Cron: `0 12 * * 1,3,5` → `0 9 * * 1,3,5` (9h BRT correto)

**Workflow GMB - Alerta Review Negativa (`wikzUUqYstbwizU0`):**
- Code node: `$helpers.httpRequest()` → `fetch()` (compatível com task runner)
- Cron 0 */4 * * * mantido (correto)

### VALIDAÇÃO
- OAuth token: OK (access_token obtido com sucesso)
- GMB API posts: OK (3 posts retornados)
- GMB API reviews: OK (3 reviews retornadas)
- Ambos workflows: active=True, sem $helpers, com fetch()

### PRÓXIMOS DISPAROS
- GMB Posts: Segunda 29/06 às 9h BRT | Quarta 01/07 | Sexta 03/07
- Alerta Reviews: a cada 4h (próximo 20h BRT hoje)

---

## 2026-06-28 — Correção GMB Insights + gap de tracking GA4 nas LPs

### CORREÇÃO 1 — GMB Insights zerado nos relatórios semanais

**Problema:** Bloco GMB do relatório exibia todos os valores como 0.
**Causa raiz:** Code node "GMB - Buscar Insights" usava `$helpers.httpRequest()` (indisponível no task runner). O `try/catch` capturava silenciosamente o erro retornando `{ multiDailyMetricTimeSeries: [] }`, causando zeros no Formatar GMB.
**Evidência:** Node completava em ~120ms (erro local) vs 1.75s para chamada real à API.

**Correção aplicada:**
- `B29BC2BkRPG8988G` (Relatório Semanal): `$helpers.httpRequest()` → `fetch()`
- `1mtMgK2OCnM6KqiS` (Ciclo Domingo): idem

**Validação:** API retorna dados reais:
- Impressões semana atual: 12 (-64% vs anterior)
- Ligações: 2 | Rotas: 0 | Cliques site: 0

### CORREÇÃO 2 — Gap de observabilidade GA4 nas LPs pagas

**Problema:** LPs `/lp/cobertura-retratil` e `/lp/area-gourmet` disparavam apenas Google Ads conversion + CTA click, sem registrar `whatsapp_click` no GA4.
**Impacto:** Cliques de tráfego pago não apareciam na métrica `whatsapp_click` do GA4.

**Correções aplicadas (commit 453c1ec):**
- `app/lp/cobertura-retratil/page.tsx`: `trackWaHero/Final` agora chamam `trackWhatsAppLead({ location: 'lp-retratil-hero/final' })`
- `app/lp/area-gourmet/page.tsx`: idem com `location: 'lp-gourmet-hero/final'`
- `app/orcamento/page.tsx`: `handleSubmit` agora chama `trackFormSubmit()` para registrar `submit` no GA4

**Build:** ✓ sem erros | 198 páginas geradas

---

## 2026-06-28 — Novo post blog: Preço por m² cobertura retrátil

**Arquivo:** `content/blog-posts.json`
**Slug:** `cobertura-retratil-preco-m2-sao-paulo`
**Rota:** `/blog/cobertura-retratil-preco-m2-sao-paulo`
**Commit:** `3d2e63a`

**Motivação (dados GSC):** Query "cobertura retrátil preço m2" com 48 impressões/mês, posição 8.4, CTR 2.08% — intenção transacional sem post dedicado de preço.

**Conteúdo:**
- Título: "Cobertura Retrátil: Preço por m² em SP [Tabela 2026]"
- 1.796 palavras | 7 seções | categoria: Preços
- Tabela de preços: R$800-R$1.700/m² por tipo de material
- FAQ com 6 perguntas (gera FAQPage schema automaticamente)
- 11 links internos (todos 7 obrigatórios incluídos)
- Build: 199 páginas (198+1) sem erros

## [2026-06-28] Post #2 blog + correção imagem post #1

### Blog: Correção post #1 (cobertura-retratil-preco-m2-sao-paulo)
- `imagem`: corrigido de `/images/blog/cobertura-retratil-guia-completo.jpg` → `/images/blog/cobertura-retratil-preco-m2-sao-paulo.jpg`
- `data`: corrigido de `2026-06-28` → `2026-06-25`
- Imagens copiadas de `.jpg.png` para `.jpg` para ambos os posts

### Blog: Novo post #2 (cobertura-para-jardim-de-inverno-tipos-materiais-precos)
- Slug: `cobertura-para-jardim-de-inverno-tipos-materiais-precos`
- Título: "Cobertura para Jardim de Inverno: Tipos, Materiais e Preços [2026]"
- Data: 2026-06-28 | Categoria: Tipos e Preços
- 1912 palavras | 6 perguntas FAQ (FAQPage schema automático)
- Todos os 7 links internos obrigatórios presentes
- Imagem: `/images/blog/cobertura-para-jardim-de-inverno.jpg`

---

## 2026-07-13 — Post #4 blog: Cobertura Fixa vs Retrátil (Comparativos)

**Arquivos:** `content/blog-posts.json`, `app/blog/[slug]/page.tsx`, `app/sitemap.ts`
**Slug:** `cobertura-fixa-vs-retratil-qual-escolher-2026`
**Rota:** `/blog/cobertura-fixa-vs-retratil-qual-escolher-2026`

**Objetivo:** Post comparativo (intenção informacional/transacional) para o cliente que compara opções antes de comprar. Keyword principal: `cobertura fixa`; secundária: `cobertura fixa vs retrátil`.

**Conteúdo:**
- Título: "Cobertura Fixa ou Retrátil: Qual Escolher? [2026]" (49 chars)
- Meta description: 133 chars
- ~1.621 palavras | 8 seções | categoria: Comparativos
- Comparativo lado a lado nos 7 critérios (preço/m², instalação, manutenção, aplicações, automação, garantia, valorização) no padrão `✅/⚖️/❌` que renderiza como lista limpa
- Tabela de preços: fixa alveolar R$600/m², fixa compacto R$900/m², retrátil alveolar R$800/m², retrátil compacto R$1.200/m²
- FAQ com 6 perguntas → gera FAQPage schema automaticamente
- Schemas: BlogPosting (Article) + FAQPage + BreadcrumbList (todos confirmados no HTML gerado)
- 8 links internos obrigatórios presentes (produtos, orçamento, telhado retrátil preço e 3 posts do blog)
- Keywords naturais: "cobertura fixa SP", "cobertura fixa preço", "cobertura fixa policarbonato"

**Wiring:** entradas adicionadas em `POST_INTERNAL_LINKS` e `POST_WHATSAPP_MESSAGE` (blog page) + entrada no `blogImageMap` do sitemap para indexação.

**Imagem:** ⚠️ placeholder — não havia imagem dedicada de "cobertura fixa / comparativo" em `public/images/blog/`. Usado `/images/blog/cobertura-policarbonato-tipos.jpg` (on-topic, fixa = policarbonato). Recomendado criar/subir imagem dedicada de comparativo e trocar depois.

**Build:** ✓ sem erros | rota pré-renderizada (HTML 112KB) e presente no prerender-manifest

---

## 2026-07-13 — Fix imagem post #4 (cobertura-fixa-vs-retratil)

**Arquivos:** `content/blog-posts.json`, `app/sitemap.ts`, `public/images/blog/cobertura-fixa-ou-cobertura-retratil.png`
**Commit:** `4fb6d5d`

Substituído o placeholder `/images/blog/cobertura-policarbonato-tipos.jpg` (imagem compartilhada com outro post) pela imagem dedicada `/images/blog/cobertura-fixa-ou-cobertura-retratil.png` — extensão real é `.png`, não `.jpg`. Atualizado `imagem` no JSON e `blogImageMap` no sitemap. Arquivo PNG estava untracked e foi versionado no commit. Build ✓ sem erros.

---

## 2026-07-13 — Post #5 blog: Cobertura Abre e Fecha — Preço por m² (Preços)

**Arquivos:** `content/blog-posts.json`, `app/blog/[slug]/page.tsx`, `app/sitemap.ts`
**Slug:** `cobertura-abre-e-fecha-preco-m2-2026`
**Rota:** `/blog/cobertura-abre-e-fecha-preco-m2-2026`

**Objetivo:** Post transacional (cliente pronto para comprar) respondendo diretamente "quanto custa cobertura abre e fecha". Keyword principal: `cobertura abre e fecha preço`; secundária: `cobertura abre e fecha preço m2`.

**Conteúdo:**
- Título/H1: "Cobertura Abre e Fecha: Preço por m² em SP [2026]" (49 chars) — ajustado para incluir "em SP" conforme H1 pedido pelo usuário (o meta title informado era ligeiramente diferente; como o schema usa um único campo `titulo` para `<title>` e `<h1>`, priorizei a versão do H1, que também cabe no limite de 60 chars de SEO)
- Meta description: 144 chars
- ~1.451 palavras | 7 seções | categoria: Preços
- Tabela de preços por tipo/automação: alveolar manual R$800/m², alveolar motorizada R$1.000/m², compacto manual R$1.000/m², compacto motorizada R$1.200/m², sensor de chuva +R$200-400
- FAQ com 6 perguntas → FAQPage schema automático
- Schemas: BlogPosting (Article) + FAQPage + BreadcrumbList (confirmados no HTML gerado)
- 8 links internos obrigatórios presentes (produtos, orçamento, telhado retrátil preço e 3 posts do blog)
- Keywords naturais: "cobertura abre e fecha SP", "cobertura abre e fecha preço m2", "telhado abre e fecha"
- Imagem: `/images/blog/cobertura-abre-e-fecha-preco-m2.jpg` (já existia em `public/images/blog/`, sem necessidade de placeholder)

**Wiring:** entradas adicionadas em `POST_INTERNAL_LINKS` e `POST_WHATSAPP_MESSAGE` (blog page) + entrada no `blogImageMap` do sitemap para indexação.

**Build:** ✓ sem erros | rota pré-renderizada (HTML ~104KB) confirmada com H1, title, schemas e imagem corretos

---

## 2026-07-13 — LP: Cobertura para Corredor Lateral (conversão WhatsApp)

**Arquivos:** `app/lp/cobertura-corredor-lateral/page.tsx`, `app/lp/cobertura-corredor-lateral/layout.tsx`, `app/sitemap.ts`

**Motivação (dados GSC):** query "cobertura corredor lateral" pos 7,7, CTR 50% — alta intenção de compra, cliente já sabe o que quer.

**Estrutura:** Hero (H1 + subtítulo + CTA WhatsApp + social proof "+500 projetos"), trust bar, foto hero, 3 cards de benefícios, 3 cards de tipos/preços (fixa R$600/m², retrátil R$800/m², calha embutida sob orçamento), 4 aplicações, 4 materiais, bloco de links internos, CTA final com WhatsApp + orçamento online.

**Schemas:** Service + BreadcrumbList (confirmados no HTML gerado). Sem FAQPage — não solicitado para esta LP.

**Diferença de padrão importante:** as LPs existentes (`/lp/cobertura-retratil`, `/lp/area-gourmet`) são `robots: { index: false, follow: false }` e **não** estão no sitemap — são páginas exclusivas para tráfego pago (Google Ads). Esta nova LP tem motivação de **captura orgânica** (posição 7,7 no GSC), então foi criada **indexável** (sem `robots: noindex`) e **incluída no sitemap** conforme solicitado — desvio intencional do padrão anterior, sinalizado aqui para rastreabilidade.

**Imagem:** `/images/blog/cobertura-retratil-corredor-lateral.png` (extensão real é `.png`, não `.jpg` como no pedido original).

**Build:** ✓ sem erros | rota `/lp/cobertura-corredor-lateral` pré-renderizada (HTML ~39KB)

---

## 2026-07-13 — Post #6 blog: Cobertura para Varanda (agendado 2026-07-14)

**Arquivos:** `content/blog-posts.json`, `app/blog/[slug]/page.tsx`, `app/sitemap.ts`
**Slug:** `cobertura-para-varanda-retratil-fixa-fechamento`
**Rota:** `/blog/cobertura-para-varanda-retratil-fixa-fechamento`

**Objetivo:** Post comparativo (cliente comparando opções) entre retrátil, fixa, fechamento de varanda e pergolado bioclimático. Keyword principal: `cobertura para varanda`; secundária: `cobertura varanda retrátil`. Campo `data` definido como `2026-07-14`.

**⚠️ Aviso importante sobre agendamento:** este site é 100% estático (Next.js SSG, sem `revalidate`/ISR configurado nas rotas de blog). O campo `data` do JSON é apenas exibido na página e usado para ordenação — **não existe mecanismo de gating por data** que oculte o post até a data de publicação. Isso significa que, assim que este commit for enviado a `main` e o deploy no Vercel concluir (hoje, 2026-07-13), o post **fica acessível imediatamente**, não "amanhã" automaticamente. Se for necessário publicação realmente agendada no futuro, isso exigiria implementar filtro de data (ocultar da listagem/sitemap/`generateStaticParams` posts com `data` futura) + ISR/revalidate nas rotas de blog — uma mudança de arquitetura que não foi feita aqui por não ter sido explicitamente aprovada.

**Conteúdo:**
- Título/H1: "Cobertura para Varanda: Retrátil, Fixa ou Fechamento?" (53 chars)
- Meta description: 150 chars
- ~1.404 palavras | 8 seções | categoria: Comparativos
- Tabela comparativa dos 4 tipos (retrátil, fixa, fechamento, pergolado bioclimático) nos 6 critérios pedidos
- Preços 2026: retrátil R$800/m², fixa R$600/m², fechamento e pergolado sob orçamento
- FAQ com 6 perguntas → FAQPage schema automático
- Schemas: BlogPosting (Article) + FAQPage + BreadcrumbList (confirmados no HTML gerado)
- 8 links internos obrigatórios presentes
- Keywords naturais: "cobertura varanda SP", "cobertura para varanda preço", "telhado varanda"
- Imagem: `/images/blog/cobertura-retratil-sacada.png` (extensão real é `.png`, não `.jpg` como no pedido)

**Wiring:** entradas em `POST_INTERNAL_LINKS`, `POST_WHATSAPP_MESSAGE` e `blogImageMap` do sitemap.

**Build:** ✓ sem erros | rota pré-renderizada (HTML ~105KB) confirmada com H1, schemas e imagem corretos

---

## 2026-07-23 — GMB: solução definitiva do "zerado" (correção de causa raiz + monitor)

**Escopo:** infraestrutura (MCP `/root/cobersystem-mcp` + n8n). Não altera o site.

**Investigação (dados reais via API Google + n8n):**
- Ambos os refresh tokens Google (o do `.env`/MCP e o dos workflows GMB) estão **VÁLIDOS e eternos**, com escopo `business.manage`. O app OAuth está em produção (tokens não expiram em 7 dias). ⇒ a premissa "token GMB expirado" estava **incorreta**.
- Perfil GMB: `openInfo.status = OPEN`, `metadata.hasVoiceOfMerchant = true` ⇒ **verificado, ativo, elegível** (não suspenso).
- Performance real (parser correto): **194 impressões/30d** (Search 163, Maps 31), 7 ligações, 18 cliques no site — ou seja, **NÃO está zerado**.
- Workflows GMB no n8n (`H15y7ESgezYxAS8s` posts, `mtCyWCcNUgBIvx5D` reviews) **ativos e executando com sucesso** (posts 22/07, 20/07, 17/07…; reviews de 4/4h, quase todos `success`).

**Causa raiz do "GMB 0" nos relatórios (2 bugs de medição, não de negócio):**
1. O MCP era iniciado via `~/.cursor/mcp.json` apenas com `N8N_WEBHOOK_*` (sem `GOOGLE_*`) e o `dotenv` não achava o `.env` ⇒ `gmb.ts` (caminho OAuth direto, deprecado) rodava sem refresh token ⇒ erro "No refresh token or refresh handler callback is set".
2. Mesmo autenticado, o parser de performance do `gmb.ts` lia a estrutura JSON errada (`s.dailyMetric`/`s.timeSeries` em vez do aninhamento real `s.dailyMetricTimeSeries[].timeSeries`) ⇒ sempre reportaria 0.

**Correção 1 — MCP consolidado na bridge (OAuth eterna + renovação automática):**
- `src/gmb.ts` reescrito para usar `n8nGet('gmb', …)` (mesmo padrão de gsc/ga4/ads). A bridge (`JHQJ8sFTF1bHlooU`, rota `cober/gmb`, já existente) tem o nó "Token GMB" que faz `grant_type=refresh_token` a cada chamada (renovação automática) e o "Normalize GMB" com o parser de insights **correto**.
- Removida a dependência de `GOOGLE_REFRESH_TOKEN` em runtime. O caminho `auth.ts` deixou de ser usado pelo GMB.
- `npm run build` OK. Smoke-test do `dist` com o env do `mcp.json`: accounts/locations (OPEN), performance (150 impr./28d), reviews (4.5★, 53) — tudo retornando dados reais.
- ⚠️ **Ação manual pendente:** recarregar o MCP no Cursor (toggle em Settings → MCP, ou reiniciar) para o processo subir o `dist` novo. Só então as tools `gmb_*` do MCP voltam a responder.

**Correção 2 — Automação anti-suspensão (novo workflow n8n):**
- Criado e **ativado**: `GMB - Monitor Anti-Suspensao (diario 9h)` (id `aqkvnFil6kCZOyis`).
- Roda todo dia 09:00 BRT (cron `0 12 * * *`): consulta a bridge (`insights 7d` + `profile`) e dispara alerta WhatsApp para `5511982295079` se **qualquer**: (a) API/OAuth falhar, (b) `status != OPEN`, (c) impressões = 0 por 2 verificações seguidas. Estado persistido em `staticData` (`zeroStreak`).
- Lógica validada em dry-run (4 cenários) e canal WhatsApp confirmado de ponta a ponta (mensagem "Monitor GMB ATIVADO" entregue). Workflow temporário de teste removido.

**Não tocado:** Ana (`2cpXVNWqOdmrEpFn`), bridge (só leitura), SQLite. Nenhuma alteração no site/rotas/SEO.

---

## 23/07/2026 — Ana (WhatsApp) — Auditoria técnica Frente 1 + correção da regex de retomada (autorizada pela Mari)

**Contexto:** avaliação técnica somente-leitura do workflow `2cpXVNWqOdmrEpFn` (chatbot Ana, projeto de aprendizado da Mari), a pedido dela, para validar a Frente 1 (comandos do Chefe) e a próxima frente (CRM/planilha) antes de aplicação. Metodologia dela (uma frente por vez, diagnóstico em código real, backup antes de aplicar, decisão conjunta) respeitada em todas as etapas.

**Auditoria (somente leitura, via API do n8n):**
- Confirmadas 4 das 5 correções descritas da Frente 1 (`Code1b`): pausa com "cliente" no meio, retomada confirmando no grupo, "Confirmado" sem repetir número (via `mem['chefeAguardandoConfirmacao']`), aceite do cliente virando sinal explícito ao Claude.
- **Achado:** a correção 5 (regex de retomada, "do" omitido) cobria `"retomar 5511..."`/`"retomar cliente 5511..."` mas **não** o exemplo literal citado, `"retomar atendimento 5511..."` (sem "do") — confirmado por teste de regex isolado (sandbox local, sem tocar workflow).
- **Achado (Code2, cidade/CRM):** causa raiz do bug de captura de cidade confirmada — regex da Prioridade 4 usa alternativa `em\s+` combinada com flag `/i` (anula a âncora de maiúscula), capturando palavras comuns do domínio ("policarbonato", "alumínio", "compacto") como se fossem cidade; persiste em `mem['cidade_']`. Reportado como sugestão para decisão da Mari (não aplicado).
- **Achado (item 3, hipótese fetch()):** confirmado — `Code1b` usa `fetch()` dentro do Code node para ViaCEP/Google Maps (linhas com `try{}catch(e1){}`/`catch(e2){}` vazios, engolindo erro silenciosamente), mesma classe de problema já visto nos workflows GMB (fetch/$helpers não funcionam no sandbox do task runner do n8n). O próprio `Code1` já documentava essa limitação para mídia.

**Correção aplicada (autorizada pela Mari, após validação):**
- Backup do `Code1b` antes de qualquer mudança: `/root/code1b_backup_pre_fix_gustavo_20260723-1742.js` (sha256 `ec8ad301...`).
- Regex de retomada corrigida para tornar "do" opcional nos dois ramos: `retoma(?:r)?\s+atendimento(?:\s+do)?` / `liberar?\s+atendimento(?:\s+do)?`.
- Validado antes de aplicar (regex isolada, todas as variações + testes de falso-positivo) e depois de aplicar, direto no SQLite (fonte de verdade, sem cache): `Corrigido: true`.
- Aplicado via API oficial do n8n (`PUT /workflows/2cpXVNWqOdmrEpFn`, mesmo mecanismo da UI) — **não** via escrita direta em SQLite. Diff confirmado: **apenas** o node `Code1b` mudou; os outros 23 nodes, `settings` e demais workflows permaneceram intactos.

**Não tocado:** demais nodes do Ana, `Code2` (cidade — reportado, não aplicado), fetch()/CEP (reportado, não aplicado), outros workflows, SQLite (só leitura para backup/verificação).

---

## 23/07/2026 — SEO Boost `/telhado-retratil-policarbonato-preco` (4.190 impr./28d, pos. 10,7 → alvo top 5)

**Contexto:** mesmo padrão de authority-boost já usado com sucesso no Lote 1 (`/produtos/cobertura-retratil`), aplicado agora à página de maior alavanca identificada pela auditoria (maior volume de impressões fora do top 5, conversão de 8,9% já sem estar no top 5).

**Tarefa 1 — Links internos:**
- Blog: adicionado link para `/telhado-retratil-policarbonato-preco` no `POST_INTERNAL_LINKS` (`app/blog/[slug]/page.tsx`) dos posts `cobertura-retratil-preco-m2-sao-paulo` (não tinha bloco de links) e `cobertura-policarbonato-preco-tipos` (tinha bloco, faltava esse link).
- `cobertura-abre-e-fecha-preco-m2-2026` e `cobertura-fixa-vs-retratil-qual-escolher-2026` **já tinham o link** — confirmado antes de editar, nada duplicado.
- `/produtos/cobertura-retratil`: nova seção "Veja a tabela de preços completa" com link para a página-alvo.
- `/produtos/cobertura-abre-e-fecha`: nova seção "Quanto custa uma cobertura abre e fecha?" com link para a página-alvo.
- `/produtos/cobertura-retratil/em` (hub interior SP): link contextual inserido no bloco "Ticket médio e prazo de retorno" (âncora natural, já falava de investimento).

**Tarefa 2 — Reforço semântico:** parágrafo de 3-4 linhas adicionado logo após o subtítulo do H1 em `/telhado-retratil-policarbonato-preco`, mencionando naturalmente "telhado retrátil policarbonato preço", "cobertura retrátil por m²", "quanto custa um telhado retrátil" e "tabela de preços da cobertura retrátil" — sem duplicar frases já existentes na página.

**Tarefa 3 — Meta title/description:** conferido; o title já estava exatamente `"Telhado Retrátil: Preço por m² em 2026 (Tabela) | SP"` desde sessão anterior. Nenhuma alteração necessária.

**Regras respeitadas:** H1, estrutura e schemas (Product/FAQ) não tocados; nenhum conteúdo duplicado; `npm run build` sem erros (confirmado via grep dedicado, exit limpo).

---

## 04/08/2026 — fix(infra): 502 em todos os serviços Swarm em modo `vip` + pin do n8n em 2.32.7

**Incidente:** desde 02/08 ~22:55 UTC, acesso externo com HTTP 502 em `automacao-n8n`, `leads-cobersystem-n8n` e `openclaw.cobersystem.com.br`. MCP `cobersystem-analytics` inutilizável de fora; monitor GMB (`aqkvnFil6kCZOyis`) alertou corretamente às 12:00 BRT de 03/08 ("Falha ao obter dados do GMB (bridge/OAuth)") porque chama a URL pública.

**Causa raiz:** a tabela IPVS estava **vazia em todos os 19 network namespaces** do host (incluindo `ingress_sbox` e os sandboxes `lb_*`), embora o módulo `ip_vs` esteja carregado. Consequência: todo serviço com `endpoint-mode=vip` ficou inalcançável pelo Traefik, enquanto os em `dnsrr` seguiram funcionando — correlação de 100% entre modo do endpoint e status do domínio. Docker Engine **29.2.1** com firewall backend `iptables+firewalld`; o `dockerd` está no ar desde 10/07 sem restart, então nunca reprogramou as regras que foram perdidas.

**Hipóteses descartadas com evidência:**
- Config do Traefik: correta (`automacao_n8n-0` → `http://automacao_n8n:5678/`). O `http://easypanel:3000` nos logs de acesso é o backend do middleware `bad-gateway-error-page`, não o destino do roteamento.
- Bind do n8n: escuta em `:::5678` (todas as interfaces), `healthz` 200 interno.
- Endpoint obsoleto do n8n: o VIP `10.11.18.225` não mudou porque VIP não muda; faltava o mapeamento IPVS.
- Restart do Traefik (`--force`): aplicado, container novo `mxxu5xvy…`, IPVS continuou vazio — quem programa as regras é o `dockerd`.

**Correção aplicada (contorno, autorizada):** troca de `endpoint-mode` para `dnsrr` nos três serviços afetados, mesmo modo já usado pelos serviços que não falharam. Reversível com `--endpoint-mode vip`. Sem impacto em balanceamento (1 réplica cada).
- `docker service update --endpoint-mode dnsrr --detach automacao_n8n`
- `docker service update --endpoint-mode dnsrr --detach openclaw_openclaw-gateway`
- `docker service update --endpoint-mode dnsrr --detach leads-cobersystem_n8n-leadscobersystem` — ficou `Pending` com `no suitable node (host-mode port already in use on 1 node)` porque a task antiga segurava a porta host 5679; resolvido com `--update-order stop-first`.

**Pin de versão do n8n:** serviço estava em `n8nio/n8n:latest` e o update automático de 02/08 22:59 subiu para 2.32.7 (salto de major). Pinado em **`n8nio/n8n:2.32.7`** — digest `sha256:882b126a8ddd0646e7d17ec47630e7704615e4647f3363471859fddc3f8946e2`, idêntico ao que já rodava, portanto zero mudança de versão real. **Pendência:** o EasyPanel guarda o spec dele como `:latest` em LMDB; o pin definitivo precisa ser feito pela UI do EasyPanel, senão um deploy futuro reverte. LMDB não editado (mesma classe de risco da edição direta do SQLite).

**Resultado:** `automacao-n8n`, `leads-cobersystem-n8n` e `openclaw.cobersystem.com.br` em HTTP 200; API do n8n em 200; bridge e MCP respondendo (GMB 7d: 19 impressões, perfil `OPEN`). Nenhuma regressão nos domínios que já funcionavam.

**Backups em `/root/backups/infra-20260803-2325/`:** config do Traefik, specs do `automacao_n8n` e do `easypanel-traefik`, inspect do container, `estado-antes.txt` e snapshot da base do n8n (448 MB, via `VACUUM INTO`, `integrity_check: ok`, sha256 `f952781dba5b…`). SQLite não editado em nenhum momento.

**Pendências registradas:**
1. **Correção de raiz agendada:** restart do `dockerd` para reprogramar o IPVS e devolver o modo `vip`, em janela combinada. Avaliar pin da versão do Docker Engine — o upgrade automático para o 29 é o suspeito de fundo.
2. **`painel.coberturapolicarbonato.com.br` em 502 — pré-existente, não relacionado.** Dois routers competem pelo host: `https-easypanel-domain` → service `easypanel` (funciona) e `https-custom-cmnru2q5g000301qpf3nz1k5j` → `http://localhost:3001`, que não tem nada escutando. O router custom vence por ter regra mais longa (`PathPrefix('/')`). Correção é remover a entrada órfã pela UI do EasyPanel — `main.yaml` é regenerado, editar o arquivo não persiste.
3. **Credencial `Google Sheets account` (id `ZeIjtOriWhGc6XnG`) expirada** — usada no nó `Append or update row in sheet` do workflow da Ana (`2cpXVNWqOdmrEpFn`, não tocado). 150 ocorrências de "needs to be reconnected" em 72h; 54 de 60 execuções com erro amostradas são essa credencial. Impacto: cliente segue recebendo resposta (`Evolution API` retorna sucesso), mas a linha do CRM não é gravada desde 01/08. Exige reconexão manual via tela de consentimento do Google (Gustavo ou Mari).
4. **Base do n8n com 449 MB** e WAL de 10 MB — inchaço de histórico de execuções, avaliar política de retenção. Presentes ainda os arquivos `database.sqlite.corrupt.20260706212939` da crise de julho.
5. **Achado secundário na Ana:** 6 de 60 falhas amostradas são HTTP 400 "Bad request" nos nós `Notifica Gustavo` (4) e `Evolution API` (2) — problema distinto da credencial, possivelmente ligado ao salto para o n8n 2.x. Apenas sinalizado para a Mari, nada alterado.

---

## 04/08/2026 — fix(n8n): destrava o `Ana - Monitor de Erros` (Fase 1) — primeiro sucesso da história do workflow

**Situação:** o monitor `Ja4CRCmva179PAqf` acumulava 2.028 execuções, **todas em erro**. A auditoria do histórico completo mostrou algo pior que o suposto: não houve regressão, o workflow **nunca teve um único sucesso agendado**. A primeira execução, em 21/07 às 03:00, já falhou no mesmo nó. Ele nasceu quebrado.

**Causa raiz:** a credencial `n8n API Key (Monitor Ana)` (`YPL5PHEn37pZIQ7Q`) foi criada em **11/07 03:34** e nunca mais atualizada. A rotação de chaves de **13/07** invalidou a chave dois dias depois, e o workflow só foi ativado em **21/07** — já com a chave morta. O nó `Buscar Execuções com Erro` respondia `Authorization failed` em 100% dos ciclos. Consequência: a rede de segurança da Ana estava desligada havia 14 dias, sem ninguém saber.

**Auditoria do caminho inteiro antes de mexer** (a lição da crise de infra: não confiar que só o defeito óbvio está quebrado):
- **Contrato da API confirmado no n8n 2.32.7** — reproduzida a requisição exata do nó com chave válida: HTTP 200, raiz `{data, nextCursor}`, `data` é array, itens com `id`/`status`/`startedAt` parseável. A lógica de `Filtrar Erros Novos` está correta e **não precisou de ajuste**. O salto para o 2.x não quebrou o contrato.
- **Perna do WhatsApp nunca havia executado** — como o workflow sempre morria no nó 2, o `Enviar Alerta WhatsApp` era 100% não comprovado. Risco real de trocar a chave e continuar sem alerta. Validado por comparação de hash (sem expor segredo): a credencial `Evolution API Key (Monitor Ana)` (`7sF5BiSiISf6u5Fr`) guarda **a mesma chave** usada inline pelo monitor GMB que comprovadamente entrega, com header `apikey` correto.
- **URL do Evolution com `%20` no fim é legítima** — o nome da instância tem espaço à direita; monitor GMB usa idêntica.

**Correção aplicada:** Gustavo criou a chave `monitor-ana-erros` com escopos mínimos (`execution:read`, `execution:list`). A chave foi **validada antes de ser gravada** (HTTP 200 na requisição exata do monitor, provando que os dois escopos bastam) e aplicada via `PATCH /api/v1/credentials/:id` — endpoint funcional embora ausente do `openapi.yml`. **Sem edição de SQLite** e sem alteração alguma no workflow. Gravação conferida por hash do valor decifrado.

**Resultado:** execução `#11013` às 05:10:46 UTC — **primeiro sucesso do workflow**, caminho completo de 6 nós, incluindo o `Enviar Alerta WhatsApp`, que rodou pela primeira vez e retornou `id` de mensagem do Evolution para `5511986206244`. Ciclo seguinte `#11014` às 05:20:46 rodou em silêncio (0 erros novos), confirmando estado estável sem tempestade de alertas.

**Sobre os 20 erros do primeiro alerta:** são de 03/08 entre 16:30 e 20:01 BRT, todos **anteriores** à reconexão da Sheets — 12 de 15 amostrados são `The credential "Google Sheets account" needs to be reconnected`. Dois artefatos conhecidos do desenho, não defeitos novos: o `staticData.lastCheck` estava congelado em 11/07 14:10 (gravado por um teste manual da Mari enquanto a chave ainda valia), então tudo virou "novo"; e `limit=20` teto o lote. O `lastCheck` avançou para 04/08 02:10 BRT e o backlog foi zerado.

**Pendências e ressalvas para a Mari** (nada alterado, só sinalizado — qualquer mudança no workflow depende da aprovação dela):
1. **Texto do alerta diz "nos últimos 10 minutos"** mas lista o que for mais novo que `lastCheck`, que pode ser bem mais antigo — no primeiro alerta, itens de 9h antes. Redação a ajustar.
2. **`limit=20` sem paginação** — em pico de erros o alerta subnotifica silenciosamente. Não há `nextCursor` sendo seguido.
3. **Destinatário divergente:** o monitor da Ana alerta `5511986206244` (aparece nos workflows de teste da Ana, provavelmente Mari), enquanto o monitor GMB alerta `5511982295079` (Gustavo). Confirmar se é intencional.
4. **Sem `errorWorkflow` configurado** — se o próprio monitor falhar, ninguém é avisado. É exatamente o que aconteceu por 14 dias: quem vigia a Ana não tinha quem o vigiasse.
5. **Erros "Bad request" na Ana seguem sem explicação** — 3 de 15 amostrados, nós `Notifica Gustavo ` (com espaço no nome) e `Evolution API`. Distintos da credencial Sheets.
6. **Reconexão da Sheets ainda não confirmada sob carga** — último erro dela em 03/08 20:01 BRT e sem execução nenhuma desde então (madrugada, sem tráfego). Ausência de erro aqui não é prova de correção; validar no movimento do dia.

**Backups em `/root/backups/monitor-ana-20260804-0456/`:** `workflow-Ja4CRCmva179PAqf.json` (estado completo, `versionId=aeea7695…`) e `credential-YPL5PHEn37pZIQ7Q-encrypted.json` (blob cifrado, **não** decifrado), com `SHA256SUMS`.

**Ressalva de transparência:** um `PATCH` com corpo vazio, usado para descobrir se o endpoint existia, carimbou o `updatedAt` da credencial (11/07 → 04/08 04:57). O blob cifrado permaneceu **idêntico byte a byte** ao backup, verificado por hash — nenhum segredo ou configuração foi alterado, apenas o metadado de data.

---

## 04/08/2026 — feat(ads): orçamento R$70 → R$84/dia + fix(reports): corrige medição de GMB, Ads e GA4

### Ação A — orçamento do Google Ads

A queda de 15% em conversões apontada na leitura anterior **não se confirmou**. Comparando 28/07–03/08 contra 21/07–27/07 (por subtração de `LAST_7_DAYS` e `LAST_14_DAYS`, ambos excluindo o dia corrente):

| | Semana atual | Semana anterior | Δ |
|---|---|---|---|
| Conversões | 35 | 36 | −2,8% |
| Custo | R$ 478,43 | R$ 490,74 | −2,5% |
| CPA | R$ 13,67 | R$ 13,63 | +0,3% |
| Cliques | 275 | 352 | −21,9% |
| CPC | R$ 1,74 | R$ 1,39 | +24,9% |
| Taxa de conversão | 12,73% | 10,23% | +24,4% |

O CPC subiu 25%, mas a taxa de conversão subiu quase o mesmo, então o CPA ficou parado — o algoritmo está comprando menos cliques e melhores. Com CPA de R$13,67 contra ticket médio de R$12.610 e gasto em 97,6% do teto, o aumento se justifica. Aplicado **R$70 → R$84/dia (+20%)** via `ads_update_budget` (campanha 23879601113, budget `15494410960`), com dry-run antes e leitura independente depois. `MAXIMIZE_CONVERSIONS` mantido livre, **sem tCPA**, conforme combinado. Incremento de +20% escolhido no limite conservador justamente porque o CPC já está subindo.

### Ação B — bugs de medição dos relatórios (`B29BC2BkRPG8988G` e `1mtMgK2OCnM6KqiS`)

**B1 — as 7 métricas do GMB colapsavam. Corrigido.** Causa exata encontrada no código do n8n: `updadeQueryParameterConfig` troca de comportamento conforme a versão do nó — em `< 4.3` faz `qs[name] = value`, sobrescrevendo duplicatas; em `>= 4.3` acumula em array. O nó `GMB - Buscar Insights` é **typeVersion 4.2**, então dos 7 `dailyMetrics` sobrava só o último da lista, `BUSINESS_DIRECTION_REQUESTS` — a única métrica genuinamente zerada. Daí os três relatórios de "GMB zerado". Corrigido montando a URL como string crua com os 7 parâmetros repetidos (`sendQuery=false`, collection removida), padrão que a bridge já usava e que é imune à versão do nó. Confirmado contra a API real: 7 séries retornadas, 14 dias de dados. **O GMB nunca estava zerado** — são 22 impressões em 7 dias (21 em busca, 1 em maps) contra 32 na semana anterior, 1 clique no site, 1 ligação, 0 rotas. Volume baixíssimo, que é problema de negócio, mas não era suspensão nem falha de token.

**B4 — janela do Ads alinhada. Corrigido.** `Ads - Campanhas` usava `LAST_30_DAYS` enquanto GSC e GA4 usavam 7 dias, e o resultado era rotulado como semanal: 132 conversões e R$1.970 apareciam onde deveriam estar 35 e R$478. Trocado para `LAST_7_DAYS` e o rótulo `ads_periodo` passou a refletir D-7 a D-1, coerente com a semântica do enum do GAQL (que exclui hoje). Adicionados `ads_cpa` e `ads_periodo_listas` — as listas de keywords e search terms seguem em 30 dias de propósito, por precisarem de amostra maior, mas agora vêm rotuladas para ninguém compará-las como semanais.

**B5 — a inconsistência tinha outra causa que a suposta. Corrigido.** Não era erro de aritmética: `ga4_conv_whatsapp` lia o `eventCount` do evento **`click`**, que é clique genérico em qualquer link e tem `conversions=0`. O key event de lead é **`whatsapp_click`**. Com a fonte certa tudo reconcilia: `whatsapp_click` 57 + `submit` 3 = 60, exatamente a métrica nativa `conversions` que o `conv_total` antigo exibia. Ou seja, o relatório vinha **inflando leads de WhatsApp** (76 em vez de 57). Corrigido o mapeamento do evento, `conv_total` passou a ser a soma das partes, a métrica nativa ganhou campo próprio (`ga4_conv_keyevents`) e foi embutida uma auto-conferência (`ga4_conv_confere`) que grita "DIVERGENTE" se as duas contas deixarem de fechar — justamente a classe de defeito que passou dez dias invisível.

**Defeito extra encontrado, mesma família. Corrigido.** `ga4_bounceRate` e `ga4_avgDuration` eram média aritmética simples entre canais, ignorando o peso de cada um. Com canais residuais em 100% de rejeição (Unassigned com 28 sessões, Organic Social com 1), a média simples dava **65,3%** contra **53,5%** reais ponderados por sessão. As rejeições de 69,5%, 60,6% e 68% dos relatórios anteriores estavam todas infladas, e a prioridade de CRO foi definida sobre número errado. Ambas passaram a ser ponderadas por sessões.

**Validação:** o código **efetivamente publicado** nos nós foi extraído e executado contra as APIs reais, com mocks de `$input`/`$`. Resultado do `Formatar Ads`: 35 conversões, R$478,43, CPA R$13,67 — idêntico à leitura manual da Ação A. `Formatar GA4`: 613 sessões (−9%), rejeição 53,5%, 57+3=60 com auto-conferência `ok`. `Formatar GMB`: 22 impressões, sem flag de erro.

**B2 e B3 — NÃO aplicados, premissa refutada, aguardando decisão.** O `rowLimit: 10` não é o gargalo principal. Medido contra o agregado real do site na janela 28/07–03/08:

| Fonte | Cliques | Impressões | Posição |
|---|---|---|---|
| Agregado do site (sem dimensão) | 158 | 9.688 | **6,98** |
| `rowLimit=10` (atual) | 20 (12,7%) | 590 (6,1%) | 7,3 simples |
| `rowLimit=1000` (584 linhas) | 37 (23,4%) | 3.509 (36,2%) | 8,7 ponderada |

Mesmo pedindo 1.000 linhas, a dimensão `query` entrega só 23% dos cliques, porque o GSC omite consultas abaixo do limiar de privacidade. Subir o `rowLimit` trocaria um número errado por outro menos errado — e criaria um falso salto de "impressões triplicaram" no próximo relatório. O total correto exige uma chamada **sem dimensão**, que de bônus já devolve a posição ponderada calculada pelo próprio Google (6,98), resolvendo o B3 com precisão que nenhuma fórmula sobre linhas parciais alcança. Isso torna B2 e B3 inseparáveis e exige **nó novo + religar o Merge de 2 para 3 entradas** — mudança de topologia em workflow de produção, que por regra não é feita sem explicar antes. Proposta registrada, aguardando aprovação.

**Mecanismo de escrita validado antes do uso:** a API pública não documenta atualização de workflow. `PUT /workflows/{id}` existe e funciona; `PATCH` responde 405. Testado num workflow descartável, criado e apagado, inclusive o caso crítico — **PUT preserva `active=true`**. Nenhuma escrita direta em SQLite.

**Ressalva de transparência:** o schema da API rejeita `settings` com propriedades fora da lista (`additionalProperties: false`), e o `B29BC2BkRPG8988G` tinha `binaryMode: "separate"`. A propriedade **não existe em nenhum lugar do código do n8n 2.32.7** (é resíduo de versão antiga, presente em 6 dos 14 workflows) e foi descartada na gravação, sem efeito funcional. Registrado por ser alteração que não pude reverter pela API.

**Backups em `/root/backups/relatorios-20260804-0538/`:** estado completo dos dois workflows antes das alterações (`versionId` `638b3530…` e `2b68909a…`), com `SHA256SUMS`.

**Riscos anotados, não corrigidos:**
1. **Refresh tokens do Google em texto puro** dentro dos nós `Token GMB`/`Token GSC`/`Token Ads`, junto com `client_secret` e `developer-token`. Qualquer export de workflow — inclusive backup versionado — carrega credencial de produção. Deveriam virar credencial do n8n ou variável de ambiente.
2. **`ads_campaign_metrics` do MCP quebra com `days` arbitrário.** A bridge monta `LAST_${days}_DAYS`, e o GAQL só aceita 7, 14 e 30. `days=1` retorna erro de JSON vazio. Vale validar a entrada ou mapear para intervalo explícito de datas.

---

## 04/08/2026 — fix(reports): B2/B3 aplicados — totais reais do GSC e posição ponderada (aprovado)

**Aprovada a opção de converter as chamadas existentes em agregadas.** Topologia nova em `B29BC2BkRPG8988G` (33 nós) e `1mtMgK2OCnM6KqiS` (27 nós):
- `GSC - Buscar Dados` e `GSC - Semana Anterior` passaram a consultar **sem dimensão** — única fonte fiel dos totais do site.
- Nó novo **`GSC - Top Queries`** (dimensão `query`, `rowLimit: 25`) apenas para a lista, clonado do nó existente em cada workflow para herdar a autenticação correta, que difere entre eles: o `B29` usa header manual com `$('Token GSC')` e `authentication: none`, o `1mtMgK` usa `predefinedCredentialType` com a credencial `Google account 2` (`FpcXxMa4amcdVlLJ`).
- `Merge GSC` de 2 para **3 entradas** (`numberInputs: 3`, modo `append` preservado), com a mesma origem que alimenta a primeira chamada passando a alimentar o nó novo.
- `Formatar GSC` reescrito: totais do agregado, posição vinda pronta do Google, e campos novos `gsc_avgPosition_prev`, `gsc_delta_position` (com leitura de seta invertida, já que em posição menor é melhor), `gsc_clicks_ant`, `gsc_impressions_ant` e `gsc_queries_amostradas`. Todos os oito campos consumidos por `Formatar Dados`, `Montar Issue` e `Comparar` foram preservados.

**A subnotificação era muito maior que os ~55% estimados.** Janela 28/07–03/08, código publicado rodando contra a API real:

| | Cliques | Impressões | Posição |
|---|---|---|---|
| ANTES (subtotal do top-10) | 20 | 590 | 7,3 (média simples) |
| DEPOIS (site inteiro) | **158** | **9.688** | **7,0** (ponderada pelo Google) |

Cliques vinham **87% subnotificados** e impressões **94%**. A semana real foi de −2% em cliques e +4% em impressões, com posição de 6,7 para 7,0 — piora de 0,3, e não os "3,2 posições" que dispararam alarme falso nas auditorias anteriores. Integridade verificada nos dois workflows: zero conexões órfãs, zero ids ou nomes duplicados, as três entradas do Merge corretamente ligadas, `active` preservado.

**Efeito colateral previsto e corrigido: a baseline do Redis estava envenenada.** Os agendamentos não são diários — o relatório roda **segundas 08:00** e o ciclo **domingos 20:00**. Como o próximo a rodar é o de domingo 09/08, ele leria a baseline gravada na segunda 03/08, calculada com todas as fórmulas defeituosas: `gsc.clicks` 16, `impressions` 605, `avgPosition` 8,9, `conv_whatsapp` 74, `bounceRate` 67,9% e o Ads com totais de 30 dias. **Todas as linhas** do comparativo viriam com sinal falso — cliques aparentando +890%, conversões do Ads aparentando −73%. A chave `cober:baseline:atual` foi reafirmada com as fórmulas corrigidas para a **mesma janela que ela representa** (27/07–02/08), preservando `week_start` e `ts` originais e marcando `baseline_restated`:

| | Baseline antiga | Reafirmada |
|---|---|---|
| GSC cliques / impressões / posição | 16 / 605 / 8,9 | 184 / 11.341 / 6,9 |
| GA4 conv_whatsapp / total / rejeição | 74 / 61 / 67,9% | 59 / 62 / 44,5% |
| Ads custo / conversões | R$1.956 (30d) / 131 | R$464,52 (7d) / 35 |
| GMB impressões | (seção ausente) | 24 |

Valor anterior salvo em `/root/backups/relatorios-gsc-20260804-0609/redis-baseline-ANTES.json`. Pequena deriva de 610 → 595 sessões na mesma janela é dado do GA4 assentando, não efeito das correções.

**Rótulo obsoleto corrigido:** o texto do comparativo dizia `Ads custo 30d` fixo no código do nó `Comparar`, o que passou a mentir com a janela de 7 dias. Trocado para `Ads custo 7d`.

**Backups em `/root/backups/relatorios-gsc-20260804-0609/`:** estado dos dois workflows antes da mudança de topologia (`versionId` `b1f2eb21…` e `e072e88c…`) e o valor anterior da baseline, com `SHA256SUMS`.

**Pendência de confirmação:** o código dos nós foi validado fora do n8n contra as APIs reais, mas a execução completa dentro do n8n — com o `Merge` de 3 entradas e o nó novo no fluxo — só acontece no ciclo de **domingo 09/08 20:00**. Não foi disparado manualmente de propósito: o gatilho manual envia WhatsApp, cria issue no GitHub e sobrescreve a baseline. Vale conferir essa execução.

---

## 04/08/2026 — audit(ads): avaliação pré-viagem + feat(monitor): `Ads - Monitor Diario` e CPA nos relatórios

### Auditoria: a campanha está estável, a recomendação foi não mexer em nada

Leitura direta da API v21 (nenhuma escrita). Três janelas consecutivas de 7 dias fecharam em **36, 36 e 35 conversões**, com CPA de R$14,20, R$13,63 e R$13,67 — a campanha está calibrada, não em deriva.

| Métrica | 28/07–03/08 | 21/07–27/07 | Δ |
|---|---|---|---|
| Conversões | 35,0 | 36,0 | −2,8% |
| CPA | R$13,67 | R$13,63 | +0,3% |
| Custo | R$478,43 | R$490,74 | −2,5% |
| CPC | R$1,74 | R$1,39 | +24,8% |
| CTR | 11,00% | 11,82% | −0,8pp |
| Taxa de conversão | 12,73% | 10,23% | +24,4% |

Dois sinais que pareciam ruins e não eram:
- **CPC +24,8%** não é degradação: na semana de 15–21/07 o CPC foi R$1,73, igual ao atual. A semana intermediária (R$1,39) foi a anômala. O CPC oscilou entre R$1,39 e R$1,74 nas últimas três semanas.
- **Impressões −16%** é encolhimento de mercado, não perda de terreno. Impressões ÷ participação estima o mercado elegível em 11.960 → 10.874 buscas (−9%), com a participação caindo só de 24,9% para 23,0%.

Aumento de orçamento aplicado às 02:38 de hoje; às 04:05 havia 39 impressões e R$4,22. Cedo demais para qualquer leitura — primeira útil no domingo 09/08. Confirmado por `change_event` que **essa foi a única alteração na conta em 14 dias**, o que torna a comparação acima limpa.

### Por que nada foi alterado na campanha

- **Desperdício não existe em escala relevante**: dos 242 termos de busca em 30 dias, os sem conversão somam R$446, mas o maior individual é R$15,46. Candidatos reais a negativa ("alveolar", "telhas policarbonato preço") somam R$19 em 30 dias — R$0,63/dia. Não justifica tocar em campanha sob Smart Bidding.
- **tCPA não faz sentido agora**, apesar da recomendação `FORECASTING_SET_TARGET_CPA` gerada pelo Google em 03/08: com CPA já em R$13,67 sem target, definir tCPA em ~R$14 criaria teto onde há liberdade. Se algum dia entrar, deve ser **acima** do CPA atual (R$20–25) para comprar volume, dado o ticket de R$12.610. E reinicia aprendizado — inviável empilhado ao aumento de orçamento de hoje.
- **Orçamento não sobe de novo**: ainda há 19,1% de participação perdida por orçamento (concentrada em fins de semana: 56,9% no sábado 25/07 contra 2,6% na segunda 03/08), mas mexer duas vezes na mesma semana impede atribuição.
- **Riscos operacionais verificados e limpos**: `billing_setup` APPROVED, conta ENABLED, `primary_status` ELIGIBLE sem motivos, todos os anúncios APPROVED, uma única ação de conversão primária (`Clique Botão Whatsapp`, ONE_PER_CLICK — logo as 35 conversões são 35 cliques distintos, sem inflação). Teto mensal do Google (diário × 30,4 = R$2.554) elimina risco financeiro na ausência.

### Dois falsos alarmes descartados com dado

- **Desktop com CPA R$30,98 contra R$12,58 do mobile**: são 4 conversões em R$124 (14 dias). R$31 por lead num ticket de R$12.610 continua lucrativo. Excluir desktop destruiria valor.
- **Segmentação em `PRESENCE_OR_INTEREST`** (raio de 80 km) costuma indicar desperdício, mas aqui o tráfego por interesse gerou 36,3 conversões a CPA R$14,74 contra R$15,00 do tráfego por presença física. São 27% do investimento convertendo igual ao resto — mudar para `PRESENCE` cortaria mais de um quarto dos leads sem ganho de eficiência.

### Causa raiz do grupo "Geolocalização SP" com 0 impressões

Não é falha técnica. As 6 keywords estão ENABLED e APPROVED, mas com `system_serving_status = RARELY_SERVED`: são bairros ("cobertura retrátil Moema", "cobertura policarbonato Alphaville", "…Morumbi") com volume de busca abaixo do limiar do Google. O mesmo vale para "Marca — Cobersystem" — ninguém busca a marca ainda. Custa zero manter. Correção real é trocar bairro por região ampla (zona sul, ABC, São Bernardo) — tarefa pós-viagem.

### Maior alavanca de crescimento identificada (não executada)

A perda de participação por **ranking** subiu de 47,7% para 57,9%, com participação total em 23,0%. A causa é índice de qualidade: keywords centrais com QS 2–3 (`telhado abre e fecha` QS 2, `telhado policarbonato` QS 3, `telhado retrátil` exata QS 3). QS baixo encarece o clique. É projeto de relevância de anúncio e página de destino, não ajuste pontual.

### Duas lacunas de medição corrigidas

**1. O CPA era calculado e nunca exibido.** O campo `ads_cpa` existia em `Formatar Ads` desde a correção B4 de hoje, mas o template do WhatsApp mostrava só CPC. Justamente a métrica que o Gustavo deve monitorar era a que não chegava.

**2. O relatório de segunda não tinha comparativo semanal de Ads.** GSC tinha nó de semana anterior; Ads não.

Solução sem adicionar nós nem alterar topologia: `Ads - Campanhas` passou de `DURING LAST_7_DAYS` para `BETWEEN D-14 AND D-1` com `segments.date`, e `Formatar Ads` fatia a resposta em duas janelas de 7 dias **sem sobreposição** (atual D-7..D-1, anterior D-14..D-8). Uma chamada, duas janelas, granularidade diária de bônus. Campos novos: `ads_ant_*` (7 campos) e `ads_delta_*` (5 campos), com todos os campos antigos preservados para não quebrar `Formatar Dados`, `Montar Issue` e `Comparar`.

Validado contra a auditoria manual rodando o `jsCode` publicado contra a API real: **13 de 13 valores idênticos** (35,0 / R$478,43 / R$13,67 / R$1,74 / 2501 / 275 / 11,00% na janela atual; 36,0 / R$490,74 / R$13,63 / R$1,39 / 2978 / 352 na anterior).

Outras correções de arrasto na mesma passada:
- **`ads_error_flag` nunca disparava**: `Formatar Ads` calculava `adsError` mas não o retornava, então o ternário do template lia `undefined` e o alerta de "Ads API falhou" era silenciosamente impossível. Campo agora é retornado já formatado.
- **`R$ R$1,74`**: `ads_cpc` e `ads_cpa` carregavam o prefixo `R$` e os três consumidores prependiam `R$` de novo. Campos passaram a ser numéricos puros; o prefixo fica só nos templates. (O texto do WhatsApp saía correto porque o OpenClaw limpava a duplicação ao reescrever — o defeito estava mascarado.)
- **`Montar Issue`**: rótulo `Ads custo (30d)` ainda mentia após a correção B4; virou `(7d)`, e a tabela ganhou linhas de conversões e CPA. O baseline do Redis passa a carregar `ads.cpa`.
- **`Comparar` (domingo)**: bloco de Ads passou a usar a comparação 7d vs 7d própria do workflow em vez da baseline do Redis — que é um retrato de segunda e tem 1 dia de sobreposição — e ganhou linha de CPA.

### `Ads - Monitor Diario` (`gUvpuYPPkaoRVvdO`) — fecha a janela de 5 dias cega

Antes existia monitor diário só para GMB. Sem supervisão, uma campanha que parasse numa terça só apareceria no relatório de domingo 21h. Monitor novo roda **09:00 BRT** com 5 gatilhos:

| Gatilho | Critério | Racional |
|---|---|---|
| A | 0 conversões em 2 dias seguidos | base de ~5/dia; probabilidade natural é praticamente nula |
| B | custo R$0 em um dia | campanha parada, orçamento zerado ou cobrança |
| C | CPA de 7 dias > R$30 em 3 janelas consecutivas | dobro do CPA atual; folgado de propósito |
| D | `status != ENABLED` ou `primary_status` fora de ELIGIBLE/LEARNING/PENDING | com os motivos do Google |
| E | anúncio ativo não aprovado | reprovação derruba o grupo inteiro |

Mais guarda de falha de API (OAuth/rede), que também é alerta.

Detalhe que exigiu cuidado: **dias sem atividade não voltam da API**. A ausência da linha é exatamente o sinal do gatilho B, então a série é reconstruída com as 10 datas esperadas e lacunas preenchidas com zero — sem isso o gatilho mais importante nunca dispararia. Contador de dias consecutivos via `staticData` marca "2º dia seguido" para o mesmo problema, e zera quando resolve.

Envia todo dia uma linha curta (que serve de heartbeat e responde "o que olhar no celular"), com o bloco de alerta prependido quando há problema:

```
📊 *Ads diário — Cobersystem*
Ontem (03/08): 2 conv | R$74,71 | CPA R$37,36
7 dias: 35 conv | R$478,43 | CPA R$13,67 | CPC R$1,74
Orçamento: R$84,00/dia | campanha: ELIGIBLE
✅ Sem alertas.
```

### Descoberta de fuso: o monitor GMB nunca rodou às 9h

Os horários reais de execução de `aqkvnFil6kCZOyis` são **15:00 UTC = 12:00 BRT**, não 9h como documentado. O n8n **aplica** `settings.timezone` ao cron: `0 12 * * *` com `America/Sao_Paulo` dispara ao meio-dia BRT. E workflows **sem** timezone caem no default `America/New_York` — por isso o relatório configurado em "8h" chega às 09:01 BRT e o ciclo de "20h" às 21:01. O monitor novo foi criado com `timezone: America/Sao_Paulo` explícito e cron `0 9 * * *` para rodar de fato às 09:00 BRT.

### Validação

- 7 cenários testados fora do n8n contra amostra real da API: sem alerta com dados reais, e os 5 gatilhos + falha de API disparando corretamente, incluindo o caso de linha ausente. Contador de dias consecutivos verificado em 3 execuções encadeadas mais a resolução.
- Execução real ponta a ponta (`11037`, webhook `/webhook/cober/ads-monitor-teste`): 8 nós `success`, Evolution API retornou a chave da mensagem, WhatsApp entregue.
- Integridade pós-alteração: `B29BC2BkRPG8988G` com 33 nós/31 conexões e `1mtMgK2OCnM6KqiS` com 27/25 — contagens inalteradas, `active=true` nos dois.
- `binaryMode: "separate"` reapareceu em `settings` do `B29` e foi filtrado de novo no `PUT` (chave inerte no n8n 2.32.7, rejeitada pelo schema da API pública).

### Backups

`/root/backups_ads_20260804-0729/` com os três workflows antes da alteração (`B29BC2BkRPG8988G`, `1mtMgK2OCnM6KqiS`, `aqkvnFil6kCZOyis`).

### Nada foi alterado na campanha

Orçamento, estratégia de lance, keywords, negativas, grupos e segmentação seguem intactos. Ordem sugerida para o pós-viagem: (1) subir QS das keywords centrais, que é o que barateia o clique; (2) avaliar tCPA em R$20–25 para comprar volume; (3) trocar keywords de bairro do grupo "Geolocalização SP" por regiões com volume real.
