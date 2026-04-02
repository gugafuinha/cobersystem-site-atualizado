import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center shrink-0 h-14 sm:h-16 lg:h-20">
            <img 
              src="/logo-horizontal-new.svg" 
              alt="Cobersystem - Soluções em Coberturas" 
              width={200}
              height={55}
              className="h-full w-auto max-w-[min(100%,220px)] sm:max-w-none object-contain"
            />
          </Link>
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link href="/" className="text-gray-700 hover:text-[#D4AF37] transition">
                Início
              </Link>
            </li>
            <li>
              <Link href="/sobre" className="text-gray-700 hover:text-[#D4AF37] transition">
                Sobre
              </Link>
            </li>
            <li className="relative group">
              <Link href="/produtos" className="text-gray-700 hover:text-[#D4AF37] transition">
                Produtos
              </Link>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link href="/produtos/cobertura-retratil" className="block px-4 py-3 text-gray-700 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37]">
                  Cobertura Retrátil
                </Link>
                <Link href="/produtos/cobertura-policarbonato" className="block px-4 py-3 text-gray-700 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37]">
                  Cobertura em Policarbonato
                </Link>
                <Link href="/produtos/cobertura-termoacustica" className="block px-4 py-3 text-gray-700 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37]">
                  Cobertura Termoacústica
                </Link>
                <Link href="/produtos/veneziana-policarbonato" className="block px-4 py-3 text-gray-700 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37]">
                  Veneziana em Policarbonato
                </Link>
              </div>
            </li>
            <li>
              <Link href="/cases-sucesso" className="text-gray-700 hover:text-[#D4AF37] transition">
                Cases
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-gray-700 hover:text-[#D4AF37] transition">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-gray-700 hover:text-[#D4AF37] transition">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/contato" className="bg-[#D4AF37] text-black px-4 py-2 rounded-lg hover:bg-[#C9A030] transition font-semibold">
                Orçamento
              </Link>
            </li>
          </ul>
        </div>

        {/* Navegação mobile: mesmos links do desktop (incl. Cases) */}
        <div className="md:hidden border-t border-gray-100 mt-3 pt-3 -mx-4 px-4 overflow-x-auto">
          <ul className="flex flex-nowrap gap-4 pb-1 text-sm">
            <li className="shrink-0">
              <Link href="/" className="text-gray-700 hover:text-[#D4AF37] transition">
                Início
              </Link>
            </li>
            <li className="shrink-0">
              <Link href="/sobre" className="text-gray-700 hover:text-[#D4AF37] transition">
                Sobre
              </Link>
            </li>
            <li className="shrink-0">
              <Link href="/produtos" className="text-gray-700 hover:text-[#D4AF37] transition">
                Produtos
              </Link>
            </li>
            <li className="shrink-0">
              <Link href="/cases-sucesso" className="text-gray-700 hover:text-[#D4AF37] transition">
                Cases
              </Link>
            </li>
            <li className="shrink-0">
              <Link href="/blog" className="text-gray-700 hover:text-[#D4AF37] transition">
                Blog
              </Link>
            </li>
            <li className="shrink-0">
              <Link href="/faq" className="text-gray-700 hover:text-[#D4AF37] transition">
                FAQ
              </Link>
            </li>
            <li className="shrink-0">
              <Link
                href="/contato"
                className="inline-block bg-[#D4AF37] text-black px-3 py-1.5 rounded-lg hover:bg-[#C9A030] transition font-semibold whitespace-nowrap"
              >
                Orçamento
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

