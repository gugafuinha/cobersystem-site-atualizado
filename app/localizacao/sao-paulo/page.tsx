import type { Metadata } from 'next';
import Link from 'next/link';
import OptimizedImage from '@/components/OptimizedImage';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: "Cobertura Retrátil São Paulo | Abre e Fecha SP | Cobersystem",
  description: "Cobertura retrátil e abre e fecha em São Paulo. Policarbonato com automação Alexa. Atendemos toda Grande SP. Orçamento grátis. Zona Leste, Sul, Oeste, Norte.",
  keywords: "cobertura retrátil São Paulo, cobertura abre e fecha SP, cobertura policarbonato São Paulo, cobertura SP orçamento, cobertura zona leste, cobertura zona sul SP",
  alternates: {
    canonical: 'https://coberturapolicarbonato.com.br/localizacao/sao-paulo',
  },
  openGraph: {
    title: "Cobertura Retrátil São Paulo | Cobersystem",
    description: "Cobertura abre e fecha em São Paulo com automação via Alexa. Atendemos toda Grande SP.",
    url: 'https://coberturapolicarbonato.com.br/localizacao/sao-paulo',
  },
};

export default function SaoPauloPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: 'Início', href: '/' },
            { label: 'Localização', href: '/localizacao' },
            { label: 'São Paulo', href: '/localizacao/sao-paulo' },
          ]}
        />

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Cobertura Retrátil em São Paulo
        </h1>
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          A Cobersystem atende toda a Grande São Paulo com coberturas retráteis em policarbonato 
          que abrem e fecham com automação via Alexa. Atendemos Zona Leste, Sul, Oeste, Norte e 
          região metropolitana. Solicite seu orçamento grátis!
        </p>

        <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Atendemos Todas as Zonas de São Paulo
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Zona Leste</h3>
              <p className="text-gray-600 mb-4">
                Atendemos Vila Prudente, Mooca, Tatuapé, Penha, Itaquera e toda Zona Leste de SP.
              </p>
              <Link href="/localizacao/zona-leste" className="text-[#D4AF37] hover:underline">
                Ver mais sobre Zona Leste →
              </Link>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Zona Sul</h3>
              <p className="text-gray-600 mb-4">
                Atendemos Moema, Vila Olímpia, Campo Belo, Jabaquara e toda Zona Sul de SP.
              </p>
              <Link href="/localizacao/zona-sul" className="text-[#D4AF37] hover:underline">
                Ver mais sobre Zona Sul →
              </Link>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Zona Oeste</h3>
              <p className="text-gray-600 mb-4">
                Atendemos Pinheiros, Vila Madalena, Butantã, Lapa e toda Zona Oeste de SP.
              </p>
              <Link href="/localizacao/zona-oeste" className="text-[#D4AF37] hover:underline">
                Ver mais sobre Zona Oeste →
              </Link>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Zona Norte</h3>
              <p className="text-gray-600 mb-4">
                Atendemos Santana, Tucuruvi, Vila Guilherme e toda Zona Norte de SP.
              </p>
              <Link href="/localizacao/zona-norte" className="text-[#D4AF37] hover:underline">
                Ver mais sobre Zona Norte →
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-12 bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Nossos Serviços em São Paulo
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/servicos/cobertura-abre-e-fecha" className="group">
              <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-[#D4AF37] transition">
                  Cobertura Abre e Fecha
                </h3>
                <p className="text-gray-600">
                  Sistema retrátil automatizado com Alexa e sensor de chuva.
                </p>
              </div>
            </Link>
            <Link href="/servicos/cobertura-area-gourmet" className="group">
              <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-[#D4AF37] transition">
                  Cobertura para Área Gourmet
                </h3>
                <p className="text-gray-600">
                  Ideal para áreas gourmet e churrasqueiras em SP.
                </p>
              </div>
            </Link>
            <Link href="/servicos/cobertura-piscina" className="group">
              <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-[#D4AF37] transition">
                  Cobertura para Piscina
                </h3>
                <p className="text-gray-600">
                  Cobertura retrátil para piscinas em São Paulo.
                </p>
              </div>
            </Link>
          </div>
        </section>

        <section className="bg-[#D4AF37] text-black rounded-lg p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Solicite Seu Orçamento em São Paulo
          </h2>
          <p className="text-xl mb-8 text-gray-900">
            Atendemos toda Grande São Paulo com orçamento grátis e sem compromisso
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contato"
              className="bg-black text-[#D4AF37] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 transition"
            >
              Solicitar Orçamento
            </Link>
            <Link
              href="https://wa.me/5511943615079"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition"
            >
              WhatsApp
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

