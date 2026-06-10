import type { Metadata } from 'next';
import { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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

const POST_INTERNAL_LINKS: Record<string, Array<{ label: string; href: string }>> = {
  'cobertura-retratil-guia-completo': [
    { label: 'Catálogo de Modelos — Cobertura Retrátil', href: '/produtos/cobertura-retratil' },
    { label: 'Instalação de Cobertura Retrátil em SP', href: '/servicos/cobertura-retratil' },
    { label: 'Automação com Alexa e Sensor de Chuva', href: '/servicos/cobertura-retratil-automatizada' },
  ],
  'cobertura-abre-fecha-vantagens': [
    { label: 'Catálogo de Modelos — Cobertura Abre e Fecha', href: '/produtos/cobertura-abre-e-fecha' },
    { label: 'Instalação de Cobertura Abre e Fecha', href: '/servicos/cobertura-abre-e-fecha' },
    { label: 'Cobertura para Piscina', href: '/servicos/cobertura-piscina' },
  ],
  'cobertura-policarbonato-preco-tipos': [
    { label: 'Catálogo de Modelos — Cobertura de Policarbonato', href: '/produtos/cobertura-policarbonato' },
    { label: 'Cobertura Fixa — Policarbonato Alveolar', href: '/servicos/cobertura-fixa-policarbonato-alveolar' },
    { label: 'Cobertura Fixa — Policarbonato Compacto', href: '/servicos/cobertura-fixa-policarbonato-compacto' },
  ],
  'cobertura-retratil-churrasqueira': [
    { label: 'Cobertura para Área Gourmet', href: '/servicos/cobertura-area-gourmet' },
    { label: 'Cobertura Retrátil', href: '/servicos/cobertura-retratil' },
    { label: 'Cobertura Abre e Fecha', href: '/servicos/cobertura-abre-e-fecha' },
  ],
  'automacao-alexa-sensor-chuva': [
    { label: 'Cobertura Retrátil Automatizada — Alexa e Sensor', href: '/servicos/cobertura-retratil-automatizada' },
    { label: 'Catálogo de Modelos — Cobertura Retrátil', href: '/produtos/cobertura-retratil' },
    { label: 'Cobertura Abre e Fecha', href: '/servicos/cobertura-abre-e-fecha' },
  ],
  'pergolado-vs-cobertura-retratil': [
    { label: 'Cobertura Retrátil — Ver serviço completo', href: '/servicos/cobertura-retratil' },
    { label: 'Projetos Personalizados', href: '/servicos/projetos-personalizados' },
    { label: 'Cobertura para Área Gourmet', href: '/servicos/cobertura-area-gourmet' },
  ],
  'teto-retratil-automatico-como-funciona-precos': [
    { label: 'Cobertura Retrátil Automatizada — Alexa e Sensor', href: '/servicos/cobertura-retratil-automatizada' },
    { label: 'Catálogo de Modelos — Cobertura Retrátil', href: '/produtos/cobertura-retratil' },
    { label: 'Cobertura para Área Gourmet', href: '/servicos/cobertura-area-gourmet' },
  ],
  'fechamento-de-varanda-tipos-precos': [
    { label: 'Cobertura para Varanda de Apartamento', href: '/servicos/cobertura-varanda-apartamento' },
    { label: 'Catálogo de Modelos — Cobertura de Policarbonato', href: '/produtos/cobertura-policarbonato' },
    { label: 'Cobertura para Jardim de Inverno', href: '/servicos/cobertura-jardim-de-inverno' },
  ],
  'pergolado-bioclimatico-o-que-e-vale-a-pena-precos': [
    { label: 'Cobertura para Pergolado — Ver serviço', href: '/servicos/cobertura-pergolado' },
    { label: 'Projetos Personalizados de Cobertura', href: '/servicos/projetos-personalizados' },
    { label: 'Catálogo de Modelos — Cobertura Retrátil', href: '/produtos/cobertura-retratil' },
  ],
  'toldo-retratil-vs-cobertura-retratil-qual-escolher': [
    { label: 'Instalação de Cobertura Retrátil em SP', href: '/servicos/cobertura-retratil' },
    { label: 'Catálogo de Modelos — Cobertura Abre e Fecha', href: '/produtos/cobertura-abre-e-fecha' },
    { label: 'Cobertura para Área Gourmet', href: '/servicos/cobertura-area-gourmet' },
  ],
  'cobertura-para-piscina-tipos-precos-guia': [
    { label: 'Cobertura para Piscina — Ver serviço completo', href: '/servicos/cobertura-piscina' },
    { label: 'Cobertura Retrátil Automatizada — Sensor de Chuva', href: '/servicos/cobertura-retratil-automatizada' },
    { label: 'Cobertura Retrátil', href: '/servicos/cobertura-retratil' },
  ],
  'cobertura-area-gourmet-tipos-precos-guia': [
    { label: 'Cobertura Retrátil para Área Gourmet — Ver serviço', href: '/servicos/cobertura-area-gourmet' },
    { label: 'Cobertura Retrátil com Sensor de Chuva', href: '/servicos/cobertura-retratil' },
    { label: 'Cobertura Abre e Fecha — Como funciona', href: '/servicos/cobertura-abre-e-fecha' },
  ],
};

const POST_WHATSAPP_MESSAGE: Record<string, string> = {
  'cobertura-retratil-guia-completo':          'Olá! Li o artigo sobre cobertura retrátil e quero um orçamento.',
  'cobertura-abre-fecha-vantagens':            'Olá! Li o artigo sobre cobertura abre e fecha e quero um orçamento.',
  'cobertura-policarbonato-preco-tipos':       'Olá! Li o artigo sobre cobertura de policarbonato e quero um orçamento.',
  'cobertura-retratil-churrasqueira':          'Olá! Li o artigo sobre cobertura para churrasqueira e quero um orçamento.',
  'automacao-alexa-sensor-chuva':              'Olá! Li o artigo sobre automação com Alexa e quero um orçamento.',
  'pergolado-vs-cobertura-retratil':           'Olá! Li o artigo comparando pergolado x cobertura e quero um orçamento.',
  'teto-retratil-automatico-como-funciona-precos': 'Olá! Li o artigo sobre teto retrátil automático e quero um orçamento.',
  'fechamento-de-varanda-tipos-precos': 'Olá! Li o artigo sobre fechamento de varanda e quero um orçamento.',
  'pergolado-bioclimatico-o-que-e-vale-a-pena-precos': 'Olá! Li o artigo sobre pergolado bioclimático e quero um orçamento.',
  'toldo-retratil-vs-cobertura-retratil-qual-escolher': 'Olá! Li a comparação toldo vs cobertura retrátil e quero um orçamento.',
  'cobertura-para-piscina-tipos-precos-guia':  'Olá! Li o artigo sobre cobertura para piscina e quero um orçamento.',
  'cobertura-area-gourmet-tipos-precos-guia':  'Olá! Li o artigo sobre cobertura para área gourmet e quero um orçamento.',
};

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
      images: [{ url: `https://www.coberturapolicarbonato.com.br${artigo.imagem}`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: artigo.titulo,
      description: artigo.descricao,
      images: [`https://www.coberturapolicarbonato.com.br${artigo.imagem}`],
    },
    alternates: {
      canonical: `https://www.coberturapolicarbonato.com.br/blog/${params.slug}`,
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
    "image": `https://www.coberturapolicarbonato.com.br${artigo.imagem}`,
    "datePublished": artigo.data,
    "dateModified": artigo.data,
    "author": {
      "@type": "Organization",
      "name": "Cobersystem",
      "url": "https://www.coberturapolicarbonato.com.br"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Cobersystem",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.coberturapolicarbonato.com.br/logo-horizontal-new.svg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.coberturapolicarbonato.com.br/blog/${artigo.slug}`
    },
    "keywords": artigo.palavrasChave.join(', '),
    "articleSection": artigo.categoria
  };

  // Extrai pares pergunta/resposta de uma seção FAQ.
  // O conteúdo do JSON usa \n literal (barra + n), igual ao renderConteudo existente.
  function parseFaqSection(content: string): Array<{ question: string; answer: string }> {
    return content
      .split('\\n\\n')
      .map((block) => {
        const lines = block.split('\\n');
        const match = lines[0].match(/^\*\*(.+?)\*\*$/);
        if (match && lines.length > 1) {
          return {
            question: match[1].trim(),
            answer: lines
              .slice(1)
              .join(' ')
              .replace(/\*\*(.*?)\*\*/g, '$1')
              .trim(),
          };
        }
        return null;
      })
      .filter((item): item is { question: string; answer: string } => item !== null);
  }

  const faqSection = artigo.conteudo.secoes.find(
    (s) =>
      s.titulo.toLowerCase().includes('frequente') ||
      s.titulo.toLowerCase().includes('pergunta'),
  );
  const faqItems = faqSection ? parseFaqSection(faqSection.conteudo) : [];
  const faqSchema =
    faqItems.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqItems.map(({ question, answer }) => ({
            '@type': 'Question',
            name: question,
            acceptedAnswer: { '@type': 'Answer', text: answer },
          })),
        }
      : null;

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
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      
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
              <Image
                src={artigo.imagem}
                alt={artigo.titulo}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
                priority
              />
            </div>

            {artigo.slug === 'cobertura-de-policarbonato-precos-tipos-guia' && (
              <div className="grid grid-cols-2 gap-4 mb-8">
                <figure className="text-center">
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="/images/blog/cobertura-policarbonato-guia.png"
                      alt="Cobertura de policarbonato aberta"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 448px"
                    />
                  </div>
                  <figcaption className="text-sm text-gray-500 mt-2 italic">Cobertura Aberta</figcaption>
                </figure>
                <figure className="text-center">
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="/images/blog/cobertura-policarbonato-retratil.png"
                      alt="Cobertura de policarbonato fechada"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 448px"
                    />
                  </div>
                  <figcaption className="text-sm text-gray-500 mt-2 italic">Cobertura Fechada</figcaption>
                </figure>
              </div>
            )}

            {/* Conteúdo */}
            <div className="prose prose-lg max-w-none">
              {/* Introdução */}
              <div className="mb-8">
                {renderConteudo(artigo.conteudo.introducao)}
              </div>

              {/* Seções */}
              {artigo.conteudo.secoes.map((secao, idx) => {
                const waMsg = POST_WHATSAPP_MESSAGE[artigo.slug] ?? 'Olá! Li um artigo no blog e gostaria de um orçamento.';
                const waUrl = `https://wa.me/5511943615079?text=${encodeURIComponent(waMsg)}`;
                return (
                  <Fragment key={idx}>
                    <section className="mb-10">
                      <h2 className="text-3xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
                        {secao.titulo}
                      </h2>
                      <div className="pl-4">
                        {renderConteudo(secao.conteudo)}
                      </div>
                    </section>

                    {idx === 2 && (
                      <div className="my-10 rounded-xl overflow-hidden shadow-lg bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6 md:p-8">
                        <p className="text-lg font-semibold mb-1">
                          Quer saber o preço para o seu projeto?
                        </p>
                        <p className="text-gray-300 text-sm mb-5">
                          Nossa equipe responde em até 24h. Orçamento gratuito e sem compromisso.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Link
                            href="/orcamento"
                            className="inline-flex items-center justify-center bg-[#D4AF37] hover:bg-[#C9A030] text-black font-semibold px-6 py-3 rounded-lg transition text-sm"
                          >
                            Solicitar Orçamento Grátis
                          </Link>
                          <a
                            href={waUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition text-sm"
                          >
                            <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            WhatsApp
                          </a>
                        </div>
                      </div>
                    )}
                  </Fragment>
                );
              })}

              {/* Conclusão */}
              <div className="mt-12 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusão</h2>
                {renderConteudo(artigo.conteudo.conclusao)}
              </div>
            </div>

            {/* Links internos — serviços relacionados */}
            {POST_INTERNAL_LINKS[artigo.slug] && (
              <div className="mt-10 p-6 bg-gray-50 border-l-4 border-[#D4AF37] rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="text-[#D4AF37]">→</span> Serviços relacionados
                </h3>
                <ul className="space-y-2">
                  {POST_INTERNAL_LINKS[artigo.slug].map(({ label, href }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="text-blue-600 hover:text-blue-800 hover:underline underline-offset-2 text-sm font-medium flex items-center gap-2 transition"
                      >
                        <span className="text-[#D4AF37]">›</span> {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

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
                  href="/orcamento"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition shadow-lg"
                >
                  Solicitar Orçamento Grátis
                </Link>
                <a
                  href={`https://wa.me/5511943615079?text=${encodeURIComponent(POST_WHATSAPP_MESSAGE[artigo.slug] ?? 'Olá! Li um artigo no blog e gostaria de um orçamento.')}`}
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
