import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img 
              src="/logo-horizontal.svg" 
              alt="Cobersystem - Soluções em Coberturas" 
              className="h-14 mb-4"
              width="450"
              height="120"
            />
            <p className="text-gray-400 mb-4">
              Coberturas retráteis inteligentes com automação via Alexa e sensor de chuva.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/cobersystem?igsh=cXlvaHBsdjZoc2d4" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#D4AF37] transition"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://www.youtube.com/@cobersystem" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#D4AF37] transition"
                aria-label="YouTube"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-gray-400 hover:text-white transition">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/produtos" className="text-gray-400 hover:text-white transition">
                  Produtos
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/servicos/cobertura-abre-e-fecha" className="text-gray-400 hover:text-white transition">
                  Cobertura Abre e Fecha
                </Link>
              </li>
              <li>
                <Link href="/servicos/cobertura-retratil" className="text-gray-400 hover:text-white transition">
                  Cobertura Retrátil
                </Link>
              </li>
              <li>
                <Link href="/servicos/cobertura-fixa-policarbonato-alveolar" className="text-gray-400 hover:text-white transition">
                  Cobertura Policarbonato
                </Link>
              </li>
              <li>
                <Link href="/servicos/cobertura-area-gourmet" className="text-gray-400 hover:text-white transition">
                  Área Gourmet
                </Link>
              </li>
              <li>
                <Link href="/servicos/cobertura-piscina" className="text-gray-400 hover:text-white transition">
                  Cobertura Piscina
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <div className="space-y-3 text-gray-400">
              <p>
                <strong className="text-white">Endereço:</strong><br />
                Rua Frei Diogo das Chagas, 160<br />
                Jardim Angela - Zona Leste<br />
                CEP: 03985-060 - São Paulo/SP
              </p>
              <p>
                <strong className="text-white">E-mail:</strong><br />
                <a href="mailto:vendas@cobersystem.com.br" className="hover:text-[#D4AF37] transition">
                  vendas@cobersystem.com.br
                </a>
              </p>
              <p>
                <strong className="text-white">WhatsApp:</strong><br />
                <a href="https://wa.me/5511943615079" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition">
                  (11) 94361-5079
                </a>
              </p>
              <p>
                <strong className="text-white">Instagram:</strong><br />
                <a href="https://www.instagram.com/cobersystem?igsh=cXlvaHBsdjZoc2d4" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition">
                  @cobersystem
                </a>
              </p>
            </div>
            <Link 
              href="/contato" 
              className="inline-block bg-[#D4AF37] text-black px-6 py-2 rounded-lg hover:bg-[#C9A030] transition font-semibold mt-4"
            >
              Solicitar Orçamento
            </Link>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8">
          {/* Selo Primeira Empresa */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center bg-gradient-to-r from-[#D4AF37] to-[#C9A030] text-black px-8 py-4 rounded-lg shadow-xl">
              <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <div className="text-left">
                <p className="font-bold text-lg leading-tight">Primeira Empresa a Desenvolver</p>
                <p className="font-bold text-lg leading-tight">Coberturas Inteligentes do Brasil</p>
              </div>
            </div>
          </div>
          
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Cobersystem – Soluções em Coberturas. Todos os direitos reservados.</p>
            <p className="mt-2 text-sm">CNPJ: 61.813.532/0001-32</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

