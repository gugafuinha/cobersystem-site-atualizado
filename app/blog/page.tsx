import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import blogPostsJson from '@/content/blog-posts.json';
import { blogImageObjectPositionClass } from '@/lib/blog-image';

export const metadata: Metadata = {
  title: "Blog | Cobertura Retrátil em Policarbonato | Dicas e Informações",
  description: "Aprenda sobre cobertura retrátil, abre e fecha em policarbonato, automação residencial, dicas de instalação e muito mais. Conteúdo exclusivo da Cobersystem.",
  keywords: "blog cobertura retrátil, dicas cobertura policarbonato, automação residencial, sensor chuva, área gourmet, pergolado",
  alternates: {
    canonical: 'https://www.coberturapolicarbonato.com.br/blog',
  },
};

type ArtigoListagem = {
  slug: string;
  titulo: string;
  descricao: string;
  data: string;
  categoria: string;
  imagem: string;
  imagePosition?: string;
};

const artigos = Object.values(
  blogPostsJson as Record<string, ArtigoListagem>,
).sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime());

export default function Blog() {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <section className="mb-16 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Blog Cobersystem
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conteúdo exclusivo sobre cobertura retrátil, policarbonato, automação residencial 
            e muito mais. Aprenda tudo para tomar a melhor decisão.
          </p>
        </section>

        {/* Artigos */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artigos.map((artigo) => (
              <Link
                key={artigo.slug}
                href={`/blog/${artigo.slug}`}
                className="group"
              >
                <article className="relative rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 h-80">
                  {/* Imagem de fundo via Next.js Image (AVIF/WebP automático) */}
                  <Image
                    src={artigo.imagem}
                    alt={artigo.titulo}
                    fill
                    className={`object-cover ${blogImageObjectPositionClass(artigo.imagePosition)}`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                  {/* Overlay escuro com transparência */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 group-hover:from-black/95 group-hover:via-black/70 transition-all duration-300"></div>
                  
                  {/* Conteúdo */}
                  <div className="relative h-full flex flex-col justify-end p-6 text-white">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-[#D4AF37] text-black px-3 py-1 rounded-full text-sm font-semibold">
                        {artigo.categoria}
                      </span>
                      <span className="text-gray-200 text-sm">
                        {new Date(artigo.data).toLocaleDateString('pt-BR')}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold mb-2 group-hover:text-[#D4AF37] transition">
                      {artigo.titulo}
                    </h2>
                    <p className="text-gray-200 mb-4 line-clamp-2">
                      {artigo.descricao}
                    </p>
                    <span className="text-[#8A6A00] font-semibold group-hover:underline">
                      Ler mais →
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-600 text-white rounded-lg p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Tem alguma dúvida?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Entre em contato conosco e tire todas suas dúvidas sobre cobertura retrátil
          </p>
          <Link 
            href="/orcamento" 
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition shadow-lg"
          >
            Falar com Especialista
          </Link>
        </section>
      </div>
    </main>
  );
}

