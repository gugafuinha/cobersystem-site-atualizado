/**
 * Google Ads Script — Cobersystem (Expandido)
 * Conta: 493-659-6693
 * Campanha: "Cobersystem - Leads SP"
 * Planilha: 1hS72XUkP40RF7O9Y6JOIGUlfZSf5WAHR5Fo400QqAyU
 * Aba: API n8n
 *
 * Coleta:
 *   - Dados gerais da campanha
 *   - Dados por palavra-chave (custo, cliques, impressões, CTR, posição, quality score)
 *   - Páginas de destino dos anúncios
 *   - Segmentação demográfica: dispositivo e localização (top 10)
 *
 * Formato na planilha (compatível com n8n):
 *   A1: key        B1: value
 *   A2: json_data  B2: <JSON expandido>
 *   A3: updated_at B3: <timestamp>
 */

var SPREADSHEET_ID = '1hS72XUkP40RF7O9Y6JOIGUlfZSf5WAHR5Fo400QqAyU';
var SHEET_NAME = 'API n8n';
var CAMPAIGN_NAME = 'Cobersystem - Leads SP';
var LOOKBACK_DAYS = 7;

function main() {
  var dateRange = buildDateRange(LOOKBACK_DAYS);
  var spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  var sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  var result = {
    period: { start: dateRange.start, end: dateRange.end },
    campaign: getCampaignData(dateRange),
    keywords: getKeywordData(dateRange),
    landing_pages: getLandingPageData(dateRange),
    demographics: getDemographicData(dateRange),
    generated_at: new Date().toISOString()
  };

  // Escrever cabeçalho + dados na planilha
  sheet.getRange('A1:B1').setValues([['key', 'value']]);
  sheet.getRange('A2:B2').setValues([['json_data', JSON.stringify(result)]]);
  sheet.getRange('A3:B3').setValues([['updated_at', new Date().toISOString()]]);

  Logger.log('Script concluído. Período: ' + dateRange.start + ' a ' + dateRange.end);
  Logger.log('Campanhas processadas: ' + (result.campaign.name || 'N/A'));
  Logger.log('Keywords coletadas: ' + result.keywords.length);
  Logger.log('Landing pages coletadas: ' + result.landing_pages.length);
}

// ─────────────────────────────────────────────
// CAMPANHA — dados gerais
// ─────────────────────────────────────────────
function getCampaignData(dateRange) {
  var campaign = { name: '', impressions: 0, clicks: 0, ctr: '0.00', costBRL: '0.00', avgCPC: '0.00', conversions: '0.0', conversionRate: '0.00', costPerConversion: '0.00' };

  var iter = AdsApp.campaigns()
    .withCondition('campaign.name = "' + CAMPAIGN_NAME + '"')
    .withCondition('campaign.status = ENABLED')
    .get();

  if (!iter.hasNext()) {
    Logger.log('AVISO: campanha "' + CAMPAIGN_NAME + '" não encontrada.');
    return campaign;
  }

  var c = iter.next();
  var stats = c.getStatsFor(dateRange.start, dateRange.end);

  var impressions = stats.getImpressions();
  var clicks = stats.getClicks();
  var costMicros = stats.getCost();
  var conversions = stats.getConversions();
  var ctr = impressions > 0 ? ((clicks / impressions) * 100).toFixed(2) : '0.00';
  var avgCPC = clicks > 0 ? (costMicros / clicks).toFixed(2) : '0.00';
  var convRate = clicks > 0 ? ((conversions / clicks) * 100).toFixed(2) : '0.00';
  var costPerConv = conversions > 0 ? (costMicros / conversions).toFixed(2) : '0.00';

  return {
    name: c.getName(),
    status: c.isEnabled() ? 'ATIVA' : 'PAUSADA',
    impressions: impressions,
    clicks: clicks,
    ctr: ctr,
    costBRL: costMicros.toFixed(2),
    avgCPC: avgCPC,
    conversions: conversions.toFixed(1),
    conversionRate: convRate,
    costPerConversion: costPerConv
  };
}

// ─────────────────────────────────────────────
// PALAVRAS-CHAVE — top 20 por cliques
// ─────────────────────────────────────────────
function getKeywordData(dateRange) {
  var keywords = [];

  var kwIter = AdsApp.keywords()
    .withCondition('campaign.name = "' + CAMPAIGN_NAME + '"')
    .withCondition('metrics.clicks > 0')
    .orderBy('metrics.clicks DESC')
    .withLimit(20)
    .get();

  while (kwIter.hasNext()) {
    var kw = kwIter.next();
    var stats = kw.getStatsFor(dateRange.start, dateRange.end);
    var qs = kw.getQualityScore();

    var impressions = stats.getImpressions();
    var clicks = stats.getClicks();
    var cost = stats.getCost();
    var ctr = impressions > 0 ? ((clicks / impressions) * 100).toFixed(2) : '0.00';
    var avgPos = stats.getAverageCpc ? null : null; // posição via SearchImpressionShare

    keywords.push({
      text: kw.getText(),
      matchType: kw.getMatchType(),
      status: kw.isEnabled() ? 'ATIVA' : 'PAUSADA',
      impressions: impressions,
      clicks: clicks,
      ctr: ctr,
      costBRL: cost.toFixed(2),
      avgCPC: clicks > 0 ? (cost / clicks).toFixed(2) : '0.00',
      qualityScore: qs || 'N/D',
      conversions: stats.getConversions().toFixed(1)
    });
  }

  // Incluir também keywords com 0 cliques mas com impressões (para identificar problemas de CTR)
  var noClickIter = AdsApp.keywords()
    .withCondition('campaign.name = "' + CAMPAIGN_NAME + '"')
    .withCondition('metrics.clicks = 0')
    .withCondition('metrics.impressions > 10')
    .orderBy('metrics.impressions DESC')
    .withLimit(10)
    .get();

  while (noClickIter.hasNext()) {
    var kw2 = noClickIter.next();
    var stats2 = kw2.getStatsFor(dateRange.start, dateRange.end);
    keywords.push({
      text: kw2.getText(),
      matchType: kw2.getMatchType(),
      status: kw2.isEnabled() ? 'ATIVA' : 'PAUSADA',
      impressions: stats2.getImpressions(),
      clicks: 0,
      ctr: '0.00',
      costBRL: '0.00',
      avgCPC: '0.00',
      qualityScore: kw2.getQualityScore() || 'N/D',
      conversions: '0.0',
      flag: 'ALTO_IMPRESSAO_ZERO_CLIQUE'
    });
  }

  return keywords;
}

// ─────────────────────────────────────────────
// PÁGINAS DE DESTINO — top 10 por cliques
// ─────────────────────────────────────────────
function getLandingPageData(dateRange) {
  var landingPages = [];
  var seen = {};

  var adIter = AdsApp.ads()
    .withCondition('campaign.name = "' + CAMPAIGN_NAME + '"')
    .withCondition('ad_group_ad.status = ENABLED')
    .get();

  while (adIter.hasNext()) {
    var ad = adIter.next();
    var stats = ad.getStatsFor(dateRange.start, dateRange.end);
    var url = '';

    try {
      url = ad.urls().getFinalUrl() || 'N/D';
    } catch(e) {
      url = 'N/D';
    }

    if (seen[url]) {
      seen[url].impressions += stats.getImpressions();
      seen[url].clicks += stats.getClicks();
      seen[url].costBRL += stats.getCost();
      seen[url].conversions += stats.getConversions();
    } else {
      seen[url] = {
        url: url,
        adGroup: ad.getAdGroup().getName(),
        impressions: stats.getImpressions(),
        clicks: stats.getClicks(),
        costBRL: stats.getCost(),
        conversions: stats.getConversions()
      };
    }
  }

  for (var u in seen) {
    var d = seen[u];
    landingPages.push({
      url: d.url,
      adGroup: d.adGroup,
      impressions: d.impressions,
      clicks: d.clicks,
      ctr: d.impressions > 0 ? ((d.clicks / d.impressions) * 100).toFixed(2) : '0.00',
      costBRL: d.costBRL.toFixed(2),
      avgCPC: d.clicks > 0 ? (d.costBRL / d.clicks).toFixed(2) : '0.00',
      conversions: d.conversions.toFixed(1)
    });
  }

  // Ordenar por cliques desc
  landingPages.sort(function(a, b) { return parseInt(b.clicks) - parseInt(a.clicks); });
  return landingPages.slice(0, 10);
}

// ─────────────────────────────────────────────
// DEMOGRAFIA — dispositivo e localização (top 10)
// ─────────────────────────────────────────────
function getDemographicData(dateRange) {
  var devices = {};
  var locations = {};

  // Dispositivos
  var deviceTypes = ['MOBILE', 'DESKTOP', 'TABLET'];
  for (var i = 0; i < deviceTypes.length; i++) {
    var device = deviceTypes[i];
    try {
      var dIter = AdsApp.campaigns()
        .withCondition('campaign.name = "' + CAMPAIGN_NAME + '"')
        .get();

      if (dIter.hasNext()) {
        var camp = dIter.next();
        var dStats = camp.getStatsFor(dateRange.start, dateRange.end);
        // Nota: segmentação por dispositivo requer queries GAQL avançadas
        // Retornar flag para análise futura
      }
    } catch(e) { }
  }

  // Segmentação de dispositivo via GAQL
  try {
    var query = 'SELECT segments.device, metrics.impressions, metrics.clicks, metrics.cost_micros, metrics.conversions ' +
      'FROM campaign ' +
      'WHERE campaign.name = "' + CAMPAIGN_NAME + '" ' +
      'AND segments.date BETWEEN "' + dateRange.gaql_start + '" AND "' + dateRange.gaql_end + '"';

    var report = AdsApp.search(query);
    while (report.hasNext()) {
      var row = report.next();
      var dev = row['segments.device'] || 'UNKNOWN';
      var imps = parseInt(row['metrics.impressions'] || 0);
      var clks = parseInt(row['metrics.clicks'] || 0);
      var cost = parseInt(row['metrics.cost_micros'] || 0) / 1000000;
      var convs = parseFloat(row['metrics.conversions'] || 0);

      if (!devices[dev]) {
        devices[dev] = { device: dev, impressions: 0, clicks: 0, costBRL: 0, conversions: 0 };
      }
      devices[dev].impressions += imps;
      devices[dev].clicks += clks;
      devices[dev].costBRL += cost;
      devices[dev].conversions += convs;
    }
  } catch(e) {
    Logger.log('AVISO segmentação dispositivo: ' + e.message);
  }

  // Segmentação por localização (top 10 por cliques)
  try {
    var locQuery = 'SELECT geographic_view.country_criterion_id, metrics.impressions, metrics.clicks, metrics.cost_micros, metrics.conversions, geographic_view.location_type ' +
      'FROM geographic_view ' +
      'WHERE campaign.name = "' + CAMPAIGN_NAME + '" ' +
      'AND segments.date BETWEEN "' + dateRange.gaql_start + '" AND "' + dateRange.gaql_end + '" ' +
      'ORDER BY metrics.clicks DESC ' +
      'LIMIT 10';

    var locReport = AdsApp.search(locQuery);
    while (locReport.hasNext()) {
      var locRow = locReport.next();
      var locId = locRow['geographic_view.country_criterion_id'] || 'unknown';
      locations[locId] = {
        location_id: locId,
        location_type: locRow['geographic_view.location_type'] || 'N/D',
        impressions: parseInt(locRow['metrics.impressions'] || 0),
        clicks: parseInt(locRow['metrics.clicks'] || 0),
        costBRL: (parseInt(locRow['metrics.cost_micros'] || 0) / 1000000).toFixed(2),
        conversions: parseFloat(locRow['metrics.conversions'] || 0).toFixed(1)
      };
    }
  } catch(e) {
    Logger.log('AVISO segmentação localização: ' + e.message);
  }

  var deviceArr = Object.values(devices).map(function(d) {
    return {
      device: d.device,
      impressions: d.impressions,
      clicks: d.clicks,
      ctr: d.impressions > 0 ? ((d.clicks / d.impressions) * 100).toFixed(2) : '0.00',
      costBRL: d.costBRL.toFixed(2),
      avgCPC: d.clicks > 0 ? (d.costBRL / d.clicks).toFixed(2) : '0.00',
      conversions: d.conversions.toFixed(1)
    };
  }).sort(function(a, b) { return parseInt(b.clicks) - parseInt(a.clicks); });

  var locationArr = Object.values(locations);

  return { by_device: deviceArr, by_location: locationArr };
}

// ─────────────────────────────────────────────
// UTILITÁRIOS
// ─────────────────────────────────────────────
function buildDateRange(days) {
  var end = new Date();
  end.setDate(end.getDate() - 1); // ontem
  var start = new Date(end);
  start.setDate(start.getDate() - (days - 1));

  function fmt(d) {
    return d.getFullYear() + '-' +
      ('0' + (d.getMonth() + 1)).slice(-2) + '-' +
      ('0' + d.getDate()).slice(-2);
  }
  function fmtDisplay(d) {
    return ('0' + d.getDate()).slice(-2) + '/' + ('0' + (d.getMonth() + 1)).slice(-2);
  }

  return {
    start: fmtDisplay(start),
    end: fmtDisplay(end) + '/' + end.getFullYear(),
    gaql_start: fmt(start),
    gaql_end: fmt(end)
  };
}
