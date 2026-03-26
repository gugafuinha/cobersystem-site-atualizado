import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: "Imprensa e Mídia | Cobersystem - Soluções em Coberturas",
  description: "Área de imprensa da Cobersystem. Releases, fotos, logos e informações para veículos de comunicação.",
  keywords: "imprensa cobersystem, mídia cobertura retrátil, releases, comunicação",
  alternates: {
    canonical: 'https://coberturapolicarbonato.com.br/imprensa',
  },
};

export default function ImprensaPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={[
          { label: 'Início', href: '/' },
          { label: 'Imprensa', href: '/imprensa' },
        ]} />

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Imprensa e Mídia
        </h1>
        <p className="text-xl text-gray-700 mb-12 leading-relaxed">
          Área de imprensa da Cobersystem. Releases, fotos, logos e informações para veículos de comunicação.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Contato para Imprensa
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>E-mail:</strong><br />
                <a href="mailto:vendas@cobersystem.com.br" className="text-[#D4AF37] hover:underline">
                  vendas@cobersystem.com.br
                </a>
              </p>
              <p>
                <strong>WhatsApp:</strong><br />
                <a href="https://wa.me/5511943615079" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline">
                  (11) 94361-5079
                </a>
              </p>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Downloads
            </h2>
            <div className="space-y-3">
              <Link href="/logo-horizontal.svg" download className="block text-[#D4AF37] hover:underline">
                Logo Horizontal (SVG)
              </Link>
              <Link href="/logo-header.svg" download className="block text-[#D4AF37] hover:underline">
                Logo Header (SVG)
              </Link>
              <Link href="/galeria" className="block text-[#D4AF37] hover:underline">
                Galeria de Fotos
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

