import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contato e Orçamento | Cobertura Retrátil | Cobersystem',
  description:
    'Solicite seu orçamento gratuito para cobertura retrátil em policarbonato. Entre em contato com a Cobersystem e transforme seu espaço externo.',
  keywords:
    'orçamento cobertura retrátil, contato cobersystem, cobertura policarbonato preço, solicitar orçamento',
  alternates: {
    canonical: 'https://www.coberturapolicarbonato.com.br/contato',
  },
};

export default function ContatoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
