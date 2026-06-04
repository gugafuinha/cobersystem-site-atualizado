'use client';

import { useEffect, useState } from 'react';

export default function CoberturaAnimation() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsOpen((prev) => !prev);
    }, 3000); // Alterna a cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-64 flex items-center justify-center">
      <svg 
        width="500" 
        height="300" 
        viewBox="0 0 500 300" 
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Fundo do céu */}
        <defs>
          <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        <rect width="500" height="300" fill="url(#skyGradient)"/>
        
        {/* Estrutura de cobertura */}
        <g stroke="#D4AF37" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round">
          {/* Estrutura principal (triângulo) */}
          <path d="M 50 200 L 250 120 L 450 200" strokeWidth="5"/>
          
          {/* Colunas laterais */}
          <line x1="50" y1="200" x2="50" y2="250" strokeWidth="5"/>
          <line x1="450" y1="200" x2="450" y2="250" strokeWidth="5"/>
          <line x1="50" y1="250" x2="450" y2="250" strokeWidth="5"/>
        </g>
        
        {/* Lâminas retráteis - animação */}
        {Array.from({ length: 10 }).map((_, i) => {
          const x = 70 + (i * 35);
          const centerY = 160;
          const angle = isOpen ? 45 : 0; // 45 graus quando aberto, 0 quando fechado
          const length = 25;
          
          // Posição da lâmina
          const startX = x;
          const startY = centerY - (i * 2);
          const endX = startX + Math.cos(angle * Math.PI / 180) * length;
          const endY = startY + Math.sin(angle * Math.PI / 180) * length;
          
          return (
            <g key={i}>
              <line 
                x1={startX} 
                y1={startY} 
                x2={endX} 
                y2={endY} 
                stroke="#D4AF37"
                strokeWidth="3"
                style={{ 
                  transition: 'all 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  transformOrigin: `${startX}px ${startY}px`
                }}
              />
              {/* Detalhe da lâmina */}
              <circle 
                cx={startX} 
                cy={startY} 
                r="2" 
                fill="#D4AF37"
              />
            </g>
          );
        })}
        
        {/* Texto indicativo */}
        <text 
          x="250" 
          y="280" 
          textAnchor="middle" 
          fill="#D4AF37" 
          fontSize="18" 
          fontWeight="bold"
          style={{ transition: 'opacity 0.5s' }}
        >
          {isOpen ? '✓ Aberto - Ventilação Total' : '✓ Fechado - Proteção Total'}
        </text>
      </svg>
    </div>
  );
}

