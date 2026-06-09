/** Tabela de preços oficial Cobersystem — fonte única para páginas de serviço */

export type PriceRange = {
  min: number;
  max: number;
};

export type PricingKey =
  | 'abreEFecha'
  | 'fixaAlveolar'
  | 'fixaCompacto'
  | 'retratilAutomatizada';

export const COBERSYSTEM_PRICING: Record<
  PricingKey,
  PriceRange & { label: string }
> = {
  abreEFecha: { min: 800, max: 1200, label: 'Cobertura Abre e Fecha' },
  fixaAlveolar: { min: 600, max: 900, label: 'Cobertura Fixa Alveolar' },
  fixaCompacto: { min: 800, max: 1200, label: 'Cobertura Fixa Compacto' },
  retratilAutomatizada: {
    min: 1200,
    max: 1600,
    label: 'Cobertura Retrátil Automatizada',
  },
};

export const AUTOMATION_PRICING = {
  controleRemoto: { label: 'Controle Remoto', price: 2500 },
  alexa: { label: 'Comando por Alexa', price: 3000 },
  sensorChuva: { label: 'Sensor de Chuva', price: 4000 },
} as const;

export const PRICE_ESTIMATE_NOTE =
  '* Valores estimados. O preço final pode variar conforme complexidade da estrutura, distância e condições do local. Solicite seu orçamento personalizado.';

const brl = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export function formatBRL(value: number): string {
  return brl.format(value);
}

export function formatPriceRange(range: PriceRange): string {
  return `${formatBRL(range.min)} – ${formatBRL(range.max)}`;
}

export function formatPricePerM2(range: PriceRange): string {
  return `${formatPriceRange(range)}/m²`;
}

export function getPricing(key: PricingKey): PriceRange & { label: string } {
  return COBERSYSTEM_PRICING[key];
}

export function schemaMinPrice(key: PricingKey): string {
  return String(COBERSYSTEM_PRICING[key].min);
}

/** Linhas padrão Tipo + Preço/m² para tabelas de serviço */
export const STANDARD_PRICE_TABLE_ROWS: Array<{
  tipo: string;
  key: PricingKey;
}> = [
  { tipo: 'Fixa alveolar', key: 'fixaAlveolar' },
  { tipo: 'Fixa compacto', key: 'fixaCompacto' },
  { tipo: 'Abre e fecha', key: 'abreEFecha' },
  { tipo: 'Retrátil automatizada', key: 'retratilAutomatizada' },
];

export function getStandardPriceTableRows() {
  return STANDARD_PRICE_TABLE_ROWS.map(({ tipo, key }) => ({
    tipo,
    precoM2: formatPricePerM2(COBERSYSTEM_PRICING[key]),
  }));
}

/** Preço mínimo no schema JSON-LD por slug de serviço */
export const SERVICE_SCHEMA_PRICE_KEY: Record<string, PricingKey> = {
  'cobertura-abre-e-fecha': 'abreEFecha',
  'cobertura-fixa-policarbonato-alveolar': 'fixaAlveolar',
  'cobertura-fixa-policarbonato-compacto': 'fixaCompacto',
  'cobertura-retratil-automatizada': 'retratilAutomatizada',
  'cobertura-retratil': 'abreEFecha',
  'cobertura-corredor-lateral': 'fixaAlveolar',
  'cobertura-garagem': 'fixaAlveolar',
  'cobertura-aluminio': 'fixaCompacto',
  'cobertura-termoacustica': 'fixaAlveolar',
  'cobertura-area-gourmet': 'abreEFecha',
  'cobertura-piscina': 'fixaCompacto',
  'cobertura-playground': 'fixaAlveolar',
  'cobertura-policarbonato': 'fixaAlveolar',
  'cobertura-pergolado': 'fixaAlveolar',
  'cobertura-varanda-apartamento': 'fixaAlveolar',
  'cobertura-jardim-de-inverno': 'fixaCompacto',
  'projetos-personalizados': 'abreEFecha',
};

export function getServiceSchemaMinPrice(slug: string): string {
  const key = SERVICE_SCHEMA_PRICE_KEY[slug] ?? 'abreEFecha';
  return schemaMinPrice(key);
}

export function getFaqPriceAnswer(key: PricingKey): string {
  const range = COBERSYSTEM_PRICING[key];
  return `Em média, o investimento fica entre ${formatPriceRange(range)} por m², incluindo estrutura, material e instalação. Solicite um orçamento personalizado para seu projeto.`;
}

export function getPlaygroundFaqPriceAnswer(): string {
  return `O preço varia conforme tamanho e tipo: fixa alveolar ${formatPricePerM2(COBERSYSTEM_PRICING.fixaAlveolar)}; abre e fecha ${formatPricePerM2(COBERSYSTEM_PRICING.abreEFecha)}; retrátil automatizada ${formatPricePerM2(COBERSYSTEM_PRICING.retratilAutomatizada)}. Solicite orçamento com visita técnica gratuita.`;
}

export function getPergoladoFaqPriceAnswer(): string {
  return `O preço de cobertura para pergolado varia conforme o sistema (fixo ou retrátil), o material e a área. Cobertura fixa: ${formatPricePerM2(COBERSYSTEM_PRICING.fixaAlveolar)}; retrátil automatizada: ${formatPricePerM2(COBERSYSTEM_PRICING.retratilAutomatizada)}, incluindo estrutura e instalação. Solicite orçamento para medição gratuita.`;
}

export function getPolicarbonatoFaqPriceAnswer(): string {
  return `O valor de uma cobertura em policarbonato varia entre ${formatPricePerM2(COBERSYSTEM_PRICING.fixaAlveolar)} (alveolar) e ${formatPricePerM2(COBERSYSTEM_PRICING.fixaCompacto)} (compacto), dependendo do tipo de chapa e tamanho do projeto. Solicite um orçamento gratuito pelo WhatsApp.`;
}

export function getJardimInvernoFaqPriceAnswer(): string {
  return `O preço de cobertura para jardim de inverno varia conforme área e tipo de policarbonato. Alveolar: ${formatPricePerM2(COBERSYSTEM_PRICING.fixaAlveolar)}; compacto: ${formatPricePerM2(COBERSYSTEM_PRICING.fixaCompacto)}, incluindo estrutura em alumínio e instalação. Solicite orçamento para medição e proposta sem compromisso.`;
}

export function getRetratilFaqPriceAnswer(): string {
  return `O valor de uma cobertura retrátil varia entre ${formatPriceRange(COBERSYSTEM_PRICING.abreEFecha)} e ${formatPriceRange(COBERSYSTEM_PRICING.retratilAutomatizada)} por m², dependendo do tamanho, tipo de policarbonato e automação. Solicite um orçamento gratuito pelo WhatsApp.`;
}

export function formatPriceFrom(key: PricingKey): string {
  return `A partir de ${formatBRL(COBERSYSTEM_PRICING[key].min)}/m²`;
}
