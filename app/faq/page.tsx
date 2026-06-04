'use client';

import { useEffect, useMemo, useState } from 'react';
import Breadcrumb from '@/components/seo/Breadcrumb';
import StructuredData from '@/components/seo/StructuredData';

const faqs = [
  {
    id: 1,
    categoria: 'Geral',
    pergunta: 'Quanto tempo demora para receber o orçamento?',
    resposta:
      'Nosso prazo de resposta é de até 24 horas úteis. Em casos urgentes, você pode entrar em contato diretamente via WhatsApp (11) 94361-5079 para agilizar o atendimento.',
  },
  {
    id: 2,
    categoria: 'Geral',
    pergunta: 'Atendem em quais regiões?',
    resposta:
      'Atendemos toda a Grande São Paulo (Capital, Zona Leste, Zona Sul, Zona Norte, Zona Oeste) e região metropolitana (Guarulhos, Osasco, ABC, Barueri, etc.). Para cidades mais distantes, consulte disponibilidade.',
  },
  {
    id: 3,
    categoria: 'Geral',
    pergunta: 'A visita técnica é cobrada?',
    resposta:
      'Não! A visita técnica para medição e elaboração do projeto é 100% gratuita e sem compromisso. Só cobramos após aprovação do orçamento e contratação do serviço.',
  },
  {
    id: 4,
    categoria: 'Produtos',
    pergunta: 'Qual a diferença entre cobertura retrátil e fixa?',
    resposta:
      'A cobertura fixa é permanente, instalada de forma definitiva. A cobertura retrátil abre e fecha, permitindo controlar quando quer proteção ou céu aberto. A retrátil custa cerca de 60-80% mais que a fixa, mas oferece flexibilidade total.',
  },
  {
    id: 5,
    categoria: 'Produtos',
    pergunta: 'Policarbonato alveolar ou compacto: qual escolher?',
    resposta:
      'Alveolar (com câmaras de ar) é mais leve, econômico e tem melhor isolamento térmico - ideal para garagens e áreas de serviço. Compacto é 100% transparente tipo vidro, mais resistente a impactos, ideal para piscinas e varandas onde transparência total importa.',
  },
  {
    id: 6,
    categoria: 'Produtos',
    pergunta: 'A cobertura bloqueia raios UV?',
    resposta:
      'Sim! Nosso policarbonato tem camada de proteção UV que bloqueia 99% dos raios UVA e UVB. Isso protege pessoas, móveis e veículos sem perder a luminosidade natural.',
  },
  {
    id: 7,
    categoria: 'Produtos',
    pergunta: 'Cobertura termoacústica realmente reduz o barulho da chuva?',
    resposta:
      'Sim! A telha termoacústica sanduíche bloqueia cerca de 95% do ruído da chuva (redução de 25-35 decibéis). Você consegue conversar normalmente mesmo em chuva forte.',
  },
  {
    id: 8,
    categoria: 'Produtos',
    pergunta: 'A automação via Alexa funciona mesmo?',
    resposta:
      'Funciona perfeitamente! Basta dar comando de voz "Alexa, abrir cobertura" ou "Alexa, fechar cobertura". Também integramos com Google Home e controle via app no smartphone.',
  },
  {
    id: 9,
    categoria: 'Instalação',
    pergunta: 'Quanto tempo demora a instalação?',
    resposta:
      'Cobertura fixa: 2 a 4 dias. Cobertura retrátil: 3 a 5 dias. Projetos maiores (acima de 50m²) podem levar até 7 dias. Trabalhamos de segunda a sexta, das 8h às 18h, e sábados até 13h.',
  },
  {
    id: 10,
    categoria: 'Instalação',
    pergunta: 'Precisa quebrar paredes ou fazer obra?',
    resposta:
      'Não! A instalação é clean, sem quebra de paredes. Fazemos apenas furos para fixação da estrutura. No final do dia, limpamos tudo e você pode usar o espaço normalmente.',
  },
  {
    id: 11,
    categoria: 'Instalação',
    pergunta: 'Posso usar a área durante a instalação?',
    resposta:
      'Depende do tipo de cobertura. Para coberturas fixas pequenas, geralmente sim. Para retráteis ou projetos maiores, recomendamos evitar usar a área por segurança durante os 2-3 primeiros dias.',
  },
  {
    id: 12,
    categoria: 'Instalação',
    pergunta: 'Precisa de aprovação do condomínio?',
    resposta:
      'Para apartamentos e condomínios, SIM, sempre precisa aprovação prévia. Fornecemos toda documentação necessária (projeto técnico, memorial descritivo) e orientamos no processo sem custo adicional. Aprovação leva em média 15-30 dias.',
  },
  {
    id: 13,
    categoria: 'Pagamento',
    pergunta: 'Quais as formas de pagamento?',
    resposta:
      'Aceitamos: (1) À vista com desconto de 5-10% via PIX ou boleto, (2) Parcelado: entrada de 30% + saldo em até 6x sem juros no cartão, (3) Parcelado via boleto: entrada 40% + até 4x.',
  },
  {
    id: 14,
    categoria: 'Pagamento',
    pergunta: 'Quando devo pagar?',
    resposta:
      'Entrada de 30-40% na assinatura do contrato (antes da instalação). Restante parcelado durante e após conclusão da obra. Última parcela só após vistoria final e aprovação do cliente.',
  },
  {
    id: 15,
    categoria: 'Pagamento',
    pergunta: 'O orçamento tem validade?',
    resposta:
      'Sim, nossos orçamentos têm validade de 30 dias. Após esse prazo, devido à variação de preços de materiais, precisamos revalidar os valores.',
  },
  {
    id: 16,
    categoria: 'Garantia',
    pergunta: 'Qual a garantia oferecida?',
    resposta:
      'Garantimos 2 anos para estrutura, instalação e materiais (policarbonato, telhas, automação). Isso cobre defeitos de fabricação e instalação. Problemas causados por mau uso ou fenômenos naturais extremos não estão cobertos.',
  },
  {
    id: 17,
    categoria: 'Garantia',
    pergunta: 'Qual a vida útil da cobertura?',
    resposta:
      'Policarbonato: 15-20 anos. Estrutura de alumínio: 30+ anos. Telha termoacústica: 30-40 anos. Sistema retrátil (motor e mecanismo): 10-15 anos com manutenção adequada.',
  },
  {
    id: 18,
    categoria: 'Garantia',
    pergunta: 'Precisa fazer manutenção?',
    resposta:
      'Sim, mas é simples: limpeza com água e detergente neutro a cada 3-6 meses, verificação de parafusos anualmente, lubrificação de trilhos (retrátil) semestralmente. Fornecemos manual completo de manutenção.',
  },
  {
    id: 19,
    categoria: 'Garantia',
    pergunta: 'E se der problema depois da garantia?',
    resposta:
      'Continuamos oferecendo suporte técnico mesmo após os 2 anos de garantia. Cobramos apenas mão de obra e peças de reposição se necessário. Temos peças disponíveis e equipe treinada.',
  },
  {
    id: 20,
    categoria: 'Garantia',
    pergunta: 'A cobertura resiste a granizo e vendaval?',
    resposta:
      'Sim! Nosso policarbonato resiste a granizo de até 3cm e ventos de até 100 km/h. A estrutura é dimensionada seguindo normas técnicas (NBR) para suportar cargas de vento e chuva da região.',
  },
] as const;

const categorias = [
  'Todas',
  'Geral',
  'Produtos',
  'Instalação',
  'Pagamento',
  'Garantia',
] as const;

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.pergunta,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.resposta,
    },
  })),
};

export default function FAQPage() {
  const [busca, setBusca] = useState('');
  const [categoriaFiltro, setCategoriaFiltro] =
    useState<(typeof categorias)[number]>('Todas');
  const [aberto, setAberto] = useState<number | null>(null);

  const faqsFiltrados = useMemo(() => {
    const q = busca.trim().toLowerCase();
    return faqs.filter((faq) => {
      const matchBusca =
        !q ||
        faq.pergunta.toLowerCase().includes(q) ||
        faq.resposta.toLowerCase().includes(q);
      const matchCategoria =
        categoriaFiltro === 'Todas' || faq.categoria === categoriaFiltro;
      return matchBusca && matchCategoria;
    });
  }, [busca, categoriaFiltro]);

  useEffect(() => {
    if (aberto !== null && !faqsFiltrados.some((f) => f.id === aberto)) {
      setAberto(null);
    }
  }, [faqsFiltrados, aberto]);

  return (
    <>
      <StructuredData data={faqSchema} />
      <Breadcrumb />

      <main className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Perguntas Frequentes
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Tire todas as suas dúvidas sobre coberturas em policarbonato
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="mb-6">
              <label htmlFor="busca" className="block text-sm font-semibold mb-2">
                Buscar pergunta
              </label>
              <input
                type="search"
                id="busca"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                placeholder="Digite sua dúvida..."
                autoComplete="off"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div
              className="flex flex-wrap gap-2"
              role="group"
              aria-label="Filtrar por categoria"
            >
              {categorias.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategoriaFiltro(cat)}
                  aria-pressed={categoriaFiltro === cat}
                  className={`px-4 py-2 rounded-full font-medium transition-colors ${
                    categoriaFiltro === cat
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="mt-4 text-sm text-gray-600" aria-live="polite">
              {faqsFiltrados.length}{' '}
              {faqsFiltrados.length === 1
                ? 'pergunta encontrada'
                : 'perguntas encontradas'}
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 pb-16">
          <div className="space-y-4">
            {faqsFiltrados.map((faq) => {
              const expandido = aberto === faq.id;
              const panelId = `faq-panel-${faq.id}`;
              const triggerId = `faq-trigger-${faq.id}`;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-lg shadow border border-gray-100 overflow-hidden"
                >
                  <h2 className="text-base font-semibold m-0">
                    <button
                      type="button"
                      id={triggerId}
                      aria-expanded={expandido}
                      aria-controls={panelId}
                      onClick={() => setAberto(expandido ? null : faq.id)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors gap-4"
                    >
                      <span className="min-w-0">
                        <span className="text-xs text-blue-600 font-semibold block mb-1">
                          {faq.categoria}
                        </span>
                        <span className="font-semibold text-gray-900 block">
                          {faq.pergunta}
                        </span>
                      </span>
                      <span
                        className={`shrink-0 transition-transform text-gray-500 ${
                          expandido ? 'rotate-180' : ''
                        }`}
                        aria-hidden
                      >
                        ▼
                      </span>
                    </button>
                  </h2>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={triggerId}
                    hidden={!expandido}
                    className={expandido ? 'px-6 pb-4 text-gray-700 border-t pt-4' : ''}
                  >
                    {expandido ? faq.resposta : null}
                  </div>
                </div>
              );
            })}

            {faqsFiltrados.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                <div className="text-4xl mb-4" aria-hidden>
                  🔍
                </div>
                <div className="text-lg font-semibold mb-2">
                  Nenhuma pergunta encontrada
                </div>
                <p>Tente buscar com outras palavras ou limpe os filtros.</p>
              </div>
            )}
          </div>
        </section>

        <section className="bg-blue-600 text-white py-16">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold mb-4">Não Encontrou Sua Dúvida?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Fale diretamente com nosso time via WhatsApp!
            </p>
            <a
              href="https://wa.me/5511943615079?text=Olá!%20Tenho%20uma%20dúvida%20sobre%20coberturas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              💬 Falar no WhatsApp
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
