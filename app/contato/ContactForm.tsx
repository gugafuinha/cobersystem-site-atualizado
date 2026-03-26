'use client';

import { useState } from 'react';
import { trackFormSubmit, trackCTAClick } from '@/components/GoogleAnalytics';
import { trackMetaLead } from '@/components/MetaPixel';
import { trackGoogleAdsConversion } from '@/components/GoogleAds';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    tipoProjeto: '',
    mensagem: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ nome: '', email: '', telefone: '', tipoProjeto: '', mensagem: '' });
        
        // Track eventos
        trackFormSubmit();
        trackMetaLead();
        trackGoogleAdsConversion('form_submit', 0);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitStatus === 'success' && (
        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
          <p className="text-green-700 font-semibold">
            ✓ Orçamento enviado com sucesso! Entraremos em contato em breve.
          </p>
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
          <p className="text-red-700 font-semibold">
            Erro ao enviar. Por favor, tente novamente ou entre em contato via WhatsApp.
          </p>
        </div>
      )}

      <div>
        <label htmlFor="nome" className="block text-gray-700 font-semibold mb-2">
          Nome Completo *
        </label>
        <input
          type="text"
          id="nome"
          name="nome"
          required
          value={formData.nome}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
          placeholder="Seu nome completo"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
          E-mail *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
          placeholder="seu@email.com"
        />
      </div>
      
      <div>
        <label htmlFor="telefone" className="block text-gray-700 font-semibold mb-2">
          Telefone/WhatsApp *
        </label>
        <input
          type="tel"
          id="telefone"
          name="telefone"
          required
          value={formData.telefone}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
          placeholder="(11) 99999-9999"
        />
      </div>
      
      <div>
        <label htmlFor="tipo-projeto" className="block text-gray-700 font-semibold mb-2">
          Tipo de Projeto *
        </label>
        <select
          id="tipo-projeto"
          name="tipoProjeto"
          required
          value={formData.tipoProjeto}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
        >
          <option value="">Selecione...</option>
          <option value="churrasqueira">Área de Churrasqueira</option>
          <option value="varanda">Varanda de Apartamento</option>
          <option value="pergolado">Pergolado Residencial</option>
          <option value="area-gourmet">Área Gourmet</option>
          <option value="piscina">Cobertura para Piscina</option>
          <option value="garagem">Cobertura para Garagem</option>
          <option value="outro">Outro</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="mensagem" className="block text-gray-700 font-semibold mb-2">
          Mensagem
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={5}
          value={formData.mensagem}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
          placeholder="Conte-nos mais sobre seu projeto..."
        ></textarea>
      </div>
      
      <div>
        <label htmlFor="fotos" className="block text-gray-700 font-semibold mb-2">
          Fotos do Local (opcional)
        </label>
        <p className="text-sm text-gray-600 mb-3">
          📸 Se tiver fotos do local, isso nos ajuda a fazer um orçamento prévio mais preciso!
        </p>
        <input
          type="file"
          id="fotos"
          name="fotos"
          multiple
          accept="image/*"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#D4AF37] file:text-black hover:file:bg-[#C9A030] file:cursor-pointer"
        />
        <p className="text-xs text-gray-500 mt-2">
          Você pode enviar várias fotos. Formatos aceitos: JPG, PNG, HEIC
        </p>
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        onClick={() => trackCTAClick('Formulário de Contato')}
        className="w-full bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#C9A030] transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Enviando...' : 'Enviar Solicitação'}
      </button>
    </form>
  );
}

