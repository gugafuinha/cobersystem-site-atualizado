'use client';

import { useState, useEffect } from 'react';

const VPS_IP = '72.60.136.68';
const PORT = '3002';
const BASE = `http://${VPS_IP}:${PORT}`;

type Status = 'pendente' | 'aprovado' | 'reprovado';

interface Item {
  id: string;
  etapa: string;
  titulo: string;
  descricao: string;
  arquivo: string;
  previewPath: string;
  mudancas: string[];
}

const ITENS: Item[] = [
  {
    id: 'landing-telhado-retratil',
    etapa: 'ETAPA 1 — Item 1',
    titulo: 'Nova landing page: /telhado-retratil-policarbonato-preco',
    descricao:
      'Query "telhado retrátil policarbonato preço" está na posição 2 com 50% CTR no GSC. Página dedicada com tabela de preços por m², FAQ e CTAs para WhatsApp e formulário.',
    arquivo: 'app/telhado-retratil-policarbonato-preco/page.tsx',
    previewPath: '/telhado-retratil-policarbonato-preco',
    mudancas: [
      'Criação de nova página (não existia antes)',
      'Metadata title: "Telhado Retrátil Policarbonato Preço 2026 | Tabela m² | Cobersystem SP"',
      'Tabela de preços: compacto R$800-1.200/m², alveolar R$1.000-1.500/m², automação +R$250/m²',
      'FAQ com 6 perguntas frequentes (rich snippets)',
      'CTA duplo: WhatsApp + formulário',
      'Schema JSON-LD Product',
    ],
  },
  {
    id: 'orcamento-mobile',
    etapa: 'ETAPA 1 — Item 2',
    titulo: 'Correção /orcamento — mobile e rastreamento',
    descricao:
      '/orcamento tem 68,7% de taxa de rejeição com 0m30s de sessão em 243 sessões (78% mobile). Causa: formulário abaixo do dobra na tela. Corrigido: form aparece imediatamente, hero compacto, sticky CTA mobile, tracking correto.',
    arquivo: 'app/orcamento/page.tsx',
    previewPath: '/orcamento',
    mudancas: [
      'Hero section: py-16 → py-8 md:py-16 (reduz altura no mobile)',
      'Reordenação: cards de benefícios movidos para APÓS o formulário no mobile (order-last)',
      'Sticky CTA mobile: botão fixo na base da tela em mobile (oculto no desktop)',
      'Fix de rastreamento: trackGoogleAdsConversion(\'lGDsCLD1opAYEM2d24Mp\') → CONVERSION_LABELS.FORM_SUBMIT',
      'Adicionado aria-label no botão de submit para acessibilidade',
    ],
  },
  {
    id: 'meta-abre-e-fecha',
    etapa: 'ETAPA 1 — Item 3',
    titulo: 'Correção meta: /servicos/cobertura-abre-e-fecha',
    descricao:
      'Query "cobertura abre e fecha policarbonato" está na pos. 11,8 com 7,1% CTR em 14 impressões. Title e description atualizados para incluir sinal de preço e automação.',
    arquivo: 'app/servicos/cobertura-abre-e-fecha/page.tsx',
    previewPath: '/servicos/cobertura-abre-e-fecha',
    mudancas: [
      'Title anterior: "Cobertura Abre e Fecha | Automação Alexa + Sensor Chuva | Cobersystem SP"',
      'Title novo: "Cobertura Abre e Fecha Policarbonato | Preço m² + Automação Alexa | Cobersystem SP"',
      'Description anterior: 160 chars sem menção de preço',
      'Description nova: inclui "a partir de R$ 800/m²", sensor de chuva, Alexa e CTA claro',
    ],
  },
  // ── ETAPA 2 — Itens desta sessão ───────────────────────────────────────
  {
    id: 'tracking-beacon',
    etapa: 'ETAPA 2 — Item 1A',
    titulo: 'Fix: beacon transport + delay navegação WhatsApp',
    descricao:
      'R$ 335 investidos em Ads com 0 conversões rastreadas. Causa: evento gtag era abortado antes de chegar ao servidor quando usuário clicava no WhatsApp (target="_blank"). Corrigido com transport_type: "beacon" e delay de 300ms.',
    arquivo: 'components/WhatsAppButton.tsx + components/GoogleAds.tsx',
    previewPath: '/',
    mudancas: [
      'GoogleAds.tsx: adicionado transport_type: "beacon" no trackGoogleAdsConversion',
      'WhatsAppButton.tsx: handleClick agora usa e.preventDefault() + setTimeout(300ms) quando sendBeacon não está disponível',
      'Garantia de envio do hit antes da navegação para nova aba',
    ],
  },
  {
    id: 'titulos-seo',
    etapa: 'ETAPA 2 — Item 2',
    titulo: 'Correção de 6 títulos/descriptions (CTR baixo no GSC)',
    descricao:
      '"cobersystem" pos.2 com CTR 0%, "cobertura automática" pos.11 com CTR 0%, "cobertura acústica" pos.40 com CTR 0%. Títulos atualizados para incluir keywords diretas e CTAs.',
    arquivo: 'app/page.tsx + 4 páginas de serviço',
    previewPath: '/servicos/cobertura-retratil-automatizada',
    mudancas: [
      'Homepage: "Cobersystem | Coberturas Retráteis em Policarbonato SP | Orçamento Grátis"',
      '/cobertura-retratil-automatizada: "Cobertura Automática Retrátil | Alexa, Sensor de Chuva e App | Cobersystem SP"',
      '/cobertura-abre-e-fecha: "Cobertura Abre e Fecha | Acessos, Corredores e Varandas | Cobersystem SP"',
      '/cobertura-termoacustica: "Cobertura Acústica Termoacústica | Redução de Ruído 30dB | Cobersystem SP"',
      '/cobertura-retratil: keywords "cobertura de policarbonato retrátil" adicionadas',
    ],
  },
  {
    id: 'jardim-de-inverno',
    etapa: 'ETAPA 2 — Item 3a',
    titulo: 'Nova página: /servicos/cobertura-jardim-de-inverno',
    descricao:
      '"cobertura jardim de inverno" tem ~1.000–3.000 buscas/mês em SP sem concorrência interna. Página com tabela comparativa policarbonato vs vidro, tipos (4mm/6mm/alveolar), FAQ e CTAs.',
    arquivo: 'app/servicos/cobertura-jardim-de-inverno/page.tsx',
    previewPath: '/servicos/cobertura-jardim-de-inverno',
    mudancas: [
      'Criação de nova página dedicada',
      'Tabela comparativa: Policarbonato vs Vidro (7 características)',
      'Seção de tipos: Compacto 4mm, Compacto 6mm, Alveolar 6mm com preços',
      'FAQ: 5 perguntas frequentes sobre jardim de inverno',
      'IMAGENS: 2 placeholders marcados com TODO para inserção manual',
      'Schema JSON-LD Product com preço, returnPolicy e shippingDetails',
    ],
  },
  {
    id: 'pergolado',
    etapa: 'ETAPA 2 — Item 3b',
    titulo: 'Nova página: /servicos/cobertura-pergolado',
    descricao:
      '"cobertura para pergolado" apareceu como keyword de Ads com 5 cliques e R$ 9,92 de custo real — intenção confirmada. Página com sistemas fixo e retrátil, processo de instalação e galeria.',
    arquivo: 'app/servicos/cobertura-pergolado/page.tsx',
    previewPath: '/servicos/cobertura-pergolado',
    mudancas: [
      'Criação de nova página dedicada',
      'Dois sistemas: Retrátil (R$ 1.200/m²) e Fixo (R$ 800/m²)',
      'Timeline de instalação em 4 etapas',
      'FAQ: 5 perguntas frequentes sobre pergolado',
      'IMAGENS: 4 placeholders marcados com TODO para inserção manual',
      'Schema JSON-LD Product',
    ],
  },
  {
    id: 'cidades-guarulhos-barueri',
    etapa: 'ETAPA 2 — Item 4',
    titulo: 'Novas páginas de cidade: Guarulhos e Barueri/Alphaville',
    descricao:
      'Guarulhos (1,4M hab.) e Barueri/Alphaville (alto padrão) adicionados nos 4 produtos: cobertura retrátil, abre e fecha, policarbonato e termoacústica. Total: 8 novas páginas geradas automaticamente.',
    arquivo: '4 arquivos lib/*-cidades.ts',
    previewPath: '/produtos/cobertura-retratil/em/guarulhos',
    mudancas: [
      '/produtos/cobertura-retratil/em/guarulhos',
      '/produtos/cobertura-retratil/em/barueri',
      '/produtos/cobertura-abre-e-fecha/em/guarulhos',
      '/produtos/cobertura-abre-e-fecha/em/barueri',
      '/produtos/cobertura-policarbonato/em/guarulhos',
      '/produtos/cobertura-policarbonato/em/barueri',
      '/produtos/cobertura-termoacustica/em/guarulhos',
      '/produtos/cobertura-termoacustica/em/barueri',
    ],
  },
];

const ETAPA2_PLANO = [
  {
    titulo: '4. Melhorias no workflow do relatório semanal',
    itens: [
      'Separar GSC em 2 nós: queries (top 10 com cliques/impr/CTR/pos) + pages (top 5)',
      'GA4: adicionar segundo dateRange (semana anterior) para comparativo +/- vs semana atual',
      'Formatar GSC: gerar tabela top 10 queries formatada para WhatsApp',
      'Formatar GA4: extrair delta sessões e taxa de rejeição vs semana anterior',
      'Prompt OpenClaw: gerar lista numerada por impacto com prazo (hoje / esta semana / este mês)',
      'Prompt OpenClaw: separar conversões WhatsApp vs formulário vs ligação',
    ],
  },
  {
    titulo: '5. Evento WhatsApp como conversão GA4 e Google Ads',
    itens: [
      'Verificar se cliques no WhatsAppButton disparam trackGoogleAdsConversion(CONVERSION_LABELS.WHATSAPP_CLICK)',
      'Verificar se o evento "click" (95 ocorrências no GA4) inclui cliques WhatsApp',
      'Criar conversão dedicada "whatsapp_click" no GA4 como evento de conversão',
      'Garantir que CONVERSION_LABELS.WHATSAPP_CLICK está sendo enviado em todos os pontos de toque',
    ],
  },
];

function StatusBadge({ status }: { status: Status }) {
  const styles: Record<Status, string> = {
    pendente: 'bg-yellow-100 text-yellow-800 border border-yellow-300',
    aprovado: 'bg-green-100 text-green-800 border border-green-300',
    reprovado: 'bg-red-100 text-red-800 border border-red-300',
  };
  const labels: Record<Status, string> = {
    pendente: '⏳ Pendente',
    aprovado: '✅ Aprovado',
    reprovado: '❌ Reprovado',
  };
  return (
    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${styles[status]}`}>
      {labels[status]}
    </span>
  );
}

export default function RevisaoPage() {
  const [statuses, setStatuses] = useState<Record<string, Status>>({});

  useEffect(() => {
    try {
      const saved = localStorage.getItem('revisao-statuses');
      if (saved) setStatuses(JSON.parse(saved));
    } catch {}
  }, []);

  const setStatus = (id: string, status: Status) => {
    const next = { ...statuses, [id]: status };
    setStatuses(next);
    try { localStorage.setItem('revisao-statuses', JSON.stringify(next)); } catch {}
  };

  const getStatus = (id: string): Status => statuses[id] || 'pendente';

  const aprovados = ITENS.filter((i) => getStatus(i.id) === 'aprovado').length;
  const reprovados = ITENS.filter((i) => getStatus(i.id) === 'reprovado').length;
  const pendentes = ITENS.length - aprovados - reprovados;

  return (
    <main className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-8 border-b border-gray-800 pb-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">🔍</span>
            <h1 className="text-3xl font-bold">Painel de Revisão</h1>
            <span className="text-sm bg-blue-900 text-blue-200 px-2 py-1 rounded">
              Cobersystem — Dev local
            </span>
          </div>
          <p className="text-gray-400 text-sm">
            Revise cada alteração e aprove ou reprove antes do build e deploy.
            As alterações já estão implementadas no código local — o deploy só acontece após aprovação total.
          </p>

          {/* Progresso */}
          <div className="flex gap-4 mt-4">
            <div className="bg-green-900/40 border border-green-700 rounded-lg px-4 py-2 text-center">
              <div className="text-2xl font-bold text-green-400">{aprovados}</div>
              <div className="text-xs text-green-300">Aprovados</div>
            </div>
            <div className="bg-yellow-900/40 border border-yellow-700 rounded-lg px-4 py-2 text-center">
              <div className="text-2xl font-bold text-yellow-400">{pendentes}</div>
              <div className="text-xs text-yellow-300">Pendentes</div>
            </div>
            <div className="bg-red-900/40 border border-red-700 rounded-lg px-4 py-2 text-center">
              <div className="text-2xl font-bold text-red-400">{reprovados}</div>
              <div className="text-xs text-red-300">Reprovados</div>
            </div>
            <div className="ml-auto flex items-center">
              {aprovados === ITENS.length ? (
                <div className="bg-green-600 text-white px-4 py-2 rounded-lg font-bold text-sm">
                  🚀 Todos aprovados — pronto para deploy!
                </div>
              ) : (
                <div className="text-gray-500 text-sm">
                  {ITENS.length - aprovados} item(s) pendente(s) de aprovação
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ETAPA 1 */}
        <h2 className="text-xl font-bold text-blue-400 mb-4">ETAPA 1 — Ações no site</h2>
        <div className="space-y-6 mb-10">
          {ITENS.map((item) => {
            const status = getStatus(item.id);
            return (
              <div
                key={item.id}
                className={`rounded-xl border p-6 ${
                  status === 'aprovado'
                    ? 'border-green-700 bg-green-950/30'
                    : status === 'reprovado'
                    ? 'border-red-700 bg-red-950/30'
                    : 'border-gray-700 bg-gray-900'
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <div className="text-xs text-gray-500 font-mono mb-1">{item.etapa}</div>
                    <h3 className="text-lg font-bold">{item.titulo}</h3>
                  </div>
                  <StatusBadge status={status} />
                </div>

                <p className="text-gray-300 text-sm mb-4">{item.descricao}</p>

                <div className="mb-4">
                  <div className="text-xs text-gray-500 font-semibold uppercase mb-2">
                    Mudanças implementadas
                  </div>
                  <ul className="space-y-1">
                    {item.mudancas.map((m, i) => (
                      <li key={i} className="text-sm text-gray-300 flex gap-2">
                        <span className="text-blue-400 mt-0.5">→</span>
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center gap-3 flex-wrap">
                  <a
                    href={`${BASE}${item.previewPath}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-700 hover:bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
                  >
                    👁 Visualizar prévia →
                  </a>
                  <span className="text-gray-600 text-xs font-mono">{item.arquivo}</span>
                  <div className="ml-auto flex gap-2">
                    <button
                      onClick={() => setStatus(item.id, 'aprovado')}
                      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                        status === 'aprovado'
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-800 text-gray-300 hover:bg-green-900 hover:text-green-300'
                      }`}
                    >
                      ✅ Aprovar
                    </button>
                    <button
                      onClick={() => setStatus(item.id, 'reprovado')}
                      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                        status === 'reprovado'
                          ? 'bg-red-600 text-white'
                          : 'bg-gray-800 text-gray-300 hover:bg-red-900 hover:text-red-300'
                      }`}
                    >
                      ❌ Reprovar
                    </button>
                    {status !== 'pendente' && (
                      <button
                        onClick={() => setStatus(item.id, 'pendente')}
                        className="px-3 py-2 rounded-lg text-xs text-gray-500 hover:text-gray-300 transition-colors"
                      >
                        ↩ Resetar
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ETAPA 2 */}
        <h2 className="text-xl font-bold text-purple-400 mb-4">ETAPA 2 — Plano (aguardando aprovação)</h2>
        <div className="space-y-4 mb-10">
          {ETAPA2_PLANO.map((bloco, bi) => (
            <div key={bi} className="rounded-xl border border-gray-700 bg-gray-900 p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs bg-purple-900 text-purple-200 px-2 py-1 rounded font-mono">
                  Plano — aguarda confirmação
                </span>
                <h3 className="text-base font-bold">{bloco.titulo}</h3>
              </div>
              <ul className="space-y-1">
                {bloco.itens.map((item, ii) => (
                  <li key={ii} className="text-sm text-gray-300 flex gap-2">
                    <span className="text-purple-400 mt-0.5">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-800 pt-4 text-xs text-gray-600 flex justify-between">
          <span>Servidor local: {BASE}</span>
          <span>Produção: coberturapolicarbonato.com.br (Vercel)</span>
        </div>
      </div>
    </main>
  );
}
