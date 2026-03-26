import Link from 'next/link';
import OptimizedImage from './OptimizedImage';
import { trackCTAClick } from './GoogleAnalytics';

interface Artigo {
  slug: string;
  titulo: string;
  imagem: string;
  categoria: string;
  data: string;
}

interface RelatedArticlesProps {
  currentSlug: string;
  artigos: Artigo[];
  maxItems?: number;
}

export default function RelatedArticles({ currentSlug, artigos, maxItems = 3 }: RelatedArticlesProps) {
  const related = artigos
    .filter(a => a.slug !== currentSlug)
    .slice(0, maxItems);

  if (related.length === 0) return null;

  return (
    <section className="mt-12 pt-8 border-t border-gray-200">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">
        Artigos Relacionados
      </h3>
      <div className="grid md:grid-cols-3 gap-6">
        {related.map((artigo) => (
          <Link
            key={artigo.slug}
            href={`/blog/${artigo.slug}`}
            onClick={() => trackCTAClick(`Artigo Relacionado: ${artigo.titulo}`)}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition group"
          >
            <div className="relative h-48 overflow-hidden">
              <OptimizedImage
                src={artigo.imagem}
                alt={artigo.titulo}
                width={400}
                height={300}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <span className="text-xs text-[#D4AF37] font-semibold uppercase">
                {artigo.categoria}
              </span>
              <h4 className="text-lg font-bold text-gray-900 mt-2 group-hover:text-[#D4AF37] transition">
                {artigo.titulo}
              </h4>
              <p className="text-sm text-gray-500 mt-2">
                {new Date(artigo.data).toLocaleDateString('pt-BR')}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

