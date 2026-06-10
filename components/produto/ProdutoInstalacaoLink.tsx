import Link from 'next/link';

interface Props {
  servicoSlug: string;
  servicoLabel: string;
  descricao?: string;
}

export default function ProdutoInstalacaoLink({ servicoSlug, servicoLabel, descricao }: Props) {
  return (
    <section className="mb-8 rounded-lg border border-[#D4AF37]/40 bg-[#D4AF37]/5 p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
      <div className="flex-1">
        <p className="font-semibold text-gray-800 mb-1">Projeto, instalação e garantia em SP</p>
        <p className="text-sm text-gray-600">
          {descricao ??
            `Veja como funciona o serviço completo de ${servicoLabel}: visita técnica gratuita, projeto em 48h e garantia de 2 anos.`}
        </p>
      </div>
      <Link
        href={`/servicos/${servicoSlug}`}
        className="shrink-0 inline-block rounded-lg bg-[#D4AF37] text-black px-5 py-2.5 text-sm font-semibold hover:bg-[#C9A030] transition"
      >
        Ver serviço de instalação →
      </Link>
    </section>
  );
}
