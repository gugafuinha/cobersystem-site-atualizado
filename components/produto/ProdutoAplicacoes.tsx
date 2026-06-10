import Link from 'next/link';

export interface AplicacaoItem {
  href: string;
  label: string;
  descricao: string;
}

interface Props {
  aplicacoes: AplicacaoItem[];
}

export default function ProdutoAplicacoes({ aplicacoes }: Props) {
  return (
    <section className="mb-16 rounded-lg border border-gray-200 bg-gray-50 p-8">
      <h2 className="mb-6 text-center text-2xl font-bold text-gray-800 md:text-3xl">
        Onde aplicar
      </h2>
      <p className="mb-6 text-center text-gray-600">
        Veja páginas com detalhes específicos por ambiente — dimensionamento, aplicações e perguntas
        frequentes de cada situação.
      </p>
      <ul className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
        {aplicacoes.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="flex flex-col rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-200 transition hover:bg-blue-50 hover:ring-blue-200"
            >
              <span className="font-semibold text-gray-800 hover:text-blue-600 text-base mb-1">
                {item.label}
              </span>
              <span className="text-sm text-gray-500">{item.descricao}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
