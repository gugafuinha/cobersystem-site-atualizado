import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Orçamento Grátis | Cobertura em Policarbonato | Cobersystem SP',
  description:
    'Solicite seu orçamento grátis de cobertura retrátil ou fixa. Resposta em 24h, projeto incluído, sem compromisso. Atendemos toda Grande São Paulo.',
  keywords: [
    'orçamento cobertura',
    'orçamento grátis',
    'solicitar orçamento',
    'cobertura são paulo',
  ],
  openGraph: {
    title: 'Orçamento Grátis | Cobersystem',
    description: 'Resposta em 24h • Projeto incluído • Sem compromisso',
    url: 'https://www.coberturapolicarbonato.com.br/orcamento',
    siteName: 'Cobersystem',
    locale: 'pt_BR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.coberturapolicarbonato.com.br/orcamento',
  },
};

export default function OrcamentoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
