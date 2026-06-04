import Link from 'next/link';

const LINKS = [
  {
    id: 'abre-e-fecha' as const,
    href: '/servicos/cobertura-abre-e-fecha',
    label: 'Cobertura Abre e Fecha',
  },
  {
    id: 'retratil' as const,
    href: '/servicos/cobertura-retratil',
    label: 'Cobertura Retrátil',
  },
  {
    id: 'retratil-automatizada' as const,
    href: '/servicos/cobertura-retratil-automatizada',
    label: 'Cobertura Retrátil Automatizada',
  },
  {
    id: 'fixa-policarbonato-alveolar' as const,
    href: '/servicos/cobertura-fixa-policarbonato-alveolar',
    label: 'Cobertura Fixa Policarbonato Alveolar',
  },
  {
    id: 'fixa-policarbonato-compacto' as const,
    href: '/servicos/cobertura-fixa-policarbonato-compacto',
    label: 'Cobertura Fixa Policarbonato Compacto',
  },
  {
    id: 'termoacustica' as const,
    href: '/servicos/cobertura-termoacustica',
    label: 'Cobertura Termoacústica',
  },
  {
    id: 'area-gourmet' as const,
    href: '/servicos/cobertura-area-gourmet',
    label: 'Área Gourmet',
  },
  {
    id: 'piscina' as const,
    href: '/servicos/cobertura-piscina',
    label: 'Cobertura Piscina',
  },
];

export type ServiceVejaTambemCurrent = (typeof LINKS)[number]['id'];

export default function ServiceVejaTambem({
  current,
}: {
  current: ServiceVejaTambemCurrent;
}) {
  const items = LINKS.filter((item) => item.id !== current);

  return (
    <section className="mb-16 rounded-lg border border-gray-200 bg-gray-50 p-8">
      <h2 className="mb-6 text-center text-2xl font-bold text-gray-800 md:text-3xl">
        Veja também
      </h2>
      <ul className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="block rounded-lg bg-white p-4 text-center text-base font-semibold text-gray-800 shadow-sm ring-1 ring-gray-200 transition hover:bg-blue-50 hover:text-blue-600 hover:ring-blue-200"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
