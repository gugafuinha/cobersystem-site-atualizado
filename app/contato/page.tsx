'use client';

import { useState } from 'react';
import ContactForm from './ContactForm';

export default function Contato() {
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleNewBudget = () => {
    setSubmitSuccess(false);
  };

  if (submitSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 px-4 py-12">
        <div className="max-w-md w-full text-center">
          <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">Orcamento Enviado!</h1>
          <p className="text-lg text-gray-600 mb-8">Entraremos em contato em breve.</p>

          <button
            onClick={handleNewBudget}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Enviar Novo Orcamento
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <section className="mb-16 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Entre em Contato</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Solicite um orcamento gratuito e sem compromisso. Nossa equipe esta pronta
            para ajudar voce a encontrar a melhor solucao em cobertura retratil.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Solicite seu Orcamento</h2>
            <ContactForm onSuccess={() => setSubmitSuccess(true)} />
          </section>

          <section className="space-y-8">
            <div className="bg-blue-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Por que escolher a Cobersystem?</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><span className="text-blue-600 mr-2">-</span><span>Orcamento gratuito e sem compromisso</span></li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">-</span><span>Atendimento personalizado</span></li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">-</span><span>Materiais de primeira linha</span></li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">-</span><span>Instalacao profissional</span></li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">-</span><span>Automacao inteligente (Alexa + Sensor de Chuva)</span></li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Informacoes de Contato</h3>
              <div className="space-y-4 text-gray-700">
                <p><strong>E-mail:</strong><br /><a href="mailto:vendas@cobersystem.com.br" className="text-blue-600 hover:underline">vendas@cobersystem.com.br</a></p>
                <p><strong>WhatsApp:</strong><br /><a href="https://wa.me/5511943615079" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">(11) 94361-5079</a></p>
                <p><strong>Instagram:</strong><br /><a href="https://www.instagram.com/cobersystem?igsh=cXlvaHBsdjZoc2d4" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline">@cobersystem</a></p>
                <p><strong>CNPJ:</strong> 61.813.532/0001-32</p>
                <p><strong>Horario de Atendimento:</strong><br />Segunda a Sexta: 8h as 18h<br />Sabado: 8h as 12h</p>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Resposta Rapida</h3>
              <p className="text-gray-700">Respondemos todas as solicitacoes de orcamento em ate 24 horas!</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
