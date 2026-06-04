import Link from 'next/link';

const LINKS = [
  {
    id: 'policarbonato' as const,
    href: '/produtos/cobertura-policarbonato',
    label: 'Cobertura Policarbonato',
  },
  {
    id: 'retratil' as const,
    href: '/produtos/cobertura-retratil',
    label: 'Cobertura Retrátil',
  },
  {
    id: 'termoacustica' as const,
    href: '/produtos/cobertura-termoacustica',
    label: 'Cobertura Termoacústica',
  },
  {
    id: 'veneziana' as const,
    href: '/produtos/veneziana-policarbonato',
    label: 'Veneziana Policarbonato',
  },
];

export type ProductVejaTambemCurrent = (typeof LINKS)[number]['id'];

export default function ProductVejaTambem({
  current,
}: {
  current: ProductVejaTambemCurrent;
}) {
  const items = LINKS.filter((item) => item.id !== current);

  return (
    <section className="mb-16 rounded-lg border border-gray-200 bg-gray-50 p-8">
      <h2 className="mb-6 text-center text-2xl font-bold text-gray-800 md:text-3xl">
        Veja também
      </h2>
      <ul className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
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
