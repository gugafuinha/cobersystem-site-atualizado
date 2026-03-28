/**
 * Bairros de São Paulo com páginas locais (sub-rota em/sao-paulo/[bairro]).
 */
export const SAO_PAULO_BAIRROS = [
  { slug: 'brooklin', nome: 'Brooklin' },
  { slug: 'mooca', nome: 'Mooca' },
  { slug: 'santana', nome: 'Santana' },
  { slug: 'tucuruvi', nome: 'Tucuruvi' },
  { slug: 'tatuape', nome: 'Tatuapé' },
  { slug: 'vila-mariana', nome: 'Vila Mariana' },
] as const;

export type SpBairroSlug = (typeof SAO_PAULO_BAIRROS)[number]['slug'];

export interface BairroSaoPauloInfo {
  slug: SpBairroSlug;
  nome: string;
}

export function getSlugsBairrosSaoPaulo(): SpBairroSlug[] {
  return SAO_PAULO_BAIRROS.map((b) => b.slug);
}

export function getBairroSaoPaulo(slug: string): BairroSaoPauloInfo | undefined {
  const b = SAO_PAULO_BAIRROS.find((x) => x.slug === slug);
  return b ? { slug: b.slug, nome: b.nome } : undefined;
}
