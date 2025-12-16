// Test script to validate calculator logic with real data
const VALOR_TURNO_NORMAL = 21456.01;
const VALOR_TURNO_ESPECIAL = 27892.82;

const FERIADOS = {
  2025: [
    '2025-01-01', '2025-04-18', '2025-04-21', '2025-05-01',
    '2025-09-07', '2025-10-12', '2025-11-02', '2025-11-15',
    '2025-11-20', '2025-12-25'
  ]
};

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function analisarMes(year, month) {
  const totalDias = getDaysInMonth(year, month);
  let sabados = 0;
  let domingos = 0;
  let feriadosUteis = 0;
  let diasUteis = 0;

  for (let dia = 1; dia <= totalDias; dia++) {
    const data = new Date(year, month, dia);
    const diaSemana = data.getDay();
    const dataStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(dia).padStart(2, '0')}`;

    const isSabado = diaSemana === 6;
    const isDomingo = diaSemana === 0;
    const isFeriado = FERIADOS[year]?.includes(dataStr);

    if (isSabado) sabados++;
    if (isDomingo) domingos++;

    if (!isSabado && !isDomingo) {
      diasUteis++;
      if (isFeriado) feriadosUteis++;
    }
  }

  const turnosNormais = diasUteis - feriadosUteis;
  const turnosEspeciais = diasUteis + (sabados + domingos) * 2 + feriadosUteis;

  return {
    sabados,
    domingos,
    feriadosUteis,
    diasUteis,
    turnosNormais,
    turnosEspeciais
  };
}

console.log('🧪 TESTE DA CALCULADORA DE ORÇAMENTO DE PLANTÕES\n');
console.log('Valores médios calculados (ago-out 2025):');
console.log(`  Turno Normal: R$ ${VALOR_TURNO_NORMAL.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`);
console.log(`  Turno Especial: R$ ${VALOR_TURNO_ESPECIAL.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}\n`);

// Real values from user
const realData = [
  { month: 7, name: 'Agosto 2025', real: 1597790.49 },
  { month: 8, name: 'Setembro 2025', real: 1536223.29 },
  { month: 9, name: 'Outubro 2025', real: 1573327.41 }
];

console.log('═'.repeat(80));
console.log('VALIDAÇÃO COM DADOS REAIS (ago-out 2025):\n');

let totalReal = 0;
let totalCalculated = 0;

realData.forEach(({ month, name, real }) => {
  const analise = analisarMes(2025, month);
  const calculated = analise.turnosNormais * VALOR_TURNO_NORMAL +
                     analise.turnosEspeciais * VALOR_TURNO_ESPECIAL;
  const error = ((calculated / real) - 1) * 100;

  totalReal += real;
  totalCalculated += calculated;

  console.log(`📅 ${name}`);
  console.log(`  Composição: ${analise.sabados} sáb, ${analise.domingos} dom, ${analise.feriadosUteis} feriados, ${analise.diasUteis} dias úteis`);
  console.log(`  Turnos: ${analise.turnosNormais} normais + ${analise.turnosEspeciais} especiais`);
  console.log(`  Valor Real:      R$ ${real.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`);
  console.log(`  Valor Calculado: R$ ${calculated.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`);
  console.log(`  Erro: ${error > 0 ? '+' : ''}${error.toFixed(2)}%\n`);
});

const totalError = ((totalCalculated / totalReal) - 1) * 100;
console.log('═'.repeat(80));
console.log('TOTAL DO PERÍODO:');
console.log(`  Real:      R$ ${totalReal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`);
console.log(`  Calculado: R$ ${totalCalculated.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`);
console.log(`  Erro Total: ${totalError > 0 ? '+' : ''}${totalError.toFixed(2)}%\n`);

console.log('═'.repeat(80));
console.log('PROJEÇÃO PARA 2025-2026 (usando rubrica média de R$ 1.569.113,73):\n');

const valorRubricaMedia = (1597790.49 + 1536223.29 + 1573327.41) / 3;

// Test projection for Jan-Dec 2025
const meses2025 = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

let valores = [];
for (let mes = 0; mes < 12; mes++) {
  const analise = analisarMes(2025, mes);
  const valor = analise.turnosNormais * VALOR_TURNO_NORMAL +
                analise.turnosEspeciais * VALOR_TURNO_ESPECIAL;
  const variacao = ((valor / valorRubricaMedia) - 1) * 100;
  valores.push(valor);

  console.log(`${meses2025[mes].padEnd(12)} | R$ ${valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 }).padEnd(18)} | ${variacao > 0 ? '+' : ''}${variacao.toFixed(2)}%`);
}

const max = Math.max(...valores);
const min = Math.min(...valores);
const media = valores.reduce((a, b) => a + b, 0) / valores.length;

console.log('\n' + '═'.repeat(80));
console.log('ESTATÍSTICAS 2025:');
console.log(`  Máximo: R$ ${max.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`);
console.log(`  Mínimo: R$ ${min.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`);
console.log(`  Média:  R$ ${media.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`);
console.log(`  Amplitude: ${((max / min - 1) * 100).toFixed(2)}%`);
console.log('═'.repeat(80));
