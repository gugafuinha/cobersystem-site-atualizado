import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cobertura Fixa em Policarbonato | Cobersystem",
  description: "Cobertura fixa em policarbonato compacto e alveolar. Proteção permanente com alta qualidade.",
  keywords: "cobertura fixa, policarbonato compacto, policarbonato alveolar, cobertura permanente",
};

export default function CoberturaFixaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

