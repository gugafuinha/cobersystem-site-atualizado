#!/usr/bin/env node
/**
 * Script para gerar/otimizar alt text de todas as imagens
 * Padrão: "cobertura-[tipo]-[ambiente]-[detalhe]-[local]-cobersystem"
 */

const fs = require('fs');
const path = require('path');

// Mapeamento inteligente baseado em nome do arquivo
const patterns = {
  // Tipos de cobertura
  'retratil|retract': 'cobertura-retratil',
  'fixa|fixed': 'cobertura-fixa',
  'abre-fecha|abre_fecha': 'cobertura-abre-e-fecha',
  
  // Materiais
  'policarbonato|compacto|alveolar': 'policarbonato',
  'aluminio|aluminum': 'estrutura-aluminio',
  
  // Ambientes
  'area-gourmet|gourmet': 'area-gourmet',
  'churrasqueira|churrasco|barbecue': 'churrasqueira',
  'piscina|pool': 'piscina',
  'varanda|sacada': 'varanda',
  'apartamento|apto|apartment': 'apartamento',
  'pergolado|pergola': 'pergolado',
  'quintal|jardim|garden': 'quintal',
  
  // Características
  'aberta|open': 'aberta',
  'fechada|closed|fechado': 'fechada',
  'automatica|automation': 'automatizada',
  
  // Locais
  'sao-paulo|sp|sampa': 'sao-paulo',
  'abc|santo-andre|sao-bernardo': 'abc-paulista',
  'guarulhos': 'guarulhos'
};

function analyzeFilename(filename) {
  const lower = filename.toLowerCase();
  const found = {
    tipo: '',
    material: '',
    ambiente: '',
    caracteristica: '',
    local: ''
  };
  
  // Detectar padrões
  for (const [pattern, value] of Object.entries(patterns)) {
    const regex = new RegExp(pattern, 'i');
    if (regex.test(lower)) {
      if (value.includes('cobertura-')) found.tipo = value;
      else if (value.includes('aluminio')) found.material = value;
      else if (['area-gourmet', 'churrasqueira', 'piscina', 'varanda', 'apartamento', 'pergolado', 'quintal'].includes(value)) {
        found.ambiente = value;
      } else if (['aberta', 'fechada', 'automatizada'].includes(value)) {
        found.caracteristica = value;
      } else if (['sao-paulo', 'abc-paulista', 'guarulhos'].includes(value)) {
        found.local = value;
      }
    }
  }
  
  return found;
}

function generateAltText(filename) {
  const analysis = analyzeFilename(filename);
  
  // Montar alt text descritivo e SEO-friendly
  const parts = [];
  
  if (analysis.tipo) parts.push(analysis.tipo);
  if (analysis.material) parts.push('em ' + analysis.material);
  if (analysis.ambiente) parts.push('para ' + analysis.ambiente);
  if (analysis.caracteristica) parts.push(analysis.caracteristica);
  if (analysis.local) parts.push('em ' + analysis.local);
  
  parts.push('cobersystem');
  
  const altText = parts.join(' ');
  
  // Capitalizar primeira letra
  return altText.charAt(0).toUpperCase() + altText.slice(1);
}

function generateOptimizedFilename(originalFilename) {
  const analysis = analyzeFilename(originalFilename);
  const ext = path.extname(originalFilename);
  
  const parts = [];
  if (analysis.tipo) parts.push(analysis.tipo.replace('cobertura-', ''));
  if (analysis.ambiente) parts.push(analysis.ambiente);
  if (analysis.material) parts.push(analysis.material);
  if (analysis.local) parts.push(analysis.local);
  
  // Adicionar número do arquivo original se tiver
  const numberMatch = originalFilename.match(/\d+/);
  if (numberMatch) parts.push(numberMatch[0]);
  
  return parts.join('-') + ext.toLowerCase();
}

// Processar todas as imagens
const imagesDir = path.join(__dirname, '../public/images/projetos');

console.log('🔍 Analisando imagens em:', imagesDir);
console.log('');

if (!fs.existsSync(imagesDir)) {
  console.error('❌ Diretório não encontrado:', imagesDir);
  process.exit(1);
}

const files = fs.readdirSync(imagesDir);
const imageFiles = files.filter(f => /\.(jpg|jpeg|png|webp|gif)$/i.test(f));

console.log(`📸 Encontradas ${imageFiles.length} imagens`);
console.log('');

// Gerar relatório
const report = imageFiles.map(file => {
  const altText = generateAltText(file);
  const optimizedName = generateOptimizedFilename(file);
  
  return {
    original: file,
    optimizedName,
    altText
  };
});

// Salvar relatório
const reportPath = path.join(__dirname, 'alt-text-report.json');
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

console.log('✅ Relatório gerado:', reportPath);
console.log('');
console.log('📋 Exemplos:');
console.log('');

report.slice(0, 5).forEach(item => {
  console.log(`Arquivo: ${item.original}`);
  console.log(`Nome otimizado: ${item.optimizedName}`);
  console.log(`Alt text: "${item.altText}"`);
  console.log('');
});

console.log(`🎉 Total: ${report.length} imagens processadas`);
console.log('');
console.log('💡 Para aplicar as mudanças:');
console.log('   1. Revise o relatório em scripts/alt-text-report.json');
console.log('   2. Renomeie os arquivos conforme sugerido');
console.log('   3. Atualize os componentes React com os novos alt texts');
