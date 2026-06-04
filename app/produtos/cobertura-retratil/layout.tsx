import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cobertura Retrátil em Policarbonato | Cobersystem",
  description: "Cobertura retrátil e abre e fecha em policarbonato com automação via Alexa e sensor de chuva. Controle total do clima.",
  keywords: "cobertura retrátil, cobertura abre e fecha, policarbonato, automação Alexa, sensor chuva",
};

export default function CoberturaRetratilLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

