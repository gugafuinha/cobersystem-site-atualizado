import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import blogPosts from '@/content/blog-posts.json';
import Breadcrumbs from '@/components/Breadcrumbs';

type BlogPost = {
  slug: string;
  titulo: string;
  descricao: string;
  data: string;
  categoria: string;
  imagem: string;
  palavrasChave: string[];
  conteudo: {
    introducao: string;
    secoes: Array<{
      titulo: string;
      conteudo: string;
    }>;
    conclusao: string;
  };
};

const artigos: Record<string, BlogPost> = blogPosts as any;

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const params = await props.params;
  const artigo = artigos[params.slug];
  
  if (!artigo) {
    return {
      title: 'Post não encontrado | Cobersystem Blog',
    };
  }

  return {
    title: artigo.titulo,
    description: artigo.descricao,
    keywords: artigo.palavrasChave.join(', '),
    openGraph: {
      title: artigo.titulo,
      description: artigo.descricao,
      type: 'article',
      publishedTime: artigo.data,
      authors: ['Cobersystem'],
      images: [{ url: `https://coberturapolicarbonato.com.br${artigo.imagem}`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: artigo.titulo,
      description: artigo.descricao,
      images: [`https://coberturapolicarbonato.com.br${artigo.imagem}`],
    },
    alternates: {
      canonical: `https://coberturapolicarbonato.com.br/blog/${params.slug}`,
    },
  };
}

export default async function BlogPostPage(
  props: { params: Promise<{ slug: string }> }
) {
  const params = await props.params;
  const artigo = artigos[params.slug];

  if (!artigo) {
    notFound();
  }

  // Schema.org JSON-LD para Article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": artigo.titulo,
    "description": artigo.descricao,
    "image": `https://coberturapolicarbonato.com.br${artigo.imagem}`,
    "datePublished": artigo.data,
    "dateModified": artigo.data,
    "author": {
      "@type": "Organization",
      "name": "Cobersystem",
      "url": "https://coberturapolicarbonato.com.br"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Cobersystem",
      "logo": {
        "@type": "ImageObject",
        "url": "https://coberturapolicarbonato.com.br/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://coberturapolicarbonato.com.br/blog/${artigo.slug}`
    },
    "keywords": artigo.palavrasChave.join(', '),
    "articleSection": artigo.categoria
  };

  // Função para renderizar conteúdo com formatação
  const renderConteudo = (texto: string) => {
    return texto.split('\\n\\n').map((paragrafo, idx) => {
      // Headers (###)
      if (paragrafo.startsWith('**') && paragrafo.endsWith(':**')) {
        const titulo = paragrafo.replace(/\*\*/g, '').replace(':', '');
        return <h3 key={idx} className="text-2xl font-bold mt-8 mb-4 text-gray-800">{titulo}</h3>;
      }
      
      // Listas
      if (paragrafo.includes('\\n-') || paragrafo.includes('\\n✅') || paragrafo.includes('\\n❌')) {
        const items = paragrafo.split('\\n').filter(line => line.trim());
        return (
          <ul key={idx} className="list-none space-y-2 my-6">
            {items.map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="mr-2">{item.includes('✅') || item.includes('❌') ? '' : '•'}</span>
                <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
              </li>
            ))}
          </ul>
        );
      }
      
      // Parágrafo normal
      return (
        <p 
          key={idx} 
          className="mb-4 text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: paragrafo.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
        />
      );
    });
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Início', href: '/' },
              { label: 'Blog', href: '/blog' },
              { label: artigo.titulo.substring(0, 50), href: `/blog/${artigo.slug}` },
            ]}
          />

          <article className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
            {/* Meta info */}
            <div className="mb-6 flex items-center gap-4">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                {artigo.categoria}
              </span>
              <time className="text-gray-500 text-sm">
                {new Date(artigo.data).toLocaleDateString('pt-BR', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </time>
            </div>

            {/* Título principal */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {artigo.titulo}
            </h1>

            {/* Descrição */}
            <p className="text-xl text-gray-700 mb-8 leading-relaxed border-l-4 border-blue-600 pl-6 italic">
              {artigo.descricao}
            </p>

            {/* Imagem destacada */}
            <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
              <img
                src={artigo.imagem}
                alt={artigo.titulo}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Conteúdo */}
            <div className="prose prose-lg max-w-none">
              {/* Introdução */}
              <div className="mb-8">
                {renderConteudo(artigo.conteudo.introducao)}
              </div>

              {/* Seções */}
              {artigo.conteudo.secoes.map((secao, idx) => (
                <section key={idx} className="mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
                    {secao.titulo}
                  </h2>
                  <div className="pl-4">
                    {renderConteudo(secao.conteudo)}
                  </div>
                </section>
              ))}

              {/* Conclusão */}
              <div className="mt-12 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusão</h2>
                {renderConteudo(artigo.conteudo.conclusao)}
              </div>
            </div>

            {/* Tags */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-sm font-semibold text-gray-600 mb-3">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {artigo.palavrasChave.map((tag, idx) => (
                  <span 
                    key={idx}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 pt-8 border-t-2 border-gray-200 text-center">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Pronto para Transformar Seu Espaço?
              </h3>
              <p className="text-xl text-gray-600 mb-8">
                Solicite um orçamento gratuito e descubra como podemos ajudar!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contato"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition shadow-lg"
                >
                  Solicitar Orçamento Grátis
                </Link>
                <a
                  href="https://wa.me/5511943615079"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition shadow-lg flex items-center justify-center gap-2"
                >
                  <span>💬</span> WhatsApp
                </a>
              </div>
            </div>
          </article>

          {/* Posts relacionados */}
          <section className="mt-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Artigos Relacionados</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.values(artigos)
                .filter(a => a.slug !== artigo.slug)
                .slice(0, 2)
                .map((relacionado) => (
                  <Link
                    key={relacionado.slug}
                    href={`/blog/${relacionado.slug}`}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition group"
                  >
                    <div className="p-6">
                      <span className="text-sm text-blue-600 font-semibold">{relacionado.categoria}</span>
                      <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3 group-hover:text-blue-600 transition">
                        {relacionado.titulo}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">{relacionado.descricao}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export async function generateStaticParams() {
  return Object.keys(artigos).map((slug) => ({
    slug,
  }));
}
