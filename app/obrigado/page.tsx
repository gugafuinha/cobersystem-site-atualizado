import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Solicitação Enviada | Cobersystem',
  description: 'Sua solicitação de orçamento foi enviada com sucesso. Em breve nossa equipe entrará em contato.',
  alternates: {
    canonical: 'https://www.coberturapolicarbonato.com.br/obrigado',
  },
  robots: {
    index: false,
    follow: false,
  },
};

const WHATSAPP_NUMBER = '5511943615079';
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Olá! Acabei de enviar um orçamento pelo site e gostaria de mais informações.',
);

export default function ObrigadoPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center py-16 px-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-10 text-center">

        {/* Ícone de confirmação */}
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Título */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Solicitação enviada!
        </h1>

        {/* Mensagem */}
        <p className="text-lg text-gray-600 mb-3 leading-relaxed">
          O WhatsApp foi aberto com sua mensagem pré-preenchida.
        </p>
        <p className="text-gray-500 mb-8 leading-relaxed">
          Nossa equipe retorna em até <strong className="text-gray-700">24 horas</strong> com o orçamento 
          personalizado para o seu projeto.
        </p>

        {/* Caso o WhatsApp não tenha aberto */}
        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <p className="text-sm text-gray-500 mb-4">
            O WhatsApp não abriu automaticamente?
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition shadow-md"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Abrir WhatsApp agora
          </a>
        </div>

        {/* O que acontece agora */}
        <div className="text-left bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-xl p-6 mb-8">
          <h2 className="font-bold text-gray-800 mb-4 text-lg">O que acontece agora?</h2>
          <ol className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-[#D4AF37] text-black text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">1</span>
              <span>Nossa equipe analisa seu projeto e prepara um orçamento personalizado</span>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-[#D4AF37] text-black text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">2</span>
              <span>Entramos em contato em até 24 horas pelo WhatsApp informado</span>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-[#D4AF37] text-black text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">3</span>
              <span>Agendamos uma visita técnica gratuita e sem compromisso</span>
            </li>
          </ol>
        </div>

        {/* Voltar */}
        <Link
          href="/"
          className="inline-block text-gray-500 hover:text-gray-700 text-sm underline underline-offset-4 transition"
        >
          ← Voltar para o início
        </Link>
      </div>
    </main>
  );
}
