import type { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: "Contato e Orçamento | Cobertura Retrátil | Cobersystem",
  description: "Solicite seu orçamento gratuito para cobertura retrátil em policarbonato. Entre em contato com a Cobersystem e transforme seu espaço externo.",
  keywords: "orçamento cobertura retrátil, contato cobersystem, cobertura policarbonato preço, solicitar orçamento",
};

export default function Contato() {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <section className="mb-16 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Entre em Contato
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Solicite um orçamento gratuito e sem compromisso. Nossa equipe está pronta 
            para ajudar você a encontrar a melhor solução em cobertura retrátil.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formulário */}
          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Solicite seu Orçamento
            </h2>
            <ContactForm />
          </section>

          {/* Informações */}
          <section className="space-y-8">
            <div className="bg-blue-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Por que escolher a Cobersystem?
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Orçamento gratuito e sem compromisso</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Atendimento personalizado</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Materiais de primeira linha</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Instalação profissional</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Automação inteligente (Alexa + Sensor de Chuva)</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Informações de Contato
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>E-mail:</strong><br />
                  <a href="mailto:vendas@cobersystem.com.br" className="text-blue-600 hover:underline">
                    vendas@cobersystem.com.br
                  </a>
                </p>
                <p>
                  <strong>WhatsApp:</strong><br />
                  <a href="https://wa.me/5511943615079" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">
                    (11) 94361-5079
                  </a>
                </p>
                <p>
                  <strong>Instagram:</strong><br />
                  <a href="https://www.instagram.com/cobersystem?igsh=cXlvaHBsdjZoc2d4" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline">
                    @cobersystem
                  </a>
                </p>
                <p>
                  <strong>CNPJ:</strong> 61.813.532/0001-32
                </p>
                <p>
                  <strong>Horário de Atendimento:</strong><br />
                  Segunda a Sexta: 8h às 18h<br />
                  Sábado: 8h às 12h
                </p>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                ⚡ Resposta Rápida
              </h3>
              <p className="text-gray-700">
                Respondemos todas as solicitações de orçamento em até 24 horas!
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

