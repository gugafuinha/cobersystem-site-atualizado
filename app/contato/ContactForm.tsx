'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import imageCompression from 'browser-image-compression';
import { trackFormSubmit, trackCTAClick } from '@/components/GoogleAnalytics';
import { trackMetaLead } from '@/components/MetaPixel';
import { trackGoogleAdsConversion } from '@/components/GoogleAds';

type ContactFormProps = {
  onSuccess?: () => void;
};

type CompressionResult = {
  originalName: string;
  originalSize: number;
  compressedSize: number;
  file: File;
  previewUrl: string;
};

const MAX_FILES = 5;
const MAX_ORIGINAL_FILE_SIZE_BYTES = 20 * 1024 * 1024;
const MAX_COMPRESSED_FILE_SIZE_BYTES = 1 * 1024 * 1024;
const MAX_TOTAL_COMPRESSED_BYTES = 5 * 1024 * 1024;
const COMPRESSION_TIMEOUT_MS = 30_000;

const ACCEPTED_INPUT_MIME_TYPES = new Set([
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
  'image/heic',
  'image/heif',
]);

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  const kb = bytes / 1024;
  if (kb < 1024) return `${kb.toFixed(1)} KB`;
  const mb = kb / 1024;
  return `${mb.toFixed(1)} MB`;
}

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const id = setTimeout(() => {
      reject(new Error('COMPRESSION_TIMEOUT'));
    }, ms);

    promise
      .then((value) => {
        clearTimeout(id);
        resolve(value);
      })
      .catch((err) => {
        clearTimeout(id);
        reject(err);
      });
  });
}

function sanitizeBaseName(name: string): string {
  const noExt = name.replace(/\.[^.]+$/, '');
  return (
    noExt
      .normalize('NFKD')
      .replace(/[^\w\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-')
      .toLowerCase()
      .slice(0, 60) || 'foto'
  );
}

export default function ContactForm({ onSuccess }: ContactFormProps) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    tipoProjeto: '',
    mensagem: '',
    website: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompressing, setIsCompressing] = useState(false);
  const [compressionProgressText, setCompressionProgressText] = useState('');
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [compressedPhotos, setCompressedPhotos] = useState<CompressionResult[]>([]);

  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      compressedPhotos.forEach((p) => URL.revokeObjectURL(p.previewUrl));
    };
  }, [compressedPhotos]);

  const totalCompressedBytes = useMemo(
    () => compressedPhotos.reduce((acc, p) => acc + p.compressedSize, 0),
    [compressedPhotos],
  );

  const validateSelectedFiles = (files: File[]): string | null => {
    if (files.length === 0) return null;

    if (files.length > MAX_FILES) {
      return `Maximo de ${MAX_FILES} fotos por envio.`;
    }

    for (let i = 0; i < files.length; i += 1) {
      const file = files[i];
      if (!ACCEPTED_INPUT_MIME_TYPES.has(file.type.toLowerCase())) {
        return `Formato da foto ${i + 1} nao suportado. Use JPG, PNG, WebP ou HEIC/HEIF.`;
      }
      if (file.size > MAX_ORIGINAL_FILE_SIZE_BYTES) {
        return `A foto ${i + 1} excede 20MB antes da compressao.`;
      }
    }

    return null;
  };

  const compressFiles = async (files: File[]) => {
    setIsCompressing(true);
    setCompressionProgressText('');
    setErrorMessage('');

    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
      initialQuality: 0.85,
      fileType: 'image/jpeg',
    };

    try {
      const tasks = files.map(async (file, idx) => {
        setCompressionProgressText(`Comprimindo foto ${idx + 1}/${files.length}...`);

        let compressed: File;
        try {
          compressed = await withTimeout(
            imageCompression(file, options) as Promise<File>,
            COMPRESSION_TIMEOUT_MS,
          );
        } catch (err) {
          if (err instanceof Error && err.message === 'COMPRESSION_TIMEOUT') {
            throw new Error(`Upload esta demorando. Tente fotos menores (foto ${idx + 1}).`);
          }
          throw new Error(`Erro ao processar foto ${idx + 1}. Tente outra foto.`);
        }

        if (compressed.size > MAX_COMPRESSED_FILE_SIZE_BYTES) {
          throw new Error(`Foto ${idx + 1} ainda muito grande apos compressao.`);
        }

        const baseName = sanitizeBaseName(file.name);
        const finalFile = new File([compressed], `${baseName}-${Date.now()}-${idx + 1}.jpg`, {
          type: 'image/jpeg',
        });

        const previewUrl = URL.createObjectURL(finalFile);

        return {
          originalName: file.name,
          originalSize: file.size,
          compressedSize: finalFile.size,
          file: finalFile,
          previewUrl,
        } as CompressionResult;
      });

      const results = await Promise.all(tasks);

      const total = results.reduce((acc, r) => acc + r.compressedSize, 0);
      if (total > MAX_TOTAL_COMPRESSED_BYTES) {
        results.forEach((r) => URL.revokeObjectURL(r.previewUrl));
        throw new Error(`Total das fotos comprimidas excede 5MB (${formatBytes(total)}). Remova algumas fotos.`);
      }

      setCompressedPhotos((prev) => {
        prev.forEach((p) => URL.revokeObjectURL(p.previewUrl));
        return results;
      });

      setCompressionProgressText(`Fotos prontas: ${results.length}/${results.length}`);
    } catch (err) {
      setCompressedPhotos((prev) => {
        prev.forEach((p) => URL.revokeObjectURL(p.previewUrl));
        return [];
      });
      setCompressionProgressText('');
      setErrorMessage(err instanceof Error ? err.message : 'Erro ao comprimir fotos.');
    } finally {
      setIsCompressing(false);
    }
  };

  const handlePhotosChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(e.target.files ?? []);
    setSubmitStatus('idle');
    setErrorMessage('');

    const validationError = validateSelectedFiles(selected);
    if (validationError) {
      setErrorMessage(validationError);
      e.target.value = '';
      return;
    }

    await compressFiles(selected);
  };

  const handleRemovePhoto = (index: number) => {
    setCompressedPhotos((prev) => {
      const item = prev[index];
      if (item) URL.revokeObjectURL(item.previewUrl);
      return prev.filter((_, idx) => idx !== index);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    abortControllerRef.current = new AbortController();

    try {
      const form = new FormData();
      form.append('nome', formData.nome);
      form.append('email', formData.email);
      form.append('telefone', formData.telefone);
      form.append('tipoProjeto', formData.tipoProjeto);
      form.append('mensagem', formData.mensagem);
      form.append('website', formData.website);

      compressedPhotos.forEach((item) => {
        form.append('fotos', item.file);
      });

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: form,
        signal: abortControllerRef.current.signal,
      });

      let data: any = {};
      try {
        data = await response.json();
      } catch {
        data = {};
      }

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          nome: '',
          email: '',
          telefone: '',
          tipoProjeto: '',
          mensagem: '',
          website: '',
        });
        setCompressedPhotos((prev) => {
          prev.forEach((p) => URL.revokeObjectURL(p.previewUrl));
          return [];
        });
        setCompressionProgressText('');

        trackFormSubmit();
        trackMetaLead();
        trackGoogleAdsConversion('form_submit', 0);
        onSuccess?.();
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.error || 'Erro ao enviar. Tente novamente.');
      }
    } catch (error: any) {
      setSubmitStatus('error');
      if (error?.name === 'AbortError') {
        setErrorMessage('Envio cancelado pelo usuario.');
      } else {
        setErrorMessage('Erro ao enviar. Verifique sua conexao.');
      }
    } finally {
      setIsSubmitting(false);
      abortControllerRef.current = null;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitStatus === 'error' && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
          <p className="text-red-700 font-semibold">
            {errorMessage || 'Erro ao enviar. Por favor, tente novamente.'}
          </p>
        </div>
      )}

      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input
          type="text"
          id="contact-website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={formData.website}
          onChange={handleChange}
        />
      </div>

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
          <option value="churrasqueira">Area de Churrasqueira</option>
          <option value="varanda">Varanda de Apartamento</option>
          <option value="pergolado">Pergolado Residencial</option>
          <option value="area-gourmet">Area Gourmet</option>
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
        />
      </div>

      <div>
        <label htmlFor="fotos" className="block text-gray-700 font-semibold mb-2">
          Fotos do Local (opcional)
        </label>
        <p className="text-sm text-gray-600 mb-3">
          Maximo 5 fotos. Aceita JPG, PNG, WebP, HEIC/HEIF (iPhone). Vamos comprimir automaticamente.
        </p>
        <input
          type="file"
          id="fotos"
          name="fotos"
          multiple
          accept="image/jpeg,image/jpg,image/png,image/webp,image/heic,image/heif"
          onChange={handlePhotosChange}
          disabled={isCompressing || isSubmitting}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#D4AF37] file:text-black hover:file:bg-[#C9A030] file:cursor-pointer disabled:opacity-60"
        />

        {isCompressing && (
          <p className="text-sm text-blue-700 mt-2 font-medium">
            Comprimindo fotos... {compressionProgressText}
          </p>
        )}

        {!isCompressing && compressionProgressText && (
          <p className="text-sm text-green-700 mt-2 font-medium">{compressionProgressText}</p>
        )}

        {compressedPhotos.length > 0 && (
          <div className="mt-4 space-y-3">
            <p className="text-sm text-gray-700 font-semibold">
              Fotos prontas ({compressedPhotos.length}) - Total: {formatBytes(totalCompressedBytes)}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {compressedPhotos.map((photo, idx) => (
                <div key={`${photo.originalName}-${idx}`} className="border rounded-lg p-3 bg-gray-50">
                  <img
                    src={photo.previewUrl}
                    alt={`Preview ${idx + 1}`}
                    className="w-full h-32 object-cover rounded-md mb-2"
                  />
                  <p className="text-xs text-gray-700 break-all">{photo.originalName}</p>
                  <p className="text-xs text-gray-600">
                    {formatBytes(photo.originalSize)} → {formatBytes(photo.compressedSize)}
                  </p>
                  <button
                    type="button"
                    onClick={() => handleRemovePhoto(idx)}
                    className="mt-2 text-xs text-red-600 hover:text-red-700 font-semibold"
                  >
                    Remover foto
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting || isCompressing}
        onClick={() => trackCTAClick('Formulario de Contato')}
        className="w-full bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#C9A030] transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Enviando...' : 'Enviar Solicitacao'}
      </button>
    </form>
  );
}
